(function () {
  "use strict";
  const script = document.currentScript;
  const product = script?.dataset.product || "";
  const lang = script?.dataset.lang === "en" ? "en" : "ko";
  const auth = window.NovaCellAuth;
  const text = lang === "en" ? {
    title:"Member access required",desc:"Sign in with your NovaCell account. This app opens only when the matching pass is active.",email:"Email",password:"Password",login:"Sign In",working:"Checking...",setup:"Membership has not been connected yet. The site administrator must complete the Supabase setup.",invalid:"Incorrect email or password.",noPass:"Your account does not have an active pass for this app.",buy:"View Pass Information",account:"My Account",logout:"Sign Out",member:"Member",note:"The same NovaCell account can be used for both paid guides. Sign-in is required separately on each subdomain during this pilot stage."
  } : {
    title:"회원 로그인이 필요합니다",desc:"NovaCell 회원 계정으로 로그인하세요. 해당 앱의 이용권이 활성 상태일 때만 입장할 수 있습니다.",email:"이메일",password:"비밀번호",login:"로그인",working:"확인 중...",setup:"회원 시스템 연결 전입니다. 사이트 관리자가 Supabase 설정을 완료해야 합니다.",invalid:"이메일 또는 비밀번호가 올바르지 않습니다.",noPass:"이 계정에는 현재 앱의 유효한 이용권이 없습니다.",buy:"이용권 안내 보기",account:"마이페이지",logout:"로그아웃",member:"회원",note:"동일한 NovaCell 계정으로 두 유료 가이드를 이용할 수 있습니다. 현재 시험 단계에서는 각 하위 도메인에서 한 번씩 로그인합니다."
  };
  const main = auth?.config?.mainSiteUrl || "https://novacell.kr";
  const details = product === auth?.config?.products?.healing ? `${main}/${lang}/healing-points.html` : `${main}/${lang}/${lang==="en"?"reflex-guide":"reflex-therapy-guide"}.html`;
  const accountUrl = `${main}/mypage.html?lang=${lang}`;

  function gate() {
    let element = document.getElementById("novacellAccessGate");
    if (!element) {
      element = document.createElement("div");
      element.id = "novacellAccessGate";
      document.body.prepend(element);
    }
    return element;
  }
  function brand() {
    return `<div class="nc-gate-brand"><span class="nc-gate-mark">N</span><span><strong>NovaCell Therapy</strong><small>MEMBER ACCESS</small></span></div>`;
  }
  function message(value) {
    const box = document.getElementById("ncGateMessage");
    if (box) {
      box.textContent = value;
      box.classList.add("show");
    }
  }
  function showSetup() {
    document.body.className = document.body.className.replace(/novacell-access-(pending|granted)/g, "novacell-access-blocked");
    gate().innerHTML = `<section class="nc-gate-card">${brand()}<h1>${text.title}</h1><p>${text.setup}</p><div class="nc-gate-actions"><a class="nc-gate-secondary" href="${main}/${lang}/">NovaCell Home</a></div></section>`;
  }
  function showLogin() {
    document.body.className = document.body.className.replace(/novacell-access-(pending|granted)/g, "novacell-access-blocked");
    gate().innerHTML = `<section class="nc-gate-card">${brand()}<h1>${text.title}</h1><p>${text.desc}</p><div id="ncGateMessage" class="nc-gate-message"></div><form id="ncGateForm" class="nc-gate-form"><label>${text.email}<input name="email" type="email" autocomplete="email" required></label><label>${text.password}<input name="password" type="password" autocomplete="current-password" minlength="8" required></label><button class="nc-gate-primary" type="submit">${text.login}</button></form><div class="nc-gate-actions"><a class="nc-gate-secondary" href="${main}/register.html?lang=${lang}">${lang==="en"?"Create Account":"회원가입"}</a><a class="nc-gate-secondary" href="${main}/forgot-password.html?lang=${lang}">${lang==="en"?"Reset Password":"비밀번호 찾기"}</a></div><p class="nc-gate-note">${text.note}</p></section>`;
    setTimeout(() => {
      const ins = gate().querySelectorAll("input");
      ins.forEach(inp => {
        inp.addEventListener("focus", () => {
          setTimeout(() => { inp.scrollIntoView({behavior:"smooth", block:"center"}); }, 260);
        });
      });
    }, 50);
    const form = document.getElementById("ncGateForm");
    if (form) {
      form.addEventListener("submit", async e => {
        e.preventDefault();
        const f = e.currentTarget;
        const button = f.querySelector("button");
        const label = button.textContent;
        button.disabled = true;
        button.textContent = text.working;
        try {
          await auth.signIn({ email: f.email.value.trim(), password: f.password.value });
          await check();
        } catch (_) {
          message(text.invalid);
          button.disabled = false;
          button.textContent = label;
        }
      });
    }
  }
  async function showNoPass(user) {
    document.body.className = document.body.className.replace(/novacell-access-(pending|granted)/g, "novacell-access-blocked");
    gate().innerHTML = `<section class="nc-gate-card">${brand()}<h1>${text.noPass}</h1><div class="nc-gate-user"><strong>${user?.user_metadata?.full_name || user?.email || text.member}</strong><span>${user?.email || ""}</span></div><div class="nc-gate-actions"><a class="nc-gate-primary" href="${details}">${text.buy}</a><a class="nc-gate-secondary" href="${accountUrl}">${text.account}</a><button class="nc-gate-secondary" id="ncGateLogout">${text.logout}</button></div></section>`;
    const logoutBtn = document.getElementById("ncGateLogout");
    if (logoutBtn) {
      logoutBtn.onclick = async () => {
        await auth.signOut();
        showLogin();
      };
    }
  }
  function makeDraggable(chip) {
    let isDragging = false, startX = 0, startY = 0, startLeft = 0, startTop = 0, moved = false;
    try {
      const saved = localStorage.getItem('nc_chip_pos');
      if (saved) {
        const pos = JSON.parse(saved);
        const maxX = Math.max(10, window.innerWidth - 100);
        const maxY = Math.max(10, window.innerHeight - 45);
        chip.style.left = Math.min(Math.max(10, pos.x), maxX) + 'px';
        chip.style.top = Math.min(Math.max(10, pos.y), maxY) + 'px';
        chip.style.right = 'auto';
        chip.style.bottom = 'auto';
      }
    } catch (e) {}
    chip.title = lang === 'en' ? 'My Account (Drag to move anywhere)' : '마이페이지 (마우스나 터치로 원하는 위치로 이동 가능)';
    chip.addEventListener('pointerdown', e => {
      if (e.button !== 0) return;
      isDragging = true;
      moved = false;
      startX = e.clientX;
      startY = e.clientY;
      const rect = chip.getBoundingClientRect();
      startLeft = rect.left;
      startTop = rect.top;
      chip.setPointerCapture(e.pointerId);
      chip.classList.add('dragging');
    });
    chip.addEventListener('pointermove', e => {
      if (!isDragging) return;
      const dx = e.clientX - startX, dy = e.clientY - startY;
      if (Math.hypot(dx, dy) > 4) moved = true;
      if (!moved) return;
      const newLeft = Math.min(Math.max(8, startLeft + dx), window.innerWidth - chip.offsetWidth - 8);
      const newTop = Math.min(Math.max(8, startTop + dy), window.innerHeight - chip.offsetHeight - 8);
      chip.style.left = newLeft + 'px';
      chip.style.top = newTop + 'px';
      chip.style.right = 'auto';
      chip.style.bottom = 'auto';
    });
    const onUp = e => {
      if (!isDragging) return;
      isDragging = false;
      chip.classList.remove('dragging');
      if (chip.hasPointerCapture(e.pointerId)) chip.releasePointerCapture(e.pointerId);
      if (moved) {
        chip.skipClick = true;
        try {
          const rect = chip.getBoundingClientRect();
          localStorage.setItem('nc_chip_pos', JSON.stringify({ x: rect.left, y: rect.top }));
        } catch (err) {}
      }
    };
    chip.addEventListener('pointerup', onUp);
    chip.addEventListener('pointercancel', onUp);
    chip.onclick = e => {
      if (chip.skipClick) {
        chip.skipClick = false;
        e.preventDefault();
        e.stopPropagation();
        return;
      }
      location.href = accountUrl;
    };
  }
  function unlock(user) {
    document.body.className = document.body.className.replace(/novacell-access-(pending|blocked)/g, "novacell-access-granted");
    gate().innerHTML = "";
    let chip = document.getElementById("ncMemberChip");
    if (!chip) {
      chip = document.createElement("button");
      chip.id = "ncMemberChip";
      chip.className = "nc-member-chip";
      document.body.append(chip);
      makeDraggable(chip);
    }
    const memberName = user?.user_metadata?.full_name || user?.email || text.member;
    chip.textContent = "● " + memberName;
    const coverScreen = document.getElementById("welcome-cover-screen");
    if (coverScreen) {
      coverScreen.classList.remove("closed");
      if (window.app && typeof window.app.openCover === "function") {
        window.app.openCover();
      }
    }
  }
  async function check() {
    try {
      if (auth && typeof auth.consumeAuthHash === "function") {
        auth.consumeAuthHash();
      }
      if (!auth || !auth.configured()) {
        showSetup();
        return;
      }
      const session = await auth.getSession();
      if (!session) {
        showLogin();
        return;
      }
      const user = await auth.getUser();
      if (!user) {
        showLogin();
        return;
      }
      try {
        if (await auth.hasEntitlement(product)) {
          unlock(user);
        } else {
          showNoPass(user);
        }
      } catch (error) {
        message(error.message || text.setup);
        showNoPass(user);
      }
    } catch (unexpected) {
      console.error("NovaCell Gate check failed:", unexpected);
      showLogin();
    }
  }
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", check);
  } else {
    check();
  }
})();
