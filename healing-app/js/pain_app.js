/**
 * NovaCell Pain Clinic APP - Unified Master Application Engine (64 Conditions · 257 Precision Targets)
 * Integrated from E:\통증 자료실 (Chapters 1-9 Master Bible & 18 Tongsa Books) +
 * NovaCell Healing & Pain Clinic (32/46) + Solavre.kr 11 Specialty Pain Clinics (51)
 * Features:
 * - Solavre.kr Interactive Target Canvas (Multi-Target T1~T5+ Transparent HUD Pins)
 * - 1-Click Quick Target Addition (+ 치료 포인트 추가), Drag-to-Position, Click-to-Move, Edit & Reset
 * - 11 Specialty Pain Clinics Filter + 6 Anatomical Region Tabs + 3 Pathophysiology Mechanism Tabs
 * - 528Hz Cellular Voltage Healing Timer + Singing Bowl Chime + Bilingual KO/EN Support
 */

(function () {
  'use strict';

  const DEFAULT_PIN_COLORS = ['#ff334b', '#00f5d4', '#ff9f43', '#38bdf8', '#a855f7', '#10b981', '#fbbf24', '#ec4899'];

  // State Management
  const state = {
    lang: localStorage.getItem('novacell_site_lang') || localStorage.getItem('nc_lang') || localStorage.getItem('novacell_pain_lang') || 'ko',
    cat: 'all',
    clinic: 'all',
    mech: 'all',
    query: '',
    activeConditionId: null,
    activeTargetIndex: 0,
    activePinKey: 't1',
    editingTargetId: null,
    pinLocked: false, // Default: Move Mode Unlocked (Solavre Interactive Target Canvas standard)
    // Timer State
    timerSeconds: 60,
    timerTotalSeconds: 60,
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
      brandSub: '11개 특화 통증클리닉 · 64대 전신 질환 · 257 정밀 치료 타깃',
      navSoundStudio: '사운드 스튜디오',
      navHealingPoints: '힐링 포인트',
      langBtn: 'ENG',
      heroBadge: '11개 특화 통증클리닉 · 64대 전신 질환 · 257개 정밀 3D X-Ray 치료 타깃',
      heroTitle: 'NovaCell 3D 통증 클리닉 통합 마스터',
      heroSub: '통증의 3대 핵심 병태생리(신경포착·힘줄견인·자율신경 기능실조)와 박창혁 박사의 골타치·신경포착·제1~4선 해부학 치료 포인트를 통합하여, 3D 반투명 X-Ray 투시 해부도와 다중 정밀 타깃(T1~T5+) 프로토콜을 제시합니다.',
      searchPlaceholder: '질환명, 증상, 신경명, 치료 타깃 검색 (예: 소흉근, 턱관절, 테니스엘보, 후두신경, C5-6...)',
      mechAll: '전체 병태기전 (64)',
      mechNerve: '신경포착 (Nerve)',
      mechTendon: '골타치·힘줄견인 (Tendon)',
      mechAutonomic: '자율신경·도수 (Autonomic & AKA)',
      sidebarTitle: '인체 구역별 질환 탐색',
      catAll: '전신 질환 전체보기',
      zoneHead: '두경부·안면',
      zoneUpper: '어깨·상지·수부',
      zoneTorso: '흉복부·몸통',
      zoneLumbar: '요추·골반·고관절',
      zoneLower: '무릎·발목·족부',
      zoneAutonomic: '자율신경축',
      statusShowing: '총 <strong>{count}개</strong>의 통증 질환 프로토콜 (정밀 치료 타깃 <strong>{targetCount}곳</strong>)이 표시 중입니다.',
      noResultsTitle: '일치하는 통증 질환을 찾을 수 없습니다.',
      noResultsDesc: '다른 검색어를 입력하시거나 카테고리/특화클리닉/기전 필터를 [전체]로 변경해 보세요.',
      btnViewProtocol: '3D 타깃 & 프로토콜 보기',
      targetsCount: '정밀 치료 타깃',
      modalStep1: '[Step 1] 주요 임상 증상 (Key Symptoms)',
      modalStep2: '[Step 2] 신경·근막·골막 병태생리 기전 (Pathophysiology)',
      modalStep3: '[Step 3] 다중 치료 포인트 타깃 조직 및 촉지·시술 가이드',
      modalStep4: '[Step 4] NovaCell Therapy & 임상 호전 증례',
      customTargetsTitle: '사용자 추가 치료 타깃 (Custom Targets)',
      btnAddCustomTarget: '상세 타깃 추가',
      dialogTitleAdd: '치료 타깃 추가',
      dialogTitleEdit: '치료 타깃 편집',
      formTargetName: '타깃 명칭 / 해부학 위치',
      formTargetGroup: '치료 분류',
      formTargetSize: '타깃 원 크기',
      formTargetColor: '타깃 색상 선택 (다양한 색상 팔레트)',
      formTargetNotes: '임상 메모 / 촉지 및 시술 가이드',
      btnCancel: '취소',
      btnSave: '타깃 저장',
      timerTitle: '528Hz 세포 전압 치유 타이머',
      timerSub: '세포막 전압(-50mV) 정상화 · 싱잉볼 차임',
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
      timerDesc: '* <strong>528Hz 생체 주파수</strong>는 세포막 전압(Cell Voltage)을 조율하고 심부 조직 이완을 유도합니다. 타이머 종료 시 <strong>싱잉볼 차임 벨</strong>이 울립니다.',
      viewerBadge: '3D 투시 해부도 및 정밀 치료 타깃 (Interactive Target Canvas)',
      pinLockedBtn: '위치 고정됨',
      pinUnlockedBtn: '위치 이동 모드',
      btnQuickAddPin: '치료 포인트 추가',
      btnResetPins: '기본위치 복원',
      pinDragHint: '💡 위치 이동 모드: 핀을 끌어놓거나 해부도를 클릭해 치료점을 이동·추가하세요 (드래그로 이동 가능)',
      labelsTitle: '주요 해부학 구조 (Anatomical Structures)',
      xrayTag: '3D 해부학 정밀 치료 타깃',
      modalCloseText: '닫기 (목록으로)',
      modalReturnList: '64대 통증 질환 목록으로 돌아가기',
      targetTissues: '핵심 타깃 조직',
      palpationLocation: '촉지 및 시술 지표',
      noCustomTargets: '추가된 환자 맞춤 타깃이 없습니다. 우측 상단 [+ 치료 포인트 추가] 버튼이나 해부도를 클릭해 즉시 추가하세요.',
      docTitle: 'NovaCell Healing & Pain Clinic | 3D 통증 클리닉 64종 통합 마스터 (257 정밀 타깃)',
      navTherapy: '질환별 힐링 포인트',
      navPain: '3D 통증 클리닉 (64종)',
      navChakra: '차크라 바이오 포인트',
      navCircuit: '신경 생체 회로',
      navHome: '🌐 공식 홈페이지 ↗',
      navCover: '메인 대문',
      mNavTherapy: '힐링 포인트',
      mNavPain: '3D 통증 클리닉',
      mNavChakra: '차크라 바이오',
      mNavCircuit: '신경 생체 회로',
      mNavHome: '공식 홈 ↗',
      footerText1: 'NovaCell Healing & Pain Clinic APP은 세포 전압(Cellular Voltage) 정상화와 정밀 해부학 타깃을 통한 통합 통증 치료 프로토콜을 제공합니다.',
      footerText2: '본 애플리케이션의 모든 콘텐츠는 특허 및 독점 저작권 가이드라인을 준수하여 제작되었습니다. © 2026 NovaCell.kr All Rights Reserved.'
    },
    en: {
      brandSub: '11 Specialty Pain Clinics · 64 Systemic Conditions · 257 Precision Targets',
      navSoundStudio: 'Sound Studio',
      navHealingPoints: 'Healing Points',
      langBtn: '한글',
      heroBadge: '11 Specialty Pain Clinics · 64 Systemic Disorders · 257 3D X-Ray Targets',
      heroTitle: 'NovaCell 3D Pain Clinic Master Suite',
      heroSub: 'Integrating the 3 core pain mechanisms (nerve entrapment, tendon/periosteal traction, autonomic dysfunction) with multi-layer 3D translucent X-Ray treatment points (T1~T5+).',
      searchPlaceholder: 'Search symptoms, diseases, nerves, or targets (e.g., pectoralis minor, TMJ, tennis elbow, GON...)',
      mechAll: 'All Mechanisms (64)',
      mechNerve: 'Nerve Entrapment',
      mechTendon: 'Bone-Touch & Tendon',
      mechAutonomic: 'Autonomic & AKA Manual',
      sidebarTitle: 'Anatomical Region Map',
      catAll: 'All 64 Systemic Disorders',
      zoneHead: 'Head, Face & Neck',
      zoneUpper: 'Shoulder & Upper Limb',
      zoneTorso: 'Thorax & Trunk',
      zoneLumbar: 'Lumbar, Pelvis & Hip',
      zoneLower: 'Knee, Ankle & Foot',
      zoneAutonomic: 'Autonomic Spine Axis',
      statusShowing: 'Displaying <strong>{count}</strong> clinical protocols (<strong>{targetCount}</strong> precision targets).',
      noResultsTitle: 'No matching pain conditions found.',
      noResultsDesc: 'Please try another keyword or reset category/clinic/mechanism filters to [All].',
      btnViewProtocol: '3D Targets & Protocol',
      targetsCount: 'Precision Targets',
      modalStep1: '[Step 1] Key Clinical Symptoms',
      modalStep2: '[Step 2] Neuro-Myofascial & Periosteal Pathophysiology',
      modalStep3: '[Step 3] Multi-Layer Treatment Points & Palpation Guide',
      modalStep4: '[Step 4] NovaCell Therapy Clinical Case',
      customTargetsTitle: 'User Custom Treatment Targets',
      btnAddCustomTarget: 'Custom Target Form',
      dialogTitleAdd: 'Add Treatment Target',
      dialogTitleEdit: 'Edit Treatment Target',
      formTargetName: 'Target Name / Anatomical Position',
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
      viewerBadge: '3D Translucent X-Ray & Precision Targets (Interactive Target Canvas)',
      pinLockedBtn: 'Position Locked',
      pinUnlockedBtn: 'Move Mode',
      btnQuickAddPin: 'Add Target Point',
      btnResetPins: 'Reset Defaults',
      pinDragHint: '💡 Move Mode: Drag any pin or click the anatomy diagram to move/add treatment points',
      labelsTitle: 'Key Anatomical Structures',
      xrayTag: '3D Anatomical Precision Targets',
      modalCloseText: 'Close (Back to List)',
      modalReturnList: 'Back to 64 Pain Conditions List',
      targetTissues: 'Target Tissues',
      palpationLocation: 'Palpation & Landmark',
      noCustomTargets: 'No custom targets added yet. Use [+ Add Target Point] on the canvas to add pins instantly.',
      docTitle: 'NovaCell Healing & Pain Clinic | 3D Pain Clinic 64 Conditions Master Guide',
      navTherapy: 'Therapy Points',
      navPain: '3D Pain Clinic (64)',
      navChakra: 'Chakra Bio Points',
      navCircuit: 'Biological Circuits',
      navHome: '🌐 Official Home ↗',
      navCover: 'Main Welcome',
      mNavTherapy: 'Therapy Points',
      mNavPain: '3D Pain Clinic',
      mNavChakra: 'Chakra Bio',
      mNavCircuit: 'Bio Circuits',
      mNavHome: 'Official Home ↗',
      footerText1: 'NovaCell Pain Clinic APP provides non-invasive cellular voltage modulation and precision anatomical protocols.',
      footerText2: 'All content complies with copyright guidelines and patent-pending methodologies. © 2026 NovaCell.kr All Rights Reserved.'
    }
  };

  function t(key) {
    return (i18n[state.lang] && i18n[state.lang][key]) || (i18n.ko[key] || key);
  }

  // DOM Elements Cache
  const el = {
    langBtn: document.getElementById('btn-lang-toggle'),
    searchInput: document.getElementById('input-search') || document.getElementById('search-input'),
    searchClearBtn: document.getElementById('search-clear-btn'),
    mechTabsWrap: document.getElementById('mechanism-tabs') || document.getElementById('mech-chips-wrap'),
    clinicFilterTabs: document.getElementById('clinic-filter-tabs'),
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
    renderClinicFilterBar();
    renderCategories();
    renderConditions();
    try {
      const params = new URLSearchParams(window.location.search);
      const qCond = parseInt(params.get('cond'), 10);
      if (!isNaN(qCond) && qCond >= 1 && qCond <= 64) {
        setTimeout(() => openConditionModal(qCond), 150);
      }
    } catch (e) {}
  }

  // Toast feedback helper
  let toastTimer = null;
  function showToast(msg) {
    let toastEl = document.getElementById('nc-pain-toast');
    if (!toastEl) {
      toastEl = document.createElement('div');
      toastEl.id = 'nc-pain-toast';
      toastEl.style.cssText = 'position:fixed;bottom:24px;left:50%;transform:translateX(-50%);background:rgba(6,18,36,0.95);border:1.5px solid #00f5d4;color:#f8fafc;padding:10px 18px;border-radius:999px;font-size:0.84rem;font-weight:700;z-index:2147483646;box-shadow:0 10px 30px rgba(0,0,0,0.65),0 0 18px rgba(0,245,212,0.3);transition:opacity 0.25s ease;pointer-events:none;opacity:0;';
      document.body.appendChild(toastEl);
    }
    toastEl.textContent = msg;
    toastEl.style.opacity = '1';
    if (toastTimer) clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toastEl.style.opacity = '0';
    }, 2800);
  }

  // Setup Event Listeners
  function setupEventListeners() {
    // 3D X-Ray Show/Hide Toggle Button
    const btnToggleXray = document.getElementById('btnToggleXray');
    const xrayCard = document.getElementById('bodyXrayCard');
    const xrayIcon = document.getElementById('xrayToggleIcon');
    const xrayText = document.getElementById('xrayToggleText');
    if (btnToggleXray && xrayCard) {
      btnToggleXray.addEventListener('click', () => {
        const isHidden = xrayCard.classList.toggle('xray-hidden');
        if (xrayIcon) xrayIcon.className = isHidden ? 'fa-solid fa-eye' : 'fa-solid fa-eye-slash';
        if (xrayText) xrayText.textContent = isHidden ? '해부도 보기' : '해부도 숨김';
      });
    }

    // Language Toggle
    el.langBtn?.addEventListener('click', () => {
      state.lang = state.lang === 'ko' ? 'en' : 'ko';
      localStorage.setItem('novacell_pain_lang', state.lang);
      localStorage.setItem('novacell_site_lang', state.lang);
      localStorage.setItem('nc_lang', state.lang);
      renderStaticUI();
      renderClinicFilterBar();
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

    // Mechanism Filter Tabs (.btn-mech or .filter-chip)
    el.mechTabsWrap?.addEventListener('click', (e) => {
      const btn = e.target.closest('.btn-mech, .filter-chip');
      if (!btn) return;
      const mech = btn.getAttribute('data-mech');
      if (!mech) return;
      state.mech = mech;
      document.querySelectorAll('.btn-mech, .filter-chip').forEach(c => c.classList.toggle('active', c === btn));
      renderConditions();
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

    document.getElementById('target-custom-color')?.addEventListener('input', () => {
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

  // Render 11 Specialty Pain Clinics Filter Bar
  function renderClinicFilterBar() {
    if (!el.clinicFilterTabs) return;
    const clinicMap = window.CLINIC_TO_CONDITIONS_MAP || {};
    const clinicNames = window.CLINIC_11_NAMES || {};
    const totalConds = (window.PAIN_CONDITIONS || []).length;
    const isEn = state.lang === 'en';

    const clinicIcons = {
      1: '🦵', 2: '🦶', 3: '💪', 4: '🦾', 5: '🖐️',
      6: '🦒', 7: '🫁', 8: '🦴', 9: '🗣️', 10: '⚡', 11: '👐'
    };

    let html = `
      <button type="button" class="btn-clinic-pill ${state.clinic === 'all' ? 'active' : ''}" data-clinic="all">
        <span>🏥 ${isEn ? 'All 11 Specialty Clinics' : '11개 특화클리닉 전체'}</span>
        <span class="pill-count">${totalConds}</span>
      </button>
    `;

    for (let cId = 1; cId <= 11; cId++) {
      const ids = clinicMap[cId] || clinicMap[String(cId)] || [];
      const rawName = clinicNames[cId] || clinicNames[String(cId)] || `${cId}. 특화클리닉`;
      const icon = clinicIcons[cId] || '🎯';
      const isActive = String(state.clinic) === String(cId);
      html += `
        <button type="button" class="btn-clinic-pill ${isActive ? 'active' : ''}" data-clinic="${cId}">
          <span>${icon} ${rawName}</span>
          <span class="pill-count">${ids.length}</span>
        </button>
      `;
    }

    el.clinicFilterTabs.innerHTML = html;

    el.clinicFilterTabs.querySelectorAll('.btn-clinic-pill').forEach(btn => {
      btn.addEventListener('click', () => {
        const val = btn.getAttribute('data-clinic');
        state.clinic = val === 'all' ? 'all' : parseInt(val, 10);
        if (state.clinic !== 'all') {
          state.cat = 'all';
          updateActiveCategoryUI();
        }
        el.clinicFilterTabs.querySelectorAll('.btn-clinic-pill').forEach(b => b.classList.toggle('active', b === btn));
        renderConditions();
      });
    });
  }

  // Update Static UI Texts based on language
  function renderStaticUI() {
    const isEn = state.lang === 'en';

    if (el.langBtn) {
      let koOpt = el.langBtn.querySelector('.lang-opt.ko');
      let enOpt = el.langBtn.querySelector('.lang-opt.en');
      if (!koOpt || !enOpt) {
        el.langBtn.innerHTML = `
          <span class="lang-opt ko ${!isEn ? 'active' : ''}">한글</span>
          <span class="lang-divider">/</span>
          <span class="lang-opt en ${isEn ? 'active' : ''}">ENG</span>
        `;
      } else {
        koOpt.classList.toggle('active', !isEn);
        enOpt.classList.toggle('active', isEn);
      }
    }

    document.querySelectorAll('[data-i18n]').forEach(elem => {
      const key = elem.getAttribute('data-i18n');
      const val = t(key);
      if (val) {
        if (val.includes('<') && val.includes('>')) {
          elem.innerHTML = val;
        } else {
          elem.textContent = val;
        }
      }
    });

    if (el.searchInput) {
      el.searchInput.placeholder = t('searchPlaceholder');
    }

    document.title = t('docTitle');
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

    el.catNavList?.querySelectorAll?.('.cat-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const val = btn.getAttribute('data-cat-num');
        state.cat = val === 'all' ? 'all' : parseInt(val, 10);
        if (state.cat !== 'all') {
          state.clinic = 'all';
          el.clinicFilterTabs?.querySelectorAll('.btn-clinic-pill').forEach(b => {
            b.classList.toggle('active', b.getAttribute('data-clinic') === 'all');
          });
        }
        updateActiveCategoryUI();
        renderConditions();
      });
    });

    updateActiveCategoryUI();
  }

  function updateActiveCategoryUI() {
    el.catNavList?.querySelectorAll?.('.cat-btn').forEach(btn => {
      const val = btn.getAttribute('data-cat-num');
      const isMatch = (state.cat === 'all' && val === 'all') || (state.cat === parseInt(val, 10));
      btn.classList.toggle('active', isMatch);
    });
  }

  function getClinicNameForCondition(condId) {
    const clinicMap = window.CLINIC_TO_CONDITIONS_MAP || {};
    const clinicNames = window.CLINIC_11_NAMES || {};
    for (const [cId, ids] of Object.entries(clinicMap)) {
      if (Array.isArray(ids) && ids.includes(condId)) {
        return clinicNames[cId] || `${cId}. 특화클리닉`;
      }
    }
    return '통합 통증클리닉';
  }

  // Filter & Render 64 Conditions Grid
  function renderConditions() {
    if (!el.conditionsGrid) return;
    const conditions = window.PAIN_CONDITIONS || [];
    const clinicMap = window.CLINIC_TO_CONDITIONS_MAP || {};
    const isEn = state.lang === 'en';

    const filtered = conditions.filter(c => {
      if (state.cat !== 'all' && c.catNum !== state.cat) return false;
      if (state.clinic !== 'all') {
        const allowed = clinicMap[state.clinic] || clinicMap[String(state.clinic)] || [];
        if (!allowed.includes(c.id)) return false;
      }
      if (state.mech !== 'all' && !(c.mechTags || []).includes(state.mech)) return false;

      if (state.query) {
        const titleKo = (c.title?.ko || '').toLowerCase();
        const titleEn = (c.title?.en || '').toLowerCase();
        const symptomsKo = (c.symptoms?.ko || '').toLowerCase();
        const targetTissuesKo = (c.targetTissues?.ko || '').toLowerCase();
        const targetsStr = (c.targets || []).map(tg => `${tg.name?.ko || ''} ${tg.desc?.ko || ''}`).join(' ').toLowerCase();
        const match = titleKo.includes(state.query) ||
                      titleEn.includes(state.query) ||
                      symptomsKo.includes(state.query) ||
                      targetTissuesKo.includes(state.query) ||
                      targetsStr.includes(state.query);
        if (!match) return false;
      }

      return true;
    });

    const totalTargetsShown = filtered.reduce((acc, c) => acc + ((c.targets || []).length + getCustomTargets(c.id).length), 0);

    if (el.statusText) {
      el.statusText.innerHTML = t('statusShowing')
        .replace('{count}', filtered.length)
        .replace('{targetCount}', totalTargetsShown);
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
    filtered.forEach((c, idx) => {
      const title = isEn ? c.title.en : c.title.ko;
      const subTitle = isEn ? c.title.ko : c.title.en;
      const mechName = isEn ? c.mechanism.en : c.mechanism.ko;
      const symptoms = isEn ? c.symptoms.en : c.symptoms.ko;
      const defaultTargetCount = (c.targets || []).length || 2;
      const customTargets = getCustomTargets(c.id);
      const totalTargets = defaultTargetCount + customTargets.length;
      const clinicName = getClinicNameForCondition(c.id);

      html += `
        <article class="cond-card is-free-trial" data-id="${c.id}" onclick="window.NovaCellPainApp.openModal(${c.id})">
          <div class="cond-card-top">
            <div style="display:flex;align-items:center;gap:6px;flex-wrap:wrap;">
              <span class="cond-id-badge">No. ${String(c.id).padStart(2, '0')}</span>
              <span class="nc-pain-tier-badge free-trial">🏥 ${clinicName}</span>
            </div>
            <span class="cond-mech-badge">${mechName}</span>
          </div>
          
          <div class="cond-card-thumb-wrap">
            <img src="${c.diagram}" alt="${title}" class="cond-card-thumb" loading="${idx < 12 ? 'eager' : 'lazy'}" />
          </div>

          <h3 class="cond-title-ko">${title}</h3>
          <p class="cond-title-en">${subTitle}</p>
          <p class="cond-symptoms-snippet">${symptoms}</p>

          <div class="cond-card-footer">
            <span class="cond-targets-count" style="color:#00f5d4;">
              <i class="fa-solid fa-crosshairs text-cyan"></i>
              <span>${isEn ? `${totalTargets} Precision Targets` : `${t('targetsCount')} ${totalTargets}곳 (T1~T${totalTargets})`}</span>
            </span>
            <span class="btn-open-protocol"><span>${t('btnViewProtocol')}</span><i class="fa-solid fa-arrow-right"></i></span>
          </div>
        </article>
      `;
    });

    el.conditionsGrid.innerHTML = html;
  }

  // =========================================================================
  // Multi-Target Coordinates & Custom Override Storage (T1~T5+ & Custom Pins)
  // =========================================================================
  function getSavedTargetOverrides(condId) {
    try {
      const raw = localStorage.getItem(`novacell_master64_overrides_${condId}`);
      if (raw) return JSON.parse(raw);
    } catch (e) {}
    return {};
  }

  function setSavedTargetOverrides(condId, overrides) {
    try {
      localStorage.setItem(`novacell_master64_overrides_${condId}`, JSON.stringify(overrides));
    } catch (e) {}
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
    } catch (e) {}
  }

  // Build unified list of all targets (Built-in T1..Tn + Custom Targets) for active condition
  function getAllUnifiedTargets(cond) {
    if (!cond) return [];
    const isEn = state.lang === 'en';
    const overrides = getSavedTargetOverrides(cond.id);
    const list = [];

    (cond.targets || []).forEach((tg, idx) => {
      const key = `t${idx + 1}`;
      const ov = overrides[key] || {};
      const code = tg.code || `T${idx + 1}`;
      const color = ov.color || tg.color || DEFAULT_PIN_COLORS[idx % DEFAULT_PIN_COLORS.length];
      const x = (typeof ov.x === 'number') ? ov.x : (typeof tg.x === 'number' ? tg.x : (45 + idx * 8));
      const y = (typeof ov.y === 'number') ? ov.y : (typeof tg.y === 'number' ? tg.y : (38 + idx * 10));
      const role = isEn ? (tg.role?.en || 'Precision Target') : (tg.role?.ko || '정밀 치료점');
      const name = ov.name || (isEn ? (tg.name?.en || tg.name?.ko) : (tg.name?.ko || `${code}: 정밀 치료 타깃`));
      const desc = ov.desc || (isEn ? (tg.desc?.en || tg.desc?.ko) : (tg.desc?.ko || ''));

      list.push({
        index: idx,
        key: key,
        code: code,
        color: color,
        x: parseFloat(Number(x).toFixed(1)),
        y: parseFloat(Number(y).toFixed(1)),
        role: role,
        name: name,
        desc: desc,
        isCustom: false
      });
    });

    const baseLen = list.length;
    const customTargets = getCustomTargets(cond.id);
    customTargets.forEach((ct, cIdx) => {
      const idx = baseLen + cIdx;
      const code = `T${idx + 1}`;
      list.push({
        index: idx,
        key: `custom_${ct.id}`,
        customId: ct.id,
        code: code,
        color: ct.color || DEFAULT_PIN_COLORS[idx % DEFAULT_PIN_COLORS.length],
        x: parseFloat(Number(ct.x || 50).toFixed(1)),
        y: parseFloat(Number(ct.y || 50).toFixed(1)),
        role: ct.group === 'observe' ? '관찰점' : (ct.group === 'tender' ? '압통 기록점' : '환자 맞춤 치료점'),
        name: ct.name.startsWith('T') ? ct.name : `${code}: ${ct.name}`,
        desc: ct.notes || `[환자 맞춤 추가 치료 포인트] 해부도 좌표 (${ct.x}%, ${ct.y}%)`,
        isCustom: true
      });
    });

    return list;
  }

  // =========================================================================
  // Open Detailed Inspector Modal (Solavre Interactive Target Canvas + 4-Step Protocol)
  // =========================================================================
  function openConditionModal(condId) {
    const conditions = window.PAIN_CONDITIONS || [];
    const cond = conditions.find(c => c.id === condId);
    if (!cond) return;

    state.activeConditionId = condId;
    state.activeTargetIndex = 0;
    state.activePinKey = 't1';
    state.pinLocked = false; // Always open in Interactive Move Mode like Solavre.kr!
    pauseTimer();
    state.timerSeconds = state.timerTotalSeconds;

    const isEn = state.lang === 'en';
    const title = isEn ? cond.title.en : cond.title.ko;
    const subTitle = isEn ? cond.title.ko : cond.title.en;
    const catName = isEn ? cond.category.en : cond.category.ko;
    const mechName = isEn ? cond.mechanism.en : cond.mechanism.ko;
    const clinicName = getClinicNameForCondition(cond.id);

    const modalBody = document.getElementById('modal-body-container');
    const modalTitleEl = document.getElementById('modal-disease-title');
    const modalSubEl = document.getElementById('modal-disease-sub');
    const modalIdBadge = document.getElementById('modal-id-badge');
    const modalMechBadge = document.getElementById('modal-mech-badge');

    if (modalTitleEl) modalTitleEl.textContent = title;
    if (modalSubEl) modalSubEl.textContent = `${clinicName} ∙ ${catName} ∙ ${subTitle}`;
    if (modalIdBadge) modalIdBadge.textContent = `No. ${String(cond.id).padStart(2, '0')}`;
    if (modalMechBadge) modalMechBadge.textContent = mechName;

    const allTargets = getAllUnifiedTargets(cond);
    const firstTarget = allTargets[0] || { code: 'T1', name: 'T1', desc: '', role: '주 신경포착점', color: '#ff334b' };

    if (modalBody) {
      modalBody.innerHTML = `
        <!-- Left Column: 528Hz Timer & Multi-Target Clinical Protocols -->
        <div class="protocol-steps-column">
          <!-- 528Hz Cellular Voltage Healing Timer Card -->
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
                <span class="timer-point-eyebrow">ACTIVE TARGET</span>
                <span id="timer-target-code" class="timer-point-code">${firstTarget.code} (${firstTarget.role})</span>
              </div>
              <strong id="timer-target-title" class="timer-point-title">${firstTarget.name}</strong>
            </div>

            <div class="timer-body">
              <div class="timer-controls-row">
                <div class="timer-preset-group">
                  <button type="button" class="preset-btn active" data-sec="60">${isEn ? '1m' : '1분'}</button>
                  <button type="button" class="preset-btn" data-sec="120">${isEn ? '2m' : '2분'}</button>
                  <button type="button" class="preset-btn" data-sec="180">${isEn ? '3m' : '3분'}</button>
                  <button type="button" class="preset-btn" data-sec="300">${isEn ? '5m' : '5분'}</button>
                  <button type="button" class="preset-btn" data-sec="600">${isEn ? '10m' : '10분'}</button>
                </div>
                <div class="timer-adjust-group">
                  <button type="button" id="btn-timer-dec" class="timer-adjust-btn" title="${isEn ? 'Decrease 30s' : '30초 감소'}">${isEn ? '-30s' : '-30초'}</button>
                  <button type="button" id="btn-timer-inc" class="timer-adjust-btn" title="${isEn ? 'Increase 30s' : '30초 증가'}">${isEn ? '+30s' : '+30초'}</button>
                </div>
              </div>

              <div class="timer-display-wrap">
                <output id="timer-display-text" class="timer-time-text">01:00</output>
                <div class="timer-freq-indicator">
                  <span id="freq-pulse-dot" class="freq-pulse-dot"></span>
                  <span>528Hz Cell Voltage Frequency (-50mV)</span>
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

          <!-- Step 3: Multi-Layer Treatment Points (T1 ~ T5+) -->
          <div class="protocol-step-card">
            <div class="step-card-header" style="justify-content:space-between;">
              <div style="display:flex;align-items:center;gap:8px;">
                <span class="step-badge">STEP 3</span>
                <h4 class="step-title">${t('modalStep3')}</h4>
              </div>
              <span style="font-size:0.75rem;font-weight:800;color:#00f5d4;background:rgba(0,245,212,0.12);border:1px solid rgba(0,245,212,0.35);padding:2px 9px;border-radius:999px;" id="step3-target-count-badge">
                총 ${allTargets.length}개 치료 포인트
              </span>
            </div>
            <p class="step-content-text" style="margin-bottom: 8px;">
              <strong>${t('targetTissues')}:</strong> ${isEn ? cond.targetTissues.en : cond.targetTissues.ko}
            </p>
            <p class="step-content-text" style="font-size: 0.84rem; color: #94a3b8; margin-bottom: 14px;">
              <strong>${t('palpationLocation')}:</strong> ${isEn ? cond.palpation.en : cond.palpation.ko}
            </p>
            
            <!-- Dynamic Multi-Layer Targets List (T1 ~ T5+) -->
            <div class="targets-sub-grid" id="step3-targets-grid">
              <!-- Populated by renderInteractiveTargetCanvas -->
            </div>

            <!-- Custom User Targets Action Bar -->
            <div class="custom-targets-header" style="margin-top:14px;">
              <span style="font-size: 0.82rem; font-weight: 750; color: #7dd3fc;">
                <i class="fa-solid fa-layer-group"></i> ${t('customTargetsTitle')}
              </span>
              <div style="display:flex;gap:6px;">
                <button type="button" class="btn-add-custom-target" onclick="window.NovaCellPainApp.quickAddTargetPin()" style="background:rgba(0,245,212,0.16);border-color:#00f5d4;color:#00f5d4;">
                  <i class="fa-solid fa-bolt"></i>
                  <span>+ 원클릭 포인트 추가</span>
                </button>
                <button type="button" class="btn-add-custom-target" onclick="window.NovaCellPainApp.openAddTargetDialog()">
                  <i class="fa-solid fa-plus-circle"></i>
                  <span>${t('btnAddCustomTarget')}</span>
                </button>
              </div>
            </div>
            <div class="custom-targets-list" id="custom-targets-container">
              <!-- Populated by renderInteractiveTargetCanvas -->
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

        <!-- Right Column: Solavre.kr 3D Interactive Target Canvas -->
        <div class="diagram-viewer-column cpm-visual-panel">
          <div class="cpm-panel-header">
            <div class="cpm-panel-title">
              <span class="panel-icon">🔬</span>
              <strong>${t('viewerBadge')}</strong>
            </div>
            <div class="cpm-canvas-toolbar">
              <button type="button" class="btn-canvas-tool ${state.pinLocked ? '' : 'active-unlock'}" id="btn-toggle-pin-lock" title="핀 위치 고정 또는 이동 모드 전환">
                <span id="pin-lock-icon">${state.pinLocked ? '🔒' : '🔓'}</span>
                <span id="pin-lock-label">${state.pinLocked ? t('pinLockedBtn') : t('pinUnlockedBtn')}</span>
              </button>
              <button type="button" class="btn-canvas-tool highlight-tool" id="btn-quick-add-pin" title="클릭 즉시 새 치료 타깃 핀을 추가하고 원하는 위치로 이동합니다">
                <span>➕</span>
                <span>${t('btnQuickAddPin')}</span>
              </button>
              <button type="button" class="btn-canvas-tool" id="btn-reset-pin-coords" title="모든 치료 포인트를 표준 해부학 기본위치로 복원합니다">
                <span>🔄</span>
                <span>${t('btnResetPins')}</span>
              </button>
            </div>
          </div>

          <!-- Interactive 3D Anatomy Canvas Wrapper -->
          <div class="cpm-canvas-wrapper" id="diagram-stage">
            <img src="${cond.diagram}" alt="${title}" class="cpm-diagram-img" id="modal-diagram-img" />
            <!-- Overlaid Dynamic Pins Layer (T1~T5+ & Custom Pins) -->
            <div class="cpm-pins-layer" id="diagram-pins-layer"></div>

            <!-- Floating Draggable Glassmorphism Guidance Banner -->
            <div class="cpm-drag-banner" id="pin-drag-hint-banner" style="display: ${state.pinLocked ? 'none' : 'flex'};">
              <span class="drag-handle-icon" title="마우스로 드래그하여 이동할 수 있습니다">⋮⋮</span>
              <span class="drag-banner-text">${t('pinDragHint')}</span>
              <button type="button" class="btn-drag-banner-close" id="btn-close-drag-banner" title="안내창 닫기">✕</button>
            </div>
          </div>

          <!-- Quick Target Selector Pills Bar (T1, T2, T3, T4, T5...) -->
          <div class="cpm-quick-target-pills" id="cpm-quick-target-pills">
            <!-- Dynamically populated -->
          </div>

          <!-- Selected Active Target Detail Card (Exact Solavre Layout) -->
          <div class="cpm-target-detail-card" id="cpm-target-detail-card">
            <div class="td-header">
              <div class="td-header-left">
                <span class="td-badge" id="cpm-active-pin-badge">타깃 T1</span>
                <strong class="td-name" id="cpm-active-pin-name">${firstTarget.name}</strong>
              </div>
              <div class="td-actions" id="cpm-active-pin-actions">
                <!-- Edit / Delete buttons -->
              </div>
            </div>
            <p class="td-desc" id="cpm-active-pin-desc">${firstTarget.desc}</p>
          </div>
        </div>
      `;
    }

    renderInteractiveTargetCanvas(condId);
    setupTimerEvents(cond);
    setupInteractiveCanvasEvents(condId);

    el.modal?.classList.add('open');
    document.documentElement.style.overflow = 'hidden';
    document.body.style.overflow = 'hidden';
    document.body.classList.add('modal-open');
  }

  function closeModal() {
    pauseTimer();
    el.modal?.classList.remove('open');
    document.documentElement.style.overflow = '';
    document.body.style.overflow = '';
    document.body.classList.remove('modal-open');
    state.activeConditionId = null;
  }

  // =========================================================================
  // Render Solavre Interactive Target Canvas, Quick Pills, Step 3 Cards & Detail Card
  // =========================================================================
  function renderInteractiveTargetCanvas(condId) {
    const conditions = window.PAIN_CONDITIONS || [];
    const cond = conditions.find(c => c.id === condId);
    if (!cond) return;

    const allTargets = getAllUnifiedTargets(cond);
    if (state.activeTargetIndex >= allTargets.length) {
      state.activeTargetIndex = 0;
    }

    const step3Badge = document.getElementById('step3-target-count-badge');
    if (step3Badge) {
      step3Badge.textContent = state.lang === 'en' ? `${allTargets.length} Precision Targets` : `총 ${allTargets.length}개 치료 포인트`;
    }

    // 1. Render Step 3 All Target Cards (T1 ~ T5+)
    const step3Grid = document.getElementById('step3-targets-grid');
    if (step3Grid) {
      step3Grid.innerHTML = allTargets.map((tg, idx) => {
        const isActive = (idx === state.activeTargetIndex);
        return `
          <div class="target-mini-card ${isActive ? 'active' : ''}" id="card-target-${idx}" style="--t-color: ${tg.color};" onclick="window.NovaCellPainApp.selectTarget(${idx})">
            <div class="target-mini-card-title" style="display:flex;align-items:center;justify-content:space-between;gap:8px;margin-bottom:5px;">
              <div style="display:flex;align-items:center;gap:7px;flex-wrap:wrap;">
                <span style="display:inline-flex;align-items:center;justify-content:center;padding:1px 8px;border-radius:999px;background:${tg.color};color:#030712;font-size:0.73rem;font-weight:900;">${tg.code}</span>
                <span style="font-size:0.72rem;font-weight:800;color:${tg.color};background:rgba(255,255,255,0.06);padding:1px 7px;border-radius:6px;">${tg.role}</span>
                <strong style="color:#f8fafc;font-size:0.9rem;">${tg.name}</strong>
              </div>
              <span style="font-size:0.68rem;color:#64748b;white-space:nowrap;">(${tg.x}%, ${tg.y}%)</span>
            </div>
            <div class="target-mini-card-desc" style="font-size:0.82rem;color:#cbd5e1;">${tg.desc}</div>
          </div>
        `;
      }).join('');
    }

    // 2. Render Custom Targets List in Step 3
    const customContainer = document.getElementById('custom-targets-container');
    const customTargets = getCustomTargets(condId);
    const builtInLen = (cond.targets || []).length;
    if (customContainer) {
      if (customTargets.length === 0) {
        customContainer.innerHTML = `
          <p style="font-size: 0.78rem; color: #64748b; font-style: italic; padding: 6px 0;">
            ${t('noCustomTargets')}
          </p>
        `;
      } else {
        customContainer.innerHTML = customTargets.map((ct, cIdx) => {
          const targetIndex = builtInLen + cIdx;
          const isActive = (state.activeTargetIndex === targetIndex);
          const code = `T${targetIndex + 1}`;
          return `
            <div class="custom-target-item ${isActive ? 'active' : ''}" data-custom-id="${ct.id}" style="--custom-color: ${ct.color};" onclick="window.NovaCellPainApp.selectTarget(${targetIndex})">
              <div class="custom-target-info">
                <span class="custom-target-name">
                  <span style="display:inline-block; width:9px; height:9px; border-radius:50%; background:${ct.color}; box-shadow:0 0 8px ${ct.color};"></span>
                  <strong>[${code}]</strong> ${ct.name}
                </span>
                <span class="custom-target-memo">${ct.notes || `해부도 좌표: X ${ct.x}%, Y ${ct.y}%`}</span>
              </div>
              <div class="custom-target-actions" onclick="event.stopPropagation()">
                <button type="button" class="btn-custom-action" title="편집" onclick="window.NovaCellPainApp.openEditTargetDialog('${ct.id}')"><i class="fa-solid fa-pen"></i></button>
                <button type="button" class="btn-custom-action delete" title="삭제" onclick="window.NovaCellPainApp.deleteCustomTarget('${ct.id}')"><i class="fa-solid fa-trash-can"></i></button>
              </div>
            </div>
          `;
        }).join('');
      }
    }

    // 3. Render Overlaid Transparent HUD Pins on 3D Diagram (.cpm-pin)
    const pinsLayer = document.getElementById('diagram-pins-layer');
    if (pinsLayer) {
      pinsLayer.innerHTML = allTargets.map((tg, idx) => {
        const isActive = (idx === state.activeTargetIndex);
        return `
          <div class="cpm-pin diagram-target-pin ${isActive ? 'active' : ''}"
               id="cpmPin_${tg.key}"
               data-target-index="${idx}"
               data-pin-key="${tg.key}"
               data-is-custom="${tg.isCustom ? 'true' : 'false'}"
               data-custom-id="${tg.customId || ''}"
               style="left: ${tg.x}%; top: ${tg.y}%; --pin-color: ${tg.color};"
               title="${tg.name} (클릭하여 선택 / 드래그하여 위치 이동)">
            <div class="pin-core"></div>
            <span class="pin-label-badge">${tg.code}</span>
            <div class="pin-pulse"></div>
          </div>
        `;
      }).join('');
    }

    // 4. Render Quick Target Selector Pills Bar below Canvas
    const pillsWrap = document.getElementById('cpm-quick-target-pills');
    if (pillsWrap) {
      pillsWrap.innerHTML = allTargets.map((tg, idx) => {
        const isActive = (idx === state.activeTargetIndex);
        return `
          <button type="button" class="cpm-target-pill ${isActive ? 'active' : ''}" style="--pill-color: ${tg.color};" onclick="window.NovaCellPainApp.selectTarget(${idx})">
            <span class="pill-dot"></span>
            <span>${tg.code}: ${tg.role}</span>
          </button>
        `;
      }).join('');
    }

    // 5. Update Active Target Detail Card & Timer Banner
    updateActiveTargetDetailUI(cond, allTargets);
  }

  function updateActiveTargetDetailUI(cond, allTargets) {
    const activeTg = allTargets[state.activeTargetIndex] || allTargets[0];
    if (!activeTg) return;

    state.activePinKey = activeTg.key;

    // Update Timer Banner
    const bannerCode = document.getElementById('timer-target-code');
    const bannerTitle = document.getElementById('timer-target-title');
    if (bannerCode) bannerCode.textContent = `${activeTg.code} (${activeTg.role})`;
    if (bannerTitle) bannerTitle.textContent = activeTg.name;

    // Update Bottom Target Detail Card (Solavre standard)
    const badgeEl = document.getElementById('cpm-active-pin-badge');
    const nameEl = document.getElementById('cpm-active-pin-name');
    const descEl = document.getElementById('cpm-active-pin-desc');
    const actionsEl = document.getElementById('cpm-active-pin-actions');

    if (badgeEl) {
      badgeEl.textContent = `타깃 ${activeTg.code} (${activeTg.role})`;
      badgeEl.style.background = activeTg.color;
      badgeEl.style.color = '#030712';
    }
    if (nameEl) nameEl.textContent = activeTg.name;
    if (descEl) descEl.textContent = activeTg.desc;

    if (actionsEl) {
      if (activeTg.isCustom) {
        actionsEl.innerHTML = `
          <button type="button" class="btn-td-edit" onclick="window.NovaCellPainApp.promptEditTarget(${activeTg.index})">✏️ 명칭·설명 수정</button>
          <button type="button" class="btn-td-del" onclick="window.NovaCellPainApp.deleteCustomTarget('${activeTg.customId}')">🗑 핀 삭제</button>
        `;
      } else {
        actionsEl.innerHTML = `
          <button type="button" class="btn-td-edit" onclick="window.NovaCellPainApp.promptEditTarget(${activeTg.index})">✏️ 명칭·설명 수정</button>
        `;
      }
    }

    // Sync active classes
    document.querySelectorAll('#step3-targets-grid .target-mini-card').forEach((c, idx) => {
      c.classList.toggle('active', idx === state.activeTargetIndex);
    });
    document.querySelectorAll('.cpm-pin').forEach((p, idx) => {
      p.classList.toggle('active', idx === state.activeTargetIndex);
    });
    document.querySelectorAll('.cpm-target-pill').forEach((p, idx) => {
      p.classList.toggle('active', idx === state.activeTargetIndex);
    });
  }

  // Select Active Target Index
  function selectActiveTarget(targetIndex) {
    const condId = state.activeConditionId;
    const conditions = window.PAIN_CONDITIONS || [];
    const cond = conditions.find(c => c.id === condId);
    if (!cond) return;

    const allTargets = getAllUnifiedTargets(cond);
    if (targetIndex < 0 || targetIndex >= allTargets.length) targetIndex = 0;
    state.activeTargetIndex = targetIndex;

    updateActiveTargetDetailUI(cond, allTargets);
  }

  // 1-Click Instant Target Pin Addition (Solavre.kr `+ 치료 포인트 추가` workflow)
  function quickAddTargetPin(customX, customY) {
    const condId = state.activeConditionId;
    if (!condId) return;
    const conditions = window.PAIN_CONDITIONS || [];
    const cond = conditions.find(c => c.id === condId);
    if (!cond) return;

    const customTargets = getCustomTargets(condId);
    const builtInCount = (cond.targets || []).length;
    const nextNum = builtInCount + customTargets.length + 1;
    const assignedColor = DEFAULT_PIN_COLORS[(nextNum - 1) % DEFAULT_PIN_COLORS.length];

    const posX = (typeof customX === 'number') ? customX : parseFloat((46.0 + ((customTargets.length * 7) % 24)).toFixed(1));
    const posY = (typeof customY === 'number') ? customY : parseFloat((44.0 + ((customTargets.length * 7) % 24)).toFixed(1));

    const newTarget = {
      id: 'target_' + Date.now(),
      name: `T${nextNum}: 환자 맞춤 추가 치료점`,
      group: 'treat',
      size: 'medium',
      notes: '[추가 치료 포인트] 진료 시 촉지된 보조 압통점 및 근막·신경 유착 부위',
      color: assignedColor,
      x: posX,
      y: posY
    };

    customTargets.push(newTarget);
    setCustomTargets(condId, customTargets);

    // Ensure Move Mode is active
    state.pinLocked = false;
    updatePinLockToolbarUI();

    const newIndex = builtInCount + customTargets.length - 1;
    state.activeTargetIndex = newIndex;

    renderInteractiveTargetCanvas(condId);
    renderConditions();
    showToast(`🎯 [T${nextNum} 치료 포인트]가 추가되었습니다! 핀을 드래그하거나 해부도를 클릭해 위치를 조절하세요.`);
  }

  // Prompt to Edit Any Target's Name & Description (Both Built-in T1~T5 and Custom Pins)
  function promptEditTarget(targetIndex) {
    const condId = state.activeConditionId;
    const conditions = window.PAIN_CONDITIONS || [];
    const cond = conditions.find(c => c.id === condId);
    if (!cond) return;

    const allTargets = getAllUnifiedTargets(cond);
    const tg = allTargets[targetIndex];
    if (!tg) return;

    if (tg.isCustom) {
      const customTargets = getCustomTargets(condId);
      const found = customTargets.find(c => c.id === tg.customId);
      if (found) {
        openCustomTargetDialog(condId, found);
        return;
      }
    }

    const newName = prompt(`[${tg.code}] 치료 포인트의 명칭을 수정하세요:`, tg.name);
    if (newName === null) return;
    const newDesc = prompt(`[${tg.code}] 치료 포인트의 촉지 및 시술 설명을 수정하세요:`, tg.desc);
    if (newDesc === null) return;

    const overrides = getSavedTargetOverrides(condId);
    overrides[tg.key] = overrides[tg.key] || {};
    if (newName.trim()) overrides[tg.key].name = newName.trim();
    if (newDesc.trim()) overrides[tg.key].desc = newDesc.trim();
    setSavedTargetOverrides(condId, overrides);

    renderInteractiveTargetCanvas(condId);
    showToast(`✏️ [${tg.code}] 치료 포인트 정보가 업데이트되었습니다.`);
  }

  function updatePinLockToolbarUI() {
    const lockBtn = document.getElementById('btn-toggle-pin-lock');
    const lockIcon = document.getElementById('pin-lock-icon');
    const lockLabel = document.getElementById('pin-lock-label');
    const hintBanner = document.getElementById('pin-drag-hint-banner');

    if (lockBtn) {
      lockBtn.className = `btn-canvas-tool ${state.pinLocked ? '' : 'active-unlock'}`;
    }
    if (lockIcon) lockIcon.textContent = state.pinLocked ? '🔒' : '🔓';
    if (lockLabel) lockLabel.textContent = state.pinLocked ? t('pinLockedBtn') : t('pinUnlockedBtn');
    if (hintBanner) hintBanner.style.display = state.pinLocked ? 'none' : 'flex';
  }

  // =========================================================================
  // Interactive Canvas Events: Drag Pins, Click Canvas to Move Active Pin, Drag Hint Banner
  // =========================================================================
  function setupInteractiveCanvasEvents(condId) {
    const lockBtn = document.getElementById('btn-toggle-pin-lock');
    const quickAddBtn = document.getElementById('btn-quick-add-pin');
    const resetBtn = document.getElementById('btn-reset-pin-coords');
    const closeBannerBtn = document.getElementById('btn-close-drag-banner');
    const hintBanner = document.getElementById('pin-drag-hint-banner');
    const stage = document.getElementById('diagram-stage');
    const pinsLayer = document.getElementById('diagram-pins-layer');

    lockBtn?.addEventListener('click', () => {
      state.pinLocked = !state.pinLocked;
      updatePinLockToolbarUI();
      showToast(state.pinLocked ? '🔒 치료 포인트 위치가 고정되었습니다.' : '🔓 위치 이동 모드: 핀을 드래그하거나 해부도를 클릭해 이동하세요.');
    });

    quickAddBtn?.addEventListener('click', () => {
      quickAddTargetPin();
    });

    resetBtn?.addEventListener('click', () => {
      if (!confirm('이 질환의 모든 치료 포인트 위치와 추가된 핀을 표준 해부학 기본위치로 복원하시겠습니까?')) return;
      localStorage.removeItem(`novacell_master64_overrides_${condId}`);
      localStorage.removeItem(`novacell_custom_targets_${condId}`);
      state.activeTargetIndex = 0;
      renderInteractiveTargetCanvas(condId);
      renderConditions();
      showToast('🔄 모든 치료 포인트가 표준 해부학 기본위치로 복원되었습니다.');
    });

    closeBannerBtn?.addEventListener('click', (e) => {
      e.stopPropagation();
      if (hintBanner) hintBanner.style.display = 'none';
    });

    // Make Hint Banner Draggable inside Canvas
    if (hintBanner && stage) {
      let bannerDragging = false;
      let bStartX = 0, bStartY = 0, bLeft = 0, bTop = 0;

      const onBannerDown = (e) => {
        if (e.target.closest('.btn-drag-banner-close')) return;
        e.stopPropagation();
        bannerDragging = true;
        hintBanner.classList.add('dragging');
        const sRect = stage.getBoundingClientRect();
        const bRect = hintBanner.getBoundingClientRect();
        bLeft = bRect.left - sRect.left;
        bTop = bRect.top - sRect.top;
        hintBanner.style.transform = 'none';
        hintBanner.style.left = `${bLeft}px`;
        hintBanner.style.top = `${bTop}px`;
        hintBanner.style.bottom = 'auto';

        bStartX = e.touches ? e.touches[0].clientX : e.clientX;
        bStartY = e.touches ? e.touches[0].clientY : e.clientY;

        window.addEventListener('mousemove', onBannerMove);
        window.addEventListener('touchmove', onBannerMove, { passive: false });
        window.addEventListener('mouseup', onBannerUp);
        window.addEventListener('touchend', onBannerUp);
      };

      const onBannerMove = (e) => {
        if (!bannerDragging) return;
        if (e.cancelable) e.preventDefault();
        const cx = e.touches ? e.touches[0].clientX : e.clientX;
        const cy = e.touches ? e.touches[0].clientY : e.clientY;
        const sRect = stage.getBoundingClientRect();
        const bRect = hintBanner.getBoundingClientRect();
        const nx = Math.max(6, Math.min(sRect.width - bRect.width - 6, bLeft + (cx - bStartX)));
        const ny = Math.max(6, Math.min(sRect.height - bRect.height - 6, bTop + (cy - bStartY)));
        hintBanner.style.left = `${nx}px`;
        hintBanner.style.top = `${ny}px`;
      };

      const onBannerUp = () => {
        bannerDragging = false;
        hintBanner.classList.remove('dragging');
        window.removeEventListener('mousemove', onBannerMove);
        window.removeEventListener('touchmove', onBannerMove);
        window.removeEventListener('mouseup', onBannerUp);
        window.removeEventListener('touchend', onBannerUp);
      };

      hintBanner.addEventListener('mousedown', onBannerDown);
      hintBanner.addEventListener('touchstart', onBannerDown, { passive: false });
    }

    if (!pinsLayer || !stage) return;

    // Pin Dragging & Selection
    let dragPin = null;
    let dragIndex = -1;
    let startX = 0, startY = 0;
    let hasMoved = false;

    function savePinCoordinateByIndex(condId, targetIndex, pctX, pctY) {
      const conditions = window.PAIN_CONDITIONS || [];
      const cond = conditions.find(c => c.id === condId);
      if (!cond) return;
      const allTargets = getAllUnifiedTargets(cond);
      const tg = allTargets[targetIndex];
      if (!tg) return;

      if (!tg.isCustom) {
        const overrides = getSavedTargetOverrides(condId);
        overrides[tg.key] = overrides[tg.key] || {};
        overrides[tg.key].x = pctX;
        overrides[tg.key].y = pctY;
        setSavedTargetOverrides(condId, overrides);
      } else {
        const customTargets = getCustomTargets(condId);
        const ct = customTargets.find(t => t.id === tg.customId);
        if (ct) {
          ct.x = pctX;
          ct.y = pctY;
          setCustomTargets(condId, customTargets);
        }
      }
    }

    function onPointerDown(e) {
      const pin = e.target.closest('.cpm-pin');
      if (!pin) return;

      const idx = parseInt(pin.getAttribute('data-target-index'), 10);
      selectActiveTarget(idx);

      if (state.pinLocked) {
        showToast('🔒 위치가 고정되어 있습니다. 상단 [🔒 위치 고정됨] 버튼을 눌러 이동 모드로 전환하세요.');
        return;
      }

      e.preventDefault();
      e.stopPropagation();

      dragPin = pin;
      dragIndex = idx;
      hasMoved = false;

      startX = e.touches ? e.touches[0].clientX : e.clientX;
      startY = e.touches ? e.touches[0].clientY : e.clientY;

      dragPin.classList.add('dragging');

      window.addEventListener('mousemove', onPointerMove, { passive: false });
      window.addEventListener('touchmove', onPointerMove, { passive: false });
      window.addEventListener('mouseup', onPointerUp);
      window.addEventListener('touchend', onPointerUp);
    }

    function onPointerMove(e) {
      if (!dragPin) return;
      if (e.cancelable) e.preventDefault();

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

    function onPointerUp() {
      if (!dragPin) return;

      window.removeEventListener('mousemove', onPointerMove);
      window.removeEventListener('touchmove', onPointerMove);
      window.removeEventListener('mouseup', onPointerUp);
      window.removeEventListener('touchend', onPointerUp);

      dragPin.classList.remove('dragging');

      if (hasMoved && dragIndex >= 0) {
        const pctX = parseFloat(parseFloat(dragPin.style.left).toFixed(1)) || 50;
        const pctY = parseFloat(parseFloat(dragPin.style.top).toFixed(1)) || 50;
        savePinCoordinateByIndex(condId, dragIndex, pctX, pctY);
        renderInteractiveTargetCanvas(condId);
        showToast(`🎯 치료 타깃 위치가 (${pctX}%, ${pctY}%)로 저장되었습니다.`);
      }

      dragPin = null;
      dragIndex = -1;
    }

    pinsLayer.addEventListener('mousedown', onPointerDown);
    pinsLayer.addEventListener('touchstart', onPointerDown, { passive: false });

    // Click on 3D Canvas Empty Space: Move Active Pin to Clicked Position (Solavre.kr behavior)
    stage.addEventListener('click', (e) => {
      if (state.pinLocked) return;
      if (e.target.closest('.cpm-pin') || e.target.closest('.cpm-drag-banner')) return;

      const rect = stage.getBoundingClientRect();
      const pctX = parseFloat(Math.max(3, Math.min(97, ((e.clientX - rect.left) / rect.width) * 100)).toFixed(1));
      const pctY = parseFloat(Math.max(3, Math.min(97, ((e.clientY - rect.top) / rect.height) * 100)).toFixed(1));

      savePinCoordinateByIndex(condId, state.activeTargetIndex, pctX, pctY);
      renderInteractiveTargetCanvas(condId);
      showToast(`🎯 활성 타깃(T${state.activeTargetIndex + 1}) 위치가 (${pctX}%, ${pctY}%)로 이동되었습니다.`);
    });
  }

  // =========================================================================
  // Custom Target Dialog Controls (Add / Edit / Save / Delete)
  // =========================================================================
  function openCustomTargetDialog(condId, targetToEdit = null, defaultX = 50.0, defaultY = 50.0) {
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
      if (hintText) hintText.textContent = `타깃 위치: X ${defaultX}%, Y ${defaultY}%`;

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
    renderInteractiveTargetCanvas(condId);
    renderConditions();
  }

  function deleteCustomTarget(targetId) {
    const condId = state.activeConditionId;
    if (!condId) return;
    if (!confirm('이 추가 치료 타깃을 삭제하시겠습니까?')) return;

    let targets = getCustomTargets(condId);
    targets = targets.filter(t => t.id !== targetId);
    setCustomTargets(condId, targets);
    state.activeTargetIndex = 0;
    renderInteractiveTargetCanvas(condId);
    renderConditions();
    showToast('🗑 추가 치료 타깃이 삭제되었습니다.');
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
      const allTargets = getAllUnifiedTargets(cond);
      const totalCount = allTargets.length || 1;
      const nextIdx = (state.activeTargetIndex + 1) % totalCount;
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
      if (state.gainNode && state.audioCtx) {
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
    } catch (e) {}
  }

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
    } catch (e) {}
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

  // Expose Public API
  window.NovaCellPainApp = {
    openModal: openConditionModal,
    closeModal: closeModal,
    renderConditions: renderConditions,
    selectTarget: selectActiveTarget,
    quickAddTargetPin: quickAddTargetPin,
    promptEditTarget: promptEditTarget,
    openAddTargetDialog: () => openCustomTargetDialog(state.activeConditionId),
    openEditTargetDialog: (targetId) => {
      const targets = getCustomTargets(state.activeConditionId);
      const target = targets.find(t => t.id === targetId);
      if (target) openCustomTargetDialog(state.activeConditionId, target);
    },
    deleteCustomTarget: deleteCustomTarget
  };

  window.addEventListener('novacell:vip-status-changed', () => {
    renderConditions();
  });

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
