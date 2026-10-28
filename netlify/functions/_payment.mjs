const JSON_HEADERS = {
  "Content-Type": "application/json; charset=utf-8",
  "Cache-Control": "no-store",
  "X-Content-Type-Options": "nosniff"
};

export function json(status, body) {
  return new Response(JSON.stringify(body), { status, headers: JSON_HEADERS });
}

export function requiredEnv(name) {
  const value = String(process.env[name] || "").trim();
  if (!value) throw new Error(`MISSING_${name}`);
  return value;
}

export async function supabase(path, { method = "GET", token, body, prefer } = {}) {
  const base = (process.env.SUPABASE_URL || "https://pemxrfxzkprahhwuhqsi.supabase.co").replace(/\/+$/, "");
  const anonKey = (process.env.SUPABASE_ANON_KEY || "sb_publishable_9PSDP08GzyMYd4kXVn3bCw_Iwfdw7-w").trim();
  const serviceKey = (process.env.SUPABASE_SERVICE_ROLE_KEY || "").trim();
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  
  // Use anonKey for user verification and fallback when serviceKey is not set or invalid
  const activeKey = (cleanPath === "/auth/v1/user" || !serviceKey) ? anonKey : serviceKey;
  
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
  const token = (request.headers.get("authorization") || "").replace(/^Bearer\s+/i, "").trim();
  if (!token) return { error: json(401, { message: "로그인이 필요합니다" }) };
  try {
    const user = await supabase("/auth/v1/user", { token });
    if (!user || !user.id) throw new Error("INVALID_USER");
    return { user, token };
  } catch (err) {
    console.error("requireUser failure:", err);
    if (/^MISSING_/.test(err?.message || "")) {
      return { error: json(503, { message: `결제 서버 환경변수 설정 확인 필요: ${err.message}` }) };
    }
    return { error: json(401, { message: "로그인 정보가 만료되었습니다. 다시 로그인해 주세요." }) };
  }
}

export function safeError(error, fallback = "요청을 처리하지 못했습니다") {
  console.error("Payment error:", error);
  if (/^MISSING_/.test(error?.message || "")) return json(503, { message: `결제 서버 설정이 아직 완료되지 않았습니다: ${error.message}` });
  return json(error?.status && error.status < 500 ? error.status : 500, { message: error?.message || fallback });
}
