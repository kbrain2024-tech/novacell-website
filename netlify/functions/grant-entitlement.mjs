const json = (status, body) => new Response(JSON.stringify(body), {
  status,
  headers: { "Content-Type": "application/json; charset=utf-8", "Cache-Control": "no-store" }
});

async function supabase(path, { method = "GET", token, body, prefer } = {}) {
  const url = process.env.SUPABASE_URL;
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !serviceKey) throw new Error("SERVER_NOT_CONFIGURED");
  const response = await fetch(`${url}${path}`, {
    method,
    headers: {
      apikey: serviceKey,
      Authorization: `Bearer ${token || serviceKey}`,
      "Content-Type": "application/json",
      ...(prefer ? { Prefer: prefer } : {})
    },
    body: body ? JSON.stringify(body) : undefined
  });
  const data = await response.json().catch(() => null);
  if (!response.ok) {
    const error = new Error(data?.message || data?.msg || "SUPABASE_REQUEST_FAILED");
    error.status = response.status;
    throw error;
  }
  return data;
}

export default async (request) => {
  if (request.method !== "POST") return json(405, { message: "POST 요청만 허용됩니다." });
  try {
    const authHeader = request.headers.get("authorization") || "";
    const accessToken = authHeader.replace(/^Bearer\s+/i, "").trim();
    if (!accessToken) return json(401, { message: "로그인이 필요합니다." });

    const currentUser = await supabase("/auth/v1/user", { token: accessToken });
    const adminRows = await supabase(`/rest/v1/admin_users?select=user_id&user_id=eq.${encodeURIComponent(currentUser.id)}`);
    if (!Array.isArray(adminRows) || !adminRows.length) return json(403, { message: "관리자 권한이 없습니다." });

    const input = await request.json();
    const email = String(input.email || "").trim().toLowerCase();
    const productCode = String(input.product_code || "").trim();
    const days = Number(input.days);
    const products = new Set(["reflex_therapy_1y", "healing_points_1y"]);
    if (!email || !email.includes("@") || !products.has(productCode) || !Number.isInteger(days) || days < 1 || days > 3650) {
      return json(400, { message: "이메일, 상품 및 사용일수를 확인해 주세요." });
    }

    const profiles = await supabase(`/rest/v1/profiles?select=id,email&email=eq.${encodeURIComponent(email)}`);
    if (!Array.isArray(profiles) || !profiles.length) return json(404, { message: "가입된 회원 이메일을 찾을 수 없습니다." });

    const startsAt = new Date();
    const expiresAt = new Date(startsAt.getTime() + days * 86400000);
    const rows = await supabase("/rest/v1/entitlements?on_conflict=user_id,product_code", {
      method: "POST",
      prefer: "resolution=merge-duplicates,return=representation",
      body: [{
        user_id: profiles[0].id,
        product_code: productCode,
        status: "active",
        starts_at: startsAt.toISOString(),
        expires_at: expiresAt.toISOString(),
        source: "admin_test",
        granted_by: currentUser.id
      }]
    });
    return json(200, { ok: true, entitlement: rows?.[0] || null });
  } catch (error) {
    console.error("grant-entitlement", error);
    const status = error.message === "SERVER_NOT_CONFIGURED" ? 503 : (error.status || 500);
    return json(status, { message: status === 503 ? "서버 회원 설정이 아직 완료되지 않았습니다." : "이용권 발급 중 오류가 발생했습니다." });
  }
};
