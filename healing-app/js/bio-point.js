/**
 * NovaCell Chakra Bio Points Interactive Application Logic
 * Comprehensive bilingual support, 528Hz Cellular Voltage Healing Timer,
 * Interactive Front/Back Body Mapping, and NovaCell Clinical Protocol Guide.
 */

// 1. Data Definitions
const CHAKRAS_FRONT = [
  {
    id: "crown",
    num: 7,
    color: "#a855f7", // Violet
    ko: "사하스라라 차크라 (크라운)",
    en: "Sahasrara Chakra (Crown)",
    sanskrit: "Sahasrara · 크라운 차크라",
    sanskritEn: "Sahasrara · Crown Chakra",
    meridianKo: "백회(GV20) 바이오 터미널 · 정수리",
    meridianEn: "Baihui (GV20) Bio Terminal · Vertex",
    organKo: "담낭(분노 해소) · 전신 12경락 생체 회로 총괄",
    organEn: "Gall Bladder (Anger release) · 12 Circuits Integration",
    actionKo: "두뇌 전위 리셋, 뇌척수액 순환 촉진 및 영적 평정 회복",
    actionEn: "Brain voltage reset, CSF circulation & spiritual tranquility",
    checkKo: "백회(GV20)",
    checkEn: "GV20 (Baihui)",
    pinTop: "8.8%",
    pinLeft: "50%"
  },
  {
    id: "third-eye",
    num: 6,
    color: "#6366f1", // Indigo
    ko: "아주나 차크라 (제3의 눈)",
    en: "Ajna Chakra (Third Eye)",
    sanskrit: "아주나 · 제3의 눈 차크라",
    sanskritEn: "Ajna · 3rd Eye Chakra",
    meridianKo: "인당(미간) · 독맥 GV16 상응",
    meridianEn: "Yintang (Glabella) · GV16 Correspondence",
    organKo: "교감신경·뇌·눈·귀 (불안 해소)",
    organEn: "Sympathetic · Brain · Eyes · Ears (Anxiety release)",
    actionKo: "송과선 생체 전압 충전, 멜라토닌 리듬 회복, 중추신경 흥분 진정",
    actionEn: "Pineal gland voltage recharge, melatonin reset & CNS sedation",
    checkKo: "인당(미간)",
    checkEn: "Yintang (Mid-brow)",
    pinTop: "14%",
    pinLeft: "50%"
  },
  {
    id: "throat",
    num: 5,
    color: "#06b6d4", // Cyan
    ko: "비슈다 차크라 (목)",
    en: "Vishuddha Chakra (Throat)",
    sanskrit: "비슈다 · 목 차크라",
    sanskritEn: "Vishuddha · Throat Chakra",
    meridianKo: "임맥(CV) CV22 천돌혈 · 인후 오목처",
    meridianEn: "Conception Vessel CV22 (Tiantu) · Suprasternal Fossa",
    organKo: "대장 (비통·고통 해소)",
    organEn: "Large Intestine (Grief release)",
    actionKo: "갑상선 및 경추 림프 순환 전압 공급, 신진대사 및 음성 조율",
    actionEn: "Thyroid & cervical lymph voltage boost, metabolic regulation",
    checkKo: "천돌(CV22)",
    checkEn: "CV22 (Tiantu)",
    pinTop: "24%",
    pinLeft: "50%"
  },
  {
    id: "heart",
    num: 4,
    color: "#10b981", // Emerald Green
    ko: "아나하타 차크라 (심장)",
    en: "Anahata Chakra (Heart)",
    sanskrit: "아나하타 · 심장 차크라",
    sanskritEn: "Anahata · Heart Chakra",
    meridianKo: "임맥(CV) CV17 전중혈 · 흉골 중앙",
    meridianEn: "Conception Vessel CV17 (Danzhong) · Mid-sternum",
    organKo: "소장 (슬픔 해소 & 사랑·기쁨 회복)",
    organEn: "Small Intestine (Sorrow release & Joy restoration)",
    actionKo: "528Hz 세포 재생 사랑의 주파수 공명, 흉선 면역 세포 전위 활성화",
    actionEn: "528Hz love & cellular repair resonance, thymic immune voltage activation",
    checkKo: "전중(CV17)",
    checkEn: "CV17 (Danzhong)",
    pinTop: "32.5%",
    pinLeft: "50%"
  },
  {
    id: "solar-plexus",
    num: 3,
    color: "#eab308", // Amber/Yellow
    ko: "마니푸라 차크라 (태양총)",
    en: "Manipura Chakra (Solar Plexus)",
    sanskrit: "마니푸라 · 태양총 차크라",
    sanskritEn: "Manipura · Solar Plexus Chakra",
    meridianKo: "임맥(CV) CV12 중완혈 · 상복부 중앙",
    meridianEn: "Conception Vessel CV12 (Zhongwan) · Upper Abdomen",
    organKo: "위장 (만성 걱정·소화불량 해소)",
    organEn: "Stomach (Worry release & Digestive vitality)",
    actionKo: "중초 복부 신경총 전압 충전, 미토콘드리아 ATP 생성 극대화",
    actionEn: "Celiac plexus voltage charging & mitochondrial ATP synthesis",
    checkKo: "중완(CV12)",
    checkEn: "CV12 (Zhongwan)",
    pinTop: "40.5%",
    pinLeft: "50%"
  },
  {
    id: "sacral",
    num: 2,
    color: "#f97316", // Orange
    ko: "스와디스타나 차크라 (천골)",
    en: "Swadhisthana Chakra (Sacral)",
    sanskrit: "스와디스타나 · 천골 차크라",
    sanskritEn: "Swadhisthana · Sacral Chakra",
    meridianKo: "임맥(CV) CV3 중극 · CV4 관원혈 · 하복부",
    meridianEn: "Conception Vessel CV3 (Zhongji) / CV4 (Guanyuan)",
    organKo: "방광 (두려움·공포 해소 & 비뇨생식기)",
    organEn: "Bladder (Fear release & Urogenital vitality)",
    actionKo: "골반강 혈류 순환 및 생식·비뇨기 세포막 전위 충전",
    actionEn: "Pelvic cavity perfusion & reproductive-urinary cellular charge",
    checkKo: "중극(CV3)",
    checkEn: "CV3 (Zhongji)",
    pinTop: "48%",
    pinLeft: "50%"
  },
  {
    id: "root",
    num: 1,
    color: "#ef4444", // Red
    ko: "물라다라 차크라 (뿌리·베이스)",
    en: "Muladhara Chakra (Root·Base)",
    sanskrit: "물라다라 · 뿌리 차크라",
    sanskritEn: "Muladhara · Root Chakra",
    meridianKo: "임맥(CV) CV1 회음혈 · 미골 끝",
    meridianEn: "Conception Vessel CV1 (Huiyin) · Coccyx Base",
    organKo: "담낭(분노) & 신장·부신 (생존 본능 & 그라운딩)",
    organEn: "Gall Bladder (Anger) & Kidney/Adrenals (Grounding)",
    actionKo: "인체 기초 접지 전위 형성, 하지 생체 전류 순환 및 척추 지지력 강화",
    actionEn: "Fundamental grounding voltage, lower limb bio-current circulation",
    checkKo: "회음(CV1)/장강",
    checkEn: "CV1 (Huiyin)",
    pinTop: "54%",
    pinLeft: "50%"
  }
];

const CHAKRAS_BACK = [
  {
    id: "c1-gb",
    num: "C1",
    color: "#0284c7", // Blue
    ko: "C-1 담낭 축전기",
    en: "C-1 Gall Bladder Capacitor",
    sanskrit: "경추 1번 C1 환추 분절",
    sanskritEn: "Cervical 1 (Atlas Segment)",
    meridianKo: "독맥 GV16 상방 · 풍지(GB20) 연계 축전기",
    meridianEn: "Superior to GV16 · GB20 Linked Capacitor",
    organKo: "담낭 (분노·격정 해소)",
    organEn: "Gall Bladder (Anger & Frustration release)",
    actionKo: "상경추 전위 불균형 해소, 두개강 뇌압 안정 및 분노 감정 정화",
    actionEn: "Upper cervical voltage balance, intracranial pressure regulation",
    checkKo: "C1 환추부",
    checkEn: "Spine C1",
    pinTop: "18%",
    pinLeft: "50%"
  },
  {
    id: "parasympathetic",
    num: "PARA",
    color: "#14b8a6", // Teal
    ko: "부교감신경 자율신경 센터",
    en: "Parasympathetic Vagal Center",
    sanskrit: "경흉추 미주신경 분절",
    sanskritEn: "Cervicothoracic Vagal Segment",
    meridianKo: "경추 C4~C6 외측 · 미주신경 주행로",
    meridianEn: "Cervical C4-C6 Lateral · Vagus Nerve Pathway",
    organKo: "자율신경계 (만성 불안·긴장 이완)",
    organEn: "Autonomic Nervous System (Anxiety relaxation)",
    actionKo: "미주신경 활성도(Vagal Tone) 증대, 심박 안정 및 소화 전위 회복",
    actionEn: "Vagal tone activation, heart rate stabilization & gut voltage restoration",
    checkKo: "미주신경 분절",
    checkEn: "Vagal Segment",
    pinTop: "20.5%",
    pinLeft: "47%"
  },
  {
    id: "c7-lung",
    num: "C7",
    color: "#38bdf8", // Light Blue
    ko: "C-7 폐 축전기",
    en: "C-7 Lung Capacitor",
    sanskrit: "경추 7번 C7 융추 분절",
    sanskritEn: "Cervical 7 (Vertebra Prominens)",
    meridianKo: "독맥 GV14 대추혈 인접 축전기",
    meridianEn: "Adjacent to GV14 (Dazhui) Capacitor",
    organKo: "폐 (비애·상실감 해소)",
    organEn: "Lung (Grief & Sorrow release)",
    actionKo: "상부 흉곽 호흡근 전압 충전, 만성 호흡기 피로 및 슬픔 정화",
    actionEn: "Upper thoracic respiratory voltage boost & emotional grief clearance",
    checkKo: "대추(GV14)/C7",
    checkEn: "GV14 (Dazhui)/C7",
    pinTop: "22.5%",
    pinLeft: "50%"
  },
  {
    id: "t5-heart",
    num: "T5",
    color: "#10b981", // Green
    ko: "T-5 심장 축전기",
    en: "T-5 Heart Capacitor",
    sanskrit: "흉추 5번 T5 분절",
    sanskritEn: "Thoracic 5 (Cardiac Segment)",
    meridianKo: "독맥 GV11 신도혈 · 심수(BL15) 연계",
    meridianEn: "GV11 (Shendao) · BL15 Heart Shu Linked",
    organKo: "심장 (슬픔 해소 & 평온 회복)",
    organEn: "Heart (Sorrow release & Serenity)",
    actionKo: "심근 자율신경 생체전류 안정, 흉배부 뻐근함 해소 및 정서적 위안",
    actionEn: "Cardiac bio-current stabilization, thoracic back tension release",
    checkKo: "신도(GV11)/T5",
    checkEn: "GV11 (Shendao)/T5",
    pinTop: "28.5%",
    pinLeft: "50%"
  },
  {
    id: "t11-spleen",
    num: "T11",
    color: "#eab308", // Yellow
    ko: "T-11 비장 축전기",
    en: "T-11 Spleen Capacitor",
    sanskrit: "흉추 11번 T11 분절",
    sanskritEn: "Thoracic 11 (Spleen Segment)",
    meridianKo: "독맥 GV6 척중혈 · 비수(BL20) 연계",
    meridianEn: "GV6 (Jizhong) · BL20 Spleen Shu Linked",
    organKo: "비장·췌장 (걱정·잡념 해소)",
    organEn: "Spleen & Pancreas (Worry & Overthinking release)",
    actionKo: "소화 효소 및 림프 순환 전위 향상, 만성 식후 피로 및 불안 해소",
    actionEn: "Digestive enzyme & lymphatic charge boost, postprandial fatigue reset",
    checkKo: "척중(GV6)/T11",
    checkEn: "GV6 (Jizhong)/T11",
    pinTop: "37%",
    pinLeft: "50%"
  },
  {
    id: "l2-kidney",
    num: "L2",
    color: "#f59e0b", // Amber
    ko: "L-2 신장 축전기",
    en: "L-2 Kidney Capacitor",
    sanskrit: "요추 2번 L2 요추 분절",
    sanskritEn: "Lumbar 2 (Kidney Life-Gate)",
    meridianKo: "독맥 GV4 명문혈 · 신수(BL23) 연계",
    meridianEn: "GV4 (Mingmen) · BL23 Kidney Shu Linked",
    organKo: "신장·부신 (두려움·공포 해소 & 원기 충전)",
    organEn: "Kidney & Adrenals (Fear release & Vitality Recharge)",
    actionKo: "인체 배터리 핵심 원기 전위 충전, 부신 피질 호르몬 밸런스 회복",
    actionEn: "Core body battery voltage recharge & adrenal cortisol homeostasis",
    checkKo: "명문(GV4)/L2",
    checkEn: "GV4 (Mingmen)/L2",
    pinTop: "43%",
    pinLeft: "50%"
  }
];

const CIRCUIT_PAIRS = [
  { pairKo: "심포 ↔ 삼초", pairEn: "PC ↔ TB", code: "PC ↔ TB", emotionKo: "불안 · 초조", emotionEn: "Anxiety" },
  { pairKo: "폐 ↔ 대장", pairEn: "LU ↔ LI", code: "LU ↔ LI", emotionKo: "고통 · 비애", emotionEn: "Grief" },
  { pairKo: "심장 ↔ 소장", pairEn: "HT ↔ SI", code: "HT ↔ SI", emotionKo: "슬픔 · 기쁨 부족", emotionEn: "Sorrow" },
  { pairKo: "비장·췌장 ↔ 위장", pairEn: "SP ↔ ST", code: "SP ↔ ST", emotionKo: "걱정 · 근심", emotionEn: "Worry" },
  { pairKo: "신장 ↔ 방광", pairEn: "KI ↔ BL", code: "KI ↔ BL", emotionKo: "두려움 · 공포", emotionEn: "Fear" },
  { pairKo: "간 ↔ 담낭", pairEn: "LV ↔ GB", code: "LV ↔ GB", emotionKo: "분노 · 울화", emotionEn: "Anger" }
];

// App State
let currentView = "front"; // 'front' | 'back'
let activePointIndex = 3; // Default to Anahata Heart Chakra (index 3 in front)
let currentSiteLang = "ko";

// Timer State
let totalTimerSeconds = 300; // 5 mins
let remainingTimerSeconds = 300;
let isTimerRunning = false;
let timerInterval = null;

// Audio State
let audioCtx = null;
let toneOscillator = null;
let toneGainNode = null;
let isSoundMuted = false;
let userVolume = 0.8;

const $ = (id) => document.getElementById(id);
const isEn = () => currentSiteLang === "en";

// 2. Audio Engine (Web Audio API)
function getAudioContext() {
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (AudioContextClass) {
      audioCtx = new AudioContextClass();
    }
  }
  if (audioCtx && audioCtx.state === "suspended") {
    audioCtx.resume();
  }
  return audioCtx;
}

function start528HzSound() {
  if (isSoundMuted) return;
  const ctx = getAudioContext();
  if (!ctx) return;

  stop528HzSound();

  const now = ctx.currentTime;
  toneOscillator = ctx.createOscillator();
  toneGainNode = ctx.createGain();

  toneOscillator.type = "sine";
  toneOscillator.frequency.setValueAtTime(528, now);

  toneGainNode.gain.cancelScheduledValues(now);
  toneGainNode.gain.setValueAtTime(0.0001, now);
  toneGainNode.gain.linearRampToValueAtTime(0.18 * userVolume, now + 0.35);

  toneOscillator.connect(toneGainNode);
  toneGainNode.connect(ctx.destination);

  toneOscillator.start(now);
}

function stop528HzSound() {
  if (toneOscillator && toneGainNode && audioCtx) {
    try {
      const now = audioCtx.currentTime;
      toneGainNode.gain.cancelScheduledValues(now);
      toneGainNode.gain.linearRampToValueAtTime(0.0001, now + 0.15);
      toneOscillator.stop(now + 0.18);
    } catch (e) {}
    toneOscillator = null;
    toneGainNode = null;
  }
}

/* ==========================================================================
   Tibetan Meditation Singing Bowl (Custom MP3 Audio with Web Audio Fallback)
   ========================================================================== */
let bioPointBowlAudio = null;

function playSingingBowlBell() {
  if (isSoundMuted || userVolume <= 0.01) return;

  try {
    if (!bioPointBowlAudio) {
      bioPointBowlAudio = document.getElementById("singing-bowl-audio") || new Audio("assets/audio/singing-bowl.mp3");
    }
    bioPointBowlAudio.pause();
    bioPointBowlAudio.currentTime = 0;
    bioPointBowlAudio.volume = Math.max(0, Math.min(1, userVolume));
    const p = bioPointBowlAudio.play();
    if (p && typeof p.catch === "function") {
      p.catch((err) => {
        console.warn("Singing bowl MP3 play error, falling back to synth:", err);
        playSynthesizedSingingBowl();
      });
    }
  } catch (e) {
    console.warn("Singing bowl MP3 error, falling back to synth:", e);
    playSynthesizedSingingBowl();
  }
}

function playSynthesizedSingingBowl() {
  try {
    const ctx = getAudioContext();
    if (!ctx) return;
    if (ctx.state === "suspended") {
      ctx.resume().then(() => doPlaySingingBowl(ctx));
    } else {
      doPlaySingingBowl(ctx);
    }
  } catch (e) {
    console.warn("Synthesized bowl error:", e);
  }
}

function doPlaySingingBowl(ctx) {
  const now = ctx.currentTime;
  const vol = Math.max(0.1, userVolume);

  let destNode = ctx.destination;
  if (ctx.createDynamicsCompressor) {
    try {
      const comp = ctx.createDynamicsCompressor();
      comp.threshold.setValueAtTime(-10, now);
      comp.knee.setValueAtTime(30, now);
      comp.ratio.setValueAtTime(8, now);
      comp.attack.setValueAtTime(0.003, now);
      comp.release.setValueAtTime(0.35, now);
      comp.connect(ctx.destination);
      destNode = comp;
    } catch (e) {}
  }

  const filter = ctx.createBiquadFilter();
  filter.type = "lowpass";
  filter.frequency.setValueAtTime(750, now);
  filter.Q.setValueAtTime(2.0, now);
  filter.connect(destNode);

  // Deep Tibetan singing bowl harmonic frequencies
  const voices = [
    { freq: 264.0, gain: 0.90 * vol, decay: 9.8 },
    { freq: 265.4, gain: 0.80 * vol, decay: 9.2 },
    { freq: 132.0, gain: 0.55 * vol, decay: 8.5 },
    { freq: 528.0, gain: 0.32 * vol, decay: 7.0 },
    { freq: 529.2, gain: 0.24 * vol, decay: 6.5 }
  ];

  voices.forEach((v) => {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = "sine";
    osc.frequency.setValueAtTime(v.freq, now);

    gain.gain.cancelScheduledValues(now);
    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.linearRampToValueAtTime(v.gain, now + 0.09);
    gain.gain.exponentialRampToValueAtTime(0.00005, now + v.decay);

    osc.connect(gain);
    gain.connect(filter);

    osc.start(now);
    osc.stop(now + v.decay + 0.1);
  });
}

// 3. UI Rendering & Interactions
function getCurrentDataset() {
  return currentView === "front" ? CHAKRAS_FRONT : CHAKRAS_BACK;
}

function renderSidebarList() {
  const listEl = $("chakra-list");
  if (!listEl) return;
  listEl.innerHTML = "";

  const items = getCurrentDataset();

  items.forEach((item, idx) => {
    const card = document.createElement("button");
    card.type = "button";
    card.className = "chakra-item-card" + (idx === activePointIndex ? " active" : "");
    card.setAttribute("aria-selected", idx === activePointIndex ? "true" : "false");

    const titleText = isEn() ? item.en : item.ko;
    const meridianText = isEn() ? item.meridianEn : item.meridianKo;
    const organText = isEn() ? item.organEn : item.organKo;

    card.innerHTML = `
      <div class="chakra-card-badge" style="--c-accent: ${item.color}">
        <span class="chakra-num">${item.num}</span>
      </div>
      <div class="chakra-card-body">
        <strong class="chakra-card-title">${titleText}</strong>
        <div class="chakra-card-meta">
          <span class="chakra-meridian">${meridianText}</span>
          <span class="chakra-organ">${organText}</span>
        </div>
      </div>
      <span class="chakra-arrow" aria-hidden="true">&rsaquo;</span>
    `;

    card.addEventListener("click", () => {
      selectPoint(idx);
    });

    listEl.appendChild(card);
  });
}

function renderActivePoint() {
  const items = getCurrentDataset();
  if (activePointIndex < 0 || activePointIndex >= items.length) {
    activePointIndex = 0;
  }
  const point = items[activePointIndex];
  if (!point) return;

  // 1. Update Topline
  const seqEl = $("chakra-sequence");
  const titleEl = $("chakra-main-title");
  const subEl = $("chakra-sub-title");
  const sourceEl = $("chakra-source-page");

  if (seqEl) {
    seqEl.textContent = currentView === "front" 
      ? (isEn() ? `FRONT CHAKRA 0${point.num} / 07` : `전면 차크라 0${point.num} / 07`)
      : (isEn() ? `BACK CAPACITOR ${point.num} / 06` : `후면 축전기 ${point.num} / 06`);
  }
  if (titleEl) {
    titleEl.textContent = isEn() ? point.en : point.ko;
  }
  if (subEl) {
    subEl.textContent = isEn() 
      ? `${point.meridianEn} · ${point.organEn}`
      : `${point.meridianKo} · ${point.organKo}`;
  }
  if (sourceEl) {
    sourceEl.textContent = currentView === "front" 
      ? (isEn() ? "Book p.196-199" : "책 196~199쪽")
      : (isEn() ? "Book p.200-203" : "책 200~203쪽");
  }

  // 2. Update Image & Hotspot Pins
  updateFigureStage(point);

  // 3. Update Floating Live Active Chakra Card
  updateFloatingCard(point);

  // 4. Update Clinical Protocol Guide Steps
  updateProtocolGuide(point);

  // 5. Update Sidebar List Active Class
  document.querySelectorAll(".chakra-item-card").forEach((card, idx) => {
    card.classList.toggle("active", idx === activePointIndex);
    card.setAttribute("aria-selected", idx === activePointIndex ? "true" : "false");
  });
}

function updateFigureStage(point) {
  const figureImg = $("figure-body-img");
  const figBadge = $("stage-view-badge");
  const figSub = $("stage-view-sub");
  const figCaption = $("stage-figcaption");

  if (currentView === "front") {
    const imgSrc = isEn() ? "assets/biopoint/front-english.webp" : "assets/biopoint/front-korean.webp";
    if (figureImg) {
      figureImg.src = imgSrc;
      figureImg.alt = isEn() ? "Front Chakra Bio Points Coils Diagram" : "전면 차크라 바이오 포인트 코일 도해";
    }
    if (figBadge) {
      figBadge.textContent = isEn() ? "Front Chakra Prana Coils Diagram" : "전면 차크라 쁘라나 코일(Front Coils) 도해";
    }
    if (figSub) {
      figSub.textContent = isEn() ? "Conception Vessel (CV) & 7 Energy Centers" : "임맥(CV) 중심선 및 7개 생체 에너지 센터";
    }
    if (figCaption) {
      figCaption.innerHTML = isEn()
        ? `『NovaCell Master Therapy』 p.196-199 · Front Prana Coils & Bio Voltage Points`
        : `『노바셀 통치 요법』 196~199쪽 원본 도해 · 전면 쁘라나 코일(Front Coils) 및 바이오 포인트 전압 순환 시스템`;
    }
  } else {
    if (figureImg) {
      figureImg.src = "assets/biopoint/back-bilingual.webp";
      figureImg.alt = isEn() ? "Back Bio Points & Capacitors Diagram" : "후면 바이오 포인트 및 척추 축전기 도해";
    }
    if (figBadge) {
      figBadge.textContent = isEn() ? "Back Bio Points & Capacitors Diagram" : "후면 바이오 축전기(Back Capacitors) 도해";
    }
    if (figSub) {
      figSub.textContent = isEn() ? "Governor Vessel (GV) Spine C1~L2 Organ Resonance" : "독맥(GV) 및 척추 C1~L2 5대 장기 공명 축전기";
    }
    if (figCaption) {
      figCaption.innerHTML = isEn()
        ? `『NovaCell Master Therapy』 p.200-203 · Back Capacitors & Autonomic Nervous Spine Relay`
        : `『노바셀 통치 요법』 200~203쪽 원본 도해 · 후면 축전기(Back Capacitors) 및 척추 신경망 전위 조율`;
    }
  }

  // Update Hotspot Pins on figure stage
  renderPins();
}

function renderPins() {
  const container = $("stage-pins-container");
  if (!container) return;
  container.innerHTML = "";

  const items = getCurrentDataset();

  items.forEach((item, idx) => {
    const pin = document.createElement("button");
    pin.type = "button";
    pin.className = "chakra-pin" + (idx === activePointIndex ? " active" : "");
    pin.style.top = item.pinTop;
    pin.style.left = item.pinLeft;
    pin.style.setProperty("--pin-color", item.color);
    pin.setAttribute("title", isEn() ? item.en : item.ko);

    pin.innerHTML = `
      <span class="pin-pulse"></span>
      <span class="pin-dot"><b>${item.num}</b></span>
    `;

    pin.addEventListener("click", (e) => {
      e.stopPropagation();
      selectPoint(idx);
    });

    container.appendChild(pin);
  });
}

function updateFloatingCard(point) {
  const badge = $("floating-point-badge");
  const title = $("floating-point-title");
  const sub = $("floating-point-sub");
  const organ = $("floating-point-organ");
  const action = $("floating-point-action");

  if (badge) {
    badge.textContent = currentView === "front"
      ? (isEn() ? `[Chakra 0${point.num}] Front Coil` : `[차크라 0${point.num}] 전면 코일`)
      : (isEn() ? `[Spine ${point.num}] Back Capacitor` : `[척추 ${point.num}] 후면 축전기`);
    badge.style.color = point.color;
  }
  if (title) {
    title.textContent = isEn() ? point.en : point.ko;
  }
  if (sub) {
    sub.textContent = isEn() ? point.meridianEn : point.meridianKo;
  }
  if (organ) {
    organ.textContent = isEn() ? point.organEn : point.organKo;
  }
  if (action) {
    action.textContent = isEn() ? point.actionEn : point.actionKo;
  }
}

function updateProtocolGuide(point) {
  const ptName = isEn() ? point.en : point.ko;
  const ptCheck = isEn() ? point.checkEn : point.checkKo;

  const step1Title = $("proto-step-1-title");
  const step1Desc = $("proto-step-1-desc");
  const step2Title = $("proto-step-2-title");
  const step2Desc = $("proto-step-2-desc");
  const step3Title = $("proto-step-3-title");
  const step3Desc = $("proto-step-3-desc");

  if (step1Title) {
    step1Title.textContent = isEn() 
      ? `${ptCheck} Voltage Check (25~30s)` 
      : `${ptCheck} 전압 체크 (25~30초)`;
  }
  if (step1Desc) {
    step1Desc.textContent = isEn()
      ? `Apply probe perpendicularly to the chakra evaluation point (${ptCheck}) for 25-30s to evaluate segmental potential and stabilize autonomic nervous excitation.`
      : `펜 도자를 해당 차크라 전압 체크 포인트(${ptCheck})에 25~30초간 직각으로 안착하여 분절 에너지 전압 상태를 확인하고 자율신경계 흥분을 안정화합니다.`;
  }

  if (step2Title) {
    step2Title.textContent = isEn()
      ? `${ptName} Voltage Supply & 528Hz Timer (3~5m)`
      : `${ptName} 전압 공급 & 528Hz 타이머 (3~5분)`;
  }
  if (step2Desc) {
    step2Desc.textContent = isEn()
      ? `Place the probe firmly on the bio point and run the 528Hz timer (3-5 min) to recharge cell membrane potential and maximize Prana life-force circulation.`
      : `차크라 바이오 포인트에 도자를 수직으로 밀착하고 528Hz 치유 타이머(3~5분)를 가동하여 세포막 전위를 충전하고 쁘라나(생명 에너지) 순환을 극대화합니다.`;
  }

  if (step3Title) {
    step3Title.textContent = currentView === "front"
      ? (isEn() ? "Chakra & Spinal Capacitors Sequential Therapy" : "상하 차크라 및 후면 축전기 순차 시술")
      : (isEn() ? "Spinal Capacitors & Front Coils Sequential Therapy" : "척추 축전기 및 연계 전면 코일 순차 시술");
  }
  if (step3Desc) {
    step3Desc.textContent = currentView === "front"
      ? (isEn()
        ? "Apply microcurrent sequentially to interconnected front coils and back capacitors for 1 minute each to release suppressed emotions (anxiety, grief, anger, fear) and harmonize total body bio-current."
        : "선택된 차크라와 연계된 전면 코일 및 후면 축전기 포인트를 순차적으로 각 1분씩 통전하여 억압된 감정(불안·분노·슬픔·두려움)을 정화하고 전신 생체 전류를 조율합니다.")
      : (isEn()
        ? "Apply microcurrent sequentially to interconnected spinal capacitors and front coils for 1 minute each to clear emotional stress and recharge autonomic organ voltage."
        : "선택된 축전기와 연계된 척추 분절 및 전면 코일 포인트를 순차적으로 각 1분씩 통전하여 자율신경계 긴장을 풀고 장기 세포막 전위를 재충전합니다.");
  }
}

function selectPoint(idx) {
  activePointIndex = idx;
  renderActivePoint();
}

window.switchView = switchView;
function switchView(view) {
  currentView = view;
  activePointIndex = 0;

  const btnFront = $("view-toggle-front");
  const btnBack = $("view-toggle-back");
  const headerBtnFront = $("stage-toggle-front");
  const headerBtnBack = $("stage-toggle-back");
  const countBadge = $("view-item-count");

  if (btnFront) btnFront.classList.toggle("active", view === "front");
  if (btnBack) btnBack.classList.toggle("active", view === "back");
  if (headerBtnFront) headerBtnFront.classList.toggle("active", view === "front");
  if (headerBtnBack) headerBtnBack.classList.toggle("active", view === "back");

  if (countBadge) {
    countBadge.textContent = view === "front"
      ? (isEn() ? "7 Chakras" : "7개 차크라")
      : (isEn() ? "6 Capacitors" : "6개 축전기");
  }

  history.replaceState(null, "", `#${view}`);

  renderSidebarList();
  renderActivePoint();
}

// 4. Timer Controls & Logic
function updateTimerDisplay() {
  const m = Math.floor(remainingTimerSeconds / 60);
  const s = remainingTimerSeconds % 60;
  const timeStr = `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;

  const timeDisplay = $("timer-time-display");
  if (timeDisplay) timeDisplay.textContent = timeStr;

  const bar = $("timer-bar-fill");
  if (bar && totalTimerSeconds > 0) {
    const pct = (remainingTimerSeconds / totalTimerSeconds) * 100;
    bar.style.width = `${Math.max(0, Math.min(100, pct))}%`;
  }
}

function toggleTimer() {
  getAudioContext();
  if (isTimerRunning) {
    pauseTimer();
  } else {
    startTimer();
  }
}

function startTimer() {
  getAudioContext();

  if (remainingTimerSeconds <= 0) {
    remainingTimerSeconds = totalTimerSeconds;
  }

  isTimerRunning = true;
  updateTimerDisplay();

  const toggleBtn = $("timer-toggle-btn");
  const label = $("timer-btn-label");
  const icon = $("timer-play-icon");
  const badge = $("timer-status-badge");
  const pulseDot = $("freq-pulse-dot");
  const freqLabel = $("freq-label");

  if (toggleBtn) toggleBtn.classList.remove("paused");
  if (label) label.textContent = isEn() ? "Pause" : "일시정지";
  if (icon) icon.textContent = "⏸";
  if (badge) {
    badge.textContent = isEn() ? "528Hz Active" : "528Hz 치유 중";
    badge.className = "timer-status-badge running";
  }
  if (pulseDot) pulseDot.className = "freq-pulse-dot pulsing";
  if (freqLabel) freqLabel.textContent = isEn() ? "528Hz Healing Tone Active" : "528Hz 주파수 발생 중";

  start528HzSound();

  if (timerInterval) clearInterval(timerInterval);
  timerInterval = setInterval(() => {
    if (remainingTimerSeconds > 0) {
      remainingTimerSeconds--;
      updateTimerDisplay();

      if (remainingTimerSeconds === 0) {
        finishTimer();
      }
    }
  }, 1000);
}

function pauseTimer() {
  isTimerRunning = false;
  if (timerInterval) {
    clearInterval(timerInterval);
    timerInterval = null;
  }

  stop528HzSound();

  const toggleBtn = $("timer-toggle-btn");
  const label = $("timer-btn-label");
  const icon = $("timer-play-icon");
  const badge = $("timer-status-badge");
  const pulseDot = $("freq-pulse-dot");
  const freqLabel = $("freq-label");

  if (toggleBtn) toggleBtn.classList.add("paused");
  if (label) label.textContent = isEn() ? "Resume" : "계속 시작";
  if (icon) icon.textContent = "▶";
  if (badge) {
    badge.textContent = isEn() ? "Paused" : "일시정지";
    badge.className = "timer-status-badge";
  }
  if (pulseDot) pulseDot.className = "freq-pulse-dot";
  if (freqLabel) freqLabel.textContent = isEn() ? "Healing Paused" : "치유 일시정지";
}

function resetTimer() {
  pauseTimer();
  remainingTimerSeconds = totalTimerSeconds;
  updateTimerDisplay();

  const toggleBtn = $("timer-toggle-btn");
  const label = $("timer-btn-label");
  const icon = $("timer-play-icon");
  const badge = $("timer-status-badge");
  const pulseDot = $("freq-pulse-dot");
  const freqLabel = $("freq-label");

  if (toggleBtn) toggleBtn.classList.remove("paused");
  if (label) label.textContent = isEn() ? "Start Healing Timer" : "치유 타이머 시작";
  if (icon) icon.textContent = "▶";
  if (badge) {
    badge.textContent = isEn() ? "Ready" : "대기 중";
    badge.className = "timer-status-badge";
  }
  if (pulseDot) pulseDot.className = "freq-pulse-dot";
  if (freqLabel) freqLabel.textContent = isEn() ? "528Hz Healing Frequency Ready" : "528Hz 치유 주파수 준비";
}

function finishTimer() {
  pauseTimer();
  remainingTimerSeconds = 0;
  updateTimerDisplay();

  const badge = $("timer-status-badge");
  const freqLabel = $("freq-label");
  const label = $("timer-btn-label");

  if (badge) {
    badge.textContent = isEn() ? "Completed 🔔" : "치유 완료 🔔";
    badge.className = "timer-status-badge finished";
  }
  if (freqLabel) freqLabel.textContent = isEn() ? "Singing Bowl Completion Chime" : "싱잉볼 마무리 알림";
  if (label) label.textContent = isEn() ? "Restart" : "다시 시작";

  playSingingBowlBell();
}

function setTimerMinutes(mins) {
  getAudioContext();
  mins = Math.max(1, Math.min(10, mins));
  totalTimerSeconds = mins * 60;
  resetTimer();

  document.querySelectorAll(".preset-btn").forEach((btn) => {
    const bMin = parseInt(btn.dataset.min, 10);
    btn.classList.toggle("active", bMin === mins);
  });
}

function adjustTimerSeconds(delta) {
  getAudioContext();
  const next = Math.max(30, Math.min(600, remainingTimerSeconds + delta));
  remainingTimerSeconds = next;
  totalTimerSeconds = Math.max(remainingTimerSeconds, totalTimerSeconds);
  updateTimerDisplay();
}

function initTimerEvents() {
  document.querySelectorAll(".preset-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const min = parseInt(btn.dataset.min, 10);
      if (min) setTimerMinutes(min);
    });
  });

  const incBtn = $("timer-inc-btn");
  if (incBtn) incBtn.addEventListener("click", () => adjustTimerSeconds(30));

  const decBtn = $("timer-dec-btn");
  if (decBtn) decBtn.addEventListener("click", () => adjustTimerSeconds(-30));

  const toggleBtn = $("timer-toggle-btn");
  if (toggleBtn) toggleBtn.addEventListener("click", toggleTimer);

  const resetBtn = $("timer-reset-btn");
  if (resetBtn) resetBtn.addEventListener("click", resetTimer);

  // Audio mute toggle
  const soundBtn = $("timer-sound-btn");
  if (soundBtn) {
    soundBtn.addEventListener("click", () => {
      getAudioContext();
      isSoundMuted = !isSoundMuted;
      soundBtn.classList.toggle("muted", isSoundMuted);
      const icon = $("sound-btn-icon");
      const text = $("sound-btn-text");
      if (icon) icon.textContent = isSoundMuted ? "🔇" : "🔊";
      if (text) text.textContent = isSoundMuted ? (isEn() ? "Muted" : "음소거") : (isEn() ? "Sound On" : "치유음 켜짐");

      if (isSoundMuted) {
        stop528HzSound();
      } else if (isTimerRunning) {
        start528HzSound();
      }
    });
  }

  // Volume slider
  const volSlider = $("timer-volume-slider");
  if (volSlider) {
    volSlider.addEventListener("input", (e) => {
      getAudioContext();
      userVolume = parseFloat(e.target.value);
      if (toneGainNode && audioCtx && !isSoundMuted) {
        toneGainNode.gain.setValueAtTime(0.18 * userVolume, audioCtx.currentTime);
      }
    });
  }
}

// 5. Bilingual Language Support
function applyLang(lang) {
  currentSiteLang = lang;
  localStorage.setItem("novacell_site_lang", lang);

  const navTherapy = $("nav-therapy");
  const navChakra = $("nav-chakra");
  const navCircuit = $("nav-circuit");
  const brandSub = $("brand-sub-title");

  // Update Item Count Badge
  const countBadge = $("view-item-count");
  if (countBadge) {
    countBadge.textContent = currentView === "front"
      ? (lang === "en" ? "7 Chakras" : "7개 차크라")
      : (lang === "en" ? "6 Capacitors" : "6개 축전기");
  }

  const listMetaLabel = $("list-meta-label");
  if (listMetaLabel) {
    listMetaLabel.textContent = lang === "en" ? "POINTS LIST" : "포인트 목록";
  }

  // Update Timer localized texts
  const statusBadge = $("timer-status-badge");
  if (statusBadge && !isTimerRunning) {
    statusBadge.textContent = lang === "en" ? "Ready" : "대기 중";
  }
  const freqLabel = $("freq-label");
  if (freqLabel && !isTimerRunning) {
    freqLabel.textContent = lang === "en" ? "528Hz Healing Frequency Ready" : "528Hz 치유 주파수 준비";
  }
  const soundText = $("sound-btn-text");
  if (soundText) {
    soundText.textContent = isSoundMuted
      ? (lang === "en" ? "Muted" : "음소거")
      : (lang === "en" ? "Sound On" : "치유음 켜짐");
  }
  document.querySelectorAll(".preset-btn").forEach((btn) => {
    const min = btn.dataset.min;
    btn.textContent = lang === "en" ? `${min}m` : `${min}분`;
  });

  // Sidebar Drawer
  const drwT = $("sidebar-drawer-title");
  const drwP = $("sidebar-drawer-text");
  if (lang === "en") {
    if (drwT) drwT.textContent = "⚡ Front Coils & Back Capacitors Model";
    if (drwP) drwP.innerHTML = "Hollow visceral organs (small intestine, stomach, large intestine, bladder, gall bladder) function as <strong>Front Coils</strong>; solid organs (heart, lungs, spleen, kidneys, liver) act as <strong>Back Capacitors</strong> to dynamically cross-regulate bio-voltage.";
  } else {
    if (drwT) drwT.textContent = "⚡ 전면 코일 & 후면 축전기 모델";
    if (drwP) drwP.innerHTML = "속이 빈 장기(소장, 위장, 대장, 방광, 담낭)는 <strong>전면 코일(Coils)</strong>, 단단한 실질 장기(심장, 폐, 비장, 신장, 간)는 <strong>후면 축전기(Capacitors)</strong>로 기능하여 생체 전위를 교차 조율합니다.";
  }

  if (lang === "en") {
    document.title = "NovaCell Healing Points | Chakra Bio Points Master Therapy Guide";
    if (navTherapy) navTherapy.textContent = "Condition Therapy Points";
    if (navChakra) navChakra.textContent = "Chakra Bio Points";
    if (navCircuit) navCircuit.textContent = "Neural Circuit Therapy";
    if (brandSub) brandSub.textContent = "CHAKRA BIO POINT GUIDE";

    // Sidebar Header
    const sideEye = $("sidebar-eyebrow"); if (sideEye) sideEye.textContent = "BOOK PAGES 195-203";
    const sideTitle = $("sidebar-main-title"); if (sideTitle) sideTitle.innerHTML = `Chakra Bio Points<br><span class="accent-title">NovaCell Master Therapy</span>`;
    const sideIntro = $("sidebar-intro"); if (sideIntro) sideIntro.textContent = "Guides the 7 energy transformation centers along the Conception Vessel (CV) and spinal capacitors along the Governor Vessel (GV).";

    // View Toggles
    const btnF = $("view-toggle-front"); if (btnF) btnF.innerHTML = `<span>🔆 Front Chakras (Coils)</span>`;
    const btnB = $("view-toggle-back"); if (btnB) btnB.innerHTML = `<span>⚡ Back Capacitors</span>`;
    const stF = $("stage-toggle-front"); if (stF) stF.textContent = "Front View";
    const stB = $("stage-toggle-back"); if (stB) stB.textContent = "Back View";

    // Floating Card Labels
    const flLbl1 = $("floating-label-pt"); if (flLbl1) flLbl1.textContent = "Anatomical Point";
    const flLbl2 = $("floating-label-org"); if (flLbl2) flLbl2.textContent = "Organ & Emotional Regulation";
    const flLbl3 = $("floating-label-act"); if (flLbl3) flLbl3.textContent = "Bio-Action & Voltage Supply";

    // Timer Card Labels
    const timerTitle = $("timer-title"); if (timerTitle) timerTitle.textContent = "528Hz Cellular Voltage Healing Timer";
    const timerSub = $("timer-sub"); if (timerSub) timerSub.textContent = "DNA Repair Frequency · Tibetan Singing Bowl Chime";
    const timerNote = $("timer-guide-note"); if (timerNote) timerNote.innerHTML = `* The <strong>528Hz frequency</strong> awakens depleted cellular voltage and accelerates mitochondrial ATP synthesis. A deep Tibetan singing bowl chime rings upon completion.`;
    const toggleLabel = $("timer-btn-label"); if (toggleLabel) toggleLabel.textContent = isTimerRunning ? "Pause" : "Start Healing Timer";
    const resetLabel = $("timer-reset-label"); if (resetLabel) resetLabel.textContent = "Reset";

    // Clinical Protocol Guide
    const protoBadge = $("proto-badge-main"); if (protoBadge) protoBadge.textContent = "⚡ NOVACELL CLINICAL PROTOCOL";
    const protoLink = $("proto-badge-link"); if (protoLink) protoLink.textContent = "Linked to Clinical Case Guide";
    const protoTitle = $("proto-guide-title"); if (protoTitle) protoTitle.textContent = "NovaCell Chakra Bio Points Clinical Protocol Guide";
    const protoSub = $("proto-guide-sub"); if (protoSub) protoSub.textContent = "NovaCell Microcurrent Probe Chakra Protocol & Clinical Pearls";

    const prmL1 = $("proto-prm-label-1"); if (prmL1) prmL1.textContent = "Output Intensity";
    const prmV1 = $("proto-prm-val-1"); if (prmV1) prmV1.textContent = "High-Voltage Microcurrent Level 03~05 (Gentle Pulse)";
    const prmL2 = $("proto-prm-label-2"); if (prmL2) prmL2.textContent = "Probe Technique";
    const prmV2 = $("proto-prm-val-2"); if (prmV2) prmV2.textContent = "Gradual Perpendicular Compression (Point Compression)";
    const prmL3 = $("proto-prm-label-3"); if (prmL3) prmL3.textContent = "Conductivity & Stinging Remedy";
    const prmV3 = $("proto-prm-val-3"); if (prmV3) prmV3.textContent = "Alcohol or Saline / Conductive Mist Spray";

    const seqHead = $("proto-seq-heading"); if (seqHead) seqHead.textContent = "Treatment Sequence (Clinical 3 Steps)";
    const b1 = $("proto-step-1-badge"); if (b1) b1.textContent = "Step 1 [Voltage Check]";
    const b2 = $("proto-step-2-badge"); if (b2) b2.textContent = "Step 2 [Voltage Supply]";
    const b3 = $("proto-step-3-badge"); if (b3) b3.textContent = "Step 3 [Chakra Balancing]";

    // Pearls
    const pearlsHead = $("proto-pearls-heading"); if (pearlsHead) pearlsHead.textContent = "💡 Clinical Pearls & Expert Insights";
    const pearlsList = $("proto-pearls-list");
    if (pearlsList) {
      pearlsList.innerHTML = `
        <li><strong>Perpendicular Fossa Seating:</strong> Do not scrub or forcefully push the probe tip. Gently seat the pen tip perpendicularly into anatomical depressions (acupoints & tendon-fascia junctions) before applying microcurrent.</li>
        <li><strong>Maintain Conductive Moisture:</strong> Lightly spray conductive mist, alcohol, or normal saline onto the skin. Keeping the area hydrated maximizes deep current penetration and eliminates sharp stinging sensations.</li>
        <li><strong>528Hz Breath Synchronization:</strong> Play the 528Hz healing sound and guide the patient through diaphragmatic breathing (4s inhale, 6s exhale). Activating parasympathetic tone maximizes cellular voltage uptake.</li>
        <li><strong>Post-Session Re-assessment:</strong> When the deep Tibetan singing bowl chime rings, remove the probe and immediately re-evaluate the joint Range of Motion (ROM), pain level, and energy vitality.</li>
      `;
    }

    // Circuit Pairs Section
    const pairsHead = $("pairs-heading"); if (pairsHead) pairsHead.textContent = "6 Biological Circuit Pairs & Emotional Transformation";
    renderCircuitPairs("en");

    // Principles Section
    const prinHead = $("principles-heading"); if (prinHead) prinHead.textContent = "Bio Point Principles from the Book";
    renderPrinciples("en");

    // Evidence Note
    const evText = $("evidence-disclaimer-text");
    if (evText) {
      evText.textContent = "This page is an educational interface referencing pages 195-203 of 『NovaCell Master Therapy』 by Chang-Hyuk Park. It guides users through book-documented chakras, bio points, and organ resonance, without asserting independent verification of diagnostic or therapeutic outcomes. Always consult qualified clinical judgment, anatomy, and individual contraindications before application.";
    }

    // Lang button active state
    const langBtn = $("lang-toggle-btn");
    if (langBtn) {
      const koOpt = langBtn.querySelector(".lang-opt.ko");
      const enOpt = langBtn.querySelector(".lang-opt.en");
      if (koOpt) koOpt.classList.remove("active");
      if (enOpt) enOpt.classList.add("active");
    }
  } else {
    document.title = "NovaCell Healing Points | 차크라 바이오 포인트 노바셀 통치 요법";
    if (navTherapy) navTherapy.textContent = "질환별 치료 포인트";
    if (navChakra) navChakra.textContent = "차크라 바이오 포인트";
    if (navCircuit) navCircuit.textContent = "신경 생체 회로";
    if (brandSub) brandSub.textContent = "CHAKRA BIO POINT GUIDE";

    // Sidebar Header
    const sideEye = $("sidebar-eyebrow"); if (sideEye) sideEye.textContent = "BOOK PAGES 195-203";
    const sideTitle = $("sidebar-main-title"); if (sideTitle) sideTitle.innerHTML = `Chakra Bio Points<br><span class="accent-title">차크라 바이오 포인트 노바셀 통치 요법</span>`;
    const sideIntro = $("sidebar-intro"); if (sideIntro) sideIntro.textContent = "신체 전면의 임맥(CV)을 따르는 7개 쁘라나 코일과 후면 독맥(GV)을 따르는 척추 축전기 포인트를 순차적으로 안내합니다.";

    // View Toggles
    const btnF = $("view-toggle-front"); if (btnF) btnF.innerHTML = `<span>🔆 전면 차크라 (Front Coils)</span>`;
    const btnB = $("view-toggle-back"); if (btnB) btnB.innerHTML = `<span>⚡ 후면 축전기 (Back Capacitors)</span>`;
    const stF = $("stage-toggle-front"); if (stF) stF.textContent = "전면 도해";
    const stB = $("stage-toggle-back"); if (stB) stB.textContent = "후면 도해";

    // Floating Card Labels
    const flLbl1 = $("floating-label-pt"); if (flLbl1) flLbl1.textContent = "해부학적 전환점";
    const flLbl2 = $("floating-label-org"); if (flLbl2) flLbl2.textContent = "연계 장기 및 감정 조절";
    const flLbl3 = $("floating-label-act"); if (flLbl3) flLbl3.textContent = "생체 작용 및 전압 공급";

    // Timer Card Labels
    const timerTitle = $("timer-title"); if (timerTitle) timerTitle.textContent = "528Hz 세포 전압 치유 타이머";
    const timerSub = $("timer-sub"); if (timerSub) timerSub.textContent = "DNA 복원 주파수 · 싱잉볼 차임 벨";
    const timerNote = $("timer-guide-note"); if (timerNote) timerNote.innerHTML = `* <strong>528Hz 주파수</strong>는 손상된 세포 전압을 깨우고 미토콘드리아 ATP 생성을 촉진합니다. 타이머 종료 시 티베트 싱잉볼 차임 벨이 깊고 맑게 울립니다.`;
    const toggleLabel = $("timer-btn-label"); if (toggleLabel) toggleLabel.textContent = isTimerRunning ? "일시정지" : "치유 타이머 시작";
    const resetLabel = $("timer-reset-label"); if (resetLabel) resetLabel.textContent = "리셋";

    // Clinical Protocol Guide
    const protoBadge = $("proto-badge-main"); if (protoBadge) protoBadge.textContent = "⚡ NOVACELL CLINICAL PROTOCOL";
    const protoLink = $("proto-badge-link"); if (protoLink) protoLink.textContent = "임상 가이드 & 증례 분석실 연계";
    const protoTitle = $("proto-guide-title"); if (protoTitle) protoTitle.textContent = "노바셀 의료기 차크라 바이오 포인트 적용 임상 시술 가이드";
    const protoSub = $("proto-guide-sub"); if (protoSub) protoSub.textContent = "NovaCell Microcurrent Probe Chakra Protocol & Clinical Pearls";

    const prmL1 = $("proto-prm-label-1"); if (prmL1) prmL1.textContent = "출력 강도 레벨";
    const prmV1 = $("proto-prm-val-1"); if (prmV1) prmV1.textContent = "고전압 미세전류 03~05단계 (편안한 펄스 진동)";
    const prmL2 = $("proto-prm-label-2"); if (prmL2) prmL2.textContent = "펜 도자 접촉 방식";
    const prmV2 = $("proto-prm-val-2"); if (prmV2) prmV2.textContent = "점진적 심부 압박 직각 안착 (Point Compression)";
    const prmL3 = $("proto-prm-label-3"); if (prmL3) prmL3.textContent = "따끔거림 예방 / 전도성";
    const prmV3 = $("proto-prm-val-3"); if (prmV3) prmV3.textContent = "알콜 또는 생리식염수/전도성 미스트 스프레이";

    const seqHead = $("proto-seq-heading"); if (seqHead) seqHead.textContent = "임상 시술 순서 (Treatment Sequence)";
    const b1 = $("proto-step-1-badge"); if (b1) b1.textContent = "1단계 [전압 체크]";
    const b2 = $("proto-step-2-badge"); if (b2) b2.textContent = "2단계 [전압 공급]";
    const b3 = $("proto-step-3-badge"); if (b3) b3.textContent = "3단계 [차크라 밸런싱]";

    // Pearls
    const pearlsHead = $("proto-pearls-heading"); if (pearlsHead) pearlsHead.textContent = "💡 임상 시술 노하우 & Clinical Pearls";
    const pearlsList = $("proto-pearls-list");
    if (pearlsList) {
      pearlsList.innerHTML = `
        <li><strong>해부학적 함요처 직각 안착:</strong> 도자 팁을 강하게 비비거나 찌르지 말고, 뼈 경계 오목한 곳(혈자리 및 건·근막 접합부)에 펜촉을 가만히 직각으로 안착시킨 상태에서 전기를 인가합니다.</li>
        <li><strong>전도성 수분감 유지:</strong> 피부 표면에 전도성 미스트나 알콜/생리식염수를 가볍게 도포하여 촉촉한 수분감을 유지하면 미세전류의 심부 침투율과 통전 효율이 극대화되고 따끔거림이 예방됩니다.</li>
        <li><strong>528Hz 치유 주파수 호흡 동기화:</strong> 타이머와 528Hz 음원을 가동하며 환자가 편안한 복식 호흡(들숨 4초, 날숨 6초)을 하도록 유도하면 부교감 신경이 활성화되어 전압 흡수가 최적화됩니다.</li>
        <li><strong>싱잉볼 알림 종료 후 재평가:</strong> 세션 완료 시 맑게 울리는 티베트 싱잉볼 종소리와 함께 도자를 떼고, 관절 가동 범위(ROM)와 통증 경감 및 바이오 에너지 활력을 재평가합니다.</li>
      `;
    }

    // Circuit Pairs Section
    const pairsHead = $("pairs-heading"); if (pairsHead) pairsHead.textContent = "6개 생체 회로 짝과 감정 밸런싱";
    renderCircuitPairs("ko");

    // Principles Section
    const prinHead = $("principles-heading"); if (prinHead) prinHead.textContent = "책에 수록된 차크라 바이오 포인트 5대 원리";
    renderPrinciples("ko");

    // Evidence Note
    const evText = $("evidence-disclaimer-text");
    if (evText) {
      evText.textContent = "이 페이지는 박창혁 저 『노바셀 통치 요법』 인쇄 페이지 195~203쪽의 내용을 앱에서 찾기 쉽게 옮긴 교육·작업용 화면입니다. 책에 기재된 적용 질환, 회로 설명과 포인트를 안내하며, 앱이 치료 효과나 환자별 완치를 독립적으로 검증했다는 뜻은 아닙니다. 실제 적용 전 환자 상태, 금기, 해부학적 구조와 임상 판단을 별도로 확인해 주세요.";
    }

    // Lang button active state
    const langBtn = $("lang-toggle-btn");
    if (langBtn) {
      const koOpt = langBtn.querySelector(".lang-opt.ko");
      const enOpt = langBtn.querySelector(".lang-opt.en");
      if (koOpt) koOpt.classList.add("active");
      if (enOpt) enOpt.classList.remove("active");
    }
  }

  renderSidebarList();
  renderActivePoint();
}

function renderCircuitPairs(lang) {
  const container = $("circuit-pairs-grid");
  if (!container) return;
  container.innerHTML = "";

  CIRCUIT_PAIRS.forEach((p) => {
    const card = document.createElement("article");
    card.className = "pair-item-card";
    const pairName = lang === "en" ? p.pairEn : p.pairKo;
    const emotion = lang === "en" ? p.emotionEn : p.emotionKo;

    card.innerHTML = `
      <div class="pair-code-badge">${p.code}</div>
      <div class="pair-info">
        <strong class="pair-name">${pairName}</strong>
        <span class="pair-emotion">${emotion}</span>
      </div>
    `;
    container.appendChild(card);
  });
}

function renderPrinciples(lang) {
  const container = $("principles-grid");
  if (!container) return;
  container.innerHTML = "";

  const dataKo = [
    { num: "01", title: "차크라와 바이오 포인트의 구분", desc: "차크라 위치와 가깝지만 회로들이 교차하는 전환점을 바이오 포인트로 정의합니다." },
    { num: "02", title: "전면(CV)과 후면(GV) 기본 케이블", desc: "임맥과 독맥을 신체 앞뒤로 전압을 전달하는 주요 기본 케이블로 활용합니다." },
    { num: "03", title: "중앙점과 좌우 측면점", desc: "두개골, 목, 가슴, 복부, 골반 등의 중앙점과 좌우로 전압을 보내는 측면점이 존재합니다." },
    { num: "04", title: "기관별 회로와 배터리 스택", desc: "근육은 배터리, 장기는 전압을 공급받는 소비처로 작용하는 생체 전기 회로망입니다." },
    { num: "05", title: "전면 코일과 후면 축전기", desc: "속이 빈 장기는 전면 코일, 단단한 장기는 후면 축전기 역할을 수행하는 테슬라 공명 구조입니다." }
  ];

  const dataEn = [
    { num: "01", title: "Chakra vs. Bio Point Distinction", desc: "Bio points are defined as specific transition hubs where multiple circuits intersect along CV/GV." },
    { num: "02", title: "Front (CV) & Back (GV) Primary Cables", desc: "Conception Vessel and Governor Vessel act as central transmission cables for biological voltage." },
    { num: "03", title: "Central Terminals & Lateral Points", desc: "Paired central switches at cranium, throat, chest, abdomen and pelvis feed lateral bilateral pathways." },
    { num: "04", title: "Organ Circuits & Muscle Battery Stacks", desc: "Muscles act as rechargeable battery stacks supplying high-voltage bio-current to internal organs." },
    { num: "05", title: "Front Coils & Back Capacitors", desc: "Hollow visceral organs act as front coils; solid dense organs function as posterior capacitors." }
  ];

  const list = lang === "en" ? dataEn : dataKo;

  list.forEach((item) => {
    const card = document.createElement("article");
    card.className = "principle-card";
    card.innerHTML = `
      <div class="principle-num">${item.num}</div>
      <div class="principle-body">
        <h4>${item.title}</h4>
        <p>${item.desc}</p>
      </div>
    `;
    container.appendChild(card);
  });
}

function initViewToggles() {
  const btnFront = $("view-toggle-front");
  const btnBack = $("view-toggle-back");
  const stageBtnFront = $("stage-toggle-front");
  const stageBtnBack = $("stage-toggle-back");

  if (btnFront) btnFront.addEventListener("click", () => switchView("front"));
  if (btnBack) btnBack.addEventListener("click", () => switchView("back"));
  if (stageBtnFront) stageBtnFront.addEventListener("click", () => switchView("front"));
  if (stageBtnBack) stageBtnBack.addEventListener("click", () => switchView("back"));

  // Check URL hash or param
  const urlParams = new URLSearchParams(window.location.search);
  if (window.location.hash.toLowerCase().indexOf("back") !== -1 || urlParams.get("view") === "back") {
    switchView("back");
  } else {
    switchView("front");
  }
}

function initLanguageToggle() {
  const langBtn = $("lang-toggle-btn");
  let currentLang = localStorage.getItem("novacell_site_lang") || "ko";

  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.get("lang") === "en") {
    currentLang = "en";
  }

  if (langBtn) {
    langBtn.addEventListener("click", () => {
      const next = currentSiteLang === "ko" ? "en" : "ko";
      applyLang(next);
    });
  }

  applyLang(currentLang);
}

document.addEventListener("DOMContentLoaded", () => {
  initViewToggles();
  initTimerEvents();
  initLanguageToggle();
  renderSidebarList();
  renderActivePoint();
});
