(function () {
  'use strict';
  const script = document.currentScript;
  const product = script?.dataset.product || '';
  const lang = script?.dataset.lang === 'en' ? 'en' : 'ko';
  const mode = script?.dataset.mode || 'freemium'; // 'freemium' (default) or 'hard'
  const auth = window.NovaCellAuth;
  const text = lang === 'en' ? {
    title: 'Member Access Required',
    desc: 'Sign in with your NovaCell account to unlock the 1-Year Pass for this clinical guide.',
    email: 'Email',
    password: 'Password',
    login: 'Sign In',
    working: 'Checking...',
    setup: 'Membership system is not connected yet.',
    invalid: 'Incorrect email or password.',
    noPass: 'Your account does not have an active 1-Year Pass for this app.',
    buy: 'View 1-Year Pass Details',
    account: 'My Account',
    logout: 'Sign Out',
    member: 'Member',
    trialChip: '🌿 Free Preview | Get 1-Year Pass',
    vipChip: '👑 VIP Member (1-Year Pass)',
    close: 'Close',
    note: 'The same NovaCell account works across all apps. Sign-in is preserved in your browser.'
  } : {
    title: 'NovaCell 정회원 로그인',
    desc: 'NovaCell 계정으로 로그인하시면 1년 정기 패스의 모든 고급 기능이 즉시 잠금 해제됩니다.',
    email: '이메일',
    password: '비밀번호',
    login: '로그인',
    working: '확인 중...',
    setup: '회원 시스템 연결 전입니다.',
    invalid: '이메일 또는 비밀번호가 올바르지 않습니다.',
    noPass: '이 계정에는 현재 앱의 1년 정기 이용권이 등록되어 있지 않습니다.',
    buy: '1년 이용권 안내 보기',
    account: '마이페이지',
    logout: '로그아웃',
    member: '회원',
    trialChip: '🌿 무료 체험 모드 | 1년 패스 가입',
    vipChip: '👑 정회원 (1년 패스)',
    close: '닫기',
    note: '하나의 NovaCell 계정으로 모든 웹앱을 편리하게 이용하실 수 있습니다.'
  };

  const main = auth?.config?.mainSiteUrl || 'https://novacell.kr';
  let details = main + '/' + lang + '/';
  if (product === 'healing_points_1y') {
    details = main + '/' + lang + '/healing-points.html';
  } else if (product === 'reflex_therapy_1y') {
    details = main + '/' + lang + '/' + (lang === 'en' ? 'reflex-guide' : 'reflex-therapy-guide') + '.html';
  } else if (product === 'sound_studio_1y') {
    details = main + '/' + lang + '/sound-studio.html';
  }
  const accountUrl = main + '/mypage.html?lang=' + lang;

  window.NovaCellGate = {
    mode: mode,
    product: product,
    isVip: false,
    currentUser: null,
    showLogin: showLogin,
    showNoPass: showNoPass,
    hideGate: hideGate,
    unlock: unlock,
    check: check
  };

  function gate() {
    let element = document.getElementById('novacellAccessGate');
    if (!element) {
      element = document.createElement('div');
      element.id = 'novacellAccessGate';
      document.body.prepend(element);
    }
    return element;
  }

  function hideGate() {
    const el = document.getElementById('novacellAccessGate');
    if (el) {
      el.style.display = 'none';
    }
  }

  function brand() {
    return '<div class="nc-gate-brand"><span class="nc-gate-mark">N</span><span><strong>NovaCell Therapy</strong><small>MEMBER ACCESS</small></span></div>';
  }

  function message(value) {
    const box = document.getElementById('ncGateMessage');
    if (box) {
      box.textContent = value;
      box.classList.add('show');
    }
  }

  function showSetup() {
    if (mode === 'freemium') {
      enterFreemium();
      return;
    }
    document.body.className = document.body.className.replace(/novacell-access-(pending|granted|freemium)/g, 'novacell-access-blocked');
    const g = gate();
    g.style.display = 'grid';
    g.innerHTML = '<section class="nc-gate-card">' + brand() + '<h1>' + text.title + '</h1><p>' + text.setup + '</p><div class="nc-gate-actions"><a class="nc-gate-secondary" href="' + main + '/' + lang + '/">NovaCell Home</a></div></section>';
  }

  function showLogin() {
    const g = gate();
    g.style.display = 'grid';
    const closeBtnHtml = mode === 'freemium' ? '<button type="button" class="nc-gate-close" onclick="window.NovaCellGate.hideGate()" aria-label="' + text.close + '">×</button>' : '';
    g.innerHTML = '<section class="nc-gate-card" style="position:relative;">' + closeBtnHtml + brand() + '<h1>' + text.title + '</h1><p>' + text.desc + '</p><div id="ncGateMessage" class="nc-gate-message"></div><form id="ncGateForm" class="nc-gate-form"><label>' + text.email + '<input name="email" type="email" autocomplete="email" required></label><label>' + text.password + '<input name="password" type="password" autocomplete="current-password" minlength="8" required></label><button class="nc-gate-primary" type="submit">' + text.login + '</button></form><div class="nc-gate-actions"><a class="nc-gate-secondary" href="' + main + '/register.html?lang=' + lang + '">' + (lang === 'en' ? 'Create Account' : '회원가입') + '</a><a class="nc-gate-secondary" href="' + main + '/forgot-password.html?lang=' + lang + '">' + (lang === 'en' ? 'Reset Password' : '비밀번호 찾기') + '</a></div><p class="nc-gate-note">' + text.note + '</p></section>';
    setTimeout(() => {
      const ins = g.querySelectorAll('input');
      ins.forEach(inp => {
        inp.addEventListener('focus', () => {
          setTimeout(() => { inp.scrollIntoView({behavior:'smooth', block:'center'}); }, 260);
        });
      });
    }, 50);

    const form = document.getElementById('ncGateForm');
    if (form) {
      form.addEventListener('submit', async e => {
        e.preventDefault();
        const f = e.currentTarget;
        const button = f.querySelector('button');
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
    if (mode === 'freemium') {
      enterFreemium(user);
      return;
    }
    document.body.className = document.body.className.replace(/novacell-access-(pending|granted|freemium)/g, 'novacell-access-blocked');
    const g = gate();
    g.style.display = 'grid';
    g.innerHTML = '<section class="nc-gate-card">' + brand() + '<h1>' + text.noPass + '</h1><div class="nc-gate-user"><strong>' + (user?.user_metadata?.full_name || user?.email || text.member) + '</strong><span>' + (user?.email || '') + '</span></div><div class="nc-gate-actions"><a class="nc-gate-primary" href="' + details + '">' + text.buy + '</a><a class="nc-gate-secondary" href="' + accountUrl + '">' + text.account + '</a><button class="nc-gate-secondary" id="ncGateLogout">' + text.logout + '</button></div></section>';
    const logoutBtn = document.getElementById('ncGateLogout');
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
    chip.title = lang === 'en' ? 'Drag to move anywhere' : '마우스나 터치로 원하는 위치로 이동 가능';
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
  }

  function unlock(user) {
    window.NovaCellGate.isVip = true;
    window.NovaCellGate.currentUser = user;
    try {
      localStorage.setItem('novacell_vip_status', 'active');
      localStorage.setItem('novacell_reflex_vip', 'true');
      localStorage.setItem('novacell_healing_vip', 'true');
      localStorage.setItem('novacell_studio_vip', 'true');
    } catch(e) {}

    document.body.className = document.body.className.replace(/novacell-access-(pending|blocked)/g, 'novacell-access-granted');
    hideGate();

    let chip = document.getElementById('ncMemberChip');
    if (!chip) {
      chip = document.createElement('button');
      chip.id = 'ncMemberChip';
      chip.className = 'nc-member-chip';
      document.body.append(chip);
      makeDraggable(chip);
    }
    const memberName = user?.user_metadata?.full_name || user?.email || text.member;
    chip.innerHTML = '<span style="color:#f5ce6a;margin-right:4px;">👑</span> <span class="nc-chip-text">' + memberName + ' (VIP)</span> <span class="nc-chip-min" title="최소화">×</span>';
    chip.onclick = e => {
      if (chip.skipClick) { chip.skipClick = false; return; }
      if (e.target.closest('.nc-chip-min')) {
        e.stopPropagation();
        chip.classList.toggle('minimized');
        return;
      }
      if (chip.classList.contains('minimized')) {
        chip.classList.remove('minimized');
        return;
      }
      location.href = accountUrl;
    };

    window.dispatchEvent(new CustomEvent('novacell:vip-status-changed', { detail: { isVip: true, user: user } }));
  }

  function enterFreemium(user) {
    window.NovaCellGate.isVip = false;
    window.NovaCellGate.currentUser = user || null;
    try {
      localStorage.setItem('novacell_vip_status', 'free');
    } catch(e) {}

    document.body.className = document.body.className.replace(/novacell-access-(pending|blocked)/g, 'novacell-access-freemium novacell-access-granted');
    hideGate();

    let chip = document.getElementById('ncMemberChip');
    if (!chip) {
      chip = document.createElement('button');
      chip.id = 'ncMemberChip';
      chip.className = 'nc-member-chip nc-trial-chip';
      document.body.append(chip);
      makeDraggable(chip);
    }
    chip.className = 'nc-member-chip nc-trial-chip';
    chip.innerHTML = '<span style="color:#4ade80;margin-right:4px;">🌿</span> <span class="nc-chip-text">' + text.trialChip + '</span> <span class="nc-chip-min" title="최소화">×</span>';
    chip.onclick = e => {
      if (chip.skipClick) { chip.skipClick = false; return; }
      if (e.target.closest('.nc-chip-min')) {
        e.stopPropagation();
        chip.classList.toggle('minimized');
        return;
      }
      if (chip.classList.contains('minimized')) {
        chip.classList.remove('minimized');
        return;
      }
      if (typeof window.openAppVipModal === 'function') {
        window.openAppVipModal();
      } else if (typeof window.openReflexVipModal === 'function') {
        window.openReflexVipModal();
      } else if (typeof window.openHealingVipModal === 'function') {
        window.openHealingVipModal();
      } else if (typeof window.openVipModal === 'function') {
        window.openVipModal();
      } else {
        showLogin();
      }
    };

    window.dispatchEvent(new CustomEvent('novacell:vip-status-changed', { detail: { isVip: false, user: user } }));
  }

  async function check() {
    try {
      // Freemium initial setup: grant immediate view
      if (mode === 'freemium') {
        document.body.className = document.body.className.replace(/novacell-access-(pending|blocked)/g, 'novacell-access-freemium novacell-access-granted');
        hideGate();
      }

      if (auth && typeof auth.consumeAuthHash === 'function') {
        auth.consumeAuthHash();
      }
      if (!auth || !auth.configured()) {
        showSetup();
        return;
      }
      const session = await auth.getSession();
      if (!session) {
        if (mode === 'freemium') { enterFreemium(); } else { showLogin(); }
        return;
      }
      const user = await auth.getUser();
      if (!user) {
        if (mode === 'freemium') { enterFreemium(); } else { showLogin(); }
        return;
      }

      try {
        if (await auth.hasEntitlement(product)) {
          unlock(user);
        } else {
          showNoPass(user);
        }
      } catch (error) {
        if (mode === 'freemium') { enterFreemium(user); } else { showNoPass(user); }
      }
    } catch (unexpected) {
      console.error('NovaCell Gate check error:', unexpected);
      if (mode === 'freemium') { enterFreemium(); } else { showLogin(); }
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', check);
  } else {
    check();
  }
})();
