const programMaps = { foot: "foot-sole-map.webp", hand: "hand-palm-map.webp" };

const systems = [
  {
    id: "cardio",
    no: "01",
    icon: "♥",
    image: "system-cardio.webp",
    title: "심혈관계",
    en: "Cardiovascular System",
    count: 5,
    summary: "심장·혈관과 순환 관련 교재 프로그램",
    summaryEn: "Textbook programs for heart, blood vessels, and systemic circulation"
  },
  {
    id: "digestive",
    no: "02",
    icon: "◒",
    image: "system-digestive.webp",
    title: "소화기계",
    en: "Digestive System",
    count: 3,
    summary: "식도·위·장과 소화 관련 교재 프로그램",
    summaryEn: "Textbook programs for esophagus, stomach, intestines, and digestion"
  },
  {
    id: "endocrine",
    no: "03",
    icon: "✦",
    image: "system-endocrine.webp",
    title: "내분비계",
    en: "Endocrine System",
    count: 3,
    summary: "호르몬과 주요 내분비선 관련 프로그램",
    summaryEn: "Programs for hormones, metabolism, and major endocrine glands"
  },
  {
    id: "muscle",
    no: "04",
    icon: "◇",
    image: "system-musculoskeletal.webp",
    title: "근골격계",
    en: "Musculoskeletal System",
    count: 6,
    summary: "근육·뼈·관절과 척추 관련 프로그램",
    summaryEn: "Programs for muscles, bones, joints, and spinal alignment"
  },
  {
    id: "nervous",
    no: "05",
    icon: "◎",
    image: "system-nervous.webp",
    title: "신경계",
    en: "Nervous System",
    count: 4,
    summary: "뇌·척수·말초신경 관련 교재 프로그램",
    summaryEn: "Textbook programs for brain, spinal cord, and cranial nerves"
  },
  {
    id: "respiratory",
    no: "06",
    icon: "≈",
    image: "system-respiratory.webp",
    title: "호흡기계",
    en: "Respiratory System",
    count: 5,
    summary: "폐·기관지·상기도 관련 교재 프로그램",
    summaryEn: "Textbook programs for lungs, bronchi, and upper airway balance"
  },
  {
    id: "reproductive",
    no: "07",
    icon: "◉",
    image: "system-reproductive.webp",
    title: "생식기계",
    en: "Reproductive System",
    count: 1,
    summary: "자궁·전립선·난소·고환 관련 프로그램",
    summaryEn: "Programs for reproductive organs, pelvis, and hormonal support"
  },
  {
    id: "urinary",
    no: "08",
    icon: "◍",
    image: "system-urinary.webp",
    title: "비뇨기계",
    en: "Urinary System",
    count: 2,
    summary: "신장·방광·부신 관련 교재 프로그램",
    summaryEn: "Textbook programs for kidneys, bladder, and adrenal regulation"
  }
];

const programs = [
  {
    id: "cardio-foot",
    systemId: "cardio",
    system: "심혈관계",
    systemEn: "Cardiovascular System",
    title: "심혈관계 발 반사 요법",
    en: "Cardiovascular Foot Reflexology",
    page: 48,
    summary: "심혈관계의 기본 발 반사 영역을 순서대로 확인합니다.",
    summaryEn: "Follow the foundational cardiovascular foot reflex sequence step by step.",
    points: ["뇌간", "부신", "횡격막", "심장"],
    seconds: 30,
    caution: "흉통·호흡곤란은 즉시 진료가 우선입니다.",
    cautionEn: "Acute chest pain or dyspnea requires immediate emergency medical care."
  },
  {
    id: "arrhythmia",
    systemId: "cardio",
    system: "심혈관계",
    systemEn: "Cardiovascular System",
    title: "부정맥 및 울혈성 심부전",
    en: "Arrhythmia & Congestive Heart Failure",
    page: 49,
    summary: "심장 박동 조절과 관련된 기본 반사 영역을 확인합니다.",
    summaryEn: "Stimulate core reflex areas associated with cardiac rhythm and autonomics.",
    points: ["뇌간", "심장"],
    seconds: 25,
    caution: "급성 흉통·실신·심한 호흡곤란은 즉시 진료가 우선입니다.",
    cautionEn: "Syncope, severe chest pressure, or breathlessness requires emergency treatment."
  },
  {
    id: "hypertension",
    systemId: "cardio",
    system: "심혈관계",
    systemEn: "Cardiovascular System",
    title: "고혈압 반사 요법",
    en: "High Blood Pressure Protocol",
    page: 50,
    summary: "긴장 완화를 중심으로 교재의 두 반사 영역을 안내합니다.",
    summaryEn: "Soothe tension and support autonomic equilibrium through key relaxing points.",
    points: ["태양신경총", "횡격막"],
    seconds: 30,
    caution: "정기 혈압 측정과 전문의 약물 처방을 반드시 준수하세요.",
    cautionEn: "Continue regular blood pressure monitoring and follow prescribed medication."
  },
  {
    id: "heart-attack",
    systemId: "cardio",
    system: "심혈관계",
    systemEn: "Cardiovascular System",
    title: "심장마비 반사 요법",
    en: "Heart Attack Recovery & Support",
    page: 51,
    summary: "교재에 제시된 뇌하수체와 심장 반사 영역을 확인합니다.",
    summaryEn: "Gentle recovery support focusing on the pituitary and heart reflex zones.",
    points: ["뇌하수체", "심장"],
    seconds: 20,
    caution: "심장마비가 의심되면 반사요법보다 응급의료가 최우선입니다.",
    cautionEn: "Call emergency services immediately if acute myocardial infarction is suspected."
  },
  {
    id: "hypotension",
    systemId: "cardio",
    system: "심혈관계",
    systemEn: "Cardiovascular System",
    title: "저혈압 반사 요법",
    en: "Low Blood Pressure Protocol",
    page: 52,
    summary: "혈압 조절과 관련된 부신과 심장 반사 영역을 확인합니다.",
    summaryEn: "Support adrenal vitality and cardiac output reflex pathways.",
    points: ["부신", "심장"],
    seconds: 25,
    caution: "어지럼증이나 기립성 저혈압 발생 시 누워서 안정을 취하세요.",
    cautionEn: "Rest in a supine position if severe dizziness or orthostatic symptoms occur."
  },

  {
    id: "heartburn",
    systemId: "digestive",
    system: "소화기계",
    systemEn: "Digestive System",
    title: "가슴 쓰림 반사 요법",
    en: "Heartburn & Acid Reflux",
    page: 55,
    summary: "식도와 위 주변의 소화 관련 반사 영역을 안내합니다.",
    summaryEn: "Soothe the upper gastrointestinal reflex areas including esophagus and stomach.",
    points: ["횡격막", "식도", "췌장", "위"],
    seconds: 30,
    caution: "식사 직후 강한 자극은 피하고 편안한 강도로 진행하세요.",
    cautionEn: "Avoid deep abdominal pressure right after meals; apply gentle touch."
  },
  {
    id: "ibs",
    systemId: "digestive",
    system: "소화기계",
    systemEn: "Digestive System",
    title: "과민성 대장 증후군",
    en: "Irritable Bowel Syndrome (IBS)",
    page: 56,
    summary: "대장 순서와 긴장 관련 반사 영역을 함께 확인합니다.",
    summaryEn: "Follow the anatomical colon pathway combined with neuro-endocrine stress points.",
    points: ["상행결장", "횡행결장", "하행결장", "S자 결장", "뇌하수체", "부신"],
    seconds: 25,
    caution: "복통이 심할 때는 부드럽게 쓰다듬듯이 진행합니다.",
    cautionEn: "Use light, rhythmic strokes if abdominal cramps or sensitivity are active."
  },
  {
    id: "constipation",
    systemId: "digestive",
    system: "소화기계",
    systemEn: "Digestive System",
    title: "변비 반사 요법",
    en: "Constipation Protocol",
    page: 57,
    summary: "결장과 갑상선·신장·요추 관련 반사 영역을 안내합니다.",
    summaryEn: "Stimulate peristaltic colon zones along with metabolic and spinal reflex areas.",
    points: ["상행결장", "하행결장", "S자 결장", "갑상선", "신장·부신", "요추"],
    seconds: 25,
    caution: "충분한 수분 섭취와 함께 규칙적으로 진행하세요.",
    cautionEn: "Combine with adequate daily hydration and gentle walking."
  },

  {
    id: "endocrine-foot",
    systemId: "endocrine",
    system: "내분비계",
    systemEn: "Endocrine System",
    title: "내분비계 발 반사 요법",
    en: "Endocrine Foot Reflexology",
    page: 59,
    summary: "발에서 주요 내분비선 반사 영역을 순서대로 확인합니다.",
    summaryEn: "Work through the primary endocrine master glands on the feet in textbook order.",
    points: ["뇌하수체", "갑상선·부갑상선", "췌장", "자궁·전립선", "난소·고환"],
    seconds: 25,
    caution: "내분비 질환 치료 중인 경우 전문의 상담을 병행하세요.",
    cautionEn: "Maintain regular endocrinologist appointments for diagnosed hormonal conditions."
  },
  {
    id: "endocrine-hand",
    systemId: "endocrine",
    system: "내분비계",
    systemEn: "Endocrine System",
    title: "내분비계 손 반사 요법",
    en: "Endocrine Hand Reflexology",
    page: 60,
    summary: "손에서 주요 내분비선 반사 영역을 순서대로 확인합니다.",
    summaryEn: "Convenient hand reflex protocol targeting hormone regulatory centers.",
    points: ["뇌하수체", "갑상선·부갑상선", "췌장", "부신", "자궁·전립선", "난소·고환"],
    seconds: 25,
    handMap: "hand-palm-map.webp",
    caution: "엄지와 손바닥의 민감한 부위는 부드럽게 지압합니다.",
    cautionEn: "Apply gradual, gentle pressure over sensitive palm and thumb zones."
  },
  {
    id: "diabetes",
    systemId: "endocrine",
    system: "내분비계",
    systemEn: "Endocrine System",
    title: "당뇨병 및 저혈당증",
    en: "Diabetes & Hypoglycemia",
    page: 61,
    summary: "교재에 제시된 췌장과 신장 반사 영역을 확인합니다.",
    summaryEn: "Reflex support for pancreatic endocrine function and renal filtration balance.",
    points: ["췌장", "신장"],
    seconds: 25,
    caution: "혈당 이상 증상은 측정과 의료적 관리가 우선입니다.",
    cautionEn: "Blood glucose monitoring and physician-guided management are essential."
  },

  {
    id: "muscle-foot",
    systemId: "muscle",
    system: "근골격계",
    systemEn: "Musculoskeletal System",
    title: "근골격계 발 반사 요법",
    en: "Musculoskeletal Foot Reflexology",
    page: 64,
    summary: "척추와 주요 관절 관련 발 반사 영역을 순서대로 확인합니다.",
    summaryEn: "Comprehensive foot reflex routine for spinal columns and major peripheral joints.",
    points: ["꼬리뼈", "어깨", "엉덩이·좌골신경", "무릎·다리", "허리", "목", "등 상부"],
    seconds: 25,
    footMap: "foot-top-map.webp",
    handMap: "hand-back-map.webp",
    caution: "염좌나 골절이 의심되는 급성 부위는 직접 자극하지 않습니다.",
    cautionEn: "Do not apply deep pressure over acute fractures, sprains, or severe inflammation."
  },
  {
    id: "osteoporosis",
    systemId: "muscle",
    system: "근골격계",
    systemEn: "Musculoskeletal System",
    title: "골다공증 반사 요법",
    en: "Osteoporosis Protocol",
    page: 65,
    summary: "내분비선과 신장·부신·엉덩이 반사 영역을 확인합니다.",
    summaryEn: "Stimulate calcium regulation glands and pelvic-spinal support reflex zones.",
    points: ["갑상선", "뇌하수체", "부갑상선", "신장·부신", "엉덩이"],
    seconds: 25,
    footMap: "foot-top-map.webp",
    handMap: "hand-back-map.webp",
    caution: "뼈가 약한 부위는 부드러운 1–2/10 압력으로 진행하세요.",
    cautionEn: "Maintain very gentle pressure (1-2/10) to avoid any discomfort."
  },
  {
    id: "carpal",
    systemId: "muscle",
    system: "근골격계",
    systemEn: "Musculoskeletal System",
    title: "수근관 증후군",
    en: "Carpal Tunnel Syndrome",
    page: 66,
    summary: "상지와 척추 관련 반사 영역을 순서대로 확인합니다.",
    summaryEn: "Target reflex zones for upper extremities, wrist passage, and cervical roots.",
    points: ["어깨", "손목", "팔꿈치", "갑상선", "신장·부신", "경추", "흉추"],
    seconds: 25,
    footMap: "foot-top-map.webp",
    handMap: "hand-back-map.webp",
    caution: "손목 저림이 심해질 경우 즉시 자극을 멈추고 휴식하세요.",
    cautionEn: "Pause immediately if paresthesia, tingling, or numbness increases."
  },
  {
    id: "osteoarthritis",
    systemId: "muscle",
    system: "근골격계",
    systemEn: "Musculoskeletal System",
    title: "골관절염",
    en: "Osteoarthritis Protocol",
    page: 68,
    summary: "척추와 내분비·림프 관련 반사 영역을 가볍게 확인합니다.",
    summaryEn: "Gentle stimulation over spinal articulation, metabolic, and lymphatic drain areas.",
    points: ["척추 전체", "간", "갑상선", "뇌하수체", "신장·부신", "상부 림프계"],
    seconds: 25,
    caution: "관절 급성 열감이나 부종이 있을 때는 휴식이 우선입니다.",
    cautionEn: "Allow hot, swollen joints to rest; apply only soothing, light touch."
  },
  {
    id: "frozen-shoulder",
    systemId: "muscle",
    system: "근골격계",
    systemEn: "Musculoskeletal System",
    title: "오십견 (유착성 관절낭염)",
    en: "Frozen Shoulder (Adhesive Capsulitis)",
    page: 70,
    summary: "어깨와 팔꿈치, 경추·흉추 관련 반사 영역을 확인합니다.",
    summaryEn: "Focus on shoulder girdle, elbow, and corresponding cervicothoracic spinal zones.",
    points: ["갑상선", "후두", "어깨", "팔꿈치", "부신", "경추", "흉추"],
    seconds: 25,
    caution: "무리하게 가동 범위를 늘리지 말고 이완에 집중합니다.",
    cautionEn: "Focus on gentle relaxation without forcing painful joint movement."
  },
  {
    id: "multiple-sclerosis",
    systemId: "muscle",
    system: "근골격계",
    systemEn: "Musculoskeletal System",
    title: "다발성 경화증",
    en: "Multiple Sclerosis Support",
    page: 72,
    summary: "신경계와 방광·림프 관련 반사 영역을 순서대로 확인합니다.",
    summaryEn: "Nervous axis, bladder control, and lymphatic circulation support zones.",
    points: ["척추 전체", "머리", "내이", "방광", "부신", "상부 림프계"],
    seconds: 25,
    caution: "피로가 누적되지 않도록 짧은 시간 가볍게 시행하세요.",
    cautionEn: "Keep sessions brief and restorative to avoid neuro-fatigue."
  },

  {
    id: "dementia",
    systemId: "nervous",
    system: "신경계",
    systemEn: "Nervous System",
    title: "알츠하이머 및 치매",
    en: "Alzheimer's & Dementia Care",
    page: 74,
    summary: "머리와 중추 조절, 이완 관련 반사 영역을 확인합니다.",
    summaryEn: "Stimulate cephalic, hypothalamic-pituitary, and autonomic calming reflex zones.",
    points: ["머리", "시상하부·뇌하수체", "횡격막", "폐", "신장·부신", "척추 전체"],
    seconds: 25,
    caution: "편안하고 친근한 분위기에서 안정감을 주며 진행합니다.",
    cautionEn: "Maintain a calm, reassuring environment with gentle, comfortable touch."
  },
  {
    id: "facial-palsy",
    systemId: "nervous",
    system: "신경계",
    systemEn: "Nervous System",
    title: "안면신경마비 반사 요법",
    en: "Facial Nerve Palsy (Bell's Palsy)",
    page: 75,
    summary: "안면신경과 목 반사 영역을 중심으로 확인합니다.",
    summaryEn: "Direct focus on facial nerve projections and cervical nerve root reflex areas.",
    points: ["안면신경", "목"],
    seconds: 20,
    caution: "급성 발병 72시간 이내에는 신경과 전문 진료가 필수입니다.",
    cautionEn: "Consult a neurologist within 72 hours of sudden facial weakness or asymmetry."
  },
  {
    id: "stroke-epilepsy",
    systemId: "nervous",
    system: "신경계",
    systemEn: "Nervous System",
    title: "뇌졸중·간질·뇌성마비",
    en: "Stroke, Epilepsy & Cerebral Palsy",
    page: 76,
    summary: "교재에서 제시한 뇌 반사 영역을 확인합니다.",
    summaryEn: "Cerebral hemisphere and brain reflex projection areas on the toes and thumbs.",
    points: ["뇌"],
    seconds: 20,
    caution: "급성 뇌졸중 또는 발작은 즉시 응급의료가 우선입니다.",
    cautionEn: "FAST warning signs or seizures require immediate hospital emergency response."
  },
  {
    id: "parkinson",
    systemId: "nervous",
    system: "신경계",
    systemEn: "Nervous System",
    title: "파킨슨병 반사 요법",
    en: "Parkinson's Disease Support",
    page: 78,
    summary: "뇌와 신장·림프·간·척추 관련 반사 영역을 안내합니다.",
    summaryEn: "Comprehensive neuromotor balance routine covering brain, liver, and spine.",
    points: ["머리", "뇌", "신장", "림프", "간", "척추 전체"],
    seconds: 25,
    caution: "균형 유지를 위해 항상 안전한 자세로 앉거나 누워서 진행하세요.",
    cautionEn: "Ensure the individual is securely seated or lying down to prevent falls."
  },

  {
    id: "respiratory-foot",
    systemId: "respiratory",
    system: "호흡기계",
    systemEn: "Respiratory System",
    title: "호흡기계 발 반사 요법",
    en: "Respiratory Foot Reflexology",
    page: 81,
    summary: "호흡과 염증·면역 관련 기본 발 반사 영역을 확인합니다.",
    summaryEn: "Foundational pulmonary, adrenal anti-inflammatory, and lymphatic reflex points.",
    points: ["부신", "폐", "림프"],
    seconds: 25,
    caution: "호흡 곤란이 발생하면 환기를 시키고 편안히 휴식하세요.",
    cautionEn: "Ensure fresh air ventilation and rest comfortably if breathing is labored."
  },
  {
    id: "bronchitis",
    systemId: "respiratory",
    system: "호흡기계",
    systemEn: "Respiratory System",
    title: "기관지염 반사 요법",
    en: "Bronchitis Protocol",
    page: 82,
    summary: "폐와 횡격막, 부신 및 흉추 관련 반사 영역을 확인합니다.",
    summaryEn: "Target bronchial zones, diaphragm mechanics, thoracic spine, and adrenals.",
    points: ["뇌하수체", "폐", "횡격막", "부신", "흉추", "태양신경총"],
    seconds: 25,
    caution: "고열이나 호흡곤란, 청색증은 즉시 병원 진료가 우선입니다.",
    cautionEn: "High fever, wheezing, or cyanosis requires immediate medical attention."
  },
  {
    id: "asthma",
    systemId: "respiratory",
    system: "호흡기계",
    systemEn: "Respiratory System",
    title: "천식 반사 요법",
    en: "Asthma Relief Protocol",
    page: 83,
    summary: "폐 기능과 이완 관련 반사 영역을 순서대로 확인합니다.",
    summaryEn: "Soothe bronchial reactivity and autonomic tension with lung and solar plexus points.",
    points: ["뇌하수체", "폐", "횡격막", "부신", "흉추", "태양신경총"],
    seconds: 25,
    caution: "천식 발작 중에는 처방된 응급약과 흡입기 사용이 최우선입니다.",
    cautionEn: "Always use prescribed inhalers and emergency medication first during acute asthma."
  },
  {
    id: "influenza",
    systemId: "respiratory",
    system: "호흡기계",
    systemEn: "Respiratory System",
    title: "인플루엔자 반사 요법",
    en: "Influenza & Flu Support",
    page: 84,
    summary: "호흡기와 상부 림프·비장 관련 반사 영역을 확인합니다.",
    summaryEn: "Immune support sequence covering upper lymphatics, spleen, and lungs.",
    points: ["태양신경총", "상부 림프", "폐", "갑상선", "비장", "흉추"],
    seconds: 25,
    caution: "충분한 수분 섭취와 수면을 취하고 무리한 자극은 피하세요.",
    cautionEn: "Prioritize warm fluids, rest, and light reflex touch during acute viral recovery."
  },
  {
    id: "common-cold",
    systemId: "respiratory",
    system: "호흡기계",
    systemEn: "Respiratory System",
    title: "감기 반사 요법",
    en: "Common Cold Protocol",
    page: 85,
    summary: "머리와 감각기관, 척추·림프 관련 반사 영역을 확인합니다.",
    summaryEn: "Clear nasal-head congestion and drain upper lymph drainage zones.",
    points: ["머리", "뇌하수체", "눈·귀", "경추", "흉추", "상부 림프"],
    seconds: 25,
    caution: "따뜻한 차를 마시며 체온을 유지해 주세요.",
    cautionEn: "Keep warm, drink soothing liquids, and encourage natural rest."
  },

  {
    id: "reproductive-basic",
    systemId: "reproductive",
    system: "생식기계",
    systemEn: "Reproductive System",
    title: "생식기계 반사 요법",
    en: "Reproductive Reflexology",
    page: 88,
    summary: "남녀 생식기관 관련 반사 영역을 순서대로 확인합니다.",
    summaryEn: "Textbook sequence targeting pelvic reflex zones for reproductive balance.",
    points: ["자궁·전립선", "난소·고환", "나팔관"],
    seconds: 25,
    handMap: "hand-back-map.webp",
    caution: "임신 중인 경우 강한 생식기 반사 자극을 금합니다.",
    cautionEn: "Avoid strong stimulation of reproductive and pelvic points during pregnancy."
  },

  {
    id: "urinary-foot",
    systemId: "urinary",
    system: "비뇨기계",
    systemEn: "Urinary System",
    title: "비뇨기계 발 반사 요법",
    en: "Urinary Foot Reflexology",
    page: 90,
    summary: "방광과 신장 반사 영역을 발에서 확인합니다.",
    summaryEn: "Classic urinary filtration tract: bladder to kidneys on the plantar surface.",
    points: ["방광", "신장"],
    seconds: 25,
    caution: "자극 후 미온수를 한 잔 마셔 노폐물 배출을 돕습니다.",
    cautionEn: "Drink a glass of warm water after session to assist normal metabolic clearance."
  },
  {
    id: "urinary-infection",
    systemId: "urinary",
    system: "비뇨기계",
    systemEn: "Urinary System",
    title: "방광·신장 감염 반사 요법",
    en: "Bladder & Kidney Infection Support",
    page: 91,
    summary: "교재에서 염증 대응과 관련해 제시한 부신 반사 영역을 확인합니다.",
    summaryEn: "Support natural anti-inflammatory endocrine pathways via adrenal reflex points.",
    points: ["부신"],
    seconds: 20,
    caution: "발열·혈뇨·옆구리 통증은 즉시 비뇨의학과 진료가 필수입니다.",
    cautionEn: "Fever, hematuria, or severe flank pain requires immediate medical diagnosis."
  }
];

const pointGuides = {
  "S자 결장": {
    side: "왼쪽 중심",
    sideEn: "Mainly left",
    location: "왼발·왼손의 아래쪽 결장 경로 끝부분",
    locationEn: "Distal end of colon pathway on lower left foot and left hand"
  },
  "간": {
    side: "오른쪽 중심",
    sideEn: "Mainly right",
    location: "오른발·오른손의 상복부 반사 영역",
    locationEn: "Upper abdominal quadrant area on right foot sole and right palm"
  },
  "갑상선": {
    side: "양쪽",
    sideEn: "Both sides",
    location: "엄지발가락·엄지손가락 기저부 주변",
    locationEn: "Base of big toe ball and thumb mound"
  },
  "갑상선·부갑상선": {
    side: "양쪽",
    sideEn: "Both sides",
    location: "엄지발가락·엄지손가락 기저부 주변",
    locationEn: "Circumference of the base of big toe and thumb metacarpal"
  },
  "경추": {
    side: "양쪽",
    sideEn: "Both sides",
    location: "엄지발가락·엄지손가락 안쪽 가장자리의 위쪽 척추선",
    locationEn: "Upper spinal line along the medial margin of big toe and thumb"
  },
  "꼬리뼈": {
    side: "양쪽",
    sideEn: "Both sides",
    location: "발뒤꿈치·손목 쪽 척추선의 끝부분",
    locationEn: "Inferior terminus of spinal line near heel and inner wrist"
  },
  "나팔관": {
    side: "양쪽",
    sideEn: "Both sides",
    location: "발목·손목 바깥쪽을 잇는 생식기 반사선",
    locationEn: "Reproductive reflex band bridging the ankle and lateral wrist"
  },
  "난소·고환": {
    side: "양쪽",
    sideEn: "Both sides",
    location: "발목·손목 바깥쪽의 생식기 반사 영역",
    locationEn: "Lateral gonadal reflex depression below the lateral malleolus / wrist"
  },
  "내이": {
    side: "양쪽",
    sideEn: "Both sides",
    location: "넷째·다섯째 발가락과 손가락 기저부 주변",
    locationEn: "Webbing and base between the 4th and 5th digits"
  },
  "뇌": {
    side: "양쪽",
    sideEn: "Both sides",
    location: "발가락·손가락 끝과 엄지 전체의 머리 반사 영역",
    locationEn: "Distal pads of all toes and fingers, centered on big toe/thumb"
  },
  "뇌간": {
    side: "양쪽",
    sideEn: "Both sides",
    location: "엄지발가락·엄지손가락 안쪽 기저부",
    locationEn: "Medial base of proximal phalanx of the big toe and thumb"
  },
  "뇌하수체": {
    side: "양쪽",
    sideEn: "Both sides",
    location: "엄지발가락·엄지손가락 중앙의 표시점",
    locationEn: "Central whorl of the pad of the big toe and thumb"
  },
  "눈·귀": {
    side: "양쪽",
    sideEn: "Both sides",
    location: "둘째·셋째 발가락과 손가락 기저부 주변",
    locationEn: "Plantar and palmar pads at the base of 2nd and 3rd digits"
  },
  "등 상부": {
    side: "양쪽",
    sideEn: "Both sides",
    location: "발·손 안쪽 척추선의 흉추 위쪽 구간",
    locationEn: "Upper thoracic spinal ridge along medial arch of foot and hand"
  },
  "림프": {
    side: "양쪽",
    sideEn: "Both sides",
    location: "발등·손등과 발가락·손가락 사이의 림프 표시 영역",
    locationEn: "Dorsal web spaces between all metatarsals and metacarpals"
  },
  "머리": {
    side: "양쪽",
    sideEn: "Both sides",
    location: "발가락·손가락 끝부분 전체",
    locationEn: "Apical pads of all five digits on hands and feet"
  },
  "목": {
    side: "양쪽",
    sideEn: "Both sides",
    location: "엄지발가락·엄지손가락 기저부의 목 반사 띠",
    locationEn: "Cervical band encircling the neck of the big toe and thumb"
  },
  "무릎·다리": {
    side: "양쪽",
    sideEn: "Both sides",
    location: "발·손 바깥쪽 중간의 관절 반사 영역",
    locationEn: "Lateral aspect of foot and hand midway between heel/wrist and 5th digit"
  },
  "방광": {
    side: "양쪽",
    sideEn: "Both sides",
    location: "발뒤꿈치·손목 가까운 안쪽 아래 영역",
    locationEn: "Medial lower sole just above the heel pad, near inner border"
  },
  "부갑상선": {
    side: "양쪽",
    sideEn: "Both sides",
    location: "엄지발가락·엄지손가락 기저부 안쪽",
    locationEn: "Medial edge of the first metatarsophalangeal joint"
  },
  "부신": {
    side: "양쪽",
    sideEn: "Both sides",
    location: "발바닥·손바닥 중앙보다 약간 위의 표시점",
    locationEn: "Deep medial point slightly anterosuperior to kidney hollow"
  },
  "비장": {
    side: "왼쪽 중심",
    sideEn: "Mainly left",
    location: "왼발·왼손의 상복부 바깥쪽 표시 영역",
    locationEn: "Lateral mid-arch zone below heart reflex on left sole and left palm"
  },
  "상부 림프": {
    side: "양쪽",
    sideEn: "Both sides",
    location: "발등·손등 위쪽과 발가락·손가락 사이",
    locationEn: "Grooves on the dorsal foot and hand between digital tendons"
  },
  "상부 림프계": {
    side: "양쪽",
    sideEn: "Both sides",
    location: "발등·손등 위쪽과 발가락·손가락 사이",
    locationEn: "Upper dorsal lymphatic drainage lines between toes and fingers"
  },
  "상행결장": {
    side: "오른쪽 중심",
    sideEn: "Mainly right",
    location: "오른발·오른손 아래쪽에서 위로 이어지는 결장 경로",
    locationEn: "Ascending vertical colon pathway upward from right lower arch"
  },
  "손목": {
    side: "양쪽",
    sideEn: "Both sides",
    location: "발목·손목에 대응하는 바깥쪽 관절 표시 영역",
    locationEn: "Lateral joint line correlating to wrist and ankle flexure"
  },
  "시상하부·뇌하수체": {
    side: "양쪽",
    sideEn: "Both sides",
    location: "엄지발가락·엄지손가락 중앙과 기저부의 표시 영역",
    locationEn: "Core master regulatory point on center and neck of big toe/thumb"
  },
  "식도": {
    side: "양쪽",
    sideEn: "Both sides",
    location: "엄지 기저부에서 위 반사 영역으로 이어지는 안쪽 선",
    locationEn: "Medial descending tract from throat line to stomach zone"
  },
  "신장": {
    side: "양쪽",
    sideEn: "Both sides",
    location: "발바닥·손바닥 중앙의 오목한 표시 영역",
    locationEn: "Center hollow of sole and palm in the natural visceral basin"
  },
  "신장·부신": {
    side: "양쪽",
    sideEn: "Both sides",
    location: "발바닥·손바닥 중앙과 그보다 약간 위의 표시 영역",
    locationEn: "Central visceral basin and adjacent adrenal projection point"
  },
  "심장": {
    side: "왼쪽 중심",
    sideEn: "Mainly left",
    location: "왼발·왼손의 앞가슴 반사 영역",
    locationEn: "Medial thoracic chest zone on left ball of foot and upper palm"
  },
  "안면신경": {
    side: "양쪽",
    sideEn: "Both sides",
    location: "발가락·손가락 끝과 옆면의 얼굴 표시 영역",
    locationEn: "Lateral borders and apical cushions of big toe and thumb"
  },
  "어깨": {
    side: "양쪽",
    sideEn: "Both sides",
    location: "새끼발가락·새끼손가락 아래 바깥쪽 관절 영역",
    locationEn: "Lateral shoulder pad just below the 5th metatarsophalangeal joint"
  },
  "엉덩이": {
    side: "양쪽",
    sideEn: "Both sides",
    location: "발뒤꿈치·손목 쪽 바깥부분의 골반 표시 영역",
    locationEn: "Postero-lateral rim of the heel pad and proximal hypothenar"
  },
  "엉덩이·좌골신경": {
    side: "양쪽",
    sideEn: "Both sides",
    location: "발뒤꿈치 바깥쪽과 발목 둘레의 표시 영역",
    locationEn: "Transverse pelvic zone across posterior heel and retromalleolar groove"
  },
  "요추": {
    side: "양쪽",
    sideEn: "Both sides",
    location: "발·손 안쪽 척추선의 아래 허리 구간",
    locationEn: "Lower medial arch ridge representing the lumbar vertebrae L1-L5"
  },
  "위": {
    side: "왼쪽 중심",
    sideEn: "Mainly left",
    location: "왼발·왼손의 횡격막 아래 상복부 영역",
    locationEn: "Sub-diaphragmatic gastric area on medial sole and palm"
  },
  "자궁·전립선": {
    side: "양쪽",
    sideEn: "Both sides",
    location: "발목·손목 안쪽의 생식기 반사 영역",
    locationEn: "Medial retromalleolar fossa between medial malleolus and Achilles tendon"
  },
  "척추 전체": {
    side: "양쪽",
    sideEn: "Both sides",
    location: "발·손 안쪽 가장자리를 따라 이어지는 전체 척추선",
    locationEn: "Continuous medial bony margin from cervical base to coccygeal heel"
  },
  "췌장": {
    side: "양쪽",
    sideEn: "Both sides",
    location: "발바닥·손바닥의 위 반사 영역 아래쪽",
    locationEn: "Transverse band just inferior to stomach zone on medial sole and palm"
  },
  "태양신경총": {
    side: "양쪽",
    sideEn: "Both sides",
    location: "발바닥·손바닥 중앙 위쪽, 횡격막선 바로 아래",
    locationEn: "Center pit immediately below the ball of the foot and central palm"
  },
  "팔꿈치": {
    side: "양쪽",
    sideEn: "Both sides",
    location: "발·손 바깥쪽 중간의 팔꿈치 대응 영역",
    locationEn: "Lateral mid-border tuberosity correlating to olecranon/elbow"
  },
  "폐": {
    side: "양쪽",
    sideEn: "Both sides",
    location: "발가락·손가락 아래의 넓은 앞가슴 반사 영역",
    locationEn: "Broad pulmonary zone across the entire metatarsal ball and upper palm"
  },
  "하행결장": {
    side: "왼쪽 중심",
    sideEn: "Mainly left",
    location: "왼발·왼손 바깥쪽에서 아래로 이어지는 결장 경로",
    locationEn: "Downward colon pathway running along lateral arch of left foot and hand"
  },
  "허리": {
    side: "양쪽",
    sideEn: "Both sides",
    location: "발·손 안쪽 척추선의 아래쪽 허리 영역",
    locationEn: "Medial arch margin correlating to lower back and lumbosacral junction"
  },
  "횡격막": {
    side: "양쪽",
    sideEn: "Both sides",
    location: "발가락·손가락 아래를 가로지르는 횡격막선",
    locationEn: "Transverse boundary line separating the ball of foot/palm from mid-arch"
  },
  "횡행결장": {
    side: "양쪽",
    sideEn: "Both sides",
    location: "발바닥·손바닥 중간을 가로지르는 결장 경로",
    locationEn: "Transverse colon band passing horizontally across both soles and palms"
  },
  "후두": {
    side: "양쪽",
    sideEn: "Both sides",
    location: "엄지발가락·엄지손가락 기저부의 목 앞쪽 표시 영역",
    locationEn: "Anterior laryngeal point on plantar/palmar base of the first digit"
  },
  "흉추": {
    side: "양쪽",
    sideEn: "Both sides",
    location: "발·손 안쪽 척추선의 중간 등 구간",
    locationEn: "Mid-arch medial border representing thoracic vertebrae T1-T12"
  }
};

const pointNamesEn = {
  "S자 결장": "Sigmoid colon",
  "간": "Liver",
  "갑상선": "Thyroid",
  "갑상선·부갑상선": "Thyroid & parathyroid",
  "경추": "Cervical spine",
  "꼬리뼈": "Coccyx",
  "나팔관": "Fallopian tube",
  "난소·고환": "Ovary & testis",
  "내이": "Inner ear",
  "뇌": "Brain",
  "뇌간": "Brainstem",
  "뇌하수체": "Pituitary gland",
  "눈·귀": "Eyes & ears",
  "등 상부": "Upper back",
  "림프": "Lymphatic area",
  "머리": "Head",
  "목": "Neck",
  "무릎·다리": "Knee & leg",
  "방광": "Bladder",
  "부갑상선": "Parathyroid gland",
  "부신": "Adrenal gland",
  "비장": "Spleen",
  "상부 림프": "Upper lymphatic area",
  "상부 림프계": "Upper lymphatic system",
  "상행결장": "Ascending colon",
  "손목": "Wrist",
  "시상하부·뇌하수체": "Hypothalamus & pituitary",
  "식도": "Esophagus",
  "신장": "Kidney",
  "신장·부신": "Kidney & adrenal",
  "심장": "Heart",
  "안면신경": "Facial nerve",
  "어깨": "Shoulder",
  "엉덩이": "Hip",
  "엉덩이·좌골신경": "Hip & sciatic nerve",
  "요추": "Lumbar spine",
  "위": "Stomach",
  "자궁·전립선": "Uterus & prostate",
  "척추 전체": "Entire spine",
  "췌장": "Pancreas",
  "태양신경총": "Solar plexus",
  "팔꿈치": "Elbow",
  "폐": "Lungs",
  "하행결장": "Descending colon",
  "허리": "Lower back",
  "횡격막": "Diaphragm",
  "횡행결장": "Transverse colon",
  "후두": "Larynx",
  "흉추": "Thoracic spine"
};

programs.forEach(p => {
  p.footMap = `reflex-split/p${p.page}-feet.webp?v=9`;
  p.handMap = `reflex-split/p${p.page}-hands.webp?v=9`;
});
