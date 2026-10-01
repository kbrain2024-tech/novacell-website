
  // Global drawer functions
  window.toggleDrawer = function() {
    const drawer = document.getElementById('mobile-drawer');
    const overlay = document.getElementById('drawer-overlay');
    if (!drawer || !overlay) return;
    const isHidden = drawer.classList.contains('hidden');
    if (isHidden) {
      drawer.classList.remove('hidden');
      overlay.classList.remove('hidden');
      document.body.classList.add('drawer-open');
    } else {
      drawer.classList.add('hidden');
      overlay.classList.add('hidden');
      document.body.classList.remove('drawer-open');
    }
  };
  window.closeDrawer = function() {
    const drawer = document.getElementById('mobile-drawer');
    const overlay = document.getElementById('drawer-overlay');
    if (drawer) drawer.classList.add('hidden');
    if (overlay) overlay.classList.add('hidden');
    document.body.classList.remove('drawer-open');
  };
  window.openDrawer = function() {
    const drawer = document.getElementById('mobile-drawer');
    const overlay = document.getElementById('drawer-overlay');
    if (drawer) drawer.classList.remove('hidden');
    if (overlay) overlay.classList.remove('hidden');
    document.body.classList.add('drawer-open');
  };

/**
 * ==========================================================================
 * NovaCell Therapy Bio-Frequency Studio (novacell-freemium.js)
 * frequency.novacell.kr 공식 연동 & Freemium 이용권 게이트웨이 컨트롤러
 * 완벽한 재생/정지(Stop/Pause) 제어 및 전 기능 검토 모드 활성화 버전
 * ==========================================================================
 */

(function () {
  "use strict";

  // 1. 상태 관리 (검토를 위해 기본 VIP 활성화 = true)
  window.NovaCellStudio = {
    isVip: (function() {
      try {
        return localStorage.getItem('novacell_vip_status') === 'active' || 
               localStorage.getItem('novacell_studio_vip') === 'true' ||
               localStorage.getItem('novacell_vip_pass') === 'true';
      } catch (e) { return false; }
    })(), // 기본 Freemium 모드 (무료 3종 체험 + VIP 5종 및 고급기능 잠금)
    currentTab: 'tab-presets',
    activePresetKey: null,
    activePreset: null,
    sleepTimerId: null,
    sleepTimerRemaining: 0,
    
    // 8대 프리셋 데이터베이스
    presets: {
      'cosmos-harmony': {
        name: '우주의 자연 조화 (432Hz)',
        freqHz: 432,
        carrierHz: 200,
        beatHz: 6, // 세타파
        beatsVolume: 0.40,
        solfeggioFreq: '432',
        solfeggioVolume: 0.40,
        desc: '우주 자연과 동조되는 432Hz 치유 톤과 심층 이완 세타파의 조화',
        badge: '무료 체험',
        isVip: false,
        nature: { forestbirds: 0.50, stream: 0.20 }
      },
      'dna-healing': {
        name: '세포 기적 & DNA 회복 (528Hz)',
        freqHz: 528,
        carrierHz: 200,
        beatHz: 10, // 알파파
        beatsVolume: 0.40,
        solfeggioFreq: '528',
        solfeggioVolume: 0.40,
        desc: '손상된 세포의 회복과 DNA 재정렬을 촉진하는 미라클 솔페지오',
        badge: '무료 체험',
        isVip: false,
        nature: { rain: 0.35, singingbowl: 0.25 }
      },
      'calm-anxiety': {
        name: '불안·죄책감 정화 (396Hz)',
        freqHz: 396,
        carrierHz: 200,
        beatHz: 3.5, // 델타파
        beatsVolume: 0.40,
        solfeggioFreq: '396',
        solfeggioVolume: 0.40,
        desc: '내면의 무거운 불안과 두려움을 녹여내고 평온을 회복하는 주파수',
        badge: '무료 체험',
        isVip: false,
        nature: { campfire: 0.45, rain: 0.20 }
      },
      'cell-voltage': {
        name: '세포 전압(-50mV) 복원 프로토콜',
        freqHz: '7.83_528',
        carrierHz: 216,
        beatHz: 7.83, // 슈만 공명
        beatsVolume: 0.40,
        solfeggioFreq: '528',
        solfeggioVolume: 0.35,
        rifeCode: '001',
        rifeVolume: 0.35,
        desc: '박창혁 박사의 전압 의학 기반 세포 전위 정상화 및 생체 에너지 충전',
        badge: 'VIP 전용',
        isVip: true,
        nature: { rain: 0.35, stream: 0.30, singingbowl: 0.20 }
      },
      'deep-sleep': {
        name: '깊은 델타 REM 숙면 유도',
        carrierHz: 150,
        beatHz: 2, // 2Hz 깊은 수면 델타파
        beatsVolume: 0.45,
        solfeggioFreq: '396',
        solfeggioVolume: 0.30,
        rifeCode: '003', // 불면 해소
        rifeVolume: 0.35,
        desc: '잡념을 가라앉히고 뇌파를 수면 델타파로 유도하는 딥 릴랙스',
        badge: 'VIP 전용',
        isVip: true,
        nature: { rain: 0.45, stream: 0.35 }
      },
      'pain-relief': {
        name: '만성 통증 & 근골격 이완',
        carrierHz: 174,
        beatHz: 4.5, // 세타/델타 경계 이완
        beatsVolume: 0.40,
        solfeggioFreq: '432',
        solfeggioVolume: 0.35,
        rifeCode: '013', // 통증 완화
        rifeVolume: 0.40,
        desc: '근육 긴장 해소 및 말초 신경 염증 신호 감쇠를 위한 세포 공명',
        badge: 'VIP 전용',
        isVip: true,
        nature: { stream: 0.40, singingbowl: 0.30 }
      },
      'vagus-nerve': {
        name: '자율신경 조율 & 미주신경 밸런스',
        carrierHz: 136.1, // 옴(Om) 명상 톤 - 부교감신경 이완 (즉시 재생)
        beatHz: 7.83, // 슈만 공명 - 자율신경 안정화
        beatsVolume: 0.45,
        solfeggioFreq: '432', // 심장 및 심신 조화 432Hz (즉시 재생)
        solfeggioVolume: 0.40,
        rifeCode: '008', // Code 008 : 자율신경 수면 조율
        rifeVolume: 0.35,
        desc: '교감신경 과항진을 낮추고 부교감신경을 활성화하여 심박 안정과 자율신경 균형 유도',
        badge: 'VIP 전용',
        isVip: true,
        nature: { stream: 0.35, forestbirds: 0.30, rain: 0.15 }
      },
      'focus-brain': {
        name: '감마파 초집중 & 뇌 활력 (40Hz)',
        carrierHz: 200,
        beatHz: 40, // 40Hz 정통 감마파 (미토콘드리아 및 인지 활력)
        beatsVolume: 0.55,
        solfeggioFreq: '741', // 741Hz 직관력 & 뇌 인지 활력 솔페지오
        solfeggioVolume: 0.40,
        rifeCode: '072', // Code 072 : 일 집중력 스위치
        rifeVolume: 0.35,
        desc: '인지 집중력 향상 및 두뇌 미토콘드리아 활성을 위한 정밀 40Hz 감마파 동조',
        badge: 'VIP 전용',
        isVip: true,
        nature: { rain: 0.30, stream: 0.20 }
      }
    }
  };

  // 1.5. [신규] 모든 재생/일시정지 버튼 및 UI 완벽 동기화 함수
  window.syncAllPlayButtons = function (isPlaying, title) {
    if (typeof window.updateBreathingPlayButtonUI === 'function') {
      window.updateBreathingPlayButtonUI();
    }
    const btnMasterPlay = document.getElementById('btn-master-play');
    if (btnMasterPlay) {
      btnMasterPlay.innerHTML = isPlaying ? '<i class="fa-solid fa-pause"></i>' : '<i class="fa-solid fa-play"></i>';
      btnMasterPlay.classList.toggle('playing', isPlaying);
    }

    const stickyPlayBtn = document.getElementById('sticky-play-btn');
    if (stickyPlayBtn) {
      stickyPlayBtn.innerHTML = isPlaying ? '<i class="ri-pause-fill"></i>' : '<i class="ri-play-fill"></i>';
      stickyPlayBtn.classList.toggle('playing', isPlaying);
    }

    const isEn = window.currentLang === 'en';
    const heroPlayBtn = document.getElementById('hero-play-btn');
    if (heroPlayBtn) {
      heroPlayBtn.innerHTML = isPlaying
        ? `<i class="ri-pause-fill" style="font-size: 1.2rem;"></i> <span id="hero-play-btn-text">${isEn ? 'Stop Sound' : '사운드 정지'}</span>`
        : `<i class="ri-play-fill" style="font-size: 1.2rem;"></i> <span id="hero-play-btn-text">${isEn ? 'Play Sound' : '사운드 재생'}</span>`;
      heroPlayBtn.classList.toggle('playing', isPlaying);
    }

    const btnHeroRife = document.getElementById('btn-hero-rife100-play');
    if (btnHeroRife) {
      btnHeroRife.innerHTML = isPlaying
        ? `<i class="ri-pause-fill"></i> ${isEn ? 'Pause' : '일시정지'}`
        : `<i class="ri-play-fill"></i> ${isEn ? 'Play / Stop' : '재생 / 정지'}`;
      btnHeroRife.classList.toggle('playing', isPlaying);
    }

    const btnHeroVip = document.getElementById('btn-hero-vip-play');
    if (btnHeroVip) {
      btnHeroVip.innerHTML = isPlaying
        ? `<i class="ri-pause-fill"></i> ${isEn ? 'Pause' : '일시정지'}`
        : `<i class="ri-play-fill"></i> ${isEn ? 'Play / Stop' : '재생 / 정지'}`;
      btnHeroVip.classList.toggle('playing', isPlaying);
    }

    if (isPlaying) {
      const stickyBar = document.getElementById('sticky-audio-bar');
      if (stickyBar) stickyBar.classList.add('visible');
      if (title) {
        const titleEl = document.getElementById('sticky-track-title');
        if (titleEl) titleEl.textContent = title;
      }
      const visualizerFallback = document.querySelector('.visualizer-fallback');
      if (visualizerFallback) visualizerFallback.style.display = 'none';
      if (typeof startVisualizer === 'function') startVisualizer();
    } else {
      const btnRifePlay = document.getElementById('btn-rife-play');
      if (btnRifePlay) {
        btnRifePlay.innerHTML = '<i class="fa-solid fa-play"></i>';
        btnRifePlay.classList.remove('playing');
      }
      const btnVipPlay = document.getElementById('btn-vip-play');
      if (btnVipPlay) {
        btnVipPlay.innerHTML = '<i class="fa-solid fa-play"></i>';
        btnVipPlay.classList.remove('playing');
      }
      const btnBeatsPlay = document.getElementById('btn-beats-play');
      if (btnBeatsPlay) {
        btnBeatsPlay.innerHTML = '<i class="fa-solid fa-play"></i>';
        btnBeatsPlay.classList.remove('playing');
      }
      const btnCustomPlay = document.getElementById('btn-custom-play');
      if (btnCustomPlay) {
        btnCustomPlay.innerHTML = '<i class="fa-solid fa-play"></i> <span>세션 재생</span>';
        btnCustomPlay.classList.remove('active');
      }
      document.querySelectorAll('.preset-card').forEach(card => {
        card.classList.remove('active');
      });
      document.querySelectorAll('.nc-code-card').forEach(card => {
        card.classList.remove('active-playing', 'active-vip-playing');
        const playBtn = card.querySelector('.btn-card-play, .btn-card-vip-play');
        if (playBtn) {
          const isVipBtn = playBtn.classList.contains('btn-card-vip-play');
          playBtn.innerHTML = `<i class="ri-play-fill"></i> <span>${isVipBtn ? 'VIP 코드 청취' : '주파수 힐링'}</span>`;
        }
        const pulse = card.querySelector('.pulse-indicator');
        if (pulse) pulse.remove();
      });
      const visualizerFallback = document.querySelector('.visualizer-fallback');
      if (visualizerFallback) visualizerFallback.style.display = 'flex';
    }
  };

  // 2. [핵심] 완벽한 마스터 정지 (Stop/Pause) 함수
  window.stopAllAudio = function () {
    const eng = window.engine || (typeof engine !== 'undefined' ? engine : null);

    // 1) Web Audio API 오디오 엔진 정지
    if (eng) {
      try {
        eng.stop();
      } catch (e) {
        console.error('engine.stop error:', e);
      }
      eng.isPlaying = false;
    }

    // 2) HTML5 Audio 요소들 (12종 빗소리 등) 일괄 정지 및 되감기
    if (eng && eng.rainAudioElements) {
      for (const trackId in eng.rainAudioElements) {
        const audio = eng.rainAudioElements[trackId];
        if (audio) {
          try {
            audio.pause();
            audio.currentTime = 0;
          } catch (e) {}
        }
      }
    }
    document.querySelectorAll('audio').forEach(a => {
      try {
        a.pause();
        a.currentTime = 0;
      } catch (e) {}
    });

    // 3) Rife / VIP / Custom 모니터 타이머 정지
    if (typeof resetRifeTimer === 'function') resetRifeTimer();
    if (typeof resetVipTimer === 'function') resetVipTimer();
    if (typeof stopCustomMonitor === 'function') stopCustomMonitor();

    // 4) 모든 재생/정지 버튼 UI 복원
    window.syncAllPlayButtons(false);

    window.NovaCellStudio.activePresetKey = null;
    showToast('⏸️ 사운드가 일시 정지되었습니다.');
  };

  // 3. 마스터 시작 함수
  window.startMasterAudio = function () {
    const eng = window.engine || (typeof engine !== 'undefined' ? engine : null);
    if (!eng) return;
    
    eng.init();
    if (eng.audioCtx && eng.audioCtx.state === 'suspended') {
      eng.audioCtx.resume();
    }

    let masterVol = parseFloat(document.getElementById('slider-master-volume')?.value || 0.8);
    if (isNaN(masterVol) || masterVol <= 0.05) masterVol = 0.8;
    eng.setMasterVolume(masterVol);

    eng.start();
    window.syncAllPlayButtons(true, '바이오 힐링 사운드');
    showToast('▶️ 사운드가 재생됩니다.');
  };

  // 4. [토글] 마스터 재생 / 정지 통합 스위처
  window.toggleMasterPlayback = function () {
    const eng = window.engine || (typeof engine !== 'undefined' ? engine : null);
    if (!eng) return;
    if (eng.isPlaying) {
      window.stopAllAudio();
      if (typeof window.pauseBreathingSession === 'function' && window.isBreathingPlaying) {
        window.pauseBreathingSession();
      }
    } else {
      const isCareTab = document.getElementById('tab-care')?.classList.contains('active');
      if (isCareTab && typeof window.startBreathingSession === 'function') {
        window.startBreathingSession();
      } else if (window.NovaCellStudio.activePresetKey) {
        window.playPreset(window.NovaCellStudio.activePresetKey);
      } else {
        window.playPreset('cosmos-harmony');
      }
    }
  };

  // 5. [토글 지원] 프리셋 원클릭 재생 / 재클릭 시 정지
  window.playPreset = function (presetKey) {
    const preset = window.NovaCellStudio.presets[presetKey];
    if (!preset) return;

    // VIP 체크 (VIP 모드가 꺼져있을 때만 모달 노출)
    if (preset.isVip && !window.NovaCellStudio.isVip) {
      openVipModal(preset.name);
      return;
    }

    const eng = window.engine || (typeof engine !== 'undefined' ? engine : null);
    if (!eng) return;

    // 만약 이미 재생 중인 프리셋을 다시 클릭했다면 -> 정지!
    if (window.NovaCellStudio.activePresetKey === presetKey && eng.isPlaying) {
      window.stopAllAudio();
      return;
    }

    // 이전 사운드 클린 정지 후 새 프리셋 재생
    window.stopAllAudio();

    window.NovaCellStudio.activePresetKey = presetKey;
    window.NovaCellStudio.activePreset = preset;

    // 1) 엔진 초기화 및 resume
    eng.init();
    if (eng.audioCtx && eng.audioCtx.state === 'suspended') {
      eng.audioCtx.resume();
    }

    let masterVol = parseFloat(document.getElementById('slider-master-volume')?.value || 0.8);
    if (isNaN(masterVol) || masterVol <= 0.05) masterVol = 0.8;
    eng.setMasterVolume(masterVol);

    // 2) 잔여 활성 상태 초기화
    eng.isBeatsActive = false;
    eng.isSolfeggioActive = false;
    eng.isRifeActive = false;
    eng.isVipActive = false;
    eng.isCustomActive = false;

    // 3) 자연음 볼륨 모두 0으로 소거 (다른 프리셋의 잔음 방지)
    if (eng.natureVolumeSettings) {
      Object.keys(eng.natureVolumeSettings).forEach(k => {
        eng.setNatureVolume(k, 0);
        const sl = document.getElementById(`slider-${k}`);
        if (sl) sl.value = 0;
        const tx = document.getElementById(`txt-${k}`);
        if (tx) tx.textContent = '0%';
      });
    }

    // 4) 솔페지오 주파수 매핑
    if (preset.solfeggioFreq) {
      const solfVol = preset.solfeggioVolume || 0.40;
      eng.setSolfeggioFrequency(preset.solfeggioFreq);
      eng.setSolfeggioVolume(solfVol);
      eng.isSolfeggioActive = true;
      const solfSlider = document.getElementById('slider-solfeggio-volume');
      if (solfSlider) solfSlider.value = solfVol;
      const solfTxt = document.getElementById('txt-solfeggio-volume');
      if (solfTxt) solfTxt.textContent = Math.round(solfVol * 100) + '%';
      document.querySelectorAll('.btn-solfeggio').forEach(b => {
        b.classList.toggle('active', b.getAttribute('data-freq') === preset.solfeggioFreq);
      });
    }

    // 5) 바이노럴 비트 매핑
    if (preset.beatHz) {
      const beatVol = preset.beatsVolume || 0.40;
      eng.setBeatsFrequency(preset.carrierHz || 200, preset.beatHz);
      eng.setBeatsVolume(beatVol);
      eng.isBeatsActive = true;
      const beatsSlider = document.getElementById('slider-beats-volume');
      if (beatsSlider) beatsSlider.value = beatVol;
      const beatsTxt = document.getElementById('txt-beats-volume');
      if (beatsTxt) beatsTxt.textContent = Math.round(beatVol * 100) + '%';
      const btnBeatsPlay = document.getElementById('btn-beats-play');
      if (btnBeatsPlay) {
        btnBeatsPlay.innerHTML = '<i class="fa-solid fa-pause"></i>';
        btnBeatsPlay.classList.add('playing');
      }
    }

    // 6) Rife / VIP 코드 매핑
    if (preset.rifeCode && typeof applySpecificCodeToEngine === 'function') {
      applySpecificCodeToEngine(preset.rifeCode);
      eng.isRifeActive = true;
      eng.setRifeVolume(preset.rifeVolume || 0.35);
    }
    if (preset.vipCode && typeof applySpecificVipCodeToEngine === 'function') {
      applySpecificVipCodeToEngine(preset.vipCode);
      eng.isVipActive = true;
      eng.setVipVolume(preset.vipVolume || 0.35);
    }

    // 7) 자연음 믹서 프리셋 세팅 (사용자가 특정 앰비언트를 선택한 경우 보존)
    if (window.currentAmbientType && window.currentAmbientType !== 'preset') {
      window.setGlobalAmbientSound(window.currentAmbientType);
    } else if (preset.nature && Object.keys(preset.nature).length > 0) {
      eng.isNatureActive = true;
      
      let natMaster = parseFloat(document.getElementById('slider-quick-nature')?.value || document.getElementById('slider-nature-master')?.value || 0.8);
      if (isNaN(natMaster) || natMaster <= 0.05) natMaster = 0.8;
      eng.setNatureMasterVolume(natMaster);

      const slNatM = document.getElementById('slider-nature-master');
      if (slNatM) slNatM.value = natMaster;
      const txNatM = document.getElementById('txt-nature-master');
      if (txNatM) txNatM.textContent = Math.round(natMaster * 100) + '%';
      const slQNat = document.getElementById('slider-quick-nature');
      if (slQNat) slQNat.value = natMaster;
      const txQNat = document.getElementById('txt-quick-nature');
      if (txQNat) txQNat.textContent = Math.round(natMaster * 100) + '%';

      Object.keys(preset.nature).forEach(natureKey => {
        const val = preset.nature[natureKey];
        eng.setNatureVolume(natureKey, val);
        const slider = document.getElementById(`slider-${natureKey}`);
        if (slider) slider.value = val;
        const txt = document.getElementById(`txt-${natureKey}`);
        if (txt) txt.textContent = Math.round(val * 100) + '%';
      });
    } else {
      eng.isNatureActive = false;
    }

    // 8) 엔진 스타트 & 자연음 믹서 가동
    eng.start();
    if (eng.isNatureActive) {
      eng.startNatureMixer();
    }

    // 9) UI 버튼 동기화 및 앰비언트 칩 상태 동기화
    window.syncAllPlayButtons(true, preset.name);
    updateStickyPlayer(preset.name, preset.badge);

    // 앰비언트 퀵 셀렉터 칩 '프리셋 맞춤음' 활성화
    window.currentAmbientType = 'preset';
    document.querySelectorAll('.ambient-chip').forEach(chip => {
      chip.classList.toggle('active', chip.getAttribute('data-ambient') === 'preset');
    });
    const stickyAmbientText = document.getElementById('sticky-ambient-text');
    if (stickyAmbientText) stickyAmbientText.textContent = '🌿 맞춤음';

    // 카드 하이라이트
    document.querySelectorAll('.preset-card').forEach(card => {
      card.classList.toggle('active', card.getAttribute('data-preset-key') === presetKey);
    });

    showToast(`🎵 [${preset.name}] 재생 중`);
  };

  // 6. VIP 인증 검사 및 초기화
  function initAuthAndVip() {
    // 로컬 스토리지 확인 (기본값은 검토를 위해 true)
    const storedVip = localStorage.getItem('novacell_vip_status');
    if (storedVip === 'free') {
      window.NovaCellStudio.isVip = false;
    } else {
      window.NovaCellStudio.isVip = true;
    }

    // Supabase NovaCellAuth 연동 확인 (실제 배포 환경)
    if (window.NovaCellAuth && typeof window.NovaCellAuth.getUser === 'function') {
      try {
        window.NovaCellAuth.getUser().then(user => {
          if (user) {
            window.NovaCellStudio.isVip = true;
            updateVipUI();
          }
        }).catch(() => {});
      } catch (e) {}
    }

    updateVipUI();
  }

  // 7. UI 갱신 (VIP / 체험 모드 반영)
  function updateVipUI() {
    const isVip = window.NovaCellStudio.isVip;
    const isEn = window.currentLang === 'en';
    const badge = document.getElementById('user-tier-badge');
    const demoBtn = document.getElementById('btn-toggle-demo-vip');
    const memberBtn = document.getElementById('btn-header-member-action');

    if (badge) {
      if (isVip) {
        badge.className = 'tier-badge vip-active';
        badge.innerHTML = `<i class="ri-vip-crown-fill text-gold"></i> <span data-i18n="tierVip">${isEn ? 'NovaCell VIP Member' : 'NovaCell VIP 회원'}</span>`;
      } else {
        badge.className = 'tier-badge free-preview';
        badge.innerHTML = `<i class="ri-shield-user-line"></i> <span data-i18n="tierDemo">${isEn ? 'Demo Mode (Free)' : '체험 모드 (Free)'}</span>`;
      }
    }

    if (demoBtn) {
      demoBtn.innerHTML = isVip 
        ? `<i class="ri-checkbox-circle-fill text-gold"></i> ${isEn ? 'VIP All Features Active' : 'VIP 모든 기능 작동 중'}` 
        : `<i class="ri-toggle-line"></i> ${isEn ? 'Test VIP Mode' : 'VIP 모드 테스트'}`;
      demoBtn.classList.toggle('active', isVip);
    }

    if (memberBtn) {
      if (isVip) {
        memberBtn.innerHTML = `<i class="ri-user-settings-line"></i> ${isEn ? 'My Page' : '마이페이지'}`;
        memberBtn.onclick = () => {
          window.open(`https://novacell.kr/mypage.html?lang=${isEn ? 'en' : 'ko'}`, '_blank');
        };
      } else {
        memberBtn.innerHTML = `<i class="ri-login-box-line"></i> ${isEn ? 'Login / VIP Pass' : '로그인 / 이용권 확인'}`;
        memberBtn.onclick = () => {
          openVipModal(isEn ? 'Login & VIP Access' : '로그인 및 이용권 확인');
        };
      }
    }

    // VIP 전용 요소들의 자물쇠 상태 클래스 업데이트
    document.querySelectorAll('[data-vip-locked="true"]').forEach(el => {
      el.classList.toggle('is-vip-unlocked', isVip);
    });
  }
  window.updateVipUI = updateVipUI;

  // 8. VIP 모달 열기/닫기
  function openVipModal(featureName = 'NovaCell 임상 바이오 주파수') {
    let modal = document.getElementById('novacell-vip-modal');
    if (!modal) return;
    
    const isEn = window.currentLang === 'en';
    const titleEl = document.getElementById('vip-modal-feature-title');
    if (titleEl) {
      titleEl.textContent = isEn 
        ? `The [${featureName}] feature is exclusive to NovaCell VIP Members.` 
        : `[${featureName}] 기능은 NovaCell 정회원 전용입니다.`;
    }
    
    const priceAmountEl = document.getElementById('vip-price-display');
    const priceTermEl = document.getElementById('vip-term-display');
    const passLinkEl = modal.querySelector('.btn-nc-vip-pass');
    if (priceAmountEl) priceAmountEl.textContent = isEn ? 'US $300' : '330,000원';
    if (priceTermEl) priceTermEl.textContent = isEn ? '/ 1-Year Unlimited (₩330,000)' : '/ 1년 무제한 이용 (US $300)';
    if (passLinkEl) passLinkEl.href = isEn ? 'https://novacell.kr/checkout.html?product=sound_studio_1y&lang=en' : 'https://novacell.kr/checkout.html?product=sound_studio_1y&lang=ko';
    modal.classList.add('active');
    document.body.classList.add('modal-open');
  }

  function closeVipModal() {
    let modal = document.getElementById('novacell-vip-modal');
    if (modal) modal.classList.remove('active');
    document.body.classList.remove('modal-open');
  }

  // 9. 데모용 VIP 모드 토글 (관리자 및 테스트용)
  window.toggleDemoVip = function () {
    window.NovaCellStudio.isVip = !window.NovaCellStudio.isVip;
    if (window.NovaCellStudio.isVip) {
      localStorage.setItem('novacell_vip_status', 'active');
      showToast('✨ NovaCell VIP 정회원 모드가 활성화되었습니다! 모든 기능이 잠금 해제되었습니다.');
    } else {
      localStorage.setItem('novacell_vip_status', 'free');
      showToast('🌿 무료 체험 모드로 전환되었습니다.');
    }
    updateVipUI();
  };

  // 10. 5대 탭 스위칭 컨트롤러
  window.switchTab = function (tabId) {
    const tabs = ['tab-presets', 'tab-rife100', 'tab-vip', 'tab-care', 'tab-studio'];
    if (!tabs.includes(tabId)) return;

    window.NovaCellStudio.currentTab = tabId;
    document.querySelectorAll('.m-tab-btn, .m-nav-pill, .nav-pill').forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-tab') === tabId || btn.id === 'btn-nav-' + tabId);
    });

    tabs.forEach(id => {
      const panel = document.getElementById(id);
      const btn = document.getElementById('btn-nav-' + id);
      if (panel) {
        if (id === tabId) {
          panel.classList.add('active');
          panel.style.display = 'block';
        } else {
          panel.classList.remove('active');
          panel.style.display = 'none';
        }
      }
      if (btn) {
        btn.classList.toggle('active', id === tabId);
      }
    });

    if (tabId === 'tab-rife100') {
      window.renderRife100Page(window.currentRifeCat || 'all', window.currentRifeSearch || '');
    } else if (tabId === 'tab-vip') {
      window.renderVipPage(window.currentVipCat || 'all', window.currentVipSearch || '');
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // 10.1. [신규 페이지] NovaCell 100 생체 에너지 공명 코드 컨트롤러
  window.currentRifeCat = 'all';
  window.currentRifeSearch = '';
  window.activeRife100Code = null;

  const RIFE_CAT_LABELS = {
    sleep: '🌙 깊은 수면',
    stress: '🧘 정서 안정',
    body: '⚡ 신체 피로',
    digest: '🥗 소화 대사',
    focus: '🎯 두뇌 집중',
    vitality: '🌿 일상 활력',
    pain: '🩹 통증 완화',
    solfeggio: '✨ 솔페지오'
  };

  window.renderRife100Page = function (category, search) {
    const container = document.getElementById('rife100-cards-container');
    if (!container) return;

    const recipes = window.rifeRecipes || {};
    const cat = category || window.currentRifeCat || 'all';
    const query = (typeof search === 'string' ? search : window.currentRifeSearch || '').trim().toLowerCase();

    let allKeys = Object.keys(recipes).sort((a, b) => {
      return parseInt(a, 10) - parseInt(b, 10);
    });

    let filteredKeys = allKeys.filter(code => {
      const item = recipes[code];
      if (!item) return false;

      // 카테고리 필터
      if (cat !== 'all' && item.category !== cat) return false;

      // 검색어 필터
      if (query) {
        const titleMatch = item.title && item.title.toLowerCase().includes(query);
        const descMatch = item.desc && item.desc.toLowerCase().includes(query);
        const codeMatch = code.toLowerCase().includes(query) || ('code ' + code).includes(query);
        const freqMatch = item.freqs && item.freqs.some(f => String(f).includes(query));
        if (!titleMatch && !descMatch && !codeMatch && !freqMatch) return false;
      }
      return true;
    });

    // 상단 결과 카운터 갱신
    const isEn = window.currentLang === 'en';
    const countEl = document.getElementById('rife100-results-count');
    if (countEl) {
      countEl.textContent = isEn
        ? `Showing: ${filteredKeys.length} / ${allKeys.length} codes`
        : `표시 중: ${filteredKeys.length}개 / ${allKeys.length}개`;
    }

    if (filteredKeys.length === 0) {
      container.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px; background: rgba(15, 23, 42, 0.4); border-radius: 16px; border: 1px dashed rgba(52, 211, 153, 0.3);">
          <i class="ri-search-line" style="font-size: 2.8rem; color: #34d399; opacity: 0.6;"></i>
          <h4 style="margin: 14px 0 6px; font-size: 1.15rem; color: #f8fafc;">${isEn ? 'No matching frequency codes found' : '일치하는 주파수 코드가 없습니다'}</h4>
          <p style="color: #94a3b8; font-size: 0.88rem; margin: 0;">${isEn ? `No frequency codes found matching "${query}". Try another search keyword or category.` : `"${query}"에 해당하는 코드를 찾을 수 없습니다. 다른 검색어나 카테고리를 선택해 보세요.`}</p>
        </div>
      `;
      return;
    }

    const isEngPlaying = window.engine && window.engine.isPlaying;

    const cardsHtml = filteredKeys.map(code => {
      const item = recipes[code];
      const isPlayingThis = isEngPlaying && (window.activeRife100Code === code);
      const catLabel = typeof window.getBilingualRifeCatLabel === 'function'
        ? window.getBilingualRifeCatLabel(item.category)
        : (RIFE_CAT_LABELS[item.category] || '🧬 바이오 공명');

      // 제목 정제 (다국어 지원)
      const displayTitle = typeof window.getBilingualRifeTitle === 'function'
        ? window.getBilingualRifeTitle(code, item.title)
        : (item.title ? item.title.replace(/^Code\s*[0-9]+\s*:\s*/i, '') : `Code ${code}`);

      // 본문 설명 정제 (다국어 지원)
      let cleanDesc = item.desc || '';
      if (cleanDesc.includes('[주파수 구성')) {
        cleanDesc = cleanDesc.split('[주파수 구성')[0].trim();
      }
      cleanDesc = cleanDesc.replace(/\n/g, ' ');

      const displayDesc = typeof window.getBilingualRifeDesc === 'function'
        ? window.getBilingualRifeDesc(code, item)
        : cleanDesc;

      // 대표 주파수 칩 (최대 7개)
      const freqs = item.freqs || [];
      const showFreqs = freqs.slice(0, 7);
      const moreCount = freqs.length - showFreqs.length;
      const freqChipsHtml = showFreqs.map(f => `<span class="freq-chip">${f}Hz</span>`).join('') +
        (moreCount > 0 ? `<span class="freq-chip-more">+${moreCount}${isEn ? ' more' : '개'}</span>` : '');

      const playBtnText = isPlayingThis
        ? (isEn ? 'Pause' : '일시정지')
        : (isEn ? 'Frequency Healing' : '주파수 힐링');

      return `
        <article class="nc-code-card ${isPlayingThis ? 'active-playing' : ''}" id="card-rife-${code}">
          <div>
            <div class="nc-card-header">
              <span class="nc-card-badge">Code ${code}</span>
              <span class="nc-card-cat">${catLabel}</span>
              ${isPlayingThis ? '<span class="pulse-indicator" title="현재 공명 중"></span>' : ''}
            </div>
            <h3 class="nc-card-title">${displayTitle}</h3>
            <p class="nc-card-desc" title="${displayDesc}">${displayDesc}</p>
            <div class="nc-freq-list">
              ${freqChipsHtml}
            </div>
          </div>
          <div class="nc-card-footer">
            <button class="btn-card-play" onclick="playRife100Code('${code}')">
              <i class="${isPlayingThis ? 'ri-pause-fill' : 'ri-play-fill'}"></i>
              <span>${playBtnText}</span>
            </button>
          </div>
        </article>
      `;
    }).join('');

    container.innerHTML = cardsHtml;
  };

  // 카테고리 칩 필터링
  window.filterRife100Category = function (category) {
    window.currentRifeCat = category;
    document.querySelectorAll('.rife100-cat-chips .nc-filter-chip').forEach(chip => {
      chip.classList.toggle('active', chip.getAttribute('data-rife-cat') === category);
    });
    window.renderRife100Page(category, window.currentRifeSearch);
  };

  // 실시간 검색
  window.onRife100SearchInput = function (val) {
    window.currentRifeSearch = val;
    window.renderRife100Page(window.currentRifeCat, val);
  };

  // Rife 100 단일 코드 원클릭 재생 / 토글
  window.playRife100Code = function (code) {
    const recipes = window.rifeRecipes || {};
    const recipe = recipes[code];
    if (!recipe) return;

    const eng = window.engine || (typeof engine !== 'undefined' ? engine : null);
    if (!eng) return;

    // 이미 재생 중인 코드 재클릭 시 -> 정지
    if (window.activeRife100Code === code && eng.isPlaying) {
      window.stopAllAudio();
      return;
    }

    // 기존 재생 오디오 클린 정지
    window.stopAllAudio();

    // 엔진 매핑 및 재생
    if (typeof applySpecificCodeToEngine === 'function') {
      applySpecificCodeToEngine(code);
    }
    window.activeRife100Code = code;

    // 상단 히어로 박스 정보 갱신
    const isEn = window.currentLang === 'en';
    const displayTitle = typeof window.getBilingualRifeTitle === 'function'
      ? window.getBilingualRifeTitle(code, recipe.title)
      : recipe.title;

    const heroTitle = document.getElementById('hero-rife100-current-title');
    if (heroTitle) heroTitle.textContent = displayTitle;
    const heroBtn = document.getElementById('btn-hero-rife100-play');
    if (heroBtn) {
      heroBtn.innerHTML = `<i class="ri-pause-fill"></i> ${isEn ? 'Pause' : '일시정지'}`;
      heroBtn.classList.add('playing');
    }

    // 하단 고정 플레이어 동기화
    window.syncAllPlayButtons(true, displayTitle);
    updateStickyPlayer(displayTitle, 'NovaCell 100');

    // 카드 active 클래스 동기화
    document.querySelectorAll('#rife100-cards-container .nc-code-card').forEach(card => {
      const isThis = card.id === `card-rife-${code}`;
      card.classList.toggle('active-playing', isThis);
      const btn = card.querySelector('.btn-card-play');
      if (btn) {
        btn.innerHTML = isThis
          ? `<i class="ri-pause-fill"></i> <span>${isEn ? 'Pause' : '일시정지'}</span>`
          : `<i class="ri-play-fill"></i> <span>${isEn ? 'Frequency Healing' : '주파수 힐링'}</span>`;
      }
    });

    showToast(isEn ? `🎵 [NovaCell 100] Healing: ${displayTitle}` : `🎵 [NovaCell 100] ${displayTitle} 주파수 힐링 중`);
  };

  // 히어로 상단 재생 / 정지 토글 버튼
  window.toggleRifePlaybackFromPage = function () {
    const eng = window.engine || (typeof engine !== 'undefined' ? engine : null);
    if (eng && eng.isPlaying) {
      window.stopAllAudio();
    } else {
      window.playRife100Code(window.activeRife100Code || '001');
    }
  };

  // 페이지 전용 볼륨 슬라이더
  window.setRifePageVolume = function (val) {
    const eng = window.engine || (typeof engine !== 'undefined' ? engine : null);
    if (eng && typeof eng.setRifeVolume === 'function') {
      eng.setRifeVolume(val);
    }
    const txt = document.getElementById('txt-rife100-page-vol');
    if (txt) txt.textContent = Math.round(val * 100) + '%';
  };

  // 10.2. [신규 페이지] NovaCell VIP 임상 웰니스 코드 (V01~V090) 컨트롤러
  window.currentVipCat = 'all';
  window.currentVipSearch = '';
  window.activeVipCode = null;

  const VIP_CAT_LABELS = {
    focus: '🧠 뇌신경 ∙ 심혈관 ∙ 두통',
    digest: '🥗 소화대사 ∙ 간 ∙ 비뇨기',
    sleep: '🫁 호흡기 ∙ 수면 ∙ 면역',
    stress: '🦴 근골격 ∙ 관절 ∙ 통증'
  };

  window.renderVipPage = function (category, search) {
    const container = document.getElementById('vip-cards-container');
    if (!container) return;

    const recipes = window.vipRecipes || {};
    const cat = category || window.currentVipCat || 'all';
    const query = (typeof search === 'string' ? search : window.currentVipSearch || '').trim().toLowerCase();

    // 정렬: V001 ~ V090 (숫자 순)
    let allKeys = Object.keys(recipes).sort((a, b) => {
      const numA = parseInt(a.replace(/\D/g, ''), 10) || 0;
      const numB = parseInt(b.replace(/\D/g, ''), 10) || 0;
      return numA - numB;
    });

    let filteredKeys = allKeys.filter(code => {
      const item = recipes[code];
      if (!item) return false;

      // 카테고리 필터
      if (cat !== 'all' && item.category !== cat) return false;

      // 검색어 필터 (질환명, 증상, 코드, 주파수)
      if (query) {
        const titleMatch = item.title && item.title.toLowerCase().includes(query);
        const descMatch = item.desc && item.desc.toLowerCase().includes(query);
        const codeMatch = code.toLowerCase().includes(query) || ('code ' + code).toLowerCase().includes(query);
        const freqMatch = item.freqs && item.freqs.some(f => String(f).includes(query));
        if (!titleMatch && !descMatch && !codeMatch && !freqMatch) return false;
      }
      return true;
    });

    // 상단 결과 카운터 갱신
    const isEn = window.currentLang === 'en';
    const countEl = document.getElementById('vip-results-count');
    if (countEl) {
      countEl.textContent = isEn
        ? `Clinical Codes: ${filteredKeys.length} / ${allKeys.length}`
        : `임상 코드: ${filteredKeys.length}개 / ${allKeys.length}개`;
    }

    if (filteredKeys.length === 0) {
      container.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px; background: rgba(15, 23, 42, 0.4); border-radius: 16px; border: 1px dashed rgba(245, 158, 11, 0.3);">
          <i class="ri-search-line" style="font-size: 2.8rem; color: #f59e0b; opacity: 0.6;"></i>
          <h4 style="margin: 14px 0 6px; font-size: 1.15rem; color: #f8fafc;">${isEn ? 'No matching VIP clinical codes found' : '일치하는 VIP 임상 코드가 없습니다'}</h4>
          <p style="color: #94a3b8; font-size: 0.88rem; margin: 0;">${isEn ? `No disease or symptom found matching "${query}". Try another search keyword.` : `"${query}"에 해당하는 질환명 또는 증상을 찾을 수 없습니다. 다른 검색어를 입력해 보세요.`}</p>
        </div>
      `;
      return;
    }

    const isEngPlaying = window.engine && window.engine.isPlaying;

    const cardsHtml = filteredKeys.map(code => {
      const item = recipes[code];
      const isPlayingThis = isEngPlaying && (window.activeVipCode === code);
      const catLabel = typeof window.getBilingualVipCatLabel === 'function'
        ? window.getBilingualVipCatLabel(item.category)
        : (VIP_CAT_LABELS[item.category] || '👑 임상 코드');

      // 질환명 / 증상 타이틀 정제 (다국어 지원)
      const diseaseTitle = typeof window.getBilingualVipTitle === 'function'
        ? window.getBilingualVipTitle(code, item.title)
        : (item.title ? item.title.replace(/^Code\s*V[0-9]+\s*:\s*/i, '') : `Code ${code}`);

      // 임상 설명 정제 (다국어 지원)
      let cleanDesc = item.desc || '';
      if (cleanDesc.includes('[주파수 구성')) {
        cleanDesc = cleanDesc.split('[주파수 구성')[0].trim();
      }
      cleanDesc = cleanDesc.replace(/\n/g, ' ');

      const displayDesc = typeof window.getBilingualVipDesc === 'function'
        ? window.getBilingualVipDesc(code, item)
        : cleanDesc;

      // 정밀 타겟 주파수 칩 (최대 6개)
      const freqs = item.freqs || [];
      const showFreqs = freqs.slice(0, 6);
      const moreCount = freqs.length - showFreqs.length;
      const freqChipsHtml = showFreqs.map(f => `<span class="freq-chip vip-freq-chip">${f}Hz</span>`).join('') +
        (moreCount > 0 ? `<span class="freq-chip-more">+${moreCount}${isEn ? ' more' : '개'}</span>` : '');

      const playBtnText = isPlayingThis
        ? (isEn ? 'Pause' : '일시정지')
        : (isEn ? 'Play VIP Code' : 'VIP 코드 청취');

      return `
        <article class="nc-code-card vip-card ${isPlayingThis ? 'active-vip-playing' : ''}" id="card-vip-${code}">
          <div>
            <div class="nc-card-header">
              <span class="nc-card-badge vip-badge">${code}</span>
              <span class="nc-card-cat">${catLabel}</span>
              ${isPlayingThis ? '<span class="pulse-indicator vip-pulse" title="현재 VIP 코드 청취 중"></span>' : '<span style="font-size: 0.74rem; color: #fbbf24; font-weight: 700;"><i class="ri-vip-crown-fill"></i> VIP</span>'}
            </div>
            <h3 class="nc-card-title vip-title">${diseaseTitle}</h3>
            <p class="nc-card-desc" title="${displayDesc}">${displayDesc}</p>
            <div class="nc-freq-list">
              ${freqChipsHtml}
            </div>
          </div>
          <div class="nc-card-footer">
            <button class="btn-card-vip-play" onclick="playVipCodeFromPage('${code}')">
              <i class="${isPlayingThis ? 'ri-pause-fill' : 'ri-play-fill'}"></i>
              <span>${playBtnText}</span>
            </button>
          </div>
        </article>
      `;
    }).join('');

    container.innerHTML = cardsHtml;
  };

  // VIP 카테고리 칩 필터링
  window.filterVipCategory = function (category) {
    window.currentVipCat = category;
    document.querySelectorAll('.vip-cat-chips .nc-filter-chip').forEach(chip => {
      chip.classList.toggle('active', chip.getAttribute('data-vip-cat') === category);
    });
    window.renderVipPage(category, window.currentVipSearch);
  };

  // VIP 실시간 검색
  window.onVipSearchInput = function (val) {
    window.currentVipSearch = val;
    window.renderVipPage(window.currentVipCat, val);
  };

  // VIP 단일 코드 원클릭 재생 / 토글
  window.playVipCodeFromPage = function (code) {
    const recipes = window.vipRecipes || {};
    const recipe = recipes[code];
    if (!recipe) return;

    // VIP 권한 체크 (무료 모드일 시 안내 모달 표시)
    if (!window.NovaCellStudio.isVip) {
      openVipModal(recipe.title);
      return;
    }

    const eng = window.engine || (typeof engine !== 'undefined' ? engine : null);
    if (!eng) return;

    // 이미 재생 중인 코드 클릭 시 -> 정지
    if (window.activeVipCode === code && eng.isPlaying) {
      window.stopAllAudio();
      return;
    }

    // 기존 재생 오디오 클린 정지
    window.stopAllAudio();

    // 엔진 매핑 및 재생
    if (typeof applySpecificVipCodeToEngine === 'function') {
      applySpecificVipCodeToEngine(code);
    }
    window.activeVipCode = code;

    // 상단 히어로 박스 정보 갱신
    const isEn = window.currentLang === 'en';
    const displayTitle = typeof window.getBilingualVipTitle === 'function'
      ? window.getBilingualVipTitle(code, recipe.title)
      : recipe.title;

    const heroTitle = document.getElementById('hero-vip-current-title');
    if (heroTitle) heroTitle.textContent = displayTitle;
    const heroBtn = document.getElementById('btn-hero-vip-play');
    if (heroBtn) {
      heroBtn.innerHTML = `<i class="ri-pause-fill"></i> ${isEn ? 'Pause' : '일시정지'}`;
      heroBtn.classList.add('playing');
    }

    // 하단 고정 플레이어 동기화
    window.syncAllPlayButtons(true, displayTitle);
    updateStickyPlayer(displayTitle, 'VIP 임상 코드');

    // 카드 active 클래스 동기화
    document.querySelectorAll('#vip-cards-container .nc-code-card').forEach(card => {
      const isThis = card.id === `card-vip-${code}`;
      card.classList.toggle('active-vip-playing', isThis);
      const btn = card.querySelector('.btn-card-vip-play');
      if (btn) {
        btn.innerHTML = isThis
          ? `<i class="ri-pause-fill"></i> <span>${isEn ? 'Pause' : '일시정지'}</span>`
          : `<i class="ri-play-fill"></i> <span>${isEn ? 'Play VIP Code' : 'VIP 코드 청취'}</span>`;
      }
    });

    showToast(isEn ? `👑 [NovaCell VIP] Playing: ${displayTitle}` : `👑 [NovaCell VIP] ${displayTitle} 임상 코드 청취 중`);
  };

  // VIP 히어로 상단 재생 / 정지 토글 버튼
  window.toggleVipPlaybackFromPage = function () {
    const eng = window.engine || (typeof engine !== 'undefined' ? engine : null);
    if (eng && eng.isPlaying) {
      window.stopAllAudio();
    } else {
      window.playVipCodeFromPage(window.activeVipCode || 'V001');
    }
  };

  // VIP 페이지 전용 볼륨 슬라이더
  window.setVipPageVolume = function (val) {
    const eng = window.engine || (typeof engine !== 'undefined' ? engine : null);
    if (eng && typeof eng.setVipVolume === 'function') {
      eng.setVipVolume(val);
    }
    const txt = document.getElementById('txt-vip-page-vol');
    if (txt) txt.textContent = Math.round(val * 100) + '%';
  };

  // 11. 하단 고정 플레이어 동기화
  function updateStickyPlayer(title, badgeText) {
    const titleEl = document.getElementById('sticky-track-title');
    const badgeEl = document.getElementById('sticky-track-badge');
    const isEn = window.currentLang === 'en';
    if (titleEl && title) titleEl.textContent = title;
    if (badgeEl) {
      if (badgeText && (badgeText.includes('VIP') || badgeText.includes('임상'))) {
        badgeEl.textContent = isEn ? 'VIP Clinical' : 'VIP 임상';
        badgeEl.classList.add('vip');
      } else {
        badgeEl.textContent = isEn ? 'Demo Sound' : '체험 사운드';
        badgeEl.classList.remove('vip');
      }
    }

    const stickyBar = document.getElementById('sticky-audio-bar');
    if (stickyBar) stickyBar.classList.add('visible');
  }

  // 12. 슬립 타이머
  window.setSleepTimer = function (minutes) {
    if (window.NovaCellStudio.sleepTimerId) {
      clearInterval(window.NovaCellStudio.sleepTimerId);
      window.NovaCellStudio.sleepTimerId = null;
    }

    const timerDisplay = document.getElementById('sticky-timer-btn');
    if (minutes === 0) {
      if (timerDisplay) timerDisplay.innerHTML = '<i class="ri-timer-line"></i> 타이머';
      showToast('슬립 타이머가 해제되었습니다.');
      return;
    }

    let remainingSeconds = minutes * 60;
    showToast(`⏱️ ${minutes}분 슬립 타이머가 설정되었습니다.`);

    window.NovaCellStudio.sleepTimerId = setInterval(() => {
      remainingSeconds--;
      const m = Math.floor(remainingSeconds / 60);
      const s = remainingSeconds % 60;
      if (timerDisplay) {
        timerDisplay.innerHTML = `<i class="ri-timer-flash-line text-gold"></i> ${m}:${s < 10 ? '0' : ''}${s}`;
      }

      if (remainingSeconds <= 0) {
        clearInterval(window.NovaCellStudio.sleepTimerId);
        window.NovaCellStudio.sleepTimerId = null;
        window.stopAllAudio();
        if (timerDisplay) timerDisplay.innerHTML = '<i class="ri-timer-line"></i> 타이머';
        showToast('🌙 슬립 타이머가 종료되어 사운드가 정지되었습니다. 편안한 밤 되세요.');
      }
    }, 1000);
  };

  // 12.5. 실시간 힐링 배경음 조율기 (Ambient Quick Selector)
  window.currentAmbientType = 'preset';

  window.setGlobalAmbientSound = function (ambientType) {
    window.currentAmbientType = ambientType;
    const eng = window.engine;
    if (!eng) return;

    // 1) 칩 UI active 상태 동기화
    document.querySelectorAll('.ambient-chip').forEach(chip => {
      chip.classList.toggle('active', chip.getAttribute('data-ambient') === ambientType);
    });

    // 2) 하단 고정 바 텍스트 동기화
    const stickyAmbientText = document.getElementById('sticky-ambient-text');
    const labelMap = {
      preset: '🌿 맞춤음',
      rain: '🌧️ 빗소리',
      stream: '🌲 계곡물',
      waves: '🌊 파도소리',
      campfire: '🔥 모닥불',
      singingbowl: '🥣 싱잉볼',
      forestbirds: '🌲 숲속 새소리',
      seagull: '🕊️ 바다 갈매기',
      off: '🔇 끔'
    };
    if (stickyAmbientText) {
      stickyAmbientText.textContent = labelMap[ambientType] || '🌿 배경음';
    }

    // 3) 먼저 기존의 모든 자연음 볼륨을 0으로 소거
    if (eng.natureVolumeSettings) {
      Object.keys(eng.natureVolumeSettings).forEach(k => {
        eng.setNatureVolume(k, 0);
        const sl = document.getElementById(`slider-${k}`);
        if (sl) sl.value = 0;
        const tx = document.getElementById(`txt-${k}`);
        if (tx) tx.textContent = '0%';
      });
    }

    if (ambientType === 'off') {
      eng.isNatureActive = false;
      showToast('🔇 배경 자연음이 음소거되었습니다. (순수 주파수 전용 청취)');
      return;
    }

    // 자연음 활성화 & 마스터 볼륨 확인
    eng.isNatureActive = true;
    let masterNat = parseFloat(document.getElementById('slider-quick-nature')?.value || document.getElementById('slider-nature-master')?.value || 0.8);
    if (isNaN(masterNat) || masterNat <= 0.05) masterNat = 0.8;
    eng.setNatureMasterVolume(masterNat);

    // 대상 사운드 믹스 결정
    let targetNature = {};
    if (ambientType === 'preset') {
      const activeKey = window.NovaCellStudio.activePresetKey || 'cosmos-harmony';
      const preset = window.NovaCellStudio.presets[activeKey];
      targetNature = (preset && preset.nature) ? preset.nature : { singingbowl: 0.35, stream: 0.25 };
      showToast(`🌿 프리셋 권장 자연음(${preset ? preset.name : '맞춤음'})으로 전환되었습니다.`);
    } else if (ambientType === 'rain') {
      targetNature = { rain: 0.50 };
      showToast('🌧️ 마음을 적시는 자연 빗소리 배경음이 적용되었습니다.');
    } else if (ambientType === 'stream') {
      targetNature = { stream: 0.50 };
      showToast('🌲 머리를 맑게 씻어주는 청량한 계곡물 배경음이 적용되었습니다.');
    } else if (ambientType === 'waves') {
      targetNature = { waves: 0.55 };
      showToast('🌊 긴장을 내려놓는 동해 파도소리 배경음이 적용되었습니다.');
    } else if (ambientType === 'campfire') {
      targetNature = { campfire: 0.50 };
      showToast('🔥 따스한 모닥불 장작소리 배경음이 적용되었습니다.');
    } else if (ambientType === 'singingbowl') {
      targetNature = { singingbowl: 0.45 };
      showToast('🥣 뇌파를 깊이 이완시키는 티벳 싱잉볼 배경음이 적용되었습니다.');
    } else if (ambientType === 'forestbirds') {
      targetNature = { forestbirds: 0.65, stream: 0.25 };
      showToast(isEn ? '🌲 Morning forest birds ambient sound applied.' : '🌲 상쾌한 아침을 깨우는 숲속 새소리 배경음이 적용되었습니다.');
    } else if (ambientType === 'seagull') {
      targetNature = { seagull: 0.70, waves: 0.45 };
      showToast(isEn ? '🕊️ Ocean Waves & Seagulls soundscape applied.' : '🕊️ 시원한 바다 파도와 갈매기소리 배경음이 적용되었습니다.');
    }

    // 4) 타겟 자연음 실시간 적용
    Object.keys(targetNature).forEach(k => {
      const v = targetNature[k];
      eng.setNatureVolume(k, v);
      const sl = document.getElementById(`slider-${k}`);
      if (sl) sl.value = v;
      const tx = document.getElementById(`txt-${k}`);
      if (tx) tx.textContent = Math.round(v * 100) + '%';
    });

    // 4.5) 숲속 새소리 및 갈매기소리 선택 즉시 0초 피드백 재생
    if (ambientType === 'forestbirds') {
      try { eng.playForestBirdsOnce(0.75); } catch(e) {}
      if (typeof eng.triggerForestBirdsLoop === 'function') eng.triggerForestBirdsLoop();
    } else if (ambientType === 'seagull') {
      try { eng.playSeagullOnce(0.85); } catch(e) {}
      if (typeof eng.triggerSeagullLoop === 'function') eng.triggerSeagullLoop();
    }

    // 5) [핫픽스] 무음 방지 및 즉각적 사운드 피드백: 엔진이 정지 상태여도 즉시 기동 및 재생
    if (!eng.isPlaying) {
      eng.init();
      if (eng.audioCtx && eng.audioCtx.state === 'suspended') {
        eng.audioCtx.resume();
      }
      eng.isPlaying = true;
      eng.isNatureActive = true;
      
      // 편안한 432Hz 베이스 바이노럴 톤과 함께 자연음 믹서 가동
      if (!eng.isBeatsActive && !eng.isSolfeggioActive) {
        eng.setSolfeggioFrequency('432');
        eng.setSolfeggioVolume(0.35);
        eng.isSolfeggioActive = true;
        eng.setBeatsFrequency(200, 6);
        eng.setBeatsVolume(0.35);
        eng.isBeatsActive = true;
        eng.start();
      }
      eng.startNatureMixer();

      // 재생 버튼 UI 상태 즉시 활성화 동기화
      const isEn = window.currentLang === 'en';
      const stickyPlayBtn = document.getElementById('sticky-play-btn');
      if (stickyPlayBtn) {
        stickyPlayBtn.innerHTML = '<i class="ri-pause-fill"></i>';
        stickyPlayBtn.classList.add('playing');
      }
      const heroPlayBtn = document.getElementById('hero-play-btn');
      if (heroPlayBtn) {
        heroPlayBtn.innerHTML = `<i class="ri-pause-fill" style="font-size: 1.2rem;"></i> <span id="hero-play-btn-text">${isEn ? 'Stop Sound' : '사운드 정지'}</span>`;
        heroPlayBtn.classList.add('playing');
      }
      const masterPlayBtn = document.getElementById('btn-master-play');
      if (masterPlayBtn) {
        masterPlayBtn.classList.add('playing');
        masterPlayBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
      }
    } else {
      eng.isNatureActive = true;
      eng.startNatureMixer();
    }
  };

  // 슬립 타이머 & 맞춤음 드롭다운 클릭 토글 및 외부 클릭 감지 (민감성 완벽 해결)
  document.addEventListener('click', (e) => {
    const timerBtn = document.getElementById('sticky-timer-btn');
    const timerDropdown = timerBtn?.closest('.sticky-timer-dropdown');
    const ambientBtn = document.getElementById('sticky-ambient-btn');
    const ambientDropdown = ambientBtn?.closest('.sticky-ambient-dropdown');

    // 타이머 버튼 클릭 시 토글
    if (timerBtn && (timerBtn === e.target || timerBtn.contains(e.target))) {
      e.stopPropagation();
      timerDropdown?.classList.toggle('active-open');
      ambientDropdown?.classList.remove('active-open');
      return;
    }

    // 맞춤음 배경음 버튼 클릭 시 토글
    if (ambientBtn && (ambientBtn === e.target || ambientBtn.contains(e.target))) {
      e.stopPropagation();
      ambientDropdown?.classList.toggle('active-open');
      timerDropdown?.classList.remove('active-open');
      return;
    }

    // 드롭다운 내부 아이템 클릭 시 선택 후 부드럽게 닫기
    if (e.target.closest('.sticky-timer-item')) {
      setTimeout(() => {
        timerDropdown?.classList.remove('active-open');
        ambientDropdown?.classList.remove('active-open');
      }, 150);
      return;
    }

    // 메뉴 외부 클릭 시 모두 닫기
    if (!e.target.closest('.sticky-timer-dropdown')) {
      timerDropdown?.classList.remove('active-open');
      ambientDropdown?.classList.remove('active-open');
    }
  });

  // 12.1. [독립 조율] 주파수 사운드(솔페지오/Rife/VIP/바이노럴/커스텀) 볼륨 조절 함수
  window.setGlobalFrequencyVolume = function (val) {
    const safeVal = Math.max(0, Math.min(1, parseFloat(val) || 0));
    const eng = window.engine;
    if (eng) {
      eng.solfeggioVolume = safeVal;
      if (typeof eng.setSolfeggioVolume === 'function') eng.setSolfeggioVolume(safeVal);
      eng.rifeVolume = safeVal;
      if (typeof eng.setRifeVolume === 'function') eng.setRifeVolume(safeVal);
      eng.vipVolume = safeVal;
      if (typeof eng.setVipVolume === 'function') eng.setVipVolume(safeVal);
      eng.beatsVolume = safeVal;
      if (typeof eng.setBeatsVolume === 'function') eng.setBeatsVolume(safeVal);
      eng.customVolume = safeVal;
      if (typeof eng.setCustomVolume === 'function') eng.setCustomVolume(safeVal);
    }
    const percent = Math.round(safeVal * 100) + '%';
    // 하단 스티키 플레이어 슬라이더 & 텍스트 동기화
    const sf = document.getElementById('sticky-freq-slider');
    const tf = document.getElementById('sticky-freq-val');
    if (sf && Math.abs(parseFloat(sf.value) - safeVal) > 0.01) sf.value = safeVal;
    if (tf) tf.textContent = percent;

    // 상단 퀵 바 슬라이더 & 텍스트 동기화
    const qf = document.getElementById('slider-quick-frequency');
    const qft = document.getElementById('txt-quick-frequency');
    if (qf && Math.abs(parseFloat(qf.value) - safeVal) > 0.01) qf.value = safeVal;
    if (qft) qft.textContent = percent;

    // 페이지 내 개별 슬라이더들 동기화
    const ss = document.getElementById('slider-solfeggio-volume');
    const sst = document.getElementById('txt-solfeggio-volume');
    if (ss && Math.abs(parseFloat(ss.value) - safeVal) > 0.01) ss.value = safeVal;
    if (sst) sst.textContent = percent;

    const sb = document.getElementById('slider-beats-volume');
    const sbt = document.getElementById('txt-beats-volume');
    if (sb && Math.abs(parseFloat(sb.value) - safeVal) > 0.01) sb.value = safeVal;
    if (sbt) sbt.textContent = percent;

    const sr = document.getElementById('slider-rife-volume');
    const srt = document.getElementById('txt-rife-volume');
    if (sr && Math.abs(parseFloat(sr.value) - safeVal) > 0.01) sr.value = safeVal;
    if (srt) srt.textContent = percent;

    const sv = document.getElementById('slider-vip-volume');
    const svt = document.getElementById('txt-vip-volume');
    if (sv && Math.abs(parseFloat(sv.value) - safeVal) > 0.01) sv.value = safeVal;
    if (svt) svt.textContent = percent;
  };

  // 12.2. [독립 조율] 맞춤음 / 자연 배경음 마스터 볼륨 조절 함수
  window.setGlobalAmbientVolume = function (val) {
    const safeVal = Math.max(0, Math.min(1, parseFloat(val) || 0));
    const eng = window.engine;
    if (eng) {
      if (typeof eng.setNatureMasterVolume === 'function') eng.setNatureMasterVolume(safeVal);
    }
    const percent = Math.round(safeVal * 100) + '%';
    // 하단 스티키 플레이어 슬라이더 & 텍스트 동기화
    const sa = document.getElementById('sticky-ambient-slider');
    const ta = document.getElementById('sticky-ambient-val');
    if (sa && Math.abs(parseFloat(sa.value) - safeVal) > 0.01) sa.value = safeVal;
    if (ta) ta.textContent = percent;

    // 상단 퀵 바 슬라이더 & 텍스트 동기화
    const qa = document.getElementById('slider-quick-nature');
    const qat = document.getElementById('txt-quick-nature');
    if (qa && Math.abs(parseFloat(qa.value) - safeVal) > 0.01) qa.value = safeVal;
    if (qat) qat.textContent = percent;

    // 자연음 믹서 마스터 슬라이더 동기화
    const sn = document.getElementById('slider-nature-master');
    const snt = document.getElementById('txt-nature-master');
    if (sn && Math.abs(parseFloat(sn.value) - safeVal) > 0.01) sn.value = safeVal;
    if (snt) snt.textContent = percent;
  };
  window.setQuickNatureMasterVolume = window.setGlobalAmbientVolume;

  // 13. 자연음 아코디언 드로어 토글
  window.toggleNatureSection = function (sectionId) {
    const el = document.getElementById(sectionId);
    const header = document.querySelector(`[data-target="${sectionId}"]`);
    if (!el) return;

    const isOpen = el.classList.contains('open');
    el.classList.toggle('open', !isOpen);
    if (header) {
      header.classList.toggle('active', !isOpen);
    }
  };

  // 14. 토스트 알림창
  function showToast(msg) {
    let toast = document.getElementById('nc-studio-toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'nc-studio-toast';
      toast.className = 'nc-toast';
      document.body.appendChild(toast);
    }
    toast.textContent = msg;
    toast.classList.add('show');
    clearTimeout(toast._timer);
    toast._timer = setTimeout(() => {
      toast.classList.remove('show');
    }, 3000);
  }
  window.showStudioToast = showToast;

  // 15. VIP 버튼 인터셉터 설정 (체험 모드일 때만 안내 모달 표시)
  function setupVipInterceptors() {
    const vipTargets = [
      { id: 'btn-rife-play', name: 'Rife 100개 생체 공명 주파수' },
      { id: 'btn-vip-play', name: '솔라브르 VIP 임상 웰니스 코드' },
      { id: 'btn-custom-play', name: '나만의 주파수 음원 생성기' },
      { id: 'btn-export-audio', name: '유튜브 무손실 WAV 음원 내보내기' },
      { id: 'btn-custom-export-audio', name: '커스텀 WAV 음원 내보내기' }
    ];

    vipTargets.forEach(target => {
      const btn = document.getElementById(target.id);
      if (btn) {
        btn.addEventListener('click', (e) => {
          if (!window.NovaCellStudio.isVip) {
            e.stopImmediatePropagation();
            e.preventDefault();
            openVipModal(target.name);
          }
        }, true);
      }
    });
  }

  // 16. 이벤트 초기 바인딩 (DOM Ready)
  document.addEventListener('DOMContentLoaded', () => {
    initAuthAndVip();
    setupVipInterceptors();

    // 닫기 버튼 이벤트
    const closeBtn = document.getElementById('btn-close-vip-modal');
    if (closeBtn) closeBtn.onclick = closeVipModal;
    const backdrop = document.getElementById('vip-modal-backdrop');
    if (backdrop) backdrop.onclick = closeVipModal;

    // 하단 고정 플레이어 재생 버튼을 toggleMasterPlayback과 직결
    const stickyPlayBtn = document.getElementById('sticky-play-btn');
    if (stickyPlayBtn) {
      stickyPlayBtn.onclick = (e) => {
        e.preventDefault();
        window.toggleMasterPlayback();
      };
    }

    // 마스터 플레이 버튼도 toggleMasterPlayback과 동기화
    const masterPlayBtn = document.getElementById('btn-master-play');
    if (masterPlayBtn) {
      masterPlayBtn.addEventListener('click', () => {
        // masterPlayBtn 클릭 시 하단 플레이어 및 히어로 버튼 아이콘 동기화
        setTimeout(() => {
          const isPlaying = masterPlayBtn.classList.contains('playing');
          if (stickyPlayBtn) {
            stickyPlayBtn.innerHTML = isPlaying ? '<i class="ri-pause-fill"></i>' : '<i class="ri-play-fill"></i>';
            stickyPlayBtn.classList.toggle('playing', isPlaying);
          }
          const heroPlayBtn = document.getElementById('hero-play-btn');
          if (heroPlayBtn) {
            heroPlayBtn.innerHTML = isPlaying 
              ? '<i class="ri-pause-fill" style="font-size: 1.2rem;"></i> <span id="hero-play-btn-text">사운드 일시정지</span>'
              : '<i class="ri-play-fill" style="font-size: 1.2rem;"></i> <span id="hero-play-btn-text">사운드 재생</span>';
            heroPlayBtn.classList.toggle('playing', isPlaying);
          }
        }, 50);
      });
    }

    // 듀얼 볼륨 초기값 연동
    const stickyFreq = document.getElementById('sticky-freq-slider');
    if (stickyFreq) {
      stickyFreq.oninput = (e) => window.setGlobalFrequencyVolume(parseFloat(e.target.value));
    }
    const stickyAmbient = document.getElementById('sticky-ambient-slider');
    if (stickyAmbient) {
      stickyAmbient.oninput = (e) => window.setGlobalAmbientVolume(parseFloat(e.target.value));
    }

    // NovaCell 100 및 NovaCell VIP 전용 페이지 사전 렌더링
    if (typeof renderRife100Page === 'function') {
      renderRife100Page('all', '');
    }
    if (typeof renderVipPage === 'function') {
      renderVipPage('all', '');
    }

    // 기본 탭 활성화 (tab-presets)
    switchTab('tab-presets');

    // 메인 대문 초기 상태 연동 (최초 방문 시 대문 노출, 닫기 후에는 버튼 클릭으로 재오픈)
    const gate = document.getElementById('welcome-cover-screen');
    if (gate) {
      let dismissed = false;
      try {
        dismissed = sessionStorage.getItem('novacell_gate_dismissed') === 'true';
      } catch (e) {}
      if (dismissed) {
        gate.classList.add('closed');
        document.body.style.overflow = '';
      } else {
        gate.classList.remove('closed');
        document.body.style.overflow = 'hidden';
      }
    }

    // ESC 키 입력 시 대문 닫기
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        const g = document.getElementById('welcome-cover-screen');
        if (g && !g.classList.contains('closed')) {
          closeWelcomeGate();
        }
      }
    });
  });

  // 11. NovaCell Welcome Gate (메인 대문) 컨트롤러
  function openWelcomeGate() {
    const gate = document.getElementById('welcome-cover-screen');
    if (gate) {
      gate.classList.remove('closed');
      document.body.style.overflow = 'hidden';
      gate.scrollTop = 0;
      window.scrollTo(0, 0);
      if (typeof window.applyLanguage === 'function') {
        window.applyLanguage(window.currentLang || 'ko');
      }
    }
  }

  function closeWelcomeGate() {
    const gate = document.getElementById('welcome-cover-screen');
    if (gate) {
      gate.classList.add('closed');
      document.body.style.overflow = '';
      window.scrollTo(0, 0);
      try {
        sessionStorage.setItem('novacell_gate_dismissed', 'true');
      } catch (e) {}
    }
  }

  window.openWelcomeGate = openWelcomeGate;
  window.closeWelcomeGate = closeWelcomeGate;

})();


  // 6. [모바일 최적화] 스마트폰 환경에서 기본 맞춤음을 "숲속 새소리"로 초기 세팅
  const isMobileViewport = window.innerWidth <= 768 || /Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent);
  if (isMobileViewport) {
    window.currentAmbientType = 'forestbirds';
    document.addEventListener('DOMContentLoaded', () => {
      document.querySelectorAll('.ambient-chip').forEach(chip => {
        chip.classList.toggle('active', chip.getAttribute('data-ambient') === 'forestbirds');
      });
      const stickyAmbientText = document.getElementById('sticky-ambient-text');
      if (stickyAmbientText) {
        stickyAmbientText.textContent = '🌲 숲속 새소리';
      }
    });
  }
