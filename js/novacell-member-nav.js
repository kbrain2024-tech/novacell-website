(async function () {
  "use strict";
  if (!window.NovaCellAuth) return;
  const isEnglish = location.pathname.includes("/en/");
  const session = await window.NovaCellAuth.getSession();

  document.querySelectorAll("[data-member-login]").forEach((link) => {
    link.href = session ? `../mypage.html?lang=${isEnglish ? "en" : "ko"}` : `../login.html?lang=${isEnglish ? "en" : "ko"}`;
    link.textContent = session ? (isEnglish ? "My Account" : "마이페이지") : (isEnglish ? "Sign In" : "로그인");
  });
  document.querySelectorAll("[data-member-register]").forEach((link) => {
    link.hidden = Boolean(session);
  });

  if (session && session.access_token) {
    const ssoHash = `#access_token=${encodeURIComponent(session.access_token)}&refresh_token=${encodeURIComponent(session.refresh_token || "")}&expires_at=${encodeURIComponent(session.expires_at || "")}&type=recovery`;
    document.querySelectorAll("a[href*='healing.novacell.kr'], a[href*='guide.novacell.kr']").forEach((link) => {
      try {
        const url = new URL(link.href, location.origin);
        if (url.hostname === "healing.novacell.kr" || url.hostname === "guide.novacell.kr") {
          if (!url.hash || !url.hash.includes("access_token=")) {
            url.hash = ssoHash;
            link.href = url.href;
          }
        }
      } catch (_) {}
    });
  }
})();
