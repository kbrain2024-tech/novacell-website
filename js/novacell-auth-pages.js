(function () {
  "use strict";

  const auth = window.NovaCellAuth;
  const page = document.body.dataset.authPage || "login";
  const params = new URLSearchParams(location.search);
  const lang = params.get("lang") === "en" ? "en" : "ko";

  const copy = {
    ko: {
      brandSub: "바이오일렉트릭 전압 의학", eyebrow: "NOVACELL MEMBER ACCESS",
      introTitle: "하나의 계정으로<br><span>NovaCell Guide</span>를 이용하세요",
      intro: "회원가입 후 보유한 이용권에 따라 Reflex Therapy Guide와 Healing Points에 안전하게 입장할 수 있습니다.",
      benefits: [["공통 회원 계정", "한 이메일로 NovaCell 서비스를 이용합니다."], ["이용권 확인", "상품별 활성 상태와 만료일을 확인합니다."], ["학습 기록 확장", "향후 Academy 진도와 평가 기록을 연결합니다."], ["개인정보 보호", "비밀번호는 홈페이지에 저장하지 않습니다."]],
      login: { title: "로그인", desc: "NovaCell 회원 계정으로 로그인하세요.", email: "이메일", password: "비밀번호", submit: "로그인", register: "회원가입", forgot: "비밀번호 찾기" },
      register: { title: "회원가입", desc: "이메일 인증 후 NovaCell 서비스를 이용할 수 있습니다.", name: "성명", email: "이메일", password: "비밀번호", confirm: "비밀번호 확인", agree: "개인정보 처리방침과 이용약관에 동의합니다.", submit: "회원가입", login: "이미 계정이 있나요? 로그인" },
      forgot: { title: "비밀번호 찾기", desc: "가입한 이메일로 비밀번호 재설정 링크를 보냅니다.", email: "이메일", submit: "재설정 메일 보내기", login: "로그인으로 돌아가기" },
      reset: { title: "새 비밀번호 설정", desc: "새 비밀번호를 두 번 입력하세요.", password: "새 비밀번호", confirm: "새 비밀번호 확인", submit: "비밀번호 변경" },
      mypage: { title: "마이페이지", desc: "회원정보와 보유 이용권을 확인합니다.", buy: "이용권 구매", logout: "로그아웃", admin: "테스트 이용권 관리", none: "활성화된 이용권이 없습니다.", reflex: "Reflex Therapy Guide 1년 이용권", healing: "Healing Points 1년 이용권", open: "앱 열기", expires: "만료일" },
      admin: { title: "테스트 이용권 발급", desc: "관리자로 등록된 계정만 사용할 수 있습니다.", email: "회원 이메일", product: "상품", days: "사용일수", submit: "테스트 이용권 발급", back: "마이페이지로 돌아가기" },
      social: { divider: "간편 계정으로 계속하기", google: "Google로 계속하기", kakao: "카카오로 계속하기", naver: "네이버로 계속하기", naverPending: "네이버 개발자 연결 후 활성화됩니다." },
      showPassword: "비밀번호 보기", hidePassword: "비밀번호 숨기기",
      setup: "회원 시스템 연결 전입니다. SETUP_AUTH_KO.md의 안내에 따라 Supabase URL과 공개 키를 입력하면 활성화됩니다.",
      working: "처리 중...", home: "홈으로", successRegister: "회원가입 신청이 완료되었습니다. 이메일의 인증 링크를 누른 뒤 로그인하세요.", successReset: "비밀번호 재설정 메일을 보냈습니다.", successPassword: "비밀번호가 변경되었습니다. 다시 로그인해 주세요.", successGrant: "테스트 이용권을 발급했습니다.", passwordMismatch: "비밀번호가 서로 다릅니다.", passwordRule: "비밀번호는 8자 이상이어야 합니다.", loginRequired: "로그인이 필요합니다.", genericError: "처리하지 못했습니다. 입력 내용을 확인하고 다시 시도해 주세요."
    },
    en: {
      brandSub: "BIO-ELECTRIC VOLTAGE MEDICINE", eyebrow: "NOVACELL MEMBER ACCESS",
      introTitle: "One account for<br><span>NovaCell Guides</span>",
      intro: "Create an account and securely access the Reflex Therapy Guide and Healing Points according to your active pass.",
      benefits: [["One member account", "Use one email across NovaCell services."], ["Pass verification", "View product status and expiration dates."], ["Learning progress", "Academy progress can be connected later."], ["Privacy protection", "Passwords are not stored on this website."]],
      login: { title: "Sign In", desc: "Sign in with your NovaCell member account.", email: "Email", password: "Password", submit: "Sign In", register: "Create Account", forgot: "Forgot Password" },
      register: { title: "Create Account", desc: "Verify your email to use NovaCell services.", name: "Full Name", email: "Email", password: "Password", confirm: "Confirm Password", agree: "I agree to the Privacy Policy and Terms.", submit: "Create Account", login: "Already registered? Sign In" },
      forgot: { title: "Reset Password", desc: "We will email you a password reset link.", email: "Email", submit: "Send Reset Email", login: "Back to Sign In" },
      reset: { title: "Set New Password", desc: "Enter your new password twice.", password: "New Password", confirm: "Confirm New Password", submit: "Update Password" },
      mypage: { title: "My Account", desc: "View your profile and active passes.", buy: "View Passes", logout: "Sign Out", admin: "Manage Test Passes", none: "No active pass is available.", reflex: "Reflex Therapy Guide 1-Year Pass", healing: "Healing Points 1-Year Pass", open: "Open App", expires: "Expires" },
      admin: { title: "Grant Test Pass", desc: "Only registered administrators can use this page.", email: "Member Email", product: "Product", days: "Access Days", submit: "Grant Test Pass", back: "Back to My Account" },
      social: { divider: "Continue with a familiar account", google: "Continue with Google", kakao: "Continue with Kakao", naver: "Continue with Naver", naverPending: "Available after the Naver developer connection is completed." },
      showPassword: "Show password", hidePassword: "Hide password",
      setup: "Membership setup is not connected yet. Enter the Supabase URL and public key as described in SETUP_AUTH_KO.md.",
      working: "Processing...", home: "Home", successRegister: "Registration received. Verify your email, then sign in.", successReset: "A password reset email has been sent.", successPassword: "Your password has been updated. Please sign in again.", successGrant: "The test pass has been granted.", passwordMismatch: "The passwords do not match.", passwordRule: "Use at least 8 characters.", loginRequired: "Please sign in first.", genericError: "The request could not be completed. Please review the information and try again."
    }
  };

  const t = () => copy[lang];
  const app = document.getElementById("authApp");
  const intro = document.getElementById("authIntro");
  const languageButtons = document.querySelectorAll("[data-lang]");

  function escapeHtml(value) { return String(value || "").replace(/[&<>'"]/g, (ch) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" }[ch])); }
  function message(text, type = "info") { const box = document.getElementById("authMessage"); if (!box) return; box.className = `auth-message show ${type}`; box.textContent = text; }
  function errorText(error) {
    const value = (error?.message || "").toLowerCase();
    if (value.includes("invalid login")) return lang === "ko" ? "이메일 또는 비밀번호가 올바르지 않습니다." : "Incorrect email or password.";
    if (value.includes("email not confirmed")) return lang === "ko" ? "이메일 인증을 먼저 완료해 주세요." : "Please verify your email first.";
    if (value.includes("already registered")) return lang === "ko" ? "이미 가입된 이메일입니다." : "This email is already registered.";
    if (value.includes("provider") || value.includes("oauth")) return lang === "ko" ? "간편 로그인 제공자 설정을 확인해 주세요. SOCIAL_LOGIN_SETUP_KO.md의 안내를 따라 연결할 수 있습니다." : "Please check the social login provider configuration.";
    if (value.includes("auth_not_configured")) return t().setup;
    return error?.message || t().genericError;
  }
  function setBusy(form, busy) { const button = form?.querySelector("button[type=submit]"); if (!button) return; if (busy) { button.dataset.label = button.textContent; button.textContent = t().working; button.disabled = true; } else { button.textContent = button.dataset.label || button.textContent; button.disabled = false; } }
  function shell(content) { return `<div id="authSetup" class="auth-setup${auth.configured() ? "" : " show"}">${t().setup}</div><div id="authMessage" class="auth-message"></div>${content}`; }
  function commonIntro() { intro.innerHTML = `<p class="auth-eyebrow">${t().eyebrow}</p><h1>${t().introTitle}</h1><p>${t().intro}</p><div class="auth-benefits">${t().benefits.map((x) => `<div><strong>${x[0]}</strong><small>${x[1]}</small></div>`).join("")}</div>`; document.querySelector(".auth-brand small").textContent = t().brandSub; languageButtons.forEach((button) => button.classList.toggle("active", button.dataset.lang === lang)); }
  function link(file, label) { return `<a href="${file}?lang=${lang}">${label}</a>`; }

  function passwordField(label, name, autocomplete) {
    return `<label>${label}<span class="auth-password-wrap"><input name="${name}" type="password" autocomplete="${autocomplete}" required minlength="8"><button class="auth-password-toggle" type="button" aria-label="${t().showPassword}" aria-pressed="false"><svg class="icon-show" viewBox="0 0 24 24" aria-hidden="true"><path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6S2 12 2 12Zm10 3.2A3.2 3.2 0 1 0 12 8.8a3.2 3.2 0 0 0 0 6.4Z"/></svg><svg class="icon-hide" viewBox="0 0 24 24" aria-hidden="true"><path d="m3.3 2 18.7 18.7-1.3 1.3-3.1-3.1A11 11 0 0 1 12 20C5.5 20 2 14 2 14a18 18 0 0 1 3.2-3.8L2 7.3 3.3 6l18.7 18.7M8.4 13.1a3.6 3.6 0 0 0 4.5 4.5l-4.5-4.5ZM12 8c6.5 0 10 6 10 6a17 17 0 0 1-2.1 2.8l-2.3-2.3a5.6 5.6 0 0 0-6.1-6.1L9.9 6.8C10.6 6.3 11.3 6 12 6v2Z"/></svg></button></span></label>`;
  }

  function socialBlock() {
    const c = t().social;
    const naverEnabled = auth.config.naverOAuthEnabled === true;
    return `<div class="auth-divider"><span>${c.divider}</span></div><div class="auth-social" aria-label="${c.divider}"><button type="button" class="auth-social-button google" data-oauth="google"><span aria-hidden="true">G</span>${c.google}</button><button type="button" class="auth-social-button kakao" data-oauth="kakao"><span aria-hidden="true">K</span>${c.kakao}</button><button type="button" class="auth-social-button naver"${naverEnabled ? ' data-oauth="naver"' : ` disabled title="${c.naverPending}"`}><span aria-hidden="true">N</span>${c.naver}</button></div>`;
  }

  function setupPasswordToggles() {
    document.querySelectorAll(".auth-password-toggle").forEach((button) => button.addEventListener("click", () => {
      const input = button.parentElement.querySelector("input"); const visible = input.type === "text";
      input.type = visible ? "password" : "text"; button.classList.toggle("visible", !visible);
      button.setAttribute("aria-pressed", String(!visible)); button.setAttribute("aria-label", visible ? t().showPassword : t().hidePassword);
      input.focus({ preventScroll: true });
    }));
  }

  function setupOAuthButtons() {
    document.querySelectorAll("[data-oauth]").forEach((button) => button.addEventListener("click", () => {
      try {
        const fallback = `${auth.config.mainSiteUrl}/${lang}/`;
        auth.signInWithOAuth(button.dataset.oauth, { redirectTo: `${auth.config.mainSiteUrl}/login.html?lang=${lang}`, returnTo: auth.safeReturnUrl(params.get("return"), fallback) });
      } catch (error) { message(errorText(error), "error"); }
    }));
  }

  async function renderLogin() {
    const c = t().login;
    app.innerHTML = shell(`<h2>${c.title}</h2><p class="auth-desc">${c.desc}</p>${socialBlock()}<form class="auth-form" id="loginForm"><label>${c.email}<input name="email" type="email" autocomplete="email" required></label>${passwordField(c.password, "password", "current-password")}<button class="auth-submit" type="submit">${c.submit}</button></form><div class="auth-links">${link("register.html", c.register)}${link("forgot-password.html", c.forgot)}<a href="${lang === "ko" ? "ko/index.html" : "en/index.html"}">${t().home}</a></div>`);
    setupOAuthButtons(); setupPasswordToggles();
    document.getElementById("loginForm").addEventListener("submit", async (event) => { event.preventDefault(); const form = event.currentTarget; setBusy(form, true); try { await auth.signIn({ email: form.email.value.trim(), password: form.password.value }); const fallback = `${auth.config.mainSiteUrl}/${lang}/`; location.href = auth.safeReturnUrl(params.get("return"), fallback); } catch (error) { message(errorText(error), "error"); setBusy(form, false); } });
  }

  async function renderRegister() {
    const c = t().register;
    app.innerHTML = shell(`<h2>${c.title}</h2><p class="auth-desc">${c.desc}</p>${socialBlock()}<form class="auth-form" id="registerForm"><label>${c.name}<input name="fullName" required maxlength="60" autocomplete="name"></label><label>${c.email}<input name="email" type="email" autocomplete="email" required></label>${passwordField(c.password, "password", "new-password")}${passwordField(c.confirm, "confirm", "new-password")}<label class="auth-consent"><input name="agree" type="checkbox" required><span>${c.agree}</span></label><button class="auth-submit" type="submit">${c.submit}</button></form><div class="auth-links">${link("login.html", c.login)}<a href="${lang === "ko" ? "ko/index.html" : "en/index.html"}">${t().home}</a></div>`);
    setupOAuthButtons(); setupPasswordToggles();
    document.getElementById("registerForm").addEventListener("submit", async (event) => { event.preventDefault(); const form = event.currentTarget; if (form.password.value.length < 8) { message(t().passwordRule, "error"); return; } if (form.password.value !== form.confirm.value) { message(t().passwordMismatch, "error"); return; } setBusy(form, true); try { await auth.signUp({ email: form.email.value.trim(), password: form.password.value, fullName: form.fullName.value.trim(), redirectTo: `${auth.config.mainSiteUrl}/login.html?lang=${lang}` }); message(t().successRegister, "success"); form.reset(); } catch (error) { message(errorText(error), "error"); } finally { setBusy(form, false); } });
  }

  function renderForgot() { const c = t().forgot; app.innerHTML = shell(`<h2>${c.title}</h2><p class="auth-desc">${c.desc}</p><form class="auth-form" id="forgotForm"><label>${c.email}<input name="email" type="email" autocomplete="email" required></label><button class="auth-submit" type="submit">${c.submit}</button></form><div class="auth-links">${link("login.html", c.login)}</div>`); document.getElementById("forgotForm").addEventListener("submit", async (event) => { event.preventDefault(); const form = event.currentTarget; setBusy(form, true); try { await auth.sendPasswordReset(form.email.value.trim(), `${auth.config.mainSiteUrl}/reset-password.html?lang=${lang}`); message(t().successReset, "success"); } catch (error) { message(errorText(error), "error"); } finally { setBusy(form, false); } }); }

  async function renderReset(authHash) { const c = t().reset; app.innerHTML = shell(`<h2>${c.title}</h2><p class="auth-desc">${c.desc}</p><form class="auth-form" id="resetForm">${passwordField(c.password, "password", "new-password")}${passwordField(c.confirm, "confirm", "new-password")}<button class="auth-submit" type="submit">${c.submit}</button></form>`); setupPasswordToggles(); if (!authHash && !await auth.getSession()) message(t().loginRequired, "error"); document.getElementById("resetForm").addEventListener("submit", async (event) => { event.preventDefault(); const form = event.currentTarget; if (form.password.value.length < 8) { message(t().passwordRule, "error"); return; } if (form.password.value !== form.confirm.value) { message(t().passwordMismatch, "error"); return; } setBusy(form, true); try { await auth.updatePassword(form.password.value); await auth.signOut(); message(t().successPassword, "success"); setTimeout(() => { location.href = `login.html?lang=${lang}`; }, 1300); } catch (error) { message(errorText(error), "error"); setBusy(form, false); } }); }

  async function renderMypage() { const c = t().mypage; app.innerHTML = shell(`<h2>${c.title}</h2><p class="auth-desc">${c.desc}</p><div id="dashboard" class="auth-dashboard"><p>${t().working}</p></div>`); const session = await auth.getSession(); const user = await auth.getUser(); if (!session || !user) { location.href = `login.html?lang=${lang}&return=${encodeURIComponent(location.href)}`; return; } let passes = []; try { passes = await auth.getEntitlements(); } catch (error) { message(errorText(error), "error"); } const names = { [auth.config.products.reflex]: c.reflex, [auth.config.products.healing]: c.healing }; const urls = { [auth.config.products.reflex]: auth.config.reflexAppUrl, [auth.config.products.healing]: auth.config.healingAppUrl }; document.getElementById("dashboard").innerHTML = `<div class="auth-user"><strong>${escapeHtml(user.user_metadata?.full_name || user.email)}</strong><span>${escapeHtml(user.email)}</span></div>${passes.length ? passes.map((pass) => `<div class="pass-card ${pass.active ? "active" : "expired"}"><h3>${escapeHtml(names[pass.product_code] || pass.product_code)}</h3><p>${pass.active ? (lang === "ko" ? "이용 가능" : "Active") : (lang === "ko" ? "만료 또는 비활성" : "Expired or inactive")}</p><p>${c.expires}: ${pass.expires_at ? new Date(pass.expires_at).toLocaleDateString(lang === "ko" ? "ko-KR" : "en-US") : "—"}</p>${pass.active ? `<a class="auth-button-secondary" href="${urls[pass.product_code] || "#"}">${c.open}</a>` : ""}</div>`).join("") : `<div class="pass-card"><p>${c.none}</p></div>`}<div class="pass-actions"><a class="auth-button-secondary" href="products.html">${c.buy}</a><button class="auth-button-secondary" id="logoutBtn">${c.logout}</button><a class="auth-button-secondary" href="admin-members.html?lang=${lang}">${c.admin}</a></div>`; document.getElementById("logoutBtn").onclick = async () => { await auth.signOut(); location.href = `login.html?lang=${lang}`; }; }

  async function renderAdmin() { const c = t().admin; app.innerHTML = shell(`<h2>${c.title}</h2><p class="auth-desc">${c.desc}</p><form class="auth-form" id="adminForm"><label>${c.email}<input name="email" type="email" required></label><label>${c.product}<select name="product"><option value="${auth.config.products.reflex}">${t().mypage.reflex}</option><option value="${auth.config.products.healing}">${t().mypage.healing}</option></select></label><label>${c.days}<input name="days" type="number" min="1" max="3650" value="30" required></label><button class="auth-submit" type="submit">${c.submit}</button></form><div class="auth-links">${link("mypage.html", c.back)}</div>`); const session = await auth.getSession(); if (!session) { location.href = `login.html?lang=${lang}&return=${encodeURIComponent(location.href)}`; return; } document.getElementById("adminForm").addEventListener("submit", async (event) => { event.preventDefault(); const form = event.currentTarget; setBusy(form, true); try { const current = await auth.getSession(); const response = await fetch("/.netlify/functions/grant-entitlement", { method: "POST", headers: { "Content-Type": "application/json", Authorization: `Bearer ${current.access_token}` }, body: JSON.stringify({ email: form.email.value.trim(), product_code: form.product.value, days: Number(form.days.value) }) }); const data = await response.json().catch(() => ({})); if (!response.ok) throw new Error(data.message || t().genericError); message(t().successGrant, "success"); form.reset(); form.days.value = 30; } catch (error) { message(errorText(error), "error"); } finally { setBusy(form, false); } }); }

  async function render() {
    commonIntro();
    const authHash = auth.consumeAuthHash();
    if (authHash?.session && (page === "login" || page === "register")) { const fallback = `${auth.config.mainSiteUrl}/${lang}/`; location.replace(auth.consumeOAuthReturn(fallback)); return; }
    const handlers = { login: renderLogin, register: renderRegister, forgot: renderForgot, reset: () => renderReset(authHash), mypage: renderMypage, admin: renderAdmin };
    await (handlers[page] || renderLogin)();
    const oauthError = params.get("error_description") || params.get("error"); if (oauthError) message(errorText(new Error(oauthError)), "error");
  }

  languageButtons.forEach((button) => button.addEventListener("click", () => { params.set("lang", button.dataset.lang); location.search = params.toString(); }));
  render();
})();
