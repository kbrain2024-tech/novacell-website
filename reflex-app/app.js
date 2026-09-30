const maps = [
  {
    id: "right_sole",
    icon: "🦶",
    surface: "sole",
    title: "오른발 발바닥",
    en: "Right Sole",
    subtitleKo: "발바닥 반사구 (우측)",
    subtitleEn: "Plantar Surface (Right)",
    regionTitleKo: "오른발 발바닥 · 오른발 (우측)",
    regionTitleEn: "Right Sole (Plantar)",
    regionSubKo: "발바닥 반사구 · 교재 제1장 26쪽",
    regionSubEn: "Reference: Complete reflexology for life · p.26",
    side: "RIGHT · FOOT",
    image: "foot-sole-map.webp",
    imageEn: "foot-sole-right-en.png",
    page: 26
  },
  {
    id: "left_sole",
    icon: "🦶",
    surface: "sole",
    title: "왼발 발바닥",
    en: "Left Sole",
    subtitleKo: "발바닥 반사구 (좌측)",
    subtitleEn: "Plantar Surface (Left)",
    regionTitleKo: "왼발 발바닥 · 왼발 (좌측)",
    regionTitleEn: "Left Sole (Plantar)",
    regionSubKo: "발바닥 반사구 · 교재 제1장 27쪽",
    regionSubEn: "Reference: Complete reflexology for life · p.27",
    side: "LEFT · FOOT",
    image: "foot-sole-map.webp",
    imageEn: "foot-sole-left-en.png",
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
    regionTitleKo: "오른발 발등 · 오른발 (우측)",
    regionTitleEn: "Right Foot Top (Dorsum)",
    regionSubKo: "발등 반사구 · 교재 제1장 29쪽",
    regionSubEn: "Reference: Complete reflexology for life · p.29",
    side: "RIGHT · FOOT",
    image: "foot-top-map.webp",
    imageEn: "foot-top-right-en.png",
    page: 29
  },
  {
    id: "left_top",
    icon: "🦶",
    surface: "top",
    title: "왼발 발등",
    en: "Left Foot Top",
    subtitleKo: "발등 반사구 (좌측)",
    subtitleEn: "Foot Dorsum (Left)",
    regionTitleKo: "왼발 발등 · 왼발 (좌측)",
    regionTitleEn: "Left Foot Top (Dorsum)",
    regionSubKo: "발등 반사구 · 교재 제1장 28쪽",
    regionSubEn: "Reference: Complete reflexology for life · p.28",
    side: "LEFT · FOOT",
    image: "foot-top-map.webp",
    imageEn: "foot-top-left-en.png",
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
    regionTitleKo: "오른손 손바닥 · 오른손 (우측)",
    regionTitleEn: "Right Palm (Palmar)",
    regionSubKo: "손바닥 반사구 · 교재 제2장 31쪽",
    regionSubEn: "Reference: Complete reflexology for life · p.31",
    side: "RIGHT · HAND",
    image: "hand-palm-map.webp",
    imageEn: "hand-palm-right-en.png",
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
    regionTitleKo: "왼손 손바닥 · 왼손 (좌측)",
    regionTitleEn: "Left Palm (Palmar)",
    regionSubKo: "손바닥 반사구 · 교재 제2장 30쪽",
    regionSubEn: "Reference: Complete reflexology for life · p.30",
    side: "LEFT · HAND",
    image: "hand-palm-map.webp",
    imageEn: "hand-palm-left-en.png",
    page: 30
  },
  {
    id: "right_back",
    icon: "🤚",
    surface: "back",
    title: "오른손 손등",
    en: "Right Hand Back",
    subtitleKo: "손등 반사구 (우측)",
    subtitleEn: "Hand Dorsum (Right)",
    regionTitleKo: "오른손 손등 · 오른손 (우측)",
    regionTitleEn: "Right Hand Back (Dorsum)",
    regionSubKo: "손등 반사구 · 교재 제2장 33쪽",
    regionSubEn: "Reference: Complete reflexology for life · p.33",
    side: "RIGHT · HAND",
    image: "hand-back-map.webp",
    imageEn: "hand-back-right-en.png",
    page: 33
  },
  {
    id: "left_back",
    icon: "🤚",
    surface: "back",
    title: "왼손 손등",
    en: "Left Hand Back",
    subtitleKo: "손등 반사구 (좌측)",
    subtitleEn: "Hand Dorsum (Left)",
    regionTitleKo: "왼손 손등 · 왼손 (좌측)",
    regionTitleEn: "Left Hand Back (Dorsum)",
    regionSubKo: "손등 반사구 · 교재 제2장 32쪽",
    regionSubEn: "Reference: Complete reflexology for life · p.32",
    side: "LEFT · HAND",
    image: "hand-back-map.webp",
    imageEn: "hand-back-left-en.png",
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

const surfacePins = {
  sole: [
    { id: "brain", ko: "머리 / 뇌", en: "Head / Brain", x: 50, y: 7, icon: "🧠", tagKo: "엄지발가락 끝단", tagEn: "Great Toe Tip", descKo: "대뇌 피질 활성화, 중추신경계 안정, 두통 및 불면증 완화", descEn: "Cerebral cortex stimulation, central nervous system calming, headache and insomnia relief" },
    { id: "pituitary", ko: "뇌하수체", en: "Pituitary Gland", x: 50, y: 13.5, icon: "⚡", tagKo: "엄지발가락 지문 중심", tagEn: "Toe Print Center", descKo: "전체 호르몬 분비 및 내분비계 총괄 조절 핵심점", descEn: "Master endocrine gland regulating hormonal balance and metabolism" },
    { id: "stem", ko: "목 / 뇌간", en: "Neck / Brainstem", x: 50, y: 19, icon: "🧣", tagKo: "엄지발가락 관절 기저", tagEn: "Base of Great Toe", descKo: "연수 및 뇌간 자극, 뇌혈류 개선, 경추 긴장 완화", descEn: "Brainstem stimulation, cranial circulation, cervical tension release" },
    { id: "sinuses_2", ko: "부비강 (2지)", en: "Sinus (2nd Toe)", x: 34, y: 11, icon: "👃", tagKo: "두 번째 발가락 끝", tagEn: "2nd Toe Tip", descKo: "비염, 부비동염, 코막힘 해소 및 안면 순환", descEn: "Relieves sinus pressure, rhinitis, and nasal congestion" },
    { id: "sinuses_3", ko: "부비강 (3지)", en: "Sinus (3rd Toe)", x: 25, y: 13, icon: "👃", tagKo: "세 번째 발가락 끝", tagEn: "3rd Toe Tip", descKo: "안면 압력 완화 및 상부 호흡기 청결", descEn: "Facial pressure ease and sinus drainage" },
    { id: "sinuses_4", ko: "부비강 (4지)", en: "Sinus (4th Toe)", x: 17, y: 17, icon: "👃", tagKo: "네 번째 발가락 끝", tagEn: "4th Toe Tip", descKo: "전두동 정체 해소 및 두통 완화", descEn: "Frontal sinus clearing and headache relief" },
    { id: "sinuses_5", ko: "부비강 (5지)", en: "Sinus (5th Toe)", x: 12, y: 22, icon: "👃", tagKo: "다섯 번째 발가락 끝", tagEn: "5th Toe Tip", descKo: "비강 순환 촉진 및 측두 긴장 완화", descEn: "Nasal circulation and temporal ease" },
    { id: "temples", ko: "측두부 / 삼차신경", en: "Temples & Trigeminal", x: 62, y: 12, icon: "⚡", tagKo: "엄지발가락 외측면", tagEn: "Great Toe Lateral Side", descKo: "편두통, 안면신경 긴장, 관자놀이 압박감 해소", descEn: "Migraine relief, facial nerve ease, temple pressure easing" },
    { id: "eyes", ko: "눈 (시신경)", en: "Eyes", x: 35, y: 22, icon: "👁️", tagKo: "2·3지 기저부", tagEn: "Base of Toes 2 & 3", descKo: "시각 피로, 시력 보호, 안구건조증 완화", descEn: "Visual strain, optic nerve support, dry eyes relief" },
    { id: "ears", ko: "귀 (청신경)", en: "Ears", x: 18, y: 26, icon: "👂", tagKo: "4·5지 기저부", tagEn: "Base of Toes 4 & 5", descKo: "이명 완화, 중이염 예방 및 청각 피로 회복", descEn: "Tinnitus easing, inner ear balance, auditory fatigue reduction" },
    { id: "eustachian", ko: "이관 / 내이", en: "Inner Ear / Eustachian", x: 14, y: 30, icon: "🌀", tagKo: "새끼발가락 밑 외측", tagEn: "Base of 5th Toe Lateral", descKo: "귀 압력 조절, 어지럼증 및 평형감각 개선", descEn: "Ear pressure regulation, vertigo and balance improvement" },
    { id: "trapezius", ko: "승모근 / 목선", en: "Trapezius & Neck", x: 42, y: 23, icon: "🦾", tagKo: "발가락 기저 안쪽선", tagEn: "Medial Pre-Ball Line", descKo: "어깨 뭉침, 목덜미 뻐근함, 승모근 긴장 이완", descEn: "Shoulder tension, stiff neck, and trapezius stiffness relief" },
    { id: "thyroid", ko: "갑상선", en: "Thyroid Gland", x: 48, y: 24.5, icon: "🦋", tagKo: "엄지발가락 뿌리 안쪽", tagEn: "Medial Big Toe Base", descKo: "신진대사 조절, 체온 유지, 전신 에너지 활성화", descEn: "Metabolic regulation, body warmth, energy optimization" },
    { id: "parathyroid", ko: "부갑상선", en: "Parathyroid Glands", x: 54, y: 25.5, icon: "✨", tagKo: "엄지 기저 안쪽 능선", tagEn: "Medial Metatarsal Edge", descKo: "칼슘 대사 조절, 근육 경련 예방, 신경 안정", descEn: "Calcium balance, muscle spasm prevention, nerve stability" },
    { id: "thymus", ko: "흉선", en: "Thymus Gland", x: 38, y: 26.5, icon: "🛡️", tagKo: "발바닥 상부 중앙선", tagEn: "Upper Center Ball", descKo: "T세포 성숙, 림프 면역력 증강, 흉부 방어력", descEn: "T-cell maturation, immune boosting, chest protection" },
    { id: "lungs", ko: "폐 / 기관지", en: "Lungs & Bronchials", x: 32, y: 31, icon: "🫁", tagKo: "발바닥 볼 융기부", tagEn: "Ball of Foot Pad", descKo: "호흡 기능 강화, 가슴 답답함 및 기침 완화", descEn: "Respiratory capacity, bronchial clearing, chest opening" },
    { id: "upper_back", ko: "상배부 / 등 상부", en: "Upper Back", x: 40, y: 32, icon: "🦾", tagKo: "발바닥 상부 중앙 패드", tagEn: "Upper Central Pad", descKo: "등 결림, 견갑골 사이 긴장 완화 및 흉추 지지", descEn: "Upper back ease, scapular relaxation, thoracic support" },
    { id: "shoulder", ko: "어깨 관절", en: "Shoulder Joint", x: 14, y: 35, icon: "🦾", tagKo: "발바닥 외측 볼 모서리", tagEn: "Lateral Ball Margin", descKo: "오십견, 어깨 관절통 및 팔 움직임 개선", descEn: "Frozen shoulder relief, scapular mobility improvement" },
    { id: "arm", ko: "팔 / 상완", en: "Arm & Upper Arm", x: 12, y: 40, icon: "💪", tagKo: "발바닥 외측 테두리", tagEn: "Lateral Outer Border", descKo: "팔 저림 해소, 상지 혈액순환 촉진", descEn: "Arm numbness relief, upper limb circulation" },
    { id: "heart", ko: "심장 / 흉부", en: "Heart & Chest", x: 68, y: 34, icon: "❤️", tagKo: "발바닥 상부 좌측 (좌측발)", tagEn: "Upper Sole Left (Left Foot)", descKo: "혈액 순환 촉진, 가슴 두근거림 및 부정맥 안정", descEn: "Cardiovascular flow, heartbeat stabilization, chest easing" },
    { id: "solar", ko: "복강신경총 (태양신경총)", en: "Solar Plexus", x: 38, y: 38, icon: "☀️", tagKo: "발바닥 중심 상단 오목부", tagEn: "Upper Center Arch Hollow", descKo: "교감신경 이완, 스트레스 즉각 완화, 심신 안정", descEn: "Deep stress relief, diaphragmatic relaxation, autonomic calm" },
    { id: "diaphragm", ko: "횡격막", en: "Diaphragm Line", x: 34, y: 42, icon: "🌬️", tagKo: "발바닥 볼 아래 가로선", tagEn: "Sub-Ball Horizontal Line", descKo: "호흡 깊이 확장, 딸꾹질 완화, 복식호흡 원활", descEn: "Breathing depth, hiccup relief, diaphragmatic ease" },
    { id: "stomach", ko: "위장", en: "Stomach", x: 48, y: 45, icon: "🥣", tagKo: "발바닥 내측 아치 중간", tagEn: "Medial Arch Upper-Mid", descKo: "소화불량, 속쓰림, 위염 및 식후 더부룩함 완화", descEn: "Indigestion relief, gastric acid balance, fullness ease" },
    { id: "duodenum", ko: "십이지장", en: "Duodenum", x: 50, y: 49, icon: "🌀", tagKo: "위장 바로 아래", tagEn: "Below Stomach Area", descKo: "십이지장 궤양 예방, 담즙 및 소화 효소 분비 원활", descEn: "Duodenal comfort, digestive enzyme and bile delivery" },
    { id: "pancreas", ko: "췌장", en: "Pancreas", x: 52, y: 52, icon: "🧪", tagKo: "아치 중앙 내측", tagEn: "Mid-Medial Arch Space", descKo: "인슐린 분비 조절, 혈당 안정 및 단백질 효소 분비", descEn: "Insulin and blood sugar regulation, enzyme secretion" },
    { id: "liver", ko: "간", en: "Liver", x: 26, y: 47, icon: "🌿", tagKo: "발바닥 우측 외측부 (우측발)", tagEn: "Right Foot Lateral Arch", descKo: "간 해독 작용 촉진, 만성 피로 회복, 혈액 정화", descEn: "Hepatic detox, chronic fatigue relief, blood clearing" },
    { id: "gallbladder", ko: "담낭", en: "Gallbladder", x: 22, y: 51, icon: "🫒", tagKo: "간 반사구 바로 아래 (우측발)", tagEn: "Right Foot Sub-Liver", descKo: "담즙 분비 촉진, 지방 소화 원활 및 소화불량 개선", descEn: "Bile release, fat digestion, digestive harmony" },
    { id: "spleen", ko: "비장", en: "Spleen", x: 74, y: 48, icon: "🩸", tagKo: "발바닥 좌측 외측부 (좌측발)", tagEn: "Left Foot Lateral Arch", descKo: "적혈구 정화, 혈액 면역계 지원, 림프 순환", descEn: "Blood purification, lymphatic immunity, vital defense" },
    { id: "adrenal", ko: "부신", en: "Adrenal Gland", x: 42, y: 53, icon: "⚡", tagKo: "신장 바로 위 포인트", tagEn: "Just Above Kidney Core", descKo: "스트레스 호르몬 조절, 만성 피로 극복, 항염 작용", descEn: "Cortisol balance, adrenal fatigue recovery, anti-inflammation" },
    { id: "kidney", ko: "신장 (콩팥)", en: "Kidney", x: 40, y: 57, icon: "💧", tagKo: "발바닥 용천혈 부근 중심", tagEn: "Plantar Core Arch", descKo: "노폐물 여과, 체내 수분 대사, 요산 배출 촉진", descEn: "Filtration of toxins, fluid balance, fatigue elimination" },
    { id: "ureter", ko: "수뇨관", en: "Ureter Tube", x: 46, y: 64, icon: "〰️", tagKo: "신장에서 방광으로 사선", tagEn: "Diagonal Kidney to Bladder", descKo: "요로 결석 예방, 소변 배출 유도, 수분 흐름 원활", descEn: "Urinary drainage, kidney stone prevention, fluid passage" },
    { id: "bladder", ko: "방광", en: "Urinary Bladder", x: 56, y: 72, icon: "🫧", tagKo: "발 안쪽 뒤꿈치 직전 융기", tagEn: "Medial Pre-Heel Border", descKo: "배뇨 장애 개선, 빈뇨·잔뇨감 해소, 방광염 예방", descEn: "Bladder toning, smooth urination, urinary comfort" },
    { id: "small_intestine", ko: "소장", en: "Small Intestine", x: 38, y: 67, icon: "🌾", tagKo: "발바닥 중앙 하부", tagEn: "Central Lower Arch", descKo: "영양소 흡수 촉진, 복부 냉증 개선, 장내 유익균 활성", descEn: "Nutrient absorption, abdominal warmth, gut health" },
    { id: "transverse_colon", ko: "횡행결장", en: "Transverse Colon", x: 32, y: 60, icon: "🔄", tagKo: "발바닥 아치 상부 가로띠", tagEn: "Upper Arch Transverse Band", descKo: "장 내용물 이송, 복부 팽만 완화, 가스 배출", descEn: "Transit easing, abdominal bloating relief" },
    { id: "ascending_colon", ko: "상행결장", en: "Ascending Colon", x: 18, y: 59, icon: "🔼", tagKo: "발바닥 외측 종렬띠 (우측발)", tagEn: "Right Foot Lateral Band", descKo: "우측 대장 연동 촉진, 숙변 배출 및 변비 완화", descEn: "Ascending peristalsis, waste elimination, regularity" },
    { id: "descending_colon", ko: "하행결장", en: "Descending Colon", x: 76, y: 60, icon: "🔽", tagKo: "발바닥 외측 종렬띠 (좌측발)", tagEn: "Left Foot Lateral Band", descKo: "좌측 대장 배변 유도, 직장 압력 완화", descEn: "Descending transit, bowel evacuation ease" },
    { id: "sigmoid_colon", ko: "S자 결장", en: "Sigmoid Colon", x: 70, y: 69, icon: "🔀", tagKo: "발바닥 좌측 하부 아치 (좌측발)", tagEn: "Left Foot Lower Arch", descKo: "S상 결장 긴장 해소, 잔변감 및 변비 완화", descEn: "Sigmoid ease, complete evacuation support" },
    { id: "ileocecal", ko: "회맹판 / 맹장", en: "Ileocecal Valve & Appendix", x: 20, y: 69, icon: "🔒", tagKo: "발바닥 외측 하부 (우측발)", tagEn: "Lower Lateral Arch (Right)", descKo: "역류 방지, 장내 독소 유입 차단, 맹장 림프 순환", descEn: "Prevents reflux, blocks gut toxins, lymphatic defense" },
    { id: "spine", ko: "척추 내측선 (경추-천골)", en: "Spinal Column Line", x: 60, y: 50, icon: "🦴", tagKo: "발 안쪽 모서리 전장", tagEn: "Medial Long Border", descKo: "경추·흉추·요추 통증 완화, 척추 정렬 및 신경 흐름", descEn: "Cervical, thoracic, lumbar spine alignment and back pain relief" },
    { id: "lower_back", ko: "하배부 / 허리", en: "Lower Back", x: 46, y: 76, icon: "🦴", tagKo: "뒤꿈치 직전 중앙선", tagEn: "Pre-Heel Center Line", descKo: "요통 완화, 골반 기저 안정 및 허리 신경 피로 회복", descEn: "Lower back pain relief, pelvic base stabilization" },
    { id: "sciatic", ko: "좌골신경", en: "Sciatic Nerve", x: 40, y: 81, icon: "⚡", tagKo: "뒤꿈치 패드 상단 가로띠", tagEn: "Upper Heel Transverse Band", descKo: "좌골신경통, 둔부 저림, 다리 당김 완화", descEn: "Sciatica alleviation, buttock numbness, leg tension release" },
    { id: "coccyx", ko: "미골 (꼬리뼈)", en: "Tailbone / Coccyx", x: 58, y: 84, icon: "🦴", tagKo: "뒤꿈치 안쪽 하단 모서리", tagEn: "Medial Heel Border Tip", descKo: "꼬리뼈 통증, 골반저근 긴장 완화, 앉을 때 불편감 해소", descEn: "Coccyx pain relief, pelvic floor relaxation, sitting comfort" },
    { id: "heel", ko: "뒤꿈치 패드", en: "Heel Pad", x: 38, y: 88, icon: "🦶", tagKo: "뒤꿈치 패드 중앙", tagEn: "Center Heel Cushion", descKo: "골반 안정, 발꿈치 통증 완화, 하지 피로 회복", descEn: "Pelvic grounding, heel pain easing, lower body recovery" }
  ],
  top: [
    { id: "top_brain", ko: "머리 / 부비동", en: "Face & Sinuses", x: 50, y: 8, icon: "🧠", tagKo: "발등 발가락 끝단", tagEn: "Dorsal Toe Tips", descKo: "두통 완화, 부비강 압력 해소, 안면 순환", descEn: "Headache relief, sinus clearing, facial ease" },
    { id: "top_teeth", ko: "치아 및 잇몸", en: "Teeth & Gums", x: 36, y: 15, icon: "🦷", tagKo: "발가락 사이 기저 웹", tagEn: "Interdigital Web Base", descKo: "치통, 잇몸 염증 완화, 구강 혈류 개선", descEn: "Dental comfort, gum soothing, oral circulation" },
    { id: "top_jaw", ko: "턱관절 / 악관절", en: "Jaw & TMJ", x: 46, y: 17, icon: "🗣️", tagKo: "발가락 기저 중족골두", tagEn: "Metatarsal Heads", descKo: "턱관절 긴장 완화, 저작근 피로 해소", descEn: "TMJ tension release, masticatory ease" },
    { id: "top_tonsils", ko: "편도선 / 성대", en: "Tonsils & Vocal Cords", x: 54, y: 19, icon: "🗣️", tagKo: "엄지발가락 등 기저부", tagEn: "Base of Dorsal Big Toe", descKo: "목 통증, 인후염 완화, 음성 피로 회복", descEn: "Sore throat ease, vocal strain relief, pharynx care" },
    { id: "top_neck", ko: "목 / 뇌간", en: "Neck & Brainstem", x: 56, y: 23, icon: "🧣", tagKo: "엄지발등 뿌리 관절", tagEn: "Metatarsophalangeal Joint", descKo: "거북목, 목덜미 뻐근함, 경추 신경 이완", descEn: "Stiff neck relief, cervical disc comfort, spinal freedom" },
    { id: "top_labyrinth", ko: "내이 / 평형 전정기관", en: "Inner Ear & Balance", x: 24, y: 21, icon: "🌀", tagKo: "4·5지 발등 기저 사이", tagEn: "Between 4th & 5th Toe Roots", descKo: "어지럼증 완화, 멀미 예방, 평형감각 조절", descEn: "Vertigo easing, motion sickness prevention, equilibrium" },
    { id: "top_shoulder_tops", ko: "어깨 상부선", en: "Tops of Shoulders", x: 38, y: 25, icon: "🦾", tagKo: "발등 상부 가로 능선", tagEn: "Upper Dorsal Knuckle Band", descKo: "승모근 뭉침, 어깨 상부 무거움 해소", descEn: "Upper trapezius stiffness, shoulder lightness" },
    { id: "top_shoulder", ko: "어깨 관절", en: "Shoulder Joint", x: 22, y: 28, icon: "🦾", tagKo: "발등 외측 상단", tagEn: "Lateral Upper Midfoot", descKo: "어깨 결림, 견관절 가동성 개선, 팔 저림 해소", descEn: "Shoulder stiffness release, joint range, arm ease" },
    { id: "top_thymus", ko: "흉선 / 상흉부", en: "Thymus Gland", x: 52, y: 28, icon: "🛡️", tagKo: "발등 상부 중앙", tagEn: "Upper Dorsum Center", descKo: "면역력 강화, 흉곽 개방, 호흡 순환 촉진", descEn: "Immune activation, upper chest freedom, breathing ease" },
    { id: "top_lungs", ko: "폐 / 기관지", en: "Lungs", x: 42, y: 32, icon: "🫁", tagKo: "발등 중앙부", tagEn: "Mid-Dorsal Metatarsals", descKo: "호흡 깊이 확장, 기침 및 흉부 긴장 완화", descEn: "Respiratory expansion, cough ease, thoracic ease" },
    { id: "top_breast", ko: "유방 반사구", en: "Breast Area", x: 34, y: 34, icon: "🫁", tagKo: "발등 외측 중족골 부위", tagEn: "Lateral Dorsal Metatarsals", descKo: "유방 조직 순환, 가슴 답답함 및 림프 순환", descEn: "Breast tissue circulation, lymphatic drainage" },
    { id: "top_chest", ko: "가슴 / 흉곽", en: "Chest & Thorax", x: 50, y: 35, icon: "🫁", tagKo: "발등 정중앙 패드", tagEn: "Center Dorsal Pad", descKo: "가슴 답답함, 호흡근 개방, 흉곽 이완", descEn: "Chest opening, thoracic muscle relaxation" },
    { id: "top_upper_back", ko: "등 상부 / 상배부", en: "Upper Back", x: 58, y: 36, icon: "🦾", tagKo: "발등 내측 중앙", tagEn: "Medial Dorsal Pad", descKo: "등 통증 완화, 견갑골 내측 긴장 이완", descEn: "Upper back pain relief, rhomboid comfort" },
    { id: "top_diaphragm", ko: "횡격막선", en: "Diaphragm Line", x: 44, y: 41, icon: "🌬️", tagKo: "발등 중앙 가로띠", tagEn: "Transverse Dorsal Line", descKo: "호흡근 이완, 소화기 압박 해소, 흉복부 소통", descEn: "Diaphragmatic release, visceral decompression" },
    { id: "top_arm", ko: "팔 및 팔꿈치", en: "Arm & Elbow", x: 18, y: 42, icon: "💪", tagKo: "발등 외측 모서리", tagEn: "Lateral Edge Midfoot", descKo: "테니스 엘보, 팔 근육 피로, 전완 순환", descEn: "Elbow strain relief, forearm circulation" },
    { id: "top_spine", ko: "척추 등쪽선", en: "Spine / Dorsal Column", x: 62, y: 46, icon: "🦴", tagKo: "발등 내측 뼈 능선", tagEn: "Medial Bony Ridge", descKo: "등 통증, 흉추 기립근 긴장 해소, 자세 개선", descEn: "Thoracic spine ease, erector muscle comfort" },
    { id: "top_ribs", ko: "늑골 / 늑간신경", en: "Ribs & Intercostals", x: 36, y: 48, icon: "🩻", tagKo: "발등 뼈 사이 공간", tagEn: "Intermetatarsal Grooves", descKo: "갈비뼈 통증, 늑간신경통, 옆구리 결림 완화", descEn: "Ribcage comfort, intercostal neuralgia ease" },
    { id: "top_waistline", ko: "허리선", en: "Waistline", x: 50, y: 52, icon: "〰️", tagKo: "발등 중간 가로선", tagEn: "Midfoot Waist Band", descKo: "복부 순환, 요추 경계 긴장 이완", descEn: "Abdominal flow, lumbar boundary comfort" },
    { id: "top_knee", ko: "무릎 관절 / 다리", en: "Knee Joint & Leg", x: 20, y: 56, icon: "🦵", tagKo: "발등 외측 쐐기골 부근", tagEn: "Lateral Cuneiform Area", descKo: "무릎 관절염 통증 완화, 다리 붓기 및 피로 해소", descEn: "Knee arthritis relief, leg swelling and fatigue easing" },
    { id: "top_hip", ko: "고관절", en: "Hip Joint", x: 24, y: 66, icon: "⚡", tagKo: "발목 외측 앞 공간", tagEn: "Anterior Lateral Ankle", descKo: "고관절 통증, 보행 시 골반 뻐근함 해소", descEn: "Hip joint freedom, pelvic mobility, walking comfort" },
    { id: "top_bladder", ko: "방광 반사구", en: "Bladder", x: 58, y: 64, icon: "🫧", tagKo: "발목 내측 앞쪽", tagEn: "Anterior Medial Lower Ankle", descKo: "배뇨 원활, 방광 긴장 완화, 비뇨기 순환", descEn: "Smooth urination, urinary flow support" },
    { id: "top_lower_back", ko: "하배부 / 허리", en: "Lower Back", x: 48, y: 68, icon: "🦴", tagKo: "발목 앞 중앙 주름 부근", tagEn: "Mid Ankle Crease", descKo: "요통 완화, 허리 신경 긴장 완화", descEn: "Lower back ease, lumbar tension release" },
    { id: "top_lymph", ko: "상부 림프계", en: "Upper Lymph Glands", x: 40, y: 74, icon: "💧", tagKo: "발목 앞쪽 주름선", tagEn: "Anterior Ankle Crease", descKo: "전신 림프 부종 완화, 하지 순환, 면역 순환", descEn: "Lymphatic drainage, lower limb de-puffing, immunity" },
    { id: "top_groin", ko: "서혜부 / 나팔관 / 수정관", en: "Groin & Fallopian / Vas", x: 54, y: 78, icon: "🌱", tagKo: "발목 내측 앞 오목부", tagEn: "Anterior Medial Ankle", descKo: "서혜부 림프 순환, 생식선 활력, 골반혈류 개선", descEn: "Groin lymph flow, reproductive vitality, pelvic flow" },
    { id: "top_uterus", ko: "자궁 / 전립선", en: "Uterus / Prostate", x: 64, y: 84, icon: "🌿", tagKo: "복사뼈 안쪽 하부", tagEn: "Inferior to Medial Malleolus", descKo: "생리통, 전립선 비대, 비뇨생식기 조화", descEn: "Menstrual comfort, prostate support, genitourinary harmony" },
    { id: "top_ovary", ko: "난소 / 고환", en: "Ovary / Testicle", x: 22, y: 84, icon: "✨", tagKo: "복사뼈 바깥쪽 하부", tagEn: "Inferior to Lateral Malleolus", descKo: "호르몬 밸런스, 갱년기 증상 완화, 생식선 보호", descEn: "Hormonal balance, climacteric comfort, gonadal vitality" }
  ],
  palm: [
    { id: "palm_head", ko: "머리 / 뇌", en: "Head / Brain", x: 80, y: 38, icon: "🧠", tagKo: "엄지손가락 끝 지문부", tagEn: "Thumb Pad Center", descKo: "집중력 향상, 두통 완화, 안면 혈류 촉진", descEn: "Focus enhancement, headache relief, cranial circulation" },
    { id: "palm_sinuses_2", ko: "부비동 (검지)", en: "Sinus (Index)", x: 58, y: 12, icon: "👃", tagKo: "검지 손가락 끝", tagEn: "Index Fingertip", descKo: "비염, 전두동 압력 완화 및 상부 호흡기 청결", descEn: "Sinus pressure ease, upper airway clarity" },
    { id: "palm_sinuses_3", ko: "부비동 (중지)", en: "Sinus (Middle)", x: 46, y: 10, icon: "👃", tagKo: "중지 손가락 끝", tagEn: "Middle Fingertip", descKo: "두통 완화, 코막힘 해소 및 안면 순환", descEn: "Headache relief, nasal clearance, facial ease" },
    { id: "palm_sinuses_4", ko: "부비동 (약지)", en: "Sinus (Ring)", x: 32, y: 12, icon: "👃", tagKo: "약지 손가락 끝", tagEn: "Ring Fingertip", descKo: "부비동염 완화, 눈-코 주변 압력 완화", descEn: "Sinusitis relief, orbital-nasal ease" },
    { id: "palm_sinuses_5", ko: "부비동 (소지)", en: "Sinus (Little)", x: 18, y: 22, icon: "👃", tagKo: "새끼 손가락 끝", tagEn: "Little Fingertip", descKo: "측두 긴장 완화 및 호흡 순환", descEn: "Temporal ease and respiratory clearing" },
    { id: "palm_pituitary", ko: "뇌하수체", en: "Pituitary Gland", x: 80, y: 43, icon: "⚡", tagKo: "엄지손가락 지문 중앙", tagEn: "Thumb Print Center", descKo: "호르몬 분비 및 내분비계 총괄 조율", descEn: "Master endocrine balance and hormone regulation" },
    { id: "palm_neck", ko: "목 / 경추", en: "Neck / Cervical", x: 72, y: 48, icon: "🧣", tagKo: "엄지손가락 기저 관절", tagEn: "Thumb Web Base", descKo: "목 결림, 편도선, 인후통 완화", descEn: "Stiff neck ease, throat soothe, cervical relief" },
    { id: "palm_eye", ko: "눈 (시신경)", en: "Eye", x: 52, y: 28, icon: "👁️", tagKo: "검지·중지 뿌리", tagEn: "Base of Index & Middle", descKo: "모니터 시각 피로, 눈 건조증 해소", descEn: "Digital eye strain relief, optic vitality" },
    { id: "palm_ear", ko: "귀 (청신경)", en: "Ear", x: 25, y: 30, icon: "👂", tagKo: "약지·새끼손가락 뿌리", tagEn: "Base of Ring & Little", descKo: "청각 피로, 이명 완화, 귀 순환 개선", descEn: "Ear comfort, auditory relief, circulation" },
    { id: "palm_inner_ear", ko: "내이 / 평형감각", en: "Inner Ear", x: 16, y: 36, icon: "🌀", tagKo: "새끼손가락 외측 기저부", tagEn: "Lateral Little Finger Base", descKo: "어지럼증 완화, 평형감각 개선, 멀미 예방", descEn: "Vertigo easing, balance regulation, motion comfort" },
    { id: "palm_shoulder_tops", ko: "어깨 상부선", en: "Tops of Shoulders", x: 42, y: 30, icon: "🦾", tagKo: "손가락 기저 가로 능선", tagEn: "Knuckle Crease Band", descKo: "어깨 뭉침, 상체 피로, 목-어깨 연결부 이완", descEn: "Shoulder tightness release, upper body fatigue ease" },
    { id: "palm_lungs", ko: "폐 / 기관지", en: "Lungs & Bronchials", x: 46, y: 36, icon: "🫁", tagKo: "손바닥 상부 융기부", tagEn: "Upper Palm Ball", descKo: "호흡 깊이 확장, 가슴 통증 및 기침 완화", descEn: "Respiratory depth, bronchial clearing, chest ease" },
    { id: "palm_chest", ko: "가슴 / 흉곽", en: "Chest & Thorax", x: 38, y: 38, icon: "🫁", tagKo: "손바닥 상부 중앙", tagEn: "Upper Mid-Palm", descKo: "가슴 답답함 해소, 흉부 혈류 개선", descEn: "Chest opening, thoracic flow optimization" },
    { id: "palm_upper_back", ko: "등 상부 / 상배부", en: "Upper Back", x: 60, y: 42, icon: "🦾", tagKo: "손바닥 상부 내측", tagEn: "Upper Medial Palm", descKo: "등 결림 해소, 견갑골 내측 긴장 완화", descEn: "Upper back stiffness release, postural comfort" },
    { id: "palm_heart", ko: "심장", en: "Heart", x: 24, y: 44, icon: "❤️", tagKo: "소지구 상단 (좌손)", tagEn: "Hypothenar Upper (Left)", descKo: "심혈관 순환 촉진, 가슴 안정, 부정맥 완화", descEn: "Cardiovascular flow, heart ease, circulation" },
    { id: "palm_thyroid", ko: "갑상선 / 부갑상선", en: "Thyroid & Parathyroid", x: 66, y: 52, icon: "🦋", tagKo: "엄지구 안쪽 뿌리", tagEn: "Thenar Eminence Base", descKo: "체온 및 대사 조절, 만성 피로 회복", descEn: "Metabolism balance, fatigue reduction" },
    { id: "palm_thymus", ko: "흉선", en: "Thymus Gland", x: 48, y: 42, icon: "🛡️", tagKo: "손바닥 상부 중앙점", tagEn: "Upper Palm Center", descKo: "면역력 증진, 림프 활성화, 흉부 보호", descEn: "Immune optimization, lymphatic protection" },
    { id: "palm_solar", ko: "태양신경총", en: "Solar Plexus", x: 44, y: 48, icon: "☀️", tagKo: "손바닥 정중앙 오목한 곳", tagEn: "Center Palm Hollow", descKo: "스트레스 해소, 긴장 완화, 호흡 안정", descEn: "Instant calm, stress relief, diaphragm opening" },
    { id: "palm_diaphragm", ko: "횡격막선", en: "Diaphragm Line", x: 36, y: 50, icon: "🌬️", tagKo: "손바닥 중간 가로선", tagEn: "Mid-Palm Transverse", descKo: "호흡근 이완, 소화기 압박 해소", descEn: "Diaphragm ease, breathing depth" },
    { id: "palm_shoulder", ko: "어깨 관절", en: "Shoulder", x: 16, y: 48, icon: "🦾", tagKo: "소지구 외측 상단", tagEn: "Lateral Hypothenar Upper", descKo: "어깨 관절통, 팔 가동성 개선", descEn: "Shoulder joint mobility, scapular ease" },
    { id: "palm_arm", ko: "팔 및 팔꿈치", en: "Arm & Elbow", x: 14, y: 56, icon: "💪", tagKo: "손바닥 외측 모서리", tagEn: "Lateral Outer Palm", descKo: "팔꿈치 긴장 완화, 전완 순환", descEn: "Elbow ease, forearm circulation" },
    { id: "palm_liver", ko: "간", en: "Liver", x: 24, y: 54, icon: "🌿", tagKo: "소지구 상단 (우손)", tagEn: "Right Hypothenar Upper", descKo: "간 해독 촉진, 피로 회복, 혈액 정화", descEn: "Liver detox, vital recovery, blood purifying" },
    { id: "palm_gallbladder", ko: "담낭", en: "Gallbladder", x: 22, y: 59, icon: "🫒", tagKo: "간 반사구 아래 (우손)", tagEn: "Right Sub-Liver", descKo: "담즙 배출 유도, 소화 원활", descEn: "Bile drainage, digestive ease" },
    { id: "palm_stomach", ko: "위장", en: "Stomach", x: 56, y: 58, icon: "🥣", tagKo: "엄지구 내측 경계", tagEn: "Medial Mid-Palm Border", descKo: "소화 기능 촉진, 복부 팽만 및 속쓰림 완화", descEn: "Digestion aid, indigestion relief" },
    { id: "palm_duodenum", ko: "십이지장", en: "Duodenum", x: 52, y: 62, icon: "🌀", tagKo: "위장 바로 아래", tagEn: "Below Stomach Area", descKo: "십이지장 소화 촉진, 소화 효소 분비 원활", descEn: "Duodenal comfort, digestive enzyme delivery" },
    { id: "palm_pancreas", ko: "췌장", en: "Pancreas", x: 46, y: 64, icon: "🧪", tagKo: "손바닥 중앙 안쪽", tagEn: "Center Mid-Palm", descKo: "혈당 조절, 효소 분비 및 췌장 기능 강화", descEn: "Blood sugar balance, enzymatic digestion" },
    { id: "palm_spleen", ko: "비장", en: "Spleen", x: 24, y: 64, icon: "🩸", tagKo: "소지구 중간부 (좌손)", tagEn: "Mid-Hypothenar (Left)", descKo: "면역 세포 조절, 혈액 정화, 림프 활력", descEn: "Immune defense, blood filter, cellular energy" },
    { id: "palm_adrenal", ko: "부신", en: "Adrenal Gland", x: 44, y: 68, icon: "⚡", tagKo: "신장 위 포인트", tagEn: "Above Kidney Core", descKo: "항염 작용, 스트레스 극복, 활력 증진", descEn: "Cortisol balance, anti-inflammation" },
    { id: "palm_kidney", ko: "신장 (콩팥)", en: "Kidney", x: 42, y: 72, icon: "💧", tagKo: "손바닥 중심부 하단", tagEn: "Lower Mid-Palm", descKo: "노폐물 배출, 수분 대사 및 에너지 활성화", descEn: "Filtration, adrenal boost, fluid regulation" },
    { id: "palm_ureter", ko: "수뇨관", en: "Ureter", x: 48, y: 76, icon: "〰️", tagKo: "신장에서 방광으로의 경로", tagEn: "Kidney to Bladder Tract", descKo: "수분 배출 유도, 요로 순환 개선", descEn: "Urinary fluid passage, toxin clearance" },
    { id: "palm_bladder", ko: "방광", en: "Bladder", x: 56, y: 82, icon: "🫧", tagKo: "손목 직전 엄지구 하단", tagEn: "Lower Medial Wrist Border", descKo: "배뇨 원활, 방광 긴장 완화", descEn: "Smooth urination, bladder comfort" },
    { id: "palm_transverse_colon", ko: "횡행결장", en: "Transverse Colon", x: 34, y: 68, icon: "🔄", tagKo: "손바닥 하부 가로선", tagEn: "Lower Palm Transverse", descKo: "장 내용물 이송 촉진, 복부 팽만 완화", descEn: "Colonic transit, bloating relief" },
    { id: "palm_ascending_colon", ko: "상행결장", en: "Ascending Colon", x: 20, y: 70, icon: "🔼", tagKo: "손바닥 외측 하단 (우손)", tagEn: "Right Hand Lateral Lower", descKo: "우측 대장 연동 운동, 변비 완화", descEn: "Ascending motility, constipation relief" },
    { id: "palm_descending_colon", ko: "하행결장", en: "Descending Colon", x: 20, y: 72, icon: "🔽", tagKo: "손바닥 외측 하단 (좌손)", tagEn: "Left Hand Lateral Lower", descKo: "좌측 대장 배변 유도, 가스 배출", descEn: "Descending evacuation, gas relief" },
    { id: "palm_ileocecal", ko: "회맹판", en: "Ileocecal Valve", x: 22, y: 76, icon: "🔒", tagKo: "손바닥 외측 최하부 (우손)", tagEn: "Right Hand Lower Lateral", descKo: "장내 독소 역류 방지, 장 점막 보호", descEn: "Prevents toxic reflux, gut barrier support" },
    { id: "palm_small_intestine", ko: "소장", en: "Small Intestine", x: 36, y: 76, icon: "🌾", tagKo: "손바닥 하부 중앙", tagEn: "Lower Palm Center", descKo: "장 건강, 영양소 흡수 촉진, 복부 온기", descEn: "Intestinal comfort, digestive warmth" },
    { id: "palm_spine", ko: "척추 영역", en: "Spinal Area / Spine", x: 74, y: 62, icon: "🦴", tagKo: "엄지구 외측 테두리선", tagEn: "Outer Thenar Border", descKo: "경추·흉추·요추 통증 완화, 기립근 이완", descEn: "Spinal alignment, back tension relief" },
    { id: "palm_lower_back", ko: "하배부 / 허리", en: "Lower Back", x: 68, y: 78, icon: "🦴", tagKo: "엄지구 기저 손목 모서리", tagEn: "Medial Pre-Wrist Corner", descKo: "요통 완화, 골반-허리 연결부 이완", descEn: "Lower back ease, lumbar comfort" },
    { id: "palm_sciatic", ko: "좌골신경", en: "Sciatic Nerve", x: 42, y: 84, icon: "⚡", tagKo: "손목 주름 바로 위 가로띠", tagEn: "Pre-Wrist Transverse Band", descKo: "좌골신경통, 골반 저림, 하체 피로 완화", descEn: "Sciatica alleviation, lower body relief" },
    { id: "palm_pelvis", ko: "생식선 / 골반", en: "Pelvis & Reproductive", x: 44, y: 90, icon: "🌱", tagKo: "손목 주름 중앙선", tagEn: "Wrist Crease Center", descKo: "생식기능 활성화, 골반 순환 및 비뇨기 지원", descEn: "Pelvic vitality, urinary and reproductive support" }
  ],
  back: [
    { id: "back_head", ko: "머리 / 뇌 / 부비동", en: "Head & Sinuses", x: 46, y: 10, icon: "🧠", tagKo: "손등 손가락 끝", tagEn: "Dorsal Fingertips", descKo: "뇌 신경 자극, 맑은 정신, 두통 완화", descEn: "Mental clarity, sinus opening, headache easing" },
    { id: "back_jaw", ko: "치아 · 턱 · 잇몸", en: "Teeth, Jaw & Gums", x: 44, y: 20, icon: "🦷", tagKo: "손가락 사이 웹 공간", tagEn: "Web Spaces", descKo: "목 통증, 치아 긴장, 턱관절 긴장 완화", descEn: "Throat ease, jaw relaxation, dental support" },
    { id: "back_tonsils", ko: "편도선", en: "Tonsils", x: 68, y: 38, icon: "🗣️", tagKo: "엄지 손등 기저 관절", tagEn: "Dorsal Thumb Base", descKo: "인후통 완화, 편도염 예방, 목 청결", descEn: "Tonsil soothing, sore throat ease" },
    { id: "back_throat", ko: "인두 / 후두", en: "Throat & Larynx", x: 66, y: 44, icon: "🗣️", tagKo: "엄지 손등 기저부", tagEn: "Thumb Dorsal Root", descKo: "목소리 피로 회복, 인후통, 가래 완화", descEn: "Vocal relief, throat comfort, clearing" },
    { id: "back_neck", ko: "목 · 경추", en: "Neck & Cervical Spine", x: 62, y: 48, icon: "🧣", tagKo: "엄지-검지 사이 손등", tagEn: "Dorsal Thumb-Index", descKo: "목 결림 해소, 경추 안정, 견갑골 이완", descEn: "Cervical spine ease, neck muscle comfort" },
    { id: "back_eyes_ears", ko: "눈 · 귀 손등 반사구", en: "Eyes & Ears Dorsal", x: 38, y: 26, icon: "👁️", tagKo: "중지-약지 손등 관절", tagEn: "Between Middle & Ring Dorsum", descKo: "시각·청각 신경 피로 회복", descEn: "Visual and auditory nerve easing" },
    { id: "back_shoulder_tops", ko: "어깨 상부선", en: "Tops of Shoulders", x: 36, y: 32, icon: "🦾", tagKo: "손등 상부 너클 띠", tagEn: "Dorsal Knuckle Band", descKo: "어깨 결림, 승모근 긴장 완화", descEn: "Shoulder tightness release, trapezius ease" },
    { id: "back_shoulder", ko: "어깨 / 견갑골", en: "Shoulder & Scapula", x: 20, y: 38, icon: "🦾", tagKo: "손등 바깥쪽 관절", tagEn: "Lateral Knuckles", descKo: "어깨 결림, 팔 저림, 견관절 통증 완화", descEn: "Shoulder stiffness release, arm circulation" },
    { id: "back_arm", ko: "팔 및 팔꿈치", en: "Arm & Elbow", x: 16, y: 48, icon: "💪", tagKo: "손등 외측 모서리", tagEn: "Lateral Hand Edge", descKo: "팔꿈치 관절통, 테니스 엘보 완화", descEn: "Elbow strain relief, upper limb flow" },
    { id: "back_thyroid", ko: "갑상선 / 부갑상선", en: "Thyroid & Parathyroid", x: 60, y: 54, icon: "🦋", tagKo: "엄지-검지 손등 내측", tagEn: "Medial Thumb-Index Dorsum", descKo: "신진대사 조절, 만성 피로 회복", descEn: "Metabolic regulation, vitality boost" },
    { id: "back_thymus", ko: "흉선", en: "Thymus Gland", x: 44, y: 42, icon: "🛡️", tagKo: "손등 상부 중앙", tagEn: "Upper Mid-Dorsum", descKo: "면역력 증강, 림프 방어력 향상", descEn: "Immunity support, upper chest protection" },
    { id: "back_lungs", ko: "폐 / 기관지", en: "Lungs", x: 38, y: 44, icon: "🫁", tagKo: "손등 중앙 상부", tagEn: "Upper Dorsum Center", descKo: "상체 혈액 순환, 흉통 및 기침 완화", descEn: "Upper back ease, thoracic flow, lung clearing" },
    { id: "back_chest", ko: "가슴 / 유방", en: "Chest & Breast Area", x: 32, y: 46, icon: "🫁", tagKo: "손등 외측 중앙부", tagEn: "Lateral Mid-Dorsum", descKo: "가슴 답답함 완화, 유방 림프 배농", descEn: "Chest opening, breast lymphatic drainage" },
    { id: "back_upper_back", ko: "등 상부 / 상배부", en: "Upper Back", x: 46, y: 48, icon: "🦾", tagKo: "손등 중앙점", tagEn: "Center Dorsum", descKo: "등 결림 해소, 흉추 기립근 이완", descEn: "Thoracic comfort, erector spinae release" },
    { id: "back_diaphragm", ko: "횡격막 / 태양신경총", en: "Diaphragm & Solar Plexus", x: 42, y: 54, icon: "🌬️", tagKo: "손등 가로 연결선", tagEn: "Mid-Dorsal Transverse", descKo: "호흡 안정, 가슴 답답함 해소, 스트레스 완화", descEn: "Respiratory calm, visceral relief, stress ease" },
    { id: "back_spine", ko: "척추선 / 척주", en: "Spine & Spinal Column", x: 50, y: 60, icon: "🦴", tagKo: "손등 정중선", tagEn: "Mid Dorsal Line", descKo: "요통 완화, 척추 정렬 및 신경 흐름", descEn: "Spinal alignment, back tension relief" },
    { id: "back_waistline", ko: "허리선", en: "Waistline", x: 40, y: 64, icon: "〰️", tagKo: "손등 중간 가로선", tagEn: "Mid-Dorsal Waist Band", descKo: "허리 경계 긴장 이완, 복강 소통", descEn: "Lumbar boundary comfort, abdominal ease" },
    { id: "back_lower_back", ko: "하배부 / 요추", en: "Lower Back / Lumbar", x: 48, y: 70, icon: "🦴", tagKo: "손등 하단 정중선", tagEn: "Lower Dorsum Center", descKo: "만성 허리 통증, 골반 연결부 이완", descEn: "Chronic lumbar relief, pelvic connection" },
    { id: "back_pelvis", ko: "골반 / 엉덩이", en: "Pelvis & Hip", x: 26, y: 68, icon: "⚡", tagKo: "손등 외측 하단부", tagEn: "Lower Lateral Dorsum", descKo: "골반 불균형 완화, 엉덩이 신경 압박 해소", descEn: "Pelvic balance, hip nerve ease" },
    { id: "back_knee", ko: "무릎 / 다리", en: "Knee & Leg", x: 22, y: 76, icon: "🦵", tagKo: "손목 외측 직전", tagEn: "Pre-Wrist Lateral Edge", descKo: "무릎 관절통 완화, 하지 순환", descEn: "Knee joint relief, leg circulation" },
    { id: "back_lymph", ko: "림프관 / 사타구니", en: "Lymphatics & Groin", x: 40, y: 78, icon: "💧", tagKo: "손목 뒤쪽 주름", tagEn: "Posterior Wrist Crease", descKo: "상체 림프 순환, 부종 예방, 면역력 증진", descEn: "Lymphatic flow, detox, immune activation" },
    { id: "back_fallopian", ko: "나팔관 / 서혜부", en: "Fallopian Tube / Groin", x: 48, y: 80, icon: "🌱", tagKo: "손목 뒤 중앙부", tagEn: "Posterior Mid-Wrist", descKo: "골반강 순환, 생식기능 조화", descEn: "Pelvic flow, reproductive harmony" },
    { id: "back_uterus", ko: "자궁 / 전립선", en: "Uterus & Prostate", x: 62, y: 84, icon: "🌿", tagKo: "손목 뒤 안쪽", tagEn: "Posterior Medial Wrist", descKo: "비뇨생식기 조화, 생리통 및 전립선 보호", descEn: "Genitourinary support, menstrual comfort" },
    { id: "back_ovary", ko: "난소 / 고환", en: "Ovary & Testicle", x: 24, y: 84, icon: "✨", tagKo: "손목 뒤 바깥쪽", tagEn: "Posterior Lateral Wrist", descKo: "호르몬 밸런스, 생식선 순환", descEn: "Hormone balance, reproductive circulation" },
    { id: "back_sciatic", ko: "좌골신경 기저", en: "Sciatic Nerve Base", x: 38, y: 88, icon: "⚡", tagKo: "손목 뒤 기저선", tagEn: "Posterior Wrist Base", descKo: "좌골신경통, 둔부-대퇴 신경 긴장 완화", descEn: "Sciatica nerve base, femoral tension relief" }
  ]
};

const key = "novacell_reflex_therapy_v1";

const state = {
  mode: "self",
  lang: "ko",
  mapLang: "auto",
  showSmartLabels: true,
  fsZoom: 1,
  fsPanX: 0,
  fsPanY: 0,
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

  // Map workspace labels & fullscreen buttons
  const smartLabelText = $("#smartLabelToggleText");
  if (smartLabelText) {
    smartLabelText.textContent = state.showSmartLabels
      ? (isEn ? "Guide Rings ON" : "가이드 링 ON")
      : (isEn ? "Guide Rings OFF" : "가이드 링 OFF");
  }
  const openFsBtn = $("#openFullscreenMapBtn");
  if (openFsBtn) {
    openFsBtn.textContent = isEn ? "⛶ Fullscreen HD" : "⛶ 크게보기";
  }

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
    ? (isEn ? `Reference: Complete reflexology for life (p.${m.page})` : `참고자료: Complete reflexology for life (${m.page}쪽)`)
    : (isEn ? `Textbook p.${m.page} · Base map protected` : `교재 ${m.page}쪽 · 기본 지도 보호`);
  const mapImg = $("#mapImage");
  if (mapImg) {
    mapImg.src = `./assets/${activeImage}`;
    mapImg.alt = isMapEn ? `${m.en} English reflexology map` : `${m.title} 교재 반사 지도`;
    if (mapImg.complete && mapImg.naturalWidth) {
      syncCanvasDimensions();
      applyTransform();
    } else {
      mapImg.onload = () => {
        syncCanvasDimensions();
        applyTransform();
      };
    }
  }

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

  // Reset / Update HUD Inspector & Side Inspection Cards default prompt for current map
  const hudIcon = $("#hudPointIcon"); if (hudIcon) hudIcon.textContent = m.icon;
  const hudTitle = $("#hudPointTitle"); if (hudTitle) hudTitle.textContent = isEn ? m.en : m.title;
  const hudLoc = $("#hudPointLoc"); if (hudLoc) hudLoc.textContent = isEn ? "Point Inspector" : "반사구 실시간 안내";
  const hudDesc = $("#hudPointDesc"); if (hudDesc) hudDesc.textContent = isEn
    ? "Hover or touch any point on the map to inspect clinical details"
    : "지도 위의 포인트를 가리키시면 임상 효과와 지압 요령이 안내됩니다";

  // Reset Floating Side Card inside Map Stage
  const sTitle = $("#sideCardTitle"); if (sTitle) sTitle.textContent = isEn ? `${m.en} Reflex Zones` : `${m.title} 반사구`;
  const sEn = $("#sideCardEnTitle"); if (sEn) sEn.textContent = isEn ? m.title : m.en;
  const sLoc = $("#sideCardLoc"); if (sLoc) sLoc.textContent = isEn ? "Hover any area to inspect" : "인체 부위를 가리키면 표시";
  const sDesc = $("#sideCardDesc"); if (sDesc) sDesc.textContent = isEn
    ? "Hover over any anatomical point or text on the map. Details will display here at the side without covering the image."
    : "지도 위의 인체 부위나 텍스트에 커서를 접촉하시면 이미지를 전혀 가리지 않고 이곳에 대형 글씨로 상세 안내가 나타납니다.";

  // Render Interactive Bilingual Anatomical Atlas Glossary & Smart Vector Hotspots
  renderMapGlossary(m.surface);
  renderSmartLabels();

  applyTransform();
  updateZoomPresetsUI();
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
      <div class="glossary-item" data-glossary-ko="${item.ko}" data-glossary-en="${item.en}">
        <span class="glossary-item-primary">${isEn ? item.en : item.ko}</span>
        <span class="glossary-item-secondary">${isEn ? item.ko : item.en}</span>
      </div>
    `).join("");

    grid.querySelectorAll(".glossary-item").forEach(itemEl => {
      itemEl.onclick = () => {
        const ko = itemEl.dataset.glossaryKo;
        const pins = surfacePins[surfaceKey] || [];
        const match = pins.find(p => p.ko.includes(ko) || ko.includes(p.ko));
        if (match) {
          inspectReflexPoint(match.id, surfaceKey, true);
        } else {
          const hudTitle = $("#hudPointTitle");
          const hudDesc = $("#hudPointDesc");
          const hudTag = $("#hudPointTag");
          if (hudTitle) hudTitle.textContent = isEn ? `${itemEl.dataset.glossaryEn} (${ko})` : `${ko} · ${itemEl.dataset.glossaryEn}`;
          if (hudTag) hudTag.textContent = isEn ? "ATLAS REFLEX POINT" : "해부학 표준 반사구";
          if (hudDesc) hudDesc.textContent = isEn ? `Target reflex zone for ${itemEl.dataset.glossaryEn}. Refer to highlighted areas on the map.` : `${ko} 반사구 위치입니다. 지도 내 해당 구역을 확인해 주세요.`;
        }
      };
      itemEl.onmouseenter = () => {
        const ko = itemEl.dataset.glossaryKo;
        const pins = surfacePins[surfaceKey] || [];
        const match = pins.find(p => p.ko.includes(ko) || ko.includes(p.ko));
        if (match) {
          inspectReflexPoint(match.id, surfaceKey, false);
        }
      };
    });
  }
}

function renderSmartLabels() {
  const layer = $("#smartLabelLayer");
  if (!layer) return;
  const m = maps.find(x => x.id === state.mapId);
  if (!m) return;
  const pins = surfacePins[m.surface] || [];
  const isEn = state.lang === "en";

  if (!state.showSmartLabels) {
    layer.classList.add("hidden");
  } else {
    layer.classList.remove("hidden");
  }

  // Render transparent non-obscuring hotspots
  layer.innerHTML = pins.map(p => `
    <div class="smart-hotspot" style="left:${p.x}%;top:${p.y}%" data-pin-id="${p.id}" title="${isEn ? `${p.en} (${p.ko})` : `${p.ko} (${p.en})`}">
      <span class="hotspot-core"></span>
    </div>
  `).join("");

  layer.querySelectorAll(".smart-hotspot").forEach(pinEl => {
    pinEl.onclick = e => {
      e.stopPropagation();
      inspectReflexPoint(pinEl.dataset.pinId, m.surface, true);
    };
    pinEl.onmouseenter = () => {
      inspectReflexPoint(pinEl.dataset.pinId, m.surface, false);
    };
  });

  // Also mirror to Fullscreen layer if present
  const fsLayer = $("#fsSmartLabelLayer");
  if (fsLayer) {
    fsLayer.innerHTML = layer.innerHTML;
    fsLayer.classList.toggle("hidden", !state.showSmartLabels);
    fsLayer.querySelectorAll(".smart-hotspot").forEach(pinEl => {
      pinEl.onclick = e => {
        e.stopPropagation();
        inspectReflexPoint(pinEl.dataset.pinId, m.surface, true);
      };
      pinEl.onmouseenter = () => {
        inspectReflexPoint(pinEl.dataset.pinId, m.surface, false);
      };
    });
  }

  // Canvas hover proximity detector: detects mouse motion near any anatomical point
  const canvas = $("#mapCanvas");
  if (canvas && !canvas._proximityBound) {
    canvas._proximityBound = true;
    let lastProxCheck = 0;
    canvas.addEventListener("pointermove", e => {
      if (state.pendingPoint) return;
      const now = Date.now();
      if (now - lastProxCheck < 45) return;
      lastProxCheck = now;

      const rect = canvas.getBoundingClientRect();
      const normX = ((e.clientX - rect.left) / rect.width) * 100;
      const normY = ((e.clientY - rect.top) / rect.height) * 100;

      const currentMap = maps.find(x => x.id === state.mapId);
      if (!currentMap) return;
      const currentPins = surfacePins[currentMap.surface] || [];

      // Find closest hotspot within 5.5% distance
      let closest = null;
      let minDist = 5.5;
      for (const p of currentPins) {
        const dx = normX - p.x;
        const dy = normY - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < minDist) {
          minDist = dist;
          closest = p;
        }
      }

      if (closest) {
        inspectReflexPoint(closest.id, currentMap.surface, false);
      }
    });
  }
}

function inspectReflexPoint(pinId, surfaceKey, playFeedback = true) {
  const pins = surfacePins[surfaceKey] || [];
  const p = pins.find(x => x.id === pinId);
  if (!p) return;

  const isEn = state.lang === "en";

  // 1. Update Dedicated Top Horizontal HUD Banner (이미지를 전혀 가리지 않는 슬림 가로 바)
  const hud = $("#mapPointHUD");
  const icon = $("#hudPointIcon");
  const title = $("#hudPointTitle");
  const loc = $("#hudPointLoc");
  const desc = $("#hudPointDesc");

  if (icon) icon.textContent = p.icon || "📍";
  if (title) title.textContent = isEn ? p.en : p.ko;
  if (loc) loc.textContent = isEn ? p.tagEn : p.tagKo;
  if (desc) desc.textContent = isEn
    ? `${p.descEn} (Apply 20-30s pressure)`
    : `${p.descKo} · 20~30초간 지그시 압박`;

  if (hud) {
    hud.classList.add("active");
    clearTimeout(hud._timer);
    hud._timer = setTimeout(() => hud.classList.remove("active"), 2500);
  }

  // 2. Update Fullscreen Dedicated Top Horizontal HUD Banner
  const fsHud = $("#fsMapHUD");
  const fsIcon = $("#fsHudIcon");
  const fsTitle = $("#fsHudTitle");
  const fsLoc = $("#fsHudLoc");
  const fsDesc = $("#fsHudDesc");

  if (fsIcon) fsIcon.textContent = p.icon || "📍";
  if (fsTitle) fsTitle.textContent = isEn ? p.en : p.ko;
  if (fsLoc) fsLoc.textContent = isEn ? p.tagEn : p.tagKo;
  if (fsDesc) fsDesc.textContent = isEn
    ? `${p.descEn} (Apply 20-30s pressure)`
    : `${p.descKo} · 20~30초간 지그시 압박`;

  if (fsHud) {
    fsHud.classList.add("active");
    clearTimeout(fsHud._timer);
    fsHud._timer = setTimeout(() => fsHud.classList.remove("active"), 2500);
  }

  // 3. Update Dedicated Right Side Panel Live Card
  const liveCard = $("#sideReflexLiveCard");
  const lIcon = $("#liveCardIcon");
  const lTitle = $("#liveCardTitle");
  const lSub = $("#liveCardSub");
  const lLoc = $("#liveCardLoc");
  const lDesc = $("#liveCardDesc");
  const lActDesc = $("#liveCardActionDesc");

  if (lIcon) lIcon.textContent = p.icon || "📍";
  if (lTitle) lTitle.textContent = isEn ? p.en : p.ko;
  if (lSub) lSub.textContent = isEn ? p.ko : p.en;
  if (lLoc) lLoc.textContent = isEn ? p.tagEn : p.tagKo;
  if (lDesc) lDesc.textContent = isEn ? p.descEn : p.descKo;
  if (lActDesc) lActDesc.textContent = isEn
    ? `Gentle pressure on ${p.en} supports organ harmony and cellular vitality.`
    : `${p.ko} 지압 시 호흡을 편안히 유지하며 천천히 압력을 조절합니다.`;

  if (liveCard) {
    liveCard.classList.add("active");
    clearTimeout(liveCard._timer);
    liveCard._timer = setTimeout(() => liveCard.classList.remove("active"), 1600);
  }

  // 4. Highlight active hotspot ring
  $$(".smart-hotspot").forEach(el => {
    el.classList.toggle("active", el.dataset.pinId === pinId);
  });

  if (playFeedback && state.sound && typeof playSessionTone === "function") {
    playSessionTone("step");
  }
}

function syncCanvasDimensions() {
  const stage = $("#mapStage");
  const img = $("#mapImage");
  const canvas = $("#mapCanvas");
  if (stage && img && canvas && stage.clientWidth && stage.clientHeight) {
    const stageW = stage.clientWidth;
    const stageH = stage.clientHeight;
    const natW = img.naturalWidth || 1350;
    const natH = img.naturalHeight || 2420;
    const aspect = natW / natH;

    const maxW = Math.max(100, stageW - 24);
    const maxH = Math.max(100, stageH - 24);
    let renderW, renderH;
    if (maxW / maxH < aspect) {
      renderW = maxW;
      renderH = maxW / aspect;
    } else {
      renderH = maxH;
      renderW = maxH * aspect;
    }
    canvas.style.width = `${Math.round(renderW)}px`;
    canvas.style.height = `${Math.round(renderH)}px`;
  }

  const fsStage = $("#fsMapStage");
  const fsImg = $("#fsMapImage");
  const fsCanvas = $("#fsMapCanvas");
  if (fsStage && fsImg && fsCanvas && fsStage.clientWidth && fsStage.clientHeight) {
    const fsStageW = fsStage.clientWidth;
    const fsStageH = fsStage.clientHeight;
    const fsNatW = fsImg.naturalWidth || 1350;
    const fsNatH = fsImg.naturalHeight || 2420;
    const fsAspect = fsNatW / fsNatH;

    const fsMaxW = Math.max(100, fsStageW - 24);
    const fsMaxH = Math.max(100, fsStageH - 24);
    let fsRenderW, fsRenderH;
    if (fsMaxW / fsMaxH < fsAspect) {
      fsRenderW = fsMaxW;
      fsRenderH = fsMaxW / fsAspect;
    } else {
      fsRenderH = fsMaxH;
      fsRenderW = fsMaxH * fsAspect;
    }
    fsCanvas.style.width = `${Math.round(fsRenderW)}px`;
    fsCanvas.style.height = `${Math.round(fsRenderH)}px`;
  }
}

function applyTransform() {
  syncCanvasDimensions();
  const canvas = $("#mapCanvas");
  if (canvas) {
    canvas.style.transform = `translate(${state.panX}px,${state.panY}px) scale(${state.zoom})`;
  }
  const val = $("#zoomValue");
  if (val) val.textContent = `${Math.round(state.zoom * 100)}%`;
}

function updateZoomPresetsUI() {
  const z = state.zoom;
  const p100 = $("#zoomPreset100");
  const p150 = $("#zoomPreset150");
  const p200 = $("#zoomPreset200");
  const p300 = $("#zoomPreset300");
  if (p100) p100.classList.toggle("active", Math.abs(z - 1.0) < 0.05);
  if (p150) p150.classList.toggle("active", Math.abs(z - 1.5) < 0.05);
  if (p200) p200.classList.toggle("active", Math.abs(z - 2.0) < 0.05);
  if (p300) p300.classList.toggle("active", Math.abs(z - 3.0) < 0.05);

  const fz = state.fsZoom;
  const fs100 = $("#fsZoom100");
  const fs150 = $("#fsZoom150");
  const fs200 = $("#fsZoom200");
  const fs300 = $("#fsZoom300");
  if (fs100) fs100.classList.toggle("active", Math.abs(fz - 1.0) < 0.05);
  if (fs150) fs150.classList.toggle("active", Math.abs(fz - 1.5) < 0.05);
  if (fs200) fs200.classList.toggle("active", Math.abs(fz - 2.0) < 0.05);
  if (fs300) fs300.classList.toggle("active", Math.abs(fz - 3.0) < 0.05);
}

function openFullscreenMap() {
  const m = maps.find(x => x.id === state.mapId);
  if (!m) return;
  const isEn = state.lang === "en";
  const isMapEn = state.mapLang === "en" || (state.mapLang !== "ko" && isEn);
  const activeImage = (isMapEn && m.imageEn) ? m.imageEn : m.image;

  const dlg = $("#fullscreenMapDialog");
  if (!dlg) return;

  $("#fsMapSide").textContent = m.side;
  $("#fsMapTitle").textContent = isEn ? `${m.en} (Ultra HD 300 DPI)` : `${m.title} · ${m.en} (초고해상도)`;
  const fsImg = $("#fsMapImage");
  if (fsImg) {
    fsImg.src = `./assets/${activeImage}`;
    if (fsImg.complete && fsImg.naturalWidth) {
      syncCanvasDimensions();
    } else {
      fsImg.onload = () => {
        syncCanvasDimensions();
        applyFsTransform();
      };
    }
  }

  state.fsZoom = 1;
  state.fsPanX = 0;
  state.fsPanY = 0;

  dlg.showModal();
  syncCanvasDimensions();
  applyFsTransform();
  renderSmartLabels();
}

function closeFullscreenMap() {
  const dlg = $("#fullscreenMapDialog");
  if (dlg && dlg.open) dlg.close();
}

function setFsZoom(next) {
  state.fsZoom = Math.max(1, Math.min(4.5, Number(next.toFixed(2))));
  applyFsTransform();
  updateZoomPresetsUI();
}

function applyFsTransform() {
  syncCanvasDimensions();
  const canvas = $("#fsMapCanvas");
  if (canvas) {
    canvas.style.transform = `translate(${state.fsPanX}px,${state.fsPanY}px) scale(${state.fsZoom})`;
  }
  const val = $("#fsZoomValue");
  if (val) val.textContent = `${Math.round(state.fsZoom * 100)}%`;
}

function setupFsPan() {
  const stage = $("#fsMapStage");
  if (!stage) return;

  let pointers = new Map();
  let startX = 0, startY = 0;
  let initPanX = 0, initPanY = 0;
  let pinchStartDist = 0;
  let pinchStartZoom = 1;

  stage.onpointerdown = e => {
    if (e.target.closest(".smart-hotspot")) return;
    pointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
    stage.setPointerCapture?.(e.pointerId);

    if (pointers.size === 1) {
      startX = e.clientX;
      startY = e.clientY;
      initPanX = state.fsPanX;
      initPanY = state.fsPanY;
      stage.classList.add("dragging");
    } else if (pointers.size === 2) {
      const pts = Array.from(pointers.values());
      pinchStartDist = Math.hypot(pts[0].x - pts[1].x, pts[0].y - pts[1].y) || 1;
      pinchStartZoom = state.fsZoom;
      stage.classList.remove("dragging");
    }
  };

  stage.onpointermove = e => {
    if (!pointers.has(e.pointerId)) return;
    pointers.set(e.pointerId, { x: e.clientX, y: e.clientY });

    if (pointers.size === 1) {
      state.fsPanX = initPanX + (e.clientX - startX);
      state.fsPanY = initPanY + (e.clientY - startY);
      applyFsTransform();
    } else if (pointers.size === 2) {
      const pts = Array.from(pointers.values());
      const dist = Math.hypot(pts[0].x - pts[1].x, pts[0].y - pts[1].y);
      const factor = dist / pinchStartDist;
      setFsZoom(pinchStartZoom * factor);
    }
  };

  const endPointer = e => {
    pointers.delete(e.pointerId);
    if (pointers.size === 0) {
      stage.classList.remove("dragging");
    } else if (pointers.size === 1) {
      const remaining = pointers.values().next().value;
      startX = remaining.x;
      startY = remaining.y;
      initPanX = state.fsPanX;
      initPanY = state.fsPanY;
    }
  };

  stage.onpointerup = endPointer;
  stage.onpointercancel = endPointer;

  stage.onwheel = e => {
    e.preventDefault();
    setFsZoom(state.fsZoom + (e.deltaY < 0 ? 0.2 : -0.2));
  };
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
  state.zoom = Math.max(1, Math.min(4.0, Number(next.toFixed(2))));
  applyTransform();
  updateZoomPresetsUI();
}

function setupMapPan() {
  const stage = $("#mapStage");
  if (!stage) return;

  let pointers = new Map();
  let startX = 0, startY = 0;
  let initPanX = 0, initPanY = 0;
  let pinchStartDist = 0;
  let pinchStartZoom = 1;

  stage.onpointerdown = e => {
    if (e.target.closest(".custom-point") || e.target.closest(".smart-hotspot")) return;
    if (state.pendingPoint) {
      placePoint(e);
      return;
    }
    pointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
    stage.setPointerCapture?.(e.pointerId);

    if (pointers.size === 1) {
      startX = e.clientX;
      startY = e.clientY;
      initPanX = state.panX;
      initPanY = state.panY;
      stage.classList.add("dragging");
    } else if (pointers.size === 2) {
      const pts = Array.from(pointers.values());
      pinchStartDist = Math.hypot(pts[0].x - pts[1].x, pts[0].y - pts[1].y) || 1;
      pinchStartZoom = state.zoom;
      stage.classList.remove("dragging");
    }
  };

  stage.onpointermove = e => {
    if (!pointers.has(e.pointerId)) return;
    pointers.set(e.pointerId, { x: e.clientX, y: e.clientY });

    if (pointers.size === 1) {
      state.panX = initPanX + (e.clientX - startX);
      state.panY = initPanY + (e.clientY - startY);
      applyTransform();
    } else if (pointers.size === 2) {
      const pts = Array.from(pointers.values());
      const dist = Math.hypot(pts[0].x - pts[1].x, pts[0].y - pts[1].y);
      const factor = dist / pinchStartDist;
      setZoom(pinchStartZoom * factor);
    }
  };

  const endPointer = e => {
    pointers.delete(e.pointerId);
    if (pointers.size === 0) {
      stage.classList.remove("dragging");
    } else if (pointers.size === 1) {
      const remaining = pointers.values().next().value;
      startX = remaining.x;
      startY = remaining.y;
      initPanX = state.panX;
      initPanY = state.panY;
    }
  };

  stage.onpointerup = endPointer;
  stage.onpointercancel = endPointer;

  stage.onwheel = e => {
    e.preventDefault();
    setZoom(state.zoom + (e.deltaY < 0 ? 0.15 : -0.15));
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
  $("#zoomIn").onclick = () => setZoom(state.zoom + 0.2);
  $("#zoomOut").onclick = () => setZoom(state.zoom - 0.2);
  $("#resetMapBtn").onclick = () => {
    state.zoom = 1;
    state.panX = state.panY = 0;
    applyTransform();
    updateZoomPresetsUI();
  };

  // High-Legibility Zoom Presets (100%, 150%, 200%, 300%)
  const p100 = $("#zoomPreset100"); if (p100) p100.onclick = () => setZoom(1.0);
  const p150 = $("#zoomPreset150"); if (p150) p150.onclick = () => setZoom(1.5);
  const p200 = $("#zoomPreset200"); if (p200) p200.onclick = () => setZoom(2.0);
  const p300 = $("#zoomPreset300"); if (p300) p300.onclick = () => setZoom(3.0);

  // Smart High-Legibility Vector Label Toggle
  const toggleSmartBtn = $("#toggleSmartLabelsBtn");
  if (toggleSmartBtn) {
    toggleSmartBtn.onclick = () => {
      state.showSmartLabels = !state.showSmartLabels;
      toggleSmartBtn.classList.toggle("active", state.showSmartLabels);
      const textSpan = $("#smartLabelToggleText");
      if (textSpan) {
        textSpan.textContent = state.showSmartLabels
          ? (state.lang === "en" ? "Guide Rings ON" : "가이드 링 ON")
          : (state.lang === "en" ? "Guide Rings OFF" : "가이드 링 OFF");
      }
      renderSmartLabels();
      toast(state.showSmartLabels
        ? (state.lang === "en" ? "Transparent guide rings visible" : "지도 위 투명 가이드 링이 켜졌습니다.")
        : (state.lang === "en" ? "Guide rings hidden (Pure textbook map)" : "가이드 링이 숨겨졌습니다. (순수 원본 지도 모드)"));
    };
  }

  // Fullscreen High-Definition Lightbox Modal
  const fsOpenBtn = $("#openFullscreenMapBtn");
  if (fsOpenBtn) fsOpenBtn.onclick = () => openFullscreenMap();
  const fsCloseBtn = $("#fsCloseBtn");
  if (fsCloseBtn) fsCloseBtn.onclick = () => closeFullscreenMap();
  const fsIn = $("#fsZoomIn");
  if (fsIn) fsIn.onclick = () => setFsZoom(state.fsZoom + 0.25);
  const fsOut = $("#fsZoomOut");
  if (fsOut) fsOut.onclick = () => setFsZoom(state.fsZoom - 0.25);
  const fs100 = $("#fsZoom100");
  if (fs100) fs100.onclick = () => setFsZoom(1.0);
  const fs150 = $("#fsZoom150");
  if (fs150) fs150.onclick = () => setFsZoom(1.5);
  const fs200 = $("#fsZoom200");
  if (fs200) fs200.onclick = () => setFsZoom(2.0);
  const fs300 = $("#fsZoom300");
  if (fs300) fs300.onclick = () => setFsZoom(3.0);
  setupFsPan();

  window.addEventListener("resize", () => {
    syncCanvasDimensions();
    applyTransform();
    applyFsTransform();
  });

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
  let refreshing = false;
  navigator.serviceWorker.addEventListener("controllerchange", () => {
    if (!refreshing) {
      refreshing = true;
      window.location.reload();
    }
  });
  navigator.serviceWorker.register("./service-worker.js").then(reg => {
    try { reg.update(); } catch (e) {}
    reg.onupdatefound = () => {
      const installing = reg.installing;
      if (installing) {
        installing.onstatechange = () => {
          if (installing.state === "installed" && navigator.serviceWorker.controller) {
            if (!refreshing) {
              refreshing = true;
              window.location.reload();
            }
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
