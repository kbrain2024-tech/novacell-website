/**
 * NovaCell Pain Clinic APP - Main Application Engine
 * Responsive Navigation, Real-time Search, 3D Translucent X-Ray Body Map,
 * Multi-Color Custom Target System, Drag-to-Position Pin Engine with Lock/Unlock,
 * 528Hz Cellular Voltage Timer, Bilingual KO/EN Engine
 */

(function () {
  'use strict';

  // State Management
  const state = {
    lang: localStorage.getItem('novacell_site_lang') || localStorage.getItem('nc_lang') || localStorage.getItem('novacell_pain_lang') || 'ko',
    cat: 'all',
    mech: 'all',
    query: '',
    activeConditionId: null,
    activeTargetIndex: 0,
    editingTargetId: null,
    pinLocked: true, // Default: Position Locked
    // Timer State
    timerSeconds: 300,
    timerTotalSeconds: 300,
    isTimerRunning: false,
    timerInterval: null,
    timerSoundEnabled: true,
    timerVolume: 0.65,
    audioCtx: null,
    oscNode: null,
    gainNode: null
  };

  // UI Multi-language Dictionary
  const i18n = {
    ko: {
      brandSub: '전신 통증 임상 프로토콜 가이드',
      navSoundStudio: '사운드 스튜디오',
      navHealingPoints: '힐링 포인트',
      langBtn: 'ENG',
      heroBadge: '46대 신경근골격계 질환 반투명 X-Ray 투시 타깃',
      heroTitle: 'NovaCell 전신 통증 클리닉',
      heroSub: '통증의 3대 핵심 병태생리(신경유착·힘줄견인·자율신경 오작동)를 분석하고, 3D 반투명 X-Ray 투시 해부도와 정밀 치료 타깃을 통해 NovaCell Therapy(노바셀 치료) 프로토콜을 제시합니다.',
      searchPlaceholder: '증상 또는 질환명 검색 (예: 두통, 어깨 결림, 손목 저림, 꼬리뼈, 발뒤꿈치, CTS)',
      mechAll: '전체 병태기전',
      mechNerve: '신경유착 (Nerve)',
      mechTendon: '힘줄견인 (Tendon)',
      mechAutonomic: '자율신경 (Autonomic Nerve)',
      sidebarTitle: '인체 구역별 질환 탐색',
      catAll: '전신 질환 전체보기',
      zoneHead: '두경부·안면',
      zoneUpper: '어깨·상지·수부',
      zoneTorso: '흉복부·몸통',
      zoneLumbar: '요추·골반·고관절',
      zoneLower: '무릎·발목·족부',
      zoneAutonomic: '자율신경축',
      statusShowing: '총 <strong>{count}개</strong>의 통증 질환 프로토콜이 표시 중입니다.',
      noResultsTitle: '일치하는 통증 질환을 찾을 수 없습니다.',
      noResultsDesc: '다른 검색어를 입력하시거나 카테고리/기전 필터를 [전체]로 변경해 보세요.',
      btnViewProtocol: '치료 프로토콜 보기',
      targetsCount: '치료 타깃 지정',
      modalStep1: '[Step 1] 주요 임상 증상',
      modalStep2: '[Step 2] 신경/근막 병태 생리 기전',
      modalStep3: '[Step 3] 치료포인트 타깃 조직 및 촉진 위치',
      modalStep4: '[Step 4] NovaCell Therapy 호전 증례',
      customTargetsTitle: '사용자 추가 치료 타깃 (Custom Targets)',
      btnAddCustomTarget: '치료 타깃 추가',
      dialogTitleAdd: '치료 타깃 추가',
      dialogTitleEdit: '치료 타깃 편집',
      formTargetName: '타깃 명칭 / 위치',
      formTargetGroup: '치료 분류',
      formTargetSize: '타깃 원 크기',
      formTargetColor: '타깃 색상 선택 (다양한 색상 팔레트)',
      formTargetNotes: '임상 메모 / 촉진 가이드',
      btnCancel: '취소',
      btnSave: '타깃 저장',
      timerTitle: '528Hz 세포 전압 치유 타이머',
      timerSub: '세포막 전압 정상화 · 싱잉볼 차임',
      timerStandby: '대기 (Standby)',
      timerRunning: '통전 중 (Running)',
      timerPaused: '일시정지 (Paused)',
      timerFinished: '완료 (Finished)',
      timerStartBtn: '통전 시작',
      timerPauseBtn: '일시 정지',
      timerResetBtn: '리셋',
      timerNextBtn: '다음 타깃 ❯',
      timerSoundOn: '치유음 켜짐',
      timerSoundOff: '치유음 꺼짐',
      timerDesc: '* <strong>528Hz 생체 주파수</strong>는 세포막 전압(Cell Voltage)을 조율하고 이완을 유도합니다. 타이머 종료 시 <strong>싱잉볼 차임 벨</strong>이 울립니다.',
      viewerBadge: '3D 반투명 X-Ray 투시 해부도 및 치료 타깃',
      viewerSub: '이미지를 클릭하여 맞춤 타깃 조준점을 지정할 수 있습니다',
      pinLockedBtn: '위치 고정됨',
      pinUnlockedBtn: '위치 이동 모드',
      pinDragHint: '위치 이동 모드 활성화: T1, T2 핀을 마우스/터치로 원하는 위치로 자유롭게 끌어다 놓으세요.',
      pinResetTitle: 'T1, T2 기본 위치로 되돌리기',
      labelsTitle: '주요 해부학 구조 (English Anatomical Labels)',
      footerText1: 'NovaCell Pain Clinic APP은 생체 전압(Cellular Voltage) 정상화와 공명 주파수를 통한 비침습 웰니스 프로토콜을 제공합니다.',
      footerText2: '본 애플리케이션의 모든 콘텐츠는 특허 및 독점 저작권 가이드라인을 준수하여 제작되었습니다. © 2026 NovaCell.kr All Rights Reserved.'
    },
    en: {
      brandSub: 'Systemic Pain Clinical Protocol Guide',
      navSoundStudio: 'Sound Studio',
      navHealingPoints: 'Healing Points',
      langBtn: '한글',
      heroBadge: '46 Neuro-Myofascial Disorders 3D X-Ray Target Scan',
      heroTitle: 'NovaCell Pain Clinic APP',
      heroSub: 'Analyzing the 3 core pain mechanisms (nerve entrapment, tendon traction, autonomic dysfunction) and presenting NovaCell Therapy precision protocols via 3D translucent X-Ray anatomy.',
      searchPlaceholder: 'Search symptoms or diseases (e.g., headache, shoulder pain, wrist numbness, heel pain, CTS)',
      mechAll: 'All Mechanisms',
      mechNerve: 'Nerve Entrapment',
      mechTendon: 'Tendon Traction',
      mechAutonomic: 'Autonomic Nerve',
      sidebarTitle: 'Anatomical Region Map',
      catAll: 'All Systemic Disorders',
      zoneHead: 'Head & Neck',
      zoneUpper: 'Shoulder & Upper Extremity',
      zoneTorso: 'Thorax & Abdomen',
      zoneLumbar: 'Lumbar Spine & Hip',
      zoneLower: 'Knee, Ankle & Foot',
      zoneAutonomic: 'Autonomic Spine Axis',
      statusShowing: 'Displaying <strong>{count}</strong> pain clinical protocols.',
      noResultsTitle: 'No matching pain conditions found.',
      noResultsDesc: 'Please try another search keyword or reset category/mechanism filters to [All].',
      btnViewProtocol: 'View Protocol',
      targetsCount: 'Treatment Targets',
      modalStep1: '[Step 1] Key Clinical Symptoms',
      modalStep2: '[Step 2] Neuro-Myofascial Pathophysiology',
      modalStep3: '[Step 3] Target Tissues & Palpation Guide',
      modalStep4: '[Step 4] NovaCell Therapy Clinical Case',
      customTargetsTitle: 'User Custom Treatment Targets',
      btnAddCustomTarget: 'Add Target Pin',
      dialogTitleAdd: 'Add Treatment Target',
      dialogTitleEdit: 'Edit Treatment Target',
      formTargetName: 'Target Name / Position',
      formTargetGroup: 'Category',
      formTargetSize: 'Target Pin Size',
      formTargetColor: 'Target Color Palette',
      formTargetNotes: 'Clinical Notes / Palpation Guide',
      btnCancel: 'Cancel',
      btnSave: 'Save Target',
      timerTitle: '528Hz Cell Voltage Healing Timer',
      timerSub: 'Cellular Voltage Regulation · Singing Bowl Chime',
      timerStandby: 'Standby',
      timerRunning: 'Running',
      timerPaused: 'Paused',
      timerFinished: 'Finished',
      timerStartBtn: 'Start Timer',
      timerPauseBtn: 'Pause',
      timerResetBtn: 'Reset',
      timerNextBtn: 'Next Target ❯',
      timerSoundOn: 'Sound On',
      timerSoundOff: 'Sound Off',
      timerDesc: '* <strong>528Hz bio-frequency</strong> normalizes cell membrane potential and stimulates deep relaxation. A gentle <strong>singing bowl chime</strong> sounds upon completion.',
      viewerBadge: '3D Translucent X-Ray Anatomy & Target Points',
      viewerSub: 'Click anywhere on the image to position custom target pins',
      pinLockedBtn: 'Position Locked',
      pinUnlockedBtn: 'Move Mode Active',
      pinDragHint: 'Move mode active: Drag T1, T2, or custom pins freely to adjust their positions.',
      pinResetTitle: 'Reset T1, T2 to defaults',
      labelsTitle: 'English Anatomical Labels',
      footerText1: 'NovaCell Pain Clinic APP provides non-invasive cellular voltage modulation and bio-resonance wellness protocols.',
      footerText2: 'All content complies with copyright guidelines and patent-pending methodologies. © 2026 NovaCell.kr All Rights Reserved.'
    }
  };

  function t(key) {
    return (i18n[state.lang] && i18n[state.lang][key]) || (i18n.ko[key] || key);
  }

  // DOM Elements Cache
  const el = {
    langBtn: document.getElementById('btn-lang-toggle'),
    searchInput: document.getElementById('search-input'),
    searchClearBtn: document.getElementById('search-clear-btn'),
    mechChipsWrap: document.getElementById('mech-chips-wrap'),
    catNavList: document.getElementById('category-nav-list'),
    conditionsGrid: document.getElementById('conditions-grid'),
    statusText: document.getElementById('status-text'),
    bodyXrayHotzones: document.querySelectorAll('.body-xray-hotzone'),
    modal: document.getElementById('protocol-modal'),
    modalDialog: document.getElementById('protocol-modal-dialog'),
    modalCloseBtn: document.getElementById('modal-close-btn'),
    customDialog: document.getElementById('custom-target-dialog'),
    customDialogClose: document.getElementById('dialog-target-close'),
    customTargetForm: document.getElementById('custom-target-form'),
    btnTargetCancel: document.getElementById('btn-target-cancel')
  };

  // Initialize
  function init() {
    setupEventListeners();
    renderStaticUI();
    renderCategories();
    renderConditions();
  }

  // Setup Event Listeners
  function setupEventListeners() {
    // Language Toggle
    el.langBtn?.addEventListener('click', () => {
      state.lang = state.lang === 'ko' ? 'en' : 'ko';
      localStorage.setItem('novacell_pain_lang', state.lang);
      renderStaticUI();
      renderCategories();
      renderConditions();
      if (state.activeConditionId !== null) {
        openConditionModal(state.activeConditionId);
      }
    });

    // Search Input
    el.searchInput?.addEventListener('input', (e) => {
      state.query = e.target.value.trim().toLowerCase();
      el.searchClearBtn?.classList.toggle('visible', state.query.length > 0);
      renderConditions();
    });

    // Search Clear
    el.searchClearBtn?.addEventListener('click', () => {
      if (el.searchInput) el.searchInput.value = '';
      state.query = '';
      el.searchClearBtn?.classList.remove('visible');
      renderConditions();
      el.searchInput?.focus();
    });

    // Mechanism Filter Chips
    el.mechChipsWrap?.addEventListener('click', (e) => {
      const chip = e.target.closest('.filter-chip');
      if (!chip) return;
      const mech = chip.getAttribute('data-mech');
      state.mech = mech;
      document.querySelectorAll('.filter-chip').forEach(c => c.classList.toggle('active', c === chip));
      renderConditions();
    });

    // 3D Full-Body X-Ray Hotzones
    el.bodyXrayHotzones?.forEach?.(zone => {
      zone.addEventListener('click', () => {
        const catNum = parseInt(zone.getAttribute('data-cat-num'), 10);
        state.cat = (state.cat === catNum) ? 'all' : catNum;
        updateActiveCategoryUI();
        renderConditions();
      });
    });

    // Modal Close
    el.modalCloseBtn?.addEventListener('click', closeModal);
    el.modal?.addEventListener('click', (e) => {
      if (e.target === el.modal) closeModal();
    });

    // Custom Target Dialog Close / Cancel
    el.customDialogClose?.addEventListener('click', closeCustomDialog);
    el.btnTargetCancel?.addEventListener('click', closeCustomDialog);

    // Color Swatches in Custom Dialog
    document.getElementById('color-palette-wrap')?.addEventListener('click', (e) => {
      const swatch = e.target.closest('.color-swatch');
      if (!swatch) return;
      document.querySelectorAll('.color-swatch').forEach(s => s.classList.remove('active'));
      swatch.classList.add('active');
      const color = swatch.getAttribute('data-color');
      const customColorPicker = document.getElementById('target-custom-color');
      if (customColorPicker) customColorPicker.value = color;
    });

    document.getElementById('target-custom-color')?.addEventListener('input', (e) => {
      document.querySelectorAll('.color-swatch').forEach(s => s.classList.remove('active'));
    });

    // Save Custom Target Form Submission
    el.customTargetForm?.addEventListener('submit', (e) => {
      e.preventDefault();
      saveCustomTarget();
    });

    // Keyboard Shortcuts
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        if (el.customDialog?.open) {
          closeCustomDialog();
        } else if (el.modal?.classList.contains('open')) {
          closeModal();
        }
      }
    });
  }

  // Update Static UI Texts based on language
  function renderStaticUI() {
    if (el.langBtn) el.langBtn.textContent = t('langBtn');

    document.querySelectorAll('[data-i18n]').forEach(elem => {
      const key = elem.getAttribute('data-i18n');
      elem.textContent = t(key);
    });

    if (el.searchInput) {
      el.searchInput.placeholder = t('searchPlaceholder');
    }
  }

  // Render Category Navigation List
  function renderCategories() {
    if (!el.catNavList) return;
    const cats = window.PAIN_CATEGORIES || {};
    const conditions = window.PAIN_CONDITIONS || [];

    let html = `
      <button type="button" class="cat-btn ${state.cat === 'all' ? 'active' : ''}" data-cat-num="all">
        <span class="cat-btn-content">
          <i class="fa-solid fa-layer-group text-cyan"></i>
          <span>${t('catAll')}</span>
        </span>
        <span class="cat-count-badge">${conditions.length}</span>
      </button>
    `;

    for (let i = 1; i <= 6; i++) {
      const cat = cats[i];
      if (!cat) continue;
      const count = conditions.filter(c => c.catNum === i).length;
      const isActive = state.cat === i;
      html += `
        <button type="button" class="cat-btn ${isActive ? 'active' : ''}" data-cat-num="${i}">
          <span class="cat-btn-content">
            <i class="fa-solid ${cat.icon}" style="color: ${cat.color};"></i>
            <span>${state.lang === 'en' ? cat.name_en : cat.name_ko}</span>
          </span>
          <span class="cat-count-badge">${count}</span>
        </button>
      `;
    }

    el.catNavList.innerHTML = html;

    // Attach click events
    el.catNavList?.querySelectorAll?.('.cat-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const val = btn.getAttribute('data-cat-num');
        state.cat = val === 'all' ? 'all' : parseInt(val, 10);
        updateActiveCategoryUI();
        renderConditions();
      });
    });

    updateActiveCategoryUI();
  }

  // Sync Category UI (Sidebar Buttons & 3D X-Ray Hotzones)
  function updateActiveCategoryUI() {
    el.catNavList?.querySelectorAll?.('.cat-btn').forEach(btn => {
      const val = btn.getAttribute('data-cat-num');
      const isMatch = (state.cat === 'all' && val === 'all') || (state.cat === parseInt(val, 10));
      btn.classList.toggle('active', isMatch);
    });

    el.bodyXrayHotzones?.forEach?.(zone => {
      const catNum = parseInt(zone.getAttribute('data-cat-num'), 10);
      zone.classList.toggle('active', state.cat === catNum);
    });
  }

  // Filter & Render Conditions Grid
  function renderConditions() {
    if (!el.conditionsGrid) return;
    const conditions = window.PAIN_CONDITIONS || [];
    const isEn = state.lang === 'en';

    const filtered = conditions.filter(c => {
      if (state.cat !== 'all' && c.catNum !== state.cat) return false;
      if (state.mech !== 'all' && !c.mechTags.includes(state.mech)) return false;

      if (state.query) {
        const titleKo = c.title.ko.toLowerCase();
        const titleEn = c.title.en.toLowerCase();
        const symptomsKo = c.symptoms.ko.toLowerCase();
        const searchKeywords = (c.searchKeywords || '').toLowerCase();
        const match = titleKo.includes(state.query) || 
                      titleEn.includes(state.query) || 
                      symptomsKo.includes(state.query) || 
                      searchKeywords.includes(state.query);
        if (!match) return false;
      }

      return true;
    });

    if (el.statusText) {
      el.statusText.innerHTML = t('statusShowing').replace('{count}', filtered.length);
    }

    if (filtered.length === 0) {
      el.conditionsGrid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px; background: rgba(15, 23, 42, 0.4); border-radius: 16px; border: 1px dashed rgba(255, 255, 255, 0.1);">
          <i class="fa-solid fa-magnifying-glass-chart" style="font-size: 2.5rem; color: #64748b; margin-bottom: 14px;"></i>
          <h4 style="font-size: 1.15rem; color: #f8fafc; margin-bottom: 8px;">${t('noResultsTitle')}</h4>
          <p style="font-size: 0.88rem; color: #94a3b8;">${t('noResultsDesc')}</p>
        </div>
      `;
      return;
    }

    let html = '';
    filtered.forEach(c => {
      const title = isEn ? c.title.en : c.title.ko;
      const subTitle = isEn ? c.title.ko : c.title.en;
      const mechName = isEn ? c.mechanism.en : c.mechanism.ko;
      const symptoms = isEn ? c.symptoms.en : c.symptoms.ko;
      const customTargets = getCustomTargets(c.id);
      const totalTargets = 2 + customTargets.length;

      html += `
        <article class="cond-card" data-id="${c.id}" onclick="window.NovaCellPainApp.openModal(${c.id})">
          <div class="cond-card-top">
            <span class="cond-id-badge">No. ${String(c.id).padStart(2, '0')}</span>
            <span class="cond-mech-badge">${mechName}</span>
          </div>
          
          <div class="cond-card-thumb-wrap">
            <img src="${c.diagram}" alt="${title}" class="cond-card-thumb" loading="lazy" />
          </div>

          <h3 class="cond-title-ko">${title}</h3>
          <p class="cond-title-en">${subTitle}</p>
          <p class="cond-symptoms-snippet">${symptoms}</p>

          <div class="cond-card-footer">
            <span class="cond-targets-count">
              <i class="fa-solid fa-crosshairs text-cyan"></i>
              <span>${t('targetsCount')} ${totalTargets}곳</span>
            </span>
            <span class="btn-open-protocol">
              <span>${t('btnViewProtocol')}</span>
              <i class="fa-solid fa-arrow-right"></i>
            </span>
          </div>
        </article>
      `;
    });

    el.conditionsGrid.innerHTML = html;
  }

  // =========================================================================
  // Target Coordinates Storage (T1, T2 & Custom Targets)
  // =========================================================================
  function getConditionTargetCoords(condId) {
    try {
      const raw = localStorage.getItem(`novacell_t1_t2_coords_${condId}`);
      if (raw) return JSON.parse(raw);
    } catch (e) {}
    return {
      t1: { x: 45.0, y: 38.0 },
      t2: { x: 56.0, y: 58.0 }
    };
  }

  function setConditionTargetCoords(condId, coords) {
    try {
      localStorage.setItem(`novacell_t1_t2_coords_${condId}`, JSON.stringify(coords));
    } catch (e) {
      console.warn('Coordinates save failed:', e);
    }
  }

  function getCustomTargets(condId) {
    try {
      const raw = localStorage.getItem(`novacell_custom_targets_${condId}`);
      return raw ? JSON.parse(raw) : [];
    } catch (e) {
      return [];
    }
  }

  function setCustomTargets(condId, list) {
    try {
      localStorage.setItem(`novacell_custom_targets_${condId}`, JSON.stringify(list));
    } catch (e) {
      console.warn('Storage save failed:', e);
    }
  }

  // =========================================================================
  // Open Detailed Inspector Modal
  // =========================================================================
  function openConditionModal(condId) {
    const conditions = window.PAIN_CONDITIONS || [];
    const cond = conditions.find(c => c.id === condId);
    if (!cond) return;

    if (typeof checkHealingVip === 'function' && !checkHealingVip() && condId > 2) {
      const isEn = state.lang === 'en';
      if (typeof openHealingVipModal === 'function') {
        openHealingVipModal(isEn ? cond.title.en : cond.title.ko);
      }
      return;
    }

    state.activeConditionId = condId;
    state.activeTargetIndex = 0;
    pauseTimer();
    state.timerSeconds = state.timerTotalSeconds;

    const isEn = state.lang === 'en';
    const title = isEn ? cond.title.en : cond.title.ko;
    const subTitle = isEn ? cond.title.ko : cond.title.en;
    const catName = isEn ? cond.category.en : cond.category.ko;
    const mechName = isEn ? cond.mechanism.en : cond.mechanism.ko;

    const modalBody = document.getElementById('modal-body-container');
    const modalTitleEl = document.getElementById('modal-disease-title');
    const modalSubEl = document.getElementById('modal-disease-sub');
    const modalIdBadge = document.getElementById('modal-id-badge');
    const modalMechBadge = document.getElementById('modal-mech-badge');

    if (modalTitleEl) modalTitleEl.textContent = title;
    if (modalSubEl) modalSubEl.textContent = `${catName} ∙ ${subTitle}`;
    if (modalIdBadge) modalIdBadge.textContent = `No. ${String(cond.id).padStart(2, '0')}`;
    if (modalMechBadge) modalMechBadge.textContent = mechName;

    const t1 = cond.targets[0] || {};
    const t2 = cond.targets[1] || {};
    const t1Name = isEn ? t1.name?.en : t1.name?.ko;
    const t1Desc = isEn ? t1.desc?.en : t1.desc?.ko;
    const t2Name = isEn ? t2.name?.en : t2.name?.ko;
    const t2Desc = isEn ? t2.desc?.en : t2.desc?.ko;

    let labelsHtml = '';
    (cond.anatomicalLabels || []).forEach(lbl => {
      labelsHtml += `<span class="anatomy-tag">${lbl}</span>`;
    });

    if (modalBody) {
      modalBody.innerHTML = `
        <!-- Left Column: 528Hz Timer & Clinical Protocols (Same Height as 3D Diagram) -->
        <div class="protocol-steps-column">
          <!-- 528Hz Cellular Voltage Healing Timer Card (Placed at top to match 3D Anatomy at exact same height) -->
          <article class="healing-timer-card" id="healing-timer-card" aria-label="528Hz 세포 전압 치유 타이머">
            <div class="timer-card-header">
              <div class="timer-brand-group">
                <span class="timer-wave-icon">〰</span>
                <div>
                  <h4>${t('timerTitle')}</h4>
                  <small>${t('timerSub')}</small>
                </div>
              </div>
              <span id="timer-status-badge" class="timer-status-badge">${t('timerStandby')}</span>
            </div>

            <!-- Active Target Synchronization Banner -->
            <div class="timer-point-banner">
              <div class="timer-point-tag">
                <span class="timer-point-eyebrow">TARGET TIMER</span>
                <span id="timer-target-code" class="timer-point-code">Target 1</span>
              </div>
              <strong id="timer-target-title" class="timer-point-title">${t1Name}</strong>
            </div>

            <div class="timer-body">
              <div class="timer-controls-row">
                <div class="timer-preset-group">
                  <button type="button" class="preset-btn active" data-sec="60">1분</button>
                  <button type="button" class="preset-btn" data-sec="120">2분</button>
                  <button type="button" class="preset-btn" data-sec="180">3분</button>
                  <button type="button" class="preset-btn" data-sec="300">5분</button>
                  <button type="button" class="preset-btn" data-sec="600">10분</button>
                </div>
                <div class="timer-adjust-group">
                  <button type="button" id="btn-timer-dec" class="timer-adjust-btn" title="30초 감소">-30초</button>
                  <button type="button" id="btn-timer-inc" class="timer-adjust-btn" title="30초 증가">+30초</button>
                </div>
              </div>

              <div class="timer-display-wrap">
                <output id="timer-display-text" class="timer-time-text">01:00</output>
                <div class="timer-freq-indicator">
                  <span id="freq-pulse-dot" class="freq-pulse-dot"></span>
                  <span>528Hz Cell Voltage Frequency</span>
                </div>
              </div>

              <div class="timer-bar-track">
                <div id="timer-bar-fill" class="timer-bar-fill" style="width: 100%;"></div>
              </div>

              <div class="timer-actions-row">
                <button type="button" id="btn-timer-toggle" class="timer-btn-primary">
                  <i class="fa-solid fa-play" id="timer-play-icon"></i>
                  <span id="timer-btn-label">${t('timerStartBtn')}</span>
                </button>
                <button type="button" id="btn-timer-reset" class="timer-btn-secondary">
                  <i class="fa-solid fa-rotate-left"></i>
                  <span>${t('timerResetBtn')}</span>
                </button>
                <button type="button" id="btn-timer-next" class="timer-btn-next" title="다음 타깃으로 이동">
                  <span>${t('timerNextBtn')}</span>
                </button>
                <button type="button" id="btn-timer-sound" class="timer-btn-sound" title="주파수 소리 토글">
                  <i class="fa-solid fa-volume-high" id="sound-icon"></i>
                  <span id="sound-label">${t('timerSoundOn')}</span>
                </button>
                <div class="timer-volume-wrap" title="음량 조절">
                  <i class="fa-solid fa-volume-low vol-icon"></i>
                  <input type="range" id="timer-vol-slider" class="timer-volume-slider" min="0" max="100" value="65" />
                  <span id="timer-vol-pct" class="vol-pct">65%</span>
                </div>
              </div>

              <p class="timer-desc">${t('timerDesc')}</p>
            </div>
          </article>

          <!-- Step 3: Target Tissues, Targets & Custom Targets (Target Selector synced with Timer) -->
          <div class="protocol-step-card">
            <div class="step-card-header">
              <span class="step-badge">STEP 3</span>
              <h4 class="step-title">${t('modalStep3')}</h4>
            </div>
            <p class="step-content-text" style="margin-bottom: 8px;">
              <strong>${isEn ? 'Target Tissues' : '타깃 조직'}:</strong> ${isEn ? cond.targetTissues.en : cond.targetTissues.ko}
            </p>
            <p class="step-content-text" style="font-size: 0.84rem; color: #94a3b8; margin-bottom: 12px;">
              <strong>${isEn ? 'Palpation Location' : '촉진 및 위치'}:</strong> ${isEn ? cond.palpation.en : cond.palpation.ko}
            </p>
            
            <!-- Default Targets 1 & 2 -->
            <div class="targets-sub-grid">
              <div class="target-mini-card active" id="card-target-0" onclick="window.NovaCellPainApp.selectTarget(0)">
                <div class="target-mini-card-title"><i class="fa-solid fa-crosshairs"></i> ${t1Name}</div>
                <div class="target-mini-card-desc">${t1Desc}</div>
              </div>
              <div class="target-mini-card" id="card-target-1" onclick="window.NovaCellPainApp.selectTarget(1)">
                <div class="target-mini-card-title"><i class="fa-solid fa-crosshairs"></i> ${t2Name}</div>
                <div class="target-mini-card-desc">${t2Desc}</div>
              </div>
            </div>

            <!-- Custom User Targets Header & List -->
            <div class="custom-targets-header">
              <span style="font-size: 0.82rem; font-weight: 750; color: #7dd3fc;">
                <i class="fa-solid fa-layer-group"></i> ${t('customTargetsTitle')}
              </span>
              <button type="button" class="btn-add-custom-target" onclick="window.NovaCellPainApp.openAddTargetDialog()">
                <i class="fa-solid fa-plus-circle"></i>
                <span>${t('btnAddCustomTarget')}</span>
              </button>
            </div>
            <div class="custom-targets-list" id="custom-targets-container">
              <!-- Dynamically populated -->
            </div>
          </div>

          <!-- Step 1: Key Symptoms -->
          <div class="protocol-step-card">
            <div class="step-card-header">
              <span class="step-badge">STEP 1</span>
              <h4 class="step-title">${t('modalStep1')}</h4>
            </div>
            <p class="step-content-text">${isEn ? cond.symptoms.en : cond.symptoms.ko}</p>
          </div>

          <!-- Step 2: Pathophysiology -->
          <div class="protocol-step-card">
            <div class="step-card-header">
              <span class="step-badge">STEP 2</span>
              <h4 class="step-title">${t('modalStep2')}</h4>
            </div>
            <p class="step-content-text">${isEn ? cond.pathophysiology.en : cond.pathophysiology.ko}</p>
          </div>

          <!-- Step 4: NovaCell Clinical Case -->
          <div class="protocol-step-card step-case-card">
            <div class="step-card-header">
              <span class="step-badge"><i class="fa-solid fa-bolt"></i> NOVACELL CASE</span>
              <h4 class="step-title">${t('modalStep4')}</h4>
            </div>
            <p class="step-content-text">${isEn ? cond.clinicalCase.en : cond.clinicalCase.ko}</p>
          </div>
        </div>

        <!-- Right Column: 3D Anatomical X-Ray Diagram & Interactive Pins Layer -->
        <div class="diagram-viewer-column">
          <div class="diagram-viewer-header">
            <div class="viewer-header-badge">
              <i class="fa-solid fa-dna text-cyan"></i>
              <span>${t('viewerBadge')}</span>
            </div>
            
            <!-- Pin Lock / Move Controls -->
            <div class="pin-lock-actions">
              <button type="button" class="btn-pin-lock ${state.pinLocked ? 'locked' : 'unlocked'}" id="btn-toggle-pin-lock" title="${state.pinLocked ? '위치 고정됨 (클릭하여 이동 모드로 전환)' : '위치 이동 모드 (마우스/터치로 핀을 끌어 위치를 조절하세요)'}">
                <i class="fa-solid ${state.pinLocked ? 'fa-lock' : 'fa-lock-open'}"></i>
                <span id="pin-lock-label">${state.pinLocked ? t('pinLockedBtn') : t('pinUnlockedBtn')}</span>
              </button>
              <button type="button" class="btn-pin-reset-coords" id="btn-reset-pin-coords" title="${t('pinResetTitle')}">
                <i class="fa-solid fa-rotate-left"></i>
              </button>
            </div>
          </div>

          <!-- Move Mode Guidance Banner -->
          <div class="pin-drag-hint-banner" id="pin-drag-hint-banner" style="display: ${state.pinLocked ? 'none' : 'flex'};">
            <i class="fa-solid fa-arrows-up-down-left-right text-gold"></i>
            <span>${t('pinDragHint')}</span>
          </div>

          <div class="diagram-stage ${state.pinLocked ? '' : 'drag-mode'}" id="diagram-stage" title="이미지를 클릭하여 치료 타깃 핀을 추가하세요">
            <img src="${cond.diagram}" alt="${title}" class="diagram-img" id="modal-diagram-img" />
            <!-- Overlaid Dynamic Pins -->
            <div class="diagram-pins-layer" id="diagram-pins-layer"></div>
          </div>

          <div style="margin-top: 14px;">
            <p style="font-size: 0.78rem; font-weight: 700; color: #94a3b8; margin-bottom: 6px;">
              <i class="fa-solid fa-tag text-cyan"></i> ${t('labelsTitle')}:
            </p>
            <div class="labels-tag-cloud">${labelsHtml}</div>
          </div>
        </div>
      `;
    }

    renderCustomTargetsUI(condId);
    setupTimerEvents(cond);
    setupDiagramClick(condId);
    setupPinLockAndDrag(condId);

    el.modal?.classList.add('open');
    document.documentElement.style.overflow = 'hidden'; document.body.style.overflow = 'hidden';
    document.body.classList.add('modal-open');
  }

  function closeModal() {
    pauseTimer();
    el.modal?.classList.remove('open');
    document.documentElement.style.overflow = ''; document.body.style.overflow = '';
    document.body.classList.remove('modal-open');
    state.activeConditionId = null;
  }

  // =========================================================================
  // Diagram Click & Target Pin Placement
  // =========================================================================
  function setupDiagramClick(condId) {
    const stage = document.getElementById('diagram-stage');
    if (!stage) return;

    stage.onclick = (e) => {
      // Don't trigger if clicked on existing pin or in move mode
      if (e.target.closest('.diagram-target-pin') || !state.pinLocked) return;

      const rect = stage.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const clickY = e.clientY - rect.top;

      const pctX = Math.max(5, Math.min(95, ((clickX / rect.width) * 100))).toFixed(1);
      const pctY = Math.max(5, Math.min(95, ((clickY / rect.height) * 100))).toFixed(1);

      openCustomTargetDialog(condId, null, pctX, pctY);
    };
  }

  // =========================================================================
  // Render Target Pins on 3D Diagram (with Saved Coords) & Custom Targets List
  // =========================================================================
  function renderCustomTargetsUI(condId) {
    const conditions = window.PAIN_CONDITIONS || [];
    const cond = conditions.find(c => c.id === condId);
    if (!cond) return;

    const coords = getConditionTargetCoords(condId);
    const customTargets = getCustomTargets(condId);
    const container = document.getElementById('custom-targets-container');
    const pinsLayer = document.getElementById('diagram-pins-layer');

    // 1. Render Step 3 Custom Targets List
    if (container) {
      if (customTargets.length === 0) {
        container.innerHTML = `
          <p style="font-size: 0.78rem; color: #64748b; font-style: italic; padding: 6px 0;">
            등록된 사용자 맞춤 타깃이 없습니다. [+ 치료 타깃 추가] 버튼이나 우측 해부도를 클릭해 추가하세요.
          </p>
        `;
      } else {
        let html = '';
        customTargets.forEach((ct, idx) => {
          const targetIndex = 2 + idx;
          const isActive = (state.activeTargetIndex === targetIndex);
          html += `
            <div class="custom-target-item ${isActive ? 'active' : ''}" data-custom-id="${ct.id}" style="--custom-color: ${ct.color};" onclick="window.NovaCellPainApp.selectTarget(${targetIndex})">
              <div class="custom-target-info">
                <span class="custom-target-name">
                  <span style="display:inline-block; width:8px; height:8px; border-radius:50%; background:${ct.color}; box-shadow:0 0 8px ${ct.color};"></span>
                  ${ct.name} <small style="color:#64748b; font-size:0.7rem;">(${ct.group || '치료'})</small>
                </span>
                <span class="custom-target-memo">${ct.notes || `위치: X ${ct.x}%, Y ${ct.y}%`}</span>
              </div>
              <div class="custom-target-actions" onclick="event.stopPropagation()">
                <button type="button" class="btn-custom-action" title="편집" onclick="window.NovaCellPainApp.openEditTargetDialog('${ct.id}')"><i class="fa-solid fa-pen"></i></button>
                <button type="button" class="btn-custom-action delete" title="삭제" onclick="window.NovaCellPainApp.deleteCustomTarget('${ct.id}')"><i class="fa-solid fa-trash-can"></i></button>
              </div>
            </div>
          `;
        });
        container.innerHTML = html;
      }
    }

    // 2. Render Overlaid Pins on 3D Diagram (T1, T2 & Custom Targets - Fully Transparent HUD)
    if (pinsLayer) {
      let pinsHtml = '';

      // Target 1 (Deep Navy Blue 곤색)
      const t1 = cond.targets[0] || {};
      const t1Name = state.lang === 'en' ? t1.name?.en : t1.name?.ko;
      const t1Active = (state.activeTargetIndex === 0);
      pinsHtml += `
        <div class="diagram-target-pin ${t1Active ? 'active' : ''}" data-pin-type="t1" style="left: ${coords.t1.x}%; top: ${coords.t1.y}%; --pin-color: #1e3a8a; --pin-size: 36px;" title="${t1Name} (클릭하여 선택 / 이동 모드 시 드래그)">
          <span class="pin-center-dot"></span>
          <span class="pin-pulse-ring"></span>
          <span class="pin-label-badge">T1</span>
        </div>
      `;

      // Target 2 (Deep Navy Blue 곤색)
      const t2 = cond.targets[1] || {};
      const t2Name = state.lang === 'en' ? t2.name?.en : t2.name?.ko;
      const t2Active = (state.activeTargetIndex === 1);
      pinsHtml += `
        <div class="diagram-target-pin ${t2Active ? 'active' : ''}" data-pin-type="t2" style="left: ${coords.t2.x}%; top: ${coords.t2.y}%; --pin-color: #1e3a8a; --pin-size: 36px;" title="${t2Name} (클릭하여 선택 / 이동 모드 시 드래그)">
          <span class="pin-center-dot"></span>
          <span class="pin-pulse-ring"></span>
          <span class="pin-label-badge">T2</span>
        </div>
      `;

      // User Custom Target Pins (Transparent HUD with chosen colors!)
      customTargets.forEach((ct, idx) => {
        const targetIndex = 2 + idx;
        const sizePx = ct.size === 'small' ? '28px' : (ct.size === 'large' ? '44px' : '36px');
        const ctActive = (state.activeTargetIndex === targetIndex);
        pinsHtml += `
          <div class="diagram-target-pin ${ctActive ? 'active' : ''}" data-pin-type="custom" data-custom-id="${ct.id}" style="left: ${ct.x}%; top: ${ct.y}%; --pin-color: ${ct.color}; --pin-size: ${sizePx};" title="${ct.name} (${ct.notes || ''})">
            <span class="pin-center-dot"></span>
            <span class="pin-pulse-ring"></span>
            <span class="pin-label-badge" style="border-color:${ct.color};">C${idx+1}</span>
          </div>
        `;
      });

      pinsLayer.innerHTML = pinsHtml;
    }
  }

  // =========================================================================
  // Drag to Position & Lock/Unlock Engine for Pins
  // =========================================================================
  function setupPinLockAndDrag(condId) {
    const lockBtn = document.getElementById('btn-toggle-pin-lock');
    const resetBtn = document.getElementById('btn-reset-pin-coords');
    const lockLabel = document.getElementById('pin-lock-label');
    const hintBanner = document.getElementById('pin-drag-hint-banner');
    const stage = document.getElementById('diagram-stage');
    const pinsLayer = document.getElementById('diagram-pins-layer');

    // Toggle Lock / Move Button
    lockBtn?.addEventListener('click', () => {
      state.pinLocked = !state.pinLocked;
      const isLocked = state.pinLocked;

      lockBtn.className = `btn-pin-lock ${isLocked ? 'locked' : 'unlocked'}`;
      if (lockLabel) lockLabel.textContent = isLocked ? t('pinLockedBtn') : t('pinUnlockedBtn');
      lockBtn.querySelector('i').className = `fa-solid ${isLocked ? 'fa-lock' : 'fa-lock-open'}`;

      if (hintBanner) hintBanner.style.display = isLocked ? 'none' : 'flex';
      stage?.classList.toggle('drag-mode', !isLocked);
    });

    // Reset Coordinates Button
    resetBtn?.addEventListener('click', () => {
      if (!confirm('T1, T2 핀 위치를 기본 위치로 되돌리시겠습니까?')) return;
      localStorage.removeItem(`novacell_t1_t2_coords_${condId}`);
      renderCustomTargetsUI(condId);
    });

    // Drag Logic on Pins
    if (!pinsLayer || !stage) return;

    let dragPin = null;
    let dragType = null;
    let dragCustomId = null;
    let startX = 0, startY = 0;
    let hasMoved = false;

    function onPointerDown(e) {
      const pin = e.target.closest('.diagram-target-pin');
      if (!pin) return;

      // In locked mode, click selects target
      if (state.pinLocked) {
        handlePinSelection(pin);
        return;
      }

      // In move mode, prepare drag
      e.preventDefault();
      e.stopPropagation();

      dragPin = pin;
      dragType = pin.getAttribute('data-pin-type');
      dragCustomId = pin.getAttribute('data-custom-id');
      hasMoved = false;

      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const clientY = e.touches ? e.touches[0].clientY : e.clientY;
      startX = clientX;
      startY = clientY;

      dragPin.classList.add('dragging');

      window.addEventListener('mousemove', onPointerMove, { passive: false });
      window.addEventListener('touchmove', onPointerMove, { passive: false });
      window.addEventListener('mouseup', onPointerUp);
      window.addEventListener('touchend', onPointerUp);
    }

    function onPointerMove(e) {
      if (!dragPin) return;
      e.preventDefault();

      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const clientY = e.touches ? e.touches[0].clientY : e.clientY;

      if (Math.hypot(clientX - startX, clientY - startY) > 3) {
        hasMoved = true;
      }

      const rect = stage.getBoundingClientRect();
      const pctX = Math.max(3, Math.min(97, ((clientX - rect.left) / rect.width) * 100));
      const pctY = Math.max(3, Math.min(97, ((clientY - rect.top) / rect.height) * 100));

      dragPin.style.left = `${pctX.toFixed(1)}%`;
      dragPin.style.top = `${pctY.toFixed(1)}%`;
    }

    function onPointerUp(e) {
      if (!dragPin) return;

      window.removeEventListener('mousemove', onPointerMove);
      window.removeEventListener('touchmove', onPointerMove);
      window.removeEventListener('mouseup', onPointerUp);
      window.removeEventListener('touchend', onPointerUp);

      dragPin.classList.remove('dragging');

      if (hasMoved) {
        const pctX = parseFloat(dragPin.style.left) || 50;
        const pctY = parseFloat(dragPin.style.top) || 50;

        if (dragType === 't1' || dragType === 't2') {
          const coords = getConditionTargetCoords(condId);
          if (dragType === 't1') coords.t1 = { x: pctX, y: pctY };
          if (dragType === 't2') coords.t2 = { x: pctX, y: pctY };
          setConditionTargetCoords(condId, coords);
        } else if (dragType === 'custom' && dragCustomId) {
          const customTargets = getCustomTargets(condId);
          const ct = customTargets.find(t => t.id === dragCustomId);
          if (ct) {
            ct.x = pctX;
            ct.y = pctY;
            setCustomTargets(condId, customTargets);
            
            // Step 3 목록의 맞춤 타깃 위치 안내 실시간 갱신
            const memoEl = document.querySelector(`.custom-target-item[data-custom-id="${ct.id}"] .custom-target-memo`);
            if (memoEl && !ct.notes) {
              memoEl.textContent = `위치: X ${pctX}%, Y ${pctY}%`;
            }
          }
        }
      } else {
        handlePinSelection(dragPin);
      }

      dragPin = null;
      dragType = null;
      dragCustomId = null;
    }

    function handlePinSelection(pin) {
      const type = pin.getAttribute('data-pin-type');
      if (type === 't1') {
        selectActiveTarget(0);
      } else if (type === 't2') {
        selectActiveTarget(1);
      } else if (type === 'custom') {
        const customId = pin.getAttribute('data-custom-id');
        const customTargets = getCustomTargets(condId);
        const idx = customTargets.findIndex(t => t.id === customId);
        if (idx !== -1) {
          selectActiveTarget(2 + idx);
        }
      }
    }

    pinsLayer.addEventListener('mousedown', onPointerDown);
    pinsLayer.addEventListener('touchstart', onPointerDown, { passive: false });
  }

  // Select Active Target for Timer & UI Sync
  function selectActiveTarget(targetIndex) {
    state.activeTargetIndex = targetIndex;
    const condId = state.activeConditionId;
    const conditions = window.PAIN_CONDITIONS || [];
    const cond = conditions.find(c => c.id === condId);
    if (!cond) return;

    const customTargets = getCustomTargets(condId);
    let targetCode = 'Target 1';
    let targetTitle = state.lang === 'en' ? cond.targets[0]?.name?.en : cond.targets[0]?.name?.ko;

    if (targetIndex === 0) {
      targetCode = 'Target 1';
      targetTitle = state.lang === 'en' ? cond.targets[0]?.name?.en : cond.targets[0]?.name?.ko;
    } else if (targetIndex === 1) {
      targetCode = 'Target 2';
      targetTitle = state.lang === 'en' ? cond.targets[1]?.name?.en : cond.targets[1]?.name?.ko;
    } else {
      const ctIndex = targetIndex - 2;
      const ct = customTargets[ctIndex];
      if (ct) {
        targetCode = `Custom ${ctIndex + 1}`;
        targetTitle = ct.name;
      }
    }

    // Sync banner in timer card
    const bannerCode = document.getElementById('timer-target-code');
    const bannerTitle = document.getElementById('timer-target-title');
    if (bannerCode) bannerCode.textContent = targetCode;
    if (bannerTitle) bannerTitle.textContent = targetTitle;

    // Highlight target cards and pins
    document.querySelectorAll('.target-mini-card').forEach((c, idx) => {
      c.classList.toggle('active', idx === targetIndex);
    });
    document.querySelectorAll('.custom-target-item').forEach((c, idx) => {
      c.classList.toggle('active', (idx + 2) === targetIndex);
    });
    document.querySelectorAll('.diagram-target-pin').forEach((pin, idx) => {
      pin.classList.toggle('active', idx === targetIndex);
    });
  }

  // =========================================================================
  // Custom Target Dialog Controls (Add / Edit / Save / Delete)
  // =========================================================================
  function openCustomTargetDialog(condId, targetToEdit = null, defaultX = 50.0, defaultY = 50.0) {
    const isEn = state.lang === 'en';
    state.editingTargetId = targetToEdit ? targetToEdit.id : null;

    const dialogTitle = document.getElementById('dialog-target-title');
    const nameInput = document.getElementById('target-name-input');
    const groupSelect = document.getElementById('target-group-select');
    const sizeSelect = document.getElementById('target-size-select');
    const notesInput = document.getElementById('target-notes-input');
    const coordX = document.getElementById('target-coord-x');
    const coordY = document.getElementById('target-coord-y');
    const hintText = document.getElementById('coords-hint-text');

    if (dialogTitle) dialogTitle.textContent = targetToEdit ? t('dialogTitleEdit') : t('dialogTitleAdd');

    if (targetToEdit) {
      if (nameInput) nameInput.value = targetToEdit.name;
      if (groupSelect) groupSelect.value = targetToEdit.group || 'treat';
      if (sizeSelect) sizeSelect.value = targetToEdit.size || 'medium';
      if (notesInput) notesInput.value = targetToEdit.notes || '';
      if (coordX) coordX.value = targetToEdit.x;
      if (coordY) coordY.value = targetToEdit.y;
      if (hintText) hintText.textContent = `타깃 위치: X ${targetToEdit.x}%, Y ${targetToEdit.y}%`;

      document.querySelectorAll('.color-swatch').forEach(s => {
        s.classList.toggle('active', s.getAttribute('data-color') === targetToEdit.color);
      });
      const customColorPicker = document.getElementById('target-custom-color');
      if (customColorPicker) customColorPicker.value = targetToEdit.color;
    } else {
      if (nameInput) nameInput.value = '';
      if (notesInput) notesInput.value = '';
      if (coordX) coordX.value = defaultX;
      if (coordY) coordY.value = defaultY;
      if (hintText) hintText.textContent = `타깃 위치: X ${defaultX}%, Y ${defaultY}% (해부도 클릭 위치 지정됨)`;

      document.querySelectorAll('.color-swatch').forEach((s, i) => s.classList.toggle('active', i === 0));
    }

    el.customDialog?.showModal();
  }

  function closeCustomDialog() {
    el.customDialog?.close();
    state.editingTargetId = null;
  }

  function saveCustomTarget() {
    const condId = state.activeConditionId;
    if (!condId) return;

    const nameInput = document.getElementById('target-name-input');
    const groupSelect = document.getElementById('target-group-select');
    const sizeSelect = document.getElementById('target-size-select');
    const notesInput = document.getElementById('target-notes-input');
    const coordX = document.getElementById('target-coord-x');
    const coordY = document.getElementById('target-coord-y');

    const activeSwatch = document.querySelector('.color-swatch.active');
    const customColor = document.getElementById('target-custom-color')?.value;
    const color = activeSwatch ? activeSwatch.getAttribute('data-color') : (customColor || '#ef4444');

    const targets = getCustomTargets(condId);

    if (state.editingTargetId) {
      const idx = targets.findIndex(t => t.id === state.editingTargetId);
      if (idx !== -1) {
        targets[idx].name = nameInput.value.trim();
        targets[idx].group = groupSelect.value;
        targets[idx].size = sizeSelect.value;
        targets[idx].notes = notesInput.value.trim();
        targets[idx].color = color;
      }
    } else {
      const newTarget = {
        id: 'target_' + Date.now(),
        name: nameInput.value.trim(),
        group: groupSelect.value,
        size: sizeSelect.value,
        notes: notesInput.value.trim(),
        color: color,
        x: parseFloat(coordX.value) || 50.0,
        y: parseFloat(coordY.value) || 50.0
      };
      targets.push(newTarget);
    }

    setCustomTargets(condId, targets);
    closeCustomDialog();
    renderCustomTargetsUI(condId);
    renderConditions();
  }

  function deleteCustomTarget(targetId) {
    const condId = state.activeConditionId;
    if (!condId) return;
    if (!confirm('이 치료 타깃을 삭제하시겠습니까?')) return;

    let targets = getCustomTargets(condId);
    targets = targets.filter(t => t.id !== targetId);
    setCustomTargets(condId, targets);
    state.activeTargetIndex = 0;
    renderCustomTargetsUI(condId);
    selectActiveTarget(0);
    renderConditions();
  }

  // =========================================================================
  // 528Hz Cellular Voltage Healing Timer Engine
  // =========================================================================
  function setupTimerEvents(cond) {
    const btnToggle = document.getElementById('btn-timer-toggle');
    const btnReset = document.getElementById('btn-timer-reset');
    const btnNext = document.getElementById('btn-timer-next');
    const btnSound = document.getElementById('btn-timer-sound');
    const volSlider = document.getElementById('timer-vol-slider');
    const btnDec = document.getElementById('btn-timer-dec');
    const btnInc = document.getElementById('btn-timer-inc');

    // Presets
    document.querySelectorAll('.preset-btn').forEach(btn => {
      btn.onclick = () => {
        document.querySelectorAll('.preset-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const sec = parseInt(btn.getAttribute('data-sec'), 10);
        state.timerTotalSeconds = sec;
        state.timerSeconds = sec;
        pauseTimer();
        updateTimerDisplay();
      };
    });

    btnToggle?.addEventListener('click', () => {
      if (state.isTimerRunning) {
        pauseTimer();
      } else {
        startTimer();
      }
    });

    btnReset?.addEventListener('click', () => {
      pauseTimer();
      state.timerSeconds = state.timerTotalSeconds;
      updateTimerDisplay();
    });

    btnNext?.addEventListener('click', () => {
      const customTargets = getCustomTargets(cond.id);
      const totalCount = 2 + customTargets.length;
      let nextIdx = (state.activeTargetIndex + 1) % totalCount;
      selectActiveTarget(nextIdx);
      pauseTimer();
      state.timerSeconds = state.timerTotalSeconds;
      updateTimerDisplay();
    });

    btnDec?.addEventListener('click', () => {
      state.timerSeconds = Math.max(10, state.timerSeconds - 30);
      updateTimerDisplay();
    });

    btnInc?.addEventListener('click', () => {
      state.timerSeconds += 30;
      if (state.timerSeconds > state.timerTotalSeconds) {
        state.timerTotalSeconds = state.timerSeconds;
      }
      updateTimerDisplay();
    });

    btnSound?.addEventListener('click', () => {
      state.timerSoundEnabled = !state.timerSoundEnabled;
      btnSound.classList.toggle('muted', !state.timerSoundEnabled);
      const soundIcon = document.getElementById('sound-icon');
      const soundLabel = document.getElementById('sound-label');
      if (soundIcon) soundIcon.className = state.timerSoundEnabled ? 'fa-solid fa-volume-high' : 'fa-solid fa-volume-xmark';
      if (soundLabel) soundLabel.textContent = state.timerSoundEnabled ? t('timerSoundOn') : t('timerSoundOff');

      if (!state.timerSoundEnabled) {
        stop528Tone();
      } else if (state.isTimerRunning) {
        play528Tone();
      }
    });

    volSlider?.addEventListener('input', (e) => {
      const vol = parseInt(e.target.value, 10) / 100;
      state.timerVolume = vol;
      const volPct = document.getElementById('timer-vol-pct');
      if (volPct) volPct.textContent = `${Math.round(vol * 100)}%`;
      if (state.gainNode) {
        state.gainNode.gain.setValueAtTime(vol * 0.15, state.audioCtx.currentTime);
      }
    });
  }

  function startTimer() {
    if (state.timerSeconds <= 0) {
      state.timerSeconds = state.timerTotalSeconds;
    }
    state.isTimerRunning = true;

    const playIcon = document.getElementById('timer-play-icon');
    const btnLabel = document.getElementById('timer-btn-label');
    const statusBadge = document.getElementById('timer-status-badge');
    const pulseDot = document.getElementById('freq-pulse-dot');

    if (playIcon) playIcon.className = 'fa-solid fa-pause';
    if (btnLabel) btnLabel.textContent = t('timerPauseBtn');
    if (statusBadge) {
      statusBadge.textContent = t('timerRunning');
      statusBadge.className = 'timer-status-badge running';
    }
    if (pulseDot) pulseDot.classList.add('pulsing');

    if (state.timerSoundEnabled) {
      play528Tone();
    }

    state.timerInterval = setInterval(() => {
      state.timerSeconds--;
      updateTimerDisplay();

      if (state.timerSeconds <= 0) {
        pauseTimer();
        onTimerComplete();
      }
    }, 1000);
  }

  function pauseTimer() {
    state.isTimerRunning = false;
    clearInterval(state.timerInterval);
    stop528Tone();

    const playIcon = document.getElementById('timer-play-icon');
    const btnLabel = document.getElementById('timer-btn-label');
    const statusBadge = document.getElementById('timer-status-badge');
    const pulseDot = document.getElementById('freq-pulse-dot');

    if (playIcon) playIcon.className = 'fa-solid fa-play';
    if (btnLabel) btnLabel.textContent = t('timerStartBtn');
    if (statusBadge) {
      statusBadge.textContent = state.timerSeconds <= 0 ? t('timerFinished') : t('timerPaused');
      statusBadge.className = 'timer-status-badge ' + (state.timerSeconds <= 0 ? 'finished' : 'paused');
    }
    if (pulseDot) pulseDot.classList.remove('pulsing');
  }

  function updateTimerDisplay() {
    const m = Math.floor(state.timerSeconds / 60);
    const s = state.timerSeconds % 60;
    const timeStr = `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;

    const display = document.getElementById('timer-display-text');
    const barFill = document.getElementById('timer-bar-fill');

    if (display) display.textContent = timeStr;
    if (barFill && state.timerTotalSeconds > 0) {
      const pct = Math.max(0, Math.min(100, (state.timerSeconds / state.timerTotalSeconds) * 100));
      barFill.style.width = `${pct}%`;
    }
  }

  function onTimerComplete() {
    const statusBadge = document.getElementById('timer-status-badge');
    if (statusBadge) {
      statusBadge.textContent = t('timerFinished');
      statusBadge.className = 'timer-status-badge finished';
    }

    if (navigator.vibrate) {
      navigator.vibrate([120, 80, 120]);
    }

    try {
      const audio = document.getElementById('singing-bowl-audio');
      if (audio) {
        audio.currentTime = 0;
        audio.volume = state.timerVolume;
        audio.play().catch(e => console.warn('Audio chime notice:', e));
      }
    } catch (e) {
      console.warn('Timer chime notice:', e);
    }
  }

  // 528Hz Pure Frequency Tone Generator (Web Audio API)
  function play528Tone() {
    try {
      if (!state.audioCtx) {
        state.audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      }
      if (state.audioCtx.state === 'suspended') {
        state.audioCtx.resume();
      }

      stop528Tone();

      state.oscNode = state.audioCtx.createOscillator();
      state.gainNode = state.audioCtx.createGain();

      state.oscNode.type = 'sine';
      state.oscNode.frequency.setValueAtTime(528, state.audioCtx.currentTime);

      state.gainNode.gain.setValueAtTime(state.timerVolume * 0.12, state.audioCtx.currentTime);

      state.oscNode.connect(state.gainNode);
      state.gainNode.connect(state.audioCtx.destination);

      state.oscNode.start();
    } catch (e) {
      console.warn('Web Audio 528Hz error:', e);
    }
  }

  function stop528Tone() {
    try {
      if (state.oscNode) {
        state.oscNode.stop();
        state.oscNode.disconnect();
        state.oscNode = null;
      }
    } catch (e) {}
  }

  // Expose to window
  window.NovaCellPainApp = {
    openModal: openConditionModal,
    closeModal: closeModal,
    selectTarget: selectActiveTarget,
    openAddTargetDialog: () => openCustomTargetDialog(state.activeConditionId),
    openEditTargetDialog: (targetId) => {
      const targets = getCustomTargets(state.activeConditionId);
      const target = targets.find(t => t.id === targetId);
      if (target) openCustomTargetDialog(state.activeConditionId, target);
    },
    deleteCustomTarget: deleteCustomTarget
  };

  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
