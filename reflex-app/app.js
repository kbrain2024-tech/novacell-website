const maps = [
  {
    id: "right_sole",
    icon: "🦶",
    surface: "sole",
    title: "오른발 발바닥",
    en: "Right Sole",
    subtitleKo: "발바닥 반사구 (우측)",
    subtitleEn: "Plantar Surface (Right)",
    regionTitleKo: "오른발 발바닥 · 왼발 발바닥",
    regionTitleEn: "Right Sole & Left Sole",
    regionSubKo: "발바닥 반사구 · 교재 제1장 27쪽",
    regionSubEn: "Plantar Surface Reflex Zones · Textbook p.27",
    side: "RIGHT · FOOT",
    image: "foot-sole-map.webp",
    imageEn: "foot-sole-map-en.png",
    page: 27
  },
  {
    id: "left_sole",
    icon: "🦶",
    surface: "sole",
    title: "왼발 발바닥",
    en: "Left Sole",
    subtitleKo: "발바닥 반사구 (좌측)",
    subtitleEn: "Plantar Surface (Left)",
    regionTitleKo: "오른발 발바닥 · 왼발 발바닥",
    regionTitleEn: "Right Sole & Left Sole",
    regionSubKo: "발바닥 반사구 · 교재 제1장 27쪽",
    regionSubEn: "Plantar Surface Reflex Zones · Textbook p.27",
    side: "LEFT · FOOT",
    image: "foot-sole-map.webp",
    imageEn: "foot-sole-map-en.png",
    page: 27
  },
  {
    id: "right_top",
    icon: "🦶",
    surface: "top",
    title: "오른발 발등",
    en: "Right Foot Top",
    subtitleKo: "발등 반사구 (우측)",
    subtitleEn: "Foot Dorsum (Right)",
    regionTitleKo: "오른발 발등 · 왼발 발등",
    regionTitleEn: "Right Foot Top & Left Foot Top",
    regionSubKo: "발등 반사구 · 교재 제1장 28쪽",
    regionSubEn: "Dorsal Foot Reflex Zones · Textbook p.28",
    side: "RIGHT · FOOT",
    image: "foot-top-map.webp",
    imageEn: "foot-top-map-en.png",
    page: 28
  },
  {
    id: "left_top",
    icon: "🦶",
    surface: "top",
    title: "왼발 발등",
    en: "Left Foot Top",
    subtitleKo: "발등 반사구 (좌측)",
    subtitleEn: "Foot Dorsum (Left)",
    regionTitleKo: "오른발 발등 · 왼발 발등",
    regionTitleEn: "Right Foot Top & Left Foot Top",
    regionSubKo: "발등 반사구 · 교재 제1장 28쪽",
    regionSubEn: "Dorsal Foot Reflex Zones · Textbook p.28",
    side: "LEFT · FOOT",
    image: "foot-top-map.webp",
    imageEn: "foot-top-map-en.png",
    page: 28
  },
  {
    id: "right_palm",
    icon: "🖐️",
    surface: "palm",
    title: "오른손 손바닥",
    en: "Right Palm",
    subtitleKo: "손바닥 반사구 (우측)",
    subtitleEn: "Palmar Surface (Right)",
    regionTitleKo: "오른손 손바닥 · 왼손 손바닥",
    regionTitleEn: "Right Palm & Left Palm",
    regionSubKo: "손바닥 반사구 · 교재 제2장 31쪽",
    regionSubEn: "Palmar Reflex Zones · Textbook p.31",
    side: "RIGHT · HAND",
    image: "hand-palm-map.webp",
    imageEn: "hand-palm-map-en.png",
    page: 31
  },
  {
    id: "left_palm",
    icon: "🖐️",
    surface: "palm",
    title: "왼손 손바닥",
    en: "Left Palm",
    subtitleKo: "손바닥 반사구 (좌측)",
    subtitleEn: "Palmar Surface (Left)",
    regionTitleKo: "오른손 손바닥 · 왼손 손바닥",
    regionTitleEn: "Right Palm & Left Palm",
    regionSubKo: "손바닥 반사구 · 교재 제2장 31쪽",
    regionSubEn: "Palmar Reflex Zones · Textbook p.31",
    side: "LEFT · HAND",
    image: "hand-palm-map.webp",
    imageEn: "hand-palm-map-en.png",
    page: 31
  },
  {
    id: "right_back",
    icon: "🤚",
    surface: "back",
    title: "오른손 손등",
    en: "Right Hand Back",
    subtitleKo: "손등 반사구 (우측)",
    subtitleEn: "Hand Dorsum (Right)",
    regionTitleKo: "오른손 손등 · 왼손 손등",
    regionTitleEn: "Right Hand Back & Left Hand Back",
    regionSubKo: "손등 반사구 · 교재 제2장 32쪽",
    regionSubEn: "Dorsal Hand Reflex Zones · Textbook p.32",
    side: "RIGHT · HAND",
    image: "hand-back-map.webp",
    imageEn: "hand-back-map-en.png",
    page: 32
  },
  {
    id: "left_back",
    icon: "🤚",
    surface: "back",
    title: "왼손 손등",
    en: "Left Hand Back",
    subtitleKo: "손등 반사구 (좌측)",
    subtitleEn: "Hand Dorsum (Left)",
    regionTitleKo: "오른손 손등 · 왼손 손등",
    regionTitleEn: "Right Hand Back & Left Hand Back",
    regionSubKo: "손등 반사구 · 교재 제2장 32쪽",
    regionSubEn: "Dorsal Hand Reflex Zones · Textbook p.32",
    side: "LEFT · HAND",
    image: "hand-back-map.webp",
    imageEn: "hand-back-map-en.png",
    page: 32
  }
];

const mapGlossaries = {
  sole: {
    titleKo: "발바닥 반사구 대역표 (Sole / Plantar)",
    titleEn: "Plantar Surface Reflex Area Atlas (Sole)",
    items: [
      { ko: "머리 / 뇌", en: "Head / Brain" },
      { ko: "뇌하수체", en: "Pituitary Gland" },
      { ko: "목 / 뇌간", en: "Neck / Brainstem" },
      { ko: "갑상선 · 부갑상선", en: "Thyroid & Parathyroid" },
      { ko: "눈 · 귀", en: "Eyes & Ears" },
      { ko: "부비강", en: "Frontal Sinuses" },
      { ko: "내이", en: "Inner Ear" },
      { ko: "폐 / 가슴 / 등", en: "Lungs / Chest / Upper Back" },
      { ko: "심장 / 가슴 (좌)", en: "Heart / Chest (Left)" },
      { ko: "태양신경총", en: "Solar Plexus" },
      { ko: "어깨 · 팔", en: "Shoulder & Arm" },
      { ko: "횡격막", en: "Diaphragm" },
      { ko: "간 · 담낭 (우)", en: "Liver & Gallbladder (Right)" },
      { ko: "위 · 췌장", en: "Stomach & Pancreas" },
      { ko: "신장 · 부신", en: "Kidney & Adrenal Gland" },
      { ko: "척추 전체", en: "Entire Spine" },
      { ko: "소장", en: "Small Intestine" },
      { ko: "상행결장 (우)", en: "Ascending Colon (Right)" },
      { ko: "횡행결장", en: "Transverse Colon" },
      { ko: "하행결장 (좌)", en: "Descending Colon (Left)" },
      { ko: "S자 결장 (좌)", en: "Sigmoid Colon (Left)" },
      { ko: "방광", en: "Bladder" },
      { ko: "허리 · 좌골신경", en: "Lower Back & Sciatic Nerve" },
      { ko: "꼬리뼈", en: "Coccyx" }
    ]
  },
  top: {
    titleKo: "발등 반사구 대역표 (Foot Top / Dorsum)",
    titleEn: "Dorsal Foot Reflex Area Atlas (Foot Top)",
    items: [
      { ko: "얼굴 / 부비동", en: "Face / Frontal Sinuses" },
      { ko: "치아 / 잇몸 / 턱", en: "Teeth / Gums / Jaw" },
      { ko: "목 / 뇌간", en: "Neck / Brainstem" },
      { ko: "어깨 관절", en: "Shoulder Joint" },
      { ko: "흉선", en: "Thymus Gland" },
      { ko: "폐 / 가슴 / 유방", en: "Lungs / Chest / Breast" },
      { ko: "척추 전체", en: "Spinal Column" },
      { ko: "등 · 허리선", en: "Mid Back & Waistline" },
      { ko: "팔꿈치", en: "Elbow" },
      { ko: "다리 / 무릎", en: "Leg / Knee" },
      { ko: "방광", en: "Bladder" },
      { ko: "허리", en: "Lower Back" },
      { ko: "림프샘 (상부 림프)", en: "Upper Lymphatic Nodes" },
      { ko: "나팔관 / 서혜부", en: "Fallopian Tube & Groin" }
    ]
  },
  palm: {
    titleKo: "손바닥 반사구 대역표 (Palm / Palmar)",
    titleEn: "Palmar Reflex Area Atlas (Palm)",
    items: [
      { ko: "머리 / 뇌", en: "Head / Brain" },
      { ko: "부비동", en: "Frontal Sinuses" },
      { ko: "목", en: "Neck" },
      { ko: "내이 · 귀", en: "Inner Ear & Ear" },
      { ko: "어깨 상부 · 어깨", en: "Upper Shoulder & Shoulder" },
      { ko: "태양신경총", en: "Solar Plexus" },
      { ko: "팔 · 팔꿈치", en: "Arm & Elbow" },
      { ko: "횡격막", en: "Diaphragm" },
      { ko: "간 · 담낭 (우)", en: "Liver & Gallbladder (Right)" },
      { ko: "위 · 췌장", en: "Stomach & Pancreas" },
      { ko: "신장 · 부신", en: "Kidney & Adrenal Gland" },
      { ko: "상행결장 (우)", en: "Ascending Colon (Right)" },
      { ko: "횡행결장", en: "Transverse Colon" },
      { ko: "하행결장 (좌)", en: "Descending Colon (Left)" },
      { ko: "방광", en: "Bladder" },
      { ko: "허리 · 꼬리뼈", en: "Lower Back & Coccyx" }
    ]
  },
  back: {
    titleKo: "손등 반사구 대역표 (Hand Back / Dorsum)",
    titleEn: "Dorsal Hand Reflex Area Atlas (Hand Back)",
    items: [
      { ko: "머리 / 부비동", en: "Head / Sinuses" },
      { ko: "목 · 치아 · 턱", en: "Neck, Teeth & Jaw" },
      { ko: "갑상선 · 부갑상선", en: "Thyroid & Parathyroid" },
      { ko: "흉선", en: "Thymus Gland" },
      { ko: "폐 / 가슴 / 등", en: "Lungs, Chest & Upper Back" },
      { ko: "등 · 허리선", en: "Mid Back & Waistline" },
      { ko: "엉덩이 · 골반", en: "Hip & Pelvis" },
      { ko: "다리 / 무릎", en: "Leg & Knee" },
      { ko: "자궁 / 전립선", en: "Uterus & Prostate" },
      { ko: "난소 / 고환", en: "Ovaries & Testes" },
      { ko: "림프관 · 나팔관 · 사타구니", en: "Lymphatics, Fallopian Tube & Groin" }
    ]
  }
};

const key = "novacell_reflex_therapy_v1";

const state = {
  mode: "self",
  lang: "ko",
  mapLang: "auto",
  voice: true,
  sound: true,
  masterVolume: 0.70,
  isAudioMuted: false,
  view: "map",
  mapId: "right_sole",
  zoom: 1,
  panX: 0,
  panY: 0,
  points: [],
  records: [],
  academy: { lessons: [], quizBest: 0, practiceBest: 0, attempts: 0 },
  academyCourse: "urinary",
  academyTab: "learn",
  lesson: 0,
  quiz: 0,
  quizScore: 0,
  practiceTimer: null,
  practiceActive: false,
  practiceTime: 60,
  practiceStep: 0,
  practiceScore: 0,
  activeProgram: null,
  selectedSystem: null,
  sessionMap: "foot",
  sessionZoom: 1,
  sessionPanX: 0,
  sessionPanY: 0,
  sessionFit: true,
  step: 0,
  time: 20,
  defaultDuration: 20,
  sessionDurations: [],
  timer: null,
  timerStatus: "ready", // ready, running, paused, finished
  pendingPoint: null,
  selectedPoint: null
};

const $ = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];

const uiText = {
  ko: {
    officialHome: "🌐 공식 홈페이지 ↗",
    mainCover: "메인 대문",
    healingApp: "⚡ 치료 포인트 ↗",
    selfMode: "자가관리",
    proMode: "전문가",
    safety: "안전 안내",
    navMap: "1. 반사 지도",
    navPrograms: "2. 프로그램",
    navSession: "3. 치료 세션",
    navRecords: "4. 기록·백업",
    navAcademy: "5. Academy",
    footMap: "🦶 발 지도",
    handMap: "🖐️ 손 지도",
    fitAll: "전체 보기",
    nextPoint: "다음 포인트 ❯",
    finishRecord: "완료·기록",
    start: "치유 타이머 시작",
    pause: "일시정지",
    restart: "다시 시작",
    reset: "리셋",
    voiceOn: "음성",
    voiceOff: "음성",
    soundOn: "치유음 켜짐",
    soundOff: "치유음 꺼짐",
    topSoundOn: "알림",
    topSoundOff: "무음",
    full: "전체",
    current: "현재",
    footWork: "발 작업점 지도",
    handWork: "손 작업점 지도",
    location: "위치",
    method: "방법",
    page: "교재",
    both: "양쪽",
    gentle: "편안한 3–4/10",
    veryLight: "매우 가볍게 1–2/10",
    repeat: "좌우 각 1–2회",
    frequent: "짧게 자주 반복",
    seconds: "초",
    completed: "현재 포인트가 완료되었습니다.",
    last: "마지막 포인트입니다.",
    chooseProgram: "프로그램을 먼저 선택하세요.",
    sessionSaved: "치료 기록을 저장했습니다.",
    timerTitle: "528Hz 세포 전압 치유 타이머",
    timerSub: "DNA 복원 주파수 · 싱잉볼 차임 벨",
    statusReady: "대기 중",
    statusRunning: "진행 중",
    statusPaused: "일시정지",
    statusFinished: "완료",
    freqReady: "528Hz 치유 주파수 준비",
    freqRunning: "528Hz 치유 주파수 발진 중",
    freqPaused: "528Hz 주파수 일시정지",
    freqFinished: "치유 세션 단계 완료",
    timerDesc: "* <strong>528Hz 세포 전압 주파수</strong>는 손상된 세포 전압을 깨우고 미토콘드리아 ATP 생성을 촉진합니다. 타이머 종료 시 <strong>싱잉볼 차임 벨</strong>과 <strong>음성 안내</strong>가 부드럽고 명확하게 안내합니다.",
    introHeading: "손·발 반사구를 선택하고<br>세션을 시작하세요",
    introDesc: "교재 기본 지도는 보호되며, 전문가 모드에서 추가한 포인트만 이동·삭제할 수 있습니다.",
    introEyebrow: "BOOK-BASED WORKSPACE",
    saveStatusReady: "자동 저장 준비",
    saveStatusDone: "자동 저장 완료",
    saveSub: "이 기기에 안전하게 저장됩니다.",
    mapSelectorEyebrow: "8 MAPS",
    mapSelectorTitle: "지도 선택",
    legendBase: "교재 기본 지도",
    legendCustom: "사용자 추가점",
    addPointBtn: "＋ 사용자 포인트 추가",
    resetMapBtn: "보기 초기화",
    mapHelp: "마우스 휠 또는 버튼으로 확대 · 빈 공간을 끌어 이동",
    pointPanelEyebrow: "POINTS",
    pointPanelTitle: "반사구 정보",
    protectedNote: "🔒 교재 기본 반사구는 원본 지도에 고정되어 있습니다.",
    pointDetailPrompt: "포인트를 선택하세요",
    pointDetailHelp: "사용자 추가점을 선택하면 위치와 메모를 확인할 수 있습니다.",
    progEyebrow: "PROGRAM LIBRARY",
    progTitle: "계통별 프로그램",
    progDesc: "8개 대분류를 선택하면 교재 제3장의 29개 소분류를 확인할 수 있습니다.",
    backToSystems: "← 8개 대분류",
    sessionEyebrow: "GUIDED SESSION",
    seqEyebrow: "SEQUENCE",
    seqTitle: "작업 순서",
    histEyebrow: "HISTORY",
    histTitle: "치료 기록",
    backupEyebrow: "DATA SAFETY",
    backupTitle: "백업과 복원",
    backupDesc: "사용자 추가점과 치료 기록을 하나의 JSON 파일로 저장합니다.",
    exportBtn: "JSON 백업 저장",
    importBtn: "JSON 백업 불러오기",
    clearBtn: "내 기록 모두 지우기",
    backupNote: "교재 기본 지도는 삭제되지 않습니다.",
    academyTitle: "Academy 교육센터",
    academyIntro: "교재 내용을 학습하고, 그림 퀴즈와 실기평가로 익혀 보세요.",
    courseProgress: "과정 진도",
    academyLearn: "학습하기",
    academyQuiz: "퀴즈",
    academyPractice: "실기평가",
    academyProgress: "학습 진도",
    quizTitle: "그림에서 반사구 찾기",
    practiceTitle: "비뇨계 실기평가",
    minus10: "−10초",
    plus10: "+10초",
    timeSettings: "시간 설정",
    timeSettingsTitle: "포인트 적용 시간 설정",
    timerHelp: "1초부터 10분까지 설정할 수 있습니다. 사용 목적과 반응에 맞춰 편안한 범위에서 조정하세요.",
    minutes: "분",
    secondsLabel: "초",
    setTime: "설정 시간",
    currentOnly: "현재 포인트에만 적용",
    remainingAll: "남은 모든 포인트에 적용",
    badgeClinical: "NOVACELL CLINICAL GUIDE",
    badgeReflex: "REFLEX THERAPY",
    welcomeSub: "Hand & Foot Reflexology Learning System",
    welcomeDesc: "<strong>손·발 반사구 지도</strong>와 교재 기반 계통별 프로그램을 연결하여<br>위치를 배우고, 작업 순서에 따라 세션을 진행할 수 있습니다.",
    feat1Title: "8개 반사 지도",
    feat1Sub: "손·발 위치를 한눈에",
    feat2Title: "8개 계통별 프로그램",
    feat2Sub: "교재 소분류와 작업 순서",
    feat3Title: "528Hz 치유 타이머",
    feat3Sub: "차임벨 & 음성 안내",
    feat4Title: "NovaCell Academy",
    feat4Sub: "학습·퀴즈·실기평가",
    welcomeStartBtn: "NovaCell 반사요법 가이드 시작하기",
    welcomeNote: "교재 기반 교육·자가관리 보조 도구이며 의료적 진단과 치료를 대신하지 않습니다.",
    dialogPointEyebrow: "CUSTOM POINT",
    dialogPointTitle: "사용자 포인트 추가",
    dialogPointName: "포인트 명칭",
    dialogPointMemo: "메모",
    dialogPointHelp: "확인을 누른 뒤 지도에서 위치를 선택하세요.",
    cancel: "취소",
    chooseLocation: "위치 선택",
    safetyEyebrow: "SAFETY FIRST",
    safetyTitle: "안전 안내",
    safetyH1: "즉시 진료가 우선인 경우",
    safetyT1: "갑작스러운 마비, 흉통, 호흡곤란, 의식 변화, 고열이나 심한 감염 증상은 자가관리를 하지 않고 즉시 의료기관을 방문합니다.",
    safetyH2: "중단해야 하는 경우",
    safetyT2: "통증, 어지러움, 멍, 저림 악화 또는 불편감이 생기면 즉시 자극을 중단하고 휴식을 취합니다.",
    safetyH3: "강도와 시간",
    safetyT3: "편안한 3–4/10 강도로 짧게 시작하고 반응을 확인합니다. 치료사는 목적과 반응에 따라 포인트별 시간을 1초~10분 범위에서 조정할 수 있으며, 의료적 진단과 치료를 대신하지 않습니다.",
    acceptSafety: "확인했습니다"
  },
  en: {
    officialHome: "🌐 Official Site ↗",
    mainCover: "Main Cover",
    healingApp: "⚡ Therapy Points ↗",
    selfMode: "Self-care",
    proMode: "Professional",
    safety: "Safety Guide",
    navMap: "1. Reflex Maps",
    navPrograms: "2. Programs",
    navSession: "3. Treatment Session",
    navRecords: "4. Records & Backup",
    navAcademy: "5. Academy",
    footMap: "🦶 Foot map",
    handMap: "🖐️ Hand map",
    fitAll: "Fit all",
    nextPoint: "Next Point ❯",
    finishRecord: "Finish & Save",
    start: "Start Session Timer",
    pause: "Pause",
    restart: "Restart",
    reset: "Reset",
    voiceOn: "Voice",
    voiceOff: "Voice",
    soundOn: "Sound ON",
    soundOff: "Sound OFF",
    topSoundOn: "Sound",
    topSoundOff: "Muted",
    full: "Fit",
    current: "Current",
    footWork: "Foot reflex map",
    handWork: "Hand reflex map",
    location: "Location",
    method: "Method",
    page: "Textbook",
    both: "Both sides",
    gentle: "Comfortable 3–4/10",
    veryLight: "Very light 1–2/10",
    repeat: "1–2 times each side",
    frequent: "Repeat briefly and often",
    seconds: "sec",
    completed: "The current point is complete.",
    last: "This is the last point.",
    chooseProgram: "Please select a program first.",
    sessionSaved: "Treatment record saved.",
    timerTitle: "528Hz Cellular Voltage Healing Timer",
    timerSub: "DNA Repair Frequency · Tibetan Singing Bowl Chime",
    statusReady: "Ready",
    statusRunning: "Running",
    statusPaused: "Paused",
    statusFinished: "Complete",
    freqReady: "528Hz Healing Ready",
    freqRunning: "528Hz Healing Resonance Active",
    freqPaused: "528Hz Resonance Paused",
    freqFinished: "Session Step Complete",
    timerDesc: "* <strong>528Hz cellular voltage frequency</strong> awakens damaged cellular membrane potentials and stimulates mitochondrial ATP synthesis. A <strong>singing bowl chime bell</strong> and <strong>natural voice</strong> announce step completion.",
    introHeading: "Select Hand & Foot Reflex Areas<br>and Begin Your Session",
    introDesc: "Base textbook maps are protected. Only custom points added in Pro mode can be moved or deleted.",
    introEyebrow: "BOOK-BASED WORKSPACE",
    saveStatusReady: "Auto-save Ready",
    saveStatusDone: "Auto-saved",
    saveSub: "Safely saved to this device.",
    mapSelectorEyebrow: "8 MAPS",
    mapSelectorTitle: "Select Map",
    legendBase: "Standard Textbook Map",
    legendCustom: "User Custom Point",
    addPointBtn: "＋ Add Custom Point",
    resetMapBtn: "Reset View",
    mapHelp: "Zoom with mouse wheel or buttons · Drag empty space to pan",
    pointPanelEyebrow: "POINTS",
    pointPanelTitle: "Reflex Point Info",
    protectedNote: "🔒 Base textbook reflex points are fixed on the original map.",
    pointDetailPrompt: "Select a Point",
    pointDetailHelp: "Select a custom point to view its anatomical location and notes.",
    progEyebrow: "PROGRAM LIBRARY",
    progTitle: "Systemic Programs",
    progDesc: "Select an anatomical system to view textbook reflex therapy programs.",
    backToSystems: "← 8 Systems",
    sessionEyebrow: "GUIDED SESSION",
    seqEyebrow: "SEQUENCE",
    seqTitle: "Sequence",
    histEyebrow: "HISTORY",
    histTitle: "Treatment Records",
    backupEyebrow: "DATA SAFETY",
    backupTitle: "Backup & Restore",
    backupDesc: "Save custom points and session records into a single JSON backup file.",
    exportBtn: "Export JSON Backup",
    importBtn: "Import JSON Backup",
    clearBtn: "Clear My Records",
    backupNote: "Standard textbook maps will never be deleted.",
    academyTitle: "Academy",
    academyIntro: "Learn textbook content and reinforce it with image quizzes and practical tests.",
    courseProgress: "Course progress",
    academyLearn: "Learn",
    academyQuiz: "Quiz",
    academyPractice: "Practical test",
    academyProgress: "Progress",
    quizTitle: "Find the reflex area",
    practiceTitle: "Urinary practical test",
    minus10: "−10 sec",
    plus10: "+10 sec",
    timeSettings: "Set time",
    timeSettingsTitle: "Set point duration",
    timerHelp: "Set from 1 second to 10 minutes. Adjust within a comfortable range for your goals and response.",
    minutes: "min",
    secondsLabel: "sec",
    setTime: "Configured time",
    currentOnly: "Apply to current point",
    remainingAll: "Apply to all remaining points",
    badgeClinical: "NOVACELL CLINICAL GUIDE",
    badgeReflex: "REFLEX THERAPY",
    welcomeSub: "Hand & Foot Reflexology Learning System",
    welcomeDesc: "Connect hand and foot reflexology maps with textbook-based systemic programs to learn anatomical locations and conduct structured sessions.",
    feat1Title: "8 Reflex Maps",
    feat1Sub: "Hands & feet at a glance",
    feat2Title: "8 Systemic Programs",
    feat2Sub: "Textbook sequences",
    feat3Title: "528Hz Healing Timer",
    feat3Sub: "Chime bell & voice guidance",
    feat4Title: "NovaCell Academy",
    feat4Sub: "Learn, quizzes, & tests",
    welcomeStartBtn: "Start NovaCell Reflex Therapy Guide",
    welcomeNote: "Educational & self-care aid based on textbook materials; does not replace medical diagnosis or therapy.",
    dialogPointEyebrow: "CUSTOM POINT",
    dialogPointTitle: "Add Custom Point",
    dialogPointName: "Point Name",
    dialogPointMemo: "Memo",
    dialogPointHelp: "Click confirm, then tap location on the map.",
    cancel: "Cancel",
    chooseLocation: "Choose Location",
    safetyEyebrow: "SAFETY FIRST",
    safetyTitle: "Safety Guide",
    safetyH1: "When Medical Care Comes First",
    safetyT1: "Do not perform self-care for sudden paralysis, severe chest pain, shortness of breath, altered consciousness, high fever, or acute infection; seek emergency medical care immediately.",
    safetyH2: "When to Discontinue Session",
    safetyT2: "Immediately stop and rest if sharp pain, dizziness, bruising, worsening numbness, or discomfort develops.",
    safetyH3: "Intensity and Duration Guidelines",
    safetyT3: "Start gently at a comfortable 3-4/10 pressure. Practitioners may adjust durations from 1 second to 10 minutes depending on tolerance. This guide does not replace medical diagnosis or therapy.",
    acceptSafety: "I Understand & Accept"
  }
};

const tr = key => uiText[state.lang][key] || uiText.ko[key] || key;
const pointLabel = point => state.lang === "en" ? (pointNamesEn[point] || point) : point;

// ==========================================================================
// Web Audio 528Hz Resonance & Tibetan Singing Bowl Chime Engine
// ==========================================================================
let audioContext = null;
let timerGainNode = null;
let osc528 = null;
let oscSub = null;

function getAudioContext() {
  if (!audioContext) {
    const AC = window.AudioContext || window.webkitAudioContext;
    if (AC) audioContext = new AC();
  }
  if (audioContext && audioContext.state === "suspended") {
    audioContext.resume();
  }
  return audioContext;
}

function setVolume(pct) {
  pct = Math.max(0, Math.min(100, pct));
  state.masterVolume = pct / 100;
  try { localStorage.setItem("novacell_reflex_vol", state.masterVolume.toString()); } catch (e) {}

  const displayPct = state.isAudioMuted ? 0 : pct;
  const slider = $("#timerVolumeSlider");
  if (slider && parseInt(slider.value, 10) !== displayPct) slider.value = displayPct;
  const volPct = $("#volPct");
  if (volPct) volPct.textContent = `${displayPct}%`;

  const volIcon = $("#volIcon");
  if (volIcon) {
    if (state.masterVolume <= 0.01 || state.isAudioMuted) volIcon.textContent = "🔇";
    else if (state.masterVolume < 0.5) volIcon.textContent = "🔉";
    else volIcon.textContent = "🔊";
  }

  if (timerGainNode && audioContext) {
    try {
      const now = audioContext.currentTime;
      timerGainNode.gain.cancelScheduledValues(now);
      const targetGain = (state.isAudioMuted || !state.sound) ? 0.0001 : 0.22 * state.masterVolume;
      timerGainNode.gain.linearRampToValueAtTime(Math.max(0.0001, targetGain), now + 0.08);
    } catch (e) {}
  }
}

function toggleSound() {
  state.sound = !state.sound;
  save();
  updateAccessButtons();
  if (state.sound) {
    playNotice("start");
  } else {
    stop528HzSound();
  }
}

function start528HzSound() {
  if (!state.sound || state.isAudioMuted || state.masterVolume <= 0.01) return;
  try {
    const ctx = getAudioContext();
    if (!ctx) return;
    if (ctx.state === "suspended") {
      ctx.resume().then(() => doStart528(ctx));
    } else {
      doStart528(ctx);
    }
  } catch (e) {
    console.warn("Audio 528Hz error:", e);
  }
}

function doStart528(ctx) {
  if (osc528 && timerGainNode) return;
  stop528HzSound();
  const now = ctx.currentTime;
  const vol = Math.max(0, Math.min(1, state.masterVolume));

  const filter = ctx.createBiquadFilter();
  filter.type = "lowpass";
  filter.frequency.setValueAtTime(850, now);
  filter.connect(ctx.destination);

  const masterGain = ctx.createGain();
  masterGain.gain.cancelScheduledValues(now);
  masterGain.gain.setValueAtTime(0.0001, now);
  masterGain.gain.linearRampToValueAtTime(0.20 * vol, now + 0.35);
  masterGain.connect(filter);
  timerGainNode = masterGain;

  // 528Hz pure sine DNA transformation wave
  const o528 = ctx.createOscillator();
  o528.type = "sine";
  o528.frequency.setValueAtTime(528.0, now);
  o528.connect(masterGain);
  o528.start(now);
  osc528 = o528;

  // Harmonic sub-sine wave (264Hz)
  const oSub = ctx.createOscillator();
  oSub.type = "sine";
  oSub.frequency.setValueAtTime(264.0, now);
  const subGain = ctx.createGain();
  subGain.gain.setValueAtTime(0.08 * vol, now);
  oSub.connect(subGain);
  subGain.connect(masterGain);
  oSub.start(now);
  oscSub = oSub;
}

function stop528HzSound() {
  if (!osc528 && !timerGainNode) return;
  try {
    const ctx = audioContext;
    if (ctx && timerGainNode) {
      const now = ctx.currentTime;
      timerGainNode.gain.cancelScheduledValues(now);
      timerGainNode.gain.linearRampToValueAtTime(0.0001, now + 0.25);
    }
    setTimeout(() => {
      try {
        if (osc528) { osc528.stop(); osc528.disconnect(); osc528 = null; }
        if (oscSub) { oscSub.stop(); oscSub.disconnect(); oscSub = null; }
        if (timerGainNode) { timerGainNode.disconnect(); timerGainNode = null; }
      } catch (e) {}
    }, 280);
  } catch (e) {
    osc528 = null;
    oscSub = null;
    timerGainNode = null;
  }
}

// Tibetan Singing Bowl Chime Bell Sound
function playSingingBowlChime() {
  if (!state.sound || state.isAudioMuted || state.masterVolume <= 0.01) return;
  try {
    const audio = $("#singing-bowl-audio");
    if (audio) {
      audio.volume = Math.max(0, Math.min(1, state.masterVolume));
      audio.currentTime = 0;
      const playPromise = audio.play();
      if (playPromise) {
        playPromise.catch(() => playSyntheticChime());
      }
      return;
    }
  } catch (e) {}
  playSyntheticChime();
}

function playSyntheticChime() {
  try {
    const ctx = getAudioContext();
    if (!ctx) return;
    const now = ctx.currentTime;
    const vol = Math.max(0.1, state.masterVolume);

    // Harmonic Tibetan singing bowl overtone partials: 528Hz, 1056Hz, 1584Hz, 2112Hz
    const freqs = [528, 1056, 1584, 2112];
    const decays = [3.5, 2.8, 1.9, 1.2];
    const amps = [0.35, 0.18, 0.09, 0.04];

    freqs.forEach((f, i) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(f, now);

      gain.gain.setValueAtTime(0.0001, now);
      gain.gain.linearRampToValueAtTime(amps[i] * vol, now + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + decays[i]);

      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now);
      osc.stop(now + decays[i] + 0.1);
    });
  } catch (e) {}
}

function playNotice(type = "start") {
  if (!state.sound || state.isAudioMuted) return;
  if (type === "complete") {
    playSingingBowlChime();
    return;
  }
  try {
    const ctx = getAudioContext();
    if (!ctx) return;
    const at = ctx.currentTime;
    const o = ctx.createOscillator();
    const g = ctx.createGain();
    o.frequency.value = 528;
    o.type = "sine";
    const vol = Math.max(0.1, state.masterVolume);
    g.gain.setValueAtTime(0.0001, at);
    g.gain.exponentialRampToValueAtTime(0.15 * vol, at + 0.03);
    g.gain.exponentialRampToValueAtTime(0.0001, at + 0.18);
    o.connect(g).connect(ctx.destination);
    o.start(at);
    o.stop(at + 0.2);
  } catch (e) {}
}

// ==========================================================================
// Natural Voice TTS Engine (Careful Spacing Between Number & Point Name)
// ==========================================================================
function updateAccessButtons() {
  const isKo = state.lang === "ko";

  // Segmented Language Toggle [ 한글 / ENG ]
  const optKo = $("#langOptKo");
  const optEn = $("#langOptEn");
  if (optKo && optEn) {
    optKo.classList.toggle("active", isKo);
    optEn.classList.toggle("active", !isKo);
  }

  // Voice button
  const voiceLabel = $("#voiceLabel");
  if (voiceLabel) voiceLabel.textContent = isKo ? "음성" : "Voice";
  const voiceBtn = $("#voiceToggle");
  if (voiceBtn) voiceBtn.classList.toggle("active", state.voice);

  // Sound button
  const soundLabel = $("#soundLabel");
  if (soundLabel) soundLabel.textContent = isKo ? "알림" : "Sound";
  const soundBtn = $("#soundToggle");
  if (soundBtn) soundBtn.classList.toggle("active", state.sound);

  // Timer Sound Button
  const timerSoundBtn = $("#timerSoundBtn");
  if (timerSoundBtn) {
    const soundIcon = $("#timerSoundIcon");
    const soundText = $("#timerSoundLabel");
    if (state.sound && !state.isAudioMuted) {
      timerSoundBtn.classList.remove("muted");
      if (soundIcon) soundIcon.textContent = "🔊";
      if (soundText) soundText.textContent = tr("soundOn");
    } else {
      timerSoundBtn.classList.add("muted");
      if (soundIcon) soundIcon.textContent = "🔇";
      if (soundText) soundText.textContent = tr("soundOff");
    }
  }

  // Header status text
  const headerStatusText = $("#headerStatusText");
  if (headerStatusText) {
    headerStatusText.textContent = isKo ? "반사요법 가이드" : "REFLEX THERAPY";
  }
}

function speak(text) {
  if (!state.voice || !("speechSynthesis" in window)) return;
  try {
    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.lang = state.lang === "en" ? "en-US" : "ko-KR";
    u.rate = 0.88; // Comfortable, measured clinical pace
    u.pitch = 1.0;
    window.speechSynthesis.speak(u);
  } catch (e) {
    console.warn("TTS Error:", e);
  }
}

// Natural voice guidance with clear spacing between step number and point name
function speakCurrentPoint() {
  if (!state.activeProgram || !state.voice) return;
  const num = state.step + 1;
  const point = state.activeProgram.points[state.step];
  const name = pointLabel(point);

  // In Korean: Using "1번,   상행결장" forces TTS to speak "일 번", pause naturally, and then clearly enunciate the name!
  // In English: "Step 1,   Ascending colon"
  const phrase = state.lang === "en"
    ? `Step ${num},   ${name}`
    : `${num}번,   ${name}`;

  speak(phrase);
}

// ==========================================================================
// Comprehensive Language Application
// ==========================================================================
function applyLanguage() {
  const isEn = state.lang === "en";
  document.documentElement.lang = isEn ? "en" : "ko";

  // Translate all [data-i18n] elements
  $$("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    if (uiText[state.lang][key]) {
      el.textContent = uiText[state.lang][key];
    }
  });

  // Topbar Link Titles & Content
  const navHome = $("#navHome");
  if (navHome) navHome.querySelector("span").textContent = tr("officialHome");
  const homeGateText = $("#homeGateText");
  if (homeGateText) homeGateText.textContent = tr("mainCover");
  const navHealing = $("#navHealing");
  if (navHealing) navHealing.querySelector("span").textContent = tr("healingApp");
  const safetyBtn = $("#safetyBtn");
  if (safetyBtn) safetyBtn.textContent = tr("safety");
  const selfModeBtn = $("#selfModeBtn");
  if (selfModeBtn) selfModeBtn.textContent = tr("selfMode");
  const proModeBtn = $("#proModeBtn");
  if (proModeBtn) proModeBtn.textContent = tr("proMode");

  // Welcome Gate
  const welcomeDesc = $("#welcomeDesc");
  if (welcomeDesc) {
    welcomeDesc.innerHTML = isEn
      ? "Connect <strong>hand &amp; foot reflexology maps</strong> with textbook-based systemic programs to learn anatomical locations and conduct structured sessions."
      : "<strong>손·발 반사구 지도</strong>와 교재 기반 계통별 프로그램을 연결하여<br>위치를 배우고, 작업 순서에 따라 세션을 진행할 수 있습니다.";
  }

  // Intro Section
  const introHeading = $("#introHeading");
  if (introHeading) introHeading.innerHTML = tr("introHeading");
  const introDesc = $("#introDesc");
  if (introDesc) introDesc.textContent = tr("introDesc");
  const saveStatus = $("#saveStatus");
  if (saveStatus) saveStatus.textContent = state.records.length ? tr("saveStatusDone") : tr("saveStatusReady");
  const saveSub = $("#saveSub");
  if (saveSub) saveSub.textContent = tr("saveSub");

  // Safety Dialog
  const safetyH1 = $("#safetyHeader1"); if (safetyH1) safetyH1.textContent = tr("safetyH1");
  const safetyT1 = $("#safetyText1"); if (safetyT1) safetyT1.textContent = tr("safetyT1");
  const safetyH2 = $("#safetyHeader2"); if (safetyH2) safetyH2.textContent = tr("safetyH2");
  const safetyT2 = $("#safetyText2"); if (safetyT2) safetyT2.textContent = tr("safetyT2");
  const safetyH3 = $("#safetyHeader3"); if (safetyH3) safetyH3.textContent = tr("safetyH3");
  const safetyT3 = $("#safetyText3"); if (safetyT3) safetyT3.textContent = tr("safetyT3");

  // Search box placeholder
  const progSearch = $("#programSearch");
  if (progSearch) {
    progSearch.placeholder = isEn ? "Search systems, programs, and reflex points" : "계통·소분류·작업 포인트 검색";
  }

  // Timer Card UI
  const timerTitle = $("#timer-title"); if (timerTitle) timerTitle.textContent = tr("timerTitle");
  const timerSub = $("#timer-sub"); if (timerSub) timerSub.textContent = tr("timerSub");
  const timerDesc = $("#timerDesc"); if (timerDesc) timerDesc.innerHTML = tr("timerDesc");
  const timerResetLabel = $("#timerResetLabel"); if (timerResetLabel) timerResetLabel.textContent = tr("reset");
  const nextStepLabel = $("#nextStepLabel"); if (nextStepLabel) nextStepLabel.textContent = tr("nextPoint");
  const finishSessionLabel = $("#finishSessionLabel"); if (finishSessionLabel) finishSessionLabel.textContent = tr("finishRecord");

  // Presets in Timer Card
  const p20 = $("#preset-20s"); if (p20) p20.textContent = isEn ? "20s" : "20초";
  const p30 = $("#preset-30s"); if (p30) p30.textContent = isEn ? "30s" : "30초";
  const p1m = $("#preset-1min"); if (p1m) p1m.textContent = isEn ? "1m" : "1분";
  const p3m = $("#preset-3min"); if (p3m) p3m.textContent = isEn ? "3m" : "3분";
  const p5m = $("#preset-5min"); if (p5m) p5m.textContent = isEn ? "5m" : "5분";
  const tMin = $("#timerMinus"); if (tMin) tMin.textContent = tr("minus10");
  const tPlu = $("#timerPlus"); if (tPlu) tPlu.textContent = tr("plus10");
  const tSet = $("#openTimerSettings"); if (tSet) tSet.textContent = isEn ? "Custom" : "설정";

  updateAccessButtons();
  renderMaps();
  renderMapWorkspace();
  renderPrograms(progSearch ? progSearch.value : "");
  renderRecords();
  renderAcademy();

  if (state.activeProgram) {
    renderSession();
  } else {
    renderTimerCard();
  }
}

function toast(message) {
  const el = $("#toast");
  if (!el) return;
  el.textContent = message;
  el.classList.add("show");
  setTimeout(() => el.classList.remove("show"), 1800);
}

// ==========================================================================
// Storage Persistence
// ==========================================================================
function load() {
  try {
    const saved = JSON.parse(localStorage.getItem(key) || "{}");
    state.points = Array.isArray(saved.points) ? saved.points : [];
    state.records = Array.isArray(saved.records) ? saved.records : [];
    state.academy = saved.academy && typeof saved.academy === "object" ? { ...state.academy, ...saved.academy } : state.academy;
    state.academyCourse = saved.academyCourse || "urinary";
    state.mode = saved.mode || "self";
    state.lang = saved.lang || "ko";
    state.voice = saved.voice !== false;
    state.sound = saved.sound !== false;
    state.defaultDuration = clampDuration(saved.defaultDuration || 20);
    state.time = state.defaultDuration;

    const savedVol = parseFloat(localStorage.getItem("novacell_reflex_vol") || "0.70");
    if (!isNaN(savedVol)) state.masterVolume = Math.max(0, Math.min(1, savedVol));
  } catch (e) {
    toast("저장 자료를 읽지 못했습니다.");
  }
}

function save() {
  localStorage.setItem(key, JSON.stringify({
    version: 6,
    savedAt: new Date().toISOString(),
    mode: state.mode,
    lang: state.lang,
    voice: state.voice,
    sound: state.sound,
    defaultDuration: state.defaultDuration,
    points: state.points,
    records: state.records,
    academy: state.academy,
    academyCourse: state.academyCourse
  }));
  const saveStatus = $("#saveStatus");
  if (saveStatus) saveStatus.textContent = tr("saveStatusDone");
}

function setView(view) {
  state.view = view;
  document.body.classList.toggle("session-mode", view === "session");
  $$("[data-view]").forEach(b => b.classList.toggle("active", b.dataset.view === view));
  $$(".view").forEach(v => v.classList.remove("active"));
  $(`#${view}View`).classList.add("active");
  if (view === "records") renderRecords();
  if (view === "academy") renderAcademy();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// ==========================================================================
// Map Views, Workspace & Bilingual Atlas Glossary
// ==========================================================================
function renderMaps() {
  const isEn = state.lang === "en";
  $("#mapButtons").innerHTML = maps.map(m => `
    <button class="map-button ${m.id === state.mapId ? "active" : ""}" data-map="${m.id}">
      <i>${m.icon}</i>
      <span>
        <b>${isEn ? m.en : m.title}</b>
        <small>${isEn ? m.subtitleEn : m.subtitleKo}</small>
      </span>
    </button>
  `).join("");

  $$("[data-map]").forEach(b => b.onclick = () => {
    state.mapId = b.dataset.map;
    state.zoom = 1;
    state.panX = state.panY = 0;
    state.selectedPoint = null;
    renderMaps();
    renderMapWorkspace();
  });

  const index = maps.findIndex(m => m.id === state.mapId);
  $("#mapCount").textContent = `${String(index + 1).padStart(2, "0")} / 08`;
}

function renderMapWorkspace() {
  const m = maps.find(x => x.id === state.mapId);
  if (!m) return;
  const isEn = state.lang === "en";

  // Automatic language sync or explicit user override
  const isMapEn = state.mapLang === "en" || (state.mapLang !== "ko" && isEn);
  const activeImage = (isMapEn && m.imageEn) ? m.imageEn : m.image;

  $("#mapSide").textContent = m.side;
  $("#mapTitle").textContent = isEn ? m.en : m.title;
  $("#mapSource").textContent = isMapEn
    ? (isEn ? `English Anatomical Atlas · Textbook p.${m.page}` : `영문 정밀 해부 지도 · 교재 ${m.page}쪽`)
    : (isEn ? `Textbook p.${m.page} · Base map protected` : `교재 ${m.page}쪽 · 기본 지도 보호`);
  $("#mapImage").src = `./assets/${activeImage}`;
  $("#mapImage").alt = isMapEn ? `${m.en} English reflexology map` : `${m.title} 교재 반사 지도`;

  // Update Map Language Toggle Button in toolbar
  const toggleBtn = $("#mapLangToggleBtn");
  if (toggleBtn) {
    if (isMapEn) {
      toggleBtn.innerHTML = `🇰🇷 ${isEn ? "Textbook (KR)" : "원본 교재 (한글)"}`;
      toggleBtn.title = isEn ? "Switch to original Korean textbook map" : "한글 원본 교재 지도로 전환";
      toggleBtn.classList.add("active-en-map");
    } else {
      toggleBtn.innerHTML = `🇺🇸 ${isEn ? "English Map" : "영문 정밀 지도"}`;
      toggleBtn.title = isEn ? "Switch to 100% translated English map" : "100% 영문 번역 지도로 전환";
      toggleBtn.classList.remove("active-en-map");
    }
  }

  // Update Bilingual Region Banner (발바닥 / 발등 / 손바닥 / 손등)
  const rIcon = $("#mapRegionIcon");
  if (rIcon) rIcon.textContent = m.icon;
  const rTitle = $("#mapRegionTitle");
  if (rTitle) rTitle.textContent = isEn ? m.regionTitleEn : m.regionTitleKo;
  const rSub = $("#mapRegionSub");
  if (rSub) rSub.textContent = isEn ? m.regionSubEn : m.regionSubKo;

  // Render Interactive Bilingual Anatomical Atlas Glossary
  renderMapGlossary(m.surface);

  applyTransform();
  renderCustomPoints();
}

function renderMapGlossary(surfaceKey) {
  const gl = mapGlossaries[surfaceKey] || mapGlossaries.sole;
  const isEn = state.lang === "en";

  const badge = $("#glossaryBadge");
  if (badge) badge.textContent = isEn ? "BILINGUAL ATLAS" : "해부학 대역 사전";
  const heading = $("#glossaryHeading");
  if (heading) heading.textContent = isEn ? gl.titleEn : gl.titleKo;
  const count = $("#glossaryCount");
  if (count) count.textContent = isEn ? `${gl.items.length} Points` : `${gl.items.length}개 반사구`;

  const grid = $("#glossaryGrid");
  if (grid) {
    grid.innerHTML = gl.items.map(item => `
      <div class="glossary-item">
        <span class="glossary-item-primary">${isEn ? item.en : item.ko}</span>
        <span class="glossary-item-secondary">${isEn ? item.ko : item.en}</span>
      </div>
    `).join("");
  }
}

function applyTransform() {
  $("#mapCanvas").style.transform = `translate(${state.panX}px,${state.panY}px) scale(${state.zoom})`;
  $("#zoomValue").textContent = `${Math.round(state.zoom * 100)}%`;
}

function mapPoints() {
  return state.points.filter(p => p.mapId === state.mapId);
}

function renderCustomPoints() {
  const list = mapPoints();
  const isEn = state.lang === "en";
  $("#pointCount").textContent = isEn ? `${list.length} custom` : `${list.length}개 추가점`;
  $("#customLayer").innerHTML = list.map((p, i) => `
    <button class="custom-point ${p.id === state.selectedPoint ? "selected" : ""}" style="left:${p.x}%;top:${p.y}%" data-point="${p.id}" title="${p.name}">
      ${i + 1}
    </button>
  `).join("");

  $$("[data-point]").forEach(el => {
    el.onclick = e => {
      e.stopPropagation();
      selectPoint(el.dataset.point);
    };
    makePointDraggable(el);
  });

  const customPointList = $("#customPointList");
  if (customPointList) {
    customPointList.innerHTML = list.length
      ? list.map(p => `
          <div class="custom-item">
            <button data-select="${p.id}" style="color:inherit;text-align:left">
              <strong>${p.name}</strong>
              <small>${p.memo || (isEn ? "No notes" : "메모 없음")}</small>
            </button>
            <button data-delete="${p.id}" aria-label="삭제">×</button>
          </div>
        `).join("")
      : `<p style="color:var(--muted);font-size:.82rem">${isEn ? "No custom points added yet." : "아직 추가한 포인트가 없습니다."}</p>`;

    $$("[data-select]").forEach(b => b.onclick = () => selectPoint(b.dataset.select));
    $$("[data-delete]").forEach(b => b.onclick = () => deletePoint(b.dataset.delete));
  }
}

function selectPoint(id) {
  state.selectedPoint = id;
  const p = state.points.find(x => x.id === id);
  if (!p) return;
  const detail = $("#pointDetail");
  detail.classList.remove("empty");
  detail.innerHTML = state.lang === "en"
    ? `<strong>${p.name}</strong><p>${p.memo || "No notes available."}</p><small>Pos X ${p.x.toFixed(1)}% · Y ${p.y.toFixed(1)}% · Custom Point</small>`
    : `<strong>${p.name}</strong><p>${p.memo || "메모가 없습니다."}</p><small>위치 X ${p.x.toFixed(1)}% · Y ${p.y.toFixed(1)}% · 사용자 추가점</small>`;
  renderCustomPoints();
}

function deletePoint(id) {
  if (state.mode !== "pro") {
    toast(state.lang === "en" ? "Custom points can only be deleted in Pro mode." : "전문가 모드에서만 삭제할 수 있습니다.");
    return;
  }
  state.points = state.points.filter(p => p.id !== id);
  state.selectedPoint = null;
  save();
  renderCustomPoints();
  toast(state.lang === "en" ? "Custom point deleted." : "사용자 포인트를 삭제했습니다.");
}

function makePointDraggable(el) {
  let active = false;
  el.onpointerdown = e => {
    if (state.mode !== "pro") return;
    active = true;
    el.setPointerCapture?.(e.pointerId);
    e.stopPropagation();
  };
  el.onpointermove = e => {
    if (!active) return;
    const rect = $("#mapCanvas").getBoundingClientRect();
    const p = state.points.find(x => x.id === el.dataset.point);
    if (!p) return;
    p.x = Math.max(0, Math.min(100, (e.clientX - rect.left) / rect.width * 100));
    p.y = Math.max(0, Math.min(100, (e.clientY - rect.top) / rect.height * 100));
    el.style.left = `${p.x}%`;
    el.style.top = `${p.y}%`;
  };
  el.onpointerup = () => {
    if (active) {
      active = false;
      save();
      renderCustomPoints();
    }
  };
}

function setZoom(next) {
  state.zoom = Math.max(1, Math.min(2.2, next));
  applyTransform();
}

function setupMapPan() {
  const stage = $("#mapStage");
  let start = null;
  stage.onpointerdown = e => {
    if (e.target.closest(".custom-point")) return;
    if (state.pendingPoint) {
      placePoint(e);
      return;
    }
    start = { x: e.clientX, y: e.clientY, px: state.panX, py: state.panY };
    stage.setPointerCapture?.(e.pointerId);
    stage.classList.add("dragging");
  };
  stage.onpointermove = e => {
    if (!start) return;
    state.panX = start.px + e.clientX - start.x;
    state.panY = start.py + e.clientY - start.y;
    applyTransform();
  };
  stage.onpointerup = () => {
    start = null;
    stage.classList.remove("dragging");
  };
  stage.onwheel = e => {
    e.preventDefault();
    setZoom(state.zoom + (e.deltaY < 0 ? 0.1 : -0.1));
  };
}

function placePoint(e) {
  const rect = $("#mapCanvas").getBoundingClientRect();
  state.points.push({
    id: `p_${Date.now()}`,
    mapId: state.mapId,
    name: state.pendingPoint.name,
    memo: state.pendingPoint.memo,
    x: Math.max(0, Math.min(100, (e.clientX - rect.left) / rect.width * 100)),
    y: Math.max(0, Math.min(100, (e.clientY - rect.top) / rect.height * 100))
  });
  state.pendingPoint = null;
  $("#mapStage").style.cursor = "grab";
  save();
  renderCustomPoints();
  toast(state.lang === "en" ? "Custom point added." : "사용자 포인트를 추가했습니다.");
}

// ==========================================================================
// Programs & Systemic Library
// ==========================================================================
function programCard(p) {
  const sys = systems.find(s => s.id === p.systemId);
  const en = state.lang === "en";
  const sysTitle = en ? (sys?.en || p.systemEn || p.system) : (sys?.title || p.system);
  const pSummary = en ? (p.summaryEn || p.summary) : p.summary;
  const pCaution = en ? (p.cautionEn || p.caution) : p.caution;

  return `
    <article class="program-card">
      <div class="program-heading">
        <span class="program-icon">${sys?.icon || "✦"}</span>
        <div>
          <small>${sysTitle} · ${en ? `Textbook p.${p.page}` : `교재 ${p.page}쪽`}</small>
          <h3>${en ? p.en : p.title}</h3>
          <em>${en ? p.title : p.en}</em>
        </div>
      </div>
      <p>${pSummary}</p>
      ${pCaution ? `<p class="program-caution" style="font-size:0.75rem;color:#f59e0b;margin:3px 0 6px;">⚠ ${pCaution}</p>` : ""}
      <div class="program-preview point-only-preview" aria-label="${en ? "Numbered reflex maps" : "작업 순서에 해당하는 번호 표시 지도"}">
        <figure><img src="./assets/${p.footMap}" alt="${en ? p.en : p.title}"><figcaption>${tr("footMap")}</figcaption></figure>
        <figure><img src="./assets/${p.handMap}" alt="${en ? p.en : p.title}"><figcaption>${tr("handMap")}</figcaption></figure>
      </div>
      <div class="program-points">
        ${p.points.map((x, i) => `<span>${i + 1}. ${pointLabel(x)}</span>`).join("")}
      </div>
      <button class="primary" data-start="${p.id}">${en ? "Start Guided Session" : "작업점 지도로 세션 시작"}</button>
    </article>
  `;
}

function renderPrograms(query = "") {
  const q = query.trim().toLowerCase();
  const en = state.lang === "en";
  const grid = $("#systemGrid");
  const head = $("#subcategoryHead");
  const list = $("#programGrid");

  const matches = programs.filter(p =>
    `${p.system} ${p.systemEn || ""} ${p.title} ${p.en} ${p.summary} ${p.summaryEn || ""} ${p.points.join(" ")} ${p.points.map(x => pointNamesEn[x] || "").join(" ")}`
      .toLowerCase()
      .includes(q)
  );

  if (q) {
    state.selectedSystem = null;
    grid.hidden = true;
    head.hidden = false;
    $("#subcategoryEyebrow").textContent = "SEARCH RESULTS";
    $("#subcategoryTitle").textContent = en ? `${matches.length} results` : `검색 결과 ${matches.length}개`;
    $("#subcategorySummary").textContent = en ? "Results from systems, programs, and reflex points." : "계통명·소분류·작업 포인트에서 찾은 결과입니다.";
    list.innerHTML = matches.map(programCard).join("") || `<p class="empty-result">${en ? "No matching programs found." : "검색 결과가 없습니다."}</p>`;
  } else if (state.selectedSystem) {
    const sys = systems.find(s => s.id === state.selectedSystem);
    grid.hidden = true;
    head.hidden = false;
    $("#subcategoryEyebrow").textContent = `${sys.no} · ${(en ? sys.en : sys.title).toUpperCase()}`;
    $("#subcategoryTitle").textContent = en ? `${sys.en} · ${sys.count} programs` : `${sys.title} 소분류 ${sys.count}개`;
    $("#subcategorySummary").textContent = en ? (sys.summaryEn || sys.summary) : sys.summary;
    list.innerHTML = programs.filter(p => p.systemId === sys.id).map(programCard).join("");
  } else {
    grid.hidden = false;
    head.hidden = true;
    list.innerHTML = "";
    grid.innerHTML = systems.map(s => `
      <button class="system-card" data-system="${s.id}">
        <span class="system-no">${s.no}</span>
        <figure class="system-image">
          <img src="./assets/${s.image}" alt="${en ? s.en : s.title} ${en ? "anatomy" : "해부학 이미지"}" loading="lazy">
        </figure>
        <div class="system-card-copy">
          <i>${s.icon}</i>
          <strong>${en ? s.en : s.title}</strong>
          <small>${en ? s.title : s.en}</small>
          <p>${en ? (s.summaryEn || s.summary) : s.summary}</p>
          <b>${en ? `${s.count} programs →` : `${s.count}개 소분류 →`}</b>
        </div>
      </button>
    `).join("");
  }

  $$("[data-system]").forEach(b => b.onclick = () => {
    state.selectedSystem = b.dataset.system;
    renderPrograms();
    window.scrollTo({ top: $("#programsView").offsetTop - 80, behavior: "smooth" });
  });

  $$("[data-start]").forEach(b => b.onclick = () => startProgram(b.dataset.start));
}

// ==========================================================================
// Session View, Guided Progression & 528Hz Timer Controls
// ==========================================================================
function clampDuration(value) {
  return Math.max(1, Math.min(600, Math.round(Number(value) || 1)));
}

function pointDuration(index = state.step) {
  return clampDuration(state.sessionDurations[index] || state.defaultDuration);
}

function durationLabel(value) {
  const m = Math.floor(value / 60);
  const s = value % 60;
  return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
}

function syncTimerSettings(value = pointDuration()) {
  const total = clampDuration(value);
  const minInput = $("#timerMinutes");
  const secInput = $("#timerSeconds");
  if (minInput) minInput.value = Math.floor(total / 60);
  if (secInput) secInput.value = total % 60;
  const preview = $("#timerSettingPreview");
  if (preview) preview.textContent = durationLabel(total);

  $$("[data-timer-preset]").forEach(b => b.classList.toggle("active", Number(b.dataset.timerPreset) === total));
}

function timerInputValue() {
  const minutes = Math.max(0, Math.min(10, Number($("#timerMinutes").value) || 0));
  const seconds = Math.max(0, Math.min(59, Number($("#timerSeconds").value) || 0));
  return clampDuration(minutes * 60 + seconds);
}

function openTimerSettings() {
  if (!state.activeProgram) {
    toast(tr("chooseProgram"));
    setView("programs");
    return;
  }
  syncTimerSettings(state.time || pointDuration());
  $("#timerSettingsDialog").showModal();
}

function applyDuration(scope) {
  const total = timerInputValue();
  state.defaultDuration = total;
  if (scope === "remaining") {
    for (let i = state.step; i < state.sessionDurations.length; i++) {
      state.sessionDurations[i] = total;
    }
  } else {
    state.sessionDurations[state.step] = total;
  }
  state.time = total;
  stopTimer();
  save();
  renderSession();
  $("#timerSettingsDialog").close();
  toast(state.lang === "en"
    ? (scope === "remaining" ? `Remaining points set to ${durationLabel(total)}.` : `Current point set to ${durationLabel(total)}.`)
    : (scope === "remaining" ? `남은 포인트를 ${durationLabel(total)}로 설정했습니다.` : `현재 포인트를 ${durationLabel(total)}로 설정했습니다.`));
}

function adjustCurrentDuration(delta) {
  if (!state.activeProgram) {
    toast(tr("chooseProgram"));
    return;
  }
  const total = clampDuration(state.time + delta);
  state.sessionDurations[state.step] = total;
  state.time = total;
  stopTimer();
  renderSession();
  toast(state.lang === "en" ? `Point duration: ${durationLabel(total)}` : `현재 포인트 ${durationLabel(total)}`);
}

function applyPreset(sec) {
  sec = clampDuration(sec);
  state.defaultDuration = sec;
  state.sessionDurations[state.step] = sec;
  state.time = sec;
  stopTimer();
  renderSession();
  toast(state.lang === "en" ? `Duration set to ${durationLabel(sec)}` : `${durationLabel(sec)}로 설정되었습니다.`);
}

function startProgram(id) {
  state.activeProgram = programs.find(p => p.id === id);
  if (!state.activeProgram) return;

  state.sessionMap = "foot";
  resetSessionMap();
  state.step = 0;
  state.sessionDurations = state.activeProgram.points.map(() => state.defaultDuration);
  state.time = pointDuration(0);
  stopTimer();
  renderSession();
  setView("session");
  speakCurrentPoint();
}

function applySessionMapTransform() {
  const canvas = $("#sessionMapCanvas");
  if (!canvas) return;
  canvas.style.transform = state.sessionFit ? "none" : `translate(${state.sessionPanX}px,${state.sessionPanY}px) scale(${state.sessionZoom})`;
  const zoomVal = $("#sessionZoomValue");
  if (zoomVal) zoomVal.textContent = state.sessionFit ? tr("full") : `${Math.round(state.sessionZoom * 100)}%`;
}

function resetSessionMap() {
  state.sessionFit = true;
  state.sessionZoom = 1;
  state.sessionPanX = 0;
  state.sessionPanY = 0;
  applySessionMapTransform();
}

function setSessionZoom(next) {
  state.sessionFit = false;
  state.sessionZoom = Math.max(0.6, Math.min(3, next));
  if (state.sessionZoom <= 1) {
    state.sessionPanX = 0;
    state.sessionPanY = 0;
  }
  applySessionMapTransform();
}

function renderSessionMap() {
  const p = state.activeProgram;
  if (!p) return;
  const isFoot = state.sessionMap === "foot";
  const label = isFoot ? tr("footWork") : tr("handWork");
  const title = state.lang === "en" ? p.en : p.title;
  const image = $("#sessionMapImage");
  if (image) {
    image.onload = () => {
      if (state.sessionFit) applySessionMapTransform();
    };
    image.src = `./assets/${isFoot ? p.footMap : p.handMap}`;
    image.alt = `${title} ${label}`;
  }
  const mapTitle = $("#sessionMapTitle");
  if (mapTitle) mapTitle.textContent = `${title} · ${label}`;

  const activePoint = $("#sessionActivePoint");
  if (activePoint) {
    activePoint.textContent = `${tr("current")} ${state.step + 1}. ${pointLabel(p.points[state.step])}`;
  }

  const caption = $("#sessionMapCaption");
  if (caption) {
    caption.textContent = state.lang === "en"
      ? "Upper and lower reflex projections shown. Zoom and drag to inspect numbered areas."
      : "전체 지도가 표시됩니다. 마우스나 손가락으로 움직일 수 있습니다.";
  }

  $$("[data-session-map]").forEach(b => b.classList.toggle("active", b.dataset.sessionMap === state.sessionMap));
  applySessionMapTransform();
}

function setupSessionMapPan() {
  const frame = $("#sessionMapFrame");
  if (!frame) return;
  let start = null;
  frame.onpointerdown = e => {
    start = { x: e.clientX, y: e.clientY, px: state.sessionPanX, py: state.sessionPanY };
    frame.setPointerCapture?.(e.pointerId);
    frame.classList.add("dragging");
  };
  frame.onpointermove = e => {
    if (!start) return;
    state.sessionFit = false;
    state.sessionPanX = start.px + e.clientX - start.x;
    state.sessionPanY = start.py + e.clientY - start.y;
    applySessionMapTransform();
  };
  frame.onpointerup = frame.onpointercancel = () => {
    start = null;
    frame.classList.remove("dragging");
  };
  frame.onwheel = e => {
    e.preventDefault();
    setSessionZoom(state.sessionZoom + (e.deltaY < 0 ? 0.15 : -0.15));
  };
}

function pointMethod(point, p) {
  if (state.lang === "en") {
    if (p.id === "urinary-foot") return "Move slowly along the mapped path with gentle thumb walking.";
    if (["횡격막", "식도", "상행결장", "횡행결장", "하행결장", "S자 결장", "척추 전체", "경추", "흉추", "요추", "허리", "등 상부", "폐", "림프", "상부 림프", "상부 림프계", "나팔관"].includes(point)) {
      return "Follow the numbered line or pathway slowly using rhythmic thumb walking.";
    }
    return "Apply gradual thumb pressure on the numbered area and rotate gently in small circles.";
  }
  if (p.id === "reproductive-basic") return "엄지 걷기 후 발목·손목의 민감한 부위는 가운데손가락으로 가볍게 누르거나 작게 회전합니다.";
  if (p.id === "urinary-foot") return "지도 경로를 따라 엄지 걷기로 천천히 진행합니다.";
  if (["횡격막", "식도", "상행결장", "횡행결장", "하행결장", "S자 결장", "척추 전체", "경추", "흉추", "요추", "허리", "등 상부", "폐", "림프", "상부 림프", "상부 림프계", "나팔관"].includes(point)) {
    return "번호로 표시된 선이나 영역을 따라 엄지 걷기로 천천히 이동합니다.";
  }
  return "번호 표시점을 엄지로 천천히 누른 뒤 작은 원을 그리듯 부드럽게 회전합니다."
}

function pointSide(point, p) {
  if (p.id === "stroke-epilepsy") {
    return state.lang === "en" ? "CP/epilepsy: both feet · Stroke: opposite foot" : "뇌성마비·간질: 양발 / 뇌졸중: 마비 반대쪽 발";
  }
  const guide = pointGuides[point] || {};
  if (state.lang === "en") {
    return guide.sideEn || tr("both");
  }
  return guide.side || "양쪽";
}

function renderSession() {
  const p = state.activeProgram;
  if (!p) return;
  const en = state.lang === "en";
  const title = en ? p.en : p.title;

  const sessionTitle = $("#sessionTitle");
  if (sessionTitle) sessionTitle.textContent = title;

  const sessionSummary = $("#sessionSummary");
  if (sessionSummary) {
    sessionSummary.textContent = en
      ? (p.cautionEn || p.summaryEn || "Use comfortable pressure. Urgent symptoms require medical care first.")
      : (p.caution || p.summary);
  }

  // Sequence List
  const seqList = $("#sequenceList");
  if (seqList) {
    seqList.innerHTML = p.points.map((x, i) => `
      <li class="${i === state.step ? "active" : ""}">
        <span class="step-num">${i + 1}.</span>
        <strong class="step-name">${pointLabel(x)}</strong>
        <small>${durationLabel(pointDuration(i))}</small>
      </li>
    `).join("");
  }

  const current = p.points[state.step];
  const guide = pointGuides[current] || { location: "현재 번호 지도에 표시된 영역", locationEn: "Mapped area on active chart" };
  const light = p.id === "osteoarthritis" || p.id === "reproductive-basic";
  const intensity = light ? tr("veryLight") : tr("gentle");
  const repeat = p.id === "facial-palsy" ? tr("frequent") : tr("repeat");
  const locationText = en
    ? `${guide.locationEn || "Check numbered location"} · Check point ${state.step + 1} on hand/foot map.`
    : `${guide.location} · 지도 ${state.step + 1}번을 함께 확인하세요.`;
  const expert = state.mode === "pro" ? `<p class="step-method"><b>${tr("method")}</b> ${pointMethod(current, p)}</p>` : "";

  const currentStep = $("#currentStep");
  if (currentStep) {
    currentStep.innerHTML = `
      <span>STEP ${state.step + 1} · ${tr("page")} ${p.page}</span>
      <strong>${state.step + 1}. ${pointLabel(current)}</strong>
      <div class="step-meta">
        <i>${pointSide(current, p)}</i>
        <i>${intensity}</i>
        <i>${durationLabel(pointDuration())}</i>
        <i>${repeat}</i>
      </div>
      <p class="step-location"><b>${tr("location")}</b> ${locationText}</p>
      ${expert}
    `;
  }

  const stepCounter = $("#stepCounter");
  if (stepCounter) stepCounter.textContent = `${state.step + 1} / ${p.points.length}`;

  const progressBar = $("#progressBar");
  if (progressBar) progressBar.style.width = `${((state.step + 1) / p.points.length) * 100}%`;

  renderSessionMap();
  renderTimerCard();
}

function renderTimerCard() {
  const p = state.activeProgram;
  const currentPoint = p ? p.points[state.step] : null;

  // Active Point Banner inside Timer
  const hpCode = $("#timer-hp-code");
  if (hpCode) {
    hpCode.textContent = p ? `STEP ${state.step + 1} / ${p.points.length}` : "READY";
  }
  const hpTitle = $("#timer-hp-title");
  if (hpTitle) {
    hpTitle.textContent = currentPoint ? pointLabel(currentPoint) : (state.lang === "en" ? "Select a Program" : "프로그램을 선택하세요");
  }

  // Timer Display
  const display = $("#timerDisplay");
  if (display) display.textContent = durationLabel(state.time);

  // Status Badge & Freq Pulse
  const badge = $("#timer-status-badge");
  const pulseDot = $("#freq-pulse-dot");
  const freqLabel = $("#freq-label");
  const timerBtnLabel = $("#timerBtnLabel");
  const playIcon = $("#timerPlayIcon");
  const toggleBtn = $("#timerToggle");

  if (state.timer) {
    state.timerStatus = "running";
    if (badge) { badge.textContent = tr("statusRunning"); badge.className = "timer-status-badge running"; }
    if (pulseDot) pulseDot.className = "freq-pulse-dot pulsing";
    if (freqLabel) freqLabel.textContent = tr("freqRunning");
    if (timerBtnLabel) timerBtnLabel.textContent = tr("pause");
    if (playIcon) playIcon.textContent = "⏸";
    if (toggleBtn) { toggleBtn.classList.remove("paused"); }
  } else if (state.time === 0) {
    state.timerStatus = "finished";
    if (badge) { badge.textContent = tr("statusFinished"); badge.className = "timer-status-badge finished"; }
    if (pulseDot) pulseDot.className = "freq-pulse-dot";
    if (freqLabel) freqLabel.textContent = tr("freqFinished");
    if (timerBtnLabel) timerBtnLabel.textContent = tr("restart");
    if (playIcon) playIcon.textContent = "↺";
    if (toggleBtn) { toggleBtn.classList.add("paused"); }
  } else if (state.timerStatus === "paused") {
    if (badge) { badge.textContent = tr("statusPaused"); badge.className = "timer-status-badge paused"; }
    if (pulseDot) pulseDot.className = "freq-pulse-dot";
    if (freqLabel) freqLabel.textContent = tr("freqPaused");
    if (timerBtnLabel) timerBtnLabel.textContent = tr("restart");
    if (playIcon) playIcon.textContent = "▶";
    if (toggleBtn) { toggleBtn.classList.add("paused"); }
  } else {
    state.timerStatus = "ready";
    if (badge) { badge.textContent = tr("statusReady"); badge.className = "timer-status-badge"; }
    if (pulseDot) pulseDot.className = "freq-pulse-dot";
    if (freqLabel) freqLabel.textContent = tr("freqReady");
    if (timerBtnLabel) timerBtnLabel.textContent = tr("start");
    if (playIcon) playIcon.textContent = "▶";
    if (toggleBtn) { toggleBtn.classList.remove("paused"); }
  }

  // Progress Bar Gauge
  const total = pointDuration();
  const fillPct = total > 0 ? Math.max(0, Math.min(100, (state.time / total) * 100)) : 100;
  const barFill = $("#timerBarFill");
  if (barFill) barFill.style.width = `${fillPct}%`;

  // Update preset active classes
  $$(".timer-preset-group .preset-btn").forEach(btn => {
    const sec = Number(btn.dataset.sec);
    btn.classList.toggle("active", sec === total);
  });
}

function stopTimer() {
  if (state.timer) {
    clearInterval(state.timer);
    state.timer = null;
  }
  stop528HzSound();
  renderTimerCard();
}

function toggleTimer() {
  if (!state.activeProgram) {
    toast(tr("chooseProgram"));
    setView("programs");
    return;
  }

  if (state.timer) {
    // Pause
    state.timerStatus = "paused";
    stopTimer();
    return;
  }

  if (state.time <= 0) {
    state.time = pointDuration();
  }

  // Start 528Hz timer & resonance
  playNotice("start");
  start528HzSound();
  state.timerStatus = "running";

  state.timer = setInterval(() => {
    state.time--;
    renderTimerCard();

    if (state.time <= 0) {
      stopTimer();
      state.timerStatus = "finished";
      renderTimerCard();

      // Completion Singing Bowl Chime & Voice Notice
      playNotice("complete");
      toast(tr("completed"));
      speak(tr("completed"));
    }
  }, 1000);

  renderTimerCard();
}

function resetTimer() {
  stopTimer();
  state.time = pointDuration();
  state.timerStatus = "ready";
  renderTimerCard();
  toast(tr("reset"));
}

function nextStep() {
  if (!state.activeProgram) return;
  if (state.step < state.activeProgram.points.length - 1) {
    state.step++;
    stopTimer();
    state.time = pointDuration();
    state.timerStatus = "ready";
    renderSession();
    speakCurrentPoint();
  } else {
    toast(tr("last"));
  }
}

function finishSession() {
  if (!state.activeProgram) {
    toast(state.lang === "en" ? "No active session." : "진행 중인 세션이 없습니다.");
    return;
  }
  stopTimer();
  const durations = state.sessionDurations.map(clampDuration);
  state.records.unshift({
    id: Date.now(),
    date: new Date().toISOString(),
    program: state.activeProgram.title,
    programEn: state.activeProgram.en,
    steps: state.activeProgram.points.length,
    durations,
    totalSeconds: durations.reduce((a, b) => a + b, 0)
  });
  save();
  playNotice("complete");
  toast(tr("sessionSaved"));
  setView("records");
}

function renderRecords() {
  const en = state.lang === "en";
  const count = $("#recordCount");
  if (count) count.textContent = en ? `${state.records.length} sessions` : `${state.records.length}회`;

  const list = $("#recordList");
  if (list) {
    list.innerHTML = state.records.length
      ? state.records.map(r => `
          <div class="record-item">
            <div>
              <strong>${en ? (r.programEn || r.program) : r.program}</strong>
              <small>${new Date(r.date).toLocaleString(en ? "en-US" : "ko-KR")}${r.totalSeconds ? ` · ${en ? "Planned" : "설정"} ${durationLabel(r.totalSeconds)}` : ""}</small>
            </div>
            <span>${r.steps} ${en ? "points" : "포인트"}</span>
          </div>
        `).join("")
      : `<p style="color:var(--muted)">${en ? "No treatment records yet." : "아직 저장된 치료 기록이 없습니다."}</p>`;
  }
}

function exportData() {
  const blob = new Blob([JSON.stringify({
    app: "NovaCell Reflex Therapy APP",
    version: 6,
    exportedAt: new Date().toISOString(),
    points: state.points,
    records: state.records,
    academy: state.academy,
    academyCourse: state.academyCourse
  }, null, 2)], { type: "application/json" });

  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = `NovaCell_Reflex_Backup_${new Date().toISOString().slice(0, 10)}.json`;
  a.click();
  URL.revokeObjectURL(a.href);
  toast(state.lang === "en" ? "Backup file exported." : "백업 파일을 저장했습니다.");
}

function importData(file) {
  const reader = new FileReader();
  reader.onload = () => {
    try {
      const data = JSON.parse(reader.result);
      if (!Array.isArray(data.points) || !Array.isArray(data.records)) throw Error();
      state.points = data.points;
      state.records = data.records;
      if (data.academy) state.academy = { ...state.academy, ...data.academy };
      if (data.academyCourse && academyCourses[data.academyCourse]) state.academyCourse = data.academyCourse;
      save();
      renderMaps();
      renderMapWorkspace();
      renderRecords();
      renderAcademy();
      toast(state.lang === "en" ? "Backup successfully restored." : "백업을 복원했습니다.");
    } catch (e) {
      toast(state.lang === "en" ? "Invalid backup file." : "올바른 백업 파일이 아닙니다.");
    }
  };
  reader.readAsText(file);
}

// ==========================================================================
// Academy Learning, Quizzes & Practical Exams
// ==========================================================================
const academyCourses = {
  urinary: {
    no: "08",
    titleKo: "비뇨계 반사요법",
    titleEn: "Urinary Reflexology",
    introKo: "신장·방광·부신 반사구의 위치와 작업 순서를 학습합니다.",
    introEn: "Learn the locations and sequence for kidney, bladder, and adrenal reflex areas.",
    sequenceKo: "방광 → 신장 → 부신",
    sequenceEn: "bladder → kidney → adrenal",
    lessons: [
      { ko: "과정 안내", en: "Course overview", page: "90–91", image: "p90-feet.webp", titleKo: "비뇨계 반사요법의 핵심", titleEn: "Urinary reflexology essentials", bodyKo: "방광, 신장, 부신 반사구를 배우고 그림에서 직접 찾습니다. 번호는 작업 순서를 나타냅니다.", bodyEn: "Learn the bladder, kidney, and adrenal reflex areas and find them directly on the image." },
      { ko: "1. 방광 반사구", en: "1. Bladder area", page: "90", image: "p90-feet.webp", titleKo: "① 방광 반사구", titleEn: "① Bladder reflex area", bodyKo: "발바닥 그림의 뒤꿈치 안쪽 가까이에 표시된 ①번 영역입니다.", bodyEn: "Area ① near the inner heel on the sole." },
      { ko: "2. 신장 반사구", en: "2. Kidney area", page: "90", image: "p90-feet.webp", titleKo: "② 신장 반사구", titleEn: "② Kidney reflex area", bodyKo: "발바닥 중앙보다 약간 위쪽에 표시된 ②번 영역입니다.", bodyEn: "Area ② slightly above the center of the sole." },
      { ko: "3. 부신·안전", en: "3. Adrenal & safety", page: "91", image: "p91-feet.webp", titleKo: "① 부신 반사구와 안전", titleEn: "① Adrenal area and safety", bodyKo: "발열, 혈뇨, 심한 옆구리 통증은 반사요법보다 의료기관 진료가 우선입니다.", bodyEn: "Fever, blood in urine, or severe flank pain requires medical care first." }
    ],
    quiz: [
      { type: "image", questionKo: "신장 반사구 ②번을 그림에서 직접 누르세요.", questionEn: "Tap kidney reflex area ② on the sole image.", image: "p90-feet.webp", target: "kidney" },
      { type: "choice", questionKo: "뒤꿈치 안쪽 가까이에 있는 ①번 반사구의 명칭은 무엇입니까?", questionEn: "What is reflex area ① near the inner heel?", optionsKo: ["방광", "신장", "부신"], optionsEn: ["Bladder", "Kidney", "Adrenal"], answer: 0 },
      { type: "choice", questionKo: "발열·혈뇨·심한 옆구리 통증이 있을 때 가장 먼저 해야 할 일은 무엇입니까?", questionEn: "What comes first with acute urinary symptoms?", optionsKo: ["강하게 자극하기", "의료기관 진료 받기", "오랫동안 마사지하기"], optionsEn: ["Strong pressure", "Seek medical care", "Massage longer"], answer: 1 }
    ],
    practice: [
      { nameKo: "방광 반사구", nameEn: "Bladder area", image: "p90-feet.webp", target: "bladder", score: 40 },
      { nameKo: "신장 반사구", nameEn: "Kidney area", image: "p90-feet.webp", target: "kidney", score: 35 },
      { nameKo: "부신 반사구", nameEn: "Adrenal area", image: "p91-feet.webp", target: "adrenal", score: 25 }
    ]
  },
  cardio: {
    no: "01",
    titleKo: "심혈관계 반사요법",
    titleEn: "Cardiovascular Reflexology",
    introKo: "뇌간·부신·횡격막·심장 반사구와 5개 교재 프로그램을 학습합니다.",
    introEn: "Learn brainstem, adrenal, diaphragm, and heart reflex areas with five textbook programs.",
    sequenceKo: "뇌간 → 부신 → 횡격막 → 심장",
    sequenceEn: "brainstem → adrenal → diaphragm → heart",
    lessons: [
      { ko: "과정 안내", en: "Course overview", page: "48–52", image: "p48-feet.webp", titleKo: "심혈관계 5개 프로그램", titleEn: "Five cardiovascular programs", bodyKo: "심혈관계 발 반사요법, 부정맥·울혈성 심부전, 고혈압, 심장마비, 저혈압 프로그램을 교재 그림과 함께 학습합니다.", bodyEn: "Study foot reflexology, arrhythmia/heart failure, hypertension, heart attack, and hypotension programs." },
      { ko: "1. 뇌간 반사구", en: "1. Brainstem area", page: "48", image: "p48-feet.webp", titleKo: "① 뇌간 반사구", titleEn: "① Brainstem reflex area", bodyKo: "양쪽 엄지발가락 안쪽에 표시된 ①번 영역을 확인합니다.", bodyEn: "Find area ① on the inner side of both big toes." },
      { ko: "2. 부신 반사구", en: "2. Adrenal area", page: "48", image: "p48-feet.webp", titleKo: "② 부신 반사구", titleEn: "② Adrenal reflex area", bodyKo: "발바닥 중앙의 안쪽 부근에 표시된 ②번 영역입니다.", bodyEn: "Find area ② near the inner middle of the sole." },
      { ko: "3. 횡격막 반사구", en: "3. Diaphragm area", page: "48", image: "p48-feet.webp", titleKo: "③ 횡격막 반사구", titleEn: "③ Diaphragm reflex area", bodyKo: "앞발과 중간발 사이를 가로지르는 ③번 선을 확인합니다.", bodyEn: "Find line ③ crossing between the forefoot and midfoot." },
      { ko: "4. 심장·안전", en: "4. Heart & safety", page: "48", image: "p48-hands.webp", titleKo: "④ 심장 반사구와 안전", titleEn: "④ Heart area and safety", bodyKo: "④번 심장 반사구를 확인합니다. 갑작스러운 흉통, 호흡곤란, 식은땀, 의식 변화는 즉시 응급진료가 우선입니다.", bodyEn: "Find heart area ④. Sudden chest pain, breathing difficulty, cold sweat, or altered consciousness requires emergency care." }
    ],
    quiz: [
      { type: "image", questionKo: "심장 반사구 ④번을 발 그림에서 직접 누르세요.", questionEn: "Tap heart reflex area ④ on the foot image.", image: "p48-feet.webp", target: "heart" },
      { type: "choice", questionKo: "심혈관계 기본 작업 순서로 알맞은 것은 무엇입니까?", questionEn: "Which is the correct basic sequence?", optionsKo: ["뇌간 → 부신 → 횡격막 → 심장", "심장 → 뇌간 → 부신 → 횡격막", "부신 → 심장 → 뇌간 → 횡격막"], optionsEn: ["Brainstem → adrenal → diaphragm → heart", "Heart → brainstem → adrenal → diaphragm", "Adrenal → heart → brainstem → diaphragm"], answer: 0 },
      { type: "choice", questionKo: "갑작스러운 흉통과 호흡곤란이 생기면 무엇이 우선입니까?", questionEn: "What comes first with sudden chest pain and breathing difficulty?", optionsKo: ["반사구를 강하게 누르기", "즉시 응급진료 받기", "30분간 계속 자극하기"], optionsEn: ["Press strongly", "Seek emergency care", "Continue for 30 minutes"], answer: 1 }
    ],
    practice: [
      { nameKo: "뇌간 반사구", nameEn: "Brainstem area", image: "p48-feet.webp", target: "brainstem", score: 25 },
      { nameKo: "부신 반사구", nameEn: "Adrenal area", image: "p48-feet.webp", target: "cardioAdrenal", score: 25 },
      { nameKo: "횡격막 반사구", nameEn: "Diaphragm area", image: "p48-feet.webp", target: "diaphragm", score: 25 },
      { nameKo: "심장 반사구", nameEn: "Heart area", image: "p48-feet.webp", target: "heart", score: 25 }
    ]
  }
};

function academyText(ko, en) {
  return state.lang === "en" ? en : ko;
}

function ensureAcademyState() {
  if (!state.academy.courses) {
    const old = {
      lessons: state.academy.lessons || [],
      quizBest: state.academy.quizBest || 0,
      practiceBest: state.academy.practiceBest || 0,
      attempts: state.academy.attempts || 0
    };
    state.academy = {
      courses: {
        urinary: old,
        cardio: { lessons: [], quizBest: 0, practiceBest: 0, attempts: 0 }
      }
    };
  }
  Object.keys(academyCourses).forEach(id => {
    state.academy.courses[id] ??= { lessons: [], quizBest: 0, practiceBest: 0, attempts: 0 };
  });
}

function currentAcademyCourse() {
  return academyCourses[state.academyCourse] || academyCourses.urinary;
}

function currentAcademyProgress() {
  ensureAcademyState();
  return state.academy.courses[state.academyCourse];
}

function academyStats() {
  const c = currentAcademyCourse();
  const p = currentAcademyProgress();
  const learned = new Set(p.lessons || []).size;
  const progress = Math.round((learned / c.lessons.length) * 60 + (p.quizBest > 0 ? 20 : 0) + (p.practiceBest > 0 ? 20 : 0));
  return { learned, progress: Math.min(100, progress) };
}

function renderAcademy() {
  if (!$("#academyView")) return;
  ensureAcademyState();
  const c = currentAcademyCourse();
  const p = currentAcademyProgress();
  const stats = academyStats();

  const picker = $("#academyCoursePicker");
  if (picker) {
    picker.innerHTML = Object.entries(academyCourses).map(([id, x]) => `
      <button class="${id === state.academyCourse ? "active" : ""}" data-academy-course="${id}">
        <span>${x.no}</span>
        <strong>${academyText(x.titleKo, x.titleEn)}</strong>
        <small>${academyStatsFor(id)}%</small>
      </button>
    `).join("");

    $$("[data-academy-course]").forEach(b => b.onclick = () => switchAcademyCourse(b.dataset.academyCourse));
  }

  const courseTitle = $("#academyCourseTitle");
  if (courseTitle) courseTitle.textContent = academyText(c.titleKo, c.titleEn);
  const courseIntro = $("#academyCourseIntro");
  if (courseIntro) courseIntro.textContent = academyText(c.introKo, c.introEn);
  const progText = $("#academyProgressText");
  if (progText) progText.textContent = `${stats.progress}%`;
  const progBar = $("#academyProgressBar");
  if (progBar) progBar.style.width = `${stats.progress}%`;
  const bestScore = $("#academyBestScore");
  if (bestScore) bestScore.textContent = academyText(`퀴즈 ${p.quizBest}점 · 실기 ${p.practiceBest}점`, `Quiz ${p.quizBest} · Practical ${p.practiceBest}`);

  const practiceTitle = $('[data-i18n="practiceTitle"]');
  if (practiceTitle) practiceTitle.textContent = academyText(`${c.titleKo} 실기평가`, `${c.titleEn} practical test`);

  renderLessonList();
  renderLesson();
  renderQuiz();
  renderPractice();
  renderAcademyDashboard();
}

function academyStatsFor(id) {
  const previous = state.academyCourse;
  state.academyCourse = id;
  const value = academyStats().progress;
  state.academyCourse = previous;
  return value;
}

function switchAcademyCourse(id) {
  clearInterval(state.practiceTimer);
  state.practiceTimer = null;
  state.academyCourse = id;
  state.lesson = 0;
  state.quiz = 0;
  state.quizScore = 0;
  state.practiceActive = false;
  state.practiceTime = 60;
  state.practiceStep = 0;
  state.practiceScore = 0;
  save();
  renderAcademy();
  toast(academyText(`${academyCourses[id].titleKo} 과정`, `${academyCourses[id].titleEn} course`));
}

function renderLessonList() {
  const c = currentAcademyCourse();
  const p = currentAcademyProgress();
  const lessonList = $("#lessonList");
  if (!lessonList) return;
  lessonList.innerHTML = c.lessons.map((l, i) => `
    <li>
      <button class="${i === state.lesson ? "active" : ""}" data-lesson="${i}">
        <span>${p.lessons.includes(i) ? "✓" : String(i + 1).padStart(2, "0")}</span>
        <b>${academyText(l.ko, l.en)}</b>
        <small>p.${l.page}</small>
      </button>
    </li>
  `).join("");

  $$("[data-lesson]").forEach(b => b.onclick = () => {
    state.lesson = Number(b.dataset.lesson);
    renderLessonList();
    renderLesson();
  });
}

function renderLesson() {
  const c = currentAcademyCourse();
  const p = currentAcademyProgress();
  const l = c.lessons[state.lesson];
  const stage = $("#lessonStage");
  if (!stage || !l) return;

  stage.innerHTML = `
    <div class="lesson-copy">
      <p class="eyebrow">TEXTBOOK · PAGE ${l.page}</p>
      <h3>${academyText(l.titleKo, l.titleEn)}</h3>
      <p>${academyText(l.bodyKo, l.bodyEn)}</p>
      <div class="lesson-tags">
        <span>${academyText("양쪽 손·발 비교", "Compare both hands/feet")}</span>
        <span>${academyText("편안한 강도 3–4/10", "Comfortable 3–4/10")}</span>
      </div>
      <button class="primary" id="completeLesson">
        ${p.lessons.includes(state.lesson) ? academyText("✓ 학습 완료", "✓ Completed") : academyText("이 단원 학습 완료", "Complete this lesson")}
      </button>
    </div>
    <figure class="lesson-image">
      <img src="./assets/reflex-split/${l.image}" alt="${academyText(l.titleKo, l.titleEn)}">
      <figcaption>${academyText("번호가 표시된 교재 기반 작업점 지도", "Numbered textbook work-point map")}</figcaption>
    </figure>
  `;

  $("#completeLesson").onclick = () => {
    if (!p.lessons.includes(state.lesson)) p.lessons.push(state.lesson);
    save();
    playNotice("complete");
    renderAcademy();
    toast(academyText("학습 진도를 저장했습니다.", "Learning progress saved."));
  };
}

function renderQuiz() {
  const c = currentAcademyCourse();
  const p = currentAcademyProgress();
  const q = c.quiz[state.quiz];
  const counter = $("#quizCounter");
  if (counter) counter.textContent = `${Math.min(state.quiz + 1, c.quiz.length)} / ${c.quiz.length}`;

  const body = $("#quizBody");
  if (!body) return;

  if (!q) {
    const score = Math.round((state.quizScore / c.quiz.length) * 100);
    p.quizBest = Math.max(p.quizBest, score);
    p.attempts++;
    save();
    body.innerHTML = resultCard(academyText("퀴즈 완료", "Quiz complete"), score, "restartQuiz");
    $("#restartQuiz").onclick = () => {
      state.quiz = 0;
      state.quizScore = 0;
      renderQuiz();
    };
    renderAcademyDashboard();
    return;
  }

  const question = academyText(q.questionKo, q.questionEn);
  if (q.type === "image") {
    body.innerHTML = `
      <p class="assessment-question">${question}</p>
      ${clickMap(q.image, "quizClickMap")}
      <p class="answer-feedback" id="quizFeedback">${academyText("그림의 위치를 직접 눌러 보세요.", "Tap the location directly on the image.")}</p>
    `;
    bindMapAnswer("quizClickMap", q.target, ok => answerQuiz(ok));
  } else {
    body.innerHTML = `
      <p class="assessment-question">${question}</p>
      <div class="answer-options">
        ${academyText(q.optionsKo, q.optionsEn).map((x, i) => `<button data-quiz-answer="${i}">${x}</button>`).join("")}
      </div>
      <p class="answer-feedback" id="quizFeedback"></p>
    `;
    $$("[data-quiz-answer]").forEach(b => b.onclick = () => answerQuiz(Number(b.dataset.quizAnswer) === q.answer, b));
  }
}

function answerQuiz(ok, button) {
  if (button) {
    $$("[data-quiz-answer]").forEach(x => x.disabled = true);
    button.classList.add(ok ? "correct" : "wrong");
  }
  const fb = $("#quizFeedback");
  if (fb) {
    fb.textContent = ok ? academyText("정답입니다!", "Correct!") : academyText("다시 확인해 보세요. 정답 위치를 표시했습니다.", "Review the correct location.");
    fb.className = `answer-feedback ${ok ? "correct" : "wrong"}`;
  }
  if (ok) state.quizScore++;
  playNotice(ok ? "complete" : "start");
  setTimeout(() => {
    state.quiz++;
    renderQuiz();
  }, 900);
}

function clickMap(image, id) {
  return `
    <div class="answer-map" id="${id}">
      <img src="./assets/reflex-split/${image}" alt="${academyText("반사구 위치 선택 지도", "Reflex area selection map")}">
      <i class="answer-marker" hidden></i>
    </div>
  `;
}

function pointHit(target, x, y) {
  const zones = {
    kidney: [[0.38, 0.61], [0.64, 0.61]],
    bladder: [[0.39, 0.82], [0.60, 0.82]],
    adrenal: [[0.38, 0.50], [0.62, 0.49]],
    brainstem: [[0.35, 0.06], [0.59, 0.06]],
    cardioAdrenal: [[0.35, 0.48], [0.58, 0.48]],
    diaphragm: [[0.25, 0.37], [0.71, 0.36]],
    heart: [[0.40, 0.33], [0.54, 0.33]]
  };
  return zones[target] ? zones[target].some(([zx, zy]) => Math.hypot(x - zx, y - zy) < 0.13) : false;
}

function bindMapAnswer(id, target, done) {
  const map = $("#" + id);
  if (!map) return;
  map.onclick = e => {
    if (map.dataset.done) return;
    const r = map.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width;
    const y = (e.clientY - r.top) / r.height;
    const ok = pointHit(target, x, y);
    const mark = map.querySelector("i");
    map.dataset.done = "1";
    if (mark) {
      mark.hidden = false;
      mark.style.left = `${x * 100}%`;
      mark.style.top = `${y * 100}%`;
      mark.classList.add(ok ? "correct" : "wrong");
    }
    done(ok);
  };
}

function resultCard(title, score, id) {
  return `
    <div class="result-card">
      <span>${score}</span>
      <h3>${title}</h3>
      <p>${score >= 80 ? academyText("잘하셨습니다. 다음 단계로 진행할 수 있습니다.", "Well done. You can continue to the next stage.") : academyText("학습 내용을 복습한 뒤 다시 도전해 보세요.", "Review the lesson and try again.")}</p>
      <button class="primary" id="${id}">${academyText("다시 도전", "Try again")}</button>
    </div>
  `;
}

function renderPractice() {
  clearInterval(state.practiceTimer);
  state.practiceTimer = null;
  const c = currentAcademyCourse();
  const p = currentAcademyProgress();
  const tasks = c.practice;
  const body = $("#practiceBody");
  if (!body) return;

  if (state.practiceStep >= tasks.length) {
    const score = state.practiceScore;
    p.practiceBest = Math.max(p.practiceBest, score);
    save();
    body.innerHTML = resultCard(academyText("실기평가 완료", "Practical test complete"), score, "restartPractice");
    const pTimer = $("#practiceTimer");
    if (pTimer) pTimer.textContent = academyText("완료", "Done");
    $("#restartPractice").onclick = resetPractice;
    renderAcademyDashboard();
    return;
  }

  if (!state.practiceActive) {
    body.innerHTML = `
      <div class="practice-start">
        <p>${academyText(`60초 안에 ${c.sequenceKo} 반사구를 순서대로 그림에서 찾으세요.`, `Within 60 seconds, find ${c.sequenceEn} in order.`)}</p>
        <ul>
          <li>${academyText("위치 정확도 100점", "Location accuracy: 100 points")}</li>
          <li>${academyText("그림을 직접 눌러 답하기", "Tap the image to answer")}</li>
          <li>${academyText("급성 증상은 의료기관 진료가 우선", "Medical care first for acute symptoms")}</li>
        </ul>
        <button class="primary" id="startPractice">${academyText("실기평가 시작", "Start practical test")}</button>
      </div>
    `;
    const pTimer = $("#practiceTimer");
    if (pTimer) pTimer.textContent = "01:00";
    $("#startPractice").onclick = startPractice;
    return;
  }

  const t = tasks[state.practiceStep];
  body.innerHTML = `
    <p class="assessment-question">${state.practiceStep + 1}. ${academyText(t.nameKo, t.nameEn)} — ${academyText("정확한 위치를 누르세요.", "Tap the correct location.")}</p>
    ${clickMap(t.image, "practiceClickMap")}
    <p class="answer-feedback" id="practiceFeedback">${academyText("남은 시간 안에 위치를 선택하세요.", "Select the location before time runs out.")}</p>
  `;
  bindMapAnswer("practiceClickMap", t.target, ok => {
    if (ok) state.practiceScore += t.score;
    const fb = $("#practiceFeedback");
    if (fb) fb.textContent = ok ? academyText(`정확합니다. +${t.score}점`, `Correct. +${t.score}`) : academyText("위치를 다시 복습해 주세요.", "Please review this location.");
    setTimeout(() => {
      state.practiceStep++;
      renderPractice();
      if (state.practiceStep < tasks.length) startPracticeTimer();
    }, 700);
  });
}

function startPractice() {
  state.practiceActive = true;
  state.practiceTime = 60;
  state.practiceStep = 0;
  state.practiceScore = 0;
  renderPractice();
  startPracticeTimer();
}

function startPracticeTimer() {
  clearInterval(state.practiceTimer);
  state.practiceTimer = setInterval(() => {
    state.practiceTime--;
    const m = Math.floor(state.practiceTime / 60);
    const s = state.practiceTime % 60;
    const pTimer = $("#practiceTimer");
    if (pTimer) pTimer.textContent = `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
    if (state.practiceTime <= 0) {
      clearInterval(state.practiceTimer);
      state.practiceStep = currentAcademyCourse().practice.length;
      renderPractice();
    }
  }, 1000);
}

function resetPractice() {
  clearInterval(state.practiceTimer);
  state.practiceTimer = null;
  state.practiceActive = false;
  state.practiceTime = 60;
  state.practiceStep = 0;
  state.practiceScore = 0;
  renderPractice();
}

function renderAcademyDashboard() {
  const c = currentAcademyCourse();
  const p = currentAcademyProgress();
  const s = academyStats();
  const dash = $("#academyDashboard");
  if (!dash) return;
  dash.innerHTML = `
    <article class="progress-card panel">
      <span>${s.progress}%</span>
      <h3>${academyText(c.titleKo, c.titleEn)}</h3>
      <p>${academyText(`${c.lessons.length}개 학습 단원 중 ${s.learned}개 완료`, `${s.learned} of ${c.lessons.length} lessons complete`)}</p>
    </article>
    <article class="progress-card panel">
      <span>${p.quizBest}</span>
      <h3>${academyText("퀴즈 최고점수", "Best quiz score")}</h3>
      <p>${academyText(`총 ${p.attempts}회 응시`, `Attempts: ${p.attempts}`)}</p>
    </article>
    <article class="progress-card panel">
      <span>${p.practiceBest}</span>
      <h3>${academyText("실기평가 최고점수", "Best practical score")}</h3>
      <p>${academyText("위치 정확도 평가", "Location accuracy assessment")}</p>
    </article>
  `;
}

function setAcademyTab(tab) {
  state.academyTab = tab;
  if (tab !== "practice") {
    clearInterval(state.practiceTimer);
    state.practiceTimer = null;
  }
  $$("[data-academy-tab]").forEach(b => b.classList.toggle("active", b.dataset.academyTab === tab));
  $$(".academy-panel").forEach(p => p.classList.remove("active"));
  $(`#academy${tab[0].toUpperCase() + tab.slice(1)}Panel`).classList.add("active");
  if (tab === "progress") renderAcademyDashboard();
}

// ==========================================================================
// Event Bindings
// ==========================================================================
function bind() {
  const closeWelcome = () => {
    const gate = $("#welcomeGate");
    if (!gate) return;
    gate.classList.add("closing");
    document.body.classList.remove("welcome-open");
    setTimeout(() => gate.hidden = true, 320);
  };

  const openWelcome = () => {
    const gate = $("#welcomeGate");
    if (!gate) return;
    gate.hidden = false;
    gate.classList.remove("closing");
    document.body.classList.add("welcome-open");
    gate.scrollTop = 0;
  };

  $("#welcomeStart").onclick = closeWelcome;
  $("#welcomeClose").onclick = closeWelcome;
  $("#homeGateBtn").onclick = openWelcome;

  // Segmented Language Toggle [ 한글 / ENG ]
  const langToggleBtn = $("#langToggleBtn");
  if (langToggleBtn) {
    langToggleBtn.onclick = () => {
      state.lang = state.lang === "ko" ? "en" : "ko";
      save();
      applyLanguage();
      toast(state.lang === "en" ? "English mode enabled" : "한국어 모드로 변경되었습니다");
    };
  }

  // Voice toggle
  const voiceBtn = $("#voiceToggle");
  if (voiceBtn) {
    voiceBtn.onclick = () => {
      state.voice = !state.voice;
      if (!state.voice && "speechSynthesis" in window) {
        window.speechSynthesis.cancel();
      }
      save();
      updateAccessButtons();
      if (state.voice) {
        speak(state.lang === "en" ? "Voice guidance on" : "음성 안내가 켜졌습니다");
      }
    };
  }

  // Sound toggle
  const soundBtn = $("#soundToggle");
  if (soundBtn) {
    soundBtn.onclick = () => {
      toggleSound();
    };
  }

  // Timer Sound Button
  const timerSoundBtn = $("#timerSoundBtn");
  if (timerSoundBtn) {
    timerSoundBtn.onclick = () => toggleSound();
  }

  // Volume Slider
  const volSlider = $("#timerVolumeSlider");
  if (volSlider) {
    volSlider.value = Math.round(state.masterVolume * 100);
    setVolume(volSlider.value);
    volSlider.oninput = e => setVolume(Number(e.target.value));
  }

  // View navigation tabs
  $$("[data-view]").forEach(b => b.onclick = () => setView(b.dataset.view));
  $$("[data-academy-tab]").forEach(b => b.onclick = () => setAcademyTab(b.dataset.academyTab));

  // Self / Pro Mode toggle
  $$("[data-mode]").forEach(b => b.onclick = () => {
    state.mode = b.dataset.mode;
    $$("[data-mode]").forEach(x => x.classList.toggle("active", x.dataset.mode === state.mode));
    save();
    if (state.activeProgram) renderSession();
    toast(state.mode === "pro"
      ? (state.lang === "en" ? "Professional mode: Detailed application methods shown." : "전문가 모드: 상세 자극 방법을 표시합니다.")
      : (state.lang === "en" ? "Self-care mode: Essential guidance shown." : "자가관리 모드: 핵심 안내만 표시합니다."));
  });

  // Map workspace zoom & pan
  $("#zoomIn").onclick = () => setZoom(state.zoom + 0.15);
  $("#zoomOut").onclick = () => setZoom(state.zoom - 0.15);
  $("#resetMapBtn").onclick = () => {
    state.zoom = 1;
    state.panX = state.panY = 0;
    applyTransform();
  };

  // Map Language Toggle (Original Korean Textbook Map <-> 100% English Atlas Map)
  const mapLangToggleBtn = $("#mapLangToggleBtn");
  if (mapLangToggleBtn) {
    mapLangToggleBtn.onclick = () => {
      const isCurrentlyEn = state.mapLang === "en" || (state.mapLang !== "ko" && state.lang === "en");
      state.mapLang = isCurrentlyEn ? "ko" : "en";
      renderMapWorkspace();
      toast(state.mapLang === "en"
        ? (state.lang === "en" ? "Switched to English Reflex Map" : "영문 정밀 지도로 전환되었습니다.")
        : (state.lang === "en" ? "Switched to Original Textbook Map" : "한글 원본 교재 지도로 전환되었습니다."));
    };
  }

  // Custom point add dialog
  $("#addPointBtn").onclick = () => {
    if (state.mode !== "pro") {
      toast(state.lang === "en" ? "Custom points can be added in Pro mode." : "사용자 포인트는 전문가 모드에서 추가합니다.");
      return;
    }
    $("#pointDialog").showModal();
  };
  $("#pointForm").onsubmit = e => {
    e.preventDefault();
    state.pendingPoint = {
      name: $("#pointName").value.trim(),
      memo: $("#pointMemo").value.trim()
    };
    if (!state.pendingPoint.name) return;
    $("#pointDialog").close();
    $("#mapStage").style.cursor = "crosshair";
    toast(state.lang === "en" ? "Tap on the map to place the point." : "지도에서 위치를 선택하세요.");
  };

  // Program search
  const progSearch = $("#programSearch");
  if (progSearch) progSearch.oninput = e => renderPrograms(e.target.value);
  const backSystems = $("#backToSystems");
  if (backSystems) backSystems.onclick = () => {
    state.selectedSystem = null;
    if (progSearch) progSearch.value = "";
    renderPrograms();
  };

  // Session map switcher
  $$("[data-session-map]").forEach(b => b.onclick = () => {
    if (!state.activeProgram) {
      toast(tr("chooseProgram"));
      setView("programs");
      return;
    }
    state.sessionMap = b.dataset.sessionMap;
    resetSessionMap();
    renderSessionMap();
  });

  $("#sessionZoomIn").onclick = () => setSessionZoom(state.sessionZoom + 0.2);
  $("#sessionZoomOut").onclick = () => setSessionZoom(state.sessionZoom - 0.2);
  $("#sessionMapReset").onclick = resetSessionMap;

  // 528Hz Timer Controls
  $("#timerToggle").onclick = toggleTimer;
  $("#timerReset").onclick = resetTimer;
  $("#nextStep").onclick = nextStep;
  $("#finishSession").onclick = finishSession;

  // Preset buttons
  const p20 = $("#preset-20s"); if (p20) p20.onclick = () => applyPreset(20);
  const p30 = $("#preset-30s"); if (p30) p30.onclick = () => applyPreset(30);
  const p1m = $("#preset-1min"); if (p1m) p1m.onclick = () => applyPreset(60);
  const p3m = $("#preset-3min"); if (p3m) p3m.onclick = () => applyPreset(180);
  const p5m = $("#preset-5min"); if (p5m) p5m.onclick = () => applyPreset(300);

  // Time adjust buttons
  $("#timerMinus").onclick = () => adjustCurrentDuration(-10);
  $("#timerPlus").onclick = () => adjustCurrentDuration(10);

  // Custom Time Settings Dialog
  $("#openTimerSettings").onclick = openTimerSettings;
  $("#closeTimerSettings").onclick = () => $("#timerSettingsDialog").close();
  $$("[data-timer-preset]").forEach(b => b.onclick = () => syncTimerSettings(Number(b.dataset.timerPreset)));
  $("#timerMinutes").oninput = $("#timerSeconds").oninput = () => syncTimerSettings(timerInputValue());
  $("#applyCurrentTime").onclick = () => applyDuration("current");
  $("#applyRemainingTime").onclick = () => applyDuration("remaining");

  // Records export/import
  $("#exportBtn").onclick = exportData;
  $("#importInput").onchange = e => e.target.files[0] && importData(e.target.files[0]);
  $("#clearBtn").onclick = () => {
    const confirmMsg = state.lang === "en"
      ? "Clear all custom points and treatment records?"
      : "사용자 추가점과 치료 기록을 모두 지울까요?";
    if (confirm(confirmMsg)) {
      state.points = [];
      state.records = [];
      save();
      renderMapWorkspace();
      renderRecords();
      toast(state.lang === "en" ? "User data cleared." : "사용자 데이터를 지웠습니다.");
    }
  };

  // Safety Dialog
  $("#safetyBtn").onclick = () => $("#safetyDialog").showModal();
  $("#closeSafety").onclick = () => $("#safetyDialog").close();
  $("#acceptSafety").onclick = () => $("#safetyDialog").close();

  setupMapPan();
  setupSessionMapPan();
}

// ==========================================================================
// App Initialization
// ==========================================================================
document.body.classList.add("welcome-open");
load();
bind();
applyLanguage();
$$("[data-mode]").forEach(b => b.classList.toggle("active", b.dataset.mode === state.mode));

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("./service-worker.js").then(reg => {
    try { reg.update(); } catch (e) {}
    reg.onupdatefound = () => {
      const installing = reg.installing;
      if (installing) {
        installing.onstatechange = () => {
          if (installing.state === "installed" && navigator.serviceWorker.controller) {
            window.location.reload();
          }
        };
      }
    };
  }).catch(() => {});
}

window.state = state;
window.startProgram = startProgram;
window.toggleTimer = toggleTimer;
window.resetTimer = resetTimer;
window.nextStep = nextStep;
