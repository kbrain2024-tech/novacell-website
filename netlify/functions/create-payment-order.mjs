import crypto from "node:crypto";
import { json, requireUser, safeError, supabase } from "./_payment.mjs";

const ALLOWED_PRODUCTS = new Set([
  "reflex_therapy_1y",
  "healing_points_1y",
  "sound_studio_1y",
  "ebook_novacell_therapy",
  "ebook_divine_course",
  "ebook_reflex_therapy",
  "ebook_balance_therapy",
  "ebook_awakening_cell",
  "ebook_energy_therapy",
  "ebook_master_bundle_6"
]);

const FALLBACK_CATALOG = {
  reflex_therapy_1y: {
    name_ko: "NovaCell Reflex Therapy Guide 1년 패스",
    name_en: "NovaCell Reflex Therapy Guide 1-Year Pass",
    price_krw: 99000
  },
  healing_points_1y: {
    name_ko: "NovaCell Healing & Pain Clinic 1년 패스",
    name_en: "NovaCell Healing & Pain Clinic 1-Year Pass",
    price_krw: 330000
  },
  sound_studio_1y: {
    name_ko: "NovaCell Sound Studio 1년 패스",
    name_en: "NovaCell Sound Studio 1-Year Pass",
    price_krw: 330000
  }
};

export default async (request) => {
  if (request.method !== "POST") return json(405, { message: "POST 요청만 허용합니다." });
  const auth = await requireUser(request);
  if (auth.error) return auth.error;

  try {
    const input = await request.json();
    const productCode = String(input.product_code || "").trim();
    const lang = input.lang === "en" ? "en" : "ko";
    if (!ALLOWED_PRODUCTS.has(productCode)) return json(400, { message: "상품 정보를 확인해 주세요." });

    let product = null;
    try {
      const products = await supabase(`/rest/v1/products?select=code,name_ko,name_en,price_krw,duration_days,active&code=eq.${encodeURIComponent(productCode)}&active=eq.true`);
      product = Array.isArray(products) ? products[0] : null;
    } catch (e) {
      console.warn("Product fetch from Supabase failed, using catalog fallback:", e.message);
    }
    
    if (!product && FALLBACK_CATALOG[productCode]) {
      product = {
        code: productCode,
        name_ko: FALLBACK_CATALOG[productCode].name_ko,
        name_en: FALLBACK_CATALOG[productCode].name_en,
        price_krw: FALLBACK_CATALOG[productCode].price_krw
      };
    }
    
    if (!product) return json(404, { message: "현재 판매 중인 상품을 찾을 수 없습니다." });

    const orderId = `NVC-${Date.now()}-${crypto.randomBytes(5).toString("hex")}`;
    try {
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
    } catch (dbErr) {
      console.warn("Could not insert pending payment order record to DB:", dbErr.message);
    }

    const siteUrl = (process.env.SITE_URL || new URL(request.url).origin).replace(/\/$/, "");
    const clientKey = (process.env.TOSS_CLIENT_KEY || "test_ck_D5GePWvyJnrK0W0k6q8g3N97Eoq1").trim();

    return json(200, {
      orderId,
      orderName: lang === "en" ? product.name_en : product.name_ko,
      amount: product.price_krw,
      currency: "KRW",
      customerKey: auth.user.id,
      customerEmail: auth.user.email || "",
      customerName: auth.user.user_metadata?.full_name || (lang === "en" ? "NovaCell Member" : "NovaCell 회원"),
      clientKey,
      successUrl: `${siteUrl}/payment-success.html?lang=${lang}`,
      failUrl: `${siteUrl}/payment-fail.html?lang=${lang}`
    });
  } catch (error) {
    return safeError(error, "주문을 만들지 못했습니다. 잠시 후 다시 시도해 주세요.");
  }
};
