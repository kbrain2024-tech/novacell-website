/**
 * ==========================================================================
 * NovaCell 7색 차크라 생체 호흡 테라피 & 클래식 호흡 가이드 통합 모듈 (breathingGuide.js)
 * 
 * 1. 7색 무지개 차크라 바이오 호흡 시스템 (14초 4-2-6-2 주기 + 16:9 와이드 미디어)
 * 2. 썸네일 동심원 내부 완벽 정렬 호흡 인터랙티브 서클 (X: 74.2%, Y: 47%)
 * 3. 썸네일 상시 배경 유지 (투명화 제거) & 반응형 자동 비례 축소 보장
 * 4. 한국어 / 영어 (KO / EN) 원클릭 즉각 바이링궐 전환
 * 5. 솔페지오 주파수(174Hz~963Hz) & 자연음 실시간 사운드 엔진 동기화
 * 6. 14초 퀵 챌린지, 연속 루프 즉시 기동, 1시간 딥 테라피 실시간 카운트다운
 * 7. 마음을 다독이는 한/영 긍정 확언 100선 자동 페이드 순환
 * 8. 클래식 5대 호흡 훈련(동조/균등/이완/초보/활력) 100% 완벽 호환
 * ==========================================================================
 */

// ==========================================================================
// 1. 7색 차크라 메타데이터 & 바이링궐 설정 딕셔너리
// ==========================================================================
const CHAKRA_COLORS = {
  red: {
    key: "red",
    hz: 174,
    soundKey: "campfire",
    themeColor: "#ef4444",
    themeGlow: "rgba(239, 68, 68, 0.55)",
    themeDark: "#b91c1c",
    ko: {
      name: "빨강 (Red)",
      chakra: "1차크라 • 물라다라 (174Hz)",
      title: "빨강 (RED) • 세포 활력 & 그라운딩",
      desc: "기초 생명력과 세포 전압을 충전하고 하체 에너지를 단단하게 안정시킵니다.",
      thumb: "breathing/thumbs/ko/red.png"
    },
    en: {
      name: "RED (Root)",
      chakra: "1st Chakra • Muladhara (174Hz)",
      title: "RED • Cellular Vitality & Grounding",
      desc: "Recharges foundational cell voltage and anchors deep grounding stability.",
      thumb: "breathing/thumbs/en/RED.png"
    }
  },
  orange: {
    key: "orange",
    hz: 285,
    soundKey: "stream",
    themeColor: "#f97316",
    themeGlow: "rgba(249, 115, 22, 0.55)",
    themeDark: "#c2410c",
    ko: {
      name: "주황 (Orange)",
      chakra: "2차크라 • 스바디스타나 (285Hz)",
      title: "주황 (ORANGE) • 감정 이완 & 순환 촉진",
      desc: "하복부 혈류 순환을 촉진하고 마음에 맺힌 감정적 긴장을 부드럽게 이완합니다.",
      thumb: "breathing/thumbs/ko/orange.png"
    },
    en: {
      name: "ORANGE (Sacral)",
      chakra: "2nd Chakra • Svadhisthana (285Hz)",
      title: "ORANGE • Emotional Release & Flow",
      desc: "Promotes lower-body circulation and releases accumulated emotional tension.",
      thumb: "breathing/thumbs/en/ORANGE.png"
    }
  },
  yellow: {
    key: "yellow",
    hz: 528,
    soundKey: "forestbirds",
    themeColor: "#eab308",
    themeGlow: "rgba(234, 179, 8, 0.55)",
    themeDark: "#a16207",
    ko: {
      name: "노랑 (Yellow)",
      chakra: "3차크라 • 마니푸라 (528Hz)",
      title: "노랑 (YELLOW) • 자존감 & DNA 기적 회복",
      desc: "솔페지오 미라클 528Hz와 함께 소화기 신경총을 편안하게 조율하고 내면의 자신감을 깨웁니다.",
      thumb: "breathing/thumbs/ko/yellow.png"
    },
    en: {
      name: "YELLOW (Solar Plexus)",
      chakra: "3rd Chakra • Manipura (528Hz)",
      title: "YELLOW • Solar Confidence & DNA Miracle",
      desc: "Harmonizes the solar plexus with 528Hz miracle resonance to awaken inner strength.",
      thumb: "breathing/thumbs/en/YELLOW.png"
    }
  },
  green: {
    key: "green",
    hz: 639,
    soundKey: "stream",
    themeColor: "#22c55e",
    themeGlow: "rgba(34, 197, 94, 0.55)",
    themeDark: "#15803d",
    ko: {
      name: "초록 (Green)",
      chakra: "4차크라 • 아나하타 (639Hz)",
      title: "초록 (GREEN) • 심장 치유 & 자율신경 균형",
      desc: "미주신경을 자극하여 심박변이도(HRV)를 극대화하고 가슴의 답답함과 스트레스를 씻어냅니다.",
      thumb: "breathing/thumbs/ko/green.png"
    },
    en: {
      name: "GREEN (Heart)",
      chakra: "4th Chakra • Anahata (639Hz)",
      title: "GREEN • Heart Coherence & Vagus Balance",
      desc: "Activates vagal tone to peak heart rate variability (HRV) and clear chest oppression.",
      thumb: "breathing/thumbs/en/GREEN.png"
    }
  },
  blue: {
    key: "blue",
    hz: 741,
    soundKey: "waves",
    themeColor: "#38bdf8",
    themeGlow: "rgba(56, 189, 248, 0.55)",
    themeDark: "#0284c7",
    ko: {
      name: "파랑 (Blue)",
      chakra: "5차크라 • 비슈다 (741Hz)",
      title: "파랑 (BLUE) • 호흡기 정화 & 목·어깨 이완",
      desc: "호흡 통로를 시원하게 열어주고 기관지와 성대, 상체 근육의 긴장을 해소합니다.",
      thumb: "breathing/thumbs/ko/blue.png"
    },
    en: {
      name: "BLUE (Throat)",
      chakra: "5th Chakra • Vishuddha (741Hz)",
      title: "BLUE • Respiratory Clearance & Expression",
      desc: "Opens the breath airway clearly and unties tension around neck, vocal cords, and shoulders.",
      thumb: "breathing/thumbs/en/BLUE.png"
    }
  },
  indigo: {
    key: "indigo",
    hz: 852,
    soundKey: "rain",
    themeColor: "#6366f1",
    themeGlow: "rgba(99, 102, 241, 0.55)",
    themeDark: "#4338ca",
    ko: {
      name: "남색 (Indigo)",
      chakra: "6차크라 • 아즈나 (852Hz)",
      title: "남색 (INDIGO) • 뇌 집중 & 송과체 리셋",
      desc: "과열된 뇌파를 알파/세타 영역으로 유도하여 두통 완화와 직관적 초집중을 이끕니다.",
      thumb: "breathing/thumbs/ko/indigo.png"
    },
    en: {
      name: "INDIGO (Third Eye)",
      chakra: "6th Chakra • Ajna (852Hz)",
      title: "INDIGO • Brain Reset & Pineal Focus",
      desc: "Guides overactive brainwaves to calm alpha/theta states, relieving mental fog.",
      thumb: "breathing/thumbs/en/INDIGO.png"
    }
  },
  purple: {
    key: "purple",
    hz: 963,
    soundKey: "singingbowl",
    themeColor: "#a855f7",
    themeGlow: "rgba(168, 85, 247, 0.55)",
    themeDark: "#7e22ce",
    ko: {
      name: "보라 (Purple)",
      chakra: "7차크라 • 사하스라라 (963Hz)",
      title: "보라 (PURPLE) • 딥 슬립 & 초월적 평온",
      desc: "정수리 백회혈 공명과 깊은 서파 수면(Delta)을 유도하여 궁극의 휴식과 전신 치유를 선사합니다.",
      thumb: "breathing/thumbs/ko/purple.png"
    },
    en: {
      name: "PURPLE (Crown)",
      chakra: "7th Chakra • Sahasrara (963Hz)",
      title: "PURPLE • Deep Sleep & Pure Serenity",
      desc: "Connects crown chakra resonance and deep slow-wave delta sleep for ultimate restoration.",
      thumb: "breathing/thumbs/en/PURPLE.png"
    }
  }
};

// ==========================================================================
// 2. 마음을 다독이는 한/영 긍정 확언 100선 데이터셋
// ==========================================================================
const AFFIRMATIONS_KO = [
  "지금 이 순간, 당신은 완벽하고 안전하고 평온합니다.",
  "나는 있는 그대로 소중한 존재이며, 마음의 고요함을 누릴 자격이 있습니다.",
  "깊은 숨을 내쉬며, 마음속의 모든 긴장과 걱정을 편안히 내려놓습니다.",
  "숨을 부드럽게 들이마실 때 평온이 깃들고, 내쉴 때 모든 불안이 나갑니다.",
  "오늘 하루 신체에 쌓인 모든 피로가 바다로 흘러가듯 말끔히 정화됩니다.",
  "진정한 휴식은 환경이 아닌, 내 마음을 향해 부드럽게 시선을 돌릴 때 찾아옵니다.",
  "당신의 몸과 마음은 자연스럽게 회복하고 조화를 이루는 지혜를 품고 있습니다.",
  "귓가에 들리는 부드러운 소리에 집중하며 내면의 오아시스를 만납니다.",
  "나의 두뇌는 자연스럽고 깊은 델타파 주파수와 아름답게 공명합니다.",
  "내일을 마주할 신선하고 맑은 에너지가 호흡을 통해 몸의 구석구석에 채워집니다.",
  "나는 나에게 친절을 베풀며, 스스로를 따뜻하게 안아 줍니다.",
  "지난 상처는 흘러가는 강물처럼 부드럽게 나를 떠나갑니다.",
  "나의 마음은 잔잔한 호수처럼 맑고 고요해집니다.",
  "나는 충분히 잘하고 있으며, 이미 가야 할 길 위에 서 있습니다.",
  "오늘의 나는 어제의 나보다 한 뼘 더 단단하고 평화롭습니다.",
  "모든 들숨에 새 생명이 들어오고, 모든 날숨에 오랜 무게가 실려 나갑니다.",
  "나는 나를 서두르지 않고, 회복의 속도를 온전히 믿습니다.",
  "내 안에는 어떤 폭풍도 잠재울 수 있는 고요한 중심이 있습니다.",
  "나는 지금 이대로의 나를 용서하고 사랑합니다.",
  "발끝부터 정수리까지, 따뜻한 빛이 나를 부드럽게 감쌉니다.",
  "나는 통제할 수 없는 것을 놓아주고, 지금 할 수 있는 것에 머눕니다.",
  "나의 호흡은 나를 늘 안전한 현재로 데려다 줍니다.",
  "슬픔도 기쁨도 나를 스쳐 지나가는 구름임을 압니다.",
  "나는 쉬어도 괜찮으며, 멈추는 것 또한 나아가는 길입니다.",
  "내 몸의 모든 세포가 평온 속에서 새롭게 깨어납니다.",
  "나는 나의 감정을 판단하지 않고, 다정하게 바라봅니다.",
  "오늘 밤, 깊고 편안한 잠이 나를 온전히 회복시켜 줍니다.",
  "나는 매 순간 더 가벼워지고, 더 자유로워집니다.",
  "내 마음의 정원에 평화의 씨앗이 조용히 자라납니다.",
  "나는 두려움이 아닌 사랑을 선택합니다.",
  "지금 이 순간, 나에게 필요한 모든 것은 이미 내 안에 있습니다.",
  "나는 나의 숨소리에 귀 기울이며 깊은 고요로 들어갑니다.",
  "어깨에 짊어진 짐을 잠시 내려놓고, 나는 가만히 쉽니다.",
  "나의 마음은 넓은 하늘처럼 모든 것을 품을 만큼 평온합니다.",
  "나는 나를 둘러싼 모든 것에 감사하며 마음을 엽니다.",
  "상처는 흉터가 아니라 더 깊어진 지혜로 남습니다.",
  "나는 천천히, 다정하게, 나 자신에게로 돌아옵니다.",
  "평온은 늘 내 안에 있었고, 나는 그것을 다시 기억합니다.",
  "나의 몸은 휴식을 받아들이고, 깊은 평화로 가라앉습니다.",
  "나는 완벽하지 않아도 충분히 사랑받을 자격이 있습니다.",
  "이 한 번의 호흡으로, 나는 다시 시작할 수 있습니다.",
  "나는 나의 속도로 피어나는 한 송이 꽃입니다.",
  "마음의 파도가 잔잔해지고, 고요한 수면이 드러납니다.",
  "나는 지나간 일을 흘려보내고, 오늘의 평안에 머눕니다.",
  "나의 내면은 어떤 소란에도 흔들리지 않는 깊은 바다입니다.",
  "나는 나에게 회복할 시간과 공간을 너그럽게 허락합니다.",
  "따뜻한 빛이 내 가슴을 채우고, 모든 어둠을 부드럽게 녹입니다.",
  "나는 매일 조금씩, 더 온전한 나로 치유되어 갑니다.",
  "지금 여기, 나는 평화롭고 충만합니다.",
  "나는 나의 모든 감정을 환영하고, 그것이 지나가도록 허락합니다.",
  "깊은 침묵 속에서 나는 진정한 나를 만납니다.",
  "나는 나를 비교하지 않고, 나만의 길을 평온히 걸어갑니다.",
  "내 마음에 부드러운 자비가 강물처럼 흐릅니다.",
  "나는 안전하며, 보호받고 있으며, 깊이 사랑받고 있습니다.",
  "오늘의 작은 평온이 모여 내 삶을 치유합니다.",
  "나는 긴장을 풀고, 모든 근육을 부드럽게 내려놓습니다.",
  "나의 호흡이 깊어질수록 마음의 고요도 깊어집니다.",
  "나는 어떤 순간에도 나 자신의 편이 되어 줍니다.",
  "내 안의 빛은 결코 꺼지지 않으며, 나를 늘 인도합니다.",
  "나는 지금 이 순간을 온전히 받아들이고 누립니다.",
  "마음의 짐을 내려놓을 때, 나는 비로소 가벼워집니다.",
  "나는 회복하는 나를 인내심을 갖고 다정히 기다립니다.",
  "고요한 음악처럼, 내 마음은 부드럽게 흘러갑니다.",
  "나는 나의 몸이 보내는 신호에 귀 기울이고 보살핍니다.",
  "모든 들숨은 평화를 부르고, 모든 날숨은 안식을 가져옵니다.",
  "나는 과거에 머물지 않고, 지금의 평온을 선택합니다.",
  "나의 마음은 점점 더 맑고 투명해집니다.",
  "나는 나에게 쉼표를 선물할 자격이 있습니다.",
  "내면 깊은 곳에서, 나는 흔들리지 않는 평화를 발견합니다.",
  "나는 나를 향한 모든 비난을 부드럽게 내려놓습니다.",
  "이 순간의 고요가 나를 온전히 감싸 안습니다.",
  "나는 매일 새로워지고, 매일 치유됩니다.",
  "나의 숨결마다 평화가 깃들고 안정이 자리합니다.",
  "나는 충분합니다. 지금 이대로, 나는 완전합니다.",
  "마음의 폭풍이 지나가고, 맑고 고요한 하늘이 드러납니다.",
  "나는 나의 모든 부분을 다정하게 받아들입니다.",
  "깊은 휴식 속에서 나의 영혼은 새 힘을 얻습니다.",
  "나는 두려움을 놓아주고, 신뢰의 품에 안깁니다.",
  "평온한 마음으로, 나는 오늘 하루를 부드럽게 맞이합니다.",
  "나는 나의 회복 여정을 온전히 신뢰합니다.",
  "내 안의 모든 긴장이 따뜻한 물결처럼 녹아내립니다.",
  "나는 고요 속에서 나만의 평화를 길어 올립니다.",
  "지금 이 순간, 나는 안전하고 평온합니다.",
  "나는 나를 부드럽게 대하며, 스스로에게 너그럽습니다.",
  "마음의 고요한 호수 위로 평화의 빛이 반짝입니다.",
  "나는 천천히 숨 쉬며, 깊은 안정 속으로 가라앉습니다.",
  "나의 마음은 매 순간 더 단단하고 평화로워집니다.",
  "나는 나의 모든 경험에서 치유의 의미를 발견합니다.",
  "오늘 나는 나에게 가장 다정한 친구가 되어 줍니다.",
  "나는 어둠 속에서도 내 안의 빛을 신뢰합니다.",
  "평화는 내가 선택할 때마다 늘 나를 찾아옵니다.",
  "나는 깊은 명상 속에서 무한한 고요와 하나가 됩니다.",
  "나의 몸과 마음은 완전한 균형과 조화를 회복합니다.",
  "나는 지나온 모든 길에 감사하며 평온히 머눕니다.",
  "모든 들숨에 치유가, 모든 날숨에 해방이 함께합니다.",
  "나는 나의 내면에서 흔들림 없는 안식처를 발견합니다.",
  "나는 매 순간 사랑받고 있으며, 결코 혼자가 아닙니다.",
  "고요한 마음으로, 나는 새로운 하루의 평화를 맞이합니다.",
  "나는 평온하고, 회복되었으며, 온전히 치유되었습니다."
];

const AFFIRMATIONS_EN = [
  "In this very moment, you are completely safe, protected, and peaceful.",
  "I am deeply worthy as I am, deserving pure stillness and calm.",
  "With every gentle exhale, I release all tension, stress, and worry.",
  "Inhaling serenity into every cell, exhaling all fear and hesitation.",
  "All physical and mental fatigue flows away like water into the endless ocean.",
  "True tranquility begins when I gently turn my gaze inward with love.",
  "My body and mind hold infinite wisdom to naturally restore perfect balance.",
  "Listening to this soothing resonance, I awaken my inner sacred sanctuary.",
  "My brain synchronizes effortlessly with healing delta wave frequencies.",
  "Fresh, radiant life force fills every corner of my body with each breath.",
  "I offer myself warmth, compassion, and gentle kindness.",
  "Old hurts and burdens float away softly like a calm, passing river.",
  "My mind becomes as crystal clear and peaceful as a tranquil mountain lake.",
  "I am doing wonderfully well, walking steadily along my authentic path.",
  "Today I stand stronger, wiser, and more deeply centered than yesterday.",
  "Every inhale breathes new life; every exhale lets go of past weight.",
  "I do not rush myself; I trust the gentle timing of my healing.",
  "Deep within me lies a quiet center that no outside storm can shake.",
  "I forgive myself completely and embrace who I am with total unconditional love.",
  "From my toes to the crown of my head, healing light embraces me.",
  "I let go of what I cannot control and rest gracefully in the present.",
  "My conscious breath always guides me back to the safety of the now.",
  "Joy and sorrow are merely passing clouds across the vast blue sky of my soul.",
  "It is safe to rest; pausing is an essential part of moving forward.",
  "Every cell in my body awakens renewed in blissful serenity.",
  "I observe my emotions with tenderness and without judgment.",
  "Deep, rejuvenating sleep completely restores my mind and body tonight.",
  "With every breath, I feel lighter, freer, and deeply liberated.",
  "Seeds of harmony and peace are blooming quietly within my heart.",
  "I choose love over fear, and peace over struggle.",
  "Everything I truly need in this sacred moment is already alive within me.",
  "Listening to the rhythm of my breath, I enter profound tranquility.",
  "I set down the invisible weight upon my shoulders and simply breathe.",
  "My consciousness is vast like the open sky, holding space for all.",
  "I open my heart with boundless gratitude for all living things.",
  "Scars transform into sacred wisdom, strength, and deeper compassion.",
  "Slowly and gently, I return home to my true, peaceful self.",
  "Peace has always lived within me; now I remember and embrace it.",
  "My entire body welcomes rest and sinks into effortless serenity.",
  "Even imperfect, I am whole, complete, and infinitely loved.",
  "With this single conscious breath, I begin anew with grace.",
  "I am a rare and beautiful flower blooming in my own sacred timing.",
  "The waves of my restless mind subside into a calm, glassy stillness.",
  "I release what has passed and abide in the stillness of today.",
  "My inner core is a deep ocean, undisturbed by surface currents.",
  "I generously grant myself time, space, and tenderness to heal.",
  "Warm golden light fills my heart and gently dissolves all darkness.",
  "Every single day, I return a little more to my whole, vibrant self.",
  "Here and now, I am peaceful, centered, and deeply fulfilled.",
  "I welcome all my emotions and allow them to flow through and pass.",
  "In sacred silence, I meet the authentic, eternal truth of who I am.",
  "I never compare myself to others; I walk my own sovereign path.",
  "Gentle kindness and mercy flow through my heart like a steady stream.",
  "I am safe, I am deeply protected, and I am unconditionally cherished.",
  "Small moments of peace gathered today heal the whole arc of my life.",
  "I release all physical tension, allowing every muscle to soften.",
  "As my breathing deepens, my inner tranquility becomes infinite.",
  "No matter what occurs, I stand unfailingly by my own side.",
  "The light within me cannot be extinguished; it illuminates my way.",
  "I receive and savor the precious richness of this present moment.",
  "Setting down emotional burdens, my spirit rises light as a feather.",
  "I wait patiently and lovingly as my being naturally regenerates.",
  "Like soft ambient harmonies, my thoughts flow smooth and serene.",
  "I listen attentively and compassionately to the quiet wisdom of my body.",
  "Every breath in draws peace; every breath out bestows eternal rest.",
  "I do not linger in yesterday; I choose the clear tranquility of now.",
  "My mind grows steadily clearer, luminous, and crystal pure.",
  "I deserve the gift of a pause, a breath, and sacred stillness.",
  "Deep in the core of my being, I touch unshakable equanimity.",
  "I gently release all self-blame, guilt, and lingering criticism.",
  "The stillness of this moment gathers me in a loving embrace.",
  "Every day I am renewed; every moment I am softly healed.",
  "With each breath, calm settles deep into my nerves and spirit.",
  "I am enough. Exactly as I am right now, I am complete.",
  "The mental storm has cleared; a brilliant, tranquil sky remains.",
  "I welcome every facet of myself with profound tenderness.",
  "In deep relaxation, my soul drinks from the wellspring of new vitality.",
  "I release all anxiety and surrender safely into universal trust.",
  "With a serene heart, I welcome this day as a miraculous gift.",
  "I trust my healing journey wholeheartedly and surrender with ease.",
  "All knots of tension dissolve like gentle waves upon warm sand.",
  "From the well of quiet stillness, I draw infinite reserves of peace.",
  "Right here and right now, I am safe, supported, and whole.",
  "I treat myself with utmost delicacy, patience, and boundless grace.",
  "Light of serene joy sparkles across the quiet lake of my mind.",
  "Breathing slowly, I descend into profound, restful balance.",
  "My spirit grows more grounded, resilient, and serene each day.",
  "In every life experience, I uncover deeper healing and grace.",
  "Today, I am the most loyal, loving, and gentle friend to myself.",
  "Even amidst darkness, I trust the unwavering lantern within my heart.",
  "Peace greets me each time I choose to pause and return inward.",
  "In conscious presence, I unite with the infinite stillness of being.",
  "My body, mind, and spirit return to perfect harmonic resonance.",
  "With gratitude for all steps behind me, I abide in present peace.",
  "Every inhale brings cell renewal; every exhale brings freedom.",
  "Deep inside, I possess an invulnerable sanctuary of quiet joy.",
  "I am perpetually loved, deeply held, and never truly alone.",
  "With quiet wonder, I welcome the peace of this unfolding day.",
  "I am calm, I am restored, and I am completely healed."
];

// ==========================================================================
// 3. 전역 상태 변수 관리
// ==========================================================================
let currentBreathingLang = "ko";        // 'ko' | 'en'
let currentBreathingColor = "red";      // 'red' | 'orange' | ...
let isBreathingPlaying = false;         // 현재 14초 사이클 재생 중 여부
let isBreathingLoop = false;            // 연속 루프 활성화 여부
let is1HourSessionActive = false;       // 1시간 딥 테라피 활성화 여부
let oneHourRemainingSeconds = 3600;     // 1시간 남은 초 (초기값 3600초)
let oneHourIntervalId = null;           // 1시간 카운트다운 인터벌
let isSoundSyncEnabled = true;          // 사운드 엔진 동기화 여부
let breathingCycleCount = 0;            // 완료된 사이클 수
let breathing14sRaf = null;             // requestAnimationFrame 핸들러
let breathingCycleStartTime = 0;        // 사이클 시작 타임스탬프

// NovaCell 100 & VIP 힐링 코드 연동 상태 변수
let activeHealingCode = null;
let healingModalFilter = 'all';
let healingModalSearchKeyword = '';

// 클래식 5대 호흡 가이드용 상태 변수
const classicBreathingPatterns = {
  coherent: {
    ko: {
      title: "동조 호흡 (Coherent Breathing)",
      desc: "5초 동안 들이마시고 5초 동안 내쉬는 균등 호흡법입니다. 심박변이도(HRV)를 극대화하고 심장과 뇌의 조화를 유도하여 자율신경계 균형에 매우 효과적입니다.",
      steps: [
        { text: "숨 들이마시기 (In)", scale: 1.5, state: "in", duration: 5000 },
        { text: "천천히 내쉬기 (Out)", scale: 1.0, state: "out", duration: 5000 }
      ]
    },
    en: {
      title: "Coherent Breathing (5-5s)",
      desc: "An even breathing technique inhaling for 5 seconds and exhaling for 5 seconds. Maximizes Heart Rate Variability (HRV) and synchronizes heart-brain coherence for autonomic nervous system balance.",
      steps: [
        { text: "Inhale (5s)", scale: 1.5, state: "in", duration: 5000 },
        { text: "Exhale (5s)", scale: 1.0, state: "out", duration: 5000 }
      ]
    }
  },
  box: {
    ko: {
      title: "균등 호흡 (Box Breathing / 4-4-4-4)",
      desc: "들이마시기 4초, 멈추기 4초, 내쉬기 4초, 멈추기 4초의 정방형 호흡법입니다. 미 해군 네이비실 등에서 극도의 스트레스와 긴장을 즉시 완화하기 위해 사용하는 호흡법입니다.",
      steps: [
        { text: "숨 들이마시기 (In)", scale: 1.5, state: "in", duration: 4000 },
        { text: "잠시 멈추기 (Hold)", scale: 1.5, state: "hold", duration: 4000 },
        { text: "천천히 내쉬기 (Out)", scale: 1.0, state: "out", duration: 4000 },
        { text: "잠시 멈추기 (Hold)", scale: 1.0, state: "hold", duration: 4000 }
      ]
    },
    en: {
      title: "Box Breathing (4-4-4-4s)",
      desc: "Inhale 4s, hold 4s, exhale 4s, and hold 4s. Used by elite tactical operators to rapidly calm extreme stress and restore autonomic composure.",
      steps: [
        { text: "Inhale (4s)", scale: 1.5, state: "in", duration: 4000 },
        { text: "Hold (4s)", scale: 1.5, state: "hold", duration: 4000 },
        { text: "Exhale (4s)", scale: 1.0, state: "out", duration: 4000 },
        { text: "Hold (4s)", scale: 1.0, state: "hold", duration: 4000 }
      ]
    }
  },
  relax: {
    ko: {
      title: "이완 호흡 (4-7-8 Breathing)",
      desc: "4초 들이쉬고, 7초 멈춘 후, 8초 동안 내쉬는 의학적 이완 호흡법입니다. 흥분된 신경계를 안정시키고 불면증을 예방하며 깊은 평온을 끌어냅니다.",
      steps: [
        { text: "숨 들이마시기 (In)", scale: 1.5, state: "in", duration: 4000 },
        { text: "깊이 참기 (Hold)", scale: 1.5, state: "hold", duration: 7000 },
        { text: "천천히 내쉬기 (Out)", scale: 1.0, state: "out", duration: 8000 }
      ]
    },
    en: {
      title: "Relaxing Breath (4-7-8s)",
      desc: "Inhale 4s, hold 7s, and exhale 8s. A clinically proven relaxation technique that calms the sympathetic nervous system and induces restful sleep.",
      steps: [
        { text: "Inhale (4s)", scale: 1.5, state: "in", duration: 4000 },
        { text: "Deep Hold (7s)", scale: 1.5, state: "hold", duration: 7000 },
        { text: "Slow Exhale (8s)", scale: 1.0, state: "out", duration: 8000 }
      ]
    }
  },
  beginner: {
    ko: {
      title: "초보자 호흡 (3-3 Breathing)",
      desc: "3초 동안 들이마시고 3초 동안 내쉬는 가볍고 얕은 호흡 패턴입니다. 폐활량이 작거나 호흡 가쁜 초보자분들이 명상 훈련을 시작하기에 가장 편안합니다.",
      steps: [
        { text: "숨 들이마시기 (In)", scale: 1.4, state: "in", duration: 3000 },
        { text: "천천히 내쉬기 (Out)", scale: 1.0, state: "out", duration: 3000 }
      ]
    },
    en: {
      title: "Beginner Breathing (3-3s)",
      desc: "A gentle 3s inhale and 3s exhale rhythm, ideal for breathing training newcomers to practice effortless respiratory mindfulness.",
      steps: [
        { text: "Inhale (3s)", scale: 1.4, state: "in", duration: 3000 },
        { text: "Exhale (3s)", scale: 1.0, state: "out", duration: 3000 }
      ]
    }
  },
  vitality: {
    ko: {
      title: "활력 호흡 (4-2-4 Breathing)",
      desc: "4초 들이쉬고, 2초 잠깐 멈춘 후, 4초 동안 내쉬는 활력 유도 호흡법입니다. 세포에 신선한 산소를 풍부하게 전달하여 머리를 맑게 하고 전신의 긴장만 살며시 풉니다.",
      steps: [
        { text: "숨 들이마시기 (In)", scale: 1.5, state: "in", duration: 4000 },
        { text: "잠깐 멈추기 (Hold)", scale: 1.5, state: "hold", duration: 2000 },
        { text: "천천히 내쉬기 (Out)", scale: 1.0, state: "out", duration: 4000 }
      ]
    },
    en: {
      title: "Vitality Breath (4-2-4s)",
      desc: "Inhale 4s, hold 2s, and exhale 4s. Floods cells with oxygen to refresh cognitive clarity, stimulate energy, and gently release physical fatigue.",
      steps: [
        { text: "Inhale (4s)", scale: 1.5, state: "in", duration: 4000 },
        { text: "Hold (2s)", scale: 1.5, state: "hold", duration: 2000 },
        { text: "Exhale (4s)", scale: 1.0, state: "out", duration: 4000 }
      ]
    }
  }
};

let currentClassicPatternKey = "coherent";
let currentClassicStepIndex = 0;
let classicBreathTimeoutId = null;
let classicCountdownIntervalId = null;

// ==========================================================================
// 4. DOM 요소 캐싱
// ==========================================================================
let breathingPoster = null;
let concentricPulseCircle = null;
let concentricCircleContent = null;
let txtBreathPhase = null;
let txtBreathTimer = null;
let txtBreathSub = null;
let breathingCycleBarFill = null;
let rewardBadgePopup = null;
let btnBreathActionMain = null;
let iconBreathPlay = null;
let txtBreathActionLabel = null;
let btnBreathLoop = null;
let txtBreathLoopLabel = null;
let btnBreath1Hour = null;
let txtBreath1HourLabel = null;
let breathingModeBadge = null;
let txtModeBadge = null;
let txtHeroAffirmation = null;

// ==========================================================================
// 5. 7색 차크라 인터랙티브 제어 함수군
// ==========================================================================

/**
 * 언어 전환 함수 (KO / EN)
 */
function setBreathingLanguage(lang) {
  if (lang !== "ko" && lang !== "en") return;
  if (typeof window.applyLanguage === "function" && window.currentLang !== lang) {
    window.applyLanguage(lang);
    return;
  }
  currentBreathingLang = lang;

  // 1) 상단 언어 버튼 토글
  const btnKo = document.getElementById("btn-lang-ko");
  const btnEn = document.getElementById("btn-lang-en");
  if (btnKo && btnEn) {
    btnKo.classList.toggle("active", lang === "ko");
    btnEn.classList.toggle("active", lang === "en");
  }

  // 2) 히어로 헤더 텍스트
  const heroTitle = document.getElementById("breathing-hero-title");
  const heroSub = document.getElementById("breathing-hero-sub");
  if (heroTitle) {
    heroTitle.textContent = lang === "ko" 
      ? "7색 차크라 바이오 호흡 테라피" 
      : "7-Color Chakra Bio-Breathing Therapy";
  }
  if (heroSub) {
    heroSub.textContent = lang === "ko"
      ? "차크라별 고유 컬러와 솔페지오 주파수가 동심원 리듬(4-2-6-2)으로 공명하는 14초 바이오 리셋"
      : "14-Second Bio-Reset harmonizing chakra colors & solfeggio tones with concentric circle rhythm (4-2-6-2)";
  }

  // 3) 7색 팔레트 버튼 텍스트 갱신
  const paletteBtns = document.querySelectorAll(".btn-rainbow-color");
  paletteBtns.forEach(btn => {
    const colKey = btn.getAttribute("data-color");
    const meta = CHAKRA_COLORS[colKey];
    if (meta) {
      const titleSpan = btn.querySelector(".color-btn-title");
      const subSpan = btn.querySelector(".color-btn-sub");
      if (titleSpan) titleSpan.textContent = meta[lang].name;
      if (subSpan) subSpan.textContent = lang === "ko" ? `${meta.hz}Hz • ${meta.ko.chakra.split(' ')[0]}` : `${meta.hz}Hz • Chakra`;
    }
  });

  // 4) 4-2-6-2 라벨 갱신
  const lblIn = document.getElementById("step-lbl-in");
  const lblHold1 = document.getElementById("step-lbl-hold1");
  const lblOut = document.getElementById("step-lbl-out");
  const lblHold2 = document.getElementById("step-lbl-hold2");
  if (lblIn) lblIn.textContent = lang === "ko" ? "들이마시기" : "Inhale";
  if (lblHold1) lblHold1.textContent = lang === "ko" ? "숨 멈추기" : "Hold";
  if (lblOut) lblOut.textContent = lang === "ko" ? "내쉬기" : "Exhale";
  if (lblHold2) lblHold2.textContent = lang === "ko" ? "비움 멈춤" : "Hold";

  // 5) 보조 컨트롤 텍스트
  const soundSyncLabel = document.getElementById("txt-sound-sync-label");
  const fullscreenLabel = document.getElementById("txt-fullscreen-label");
  if (soundSyncLabel) soundSyncLabel.textContent = lang === "ko" ? "솔페지오 & 자연음 동기화" : "Solfeggio & Nature Sync";
  if (fullscreenLabel) fullscreenLabel.textContent = lang === "ko" ? "전체화면" : "Fullscreen";

  // 6) 메인 버튼 & 모드 버튼 갱신
  updatePlayButtonUI();
  updateLoopButtonUI();
  update1HourButtonUI();
  updateModeBadgeUI();

  // 7) 현재 선택된 컬러 세부 정보 및 썸네일 포스터 갱신
  updateCurrentColorUI();

  // 8) 긍정 확언 언어 즉시 교체
  rotateHeroAffirmation();

  // 9) 퀵 주파수 칩 텍스트 바이링궐 갱신
  const chipMap = {
    'default': lang === 'en' ? '🧘 Chakra Default' : '🧘 차크라 기본',
    '432': lang === 'en' ? '✨ 432Hz (Harmony)' : '✨ 432Hz (조화)',
    '528': lang === 'en' ? '🧬 528Hz (Miracle)' : '🧬 528Hz (기적)',
    '7.83': lang === 'en' ? '🌍 7.83Hz (Schumann)' : '🌍 7.83Hz (슈만)',
    '40': lang === 'en' ? '🧠 40Hz (Focus)' : '🧠 40Hz (집중)',
    '3.5': lang === 'en' ? '🌙 3.5Hz (Sleep)' : '🌙 3.5Hz (숙면)'
  };
  document.querySelectorAll('#breathing-hz-chips .btn-hz-chip').forEach(chip => {
    const hz = chip.getAttribute('data-hz');
    if (chipMap[hz]) chip.textContent = chipMap[hz];
  });

  // 10) 동심원 정중앙 기본 가이드 라벨 갱신 (비재생 중일 때)
  if (!isBreathingPlaying) {
    const txtPhase = document.getElementById("txt-breath-phase");
    const txtSub = document.getElementById("txt-breath-sub");
    const txtHint = document.getElementById("txt-breath-hint");
    if (txtPhase) txtPhase.textContent = lang === 'en' ? "Ready to Inhale" : "들숨 준비";
    if (txtSub) txtSub.textContent = lang === 'en' ? "4-2-6-2 Bio-Rhythm" : "4-2-6-2 바이오 리듬";
    if (txtHint) txtHint.textContent = lang === 'en' ? "Inhale 4s • Hold 2s • Exhale 6s • Rest 2s" : "들숨 4초 • 멈춤 2초 • 날숨 6초 • 비움 2초";
  }

  // 11) 클래식 호흡 가이드 텍스트 및 남색 타이머 실시간 동기화
  const classicPoster = document.querySelector("#classic-breathing-card .breathing-media-poster");
  if (classicPoster) {
    classicPoster.src = lang === 'en' ? 'breathing/thumbs/en/INDIGO.png' : 'breathing/thumbs/ko/indigo.png';
  }
  const txtClassicHint = document.getElementById("txt-classic-hint");
  if (txtClassicHint) {
    txtClassicHint.textContent = lang === 'en' ? "Click to Start / Pause" : "클릭하여 시작 / 정지";
  }
  if (!isClassicBreathingActive) {
    const txtStatus = document.getElementById("txt-breathing-status");
    if (txtStatus) txtStatus.textContent = lang === 'en' ? "READY" : "준비";
  }
  changeClassicPattern(currentClassicPatternKey);

  // 12) 연동된 힐링 코드가 있을 경우 배너 텍스트 언어 즉시 동기화
  if (activeHealingCode) {
    applyHealingCodeToBreathing(activeHealingCode.code, activeHealingCode.type);
  }
}

// ==========================================================================
// 4.1. 사용자 맞춤 치유 주파수 상태 관리
// ==========================================================================
let customBreathingHz = null; // null일 경우 해당 차크라 컬러의 고유 기본 주파수 사용

/**
 * 7색 중 하나 선택 함수
 */
function selectBreathingColor(colorKey) {
  if (!CHAKRA_COLORS[colorKey]) return;
  currentBreathingColor = colorKey;

  // 1) 팔레트 바 활성 클래스 업데이트
  const paletteBtns = document.querySelectorAll(".btn-rainbow-color");
  paletteBtns.forEach(btn => {
    btn.classList.toggle("active", btn.getAttribute("data-color") === colorKey);
  });

  // 2) UI 테마 및 미디어 갱신
  updateCurrentColorUI();

  // 3) 사운드 엔진 동기화 적용
  if (isSoundSyncEnabled && isBreathingPlaying) {
    applySoundSyncToEngine();
  }
}

/**
 * 치유 주파수 맞춤 설정 (솔페지오, 슈만, 뇌파 또는 직접 입력)
 */
function setBreathingFrequency(hz, label = null) {
  // 기존 힐링코드 연동 배너가 있다면 해제하고 해당 맞춤 주파수 우선 활성화
  activeHealingCode = null;
  const banner = document.getElementById("active-healing-code-banner");
  if (banner) banner.style.display = "none";

  customBreathingHz = hz ? parseFloat(hz) : null;

  // 칩 활성화 상태 갱신
  const chips = document.querySelectorAll("#breathing-hz-chips .btn-hz-chip");
  chips.forEach(chip => {
    const chipHz = chip.getAttribute("data-hz");
    if (!hz && chipHz === "default") {
      chip.classList.add("active");
    } else if (hz && chipHz === String(hz)) {
      chip.classList.add("active");
    } else {
      chip.classList.remove("active");
    }
  });

  updateFrequencyUI(label);

  // 사운드 엔진 동기화 및 즉시 청취 지원 (호흡 재생 여부와 무관하게 즉시 가동)
  if (isSoundSyncEnabled) {
    applySoundSyncToEngine();
  }

  // 사용자 토스트 알림 피드백
  if (typeof showStudioToast === 'function') {
    const displayLabel = label || (hz ? `${hz}Hz` : '기본 차크라 주파수');
    showStudioToast(`✨ 치유 주파수 [${displayLabel}]가 활성화되어 재생됩니다.`);
  }
}

/**
 * 사용자가 직접 입력한 커스텀 Hz 적용
 */
function applyCustomBreathingHz() {
  const input = document.getElementById("input-custom-breathing-hz");
  if (!input) return;
  const val = parseFloat(input.value);
  if (isNaN(val) || val <= 0) {
    if (typeof showStudioToast === 'function') showStudioToast('올바른 주파수(Hz)를 입력해 주세요.');
    return;
  }
  setBreathingFrequency(val, `맞춤 ${val}Hz`);
}

/**
 * 해당 차크라 기본 주파수로 리셋
 */
function resetBreathingChakraHz() {
  activeHealingCode = null;
  customBreathingHz = null;
  const banner = document.getElementById("active-healing-code-banner");
  if (banner) banner.style.display = "none";

  const input = document.getElementById("input-custom-breathing-hz");
  if (input) input.value = "";
  
  const chips = document.querySelectorAll("#breathing-hz-chips .btn-hz-chip");
  chips.forEach(chip => {
    chip.classList.toggle("active", chip.getAttribute("data-hz") === "default");
  });

  updateFrequencyUI();

  if (isSoundSyncEnabled) {
    applySoundSyncToEngine();
  }
  const meta = CHAKRA_COLORS[currentBreathingColor];
  if (typeof showStudioToast === 'function') {
    showStudioToast(`🧘 ${meta.ko.name} 기본 주파수(${meta.hz}Hz)로 복원되었습니다.`);
  }
}

/**
 * 주파수 배지 UI 갱신
 */
function updateFrequencyUI(customLabel = null) {
  const badge = document.getElementById("txt-custom-hz-badge");
  const chakraBadge = document.getElementById("txt-chakra-badge");
  const meta = CHAKRA_COLORS[currentBreathingColor];
  if (!meta) return;

  if (customBreathingHz) {
    const text = customLabel || `${customBreathingHz}Hz`;
    if (badge) {
      badge.textContent = `✨ ${text}`;
      badge.style.borderColor = "var(--nc-gold)";
      badge.style.color = "var(--nc-gold)";
      badge.style.background = "rgba(212, 175, 55, 0.25)";
    }
    if (chakraBadge) {
      chakraBadge.innerHTML = `<i class="fa-solid fa-atom"></i> ${meta[currentBreathingLang].name} + ✨ 맞춤 ${customBreathingHz}Hz`;
    }
  } else {
    if (badge) {
      badge.textContent = `차크라 기본 (${meta.hz}Hz)`;
      badge.style.borderColor = "rgba(212, 175, 55, 0.35)";
      badge.style.color = "var(--nc-gold)";
      badge.style.background = "rgba(212, 175, 55, 0.15)";
    }
    if (chakraBadge) {
      chakraBadge.innerHTML = `<i class="fa-solid fa-atom"></i> ${meta[currentBreathingLang].chakra}`;
    }
  }
}

/**
 * 현재 선택된 컬러의 UI 요소들 동적 갱신
 */
function updateCurrentColorUI() {
  const meta = CHAKRA_COLORS[currentBreathingColor];
  if (!meta) return;
  const lang = currentBreathingLang;
  const langData = meta[lang] || meta.ko;

  // CSS 변수 카드에 주입 (테마 색상, 글로우 등)
  const mediaCard = document.getElementById("breathing-media-card");
  const mainBtn = document.getElementById("btn-breath-action-main");
  if (mediaCard) {
    mediaCard.style.setProperty("--color-active-border", meta.themeColor);
    mediaCard.style.setProperty("--color-active-glow", meta.themeGlow);
    mediaCard.style.setProperty("--color-active-dark", meta.themeDark);
  }
  if (mainBtn) {
    mainBtn.style.setProperty("--color-active-border", meta.themeColor);
    mainBtn.style.setProperty("--color-active-glow", meta.themeGlow);
    mainBtn.style.setProperty("--color-active-dark", meta.themeDark);
  }

  // 동심원 펄스 링 색상 동적 바인딩
  if (concentricPulseCircle) {
    concentricPulseCircle.style.borderColor = meta.themeColor;
    concentricPulseCircle.style.boxShadow = `0 0 35px ${meta.themeGlow}, inset 0 0 25px ${meta.themeGlow}`;
  }

  // 썸네일 포스터 이미지 교체 (항상 100% 선명하게 표시 유지)
  if (breathingPoster) {
    breathingPoster.src = langData.thumb;
    breathingPoster.style.display = "block";
    breathingPoster.style.opacity = "1";
  }

  // 타이머 텍스트 색상 바인딩
  if (txtBreathTimer) {
    txtBreathTimer.style.color = meta.themeColor;
    txtBreathTimer.style.textShadow = `0 0 16px ${meta.themeGlow}, 0 2px 8px rgba(0,0,0,0.9)`;
  }

  // 정보 배지 및 텍스트 갱신
  const colorTitle = document.getElementById("txt-color-title");
  const colorDesc = document.getElementById("txt-color-desc");

  if (colorTitle) colorTitle.textContent = langData.title;
  if (colorDesc) colorDesc.textContent = langData.desc;

  // 주파수 배지 갱신
  updateFrequencyUI();
}

/**
 * 14초 퀵 챌린지 시작 / 일시 정지 토글
 */
function toggleBreathingPlayback() {
  if (isBreathingPlaying) {
    pauseBreathingSession();
  } else {
    startBreathingSession();
  }
}

/**
 * 호흡 세션 시작
 */
function startBreathingSession() {
  isBreathingPlaying = true;
  breathingCycleStartTime = performance.now();

  // 1) 팝업 닫기
  if (rewardBadgePopup) rewardBadgePopup.classList.remove("show");

  // 2) 썸네일 포스터는 항상 배경으로 유지 & 미디어 카드 활성 상태 표시
  const mediaCard = document.getElementById("breathing-media-card");
  if (mediaCard) mediaCard.classList.add("is-active");

  if (breathingPoster) {
    breathingPoster.style.display = "block";
    breathingPoster.style.opacity = "1";
  }

  // 3) UI 버튼 상태 변경
  updatePlayButtonUI();
  updateModeBadgeUI();

  // 4) 오디오 엔진 연동
  if (isSoundSyncEnabled) {
    applySoundSyncToEngine();
  }

  // 5) 14초 애니메이션 프레임 루프 가동
  if (breathing14sRaf) cancelAnimationFrame(breathing14sRaf);
  breathing14sRaf = requestAnimationFrame(run14sBreathingLoop);
}

/**
 * 호흡 세션 일시정지
 */
function pauseBreathingSession() {
  isBreathingPlaying = false;

  // 1) 썸네일 배경 유지 & 카드 활성 상태 해제 (대기 펄스로 복원)
  const mediaCard = document.getElementById("breathing-media-card");
  if (mediaCard) mediaCard.classList.remove("is-active");

  if (breathingPoster) {
    breathingPoster.style.display = "block";
    breathingPoster.style.opacity = "1";
  }

  // 2) 동심원 크기 기본값 복귀
  if (concentricPulseCircle) {
    concentricPulseCircle.style.transform = "scale(1)";
  }
  if (concentricCircleContent) {
    concentricCircleContent.style.transform = "scale(1)";
  }

  // Tab 1 남색 호흡 타이머 리셋
  const tab1Pulse = document.getElementById("tab1-concentric-pulse");
  const tab1Phase = document.getElementById("tab1-breath-phase");
  const tab1Timer = document.getElementById("tab1-breath-timer");
  const tab1Sub = document.getElementById("tab1-breath-sub");
  if (tab1Phase) tab1Phase.textContent = lang === "ko" ? "들숨 준비" : "Inhale Ready";
  if (tab1Timer) tab1Timer.textContent = "14s";
  if (tab1Sub) tab1Sub.textContent = lang === "ko" ? "4-2-6-2 바이오 리듬" : "4-2-6-2 Bio-Rhythm";
  if (tab1Pulse) tab1Pulse.style.transform = "scale(1)";

  // 3) UI 버튼 상태 복원
  updatePlayButtonUI();

  // 4) 애니메이션 루프 중단
  if (breathing14sRaf) {
    cancelAnimationFrame(breathing14sRaf);
    breathing14sRaf = null;
  }

  // 5) 상태 표시 초기화 (호흡 동심원 텍스트 원본 구조 유지)
  const lang = currentBreathingLang;
  if (txtBreathPhase) {
    txtBreathPhase.textContent = lang === "ko" ? "들숨 준비" : "Inhale Ready";
  }
  if (txtBreathTimer) {
    txtBreathTimer.textContent = "14s";
  }
  if (txtBreathSub) {
    txtBreathSub.textContent = lang === "ko" ? "4-2-6-2 바이오 리듬" : "4-2-6-2 Bio-Rhythm";
  }
  const txtBreathHint = document.getElementById("txt-breath-hint");
  if (txtBreathHint) {
    txtBreathHint.textContent = lang === "ko" ? "들숨 4초 • 멈춤 2초 • 날숨 6초 • 비움 2초" : "Inhale 4s • Hold 2s • Exhale 6s • Hold 2s";
  }
  if (breathingCycleBarFill) {
    breathingCycleBarFill.style.width = "0%";
  }
}

/**
 * 14초 4-2-6-2 정밀 애니메이션 루프 (동심원 정중앙 줌인/줌아웃)
 */
function run14sBreathingLoop(timestamp) {
  if (!isBreathingPlaying) return;

  const cycleDurationMs = 14000; // 14.0초
  const elapsed = (timestamp - breathingCycleStartTime) % cycleDurationMs;
  const cycleSec = elapsed / 1000; // 0.00 ~ 14.00 초

  // A. 프로그레스 바 너비 갱신 (0% ~ 100%)
  const progressRatio = Math.min(elapsed / cycleDurationMs, 1.0);
  if (breathingCycleBarFill) {
    breathingCycleBarFill.style.width = `${(progressRatio * 100).toFixed(1)}%`;
  }

  // B. 4-2-6-2 단계 판별 및 동심원 중앙 텍스트/링 실시간 연동
  const lang = currentBreathingLang;
  let phaseText = "";
  let phaseSub = "";
  let phaseRemainingSec = 0;
  let circleScale = 1.0;

  if (cycleSec < 4.0) {
    // 1단계: 0초 ~ 4초 (4초 들이마시기: 0.88 -> 1.18 배 팽창)
    const t = cycleSec / 4.0;
    phaseText = lang === "ko" ? "들이마시기" : "Inhale";
    phaseSub = lang === "ko" ? "천천히 숨 채우기" : "Fill lungs gently";
    phaseRemainingSec = Math.ceil(4.0 - cycleSec);
    circleScale = 0.88 + (0.30 * t);
  } else if (cycleSec < 6.0) {
    // 2단계: 4초 ~ 6초 (2초 숨 멈추기: 1.18 배 유지)
    phaseText = lang === "ko" ? "숨 멈추기" : "Hold";
    phaseSub = lang === "ko" ? "내면의 평온 유지" : "Maintain still calm";
    phaseRemainingSec = Math.ceil(6.0 - cycleSec);
    circleScale = 1.18;
  } else if (cycleSec < 12.0) {
    // 3단계: 6초 ~ 12초 (6초 천천히 내쉬기: 1.18 -> 0.88 배 수축)
    const t = (cycleSec - 6.0) / 6.0;
    phaseText = lang === "ko" ? "천천히 내쉬기" : "Exhale";
    phaseSub = lang === "ko" ? "모든 긴장 비우기" : "Release all tension";
    phaseRemainingSec = Math.ceil(12.0 - cycleSec);
    circleScale = 1.18 - (0.30 * t);
  } else {
    // 4단계: 12초 ~ 14초 (2초 비움 멈춤: 0.88 배 휴식)
    phaseText = lang === "ko" ? "비우고 멈추기" : "Hold";
    phaseSub = lang === "ko" ? "고요한 쉼" : "Peaceful rest";
    phaseRemainingSec = Math.ceil(14.0 - cycleSec);
    circleScale = 0.88;
  }

  // 동심원 중앙 텍스트 반영
  if (txtBreathPhase) txtBreathPhase.textContent = phaseText;
  if (txtBreathTimer) txtBreathTimer.textContent = `${phaseRemainingSec}s`;
  if (txtBreathSub) txtBreathSub.textContent = phaseSub;

  // 동심원 서클 및 중앙 콘텐츠 줌인/줌아웃 일체형 구동
  if (concentricPulseCircle) {
    concentricPulseCircle.style.transform = `scale(${circleScale.toFixed(3)})`;
  }
  if (concentricCircleContent) {
    const textScale = 0.95 + ((circleScale - 0.88) * 0.3);
    concentricCircleContent.style.transform = `scale(${textScale.toFixed(3)})`;
  }

  // C. 14초 사이클 완료 감지
  if (elapsed < 120 && (timestamp - breathingCycleStartTime) > 2000) {
    onBreathingCycleCompleted();
    breathingCycleStartTime = timestamp;
  }

  // D. 다음 프레임 요청
  if (isBreathingPlaying) {
    breathing14sRaf = requestAnimationFrame(run14sBreathingLoop);
  }
}

/**
 * 14초 사이클 1회 완료 시 호출되는 이벤트
 */
function onBreathingCycleCompleted() {
  breathingCycleCount++;

  // 긍정 확언 새로운 문장으로 순환
  rotateHeroAffirmation();

  if (isBreathingLoop || is1HourSessionActive) {
    // 연속 루프 또는 1시간 모드: 끊김 없이 계속 순환
    updateModeBadgeUI();
  } else {
    // 단일 14초 완료 모드: 정지 및 축하 배지 팝업
    pauseBreathingSession();
    showRewardBadgePopup();
  }
}

/**
 * 14초 완료 축하 팝업 띄우기
 */
function showRewardBadgePopup() {
  if (!rewardBadgePopup) return;
  const lang = currentBreathingLang;
  const title = document.getElementById("txt-reward-title");
  const desc = document.getElementById("txt-reward-desc");

  if (title) {
    title.textContent = lang === "ko" ? "🎉 14초 바이오 리셋 완료!" : "🎉 14s Bio-Reset Completed!";
  }
  if (desc) {
    desc.textContent = lang === "ko"
      ? "차크라 에너지와 자율신경이 조율되었습니다. 하루 3회 이상 실천해 보세요."
      : "Chakra energy & autonomic balance harmonized. Practice 3+ times daily.";
  }

  rewardBadgePopup.classList.add("show");
}

/**
 * 팝업 닫기 (확인 또는 연속 루프 켜기)
 */
function dismissRewardPopup(enableLoop = false) {
  if (rewardBadgePopup) {
    rewardBadgePopup.classList.remove("show");
  }
  if (enableLoop) {
    isBreathingLoop = true;
    updateLoopButtonUI();
    updateModeBadgeUI();
    startBreathingSession();
  }
}

/**
 * 연속 루프 토글 (클릭 시 미재생 상태면 즉각 호흡 세션 가동)
 */
function toggleBreathingLoop() {
  isBreathingLoop = !isBreathingLoop;
  updateLoopButtonUI();
  updateModeBadgeUI();

  // 루프를 켰는데 재생 중이 아니라면 바로 호흡 시작!
  if (isBreathingLoop && !isBreathingPlaying) {
    startBreathingSession();
  }
}

/**
 * 1시간 딥 테라피 세션 개시 (클릭 즉시 실시간 카운트다운과 함께 가동)
 */
function start1HourBreathingSession() {
  isBreathingLoop = true;
  is1HourSessionActive = true;
  oneHourRemainingSeconds = 3600; // 60분

  updateLoopButtonUI();
  update1HourButtonUI();
  updateModeBadgeUI();

  // 1초 단위 실시간 카운트다운 타이머 인터벌
  if (oneHourIntervalId) clearInterval(oneHourIntervalId);
  oneHourIntervalId = setInterval(() => {
    oneHourRemainingSeconds--;
    update1HourButtonUI();
    updateModeBadgeUI();

    if (oneHourRemainingSeconds <= 0) {
      clearInterval(oneHourIntervalId);
      oneHourIntervalId = null;
      is1HourSessionActive = false;
      pauseBreathingSession();
      update1HourButtonUI();
      updateModeBadgeUI();
    }
  }, 1000);

  // 즉시 14초 호흡 사이클 가동
  startBreathingSession();
}

/**
 * 사운드 엔진 동기화 체크박스 토글
 */
function toggleBreathingSoundSync(checked) {
  isSoundSyncEnabled = checked;
  if (isSoundSyncEnabled && isBreathingPlaying) {
    applySoundSyncToEngine();
  }
}

/**
 * 전체화면 몰입 모드 (Theater Mode)
 */
function toggleBreathingFullscreen() {
  const mediaCard = document.getElementById("breathing-media-card");
  if (!mediaCard) return;

  if (!document.fullscreenElement) {
    if (mediaCard.requestFullscreen) {
      mediaCard.requestFullscreen();
    } else if (mediaCard.webkitRequestFullscreen) {
      mediaCard.webkitRequestFullscreen();
    } else if (mediaCard.msRequestFullscreen) {
      mediaCard.msRequestFullscreen();
    }
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }
}

/**
 * 사운드 엔진(audioEngine.js)과의 실시간 주파수 & 자연음 동기화
 */
function applySoundSyncToEngine() {
  if (!window.engine) return;
  const meta = CHAKRA_COLORS[currentBreathingColor];
  if (!meta) return;

  const targetHz = customBreathingHz ? customBreathingHz : meta.hz;

  try {
    window.engine.init();
    if (window.engine.audioCtx && window.engine.audioCtx.state === "suspended") {
      window.engine.audioCtx.resume();
    }

    // NovaCell 100 or VIP 힐링 코드 우선 동기화
    if (activeHealingCode) {
      if (activeHealingCode.type === 'rife' && typeof window.engine.setRifeFrequencyRecipe === 'function') {
        window.engine.setRifeFrequencyRecipe(activeHealingCode.freqs);
        if (typeof window.engine.toggleRife === 'function') window.engine.toggleRife(true);
      } else if (activeHealingCode.type === 'vip' && typeof window.engine.setVipFrequencyRecipe === 'function') {
        window.engine.setVipFrequencyRecipe(activeHealingCode.freqs);
        if (typeof window.engine.toggleVip === 'function') window.engine.toggleVip(true);
      }
    } else {
      if (typeof window.engine.toggleRife === 'function') window.engine.toggleRife(false);
      if (typeof window.engine.toggleVip === 'function') window.engine.toggleVip(false);
      if (typeof window.engine.toggleSolfeggio === 'function') window.engine.toggleSolfeggio(true);
      if (typeof window.engine.setSolfeggioFrequency === "function") {
        window.engine.setSolfeggioFrequency(targetHz);
      }
    }
    if (typeof window.engine.setSolfeggioVolume === "function") {
      let freqVol = window.engine.solfeggioVolume;
      if (!freqVol || freqVol <= 0.05) freqVol = 0.70;
      window.engine.setSolfeggioVolume(freqVol);
    }

    if (typeof window.engine.setNatureVolume === "function") {
      window.engine.setNatureVolume(meta.soundKey, 0.40);
    }
    if (typeof window.engine.setNatureMasterVolume === "function") {
      let natVol = window.engine.natureMasterVolume;
      if (!natVol || natVol <= 0.05) natVol = 0.80;
      window.engine.setNatureMasterVolume(natVol);
    }

    if (!window.engine.isPlaying && typeof window.engine.start === "function") {
      window.engine.start();
    } else if (window.engine.isPlaying && typeof window.engine.startSolfeggio === "function") {
      window.engine.startSolfeggio();
    }

    if (typeof window.syncAllPlayButtons === "function") {
      const label = customBreathingHz ? `치유 주파수 (${customBreathingHz}Hz)` : `7색 차크라 (${meta[currentBreathingLang].name} ${meta.hz}Hz)`;
      window.syncAllPlayButtons(true, label);
    }
  } catch (err) {
    console.warn("Sound sync caught:", err);
  }
}

/**
 * 플레이 버튼 UI 텍스트 & 아이콘 갱신
 */
function updatePlayButtonUI() {
  if (!btnBreathActionMain) return;
  const lang = currentBreathingLang;

  if (isBreathingPlaying) {
    btnBreathActionMain.innerHTML = `<i class="fa-solid fa-pause"></i> <span>${lang === "ko" ? "일시 정지 (Pause)" : "Pause"}</span>`;
    btnBreathActionMain.style.filter = "brightness(1.15)";
  } else {
    btnBreathActionMain.innerHTML = `<i class="fa-solid fa-play"></i> <span>${lang === "ko" ? "14초 바이오 챌린지 시작" : "Start 14s Bio-Challenge"}</span>`;
    btnBreathActionMain.style.filter = "none";
  }
}

/**
 * 연속 루프 버튼 UI 갱신
 */
function updateLoopButtonUI() {
  if (!btnBreathLoop || !txtBreathLoopLabel) return;
  const lang = currentBreathingLang;

  if (isBreathingLoop) {
    btnBreathLoop.classList.add("active");
    btnBreathLoop.style.borderColor = "var(--color-neon-green, #34d399)";
    btnBreathLoop.style.color = "#34d399";
    txtBreathLoopLabel.textContent = lang === "ko" ? "연속 루프: ON" : "Loop: ON";
  } else {
    btnBreathLoop.classList.remove("active");
    btnBreathLoop.style.borderColor = "rgba(255, 255, 255, 0.12)";
    btnBreathLoop.style.color = "#cbd5e1";
    txtBreathLoopLabel.textContent = lang === "ko" ? "연속 루프: OFF" : "Loop: OFF";
  }
}

/**
 * 1시간 딥 테라피 버튼 UI 갱신 (실시간 분:초 타이머 카운트다운)
 */
function update1HourButtonUI() {
  if (!btnBreath1Hour || !txtBreath1HourLabel) return;
  const lang = currentBreathingLang;

  if (is1HourSessionActive && oneHourRemainingSeconds > 0) {
    const m = Math.floor(oneHourRemainingSeconds / 60);
    const s = oneHourRemainingSeconds % 60;
    const timeStr = `${m}:${s < 10 ? '0' : ''}${s}`;
    
    btnBreath1Hour.classList.add("active");
    btnBreath1Hour.style.borderColor = "var(--nc-gold, #f59e0b)";
    btnBreath1Hour.style.color = "var(--nc-gold, #f59e0b)";
    txtBreath1HourLabel.textContent = lang === "ko" ? `🌙 1시간 진행 중 (${timeStr})` : `🌙 1-Hour (${timeStr})`;
  } else {
    btnBreath1Hour.classList.remove("active");
    btnBreath1Hour.style.borderColor = "rgba(245, 158, 11, 0.35)";
    btnBreath1Hour.style.color = "#fbbf24";
    txtBreath1HourLabel.textContent = lang === "ko" ? "🌙 1시간 딥 테라피" : "🌙 1-Hour Deep Therapy";
  }
}

/**
 * 미디어 박스 좌상단 모드 배지 UI 갱신
 */
function updateModeBadgeUI() {
  if (!breathingModeBadge || !txtModeBadge) return;
  const lang = currentBreathingLang;

  if (is1HourSessionActive) {
    const m = Math.floor(oneHourRemainingSeconds / 60);
    const s = oneHourRemainingSeconds % 60;
    breathingModeBadge.style.display = "flex";
    breathingModeBadge.style.borderColor = "var(--nc-gold)";
    breathingModeBadge.style.color = "var(--nc-gold)";
    txtModeBadge.textContent = lang === "ko" ? `🌙 1시간 테라피 (${m}:${s < 10 ? '0' : ''}${s})` : `🌙 1-Hour Session (${m}:${s < 10 ? '0' : ''}${s})`;
  } else if (isBreathingLoop) {
    breathingModeBadge.style.display = "flex";
    breathingModeBadge.style.borderColor = "#34d399";
    breathingModeBadge.style.color = "#34d399";
    txtModeBadge.textContent = lang === "ko" ? `🔁 연속 루프 (#${breathingCycleCount + 1})` : `🔁 Loop Active (#${breathingCycleCount + 1})`;
  } else {
    breathingModeBadge.style.display = "none";
  }
}

/**
 * 100선 긍정 확언 부드러운 페이드 순환 (모든 호흡 섹션 및 클래식 가이드 동시 연동)
 */
let affirmationIndex = 0;

function rotateHeroAffirmation() {
  const elHero = document.getElementById("txt-hero-affirmation");
  const elClassic = document.getElementById("txt-affirmation");
  const list = currentBreathingLang === "ko" ? AFFIRMATIONS_KO : AFFIRMATIONS_EN;
  if (!list || list.length === 0) return;

  affirmationIndex = (affirmationIndex + 1) % list.length;
  const quote = `"${list[affirmationIndex]}"`;

  [elHero, elClassic].forEach(el => {
    if (!el) return;
    el.style.transition = "opacity 0.4s ease";
    el.style.opacity = "0";
    setTimeout(() => {
      el.textContent = quote;
      el.style.opacity = "1";
    }, 400);
  });
}


// ==========================================================================
// 6. 클래식 5대 호흡 훈련 가이드 (완벽한 하위 호환 및 남색 호흡 타이머 인터랙티브 연동)
// ==========================================================================
let isClassicBreathingActive = false;

function clearClassicTimers() {
  if (classicBreathTimeoutId) {
    clearTimeout(classicBreathTimeoutId);
    classicBreathTimeoutId = null;
  }
  if (classicCountdownIntervalId) {
    clearInterval(classicCountdownIntervalId);
    classicCountdownIntervalId = null;
  }
}

function runClassicBreathingStep() {
  clearClassicTimers();

  const circle = document.getElementById("breathing-circle");
  const txtStatus = document.getElementById("txt-breathing-status");
  const txtTimer = document.getElementById("txt-breathing-timer");
  const txtClassicSub = document.getElementById("txt-classic-phase-sub");
  if (!circle || !txtStatus || !txtTimer) return;

  const rawPattern = classicBreathingPatterns[currentClassicPatternKey];
  if (!rawPattern) return;
  const pattern = rawPattern[currentBreathingLang] || rawPattern.ko || rawPattern;
  if (!pattern || !pattern.steps || pattern.steps.length === 0) return;
  const step = pattern.steps[currentClassicStepIndex];

  isClassicBreathingActive = true;
  updateClassicButtonUI(true);

  txtStatus.textContent = step.text;
  let remaining = Math.round(step.duration / 1000);
  txtTimer.textContent = `${remaining}s`;

  // 키프레임 애니메이션 오버라이드 차단 및 부드러운 스케일 트랜지션
  circle.style.animation = "none";
  circle.style.transition = `transform ${step.duration}ms cubic-bezier(0.4, 0, 0.2, 1), border-color 0.8s ease, box-shadow 0.8s ease`;

  const isEn = currentBreathingLang === "en";
  let classicScale = 1.0;
  if (step.state === "in") {
    classicScale = 1.22;
    circle.style.borderColor = "#34d399";
    circle.style.boxShadow = "0 0 45px rgba(52, 211, 153, 0.8), inset 0 0 25px rgba(52, 211, 153, 0.35)";
    txtTimer.style.color = "#34d399";
    txtTimer.style.textShadow = "0 0 20px rgba(52, 211, 153, 0.85)";
    if (txtClassicSub) txtClassicSub.textContent = isEn ? "Inhale deeply and calmly" : "깊고 고요하게 들이마십니다";
  } else if (step.state === "hold") {
    classicScale = 1.22;
    circle.style.borderColor = "#fbbf24";
    circle.style.boxShadow = "0 0 45px rgba(251, 191, 36, 0.8), inset 0 0 25px rgba(251, 191, 36, 0.35)";
    txtTimer.style.color = "#fbbf24";
    txtTimer.style.textShadow = "0 0 20px rgba(251, 191, 36, 0.85)";
    if (txtClassicSub) txtClassicSub.textContent = isEn ? "Hold breath comfortably" : "숨을 편안하게 멈춥니다";
  } else if (step.state === "out") {
    classicScale = 0.85;
    circle.style.borderColor = "#38bdf8";
    circle.style.boxShadow = "0 0 45px rgba(56, 189, 248, 0.8), inset 0 0 25px rgba(56, 189, 248, 0.35)";
    txtTimer.style.color = "#38bdf8";
    txtTimer.style.textShadow = "0 0 20px rgba(56, 189, 248, 0.85)";
    if (txtClassicSub) txtClassicSub.textContent = isEn ? "Exhale releasing all tension" : "모든 긴장을 비우며 내쉽니다";
  }

  circle.style.transform = `scale(${classicScale})`;
  circle.classList.remove("in", "hold", "out");
  circle.classList.add(step.state);

  classicCountdownIntervalId = setInterval(() => {
    remaining--;
    if (remaining >= 0) {
      txtTimer.textContent = `${remaining}s`;
    }
  }, 1000);

  classicBreathTimeoutId = setTimeout(() => {
    currentClassicStepIndex = (currentClassicStepIndex + 1) % pattern.steps.length;
    runClassicBreathingStep();
  }, step.duration);
}

function startClassicBreathing() {
  runClassicBreathingStep();
  if (typeof showStudioToast === "function") {
    const rawPattern = classicBreathingPatterns[currentClassicPatternKey];
    const pattern = (rawPattern && (rawPattern[currentBreathingLang] || rawPattern.ko)) || rawPattern;
    const isEn = currentBreathingLang === "en";
    showStudioToast(isEn ? `🫁 ${pattern.title} training started.` : `🫁 ${pattern.title} 훈련이 시작되었습니다.`);
  }
}

function pauseClassicBreathing() {
  clearClassicTimers();
  isClassicBreathingActive = false;
  updateClassicButtonUI(false);
  const isEn = currentBreathingLang === "en";
  const txtClassicSub = document.getElementById("txt-classic-phase-sub");
  if (txtClassicSub) txtClassicSub.textContent = isEn ? "Paused (Click to resume)" : "일시정지됨 (클릭하여 재개)";
}

function toggleClassicBreathing() {
  if (isClassicBreathingActive) {
    pauseClassicBreathing();
  } else {
    startClassicBreathing();
  }
}

function resetClassicBreathing() {
  clearClassicTimers();
  isClassicBreathingActive = false;
  currentClassicStepIndex = 0;
  updateClassicButtonUI(false);
  const isEn = currentBreathingLang === "en";

  const circle = document.getElementById("breathing-circle");
  const txtStatus = document.getElementById("txt-breathing-status");
  const txtTimer = document.getElementById("txt-breathing-timer");
  const txtClassicSub = document.getElementById("txt-classic-phase-sub");
  const txtClassicHint = document.getElementById("txt-classic-hint");

  if (circle) {
    circle.style.transition = "transform 0.5s ease-out, border-color 0.5s ease, box-shadow 0.5s ease";
    circle.style.transform = "scale(1)";
    circle.style.borderColor = "#6366f1";
    circle.style.boxShadow = "0 0 35px rgba(99, 102, 241, 0.6), inset 0 0 25px rgba(99, 102, 241, 0.3)";
  }
  if (txtStatus) txtStatus.textContent = isEn ? "READY" : "준비";
  if (txtTimer) {
    txtTimer.textContent = "0s";
    txtTimer.style.color = "#818cf8";
    txtTimer.style.textShadow = "0 0 20px rgba(99, 102, 241, 0.8)";
  }
  if (txtClassicSub) {
    const rawPattern = classicBreathingPatterns[currentClassicPatternKey];
    const pattern = (rawPattern && (rawPattern[currentBreathingLang] || rawPattern.ko)) || rawPattern;
    txtClassicSub.textContent = pattern ? pattern.title : (isEn ? "Coherent Breathing (5-5s)" : "동조 호흡 (5-5s)");
  }
  if (txtClassicHint) {
    txtClassicHint.textContent = isEn ? "Click to Start / Pause" : "클릭하여 시작 / 정지";
  }
}

function updateClassicButtonUI(isPlaying) {
  const btn = document.getElementById("btn-classic-breath-toggle");
  const icon = document.getElementById("icon-classic-play");
  const label = document.getElementById("txt-classic-action-label");
  const isEn = currentBreathingLang === "en";
  if (!btn) return;

  if (isPlaying) {
    if (icon) {
      icon.classList.remove("fa-play");
      icon.classList.add("fa-pause");
    }
    if (label) label.textContent = isEn ? "Pause Classic Breathing" : "클래식 호흡 일시정지";
    btn.style.background = "linear-gradient(135deg, #10b981, #059669)";
    btn.style.borderColor = "#34d399";
  } else {
    if (icon) {
      icon.classList.remove("fa-pause");
      icon.classList.add("fa-play");
    }
    if (label) label.textContent = isEn ? "Start Classic Breathing" : "클래식 호흡 훈련 시작";
    btn.style.background = "linear-gradient(135deg, #4f46e5, #6366f1)";
    btn.style.borderColor = "#818cf8";
  }
}

function changeClassicPattern(patternKey) {
  if (!classicBreathingPatterns[patternKey]) return;
  currentClassicPatternKey = patternKey;
  currentClassicStepIndex = 0;

  const rawPattern = classicBreathingPatterns[patternKey];
  const pattern = (rawPattern && (rawPattern[currentBreathingLang] || rawPattern.ko)) || rawPattern;
  const title = document.getElementById("txt-pattern-title");
  const desc = document.getElementById("txt-pattern-desc");
  if (title) title.textContent = pattern.title;
  if (desc) desc.textContent = pattern.desc;

  document.querySelectorAll(".btn-pattern").forEach(btn => {
    btn.classList.toggle("active", btn.getAttribute("data-pattern") === patternKey);
  });

  // 패턴 변경 시 즉시 새 긍정 확언으로 전환
  rotateHeroAffirmation();

  if (isClassicBreathingActive) {
    runClassicBreathingStep();
  } else {
    resetClassicBreathing();
  }
}

// ==========================================================================
// 7. 모듈 초기화
// ==========================================================================
function initBreathingGuide() {
  // DOM 요소 취득
  breathingPoster = document.getElementById("breathing-poster");
  concentricPulseCircle = document.getElementById("concentric-pulse-circle");
  concentricCircleContent = document.getElementById("concentric-circle-content");
  txtBreathPhase = document.getElementById("txt-breath-phase");
  txtBreathTimer = document.getElementById("txt-breath-timer");
  txtBreathSub = document.getElementById("txt-breath-sub");
  breathingCycleBarFill = document.getElementById("breathing-cycle-bar-fill");
  rewardBadgePopup = document.getElementById("reward-badge-popup");
  btnBreathActionMain = document.getElementById("btn-breath-action-main");
  iconBreathPlay = document.getElementById("icon-breath-play");
  txtBreathActionLabel = document.getElementById("txt-breath-action-label");
  btnBreathLoop = document.getElementById("btn-breath-loop");
  txtBreathLoopLabel = document.getElementById("txt-breath-loop-label");
  btnBreath1Hour = document.getElementById("btn-breath-1hour");
  txtBreath1HourLabel = document.getElementById("txt-breath-1hour-label");
  breathingModeBadge = document.getElementById("breathing-mode-badge");
  txtModeBadge = document.getElementById("txt-mode-badge");
  txtHeroAffirmation = document.getElementById("txt-hero-affirmation");

  // 초기 7색 호흡 렌더링
  selectBreathingColor("red");
  setBreathingLanguage(window.currentLang || "ko");

  // 6초 주기로 긍정 확언 자동 지속 순환 (호흡 훈련 중에도 계속 전환)
  setInterval(() => {
    rotateHeroAffirmation();
  }, 6000);

  // 클래식 5대 호흡 버튼 바인딩
  document.querySelectorAll(".btn-pattern").forEach(btn => {
    btn.addEventListener("click", () => {
      const pattern = btn.getAttribute("data-pattern");
      changeClassicPattern(pattern);
    });
  });

  // 클래식 호흡 초기값 리셋 설정
  resetClassicBreathing();

  // 초기 긍정 확언 최초 1회 갱신
  setTimeout(() => {
    rotateHeroAffirmation();
  }, 1000);
}

// ==========================================================================
// 8. NovaCell 100 & VIP 힐링 코드 검색 및 호흡 연동 모듈
// ==========================================================================
function openHealingCodeSearchModal() {
  const modal = document.getElementById("modal-healing-code-search");
  if (!modal) return;
  modal.style.display = "flex";
  
  const input = document.getElementById("input-healing-modal-search");
  if (input) {
    input.value = "";
    healingModalSearchKeyword = "";
    setTimeout(() => input.focus(), 100);
  }
  setHealingModalFilter("all");
}

function closeHealingCodeSearchModal() {
  const modal = document.getElementById("modal-healing-code-search");
  if (modal) modal.style.display = "none";
}

function setHealingModalFilter(filter) {
  healingModalFilter = filter;
  document.querySelectorAll(".btn-modal-filter").forEach(btn => {
    btn.classList.toggle("active", btn.getAttribute("data-filter") === filter);
  });
  renderHealingCodesModal();
}

function onHealingModalSearchInput(val) {
  healingModalSearchKeyword = (val || "").trim().toLowerCase();
  renderHealingCodesModal();
}

function renderHealingCodesModal() {
  const listEl = document.getElementById("healing-codes-modal-list");
  const countEl = document.getElementById("txt-modal-results-count");
  if (!listEl) return;

  const items = [];

  // A. NovaCell 100 힐링 코드 스캔
  if (healingModalFilter === "all" || healingModalFilter === "rife") {
    const rifeMap = window.rifeRecipes || {};
    Object.keys(rifeMap).forEach(code => {
      const rec = rifeMap[code];
      const match = !healingModalSearchKeyword ||
        code.includes(healingModalSearchKeyword) ||
        rec.title.toLowerCase().includes(healingModalSearchKeyword) ||
        (rec.desc && rec.desc.toLowerCase().includes(healingModalSearchKeyword));
      if (match) {
        items.push({
          code,
          type: "rife",
          title: rec.title,
          desc: rec.desc,
          freqs: rec.freqs,
          badgeLabel: `NovaCell #${code}`,
          badgeClass: "rife"
        });
      }
    });
  }

  // B. VIP 임상 웰니스 코드 스캔
  if (healingModalFilter === "all" || healingModalFilter === "vip") {
    const vipMap = window.vipRecipes || {};
    Object.keys(vipMap).forEach(code => {
      const rec = vipMap[code];
      const match = !healingModalSearchKeyword ||
        code.toLowerCase().includes(healingModalSearchKeyword) ||
        rec.title.toLowerCase().includes(healingModalSearchKeyword) ||
        (rec.desc && rec.desc.toLowerCase().includes(healingModalSearchKeyword));
      if (match) {
        items.push({
          code,
          type: "vip",
          title: rec.title,
          desc: rec.desc,
          freqs: rec.freqs,
          badgeLabel: `VIP ${code}`,
          badgeClass: "vip"
        });
      }
    });
  }

  const isEn = window.currentLang === 'en';

  if (countEl) {
    countEl.textContent = isEn ? `Results: ${items.length} codes` : `검색 결과 ${items.length}개`;
  }

  if (items.length === 0) {
    listEl.innerHTML = `
      <div style="text-align: center; padding: 40px 20px; color: #94a3b8;">
        <i class="fa-solid fa-magnifying-glass" style="font-size: 2rem; color: #475569; margin-bottom: 12px; display: block;"></i>
        <p style="font-size: 0.9rem; margin-bottom: 4px;">${isEn ? 'No matching healing codes found.' : '일치하는 힐링 코드를 찾을 수 없습니다.'}</p>
        <span style="font-size: 0.78rem; color: #64748b;">${isEn ? 'Try another keyword, symptom, or frequency.' : '다른 검색어나 질환명을 입력해 보세요.'}</span>
      </div>
    `;
    return;
  }

  let html = "";
  items.forEach(item => {
    const isSelected = activeHealingCode && activeHealingCode.code === item.code && activeHealingCode.type === item.type;
    const rawDesc = isEn 
      ? (item.type === "vip" 
          ? (typeof window.getBilingualVipDesc === 'function' ? window.getBilingualVipDesc(item.code, item) : item.desc)
          : (typeof window.getBilingualRifeDesc === 'function' ? window.getBilingualRifeDesc(item.code, item) : item.desc))
      : item.desc;
    const cleanDesc = (rawDesc || "").replace(/<[^>]+>/g, " ").replace(/\n/g, " ").substring(0, 75);
    const moreFreqText = isEn ? ` +${item.freqs.length - 6} more` : ` 외 ${item.freqs.length - 6}개`;
    const freqsPreview = (item.freqs || []).slice(0, 6).join(", ") + (item.freqs && item.freqs.length > 6 ? moreFreqText : "");
    const displayTitle = item.type === "vip"
      ? (typeof window.getBilingualVipTitle === 'function' ? window.getBilingualVipTitle(item.code, item.title) : item.title)
      : (typeof window.getBilingualRifeTitle === 'function' ? window.getBilingualRifeTitle(item.code, item.title) : item.title);

    html += `
      <div class="healing-code-item ${isSelected ? "selected" : ""}" onclick="applyHealingCodeToBreathing('${item.code}', '${item.type}')">
        <span class="code-badge-pill ${item.badgeClass}">${item.badgeLabel}</span>
        <div class="code-info-col">
          <div class="code-item-title">${displayTitle}</div>
          <div class="code-item-desc">${cleanDesc}...</div>
          <div class="code-item-freqs"><i class="ri-pulse-line"></i> ${isEn ? 'Freq' : '주파수'}: ${freqsPreview} Hz</div>
        </div>
        <button type="button" class="btn-select-code" onclick="event.stopPropagation(); applyHealingCodeToBreathing('${item.code}', '${item.type}')">
          <i class="fa-solid fa-lungs"></i> ${isEn ? 'Sync & Listen' : '연동하기'}
        </button>
      </div>
    `;
  });

  listEl.innerHTML = html;
}

function applyHealingCodeToBreathing(codeKey, type) {
  let recipe = null;
  if (type === "rife" && window.rifeRecipes) recipe = window.rifeRecipes[codeKey];
  else if (type === "vip" && window.vipRecipes) recipe = window.vipRecipes[codeKey];

  if (!recipe) return;

  activeHealingCode = {
    code: codeKey,
    type,
    title: recipe.title,
    freqs: recipe.freqs
  };

  const isEn = window.currentLang === 'en';
  const displayTitle = type === "vip"
    ? (typeof window.getBilingualVipTitle === 'function' ? window.getBilingualVipTitle(codeKey, recipe.title) : recipe.title)
    : (typeof window.getBilingualRifeTitle === 'function' ? window.getBilingualRifeTitle(codeKey, recipe.title) : recipe.title);

  // UI 배너 업데이트
  const banner = document.getElementById("active-healing-code-banner");
  const titleEl = document.getElementById("active-healing-code-title");
  const freqsEl = document.getElementById("active-healing-code-freqs");
  const hzBadge = document.getElementById("txt-custom-hz-badge");
  const chakraBadge = document.getElementById("txt-chakra-badge");

  if (banner) banner.style.display = "flex";
  if (titleEl) titleEl.textContent = isEn ? `✨ [Synced] ${displayTitle}` : `✨ [연동] ${displayTitle}`;
  if (freqsEl) {
    const moreText = isEn ? ` +${recipe.freqs.length - 7} more` : ` 외 ${recipe.freqs.length - 7}개`;
    const freqsStr = recipe.freqs.slice(0, 7).join(", ") + (recipe.freqs.length > 7 ? moreText : "");
    freqsEl.textContent = isEn ? `Healing Frequency Set: [${freqsStr} Hz]` : `치유 주파수 구성: [${freqsStr} Hz]`;
  }
  if (hzBadge) {
    const badgeType = type === "vip" ? "VIP" : (isEn ? "Healing" : "힐링");
    hzBadge.textContent = `🌿 ${badgeType} #${codeKey}`;
    hzBadge.style.color = "#34d399";
    hzBadge.style.borderColor = "#34d399";
    hzBadge.style.background = "rgba(16, 185, 129, 0.2)";
  }
  if (chakraBadge) {
    const badgeRes = type === "vip" ? "VIP" : (isEn ? "Healing Resonance" : "힐링 공명");
    chakraBadge.innerHTML = `<i class="fa-solid fa-atom"></i> ${badgeRes}`;
  }

  // 모달 닫기
  closeHealingCodeSearchModal();

  // 오디오 엔진에 주파수 적용 및 재생 개시
  if (isSoundSyncEnabled) {
    applySoundSyncToEngine();
  }

  // 호흡 타이머 미작동 중이면 자동 시작
  if (!isBreathingPlaying) {
    startBreathingPlayback();
  }

  if (typeof showStudioToast === "function") {
    showStudioToast(`🫁 ${recipe.title} 치유 주파수가 호흡 테라피에 연동되었습니다!`);
  }
}

function clearActiveHealingCode() {
  activeHealingCode = null;
  const banner = document.getElementById("active-healing-code-banner");
  if (banner) banner.style.display = "none";

  resetBreathingChakraHz();

  if (typeof showStudioToast === "function") {
    const isEn = window.currentLang === 'en';
    showStudioToast(isEn 
      ? "🌿 Active healing code cleared, restored to default chakra frequencies." 
      : "🌿 치유 코드가 해제되고 기본 차크라 주파수로 복원되었습니다.");
  }
}

function linkActiveRifeCodeToBreathing() {
  let code = "001";
  const titleEl = document.getElementById("rife-card-title");
  if (titleEl && titleEl.textContent) {
    const match = titleEl.textContent.match(/Code\s*(\d+)/i);
    if (match && match[1]) code = match[1];
  }

  if (typeof switchTab === "function") switchTab("tab-care");
  setTimeout(() => {
    applyHealingCodeToBreathing(code, "rife");
    const stage = document.getElementById("breathing-section");
    if (stage) stage.scrollIntoView({ behavior: "smooth", block: "start" });
  }, 150);
}

function linkActiveVipCodeToBreathing() {
  let code = "V001";
  const titleEl = document.getElementById("vip-card-title");
  if (titleEl && titleEl.textContent) {
    const match = titleEl.textContent.match(/Code\s*([Vv]\d+)/i);
    if (match && match[1]) code = match[1].toUpperCase();
  }

  if (typeof switchTab === "function") switchTab("tab-care");
  setTimeout(() => {
    applyHealingCodeToBreathing(code, "vip");
    const stage = document.getElementById("breathing-section");
    if (stage) stage.scrollIntoView({ behavior: "smooth", block: "start" });
  }, 150);
}

function toggleTab1Breathing() {
  if (typeof switchTab === "function") {
    switchTab("tab-care");
    setTimeout(() => {
      const stage = document.getElementById("breathing-section") || document.getElementById("tab-care");
      if (stage) stage.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  }
}

// 전역 윈도우 스코프 함수 노출 (HTML onclick 속성 연동 100% 보장)
window.setBreathingLanguage = setBreathingLanguage;
window.selectBreathingColor = selectBreathingColor;
window.setBreathingFrequency = setBreathingFrequency;
window.applyCustomBreathingHz = applyCustomBreathingHz;
window.resetBreathingChakraHz = resetBreathingChakraHz;
window.toggleBreathingPlayback = toggleBreathingPlayback;
window.toggleBreathingLoop = toggleBreathingLoop;
window.start1HourBreathingSession = start1HourBreathingSession;
window.toggleBreathingSoundSync = toggleBreathingSoundSync;
window.toggleBreathingFullscreen = toggleBreathingFullscreen;
window.dismissRewardPopup = dismissRewardPopup;
window.openHealingCodeSearchModal = openHealingCodeSearchModal;
window.closeHealingCodeSearchModal = closeHealingCodeSearchModal;
window.setHealingModalFilter = setHealingModalFilter;
window.onHealingModalSearchInput = onHealingModalSearchInput;
window.renderHealingCodesModal = renderHealingCodesModal;
window.applyHealingCodeToBreathing = applyHealingCodeToBreathing;
window.clearActiveHealingCode = clearActiveHealingCode;
window.linkActiveRifeCodeToBreathing = linkActiveRifeCodeToBreathing;
window.linkActiveVipCodeToBreathing = linkActiveVipCodeToBreathing;
window.toggleTab1Breathing = toggleTab1Breathing;
window.toggleClassicBreathing = toggleClassicBreathing;
window.startClassicBreathing = startClassicBreathing;
window.pauseClassicBreathing = pauseClassicBreathing;
window.resetClassicBreathing = resetClassicBreathing;
window.changeClassicPattern = changeClassicPattern;

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initBreathingGuide);
} else {
  initBreathingGuide();
}

