/**
 * ==========================================================================
 * NovaCell Bio-Frequency Sound Studio - Bilingual i18n Engine (novacell-i18n.js)
 * 공식 힐링포인트(Healing Points) & 리플렉스 가이드(Reflex Therapy)와 100% 동일한
 * 무충돌(Zero-Conflict) 양방향 한글/영문 실시간 전환 시스템
 * ==========================================================================
 */

(function () {
  "use strict";

  // 1. 중앙 다국어 사전 (NOVA_I18N)
  const NOVA_I18N = {
    ko: {
      // 탑 바 & 글로벌
      topSystem: '<i class="ri-shield-flash-line text-gold"></i> <strong>NovaCell Therapy</strong> 바이오일렉트릭 시스템',
      topConsult: '<i class="ri-phone-line text-gold"></i> 글로벌 상담: <strong>+82-10-9726-7012</strong>',
      navGate: '메인 대문',
      navHome: 'NovaCell 홈',
      navHealing: '힐링 포인트',
      navReflex: '리플렉스 가이드',
      tierVip: 'NovaCell VIP 회원',
      tierDemo: '체험 모드',
      btnVipTest: 'VIP 모드 테스트',
      btnMyPage: '마이페이지',

      // 푸터 라이선스
      footerCredit: '박창혁 박사의 바이오일렉트릭 전압 의학 시스템 ∙ <a href="https://novacell.kr" target="_blank" rel="noopener noreferrer" style="color: var(--nc-gold); text-decoration: none;">novacell.kr</a>',

      // 헤더 & 5대 모드 네비게이션
      brandSubtitle: 'Bio-Frequency Sound Studio',
      tabPresets: '프리셋',
      tabRife100: '힐링 코드',
      tabVip: '웰니스 코드',
      tabCare: '호흡 테라피',
      tabStudio: '힐링 랩',
      btnGateHeader: '메인 대문',
      btnGateHeaderTitle: 'NovaCell 메인 대문 열기',
      btnAiCheck: 'AI 맞춤 진단',
      btnStudioHeader: '힐링 랩',
      btnStudioHeaderTitle: '나만의 주파수 음원 생성기',
      btnHamburgerTitle: '전체 탐색 메뉴 열기',
      btnAiCheckTitle: '나의 맞춤형 사운드 체크 및 처방',

      // Welcome Gate (메인 대문)
      gateVisualTagTop: 'QUANTUM BIO-RESONANCE',
      gateVisualTagBottom: 'Bio-Voltage & Frequency Sound Studio',
      gateVisualSignal: '100 HEALING CODES & 7-COLOR BREATHING',
      gateBadgeGold: 'NOVACELL CLINICAL SOUND',
      gateBadgeTech: 'BIO-FREQUENCY BIOTECH',
      gateTitle1: 'NovaCell',
      gateTitle2: 'Sound Studio',
      gateSlogan: 'Bio-Voltage & Acoustic Frequency Resonance System',
      gateDesc: '박창혁 박사의 <strong>세포 전압(-50mV) 치유 원리</strong>를 기반으로 <strong>100가지 전신 생체 공명 주파수(Rife &amp; Solfeggio)</strong>와 <strong>VIP 임상 웰니스 코드</strong>, <strong>7색 차크라 바이오 호흡 동기화</strong>를 통합한 차세대 음향 바이오테라피 시스템입니다.',
      gateFeat1Title: '100개 생체 힐링 코드',
      gateFeat1Desc: '세포 전위 정상화 & 100종 주파수',
      gateFeat2Title: 'VIP 임상 웰니스',
      gateFeat2Desc: '90개 질환·증상별 듀얼 레시피',
      gateFeat3Title: '7색 호흡 테라피',
      gateFeat3Desc: '4-2-6-2 리듬 & 솔페지오 공명',
      gateFeat4Title: '프로 사운드 스튜디오',
      gateFeat4Desc: '양이 비트·주파수 조율 생성기',
      gateEnterBtn: 'NovaCell 사운드 스튜디오 시작하기',
      gateSubHint: '클릭하시면 100개 생체 주파수 및 7색 바이오 호흡 테라피 스튜디오로 즉시 입장합니다',
      gateCloseQuickTitle: '대문 닫기 (스튜디오 바로 시작하기)',
      gateHeroAlt: 'NovaCell Sound Studio AI 모델',

      // Tab 1: 바이오 힐링 프리셋
      heroTab1Title: '세포 전압(-50mV) 복원 & 자율신경계 조율',
      heroTab1Desc: '임상 연구로 검증된 바이오 공명 주파수(Solfeggio & Rife)와 고음질 자연음을 원클릭으로 감상하세요.<br>프리셋 카드를 클릭하면 재생되며, 다시 클릭하면 즉시 정지됩니다.',
      heroPlayBtn: '사운드 재생',
      heroStopBtn: '사운드 정지',
      ambientBarTitle: '실시간 힐링 배경음 조율',
      ambientBarBadge: '원클릭 선택',
      ambientBarDesc: '주파수 청취 중 원하는 자연 힐링 사운드(비, 계곡물, 파도, 싱잉볼 등)를 언제든 자유롭게 즉시 변경할 수 있습니다.',
      lblFreq: '주파수',
      lblAmbient: '배경음',
      ambPreset: '프리셋 맞춤음',
      ambRain: '자연 빗소리',
      ambStream: '청량한 계곡물',
      ambWaves: '동해 파도소리',
      ambCampfire: '따스한 모닥불',
      ambSingingbowl: '힐링 싱잉볼',
      ambForestbirds: '숲속 새소리',
      ambSeagull: '바다 갈매기',
      ambCrickets: '밤 풀벌레',
      mTabPresets: '프리셋',
      mTabRife: '힐링 코드',
      mTabVip: '웰니스 코드',
      mTabCare: '호흡 테라피',
      mTabStudio: '힐링 랩',
      ambOff: '배경음 끄기 (순음만)',
      ambPresetTitle: '현재 선택된 프리셋의 고유 맞춤 자연음 조합',
      ambRainTitle: '마음이 편안해지는 자연 빗소리',
      ambStreamTitle: '뇌를 맑게 씻어주는 청량한 계곡물',
      ambWavesTitle: '스트레스를 씻어내는 동해 파도소리',
      ambCampfireTitle: '따스함과 안도감을 주는 모닥불 장작소리',
      ambSingingbowlTitle: '깊은 명상과 뇌파 이완을 돕는 티벳 싱잉볼',
      ambForestbirdsTitle: '기분 좋은 활력을 깨우는 숲속 새소리',
      ambSeagullTitle: '시원한 바다 파도와 갈매기소리',
      ambCricketsTitle: '깊은 수면을 유도하는 밤 풀벌레 ASMR',
      ambOffTitle: '모든 배경음을 끄고 순수 치료 주파수만 집중 청취',
      badgeFree: '무료 체험',
      badgeVip: '🔒 VIP 임상',
      presetPlayStop: '재생 / 정지',

      preset1Title: '우주의 자연 조화 (432Hz)',
      preset1Desc: '자연과 동조되는 432Hz 순음과 세타파(6Hz), 명상 싱잉볼 사운드가 심신에 깊은 이완과 평온을 선사합니다.',
      preset2Title: '세포 기적 & DNA 회복 (528Hz)',
      preset2Desc: '미라클 주파수 528Hz와 알파파(10Hz), 부드러운 창문 빗소리가 손상된 세포 에너지 회복과 스트레스 정화를 촉진합니다.',
      preset3Title: '불안·죄책감 정화 (396Hz)',
      preset3Desc: '내면의 무거운 불안과 걱정을 내려놓도록 돕는 396Hz 솔페지오 톤과 따스한 모닥불 장작 소리의 융합.',
      preset4Title: '세포 전압(-50mV) 복원',
      preset4Desc: '박창혁 박사의 바이오일렉트릭 임상 Rife 주파수와 지구 생체 자기장(슈만 7.83Hz)을 합성하여 세포 충전 유도.',
      preset5Title: '깊은 델타 REM 숙면',
      preset5Desc: '과각성된 두뇌를 잠재우고 깊은 서파 수면(Delta 2Hz)으로 유도하는 임상 수면 주파수와 밤비, 고요한 풀벌레 배합.',
      preset6Title: '만성 통증 & 근골격 이완',
      preset6Desc: '신경통, 관절염, 오십견 등 근골격계 긴장과 말초 신경 흥분 신호를 완화하는 라이프 생체 진동 레시피.',
      preset7Title: '자율신경 & 미주신경 밸런스',
      preset7Desc: '옴(Om 136.1Hz)과 슈만 공명(7.83Hz), Code 008 자율신경 조율로 상열하한 해소 및 부교감신경 활성화.',
      preset8Title: '감마파 초집중 & 뇌 활력',
      preset8Desc: '두뇌 미토콘드리아 활성화와 인지 몰입을 돕는 정밀 40Hz 감마파, 솔페지오 741Hz와 맑은 빗소리의 조화.',

      solfeggioTitle: '2) 치유 솔페지오 주파수 (Solfeggio Freq)',
      solfeggioDesc: '몸과 마음의 조화와 기적의 치유를 돕는 특정 주파수 톤을 실시간 합성합니다.',
      solf396: '396Hz (해소)',
      solf396_399: '(바이노럴): 좌 396Hz / 우 399Hz Delta',
      solf417: '417Hz (변화)',
      solf432: '432Hz (조화)',
      solf528: '528Hz (치유)',
      solf639: '639Hz (소통)',
      solf741: '741Hz (정화)',
      solfVolume: '솔페지오 자체 볼륨',

      binauralTitle: '1) 바이노럴 비트 뇌파 동조 (Binaural Beats)',
      binauralDesc: '뇌파 톤을 선택하고 재생을 시작하세요. (이어폰 필수)',
      bwDelta: '델타파 (4Hz)',
      bwDeltaSub: '깊은 수면 유도',
      bwTheta: '세타파 (6Hz)',
      bwThetaSub: '깊은 명상과 이완',
      bwSchumann: '슈만 공명 (7.83Hz)',
      bwSchumannSub: '지구 고유 진동·치유',
      bwAlpha: '알파파 (10Hz)',
      bwAlphaSub: '스트레스 해소',
      bwBeta: '베타파 (15Hz)',
      bwBetaSub: '집중력과 기억력',
      lblCarrier: '기준 주파수 (Carrier Hz)',
      lblBeat: '유도 뇌파 주파수 (Beat Hz)',
      lblBinauralVol: '자체 볼륨 (Volume)',

      indigoCardTitle: '바이오 호흡 동기화 타이머 (남색 • Indigo)',
      indigoCardDesc: '치유 주파수와 함께 호흡하며 심박변이도(HRV)와 자율신경계를 최적화합니다.',
      btnGoCare: '7색 호흡 테라피로 이동',
      indigoBreathPhase: '들숨 준비',
      indigoBreathSub: '4-2-6-2 바이오 리듬',
      indigoBreathHint: '7색 호흡 테라피 바로가기',

      // Tab 2: NovaCell 100 힐링 코드
      rifeHeroBadge: '100가지 전신 생체 주파수 매트릭스',
      rifeHeroTitle: 'NovaCell 100 생체 에너지 힐링 코드',
      rifeHeroDesc: '박창혁 박사의 세포 전압(-50mV) 원리를 기반으로 일상 속 긴장 해소, 깊은 숙면, 만성 피로, 소화 대사, 뇌 인지 기능을 조율하는 100가지 전신 생체 공명 주파수를 한눈에 탐색하고 원클릭으로 청취하세요.',
      rifeHeroStatus: '현재 선택된 주파수 코드',
      rifeHeroPlay: '재생 / 정지',
      rifeSearchPlaceholder: '100개 코드 번호, 웰니스 테마 또는 증상 검색 (예: 001, 수면, 피로, 두뇌, 528, 자율신경)',
      btnPlayHealing: '주파수 힐링',
      btnPause: '일시정지',
      rifeShowingCount: '표시 중',
      rifeEmptyTitle: '일치하는 주파수 코드가 없습니다',
      rifeEmptyDesc: '다른 검색어나 카테고리를 선택해 보세요.',
      rifeCatAll: '전체',
      rifeCatSleep: '🌙 깊은 수면',
      rifeCatStress: '🧘 정서 안정',
      rifeCatBody: '⚡ 신체 피로',
      rifeCatDigest: '🥗 소화·대사',
      rifeCatFocus: '🎯 두뇌·집중',
      rifeCatVitality: '🌿 일상 활력',

      // Tab 3: VIP 임상 웰니스 코드
      vipHeroBadge: 'VIP 정회원 전용 임상 라이브러리',
      vipSubSeries: 'V01 ~ V090 전편 수록 (총 90개 임상 코드)',
      vipHeroTitle: 'NovaCell VIP 임상 웰니스 코드',
      vipHeroDesc: '박창혁 박사의 양자물리학 및 세포 전압(-50mV) 원리를 기반으로 순환기, 뇌신경, 근골격, 호흡기, 소화대사, 종양 타겟 등 90여 개 질환 및 증상별 최적화된 공명 주파수를 한눈에 분별하여 선택하세요.',
      vipHeroStatus: '현재 선택된 VIP 임상 코드',
      vipSearchPlaceholder: '질환명, 증상, 통증 부위 또는 VIP 코드 검색 (예: 불면, 두통, 관절염, 비염, 당뇨, V015, 고혈압, 간암)',
      btnPlayVip: 'VIP 코드 청취',
      vipShowingCount: '임상 코드',
      vipEmptyTitle: '일치하는 VIP 임상 코드가 없습니다',
      vipEmptyDesc: '해당하는 질환명 또는 증상을 찾을 수 없습니다. 다른 검색어를 입력해 보세요.',
      vipCatAll: '전체 임상 코드',
      vipCatFocus: '🧠 뇌신경 ∙ 심혈관 ∙ 두통',
      vipCatDigest: '🥗 소화대사 ∙ 간 ∙ 비뇨기',
      vipCatStress: '🦴 근골격 ∙ 관절 ∙ 척추통증',
      vipCatSleep: '🫁 수면 ∙ 호흡기 ∙ 알레르기',
      vipDisclaimer: '<i class="ri-information-line"></i> <strong>의료법 안내 및 면책:</strong> 본 VIP 사운드 레시피는 의학적 치료 목적이 아니며, 양자물리학 기반 생체 전위 안정 및 자율신경 이완 보조를 위한 웰니스 사운드입니다.',

      // Tab 4: AI 웰니스 & 호흡 테라피
      careHeroTitle: '7색 차크라 바이오 호흡 테라피',
      careHeroSub: '차크라별 고유 컬러와 솔페지오 주파수가 동심원 리듬(4-2-6-2)으로 공명하는 14초 바이오 리셋',
      careCustomTitle: '치유 주파수 맞춤 조율',
      careCustomDefault: '차크라 기본 (174Hz)',
      btnModalOpen: '치유 주파수 전체 검색',
      stepIn: '들이마시기',
      stepHold1: '숨 멈추기',
      stepOut: '내쉬기',
      stepHold2: '비움 멈춤',
      soundSyncLabel: '솔페지오 & 자연음 동기화',
      fullscreenLabel: '전체화면',
      rewardTitle: '14초 바이오 리셋 완료!',
      rewardDesc: '차크라 에너지와 자율신경이 조율되었습니다. 하루 3회 이상 실천해 보세요.',
      btnConfirm: '확인',
      btnTurnLoopOn: '연속 루프 켜기',
      customHzBtnApply: '적용',
      customHzBtnDefault: '기본값',
      customHzPlaceholder: '직접 Hz 입력 (예: 432, 528)',
      btnSearchHealingBreath: '📚 NovaCell 100 & VIP 힐링 코드 검색 및 호흡 연동',
      btnStart14s: '14초 바이오 챌린지 시작',
      btnLoopOff: '연속 루프: OFF',
      btnLoopOn: '연속 루프: ON',
      btnDeep1Hour: '🌙 1시간 딥 테라피',
      aiSectionTitle: 'NovaCell 생체 주파수 맞춤 진단',
      aiSectionSub: '오늘의 컨디션에 따른 맞춤형 뇌파 & 치유 사운드 처방',
      aiSectionDesc: '수면의 질, 스트레스, 신체 긴장도, 통증 부위 등 20문항의 점검을 통해 오늘 가장 필요한 치유 주파수와 최적의 자연음 믹스를 분석·처방합니다.',
      aiSectionBtn: 'AI 맞춤 점검 시작하기',
      aiSectionOpenFull: '전체창으로 열기',
      classicTitle: '클래식 5대 호흡 훈련 가이드',
      classicSub: '자율신경 조율, 스트레스 완화, 수면 유도 등 목적별 호흡 리듬을 훈련하세요.',
      classicCoherent: '동조 호흡 (5-5s)',
      classicCoherentSub: '자율신경 조율',
      classicBox: '균등 호흡 (4-4-4-4s)',
      classicBoxSub: '스트레스 완화',
      classicRelax: '이완 호흡 (4-7-8s)',
      classicRelaxSub: '수면 유도/진정',
      classicBeginner: '초보자 호흡 (3-3s)',
      classicBeginnerSub: '가벼운 훈련용',
      classicVitality: '활력 호흡 (4-2-4s)',
      classicVitalitySub: '신선한 에너지',
      classicDesc: '부풀어 오르는 원의 템포와 중앙의 타이머에 맞추어 깊게 호흡하며 마음의 고요를 다지세요.',
      classicStartBtn: '클래식 호흡 훈련 시작',
      classicResetBtn: '리셋',
      classicCardTitle: '클릭하여 클래식 호흡 훈련 시작 / 일시정지',
      classicHint: '클릭하여 시작 / 정지',
      classicAlt: '남색 호흡 타이머 배경',

      // Tab 5: 프로 스튜디오 헤더 & 공통
      studioHeaderTitle: 'NovaCell Pro Bio-Frequency Studio',
      studioHeaderSub: '100개 Rife 생체 공명 주파수, VIP 웰니스 코드 V001~V082, 12종 빗소리 믹서 및 무손실 음원 내보내기',
      studioMasterVol: '마스터 볼륨 (전체 통제)',

      // Tab 5: 3) Rife Section
      rifeSectionTitle: '3) NovaCell 100 생체 에너지 힐링 코드',
      rifeSectionDesc: '대체의학으로 알려진 로열 라이프(Rife) 주파수를 솔라브르 고유의 힐링 테마 코드 화음으로 실시간 합성합니다. 지친 하루 끝에 세포의 조화로운 공명을 느껴보세요.',
      rifeControllerTitle: '테라피 컨트롤러',
      rifeControllerSub: '레시피 코드를 선택하고 재생을 시작하세요.',
      lblRifeOwnVol: '자체 볼륨',
      txtRifeHold: '현재 주파수 고정',
      txtRifeIntervalLabel: '주파수당 적용 시간 (전환 간격)',
      rifeInt8: '8초 (스캔)',
      rifeInt30: '30초',
      rifeInt60: '1분',
      rifeInt180: '3분 (표준 힐링)',
      rifeInt300: '5분 (딥 테라피)',
      rifeTimelineTitle: '실시간 작용 주파수 타임라인',
      rifeTimelineStandby: '대기 중 (총 33개 주파수 대역)',
      rifeTimelineHint: '💡 가로선 위의 점을 클릭하면 해당 구간 주파수로 즉시 변경됩니다.',
      rifeTabAll: '전체',
      rifeTabSleep: '깊은수면',
      rifeTabStress: '긴장완화',
      rifeTabBody: '신체피로',
      rifeTabDigest: '소화·대사',
      rifeTabFocus: '두뇌·집중',
      rifeTabVitality: '일상에너지',
      rifeSearchPlaceholderTab5: '테마, 웰니스 증상 또는 코드를 검색해 보세요 (예: 수면, 어깨, 집중, 015)',
      rifeLinkBreath: '🫁 이 힐링 코드로 호흡 테라피 시작',

      // Tab 5: 3.5) VIP Section
      vipSectionTitleTab5: '3.5) NovaCell VIP 임상 웰니스 코드 (V01~V090)',
      vipDisclaimerTab5: '⚠️ [의료법 관련 안내 및 강력 면책 조항]<br>본 VIP 사운드 레시피는 특정 질병의 예방, 진단, 치료를 목적으로 하는 의학적 기기가 아닙니다. 양자물리학을 기반으로 하여 신체 에너지 조율, 이완 유도 및 자율신경 웰니스 보조 목적으로만 사용됩니다. 질병이 의심되거나 치료 중인 경우 반드시 의사의 상담을 받으십시오.',
      vipDescTab5: '엄선된 VIP 전용 웰니스 공명 주파수를 실시간 합성합니다. 각 계통별 최적화된 화음 주파수로 심신의 균형을 잡아보세요.',
      vipControllerTitle: 'VIP 테라피 컨트롤러',
      vipControllerSub: 'VIP 코드를 선택하고 재생을 시작하세요.',
      lblVipOwnVol: 'VIP 볼륨',
      txtVipHold: '현재 주파수 고정',
      txtVipIntervalLabel: '주파수당 적용 시간 (전환 간격)',
      vipInt8: '8초 (스캔)',
      vipInt30: '30초',
      vipInt60: '1분',
      vipInt180: '3분 (표준 힐링)',
      vipInt300: '5분 (딥 테라피)',
      vipTimelineTitle: '실시간 작용 VIP 주파수 타임라인',
      vipTimelineStandby: '대기 중 (총 0개 주파수 대역)',
      vipTimelineHint: '💡 가로선 위의 점을 클릭하면 해당 구간 주파수로 즉시 변경됩니다.',
      vipTabAll: '전체',
      vipTabSleep: '수면 ∙ 호흡기 명상 코드',
      vipTabDigest: '소화대사 명상 코드',
      vipTabFocus: '뇌심혈관 명상 코드',
      vipTabStress: '근골격계 명상 코드',
      vipSearchPlaceholderTab5: '증상, VIP 코드 또는 명칭을 검색해 보세요 (예: 호흡, 혈당, V01)',
      vipLinkBreath: '🫁 이 VIP 코드로 호흡 테라피 시작',

      // Tab 5: 3.7) Custom Studio
      customStudioTitle: '3.7) 나만의 주파수 음원 생성기 (Custom Studio)',
      customStudioDesc: '필요한 주파수와 지속 시간(초/분)을 자유롭게 입력하여 나만의 힐링 사운드 레시피를 제작하고 실시간 재생 및 고음질 BGM 파일로 내보낼 수 있습니다.',
      customBtnPlay: '세션 재생',
      customBtnHold: '주파수 고정 (HOLD)',
      customVolLabel: '자체 볼륨',
      customCard1Header: '1. 음원 코드 제목 및 설명 설정',
      customCatPain: '🧘 통증 해방 & 전신 균형',
      customCatSleep: '🌙 깊은 수면 & 이완',
      customCatFocus: '🧠 두뇌 활성 & 집중력',
      customCatSolfeggio: '🧬 세포 치유 & 솔페지오',
      customCatEnergy: '⚡ 활력 & 바이탈 리셋',
      customCatCustom: '✨ 기타 맞춤 테라피',
      customCard2Header: '2. 주파수(Hz) 레시피 입력',
      customTemplateRec: '추천 템플릿:',
      tpl120: '120분 리셋',
      tplHeadache: '두통 케어',
      tplSolfeggio: '솔페지오',
      tplSleep: '깊은 숙면',
      btnApplyFreqs: '주파수 파싱 및 칩 적용',
      btnSortFreqs: '오름차순 정렬',
      btnUniqueFreqs: '중복 제거',
      btnClearFreqs: '비우기',
      customChipsLabel: '구성된 주파수 칩 목록 (클릭 시 단독 청취 / ✕ 클릭 시 삭제):',
      customCard3Header: '3. 주파수별 지속 시간 (Dwell Time) 설정',
      lblInputUnit: '입력 단위:',
      btnUnitSec: '초(sec)',
      btnUnitMin: '분(min)',
      lblQuickSet: '빠른 설정:',
      cPre8: '8초 (쾌속 탐색)',
      cPre30: '30초',
      cPre60: '1분',
      cPre180: '3분 (표준)',
      cPre300: '5분 (치유 권장)',
      cPre600: '10분',
      cPre1800: '30분 (깊은 이완)',
      customCard4Header: '4. 실시간 재생 모니터링 & 인터랙티브 타임라인',
      lblNowFreq: '현재 출력 주파수',
      lblCountdown: '주파수 전환 카운트다운',
      lblSwitchMode: '전환 모드',
      badgeAutoSwitch: '자동 순차 전환',
      customCard5Header: '5. 내 레시피 보관함 & 백업',
      btnSaveRecipe: '현재 레시피 저장',
      btnExportJson: 'JSON 내보내기',
      btnImportJson: 'JSON 불러오기',
      customCard6Header: '6. BGM 음원 파일 내보내기 (WAV 고음질 렌더링)',
      lblExportLen: '내보낼 총 길이:',
      lblExportBgm: '배경 BGM 자연음:',
      lblBgmVol: 'BGM 배경음 볼륨:',
      lblMasterVol: '마스터 출력 볼륨:',
      btnRenderBgm: '맞춤 BGM 음원 파일(WAV) 렌더링 및 다운로드',
      btnDownloadWav: '생성된 음원 파일 다운로드 (.WAV)',
      customArchiveEmpty: '보관함에 저장된 나만의 레시피가 없습니다. 위 입력창에서 주파수를 구성한 후 [현재 레시피 저장]을 눌러보세요!',
      customMetaTitlePlaceholder: '음원 코드 제목 (예: Code C001 : 통증 해방 120분 리셋)',
      customMetaDescPlaceholder: '음원에 대한 상세 설명 또는 효능을 자유롭게 작성하세요',
      customFreqPlaceholder: '주파수(Hz)를 쉼표(,), 공백, 또는 줄바꿈으로 입력하세요. (예: 7.83, 10, 20, 6000, 10000, 5000, 880, 787, 727, 528, 432, 136.1, 40, 3.5, 0.5)',
      bgmNone: '무음 (주파수 사운드만 단독 렌더링)',
      bgmRain: '빗소리 (Rain Ambience)',
      bgmWaves: '파도소리 (Ocean Waves)',
      bgmForest: '숲속소리 (Forest Birds)',
      bgmWhite: '화이트 노이즈 (Pink/White Noise)',
      dur5m: '5분 (짧은 집중 명상)',
      dur30m: '30분 (표준 힐링 세션)',
      dur60m: '60분 / 1시간 (풀 세션)',
      dur3h: '3시간 (심층 수면 & 휴식)',
      dur9h: '9시간 (수면 전체 재생)',
      durAuto: '전체 레시피 1사이클 (계산된 시간)',

      // Tab 5: 4) 자연의 소리 & 빗소리 믹서
      rainSectionTitle: '4) 12종 고음질 빗소리 & 자연음 믹서 (Rain Ambience)',
      rainSectionDesc: '고음질 리얼 빗소리 12종 음원과 수학적 오디오 합성 자연음을 자유롭게 믹싱하여 나만의 힐링 ASMR 환경을 만듭니다.',
      rainMasterLabel: '자연음 파트 전체 볼륨',
      rainSpecialHeader: '고음질 리얼 빗소리 12종 컬렉션',
      lblQuickSelect: '빠른 선택:',
      preHeavy: '폭우/자연비',
      preWhite: '수면 화이트',
      preThunder: '뇌우/천둥',
      preRelax: '릴랙싱',
      preWindow: '창가 빗방울',
      preCalm: '잔잔한 명상비',
      preOff: '빗소리 끄기',
      rain01: '01. 묵직한 폭우 & 자연의 비',
      rain02: '02. 화이트 노이즈 수면 빗소리',
      rain03: '03. 편안한 릴랙싱 빗소리',
      rain04: '04. 천둥 번개 동반 뇌우',
      rain05: '05. 깊고 풍성한 롱타임 빗소리',
      rain06: '06. 창가 촉촉한 빗방울 소리',
      rain07: '07. 카밍 힐링 루프 빗소리',
      rain08: '08. 대지 적시는 장엄한 빗소리',
      rain09: '09. 한낮의 부드러운 단비',
      rain10: '10. 초고음질 리얼리티 입체 빗소리',
      rain11: '11. 잔잔한 명상 이완 빗소리',
      rain12: '12. 숲속 나뭇잎 스치는 빗소리',
      nature8Header: '클래식 자연의 소리 & 힐링 악기 (8종)',
      natSynthRain: '합성 빗소리 (Synth Rain)',
      natWaves: '파도소리 (Waves)',
      natCampfire: '모닥불소리 (Campfire)',
      natSeagull: '갈매기소리 (Seagull)',
      natSingingbowl: '싱잉볼소리 (Singing Bowl)',
      natStream: '계곡물 흐르는 소리 (Valley Stream)',
      natForestBirds: '깊은 숲의 새소리 (Deep Forest Birds)',
      natMountainBirds: '깊은 산속 새소리 (Mountain Birds)',

      // Tab 5: 5) 무손실 음원 내보내기
      exportSectionTitle: '유튜브 BGM 내보내기 (Export)',
      exportSectionDesc: '설정한 볼륨과 주파수 그대로 고음질 음원(WAV) 파일을 즉시 다운로드하여 동영상 제작 소스로 사용합니다.',
      exportDurationLabel: '녹음/내보내기 시간 선택',
      exportBtnStart: '고화질 WAV 다운로드 시작',
      opt5m: '5 분 (영상 편집 루프용)',
      opt30m: '30 분 (일반 명상용)',
      opt1h: '1 시간 (집중 및 숙면용)',
      opt3h: '3 시간 (자율신경 조율 및 장시간 웰니스 테라피용)',
      opt9h: '9 시간 (깊은 수면 유도 및 야간 백색소음용)',
      oscSectionTitle: '5) 프로 주파수 발진기 (Custom Frequency Generator)',
      oscSectionDesc: '미세 주파수(0.1Hz 단위) 및 파형(Sine, Triangle, Square, Sawtooth)을 직접 합성하고 조율할 수 있는 전문가용 도구입니다.',

      // Tab 1 Preset card footers
      preset1Footer: '432Hz ∙ 세타 6Hz ∙ 싱잉볼',
      preset2Footer: '528Hz ∙ 알파 10Hz ∙ 창문비',
      preset3Footer: '396Hz ∙ 델타 3.5Hz ∙ 모닥불',
      preset4Footer: 'Code 001 ∙ 528Hz ∙ 시냇물 & 싱잉볼',
      preset5Footer: 'Code 003 ∙ 델타 2Hz ∙ 밤비 & 풀벌레',
      preset6Footer: 'Code 013 ∙ 432Hz ∙ 시냇물 & 싱잉볼',
      preset7Footer: '432Hz ∙ 슈만 7.83Hz ∙ 숲속새 & 시냇물',
      preset8Footer: '40Hz 감마 ∙ 741Hz ∙ Code 072 ∙ 집중비',

      // Tab 1 & Tab 4 Titles & tooltips
      binauralPlayBtnTitle: '바이노럴 비트 재생/정지',
      indigoCardLinkTitle: '클릭하여 7색 호흡 테라피로 이동',
      classicStatusReady: '준비',
      btnClearCode: '해제',
      btnClearCodeTitle: '코드 해제',

      // Custom Studio extra keys
      customBtnPlayTitle: '커스텀 주파수 세션 시작/일시정지',
      customBtnHoldTitle: '현재 재생 중인 주파수 고정 (자동 전환 일시정지)',
      unitMin: '분',
      unitSec: '초',
      calcTotalPrefix: '총 ',
      calcFreqUnit: '개 주파수 × 각 ',
      calcEachSuffix: ' 지속',
      calcTotalEstimate: '예상 1사이클 소요 시간: ',
      customNowTierDefault: '슈만 공명 ∙ 3중 바이노럴 비트 합성',
      customNowStepDefault: '주파수 1 / 15 단계',
      customExportRendering: '고음질 오프라인 오디오 렌더링 중...',
      exportProgressReady: '음원 렌더링을 준비하고 있습니다... (0%)',

      // Studio Header & Master
      badgeReviewMode: '👑 검토 모드 활성',
      badgeVipActive: 'VIP 모든 기능 작동 중',
      masterPlayTitle: '마스터 재생/정지',
      masterMuteTitle: '전체 소리 ON/OFF',
      rifePlayBtnTitle: '주파수 테라피 재생/정지',

      // 하단 고정 플레이어
      stickyDemo: '체험 사운드',
      stickyVip: 'VIP 임상',
      stickyTimer: '타이머',
      stickyAmbient: '맞춤음',
      timer15: '15분',
      timer30: '30분',
      timer60: '60분',
      timerOff: '해제',

      // VIP 모달
      vipModalTitle: 'NovaCell 정회원 전용 기능',
      vipModalFeature: 'NovaCell Bio-Frequency VIP 이용권이 필요합니다.',
      vipBenefit1: '<strong>100개 Rife 생체 공명 주파수</strong> 및 세포 전압(-50mV) 복원 프로토콜 무제한 이용',
      vipBenefit2: '<strong>VIP 임상 웰니스 코드 V001~V082</strong> 전편 즉시 잠금 해제',
      vipBenefit3: '<strong>12종 고음질 자연음 & 멀티 트랙 믹서</strong> 자유 조율',
      vipBenefit4: '<strong>유튜브 힐링 BGM / 무손실 WAV 음원</strong> 무제한 내보내기 & 다운로드',
      vipLoginBtn: 'NovaCell 계정으로 로그인',
      vipPassBtn: 'NovaCell 이용권 가입 및 안내 보기',
      vipPhone: '전화 상담: 010-9726-7012',
      vipClose: '체험 모드로 계속하기',
      vipPriceSub: '100개 Rife 주파수 · VIP 임상코드 · 고음질 음원 무제한 다운로드',
      vipPriceAmount: '330,000원',
      vipPriceTerm: '/ 1년 무제한 이용 (US $300)',
      vipPassBtn: '1년 정기 패스 가입 (33만원 / $300)',

      // 모달 & 모바일 드로어
      modalSearchTitle: 'NovaCell 100 & VIP 힐링 코드 검색',
      modalSearchSub: '총 190종의 검증된 치유 주파수 코드를 검색하여 호흡 테라피와 함께 재생합니다.',
      modalSearchPlaceholder: '코드 번호 또는 질환/효능 검색 (예: 17, 수면, 불면, 간, 암, 위, 피로, 면역, 두통...)',
      modalTabAll: '전체 (190)',
      modalTabRife: '🌿 NovaCell 100 힐링 코드 (100)',
      modalTabVip: '👑 VIP 임상 웰니스 코드 (90)',
      modalHint: '클릭 시 해당 치유 주파수로 호흡 테라피가 연동됩니다',
      drawerTitle: '힐링 탐색 메뉴',
      drawerGate: '메인 대문 (스튜디오 가이드)',
      drawerWellnessCheck: 'AI 주파수 맞춤 체크',

      // 토스트 피드백
      toastSwitchedEn: '✨ English mode enabled',
      toastSwitchedKo: '✨ 한국어 모드로 전환되었습니다'
    },

    en: {
      // Top bar & Global
      topSystem: '<i class="ri-shield-flash-line text-gold"></i> <strong>NovaCell Therapy</strong> Bioelectric System',
      topConsult: '<i class="ri-phone-line text-gold"></i> Global Consultation: <strong>+82-10-9726-7012</strong>',
      navGate: 'Welcome Gate',
      navHome: 'NovaCell Home',
      navHealing: 'Healing Points',
      navReflex: 'Reflex Therapy',
      tierVip: 'NovaCell VIP Member',
      tierDemo: 'Demo Mode',
      btnVipTest: 'Test VIP Mode',
      btnMyPage: 'My Page',

      // Footer
      footerCredit: 'Dr. Chang-Hyuk Park\'s Bioelectric Voltage Medicine System ∙ <a href="https://novacell.kr" target="_blank" rel="noopener noreferrer" style="color: var(--nc-gold); text-decoration: none;">novacell.kr</a>',

      // Header & Navigation
      brandSubtitle: 'Bio-Frequency Sound Studio',
      tabPresets: 'Presets',
      tabRife100: 'Healing Codes',
      tabVip: 'Wellness Codes',
      tabCare: 'Breathing Therapy',
      tabStudio: 'Healing Lab',
      btnGateHeader: 'Welcome Gate',
      btnGateHeaderTitle: 'Open NovaCell Welcome Gate',
      btnAiCheck: 'AI Diagnosis',
      btnStudioHeader: 'Healing Lab',
      btnStudioHeaderTitle: 'Custom Bio-Frequency Audio Synthesizer',
      btnHamburgerTitle: 'Open Navigation Menu',
      btnAiCheckTitle: 'Personalized sound check & wellness prescription',

      // Welcome Gate
      gateVisualTagTop: 'QUANTUM BIO-RESONANCE',
      gateVisualTagBottom: 'Bio-Voltage & Frequency Sound Studio',
      gateVisualSignal: '100 HEALING CODES & 7-COLOR BREATHING',
      gateBadgeGold: 'NOVACELL CLINICAL SOUND',
      gateBadgeTech: 'BIO-FREQUENCY BIOTECH',
      gateTitle1: 'NovaCell',
      gateTitle2: 'Sound Studio',
      gateSlogan: 'Bio-Voltage & Acoustic Frequency Resonance System',
      gateDesc: 'Based on Dr. Chang-Hyuk Park\'s <strong>cell voltage (-50mV) restoration principles</strong>, this next-generation acoustic biotherapy system integrates <strong>100 whole-body resonance frequencies (Rife &amp; Solfeggio)</strong>, <strong>VIP clinical wellness codes</strong>, and <strong>7-color chakra bio-breathing synchronization</strong>.',
      gateFeat1Title: '100 Bio-Healing Codes',
      gateFeat1Desc: 'Cell Voltage Normalization & 100 Tones',
      gateFeat2Title: 'VIP Clinical Wellness',
      gateFeat2Desc: 'Dual Protocols for 90 Conditions',
      gateFeat3Title: '7-Color Breath Therapy',
      gateFeat3Desc: '4-2-6-2 Rhythm & Solfeggio Sync',
      gateFeat4Title: 'Pro Sound Studio',
      gateFeat4Desc: 'Binaural Beats & Wave Synthesizer',
      gateEnterBtn: 'Enter NovaCell Sound Studio',
      gateSubHint: 'Click to immediately enter the 100 Bio-Frequencies & 7-Color Breath Therapy Studio',
      gateCloseQuickTitle: 'Close Gateway (Enter Studio Directly)',
      gateHeroAlt: 'NovaCell Sound Studio AI Clinical Model',

      // Tab 1: Bio-Healing Presets
      heroTab1Title: 'Cell Voltage (-50mV) Restoration & Autonomic Regulation',
      heroTab1Desc: 'Experience clinically verified bio-resonance frequencies (Solfeggio & Rife) harmonized with high-definition nature soundscapes.<br>Click any preset card to play, and click again to immediately pause.',
      heroPlayBtn: 'Play Sound',
      heroStopBtn: 'Stop Sound',
      ambientBarTitle: 'Real-Time Nature Ambient Tuning',
      ambientBarBadge: 'One-Click Select',
      ambientBarDesc: 'Freely switch between restorative soundscapes (Rain, Stream, Waves, Singing Bowl, etc.) anytime during frequency sessions.',
      lblFreq: 'Frequency',
      lblAmbient: 'Ambient',
      ambPreset: 'Preset Default',
      ambRain: 'Nature Rain',
      ambStream: 'Clear Stream',
      ambWaves: 'Ocean Waves',
      ambCampfire: 'Warm Fireplace',
      ambSingingbowl: 'Singing Bowl',
      ambForestbirds: 'Forest Birds',
      ambSeagull: 'Ocean Seagulls',
      ambCrickets: 'Night Crickets',
      mTabPresets: 'Presets',
      mTabRife: 'Healing Codes',
      mTabVip: 'Wellness Codes',
      mTabCare: 'Breathing Therapy',
      mTabStudio: 'Healing Lab',
      ambOff: 'Ambient Off (Pure)',
      ambPresetTitle: 'Custom soundscape tuned to the active preset',
      ambRainTitle: 'Gentle nature rainfall for deep calm',
      ambStreamTitle: 'Refreshing mountain stream clearing the mind',
      ambWavesTitle: 'Rhythmic ocean surf washing away stress',
      ambCampfireTitle: 'Cozy hearth crackle providing warmth & security',
      ambSingingbowlTitle: 'Tibetan singing bowl for meditation & brainwave release',
      ambForestbirdsTitle: 'Cheerful woodland birds uplifting vitality',
      ambSeagullTitle: 'Coastal waves and soaring seagulls soundscape',
      ambCricketsTitle: 'Nocturnal cricket ASMR for deep restful sleep',
      ambOffTitle: 'Mute ambient soundscapes to focus solely on pure tones',
      badgeFree: 'Free Trial',
      badgeVip: '🔒 VIP Clinical',
      presetPlayStop: 'Play / Stop',

      preset1Title: 'Universal Harmony (432Hz)',
      preset1Desc: 'Natural 432Hz pure tone synchronized with Theta waves (6Hz) and Tibetan bowls for deep physical release and tranquility.',
      preset2Title: 'Cellular Miracle & DNA Repair (528Hz)',
      preset2Desc: 'The 528Hz miracle transformation tone blended with Alpha waves (10Hz) and gentle rain to accelerate stress cleansing.',
      preset3Title: 'Anxiety & Guilt Cleansing (396Hz)',
      preset3Desc: 'Grounding 396Hz Solfeggio tone paired with crackling campfire wood to release deep emotional burdens.',
      preset4Title: 'Cell Voltage (-50mV) Recharge',
      preset4Desc: 'Synthesized with Dr. Chang-Hyuk Park\'s bioelectric Rife frequencies and Schumann resonance (7.83Hz) for cellular restoration.',
      preset5Title: 'Deep Delta REM Sleep',
      preset5Desc: 'Quiets a hyperactive mind into deep slow-wave delta sleep (2Hz) with soothing night rain and gentle crickets.',
      preset6Title: 'Chronic Pain & Musculoskeletal Ease',
      preset6Desc: 'Rife somatic vibration formulation easing neuralgia, joint tension, frozen shoulder, and peripheral nerve stress.',
      preset7Title: 'Autonomic & Vagus Nerve Balance',
      preset7Desc: 'Om tone (136.1Hz), Schumann resonance (7.83Hz), and Code 008 to stimulate parasympathetic recovery.',
      preset8Title: 'Gamma Focus & Brain Vitality',
      preset8Desc: 'Precision 40Hz Gamma wave, Solfeggio 741Hz, and refreshing rain to stimulate mitochondrial energy and cognitive clarity.',

      solfeggioTitle: '2) Healing Solfeggio Frequencies',
      solfeggioDesc: 'Real-time harmonic synthesis of sacred solfeggio tones promoting holistic mind-body rejuvenation.',
      solf396: '396Hz (Liberation)',
      solf396_399: '(Binaural): Left 396Hz / Right 399Hz Delta',
      solf417: '417Hz (Change)',
      solf432: '432Hz (Harmony)',
      solf528: '528Hz (Miracle)',
      solf639: '639Hz (Connection)',
      solf741: '741Hz (Awakening)',
      solfVolume: 'Solfeggio Volume',

      binauralTitle: '1) Binaural Beats Brainwave Entrainment',
      binauralDesc: 'Select target brainwave tone and start listening. (Headphones Recommended)',
      bwDelta: 'Delta Waves (4Hz)',
      bwDeltaSub: 'Deep restorative sleep',
      bwTheta: 'Theta Waves (6Hz)',
      bwThetaSub: 'Meditation & deep calm',
      bwSchumann: 'Schumann Resonance (7.83Hz)',
      bwSchumannSub: 'Earth vibration & healing',
      bwAlpha: 'Alpha Waves (10Hz)',
      bwAlphaSub: 'Stress release & clarity',
      bwBeta: 'Beta Waves (15Hz)',
      bwBetaSub: 'Focus & memory boost',
      lblCarrier: 'Base Tone (Carrier Hz)',
      lblBeat: 'Entrained Beat (Beat Hz)',
      lblBinauralVol: 'Binaural Volume',

      indigoCardTitle: 'Bio-Breathing Sync Timer (Indigo)',
      indigoCardDesc: 'Synchronize mindful breathing with therapeutic frequencies to optimize Heart Rate Variability (HRV).',
      btnGoCare: 'Go to 7-Color Breath Therapy',
      indigoBreathPhase: 'Ready to Inhale',
      indigoBreathSub: '4-2-6-2 Bio-Rhythm',
      indigoBreathHint: 'Launch 7-Color Breath Therapy',

      // Tab 2: NovaCell 100 Healing Codes
      rifeHeroBadge: '100 Whole-Body Bio-Resonance Matrix',
      rifeHeroTitle: 'NovaCell 100 Bio-Energy Healing Codes',
      rifeHeroDesc: 'Explore and listen with one click to 100 whole-body bio-resonance frequencies engineered on Dr. Chang-Hyuk Park\'s cell voltage (-50mV) principles to relieve stress, induce sleep, overcome fatigue, and activate cognitive clarity.',
      rifeHeroStatus: 'Currently Selected Healing Code',
      rifeHeroPlay: 'Play / Stop',
      rifeSearchPlaceholder: 'Search 100 codes by number, theme, or symptom (e.g. 001, sleep, fatigue, brain, 528, nerve)',
      btnPlayHealing: 'Frequency Healing',
      btnPause: 'Pause',
      rifeShowingCount: 'Showing',
      rifeEmptyTitle: 'No matching frequency codes found',
      rifeEmptyDesc: 'Try another search keyword or category filter.',
      rifeCatAll: 'All',
      rifeCatSleep: '🌙 Deep Sleep',
      rifeCatStress: '🧘 Mental Calm',
      rifeCatBody: '⚡ Body Fatigue',
      rifeCatDigest: '🥗 Digestion',
      rifeCatFocus: '🎯 Brain Focus',
      rifeCatVitality: '🌿 Vitality',

      // Tab 3: VIP Clinical Wellness Codes
      vipHeroBadge: 'Exclusive VIP Clinical Library',
      vipSubSeries: 'V01 ~ V090 Full Series (Total 90 Clinical Codes)',
      vipHeroTitle: 'NovaCell VIP Clinical Wellness Codes',
      vipHeroDesc: 'Curated clinical acoustic protocols across 90 diseases and symptoms including cardiovascular, neurological, musculoskeletal, respiratory, and oncology targets based on Dr. Chang-Hyuk Park\'s bioelectric principles.',
      vipHeroStatus: 'Currently Selected VIP Clinical Code',
      vipSearchPlaceholder: 'Search disease, symptom, or VIP code (e.g. Insomnia, Headache, Arthritis, Diabetes, V015, Cancer)',
      btnPlayVip: 'Play VIP Code',
      vipShowingCount: 'Clinical Codes',
      vipEmptyTitle: 'No matching VIP clinical codes found',
      vipEmptyDesc: 'No clinical codes found for this condition. Please try another search term.',
      vipCatAll: 'All Clinical Codes',
      vipCatFocus: '🧠 Neuro ∙ Cardio ∙ Headache',
      vipCatDigest: '🥗 Digestion ∙ Liver ∙ Urinary',
      vipCatStress: '🦴 Musculoskeletal ∙ Joint ∙ Pain',
      vipCatSleep: '🫁 Respiratory ∙ Sleep ∙ Allergy',
      vipDisclaimer: '<i class="ri-information-line"></i> <strong>Medical Notice & Disclaimer:</strong> These VIP sound recipes are designed for cellular bioelectric stabilization and autonomic relaxation support, not for medical diagnosis or curative treatment.',

      // Tab 4: AI Wellness & Breath
      careHeroTitle: '7-Color Chakra Bio-Breathing Therapy',
      careHeroSub: '14-Second Bio-Reset harmonizing chakra colors & solfeggio tones with concentric circle rhythm (4-2-6-2)',
      careCustomTitle: 'Custom Healing Frequency Tuning',
      careCustomDefault: 'Chakra Default (174Hz)',
      btnModalOpen: 'Search All Healing Codes',
      stepIn: 'Inhale',
      stepHold1: 'Hold',
      stepOut: 'Exhale',
      stepHold2: 'Hold',
      soundSyncLabel: 'Solfeggio & Nature Sync',
      fullscreenLabel: 'Fullscreen',
      rewardTitle: '14-Second Bio-Reset Complete!',
      rewardDesc: 'Chakra energy and autonomic balance have been harmonized. Practice 3 or more times daily.',
      btnConfirm: 'Confirm',
      btnTurnLoopOn: 'Turn On Continuous Loop',
      customHzBtnApply: 'Apply',
      customHzBtnDefault: 'Default',
      customHzPlaceholder: 'Enter Hz directly (e.g. 432, 528)',
      btnSearchHealingBreath: '📚 Search NovaCell 100 & VIP Codes & Sync with Breath',
      btnStart14s: 'Start 14-Second Bio-Challenge',
      btnLoopOff: 'Continuous Loop: OFF',
      btnLoopOn: 'Continuous Loop: ON',
      btnDeep1Hour: '🌙 1-Hour Deep Therapy',
      aiSectionTitle: 'NovaCell Bio-Frequency AI Diagnosis',
      aiSectionSub: 'Custom brainwave & healing sound prescription for today\'s condition',
      aiSectionDesc: 'Through a 20-item assessment of sleep quality, stress, tension, and discomfort, we analyze and prescribe today\'s optimal bio-frequencies and nature soundscape.',
      aiSectionBtn: 'Start AI Assessment',
      aiSectionOpenFull: 'Open in Full Window',
      classicTitle: 'Classic 5 Breathing Training Guide',
      classicSub: 'Train purpose-driven breathing rhythms for autonomic balance, stress relief, and deep sleep.',
      classicCoherent: 'Coherent (5-5s)',
      classicCoherentSub: 'Autonomic Balance',
      classicBox: 'Box Breathing (4-4-4-4s)',
      classicBoxSub: 'Stress Relief',
      classicRelax: 'Relaxing (4-7-8s)',
      classicRelaxSub: 'Sleep Induction',
      classicBeginner: 'Beginner (3-3s)',
      classicBeginnerSub: 'Light Training',
      classicVitality: 'Vitality (4-2-4s)',
      classicVitalitySub: 'Fresh Energy',
      classicDesc: 'Breathe deeply in synchronization with the expanding circle tempo and timer to cultivate inner stillness.',
      classicStartBtn: 'Start Classic Breathing',
      classicResetBtn: 'Reset',
      classicCardTitle: 'Click to Start / Pause Classic Breathing Training',
      classicHint: 'Click to Start / Pause',
      classicAlt: 'Indigo Breathing Timer Background',

      // Tab 5: Pro Sound Studio Header & Common
      studioHeaderTitle: 'NovaCell Pro Bio-Frequency Studio',
      studioHeaderSub: '100 Rife Bio-Resonance Frequencies, VIP Wellness Codes V001-V082, 12 Rain Mixers & Lossless WAV Export',
      studioMasterVol: 'Master Volume (Overall Control)',

      // Tab 5: 3) Rife Section
      rifeSectionTitle: '3) NovaCell 100 Bio-Energy Healing Codes',
      rifeSectionDesc: 'Real-time synthesis of Royal Rife frequencies into harmonious healing soundscapes. Experience deep cellular resonance at the end of a tiring day.',
      rifeControllerTitle: 'Therapy Controller',
      rifeControllerSub: 'Select a recipe code and start frequency playback.',
      lblRifeOwnVol: 'Channel Volume',
      txtRifeHold: 'Hold Current Frequency',
      txtRifeIntervalLabel: 'Interval Per Frequency (Switch Interval)',
      rifeInt8: '8s (Scan)',
      rifeInt30: '30s',
      rifeInt60: '1 min',
      rifeInt180: '3 min (Standard)',
      rifeInt300: '5 min (Deep Therapy)',
      rifeTimelineTitle: 'Real-Time Active Frequency Timeline',
      rifeTimelineStandby: 'Standing by (33 Frequency Bands)',
      rifeTimelineHint: '💡 Click any node on the line to instantly jump to that frequency.',
      rifeTabAll: 'All',
      rifeTabSleep: 'Deep Sleep',
      rifeTabStress: 'Relaxation',
      rifeTabBody: 'Fatigue',
      rifeTabDigest: 'Digestion',
      rifeTabFocus: 'Brain Focus',
      rifeTabVitality: 'Vitality',
      rifeSearchPlaceholderTab5: 'Search themes, symptoms, or codes (e.g. Sleep, Shoulder, Focus, 015)',
      rifeLinkBreath: '🫁 Sync & Start Breath Therapy with this Code',

      // Tab 5: 3.5) VIP Section
      vipSectionTitleTab5: '3.5) NovaCell VIP Clinical Wellness Codes (V01-V090)',
      vipDisclaimerTab5: '⚠️ [Medical Notice & Disclaimer]<br>This VIP sound recipe is not a medical device intended to diagnose, treat, cure, or prevent any disease. Based on quantum physics and bio-resonance principles, it is provided solely for cellular voltage modulation, relaxation, and autonomic wellness support. If you suspect or are undergoing treatment for a medical condition, always consult a licensed physician.',
      vipDescTab5: 'Real-time synthesis of curated VIP bio-resonance frequencies. Rebalance mind and body with clinical chord frequencies optimized for each organ system.',
      vipControllerTitle: 'VIP Therapy Controller',
      vipControllerSub: 'Select a VIP code and start clinical frequency playback.',
      lblVipOwnVol: 'VIP Volume',
      txtVipHold: 'Hold Current Frequency',
      txtVipIntervalLabel: 'Interval Per Frequency (Switch Interval)',
      vipInt8: '8s (Scan)',
      vipInt30: '30s',
      vipInt60: '1 min',
      vipInt180: '3 min (Standard)',
      vipInt300: '5 min (Deep Therapy)',
      vipTimelineTitle: 'Real-Time Active VIP Frequency Timeline',
      vipTimelineStandby: 'Standing by (0 Frequency Bands)',
      vipTimelineHint: '💡 Click any node on the line to instantly jump to that frequency.',
      vipTabAll: 'All',
      vipTabSleep: 'Sleep & Respiratory Codes',
      vipTabDigest: 'Digestive & Metabolic Codes',
      vipTabFocus: 'Cardio & Neurological Codes',
      vipTabStress: 'Musculoskeletal Codes',
      vipSearchPlaceholderTab5: 'Search symptoms, VIP codes, or clinical indications (e.g. Respiratory, Glucose, V01)',
      vipLinkBreath: '🫁 Sync & Start Breath Therapy with this VIP Code',

      // Tab 5: 3.7) Custom Studio
      customStudioTitle: '3.7) Custom Frequency Sound Generator (Custom Studio)',
      customStudioDesc: 'Freely enter target frequencies and dwell times (sec/min) to design personalized healing recipes, play live in real-time, and export lossless WAV files.',
      customBtnPlay: 'Play Session',
      customBtnHold: 'Hold Frequency (HOLD)',
      customVolLabel: 'Channel Volume',
      customCard1Header: '1. Sound Code Title & Description Setup',
      customCatPain: '🧘 Pain Relief & Body Balance',
      customCatSleep: '🌙 Deep Sleep & Relaxation',
      customCatFocus: '🧠 Brain Activation & Focus',
      customCatSolfeggio: '🧬 Cell Healing & Solfeggio',
      customCatEnergy: '⚡ Vitality & Energy Reset',
      customCatCustom: '✨ Custom Therapy',
      customCard2Header: '2. Frequency (Hz) Recipe Input',
      customTemplateRec: 'Recommended Templates:',
      tpl120: '120m Reset',
      tplHeadache: 'Headache Care',
      tplSolfeggio: 'Solfeggio',
      tplSleep: 'Deep Sleep',
      btnApplyFreqs: 'Parse & Apply Chips',
      btnSortFreqs: 'Sort Ascending',
      btnUniqueFreqs: 'Remove Duplicates',
      btnClearFreqs: 'Clear All',
      customChipsLabel: 'Configured Frequency Chips (Click to solo listen / ✕ to remove):',
      customCard3Header: '3. Frequency Dwell Time Setup',
      lblInputUnit: 'Input Unit:',
      btnUnitSec: 'Seconds (sec)',
      btnUnitMin: 'Minutes (min)',
      lblQuickSet: 'Quick Presets:',
      cPre8: '8s (Quick Scan)',
      cPre30: '30s',
      cPre60: '1 min',
      cPre180: '3 min (Standard)',
      cPre300: '5 min (Recommended)',
      cPre600: '10 min',
      cPre1800: '30 min (Deep Relaxation)',
      customCard4Header: '4. Real-Time Live Monitoring & Interactive Timeline',
      lblNowFreq: 'Current Output Frequency',
      lblCountdown: 'Frequency Transition Countdown',
      lblSwitchMode: 'Switch Mode',
      badgeAutoSwitch: 'Auto Sequential Switch',
      customCard5Header: '5. My Recipe Archive & Backup',
      btnSaveRecipe: 'Save Current Recipe',
      btnExportJson: 'Export JSON',
      btnImportJson: 'Import JSON',
      customCard6Header: '6. BGM Audio Export (Lossless WAV Rendering)',
      lblExportLen: 'Total Export Duration:',
      lblExportBgm: 'Background Nature BGM:',
      lblBgmVol: 'BGM Ambient Volume:',
      lblMasterVol: 'Master Output Volume:',
      btnRenderBgm: 'Render & Download Custom BGM File (WAV)',
      btnDownloadWav: 'Download Generated Audio File (.WAV)',
      customArchiveEmpty: 'No custom recipes saved in the archive. Configure frequencies in the input box above and click [Save Current Recipe]!',
      customMetaTitlePlaceholder: 'Sound Code Title (e.g. Code C001 : Pain Relief 120m Reset)',
      customMetaDescPlaceholder: 'Write detailed description or therapeutic benefits of this soundscape',
      customFreqPlaceholder: 'Enter frequencies (Hz) separated by comma, space, or newline (e.g. 7.83, 10, 20, 6000, 10000, 5000, 880, 787, 727, 528, 432, 136.1, 40, 3.5, 0.5)',
      bgmNone: 'Mute (Frequency Only)',
      bgmRain: 'Rain Ambience',
      bgmWaves: 'Ocean Waves',
      bgmForest: 'Forest Birds',
      bgmWhite: 'White Noise',
      dur5m: '5 min (Short Meditation)',
      dur30m: '30 min (Standard Session)',
      dur60m: '60 min / 1 hour (Full Session)',
      dur3h: '3 hours (Deep Sleep & Rest)',
      dur9h: '9 hours (All-Night Sleep)',
      durAuto: 'Full Recipe 1 Cycle (Calculated)',

      // Tab 5: 4) Rain Ambience & Nature
      rainSectionTitle: '4) 12 HD Rain & Nature Soundscapes (Rain Ambience)',
      rainSectionDesc: 'Blend therapeutic rain, stream, and ocean ambiances with healing frequencies to curate your personalized sound sanctuary.',
      rainMasterLabel: 'Nature Ambience Master Volume',
      rainSpecialHeader: '12 HD Real Rain Sound Collection',
      lblQuickSelect: 'Quick Select:',
      preHeavy: 'Heavy Rain',
      preWhite: 'Sleep White',
      preThunder: 'Thunderstorm',
      preRelax: 'Relaxing',
      preWindow: 'Window Drops',
      preCalm: 'Calm Meditation',
      preOff: 'Mute Rain',
      rain01: '01. Heavy Rain & Nature Sounds',
      rain02: '02. White Noise Sleep Rain',
      rain03: '03. Relaxing Ambient Rain',
      rain04: '04. Thunderstorm Rain',
      rain05: '05. Deep Extended Rain Ambience',
      rain06: '06. Window Rain Droplets',
      rain07: '07. Calming Healing Rain Loop',
      rain08: '08. Grand Earth Soaking Rain',
      rain09: '09. Gentle Midday Rain',
      rain10: '10. 3D Spatial Reality Rain',
      rain11: '11. Peaceful Meditation Rain',
      rain12: '12. Forest Foliage Rain',
      nature8Header: 'Classic Nature Sounds & Healing Instruments (8 Channels)',
      natSynthRain: 'Synthesized Rain',
      natWaves: 'Ocean Waves',
      natCampfire: 'Warm Campfire',
      natSeagull: 'Coastal Seagulls',
      natSingingbowl: 'Tibetan Singing Bowl',
      natStream: 'Clear Valley Stream',
      natForestBirds: 'Deep Forest Birds',
      natMountainBirds: 'Mountain Songbirds',

      // Tab 5: 5) Lossless Audio Export
      exportSectionTitle: 'YouTube BGM Export (WAV)',
      exportSectionDesc: 'Instantly download high-definition audio (WAV) preserving configured volume and frequencies for video production sources.',
      exportDurationLabel: 'Select Recording / Export Duration',
      exportBtnStart: 'Start HD WAV Download',
      opt5m: '5 Min (Loop for Video Editing)',
      opt30m: '30 Min (Meditation)',
      opt1h: '1 Hour (Focus & Sleep)',
      opt3h: '3 Hours (Autonomic Regulation & Long Therapy)',
      opt9h: '9 Hours (Deep Sleep & All-Night White Noise)',
      oscSectionTitle: '5) Precision Frequency Generator (Custom Oscillator)',
      oscSectionDesc: 'Professional tool to synthesize and modulate micro-frequencies (0.1Hz steps) across Sine, Triangle, Square, and Sawtooth waveforms.',

      // Tab 1 Preset card footers
      preset1Footer: '432Hz ∙ Theta 6Hz ∙ Singing Bowl',
      preset2Footer: '528Hz ∙ Alpha 10Hz ∙ Window Rain',
      preset3Footer: '396Hz ∙ Delta 3.5Hz ∙ Campfire',
      preset4Footer: 'Code 001 ∙ 528Hz ∙ Stream & Bowl',
      preset5Footer: 'Code 003 ∙ Delta 2Hz ∙ Night Rain & Crickets',
      preset6Footer: 'Code 013 ∙ 432Hz ∙ Stream & Bowl',
      preset7Footer: '432Hz ∙ Schumann 7.83Hz ∙ Birds & Stream',
      preset8Footer: '40Hz Gamma ∙ 741Hz ∙ Code 072 ∙ Rain',

      // Tab 1 & Tab 4 Titles & tooltips
      binauralPlayBtnTitle: 'Start / Pause Binaural Beats',
      indigoCardLinkTitle: 'Click to go to 7-Color Breath Therapy',
      classicStatusReady: 'READY',
      btnClearCode: 'Clear',
      btnClearCodeTitle: 'Clear active code',

      // Custom Studio extra keys
      customBtnPlayTitle: 'Start / Pause Custom Frequency Session',
      customBtnHoldTitle: 'Hold Current Frequency (Pause Auto Switch)',
      unitMin: 'min',
      unitSec: 'sec',
      calcTotalPrefix: 'Total ',
      calcFreqUnit: ' Frequencies × Each ',
      calcEachSuffix: ' Duration',
      calcTotalEstimate: 'Estimated 1 Cycle Duration: ',
      customNowTierDefault: 'Schumann Resonance ∙ Triple Binaural Beat Synthesis',
      customNowStepDefault: 'Frequency Step 1 / 15',
      customExportRendering: 'Rendering High-Definition Offline Audio...',
      exportProgressReady: 'Preparing audio rendering... (0%)',

      // Studio Header & Master
      badgeReviewMode: '👑 Review Mode Active',
      badgeVipActive: 'All VIP Features Active',
      masterPlayTitle: 'Master Play / Pause',
      masterMuteTitle: 'Master Sound Mute / Unmute',
      rifePlayBtnTitle: 'Frequency Therapy Play / Pause',

      // Sticky Bottom Player
      stickyDemo: 'Demo Sound',
      stickyVip: 'VIP Clinical',
      stickyTimer: 'Timer',
      stickyAmbient: 'Ambient',
      timer15: '15 Min',
      timer30: '30 Min',
      timer60: '60 Min',
      timerOff: 'Off',

      // VIP Modal
      vipModalTitle: 'NovaCell VIP Member Exclusive',
      vipModalFeature: 'NovaCell Bio-Frequency VIP Pass required.',
      vipBenefit1: '<strong>100 Rife Bio-Resonance Protocols</strong> & cell voltage (-50mV) restoration',
      vipBenefit2: '<strong>VIP Clinical Codes V001-V090</strong> instant unlocked access',
      vipBenefit3: '<strong>12 HD Nature Sounds & Multi-Track Mixer</strong> customized control',
      vipBenefit4: '<strong>YouTube Healing BGM / Lossless WAV</strong> unlimited export & download',
      vipLoginBtn: 'Log In with NovaCell Account',
      vipPassBtn: 'Get NovaCell VIP Pass',
      vipPhone: 'Phone Support: +82-10-9726-7012',
      vipClose: 'Continue in Demo Mode',
      vipPriceSub: '100 Rife Protocols · VIP Clinical Codes · Unlimited Lossless Audio',
      vipPriceAmount: 'US $300',
      vipPriceTerm: '/ 1-Year Unlimited (KRW ₩330,000)',
      vipPassBtn: 'Get 1-Year VIP Pass ($300 / ₩330k)',

      // Modals & Drawer
      modalSearchTitle: 'NovaCell 100 & VIP Healing Code Search',
      modalSearchSub: 'Search across 190 validated healing frequency codes and synchronize with breath therapy.',
      modalSearchPlaceholder: 'Search code, disease, or symptom (e.g. 17, sleep, insomnia, liver, cancer, stomach, pain)...',
      modalTabAll: 'All (190)',
      modalTabRife: '🌿 NovaCell 100 Healing Codes (100)',
      modalTabVip: '👑 VIP Clinical Codes (90)',
      modalHint: 'Click to synchronize your breath therapy with this healing frequency',
      drawerTitle: 'Healing Navigation',
      drawerGate: 'Welcome Gate (Studio Guide)',
      drawerWellnessCheck: 'AI Bio-Frequency Check',

      // Toast Feedback
      toastSwitchedEn: '✨ English mode enabled',
      toastSwitchedKo: '✨ 한국어 모드로 전환되었습니다'
    }
  };

  // 2. VIP 90개 임상 코드 영문 질환명 매핑
  const VIP_TITLES_EN = {
    'V001': 'Breast Cancer Protocol',
    'V002': 'Bladder Cancer (Transitional Cell)',
    'V003': 'Prostate Cancer Protocol',
    'V004': 'Liver Cancer, Cirrhosis & Jaundice',
    'V005': 'Stomach, Esophageal & Colorectal Cancer',
    'V006': 'Pancreatic & Bile Duct Cancer',
    'V007': 'Lung Cancer Protocol',
    'V008': 'Brain Tumor & Glioma Protocol',
    'V009': 'Bronchitis & Respiratory Relief',
    'V010': 'Pneumonia Support Protocol',
    'V011': 'Asthma & Bronchospasm Relief',
    'V012': 'Tuberculosis Support',
    'V013': 'COPD & Pulmonary Emphysema',
    'V014': 'Broad-Spectrum Bacterial Infection',
    'V015': 'Staphylococcus & Streptococcus',
    'V016': 'E. Coli, Pseudomonas & Mycoplasma',
    'V017': 'Mold, Candida & Yeast Fungus',
    'V018': 'Tinea, Ringworm & Athlete\'s Foot',
    'V019': 'Aspergillus & Cryptococcus',
    'V020': 'Comprehensive Parasite Detox',
    'V021': 'Roundworms & Pinworms',
    'V022': 'Liver Flukes & Blood Flukes',
    'V023': 'Hookworms & Threadworms',
    'V024': 'Giardia Lamblia (Chronic Diarrhea)',
    'V025': 'Hookworms & Demodex Mites',
    'V026': 'Heartworms & Blood Parasites',
    'V027': 'Trichinella Muscle Parasites',
    'V028': 'Acne & Facial Blemishes',
    'V029': 'Psoriasis Relief',
    'V030': 'Atopic Dermatitis & Eczema',
    'V031': 'Herpes Simplex & Zoster (Shingles)',
    'V032': 'Epstein-Barr Virus (EBV) & Mono',
    'V033': 'Cytomegalovirus (CMV)',
    'V034': 'Human Papillomavirus (HPV)',
    'V035': 'Influenza & Cold Viruses',
    'V036': 'Hepatitis A, B, C Viruses',
    'V037': 'Borrelia (Lyme Disease)',
    'V038': 'Bartonella & Babesia',
    'V039': 'Chronic Fatigue Syndrome (CFS)',
    'V040': 'Fibromyalgia & Whole-Body Pain',
    'V041': 'Rheumatoid Arthritis Protocol',
    'V042': 'Osteoarthritis & Cartilage Health',
    'V043': 'Gout & Uric Acid Cleansing',
    'V044': 'Spinal Disc & Sciatica Nerve Pain',
    'V045': 'Frozen Shoulder & Rotator Cuff',
    'V046': 'Carpal Tunnel Syndrome & Tendonitis',
    'V047': 'Migraine & Tension Headaches',
    'V048': 'Trigeminal Neuralgia & Facial Pain',
    'V049': 'Bell\'s Palsy & Facial Nerve Balance',
    'V050': 'Stroke Recovery & Neuro-Rehabilitation',
    'V051': 'Parkinson\'s & Tremor Balance',
    'V052': 'Alzheimer\'s & Cognitive Enhancement',
    'V053': 'Multiple Sclerosis (MS) Protocol',
    'V054': 'Peripheral Neuropathy & Numbness',
    'V055': 'Insomnia & Sleep Architecture',
    'V056': 'Depression & Emotional Elevation',
    'V057': 'Anxiety, Panic & Stress Relief',
    'V058': 'ADHD & Executive Focus',
    'V059': 'Autonomic Nervous System & Vagus Nerve',
    'V060': 'Hypertension & Blood Pressure Balance',
    'V061': 'Arteriosclerosis & Vascular Elasticity',
    'V062': 'Arrhythmia & Heart Rhythm Support',
    'V063': 'Chronic Gastritis & Peptic Ulcer',
    'V064': 'GERD & Acid Reflux Relief',
    'V065': 'Irritable Bowel Syndrome (IBS)',
    'V066': 'Ulcerative Colitis & Crohn\'s Support',
    'V067': 'Fatty Liver & Hepatic Cleansing',
    'V068': 'Gallstones & Cholecystitis Relief',
    'V069': 'Chronic Kidney Disease & Nephritis',
    'V070': 'Kidney Stones & Urinary Tract Health',
    'V071': 'Cystitis & Bladder Inflammation',
    'V072': 'Benign Prostatic Hyperplasia (BPH)',
    'V073': 'Type 2 Diabetes & Glucose Metabolism',
    'V074': 'Hypothyroidism & Hashimoto\'s Support',
    'V075': 'Hyperthyroidism & Graves\' Support',
    'V076': 'Adrenal Fatigue & Cortisol Balance',
    'V077': 'Lymphatic Drainage & Edema Reduction',
    'V078': 'Systemic Detoxification & Heavy Metals',
    'V079': 'Macular Degeneration & Eye Strain',
    'V080': 'Tinnitus & Auditory Nerve Support',
    'V081': 'Sinusitis & Rhinitis Relief',
    'V082': 'Periodontal Disease & Oral Health',
    'V083': 'Menopause & Hormonal Balance',
    'V084': 'Dysmenorrhea & Pelvic Pain',
    'V085': 'Hair Loss & Scalp Circulation',
    'V086': 'Obesity & Metabolic Activation',
    'V087': 'Sarcopenia & Muscle Vitality',
    'V088': 'Post-Viral Recovery & Long Covid',
    'V089': 'Cellular Anti-Aging & Longevity',
    'V090': 'Whole-Body Energy Field Alignment'
  };

  // 2.1. VIP 90개 임상 코드 영문 상세 설명 매핑
  const VIP_DESCS_EN = {
    'V001': 'Inhibition of breast cancer cell proliferation, breakdown of tumor nodules, lymph circulation and systemic toxin elimination.',
    'V002': 'Suppression of bladder mucosal tumors, soothing of chronic urinary tract inflammation, and relief from painful urination.',
    'V003': 'Targeted prostate cancer cell regulation, relief of urethral pressure from BPH, and enhancement of pelvic blood flow.',
    'V004': 'Detoxification of jaundice, relaxation of hardened liver tissue, suppression of liver cancer cells, and systemic immune boost.',
    'V005': 'Inhibition of esophageal, gastric, and colorectal mucosal tumors, H. pylori eradication, and digestive cancer cell resonance.',
    'V006': 'Targeted support for pancreatic adenocarcinoma and laryngeal tumor cells, pain reduction, and metastasis defense.',
    'V007': 'Suppression of bronchial and lung cancer cell proliferation, tumor adhesion disruption, and relief of breathing discomfort.',
    'V008': 'Inhibition of malignant brain tumor cells (glioma), disruption of tumor vascular networks, and neural tissue protection.',
    'V009': 'Alleviation of bronchial inflammation, relief from persistent cough, mucus clearance, and respiratory mucosal soothing.',
    'V010': 'Inhibition of alveolar bacterial/viral infection, reduction of high fever and pulmonary edema, and lung recovery.',
    'V011': 'Relief of bronchial spasms, clearing of airway constriction, and stabilization of hyperactive allergic immune responses.',
    'V012': 'Suppression of Mycobacterium tuberculosis, resolution of pulmonary calcifications, and restorative lung care.',
    'V013': 'Alleviation of chronic alveolar damage and airway obstruction, relief of chest tightness, and enhanced oxygenation.',
    'V014': 'Broad-spectrum antimicrobial resonance targeting drug-resistant bacterial strains and acute infectious inflammation.',
    'V015': 'Neutralization of Staphylococcus aureus and Streptococcus, purifying purulent skin and mucosal infections.',
    'V016': 'Elimination of urinary E. coli, opportunistic Pseudomonas aeruginosa, and cell-wall-deficient Mycoplasma pathogens.',
    'V017': 'Eradication of Candida albicans, systemic mold overgrowth, and fungal yeast dysbiosis across mucous membranes.',
    'V018': 'Targeted elimination of Trichophyton fungal spores causing athlete\'s foot, tinea pedis, and ringworm skin flare-ups.',
    'V019': 'Clearance of deep Aspergillus mold infections and opportunistic Cryptococcus fungal spores from respiratory tissue.',
    'V020': 'Comprehensive parasitic pathogen resonance neutralizing microscopic protozoa and systemic flukes across organs.',
    'V021': 'Purification of intestinal roundworms (Ascaris) and pinworms (Enterobius), alleviating nocturnal anal pruritus.',
    'V022': 'Targeted elimination of biliary liver flukes (Clonorchis) and blood flukes (Schistosoma), detoxifying bile ducts.',
    'V023': 'Cleansing of parasitic hookworms (Ancylostoma) and threadworms (Strongyloides), preventing nutrient depletion.',
    'V024': 'Eradication of Giardia lamblia protozoan cysts in the small intestine, resolving chronic watery diarrhea.',
    'V025': 'Elimination of facial Demodex folliculorum mites, clearing inflammatory rosacea, sebum congestion, and skin redness.',
    'V026': 'Cleansing of blood-borne parasites, microfilariae, and systemic vascular pathogens to restore pure circulation.',
    'V027': 'Targeted neutralization of Trichinella spiralis muscle encysted larvae, relieving chronic muscular pain and fever.',
    'V028': 'Purification of Propionibacterium acnes, regulation of excess sebum secretion, and soothing of purulent facial acne.',
    'V029': 'Soothing of autoimmune skin hyper-proliferation, alleviation of silver psoriatic plaques, and skin renewal.',
    'V030': 'Stabilization of allergic mast cells, soothing of severe atopic eczema itching, and rebuilding skin barrier integrity.',
    'V031': 'Suppression of Varicella Zoster (shingles) and Herpes Simplex nerve flare-ups, relieving acute neuropathic burning.',
    'V032': 'Suppression of Epstein-Barr Virus (EBV) reactivation, resolving chronic mono-induced lymphadenopathy and fatigue.',
    'V033': 'Inhibition of Cytomegalovirus (CMV) replication, protecting sensory and autonomic nerve cells from viral damage.',
    'V034': 'Targeted resonance against Human Papillomavirus (HPV) strains, preventing abnormal mucosal and cervical cell dysplasia.',
    'V035': 'Rapid inactivation of influenza and common cold viruses, reducing acute high fever, sore throat, and body chills.',
    'V036': 'Suppression of Hepatitis A, B, and C viral replication, reducing ALT/AST liver enzymes and mitigating inflammation.',
    'V037': 'Disruption of Borrelia burgdorferi spirochetes (Lyme Disease), clearing joint aches, brain fog, and chronic fatigue.',
    'V038': 'Neutralization of tick-borne co-infections (Bartonella and Babesia), relieving microvascular pain and neurological chills.',
    'V039': 'Restoration of cellular mitochondrial ATP synthesis, overcoming profound Chronic Fatigue Syndrome (CFS/ME).',
    'V040': 'Harmonization of central pain sensitization pathways, relieving widespread tender point pain and fibromyalgia stiffness.',
    'V041': 'Downregulation of autoimmune rheumatoid synovial inflammation, alleviating joint swelling and morning stiffness.',
    'V042': 'Stimulation of cartilage chondrocyte regeneration, lubrication of degenerated joints, and arthritic ache relief.',
    'V043': 'Promotion of renal uric acid excretion, dissolution of painful urate crystals, and acute gouty joint inflammation relief.',
    'V044': 'Decompression of herniated lumbar/cervical discs, relieving sciatic nerve impingement, leg numbness, and lower back ache.',
    'V045': 'Relief of adhesive capsulitis (frozen shoulder) adhesions, restoring rotator cuff mobility and nocturnal shoulder ease.',
    'V046': 'Relief of carpal tunnel median nerve entrapment, reducing wrist flexor tendon inflammation and finger tingling.',
    'V047': 'Constriction of dilated cranial vessels, release of suboccipital muscular spasms, and acute migraine soothing.',
    'V048': 'Soothing of hyper-sensitized trigeminal nerve root branches, alleviating electric-shock facial and jaw pain.',
    'V049': 'Stimulation of seventh cranial (facial) nerve remyelination, restoring symmetric facial muscular motor tone.',
    'V050': 'Neuroplastic recovery after ischemic stroke, enhancing cerebral collateral circulation and motor pathway reactivation.',
    'V051': 'Modulation of basal ganglia and substantia nigra dopamine circuits, steadying resting tremors and muscular rigidity.',
    'V052': 'Clearance of neurotoxic beta-amyloid plaques, stimulating acetylcholine synthesis and enhancing cognitive recall.',
    'V053': 'Protection of the oligodendrocyte myelin sheath against autoimmune attack, slowing multiple sclerosis progression.',
    'V054': 'Regeneration of peripheral nerve axons and microvascular supply, soothing diabetic numbness, burning, and tingling.',
    'V055': 'Induction of restorative slow-wave delta sleep (0.5-3Hz), balancing melatonin synthesis and curbing nocturnal awakenings.',
    'V056': 'Stimulation of prefrontal serotonin and dopamine neuro-circuits, lifting dark depressive mood and emotional numbness.',
    'V057': 'Downregulation of amygdala hyper-reactivity, calming autonomic hyperarousal, chest palpitations, and acute panic.',
    'V058': 'Optimization of prefrontal norepinephrine pathways, improving sustained executive attention and cognitive control.',
    'V059': 'Activation of the ventral vagal parasympathetic complex, restoring heart rate variability (HRV).',
    'V060': 'Vasodilation of peripheral arterioles, modulation of vascular smooth muscle tone, and systolic blood pressure ease.',
    'V061': 'Restoration of arterial endothelial elasticity, reduction of oxidized LDL vascular wall plaque accumulation.',
    'V062': 'Stabilization of cardiac sinoatrial and atrioventricular electrical nodes, calming premature ventricular contractions.',
    'V063': 'Eradication of Helicobacter pylori in gastric mucosa, promoting epithelial repair for erosive gastritis and ulcers.',
    'V064': 'Strengthening lower esophageal sphincter tone, reducing gastric acid reflux, and soothing retrosternal heartburn.',
    'V065': 'Regulation of brain-gut axis neurotransmitters, relieving irritable bowel cramping, bloating, and spastic motility.',
    'V066': 'Deep anti-inflammatory resonance for colonic mucosal ulcers (Ulcerative Colitis & Crohn\'s), easing bloody stools.',
    'V067': 'Activation of hepatic lipid metabolism and beta-oxidation, clearing visceral fat accumulation in steatohepatitis.',
    'V068': 'Promotion of biliary tract smooth muscle relaxation, helping dissolve cholesterol gallstones and biliary colic.',
    'V069': 'Enhancement of glomerular filtration rate (GFR), reducing renal tubular inflammation and systemic albuminuria.',
    'V070': 'Spasmolytic relaxation of ureteral smooth muscle, assisting natural passage and dissolution of calcium oxalate stones.',
    'V071': 'Purification of bladder mucosal urothelium from bacterial pathogens, relieving acute urethral burning and urgency.',
    'V072': 'Inhibition of dihydrotestosterone (DHT) prostatic proliferation, reducing gland hypertrophy and restoring urine flow.',
    'V073': 'Enhancement of peripheral insulin receptor sensitivity (GLUT-4), assisting blood glucose clearance and metabolic balance.',
    'V074': 'Stimulation of thyroid follicular thyroxine (T3/T4) production, overcoming metabolic sluggishness and chilliness.',
    'V075': 'Calming of hyperactive autoimmune TSH-receptor antibodies (Graves\'), soothing cardiac tachycardia and tremors.',
    'V076': 'Replenishment of exhausted adrenal glands, rebalancing diurnal cortisol curves to conquer morning exhaustion.',
    'V077': 'Enhancement of thoracic duct and peripheral lymphatic drainage, clearing fluid retention, puffiness, and limb lymphedema.',
    'V078': 'Mobilization and chelation of heavy metals (lead, mercury, cadmium), stimulating glutathione-mediated cellular detox.',
    'V079': 'Microvascular nourishment to macular retinal pigment epithelium, reducing retinal oxidative stress and visual fatigue.',
    'V080': 'Rebalancing of cochlear auditory nerve hair cells and microvascular perfusion, reducing high-pitch ringing tinnitus.',
    'V081': 'Decongestion of maxillary and frontal paranasal sinus cavities, opening obstructed nasal breathing passages.',
    'V082': 'Eradication of periodontal Porphyromonas gingivalis bacteria, soothing gum bleeding, pocket inflammation, and bone loss.',
    'V083': 'Harmonization of hypothalamic-pituitary-ovarian axis, mitigating menopausal hot flashes, night sweats, and mood swings.',
    'V084': 'Inhibition of uterine prostaglandin excess, relieving acute dysmenorrhea, pelvic cramping, and cyclic back pain.',
    'V085': 'Microcirculatory stimulation of dermal papilla hair follicles, counteracting follicular miniaturization and thinning.',
    'V086': 'Activation of brown adipose tissue thermogenesis, stimulating resting basal metabolic rate and lipolysis.',
    'V087': 'Stimulation of satellite cell muscle protein synthesis, preventing age-related sarcopenia and rebuilding physical stamina.',
    'V088': 'Resolution of post-viral systemic inflammatory sequelae, clearing persistent brain fog, microvascular chills, and fatigue.',
    'V089': 'Activation of telomerase and cellular sirtuins, reducing systemic senescence and promoting whole-body longevity.',
    'V090': 'Harmonization of human bioelectric voltage (-50mV) across all 12 meridian energetic pathways and auric fields.'
  };

  // 3. 현재 언어 상태 관리 (URL 파라미터 ?lang= 우선, 그 다음 localStorage, 기본값: 'ko')
  let currentLang = 'ko';
  try {
    const urlParams = (typeof window !== 'undefined' && window.location) ? new URLSearchParams(window.location.search) : null;
    const urlLang = urlParams ? urlParams.get('lang') : null;
    if (urlLang === 'en' || urlLang === 'ko') {
      currentLang = urlLang;
      localStorage.setItem('novacell_sound_lang', urlLang);
    } else {
      const saved = localStorage.getItem('novacell_sound_lang');
      if (saved === 'en' || saved === 'ko') {
        currentLang = saved;
      }
    }
  } catch (e) {}

  window.currentLang = currentLang;
  window.NOVA_I18N = NOVA_I18N;
  window.VIP_TITLES_EN = VIP_TITLES_EN;
  window.VIP_DESCS_EN = VIP_DESCS_EN;

  // 4. 번역 문자열 조회 헬퍼
  function t(key) {
    const lang = window.currentLang || 'ko';
    if (NOVA_I18N[lang] && NOVA_I18N[lang][key] !== undefined) {
      return NOVA_I18N[lang][key];
    }
    if (NOVA_I18N.ko && NOVA_I18N.ko[key] !== undefined) {
      return NOVA_I18N.ko[key];
    }
    return key;
  }
  window.t = t;

  // 5. Rife 100 제목 및 설명 다국어 조회
  window.getBilingualRifeTitle = function (code, originalTitle) {
    if (window.currentLang !== 'en') {
      return originalTitle ? originalTitle.replace(/^Code\s*[0-9]+\s*:\s*/i, '') : `Code ${code}`;
    }
    if (!originalTitle) return `Code ${code}`;
    const match = originalTitle.match(/\(([^)]+)\)/);
    if (match && match[1]) {
      return match[1].replace(/테마|Theme/gi, '').trim();
    }
    return originalTitle.replace(/^Code\s*[0-9]+\s*:\s*/i, '');
  };

  window.getBilingualRifeDesc = function (code, item) {
    if (window.currentLang !== 'en') {
      let desc = (item && item.desc) || '';
      if (desc.includes('[주파수 구성')) desc = desc.split('[주파수 구성')[0].trim();
      return desc.replace(/\n/g, ' ');
    }
    const title = (item && item.title) || '';
    const match = title.match(/\(([^)]+)\)/);
    const theme = (match && match[1]) ? match[1].replace(/테마|Theme/gi, '').trim() : `Protocol ${code}`;
    const cat = (item && item.category) || 'vitality';
    const catDescriptions = {
      sleep: `Targeted bio-resonance formulation for ${theme}, circadian rhythm balancing, and deep restorative sleep.`,
      stress: `Acoustic frequency resonance for ${theme}, emotional tranquility, and autonomic nervous system release.`,
      body: `Targeted bio-energy waves for ${theme}, muscular tension reduction, and systemic cellular vitality.`,
      digest: `Harmonic bio-resonance for ${theme}, digestive comfort, and metabolic organ equilibrium.`,
      focus: `Precision acoustic brainwave entrainment for ${theme}, mental clarity, and cognitive alertness.`,
      vitality: `Revitalizing bioelectric resonance for ${theme}, cellular voltage replenishment, and daily energy.`,
      pain: `Clinical resonance protocol for ${theme}, soothing physical discomfort, and easing somatic strain.`,
      solfeggio: `Pure harmonic solfeggio resonance for ${theme}, DNA miracle balance, and holistic equilibrium.`
    };
    return catDescriptions[cat] || `Targeted bio-resonance frequency formulation for ${theme} and cellular voltage restoration.`;
  };

  // 6. VIP 제목 및 설명 다국어 조회
  window.getBilingualVipTitle = function (code, originalTitle) {
    if (window.currentLang === 'en') {
      const enTitle = VIP_TITLES_EN[code];
      if (enTitle) return enTitle;
    }
    return originalTitle ? originalTitle.replace(/^Code\s*V[0-9]+\s*:\s*/i, '') : `Code ${code}`;
  };

  window.getBilingualVipDesc = function (code, item) {
    if (window.currentLang !== 'en') {
      let desc = (item && item.desc) || '';
      if (desc.includes('[주파수 구성')) desc = desc.split('[주파수 구성')[0].trim();
      return desc.replace(/\n/g, ' ');
    }
    if (VIP_DESCS_EN[code]) return VIP_DESCS_EN[code];
    return `Clinical acoustic resonance protocol for ${window.getBilingualVipTitle(code, item ? item.title : '')}, supporting cellular voltage and vitality.`;
  };

  // 7. 카테고리 라벨 조회
  window.getBilingualRifeCatLabel = function (cat) {
    const isEn = window.currentLang === 'en';
    const map = {
      sleep: isEn ? '🌙 Deep Sleep' : '🌙 깊은 수면',
      stress: isEn ? '🧘 Mental Calm' : '🧘 정서 안정',
      body: isEn ? '⚡ Body Fatigue' : '⚡ 신체 피로',
      digest: isEn ? '🥗 Digestion & Metabolism' : '🥗 소화 대사',
      focus: isEn ? '🎯 Brain Focus' : '🎯 두뇌 집중',
      vitality: isEn ? '🌿 Vitality' : '🌿 일상 활력',
      pain: isEn ? '🩹 Pain Relief' : '🩹 통증 완화',
      solfeggio: isEn ? '✨ Solfeggio' : '✨ 솔페지오'
    };
    return map[cat] || (isEn ? '🧬 Bio Resonance' : '🧬 바이오 공명');
  };

  window.getBilingualVipCatLabel = function (cat) {
    const isEn = window.currentLang === 'en';
    const map = {
      focus: isEn ? '🧠 Neuro ∙ Cardio ∙ Headache' : '🧠 뇌신경 ∙ 심혈관 ∙ 두통',
      digest: isEn ? '🥗 Digestion ∙ Liver ∙ Urinary' : '🥗 소화대사 ∙ 간 ∙ 비뇨기',
      sleep: isEn ? '🫁 Respiratory ∙ Sleep ∙ Immune' : '🫁 호흡기 ∙ 수면 ∙ 면역',
      stress: isEn ? '🦴 Musculoskeletal ∙ Joint ∙ Pain' : '🦴 근골격 ∙ 관절 ∙ 통증'
    };
    return map[cat] || (isEn ? '👑 Clinical Code' : '👑 임상 코드');
  };

  // 8. 언어 일괄 적용 엔진 (DOM 갱신 및 동적 렌더러 동기화)
  function applyLanguage(lang) {
    if (lang !== 'ko' && lang !== 'en') lang = 'ko';
    window.currentLang = lang;
    currentLang = lang;
    document.documentElement.lang = lang;

    try {
      localStorage.setItem('novacell_sound_lang', lang);
    } catch (e) {}

    // A. 모든 언어 스위치 버튼 UI 동기화
    document.querySelectorAll('.nc-lang-toggle').forEach(btn => {
      const optKo = btn.querySelector('.lang-ko');
      const optEn = btn.querySelector('.lang-en');
      if (optKo) optKo.classList.toggle('active', lang === 'ko');
      if (optEn) optEn.classList.toggle('active', lang === 'en');
    });

    // B. data-i18n 태그 텍스트/HTML 갱신
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.dataset.i18n;
      const val = t(key);
      if (val !== undefined && val !== key) {
        if (val.includes('<') || el.dataset.i18nHtml === 'true') {
          el.innerHTML = val;
        } else {
          el.textContent = val;
        }
      }
    });

    // C. data-i18n-placeholder 갱신
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.dataset.i18nPlaceholder;
      const val = t(key);
      if (val && val !== key) {
        el.placeholder = val;
      }
    });

    // D. data-i18n-title 갱신
    document.querySelectorAll('[data-i18n-title]').forEach(el => {
      const key = el.dataset.i18nTitle;
      const val = t(key);
      if (val && val !== key) {
        el.title = val;
      }
    });

    // D2. data-i18n-alt 갱신
    document.querySelectorAll('[data-i18n-alt]').forEach(el => {
      const key = el.dataset.i18nAlt;
      const val = t(key);
      if (val && val !== key) {
        el.alt = val;
      }
    });

    // E. 남색 썸네일 포스터 언어 동기화 (Tab 1 & Tab 4)
    const posterSrc = lang === 'en' ? 'breathing/thumbs/en/INDIGO.png' : 'breathing/thumbs/ko/indigo.png';
    const tab1Poster = document.querySelector('#tab1-breathing-card .breathing-media-poster');
    if (tab1Poster) tab1Poster.src = posterSrc;
    const classicPoster = document.querySelector('#classic-breathing-card .breathing-media-poster');
    if (classicPoster) classicPoster.src = posterSrc;

    // F. 7색 호흡 테라피 가이드 언어 동기화 (breathingGuide.js)
    if (typeof window.setBreathingLanguage === 'function') {
      window.setBreathingLanguage(lang);
    }

    // G. NovaCell 100 및 VIP 임상 페이지 실시간 재렌더링
    if (typeof window.renderRife100Page === 'function') {
      window.renderRife100Page(window.currentRifeCat || 'all', window.currentRifeSearch || '');
    }
    if (typeof window.renderVipPage === 'function') {
      window.renderVipPage(window.currentVipCat || 'all', window.currentVipSearch || '');
    }

    // H. 통합 힐링 모달이 열려 있는 경우 모달 재렌더링
    const modal = document.getElementById('modal-healing-code-search');
    if (modal && modal.style.display === 'flex' && typeof window.renderHealingCodesModal === 'function') {
      window.renderHealingCodesModal();
    }

    // I. 히어로 배너 버튼 텍스트 동기화
    const heroBtnText = document.getElementById('hero-play-btn-text');
    if (heroBtnText) {
      const isPlaying = window.engine && window.engine.isPlaying;
      heroBtnText.textContent = isPlaying ? t('heroStopBtn') : t('heroPlayBtn');
    }

    // J. 하단 고정 플레이어 뱃지 텍스트 동기화
    const stickyBadge = document.getElementById('sticky-track-badge');
    if (stickyBadge) {
      const isVip = stickyBadge.classList.contains('vip');
      stickyBadge.textContent = isVip ? t('stickyVip') : t('stickyDemo');
    }

    // K. VIP 회원 배지 및 UI 동기화
    if (typeof window.updateVipUI === 'function') {
      window.updateVipUI();
    }

    // L. Tab 5 Rife & VIP 활성 상세 카드 설명 실시간 언어 동기화 (기본 코드 fallback 지원)
    const activeRife = window.activeRife100Code || '001';
    if (window.rifeRecipes && window.rifeRecipes[activeRife]) {
      const rItem = window.rifeRecipes[activeRife];
      const rTitle = document.getElementById('rife-card-title');
      const rDesc = document.getElementById('rife-card-desc');
      if (rItem) {
        if (rTitle && typeof window.getBilingualRifeTitle === 'function') rTitle.textContent = window.getBilingualRifeTitle(activeRife, rItem.title);
        if (rDesc && typeof window.getBilingualRifeDesc === 'function') rDesc.innerHTML = window.getBilingualRifeDesc(activeRife, rItem);
      }
    }
    const activeVip = window.activeVipCode || 'V001';
    if (window.vipRecipes && window.vipRecipes[activeVip]) {
      const vItem = window.vipRecipes[activeVip];
      const vTitle = document.getElementById('vip-card-title');
      const vDesc = document.getElementById('vip-card-desc');
      if (vItem) {
        if (vTitle && typeof window.getBilingualVipTitle === 'function') vTitle.textContent = window.getBilingualVipTitle(activeVip, vItem.title);
        if (vDesc && typeof window.getBilingualVipDesc === 'function') vDesc.innerHTML = window.getBilingualVipDesc(activeVip, vItem);
      }
    }

    // M. Tab 5 Rife / VIP 주파수 전환 간격 텍스트 실시간 언어 동기화
    if (typeof window.formatIntervalText === 'function') {
      const sRife = document.getElementById('slider-rife-interval');
      const tRife = document.getElementById('txt-rife-interval');
      if (sRife && tRife) tRife.textContent = window.formatIntervalText(parseFloat(sRife.value));

      const sVip = document.getElementById('slider-vip-interval');
      const tVip = document.getElementById('txt-vip-interval');
      if (sVip && tVip) tVip.textContent = window.formatIntervalText(parseFloat(sVip.value));
    }

    // N. Tab 5 Rife / VIP / Custom Hold 및 Play 버튼 텍스트 실시간 동기화
    const tRifeHold = document.getElementById('txt-rife-hold');
    if (tRifeHold) {
      const isHold = window.engine && window.engine.isRifeHold;
      tRifeHold.textContent = isHold 
        ? (lang === 'en' ? 'Frequency Held (Hold ON)' : '주파수 고정 중 (Hold ON)')
        : (lang === 'en' ? 'Hold Frequency' : '현재 주파수 고정');
    }
    const tVipHold = document.getElementById('txt-vip-hold');
    if (tVipHold) {
      const isHold = window.engine && window.engine.isVipHold;
      tVipHold.textContent = isHold 
        ? (lang === 'en' ? 'Frequency Held (Hold ON)' : '주파수 고정 중 (Hold ON)')
        : (lang === 'en' ? 'Hold Frequency' : '현재 주파수 고정');
    }
    const btnCustomHold = document.getElementById('btn-custom-hold');
    const customNowMode = document.getElementById('custom-now-mode');
    if (btnCustomHold) {
      const isHold = window.engine && window.engine.isCustomHold;
      if (isHold) {
        btnCustomHold.innerHTML = `<i class="fa-solid fa-lock"></i> <span>${lang === 'en' ? 'Frequency Held (HOLD ON)' : '주파수 고정 중 (HOLD ON)'}</span>`;
        if (customNowMode) {
          customNowMode.innerHTML = `<i class="fa-solid fa-lock"></i> <span>${lang === 'en' ? 'Current Frequency Held' : '현재 주파수 고정 모드'}</span>`;
        }
      } else {
        btnCustomHold.innerHTML = `<i class="fa-solid fa-anchor"></i> <span>${lang === 'en' ? 'Hold Frequency (HOLD)' : '주파수 고정 (HOLD)'}</span>`;
        if (customNowMode) {
          customNowMode.innerHTML = `<i class="fa-solid fa-arrows-rotate"></i> <span>${lang === 'en' ? 'Auto Sequential Switch' : '자동 순차 전환'}</span>`;
        }
      }
    }
    const btnCustomPlay = document.getElementById('btn-custom-play');
    if (btnCustomPlay) {
      const isActive = window.engine && window.engine.isCustomActive;
      if (isActive) {
        btnCustomPlay.innerHTML = `<i class="fa-solid fa-pause"></i> <span>${lang === 'en' ? 'Pause Session' : '세션 일시정지'}</span>`;
      } else {
        btnCustomPlay.innerHTML = `<i class="fa-solid fa-play"></i> <span>${lang === 'en' ? 'Play Session' : '세션 재생'}</span>`;
      }
    }

    // O. Custom Studio 3.7 실시간 계산기 및 타임라인 동기화
    if (typeof window.updateCustomCalculation === 'function') {
      window.updateCustomCalculation();
    }
    if (typeof window.renderCustomTimeline === 'function') {
      window.renderCustomTimeline();
    }
    if (typeof window.renderCustomChips === 'function') {
      window.renderCustomChips();
    }
    if (typeof window.renderSavedRecipes === 'function') {
      window.renderSavedRecipes();
    }
  }

  // 9. 원클릭 언어 토글 (KO <-> EN)
  function toggleLanguage() {
    const nextLang = (window.currentLang === 'ko') ? 'en' : 'ko';
    applyLanguage(nextLang);

    if (typeof window.showToast === 'function') {
      window.showToast(nextLang === 'en' ? t('toastSwitchedEn') : t('toastSwitchedKo'));
    }
  }

  window.applyLanguage = applyLanguage;
  window.toggleLanguage = toggleLanguage;

  // DOM 로드 시 초기 적용
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () {
      applyLanguage(window.currentLang);
    });
  } else {
    applyLanguage(window.currentLang);
  }

})();
