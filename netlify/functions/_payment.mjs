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
  const base = requiredEnv("SUPABASE_URL");
  const serviceKey = requiredEnv("SUPABASE_SERVICE_ROLE_KEY");
  const response = await fetch(`${base}${path}`, {
    method,
    headers: {
      apikey: serviceKey,
      Authorization: `Bearer ${token || serviceKey}`,
      "Content-Type": "application/json",
      ...(prefer ? { Prefer: prefer } : {})
    },
    body: body === undefined ? undefined : JSON.stringify(body)
  });
  const data = await response.json().catch(() => null);
  if (!response.ok) {
    const error = new Error(data?.message || data?.msg || "SUPABASE_REQUEST_FAILED");
    error.status = response.status;
    throw error;
  }
  return data;
}

export async function requireUser(request) {
  const token = (request.headers.get("authorization") || "").replace(/^Bearer\s+/i, "").trim();
  if (!token) return { error: json(401, { message: "로그인이 필요합니다." }) };
  try {
    const user = await supabase("/auth/v1/user", { token });
    return { user, token };
  } catch (_) {
    return { error: json(401, { message: "로그인 정보가 만료되었습니다. 다시 로그인해 주세요." }) };
  }
}

export function safeError(error, fallback = "요청을 처리하지 못했습니다.") {
  console.error(error);
  if (/^MISSING_/.test(error?.message || "")) return json(503, { message: "결제 서버 설정이 아직 완료되지 않았습니다." });
  return json(error?.status && error.status < 500 ? error.status : 500, { message: fallback });
}
