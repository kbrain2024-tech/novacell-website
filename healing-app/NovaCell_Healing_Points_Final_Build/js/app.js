/**
 * NovaCell Healing Points - Application Controller
 * High-Voltage Microcurrent Monopolar Probe Clinical System
 */

import { CATEGORIES, CONDITIONS_DATA } from './data.js';
const escapeHTML = value => String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));

export class NovaCellApp {
  constructor() {
    this.categories = CATEGORIES;
    this.conditions = CONDITIONS_DATA;
    this.currentCondition = this.conditions[0]; // Default: 경추성 두통
    this.selectedPointId = null;
    this.currentCategory = 'all';
    this.searchQuery = '';
    this.currentView = 'posterior'; // 'posterior' | 'anterior'
    this.displayMode = '3d'; // '3d' | 'body'

    // Timer State for Monopolar Probe
    this.timerInterval = null;
    this.timerSeconds = 25;
    this.timerTotalSeconds = 25;
    this.isTimerRunning = false;

    this.initElements();
    this.bindEvents();
    this.render();
  }

  initElements() {
    // Left panel elements
    this.categoryBar = document.getElementById('category-bar');
    this.conditionsList = document.getElementById('conditions-list');
    this.conditionsCounter = document.getElementById('conditions-counter');
    this.searchInput = document.getElementById('search-input');

    // Center panel elements
    this.modeBtn3d = document.getElementById('mode-btn-3d');
    this.modeBtnBody = document.getElementById('mode-btn-body');
    this.bodyViewToggle = document.getElementById('body-view-toggle');
    this.anatomy3dWrapper = document.getElementById('anatomy-3d-wrapper');
    this.anatomy3dImage = document.getElementById('anatomy-3d-image');
    this.anatomyImgCaption = document.getElementById('anatomy-img-caption');
    this.fullbody3dWrapper = document.getElementById('fullbody-3d-wrapper');
    this.fullbodyImgPosterior = document.getElementById('fullbody-img-posterior');
    this.fullbodyImgAnterior = document.getElementById('fullbody-img-anterior');
    this.fullbodyViewIndicator = document.getElementById('fullbody-view-indicator');

    this.canvasContainer = document.getElementById('canvas-container');
    this.pinsLayer = document.getElementById('pins-layer');
    this.viewBtnPosterior = document.getElementById('view-btn-posterior');
    this.viewBtnAnterior = document.getElementById('view-btn-anterior');
    this.activePointBadge = document.getElementById('active-point-badge');
    this.activePointTitle = document.getElementById('active-point-title');
    this.startProbeTimerBtn = document.getElementById('start-probe-timer-btn');

    // Right panel elements
    this.recipeCategoryTag = document.getElementById('recipe-category-tag');
    this.recipeBadge = document.getElementById('recipe-badge');
    this.recipeMainTitle = document.getElementById('recipe-main-title');
    this.recipeSubTitle = document.getElementById('recipe-sub-title');
    this.symptomsContainer = document.getElementById('symptoms-container');
    this.mechanismContainer = document.getElementById('mechanism-container');
    this.healingPointsContainer = document.getElementById('healing-points-container');
    this.protocolCard = document.getElementById('protocol-card');

    // Right panel subnav elements
    this.subnavBtnRecipe = document.getElementById('subnav-btn-recipe');
    this.subnavBtnCases = document.getElementById('subnav-btn-cases');
    this.subnavBtnSafety = document.getElementById('subnav-btn-safety');
    this.recipeViewContainer = document.getElementById('recipe-view-container');
    this.casesViewContainer = document.getElementById('cases-view-container');
    this.safetyViewContainer = document.getElementById('safety-view-container');
    this.casesCountBadge = document.getElementById('cases-count-badge');
    this.casesListContainer = document.getElementById('cases-list-container');
    this.safetyGuideContent = document.getElementById('safety-guide-content');
    this.currentSubnav = 'recipe';

    // Timer Modal elements
    this.timerModal = document.getElementById('timer-modal');
    this.modalCloseBtn = document.getElementById('modal-close-btn');
    this.timerDisplay = document.getElementById('timer-display');
    this.timerProgressCircle = document.getElementById('timer-progress-circle');
    this.timerHpCode = document.getElementById('timer-hp-code');
    this.timerHpTitle = document.getElementById('timer-hp-title');
    this.timerToggleBtn = document.getElementById('timer-toggle-btn');
    this.timerResetBtn = document.getElementById('timer-reset-btn');
    this.timerNextPointBtn = document.getElementById('timer-next-point-btn');

    // Floating Interactive Disease Preview Tooltip
    let tooltip = document.getElementById('condition-floating-tooltip');
    if (!tooltip) {
      tooltip = document.createElement('div');
      tooltip.id = 'condition-floating-tooltip';
      tooltip.className = 'condition-floating-tooltip';
      document.body.appendChild(tooltip);
    }
    this.conditionFloatingTooltip = tooltip;

    // Welcome Cover Screen Elements
    this.coverScreen = document.getElementById('welcome-cover-screen');
    this.coverEnterBtn = document.getElementById('cover-enter-btn');
    this.coverCloseQuickBtn = document.getElementById('cover-close-quick-btn');
    this.openCoverBtn = document.getElementById('open-cover-btn');

    // Mobile & Tablet Workspace & Navigation Elements
    this.mainWorkspace = document.getElementById('main-workspace');
    this.mobileTabBar = document.getElementById('mobile-tab-bar');
    this.mobileTabBtns = document.querySelectorAll('.mobile-tab-btn');
    this.mobileViewRecipeBtn = document.getElementById('mobile-view-recipe-btn');
    this.mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    this.mobileMenuOverlay = document.getElementById('mobile-menu-overlay');
    this.mobileMenuPanel = document.getElementById('mobile-menu-panel');
    this.mobileMenuClose = document.getElementById('mobile-menu-close');
    this.mobileMenuSearchForm = document.getElementById('mobile-menu-search-form');
    this.mobileMenuSearchInput = document.getElementById('mobile-menu-search-input');
    this.mobileMenuOpenCover = document.getElementById('mobile-menu-open-cover');
    this.mobileMenuTabBtns = document.querySelectorAll('[data-mobile-menu-tab]');
  }

  bindEvents() {
    // Mobile Tab Navigation Events
    if (this.mobileTabBtns) {
      this.mobileTabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
          const tab = btn.dataset.tab;
          this.setMobileTab(tab);
        });
      });
    }

    if (this.mobileViewRecipeBtn) {
      this.mobileViewRecipeBtn.addEventListener('click', () => {
        this.setMobileTab('recipe');
      });
    }

    // Smartphone hamburger navigation
    this.mobileMenuToggle?.addEventListener('click', () => this.openMobileMenu());
    this.mobileMenuClose?.addEventListener('click', () => this.closeMobileMenu());
    this.mobileMenuOverlay?.addEventListener('click', (event) => {
      if (event.target === this.mobileMenuOverlay) this.closeMobileMenu();
    });
    this.mobileMenuTabBtns?.forEach(btn => btn.addEventListener('click', () => {
      this.setMobileTab(btn.dataset.mobileMenuTab);
      this.closeMobileMenu();
    }));
    this.mobileMenuSearchInput?.addEventListener('input', (event) => {
      this.searchInput.value = event.target.value;
      this.searchQuery = event.target.value.trim().toLowerCase();
      this.renderConditionsList();
    });
    this.mobileMenuSearchForm?.addEventListener('submit', (event) => {
      event.preventDefault();
      this.setMobileTab('conditions');
      this.closeMobileMenu();
    });
    this.mobileMenuOpenCover?.addEventListener('click', () => {
      this.closeMobileMenu();
      this.openCover();
    });
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && this.mobileMenuOverlay && !this.mobileMenuOverlay.hidden) this.closeMobileMenu();
    });

    // Right panel subnav tabs
    if (this.subnavBtnRecipe) {
      this.subnavBtnRecipe.addEventListener('click', () => this.setRightPanelSubnav('recipe'));
    }
    if (this.subnavBtnCases) {
      this.subnavBtnCases.addEventListener('click', () => this.setRightPanelSubnav('cases'));
    }
    if (this.subnavBtnSafety) {
      this.subnavBtnSafety.addEventListener('click', () => this.setRightPanelSubnav('safety'));
    }

    // Welcome Cover gateway events
    if (this.coverEnterBtn) {
      this.coverEnterBtn.addEventListener('click', () => this.closeCover());
    }
    if (this.coverCloseQuickBtn) {
      this.coverCloseQuickBtn.addEventListener('click', () => this.closeCover());
    }
    if (this.openCoverBtn) {
      this.openCoverBtn.addEventListener('click', () => this.openCover());
    }

    // Mode toggles (3D Anatomical vs Body Map)
    this.modeBtn3d.addEventListener('click', () => this.setDisplayMode('3d'));
    this.modeBtnBody.addEventListener('click', () => this.setDisplayMode('body'));

    // Search input
    this.searchInput.addEventListener('input', (e) => {
      this.searchQuery = e.target.value.trim().toLowerCase();
      if (this.mobileMenuSearchInput) this.mobileMenuSearchInput.value = e.target.value;
      this.renderConditionsList();
    });

    // View toggle buttons (Anterior / Posterior)
    this.viewBtnPosterior.addEventListener('click', () => this.setView('posterior'));
    this.viewBtnAnterior.addEventListener('click', () => this.setView('anterior'));

    // Probe quick timer button
    this.startProbeTimerBtn.addEventListener('click', () => {
      if (window.innerWidth <= 900) this.setMobileTab('recipe');
      requestAnimationFrame(() => {
        this.timerModal.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        this.timerToggleBtn.focus({ preventScroll: true });
      });
    });

    // Timer modal controls
    this.modalCloseBtn.addEventListener('click', () => this.closeTimerModal());
    this.timerToggleBtn.addEventListener('click', () => this.toggleTimer());
    this.timerResetBtn.addEventListener('click', () => this.resetTimer());
    this.timerNextPointBtn.addEventListener('click', () => this.moveToNextPoint());

    // Hide tooltip on scroll
    this.conditionsList.addEventListener('scroll', () => this.hideConditionTooltip());
  }

  setMobileTab(tabName) {
    if (this.mainWorkspace) {
      this.mainWorkspace.dataset.activeTab = tabName;
    }
    if (this.mobileTabBtns) {
      this.mobileTabBtns.forEach(btn => {
        if (btn.dataset.tab === tabName) {
          btn.classList.add('active');
        } else {
          btn.classList.remove('active');
        }
      });
    }

    // If switching to anatomy in body map mode, re-render pins to ensure coordinates align
    if (tabName === 'anatomy' && this.displayMode === 'body') {
      setTimeout(() => this.renderHealingPins(), 60);
    }
  }

  openMobileMenu() {
    if (!this.mobileMenuOverlay) return;
    this.mobileMenuOverlay.hidden = false;
    this.mobileMenuToggle?.setAttribute('aria-expanded', 'true');
    document.body.classList.add('mobile-menu-open');
    if (this.mobileMenuSearchInput) this.mobileMenuSearchInput.value = this.searchInput?.value || '';
    requestAnimationFrame(() => this.mobileMenuClose?.focus());
  }

  closeMobileMenu() {
    if (!this.mobileMenuOverlay) return;
    this.mobileMenuOverlay.hidden = true;
    this.mobileMenuToggle?.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('mobile-menu-open');
    this.mobileMenuToggle?.focus({ preventScroll: true });
  }

  closeCover() {
    if (this.coverScreen) {
      this.coverScreen.classList.add('closed');
    }
  }

  openCover() {
    if (this.coverScreen) {
      this.coverScreen.classList.remove('closed');
    }
  }

  setDisplayMode(mode) {
    this.displayMode = mode;
    if (mode === '3d') {
      this.modeBtn3d.classList.add('active');
      this.modeBtnBody.classList.remove('active');
      if (this.anatomy3dWrapper) this.anatomy3dWrapper.style.display = 'flex';
      if (this.fullbody3dWrapper) this.fullbody3dWrapper.style.display = 'none';
      if (this.bodyViewToggle) this.bodyViewToggle.style.display = 'none';
    } else {
      this.modeBtnBody.classList.add('active');
      this.modeBtn3d.classList.remove('active');
      if (this.anatomy3dWrapper) this.anatomy3dWrapper.style.display = 'none';
      if (this.fullbody3dWrapper) this.fullbody3dWrapper.style.display = 'flex';
      if (this.bodyViewToggle) this.bodyViewToggle.style.display = 'flex';
      this.setView(this.currentView || 'posterior');
      this.renderHealingPins();
    }
  }

  setView(view) {
    this.currentView = view;
    if (view === 'posterior') {
      if (this.viewBtnPosterior) this.viewBtnPosterior.classList.add('active');
      if (this.viewBtnAnterior) this.viewBtnAnterior.classList.remove('active');
      if (this.fullbodyImgPosterior) this.fullbodyImgPosterior.style.display = 'block';
      if (this.fullbodyImgAnterior) this.fullbodyImgAnterior.style.display = 'none';
      if (this.fullbodyViewIndicator) {
        this.fullbodyViewIndicator.textContent = '후면 전신 3D 투시도 (머리부터 발끝까지 완벽 투시)';
      }
    } else {
      if (this.viewBtnAnterior) this.viewBtnAnterior.classList.add('active');
      if (this.viewBtnPosterior) this.viewBtnPosterior.classList.remove('active');
      if (this.fullbodyImgAnterior) this.fullbodyImgAnterior.style.display = 'block';
      if (this.fullbodyImgPosterior) this.fullbodyImgPosterior.style.display = 'none';
      if (this.fullbodyViewIndicator) {
        this.fullbodyViewIndicator.textContent = '정면 전신 3D 투시도 (머리부터 발끝까지 완벽 투시)';
      }
    }
    this.renderHealingPins();
  }

  render() {
    this.setDisplayMode(this.displayMode || '3d');
    this.renderCategories();
    this.renderConditionsList();
    this.renderCurrentCondition();
  }

  renderCategories() {
    this.categoryBar.innerHTML = '';
    this.categories.forEach(cat => {
      const count = (cat.id === 'all') 
        ? this.conditions.length 
        : this.conditions.filter(c => c.categoryId === cat.id).length;

      const chip = document.createElement('button');
      chip.className = `cat-chip ${this.currentCategory === cat.id ? 'active' : ''}`;
      chip.dataset.cat = cat.id;
      chip.innerHTML = `
        <span class="cat-chip-name">${cat.nameKo}</span>
        <span class="cat-chip-count">${count}</span>
      `;
      chip.addEventListener('click', () => {
        this.currentCategory = cat.id;
        this.renderCategories();
        this.renderConditionsList();
      });
      this.categoryBar.appendChild(chip);
    });
  }

  getFilteredConditions() {
    return this.conditions.filter(item => {
      const matchCat = (this.currentCategory === 'all' || item.categoryId === this.currentCategory);
      if (!matchCat) return false;

      if (!this.searchQuery) return true;

      const q = this.searchQuery;
      const titleKoMatch = item.titleKo.toLowerCase().includes(q);
      const titleEnMatch = item.titleEn.toLowerCase().includes(q);
      const symptomMatch = item.symptoms.some(s => s.toLowerCase().includes(q));
      const hpMatch = item.healingPoints.some(hp => 
        hp.nameKo.toLowerCase().includes(q) || 
        hp.nameEn.toLowerCase().includes(q) || 
        hp.targetAnatomy.toLowerCase().includes(q)
      );

      return titleKoMatch || titleEnMatch || symptomMatch || hpMatch;
    });
  }

  renderConditionsList() {
    const list = this.getFilteredConditions();
    this.conditionsCounter.textContent = `${list.length}개 질환`;
    this.conditionsList.innerHTML = '';

    if (list.length === 0) {
      this.conditionsList.innerHTML = `
        <div style="padding: 24px; text-align: center; color: var(--text-muted); font-size: 0.85rem;">
          검색된 증상 또는 질환이 없습니다.
        </div>
      `;
      return;
    }

    list.forEach(cond => {
      const card = document.createElement('div');
      card.className = `condition-item-card ${this.currentCondition.id === cond.id ? 'active' : ''}`;
      card.setAttribute('title', `${cond.titleKo} (${cond.titleEn})\n${cond.overview}`);
      card.innerHTML = `
        <div class="card-header-line">
          <span class="card-badge">${cond.badge}</span>
          <span class="card-hp-count">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
              <circle cx="12" cy="12" r="10" />
            </svg>
            HP ${cond.healingPoints.length}포인트
          </span>
        </div>
        <div class="card-title-ko">${cond.titleKo}</div>
        <div class="card-title-en">${cond.titleEn}</div>
        <div class="card-preview-text" title="${cond.overview}">${cond.overview}</div>
      `;

      card.addEventListener('mouseenter', () => {
        this.showConditionTooltip(cond, card);
      });

      card.addEventListener('mousemove', (e) => {
        this.positionConditionTooltip(e, card);
      });

      card.addEventListener('mouseleave', () => {
        this.hideConditionTooltip();
      });

      card.addEventListener('click', () => {
        this.hideConditionTooltip();
        this.selectCondition(cond);
      });

      this.conditionsList.appendChild(card);
    });
  }

  showConditionTooltip(cond, card) {
    if (!this.conditionFloatingTooltip) return;
    this.conditionFloatingTooltip.innerHTML = `
      <div class="tooltip-header">
        <span class="tooltip-badge">${cond.badge}</span>
        <span class="tooltip-title-ko">${cond.titleKo}</span>
      </div>
      <div class="tooltip-title-en">${cond.titleEn}</div>
      <div class="tooltip-desc">${cond.overview}</div>
      <div class="tooltip-action-hint">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
          <polygon points="5 3 19 12 5 21 5 3"></polygon>
        </svg>
        클릭 시 3D 정밀 해부도 및 힐링 포인트 탐색
      </div>
    `;
    this.positionConditionTooltip(null, card);
    this.conditionFloatingTooltip.classList.add('visible');
  }

  positionConditionTooltip(e, card) {
    if (!this.conditionFloatingTooltip) return;
    const cardRect = card.getBoundingClientRect();
    
    // Position to the right of the card, floating gracefully into center panel area
    let left = cardRect.right + 12;
    let top = cardRect.top;

    const tooltipHeight = this.conditionFloatingTooltip.offsetHeight || 140;
    if (top + tooltipHeight > window.innerHeight - 16) {
      top = window.innerHeight - tooltipHeight - 16;
    }
    if (top < 70) top = 70;

    this.conditionFloatingTooltip.style.left = `${left}px`;
    this.conditionFloatingTooltip.style.top = `${top}px`;
  }

  hideConditionTooltip() {
    if (!this.conditionFloatingTooltip) return;
    this.conditionFloatingTooltip.classList.remove('visible');
  }

  selectCondition(condition) {
    this.currentCondition = condition;
    this.selectedPointId = condition.healingPoints[0]?.id || null;

    // Determine default view for this condition based on points
    const posteriorCount = condition.healingPoints.filter(p => p.pinCoordinates.view === 'posterior').length;
    const anteriorCount = condition.healingPoints.filter(p => p.pinCoordinates.view === 'anterior').length;
    if (anteriorCount > posteriorCount) {
      this.setView('anterior');
    } else {
      this.setView('posterior');
    }

    this.renderConditionsList();
    this.renderCurrentCondition();

    // On mobile/tablet screen, immediately switch active view to 3D anatomy tab for clinical workflow
    if (window.innerWidth <= 900) {
      this.setMobileTab('anatomy');
    }
  }

  renderCurrentCondition() {
    const cond = this.currentCondition;
    if (!cond) return;

    // Update Header tags & Titles
    const catObj = this.categories.find(c => c.id === cond.categoryId);
    this.recipeCategoryTag.textContent = catObj ? catObj.nameKo : '전체';
    this.recipeBadge.textContent = cond.badge;
    this.recipeMainTitle.textContent = cond.titleKo;
    this.recipeSubTitle.textContent = cond.titleEn;

    // Update 3D Translucent Anatomical Image & Caption
    if (this.anatomy3dImage) {
      const targetSrc = this.getDetailSource ? this.getDetailSource() : (cond.illustrationImage || 'assets/cervical_headache_3d.jpg');
      this.anatomy3dImage.onerror = () => {
        this.anatomy3dImage.onerror = null; this.anatomy3dImage.src = 'assets/image-not-loaded.svg';
      };
      this.anatomy3dImage.src = targetSrc;
      this.anatomyImgCaption.textContent = `${cond.titleKo} (${cond.badge}) 질환별 참고 해부도 · 치료점은 직접 배치`;
    }

    // Symptoms
    this.symptomsContainer.innerHTML = '';
    cond.symptoms.forEach(sym => {
      const chip = document.createElement('div');
      chip.className = 'symptom-chip';
      chip.textContent = sym;
      this.symptomsContainer.appendChild(chip);
    });

    // Mechanism
    this.mechanismContainer.innerHTML = `
      <div class="mechanism-text">
        ${cond.pathologyMechanism}
      </div>
    `;

    // Healing Points in Right Panel
    this.healingPointsContainer.innerHTML = '';
    cond.healingPoints.forEach((hp, idx) => {
      const isSelected = (this.selectedPointId === hp.id || (!this.selectedPointId && idx === 0));
      if (isSelected && !this.selectedPointId) this.selectedPointId = hp.id;

      const hpCard = document.createElement('div');
      hpCard.id = `hp-card-${hp.id}`;
      hpCard.className = `hp-detail-card ${isSelected ? 'active' : ''}`;
      hpCard.innerHTML = `
        <div class="hp-card-top">
          <span class="hp-code-badge">${escapeHTML(hp.code)}</span>
          <span class="hp-name-ko">${escapeHTML(hp.nameKo)}</span>
        </div>
        <div class="hp-name-en">${escapeHTML(hp.nameEn)}</div>
        <div class="hp-info-row">
          <span class="info-label">타깃 조직</span>
          <span class="info-value highlight">${escapeHTML(hp.targetAnatomy)}</span>
        </div>
        <div class="hp-info-row">
          <span class="info-label">촉진 및 위치</span>
          <span class="info-value">${escapeHTML(hp.locationGuide)}</span>
        </div>
        <div class="hp-info-row">
          <span class="info-label">임상적 의의</span>
          <span class="info-value">${escapeHTML(hp.significance)}</span>
        </div>
      `;

      hpCard.addEventListener('click', () => {
        this.selectHealingPoint(hp);
      });

      this.healingPointsContainer.appendChild(hpCard);
    });

    // NovaCell Protocol Card
    const proto = cond.novaCellProtocol;
    this.protocolCard.innerHTML = `
      <div class="protocol-header-title">
        <div class="protocol-brand-label">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
            <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
          </svg>
          NovaCell : High-Voltage & Microcurrent
        </div>
        <span class="protocol-probe-badge">단일 펜 도자 (Monopolar)</span>
      </div>

      <div class="protocol-spec-grid">
        <div class="spec-tile">
          <div class="spec-tile-label">도자 접촉 기법</div>
          <div class="spec-tile-val">${proto.contactMethod}</div>
        </div>
        <div class="spec-tile">
          <div class="spec-tile-label">포인트당 권장 시간</div>
          <div class="spec-tile-val">${proto.contactDurationPerPoint}</div>
        </div>
        <div class="spec-tile">
          <div class="spec-tile-label">출력 강도 레벨</div>
          <div class="spec-tile-val">${proto.outputIntensity}</div>
        </div>
        <div class="spec-tile">
          <div class="spec-tile-label">환부 따끔 거림 제거 방법</div>
          <div class="spec-tile-val">${proto.stingingRemedy || '환부에 알콜 또는 생리식염수 스프레이'}</div>
        </div>
      </div>

      <div class="section-label" style="font-size: 0.78rem; margin-top: 4px;">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M12 20v-6M6 20V10M18 20V4"></path>
        </svg>
        임상 시술 순서 (Treatment Sequence)
      </div>

      <div class="sequence-steps-list">
        ${proto.treatmentSequence.map((step, sIdx) => `
          <div class="step-item">
            <span class="step-num">${sIdx + 1}</span>
            <span>${step}</span>
          </div>
        `).join('')}
      </div>

      <div class="clinical-pearls-box">
        <strong>💡 임상 시술 노하우 & Clinical Pearls</strong>
        ${proto.clinicalPearls.join('<br>')}
      </div>
    `;

    // Render Subnav Panels (Clinical Cases & Safety Guide)
    this.renderClinicalCases(cond);
    this.renderSafetyGuide(cond);
    this.setRightPanelSubnav(this.currentSubnav || 'recipe');

    // Render Canvas Pins & Bottom Quick Bar
    this.renderHealingPins();
    this.updateActivePointBar();
  }

  setRightPanelSubnav(tabName) {
    this.currentSubnav = tabName;

    const btnMap = {
      recipe: this.subnavBtnRecipe,
      cases: this.subnavBtnCases,
      safety: this.subnavBtnSafety
    };

    Object.keys(btnMap).forEach(key => {
      const btn = btnMap[key];
      if (btn) {
        if (key === tabName) {
          btn.classList.add('active');
        } else {
          btn.classList.remove('active');
        }
      }
    });

    const panelMap = {
      recipe: this.recipeViewContainer,
      cases: this.casesViewContainer,
      safety: this.safetyViewContainer
    };

    Object.keys(panelMap).forEach(key => {
      const panel = panelMap[key];
      if (panel) {
        if (key === tabName) {
          panel.classList.add('active');
          panel.style.display = 'flex';
        } else {
          panel.classList.remove('active');
          panel.style.display = 'none';
        }
      }
    });

    const scrollWrap = document.querySelector('.recipe-scroll-content');
    if (scrollWrap) scrollWrap.scrollTop = 0;
  }

  renderClinicalCases(cond) {
    if (!this.casesListContainer) return;
    const cases = cond.clinicalCases || [];
    if (this.casesCountBadge) {
      this.casesCountBadge.textContent = cases.length;
    }

    if (cases.length === 0) {
      this.casesListContainer.innerHTML = `
        <div style="text-align: center; padding: 40px 20px; color: var(--text-muted);">
          <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" style="margin-bottom: 12px; opacity: 0.5;">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="8" x2="12" y2="12"></line>
            <line x1="12" y1="16" x2="12.01" y2="16"></line>
          </svg>
          <div style="font-size: 0.95rem; font-weight: 600; margin-bottom: 4px;">해당 질환에 대한 임상 증례 데이터 준비 중</div>
          <div style="font-size: 0.8rem;">참고 문헌 및 임상 기록 데이터를 정밀 분석하여 순차적으로 탑재되고 있습니다.</div>
        </div>
      `;
      return;
    }

    this.casesListContainer.innerHTML = cases.map((c, idx) => `
      <div class="case-study-card">
        <div class="case-card-header">
          <div class="case-id-badge">
            <span class="badge-dot"></span>
            증례 Case #${idx + 1} (${c.caseId || 'REF-' + (idx + 1)})
          </div>
          <div class="case-patient-profile">${c.patientProfile}</div>
        </div>

        <div class="case-row-block">
          <div class="case-row-label">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
            주호소 (Chief Complaint)
          </div>
          <div class="case-row-value">${c.chiefComplaint}</div>
        </div>

        <div class="case-row-block">
          <div class="case-row-label">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6L6 18M6 6l12 12"></path></svg>
            기왕력 및 기존 치료 경과 (Prior Treatments)
          </div>
          <div class="case-row-value">${c.priorTreatments}</div>
        </div>

        <div class="case-row-block">
          <div class="case-row-label">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg>
            이학적 진찰 및 압통점 소견 (Clinical Examination)
          </div>
          <div class="case-row-value">${c.clinicalExamination}</div>
        </div>

        <div class="case-row-block">
          <div class="case-row-label" style="color: #6ee7b7;">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
            노바셀 펜 도자 힐링 포인트 통전 프로토콜 (NovaCell Application)
          </div>
          <div class="case-row-value">${c.novaCellApplication}</div>
        </div>

        <div class="case-outcome-box">
          <div class="outcome-title">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
            치료 경과 및 임상적 호전 (Therapeutic Outcome)
          </div>
          <div class="outcome-desc">${c.therapeuticOutcome}</div>
        </div>

        ${c.clinicalPearls ? `
          <div class="case-pearls-box">
            <strong>💡 임상 핵심 통찰 (Clinical Insight)</strong>
            ${c.clinicalPearls}
          </div>
        ` : ''}
      </div>
    `).join('');
  }

  renderSafetyGuide(cond) {
    if (!this.safetyGuideContent) return;
    const safety = cond.anatomicalSafetyGuide;
    if (!safety) {
      this.safetyGuideContent.innerHTML = `
        <div style="text-align: center; padding: 40px 20px; color: var(--text-muted);">
          해당 질환에 대한 안전 가이드 정보를 구성 중입니다.
        </div>
      `;
      return;
    }

    this.safetyGuideContent.innerHTML = `
      <div class="safety-warning-banner">
        <div class="safety-warning-title">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
          해부학적 위험 구조물 및 시술 안전 지침
        </div>
        <div class="safety-warning-desc">
          노바셀은 비침습 단일 펜 도자를 사용하지만, 신경 포착 부위 및 대혈관 주행 인접 부위를 다루므로 개별 환자의 해부학적 확인과 기기 사용설명서 검토가 필요합니다. 이 자료는 안전이나 치료 효과를 보장하지 않습니다.
        </div>
      </div>

      <div class="safety-block-grid">
        <div class="safety-block-item">
          <div class="safety-block-header">
            <div class="safety-block-icon landmark">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
            </div>
            <div class="safety-block-title">기준 골격 및 근육 랜드마크</div>
          </div>
          <div class="safety-block-text">${safety.primaryLandmarks}</div>
        </div>

        <div class="safety-block-item">
          <div class="safety-block-header">
            <div class="safety-block-icon danger">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6L6 18M6 6l12 12"></path></svg>
            </div>
            <div class="safety-block-title">인접 주의/기피 위험 구조물</div>
          </div>
          <div class="safety-block-text" style="color: #fca5a5;">${safety.dangerStructures}</div>
        </div>

        <div class="safety-block-item">
          <div class="safety-block-header">
            <div class="safety-block-icon technique">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
            </div>
            <div class="safety-block-title">펜 도자 접촉 압력 및 각도 기법</div>
          </div>
          <div class="safety-block-text">${safety.probeTechnique}</div>
        </div>

        <div class="safety-block-item">
          <div class="safety-block-header">
            <div class="safety-block-icon precautions">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
            </div>
            <div class="safety-block-title">의료사고 방지 필수 준수의무</div>
          </div>
          <div class="safety-block-text">${safety.safetyPrecautions}</div>
        </div>
      </div>
    `;
  }

  getActiveHealingPoint() {
    if (!this.currentCondition) return null;
    return this.currentCondition.healingPoints.find(p => p.id === this.selectedPointId) || this.currentCondition.healingPoints[0];
  }

  selectHealingPoint(hp) {
    this.selectedPointId = hp.id;

    // Switch view if point is on opposite view
    if (hp.pinCoordinates.view && hp.pinCoordinates.view !== this.currentView) {
      this.setView(hp.pinCoordinates.view);
    } else {
      this.renderHealingPins();
    }

    // Update HP cards active state in right panel
    const allCards = this.healingPointsContainer.querySelectorAll('.hp-detail-card');
    allCards.forEach(c => c.classList.remove('active'));
    const targetCard = document.getElementById(`hp-card-${hp.id}`);
    if (targetCard) {
      targetCard.classList.add('active');
      targetCard.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }

    this.updateActivePointBar();
  }

  updateActivePointBar() {
    const activeHp = this.getActiveHealingPoint();
    if (!activeHp) return;

    if (this.activePointBadge) this.activePointBadge.textContent = activeHp.code;
    this.activePointTitle.textContent = `${activeHp.nameKo} (${activeHp.nameEn.split('(')[0].trim()})`;
  }

  createPinElement(hp, isSelected) {
    const pin = document.createElement('div');
    pin.className = `interactive-hp-pin ${isSelected ? 'active' : ''}`;
    pin.style.left = `${hp.pinCoordinates.x}%`;
    pin.style.top = `${hp.pinCoordinates.y}%`;

    pin.innerHTML = `
      <div class="pin-pulse-wave"></div>
      <div class="pin-core-circle">${hp.code.replace('HP-', '')}</div>
      <div class="pin-label-hover">
        <div class="pin-label-name-ko">${escapeHTML(hp.nameKo)}</div>
        <div class="pin-label-name-en">${escapeHTML(hp.nameEn)}</div>
      </div>
    `;

    pin.addEventListener('click', (e) => {
      e.stopPropagation();
      this.selectHealingPoint(hp);
    });
    return pin;
  }

  renderHealingPins() {
    if (this.pinsLayer) this.pinsLayer.innerHTML = '';
    const cond = this.currentCondition;
    if (!cond) return;

    cond.healingPoints.forEach(hp => {
      const isSelected = (this.selectedPointId === hp.id);

      // Render pin on 3D Full-Body X-ray Model if matching active view
      if (this.pinsLayer && hp.pinCoordinates.view === this.currentView) {
        this.pinsLayer.appendChild(this.createPinElement(hp, isSelected));
      }
    });
  }

  // ==========================================
  // NovaCell Monopolar Probe Timer Controller
  // ==========================================
  openTimerModal(hp) {
    if (!hp) hp = this.getActiveHealingPoint();
    if (!hp) return;

    this.timerHpCode.textContent = `${escapeHTML(hp.code)} • 힐링 포인트 통전`;
    this.timerHpTitle.textContent = hp.nameKo;
    this.timerTotalSeconds = 25; // Standard 25s per point
    this.timerSeconds = this.timerTotalSeconds;
    this.updateTimerDisplay();

    this.timerModal.classList.add('open');
  }

  closeTimerModal() {
    this.pauseTimer();
    this.timerModal.classList.remove('open');
  }

  updateTimerDisplay() {
    this.timerDisplay.innerHTML = `${this.timerSeconds}<span class="timer-sec-unit">초</span>`;
    // Circle circumference = 2 * PI * r = 2 * 3.14159 * 70 ≈ 440
    const circumference = 440;
    const progress = (this.timerTotalSeconds - this.timerSeconds) / this.timerTotalSeconds;
    const dashoffset = circumference * (1 - progress);
    this.timerProgressCircle.style.strokeDashoffset = dashoffset;
  }

  toggleTimer() {
    if (this.isTimerRunning) {
      this.pauseTimer();
    } else {
      this.startTimer();
    }
  }

  startTimer() {
    if (this.timerSeconds <= 0) {
      this.timerSeconds = this.timerTotalSeconds;
    }
    this.isTimerRunning = true;
    this.timerToggleBtn.textContent = '일시 정지';
    this.timerToggleBtn.classList.remove('primary');

    this.timerInterval = setInterval(() => {
      this.timerSeconds--;
      this.updateTimerDisplay();

      if (this.timerSeconds <= 0) {
        this.pauseTimer();
        this.onTimerComplete();
      }
    }, 1000);
  }

  pauseTimer() {
    this.isTimerRunning = false;
    clearInterval(this.timerInterval);
    this.timerToggleBtn.textContent = '통전 시작';
    this.timerToggleBtn.classList.add('primary');
  }

  resetTimer() {
    this.pauseTimer();
    this.timerSeconds = this.timerTotalSeconds;
    this.updateTimerDisplay();
  }

  onTimerComplete() {
    // Flash effect / Sound cue simulation
    this.timerDisplay.innerHTML = `<span style="color: var(--accent-emerald); font-size: 2rem;">완료!</span>`;
    if (navigator.vibrate) {
      navigator.vibrate([100, 50, 100]);
    }
  }

  moveToNextPoint() {
    this.resetTimer();
    const cond = this.currentCondition;
    if (!cond) return;

    const points = cond.healingPoints;
    const currentIndex = points.findIndex(p => p.id === this.selectedPointId);
    const nextIndex = (currentIndex + 1) % points.length;
    const nextPoint = points[nextIndex];

    this.selectHealingPoint(nextPoint);
    this.openTimerModal(nextPoint);
    this.startTimer();
  }
}
