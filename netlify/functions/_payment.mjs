const JSON_HEADERS = {
  "Content-Type": "application/json; charset=utf-8",
  "Cache-Control": "no-store",
  "X-Content-Type-Options": "nosniff"
};

const SUPABASE_BASE = "https://pemxrfxzkprahhwuhqsi.supabase.co";
const SUPABASE_ANON = "sb_publishable_9PSDP08GzyMYd4kXVn3bCw_Iwfdw7-w";

export function json(status, body) {
  return new Response(JSON.stringify(body), { status, headers: JSON_HEADERS });
}

export function requiredEnv(name) {
  const value = String(process.env[name] || "").trim();
  if (!value) throw new Error(`MISSING_${name}`);
  return value;
}

export async function supabase(path, { method = "GET", token, body, prefer } = {}) {
  const base = (process.env.SUPABASE_URL || SUPABASE_BASE).replace(/\/+$/, "");
  const serviceKey = (process.env.SUPABASE_SERVICE_ROLE_KEY || "").trim();
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  
  // Use anonKey for public queries and auth, fallback if serviceKey is absent
  const activeKey = (cleanPath === "/auth/v1/user" || !serviceKey) ? SUPABASE_ANON : serviceKey;
  
  const response = await fetch(`${base}${cleanPath}`, {
    method,
    headers: {
      apikey: activeKey,
      Authorization: `Bearer ${token || activeKey}`,
      "Content-Type": "application/json",
      ...(prefer ? { Prefer: prefer } : {})
    },
    body: body === undefined ? undefined : JSON.stringify(body)
  });
  const data = await response.json().catch(() => null);
  if (!response.ok) {
    const error = new Error(data?.message || data?.msg || "SUPABASE_REQUEST_FAILED");
    error.status = response.status;
    error.details = data;
    throw error;
  }
  return data;
}

export async function requireUser(request) {
  let authHeader = "";
  if (request.headers && typeof request.headers.get === "function") {
    authHeader = request.headers.get("authorization") || "";
  } else if (request.headers && typeof request.headers === "object") {
    authHeader = request.headers["authorization"] || request.headers["Authorization"] || "";
  }
  
  const token = authHeader.replace(/^Bearer\s+/i, "").trim();
  if (!token) return { error: json(401, { message: "로그인이 필요합니다" }) };
  
  try {
    const res = await fetch(`${SUPABASE_BASE}/auth/v1/user`, {
      method: "GET",
      headers: {
        apikey: SUPABASE_ANON,
        Authorization: `Bearer ${token}`
      }
    });
    const user = await res.json().catch(() => null);
    if (!res.ok || !user || !user.id) {
      console.error("User validation failed:", res.status, user);
      throw new Error(user?.message || user?.msg || "INVALID_USER");
    }
    return { user, token };
  } catch (err) {
    console.error("requireUser failure:", err);
    return { error: json(401, { message: `로그인 세션 확인 실패: ${err.message || "다시 로그인해 주세요."}` }) };
  }
}

export function safeError(error, fallback = "요청을 처리하지 못했습니다") {
  console.error("Payment error:", error);
  if (/^MISSING_/.test(error?.message || "")) return json(503, { message: `결제 서버 설정이 아직 완료되지 않았습니다: ${error.message}` });
  return json(error?.status && error.status < 500 ? error.status : 500, { message: error?.message || fallback });
}
