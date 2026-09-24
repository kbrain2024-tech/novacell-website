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
})();
