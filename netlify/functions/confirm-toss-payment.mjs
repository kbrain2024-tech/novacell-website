import { json, requireUser, requiredEnv, safeError, supabase } from "./_payment.mjs";

export default async (request) => {
  if (request.method !== "POST") return json(405, { message: "POST 요청만 허용됩니다." });
  const auth = await requireUser(request);
  if (auth.error) return auth.error;

  try {
    const input = await request.json();
    const paymentKey = String(input.paymentKey || "").trim();
    const orderId = String(input.orderId || "").trim();
    const amount = Number(input.amount);
    if (!paymentKey || !/^NVC-[A-Za-z0-9-]+$/.test(orderId) || !Number.isInteger(amount) || amount < 1) {
      return json(400, { message: "결제 승인 정보를 확인해 주세요." });
    }

    const orders = await supabase(`/rest/v1/payment_orders?select=order_id,user_id,product_code,amount,currency,status,payment_key&order_id=eq.${encodeURIComponent(orderId)}&user_id=eq.${encodeURIComponent(auth.user.id)}`);
    const order = Array.isArray(orders) ? orders[0] : null;
    if (!order || order.currency !== "KRW" || Number(order.amount) !== amount) {
      return json(400, { message: "주문 정보 또는 결제 금액이 일치하지 않습니다." });
    }
    if (order.status === "paid") {
      if (order.payment_key !== paymentKey) return json(409, { message: "이미 처리된 주문입니다." });
      return json(200, { ok: true, alreadyCompleted: true, productCode: order.product_code });
    }
    if (order.status !== "pending") return json(409, { message: "결제할 수 없는 주문 상태입니다." });

    const secret = requiredEnv("TOSS_SECRET_KEY");
    const authorization = Buffer.from(`${secret}:`).toString("base64");
    const approvalResponse = await fetch("https://api.tosspayments.com/v1/payments/confirm", {
      method: "POST",
      headers: { Authorization: `Basic ${authorization}`, "Content-Type": "application/json" },
      body: JSON.stringify({ paymentKey, orderId, amount })
    });
    const payment = await approvalResponse.json().catch(() => ({}));
    if (!approvalResponse.ok) {
      return json(approvalResponse.status >= 500 ? 502 : 400, {
        message: payment.message || "결제를 승인하지 못했습니다.",
        code: payment.code || "PAYMENT_CONFIRM_FAILED"
      });
    }
    if (payment.orderId !== orderId || Number(payment.totalAmount) !== amount || payment.status !== "DONE") {
      return json(502, { message: "결제사의 승인 결과를 확인할 수 없습니다. 고객센터로 문의해 주세요." });
    }

    const result = await supabase("/rest/v1/rpc/complete_payment_and_grant", {
      method: "POST",
      body: {
        p_order_id: orderId,
        p_user_id: auth.user.id,
        p_payment_key: paymentKey,
        p_method: payment.method || null,
        p_provider_status: payment.status
      }
    });
    const completed = Array.isArray(result) ? result[0] : result;
    return json(200, {
      ok: true,
      productCode: order.product_code,
      expiresAt: completed?.expires_at || null
    });
  } catch (error) {
    return safeError(error, "결제 확인 중 오류가 발생했습니다. 결제 문자를 받았다면 재결제하지 말고 고객센터로 문의해 주세요.");
  }
};
