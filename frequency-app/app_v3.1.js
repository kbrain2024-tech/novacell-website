/**
 * ==========================================================================
 * Solavre Sound 메인 애플리케이션 스크립트 (app.js)
 * Solavre AI 주파수 맞춤 조율 점검 시스템 탑재 통합 버전
 * 초보자 교육을 위해 각 제어 및 애니메이션 원리를 주석으로 아주 상세하게 설명했습니다.
 * ==========================================================================
 */

// [방어 코드] 브라우저 캐시로 인해 예전 audioEngine.js가 로드되어 누락된 메서드가 있을 경우를 대비한 런타임 폴리필 주입
if (typeof AudioEngine !== 'undefined') {
  if (typeof AudioEngine.prototype.getRifeBoost !== 'function') {
    AudioEngine.prototype.getRifeBoost = function(freq) {
      if (freq >= 3000) return 0.65;
      return 1.0;
    };
  }
  if (typeof AudioEngine.prototype.getRifeFadeInTime !== 'function') {
    AudioEngine.prototype.getRifeFadeInTime = function(freq, isLowToAudible) {
      return isLowToAudible ? 4.0 : 2.0;
    };
  }
}

// 오디오 엔진 인스턴스 생성
const engine = new AudioEngine();
window.engine = engine; // NovaCell 통합 글로벌 인스턴스 명시적 바인딩

// 1. DOM 요소 취득 (HTML 내의 다양한 버튼, 슬라이더, 텍스트 요소를 자바스크립트로 제어하기 위함)
const btnMasterPlay = document.getElementById('btn-master-play');
const btnMasterMute = document.getElementById('btn-master-mute');
const sliderMasterVolume = document.getElementById('slider-master-volume');
const txtMasterVolume = document.getElementById('txt-master-volume');

// 바이노럴 비트 관련 요소
const presetButtons = document.querySelectorAll('.btn-preset');
const sliderCarrierFreq = document.getElementById('slider-carrier-freq');
const txtCarrierFreq = document.getElementById('txt-carrier-freq');
const sliderBeatFreq = document.getElementById('slider-beat-freq');
const txtBeatFreq = document.getElementById('txt-beat-freq');
const sliderBeatsVolume = document.getElementById('slider-beats-volume');
const txtBeatsVolume = document.getElementById('txt-beats-volume');

// 솔페지오 주파수 관련 요소
const solfeggioButtons = document.querySelectorAll('.btn-solfeggio');
const sliderSolfeggioVolume = document.getElementById('slider-solfeggio-volume');
const txtSolfeggioVolume = document.getElementById('txt-solfeggio-volume');

// 솔라브르 주파수 레시피 관련 요소
const rifeButtons = document.querySelectorAll('.btn-rife');
const txtRifeCardTitle = document.getElementById('rife-card-title');
const txtRifeCardDesc = document.getElementById('rife-card-desc');
const sliderRifeVolume = document.getElementById('slider-rife-volume');
const txtRifeVolume = document.getElementById('txt-rife-volume');

// 솔라브르 VIP 레시피 관련 요소
const btnVipPlay = document.getElementById('btn-vip-play');
const sliderVipVolume = document.getElementById('slider-vip-volume');
const txtVipVolume = document.getElementById('txt-vip-volume');
const vipCategoryTabs = document.querySelectorAll('.btn-vip-tab');
const vipSearchInput = document.getElementById('input-vip-search');
const vipCodesContainer = document.getElementById('vip-codes-container');
const txtVipCardTitle = document.getElementById('vip-card-title');
const txtVipCardDesc = document.getElementById('vip-card-desc');
// [신규] VIP 타임라인 UI 요소 취득
const vipTimelineNodes = document.getElementById('vip-timeline-nodes');
const vipTimelineProgress = document.getElementById('vip-timeline-progress');
const vipTimelineStatusText = document.getElementById('vip-timeline-status-text');

// 자연음 믹서 관련 요소
const sliderNatureMaster = document.getElementById('slider-nature-master');
const txtNatureMaster = document.getElementById('txt-nature-master');
const natureSliders = {
  rain: { slider: document.getElementById('slider-rain'), txt: document.getElementById('txt-rain') },
  rain01: { slider: document.getElementById('slider-rain-01'), txt: document.getElementById('txt-rain-01') },
  rain02: { slider: document.getElementById('slider-rain-02'), txt: document.getElementById('txt-rain-02') },
  rain03: { slider: document.getElementById('slider-rain-03'), txt: document.getElementById('txt-rain-03') },
  rain04: { slider: document.getElementById('slider-rain-04'), txt: document.getElementById('txt-rain-04') },
  rain05: { slider: document.getElementById('slider-rain-05'), txt: document.getElementById('txt-rain-05') },
  rain06: { slider: document.getElementById('slider-rain-06'), txt: document.getElementById('txt-rain-06') },
  rain07: { slider: document.getElementById('slider-rain-07'), txt: document.getElementById('txt-rain-07') },
  rain08: { slider: document.getElementById('slider-rain-08'), txt: document.getElementById('txt-rain-08') },
  rain09: { slider: document.getElementById('slider-rain-09'), txt: document.getElementById('txt-rain-09') },
  rain10: { slider: document.getElementById('slider-rain-10'), txt: document.getElementById('txt-rain-10') },
  rain11: { slider: document.getElementById('slider-rain-11'), txt: document.getElementById('txt-rain-11') },
  rain12: { slider: document.getElementById('slider-rain-12'), txt: document.getElementById('txt-rain-12') },
  waves: { slider: document.getElementById('slider-waves'), txt: document.getElementById('txt-waves') },
  campfire: { slider: document.getElementById('slider-campfire'), txt: document.getElementById('txt-campfire') },
  seagull: { slider: document.getElementById('slider-seagull'), txt: document.getElementById('txt-seagull') },
  singingbowl: { slider: document.getElementById('slider-singingbowl'), txt: document.getElementById('txt-singingbowl') },
  stream: { slider: document.getElementById('slider-stream'), txt: document.getElementById('txt-stream') },
  forestbirds: { slider: document.getElementById('slider-forest-birds'), txt: document.getElementById('txt-forest-birds') },
  mountainbirds: { slider: document.getElementById('slider-mountain-birds'), txt: document.getElementById('txt-mountain-birds') }
};

// 유튜브 내보내기 관련 요소
const selectExportDuration = document.getElementById('select-export-duration');
const btnExportAudio = document.getElementById('btn-export-audio');
const progressContainer = document.getElementById('progress-container');
const progressBar = document.getElementById('progress-bar');
const txtProgressStatus = document.getElementById('txt-progress-status');

// 비주얼라이저 및 패널 관련 요소
const canvasVisualizer = document.getElementById('canvas-visualizer');
const visualizerFallback = document.querySelector('.visualizer-fallback');

// 호흡 가이드 및 확언 관련 제어 로직은 독립된 모듈인 breathingGuide.js로 안전하게 이관되었습니다.


// ==========================================================================
// [신규] Solavre AI 주파수 맞춤 조율 점검용 DOM 요소 취득
// ==========================================================================
const btnStartWellnessCheck = document.getElementById('btn-start-wellness-check');
const btnCloseWellnessCheck = document.getElementById('btn-close-wellness-check');
const wellnessCheckModal = document.getElementById('wellness-check-modal');
const wellnessCheckProgressBar = document.getElementById('wellness-check-progress-bar');
const wellnessCheckProgressText = document.getElementById('wellness-check-progress-text');

// 설문지 슬라이드 컨테이너들
const surveyIntro = document.getElementById('survey-intro');
const surveyQuestionContainer = document.getElementById('survey-question-container');
const surveyResult = document.getElementById('survey-result');

const btnSurveyStart = document.getElementById('btn-survey-start');
const btnSurveyPrev = document.getElementById('btn-survey-prev');
const btnSurveySubmitCustom = document.getElementById('btn-survey-submit-custom');
const btnApplyRecipe = document.getElementById('btn-apply-recipe');
const btnRestartWellnessCheck = document.getElementById('btn-restart-wellness-check');

const surveyQuestionText = document.getElementById('survey-question-text');
const surveyQuestionDesc = document.getElementById('survey-question-desc');
const surveyOptionsContainer = document.getElementById('survey-options-container');
const surveyCustomInputContainer = document.getElementById('survey-custom-input-container');

// 결과 리포트용 UI 요소
const txtResultDate = document.getElementById('txt-result-date');
const txtResultUserTitle = document.getElementById('txt-result-user-title');
const txtResultTrackName = document.getElementById('txt-result-track-name');
const txtResultFreqDetails = document.getElementById('txt-result-freq-details');
const txtResultComment = document.getElementById('txt-result-comment');

const userNameInput = document.getElementById('user-name-input');
const barScoreSleep = document.getElementById('bar-score-sleep');
const txtScoreSleep = document.getElementById('txt-score-sleep');
const barScoreFocus = document.getElementById('bar-score-focus');
const txtScoreFocus = document.getElementById('txt-score-focus');
const barScoreCalm = document.getElementById('bar-score-calm');
const txtScoreCalm = document.getElementById('txt-score-calm');
const barScoreBody = document.getElementById('bar-score-body');
const txtScoreBody = document.getElementById('txt-score-body');
const barScoreMood = document.getElementById('bar-score-mood');
const txtScoreMood = document.getElementById('txt-score-mood');

/**
 * 2.5. 솔라브르 VIP 주파수 레시피 딕셔너리
 * 의료법을 준수하여 순화된 질환 명칭 및 주파수 리스트 매핑입니다.
 */
const legacyVipRecipes = {
  'V01': {
    title: 'Code V01 : 가슴 및 상체 에너지 순환 (Upper Body Resonance)',
    desc: '가슴과 상체 부위의 에너지 흐름을 원활하게 정화하고 신체 조화를 돕는 프리미엄 조율 주파수입니다.\n[주파수 구성: 3072, 2950, 2876, 2191, 2189, 2187, 2184, 2182, 2152, 2128, 2127, 2120, 2116, 2112, 2104, 2100, 2008, 1550, 866, 802, 732, 676, 666, 166, 120 Hz]',
    freqs: [3072, 2950, 2876, 2191, 2189, 2187, 2184, 2182, 2152, 2128, 2127, 2120, 2116, 2112, 2104, 2100, 2008, 1550, 866, 802, 732, 676, 666, 166, 120],
    category: 'sleep'
  },
  'V02': {
    title: 'Code V02 : 비뇨 생식기 에너지 밸런스 (Urogenital Harmony)',
    desc: '하복부 및 비뇨 생식기 계통의 미세한 흐름을 조율하고 생체 에너지 밸런스를 서포트합니다.\n[주파수 구성: 642, 771, 360, 726, 724 Hz]',
    freqs: [642, 771, 360, 726, 724],
    category: 'body'
  },
  'V03': {
    title: 'Code V03 : 하복부 활력 및 순환 강화 (Lower Body Vitality)',
    desc: '신체 하부의 웰니스 케어와 안정적인 에너지를 채워주기 위한 기적의 치유 파동 레시피입니다.\n[주파수 구성: 20, 60, 72, 95, 125, 666, 727, 787, 790, 766, 800, 920, 1998, 1875, 442, 2008, 2127, 2128, 2217, 2720, 2050, 2250, 5000, 2130, 2120, 690, 304 Hz]',
    freqs: [20, 60, 72, 95, 125, 666, 727, 787, 790, 766, 800, 920, 1998, 1875, 442, 2008, 2127, 2128, 2217, 2720, 2050, 2250, 5000, 2130, 2120, 690, 304],
    category: 'body'
  },
  'V04': {
    title: 'Code V04 : 간담도계 피로 극복 (Hepatic Energy Support)',
    desc: '체내 대사 조율과 간담도계 부위의 편안한 이완 및 피로 해소를 돕는 웰니스 음원입니다.\n[주파수 구성: 393, 479, 520, 734, 3130 Hz]',
    freqs: [393, 479, 520, 734, 3130],
    category: 'digest'
  },
  'V05': {
    title: 'Code V05 : 위장관 편안함 및 신경 진정 (Gastric Calmness)',
    desc: '스트레스로 인해 경직되기 쉬운 상복부 및 위장 영역의 흐름을 이완하고 안정시킵니다.\n[주파수 구성: 676 Hz]',
    freqs: [676],
    category: 'digest'
  },
  'V06': {
    title: 'Code V06 : 기침 가래 및 목 이완 (Respiratory Relief)',
    desc: '가슴 부위의 답답함이나 기침 등으로 예민해진 호흡 계통의 안정과 부드러운 이완을 유도합니다.\n[주파수 구성: 7760, 7344, 3702, 3672, 1550, 1500, 1234, 776, 766, 728, 720, 688, 683, 530, 525, 524, 522, 514, 444, 440, 432, 146, 125, 95, 72, 20, 7.7, 0.5 Hz]',
    freqs: [7760, 7344, 3702, 3672, 1550, 1500, 1234, 776, 766, 728, 720, 688, 683, 530, 525, 524, 522, 514, 444, 440, 432, 146, 125, 95, 72, 20, 7.7, 0.5],
    category: 'sleep'
  },
  'V07': {
    title: 'Code V07 : 기관지 평온 및 깊은 호흡 (Bronchial Serenity)',
    desc: '기관지와 가슴 부위의 긴장을 누그러뜨리고 천천히 깊은 호흡을 들이마실 수 있도록 보조합니다.\n[주파수 구성: 7344, 3702, 3672, 2720, 2170, 1800, 1600, 1500, 1283, 1234, 1233, 880, 787, 727, 522, 444, 146, 125, 95, 72, 20, 0.5 Hz]',
    freqs: [7344, 3702, 3672, 2720, 2170, 1800, 1600, 1500, 1283, 1234, 1233, 880, 787, 727, 522, 444, 146, 125, 95, 72, 20, 0.5],
    category: 'sleep'
  },
  'V08': {
    title: 'Code V08 : 가슴 답답함 완화 (Airflow Balancing)',
    desc: '호흡의 통로를 부드럽게 이완하고 순환을 도와, 가슴에 차오른 불안감과 불편함을 해소해 줍니다.\n[주파수 구성: 7344, 3672, 1234, 880, 743, 727, 683, 464, 452, 333, 72, 20, 9.39, 9.35 Hz]',
    freqs: [7344, 3672, 1234, 880, 743, 727, 683, 464, 452, 333, 72, 20, 9.39, 9.35],
    category: 'sleep'
  },
  'V09': {
    title: 'Code V09 : 피부 진정 및 정화 밸런스 (Skin Cleanse)',
    desc: '얼굴 및 전신 피부 세포의 맑은 흐름과 노폐물 정화를 돕는 웰니스 스킨 케어 주파수입니다.\n[주파수 구성: 2720, 2170, 1800, 1600, 1550, 1552, 1500, 802, 880, 778, 787, 760, 741, 727, 660, 564, 465, 450, 444, 428 Hz]',
    freqs: [2720, 2170, 1800, 1600, 1550, 1552, 1500, 802, 880, 778, 787, 760, 741, 727, 660, 564, 465, 450, 444, 428],
    category: 'vitality'
  },
  'V10': {
    title: 'Code V10 : 신진대사 혈당 에너지 조율 (Metabolic Glucose Balance)',
    desc: '신체 에너지 대사 리듬을 바로잡고 혈당 조절을 돕는 생체 에너지 안정화 주파수입니다.\n[주파수 구성: 5000, 2127, 2080, 2050, 2013, 2008, 2003, 2000, 1850, 880, 803, 800, 787, 727, 660, 484, 465, 440, 35, 20, 6.8 Hz]',
    freqs: [5000, 2127, 2080, 2050, 2013, 2008, 2003, 2000, 1850, 880, 803, 800, 787, 727, 660, 484, 465, 440, 35, 20, 6.8],
    category: 'digest'
  },
  'V11': {
    title: 'Code V11 : 혈행 순환 안정 및 혈관 긴장 완화 (Circulation Relief)',
    desc: '혈압의 안정을 유도하고 과도하게 수축된 혈관 근육의 부드러운 이완을 지원합니다.\n[주파수 구성: 3176, 2112, 20, 95, 324, 528, 15, 9.19, 7.83, 6, 10000, 880, 787, 727, 304 Hz]',
    freqs: [3176, 2112, 20, 95, 324, 528, 15, 9.19, 7.83, 6, 10000, 880, 787, 727, 304],
    category: 'focus'
  },
  'V12': {
    title: 'Code V12 : 두뇌 신경 세포 진정 및 휴식 (Brain Wave Relief)',
    desc: '과도하게 자극받은 뇌신경 세포를 진정시키고 깊은 이완과 자율신경 안정을 보조합니다.\n[주파수 구성: 470, 693, 813, 1.1, 5000, 6000, 1131, 33 Hz]',
    freqs: [470, 693, 813, 1.1, 5000, 6000, 1131, 33],
    category: 'focus'
  },
  'V13': {
    title: 'Code V13 : 요동 척추 및 허리 긴장 이완 (Lower Back Tension Release)',
    desc: '허리 부위의 뻐근함과 디스크 주변 미세 근육의 피로를 부드럽게 완화시켜 주는 척추 케어 주파수입니다.\n[주파수 구성: 10000, 1550, 880, 802, 787, 760, 727, 305, 212, 41.2, 33 Hz]',
    freqs: [10000, 1550, 880, 802, 787, 760, 727, 305, 212, 41.2, 33],
    category: 'stress'
  },
  'V14': {
    title: 'Code V14 : 허리 관절 릴리프 및 디스크 안정 (Herniated Disc Support)',
    desc: '무리한 활동으로 피로해진 요추 마디마디의 압박을 줄이고 릴리프 효과를 제공합니다.\n[주파수 구성: 727, 787, 2720, 10000, 125, 880, 95, 72, 20 Hz]',
    freqs: [727, 787, 2720, 10000, 125, 880, 95, 72, 20],
    category: 'stress'
  }
};

/**
 * 2.5. 솔라브르 VIP 주파수 레시피 딕셔너리 (최종 PDF 버전 - V001~V082)
 * 사용자가 정의한 최종 병명별 주파수 레시피 매핑입니다. (양자물리학 기반)
 * 한글 주석을 포함하여 초보자용으로 제공됩니다.
 */
const vipRecipes = {
  'V001': {
    title: "Code V001 : 유방암",
    desc: "유방암 세포 증식 억제, 단단한 악\n성 종양 결절 붕괴, 림프 순환 및\n독소 배출\n3072 Hz, 2876 Hz: 유방암\n(Cancer_breast) 세포 및 선암종\n(Cancer_adenocarcinoma) 타겟\n특화 고주파.\n2128 Hz, 2008 Hz: 악성 종양 및\n암종(Carcinoma/Sarcoma)의 전반\n적 억제 및 사멸을 유도하는 라이프\n핵심 주파수.\n2189 Hz: 유방암의 악성 결합 방해\n및 종양 증식 억제.\n1550 Hz: 유방 섬유낭종(Breast\nfibroid cysts) 및 림프/가슴 주변\n의 광범위한 염증과 붓기 진정.\n[주파수 구성: 3672, 3072, 2950, 2876, 2333, 2298, 2263, 2208, 2191, 2189, 2187, 2184, 2182, 2180, 2173, 2162, 2152, 2146, 2133, 2128, 2127, 2120, 2116, 2112, 2104, 2103, 2100, 2063, 2008, 1865, 1550, 866, 802, 732, 676, 666, 444, 166, 125, 120, 95, 72, 48 Hz]",
    freqs: [3672,3072,2950,2876,2333,2298,2263,2208,2191,2189,2187,2184,2182,2180,2173,2162,2152,2146,2133,2128,2127,2120,2116,2112,2104,2103,2100,2063,2008,1865,1550,866,802,732,676,666,444,166,125,120,95,72,48],
    category: "focus"
  },
  'V002': {
    title: "Code V002 : 방광암 (이행상피 세포암)",
    desc: "방광 점막의 악성 종양 억제, 비뇨\n기계 만성 염증 진정 및 배뇨 통증\n완화\n[주파수 구성: 23549.28, 9889, 1172.45, 847, 867, 771, 726, 724, 642, 635, 360, 329, 60, 20, 10000, 5000, 4412, 2720, 2400, 2112, 1864, 1550, 1360, 880, 854, 800, 784, 751, 732, 728, 712, 688, 651, 644, 524, 465, 442, 422, 334, 240, 152, 128, 120, 112, 96, 72, 64 Hz]",
    freqs: [23549.28,9889,1172.45,847,867,771,726,724,642,635,360,329,60,20,10000,5000,4412,2720,2400,2112,1864,1550,1360,880,854,800,784,751,732,728,712,688,651,644,524,465,442,422,334,240,152,128,120,112,96,72,64],
    category: "digest"
  },
  'V003': {
    title: "Code V003 : 전립선암",
    desc: "전립선암 세포 타격, 전립선 비대로\n인한 요도 압박 해소, 골반강 혈류\n순환\n2130, 2128, 2127,\n2120, 2050, 2008,\n1998, 1550, 920, 802,\n800, 790, 787, 776,\n727, 690, 666, 465,\n125, 95, 72, 60, 20,\n444, 522, 9.1\n[주파수 구성: 5000, 100, 410, 522, 146, 2720, 2050, 2489, 2217, 2170 Hz]",
    freqs: [5000,100,410,522,146,2720,2050,2489,2217,2170],
    category: "focus"
  },
  'V004': {
    title: "Code V004 : 간암, 간경화, 황달",
    desc: "황달/독소 배출, 굳은 간 조직 이\n완, 간암 세포 억제 및 전신 면역\n강화\n1. 주파수 레시피 (총 180분, 각 30\n분)\n- 5000 Hz: 심각한 황달(Jaundice)\n해소 및 전신 혈액 정화\n- 3130 Hz & 393 Hz: 간암\n(Cancer_carcinoma_liver) 타겟\n특화 주파수\n- 2127 Hz: 암 및 백혈병 통합 타\n겟 (손상된 간세포의 비정상 증식\n억제)\n- 734 Hz: 간암 보조 주파수 및 간\n기능 개선\n- 291 Hz: 간경화\n(Cirrhosis_hepatitis)로 딱딱하게\n굳은 간 조직 이완 및 염증 억제\n[주파수 구성: 20562.06, 1023.72, 334, 433, 767, 869, 876, 477, 574, 752, 779, 5000, 4432, 3130, 1865, 1600, 1550, 1500, 271, 2127, 880, 802, 734, 677, 650, 625, 500, 520, 514, 479, 444, 393, 318, 291, 250, 214, 146, 125, 95, 72, 20 Hz]",
    freqs: [20562.06,1023.72,334,433,767,869,876,477,574,752,779,5000,4432,3130,1865,1600,1550,1500,271,2127,880,802,734,677,650,625,500,520,514,479,444,393,318,291,250,214,146,125,95,72,20],
    category: "digest"
  },
  'V005': {
    title: "Code V005 : 위암, 식도암, 대장암",
    desc: "식도/위/장 점막의 악성 종양 억제,\n헬리코박터균 제어, 소화기 암세포\n진동 파괴\n[주파수 구성: 2950, 2819, 2779, 2167, 2128, 2127.5, 880, 728, 705, 695, 676, 659, 656, 352, 347, 120 Hz]",
    freqs: [2950,2819,2779,2167,2128,2127.5,880,728,705,695,676,659,656,352,347,120],
    category: "digest"
  },
  'V006': {
    title: "Code V006 : 췌장암, 후두암",
    desc: "악성 선암종(췌장암) 타격, 후두 암\n세포 억제, 통증 완화 및 암세포 전\n이 방어\n[주파수 구성: 2876, 2452, 2219, 2182, 2160, 2127, 2086, 2008, 1133, 832, 524, 433, 47 Hz]",
    freqs: [2876,2452,2219,2182,2160,2127,2086,2008,1133,832,524,433,47],
    category: "digest"
  },
  'V007': {
    title: "Code V007 : 폐암",
    desc: "기관지/폐암 세포의 증식 억제, 종\n양 결합 방해, 호흡 곤란 완화\n[주파수 구성: 3672, 2144, 1582, 852, 776, 462 Hz]",
    freqs: [3672,2144,1582,852,776,462],
    category: "focus"
  },
  'V008': {
    title: "Code V008 : 뇌종양",
    desc: "악성 뇌종양 세포 증식 억제, 종양\n결합 파괴, 뇌신경망 보호\n[호흡기 명상 코드]\n코드병명주파수핵심 치유 목적\n[주파수 구성: 2128, 2008, 857, 720, 543, 9.19 Hz]",
    freqs: [2128,2008,857,720,543,9.19],
    category: "focus"
  },
  'V009': {
    title: "Code V009 : 기관지염",
    desc: "기관지 염증 완화,\n멈추지 않는 기침 억\n제, 가래 배출 및 점\n막 진정\n[주파수 구성: 7344, 3672, 1234, 880, 776, 766, 743, 727, 688, 683, 464, 452, 333, 72, 20, 9.39, 9.35 Hz]",
    freqs: [7344,3672,1234,880,776,766,743,727,688,683,464,452,333,72,20,9.39,9.35],
    category: "sleep"
  },
  'V010': {
    title: "Code V010 : 폐렴",
    desc: "폐포 내 세균/바이러\n스성 감염 억제, 고\n열 및 부종 감소, 폐\n기능 회복\n[주파수 구성: 10346.56, 10976.38, 5045.03, 5548.59, 5549.22, 5554.69, 5554.84, 5558.75, 5560.78, 5562.5, 6752.01, 7118.2, 7255, 7284.06, 7414.28, 7631.09, 7632.66, 7667.38, 7676.94, 8045.81, 8041.5, 10334.06, 8082.59, 8305.19, 8911.25, 9113.5, 9141.5, 9393.13, 6654.69, 986, 987, 988, 550, 802, 880, 787, 776, 727, 452, 1474, 578, 7660, 1550, 688, 412 Hz]",
    freqs: [10346.56,10976.38,5045.03,5548.59,5549.22,5554.69,5554.84,5558.75,5560.78,5562.5,6752.01,7118.2,7255,7284.06,7414.28,7631.09,7632.66,7667.38,7676.94,8045.81,8041.5,10334.06,8082.59,8305.19,8911.25,9113.5,9141.5,9393.13,6654.69,986,987,988,550,802,880,787,776,727,452,1474,578,7660,1550,688,412],
    category: "sleep"
  },
  'V011': {
    title: "Code V011 : 천식",
    desc: "과민해진 기도 경련\n진정, 좁아진 기관지\n확장(심호흡 유도),\n산소 공급\n[주파수 구성: 10000, 7346, 7344, 3702, 3672, 3125, 3124, 2720, 2170, 1800, 1600, 1500, 1283, 1234, 1233, 890, 886, 880, 871, 822, 782, 787, 756, 727, 712, 665, 633, 522, 5212, 515, 487, 444, 434, 411, 322, 263, 172, 146, 128, 125, 120, 95, 72, 20, 0.5 Hz]",
    freqs: [10000,7346,7344,3702,3672,3125,3124,2720,2170,1800,1600,1500,1283,1234,1233,890,886,880,871,822,782,787,756,727,712,665,633,522,5212,515,487,444,434,411,322,263,172,146,128,125,120,95,72,20,0.5],
    category: "sleep"
  },
  'V012': {
    title: "Code V012 : 결핵",
    desc: "결핵균 억제, 기관지\n만성 염증 진정, 만\n성 기침 및 객혈 완\n화\n[주파수 구성: 8030, 16000, 2565, 1840, 1600, 1552, 1550, 1513, 1500, 803, 802, 784, 740, 727, 720, 690, 666, 583, 541, 369, 216, 20 Hz]",
    freqs: [8030,16000,2565,1840,1600,1552,1550,1513,1500,803,802,784,740,727,720,690,666,583,541,369,216,20],
    category: "sleep"
  },
  'V013': {
    title: "Code V013 : 만성폐쇄성폐질 환(COPD), 진 폐증, 폐섬유화 증",
    desc: "좁아진 기도 확장,\n굳은 폐 조직 이완,\n심호흡 유도 및 폐\n활력 충전\n[박테리아 명상 코드]\n[곰팡이∙진균 명상 코드]\n코드병명주파수핵심 치유 목적\n[주파수 구성: 7344, 5000, 3702, 3672, 2688, 1862, 1550, 1238, 1200, 1234, 975, 880, 802, 787, 776, 772, 770, 768, 766, 727, 688, 683, 660, 450, 412, 352, 318, 20 Hz]",
    freqs: [7344,5000,3702,3672,2688,1862,1550,1238,1200,1234,975,880,802,787,776,772,770,768,766,727,688,683,660,450,412,352,318,20],
    category: "sleep"
  },
  'V014': {
    title: "Code V014 : 세균 감염",
    desc: "원인 모를 만성 세균\n감염 억제, 전신 살\n균, 2차 감염 방어\n[주파수 구성: 10000, 5000, 1550, 880, 800, 787, 727, 465 Hz]",
    freqs: [10000,5000,1550,880,800,787,727,465],
    category: "sleep"
  },
  'V015': {
    title: "Code V015 : 포도상구균 연쇄상구균",
    desc: "종기, 농양, 인후염\n및 상처 부위의 곪는\n화농성 감염 억제\n[주파수 구성: 9647, 40887, 8697, 7270, 7160, 2431, 2000, 1902, 1109, 1060, 1050, 1010, 985, 958, 935, 880, 786, 727, 718, 686, 643, 576, 563, 542, 453, 436, 423, 411, 333, 134, 128 Hz]",
    freqs: [9647,40887,8697,7270,7160,2431,2000,1902,1109,1060,1050,1010,985,958,935,880,786,727,718,686,643,576,563,542,453,436,423,411,333,134,128],
    category: "sleep"
  },
  'V016': {
    title: "Code V016 : 대장균, 녹농균 마이코플라즈마",
    desc: "장염, 요로 감염, 만\n성 폐/기관지 감염\n및 세포 내 숨은 세\n균 사멸\n코드병명주파수핵심 치유 목적\n[주파수 구성: 17724.2, 19566.32, 974.15, 882.44, 7849, 7847, 1730, 1722, 1712, 1703, 1552, 1550, 1320, 1244, 1242, 1000, 957, 934, 856, 840, 832, 804, 802, 800, 799, 776, 642, 634, 632, 556, 548, 539, 413, 358, 333, 330, 327, 289, 282 Hz]",
    freqs: [17724.2,19566.32,974.15,882.44,7849,7847,1730,1722,1712,1703,1552,1550,1320,1244,1242,1000,957,934,856,840,832,804,802,800,799,776,642,634,632,556,548,539,413,358,333,330,327,289,282],
    category: "digest"
  },
  'V017': {
    title: "Code V017 : 곰팡이/칸디다 /효모",
    desc: "전신의 곰팡이/효모\n균 증식 억제, 칸디다\n균 사멸 및 만성 염\n증 진정\n[주파수 구성: 4442, 2411, 2222, 1833, 1823, 1552, 1550, 1333, 153, 1134, 1155, 1130, 1016, 942, 933, 886, 880, 866, 802, 787, 784, 774, 766, 745, 743, 728, 727, 623, 594, 592, 582, 565, 555, 524, 512, 465, 464, 422, 414, 374, 344, 337, 321, 254, 242, 222, 158, 132, 72, 20 Hz]",
    freqs: [4442,2411,2222,1833,1823,1552,1550,1333,153,1134,1155,1130,1016,942,933,886,880,866,802,787,784,774,766,745,743,728,727,623,594,592,582,565,555,524,512,465,464,422,414,374,344,337,321,254,242,222,158,132,72,20],
    category: "sleep"
  },
  'V018': {
    title: "Code V018 : 백선균/무좀균 /표피균",
    desc: "피부와 발톱을 파고드\n는 백선균/표피균 사\n멸, 가려움증 완화\n[기생충 명상 코드]\n809, 817, 886, 2422, 6887,\n7688, 7697, 7885, 584, 587,\n592, 732, 733, 738, 748, 765,\n766, 771, 777, 778, 779, 1256,\n5000, 2422, 800, 732, 465,\n440, 422, 345,   128, 120, 92,\n76, 60\n[주파수 구성: 133, 142, 373, 376, 378, 385, 387, 420, 425, 428, 576, 578, 580, 581, 583, 584, 587, 588, 592, 595, 597, 724, 725, 726, 750, 794, 797, 801, 805, 808 Hz]",
    freqs: [133,142,373,376,378,385,387,420,425,428,576,578,580,581,583,584,587,588,592,595,597,724,725,726,750,794,797,801,805,808],
    category: "sleep"
  },
  'V019': {
    title: "Code V019 : 아스페르길루스 /페포자충",
    desc: "호흡기 점막 및 폐\n심부에 증식하는 치명\n적 곰팡이균 및 독소\n억제\n코드병명주파수핵심 치유 목적\n[주파수 구성: 1972, 1823, 942, 758, 743, 697, 524, 374, 340, 339, 247 Hz]",
    freqs: [1972,1823,942,758,743,697,524,374,340,339,247],
    category: "sleep"
  },
  'V020': {
    title: "Code V020 : 기생충 종합 세 트",
    desc: "원인을 알 수 없는\n만성 피로, 소화 불량\n등에 광범위하게 적용\n할 수 있는 가장 강\n력한 기본 기생충 사\n멸 세트\n[주파수 구성: 10000, 5000, 4412, 3176, 2720, 2400, 2112, 1998, 1865, 1864, 1840, 1550, 1360, 880, 854, 800, 784, 780, 770, 751, 740, 732, 728, 712, 690, 688, 665, 660, 651, 644, 524, 465, 444, 442, 422, 440, 334, 240, 152, 128, 125, 120, 112, 96, 95, 80, 72, 64, 47, 20 Hz]",
    freqs: [10000,5000,4412,3176,2720,2400,2112,1998,1865,1864,1840,1550,1360,880,854,800,784,780,770,751,740,732,728,712,690,688,665,660,651,644,524,465,444,442,422,440,334,240,152,128,125,120,112,96,95,80,72,64,47,20],
    category: "sleep"
  },
  'V021': {
    title: "Code V021 : 회충 및 선충",
    desc: "장내 기생충의 가장\n흔한 형태인 회충류에\n특화된 주파수 모음\n[주파수 구성: 8146, 7159, 5897, 4412, 4152, 3212, 2720, 2322, 1372, 1146, 1113, 1077, 1054, 942, 835, 827, 826, 822, 799, 797, 776, 773, 772, 753, 752, 751, 749, 746, 738, 732, 728, 722, 721, 698, 688, 650, 543, 541, 535, 422, 380, 332, 240, 200, 152, 128, 120, 112, 104, 101, 20 Hz]",
    freqs: [8146,7159,5897,4412,4152,3212,2720,2322,1372,1146,1113,1077,1054,942,835,827,826,822,799,797,776,773,772,753,752,751,749,746,738,732,728,722,721,698,688,650,543,541,535,422,380,332,240,200,152,128,120,112,104,101,20],
    category: "sleep"
  },
  'V022': {
    title: "Code V022 : 간흡충, 주혈흡 충",
    desc: "간, 췌장, 장, 혈액\n등에 기생하며 심각한\n장기 손상을 유발할\n수 있는 흡충류 타겟\n[피부 명상 코드]\n676, 651, 635, 524, 435, 419,\n329, 275, 238, 143, 142주파수\n[주파수 구성: 9889, 7391, 6766, 6672, 6641, 6578, 2150, 2128, 2082, 2013, 2008, 2003, 2000, 1850, 945, 867, 854, 847, 846, 830, 763 Hz]",
    freqs: [9889,7391,6766,6672,6641,6578,2150,2128,2082,2013,2008,2003,2000,1850,945,867,854,847,846,830,763],
    category: "digest"
  },
  'V023': {
    title: "Code V023 : 촌충 및 요충",
    desc: "코엔자임Q10 다량 복\n용 및 허브 구충제\n병행을 권장\n[주파수 구성: 164, 187, 453, 523, 542, 623, 843, 854, 1223, 803, 1360, 3032, 5522, 20, 112, 120, 773, 826, 827, 835, 4152 Hz]",
    freqs: [164,187,453,523,542,623,843,854,1223,803,1360,3032,5522,20,112,120,773,826,827,835,4152],
    category: "sleep"
  },
  'V024': {
    title: "Code V024 : 람블편모충 (만성 설사 유 발)",
    desc: "\n[주파수 구성: 5768, 5429, 4334, 2163, 2018, 1442, 829, 812, 721, 407, 334 Hz]",
    freqs: [5768,5429,4334,2163,2018,1442,829,812,721,407,334],
    category: "sleep"
  },
  'V025': {
    title: "Code V025 : 십이지장충, 옴/모낭충",
    desc: "십이지장 기생충 및 피부 옴/모낭충 증식 억제 및 가려움 진정\n[주파수 구성: 920, 1436, 2871, 5742, 90, 94, 98, 102, 106, 110, 253, 693 Hz]",
    freqs: [920,1436,2871,5742,90,94,98,102,106,110,253,693],
    category: "sleep"
  },
  'V026': {
    title: "Code V026 : 사상충(혈액/장 기 기생)",
    desc: "\n[주파수 구성: 112, 120, 332, 753 Hz]",
    freqs: [112,120,332,753],
    category: "sleep"
  },
  'V027': {
    title: "Code V027 : 선모충(근육 내 침추)",
    desc: "코드병명주파수핵심 치유 목적\n[주파수 구성: 101, 541, 822, 1054, 1372 Hz]",
    freqs: [101,541,822,1054,1372],
    category: "sleep"
  },
  'V028': {
    title: "Code V028 : 여드름",
    desc: "여드름 유발균 억제,\n모낭 염증 진정, 피\n부 세포 재생 및 독\n소 배출\n[주파수 구성: 6046.9, 2720, 2170, 1800, 1600, 1552, 1500, 880, 802, 787, 760, 741, 727, 660, 564, 465, 450, 444, 428 Hz]",
    freqs: [6046.9,2720,2170,1800,1600,1552,1500,880,802,787,760,741,727,660,564,465,450,444,428],
    category: "sleep"
  },
  'V029': {
    title: "Code V029 : 건선",
    desc: "\n[주파수 구성: 2720, 2489, 2180, 2170, 2128, 2008, 1552, 880, 800, 786, 728, 664, 304, 152, 112, 104, 100, 96, 64, 60, 3000, 95, 1550, 802, 787, 776, 727, 650, 625, 600, 28, 1.2, 10, 35, 7.69, 110, 428, 680 Hz]",
    freqs: [2720,2489,2180,2170,2128,2008,1552,880,800,786,728,664,304,152,112,104,100,96,64,60,3000,95,1550,802,787,776,727,650,625,600,28,1.2,10,35,7.69,110,428,680],
    category: "sleep"
  },
  'V030': {
    title: "Code V030 : 가려움",
    desc: "만성적이고 장기적\n인 완화가 없는 경\n우 기생충 일반 및\n기생충 흡혈을 포함\n한 기생충 세트를\n사용하세요.\n[주파수 구성: 880, 787, 727, 444, 125, 95, 72, 20, 1865, 3176 Hz]",
    freqs: [880,787,727,444,125,95,72,20,1865,3176],
    category: "sleep"
  },
  'V031': {
    title: "Code V031 : 습진",
    desc: "[체액 밸런스 명상 코드]\n[소화기 명상 코드]\n[뇌·신경 명상 코드]\n9.39, 730.2, 690, 770, 916,\n415\n코드병명주파수핵심 치유 목적\n[주파수 구성: 40, 522, 146, 6.3, 148, 444, 440, 880, 787, 727, 465, 20, 5000, 10000, 9.19, 707, 1550, 802, 2720, 2008, 2180, 2128, 664, 120 Hz]",
    freqs: [40,522,146,6.3,148,444,440,880,787,727,465,20,5000,10000,9.19,707,1550,802,2720,2008,2180,2128,664,120],
    category: "sleep"
  },
  'V032': {
    title: "Code V032 : 산증 및 산/염기 불균형",
    desc: "체액의 과산성\n(Hyperacidity) 중\n화, 대사 노폐물 배\n출 자극, 전신 항상\n성 및 pH 밸런스 회\n복\n코드병명주파수핵심 치유 목적\n[주파수 구성: 10000, 880, 802, 787, 776, 727, 146, 20 Hz]",
    freqs: [10000,880,802,787,776,727,146,20],
    category: "digest"
  },
  'V033': {
    title: "Code V033 : 위염, 위궤양, 식 도염, 소화불량, 담적, 복통",
    desc: "체액의 과산성\n(Hyperacidity) 중\n화, 대사 노폐물 배\n출 자극, 전신 항상\n성 및 pH 밸런스 회\n복\n[주파수 구성: 10000, 3000, 2720, 2489, 2170, 2127, 2000, 1865, 1800, 1600, 1550, 880, 832, 802, 787, 776, 727, 676, 660, 465, 450, 444, 440, 428, 380, 250, 146, 125, 95, 72, 20, 3, 1.2 Hz]",
    freqs: [10000,3000,2720,2489,2170,2127,2000,1865,1800,1600,1550,880,832,802,787,776,727,676,660,465,450,444,440,428,380,250,146,125,95,72,20,3,1.2],
    category: "digest"
  },
  'V034': {
    title: "Code V034 : 구내염",
    desc: "\n[주파수 구성: 465, 677, 702, 787, 234, 278, 568, 672, 478, 487, 498, 788, 955, 982, 1904, 1906, 1901, 1902, 1903, 1905, 1907, 888, 880, 848, 846, 831, 685, 742, 734, 1043, 944, 782, 591, 480, 423, 343, 339, 322, 832, 556, 808, 534, 460, 424, 246 Hz]",
    freqs: [465,677,702,787,234,278,568,672,478,487,498,788,955,982,1904,1906,1901,1902,1903,1905,1907,888,880,848,846,831,685,742,734,1043,944,782,591,480,423,343,339,322,832,556,808,534,460,424,246],
    category: "digest"
  },
  'V035': {
    title: "Code V035 : 위장 장애 위가스",
    desc: "코드병명주파수핵심 치유 목적\n[주파수 구성: 2127, 2008, 1552, 880, 832, 802, 784, 727, 690, 676, 664, 450, 422, 125, 95, 72, 20, 3.9, 50, 51, 52, 53, 56, 59 Hz]",
    freqs: [2127,2008,1552,880,832,802,784,727,690,676,664,450,422,125,95,72,20,3.9,50,51,52,53,56,59],
    category: "digest"
  },
  'V036': {
    title: "Code V036 : 뇌졸중, 편마비, 언어장애/시야장 애",
    desc: "뇌혈류 개선, 편마비\n(불완전 마비) 신경\n자극, 시야 및 언어\n장애(말더듬) 보조 치\n[뇌∙중추신경 명상 코드]\n유\n[주파수 구성: 10000, 2720, 2112, 1865, 1800, 1830, 880, 787, 727, 650, 600, 522, 428, 203, 125, 95, 72, 40, 20, 9.4, 7.83, 3 Hz]",
    freqs: [10000,2720,2112,1865,1800,1830,880,787,727,650,600,522,428,203,125,95,72,40,20,9.4,7.83,3],
    category: "focus"
  },
  'V037': {
    title: "Code V037 : 말초신경증, 손 발저림",
    desc: "손상된 말초신경 재\n생, 당뇨병성/원인\n모를 신경병증성 통\n증 완화 및 신경망\n복구\n[주파수 구성: 10000, 3176, 2720, 1550, 660, 20 Hz]",
    freqs: [10000,3176,2720,1550,660,20],
    category: "focus"
  },
  'V038': {
    title: "Code V038 : 안 면 신 경 마 비, 삼차신경통, 안 면신경 경련",
    desc: "구안와사(안면마비)\n신경 회복, 삼차신경\n의 극심한 통증 진정\n및 안면 경련 억제\n[주파수 구성: 10000, 6000, 1131, 880, 787, 727, 304, 33 Hz]",
    freqs: [10000,6000,1131,880,787,727,304,33],
    category: "focus"
  },
  'V039': {
    title: "Code V039 : 뇌염, 뇌수막염",
    desc: "뇌와 척수막의 바이\n러스/세균성 염증 억\n제, 뇌압 및 부종 감\n소\n[주파수 구성: 12128, 2008, 857, 720, 543, 9.19 Hz]",
    freqs: [12128,2008,857,720,543,9.19],
    category: "focus"
  },
  'V040': {
    title: "Code V040 : 간질 (뇌전증)",
    desc: "비정상적인 뇌파 폭\n주(발작) 안정, 중추\n신경계 경련 억제\n코드병명주파수핵심 치유 목적\n[주파수 구성: 10000, 880, 802, 787, 727, 700, 650, 633, 600, 210, 125, 20 Hz]",
    freqs: [10000,880,802,787,727,700,650,633,600,210,125,20],
    category: "digest"
  },
  'V041': {
    title: "Code V041 : 파킨슨병",
    desc: "안정시 떨림(진전) 억제,\n도파민 분비 뇌 회로 안\n정, 근육 경직 이완\n[주파수 구성: 6000, 5000, 4334, 2900, 1142, 1131, 986, 880.2, 878.2, 871, 864, 827, 813, 790, 744, 733, 706.7, 693, 690, 658, 611, 755, 644, 610, 569, 531, 524, 484, 470, 442, 314, 310, 254, 172, 169, 134, 130, 33, 1.1 Hz]",
    freqs: [6000,5000,4334,2900,1142,1131,986,880.2,878.2,871,864,827,813,790,744,733,706.7,693,690,658,611,755,644,610,569,531,524,484,470,442,314,310,254,172,169,134,130,33,1.1],
    category: "focus"
  },
  'V042': {
    title: "Code V042 : 루게릭병 (ALS)",
    desc: "운동 신경세포 보호, 원\n인균(마이코플라즈마) 억\n제, 척수 신경 마비 완\n화\n[주파수 구성: 10000, 5000, 2900, 878.2, 880.2, 864, 790, 706.7, 690, 610, 484, 986, 644, 254 Hz]",
    freqs: [10000,5000,2900,878.2,880.2,864,790,706.7,690,610,484,986,644,254],
    category: "focus"
  },
  'V043': {
    title: "Code V043 : 치매/알츠하이머 병",
    desc: "뇌 노폐물(아밀로이드)\n배출, 글\n림파틱 시스템 활성화,\n인지 신경망 복구\n[주파수 구성: 5148, 2900, 2213, 986, 880.2, 878.2, 866, 864, 790, 706.7, 690, 644, 624, 610, 484, 430, 254, 23.2 Hz]",
    freqs: [5148,2900,2213,986,880.2,878.2,866,864,790,706.7,690,644,624,610,484,430,254,23.2],
    category: "focus"
  },
  'V044': {
    title: "Code V044 : 길랑 바레 증후 군",
    desc: "말초신경 수초(Myelin)\n자가면역 파괴 억제, 급\n[하지∙족부 관절 명상 코드]\n[내분비계 호르몬 명상 코드]\n성 마비 진정 및 신경\n재생\n코드병명주파수핵심 치유 목적\n[주파수 구성: 10000, 7344, 5000, 2900, 1550, 727 Hz]",
    freqs: [10000,7344,5000,2900,1550,727],
    category: "sleep"
  },
  'V045': {
    title: "Code V045 : 고관절 통증, 슬 관절 통증, 무릎 관절염",
    desc: "무릎/골반 주변 염증\n억제, 관절 연골 통\n증\n완화, 하체 혈류 순\n환 촉진\n[주파수 구성: 10000, 6000, 3000, 2720, 2127, 2008, 1550, 880, 802, 787, 776, 727, 690, 666, 304, 250, 95, 80, 40, 20, 4.9 Hz]",
    freqs: [10000,6000,3000,2720,2127,2008,1550,880,802,787,776,727,690,666,304,250,95,80,40,20,4.9],
    category: "stress"
  },
  'V046': {
    title: "Code V046 : 족저근막염, 족 관절염좌, 엄지 발가락(무지외반) 통증",
    desc: "찢어진 인대/근막 재\n생, 발뒤꿈치 골극(뼈\n자라남) 통증 억제,\n엄지발가락 신경 안\n정\n[주파수 구성: 10000, 2720, 250, 120, 20, 1.2 Hz]",
    freqs: [10000,2720,250,120,20,1.2],
    category: "stress"
  },
  'V047': {
    title: "Code V047 : 통풍 (Gout)",
    desc: "통풍성 관절염 타겟\n특화, 요산 결정으로\n인한 날카로운 급성\n통증 쿨링 다운\n코드병명주파수핵심 치유 목적\n[주파수 구성: 10000, 3000, 1865, 1600, 1550, 1500, 880, 802, 787, 727, 650, 625, 600, 444, 440, 250, 146, 125, 95, 72, 40, 39, 20, 10, 9.2 Hz]",
    freqs: [10000,3000,1865,1600,1550,1500,880,802,787,727,650,625,600,444,440,250,146,125,95,72,40,39,20,10,9.2],
    category: "stress"
  },
  'V048': {
    title: "Code V048 : 당뇨병 (Diabetes)",
    desc: "인슐린 저항성 완화,\n췌장 에너지 조율,\n당뇨 합병증 방어\n[주파수 구성: 32000, 5000, 4200, 4000, 2128, 2127, 2025, 2020, 2013, 2008, 2003, 2000, 1850, 1550, 880, 803, 800, 787, 786, 727, 700, 660, 500, 484, 465, 444, 440, 302, 125, 190, 95, 80, 72, 48, 35, 20, 6.8 Hz]",
    freqs: [32000,5000,4200,4000,2128,2127,2025,2020,2013,2008,2003,2000,1850,1550,880,803,800,787,786,727,700,660,500,484,465,444,440,302,125,190,95,80,72,48,35,20,6.8],
    category: "digest"
  },
  'V049': {
    title: "Code V049 : 갑상선 항진증 (그레이브스병), 갑상선 저하증 (하시모토병)",
    desc: "과열된 갑상선 진정,\n저하된 대사 촉진,\n자가면역 밸런스 회\n복\n[상지 관절 명상 코드]\n[척추 명상 코드]\n[주파수 구성: 16000, 10000, 880, 727, 160, 80, 36, 20, 12, 3, 2 Hz]",
    freqs: [16000,10000,880,727,160,80,36,20,12,3,2],
    category: "digest"
  },
  'V050': {
    title: "Code V050 : 쿠싱증후군, 애 디슨병, 말단비 대증",
    desc: "코르티솔 및 성장호\n르몬 조절, 뇌하수체\n-부신 축(Axis) 정상\n화\n[주파수 구성: 2250, 1725, 662, 20, 10, 4 Hz]",
    freqs: [2250,1725,662,20,10,4],
    category: "sleep"
  },
  'V051': {
    title: "Code V051 : 다낭성 난소 증 후군 (PCOS)",
    desc: "난소 물혹(낭종) 억\n제, 생리불순 개선,\n여성 호르몬 정상화\n코드병명주파수핵심 치유 목적\n[주파수 구성: 2127, 1550, 982, 711, 567, 26 Hz]",
    freqs: [2127,1550,982,711,567,26],
    category: "sleep"
  },
  'V052': {
    title: "Code V052 : 오십견, 어깨통 증, 회전근개 손 상",
    desc: "굳은 어깨 관절낭 이\n완, 인대 염증 억제,\n관절의 운동 범위 회\n복\n[주파수 구성: 10000, 6000, 3000, 880, 802, 787, 766, 727, 666, 304, 80, 20 Hz]",
    freqs: [10000,6000,3000,880,802,787,766,727,666,304,80,20],
    category: "stress"
  },
  'V053': {
    title: "Code V053 : 테니스 엘보, 골 프 엘보",
    desc: "상과염(팔꿈치 인대\n손상) 치유, 미세 파\n열 재생, 날카로운\n통증 억제\n[주파수 구성: 10000, 6000, 3000, 880, 776, 766, 728, 666, 304, 250, 80, 1.2 Hz]",
    freqs: [10000,6000,3000,880,776,766,728,666,304,250,80,1.2],
    category: "stress"
  },
  'V054': {
    title: "Code V054 : 수근관 증후군, 방아쇠수지, 수 지 관절통",
    desc: "눌린 정중신경 압박\n해소, 굽은 손가락\n인대 이완, 손끝 저\n림 완화\n코드병명주파수핵심 치유 목적\n[주파수 구성: 10000, 6000, 3000, 2720, 2008, 666, 250, 304, 160, 80, 1.2 Hz]",
    freqs: [10000,6000,3000,2720,2008,666,250,304,160,80,1.2],
    category: "stress"
  },
  'V055': {
    title: "Code V055 : 요통, 허리/목 디스크",
    desc: "탈출된 디스크(추간\n판)의 치유, 척추 주\n변 근육 경련 및 방\n사통 완화\n[곰팡이∙진균류 명상 코드]\n[주파수 구성: 10000, 6000, 3000, 2720, 787, 727, 666, 305, 125, 80 Hz]",
    freqs: [10000,6000,3000,2720,787,727,666,305,125,80],
    category: "stress"
  },
  'V056': {
    title: "Code V056 : 척추관 협착증, 후종인대골화증",
    desc: "비정상적인 뼈 자라\n남(골극) 및 인대 석\n회화 억제, 신경 압\n박 해소\n[주파수 구성: 10000, 8770, 6000, 3000, 650, 666, 326, 304, 250, 120, 80, 1.2 Hz]",
    freqs: [10000,8770,6000,3000,650,666,326,304,250,120,80,1.2],
    category: "stress"
  },
  'V057': {
    title: "Code V057 : 강직성 척추염",
    desc: "척추 마디의 만성 염\n증 억제, 관절 융합\n(굳어짐) 방지 및 유\n연성 회복\n[주파수 구성: 10000, 6000, 3000, 1550, 880, 666, 650, 326, 80, 1.2 Hz]",
    freqs: [10000,6000,3000,1550,880,666,650,326,80,1.2],
    category: "stress"
  },
  'V058': {
    title: "Code V058 : 골반통증, 원인 모를 만성통증",
    desc: "골반 내 만성 염증\n억제, 굳어진 골반\n기저근 이완 및 신경\n진정\n코드병명주파수핵심 치유 목적\n[주파수 구성: 6000, 3000, 2950, 2720, 1550, 802, 666, 465, 304, 80, 1.5 Hz]",
    freqs: [6000,3000,2950,2720,1550,802,666,465,304,80,1.5],
    category: "stress"
  },
  'V059': {
    title: "Code V059 : 곰팡이균 효모균",
    desc: "전신의 곰팡이/효모\n균 증식 억제, 칸디\n다균 사멸 및 만성\n염증 진정\nFungus_foot_and_g\neneral_1(use 1550\nfor 30min) - 155\n[주파수 구성: 4442, 2411, 1833, 1823, 1550, 1333, 1155, 1130, 1016, 942, 933, 886, 880, 866, 784, 774, 766, 745, 743, 728, 623, 594, 592, 565, 555, 524, 512, 464, 414, 374, 344, 337, 321, 254, 242, 222, 158, 132 Hz]",
    freqs: [4442,2411,1833,1823,1550,1333,1155,1130,1016,942,933,886,880,866,784,774,766,745,743,728,623,594,592,565,555,524,512,464,414,374,344,337,321,254,242,222,158,132],
    category: "sleep"
  },
  'V060': {
    title: "Code V060 : 칸디다균",
    desc: "\n[주파수 구성: 2222, 1552, 1550, 1153, 1134, 1016, 887, 884, 882, 880, 802, 787, 784, 757, 727, 688, 632, 587, 582, 555, 465, 422, 336, 331, 254, 72, 20 Hz]",
    freqs: [2222,1552,1550,1153,1134,1016,887,884,882,880,802,787,784,757,727,688,632,587,582,555,465,422,336,331,254,72,20],
    category: "sleep"
  },
  'V061': {
    title: "Code V061 : 백선 (Ringworm), 무 좀, 표피균",
    desc: "피부와 발톱을 파고\n드는 백선균/표피균\n사멸, 가려움증 완화\n[주파수 구성: 5000, 2422, 800, 732, 465, 442, 422, 345, 128, 120, 92, 76, 60 Hz]",
    freqs: [5000,2422,800,732,465,442,422,345,128,120,92,76,60],
    category: "sleep"
  },
  'V062': {
    title: "Code V062 : 아스페르길루스, 폐포자충",
    desc: "호흡기 점막 및 폐 심부에 증식하는 치명적 곰팡이균 및 독소 억제\n[주파수 구성: 1972, 1823, 942, 758, 743, 697, 524, 374, 340, 339, 247 Hz]",
    freqs: [1972, 1823, 942, 758, 743, 697, 524, 374, 340, 339, 247],
    category: "sleep"
  },
  'V063': {
    title: "Code V063 : 심방세동, 부정 맥",
    desc: "불규칙하고 빠른 심\n박동 안정화, 심장\n근육 및 자율신경계\n이완\n[주파수 구성: 5000, 696, 162, 81, 7.83, 1.2 Hz]",
    freqs: [5000,696,162,81,7.83,1.2],
    category: "sleep"
  },
  'V064': {
    title: "Code V064 : 고혈압 저혈압",
    desc: "경련성 혈관 이완,\n정체된 혈류 개통 및\n자율신경 밸런스(항\n상성) 복구\n[주파수 구성: 10000, 3176, 2112, 880, 787, 727, 528, 324, 304, 95, 20, 15, 9.19, 7.83, 6 Hz]",
    freqs: [10000,3176,2112,880,787,727,528,324,304,95,20,15,9.19,7.83,6],
    category: "focus"
  },
  'V065': {
    title: "Code V065 : 협심증, 심근경색, (판막/선천성)",
    desc: "관상동맥 막힘\n(Blockage) 해소, 혈\n류 부족으로 괴사된\n심장 세포 치유\n코드병명주파수핵심 치유 목적\n[주파수 구성: 2720, 2170, 1865, 1800, 1600, 1500, 880, 832, 789, 787, 776, 727, 706, 690, 660, 465, 444, 428, 230, 125, 95, 72, 60, 20, 7.83, 3 Hz]",
    freqs: [2720,2170,1865,1800,1600,1500,880,832,789,787,776,727,706,690,660,465,444,428,230,125,95,72,60,20,7.83,3],
    category: "focus"
  },
  'V066': {
    title: "Code V066 : A형 바이러스성 간 염",
    desc: "\n[주파수 구성: 321, 346, 414, 423, 487, 558, 578, 693, 717, 786, 878, 3220 Hz]",
    freqs: [321,346,414,423,487,558,578,693,717,786,878,3220],
    category: "digest"
  },
  'V067': {
    title: "Code V067 : B형 바이러스성 간 염",
    desc: "\n[주파수 구성: 2, 5, 6, 1023.72, 334, 433, 767, 869, 876, 477, 574, 752, 779 Hz]",
    freqs: [2,5,6,1023.72,334,433,767,869,876,477,574,752,779],
    category: "digest"
  },
  'V068': {
    title: "Code V068 : C형 바이러스성 간 염",
    desc: "바이러스 억제, 간세포 염증 진\n정 및 재생, 간 수치 안정화, 만\n성 피로 및 황달 해소\n- 3220 Hz (30분): A형 간염\n(Hepatitis A) 및 C형 간염\n(Hepatitis C) 바이러스 억제 타\n겟 주파수.\n[간·췌장·대장 명상 코드]\n코드병명주파수핵심 치유 목적\n[주파수 구성: 10000, 5000, 3220, 3176, 2489, 2189, 1865, 1600, 1550, 1500, 1371, 933, 931, 929, 880, 802, 787, 728, 727, 665, 650, 633, 625, 528, 444 Hz]",
    freqs: [10000,5000,3220,3176,2489,2189,1865,1600,1550,1500,1371,933,931,929,880,802,787,728,727,665,650,633,625,528,444],
    category: "digest"
  },
  'V069': {
    title: "Code V069 : 간염 (Hepatitis)",
    desc: "\n[주파수 구성: 1550, 1351, 922, 880, 802, 727, 477, 329, 317, 224, 28, 284, 458, 534, 788, 9670, 768, 777, 1041, 987, 934, 878, 876, 842, 786, 781, 563, 562, 558, 528, 334, 321, 213, 166 Hz]",
    freqs: [1550,1351,922,880,802,727,477,329,317,224,28,284,458,534,788,9670,768,777,1041,987,934,878,876,842,786,781,563,562,558,528,334,321,213,166],
    category: "digest"
  },
  'V070': {
    title: "Code V070 : 췌장염 (Pancreatitis)",
    desc: "췌장염증 및 부종 진정, 췌장 기\n능 부전 회복, 소화효소 분비 안\n정화\n329, 317, 250,\n224, 166, 146,\n125, 95, 72, 28,\n20\n1550 Hz (30분): 간 및 담도계\n에 퍼진 광범위한 만성 염증 억\n제.\n- 1351 Hz (30분): 바이러스성\n간염(Hepatitis general) 통합\n치료를 위한 핵심 주파수.\n- 876 Hz (30분): B형 간염\n(Hepatitis B) 바이러스 타겟 및\n간 비대증 통제.\n- 727 Hz (30분): 바이러스로\n인해 손상된 간세포의 치유 촉\n진 및 신체 면역력 강화.\n- 317 Hz (30분): 간 해독 기능\n회복 및 C형 간염(Hepatitis C)\n증상 완화 보조.\n[비뇨∙생식기 명상 코드]\n880, 832, 787, 776,\n727, 690, 666, 20,\n440, 464, 600, 624,\n648, 1552, 727,\n787, 880\n[주파수 구성: 10000, 8770, 650, 326, 250, 120, 625, 600, 465, 444, 26, 2720, 2489, 2170, 2127, 2008, 1800, 1600, 1550, 802, 1500 Hz]",
    freqs: [10000,8770,650,326,250,120,625,600,465,444,26,2720,2489,2170,2127,2008,1800,1600,1550,802,1500],
    category: "digest"
  },
  'V071': {
    title: "Code V071 : 대장염 / 궤양성 대장염",
    desc: "장내 유해균 억제, 궤양성 점막\n치유, 과민성 대장 경련 및 설사\n완화\n코드병명주파수핵심 치유 목적\n[주파수 구성: 10000, 5000, 3000, 1550, 880, 832, 802, 787, 727, 650, 621, 465, 454, 440, 433, 344, 326, 152, 1.2 Hz]",
    freqs: [10000,5000,3000,1550,880,832,802,787,727,650,621,465,454,440,433,344,326,152,1.2],
    category: "digest"
  },
  'V072': {
    title: "Code V072 : 전립선 비대증",
    desc: "전립선 비대 조직 축소, 염증\n완화, 요도 압박 해소\n2250 Hz, 2050 Hz: 전립선\n염증 및 비대증(BPH) 타겟 특\n화 주파수\n2128 Hz: 전립선 조직의 비정\n상적 증식 억제\n920 Hz: 골반 기저근 및 전립\n선 주변 신경 긴장 완화\n690 Hz, 666 Hz: 전신 염증\n제거 및 요도 압박으로 인한\n통증 해소\n[주파수 구성: 2720, 2250, 2128, 2050, 2008, 920, 880, 802, 787, 728, 727, 690, 666, 465, 408, 125, 95, 72, 20, 9 Hz]",
    freqs: [2720,2250,2128,2050,2008,920,880,802,787,728,727,690,666,465,408,125,95,72,20,9],
    category: "sleep"
  },
  'V073': {
    title: "Code V073 : 발기부전",
    desc: "골반 혈류 정체 해소, 미세 혈\n관 확장, 생식기 신경 회복\n[주파수 구성: 2127, 2112, 2008, 650, 600, 9.39 Hz]",
    freqs: [2127,2112,2008,650,600,9.39],
    category: "digest"
  },
  'V074': {
    title: "Code V074 : 신부전",
    desc: "신장 여과 기능 자극, 이뇨 작\n용 촉진, 신장 염증 및 부종\n완화\n[관절염 명상 코드]\n[주파수 구성: 1600, 1550, 440, 40, 10, 9.2 Hz]",
    freqs: [1600,1550,440,40,10,9.2],
    category: "digest"
  },
  'V075': {
    title: "Code V075 : 방광염",
    desc: "방광 내 박테리아(대장균 등)\n억제, 만성 염증 및 통증 완화\n[주파수 구성: 1550, 880, 802, 787, 465, 246 Hz]",
    freqs: [1550,880,802,787,465,246],
    category: "digest"
  },
  'V076': {
    title: "Code V076 : 무균성 방광염",
    desc: "세균 감염이 아닌 골반 내 자\n가면역/만성 염증 억제, 통증\n진정\n[주파수 구성: 2720, 2489, 1550, 465, 20, 1.5 Hz]",
    freqs: [2720,2489,1550,465,20,1.5],
    category: "digest"
  },
  'V077': {
    title: "Code V077 : 빈뇨(요실금)",
    desc: "과민성 방광 신경 진정, 괄약\n근 조절 신경 안정, 야간뇨 억\n제\n코드병명주파수핵심 치유 목적\n[주파수 구성: 2250, 2050, 2128, 880, 690, 666 Hz]",
    freqs: [2250,2050,2128,880,690,666],
    category: "digest"
  },
  'V078': {
    title: "Code V078 : 류마티스 관절 염 (Rheumatoid Arthritis)",
    desc: "자가면역 과각성 조절, 급성 염증\n완화, 관절 경직 및 붓기 해소\n[주파수 구성: 10000, 820, 787, 776, 766, 727, 650, 625, 600, 376, 333, 262, 250, 1.2 Hz]",
    freqs: [10000,820,787,776,766,727,650,625,600,376,333,262,250,1.2],
    category: "stress"
  },
  'V079': {
    title: "Code V079 : 관절염",
    desc: "[호흡기 명상 코드]\n코드병명주파수핵심 치유 목적\n[주파수 구성: 10000, 5000, 3176, 3000, 2720, 1664, 1550, 1500, 880, 802, 787, 770, 728, 690, 660, 512, 250, 120, 100, 80, 60, 40, 30, 28, 26, 25, 20, 10, 9.4, 9.39, 7.7, 7.69, 3, 1.5, 1.2, 1000 Hz]",
    freqs: [10000,5000,3176,3000,2720,1664,1550,1500,880,802,787,770,728,690,660,512,250,120,100,80,60,40,30,28,26,25,20,10,9.4,9.39,7.7,7.69,3,1.5,1.2,1000],
    category: "stress"
  },
  'V080': {
    title: "Code V080 : 급∙만성 기관 지염, 기침, 가 래",
    desc: "기관지 염증 완화, 멈추지 않는 기\n침 억제, 가래 배출 및 점막 진정\n7760 Hz, 7344 Hz: 기침\n(Coughing) 및 흉부 감염에 대한\n가장 강력한 억제 고주파 [CAFL\n기준]\n3672 Hz: 급성 및 만성 기관지염\n(Bronchitis) 타겟 특화 주파수\n880 Hz, 727 Hz: 호흡기 전반에\n퍼진 광범위한 염증 진정 및 2차\n감염 방어\n452 Hz: 점막에 들러붙은 끈적한\n가래(Phlegm) 배출 유도 및 호흡기\n흉통 완화\n[주파수 구성: 7760, 7344, 3672, 1234, 880, 776, 743, 727, 688, 683, 464, 452, 333, 72, 20, 9.39, 9.35 Hz]",
    freqs: [7760,7344,3672,1234,880,776,743,727,688,683,464,452,333,72,20,9.39,9.35],
    category: "sleep"
  },
  'V081': {
    title: "Code V081 : 폐렴 (Pneumonia)",
    desc: "폐포 내 세균/바이러스성 감염 억\n제, 고열 및 부종 감소, 폐 기능 회\n복\n[주파수 구성: 7660, 1550, 880, 787, 688, 412, 6007, 5423, 5421, 5420, 5419, 2688, 2581, 2356, 967, 877, 838, 765, 748, 746, 568, 542, 532, 522, 520, 440 Hz]",
    freqs: [7660,1550,880,787,688,412,6007,5423,5421,5420,5419,2688,2581,2356,967,877,838,765,748,746,568,542,532,522,520,440],
    category: "sleep"
  },
  'V082': {
    title: "Code V082 : 천식 (Asthma)",
    desc: "과민해진 기도 경련 진정, 좁아진\n기관지 확장(심호흡 유도), 산소 공\n급\n[주파수 구성: 7344, 3702, 2720, 3672, 2170, 1800, 1600, 1500, 1283, 1234, 1233, 880, 787, 727, 522, 444, 146, 125, 95, 72, 20, 0.5 Hz]",
    freqs: [7344,3702,2720,3672,2170,1800,1600,1500,1283,1234,1233,880,787,727,522,444,146,125,95,72,20,0.5],
    category: "sleep"
  },
  'V083': {
    title: "Code V083 : [입면 장애] 잠들기 힘든 증상, 과각성",
    desc: "과도하게 흥분된 뇌파(교감신경) 안정, 슈만 공명을 통한 심신 이완 및 수면 유도\n10 Hz: 알파파 영역의 주파수로, 수면 시작 전 뇌의 과각성 상태를 차분하게 가라앉힙니다.\n7.83 Hz: 지구의 고유 주파수인 '슈만 공명(Schumann resonance)'으로, 극도의 긴장을 풀고 편안한 상태를 유도합니다.\n1500 Hz, 802 Hz: CAFL에 명시된 불면증(Insomnia) 타겟 특화 주파수입니다.\n[주파수 구성: 6000, 304, 10, 3, 3.59, 7.83, 342, 802, 880, 1500 Hz]",
    freqs: [6000, 304, 10, 3, 3.59, 7.83, 342, 802, 880, 1500],
    category: "sleep"
  },
  'V084': {
    title: "Code V084 : [수면 유지] 자주 깨는 증상, 얕은 잠",
    desc: "델타파(서파 수면) 동조를 통한 깊은 수면 유지, 뇌 신경망 휴식 및 재연결.\n3.59 Hz, 3 Hz: 델타파(0.1~3.9Hz) 영역의 극저주파로, 호르몬 및 면역 활동을 자극하고 가장 깊은 단계의 수면(서파 수면)을 유지하게 합니다.\n304 Hz: 불면증 및 수면 중 각성 방지 주파수.\n1550 Hz, 880 Hz: 수면을 방해할 수 있는 체내의 미세한 만성 염증이나 기생충 등의 숨은 요인을 억제하는 공통 주파수.\n[주파수 구성: 1500, 880, 802, 6000, 3.59, 3, 7.83, 304, 432, 1550 Hz]",
    freqs: [1500, 880, 802, 6000, 3.59, 3, 7.83, 304, 432, 1550],
    category: "sleep"
  },
  'V085': {
    title: "Code V085 : [스트레스] 불안, 우울 동반 불면증",
    desc: "수면을 방해하는 불안감과 우울감 해소, 무너진 생체 리듬(일주기 리듬) 리셋\n[주파수 구성: 6000, 1550, 1500, 880, 802, 800, 432, 304, 10, 7.83, 3.59, 3 Hz]",
    freqs: [6000, 1550, 1500, 880, 802, 800, 432, 304, 10, 7.83, 3.59, 3],
    category: "sleep"
  },
  'V086': {
    title: "Code V086 : 메니에르병 (Meniere's Care)",
    desc: "내이 림프압(수종) 안정화, 이명 및 귀 충만감 완화, 청각 세포 보호\n- 5000 Hz: CAFL 메니에르병 대표 마스터 주파수 (내이 림프 순환 촉진)\n- 1130 Hz, 782 Hz: 귀 내부 신경 안정화 및 메니에르병 특화 주파수\n- 880 Hz, 456.6 Hz: 내이 림프관 주변 미세 염증 진정 및 청각 신경 보호\n- 33 Hz, 9 Hz, 8.8 Hz: 뇌파를 알파-세타 영역으로 유도하여 스트레스성 이명을 조율하고 내이의 전기적 활성을 안정시키는 극저주파\n[주파수 구성: 5000, 1130, 782, 880, 456.6, 33, 9, 8.8 Hz]",
    freqs: [5000, 1130, 782, 880, 456.6, 33, 9, 8.8],
    category: "focus"
  },
  'V087': {
    title: "Code V087 : 회전성 어지럼증 (Vertigo)",
    desc: "전정신경 과흥분 진정, 자율신경계 평형 유지, 갑작스러운 메스꺼움 완화\n- 1550 Hz, 727 Hz: 전정기관 및 평형 감각 신경계의 염증 진정\n- 802 Hz, 787 Hz: 림프 순환 및 두부 내 압력 안정화\n- 316 Hz, 60 Hz: 평형감각 균형 조율 및 신경 충격 완화\n- 5.8 Hz, 4 Hz: 세타파 뇌파 동조를 통한 급성 어지럼증 및 메스꺼움 진정\n[주파수 구성: 1550, 802, 787, 727, 316, 60, 5.8, 4 Hz]",
    freqs: [1550, 802, 787, 727, 316, 60, 5.8, 4],
    category: "focus"
  },
  'V088': {
    title: "Code V088 : 메니에르병 통합 케어 (Meniere's Disease Recovery)",
    desc: "내이 림프수종 배출, 극심한 회전성 어지럼증 및 난청/이명 복합 치유\n1. 주파수 레시피 (총 180분)\n- 5000 Hz: CAFL에서 메니에르병 완화를 위해 16분 이상 길게 실행하도록 강력 권장하는 대표 마스터 주파수.\n- 1130 Hz, 782 Hz: 귀 내부 신경 안정화 및 메니에르병 특화 주파수 (782Hz는 26분 장기 재생 권장).\n- 880 Hz, 456.6 Hz: 내이 림프관 주변의 미세 염증을 식히고 순환을 유도하는 주파수.\n- 33 Hz, 9 Hz, 8.8 Hz: 뇌파를 알파-세타 영역으로 유도하여 스트레스성 이명을 조율하고, 내이의 전기적 활성을 안정시키는 극저주파.\n[주파수 구성: 5000, 1130, 782, 880, 456.6, 33, 9, 8.8 Hz]",
    freqs: [5000, 1130, 782, 880, 456.6, 33, 9, 8.8],
    category: "focus"
  },
  'V089': {
    title: "Code V089 : 두통 (복합 주파수)",
    desc: "편두통, 긴장성 두통, 뇌 혈류 장애 및 두부 신경 긴장 완화\n- 10000 Hz, 3000 Hz: 두부 신경 진통 및 마스터 힐링 고주파\n- 880 Hz, 787 Hz, 727 Hz, 650 Hz, 625 Hz, 600 Hz, 522 Hz, 520 Hz, 304 Hz: 뇌혈관 및 두경부 미세 염증/긴장 진정\n- 160 Hz, 146 Hz, 144 Hz, 125 Hz, 95 Hz, 73 Hz: 두경부 근육 이완 및 가상 피치 중저역 진동\n- 20 Hz, 10 Hz, 9.6 Hz, 9.39 Hz, 7.83 Hz, 6.3 Hz, 5.8 Hz, 4.9 Hz, 4 Hz, 1.2 Hz: 알파-세타-델타 뇌파 동조를 통한 뇌신경 안정 및 심신 이완\n[주파수 구성: 10000, 3000, 880, 787, 727, 650, 625, 600, 522, 520, 304, 160, 146, 144, 125, 95, 73, 20, 10, 9.6, 9.39, 7.83, 6.3, 5.8, 4.9, 4, 1.2 Hz]",
    freqs: [10000, 3000, 880, 787, 727, 650, 625, 600, 522, 520, 304, 160, 146, 144, 125, 95, 73, 20, 10, 9.6, 9.39, 7.83, 6.3, 5.8, 4.9, 4, 1.2],
    category: "focus"
  },
  'V090': {
    title: "Code V090 : 통증 해방 및 신체 균형 리셋 (120분 완성)",
    desc: "통증 신호 차단, 급·만성 염증 억제, 체액 산성화 개선 및 부교감신경 이완\n[1단계: 신경 안정 및 부교감신경 활성화 (20분)]\n- 7.83 Hz, 10 Hz, 20 Hz, 6000 Hz: 교감신경 진정, 슈만 공명 뇌파 동조, 기초 산증 완화 및 심신 이완\n[2단계: 산성화 감소 및 면역 기능 증강 (35분)]\n- 146 Hz, 776 Hz, 802 Hz, 880 Hz, 3176 Hz, 5611 Hz, 10000 Hz: 체액 알칼리화 보조, 림프구 생성 자극 및 면역 방어력 증강\n[3단계: 염증 감소 및 조직 진정 (15분)]\n- 1.5 Hz, 3.6 Hz, 2720 Hz: 전신 염증 반응 직접 차단 및 조직 진정\n[4단계: 통증 집중 감소 및 진통 (50분)]\n- 4.9 Hz, 40 Hz, 80 Hz, 95 Hz, 304 Hz, 666 Hz, 727 Hz, 690 Hz, 3000 Hz: 급성/만성/암성/감염성 통증 차단 및 강력한 진통 효과 (3000Hz 집중)\n[주파수 구성: 7.83, 10, 20, 6000, 146, 776, 802, 880, 3176, 5611, 10000, 1.5, 3.6, 2720, 4.9, 40, 80, 95, 304, 666, 727, 690, 3000 Hz]",
    freqs: [7.83, 10, 20, 6000, 146, 776, 802, 880, 3176, 5611, 10000, 1.5, 3.6, 2720, 4.9, 40, 80, 95, 304, 666, 727, 690, 3000],
    category: "stress"
  }
};
window.vipRecipes = vipRecipes;

/**
 * 3. 솔라브르 주파수 레시피 딕셔너리
 * 웰니스 기반의 라이프스타일 힐링 설명과 주파수 코드 구성입니다.
 */
const rifeRecipes = {
  '001': {
    title: 'Code 001 : 이너 피스 (Inner Peace & Sleep)',
    desc: '일상의 긴장을 해소하고 편안한 수면 환경을 조성하여 깊은 휴식을 돕는 주파수 레시피입니다. (Inner Peace & Sleep 테마)\n[주파수 구성: 3.59, 3, 7.83, 10, 1550, 1500, 880, 802, 6000, 304, 2720, 2489, 2170, 2000, 1865, 1800, 1600, 776, 727, 660, 465, 450, 444, 440, 428, 380, 250, 146, 125, 95, 72, 20, 1.2 Hz]',
    freqs: [3.59, 3, 7.83, 10, 1550, 1500, 880, 802, 6000, 304, 2720, 2489, 2170, 2000, 1865, 1800, 1600, 776, 727, 660, 465, 450, 444, 440, 428, 380, 250, 146, 125, 95, 72, 20, 1.2],
    category: 'sleep'
  },
  '002': {
    title: 'Code 002 : 야간 백색 안정 (Night Calm & Sleep)',
    desc: '수면 유도와 숙면 환경 조성을 위한 야간 주파수 레시피로 깊은 뇌파 안정을 유도합니다. (Night Calm & Sleep 테마)\n[주파수 구성: 6000, 304, 2720, 72, 20, 1.2, 3.59 Hz]',
    freqs: [6000, 304, 2720, 72, 20, 1.2, 3.59],
    category: 'sleep'
  },
  '003': {
    title: 'Code 003 : 수면 패턴 조율 (Sleep Cycle Balance)',
    desc: '자연스러운 수면 리듬 조율과 피로 완화를 위한 웰니스 수면 패턴 조율 주파수입니다. (Sleep Cycle Balance 테마)\n[주파수 구성: 3, 7.83, 10, 880, 727, 660, 428 Hz]',
    freqs: [3, 7.83, 10, 880, 727, 660, 428],
    category: 'sleep'
  },
  '004': {
    title: 'Code 004 : 깊은 입면 유도 (Deep Sleep Induction)',
    desc: '누워도 잠들기 힘든 밤에 편안하게 입면을 유도하는 맞춤형 뇌파 동조 레시피입니다. (Deep Sleep Induction 테마)\n[주파수 구성: 1.2, 3.0, 7.83, 146, 20, 440 Hz]',
    freqs: [1.2, 3.0, 7.83, 146, 20, 440],
    category: 'sleep'
  },
  '005': {
    title: 'Code 005 : 릴랙스 나이트 (Relax Night & Calm)',
    desc: '마음의 긴장감을 내려놓고 신체를 수면 모드로 천천히 이끄는 야간 웰니스 주파수입니다. (Relax Night & Calm 테마)\n[주파수 구성: 428, 380, 250, 125, 95, 72 Hz]',
    freqs: [428, 380, 250, 125, 95, 72],
    category: 'sleep'
  },
  '006': {
    title: 'Code 006 : 꿈 없는 편안한 휴식 (Peaceful Night Dreamer)',
    desc: '선잠을 자거나 뒤척임이 심할 때 깊은 수면을 취할 수 있게 지원합니다. (Peaceful Night Dreamer 테마)\n[주파수 구성: 727, 787, 880, 10, 3.59, 1.2 Hz]',
    freqs: [727, 787, 880, 10, 3.59, 1.2],
    category: 'sleep'
  },
  '007': {
    title: 'Code 007 : 야간 생각 멈춤 (Night Mind Silence)',
    desc: '잠들기 전 꼬리를 무는 수많은 잡념과 생각을 잠재우고 뇌의 부하를 덜어주는 조율 주파수입니다. (Night Mind Silence 테마)\n[주파수 구성: 10, 7.83, 3.0, 1.5, 1.2 Hz]',
    freqs: [10, 7.83, 3.0, 1.5, 1.2],
    category: 'sleep'
  },
  '008': {
    title: 'Code 008 : 자율신경 수면 조율 (Autonomic Sleep Aid)',
    desc: '신체 자율신경계를 휴식 모드로 자극하여 생체 리듬의 원활한 복구를 돕습니다. (Autonomic Sleep Aid 테마)\n[주파수 구성: 1550, 802, 727, 440, 3.59, 1.2 Hz]',
    freqs: [1550, 802, 727, 440, 3.59, 1.2],
    category: 'sleep'
  },
  '009': {
    title: 'Code 009 : 미세 피로 수면 릴리프 (Micro Fatigue Sleep Relief)',
    desc: '낮 동안 쌓인 근육과 신경의 피로를 숙면 중에 부드럽게 분해하도록 돕습니다. (Micro Fatigue Sleep Relief 테마)\n[주파수 구성: 20, 72, 304, 880, 1500, 3.0 Hz]',
    freqs: [20, 72, 304, 880, 1500, 3.0],
    category: 'sleep'
  },
  '010': {
    title: 'Code 010 : 미드나잇 가이드 (Midnight Breathing Sleep)',
    desc: '호흡과 수면 파동을 일치시켜 한밤중의 편안한 호흡 리듬을 구축해 주는 주파수입니다. (Midnight Breathing Sleep 테마)\n[주파수 구성: 3.59, 3.0, 7.83, 10, 20, 1.2 Hz]',
    freqs: [3.59, 3.0, 7.83, 10, 20, 1.2],
    category: 'sleep'
  },
  '011': {
    title: 'Code 011 : 수면 긴장 이완 (Sleep Tension Release)',
    desc: '누워 있어도 느껴지는 근육 및 정서 긴장을 누그러뜨리는 치유 레시피입니다. (Sleep Tension Release 테마)\n[주파수 구성: 440, 727, 787, 880, 1550, 3.59 Hz]',
    freqs: [440, 727, 787, 880, 1550, 3.59],
    category: 'sleep'
  },
  '012': {
    title: 'Code 012 : 슬립 모션 (Sleep Flow & Rest)',
    desc: '수면 중 전신의 자연스러운 에너지를 원활하게 조율하는 대사 서포트 수면 주파수입니다. (Sleep Flow & Rest 테마)\n[주파수 구성: 125, 250, 440, 880, 1500, 3.0 Hz]',
    freqs: [125, 250, 440, 880, 1500, 3.0],
    category: 'sleep'
  },
  '013': {
    title: 'Code 013 : 고요한 새벽 공명 (Serene Dawn Resonance)',
    desc: '새벽녘에 깨지 않고 자연스러운 기상 시간까지 숙면 상태를 이어가도록 보조하는 레시피입니다. (Serene Dawn Resonance 테마)\n[주파수 구성: 7.83, 10, 432, 528, 3.0, 1.2 Hz]',
    freqs: [7.83, 10, 432, 528, 3.0, 1.2],
    category: 'sleep'
  },
  '014': {
    title: 'Code 014 : 딥 힐링 슬립 (Deep Healing Bed)',
    desc: '심신이 탈진되었을 때, 회복과 휴식을 최고로 높여주는 힐링 주파수입니다. (Deep Healing Bed 테마)\n[주파수 구성: 174, 285, 396, 432, 528, 3.0 Hz]',
    freqs: [174, 285, 396, 432, 528, 3.0],
    category: 'sleep'
  },
  '015': {
    title: 'Code 015 : 야간 긴장 분해 (Night Tension Melting)',
    desc: '단단히 긴장한 신경과 세포의 흐름을 녹이듯 부드럽게 완화시켜 줍니다. (Night Tension Melting 테마)\n[주파수 구성: 380, 428, 440, 727, 880, 3.59 Hz]',
    freqs: [380, 428, 440, 727, 880, 3.59],
    category: 'sleep'
  },
  '016': {
    title: 'Code 016 : 자연의 리듬 수면 (Natural Rhythm Rest)',
    desc: '대자연의 주파수 대역과 신체 뇌파를 동조시켜 편안하고 원초적인 깊은 휴식을 이끌어냅니다. (Natural Rhythm Rest 테마)\n[주파수 구성: 7.83, 3.0, 1.2, 72, 95, 146 Hz]',
    freqs: [7.83, 3.0, 1.2, 72, 95, 146],
    category: 'sleep'
  },
  '017': {
    title: 'Code 017 : 수면 전막 보호 (Rest Pre-shield)',
    desc: '수면 시 외부 노이즈나 전자파 스트레스로부터 예민한 뇌파를 차단하고 보호하는 레시피입니다. (Rest Pre-shield 테마)\n[주파수 구성: 10000, 1550, 880, 727, 3.0, 1.2 Hz]',
    freqs: [10000, 1550, 880, 727, 3.0, 1.2],
    category: 'sleep'
  },
  '018': {
    title: 'Code 018 : 마인드 오아시스 (Mind Oasis & Meditation)',
    desc: '마음의 어수선함을 정돈하고 감정의 균형을 되찾아 주어 스트레스 가득한 일상 속 편안한 쉼터를 제공합니다. (Mind Oasis & Meditation 테마)\n[주파수 구성: 10000, 800, 230, 95, 7.83, 7.8, 6.8, 3.5, 3, 1.5, 1.2 Hz]',
    freqs: [10000, 800, 230, 95, 7.83, 7.8, 6.8, 3.5, 3, 1.5, 1.2],
    category: 'stress'
  },
  '019': {
    title: 'Code 019 : 하트 릴랙세이션 (Heart Calm & Flow)',
    desc: '감정적인 조급함이나 두근거림을 차분하게 진정시키고 내면의 호흡을 안정화합니다. (Heart Calm & Flow 테마)\n[주파수 구성: 528, 432, 396, 7.83, 10, 1.5 Hz]',
    freqs: [528, 432, 396, 7.83, 10, 1.5],
    category: 'stress'
  },
  '020': {
    title: 'Code 020 : 일상 스트레스 실드 (Daily Stress Shield)',
    desc: '일상 생활 중 수시로 밀려오는 외부 긴장감과 예민함으로부터 마음을 지키는 웰니스 보호막입니다. (Daily Stress Shield 테마)\n[주파수 구성: 10000, 3000, 1550, 880, 802, 727, 440 Hz]',
    freqs: [10000, 3000, 1550, 880, 802, 727, 440],
    category: 'stress'
  },
  '021': {
    title: 'Code 021 : 과도한 생각 이완 (Overthinking Release)',
    desc: '잡념과 불필요한 과몰입을 차단하고 뇌의 신경계를 명상 상태로 전환시켜 스트레스를 해소합니다. (Overthinking Release 테마)\n[주파수 구성: 10, 7.83, 3.5, 3.0, 1.2 Hz]',
    freqs: [10, 7.83, 3.5, 3.0, 1.2],
    category: 'stress'
  },
  '022': {
    title: 'Code 022 : 내면의 고요 (Inner Silent Space)',
    desc: '주변의 잡음과 마음의 소요를 모두 지우고 순수한 침묵의 편안함을 전해 주는 마인드풀 조율 주파수입니다. (Inner Silent Space 테마)\n[주파수 구성: 432, 528, 7.83, 3.0, 1.5 Hz]',
    freqs: [432, 528, 7.83, 3.0, 1.5],
    category: 'stress'
  },
  '023': {
    title: 'Code 023 : 분노 긴장 해소 (Anger Tension Release)',
    desc: '욱하거나 조급해지는 부정적 감정 에너지를 부드러운 중저 주파수대로 정화하고 어루만집니다. (Anger Tension Release 테마)\n[주파수 구성: 3.6, 7.83, 396, 432, 727, 880 Hz]',
    freqs: [3.6, 7.83, 396, 432, 727, 880],
    category: 'stress'
  },
  '024': {
    title: 'Code 024 : 가슴 답답함 완화 (Chest Relief Flow)',
    desc: '스트레스로 인해 가슴 깊은 곳이 답답하고 막힌 듯할 때, 에너지를 편안하게 열어주는 파동입니다. (Chest Relief Flow 테마)\n[주파수 구성: 727, 787, 880, 5000, 10, 3.0 Hz]',
    freqs: [727, 787, 880, 5000, 10, 3.0],
    category: 'stress'
  },
  '025': {
    title: 'Code 025 : 심적 불안 조율 (Anxiety Relief Wave)',
    desc: '예기치 못한 불안감이나 긴장된 마음 상태를 치유와 공명의 주파수로 은은하게 감싸 안습니다. (Anxiety Relief Wave 테마)\n[주파수 구성: 396, 432, 7.83, 10, 1.5, 1.2 Hz]',
    freqs: [396, 432, 7.83, 10, 1.5, 1.2],
    category: 'stress'
  },
  '026': {
    title: 'Code 026 : 정서적 패닉 릴리프 (Emotional Panic Relief)',
    desc: '정서적 압박감이 한계에 달했을 때, 가장 빠르게 뇌파를 이완 상태로 유도하는 응급 진정 주파수입니다. (Emotional Panic Relief 테마)\n[주파수 구성: 10000, 5000, 880, 727, 396, 3.0 Hz]',
    freqs: [10000, 5000, 880, 727, 396, 3.0],
    category: 'stress'
  },
  '027': {
    title: 'Code 027 : 긴장성 해방 (Tension Freedom Wave)',
    desc: '압박감과 스트레스로부터 무의식의 영역까지 완벽한 자유로움을 느끼도록 설계된 명상 주파수입니다. (Tension Freedom Wave 테마)\n[주파수 구성: 7.83, 10, 125, 250, 440, 727 Hz]',
    freqs: [7.83, 10, 125, 250, 440, 727],
    category: 'stress'
  },
  '028': {
    title: 'Code 028 : 평온한 아침 호흡 (Serene Morning Breath)',
    desc: '상쾌하고 차분하게 하루의 마음을 준비하도록 돕는 오전 전용 감성 명상 주파수입니다. (Serene Morning Breath 테마)\n[주파수 구성: 7.83, 10, 432, 528, 639 Hz]',
    freqs: [7.83, 10, 432, 528, 639],
    category: 'stress'
  },
  '029': {
    title: 'Code 029 : 오후의 휴식 (Afternoon Tea Rest)',
    desc: '바쁜 일상 중 잠시 브레이크 타임을 가질 때 마음을 차분히 내려놓게 이끕니다. (Afternoon Tea Rest 테마)\n[주파수 구성: 10, 432, 528, 741, 3.0 Hz]',
    freqs: [10, 432, 528, 741, 3.0],
    category: 'stress'
  },
  '030': {
    title: 'Code 030 : 이브닝 리셋 (Evening Calm Reset)',
    desc: '퇴근 후 지친 정신을 맑게 가다듬고 온전한 사생활을 평온하게 즐길 수 있도록 돕는 릴리프 레시피입니다. (Evening Calm Reset 테마)\n[주파수 구성: 7.83, 396, 432, 528, 1.5 Hz]',
    freqs: [7.83, 396, 432, 528, 1.5],
    category: 'stress'
  },
  '031': {
    title: 'Code 031 : 멘탈 파워 서포트 (Mental Recovery Support)',
    desc: '마음의 상처나 극심한 피로로부터 정서적 에너지의 빠른 회복을 유도하는 뇌파 케어 주파수입니다. (Mental Recovery Support 테마)\n[주파수 구성: 10000, 880, 727, 440, 10, 3.0 Hz]',
    freqs: [10000, 880, 727, 440, 10, 3.0],
    category: 'stress'
  },
  '032': {
    title: 'Code 032 : 우주의 자연 조화 (Cosmic Harmony Wave)',
    desc: '우주의 기본 조율 음계인 432Hz와 슈만 공명 주파수를 결합하여 자연의 편안함을 전달합니다. (Cosmic Harmony Wave 테마)\n[주파수 구성: 432, 727, 880, 10000, 7.83 Hz]',
    freqs: [432, 727, 880, 10000, 7.83],
    category: 'stress'
  },
  '033': {
    title: 'Code 033 : 정서 안정 필드 (Emotional Calm Field)',
    desc: '심신의 균형을 복원하고 타인과의 대화나 소통에서 마인드 컨트롤을 유도합니다. (Emotional Calm Field 테마)\n[주파수 구성: 396, 432, 528, 639, 7.83 Hz]',
    freqs: [396, 432, 528, 639, 7.83],
    category: 'stress'
  },
  '034': {
    title: 'Code 034 : 감정 찌꺼기 정화 (Emotional Detox Wave)',
    desc: '응어리진 정서적 찌꺼기나 부정적인 감정 상태를 차분히 씻어내는 내면 청소 주파수입니다. (Emotional Detox Wave 테마)\n[주파수 구성: 741, 7.83, 10, 396, 432 Hz]',
    freqs: [741, 7.83, 10, 396, 432],
    category: 'stress'
  },
  '035': {
    title: 'Code 035 : 바디 퓨리파이 (Body Purify & Balance)',
    desc: '신체의 정화 주기를 자극하고 축적된 찌꺼기와 정체된 에너지를 씻어내어 세포 본연의 가벼움을 선사하는 조율 주파수입니다. (Body Purify & Balance 테마)\n[주파수 구성: 10000, 3176, 3040, 880, 787, 751, 727, 676, 635, 625, 522, 465, 444, 440, 304 Hz]',
    freqs: [10000, 3176, 3040, 880, 787, 751, 727, 676, 635, 625, 522, 465, 444, 440, 304],
    category: 'body'
  },
  '036': {
    title: 'Code 036 : 모빌리티 이완 (Mobility Relief & Comfort)',
    desc: '신체적 긴장이나 운동 후 뻐근함을 풀어주고, 움직임을 부드럽고 가볍게 돕는 릴리프 주파수입니다. (Mobility Relief & Comfort 테마)\n[주파수 구성: 10000, 6000, 3000, 2720, 1550, 880, 802, 787, 727, 690, 666, 304 Hz]',
    freqs: [10000, 6000, 3000, 2720, 1550, 880, 802, 787, 727, 690, 666, 304],
    category: 'body'
  },
  '037': {
    title: 'Code 037 : 뭉친 근육 릴리프 (Muscle Tension Release)',
    desc: '자세 불균형이나 누적된 긴장으로 인해 뭉친 근육을 편안하게 이완시켜 주는 주파수입니다. (Muscle Tension Release 테마)\n[주파수 구성: 3000, 1550, 880, 802, 787, 727, 304, 40 Hz]',
    freqs: [3000, 1550, 880, 802, 787, 727, 304, 40],
    category: 'body'
  },
  '038': {
    title: 'Code 038 : 척추 바른 흐름 (Spine Flow Support)',
    desc: '장시간 잘못된 자세로 굳어진 척추 라인 주변 신경와 흐름을 조율하고 정렬을 돕습니다. (Spine Flow Support 테마)\n[주파수 구성: 3000, 95, 1550, 802, 880, 787, 776, 727, 650, 625, 600, 326 Hz]',
    freqs: [3000, 95, 1550, 802, 880, 787, 776, 727, 650, 625, 600, 326],
    category: 'body'
  },
  '039': {
    title: 'Code 039 : 목·어깨 릴리프 (Neck & Shoulder Relief)',
    desc: '컴퓨터나 폰 사용이 많은 현대인의 고질적인 뒷목과 어깨 뭉침을 부드럽게 풀어주는 파동입니다. (Neck & Shoulder Relief 테마)\n[주파수 구성: 10000, 3000, 1550, 880, 727, 304, 95, 40 Hz]',
    freqs: [10000, 3000, 1550, 880, 727, 304, 95, 40],
    category: 'body'
  },
  '040': {
    title: 'Code 040 : 전신 긴장 풀기 (Full Body Ease)',
    desc: '몸이 찌푸둥하고 무거울 때 전신의 감각을 깨워주고 굳은 근막을 이완시켜 주는 주파수입니다. (Full Body Ease 테마)\n[주파수 구성: 7.83, 10, 40, 95, 304, 727, 880, 5000 Hz]',
    freqs: [7.83, 10, 40, 95, 304, 727, 880, 5000],
    category: 'body'
  },
  '041': {
    title: 'Code 041 : 뻐근한 등 이완 (Back Relief Wave)',
    desc: '오래 앉아 있거나 일할 때 느끼는 등의 뻐근함과 결림 증상 완화를 돕는 스페셜 테라피입니다. (Back Relief Wave 테마)\n[주파수 구성: 3000, 880, 787, 727, 304, 95, 40 Hz]',
    freqs: [3000, 880, 787, 727, 304, 95, 40],
    category: 'body'
  },
  '042': {
    title: 'Code 042 : 하체 무거움 해소 (Heavy Legs Flow)',
    desc: '오랫동안 서 서 일하거나 하체에 무거움이 정체된 분들을 위한 순환 케어 주파수입니다. (Heavy Legs Flow 테마)\n[주파수 구성: 10000, 5000, 2720, 880, 727, 304, 40 Hz]',
    freqs: [10000, 5000, 2720, 880, 727, 304, 40],
    category: 'body'
  },
  '043': {
    title: 'Code 043 : 운동 후 빠른 리커버리 (Post-Workout Recovery)',
    desc: '강도 높은 스포츠 활동 후 지치고 손상된 신체 근육의 빠른 회복과 피로 극복을 지원합니다. (Post-Workout Recovery 테마)\n[주파수 구성: 10000, 3000, 1500, 880, 787, 727, 304, 40 Hz]',
    freqs: [10000, 3000, 1500, 880, 787, 727, 304, 40],
    category: 'body'
  },
  '044': {
    title: 'Code 044 : 마디마디 뻐근함 해소 (Joint Comfort Support)',
    desc: '환절기나 습한 날 마디마디 욱신거리고 뻐근한 관절 주위의 미세 순환을 원활히 돕습니다. (Joint Comfort Support 테마)\n[주파수 구성: 10000, 5000, 3000, 1550, 880, 727, 40 Hz]',
    freqs: [10000, 5000, 3000, 1550, 880, 727, 40],
    category: 'body'
  },
  '045': {
    title: 'Code 045 : 신체 순환 부스터 (Circulation Booster)',
    desc: '전신 온기와 산소 흐름을 원활히 하여 둔해진 신체 컨디션의 전반적 향상을 돕습니다. (Circulation Booster 테마)\n[주파수 구성: 10000, 2720, 1865, 1550, 880, 727, 40 Hz]',
    freqs: [10000, 2720, 1865, 1550, 880, 727, 40],
    category: 'body'
  },
  '046': {
    title: 'Code 046 : 누적 피로 브레이커 (Fatigue Breaker Wave)',
    desc: '일상적인 강행군으로 몸 전체가 방전되었을 때 활력 세포의 충전을 유도하는 파동입니다. (Fatigue Breaker Wave 테마)\n[주파수 구성: 10000, 880, 787, 727, 304, 20 Hz]',
    freqs: [10000, 880, 787, 727, 304, 20],
    category: 'body'
  },
  '047': {
    title: 'Code 047 : 바디 워밍업 (Body Warmth Flow)',
    desc: '손발 끝이 항상 가라앉고 차가운 분들의 체온 밸런스와 혈류 흐름을 활성화합니다. (Body Warmth Flow 테마)\n[주파수 구성: 10000, 5000, 2720, 880, 727, 20 Hz]',
    freqs: [10000, 5000, 2720, 880, 727, 20],
    category: 'body'
  },
  '048': {
    title: 'Code 048 : 릴리프 터치 (Relief Touch Wave)',
    desc: '신체 부위의 국소적인 피로와 뭉침을 부드러운 초음파 느낌의 미세 파동으로 이완합니다. (Relief Touch Wave 테마)\n[주파수 구성: 3000, 1550, 880, 727, 304, 40 Hz]',
    freqs: [3000, 1550, 880, 727, 304, 40],
    category: 'body'
  },
  '049': {
    title: 'Code 049 : 밤샘 작업 신체 릴렉스 (Night-shift Body Rest)',
    desc: '밤샘 일이나 공부 등으로 흐트러진 신체 시계와 피로 부하를 안정시킵니다. (Night-shift Body Rest 테마)\n[주파수 구성: 10000, 3000, 880, 727, 3.0, 1.2 Hz]',
    freqs: [10000, 3000, 880, 727, 3.0, 1.2],
    category: 'body'
  },
  '050': {
    title: 'Code 050 : 가벼운 걸음걸이 (Light Steps Resonance)',
    desc: '하루의 마감 후 퉁퉁 부은 발과 발목 주변의 웰니스 케어를 돕는 전용 주파수입니다. (Light Steps Resonance 테마)\n[주파수 구성: 3000, 2720, 880, 727, 304, 40 Hz]',
    freqs: [3000, 2720, 880, 727, 304, 40],
    category: 'body'
  },
  '051': {
    title: 'Code 051 : 수면 전 전신 이완 (Pre-sleep Body Ease)',
    desc: '자기 직전 전신 근육과 관절의 무의식적 긴장감을 안전하게 털어내는 맞춤 조율입니다. (Pre-sleep Body Ease 테마)\n[주파수 구성: 3.0, 1.2, 40, 304, 727, 880 Hz]',
    freqs: [3.0, 1.2, 40, 304, 727, 880],
    category: 'body'
  },
  '052': {
    title: 'Code 052 : 풀 서큘레이션 (Full Circulation & Flow)',
    desc: '전신의 흐름을 자극하여 원활한 순환을 돕고, 손발 끝까지 온기가 돌도록 에너지를 소통시키는 순환 주파수입니다. (Full Circulation & Flow 테마)\n[주파수 구성: 10000, 7767, 7762, 7702, 7009, 5000, 2720, 2489, 880, 728, 444 Hz]',
    freqs: [10000, 7767, 7762, 7702, 7009, 5000, 2720, 2489, 880, 728, 444],
    category: 'digest'
  },
  '053': {
    title: 'Code 053 : 메타볼릭 밸런스 (Metabolic Balance & Energy)',
    desc: '신체 대사 활동의 균형을 돕고, 영양분 흡수와 에너지 조절을 원활하게 유도하여 전신의 밸런스를 맞춰줍니다. (Metabolic Balance & Energy 테마)\n[주파수 구성: 5000, 4200, 3347, 5611, 2791, 2127, 880, 787, 727, 20 Hz]',
    freqs: [5000, 4200, 3347, 5611, 2791, 2127, 880, 787, 727, 20],
    category: 'digest'
  },
  '054': {
    title: 'Code 054 : 식후 속 편한 조율 (Digestive Comfort Support)',
    desc: '식사 후 찾아오는 속의 더부룩함이나 장의 팽팽함을 완화하고 소화를 부드럽게 촉진합니다. (Digestive Comfort Support 테마)\n[주파수 구성: 10000, 1550, 880, 802, 787, 727, 465, 125, 95, 72 Hz]',
    freqs: [10000, 1550, 880, 802, 787, 727, 465, 125, 95, 72],
    category: 'digest'
  },
  '055': {
    title: 'Code 055 : 복부 팽만 이완 (Abdomen Tension Release)',
    desc: '스트레스나 가스로 가득 찬 복부 주위의 복막 및 내장기 긴장을 가라앉히는 파동입니다. (Abdomen Tension Release 테마)\n[주파수 구성: 1550, 880, 802, 787, 727, 95, 72 Hz]',
    freqs: [1550, 880, 802, 787, 727, 95, 72],
    category: 'digest'
  },
  '056': {
    title: 'Code 056 : 장 기능 밸런스 (Gut Rhythm Balance)',
    desc: '민감하거나 불규칙한 대장의 운동성을 규칙적인 생체 활성 파동으로 조율합니다. (Gut Rhythm Balance 테마)\n[주파수 구성: 10000, 880, 787, 727, 465, 95, 20 Hz]',
    freqs: [10000, 880, 787, 727, 465, 95, 20],
    category: 'digest'
  },
  '057': {
    title: 'Code 057 : 신진대사 리듬 활성화 (Metabolism Rhythm)',
    desc: '신진대사 주기가 늘어지고 체내 흐름이 정체되었을 때 활성 부스팅 효과를 줍니다. (Metabolism Rhythm 테마)\n[주파수 구성: 5000, 3176, 2720, 880, 787, 727, 20 Hz]',
    freqs: [5000, 3176, 2720, 880, 787, 727, 20],
    category: 'digest'
  },
  '058': {
    title: 'Code 058 : 가벼운 속 (Light Gut Wave)',
    desc: '체내 흐름을 매끄럽게 하여 속을 한결 가볍고 깨끗한 아침 상태로 만들어 줍니다. (Light Gut Wave 테마)\n[주파수 구성: 10000, 1550, 880, 787, 727, 95 Hz]',
    freqs: [10000, 1550, 880, 787, 727, 95],
    category: 'digest'
  },
  '059': {
    title: 'Code 059 : 영양 흡수 조율 (Nutrient Absorption Balance)',
    desc: '불규칙한 식습관으로 흐트러진 소화 효소 및 영양의 대사 흐름을 지원합니다. (Nutrient Absorption Balance 테마)\n[주파수 구성: 5000, 2720, 880, 727, 20, 7.83 Hz]',
    freqs: [5000, 2720, 880, 727, 20, 7.83],
    category: 'digest'
  },
  '060': {
    title: 'Code 060 : 위장 평온 (Stomach Calm Wave)',
    desc: '자극적인 식사나 심리적 스트레스로 예민해진 위장을 편안히 진정시킵니다. (Stomach Calm Wave 테마)\n[주파수 구성: 1550, 880, 802, 727, 95, 7.83 Hz]',
    freqs: [1550, 880, 802, 727, 95, 7.83],
    category: 'digest'
  },
  '061': {
    title: 'Code 061 : 디톡스 에너지 (Internal Detox Flow)',
    desc: '대사 정체로 생겨난 노폐물을 원활하게 소화 배출할 수 있도록 지원하는 레시피입니다. (Internal Detox Flow 테마)\n[주파수 구성: 10000, 3176, 880, 787, 727, 20 Hz]',
    freqs: [10000, 3176, 880, 787, 727, 20],
    category: 'digest'
  },
  '062': {
    title: 'Code 062 : 대사 순환 활성 (Metabolic Circulation)',
    desc: '체내 수분 밸런스와 림프, 소화관의 흐름을 균형 있게 자극하는 주파수입니다. (Metabolic Circulation 테마)\n[주파수 구성: 10000, 5000, 2720, 880, 727, 20 Hz]',
    freqs: [10000, 5000, 2720, 880, 727, 20],
    category: 'digest'
  },
  '063': {
    title: 'Code 063 : 식후 나른함 탈출 (Post-Meal Freshness)',
    desc: '점심 식사 후 소화에 에너지가 몰리며 발생하는 나른함과 뇌의 정체를 해소합니다. (Post-Meal Freshness 테마)\n[주파수 구성: 880, 727, 10, 7.83, 528 Hz]',
    freqs: [880, 727, 10, 7.83, 528],
    category: 'digest'
  },
  '064': {
    title: 'Code 064 : 위장 긴장성 완화 (Gastric Tension Release)',
    desc: '불안감 등으로 인해 위가 굳어 수축될 때 복부 긴장을 녹이는 릴랙스 조율입니다. (Gastric Tension Release 테마)\n[주파수 구성: 1550, 880, 787, 727, 7.83 Hz]',
    freqs: [1550, 880, 787, 727, 7.83],
    category: 'digest'
  },
  '065': {
    title: 'Code 065 : 원활한 장내 흐름 (Smooth Gut Motion)',
    desc: '부족한 운동과 가만히 앉아 있는 습관으로 둔해진 소화기 흐름을 깨워줍니다. (Smooth Gut Motion 테마)\n[주파수 구성: 10000, 880, 727, 95, 20, 7.83 Hz]',
    freqs: [10000, 880, 727, 95, 20, 7.83],
    category: 'digest'
  },
  '066': {
    title: 'Code 066 : 신체 노폐물 정화 (Internal Waste Cleanse)',
    desc: '신체 전반의 필터 기관인 신장과 간의 원활한 피로 정화를 지원하는 보조 파동입니다. (Internal Waste Cleanse 테마)\n[주파수 구성: 10000, 3176, 880, 787, 727, 20 Hz]',
    freqs: [10000, 3176, 880, 787, 727, 20],
    category: 'digest'
  },
  '067': {
    title: 'Code 067 : 신선한 대사 파동 (Fresh Metabolic Wave)',
    desc: '체내 세포 대사가 활발히 순환하도록 유도하여 일상의 생기를 되찾아 줍니다. (Fresh Metabolic Wave 테마)\n[주파수 구성: 5000, 4200, 2720, 880, 727, 20 Hz]',
    freqs: [5000, 4200, 2720, 880, 727, 20],
    category: 'digest'
  },
  '068': {
    title: 'Code 068 : 시니어 라이프 (Senior Life & Brain Support)',
    desc: '세월의 흐름에 따라 둔해지기 쉬운 두뇌와 신경계의 반응을 깨우고 인지 건강과 활기찬 일상을 지원합니다. (Senior Life & Brain Support 테마)\n[주파수 구성: 19180.5, 5148, 5000, 6000, 3773.3, 2900, 1131, 728, 693, 23.2 Hz]',
    freqs: [19180.5, 5148, 5000, 6000, 3773.3, 2900, 1131, 728, 693, 23.2],
    category: 'focus'
  },
  '069': {
    title: 'Code 069 : 두뇌 명료화 (Clear Brain Resonance)',
    desc: '머리가 무겁고 판단력이 흐려질 때, 알파 뇌파를 유도하여 머리를 맑게 환기시켜 줍니다. (Clear Brain Resonance 테마)\n[주파수 구성: 10000, 6000, 3000, 10, 7.83, 35, 6 Hz]',
    freqs: [10000, 6000, 3000, 10, 7.83, 35, 6],
    category: 'focus'
  },
  '070': {
    title: 'Code 070 : 몰입의 집중력 (Deep Study Concentration)',
    desc: '중요한 시험이나 작업 직전, 외부 시선을 완벽히 차단하고 자기 몰입 상태로 유도합니다. (Deep Study Concentration 테마)\n[주파수 구성: 10000, 5000, 15, 10, 7.83, 40 Hz]',
    freqs: [10000, 5000, 15, 10, 7.83, 40],
    category: 'focus'
  },
  '071': {
    title: 'Code 071 : 수험생 학습 브레인 (Study Smart Support)',
    desc: '학생들의 암기 효율 및 인지 부하 감소를 돕는 학습 최적화 튜닝 주파수입니다. (Study Smart Support 테마)\n[주파수 구성: 10, 15, 7.83, 432, 528, 10000 Hz]',
    freqs: [10, 15, 7.83, 432, 528, 10000],
    category: 'focus'
  },
  '072': {
    title: 'Code 072 : 일 집중력 스위치 (Focus State Switch)',
    desc: '재택 근무 또는 기획서 작성 시 업무 전환 능력을 높여주는 집중력 스위칭 레시피입니다. (Focus State Switch 테마)\n[주파수 구성: 10000, 3000, 10, 15, 40, 7.83 Hz]',
    freqs: [10000, 3000, 10, 15, 40, 7.83],
    category: 'focus'
  },
  '073': {
    title: 'Code 073 : 잡념 해소 뇌파 (Anti-Distraction Beta)',
    desc: '주의력이 수시로 분산되고 스마트폰 중독 증상이 심할 때 잡생각을 잡아주는 파동입니다. (Anti-Distraction Beta 테마)\n[주파수 구성: 15, 10, 7.83, 432, 880, 727 Hz]',
    freqs: [15, 10, 7.83, 432, 880, 727],
    category: 'focus'
  },
  '074': {
    title: 'Code 074 : 크리에이티브 스파크 (Creative Spark Wave)',
    desc: '예술 창작, 개발, 아이디어 도출 등 기획적 발상이 필요할 때 두뇌의 활발한 스파크를 유도합니다. (Creative Spark Wave 테마)\n[주파수 구성: 7.83, 6, 10, 432, 528, 10000 Hz]',
    freqs: [7.83, 6, 10, 432, 528, 10000],
    category: 'focus'
  },
  '075': {
    title: 'Code 075 : 기억 활성화 지원 (Memory Support Resonance)',
    desc: '건망증이 잦아지고 정보 인출이 원활하지 않을 때 뇌 기능 활성을 돕는 주파수입니다. (Memory Support Resonance 테마)\n[주파수 구성: 10000, 5000, 10, 7.83, 23.2 Hz]',
    freqs: [10000, 5000, 10, 7.83, 23.2],
    category: 'focus'
  },
  '076': {
    title: 'Code 076 : 아침 맑은 정신 (Bright Mind Morning)',
    desc: '일어나자마자 몽롱한 브레인 포그(머리 안개) 상태를 깔끔히 지우는 두뇌 기상 모드입니다. (Bright Mind Morning 테마)\n[주파수 구성: 10, 15, 7.83, 432, 528 Hz]',
    freqs: [10, 15, 7.83, 432, 528],
    category: 'focus'
  },
  '077': {
    title: 'Code 077 : 브레인 안개 해소 (Brain Fog Clearance)',
    desc: '머리 속이 뿌옇고 무거우며 생각의 전개 속도가 너무 느릴 때 머리를 명징하게 환기시킵니다. (Brain Fog Clearance 테마)\n[주파수 구성: 10000, 6000, 880, 727, 10, 7.83 Hz]',
    freqs: [10000, 6000, 880, 727, 10, 7.83],
    category: 'focus'
  },
  '078': {
    title: 'Code 078 : 깊은 탐구 흐름 (Deep Research Focus)',
    desc: '복잡한 수학 계산, 데이터 분석, 깊은 논리적 사고가 필요할 때 지적 지구력을 강화합니다. (Deep Research Focus 테마)\n[주파수 구성: 10, 7.83, 6, 432, 528 Hz]',
    freqs: [10, 7.83, 6, 432, 528],
    category: 'focus'
  },
  '079': {
    title: 'Code 079 : 두뇌 노화 예방 지원 (Brain Age Support)',
    desc: '중장년층 및 고령화 두뇌의 신경 연결 활성과 치매 예방 웰니스 습관을 위한 두뇌 케어입니다. (Brain Age Support 테마)\n[주파수 구성: 19180.5, 5000, 1131, 728, 10, 7.83 Hz]',
    freqs: [19180.5, 5000, 1131, 728, 10, 7.83],
    category: 'focus'
  },
  '080': {
    title: 'Code 080 : 직관력 튜닝 (Intuitive Tuning)',
    desc: '내면의 목소리에 귀를 기울이고 영감과 직관, 그리고 예술적 영감을 깨우는 파동입니다. (Intuitive Tuning 테마)\n[주파수 구성: 741, 10, 7.83, 432, 528 Hz]',
    freqs: [741, 10, 7.83, 432, 528],
    category: 'focus'
  },
  '081': {
    title: 'Code 081 : 잡음 차단 몰입 (Noise Blocker Focus)',
    desc: '공공장소나 카페, 시끄러운 사무실에서 오직 내 작업에만 집중할 수 있게 하는 두뇌 쉴드 주파수입니다. (Noise Blocker Focus 테마)\n[주파수 구성: 10000, 10, 15, 7.83, 440 Hz]',
    freqs: [10000, 10, 15, 7.83, 440],
    category: 'focus'
  },
  '082': {
    title: 'Code 082 : 속독 및 암기 지원 (Speed Read Resonance)',
    desc: '글을 빨리 읽고 이해하며, 단기 기억을 장기 기억으로 편안하게 전환하는 데 도움을 줍니다. (Speed Read Resonance 테마)\n[주파수 구성: 15, 10, 7.83, 432, 10000 Hz]',
    freqs: [15, 10, 7.83, 432, 10000],
    category: 'focus'
  },
  '083': {
    title: 'Code 083 : 디지털 피로 두뇌 릴리프 (Digital Brain Relief)',
    desc: '장시간 디스플레이 화면을 보고 난 후 찾아오는 뇌의 극심한 긴장과 눈 피로를 다독여 줍니다. (Digital Brain Relief 테마)\n[주파수 구성: 10000, 880, 727, 10, 7.83 Hz]',
    freqs: [10000, 880, 727, 10, 7.83],
    category: 'focus'
  },
  '084': {
    title: 'Code 084 : 마인드 퍼포먼스 (Mind Performance Wave)',
    desc: '두뇌 연산 속도와 명료함을 한층 끌어올리는 인지 성능 최적화 레시피입니다. (Mind Performance Wave 테마)\n[주파수 구성: 10, 15, 7.83, 528, 10000 Hz]',
    freqs: [10, 15, 7.83, 528, 10000],
    category: 'focus'
  },
  '085': {
    title: 'Code 085 : 브레스 웰니스 (Breath Wellness & Vitality)',
    desc: '맑고 깨끗한 호흡을 돕고, 가슴을 편안하게 열어주어 상쾌한 하루를 채우는 웰빙 주파수입니다. (Breath Wellness & Vitality 테마)\n[주파수 구성: 1550, 802, 880, 787, 776, 727, 444, 20, 428, 660 Hz]',
    freqs: [1550, 802, 880, 787, 776, 727, 444, 20, 428, 660],
    category: 'vitality'
  },
  '086': {
    title: 'Code 086 : 시즌 실드 (Season Shield & Defence)',
    desc: '계절 변화와 외부 환경 요인으로부터 신체를 보호하고 자연 방어력을 기르는 데 도움을 주는 웰니스 실드 주파수입니다. (Season Shield & Defence 테마)\n[주파수 구성: 10000, 7344, 5611, 5000, 4014, 2720, 880, 787, 727, 20 Hz]',
    freqs: [10000, 7344, 5611, 5000, 4014, 2720, 880, 787, 727, 20],
    category: 'vitality'
  },
  '087': {
    title: 'Code 087 : 스칼프 비탈리티 (Scalp & Hair Vitality)',
    desc: '두피와 모근에 활력을 부여하고, 모발 건강을 위한 영양과 흐름의 밸런스를 돕는 비탈리티 주파수입니다. (Scalp & Hair Vitality 테마)\n[주파수 구성: 10000, 30000, 5000, 2720, 880, 800, 727, 20 Hz]',
    freqs: [10000, 30000, 5000, 2720, 880, 800, 727, 20],
    category: 'vitality'
  },
  '088': {
    title: 'Code 088 : 모닝 에너지 업 (Morning Energy Boost)',
    desc: '아침의 찌부둥한 무기력감을 부드럽게 몰아내고 몸 속의 잠자는 활력 세포를 신선하게 흔들어 깨웁니다. (Morning Energy Boost 테마)\n[주파수 구성: 10000, 5000, 880, 727, 20, 10, 15 Hz]',
    freqs: [10000, 5000, 880, 727, 20, 10, 15],
    category: 'vitality'
  },
  '089': {
    title: 'Code 089 : 면역 활력 부스터 (Immune Vitality Wave)',
    desc: '신체 자연 면역 기능의 조율과 세포 방어 기전을 부드럽게 지원하여 계절별 건강을 유지합니다. (Immune Vitality Wave 테마)\n[주파수 구성: 10000, 5611, 5000, 2720, 880, 787, 727 Hz]',
    freqs: [10000, 5611, 5000, 2720, 880, 787, 727],
    category: 'vitality'
  },
  '090': {
    title: 'Code 090 : 일상 무기력 완화 (Lethergy Relief Flow)',
    desc: '만사 귀찮고 열정이 부족해지는 만성 무기력 상태를 정화하여 적극적인 활동 의욕을 고취시킵니다. (Lethergy Relief Flow 테마)\n[주파수 구성: 10000, 880, 727, 20, 10, 7.83 Hz]',
    freqs: [10000, 880, 727, 20, 10, 7.83],
    category: 'vitality'
  },
  '091': {
    title: 'Code 091 : 상쾌한 하루 시작 (Fresh Day Spark)',
    desc: '오전의 상쾌한 에너지 부스팅과 세포 활동의 부드러운 순환을 돕는 리플레시 코딩입니다. (Fresh Day Spark 테마)\n[주파수 구성: 10000, 5000, 20, 10, 528, 432 Hz]',
    freqs: [10000, 5000, 20, 10, 528, 432],
    category: 'vitality'
  },
  '092': {
    title: 'Code 092 : 환절기 컨디션 난조 (Seasonal Cold Relief)',
    desc: '환절기 기온 차로 으슬으슬하고 컨디션이 저하될 때 전신 온기를 회복하도록 돕는 가드 파동입니다. (Seasonal Cold Relief 테마)\n[주파수 구성: 10000, 7344, 5000, 880, 787, 727 Hz]',
    freqs: [10000, 7344, 5000, 880, 787, 727],
    category: 'vitality'
  },
  '093': {
    title: 'Code 093 : 활력 밸런스 (Vitality Balance Wave)',
    desc: '지나친 흥분도, 지나친 쳐짐도 없이 일정한 활력 컨디션을 하루 종일 유지하도록 지원합니다. (Vitality Balance Wave 테마)\n[주파수 구성: 10000, 5000, 2720, 880, 727, 20 Hz]',
    freqs: [10000, 5000, 2720, 880, 727, 20],
    category: 'vitality'
  },
  '094': {
    title: 'Code 094 : 체력 충전 파동 (Physical Recharge Resonance)',
    desc: '잦은 야근이나 가사 노동으로 지쳐 쓰러질 것 같은 몸에 근원적 체력 공명을 제공합니다. (Physical Recharge Resonance 테마)\n[주파수 구성: 10000, 3000, 880, 727, 40, 20 Hz]',
    freqs: [10000, 3000, 880, 727, 40, 20],
    category: 'vitality'
  },
  '095': {
    title: 'Code 095 : 두피 영양 공급 지원 (Scalp Nutrition Support)',
    desc: '두피 주변의 흐름이 둔해져 탈모가 고민되시는 분들을 위해 영양 대사를 자극합니다. (Scalp Nutrition Support 테마)\n[주파수 구성: 10000, 5000, 880, 727, 20 Hz]',
    freqs: [10000, 5000, 880, 727, 20],
    category: 'vitality'
  },
  '096': {
    title: 'Code 096 : 생기 넘치는 신체 (Vivid Body Spark)',
    desc: '신체 전반의 무기력을 소거하고 눈과 손끝에 신선한 생기와 에너지를 불어넣는 레시피입니다. (Vivid Body Spark 테마)\n[주파수 구성: 10000, 5000, 2720, 880, 727, 20 Hz]',
    freqs: [10000, 5000, 2720, 880, 727, 20],
    category: 'vitality'
  },
  '097': {
    title: 'Code 097 : 환절기 컨디션 가드 (Seasonal Shield Guard)',
    desc: '바람이 불고 일교차가 큰 가을, 겨울철에 몸을 따뜻하게 지켜주는 면역 가딩 주파수입니다. (Seasonal Shield Guard 테마)\n[주파수 구성: 10000, 5000, 2720, 880, 787, 727 Hz]',
    freqs: [10000, 5000, 2720, 880, 787, 727],
    category: 'vitality'
  },
  '098': {
    title: 'Code 098 : 번아웃 탈출 (Burnout Recovery Wave)',
    desc: '과로와 스트레스로 에너지가 고갈되어 몸도 마음도 멈춰버린 번아웃 극복을 유도합니다. (Burnout Recovery Wave 테마)\n[주파수 구성: 10000, 880, 727, 10, 7.83, 3.0, 1.2 Hz]',
    freqs: [10000, 880, 727, 10, 7.83, 3.0, 1.2],
    category: 'vitality'
  },
  '099': {
    title: 'Code 099 : 산소 순환 웰빙 (Oxygen Circulation Flow)',
    desc: '가슴 깊이 호흡하며 들이마시는 맑은 산소가 온몸 세포에 빠르게 전달되도록 돕습니다. (Oxygen Circulation Flow 테마)\n[주파수 구성: 1550, 880, 727, 444, 20, 7.83 Hz]',
    freqs: [1550, 880, 727, 444, 20, 7.83],
    category: 'vitality'
  },
  '100': {
    title: 'Code 100 : 얼티밋 비탈리티 (Ultimate Vitality Spark)',
    desc: '웰니스 최고 단계에 도전하는 전방위적 신체 에너지 부스팅 공명 주파수입니다. (Ultimate Vitality Spark 테마)\n[주파수 구성: 3000, 2720, 880, 727, 20 Hz]',
    freqs: [3000, 2720, 880, 727, 20],
    category: 'vitality'
  }
};
window.rifeRecipes = rifeRecipes;

// 100가지 프리미엄 긍정 확언 데이터셋은 breathingGuide.js로 이관되었습니다.


// ==========================================================================
// [신규] 20문항 자가점검 설문지 데이터 정의 (Solavre AI 맞춤 조율 시스템)
// ==========================================================================
const wellnessCheckQuestions = [
  // 섹션 1: 지금 이 순간 (5문항)
  {
    id: 1,
    type: 'choice',
    question: "Q1. 지금 가장 원하는 것은 무엇인가요?",
    desc: "지금 본인에게 가장 절실한 마음의 요구 사항을 하나만 선택해 주세요.",
    options: [
      { text: "푹 자고 싶다", scores: { SLEEP: 5 } },
      { text: "집중해서 일/공부하고 싶다", scores: { FOCUS: 5 } },
      { text: "마음을 가라앉히고 싶다", scores: { CALM: 5 } },
      { text: "몸의 긴장을 풀고 싶다", scores: { BODY: 5 } },
      { text: "기분을 좋게 만들고 싶다", scores: { MOOD: 5 } }
    ]
  },
  {
    id: 2,
    type: 'choice',
    question: "Q2. 지금의 컨디션을 색으로 표현한다면?",
    desc: "직관적으로 끌리는 현재 신체 및 감정 상태의 색상을 선택해 주세요.",
    options: [
      { text: "회색 (지치고 무거움)", scores: { SLEEP: 3, MOOD: 3 } },
      { text: "빨강 (흥분 및 긴장 상태)", scores: { CALM: 5 } },
      { text: "노랑 (들떴지만 산만함)", scores: { FOCUS: 3, CALM: 2 } },
      { text: "파랑 (차분하지만 가라앉음)", scores: { MOOD: 4 } },
      { text: "초록 (평온하고 편안함)", scores: { SLEEP: 1, FOCUS: 1, CALM: 1, BODY: 1, MOOD: 1 } }
    ]
  },
  {
    id: 3,
    type: 'choice',
    question: "Q3. 지금 몸의 어디가 가장 무겁게 느껴지시나요?",
    desc: "신체의 물리적 무거움이나 긴장이 가장 많이 느껴지는 곳을 골라주세요.",
    options: [
      { text: "머리 (생각이 많고 무거움)", scores: { CALM: 4, MOOD: 1 } },
      { text: "어깨·목 (뻐근하고 뭉침)", scores: { BODY: 5 } },
      { text: "가슴 (답답하고 숨이 막힘)", scores: { CALM: 3, MOOD: 2 } },
      { text: "눈 (침침하고 피로함)", scores: { SLEEP: 3, BODY: 2 } },
      { text: "특별히 없음 (가벼움)", scores: {} }
    ]
  },
  {
    id: 4,
    type: 'choice',
    question: "Q4. 마지막으로 깊고 개운한 잠을 잔 게 언제인가요?",
    desc: "수면의 질이 양호했던 기억을 바탕으로 선택해 주세요.",
    options: [
      { text: "어젯밤", scores: {} },
      { text: "2~3일 전", scores: { SLEEP: 3 } },
      { text: "일주일 전", scores: { SLEEP: 5 } },
      { text: "기억나지 않음", scores: { SLEEP: 8, MOOD: 2 } }
    ]
  },
  {
    id: 5,
    type: 'choice',
    question: "Q5. 지금 이 체크 리스트를 진행하고 계신 시간대는 언제인가요?",
    desc: "사운드를 청취하고자 하는 현재의 구체적인 시간대를 선택해 주세요.",
    options: [
      { text: "새벽 (00:00 ~ 05:59)", scores: { SLEEP: 5 } },
      { text: "아침 (06:00 ~ 10:59)", scores: { FOCUS: 4, MOOD: 1 } },
      { text: "낮 (11:00 ~ 16:59)", scores: { FOCUS: 3 } },
      { text: "저녁 (17:00 ~ 20:59)", scores: { CALM: 3, BODY: 2 } },
      { text: "밤 (21:00 ~ 23:59)", scores: { SLEEP: 4, CALM: 2 } }
    ]
  },
  // 섹션 2: 최근 일주일 (8문항)
  {
    id: 6,
    type: 'choice',
    question: "Q6. 지난 일주일 동안의 평균 수면 시간은 어느 정도였나요?",
    desc: "최근 겪었던 평균적인 일일 수면 시간을 골라주세요.",
    options: [
      { text: "6시간 미만", scores: { SLEEP: 6 } },
      { text: "6 ~ 7시간", scores: { SLEEP: 3 } },
      { text: "7 ~ 8시간", scores: { SLEEP: 1 } },
      { text: "8시간 이상", scores: {} }
    ]
  },
  {
    id: 7,
    type: 'choice',
    question: "Q7. 누워서 실제 잠들기까지 보통 시간이 얼마나 걸리시나요?",
    desc: "입면에 소요되는 평균 시간을 근사치로 선택해 주세요.",
    options: [
      { text: "10분 이내 (눕자마자 잘 잔다)", scores: {} },
      { text: "10 ~ 30분", scores: { SLEEP: 2 } },
      { text: "30분 ~ 1시간", scores: { SLEEP: 5 } },
      { text: "1시간 이상 (뒤척임이 아주 심함)", scores: { SLEEP: 8, CALM: 2 } }
    ]
  },
  {
    id: 8,
    type: 'choice',
    question: "Q8. 잠을 자다가 중간에 깨는 횟수는 몇 번 정도인가요?",
    desc: "화장실 용무, 선잠 등으로 수면 중 깨어나는 빈도입니다.",
    options: [
      { text: "한 번도 안 깬다", scores: {} },
      { text: "1 ~ 2회", scores: { SLEEP: 2 } },
      { text: "3 ~ 4회", scores: { SLEEP: 4 } },
      { text: "5회 이상", scores: { SLEEP: 7 } }
    ]
  },
  {
    id: 9,
    type: 'choice',
    question: "Q9. 아침에 눈을 떴을 때 일어나는 느낌은 어떤가요?",
    desc: "기상 직후 신체가 느끼는 개운함의 정도를 나타냅니다.",
    options: [
      { text: "개운하고 활력이 돈다", scores: {} },
      { text: "그럭저럭 일어날 만하다", scores: { MOOD: 2 } },
      { text: "상당히 피곤하고 무겁다", scores: { SLEEP: 3, MOOD: 3 } },
      { text: "기상하기가 극도로 힘들고 괴롭다", scores: { SLEEP: 5, MOOD: 5 } }
    ]
  },
  {
    id: 10,
    type: 'choice',
    question: "Q10. 업무나 학습에 몰입할 때, 평균 집중력 수준은 어떤가요?",
    desc: "최근 일상 중에서 작업 효율과 주의 집중 상태를 반영합니다.",
    options: [
      { text: "잡념 없이 깊게 집중이 잘 된다", scores: {} },
      { text: "가끔 주의가 산만해지지만 조절 가능하다", scores: { FOCUS: 2 } },
      { text: "자주 집중이 깨지고 폰을 만진다", scores: { FOCUS: 5 } },
      { text: "거의 집중하지 못하고 무기력하다", scores: { FOCUS: 8 } }
    ]
  },
  {
    id: 11,
    type: 'slider',
    question: "Q11. 최근 본인이 스스로 인지하는 스트레스 지수는 어느 정도인가요?",
    desc: "슬라이더를 밀어 스트레스 강도를 0(스트레스 없음)부터 10(일상생활 장애 수준)까지 평가해 주세요.",
    min: 0,
    max: 10,
    step: 1,
    defaultVal: 5,
    dim: 'CALM'
  },
  {
    id: 12,
    type: 'choice',
    question: "Q12. 평소 목, 어깨, 허리 등 근육의 긴장이나 뻐근함은 어느 정도인가요?",
    desc: "일상적인 자세나 업무 강도로 인해 축적된 신체적 스트레스 상태입니다.",
    options: [
      { text: "거의 뻐근함 없이 유연하다", scores: {} },
      { text: "가끔 뻐근하지만 휴식하면 괜찮다", scores: { BODY: 2 } },
      { text: "자주 뭉치고 뻐근함을 수시로 느낀다", scores: { BODY: 5 } },
      { text: "만성적으로 늘 무겁고 돌처럼 딱딱하게 굳어있다", scores: { BODY: 8 } }
    ]
  },
  {
    id: 13,
    type: 'choice',
    question: "Q13. 최근 일주일 동안의 전반적인 마음(감정) 상태는 어땠나요?",
    desc: "일상에서 체감하는 감정의 기복이나 무기력 정도입니다.",
    options: [
      { text: "평온하고 매우 안정적인 편이다", scores: {} },
      { text: "약간의 감정 기복이 생기는 편이다", scores: { MOOD: 3 } },
      { text: "자주 우울해지거나 기분이 가라앉는다", scores: { MOOD: 5 } },
      { text: "만사가 귀찮고 극심한 무기력감을 느낀다", scores: { MOOD: 7, SLEEP: 2 } }
    ]
  },
  // 섹션 3: 환경·습관 (4문항)
  {
    id: 14,
    type: 'choice',
    question: "Q14. 일평균 카페인(커피, 에너지 드링크 등) 섭취량은 어느 정도인가요?",
    desc: "각성을 유도하는 음료 섭취 습관입니다.",
    options: [
      { text: "거의 마시지 않는다", scores: {} },
      { text: "하루 1잔 내외로 가볍게 즐긴다", scores: {} },
      { text: "하루 2 ~ 3잔 마시며 의존하는 편이다", scores: { SLEEP: 2 } },
      { text: "하루 4잔 이상 과다 섭취한다", scores: { SLEEP: 4, CALM: 2 } }
    ]
  },
  {
    id: 15,
    type: 'choice',
    question: "Q15. 침대에 누운 뒤 완전히 눈을 감기 전까지 스마트폰이나 TV를 보시나요?",
    desc: "잠들기 전 디스플레이 블루라이트 노출 습관을 묻습니다.",
    options: [
      { text: "거의 안 보거나 10분 이내로만 본다", scores: {} },
      { text: "30분에서 1시간 미만으로 사용한다", scores: { SLEEP: 2 } },
      { text: "1시간 이상 2시간 미만으로 본다", scores: { SLEEP: 4 } },
      { text: "2시간 이상 사용하여 늦게 자는 원인이 된다", scores: { SLEEP: 6, FOCUS: -2 } }
    ]
  },
  {
    id: 16,
    type: 'choice',
    question: "Q16. 최근 일주일간 숨이 찰 정도의 유산소나 근력 운동을 얼마나 하셨나요?",
    desc: "신체적 신진대사를 자극하는 규칙적인 체력 단련 빈도입니다.",
    options: [
      { text: "주 3회 이상 꾸준히 땀을 흘렸다", scores: { MOOD: -2, BODY: -2 } },
      { text: "주 1 ~ 2회 가볍게 몸을 움직였다", scores: {} },
      { text: "거의 운동하지 않고 실내 생활만 했다", scores: { BODY: 3, MOOD: 2 } }
    ]
  },
  {
    id: 17,
    type: 'choice',
    question: "Q17. 평소 명상이나 마음챙김, 심호흡 수련을 접해보신 적이 있나요?",
    desc: "내면의 평온을 이끌어내기 위한 이완 기법 숙련도입니다.",
    options: [
      { text: "매일 루틴으로 연습하여 익숙하다", scores: { CALM: -3 } },
      { text: "가끔 스트레스가 심할 때 시도해 본다", scores: {} },
      { text: "기초적인 경험은 있으나 습관화되진 않았다", scores: {} },
      { text: "완전히 처음이고 명상하는 법을 모른다", scores: { is_beginner: 1 } }
    ]
  },
  // 섹션 4: 사운드 선호 (3문항)
  {
    id: 18,
    type: 'multichoice',
    question: "Q18. 들었을 때 가장 귀가 편안하고 안정감을 느끼는 자연음은 무엇인가요?",
    desc: "이 질문은 다중 선택이 가능합니다. 좋아하는 소리들을 선택하고 [다음 단계]를 눌러주세요.",
    options: [
      { text: "빗소리 (Rain)", tag: "rain" },
      { text: "파도소리 (Waves)", tag: "waves" },
      { text: "갈매기소리 (Seagull)", tag: "seagull" },
      { text: "싱잉볼소리 (Singing Bowl)", tag: "singingbowl" },
      { text: "숲 속의 새소리 (Forest Birds)", tag: "forestbirds" },
      { text: "계곡물 흐르는 소리 (Stream)", tag: "stream" },
      { text: "깊은 산속 새소리 (Mountain Birds)", tag: "mountainbirds" }
    ]
  },
  {
    id: 19,
    type: 'choice',
    question: "Q19. 명상 사운드를 재생할 때, 소리의 볼륨 강도는 어느 정도를 선호하시나요?",
    desc: "귀가 피로하지 않은 적절한 청취 감도를 의미합니다.",
    options: [
      { text: "귀를 기울여야 겨우 들릴 만큼 잔잔한 소리 (L1)", intensity: 0.15 },
      { text: "일상의 대화보다 약간 조용한 수준의 편안한 소리 (L2)", intensity: 0.35 },
      { text: "음원의 텍스처가 또렷하고 풍성하게 느껴지는 소리 (L3)", intensity: 0.6 }
    ]
  },
  {
    id: 20,
    type: 'choice',
    question: "Q20. 맞춤 사운드 레시피를 한 번 들을 때 어느 정도 시간 동안 감상하고 싶으신가요?",
    desc: "체크 완료 후 생성될 맞춤 사운드 레시피의 렌더링/재생 예약 시간입니다.",
    options: [
      { text: "5분 (바쁜 일상 중 짧은 조율용)", duration: 300 },
      { text: "30분 (깊은 휴식 및 입면 준비용)", duration: 1800 },
      { text: "1시간 (집중 및 숙면용)", duration: 3600 }
    ]
  }
];

// ==========================================================================
// [신규] 자가점검 시스템 핵심 상태 변수 선언
// ==========================================================================
let userName = "힐러";
let currentQuestionIndex = 0;
let userResponses = {}; // 각 문항별 유저 선택지 보관
let isBeginnerFlag = false;

// 5개 웰니스 측정 차원의 정규화 최대 점수 기준
const maxScores = {
  SLEEP: 59,
  FOCUS: 20,
  CALM: 30,
  BODY: 24,
  MOOD: 26
};

// 9.5) 디지털 경과 시간 타이머 전역 변수 및 제어 함수 (웰니스 힐링 교육용으로 경과 시간 확인 가능)
let rifeTimerInterval = null;
let rifeSecondsElapsed = 0;

function startRifeTimer() {
  stopRifeTimer(); // 기존 타이머 안전하게 해제
  const timerDisplay = document.getElementById('rife-timer-display');
  const timerTime = document.getElementById('rife-timer-time');
  const timerIcon = document.getElementById('rife-timer-icon');
  
  if (timerDisplay) timerDisplay.style.display = 'flex';
  if (timerIcon) timerIcon.classList.add('rife-timer-active-icon');

  rifeSecondsElapsed = 0;
  if (timerTime) timerTime.textContent = '00:00';

  rifeTimerInterval = setInterval(() => {
    rifeSecondsElapsed++;
    const mins = Math.floor(rifeSecondsElapsed / 60);
    const secs = rifeSecondsElapsed % 60;
    const formatted = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    if (timerTime) timerTime.textContent = formatted;
  }, 1000);
}

function stopRifeTimer() {
  if (rifeTimerInterval) {
    clearInterval(rifeTimerInterval);
    rifeTimerInterval = null;
  }
  const timerIcon = document.getElementById('rife-timer-icon');
  if (timerIcon) timerIcon.classList.remove('rife-timer-active-icon');
}

function resetRifeTimer() {
  stopRifeTimer();
  const timerDisplay = document.getElementById('rife-timer-display');
  const timerTime = document.getElementById('rife-timer-time');
  if (timerDisplay) timerDisplay.style.display = 'none';
  if (timerTime) timerTime.textContent = '00:00';
  rifeSecondsElapsed = 0;
}

// 9.55) VIP 디지털 경과 시간 타이머 전역 변수 및 제어 함수
let vipTimerInterval = null;
let vipSecondsElapsed = 0;

function startVipTimer() {
  stopVipTimer(); // 기존 타이머 안전하게 해제
  const timerDisplay = document.getElementById('vip-timer-display');
  const timerTime = document.getElementById('vip-timer-time');
  const timerIcon = document.getElementById('vip-timer-icon');
  
  if (timerDisplay) timerDisplay.style.display = 'flex';
  if (timerIcon) timerIcon.classList.add('vip-timer-active-icon');

  vipSecondsElapsed = 0;
  if (timerTime) timerTime.textContent = '00:00';

  vipTimerInterval = setInterval(() => {
    vipSecondsElapsed++;
    const mins = Math.floor(vipSecondsElapsed / 60);
    const secs = vipSecondsElapsed % 60;
    const formatted = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    if (timerTime) timerTime.textContent = formatted;
  }, 1000);
}

function stopVipTimer() {
  if (vipTimerInterval) {
    clearInterval(vipTimerInterval);
    vipTimerInterval = null;
  }
  const timerIcon = document.getElementById('vip-timer-icon');
  if (timerIcon) timerIcon.classList.remove('vip-timer-active-icon');
}

function resetVipTimer() {
  stopVipTimer();
  const timerDisplay = document.getElementById('vip-timer-display');
  const timerTime = document.getElementById('vip-timer-time');
  if (timerDisplay) timerDisplay.style.display = 'none';
  if (timerTime) timerTime.textContent = '00:00';
  vipSecondsElapsed = 0;
}

// 9.9) 라이프 테라피 실시간 타임라인 위젯 로직 (가로선 주파수 노드 클릭 점프 탑재)
function renderRifeTimeline() {
  const rifeTimelineNodes = document.getElementById('rife-timeline-nodes');
  const rifeTimelineProgress = document.getElementById('rife-timeline-progress');
  const rifeTimelineStatusText = document.getElementById('rife-timeline-status-text');

  if (!rifeTimelineNodes) return;
  rifeTimelineNodes.innerHTML = '';
  
  const freqs = engine.rifeFreqs;
  const total = freqs.length;
  if (total === 0) return;

  freqs.forEach((freq, idx) => {
    const node = document.createElement('div');
    node.className = 'rife-timeline-node';
    
    // 균등 분포 위치 계산 (개수가 1개뿐이면 50%, 아니면 좌우 가득 채우기)
    const leftPercent = total > 1 ? (idx / (total - 1)) * 100 : 50;
    node.style.left = `${leftPercent}%`;
    
    // 툴팁 및 데이터 세트 바인딩
    node.setAttribute('title', `${freq} Hz (작동 구간 ${idx + 1})`);
    node.setAttribute('data-index', idx);
    node.setAttribute('data-freq', freq);
    
    // 점 클릭 시 해당 주파수로 엔진 즉시 강제 점프 (동작 구간 갱신)
    node.addEventListener('click', (e) => {
      e.stopPropagation();
      if (!engine.isPlaying) {
        alert("먼저 좌측 테라피 플레이 버튼을 눌러 재생을 시작해 주세요.");
        return;
      }
      engine.jumpToRifeFrequencyIndex(idx);
    });

    rifeTimelineNodes.appendChild(node);
  });

  // 프로그레스 바 초기화
  if (rifeTimelineProgress) rifeTimelineProgress.style.width = '0%';
  if (rifeTimelineStatusText) rifeTimelineStatusText.textContent = `대기 중 (총 ${total}개 주파수 대역)`;
}

// 9.95) 솔라브르 VIP 테라피 실시간 타임라인 위젯 로직 (가로선 주파수 노드 클릭 점프 탑재)
function renderVipTimeline() {
  const vipTimelineNodes = document.getElementById('vip-timeline-nodes');
  const vipTimelineProgress = document.getElementById('vip-timeline-progress');
  const vipTimelineStatusText = document.getElementById('vip-timeline-status-text');

  if (!vipTimelineNodes) return;
  vipTimelineNodes.innerHTML = '';
  
  const freqs = engine.vipFreqs;
  const total = freqs.length;
  if (total === 0) return;

  freqs.forEach((freq, idx) => {
    const node = document.createElement('div');
    node.className = 'vip-timeline-node';
    
    // 균등 분포 위치 계산 (개수가 1개뿐이면 50%, 아니면 좌우 가득 채우기)
    const leftPercent = total > 1 ? (idx / (total - 1)) * 100 : 50;
    node.style.left = `${leftPercent}%`;
    
    // 툴팁 및 데이터 세트 바인딩
    node.setAttribute('title', `${freq} Hz (작동 구간 ${idx + 1})`);
    node.setAttribute('data-index', idx);
    node.setAttribute('data-freq', freq);
    
    // 점 클릭 시 해당 주파수로 엔진 즉시 강제 점프 (동작 구간 갱신)
    node.addEventListener('click', (e) => {
      e.stopPropagation();
      if (!engine.isPlaying) {
        alert("먼저 우측 VIP 테라피 플레이 버튼을 눌러 재생을 시작해 주세요.");
        return;
      }
      engine.jumpToVipFrequencyIndex(idx);
    });

    vipTimelineNodes.appendChild(node);
  });

  // 프로그레스 바 초기화
  if (vipTimelineProgress) vipTimelineProgress.style.width = '0%';
  if (vipTimelineStatusText) vipTimelineStatusText.textContent = `대기 중 (총 ${total}개 주파수 대역)`;
}

// 솔라브르 VIP 레시피 동적 그리드 렌더링 함수
function renderVipCodesGrid(category = 'all', search = '') {
  const container = document.getElementById('vip-codes-container');
  if (!container) return;

  container.innerHTML = '';
  const searchLower = search.toLowerCase().trim();

  // 두 배열의 값이 동일한지 체크하는 단순 유틸리티 함수
  function isArrayEqual(a, b) {
    if (!a || !b) return false;
    if (a.length !== b.length) return false;
    for (let i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) return false;
    }
    return true;
  }

  // 필터링된 VIP 목록 추출
  Object.keys(vipRecipes).forEach(codeKey => {
    const recipe = vipRecipes[codeKey];
    
    // 카테고리 필터링
    if (category !== 'all' && recipe.category !== category) {
      return;
    }

    // 검색어 필터링
    if (searchLower) {
      const matchKey = codeKey.toLowerCase().includes(searchLower);
      const matchTitle = recipe.title.toLowerCase().includes(searchLower);
      const matchDesc = recipe.desc.toLowerCase().includes(searchLower);
      if (!matchKey && !matchTitle && !matchDesc) {
        return;
      }
    }

    // 칩 버튼 동적 생성
    const btn = document.createElement('button');
    btn.className = 'btn-vip-code';
    btn.textContent = `Code ${codeKey}`;
    btn.title = recipe.title;

    // 현재 오디오 엔진에 적재된 주파수 세트와 동일하다면 active 하이라이트 활성화
    if (isArrayEqual(engine.vipFreqs, recipe.freqs)) {
      btn.classList.add('active');
    }

    // 클릭 시 VIP 주파수 세트를 엔진에 주입하고 UI 갱신 (유기적 자동 재생 연동)
    btn.addEventListener('click', () => {
      applySpecificVipCodeToEngine(codeKey);
    });

    container.appendChild(btn);
  });
}

// Rife 100대 레시피 동적 그리드 렌더링 함수
function renderRifeCodesGrid(category = 'all', search = '') {
  const container = document.getElementById('rife-codes-container');
  if (!container) return;

  container.innerHTML = '';
  const searchLower = search.toLowerCase().trim();

  // 두 배열의 값이 동일한지 체크하는 단순 유틸리티 함수
  function isArrayEqual(a, b) {
    if (!a || !b) return false;
    if (a.length !== b.length) return false;
    for (let i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) return false;
    }
    return true;
  }

// 100대 레시피 전체를 스캔하며 조건 필터링
  Object.keys(rifeRecipes).forEach(code => {
    const recipe = rifeRecipes[code];
    
    // 카테고리 매칭 검사
    const categoryMatch = (category === 'all') || (recipe.category === category);
    
    // 검색어 매칭 검사 (코드 번호, 제목, 설명, 카테고리 텍스트 매칭)
    const searchMatch = !searchLower || 
      code.includes(searchLower) || 
      recipe.title.toLowerCase().includes(searchLower) || 
      recipe.desc.toLowerCase().includes(searchLower) ||
      recipe.category.toLowerCase().includes(searchLower);

    if (categoryMatch && searchMatch) {
      const btn = document.createElement('button');
      btn.className = 'btn-rife';
      btn.setAttribute('data-code', code);
      
      // 현재 엔진에 활성화되어 있는 주파수 레시피와 비교하여 활성 스타일 동기화
      const isCurrentActive = isArrayEqual(engine.rifeFreqs, recipe.freqs);
      if (isCurrentActive) {
        btn.classList.add('active');
        // 상세 설명 카드 갱신
        const txtRifeCardTitle = document.getElementById('rife-card-title');
        const txtRifeCardDesc = document.getElementById('rife-card-desc');
        if (txtRifeCardTitle) txtRifeCardTitle.textContent = recipe.title;
        if (txtRifeCardDesc) txtRifeCardDesc.innerHTML = recipe.desc.replace(/\n/g, '<br>');
      }

      btn.textContent = `Code ${code}`;
      
      btn.addEventListener('click', () => {
        applySpecificCodeToEngine(code);
      });

      container.appendChild(btn);
    }
  });
}

/**
 * 특정 웰니스 코드를 오디오 엔진 및 UI에 다이내믹하게 매핑하여 즉시 재생하는 함수
 * @param {string} code - Rife 코드 번호 (예: '001')
 */
function applySpecificCodeToEngine(code) {
  const recipe = rifeRecipes[code];
  if (!recipe) return;

  // 1) 메인 설명 카드 내용 동기화 및 칩 상태 동기화
  const container = document.getElementById('rife-codes-container');
  if (container) {
    const allRifeBtns = container.querySelectorAll('.btn-rife');
    allRifeBtns.forEach(btn => {
      if (btn.getAttribute('data-code') === code) {
        btn.classList.add('active');
        // 스크롤 이동시켜 유저가 볼 수 있도록 보장
        btn.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      } else {
        btn.classList.remove('active');
      }
    });
  }

  const txtRifeCardTitle = document.getElementById('rife-card-title');
  const txtRifeCardDesc = document.getElementById('rife-card-desc');
  if (txtRifeCardTitle) txtRifeCardTitle.textContent = recipe.title;
  if (txtRifeCardDesc) txtRifeCardDesc.innerHTML = recipe.desc.replace(/\n/g, '<br>');

  // 2) 카테고리 탭 동기화 (선택한 코드의 카테고리에 맞는 탭을 활성화 처리)
  const tabs = document.querySelectorAll('.btn-rife-tab');
  tabs.forEach(tab => {
    if (tab.getAttribute('data-category') === recipe.category) {
      tab.classList.add('active');
    } else {
      tab.classList.remove('active');
    }
  });
  // 카테고리 탭과 매칭되도록 그리드 다시 렌더링
  renderRifeCodesGrid(recipe.category, '');

  // 3) 마스터 볼륨 및 Rife 자체 볼륨이 청취 가능한 수준(80% / 50%)인지 확인 및 자동 보정
  const sliderMasterVolume = document.getElementById('slider-master-volume');
  const txtMasterVolume = document.getElementById('txt-master-volume');
  let masterVol = sliderMasterVolume ? parseFloat(sliderMasterVolume.value) : 0.8;
  if (isNaN(masterVol) || masterVol <= 0.05) {
    masterVol = 0.8;
    if (sliderMasterVolume) sliderMasterVolume.value = 0.8;
    if (txtMasterVolume) txtMasterVolume.textContent = '80%';
  }
  engine.setMasterVolume(masterVol);

  const sliderRifeVolume = document.getElementById('slider-rife-volume');
  const txtRifeVolume = document.getElementById('txt-rife-volume');
  let rifeVol = sliderRifeVolume ? parseFloat(sliderRifeVolume.value) : 0.5;
  if (isNaN(rifeVol) || rifeVol <= 0.05) {
    rifeVol = 0.5;
    if (sliderRifeVolume) sliderRifeVolume.value = 0.5;
    if (txtRifeVolume) txtRifeVolume.textContent = '50%';
  }
  engine.setRifeVolume(rifeVol);

  // 4) Rife 테라피 주파수 설정 및 활성화
  engine.setRifeFrequencyRecipe(recipe.freqs);
  engine.toggleRife(true);

  // 5) 오디오 엔진 초기화 및 플레이 개시
  engine.init();
  if (engine.audioCtx && engine.audioCtx.state === 'suspended') {
    engine.audioCtx.resume();
  }
  if (!engine.isPlaying) {
    engine.start();
  }

  // 6) UI 재생 버튼 상태 동기화 (마스터 & Rife 재생 버튼 활성화)
  const btnMasterPlay = document.getElementById('btn-master-play');
  const visualizerFallback = document.querySelector('.visualizer-fallback');
  if (btnMasterPlay) {
    btnMasterPlay.innerHTML = '<i class="fa-solid fa-pause"></i>';
    btnMasterPlay.classList.add('playing');
  }
  const btnRifePlay = document.getElementById('btn-rife-play');
  if (btnRifePlay) {
    btnRifePlay.innerHTML = '<i class="fa-solid fa-pause"></i>';
    btnRifePlay.classList.add('playing');
  }
  if (visualizerFallback) visualizerFallback.style.display = 'none';
  startVisualizer();

  // 7) 타임라인 바 렌더링 및 타이머 시작
  renderRifeTimeline(); renderVipTimeline();
  startRifeTimer();
  resetVipTimer(); // VIP 타이머 리셋
}

/**
 * 특정 VIP 웰니스 코드를 오디오 엔진 및 UI에 다이내믹하게 매핑하여 즉시 재생하는 함수
 * @param {string} code - VIP 코드 번호 (예: 'V001')
 */
function applySpecificVipCodeToEngine(code) {
  const recipe = vipRecipes[code];
  if (!recipe) return;

  // 1) 메인 설명 카드 내용 동기화 및 칩 상태 동기화
  const container = document.getElementById('vip-codes-container');
  if (container) {
    const allVipBtns = container.querySelectorAll('.btn-vip-code');
    allVipBtns.forEach(btn => {
      if (btn.textContent.includes(code)) {
        btn.classList.add('active');
        btn.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      } else {
        btn.classList.remove('active');
      }
    });
  }

  const txtVipCardTitle = document.getElementById('vip-card-title');
  const txtVipCardDesc = document.getElementById('vip-card-desc');
  if (txtVipCardTitle) txtVipCardTitle.textContent = recipe.title;
  if (txtVipCardDesc) txtVipCardDesc.innerHTML = recipe.desc.replace(/\n/g, '<br>');

  // 2) 카테고리 탭 동기화
  const tabs = document.querySelectorAll('.btn-vip-tab');
  tabs.forEach(tab => {
    if (tab.getAttribute('data-category') === recipe.category) {
      tab.classList.add('active');
    } else {
      tab.classList.remove('active');
    }
  });

  // 3) 마스터 볼륨 및 VIP 볼륨 자동 보정 (청취 가능한 레벨 80% / 30%)
  const sliderMasterVolume = document.getElementById('slider-master-volume');
  const txtMasterVolume = document.getElementById('txt-master-volume');
  let masterVol = sliderMasterVolume ? parseFloat(sliderMasterVolume.value) : 0.8;
  if (isNaN(masterVol) || masterVol <= 0.05) {
    masterVol = 0.8;
    if (sliderMasterVolume) sliderMasterVolume.value = 0.8;
    if (txtMasterVolume) txtMasterVolume.textContent = '80%';
  }
  engine.setMasterVolume(masterVol);

  const sliderVipVolume = document.getElementById('slider-vip-volume');
  const txtVipVolume = document.getElementById('txt-vip-volume');
  let vipVol = sliderVipVolume ? parseFloat(sliderVipVolume.value) : 0.3;
  if (isNaN(vipVol) || vipVol <= 0.05) {
    vipVol = 0.3;
    if (sliderVipVolume) sliderVipVolume.value = 0.3;
    if (txtVipVolume) txtVipVolume.textContent = '30%';
  }
  engine.setVipVolume(vipVol);

  // 4) VIP 테라피 주파수 설정 및 활성화
  engine.setVipFrequencyRecipe(recipe.freqs);
  engine.toggleVip(true);

  // 5) 오디오 엔진 초기화 및 플레이 개시
  engine.init();
  if (engine.audioCtx && engine.audioCtx.state === 'suspended') {
    engine.audioCtx.resume();
  }
  if (!engine.isPlaying) {
    engine.start();
  }

  // 6) UI 버튼 동기화
  const btnMasterPlay = document.getElementById('btn-master-play');
  const visualizerFallback = document.querySelector('.visualizer-fallback');
  if (btnMasterPlay) {
    btnMasterPlay.innerHTML = '<i class="fa-solid fa-pause"></i>';
    btnMasterPlay.classList.add('playing');
  }
  const btnVipPlay = document.getElementById('btn-vip-play');
  if (btnVipPlay) {
    btnVipPlay.innerHTML = '<i class="fa-solid fa-pause"></i>';
    btnVipPlay.classList.add('playing');
  }
  if (visualizerFallback) visualizerFallback.style.display = 'none';
  startVisualizer();

  // 7) 타임라인 바 렌더링 및 타이머 시작
  renderVipTimeline();
  startVipTimer();
  resetRifeTimer();
}
window.applySpecificCodeToEngine = applySpecificCodeToEngine;
window.applySpecificVipCodeToEngine = applySpecificVipCodeToEngine;

/**
 * 4. 애플리케이션 초기화 및 이벤트 리스너 설정
 */
function initApp() {
  // 주파수 전환 간격 텍스트 포맷터
  function formatIntervalText(sec) {
    const isEn = window.currentLang === 'en';
    const s = Math.round(sec);
    if (s < 60) {
      if (s === 8) return isEn ? '8s (Scan)' : '8초 (스캔)';
      return isEn ? `${s}s` : `${s}초`;
    }
    const min = Math.floor(s / 60);
    const remSec = s % 60;
    if (remSec === 0) {
      if (min === 3) return isEn ? '3m (Std Healing)' : '3분 (표준 힐링)';
      if (min === 5) return isEn ? '5m (Deep Therapy)' : '5분 (딥 테라피)';
      return isEn ? `${min}m` : `${min}분`;
    }
    return isEn ? `${min}m ${remSec}s` : `${min}분 ${remSec}초`;
  }
  window.formatIntervalText = formatIntervalText;

  // [신규 헬퍼] 사용자가 개별 채널 조작 시 오디오 엔진 및 마스터 볼륨을 유기적으로 기동해주는 함수
  const lastPreviewTimes = {};
  function ensureEnginePlaying() {
    engine.init(); // 엔진 오디오 컨텍스트 기동 및 초기화
    if (!engine.isPlaying) {
      engine.start();
      if (btnMasterPlay) {
        btnMasterPlay.innerHTML = '<i class="fa-solid fa-pause"></i>';
        btnMasterPlay.classList.add('playing');
      }
      const visualizerFallback = document.querySelector('.visualizer-fallback');
      if (visualizerFallback) {
        visualizerFallback.style.display = 'none';
      }
      startVisualizer();
    }
  }

  // [초기화 핫픽스] 화면 로드 시 UI 슬라이더의 기본값을 오디오 엔진에 즉시 동기화해주는 함수
  function syncSlidersToEngine() {
    // 1. 마스터 볼륨 동기화 (기본값 0% 시작 보장)
    engine.setMasterVolume(parseFloat(sliderMasterVolume.value));
    txtMasterVolume.textContent = Math.round(parseFloat(sliderMasterVolume.value) * 100) + '%';

    // 2. 바이노럴 비트 볼륨 및 주파수 동기화 (기본값 0% 시작 보장)
    engine.setBeatsVolume(parseFloat(sliderBeatsVolume.value));
    txtBeatsVolume.textContent = Math.round(parseFloat(sliderBeatsVolume.value) * 100) + '%';
    engine.setBeatsFrequency(parseFloat(sliderCarrierFreq.value), parseFloat(sliderBeatFreq.value));
    txtCarrierFreq.textContent = parseFloat(sliderCarrierFreq.value) + ' Hz';
    const initialBeat = parseFloat(sliderBeatFreq.value);
    txtBeatFreq.textContent = (initialBeat % 1 === 0 ? initialBeat.toFixed(1) : parseFloat(initialBeat.toFixed(2))) + ' Hz';

    // 3. 솔페지오 주파수 볼륨 및 주파수 동기화 (기본값 0% 시작 보장)
    engine.setSolfeggioVolume(parseFloat(sliderSolfeggioVolume.value));
    txtSolfeggioVolume.textContent = Math.round(parseFloat(sliderSolfeggioVolume.value) * 100) + '%';
    // 활성화된 솔페지오 버튼 찾아서 주파수 설정
    const activeSolBtn = document.querySelector('.btn-solfeggio.active');
    if (activeSolBtn) {
      engine.setSolfeggioFrequency(activeSolBtn.getAttribute('data-freq'));
    }

    // 4. 솔라브르 주파수 레시피 볼륨 동기화 (기본값 0% 시작 보장)
    engine.setRifeVolume(parseFloat(sliderRifeVolume.value));
    txtRifeVolume.textContent = Math.round(parseFloat(sliderRifeVolume.value) * 100) + '%';

    // 4.1. 솔라브르 일반 Rife 전환 간격 및 텍스트 동기화
    const sliderRifeInterval = document.getElementById('slider-rife-interval');
    if (sliderRifeInterval) {
      const rifeIntVal = parseFloat(sliderRifeInterval.value) || 8.0;
      engine.setRifeSweepInterval(rifeIntVal);
      const txtRifeInterval = document.getElementById('txt-rife-interval');
      if (txtRifeInterval) txtRifeInterval.textContent = formatIntervalText(rifeIntVal);
    }

    // 4.5. 솔라브르 VIP 레시피 볼륨 동기화 (기본값 0% 시작 보장)
    if (sliderVipVolume) {
      engine.setVipVolume(parseFloat(sliderVipVolume.value));
      if (txtVipVolume) txtVipVolume.textContent = Math.round(parseFloat(sliderVipVolume.value) * 100) + '%';
    }

    // 4.6. 솔라브르 VIP 전환 간격 및 텍스트 동기화
    const sliderVipInterval = document.getElementById('slider-vip-interval');
    if (sliderVipInterval) {
      const vipIntVal = parseFloat(sliderVipInterval.value) || 8.0;
      engine.setVipSweepInterval(vipIntVal);
      const txtVipInterval = document.getElementById('txt-vip-interval');
      if (txtVipInterval) txtVipInterval.textContent = formatIntervalText(vipIntVal);
    }

    // 4.7. [신규] 커스텀 주파수 스튜디오 볼륨 동기화
    const sliderCustomVol = document.getElementById('slider-custom-volume');
    if (sliderCustomVol) {
      engine.setCustomVolume(parseFloat(sliderCustomVol.value));
      const txtCustomVol = document.getElementById('txt-custom-volume');
      if (txtCustomVol) txtCustomVol.textContent = Math.round(parseFloat(sliderCustomVol.value) * 100) + '%';
    }

    // 5. 자연음 마스터 및 개별 채널 볼륨 동기화 (기본값 0% 시작 보장)
    engine.setNatureMasterVolume(parseFloat(sliderNatureMaster.value));
    txtNatureMaster.textContent = Math.round(parseFloat(sliderNatureMaster.value) * 100) + '%';
    
    Object.keys(natureSliders).forEach(key => {
      const item = natureSliders[key];
      engine.setNatureVolume(key, parseFloat(item.slider.value));
      item.txt.textContent = Math.round(parseFloat(item.slider.value) * 100) + '%';
    });
  }

  // 초기화 함수 실행하여 화면상의 볼륨과 오디오 엔진의 볼륨을 100% 일치시킵니다.
  syncSlidersToEngine();

  // [강력 핫픽스] Netlify 배포 환경 및 CDN 리소스 로드 호환성을 보장하기 위해 런타임에서 배경 이미지를 강제 바인딩합니다.
  const visualizerContainer = document.querySelector('.visualizer-container');
  if (visualizerContainer) {
    // 거친 바위 질감 없이 몽환적이고 부드러운 핑크/퍼플 성운 배경화면(Unsplash) 링크로 교체
    const cosmicUrl = 'https://images.unsplash.com/photo-1502134249126-9f3755a50d78?q=80&w=1200&auto=format&fit=crop';
    visualizerContainer.style.setProperty('background-image', `url(${cosmicUrl})`, 'important');
  }

  // 1) 마스터 플레이 버튼 제어
  btnMasterPlay.addEventListener('click', () => {
    engine.init();
    if (engine.audioCtx && engine.audioCtx.state === 'suspended') {
      engine.audioCtx.resume();
    }
    if (!engine.isPlaying) {
      // 1. 마스터 볼륨 확인 및 자동 보정
      let masterVol = parseFloat(sliderMasterVolume.value);
      if (isNaN(masterVol) || masterVol <= 0.05) {
        masterVol = 0.8;
        sliderMasterVolume.value = 0.8;
        txtMasterVolume.textContent = '80%';
      }
      engine.setMasterVolume(masterVol);

      // 2. 만약 모든 파트(Rife, VIP, Beats, Solfeggio, Nature)의 볼륨이 0이거나 비활성화라면, 기본 메인 테마인 Code 001 Rife를 50% 볼륨으로 자동 기동
      const hasAudible = (engine.isRifeActive && engine.rifeVolume > 0.05) ||
                         (engine.isVipActive && engine.vipVolume > 0.05) ||
                         (engine.isBeatsActive && engine.beatsVolume > 0.05) ||
                         (engine.isSolfeggioActive && engine.solfeggioVolume > 0.05) ||
                         (engine.isNatureActive && engine.natureMasterVolume > 0.05 && Object.values(engine.natureVolumeSettings).some(v => v > 0.05));
      
      if (!hasAudible) {
        let rifeVol = parseFloat(sliderRifeVolume.value);
        if (isNaN(rifeVol) || rifeVol <= 0.05) {
          rifeVol = 0.5;
          sliderRifeVolume.value = 0.5;
          txtRifeVolume.textContent = '50%';
        }
        engine.setRifeVolume(rifeVol);
        engine.toggleRife(true);
        const btnRifePlay = document.getElementById('btn-rife-play');
        if (btnRifePlay) {
          btnRifePlay.innerHTML = '<i class="fa-solid fa-pause"></i>';
          btnRifePlay.classList.add('playing');
        }
        startRifeTimer();
      }

      engine.start();
      btnMasterPlay.innerHTML = '<i class="fa-solid fa-pause"></i>';
      btnMasterPlay.classList.add('playing');
      if (typeof window.syncAllPlayButtons === 'function') {
        window.syncAllPlayButtons(true, '바이오 주파수 사운드');
      }
      if (visualizerFallback) visualizerFallback.style.display = 'none';
      startVisualizer();
    } else {
      if (typeof window.stopAllAudio === 'function') {
        window.stopAllAudio();
      } else {
        engine.stop();
        btnMasterPlay.innerHTML = '<i class="fa-solid fa-play"></i>';
        btnMasterPlay.classList.remove('playing');
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
        if (typeof resetRifeTimer === 'function') resetRifeTimer();
        if (typeof resetVipTimer === 'function') resetVipTimer();
        if (visualizerFallback) visualizerFallback.style.display = 'flex';
      }
    }
  });

  // 2) 마스터 음소거 버튼 제어
  btnMasterMute.addEventListener('click', () => {
    if (engine.audioCtx) {
      const isMuted = engine.toggleMute();
      if (isMuted) {
        btnMasterMute.innerHTML = '<i class="fa-solid fa-volume-xmark"></i>';
        btnMasterMute.classList.add('muted');
      } else {
        btnMasterMute.innerHTML = '<i class="fa-solid fa-volume-high"></i>';
        btnMasterMute.classList.remove('muted');
      }
    }
  });

  // 3) 마스터 볼륨 슬라이더 동기화
  sliderMasterVolume.addEventListener('input', (e) => {
    const val = parseFloat(e.target.value);
    txtMasterVolume.textContent = Math.round(val * 100) + '%';
    engine.setMasterVolume(val);
  });

  // 4) 바이노럴 비트 자체 볼륨 슬라이더 동기화
  sliderBeatsVolume.addEventListener('input', (e) => {
    ensureEnginePlaying(); // 조작 시 마스터 엔진 자동 기동
    const val = parseFloat(e.target.value);
    txtBeatsVolume.textContent = Math.round(val * 100) + '%';
    engine.setBeatsVolume(val);
    
    // 만약 개별 볼륨을 0 초과로 올렸는데 뇌파 재생 상태가 비활성화라면 강제 활성화 처리
    if (val > 0 && !engine.isBeatsActive) {
      engine.toggleBeats(true);
      const btnBeatsPlay = document.getElementById('btn-beats-play');
      if (btnBeatsPlay) {
        btnBeatsPlay.innerHTML = '<i class="fa-solid fa-pause"></i>';
        btnBeatsPlay.classList.add('playing');
      }
    }
  });

  // 5) 기준 주파수 (Carrier) 및 뇌파 주파수 (Beat) 조절
  function updateBeatsFreq() {
    ensureEnginePlaying(); // 조작 시 마스터 엔진 자동 기동
    const carrier = parseFloat(sliderCarrierFreq.value);
    const beat = parseFloat(sliderBeatFreq.value);
    txtCarrierFreq.textContent = carrier + ' Hz';
    txtBeatFreq.textContent = (beat % 1 === 0 ? beat.toFixed(1) : parseFloat(beat.toFixed(2))) + ' Hz';
    engine.setBeatsFrequency(carrier, beat);
  }
  
  sliderCarrierFreq.addEventListener('input', updateBeatsFreq);
  sliderBeatFreq.addEventListener('input', updateBeatsFreq);

  // 6) 바이노럴 비트 뇌파 프리셋 선택 연동
  presetButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      ensureEnginePlaying(); // 조작 시 마스터 엔진 자동 기동
      presetButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const carrier = btn.getAttribute('data-carrier');
      const beat = btn.getAttribute('data-beat');

      sliderCarrierFreq.value = carrier;
      sliderBeatFreq.value = beat;
      updateBeatsFreq();
      
      // 프리셋 클릭 시 기본 재생 볼륨이 0이라면 청취 가능한 레벨인 30%로 스마트 인상
      if (parseFloat(sliderBeatsVolume.value) === 0) {
        sliderBeatsVolume.value = 0.3;
        txtBeatsVolume.textContent = '30%';
        engine.setBeatsVolume(0.3);
      }
      
      if (!engine.isBeatsActive) {
        engine.toggleBeats(true);
        const btnBeatsPlay = document.getElementById('btn-beats-play');
        if (btnBeatsPlay) {
          btnBeatsPlay.innerHTML = '<i class="fa-solid fa-pause"></i>';
          btnBeatsPlay.classList.add('playing');
        }
      }
    });
  });

  // 7) 솔페지오 주파수 기적음 볼륨 연동
  sliderSolfeggioVolume.addEventListener('input', (e) => {
    ensureEnginePlaying(); // 조작 시 마스터 엔진 자동 기동
    const val = parseFloat(e.target.value);
    txtSolfeggioVolume.textContent = Math.round(val * 100) + '%';
    engine.setSolfeggioVolume(val);
  });

  // 8) 솔페지오 선택 버튼들 연동
  solfeggioButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      ensureEnginePlaying(); // 조작 시 마스터 엔진 자동 기동
      solfeggioButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const freq = btn.getAttribute('data-freq');
      engine.setSolfeggioFrequency(freq);
      
      // 솔페지오 주파수 클릭 시 볼륨이 0%라면 청취 기본값인 25%로 자동 인상
      if (parseFloat(sliderSolfeggioVolume.value) === 0) {
        sliderSolfeggioVolume.value = 0.25;
        txtSolfeggioVolume.textContent = '25%';
        engine.setSolfeggioVolume(0.25);
      }
    });
  });

  // 9) 솔라브르 주파수 레시피 볼륨 연동
  sliderRifeVolume.addEventListener('input', (e) => {
    ensureEnginePlaying(); // 조작 시 마스터 엔진 자동 기동
    const val = parseFloat(e.target.value);
    txtRifeVolume.textContent = Math.round(val * 100) + '%';
    engine.setRifeVolume(val);
  });

  // 9.8) 솔라브르 테라피 개별 재생/정지 버튼 이벤트 바인딩
  const btnRifePlay = document.getElementById('btn-rife-play');
  if (btnRifePlay) {
    btnRifePlay.addEventListener('click', () => {
      engine.init();
      if (engine.audioCtx && engine.audioCtx.state === 'suspended') {
        engine.audioCtx.resume();
      }
      
      if (!engine.isRifeActive) {
        // 마스터 볼륨 확인 및 자동 보정
        let masterVol = parseFloat(sliderMasterVolume.value);
        if (isNaN(masterVol) || masterVol <= 0.05) {
          masterVol = 0.8;
          sliderMasterVolume.value = 0.8;
          txtMasterVolume.textContent = '80%';
        }
        engine.setMasterVolume(masterVol);

        // Rife 볼륨 확인 및 자동 보정
        let rifeVol = parseFloat(sliderRifeVolume.value);
        if (isNaN(rifeVol) || rifeVol <= 0.05) {
          rifeVol = 0.5;
          sliderRifeVolume.value = 0.5;
          txtRifeVolume.textContent = '50%';
        }
        engine.setRifeVolume(rifeVol);

        // Rife 파트 활성화
        engine.toggleRife(true);
        if (!engine.isPlaying) {
          engine.start();
        }
        btnMasterPlay.innerHTML = '<i class="fa-solid fa-pause"></i>';
        btnMasterPlay.classList.add('playing');
        btnRifePlay.innerHTML = '<i class="fa-solid fa-pause"></i>';
        btnRifePlay.classList.add('playing');
        if (visualizerFallback) visualizerFallback.style.display = 'none';
        startVisualizer();
        startRifeTimer();
      } else {
        engine.toggleRife(false);
        btnRifePlay.innerHTML = '<i class="fa-solid fa-play"></i>';
        btnRifePlay.classList.remove('playing');
        resetRifeTimer();
      }
    });
  }

  // 9.85) [신규] 솔라브르 일반 Rife 주파수 전환 시간 조절 및 고정(Hold) 이벤트 바인딩
  const sliderRifeInterval = document.getElementById('slider-rife-interval');
  const txtRifeInterval = document.getElementById('txt-rife-interval');
  const btnRifeIntPresets = document.querySelectorAll('.btn-rife-int-preset');
  const btnRifeHold = document.getElementById('btn-rife-hold');
  const iconRifeHold = document.getElementById('icon-rife-hold');
  const txtRifeHold = document.getElementById('txt-rife-hold');

  if (sliderRifeInterval) {
    sliderRifeInterval.addEventListener('input', (e) => {
      const sec = parseFloat(e.target.value);
      if (txtRifeInterval) txtRifeInterval.textContent = formatIntervalText(sec);
      engine.setRifeSweepInterval(sec);
      btnRifeIntPresets.forEach(b => {
        if (parseFloat(b.getAttribute('data-seconds')) === sec) {
          b.classList.add('active');
          b.style.borderColor = 'rgba(52, 211, 153, 0.3)';
          b.style.background = 'rgba(52, 211, 153, 0.15)';
          b.style.color = '#34d399';
        } else {
          b.classList.remove('active');
          b.style.borderColor = 'rgba(255, 255, 255, 0.08)';
          b.style.background = 'rgba(255, 255, 255, 0.03)';
          b.style.color = 'var(--color-text-muted)';
        }
      });
    });
  }

  btnRifeIntPresets.forEach(btn => {
    btn.addEventListener('click', () => {
      const sec = parseFloat(btn.getAttribute('data-seconds'));
      if (sliderRifeInterval) sliderRifeInterval.value = sec;
      if (txtRifeInterval) txtRifeInterval.textContent = formatIntervalText(sec);
      engine.setRifeSweepInterval(sec);
      btnRifeIntPresets.forEach(b => {
        b.classList.remove('active');
        b.style.borderColor = 'rgba(255, 255, 255, 0.08)';
        b.style.background = 'rgba(255, 255, 255, 0.03)';
        b.style.color = 'var(--color-text-muted)';
      });
      btn.classList.add('active');
      btn.style.borderColor = 'rgba(52, 211, 153, 0.3)';
      btn.style.background = 'rgba(52, 211, 153, 0.15)';
      btn.style.color = '#34d399';
    });
  });

  if (btnRifeHold) {
    btnRifeHold.addEventListener('click', () => {
      const newHoldState = !engine.isRifeHold;
      engine.setRifeHold(newHoldState);
      if (newHoldState) {
        btnRifeHold.classList.add('active');
        btnRifeHold.style.background = 'rgba(52, 211, 153, 0.25)';
        btnRifeHold.style.borderColor = '#34d399';
        btnRifeHold.style.boxShadow = '0 0 12px rgba(52, 211, 153, 0.3)';
        if (iconRifeHold) {
          iconRifeHold.className = 'fa-solid fa-lock';
        }
        if (txtRifeHold) txtRifeHold.textContent = window.currentLang === 'en' ? 'Frequency Held (Hold ON)' : '주파수 고정 중 (Hold ON)';
      } else {
        btnRifeHold.classList.remove('active');
        btnRifeHold.style.background = 'rgba(52, 211, 153, 0.08)';
        btnRifeHold.style.borderColor = 'rgba(52, 211, 153, 0.3)';
        btnRifeHold.style.boxShadow = 'none';
        if (iconRifeHold) {
          iconRifeHold.className = 'fa-solid fa-lock-open';
        }
        if (txtRifeHold) txtRifeHold.textContent = window.currentLang === 'en' ? 'Hold Frequency' : '현재 주파수 고정';
      }
    });
  }

  // 9.9) 솔라브르 주파수 실시간 타임라인 위젯 로직 (가로선 주파수 노드 클릭 점프 탑재)
  const rifeTimelineNodes = document.getElementById('rife-timeline-nodes');
  const rifeTimelineProgress = document.getElementById('rife-timeline-progress');
  const rifeTimelineStatusText = document.getElementById('rife-timeline-status-text');

  // 일반 Rife 실시간 주파수 변경 콜백 훅 연결
  engine.onRifeFrequencyChange = (index, freq) => {
    const freqs = engine.rifeFreqs;
    const total = freqs.length;
    if (total === 0) return;

    // 1. 프로그레스 바 충전율 계산 및 스타일 갱신
    const progressPercent = total > 1 ? (index / (total - 1)) * 100 : 100;
    if (rifeTimelineProgress) {
      rifeTimelineProgress.style.width = `${progressPercent}%`;
    }

    // 2. 모든 노드의 active 클래스 해제 후 현재 작동 노드 활성화
    if (rifeTimelineNodes) {
      const nodes = rifeTimelineNodes.querySelectorAll('.rife-timeline-node');
      nodes.forEach((node, idx) => {
        if (idx === index) {
          node.classList.add('active');
        } else {
          node.classList.remove('active');
        }
      });
    }

    // 3. 현재 작동 주파수 상태 텍스트 갱신 (특정 주파수 대역 해설 추가)
    const isEn = window.currentLang === 'en';
    let helpText = '';
    if (freq === 3.59 || freq === 3) helpText = isEn ? ' (Brainwave Entrainment Delta)' : ' (뇌파 동조 Delta파)';
    else if (freq === 7.83) helpText = isEn ? ' (Earth Schumann Resonance)' : ' (지구 슈만 공명 주파수)';
    else if (freq === 10) helpText = isEn ? ' (Meditation & Focus Alpha)' : ' (명상 학습 Alpha파)';
    else if (freq === 444) helpText = isEn ? ' (Solfeggio DNA Repair)' : ' (솔페지오 DNA 치유 음역)';
    else if (freq === 880 || freq === 802) helpText = isEn ? ' (Rife Pathogen Resonance)' : ' (Rife 병원균 공명 제어)';
    
    if (rifeTimelineStatusText) {
      const activePrefix = isEn ? 'Active:' : '작동 중:';
      rifeTimelineStatusText.innerHTML = `${activePrefix} <strong style="color: #34d399; font-size: 0.95rem;">${freq} Hz</strong>${helpText} [${index + 1}/${total}]`;
    }
  };

  // VIP Rife 실시간 주파수 변경 콜백 훅 연결
  engine.onVipFrequencyChange = (index, freq) => {
    const freqs = engine.vipFreqs;
    const total = freqs.length;
    if (total === 0) return;

    // 1. 프로그레스 바 충전율 계산 및 스타일 갱신
    const progressPercent = total > 1 ? (index / (total - 1)) * 100 : 100;
    if (vipTimelineProgress) {
      vipTimelineProgress.style.width = `${progressPercent}%`;
    }

    // 2. 모든 노드의 active 클래스 해제 후 현재 작동 노드 활성화
    if (vipTimelineNodes) {
      const nodes = vipTimelineNodes.querySelectorAll('.vip-timeline-node');
      nodes.forEach((node, idx) => {
        if (idx === index) {
          node.classList.add('active');
        } else {
          node.classList.remove('active');
        }
      });
    }

    // 3. 현재 작동 주파수 상태 텍스트 갱신 (특정 주파수 대역 해설 추가)
    const isEnVip = window.currentLang === 'en';
    let helpText = '';
    if (freq === 3.59 || freq === 3) helpText = isEnVip ? ' (Brainwave Entrainment Delta)' : ' (뇌파 동조 Delta파)';
    else if (freq === 7.83) helpText = isEnVip ? ' (Earth Schumann Resonance)' : ' (지구 슈만 공명 주파수)';
    else if (freq === 10) helpText = isEnVip ? ' (Meditation & Focus Alpha)' : ' (명상 학습 Alpha파)';
    else if (freq === 444) helpText = isEnVip ? ' (Solfeggio DNA Repair)' : ' (솔페지오 DNA 치유 음역)';
    else if (freq === 880 || freq === 802) helpText = isEnVip ? ' (Rife Pathogen Resonance)' : ' (Rife 병원균 공명 제어)';
    
    if (vipTimelineStatusText) {
      const activePrefix = isEnVip ? 'Active:' : '작동 중:';
      vipTimelineStatusText.innerHTML = `${activePrefix} <strong style="color: #f59e0b; font-size: 0.95rem;">${freq} Hz</strong>${helpText} [${index + 1}/${total}]`;
    }
  };

  // 초기 화면 로드 시 타임라인 렌더링 호출
  renderRifeTimeline(); renderVipTimeline();

  // [핫픽스] 초기 로드 시 VIP 디스플레이 카드 정보 동화 (Code V001 기본 탑재 동기화)
  if (vipRecipes['V001']) {
    engine.setVipFrequencyRecipe(vipRecipes['V001'].freqs);
    if (txtVipCardTitle) txtVipCardTitle.textContent = vipRecipes['V001'].title;
    if (txtVipCardDesc) txtVipCardDesc.innerHTML = vipRecipes['V001'].desc.replace(/\n/g, '<br>');
  }

  // 10) 솔라브르 주파수 100대 자체 웰니스 코드 그리드 동적 연동 및 이벤트 바인딩
  const rifeCategoryTabs = document.querySelectorAll('.btn-rife-tab');
  const rifeSearchInput = document.getElementById('input-rife-search');

  // 초기 100대 코드 전체 렌더링 실행
  renderRifeCodesGrid('all', '');

  // 카테고리 탭 클릭 시 필터링 처리
  rifeCategoryTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      rifeCategoryTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      
      const category = tab.getAttribute('data-category');
      const searchVal = rifeSearchInput ? rifeSearchInput.value : '';
      renderRifeCodesGrid(category, searchVal);
    });
  });

  // 검색창 입력 시 실시간 필터링 처리
  if (rifeSearchInput) {
    rifeSearchInput.addEventListener('input', (e) => {
      const activeTab = document.querySelector('.btn-rife-tab.active');
      const category = activeTab ? activeTab.getAttribute('data-category') : 'all';
      renderRifeCodesGrid(category, e.target.value);
    });
  }

  // 10.2) [신규] 솔라브르 VIP 주파수 레시피 코드 동적 연동 및 이벤트 바인딩
  // 초기 VIP 전체 렌더링 실행
  renderVipCodesGrid('all', '');

  // VIP 카테고리 탭 클릭 시 필터링 처리
  vipCategoryTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      vipCategoryTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      
      const category = tab.getAttribute('data-category');
      const searchVal = vipSearchInput ? vipSearchInput.value : '';
      renderVipCodesGrid(category, searchVal);
    });
  });

  // VIP 검색창 입력 시 실시간 필터링 처리
  if (vipSearchInput) {
    vipSearchInput.addEventListener('input', (e) => {
      const activeTab = document.querySelector('.btn-vip-tab.active');
      const category = activeTab ? activeTab.getAttribute('data-category') : 'all';
      renderVipCodesGrid(category, e.target.value);
    });
  }

  // VIP 볼륨 연동
  if (sliderVipVolume) {
    sliderVipVolume.addEventListener('input', (e) => {
      ensureEnginePlaying(); // 조작 시 마스터 엔진 자동 기동
      const val = parseFloat(e.target.value);
      if (txtVipVolume) txtVipVolume.textContent = Math.round(val * 100) + '%';
      
      // VIP 볼륨 채널에 개별 주입
      engine.setVipVolume(val);
    });
  }

  // VIP 개별 재생/정지 버튼 이벤트 바인딩
  if (btnVipPlay) {
    btnVipPlay.addEventListener('click', () => {
      // 엔진 오디오 컨텍스트 기동 및 초기화
      engine.init();

      if (!engine.isVipActive) {
        // 기존 마스터 재생 버튼이 꺼져있다면 오디오 엔진 전체 기동을 유도함
        if (!engine.isPlaying) {
          engine.start();
          btnMasterPlay.innerHTML = '<i class="fa-solid fa-pause"></i>';
          btnMasterPlay.classList.add('playing');
          visualizerFallback.style.display = 'none';
          startVisualizer();
        }

        // VIP 볼륨을 먼저 주입 (0%인 경우 지능형 볼륨 25% 자동 보정)
        let currentVol = parseFloat(sliderVipVolume.value);
        if (currentVol === 0) {
          currentVol = 0.25;
          sliderVipVolume.value = 0.25;
          if (txtVipVolume) txtVipVolume.textContent = '25%';
        }
        engine.setVipVolume(currentVol);
        // VIP Rife 파트 활성화 (일반 Rife 파트와 분리)
        engine.toggleVip(true);
        
        btnVipPlay.innerHTML = '<i class="fa-solid fa-pause"></i>';
        btnVipPlay.classList.add('playing');
        
        startVipTimer(); // VIP 타이머 가동
      } else {
        // VIP Rife 파트 비활성화 (일반 Rife 파트와 분리)
        engine.toggleVip(false);
        
        btnVipPlay.innerHTML = '<i class="fa-solid fa-play"></i>';
        btnVipPlay.classList.remove('playing');
        
        resetVipTimer(); // VIP 타이머 리셋
      }
    });
  }

  // 10.3) [신규] 솔라브르 VIP 주파수 전환 시간 조절 및 고정(Hold) 이벤트 바인딩
  const sliderVipInterval = document.getElementById('slider-vip-interval');
  const txtVipInterval = document.getElementById('txt-vip-interval');
  const btnVipIntPresets = document.querySelectorAll('.btn-vip-int-preset');
  const btnVipHold = document.getElementById('btn-vip-hold');
  const iconVipHold = document.getElementById('icon-vip-hold');
  const txtVipHold = document.getElementById('txt-vip-hold');

  if (sliderVipInterval) {
    sliderVipInterval.addEventListener('input', (e) => {
      const sec = parseFloat(e.target.value);
      if (txtVipInterval) txtVipInterval.textContent = formatIntervalText(sec);
      engine.setVipSweepInterval(sec);
      btnVipIntPresets.forEach(b => {
        if (parseFloat(b.getAttribute('data-seconds')) === sec) {
          b.classList.add('active');
          b.style.borderColor = 'rgba(245, 158, 11, 0.3)';
          b.style.background = 'rgba(245, 158, 11, 0.15)';
          b.style.color = '#f59e0b';
        } else {
          b.classList.remove('active');
          b.style.borderColor = 'rgba(255, 255, 255, 0.08)';
          b.style.background = 'rgba(255, 255, 255, 0.03)';
          b.style.color = 'var(--color-text-muted)';
        }
      });
    });
  }

  btnVipIntPresets.forEach(btn => {
    btn.addEventListener('click', () => {
      const sec = parseFloat(btn.getAttribute('data-seconds'));
      if (sliderVipInterval) sliderVipInterval.value = sec;
      if (txtVipInterval) txtVipInterval.textContent = formatIntervalText(sec);
      engine.setVipSweepInterval(sec);
      btnVipIntPresets.forEach(b => {
        b.classList.remove('active');
        b.style.borderColor = 'rgba(255, 255, 255, 0.08)';
        b.style.background = 'rgba(255, 255, 255, 0.03)';
        b.style.color = 'var(--color-text-muted)';
      });
      btn.classList.add('active');
      btn.style.borderColor = 'rgba(245, 158, 11, 0.3)';
      btn.style.background = 'rgba(245, 158, 11, 0.15)';
      btn.style.color = '#f59e0b';
    });
  });

  if (btnVipHold) {
    btnVipHold.addEventListener('click', () => {
      const newHoldState = !engine.isVipHold;
      engine.setVipHold(newHoldState);
      if (newHoldState) {
        btnVipHold.classList.add('active');
        btnVipHold.style.background = 'rgba(245, 158, 11, 0.25)';
        btnVipHold.style.borderColor = '#f59e0b';
        btnVipHold.style.boxShadow = '0 0 12px rgba(245, 158, 11, 0.3)';
        if (iconVipHold) {
          iconVipHold.className = 'fa-solid fa-lock';
        }
        if (txtVipHold) txtVipHold.textContent = window.currentLang === 'en' ? 'Frequency Held (Hold ON)' : '주파수 고정 중 (Hold ON)';
      } else {
        btnVipHold.classList.remove('active');
        btnVipHold.style.background = 'rgba(245, 158, 11, 0.08)';
        btnVipHold.style.borderColor = 'rgba(245, 158, 11, 0.3)';
        btnVipHold.style.boxShadow = 'none';
        if (iconVipHold) {
          iconVipHold.className = 'fa-solid fa-lock-open';
        }
        if (txtVipHold) txtVipHold.textContent = window.currentLang === 'en' ? 'Hold Frequency' : '현재 주파수 고정';
      }
    });
  }

  // 10.5) [신규] 바이노럴 비트 뇌파 동조 제어기 이벤트 바인딩 (Rife 테라피와 완벽 독립)
  const btnBeatsPlay = document.getElementById('btn-beats-play');
  if (btnBeatsPlay) {
    btnBeatsPlay.addEventListener('click', () => {
      // 엔진 오디오 컨텍스트 기동 및 초기화
      engine.init();

      // 바이노럴 비트 활성화 플래그 토글
      if (!engine.isBeatsActive) {
        // 기존 마스터 재생 버튼이 꺼져있다면 오디오 엔진 전체 기동을 유도함
        if (!engine.isPlaying) {
          engine.start();
          btnMasterPlay.innerHTML = '<i class="fa-solid fa-pause"></i>';
          btnMasterPlay.classList.add('playing');
          visualizerFallback.style.display = 'none';
          startVisualizer();
        }

        // 뇌파 사운드 기동
        engine.toggleBeats(true);
        btnBeatsPlay.innerHTML = '<i class="fa-solid fa-pause"></i>';
        btnBeatsPlay.classList.add('playing');
        
        // 현재 슬라이더 볼륨값 및 주파수 값을 엔진에 동기화 주입
        engine.setBeatsVolume(parseFloat(sliderBeatsVolume.value));
        engine.setBeatsFrequency(parseFloat(sliderCarrierFreq.value), parseFloat(sliderBeatFreq.value));
      } else {
        // 뇌파 사운드만 개별 정지
        engine.toggleBeats(false);
        btnBeatsPlay.innerHTML = '<i class="fa-solid fa-play"></i>';
        btnBeatsPlay.classList.remove('playing');
      }
    });
  }

  // 11) 자연음 전체 파트 마스터 볼륨 설정
  sliderNatureMaster.addEventListener('input', (e) => {
    ensureEnginePlaying(); // 조작 시 마스터 엔진 자동 기동
    const val = parseFloat(e.target.value);
    txtNatureMaster.textContent = Math.round(val * 100) + '%';
    engine.setNatureMasterVolume(val);
    const qSl = document.getElementById('slider-quick-nature');
    const qTx = document.getElementById('txt-quick-nature');
    if (qSl) qSl.value = val;
    if (qTx) qTx.textContent = Math.round(val * 100) + '%';
  });

  // 12) 자연음 7종의 개별 슬라이더 제어 및 텍스트 갱신
  Object.keys(natureSliders).forEach(key => {
    const item = natureSliders[key];
    item.slider.addEventListener('input', (e) => {
      ensureEnginePlaying(); // 조작 시 마스터 엔진 자동 기동
      const val = parseFloat(e.target.value);
      item.txt.textContent = Math.round(val * 100) + '%';
      engine.setNatureVolume(key, val);
      
      // [?ロ뵿?? ?щ씪?대뜑 蹂쇰ⅷ 議곗젅 ??利됱떆 ?⑤컻 ?꾨━酉??몃━嫄?(1.5珥?荑⑤떎??媛??
      const previewKeys = ['forestbirds', 'seagull', 'mountainbirds'];
      if (previewKeys.indexOf(key) !== -1 && val > 0.05) {
        const nowTime = Date.now();
        const lastTime = lastPreviewTimes[key] || 0;
        if (nowTime - lastTime > 1500) {
          lastPreviewTimes[key] = nowTime;
          if (key === 'seagull') engine.playSeagullOnce(val);
          else if (key === 'forestbirds') engine.playForestBirdsOnce(val);
          else if (key === 'mountainbirds') engine.playMountainBirdsOnce(val);
        }
      }
      
      // 개별 자연음을 0 초과로 조절하였으나 자연음 마스터가 0%인 경우 청취 레벨인 80%로 자동 기동
      if (val > 0 && parseFloat(sliderNatureMaster.value) === 0) {
        sliderNatureMaster.value = 0.8;
        txtNatureMaster.textContent = '80%';
        engine.setNatureMasterVolume(0.8);
      }
    });
  });

  // 12-1) [신규] 12종 리얼 빗소리 빠른 선택 프리셋 버튼 이벤트
  const btnRainPresets = document.querySelectorAll('.btn-rain-preset');
  const rainPresetMap = {
    heavy: { rain01: 0.45, rain08: 0.25 },
    white: { rain02: 0.45 },
    thunder: { rain04: 0.45, rain01: 0.20 },
    relax: { rain03: 0.45, rain05: 0.25 },
    window: { rain06: 0.45, rain09: 0.20 },
    calm: { rain07: 0.40, rain11: 0.30 },
    off: {}
  };

  btnRainPresets.forEach(btn => {
    btn.addEventListener('click', () => {
      btnRainPresets.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const presetKey = btn.getAttribute('data-rain-preset');
      const targets = rainPresetMap[presetKey] || {};

      ensureEnginePlaying();

      // 모든 12종 빗소리 슬라이더 초기화 후 프리셋 볼륨 적용
      for (let i = 1; i <= 12; i++) {
        const id = 'rain' + (i < 10 ? '0' + i : i);
        const item = natureSliders[id];
        const val = targets[id] || 0.0;
        if (item) {
          item.slider.value = val;
          item.txt.textContent = Math.round(val * 100) + '%';
        }
        engine.setNatureVolume(id, val);
      }

      // 빗소리가 켜진 경우 자연음 마스터 볼륨 확인 및 자동 기동
      if (presetKey !== 'off' && parseFloat(sliderNatureMaster.value) === 0) {
        sliderNatureMaster.value = 0.8;
        txtNatureMaster.textContent = '80%';
        engine.setNatureMasterVolume(0.8);
      }
    });
  });

  // 13) 유튜브 BGM 내보내기 (Export) 및 다운로드
  btnExportAudio.addEventListener('click', async () => {
    const duration = parseInt(selectExportDuration.value);
    
    btnExportAudio.disabled = true;
    progressContainer.classList.remove('hidden');
    progressBar.style.width = '0%';
    txtProgressStatus.textContent = '고음질 오디오 데이터를 렌더링하고 있습니다... (0%)';

    try {
      const numSegs = Math.ceil(duration / 300);
      const wavBlob = await engine.exportAudio(duration, (percent) => {
        progressBar.style.width = percent + '%';
        if (percent >= 100) {
          txtProgressStatus.textContent = '다운로드 준비가 완료되었습니다!';
        } else if (percent >= 99) {
          txtProgressStatus.textContent = '음원 데이터를 최종 조립하고 있습니다...';
        } else {
          const currentSeg = Math.min(Math.ceil((percent / 99) * numSegs), numSegs);
          txtProgressStatus.textContent = `음원 렌더링 진행 중... 세그먼트 ${currentSeg}/${numSegs} (${percent}%)`;
        }
      });

      const dateStr = new Date().toISOString().slice(0, 10).replace(/-/g, "");
      const filename = `SolavreSound_HealingBGM_${dateStr}.wav`;

      const url = URL.createObjectURL(wavBlob);
      const a = document.createElement('a');
      a.href = url;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      
      setTimeout(() => {
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
      }, 100);

      // [신규] 로컬 백엔드를 통해 내 PC 다운로드 폴더에 직접 강제 저장 연동
      txtProgressStatus.textContent = '내 PC 다운로드 폴더에 음원 파일을 직접 안전하게 저장하고 있습니다...';
      try {
        // 로컬 서버가 구동 중일 경우 더블클릭 실행(file:///) 환경에서도 동작하도록 절대 경로 주소 활용
        const host = window.location.protocol === 'file:' ? 'http://127.0.0.1:8080' : '';
        const response = await fetch(`${host}/save-to-downloads?filename=${encodeURIComponent(filename)}`, {
          method: 'POST',
          body: wavBlob
        });
        const resData = await response.json();
        if (resData.success) {
          txtProgressStatus.textContent = `성공! 내 PC 다운로드 폴더에 음원 파일이 바로 저장되었습니다. (위치: ${resData.savedPath})`;
        } else {
          throw new Error(resData.error);
        }
      } catch (saveErr) {
        txtProgressStatus.textContent = '음원 다운로드가 브라우저 기본 다운로드 폴더에 정상 완료되었습니다!';
      }
    } catch (err) {
      console.error(err);
      txtProgressStatus.textContent = '음원 내보내기 중 예기치 못한 에러가 발생했습니다: ' + err.message + ' (스택: ' + err.stack + ')';
    } finally {
      btnExportAudio.disabled = false;
      setTimeout(() => {
        progressContainer.classList.add('hidden');
      }, 5000);
    }
  });

  // 호흡 가이드 실행 및 확언 순환 관리 등은 breathingGuide.js 독립 모듈이 전담합니다.

  // ==========================================================================
  // [신규] 3.7 나만의 주파수 음원 생성기 (Custom Frequency Studio) 이벤트 및 UI 제어
  // ==========================================================================
  const customStudioTemplates = {
    reset120: {
      title: "Code C001 : 120분 전신 리셋 & 통증 완화",
      category: "pain",
      desc: "[1단계 신경안정] 7.83, 10, 20, 6000Hz (20분) → [2단계 산증감소/면역증강] 10000, 5000, 880, 787, 727, 20, 10Hz (35분) → [3단계 신체조율/생체활성화] 528, 432, 136.1, 40, 20, 10Hz (35분) → [4단계 세포재생/에너지리셋] 528, 432, 10, 7.83, 3.5, 0.5Hz (30분)",
      freqs: [7.83, 10, 20, 6000, 10000, 5000, 880, 787, 727, 528, 432, 136.1, 40, 3.5, 0.5],
      interval: 300
    },
    headache: {
      title: "Code C002 : 두통 복합 집중 케어 (Headache Relief)",
      category: "pain",
      desc: "긴장성/혈관성 두통 완화 및 뇌 혈류 순환을 촉진하는 다중 복합 주파수 레시피",
      freqs: [10000, 3000, 880, 787, 727, 650, 625, 600, 522, 520, 304, 160, 146, 144, 125, 95, 73, 20, 10, 9.6, 9.39, 7.83, 6.3, 5.8, 4.9, 4, 1.2],
      interval: 180
    },
    solfeggio: {
      title: "Code C003 : 9대 치유 솔페지오 하모닉스 (9 Solfeggio)",
      category: "solfeggio",
      desc: "174Hz부터 963Hz까지 전 차크라 및 세포 DNA 치유 에너지를 활성화하는 정통 솔페지오 레시피",
      freqs: [174, 285, 396, 417, 528, 639, 741, 852, 963],
      interval: 300
    },
    sleep: {
      title: "Code C004 : 깊은 숙면 & 델타 서파 유도 (Deep Delta Sleep)",
      category: "sleep",
      desc: "과각성된 뇌파를 잠재우고 깊은 서파 수면(Delta)으로 이끄는 수면 동조 주파수 레시피",
      freqs: [6000, 1500, 802, 528, 432, 304, 10, 7.83, 3.59, 3, 1.5, 0.5],
      interval: 300
    }
  };

  const btnNavCustomStudio = document.getElementById('btn-nav-custom-studio');
  const customStudioSection = document.getElementById('custom-studio-section');
  const btnCustomPlay = document.getElementById('btn-custom-play');
  const btnCustomHold = document.getElementById('btn-custom-hold');
  const sliderCustomVolume = document.getElementById('slider-custom-volume');
  const txtCustomVolume = document.getElementById('txt-custom-volume');

  const inputCustomTitle = document.getElementById('input-custom-title');
  const selectCustomCategory = document.getElementById('select-custom-category');
  const inputCustomDesc = document.getElementById('input-custom-desc');
  const inputCustomFreqs = document.getElementById('input-custom-freqs');

  const btnCustomTemplates = document.querySelectorAll('.btn-custom-template');
  const btnCustomApplyFreqs = document.getElementById('btn-custom-apply-freqs');
  const btnCustomSortFreqs = document.getElementById('btn-custom-sort-freqs');
  const btnCustomUniqueFreqs = document.getElementById('btn-custom-unique-freqs');
  const btnCustomClearFreqs = document.getElementById('btn-custom-clear-freqs');
  const customFreqChipsContainer = document.getElementById('custom-freq-chips-container');
  const txtChipsCount = document.getElementById('txt-chips-count');

  const btnUnitSec = document.getElementById('btn-unit-sec');
  const btnUnitMin = document.getElementById('btn-unit-min');
  const sliderCustomInterval = document.getElementById('slider-custom-interval');
  const inputCustomInterval = document.getElementById('input-custom-interval');
  const txtCustomUnitLabel = document.getElementById('txt-custom-unit-label');
  const btnCustomPresets = document.querySelectorAll('.btn-custom-preset');

  const txtCalcFreqCount = document.getElementById('txt-calc-freq-count');
  const txtCalcEachTime = document.getElementById('txt-calc-each-time');
  const txtCalcTotalTime = document.getElementById('txt-calc-total-time');

  const customNowFreq = document.getElementById('custom-now-freq');
  const customNowTier = document.getElementById('custom-now-tier');
  const customNowCountdown = document.getElementById('custom-now-countdown');
  const customNowStep = document.getElementById('custom-now-step');
  const customNowMode = document.getElementById('custom-now-mode');
  const customStepProgressBar = document.getElementById('custom-step-progress-bar');
  const customTimelineTrack = document.getElementById('custom-timeline-track');

  const btnCustomSaveRecipe = document.getElementById('btn-custom-save-recipe');
  const btnCustomExportJson = document.getElementById('btn-custom-export-json');
  const btnCustomImportJsonTrigger = document.getElementById('btn-custom-import-json-trigger');
  const inputCustomImportJson = document.getElementById('input-custom-import-json');
  const customSavedRecipesContainer = document.getElementById('custom-saved-recipes-container');

  const selectCustomExportDuration = document.getElementById('select-custom-export-duration');
  const selectCustomExportBgm = document.getElementById('select-custom-export-bgm');
  const sliderCustomExportBgmVol = document.getElementById('slider-custom-export-bgm-vol');
  const txtCustomExportBgmVol = document.getElementById('txt-custom-export-bgm-vol');
  const sliderCustomExportMasterVol = document.getElementById('slider-custom-export-master-vol');
  const txtCustomExportMasterVol = document.getElementById('txt-custom-export-master-vol');
  const btnCustomExportAudio = document.getElementById('btn-custom-export-audio');
  const customExportProgressArea = document.getElementById('custom-export-progress-area');
  const txtCustomExportStatus = document.getElementById('txt-custom-export-status');
  const txtCustomExportPercent = document.getElementById('txt-custom-export-percent');
  const barCustomExportProgress = document.getElementById('bar-custom-export-progress');
  const customExportDownloadWrapper = document.getElementById('custom-export-download-wrapper');
  const btnCustomDownloadLink = document.getElementById('btn-custom-download-link');

  // 내부 상태 객체
  let currentCustomIntervalSec = 300; // 기본 5분
  let currentCustomUnit = 'min'; // 'sec' | 'min'
  let parsedCustomFreqs = [7.83, 10, 20, 6000, 10000, 5000, 880, 787, 727, 528, 432, 136.1, 40, 3.5, 0.5];
  let customCycleStartTime = 0;
  let customMonitorTimer = null;

  // 네비게이션 트리거
  if (btnNavCustomStudio && customStudioSection) {
    btnNavCustomStudio.addEventListener('click', () => {
      customStudioSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      customStudioSection.style.transition = 'box-shadow 0.5s ease';
      customStudioSection.style.boxShadow = '0 0 30px rgba(192, 132, 252, 0.6)';
      setTimeout(() => {
        customStudioSection.style.boxShadow = '';
      }, 1500);
    });
  }

  // 주파수 파서 헬퍼
  function parseFrequencies(text) {
    if (!text) return [];
    const tokens = text.split(/[\s,\n\r\t;/|]+/);
    const result = [];
    tokens.forEach(tok => {
      const num = parseFloat(tok);
      if (!isNaN(num) && num > 0 && num <= 22000) {
        result.push(parseFloat(num.toFixed(2)));
      }
    });
    return result;
  }

  // 음향 대역 설명 헬퍼
  function getAcousticTierInfo(freq) {
    const isEn = window.currentLang === 'en';
    if (freq < 30) {
      return { 
        tag: isEn ? 'Infrasound' : '초저주파', 
        desc: isEn ? 'Infrasonic ∙ Triple Binaural Beat Entrainment' : '초저주파 ∙ 3중 바이노럴 비트 뇌파 동조' 
      };
    } else if (freq < 180) {
      return { 
        tag: isEn ? 'Virtual Pitch' : '가상피치', 
        desc: isEn ? 'Mid-Low Range ∙ 2nd Harmonic Cluster Synthesis' : '중저음역 ∙ 2차 하모닉스 배음 클러스터 합성' 
      };
    } else if (freq <= 4000) {
      return { 
        tag: isEn ? 'Audible Band' : '가청대역', 
        desc: isEn ? 'Audible Band ∙ Equal Loudness Pure Sine Wave' : '가청 대역 ∙ 등음량 곡선 순수 정현파' 
      };
    } else {
      return { 
        tag: isEn ? 'Ultra-High' : '초고주파', 
        desc: isEn ? 'Ultra-High Band ∙ Golden Ratio Subharmonic Resonance' : '초고주파 ∙ 황금비 서브하모닉스 공명' 
      };
    }
  }

  // 세션 총 예상 시간 계산 및 배너 갱신
  function updateCustomCalculation() {
    const isEn = window.currentLang === 'en';
    const count = parsedCustomFreqs.length;
    if (txtCalcFreqCount) txtCalcFreqCount.textContent = count;
    if (txtChipsCount) txtChipsCount.textContent = isEn ? `${count} items` : `${count}개`;

    const eachText = currentCustomIntervalSec < 60 
      ? (isEn ? `${Math.round(currentCustomIntervalSec)}s` : `${Math.round(currentCustomIntervalSec)}초`) 
      : (isEn ? `${parseFloat((currentCustomIntervalSec / 60).toFixed(1))}m` : `${parseFloat((currentCustomIntervalSec / 60).toFixed(1))}분`);
    if (txtCalcEachTime) txtCalcEachTime.textContent = eachText;

    const totalSec = count * currentCustomIntervalSec;
    if (txtCalcTotalTime) {
      if (totalSec < 60) {
        txtCalcTotalTime.textContent = isEn ? `${Math.round(totalSec)}s` : `${Math.round(totalSec)}초`;
      } else {
        const totalMin = Math.floor(totalSec / 60);
        const remSec = Math.round(totalSec % 60);
        const hours = Math.floor(totalMin / 60);
        const remMin = totalMin % 60;
        
        let displayStr = isEn ? `${totalMin}m` : `${totalMin}분`;
        if (remSec > 0) displayStr += isEn ? ` ${remSec}s` : ` ${remSec}초`;
        if (hours > 0) {
          displayStr += isEn ? ` (${hours}h ${remMin > 0 ? remMin + 'm' : '00m'})` : ` (${hours}시간 ${remMin > 0 ? remMin + '분' : '00분'})`;
        }
        txtCalcTotalTime.textContent = displayStr;
      }
    }
  }

  // 주파수 칩 렌더링
  function renderCustomChips() {
    if (!customFreqChipsContainer) return;
    customFreqChipsContainer.innerHTML = '';

    parsedCustomFreqs.forEach((freq, idx) => {
      const chip = document.createElement('div');
      chip.className = 'custom-freq-chip';
      if (idx === engine.customCycleIndex && engine.isCustomActive) {
        chip.classList.add('active');
      }

      const tierInfo = getAcousticTierInfo(freq);
      chip.innerHTML = `
        <span style="font-weight: 700; color: #a855f7;">#${idx + 1}</span>
        <span>${freq} Hz</span>
        <span class="chip-tag">${tierInfo.tag}</span>
        <i class="fa-solid fa-xmark chip-remove" title="주파수 삭제" data-idx="${idx}"></i>
      `;

      // 칩 클릭 시 해당 주파수 즉시 점프 or 단독 청취
      chip.addEventListener('click', (e) => {
        if (e.target.classList.contains('chip-remove')) return;
        if (engine.isCustomActive) {
          engine.jumpToCustomFrequencyIndex(idx);
          customCycleStartTime = Date.now();
          renderCustomChips();
          renderCustomTimeline();
        } else {
          ensureEnginePlaying();
          engine.previewSingleFrequency(freq, 4.0);
        }
      });

      // ✕ 버튼 클릭 시 개별 삭제
      const btnRemove = chip.querySelector('.chip-remove');
      btnRemove.addEventListener('click', (e) => {
        e.stopPropagation();
        parsedCustomFreqs.splice(idx, 1);
        if (inputCustomFreqs) inputCustomFreqs.value = parsedCustomFreqs.join(', ');
        engine.setCustomFrequencyRecipe(parsedCustomFreqs);
        renderCustomChips();
        renderCustomTimeline();
        updateCustomCalculation();
      });

      customFreqChipsContainer.appendChild(chip);
    });

    updateCustomCalculation();
  }

  // 타임라인 트랙 렌더링
  function renderCustomTimeline() {
    if (!customTimelineTrack) return;
    customTimelineTrack.innerHTML = '';

    parsedCustomFreqs.forEach((freq, idx) => {
      const block = document.createElement('div');
      block.className = 'timeline-step-block';
      if (idx === engine.customCycleIndex && engine.isCustomActive) {
        block.classList.add('active');
      }

      block.innerHTML = `
        <div class="t-step">Step ${idx + 1}</div>
        <div class="t-freq">${freq}Hz</div>
      `;

      block.addEventListener('click', () => {
        if (engine.isCustomActive) {
          engine.jumpToCustomFrequencyIndex(idx);
          customCycleStartTime = Date.now();
          renderCustomChips();
          renderCustomTimeline();
        } else {
          ensureEnginePlaying();
          engine.previewSingleFrequency(freq, 4.0);
        }
      });

      customTimelineTrack.appendChild(block);
    });
  }

  window.updateCustomCalculation = updateCustomCalculation;
  window.renderCustomChips = renderCustomChips;
  window.renderCustomTimeline = renderCustomTimeline;

  // 단위 전환 및 슬라이더/인풋 동기화
  function updateIntervalUnit(unit) {
    currentCustomUnit = unit;
    if (unit === 'sec') {
      if (btnUnitSec) btnUnitSec.classList.add('active');
      if (btnUnitMin) btnUnitMin.classList.remove('active');
      if (txtCustomUnitLabel) txtCustomUnitLabel.textContent = window.currentLang === 'en' ? 's' : '초';
      if (sliderCustomInterval) {
        sliderCustomInterval.min = '1';
        sliderCustomInterval.max = '1800';
        sliderCustomInterval.step = '1';
        sliderCustomInterval.value = currentCustomIntervalSec;
      }
      if (inputCustomInterval) {
        inputCustomInterval.min = '1';
        inputCustomInterval.max = '1800';
        inputCustomInterval.step = '1';
        inputCustomInterval.value = currentCustomIntervalSec;
      }
    } else {
      if (btnUnitMin) btnUnitMin.classList.add('active');
      if (btnUnitSec) btnUnitSec.classList.remove('active');
      if (txtCustomUnitLabel) txtCustomUnitLabel.textContent = window.currentLang === 'en' ? 'm' : '분';
      if (sliderCustomInterval) {
        sliderCustomInterval.min = '1';
        sliderCustomInterval.max = '1800';
        sliderCustomInterval.step = '1';
        sliderCustomInterval.value = currentCustomIntervalSec;
      }
      if (inputCustomInterval) {
        inputCustomInterval.min = '0.1';
        inputCustomInterval.max = '60';
        inputCustomInterval.step = '0.5';
        inputCustomInterval.value = parseFloat((currentCustomIntervalSec / 60).toFixed(1));
      }
    }
  }

  function setIntervalSeconds(sec) {
    currentCustomIntervalSec = Math.max(0.5, Math.min(32400, sec));
    engine.setCustomSweepInterval(currentCustomIntervalSec);
    if (sliderCustomInterval) sliderCustomInterval.value = currentCustomIntervalSec;
    if (inputCustomInterval) {
      if (currentCustomUnit === 'sec') {
        inputCustomInterval.value = Math.round(currentCustomIntervalSec);
      } else {
        inputCustomInterval.value = parseFloat((currentCustomIntervalSec / 60).toFixed(1));
      }
    }

    // 프리셋 버튼 활성화 상태 갱신
    btnCustomPresets.forEach(btn => {
      const bSec = parseFloat(btn.getAttribute('data-sec'));
      if (Math.abs(bSec - currentCustomIntervalSec) < 0.1) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    updateCustomCalculation();
  }

  if (btnUnitSec) {
    btnUnitSec.addEventListener('click', () => updateIntervalUnit('sec'));
  }
  if (btnUnitMin) {
    btnUnitMin.addEventListener('click', () => updateIntervalUnit('min'));
  }

  if (sliderCustomInterval) {
    sliderCustomInterval.addEventListener('input', (e) => {
      setIntervalSeconds(parseFloat(e.target.value));
    });
  }

  if (inputCustomInterval) {
    inputCustomInterval.addEventListener('input', (e) => {
      const val = parseFloat(e.target.value);
      if (!isNaN(val) && val > 0) {
        if (currentCustomUnit === 'sec') {
          setIntervalSeconds(val);
        } else {
          setIntervalSeconds(val * 60);
        }
      }
    });
  }

  btnCustomPresets.forEach(btn => {
    btn.addEventListener('click', () => {
      const sec = parseFloat(btn.getAttribute('data-sec'));
      setIntervalSeconds(sec);
    });
  });

  // 추천 템플릿 로드 버튼 이벤트
  btnCustomTemplates.forEach(btn => {
    btn.addEventListener('click', () => {
      const key = btn.getAttribute('data-template');
      const tpl = customStudioTemplates[key];
      if (tpl) {
        if (inputCustomTitle) inputCustomTitle.value = tpl.title;
        if (selectCustomCategory) selectCustomCategory.value = tpl.category;
        if (inputCustomDesc) inputCustomDesc.value = tpl.desc;
        if (inputCustomFreqs) inputCustomFreqs.value = tpl.freqs.join(', ');
        parsedCustomFreqs = [...tpl.freqs];
        engine.setCustomFrequencyRecipe(parsedCustomFreqs);
        setIntervalSeconds(tpl.interval || 300);
        renderCustomChips();
        renderCustomTimeline();
      }
    });
  });

  // 주파수 입력 액션들 (적용, 정렬, 중복제거, 비우기)
  if (btnCustomApplyFreqs) {
    btnCustomApplyFreqs.addEventListener('click', () => {
      const text = inputCustomFreqs ? inputCustomFreqs.value : '';
      const parsed = parseFrequencies(text);
      if (parsed.length === 0) {
        alert('유효한 주파수를 1개 이상 입력해 주세요 (예: 528, 432, 7.83)');
        return;
      }
      parsedCustomFreqs = parsed;
      engine.setCustomFrequencyRecipe(parsedCustomFreqs);
      renderCustomChips();
      renderCustomTimeline();
    });
  }

  if (btnCustomSortFreqs) {
    btnCustomSortFreqs.addEventListener('click', () => {
      parsedCustomFreqs.sort((a, b) => a - b);
      if (inputCustomFreqs) inputCustomFreqs.value = parsedCustomFreqs.join(', ');
      engine.setCustomFrequencyRecipe(parsedCustomFreqs);
      renderCustomChips();
      renderCustomTimeline();
    });
  }

  if (btnCustomUniqueFreqs) {
    btnCustomUniqueFreqs.addEventListener('click', () => {
      parsedCustomFreqs = Array.from(new Set(parsedCustomFreqs));
      if (inputCustomFreqs) inputCustomFreqs.value = parsedCustomFreqs.join(', ');
      engine.setCustomFrequencyRecipe(parsedCustomFreqs);
      renderCustomChips();
      renderCustomTimeline();
    });
  }

  if (btnCustomClearFreqs) {
    btnCustomClearFreqs.addEventListener('click', () => {
      if (confirm('모든 주파수 입력을 비우시겠습니까?')) {
        parsedCustomFreqs = [];
        if (inputCustomFreqs) inputCustomFreqs.value = '';
        engine.setCustomFrequencyRecipe(parsedCustomFreqs);
        renderCustomChips();
        renderCustomTimeline();
      }
    });
  }

  // 모니터링 실시간 타이머 가동
  function startCustomMonitor() {
    if (customMonitorTimer) clearInterval(customMonitorTimer);
    customCycleStartTime = Date.now();

    customMonitorTimer = setInterval(() => {
      if (!engine.isCustomActive || parsedCustomFreqs.length === 0) {
        if (customStepProgressBar) customStepProgressBar.style.width = '0%';
        return;
      }

      const elapsedSec = (Date.now() - customCycleStartTime) / 1000;
      const totalInterval = currentCustomIntervalSec;
      const remainingSec = Math.max(0, totalInterval - elapsedSec);

      // 카운트다운 디스플레이
      if (customNowCountdown) {
        if (engine.isCustomHold) {
          customNowCountdown.textContent = window.currentLang === 'en' ? 'HOLD (Paused)' : 'HOLD (정지)';
        } else {
          const m = Math.floor(remainingSec / 60);
          const s = Math.floor(remainingSec % 60);
          customNowCountdown.textContent = `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
        }
      }

      // 프로그레스 바
      if (customStepProgressBar) {
        if (engine.isCustomHold) {
          customStepProgressBar.style.width = '100%';
        } else {
          const percent = Math.min(100, (elapsedSec / totalInterval) * 100);
          customStepProgressBar.style.width = `${percent}%`;
        }
      }
    }, 100);
  }

  function stopCustomMonitor() {
    if (customMonitorTimer) {
      clearInterval(customMonitorTimer);
      customMonitorTimer = null;
    }
    if (customStepProgressBar) customStepProgressBar.style.width = '0%';
  }

  // 엔진 콜백: 주파수가 전환될 때 UI 업데이트
  engine.onCustomFrequencyChange = (index, freq) => {
    customCycleStartTime = Date.now();
    if (customNowFreq) customNowFreq.textContent = `${freq} Hz`;
    const isEn = window.currentLang === 'en';
    if (customNowStep) customNowStep.textContent = isEn 
      ? `Step ${index + 1} / ${parsedCustomFreqs.length}` 
      : `주파수 ${index + 1} / ${parsedCustomFreqs.length} 단계`;
    const tierInfo = getAcousticTierInfo(freq);
    if (customNowTier) customNowTier.textContent = tierInfo.desc;

    renderCustomChips();
    renderCustomTimeline();
  };

  // 커스텀 스튜디오 볼륨 슬라이더
  if (sliderCustomVolume) {
    sliderCustomVolume.addEventListener('input', (e) => {
      ensureEnginePlaying();
      const val = parseFloat(e.target.value);
      if (txtCustomVolume) txtCustomVolume.textContent = Math.round(val * 100) + '%';
      engine.setCustomVolume(val);
    });
  }

  // 커스텀 메인 플레이 버튼
  if (btnCustomPlay) {
    btnCustomPlay.addEventListener('click', () => {
      engine.init();
      if (!engine.isCustomActive) {
        if (parsedCustomFreqs.length === 0) {
          alert('먼저 재생할 주파수를 1개 이상 입력해 주세요.');
          return;
        }

        if (!engine.isPlaying) {
          engine.start();
          btnMasterPlay.innerHTML = '<i class="fa-solid fa-pause"></i>';
          btnMasterPlay.classList.add('playing');
          visualizerFallback.style.display = 'none';
          startVisualizer();
        }

        let customVol = parseFloat(sliderCustomVolume.value);
        if (customVol === 0) {
          customVol = 0.7;
          sliderCustomVolume.value = 0.7;
          if (txtCustomVolume) txtCustomVolume.textContent = '70%';
        }
        engine.setCustomVolume(customVol);
        engine.setCustomFrequencyRecipe(parsedCustomFreqs);
        engine.setCustomSweepInterval(currentCustomIntervalSec);
        engine.toggleCustom(true);

        const pauseTxt = window.currentLang === 'en' ? 'Pause Session' : '세션 일시정지';
        btnCustomPlay.innerHTML = `<i class="fa-solid fa-pause"></i> <span>${pauseTxt}</span>`;
        btnCustomPlay.classList.add('active');

        startCustomMonitor();
      } else {
        engine.toggleCustom(false);
        const playTxt = window.currentLang === 'en' ? 'Play Session' : '세션 재생';
        btnCustomPlay.innerHTML = `<i class="fa-solid fa-play"></i> <span>${playTxt}</span>`;
        btnCustomPlay.classList.remove('active');
        stopCustomMonitor();
      }
    });
  }

  // 커스텀 주파수 고정 (HOLD) 토글
  if (btnCustomHold) {
    btnCustomHold.addEventListener('click', () => {
      const nextHold = !engine.isCustomHold;
      engine.setCustomHold(nextHold);
      const isEn = window.currentLang === 'en';
      if (nextHold) {
        btnCustomHold.classList.add('active');
        const holdOnTxt = isEn ? 'Frequency Held (HOLD ON)' : '주파수 고정 중 (HOLD ON)';
        btnCustomHold.innerHTML = `<i class="fa-solid fa-lock"></i> <span>${holdOnTxt}</span>`;
        if (customNowMode) {
          customNowMode.className = 'm-mode-badge hold';
          const modeHoldTxt = isEn ? 'Current Frequency Held' : '현재 주파수 고정 모드';
          customNowMode.innerHTML = `<i class="fa-solid fa-lock"></i> <span>${modeHoldTxt}</span>`;
        }
      } else {
        btnCustomHold.classList.remove('active');
        const holdTxt = isEn ? 'Hold Frequency (HOLD)' : '주파수 고정 (HOLD)';
        btnCustomHold.innerHTML = `<i class="fa-solid fa-anchor"></i> <span>${holdTxt}</span>`;
        if (customNowMode) {
          customNowMode.className = 'm-mode-badge auto';
          const modeAutoTxt = isEn ? 'Auto Sequential Switch' : '자동 순차 전환';
          customNowMode.innerHTML = `<i class="fa-solid fa-arrows-rotate"></i> <span>${modeAutoTxt}</span>`;
        }
        customCycleStartTime = Date.now();
      }
    });
  }

  // ==========================================================================
  // [신규] 로컬스토리지 레시피 보관함 & JSON 백업/불러오기
  // ==========================================================================
  const STORAGE_KEY = 'solavre_custom_recipes_v1';

  function getStoredRecipes() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch (e) {
      console.error('Failed to load custom recipes from localStorage:', e);
      return [];
    }
  }

  function saveStoredRecipes(recipes) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(recipes));
    } catch (e) {
      console.error('Failed to save custom recipes to localStorage:', e);
    }
  }

  function renderSavedRecipes() {
    if (!customSavedRecipesContainer) return;
    const recipes = getStoredRecipes();
    customSavedRecipesContainer.innerHTML = '';

    const isEn = window.currentLang === 'en';

    if (recipes.length === 0) {
      const emptyMsg = isEn 
        ? 'No custom recipes saved in the archive. Configure frequencies in the input box above and click [Save Current Recipe]!'
        : '보관함에 저장된 나만의 레시피가 없습니다. 위 입력창에서 주파수를 구성한 후 [현재 레시피 저장]을 눌러보세요!';
      customSavedRecipesContainer.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 20px; color: var(--color-text-muted); font-size: 0.82rem;">
          <i class="fa-solid fa-inbox" style="font-size: 1.5rem; margin-bottom: 6px; display: block; opacity: 0.5;"></i>
          ${emptyMsg}
        </div>
      `;
      return;
    }

    recipes.forEach(item => {
      const card = document.createElement('div');
      card.className = 'saved-recipe-card';
      const count = item.freqs ? item.freqs.length : 0;
      const intervalText = item.interval < 60 
        ? (isEn ? `${item.interval}s` : `${item.interval}초`) 
        : (isEn ? `${parseFloat((item.interval / 60).toFixed(1))}m` : `${parseFloat((item.interval / 60).toFixed(1))}분`);
      const freqMeta = isEn 
        ? `${count} frequencies (${intervalText} switch)` 
        : `${count}개 주파수 (${intervalText} 전환)`;
      const untitledTxt = isEn ? 'Untitled Recipe' : '무제 레시피';
      const noDescTxt = isEn ? 'No description' : '설명 없음';
      const loadTxt = isEn ? 'Load' : '불러오기';
      const deleteTitle = isEn ? 'Delete Recipe' : '레시피 삭제';

      card.innerHTML = `
        <div>
          <div class="card-title">${item.title || untitledTxt}</div>
          <div class="card-desc">${item.desc || noDescTxt}</div>
          <div class="card-meta">
            <span><i class="fa-solid fa-wave-square"></i> ${freqMeta}</span>
            <span>${item.createdAt ? new Date(item.createdAt).toLocaleDateString() : ''}</span>
          </div>
        </div>
        <div class="card-actions">
          <button class="btn-load-recipe" data-id="${item.id}"><i class="fa-solid fa-folder-open"></i> ${loadTxt}</button>
          <button class="btn-delete-recipe" data-id="${item.id}" title="${deleteTitle}"><i class="fa-solid fa-trash-can"></i></button>
        </div>
      `;

      card.querySelector('.btn-load-recipe').addEventListener('click', () => {
        if (inputCustomTitle) inputCustomTitle.value = item.title;
        if (selectCustomCategory) selectCustomCategory.value = item.category || 'custom';
        if (inputCustomDesc) inputCustomDesc.value = item.desc;
        if (inputCustomFreqs) inputCustomFreqs.value = item.freqs.join(', ');
        parsedCustomFreqs = [...item.freqs];
        engine.setCustomFrequencyRecipe(parsedCustomFreqs);
        setIntervalSeconds(item.interval || 300);
        renderCustomChips();
        renderCustomTimeline();
        const loadSuccessMsg = isEn ? `'${item.title}' recipe loaded successfully!` : `'${item.title}' 레시피를 성공적으로 불러왔습니다!`;
        alert(loadSuccessMsg);
      });

      card.querySelector('.btn-delete-recipe').addEventListener('click', () => {
        const deleteConfirmMsg = isEn ? `Delete '${item.title}' from archive?` : `'${item.title}' 레시피를 보관함에서 삭제하시겠습니까?`;
        if (confirm(deleteConfirmMsg)) {
          const list = getStoredRecipes().filter(r => r.id !== item.id);
          saveStoredRecipes(list);
          renderSavedRecipes();
        }
      });

      customSavedRecipesContainer.appendChild(card);
    });
  }

  window.renderSavedRecipes = renderSavedRecipes;

  // 레시피 저장 버튼
  if (btnCustomSaveRecipe) {
    btnCustomSaveRecipe.addEventListener('click', () => {
      const isEn = window.currentLang === 'en';
      if (parsedCustomFreqs.length === 0) {
        alert(isEn ? 'No frequencies to save. Please enter frequencies first.' : '저장할 주파수가 없습니다. 먼저 주파수를 입력해 주세요.');
        return;
      }
      const defaultTitle = isEn ? 'My Custom Recipe' : '나만의 커스텀 레시피';
      const title = inputCustomTitle ? inputCustomTitle.value.trim() : defaultTitle;
      const category = selectCustomCategory ? selectCustomCategory.value : 'custom';
      const desc = inputCustomDesc ? inputCustomDesc.value.trim() : '';

      const newRecipe = {
        id: 'recipe_' + Date.now(),
        title: title || defaultTitle,
        category: category,
        desc: desc,
        freqs: [...parsedCustomFreqs],
        interval: currentCustomIntervalSec,
        createdAt: new Date().toISOString()
      };

      const list = getStoredRecipes();
      list.unshift(newRecipe);
      saveStoredRecipes(list);
      renderSavedRecipes();
      const saveSuccessMsg = isEn ? `'${newRecipe.title}' saved to archive successfully!` : `'${newRecipe.title}' 레시피가 보관함에 안전하게 저장되었습니다!`;
      alert(saveSuccessMsg);
    });
  }

  // JSON 백업 파일 내보내기
  if (btnCustomExportJson) {
    btnCustomExportJson.addEventListener('click', () => {
      const isEn = window.currentLang === 'en';
      const list = getStoredRecipes();
      if (list.length === 0) {
        if (parsedCustomFreqs.length > 0) {
          const currentTitle = isEn ? 'Current Custom Recipe' : '현재 커스텀 레시피';
          list.push({
            id: 'recipe_' + Date.now(),
            title: inputCustomTitle ? inputCustomTitle.value.trim() : currentTitle,
            category: selectCustomCategory ? selectCustomCategory.value : 'custom',
            desc: inputCustomDesc ? inputCustomDesc.value.trim() : '',
            freqs: [...parsedCustomFreqs],
            interval: currentCustomIntervalSec,
            createdAt: new Date().toISOString()
          });
        } else {
          alert(isEn ? 'No recipe data to export.' : '내보낼 레시피 데이터가 없습니다.');
          return;
        }
      }

      const jsonStr = JSON.stringify(list, null, 2);
      const blob = new Blob([jsonStr], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `Solavre_Custom_Recipes_${new Date().toISOString().slice(0, 10)}.json`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    });
  }

  // JSON 파일 가져오기 (Import)
  if (btnCustomImportJsonTrigger && inputCustomImportJson) {
    btnCustomImportJsonTrigger.addEventListener('click', () => {
      inputCustomImportJson.click();
    });

    inputCustomImportJson.addEventListener('change', (e) => {
      const file = e.target.files[0];
      if (!file) return;

      const reader = new FileReader();
      reader.onload = (evt) => {
        const isEn = window.currentLang === 'en';
        try {
          const imported = JSON.parse(evt.target.result);
          if (Array.isArray(imported)) {
            const list = getStoredRecipes();
            let addedCount = 0;
            imported.forEach(item => {
              if (item.freqs && Array.isArray(item.freqs)) {
                item.id = 'recipe_' + Date.now() + '_' + Math.random().toString(36).substr(2, 4);
                list.unshift(item);
                addedCount++;
              }
            });
            saveStoredRecipes(list);
            renderSavedRecipes();
            alert(isEn ? `Successfully imported ${addedCount} recipes!` : `${addedCount}개의 레시피를 성공적으로 불러왔습니다!`);
          } else if (imported.freqs && Array.isArray(imported.freqs)) {
            const list = getStoredRecipes();
            imported.id = 'recipe_' + Date.now();
            list.unshift(imported);
            saveStoredRecipes(list);
            renderSavedRecipes();
            const recipeName = imported.title || (isEn ? 'Recipe' : '레시피');
            alert(isEn ? `Successfully loaded '${recipeName}'!` : `'${recipeName}'를 성공적으로 불러왔습니다!`);
          }
        } catch (err) {
          alert((isEn ? 'Invalid JSON recipe file format: ' : '올바른 JSON 레시피 파일 형식이 아닙니다: ') + err.message);
        }
      };
      reader.readAsText(file);
      inputCustomImportJson.value = '';
    });
  }

  // ==========================================================================
  // [신규] 6. 커스텀 BGM 음원 파일 내보내기 (Export)
  // ==========================================================================
  if (sliderCustomExportBgmVol && txtCustomExportBgmVol) {
    sliderCustomExportBgmVol.addEventListener('input', (e) => {
      txtCustomExportBgmVol.textContent = Math.round(parseFloat(e.target.value) * 100) + '%';
    });
  }
  if (sliderCustomExportMasterVol && txtCustomExportMasterVol) {
    sliderCustomExportMasterVol.addEventListener('input', (e) => {
      txtCustomExportMasterVol.textContent = Math.round(parseFloat(e.target.value) * 100) + '%';
    });
  }

  if (btnCustomExportAudio) {
    btnCustomExportAudio.addEventListener('click', async () => {
      if (parsedCustomFreqs.length === 0) {
        alert('먼저 렌더링할 주파수 레시피를 입력해 주세요.');
        return;
      }

      let durationSec = 3600;
      const durVal = selectCustomExportDuration.value;
      if (durVal === 'auto') {
        durationSec = parsedCustomFreqs.length * currentCustomIntervalSec;
      } else {
        durationSec = parseInt(durVal);
      }

      const bgmTrack = selectCustomExportBgm.value;
      const bgmVol = parseFloat(sliderCustomExportBgmVol.value);
      const masterVol = parseFloat(sliderCustomExportMasterVol.value);

      // UI 진행 표시
      btnCustomExportAudio.disabled = true;
      if (customExportProgressArea) customExportProgressArea.classList.remove('hidden');
      if (customExportDownloadWrapper) customExportDownloadWrapper.classList.add('hidden');
      if (barCustomExportProgress) barCustomExportProgress.style.width = '0%';
      if (txtCustomExportPercent) txtCustomExportPercent.textContent = '0%';
      if (txtCustomExportStatus) txtCustomExportStatus.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> 맞춤 주파수 오디오 렌더링을 시작합니다...';

      try {
        engine.setCustomFrequencyRecipe(parsedCustomFreqs);
        engine.setCustomSweepInterval(currentCustomIntervalSec);

        const wavBlob = await engine.exportAudio(
          durationSec,
          (percent) => {
            if (barCustomExportProgress) barCustomExportProgress.style.width = `${percent}%`;
            if (txtCustomExportPercent) txtCustomExportPercent.textContent = `${percent}%`;
            if (txtCustomExportStatus) {
              if (percent >= 100) {
                txtCustomExportStatus.innerHTML = '<i class="fa-solid fa-circle-check" style="color: #34d399;"></i> 렌더링 및 다운로드 준비 완료!';
              } else if (percent >= 99) {
                txtCustomExportStatus.innerHTML = '<i class="fa-solid fa-wand-magic-sparkles fa-spin"></i> 고음질 WAV 오디오를 조립하고 있습니다...';
              } else {
                txtCustomExportStatus.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> 고음질 오디오 렌더링 중... (${percent}%)`;
              }
            }
          },
          'custom',
          bgmTrack,
          bgmVol,
          masterVol
        );

        const safeTitle = (inputCustomTitle.value.trim() || 'CustomRecipe').replace(/[^a-zA-Z0-9가-힣_-]/g, '_');
        const filename = `Solavre_${safeTitle}_${durationSec}s.wav`;

        const url = URL.createObjectURL(wavBlob);
        if (btnCustomDownloadLink) {
          btnCustomDownloadLink.href = url;
          btnCustomDownloadLink.download = filename;
        }
        if (customExportDownloadWrapper) {
          customExportDownloadWrapper.classList.remove('hidden');
        }

        // 브라우저 자동 다운로드 트리거
        const a = document.createElement('a');
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        setTimeout(() => {
          document.body.removeChild(a);
        }, 100);

        // 로컬 다운로드 서버 시도
        try {
          const host = window.location.protocol === 'file:' ? 'http://127.0.0.1:8080' : '';
          fetch(`${host}/save-to-downloads?filename=${encodeURIComponent(filename)}`, {
            method: 'POST',
            body: wavBlob
          }).catch(() => {});
        } catch (e) {}

      } catch (err) {
        console.error('Custom export error:', err);
        if (txtCustomExportStatus) txtCustomExportStatus.textContent = '렌더링 에러: ' + err.message;
      } finally {
        btnCustomExportAudio.disabled = false;
      }
    });
  }

  // 초기 렌더링
  renderCustomChips();
  renderCustomTimeline();
  renderSavedRecipes();
  setIntervalSeconds(300);

  // ==========================================================================
  // [신규] 모바일 햄버거 메뉴 및 내비게이션 드로어 (Drawer) 이벤트 리스너 바인딩
  // ==========================================================================
  const btnHamburger = document.getElementById('btn-hamburger');
  const btnCloseDrawer = document.getElementById('btn-close-drawer');
  const mobileDrawer = document.getElementById('mobile-drawer');
  const drawerOverlay = document.getElementById('drawer-overlay');
  const drawerLinks = document.querySelectorAll('.drawer-link');
  const btnDrawerWellnessCheck = document.getElementById('btn-drawer-wellness-check');

  // 드로어 열기
  if (btnHamburger) {
    btnHamburger.addEventListener('click', () => {
      mobileDrawer.classList.remove('hidden');
      drawerOverlay.classList.remove('hidden');
    });
  }

  // 드로어 닫기 기능
  function closeDrawer() {
    if (mobileDrawer) mobileDrawer.classList.add('hidden');
    if (drawerOverlay) drawerOverlay.classList.add('hidden');
  }

  if (btnCloseDrawer) {
    btnCloseDrawer.addEventListener('click', closeDrawer);
  }

  if (drawerOverlay) {
    drawerOverlay.addEventListener('click', closeDrawer);
  }

  // 드로어 메뉴 링크 클릭 시 스무스 스크롤 이동 및 드로어 닫기
  drawerLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      closeDrawer(); // 드로어 먼저 닫기

      if (targetElement) {
        // 모바일 기기에서의 헤더 가림 현상 등을 고려하여 여유 간격을 둔 스무스 스크롤 이동
        setTimeout(() => {
          targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 300); // 드로어가 닫히는 애니메이션 시간 확보 후 이동
      }
    });
  });

  // 드로어 내부의 AI 주파수 맞춤 점검 시작 버튼
  if (btnDrawerWellnessCheck) {
    btnDrawerWellnessCheck.addEventListener('click', () => {
      closeDrawer();
      if (wellnessCheckModal) {
        wellnessCheckModal.classList.remove('hidden');
        resetWellnessCheckForm();
      }
    });
  }


  // ==========================================================================
  // [신규] Solavre AI 주파수 맞춤 조율 점검용 이벤트 바인딩 및 설문 제어 로직
  // ==========================================================================
  
  // 모달 창 열기
  btnStartWellnessCheck.addEventListener('click', () => {
    wellnessCheckModal.classList.remove('hidden');
    resetWellnessCheckForm();
  });

  // 모달 창 닫기
  btnCloseWellnessCheck.addEventListener('click', () => {
    wellnessCheckModal.classList.add('hidden');
  });

  // 이름 입력 후 점검 시작하기 버튼
  btnSurveyStart.addEventListener('click', () => {
    const inputVal = userNameInput.value.trim();
    if (inputVal) {
      userName = inputVal;
    } else {
      userName = "힐러";
    }
    
    // 시작 인트로 숨기고 질문 컨테이너 활성화
    surveyIntro.classList.add('hidden');
    surveyQuestionContainer.classList.remove('hidden');
    
    currentQuestionIndex = 0;
    renderQuestion(currentQuestionIndex);
  });

  // 이전 버튼 동작
  btnSurveyPrev.addEventListener('click', () => {
    if (currentQuestionIndex > 0) {
      currentQuestionIndex--;
      renderQuestion(currentQuestionIndex);
    } else {
      // 1번 질문에서 이전으로 가면 이름 입력 화면으로 귀환
      surveyQuestionContainer.classList.add('hidden');
      surveyIntro.classList.remove('hidden');
      resetWellnessCheckProgressBar();
    }
  });

  // 커스텀 입력값(슬라이더 등) 다음 버튼 클릭 시 응답 보관 후 다음 단계 진행
  btnSurveySubmitCustom.addEventListener('click', () => {
    const q = wellnessCheckQuestions[currentQuestionIndex];
    if (q.type === 'slider') {
      const sliderVal = parseInt(document.getElementById('input-stress-slider').value);
      userResponses[q.id] = { val: sliderVal, dim: q.dim };
    } else if (q.type === 'multichoice') {
      // 다중선택
      const selectedBtns = surveyOptionsContainer.querySelectorAll('.btn-survey-option.selected');
      const selectedTags = Array.from(selectedBtns).map(btn => btn.getAttribute('data-tag'));
      userResponses[q.id] = { tags: selectedTags };
    }
    
    goToNextQuestion();
  });

  // 맞춤 레시피 적용 및 감상하기 버튼
  btnApplyRecipe.addEventListener('click', () => {
    applyWellnessRecipeToEngine();
    wellnessCheckModal.classList.add('hidden'); // 모달 닫기
  });

  // 다시 체크하기 버튼
  btnRestartWellnessCheck.addEventListener('click', () => {
    resetWellnessCheckForm();
  });
}

/**
 * 5. 호흡 가이드 로직은 breathingGuide.js에서 5가지 패턴(초보자, 균등, 이완, 동조, 활력)으로 고도화되었습니다.
 */


/**
 * 6. 웹 오디오 API 기반 미래지향적 양자 파티클 비주얼라이저
 */
let animationFrameId = null;

// 양자 에너지 입자 물리 클래스 정의
class QuantumParticle {
  constructor(x, y, angle, speed, color, size, life) {
    this.x = x;
    this.y = y;
    // 삼각함수로 각도 기반 방출 속도 벡터 계산
    this.vx = Math.cos(angle) * speed;
    this.vy = Math.sin(angle) * speed;
    this.color = color;
    this.radius = size;
    this.life = life;
    this.maxLife = life;
    this.alpha = 1.0;
  }

  // 매 프레임 파티클 상태 업데이트
  update() {
    this.x += this.vx;
    this.y += this.vy;
    // 우주 공간의 가벼운 저항감을 연출하기 위해 속도 감속 (Damping)
    this.vx *= 0.97;
    this.vy *= 0.97;
    // 수명 감소
    this.life -= 1;
    // 투명도는 수명에 비례하여 부드럽게 감소
    this.alpha = Math.max(0, this.life / this.maxLife);
  }

  // 캔버스에 파티클 드로잉
  draw(ctx) {
    ctx.save();
    ctx.globalAlpha = this.alpha;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    
    // 첨단 네온 광원 느낌을 주는 그림자 블러(Glow) 효과 추가
    ctx.shadowBlur = this.radius * 2.5;
    ctx.shadowColor = this.color;
    
    ctx.fill();
    ctx.restore();
  }
}

function startVisualizer() {
  const ctx = canvasVisualizer.getContext('2d');
  const visualizerContainer = canvasVisualizer.parentElement;
  
  // 비주얼라이저 재생 활성화 클래스 부여 (테두리 글로우 효과 점등)
  if (visualizerContainer) {
    visualizerContainer.classList.add('playing');
  }

  function resizeCanvas() {
    canvasVisualizer.width = canvasVisualizer.parentElement.clientWidth;
    canvasVisualizer.height = canvasVisualizer.parentElement.clientHeight || 250;
  }
  
  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);

  const bufferLength = engine.analyser.frequencyBinCount;
  const dataArray = new Uint8Array(bufferLength);
  
  // 파티클을 담을 배열 선언
  const particles = [];
  
  // 중앙 뇌파 링의 자전 각도
  let ringRotation = 0;

  // 솔페지오 주파수별 맞춤형 네온 광학 컬러 테이블
  const colorTable = {
    '396': { ring: 'rgba(239, 68, 68, 0.85)', particle: '#f87171' }, // 불안 해소: 네온 레드
    '417': { ring: 'rgba(249, 115, 22, 0.85)', particle: '#fb923c' }, // 장애 극복: 네온 오렌지
    '432': { ring: 'rgba(168, 85, 247, 0.85)', particle: '#c084fc' }, // 자연 조화: 네온 퍼플
    '528': { ring: 'rgba(52, 211, 153, 0.85)', particle: '#34d399' }, // 기적 치유: 네온 에메랄드/민트
    '639': { ring: 'rgba(236, 72, 153, 0.85)', particle: '#f472b6' }, // 소통 관계: 네온 핑크
    '741': { ring: 'rgba(6, 182, 212, 0.85)', particle: '#22d3ee' }  // 직관 정화: 네온 사이언/스카이
  };

  function draw() {
    // 재생이 정지되면 루프를 멈추고 글로우 상태 끄기
    if (!engine.isPlaying) {
      if (visualizerContainer) {
        visualizerContainer.classList.remove('playing');
      }
      cancelAnimationFrame(animationFrameId);
      return;
    }
    
    animationFrameId = requestAnimationFrame(draw);
    engine.analyser.getByteFrequencyData(dataArray);

    const width = canvasVisualizer.width;
    const height = canvasVisualizer.height;
    const centerX = width / 2;
    const centerY = height / 2;

    // 1) 캔버스 클리어
    // 투명 배경이므로 겹쳐서 그렸을 때 성운 이미지가 은은히 보이며, 파티클만 궤적을 남김
    ctx.clearRect(0, 0, width, height);

    // 2) 저음역대(Bass)와 고음역대(Treble) 주파수 강도 계산
    let bassSum = 0;
    let trebleSum = 0;
    const bassLimit = Math.floor(bufferLength * 0.15); // 앞쪽 15%는 저음역
    const trebleStart = Math.floor(bufferLength * 0.5); // 뒷쪽 50%는 고음역

    for (let i = 0; i < bassLimit; i++) {
      bassSum += dataArray[i];
    }
    for (let i = trebleStart; i < bufferLength; i++) {
      trebleSum += dataArray[i];
    }

    const bassAvg = (bassSum / bassLimit) / 255.0; // 0.0 ~ 1.0 정규화
    const trebleAvg = (trebleSum / (bufferLength - trebleStart)) / 255.0;

    // 3) 주파수 매칭 컬러 가져오기 (설정된 솔페지오 기반, 없으면 432Hz 기본 퍼플)
    const solfeggioStr = String(engine.solfeggioFreq);
    const themeColors = colorTable[solfeggioStr] || { ring: 'rgba(168, 85, 247, 0.85)', particle: '#c084fc' };

    // 4) 저음역(Bass) 에너지에 비례하여 크기가 뛰는 중앙 뇌파 링 렌더링
    const baseRadius = 55;
    const ringRadius = baseRadius + (bassAvg * 40); // 최대 40px까지 동적 확장

    ctx.save();
    ctx.beginPath();
    ctx.arc(centerX, centerY, ringRadius, 0, Math.PI * 2);
    ctx.lineWidth = 4 + (bassAvg * 4); // 음압이 강하면 선 두께도 증가
    ctx.strokeStyle = themeColors.ring;
    ctx.shadowBlur = 15 + (bassAvg * 15);
    ctx.shadowColor = themeColors.ring;
    ctx.stroke();
    ctx.restore();

    // 5) 링 주위의 보조 에너지 서클 데코레이션 (회전 및 미세 물결)
    ringRotation += 0.005 + (bassAvg * 0.015); // 템포가 빠르면 더 빨리 회전
    const numOrnaments = 3;
    
    ctx.save();
    ctx.translate(centerX, centerY);
    ctx.rotate(ringRotation);
    for (let i = 0; i < numOrnaments; i++) {
      const angle = (i / numOrnaments) * Math.PI * 2;
      const ox = Math.cos(angle) * (ringRadius + 15);
      const oy = Math.sin(angle) * (ringRadius + 15);
      
      ctx.beginPath();
      ctx.arc(ox, oy, 4 + (trebleAvg * 4), 0, Math.PI * 2);
      ctx.fillStyle = themeColors.particle;
      ctx.shadowBlur = 10;
      ctx.shadowColor = themeColors.particle;
      ctx.fill();
    }
    ctx.restore();

    // 6) 고음역(Treble) 강도에 반응하여 중앙 링 궤도에서 파티클(양자 입자) 동적 분출
    const spawnChance = 0.2 + (trebleAvg * 0.8); 
    if (Math.random() < spawnChance && particles.length < 150) {
      // 링의 360도 임의의 방향으로 퍼짐
      const spawnAngle = Math.random() * Math.PI * 2;
      const px = centerX + Math.cos(spawnAngle) * ringRadius;
      const py = centerY + Math.sin(spawnAngle) * ringRadius;
      
      // 속도와 방향 설정 (바깥쪽 방향 벡터에 가벼운 난수 가미)
      const pSpeed = 0.6 + (trebleAvg * 2.5) + Math.random() * 0.6;
      const pSize = 1.5 + Math.random() * 3.5;
      const pLife = 40 + Math.floor(Math.random() * 45); // 40~85 프레임의 생존 수명

      particles.push(new QuantumParticle(px, py, spawnAngle, pSpeed, themeColors.particle, pSize, pLife));
    }

    // 7) 모든 활성 파티클 상태 갱신 및 캔버스 드로잉
    for (let i = particles.length - 1; i >= 0; i--) {
      const p = particles[i];
      p.update();
      p.draw(ctx);
      
      // 수명이 다했거나 화면 밖으로 나간 파티클 배열에서 안전 제거
      if (p.life <= 0 || p.alpha <= 0) {
        particles.splice(i, 1);
      }
    }
  }

  draw();
}

// ==========================================================================
// [신규] Solavre AI 주파수 맞춤 조율 점검 전용 제어 함수군
// ==========================================================================

/**
 * 자가점검 폼 데이터 초기화
 */
function resetWellnessCheckForm() {
  userResponses = {};
  currentQuestionIndex = 0;
  isBeginnerFlag = false;

  surveyIntro.classList.remove('hidden');
  surveyQuestionContainer.classList.add('hidden');
  surveyResult.classList.add('hidden');

  resetWellnessCheckProgressBar();
}

/**
 * 프로그레스바 초기화
 */
function resetWellnessCheckProgressBar() {
  wellnessCheckProgressBar.style.width = '0%';
  wellnessCheckProgressText.textContent = "준비";
}

/**
 * 특정 인덱스의 설문 문항을 렌더링하는 함수
 */
function renderQuestion(index) {
  const q = wellnessCheckQuestions[index];
  
  // 1) 프로그레스 바 동기화 (총 20개 문항)
  const percent = Math.round(((index + 1) / 20) * 100);
  wellnessCheckProgressBar.style.width = `${percent}%`;
  wellnessCheckProgressText.textContent = `질문 ${index + 1} / 20 (${percent}%)`;

  // 2) 질문 텍스트 출력
  surveyQuestionText.textContent = q.question;
  surveyQuestionDesc.textContent = q.desc;

  // 3) 초기화
  surveyOptionsContainer.innerHTML = "";
  surveyCustomInputContainer.innerHTML = "";
  surveyCustomInputContainer.classList.add('hidden');
  btnSurveySubmitCustom.classList.add('hidden');

  // 4) 문항 타입(type)에 따른 분기 렌더링
  if (q.type === 'choice') {
    // 일반 단일 선택지형 문항
    q.options.forEach((opt, optIndex) => {
      const btn = document.createElement('button');
      btn.className = "btn-survey-option";
      btn.innerHTML = `<span>${opt.text}</span> <i class="fa-solid fa-angle-right"></i>`;
      
      // 이미 답변 이력이 있다면 selected 스타일 적용
      if (userResponses[q.id] && userResponses[q.id].selectedIdx === optIndex) {
        btn.classList.add('selected');
      }

      btn.addEventListener('click', () => {
        // 응답 기록 저장
        userResponses[q.id] = { selectedIdx: optIndex, opt: opt };
        
        // 애니메이션 피드백을 위해 하이라이트 후 다음 단계 진행
        const allBtns = surveyOptionsContainer.querySelectorAll('.btn-survey-option');
        allBtns.forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');

        setTimeout(() => {
          goToNextQuestion();
        }, 250);
      });

      surveyOptionsContainer.appendChild(btn);
    });
  } else if (q.type === 'slider') {
    // Q11: 스트레스 강도 측정 슬라이더
    surveyCustomInputContainer.classList.remove('hidden');
    btnSurveySubmitCustom.classList.remove('hidden');

    let initialVal = q.defaultVal;
    if (userResponses[q.id]) {
      initialVal = userResponses[q.id].val;
    }

    const sliderWrapper = document.createElement('div');
    sliderWrapper.className = "volume-slider-container";
    sliderWrapper.innerHTML = `
      <div style="display:flex; justify-content:space-between; font-size:0.85rem; font-weight:600; color:var(--color-neon-blue); margin-bottom:8px;">
        <span>낮음 (평온함)</span>
        <span id="txt-stress-val" style="font-size:1.1rem; color:var(--color-neon-purple);">${initialVal} / 10</span>
        <span>높음 (스트레스 극심)</span>
      </div>
      <input type="range" id="input-stress-slider" min="${q.min}" max="${q.max}" step="${q.step}" value="${initialVal}" style="width:100%;">
    `;
    surveyCustomInputContainer.appendChild(sliderWrapper);

    const stressSliderInput = document.getElementById('input-stress-slider');
    const txtStressVal = document.getElementById('txt-stress-val');
    
    stressSliderInput.addEventListener('input', (e) => {
      txtStressVal.textContent = `${e.target.value} / 10`;
    });
  } else if (q.type === 'multichoice') {
    // Q18: 다중 선택 자연음 선호 조사
    btnSurveySubmitCustom.classList.remove('hidden');

    // 이미 이전 선택 이력이 존재하면 로드
    let selectedTags = [];
    if (userResponses[q.id]) {
      selectedTags = userResponses[q.id].tags;
    }

    q.options.forEach(opt => {
      const btn = document.createElement('button');
      btn.className = "btn-survey-option";
      btn.setAttribute('data-tag', opt.tag);
      
      const isSelected = selectedTags.includes(opt.tag);
      if (isSelected) {
        btn.classList.add('selected');
      }

      btn.innerHTML = `
        <span>${opt.text}</span>
        <div class="option-badge"><i class="fa-solid fa-check"></i></div>
      `;

      btn.addEventListener('click', () => {
        btn.classList.toggle('selected');
      });

      surveyOptionsContainer.appendChild(btn);
    });
  }
}

/**
 * 다음 질문으로 슬라이드 이동
 */
function goToNextQuestion() {
  if (currentQuestionIndex < 19) {
    currentQuestionIndex++;
    renderQuestion(currentQuestionIndex);
  } else {
    // 마지막 20번 질문 완료 시 결과 연산
    calculateWellnessRecipe();
  }
}

/**
 * 점검 완료에 따른 5대 차원 점수 연산 및 맞춤 레시피 도출
 */
/**
 * 점검 완료에 따른 5대 차원 점수 연산 및 맞춤 레시피 도출
 */
function calculateWellnessRecipe() {
  // 5대 차원 원시 스코어 보관소
  const rawScores = { SLEEP: 0, FOCUS: 0, CALM: 0, BODY: 0, MOOD: 0 };
  
  // Q18 선호 자연음 태그 배열 및 기타 설정 값
  let preferredAmbients = [];
  let userIntensity = 0.35;
  let userDuration = 600;

  // 20개 응답 데이터 스캔 및 가중치 합산
  wellnessCheckQuestions.forEach(q => {
    const resp = userResponses[q.id];
    if (!resp) return;

    if (q.type === 'choice') {
      const opt = resp.opt;
      if (opt && opt.scores) {
        // 누적 가산 처리
        Object.keys(opt.scores).forEach(dim => {
          if (dim !== 'is_beginner') {
            rawScores[dim] += opt.scores[dim];
          }
        });
        
        // Q17 초보자 여부 감지
        if (opt.scores.is_beginner) {
          isBeginnerFlag = true;
        }
      }
      // Q19 볼륨 강도 세팅
      if (opt.intensity !== undefined) {
        userIntensity = opt.intensity;
      }
      // Q20 재생 길이 세팅
      if (opt.duration !== undefined) {
        userDuration = opt.duration;
      }
    } else if (q.type === 'slider') {
      // Q11 스트레스 슬라이더 (CALM에 그대로 누적)
      rawScores[resp.dim] += resp.val;
    } else if (q.type === 'multichoice') {
      // Q18 선호 자연음
      preferredAmbients = resp.tags;
    }
  });

  // 점수 정규화 연산 (0~100 스케일)
  const normalizedScores = {};
  Object.keys(maxScores).forEach(dim => {
    const rawVal = Math.max(0, rawScores[dim]); // 음수 밸런스 방지
    const percent = Math.min(100, Math.round((rawVal / maxScores[dim]) * 100));
    normalizedScores[dim] = percent;
  });

  // 최상위 요구 차원 식별 (TOP1, TOP2)
  const sortedDims = Object.keys(normalizedScores).sort((a, b) => normalizedScores[b] - normalizedScores[a]);
  const TOP1 = sortedDims[0];
  let TOP2 = null;

  // 2위 점수가 1위 점수와 20점 차이 이내일 때만 서브 추천 차원으로 반영
  if (sortedDims[1] && (normalizedScores[TOP1] - normalizedScores[sortedDims[1]] <= 20)) {
    TOP2 = sortedDims[1];
  }

  // 매칭 룰에 근거한 메인 사운드 레시피 설계
  const soundRecipes = {
    SLEEP: {
      trackName: "딥 델타 슬립 (Deep Delta Sleep)",
      solfeggio: 174,
      binaural: 3.0,
      defaultAmbient: 'rain',
      reason: "최근 체감하시는 수면 부족과 입면 뒤척임 완화를 돕기 위한 최적의 레시피입니다. 뇌 세포를 깊은 휴식의 주파수로 안정시키는 델타파(3Hz)와 174Hz 치유 솔페지오 톤을 기반으로 마음의 닻을 내리도록 돕습니다.",
      dimKo: "수면 회복"
    },
    FOCUS: {
      trackName: "포커스 알파 마인드 (Focus Alpha Mind)",
      solfeggio: 528,
      binaural: 9.0,
      defaultAmbient: 'stream',
      reason: "잡념을 정돈하고 인지 뇌파를 맑게 유지할 수 있도록 설계된 몰입 최적화 레시피입니다. 기적의 치유 주파수로도 잘 알려진 528Hz의 편안한 화음과 두뇌의 안정적인 집중력을 활성화하는 9Hz 알파파 뇌파를 매칭합니다.",
      dimKo: "각성 및 집중 몰입"
    },
    CALM: {
      trackName: "세타 릴랙세이션 오아시스 (Theta Calm Oasis)",
      solfeggio: 396,
      binaural: 6.0,
      defaultAmbient: 'singingbowl',
      reason: "마음 속의 긴장, 불안, 그리고 일상의 흥분을 말끔히 가라앉히기 위한 진정 레시피입니다. 근심을 이완하는 396Hz 솔페지오 주파수와 깊은 명상 상태에 나타나는 6Hz 세타파의 부드러운 하모니를 결합하여 내면의 고요함을 선사합니다.",
      dimKo: "이완 및 진정"
    },
    BODY: {
      trackName: "피지컬 리커버리 리듬 (Physical Recovery Rhythm)",
      solfeggio: 285,
      binaural: 6.0,
      defaultAmbient: 'waves',
      reason: "신체 근육의 뻐근함 and 육체 피로 누적 완화를 도울 신체 조율 레시피입니다. 세포 본연의 가벼움을 돕는 285Hz 파동과 6Hz의 부드러운 세타파의 입체 진동 화음이 근육을 풀어줍니다.",
      dimKo: "신체적 이완과 회복"
    },
    MOOD: {
      trackName: "조이풀 모닝 하모니 (Joyful Morning Harmony)",
      solfeggio: 639,
      binaural: 10.0,
      defaultAmbient: 'seagull',
      reason: "감정의 정체와 무기력한 에너지 흐름을 깨워 마음의 평온한 생기를 더해줄 정서 조율 레시피입니다. 관계 개선과 감정의 조율을 돕는 639Hz 주파수와 정서를 밝고 안정적으로 유도하는 10Hz 알파 뇌파를 합성합니다.",
      dimKo: "정서 조율 및 활력"
    }
  };

  const currentWellnessRecipe = soundRecipes[TOP1];
  
  // 자연음 매칭: 유저가 18번 질문에서 선택한 것 중 첫 번째 것을 사용하거나, 없으면 레시피 기본 자연음 사용
  const targetAmbient = (preferredAmbients.length > 0) ? preferredAmbients[0] : currentWellnessRecipe.defaultAmbient;
  
  const ambientNamesKo = {
    rain: "빗소리 (Rain)",
    waves: "파도소리 (Waves)",
    seagull: "갈매기소리 (Seagull)",
    singingbowl: "싱잉볼소리 (Singing Bowl)",
    campfire: "모닥불소리 (Campfire)",
    stream: "계곡물 흐르는 소리 (Stream)",
    forestbirds: "숲 속의 새소리 (Forest Birds)",
    mountainbirds: "깊은 산속 새소리 (Mountain Birds)"
  };

  // 결과 화면 UI 바인딩
  txtResultDate.textContent = `점검 일자: ${new Date().toLocaleDateString('ko-KR')} | 추천 레시피`;
  txtResultUserTitle.innerHTML = `<strong>${userName}</strong>님을 위한 솔라브르 힐링 맞춤 사운드`;
  txtResultTrackName.textContent = currentWellnessRecipe.trackName;
  
  let detailsText = `${currentWellnessRecipe.solfeggio}Hz 솔페지오 + ${currentWellnessRecipe.binaural}Hz 바이노럴 + ${ambientNamesKo[targetAmbient] || targetAmbient}`;
  if (TOP2) {
    const subPrescription = soundRecipes[TOP2];
    detailsText += `<br><small style="color:var(--color-text-muted); font-size:0.78rem;">(추가 추천 트랙: ${subPrescription.trackName} - ${subPrescription.solfeggio}Hz)</small>`;
  }
  txtResultFreqDetails.innerHTML = detailsText;
  txtResultComment.textContent = currentWellnessRecipe.reason;

  // 5대 수치 그래프 업데이트
  updateScoreBar(barScoreSleep, txtScoreSleep, normalizedScores.SLEEP);
  updateScoreBar(barScoreFocus, txtScoreFocus, normalizedScores.FOCUS);
  updateScoreBar(barScoreCalm, txtScoreCalm, normalizedScores.CALM);
  updateScoreBar(barScoreBody, txtScoreBody, normalizedScores.BODY);
  updateScoreBar(barScoreMood, txtScoreMood, normalizedScores.MOOD);

  // 100개 라이프 코드 중 가장 알맞은 3~4개 코드를 동적으로 추천하는 알고리즘 도입
  const getCodesByCategory = (cat) => {
    return Object.keys(rifeRecipes).filter(code => rifeRecipes[code].category === cat);
  };

  const top1Category = {
    SLEEP: 'sleep',
    FOCUS: 'focus',
    CALM: 'stress',
    BODY: 'body',
    MOOD: 'vitality'
  }[TOP1];

  const top2Category = TOP2 ? {
    SLEEP: 'sleep',
    FOCUS: 'focus',
    CALM: 'stress',
    BODY: 'body',
    MOOD: 'vitality'
  }[TOP2] : null;

  const top1Codes = getCodesByCategory(top1Category);
  const top2Codes = top2Category ? getCodesByCategory(top2Category) : [];

  const recommendedCodes = [];
  
  // TOP1에서 대표적인 코드 2개 추출 (처음 코드와 중간 코드를 추출하여 다양한 효과 배정)
  if (top1Codes.length > 0) {
    recommendedCodes.push(top1Codes[0]);
    if (top1Codes.length > 1) {
      recommendedCodes.push(top1Codes[Math.floor(top1Codes.length / 2)]);
    }
  }
  
  // TOP2에서 대표적인 코드 1~2개 추출
  if (top2Category && top2Codes.length > 0) {
    recommendedCodes.push(top2Codes[0]);
    if (top2Codes.length > 1 && recommendedCodes.length < 4) {
      recommendedCodes.push(top2Codes[Math.floor(top2Codes.length / 2)]);
    }
  } else {
    // TOP2가 없으면 TOP1에서 분산하여 추가 추출
    if (top1Codes.length > 2) {
      recommendedCodes.push(top1Codes[top1Codes.length - 1]);
    }
    if (top1Codes.length > 3 && recommendedCodes.length < 4) {
      recommendedCodes.push(top1Codes[Math.floor(top1Codes.length * 0.75)]);
    }
  }

  // 기존에 삽입되었던 추천 UI 영역이 있다면 제거
  const oldRec = document.querySelector('.recommend-codes-wrapper');
  if (oldRec) oldRec.remove();

  // 결과 카드 내부에 추천 명상 코드 칩 리스트 동적 렌더링
  const recommendWrapper = document.createElement('div');
  recommendWrapper.className = 'recommend-codes-wrapper';
  recommendWrapper.style.cssText = 'margin-top: 20px; border-top: 1px solid rgba(255, 255, 255, 0.08); padding-top: 16px; text-align: left;';
  
  let htmlContent = `
    <p style="font-size: 0.85rem; font-weight: 700; color: var(--color-neon-green); margin-bottom: 10px; display: flex; align-items: center; gap: 6px;">
      <i class="fa-solid fa-wand-magic-sparkles"></i> 추가 추천 맞춤 웰니스 코드 (클릭 시 즉시 적용)
    </p>
    <div style="display: flex; flex-direction: column; gap: 8px;">
  `;

  recommendedCodes.forEach(code => {
    const recRecipe = rifeRecipes[code];
    // "Code XXX : 제목" 형태에서 분리 처리
    const titleParts = recRecipe.title.split(' : ');
    const codePrefix = titleParts[0];
    const codeTitle = titleParts[1] || "";
    
    htmlContent += `
      <button class="btn-rec-apply" data-code="${code}" style="width: 100%; background: rgba(255, 255, 255, 0.03); border: 1px solid rgba(255, 255, 255, 0.06); border-radius: 10px; padding: 10px 14px; color: var(--color-text-main); font-size: 0.82rem; font-weight: 600; text-align: left; cursor: pointer; transition: all 0.2s ease; display: flex; justify-content: space-between; align-items: center;">
        <span>
          <strong style="color: var(--color-neon-green);">${codePrefix}</strong> : 
          ${codeTitle}
        </span>
        <i class="fa-solid fa-circle-play" style="color: var(--color-neon-green); font-size: 1.05rem;"></i>
      </button>
    `;
  });
  
  htmlContent += `</div>`;
  recommendWrapper.innerHTML = htmlContent;
  
  const resultMainCard = document.querySelector('.result-main-card');
  if (resultMainCard) {
    resultMainCard.appendChild(recommendWrapper);
  }

  // 동적 추천 버튼 이벤트 리스너 할당
  const recButtons = recommendWrapper.querySelectorAll('.btn-rec-apply');
  recButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const code = btn.getAttribute('data-code');
      applySpecificCodeToEngine(code);
      wellnessCheckModal.classList.add('hidden'); // 모달 닫기
    });
    
    // 호버 효과 스타일 부여 (사용자 시각성 강화)
    btn.addEventListener('mouseover', () => {
      btn.style.background = 'rgba(52, 211, 153, 0.08)';
      btn.style.borderColor = 'var(--color-neon-green)';
    });
    btn.addEventListener('mouseout', () => {
      btn.style.background = 'rgba(255, 255, 255, 0.03)';
      btn.style.borderColor = 'rgba(255, 255, 255, 0.06)';
    });
  });

  // 레시피 로컬 속성에 임시 보관 (재생 적용 시 꺼내 쓰기 위함)
  btnApplyRecipe.setAttribute('data-solfeggio', currentWellnessRecipe.solfeggio);
  btnApplyRecipe.setAttribute('data-beat', currentWellnessRecipe.binaural);
  btnApplyRecipe.setAttribute('data-ambient', targetAmbient);
  btnApplyRecipe.setAttribute('data-intensity', userIntensity);
  btnApplyRecipe.setAttribute('data-duration', userDuration);

  // 결과 화면 표시
  surveyQuestionContainer.classList.add('hidden');
  surveyResult.classList.remove('hidden');
}

/**
 * 게이지바 채우기 및 텍스트 갱신 헬퍼
 */
function updateScoreBar(barElem, txtElem, score) {
  setTimeout(() => {
    barElem.style.width = `${score}%`;
  }, 100);
  txtElem.textContent = `${score}%`;
}

/**
 * 오디오 엔진에 맞춤 레시피 사운드 데이터를 실제로 동적 세팅하고 즉시 기동하는 함수
 */
function applyWellnessRecipeToEngine() {
  const solfeggio = parseFloat(btnApplyRecipe.getAttribute('data-solfeggio'));
  const beat = parseFloat(btnApplyRecipe.getAttribute('data-beat'));
  const ambient = btnApplyRecipe.getAttribute('data-ambient');
  const intensity = parseFloat(btnApplyRecipe.getAttribute('data-intensity'));
  const duration = parseInt(btnApplyRecipe.getAttribute('data-duration'));

  // 1) 오디오 플레이 개시 (start 호출 시 내부 볼륨이 초기화되므로 가장 먼저 실행)
  if (!engine.isPlaying) {
    engine.start();
    btnMasterPlay.innerHTML = '<i class="fa-solid fa-pause"></i>';
    btnMasterPlay.classList.add('playing');
    visualizerFallback.style.display = 'none';
    startVisualizer();
  }

  // 2) 엔진 주파수 파라미터 세팅
  engine.setSolfeggioFrequency(solfeggio);
  engine.setBeatsFrequency(engine.carrierFreq, beat);
  
  // 3) 음량(볼륨) 세팅 및 믹스
  // 바이노럴 비트 볼륨 (조율 강도 대비 약 60%)
  const beatsVol = parseFloat((intensity * 0.6).toFixed(2));
  engine.setBeatsVolume(beatsVol);
  sliderBeatsVolume.value = beatsVol;
  txtBeatsVolume.textContent = Math.round(beatsVol * 100) + '%';

  // 솔페지오 주파수 볼륨 (조율 강도 대비 약 70%)
  const solfeggioVol = parseFloat((intensity * 0.7).toFixed(2));
  engine.setSolfeggioVolume(solfeggioVol);
  sliderSolfeggioVolume.value = solfeggioVol;
  txtSolfeggioVolume.textContent = Math.round(solfeggioVol * 100) + '%';

  // 자연음 마스터 볼륨
  engine.setNatureMasterVolume(0.8);
  sliderNatureMaster.value = 0.8;
  txtNatureMaster.textContent = '80%';

  // 4) 맞춤 레시피 자연음 단독 활성화 및 다른 자연음 볼륨 소거
  Object.keys(natureSliders).forEach(key => {
    const item = natureSliders[key];
    if (key === ambient) {
      engine.setNatureVolume(key, 0.35);
      item.slider.value = 0.35;
      item.txt.textContent = '35%';
    } else {
      engine.setNatureVolume(key, 0.0);
      item.slider.value = 0.0;
      item.txt.textContent = '0%';
    }
  });

  // 5) 솔페지오 및 바이노럴 프리셋 버튼 디자인 매칭
  solfeggioButtons.forEach(btn => {
    const freq = btn.getAttribute('data-freq');
    if (parseFloat(freq) === solfeggio) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  presetButtons.forEach(btn => {
    const pBeat = parseFloat(btn.getAttribute('data-beat'));
    if (pBeat === beat) {
      btn.classList.add('active');
      sliderCarrierFreq.value = btn.getAttribute('data-carrier');
      sliderBeatFreq.value = pBeat;
      txtCarrierFreq.textContent = btn.getAttribute('data-carrier') + ' Hz';
      txtBeatFreq.textContent = (pBeat % 1 === 0 ? pBeat.toFixed(1) : parseFloat(pBeat.toFixed(2))) + ' Hz';
    } else {
      btn.classList.remove('active');
    }
  });

  // 6) 내보내기 시간 셀렉트 박스 시간 동기화
  selectExportDuration.value = duration;
}

// 돔 로드 완료 시 또는 이미 로드되었을 시 앱 실행
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}

