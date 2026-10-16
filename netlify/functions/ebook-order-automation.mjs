import crypto from "node:crypto";
import { json, safeError, supabase } from "./_payment.mjs";

const BOOKS_CATALOG = {
  "novacell-therapy": {
    code: "ebook_novacell_therapy",
    titleKo: "노바셀 통치 요법 (NovaCell Pain Therapy)",
    titleEn: "NovaCell Pain Therapy",
    pages: 235,
    sizeMb: "114.5 MB",
    priceKrw: 100000,
    driveFolderUrl: "https://drive.google.com/drive/folders/1eRvos4uPAccEP8RVwCtDaFzu5jhIZ8_0"
  },
  "divine-course": {
    code: "ebook_divine_course",
    titleKo: "디바인 코스 (Divine Course)",
    titleEn: "Divine Course",
    pages: 308,
    sizeMb: "13.6 MB",
    priceKrw: 100000,
    driveFolderUrl: "https://drive.google.com/drive/folders/1eRvos4uPAccEP8RVwCtDaFzu5jhIZ8_0"
  },
  "reflex-therapy": {
    code: "ebook_reflex_therapy",
    titleKo: "리플렉스 테라피 (Reflex Therapy)",
    titleEn: "Reflex Therapy",
    pages: 206,
    sizeMb: "40.3 MB",
    priceKrw: 100000,
    driveFolderUrl: "https://drive.google.com/drive/folders/1eRvos4uPAccEP8RVwCtDaFzu5jhIZ8_0"
  },
  "balance-therapy": {
    code: "ebook_balance_therapy",
    titleKo: "밸런스 테라피 (Balance Therapy)",
    titleEn: "Balance Therapy",
    pages: 326,
    sizeMb: "43.1 MB",
    priceKrw: 100000,
    driveFolderUrl: "https://drive.google.com/drive/folders/1eRvos4uPAccEP8RVwCtDaFzu5jhIZ8_0"
  },
  "awakening-cell": {
    code: "ebook_awakening_cell",
    titleKo: "세포야 깨어나라! (Awakening Cell!)",
    titleEn: "Awakening Cell!",
    pages: 471,
    sizeMb: "4.7 MB",
    priceKrw: 100000,
    driveFolderUrl: "https://drive.google.com/drive/folders/1eRvos4uPAccEP8RVwCtDaFzu5jhIZ8_0"
  },
  "energy-therapy": {
    code: "ebook_energy_therapy",
    titleKo: "에너지 테라피 (Energy Therapy)",
    titleEn: "Energy Therapy",
    pages: 321,
    sizeMb: "37.4 MB",
    priceKrw: 100000,
    driveFolderUrl: "https://drive.google.com/drive/folders/1eRvos4uPAccEP8RVwCtDaFzu5jhIZ8_0"
  }
};

function generateLicenseKey() {
  const part1 = crypto.randomBytes(2).toString("hex").toUpperCase();
  const part2 = crypto.randomBytes(2).toString("hex").toUpperCase();
  const part3 = crypto.randomBytes(2).toString("hex").toUpperCase();
  return `NVCLIC-${part1}-${part2}-${part3}`;
}

function buildHtmlEmail({ orderId, customerName, customerEmail, bookSlugs, amount, licenseKey, customLinks = {}, siteUrl = "https://novacell.kr" }) {
  const booksHtml = bookSlugs.map((slug) => {
    const b = BOOKS_CATALOG[slug] || { titleKo: slug, pages: "-", sizeMb: "-" };
    const dlUrl = customLinks[slug] || `${siteUrl}/ko/bookstore.html?order=${encodeURIComponent(orderId)}&license=${encodeURIComponent(licenseKey)}&download=${encodeURIComponent(slug)}#my-ebook-library`;
    return `
      <tr>
        <td style="padding:14px 16px;border-bottom:1px solid #1e293b;color:#f8fafc;font-weight:700;">
          📘 ${b.titleKo}
          <div style="font-size:12px;color:#94a3b8;font-weight:400;margin-top:4px;">박창혁 박사 저 · PDF 원본 (${b.pages}쪽 / ${b.sizeMb})</div>
        </td>
        <td style="padding:14px 16px;border-bottom:1px solid #1e293b;text-align:right;white-space:nowrap;">
          <a href="${dlUrl}" style="display:inline-block;padding:10px 18px;background:linear-gradient(135deg,#d4a359,#b88336);color:#09111f;text-decoration:none;font-weight:800;border-radius:8px;font-size:13px;">PDF 즉시 다운로드</a>
        </td>
      </tr>
    `;
  }).join("");

  const libraryUrl = `${siteUrl}/ko/bookstore.html?order=${encodeURIComponent(orderId)}&license=${encodeURIComponent(licenseKey)}#my-ebook-library`;

  return `
<!DOCTYPE html>
<html lang="ko">
<head><meta charset="UTF-8"></head>
<body style="margin:0;padding:24px;background:#070d19;font-family:'Pretendard','Malgun Gothic',sans-serif;color:#e2e8f0;">
  <div style="max-width:640px;margin:0 auto;background:#0f172a;border:1px solid rgba(212,163,89,0.38);border-radius:16px;overflow:hidden;">
    <div style="padding:28px 32px;background:linear-gradient(135deg,#0b1528,#162544);border-bottom:1px solid rgba(212,163,89,0.3);">
      <div style="color:#d4a359;font-size:12px;font-weight:800;letter-spacing:1.5px;">NOVACELL BOOKSTORE · 공식 전자책 자동 발송 시스템</div>
      <h1 style="margin:8px 0 0;font-size:22px;color:#ffffff;">박창혁 박사 전자책 입금 확인 및 다운로드 안내</h1>
    </div>
    <div style="padding:28px 32px;">
      <p style="margin:0 0 16px;font-size:15px;line-height:1.7;color:#cbd5e1;">
        안녕하세요, <strong style="color:#f7d58b;">${customerName}</strong>님.<br>
        <strong>노바셀 북스토어 (NovaCell Bookstore)</strong>에서 주문하신 전자책의 입금 확인이 완료되어, 요청하신 도서 PDF 원본 다운로드 링크와 영구 소장 라이선스 키를 자동 발송해 드립니다.
      </p>

      <div style="background:#09111f;border:1px solid rgba(56,189,248,0.3);border-radius:12px;padding:18px 20px;margin:20px 0;">
        <div style="font-size:12px;color:#38bdf8;font-weight:700;margin-bottom:8px;">주문 및 라이선스 인증 정보</div>
        <div style="font-size:14px;color:#e2e8f0;line-height:1.8;">
          • <strong>주문번호:</strong> ${orderId}<br>
          • <strong>수신 이메일:</strong> ${customerEmail}<br>
          • <strong>결제 금액:</strong> ₩${Number(amount || 0).toLocaleString("ko-KR")}<br>
          • <strong>전용 다운로드 인증키 (License Key):</strong> <span style="color:#f7d58b;font-weight:800;font-family:monospace;font-size:15px;">${licenseKey}</span>
        </div>
      </div>

      <h3 style="margin:24px 0 12px;font-size:16px;color:#f7d58b;">구매 도서 즉시 다운로드 (${bookSlugs.length}권)</h3>
      <table style="width:100%;border-collapse:collapse;background:#09111f;border-radius:12px;overflow:hidden;border:1px solid #1e293b;">
        <tbody>
          ${booksHtml}
        </tbody>
      </table>

      <div style="margin-top:24px;text-align:center;">
        <a href="${libraryUrl}" style="display:inline-block;padding:14px 28px;background:#38bdf8;color:#081120;text-decoration:none;font-weight:800;border-radius:10px;font-size:15px;">
          노바셀 북스토어 [내 구매 도서 서재] 바로가기
        </a>
      </div>

      <p style="margin-top:24px;font-size:12px;color:#94a3b8;line-height:1.6;border-top:1px solid #1e293b;padding-top:16px;">
        ※ 본 전자책(PDF)은 저작권법에 의해 보호받는 박창혁 박사(노바셀 교육 센터)의 공식 저작물입니다. 무단 배포 및 복제를 금합니다.<br>
        ※ 다운로드 문의 및 고객지원: 010-9726-7012 · emotionbrain@naver.com / kbrain2024@gmail.com
      </p>
    </div>
  </div>
</body>
</html>`;
}

export default async (request) => {
  if (request.method !== "POST") return json(405, { message: "POST 요청만 허용됩니다." });

  try {
    const body = await request.json();
    const action = String(body.action || "").trim();
    const siteUrl = (process.env.SITE_URL || new URL(request.url).origin).replace(/\/$/, "");

    if (action === "create_order") {
      const customerName = String(body.customerName || "").trim();
      const customerEmail = String(body.customerEmail || "").trim().toLowerCase();
      const customerPhone = String(body.customerPhone || "").trim();
      const depositorName = String(body.depositorName || customerName).trim();
      const bookSlugs = Array.isArray(body.bookSlugs) ? body.bookSlugs.filter((s) => BOOKS_CATALOG[s]) : [];
      const paymentMethod = body.paymentMethod === "toss_card" ? "toss_card" : "bank_transfer";

      if (!customerName || !customerEmail || !customerPhone || bookSlugs.length === 0) {
        return json(400, { message: "주문자 성명, 이메일, 연락처 및 주문 도서를 확인해 주세요." });
      }

      const isFullBundle = bookSlugs.length === 6;
      const amount = isFullBundle ? 480000 : bookSlugs.length * 100000;
      const dateStr = new Date().toISOString().slice(0, 10).replace(/-/g, "");
      const rand = crypto.randomBytes(3).toString("hex").toUpperCase();
      const orderId = `NVC-EBK-${dateStr}-${rand}`;
      const licenseKey = generateLicenseKey();
      const bookTitles = bookSlugs.map((s) => BOOKS_CATALOG[s]?.titleKo || s).join(", ");

      let savedInDb = false;
      try {
        await supabase("/rest/v1/ebook_orders", {
          method: "POST",
          prefer: "return=minimal",
          body: [{
            order_id: orderId,
            customer_name: customerName,
            customer_email: customerEmail,
            customer_phone: customerPhone,
            depositor_name: depositorName,
            book_slugs: bookSlugs,
            book_titles: bookTitles,
            amount,
            payment_method: paymentMethod,
            status: "pending_deposit",
            license_key: licenseKey
          }]
        });
        savedInDb = true;
      } catch (dbErr) {
        console.warn("Supabase ebook_orders table optional fallback:", dbErr?.message);
      }

      return json(200, {
        ok: true,
        savedInDb,
        order: {
          orderId,
          customerName,
          customerEmail,
          customerPhone,
          depositorName,
          bookSlugs,
          bookTitles,
          amount,
          paymentMethod,
          status: "pending_deposit",
          licenseKey,
          createdAt: new Date().toISOString()
        }
      });
    }

    if (action === "confirm_and_send_email") {
      const orderId = String(body.orderId || "").trim();
      const customerName = String(body.customerName || "고객").trim();
      const customerEmail = String(body.customerEmail || "").trim().toLowerCase();
      const bookSlugs = Array.isArray(body.bookSlugs) ? body.bookSlugs : [];
      const amount = Number(body.amount || bookSlugs.length * 100000);
      const licenseKey = String(body.licenseKey || generateLicenseKey()).trim();
      const customLinks = body.customLinks || {};
      const customWebhookUrl = String(body.webhookUrl || process.env.GOOGLE_APPS_SCRIPT_WEBHOOK_URL || "").trim();

      if (!customerEmail || bookSlugs.length === 0) {
        return json(400, { message: "수신자 이메일과 발송할 전자책 정보가 필요합니다." });
      }

      const subject = `[노바셀 북스토어] ${customerName}님, 주문하신 박창혁 박사 전자책(${bookSlugs.length}권) 입금확인 및 PDF 다운로드 링크 안내`;
      const htmlContent = buildHtmlEmail({
        orderId,
        customerName,
        customerEmail,
        bookSlugs,
        amount,
        licenseKey,
        customLinks,
        siteUrl
      });

      // 1. Update Supabase ebook_orders if present
      let dbUpdated = false;
      try {
        await supabase(`/rest/v1/ebook_orders?order_id=eq.${encodeURIComponent(orderId)}`, {
          method: "PATCH",
          prefer: "return=minimal",
          body: {
            status: "paid",
            license_key: licenseKey,
            email_sent: true,
            email_sent_at: new Date().toISOString(),
            approved_at: new Date().toISOString(),
            updated_at: new Date().toISOString()
          }
        });
        dbUpdated = true;
      } catch (err) {
        console.warn("Supabase update optional fallback:", err?.message);
      }

      // 2. Dispatch automated email via Google Apps Script Webhook or Resend API
      let emailDispatched = false;
      let dispatchProvider = "none";

      if (customWebhookUrl && /^https:\/\/script\.google\.com\/macros\/s\//i.test(customWebhookUrl)) {
        try {
          const gasRes = await fetch(customWebhookUrl, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              to: customerEmail,
              subject,
              htmlBody: htmlContent,
              orderId,
              customerName,
              licenseKey,
              bookSlugs
            })
          });
          if (gasRes.ok) {
            emailDispatched = true;
            dispatchProvider = "google_apps_script";
          }
        } catch (gasErr) {
          console.warn("GAS webhook error:", gasErr?.message);
        }
      }

      if (!emailDispatched && process.env.RESEND_API_KEY) {
        try {
          const resendRes = await fetch("https://api.resend.com/emails", {
            method: "POST",
            headers: {
              Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              from: process.env.RESEND_FROM_EMAIL || "NovaCell Bookstore <bookstore@novacell.kr>",
              to: [customerEmail],
              subject,
              html: htmlContent
            })
          });
          if (resendRes.ok) {
            emailDispatched = true;
            dispatchProvider = "resend";
          }
        } catch (resendErr) {
          console.warn("Resend dispatch error:", resendErr?.message);
        }
      }

      return json(200, {
        ok: true,
        dbUpdated,
        emailDispatched,
        dispatchProvider,
        orderId,
        licenseKey,
        subject,
        htmlContent
      });
    }

    if (action === "lookup_order") {
      const email = String(body.email || "").trim().toLowerCase();
      const licenseKey = String(body.licenseKey || "").trim().toUpperCase();
      const orderId = String(body.orderId || "").trim();

      let orders = [];
      try {
        if (licenseKey) {
          orders = await supabase(`/rest/v1/ebook_orders?select=*&license_key=eq.${encodeURIComponent(licenseKey)}&order=created_at.desc`);
        } else if (orderId) {
          orders = await supabase(`/rest/v1/ebook_orders?select=*&order_id=eq.${encodeURIComponent(orderId)}&order=created_at.desc`);
        } else if (email) {
          orders = await supabase(`/rest/v1/ebook_orders?select=*&customer_email=ilike.${encodeURIComponent(email)}&order=created_at.desc`);
        }
      } catch (_) {
        orders = [];
      }

      return json(200, { ok: true, orders: Array.isArray(orders) ? orders : [] });
    }

    return json(400, { message: "지원하지 않는 action입니다." });
  } catch (error) {
    return safeError(error, "요청 처리 중 오류가 발생했습니다.");
  }
};
