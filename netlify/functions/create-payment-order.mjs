import crypto from "node:crypto";
import { json, requireUser, requiredEnv, safeError, supabase } from "./_payment.mjs";

const ALLOWED_PRODUCTS = new Set(["reflex_therapy_1y", "healing_points_1y"]);

export default async (request) => {
  if (request.method !== "POST") return json(405, { message: "POST 요청만 허용됩니다." });
  const auth = await requireUser(request);
  if (auth.error) return auth.error;

  try {
    const input = await request.json();
    const productCode = String(input.product_code || "").trim();
    const lang = input.lang === "en" ? "en" : "ko";
    if (!ALLOWED_PRODUCTS.has(productCode)) return json(400, { message: "상품 정보를 확인해 주세요." });

    const products = await supabase(`/rest/v1/products?select=code,name_ko,name_en,price_krw,duration_days,active&code=eq.${encodeURIComponent(productCode)}&active=eq.true`);
    const product = Array.isArray(products) ? products[0] : null;
    if (!product) return json(404, { message: "현재 판매 중인 상품을 찾을 수 없습니다." });

    const orderId = `NVC-${Date.now()}-${crypto.randomBytes(5).toString("hex")}`;
    await supabase("/rest/v1/payment_orders", {
      method: "POST",
      prefer: "return=minimal",
      body: [{
        order_id: orderId,
        user_id: auth.user.id,
        product_code: product.code,
        provider: "toss",
        currency: "KRW",
        amount: product.price_krw,
        status: "pending"
      }]
    });

    const siteUrl = (process.env.SITE_URL || new URL(request.url).origin).replace(/\/$/, "");
    return json(200, {
      orderId,
      orderName: lang === "en" ? product.name_en : product.name_ko,
      amount: product.price_krw,
      currency: "KRW",
      customerKey: auth.user.id,
      customerEmail: auth.user.email || "",
      customerName: auth.user.user_metadata?.full_name || (lang === "en" ? "NovaCell Member" : "NovaCell 회원"),
      clientKey: requiredEnv("TOSS_CLIENT_KEY"),
      successUrl: `${siteUrl}/payment-success.html?lang=${lang}`,
      failUrl: `${siteUrl}/payment-fail.html?lang=${lang}`
    });
  } catch (error) {
    return safeError(error, "주문을 만들지 못했습니다. 잠시 후 다시 시도해 주세요.");
  }
};
