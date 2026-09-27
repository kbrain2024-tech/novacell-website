const CIRCUITS = [
  {
    id: "lung",
    order: 1,
    code: "LU",
    name: "폐 회로",
    en: "Lung (LU) Circuit",
    page: 204,
    image: "assets/circuits/lung.png",
    route: "흉부 외측 → 상지 내측 전면 → 엄지 내측",
    routeEn: "Lateral chest → Anteromedial arm → Radial thumb",
    check: "LU 8",
    checkEn: "LU 8",
    supply: "LU 7",
    supplyEn: "LU 7",
    uses: "천식, 결핵성 기침, 후두염, 감기, 갱년기 장애, 어깨관절 통증, 목구멍이나 기관지에 생긴 질병 등의 질환에 적용합니다.",
    usesEn: "Asthma, tubercular cough, laryngitis, cold, climacteric disorders, shoulder joint pain, sore throat, and bronchial disorders.",
    muscles: [
      { num: 1, ko: "삼각근 전두", en: "Deltoid anterior head", x: 69.5, y: 23.9, anatomyImg: "assets/circuits/user_muscles/deltoid_anterior_head_v2.png" },
      { num: 2, ko: "상완이두근 장두", en: "Biceps long head", x: 69.5, y: 32.5, anatomyImg: "assets/circuits/user_muscles/biceps_long_head_v2.png" },
      { num: 3, ko: "상완요골근", en: "Brachioradialis", x: 67.5, y: 44.6, anatomyImg: "assets/circuits/user_muscles/brachioradialis_v2.png" },
      { num: 4, ko: "단무지 외전근", en: "Abductor pollicis brevis", x: 65.0, y: 55.4, anatomyImg: "assets/circuits/user_muscles/abductor_pollicis_brevis_v2.png" },
      { num: 5, ko: "극상근", en: "Supraspinatus", x: 26.2, y: 25.8, anatomyImg: "assets/circuits/user_muscles/supraspinatus_v2.png" }
    ],
    extraPoints: [
      { name: "LU 7 (전압 공급, 열결)", nameEn: "LU 7 (Voltage Supply, Lieque)", x: 66.2, y: 49.3, type: "supply", anatomyImg: "assets/circuits/user_muscles/brachioradialis_v2.png" },
      { name: "LU 8 (전압 체크, 경거)", nameEn: "LU 8 (Voltage Check, Jingqu)", x: 66.2, y: 52.8, type: "check", anatomyImg: "assets/circuits/user_muscles/abductor_pollicis_brevis_v2.png" }
    ]
  },
  {
    id: "large-intestine",
    order: 2,
    code: "LI",
    name: "대장 회로",
    en: "Large Intestine (LI) Circuit",
    page: 205,
    image: "assets/circuits/large-intestine.png",
    route: "식지 내측 → 상지 외측 전면 → 인중에서 교차 후 코 양측",
    routeEn: "Radial index finger → Anterolateral arm → Crossing under nose → Opposite alar nasalis",
    check: "LI 5",
    checkEn: "LI 5",
    supply: "LI 5",
    supplyEn: "LI 5",
    uses: "후두염, 치통, 코병, 눈병, 맹장염, 어깨결림, 비염, 안면마비, 축농증, 고혈압, 뇌일혈 등의 질환에 적용합니다.",
    usesEn: "Laryngitis, toothache, nasal diseases, eye disorders, appendicitis, shoulder stiffness, rhinitis, facial palsy, sinusitis, hypertension, and apoplexy.",
    muscles: [
      { num: 1, ko: "제1 배측골간근", en: "Dorsal interosseus 1st", x: 86.5, y: 48.5, anatomyImg: "assets/circuits/user_muscles/first_dorsal_interosseous_li.png" },
      { num: 2, ko: "장요측수근신근", en: "Extensor carpi radialis longus", x: 80.0, y: 42.0, anatomyImg: "assets/circuits/user_muscles/extensor_carpi_radialis_longus_li.png" },
      { num: 3, ko: "상완삼두근 내측두", en: "Triceps medial head", x: 70.0, y: 31.0, anatomyImg: "assets/circuits/user_muscles/triceps_medial_head_li.png" },
      { num: 4, ko: "극상근", en: "Supraspinatus", x: 44.5, y: 26.0, anatomyImg: "assets/circuits/user_muscles/supraspinatus_li_v2.png" },
      { num: 5, ko: "쇄골 골막", en: "Clavicle periosteum", x: 75.5, y: 20.0, anatomyImg: "assets/circuits/user_muscles/subclavius_clavicle_periosteum.png" },
      { num: 6, ko: "사각근", en: "Scalenus", x: 73.5, y: 17.5, anatomyImg: "assets/circuits/user_muscles/scalene_muscle_li.png" },
      { num: 7, ko: "악이복근", en: "Digastric", x: 74.5, y: 14.5, anatomyImg: "assets/circuits/user_muscles/digastric_muscle_li.png" },
      { num: 8, ko: "구각하제근", en: "Depressor anguli oris", x: 77.5, y: 14.5, anatomyImg: "assets/circuits/user_muscles/depressor_anguli_oris_li.png" },
      { num: 9, ko: "소관골근", en: "Zygomaticus minor", x: 74.5, y: 10.5, anatomyImg: "assets/circuits/user_muscles/zygomaticus_minor_li.png" }
    ],
    extraPoints: [
      { name: "LI 5 (양계, 전압 체크/공급)", nameEn: "LI 5 (Yangxi, Voltage Check/Supply)", x: 84.5, y: 46.5, type: "supply", anatomyImg: "assets/circuits/user_muscles/first_dorsal_interosseous_li.png" }
    ]
  },
  {
    id: "heart",
    order: 3,
    code: "HT",
    name: "심장 회로",
    en: "Heart (HT) Circuit",
    page: 206,
    image: "assets/circuits/heart.png",
    route: "겨드랑이 → 상지 내측 후면 → 소지 내측",
    routeEn: "Axilla → Posteromedial arm → Radial tip of little finger",
    check: "HT 7",
    checkEn: "HT 7",
    supply: "HT 5",
    supplyEn: "HT 5",
    uses: "심장병, 이명, 눈의 충혈, 천식, 피로회복, 심한 어깨 결림, 호흡장애, 팔꿈치통증, 신경쇠약, 고혈압 등의 질환에 적용합니다.",
    usesEn: "Heart conditions, tinnitus, ocular hyperemia, asthma, chronic fatigue, severe shoulder stiffness, dyspnea, elbow pain, neurasthenia, and hypertension.",
    muscles: [
      { num: 1, ko: "견갑하근", en: "Subscapularis", x: 68.5, y: 26.0, anatomyImg: "assets/circuits/user_muscles/subscapularis_heart.png" },
      { num: 2, ko: "소원근", en: "Teres minor", x: 33.0, y: 30.5, anatomyImg: "assets/circuits/user_muscles/teres_minor_heart.png" },
      { num: 3, ko: "상완삼두근 장두", en: "Triceps long head", x: 60.5, y: 25.0, anatomyImg: "assets/circuits/user_muscles/triceps_long_head_heart.png" },
      { num: 4, ko: "척측수근굴근", en: "Flexor carpi ulnaris", x: 46.0, y: 21.5, anatomyImg: "assets/circuits/user_muscles/flexor_carpi_ulnaris_heart.png" },
      { num: 5, ko: "소지외전근", en: "Abductor digiti minimi", x: 43.0, y: 8.0, anatomyImg: "assets/circuits/user_muscles/abductor_digiti_minimi_heart.png" }
    ],
    extraPoints: [
      { name: "HT 7 (전압 체크, 신문)", nameEn: "HT 7 (Shenmen, Voltage Check)", x: 43.0, y: 10.5, type: "check", anatomyImg: "assets/circuits/user_muscles/flexor_carpi_ulnaris_heart.png" },
      { name: "HT 5 (전압 공급, 통리)", nameEn: "HT 5 (Tongli, Voltage Supply)", x: 43.5, y: 12.5, type: "supply", anatomyImg: "assets/circuits/user_muscles/flexor_carpi_ulnaris_heart.png" }
    ]
  },
  {
    id: "small-intestine",
    order: 4,
    code: "SI",
    name: "소장 회로",
    en: "Small Intestine (SI) Circuit",
    page: 207,
    image: "assets/circuits/small-intestine.png",
    route: "소지 외측 → 상지 외측 후면 → 견갑부 → 목 → 귀 앞",
    routeEn: "Ulnar little finger → Posterolateral arm → Scapula → Neck → Anterior to ear",
    check: "SI 5",
    checkEn: "SI 5",
    supply: "SI 7",
    supplyEn: "SI 7",
    uses: "어깨 결림, 신경통, 오십견, 이명, 안압항진, 척골신경통, 변비, 목이 뻣뻣해지는 증상, 안면신경마비 등의 질환에 적용합니다.",
    usesEn: "Shoulder stiffness, neuralgia, frozen shoulder, tinnitus, ocular hypertension, ulnar neuralgia, constipation, stiff neck, and facial nerve palsy.",
    muscles: [
      { num: 1, ko: "척측수근신근", en: "Extensor carpi ulnaris", x: 85.5, y: 74.5, anatomyImg: "assets/circuits/user_muscles/extensor_carpi_ulnaris_si.png" },
      { num: 2, ko: "상완삼두근 외측두", en: "Triceps lateral head", x: 85.0, y: 53.0, anatomyImg: "assets/circuits/user_muscles/triceps_lateral_head_si.png" },
      { num: 3, ko: "극하근", en: "Infraspinatus", x: 81.0, y: 35.5, anatomyImg: "assets/circuits/user_muscles/infraspinatus_si.png" },
      { num: 4, ko: "극상근", en: "Supraspinatus", x: 79.5, y: 33.0, anatomyImg: "assets/circuits/user_muscles/supraspinatus_si.png" },
      { num: 5, ko: "능형근", en: "Rhomboids", x: 74.0, y: 33.0, anatomyImg: "assets/circuits/user_muscles/rhomboids_si.png" },
      { num: 6, ko: "견갑거근", en: "Levator scapulae", x: 74.0, y: 29.5, anatomyImg: "assets/circuits/user_muscles/levator_scapulae_si.png" },
      { num: 7, ko: "심부교근", en: "Deep masseter", x: 46.0, y: 15.5, anatomyImg: "assets/circuits/user_muscles/deep_masseter_si.png" },
      { num: 8, ko: "전이개근", en: "Auricular anterior", x: 46.0, y: 13.5, anatomyImg: "assets/circuits/user_muscles/anterior_auricular_si (1).png" },
      { num: 9, ko: "대관골근", en: "Zygomaticus major", x: 43.0, y: 15.0, anatomyImg: "assets/circuits/user_muscles/zygomaticus_major_si.png" },
      { num: 10, ko: "흉설골근", en: "Sternohyoid", x: 44.5, y: 20.5, anatomyImg: "assets/circuits/user_muscles/sternohyoid_si.png" },
      { num: 11, ko: "흉골근", en: "Sternalis", x: 44.5, y: 27.5, anatomyImg: "assets/circuits/user_muscles/sternalis_si.png" }
    ],
    extraPoints: [
      { name: "SI 7 (전압 공급, 지정)", nameEn: "SI 7 (Zhizheng, Voltage Supply)", x: 85.0, y: 70.5, type: "supply", anatomyImg: "assets/circuits/user_muscles/extensor_carpi_ulnaris_si.png" },
      { name: "SI 5 (전압 체크, 양곡)", nameEn: "SI 5 (Yanggu, Voltage Check)", x: 88.0, y: 82.5, type: "check", anatomyImg: "assets/circuits/user_muscles/extensor_carpi_ulnaris_si.png" }
    ]
  },
  {
    id: "spleen",
    order: 5,
    code: "SP",
    name: "비장 회로",
    en: "Spleen/Pancreas (SP) Circuit",
    page: 208,
    image: "assets/circuits/spleen.png",
    route: "족무지 내측 → 경골 내측 전면 → 대퇴 내측 전면 → 흉복부 → 겨드랑이",
    routeEn: "Medial big toe → Anteromedial lower leg → Anteromedial thigh → Abdomen/Chest → Axilla",
    check: "SP 5",
    checkEn: "SP 5",
    supply: "SP 4",
    supplyEn: "SP 4",
    uses: "위의 통증, 위하수, 각막, 눈꺼풀, 설사, 림프, 부종, 식중독, 췌장, 당뇨병, 심한 졸음, 장 질환, 변비, 늑간 신경통, 천식, 소아천식 등의 질환에 적용합니다.",
    usesEn: "Stomach pain, gastroptosis, corneal/eyelid issues, diarrhea, lymphedema, edema, food poisoning, pancreas, diabetes, lethargy, intestinal disorders, and intercostal neuralgia.",
    muscles: [
      { num: 1, ko: "무지외전근", en: "Abductor hallucis", x: 75.5, y: 90.0, anatomyImg: "assets/circuits/user_muscles/abductor_hallucis_spleen.png" },
      { num: 2, ko: "가자미근", en: "Soleus", x: 73.0, y: 79.5, anatomyImg: "assets/circuits/user_muscles/soleus_spleen.png" },
      { num: 3, ko: "봉공근", en: "Sartorius", x: 70.0, y: 64.0, anatomyImg: "assets/circuits/user_muscles/sartorius_spleen.png" },
      { num: 4, ko: "치골근", en: "Pectineus", x: 67.5, y: 55.0, anatomyImg: "assets/circuits/user_muscles/pectineus_spleen.png" },
      { num: 5, ko: "장요근", en: "Psoas", x: 64.5, y: 47.0, anatomyImg: "assets/circuits/user_muscles/iliopsoas_spleen.png" },
      { num: 6, ko: "광배근", en: "Latissimus dorsi", x: 26.5, y: 41.0, anatomyImg: "assets/circuits/user_muscles/latissimus_dorsi_spleen.png" },
      { num: 7, ko: "승모근 중·하부", en: "Trapezius middle/lower", x: 25.0, y: 32.5, anatomyImg: "assets/circuits/user_muscles/middle_lower_trapezius_spleen.png" }
    ],
    extraPoints: [
      { name: "SP 4 (전압 공급, 공손)", nameEn: "SP 4 (Gongsun, Voltage Supply)", x: 76.5, y: 91.5, type: "supply", anatomyImg: "assets/circuits/user_muscles/abductor_hallucis_spleen.png" },
      { name: "SP 5 (전압 체크, 상구)", nameEn: "SP 5 (Shangqiu, Voltage Check)", x: 75.0, y: 88.0, type: "check", anatomyImg: "assets/circuits/user_muscles/abductor_hallucis_spleen.png" }
    ]
  },
  {
    id: "stomach",
    order: 6,
    code: "ST",
    name: "위장 회로",
    en: "Stomach (ST) Circuit",
    page: 209,
    image: "assets/circuits/stomach.png",
    route: "눈 아래 → 입 주위 → 목 → 흉복부 → 하지 전면 외측 → 제2·3족지",
    routeEn: "Infraorbital area → Perioral → Neck → Chest/Abdomen → Anterolateral lower leg → 2nd/3rd toes",
    check: "ST 42",
    checkEn: "ST 42",
    supply: "ST 41",
    supplyEn: "ST 41",
    uses: "위 질환, 위산과다, 십이지장궤양, 위하수, 구안와사, 안면신경마비, 슬관절통, 고관절통, 두통, 치통, 안구통, 갑상선 질환 등의 질환에 적용합니다.",
    usesEn: "Stomach disorders, hyperacidity, duodenal ulcer, gastroptosis, facial paralysis (Bell's palsy), knee joint pain, hip joint pain, headache, toothache, and thyroid conditions.",
    muscles: [
      { num: 1, ko: "전경골근", en: "Tibialis anterior", x: 68.0, y: 78.5, anatomyImg: "assets/circuits/user_muscles/tibialis_anterior_stomach_v2.png" },
      { num: 2, ko: "장지신근", en: "Extensor digitorum longus", x: 69.5, y: 75.0, anatomyImg: "assets/circuits/user_muscles/extensor_digitorum_longus_stomach.png" },
      { num: 3, ko: "장모지신근", en: "Extensor hallucis longus", x: 68.5, y: 79.5, anatomyImg: "assets/circuits/user_muscles/extensor_hallucis_longus_stomach.png" },
      { num: 4, ko: "단모지신근", en: "Extensor hallucis brevis", x: 69.0, y: 82.0, anatomyImg: "assets/circuits/user_muscles/extensor_hallucis_brevis_stomach.png" },
      { num: 5, ko: "대퇴직근", en: "Rectus femoris", x: 67.0, y: 56.5, anatomyImg: "assets/circuits/user_muscles/rectus_femoris_stomach_v2.png" },
      { num: 6, ko: "대퇴사두근 (내/외측광근)", en: "Quadriceps (Vastus lateralis/medialis)", x: 67.0, y: 62.0, anatomyImg: "assets/circuits/user_muscles/quadriceps_vastus_stomach.png" },
      { num: 7, ko: "대흉근 쇄골두", en: "Pectoralis major clavicular", x: 68.5, y: 25.0, anatomyImg: "assets/circuits/user_muscles/pectoralis_major_clavicular_stomach.png" },
      { num: 8, ko: "복직근", en: "Rectus abdominis", x: 68.0, y: 38.0, anatomyImg: "assets/circuits/user_muscles/rectus_abdominis_stomach.png" },
      { num: 9, ko: "안륜근", en: "Orbicularis oculi", x: 26.5, y: 15.5, anatomyImg: "assets/circuits/user_muscles/orbicularis_oculi_stomach.png" },
      { num: 10, ko: "구륜근", en: "Orbicularis oris", x: 27.5, y: 20.0, anatomyImg: "assets/circuits/user_muscles/orbicularis_oris_stomach.png" },
      { num: 11, ko: "교근 (천층)", en: "Superficial masseter", x: 28.5, y: 18.0, anatomyImg: "assets/circuits/user_muscles/masseter_stomach.png" },
      { num: 12, ko: "측두근 전두부", en: "Temporalis anterior", x: 27.0, y: 13.0, anatomyImg: "assets/circuits/user_muscles/temporalis_anterior_stomach.png" }
    ],
    extraPoints: [
      { name: "ST 41 (전압 공급, 해계)", nameEn: "ST 41 (Jiexi, Voltage Supply)", x: 68.5, y: 81.0, type: "supply", anatomyImg: "assets/circuits/user_muscles/tibialis_anterior_stomach_v2.png" },
      { name: "ST 42 (전압 체크, 충양)", nameEn: "ST 42 (Chongyang, Voltage Check)", x: 68.5, y: 83.0, type: "check", anatomyImg: "assets/circuits/user_muscles/tibialis_anterior_stomach_v2.png" }
    ]
  },
  {
    id: "kidney",
    order: 7,
    code: "KI",
    name: "신장 회로",
    en: "Kidney (KI) Circuit",
    page: 210,
    image: "assets/circuits/kidney.png",
    route: "용천(발바닥) → 내과 후하방 → 하지 내측 후면 → 복부 정중선 외측 → 쇄골 하단",
    routeEn: "Plantar sole (KI 1) → Medial malleolus → Posteromedial leg/thigh → Para-midline abdomen → Subclavicular",
    check: "KI 3",
    checkEn: "KI 3",
    supply: "KI 7",
    supplyEn: "KI 7",
    uses: "신장병, 신우신염, 신장결석, 부종, 요통, 정력감퇴, 방광염, 요도염, 생리불순, 중이염, 이명, 인후통 등의 질환에 적용합니다.",
    usesEn: "Kidney disease, nephritis, kidney stones, edema, lumbago, asthenia, cystitis, urethritis, menstrual irregularity, otitis media, tinnitus, and throat pain.",
    muscles: [
      { num: 1, ko: "단지굴근", en: "Flexor digitorum brevis", x: 74.0, y: 92.5, anatomyImg: "assets/circuits/user_muscles/flexor_digitorum_brevis_kidney.png" },
      { num: 2, ko: "족저근막", en: "Plantar fascia", x: 73.0, y: 91.0, anatomyImg: "assets/circuits/user_muscles/plantar_fascia_kidney.png" },
      { num: 3, ko: "박근", en: "Gracilis", x: 67.5, y: 64.0, anatomyImg: "assets/circuits/user_muscles/gracilis_kidney.png" },
      { num: 4, ko: "복횡근", en: "Transversus abdominis", x: 68.0, y: 44.0, anatomyImg: "assets/circuits/user_muscles/transverse_abdominis_kidney.png" },
      { num: 5, ko: "장요근 (신장 배터리)", en: "Psoas major", x: 66.0, y: 48.0, anatomyImg: "assets/circuits/user_muscles/iliopsoas_kidney.png" },
      { num: 6, ko: "외늑간근 / 내늑간근", en: "Intercostales externi/interni", x: 68.5, y: 34.0, anatomyImg: "assets/circuits/user_muscles/intercostal_muscles_kidney.png" },
      { num: 7, ko: "상인두수축근", en: "Superior pharyngeal constrictor", x: 27.5, y: 22.0, anatomyImg: "assets/circuits/user_muscles/superior_pharyngeal_constrictor_kidney.png" }
    ],
    extraPoints: [
      { name: "KI 7 (전압 공급, 복류)", nameEn: "KI 7 (Fuliu, Voltage Supply)", x: 73.0, y: 84.0, type: "supply", anatomyImg: "assets/circuits/user_muscles/flexor_digitorum_brevis_kidney.png" },
      { name: "KI 3 (전압 체크, 태계)", nameEn: "KI 3 (Taixi, Voltage Check)", x: 73.5, y: 86.5, type: "check", anatomyImg: "assets/circuits/user_muscles/flexor_digitorum_brevis_kidney.png" }
    ]
  },
  {
    id: "bladder",
    order: 8,
    code: "BL",
    name: "방광 회로",
    en: "Bladder (BL) Circuit",
    page: 211,
    image: "assets/circuits/bladder.png",
    route: "정명(눈 안쪽) → 머리·목덜미 → 척추 양측(방광경) → 하지 후면 중앙 → 제5족지 외측(지음)",
    routeEn: "Inner canthus → Forehead/Vertex → Occiput → Paraspinal back/sacrum → Posterior thigh/calf → Lateral little toe",
    check: "BL 65",
    checkEn: "BL 65",
    supply: "BL 67",
    supplyEn: "BL 67",
    uses: "자율신경실조증, 삼차신경통, 두통, 눈의 피로, 좌골신경통, 요통, 치질, 방광 질환, 등 통증, 다리 뒷면 당김 등의 질환에 적용합니다.",
    usesEn: "Autonomic dystonia, trigeminal neuralgia, headache, eye strain, sciatica, lumbago, hemorrhoids, bladder disease, back pain, and posterior leg stiffness.",
    muscles: [
      { num: 1, ko: "단소지외전근 / 족저근", en: "Abductor digiti minimi pedis", x: 80.5, y: 87.0, anatomyImg: "assets/circuits/user_muscles/abductor_digiti_minimi_plantaris_bladder (1).png" },
      { num: 2, ko: "아킬레스건 복합체", en: "Achilles tendon complex", x: 79.5, y: 80.0, anatomyImg: "assets/circuits/user_muscles/achilles_tendon_bladder.png" },
      { num: 3, ko: "비복근 내·외측두", en: "Gastrocnemius", x: 78.5, y: 70.0, anatomyImg: "assets/circuits/user_muscles/gastrocnemius_bladder (1).png" },
      { num: 4, ko: "햄스트링 (반건양근/대퇴이두근)", en: "Hamstrings (Semitendinosus/Biceps)", x: 77.0, y: 55.0, anatomyImg: "assets/circuits/user_muscles/hamstrings_bladder (1).png" },
      { num: 5, ko: "천결절인대 / 이상근", en: "Sacrotuberous ligament / Piriformis", x: 76.0, y: 44.0, anatomyImg: "assets/circuits/user_muscles/piriformis_sacrotuberous_bladder.png" },
      { num: 6, ko: "척주기립근 (최장근/장늑근)", en: "Erector spinae (Longissimus/Iliocostalis)", x: 76.5, y: 32.0, anatomyImg: "assets/circuits/user_muscles/erector_spinae_bladder.png" },
      { num: 7, ko: "다열근 / 회선근", en: "Multifidus / Rotatores", x: 75.5, y: 35.0, anatomyImg: "assets/circuits/user_muscles/multifidus_rotatores_bladder (1).png" },
      { num: 8, ko: "후두하근군", en: "Suboccipital muscles", x: 75.0, y: 15.0, anatomyImg: "assets/circuits/user_muscles/suboccipital_muscles_bladder (1).png" }
    ],
    extraPoints: [
      { name: "BL 67 (전압 공급, 지음)", nameEn: "BL 67 (Zhiyin, Voltage Supply)", x: 81.5, y: 89.0, type: "supply", anatomyImg: "assets/circuits/user_muscles/abductor_digiti_minimi_plantaris_bladder (1).png" },
      { name: "BL 65 (전압 체크, 속골)", nameEn: "BL 65 (Shugu, Voltage Check)", x: 80.0, y: 86.0, type: "check", anatomyImg: "assets/circuits/user_muscles/abductor_digiti_minimi_plantaris_bladder (1).png" }
    ]
  },
  {
    id: "liver",
    order: 9,
    code: "LR",
    name: "간 회로",
    en: "Liver (LR) Circuit",
    page: 212,
    image: "assets/circuits/liver.png",
    route: "대돈(족무지 외측) → 족배·하지 내측 전후면 → 음부·복부 → 기문(유두 직하 제6늑간)",
    routeEn: "Lateral big toe (LR 1) → Dorsum of foot → Medial calf/thigh → Genitals/Groin → Hypochondrium",
    check: "LR 3",
    checkEn: "LR 3",
    supply: "LR 8",
    supplyEn: "LR 8",
    uses: "간 질환, 만성피로, 야맹증, 안구충혈, 녹내장, 근육경련 및 쥐, 현기증, 고혈압, 늑간신경통, 우울증, 부인과 질환 등의 질환에 적용합니다.",
    usesEn: "Liver disease, chronic fatigue, night blindness, eye congestion/glaucoma, muscle cramps, dizziness, hypertension, rib pain, depression, and female pelvic conditions.",
    muscles: [
      { num: 1, ko: "장·단비골근", en: "Fibularis longus/brevis", x: 73.0, y: 83.0, anatomyImg: "assets/circuits/user_muscles/tibialis_posterior_liver.png" },
      { num: 2, ko: "후경골근 / 장모지굴근", en: "Tibialis posterior / Flexor hallucis", x: 72.0, y: 77.0, anatomyImg: "assets/circuits/user_muscles/flexor_hallucis_longus_liver.png" },
      { num: 3, ko: "장·단내전근 / 대내전근", en: "Adductor longus / magnus", x: 69.0, y: 56.0, anatomyImg: "assets/circuits/user_muscles/adductor_magnus_liver.png" },
      { num: 4, ko: "대요근 / 장골근", en: "Psoas major / Iliacus", x: 67.5, y: 47.0, anatomyImg: "assets/circuits/user_muscles/psoas_major_liver.png" },
      { num: 5, ko: "횡격막", en: "Diaphragm", x: 68.0, y: 35.0, anatomyImg: "assets/circuits/user_muscles/diaphragm_liver.png" },
      { num: 6, ko: "설골상근군 (악설골근/이설골근)", en: "Suprahyoid muscles", x: 69.0, y: 19.0, anatomyImg: "assets/circuits/user_muscles/hyoid_muscles_liver.png" }
    ],
    extraPoints: [
      { name: "LR 8 (전압 공급, 곡천)", nameEn: "LR 8 (Ququan, Voltage Supply)", x: 70.0, y: 67.0, type: "supply", anatomyImg: "assets/circuits/user_muscles/flexor_hallucis_longus_liver.png" },
      { name: "LR 3 (전압 체크, 태충)", nameEn: "LR 3 (Taichong, Voltage Check)", x: 73.5, y: 88.0, type: "check", anatomyImg: "assets/circuits/user_muscles/tibialis_posterior_liver.png" }
    ]
  },
  {
    id: "gallbladder",
    order: 10,
    code: "GB",
    name: "담낭 회로",
    en: "Gallbladder (GB) Circuit",
    page: 213,
    image: "assets/circuits/gallbladder.png",
    route: "동자료(눈꼬리) → 측두부·귀 뒤 → 어깨·옆구리 → 하지 외측 전면 → 제4족지 외측(족규음)",
    routeEn: "Outer canthus → Temporal head → Postauricular → Lateral torso/hip → Lateral leg/fibula → 4th toe",
    check: "GB 40",
    checkEn: "GB 40",
    supply: "GB 43",
    supplyEn: "GB 43",
    uses: "편두통, 측두통, 늑간신경통, 어지럼증, 안구건조통, 좌골신경통, 고관절통, 담석증, 간담도 질환, 이명, 하지 외측 통증 등의 질환에 적용합니다.",
    usesEn: "Migraine, headache, lateral rib pain, dizziness, eye pain, sciatica, hip joint pain, gallstones, liver/biliary disorders, tinnitus, and lateral leg neuralgia.",
    muscles: [
      { num: 1, ko: "제3비골근 / 장·단비골근", en: "Fibularis tertius / brevis", x: 80.5, y: 82.0, anatomyImg: "assets/circuits/user_muscles/fibularis_longus_gallbladder.png" },
      { num: 2, ko: "대퇴근막장근 (TFL)", en: "Tensor fasciae latae", x: 77.0, y: 49.0, anatomyImg: "assets/circuits/user_muscles/tensor_fasciae_latae_gallbladder.png" },
      { num: 3, ko: "장경인대 (IT Band)", en: "Iliotibial tract", x: 78.5, y: 60.0, anatomyImg: "assets/circuits/user_muscles/iliotibial_tract_gallbladder.png" },
      { num: 4, ko: "요방형근 / 외복사근", en: "External oblique / QL", x: 76.0, y: 40.0, anatomyImg: "assets/circuits/user_muscles/external_oblique_gallbladder.png" },
      { num: 5, ko: "전거근 / 늑간근", en: "Intercostal muscles", x: 76.0, y: 31.0, anatomyImg: "assets/circuits/user_muscles/intercostal_muscles_gallbladder.png" },
      { num: 6, ko: "두판상근 / 후두하근", en: "Splenius capitis / Suboccipitals", x: 76.0, y: 17.0, anatomyImg: "assets/circuits/user_muscles/splenius_capitis_gallbladder.png" },
      { num: 7, ko: "측두근 (중·후부)", en: "Temporalis (Middle/Posterior)", x: 76.5, y: 11.0, anatomyImg: "assets/circuits/user_muscles/temporalis_gallbladder.png" }
    ],
    extraPoints: [
      { name: "GB 43 (전압 공급, 협계)", nameEn: "GB 43 (Xiaxi, Voltage Supply)", x: 80.5, y: 89.0, type: "supply", anatomyImg: "assets/circuits/user_muscles/fibularis_longus_gallbladder.png" },
      { name: "GB 40 (전압 체크, 구허)", nameEn: "GB 40 (Qiuxu, Voltage Check)", x: 79.5, y: 85.5, type: "check", anatomyImg: "assets/circuits/user_muscles/fibularis_longus_gallbladder.png" }
    ]
  },
  {
    id: "pericardium",
    order: 11,
    code: "PC",
    name: "심포 회로",
    en: "Pericardium (PC) Circuit",
    page: 214,
    image: "assets/circuits/pericardium.png",
    route: "흉부 외측(천지) → 상지 내측 중앙선 → 수장 중심(노궁) → 중지 끝(중충)",
    routeEn: "Lateral chest → Center of medial arm → Palm center → Tip of middle finger",
    check: "PC 7",
    checkEn: "PC 7",
    supply: "PC 9",
    supplyEn: "PC 9",
    uses: "협심증, 심장 질환, 가슴 답답함, 심계항진, 자율신경실조증, 불면증, 멀미, 손목터널증후군, 손바닥 열감, 고열 등의 질환에 적용합니다.",
    usesEn: "Angina, heart disease, chest tightness, palpitations, autonomic neuropathy, insomnia, travel sickness, wrist pain, carpal tunnel, and high fever.",
    muscles: [
      { num: 1, ko: "장장근", en: "Palmaris longus", x: 81.0, y: 72.0, anatomyImg: "assets/circuits/user_muscles/palmaris_longus_pericardium.png" },
      { num: 2, ko: "천지굴근 / 요측수근굴근", en: "Flexor digitorum superficialis", x: 79.5, y: 64.0, anatomyImg: "assets/circuits/user_muscles/flexor_digitorum_superficialis_pericardium.png" },
      { num: 3, ko: "상완이두근 단두", en: "Biceps short head", x: 75.0, y: 44.0, anatomyImg: "assets/circuits/user_muscles/biceps_short_head_pericardium.png" },
      { num: 4, ko: "소흉근", en: "Pectoralis minor", x: 70.0, y: 28.0, anatomyImg: "assets/circuits/user_muscles/pectoralis_minor_pericardium.png" },
      { num: 5, ko: "흉쇄유돌근 (SCM)", en: "Sternocleidomastoid", x: 71.0, y: 18.0, anatomyImg: "assets/circuits/user_muscles/sternocleidomastoid_pericardium.png" }
    ],
    extraPoints: [
      { name: "PC 9 (전압 공급, 중충)", nameEn: "PC 9 (Zhongchong, Voltage Supply)", x: 82.5, y: 88.0, type: "supply", anatomyImg: "assets/circuits/user_muscles/palmaris_longus_pericardium.png" },
      { name: "PC 7 (전압 체크, 대릉)", nameEn: "PC 7 (Daling, Voltage Check)", x: 81.5, y: 78.0, type: "check", anatomyImg: "assets/circuits/user_muscles/palmaris_longus_pericardium.png" }
    ]
  },
  {
    id: "triple-burner",
    order: 12,
    code: "TE",
    name: "삼초 회로",
    en: "Triple Energizer (TE) Circuit",
    page: 215,
    image: "assets/circuits/triple-burner.png",
    route: "약지 외측(관충) → 수배·상지 외측 중앙 → 어깨·목 → 귀 뒤를 돌아 관자놀이(사죽공)",
    routeEn: "Ulnar ring finger → Dorsum of hand/arm → Shoulder → Neck → Encircling ear → Lateral brow",
    check: "TE 4",
    checkEn: "TE 4",
    supply: "TE 3",
    supplyEn: "TE 3",
    uses: "이명, 난청, 편두통, 견비통, 인후종통, 림프부종, 오한발열, 면역저하, 체온조절장애, 감각신경통 등의 질환에 적용합니다.",
    usesEn: "Tinnitus, hearing loss, migraine, shoulder/arm pain, throat swelling, edema, chills and fever, lymphatic congestion, and sensory neuralgia.",
    muscles: [
      { num: 1, ko: "지신근", en: "Extensor digitorum", x: 83.5, y: 72.0, anatomyImg: "assets/circuits/user_muscles/extensor_digitorum_tb.png" },
      { num: 2, ko: "삼두근 외측두", en: "Triceps lateral head", x: 82.0, y: 52.0, anatomyImg: "assets/circuits/user_muscles/triceps_lateral_head_tb.png" },
      { num: 3, ko: "삼각근 중앙두", en: "Deltoid middle head", x: 79.0, y: 35.0, anatomyImg: "assets/circuits/user_muscles/deltoid_middle_head_tb.png" },
      { num: 4, ko: "승모근", en: "Trapezius", x: 73.0, y: 28.0, anatomyImg: "assets/circuits/user_muscles/trapezius_tb.png" },
      { num: 5, ko: "견갑거근", en: "Levator scapulae", x: 73.0, y: 24.0, anatomyImg: "assets/circuits/user_muscles/levator_scapulae_tb.png" },
      { num: 6, ko: "판상근", en: "Splenius", x: 73.0, y: 20.0, anatomyImg: "assets/circuits/user_muscles/splenius_tb.png" },
      { num: 7, ko: "상이개근", en: "Auricularis superior", x: 74.0, y: 13.0, anatomyImg: "assets/circuits/user_muscles/superior_auricular_tb.png" },
      { num: 8, ko: "전이개근", en: "Auricularis anterior", x: 75.0, y: 15.0, anatomyImg: "assets/circuits/user_muscles/anterior_auricular_tb.png" },
      { num: 9, ko: "비근근", en: "Procerus", x: 75.5, y: 16.0, anatomyImg: "assets/circuits/user_muscles/procerus_nasalis_tb.png" }
    ],
    extraPoints: [
      { name: "TE 3 (전압 공급, 중저)", nameEn: "TE 3 (Zhongzhu, Voltage Supply)", x: 84.5, y: 84.0, type: "supply", anatomyImg: "assets/circuits/user_muscles/extensor_digitorum_tb.png" },
      { name: "TE 4 (전압 체크, 양지)", nameEn: "TE 4 (Yangchi, Voltage Check)", x: 84.0, y: 78.0, type: "check", anatomyImg: "assets/circuits/user_muscles/extensor_digitorum_tb.png" }
    ]
  },
  {
    id: "conception-vessel",
    order: 13,
    code: "CV",
    name: "임맥 회로",
    en: "Conception Vessel (CV) Circuit",
    page: 216,
    image: "assets/circuits/conception-vessel.png",
    route: "회음(생식기와 항문 사이) → 복부 정중선 → 흉골 정중선 → 목·턱 아래(승장)",
    routeEn: "Perineum (CV 1) → Anterior midline of abdomen and chest → Throat → Chin/Inferior lip",
    check: "책에 별도 표기 없음",
    checkEn: "Not separately noted",
    supply: "책에 별도 표기 없음",
    supplyEn: "Not separately noted",
    usesTitle: "책에 기재된 설명",
    uses: "임맥(CV)은 인체의 음(Yin) 에너지를 총괄하는 회로로서 회음에서 시작해 복부와 가슴의 정중선을 따라 올라가 턱 아래 승장혈에 이릅니다. 모든 음경맥의 바다(음맥지해) 역할을 수행합니다.",
    usesEn: "Conception Vessel oversees all Yin energy circuits. It flows along the anterior midline of the trunk up to the chin, regulating digestive, reproductive, urogenital, respiratory, and autonomic vitality.",
    muscles: [
      { num: 27, ko: "교감신경 이마 연계", en: "Sympathetic Frontal Branch", x: 49.0, y: 11.5, anatomyImg: "assets/circuits/anatomy/cv_energy_circuit.jpg" },
      { num: 2, ko: "안면 신경 혈관 연계", en: "Facial Vascular Terminal", x: 48.0, y: 15.5, anatomyImg: "assets/circuits/anatomy/cv_energy_circuit.jpg" },
      { num: 12, ko: "대장 회로 연계 (3rd 늑골 공간)", en: "Large Intestine (3rd ICS)", x: 48.0, y: 24.5, anatomyImg: "assets/circuits/anatomy/cv_energy_circuit.jpg" },
      { num: 13, ko: "소장 회로 연계 (흉골 하단)", en: "Small Intestine Reflex", x: 48.5, y: 28.5, anatomyImg: "assets/circuits/anatomy/cv_energy_circuit.jpg" },
      { num: 14, ko: "간·담낭 회로 연계 (6~7 늑골 공간)", en: "Liver / Gall Bladder (6~7th ICS)", x: 48.5, y: 33.0, anatomyImg: "assets/circuits/anatomy/cv_energy_circuit.jpg" },
      { num: 0, ko: "위장 회로 연계 (태양총 중완)", en: "Stomach / Solar Plexus", x: 49.0, y: 40.5, anatomyImg: "assets/circuits/anatomy/cv_energy_circuit.jpg" },
      { num: 15, ko: "방광 회로 연계 (단전/관원)", en: "Bladder / Dantian (CV 4)", x: 48.5, y: 49.0, anatomyImg: "assets/circuits/anatomy/cv_energy_circuit.jpg" },
      { num: 1, ko: "회음/골반저 연계", en: "Perineal Pelvic Ground", x: 59.5, y: 73.0, anatomyImg: "assets/circuits/anatomy/cv_energy_circuit.jpg" },
      { num: 5, ko: "족부 접지 단자 (5/6/7)", en: "Foot Ground Terminals", x: 61.5, y: 94.0, anatomyImg: "assets/circuits/anatomy/cv_energy_circuit.jpg" },
      { num: 17, ko: "상지 말초 순환 단자 (17/18/19)", en: "Upper Extremity Terminals", x: 67.5, y: 48.0, anatomyImg: "assets/circuits/anatomy/cv_energy_circuit.jpg" }
    ],
    extraPoints: []
  },
  {
    id: "governor-vessel",
    order: 14,
    code: "GV",
    name: "독맥 회로",
    en: "Governing Vessel (GV) Circuit",
    page: 217,
    image: "assets/circuits/governor-vessel.png",
    route: "회음(미골) → 척추 속 → 풍부(목덜미) → 뇌로 들어간 후 정수리를 넘어 윗입술 안쪽",
    routeEn: "Coccyx/Perineum (GV 1) → Spinal canal → Occiput (GV 16) → Brain → Vertex → Forehead/Nose → Superior gingiva",
    check: "책에 별도 표기 없음",
    checkEn: "Not separately noted",
    supply: "책에 별도 표기 없음",
    supplyEn: "Not separately noted",
    usesTitle: "책에 기재된 설명",
    uses: "독맥(GV)은 미골 끝 장강혈에서 시작하여 척추 안을 따라 위로 올라가 풍부혈에 이르러 뇌 속으로 들어가고, 다시 정수리로 올라가 이마와 콧마루를 거쳐 윗입술 안쪽 잇몸에서 끝납니다. 인체의 플러스(양) 에너지를 총괄합니다.",
    usesEn: "Governor Vessel commands all Yang energy circuits and the spine/brain axis. It originates at the coccyx, traverses the spinal canal into the brain, and terminates at the upper gingiva, governing vital spinal energy.",
    muscles: [
      { num: 4, ko: "C-1 경추 1번 (담낭 연계)", en: "C-1 Atlas (Gall Bladder)", x: 50.5, y: 18.5, anatomyImg: "assets/circuits/anatomy/gv_spinal_battery.jpg" },
      { num: 0, ko: "부교감신경 연두부", en: "Parasympathetic Nucleus", x: 47.5, y: 21.0, anatomyImg: "assets/circuits/anatomy/gv_spinal_battery.jpg" },
      { num: 3, ko: "C-7 경추 7번 대추혈 (폐 연계)", en: "C-7 Vertebra Prominens (Lung)", x: 50.5, y: 24.5, anatomyImg: "assets/circuits/anatomy/gv_spinal_battery.jpg" },
      { num: 9, ko: "T-5 흉추 5번 신수배선 (심장 연계)", en: "T-5 Thoracic (Heart Battery)", x: 50.5, y: 28.5, anatomyImg: "assets/circuits/anatomy/gv_spinal_battery.jpg" },
      { num: 23, ko: "T-11 흉추 11번 (비장 연계)", en: "T-11 Thoracic (Spleen Battery)", x: 50.5, y: 39.5, anatomyImg: "assets/circuits/anatomy/gv_spinal_battery.jpg" },
      { num: 2, ko: "L-2 요추 2번 명문혈 (신장 연계)", en: "L-2 Lumbar (Kidney Battery)", x: 50.5, y: 47.5, anatomyImg: "assets/circuits/anatomy/gv_spinal_battery.jpg" },
      { num: 25, ko: "미골 장강혈 (원초 에너지)", en: "Coccyx / Sacrum (GV 1)", x: 50.5, y: 58.5, anatomyImg: "assets/circuits/anatomy/gv_spinal_battery.jpg" },
      { num: 8, ko: "하지 척추신경 연계", en: "Lower Extremity Spine Reflex", x: 43.5, y: 76.5, anatomyImg: "assets/circuits/anatomy/gv_spinal_battery.jpg" },
      { num: 16, ko: "족부 종골 접지 단자 (16/24)", en: "Calcaneal Ground Battery", x: 42.5, y: 98.0, anatomyImg: "assets/circuits/anatomy/gv_spinal_battery.jpg" }
    ],
    extraPoints: []
  }
];

const $ = (id) => document.getElementById(id);

let selected = 0;
let filtered = [...CIRCUITS];
let activeMuscleIndex = null;
let currentSiteLang = localStorage.getItem("novacell_site_lang") || "ko";

function isEn() {
  return currentSiteLang === "en";
}

function renderList() {
  const list = $("circuit-list");
  if (!list) return;
  list.innerHTML = "";

  if (filtered.length === 0) {
    const empty = document.createElement("div");
    empty.className = "empty-search";
    empty.textContent = isEn() ? "No circuits found." : "검색 결과가 없습니다.";
    list.appendChild(empty);
    return;
  }

  filtered.forEach((circuit) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "circuit-item";
    button.setAttribute("role", "option");
    button.dataset.circuit = circuit.order.toString().padStart(2, "0");
    const isSelected = CIRCUITS[selected]?.id === circuit.id;
    button.setAttribute("aria-selected", isSelected ? "true" : "false");
    if (isSelected) button.classList.add("active");

    const primaryName = isEn() ? circuit.en : circuit.name;
    const secondaryName = isEn() ? circuit.name : circuit.en;

    button.innerHTML = `
      <span class="circuit-order">${circuit.order.toString().padStart(2, "0")}</span>
      <span class="circuit-name-group">
        <strong>${primaryName}</strong>
        <small>${secondaryName}</small>
      </span>
      <span class="circuit-code">${circuit.code}</span>
    `;

    button.addEventListener("click", () => {
      selectById(circuit.id);
    });

    list.appendChild(button);
  });
}

function isNoHoverCircuit(c) {
  if (!c) return false;
  return (c.id === "conception-vessel" || c.id === "governor-vessel" || c.order === 13 || c.order === 14);
}

function alignFigureWithMuscle(item) {
  const figureCol = document.getElementById("detail-figure-col") || document.getElementById("circuit-figure-card");
  const detailGrid = document.querySelector(".detail-grid");
  if (!figureCol || !detailGrid) return;

  if (window.innerWidth <= 1024) {
    figureCol.style.transform = "none";
    return;
  }

  const gridRect = detailGrid.getBoundingClientRect();
  const itemRect = item.getBoundingClientRect();

  const targetTop = itemRect.top - gridRect.top;
  const maxShift = Math.max(0, detailGrid.offsetHeight - figureCol.offsetHeight - 24);
  const shift = Math.max(0, Math.min(targetTop - 20, maxShift));

  figureCol.style.transition = "transform 0.35s cubic-bezier(0.2, 0.8, 0.2, 1)";
  figureCol.style.transform = `translateY(${shift}px)`;
}

function resetFigureAlignment() {
  const figureCol = document.getElementById("detail-figure-col") || document.getElementById("circuit-figure-card");
  if (figureCol) {
    figureCol.style.transition = "transform 0.3s ease";
    figureCol.style.transform = "none";
  }
}

function renderMuscles(circuit) {
  const container = $("circuit-muscles");
  if (!container) return;

  container.innerHTML = "";
  const countBadge = $("muscle-count-badge");
  if (countBadge) {
    countBadge.textContent = isEn() ? `${circuit.muscles.length} Muscles` : `${circuit.muscles.length}개 근육`;
  }

  const noHover = isNoHoverCircuit(circuit);

  circuit.muscles.forEach((muscle, index) => {
    const item = document.createElement("div");
    item.className = "muscle-item" + (noHover ? " no-hover" : "");
    item.dataset.index = index;
    item.dataset.num = muscle.num;

    const mainM = isEn() ? muscle.en : muscle.ko;
    const subM = isEn() ? muscle.ko : muscle.en;

    item.innerHTML = `
      <span class="muscle-num">${muscle.num}</span>
      <div class="muscle-name-group">
        <strong class="muscle-ko">${mainM}</strong>
        <span class="muscle-en">${subM}</span>
      </div>
    `;

    if (!noHover) {
      item.addEventListener("mouseenter", () => {
        highlightMuscle(index, true);
        showFixedAnatomy(muscle, circuit);
        alignFigureWithMuscle(item);
      });

      item.addEventListener("mouseleave", () => {
        highlightMuscle(index, false);
      });

      item.addEventListener("click", () => {
        highlightMuscle(index, true);
        showFixedAnatomy(muscle, circuit);
        alignFigureWithMuscle(item);
      });
    }

    container.appendChild(item);
  });

  container.addEventListener("mouseleave", () => {
    if (!noHover) {
      resetFigureAlignment();
    }
  });
}

function showFixedAnatomy(muscle, circuit) {
  if (!circuit || isNoHoverCircuit(circuit)) return;

  const card = $("fixed-anatomy-card");
  if (!card) return;
  card.style.display = "block";

  const badge = $("fixed-anatomy-badge");
  const title = $("fixed-anatomy-title");
  const en = $("fixed-anatomy-en");
  const img = $("fixed-anatomy-img");
  const placeholder = $("fixed-anatomy-placeholder");

  const cName = isEn() ? circuit.en : circuit.name;
  if (badge) badge.textContent = isEn() ? `[${muscle.num}] ${cName} Battery` : `[${muscle.num}] ${circuit.name} 배터리`;
  if (title) title.textContent = isEn() ? muscle.en : muscle.ko;
  if (en) en.textContent = isEn() ? muscle.ko : muscle.en;

  if (img && muscle.anatomyImg) {
    img.src = muscle.anatomyImg;
    img.alt = `${muscle.ko} 3D 도해`;
    img.style.display = "block";
    if (placeholder) placeholder.style.display = "none";
  }
}

function resetFixedAnatomy(circuit) {
  const card = $("fixed-anatomy-card");
  if (!card) return;

  if (isNoHoverCircuit(circuit)) {
    card.style.display = "none";
    return;
  }

  card.style.display = "block";
  if (circuit.muscles && circuit.muscles.length > 0) {
    showFixedAnatomy(circuit.muscles[0], circuit);
  }
}

function highlightMuscle(index, active) {
  activeMuscleIndex = active ? index : null;

  document.querySelectorAll(".muscle-item:not(.no-hover)").forEach((el) => {
    const elIdx = parseInt(el.dataset.index, 10);
    el.classList.toggle("active", active && elIdx === index);
  });
}

function renderDetail(circuit) {
  if (!circuit) return;

  $("circuit-sequence").textContent = `${circuit.order.toString().padStart(2, "0")} / 14`;
  $("circuit-title").textContent = isEn() ? circuit.en : circuit.name;
  $("circuit-title-en").textContent = isEn() ? circuit.name : circuit.en;
  $("source-page").textContent = isEn() ? `Book Page ${circuit.page}` : `책 ${circuit.page}쪽`;
  $("circuit-route").textContent = isEn() ? (circuit.routeEn || circuit.route) : circuit.route;
  $("circuit-check").textContent = isEn() ? (circuit.checkEn || circuit.check) : circuit.check;
  $("circuit-supply").textContent = isEn() ? (circuit.supplyEn || circuit.supply) : circuit.supply;

  const usesTitle = $("circuit-uses-title");
  if (usesTitle) {
    if (circuit.usesTitle) {
      usesTitle.textContent = isEn() ? "Description in Book" : circuit.usesTitle;
    } else {
      usesTitle.textContent = isEn() ? "Indications & Applied Conditions" : "책에 기재된 적용 질환";
    }
  }
  $("circuit-uses").textContent = isEn() ? (circuit.usesEn || circuit.uses) : circuit.uses;

  const img = $("circuit-image");
  if (img) {
    img.src = circuit.image;
    img.alt = `${circuit.name} AI Model Guide`;
  }

  const caption = $("circuit-caption");
  if (caption) {
    if (isEn()) {
      caption.textContent = `『NovaCell Master Therapy』 Page ${circuit.page} · ${circuit.en} · Check: ${circuit.checkEn || circuit.check} · Supply: ${circuit.supplyEn || circuit.supply}`;
    } else {
      caption.textContent = `『노바셀 통치 요법』 ${circuit.page}쪽 관련 도해 · ${circuit.name} · 체크 ${circuit.check} · 공급 ${circuit.supply}`;
    }
  }

  // Update Clinical Protocol Guide steps dynamically for active circuit
  const protoCheck = $("proto-step-check-title");
  const protoCheckDesc = $("proto-step-check-desc");
  const protoSupply = $("proto-step-supply-title");
  const protoSupplyDesc = $("proto-step-supply-desc");
  const protoMuscle = $("proto-step-muscle-title");
  const protoMuscleDesc = $("proto-step-muscle-desc");

  const checkPt = isEn() ? (circuit.checkEn || circuit.check) : circuit.check;
  const supplyPt = isEn() ? (circuit.supplyEn || circuit.supply) : circuit.supply;
  const mCount = circuit.muscles ? circuit.muscles.length : 0;
  const mFirst = (circuit.muscles && circuit.muscles.length > 0)
    ? (isEn() ? circuit.muscles[0].en : circuit.muscles[0].ko)
    : (isEn() ? "Muscle Batteries" : "배터리 근육");

  if (protoCheck) {
    protoCheck.textContent = isEn() ? `${checkPt} Voltage Check (25~30s)` : `${checkPt} 전압 체크 (25~30초)`;
  }
  if (protoCheckDesc) {
    protoCheckDesc.textContent = isEn()
      ? `Apply probe perpendicularly to the Voltage Check Point (${checkPt}) for 25-30s to evaluate segmental voltage and stabilize central nervous excitation.`
      : `펜 도자를 해당 회로의 전압 체크 포인트(${checkPt})에 25~30초간 직각으로 안착하여 분절 회로의 전압 상태를 확인하고 중추 흥분을 안정화합니다.`;
  }
  if (protoSupply) {
    protoSupply.textContent = isEn() ? `${supplyPt} Voltage Supply & 528Hz Timer (3~5m)` : `${supplyPt} 전압 공급 & 528Hz 타이머 (3~5분)`;
  }
  if (protoSupplyDesc) {
    protoSupplyDesc.textContent = isEn()
      ? `Place the probe firmly on the Voltage Supply Point (${supplyPt}) and run the 528Hz timer (3-5 min) to recharge cell membrane potential and boost ATP.`
      : `전압 공급 포인트(${supplyPt})에 도자를 수직으로 밀착하고 528Hz 치유 타이머(3~5분)를 가동하여 세포막 전위를 충전하고 ATP 생성을 극대화합니다.`;
  }
  if (protoMuscle) {
    protoMuscle.textContent = isEn()
      ? `${mFirst} & ${Math.max(0, mCount - 1)} Muscle Batteries Sequential Therapy`
      : `${mFirst} 외 ${Math.max(0, mCount - 1)}개 근육 배터리 순차 시술`;
  }
  if (protoMuscleDesc) {
    protoMuscleDesc.textContent = isEn()
      ? `Apply microcurrent sequentially to origins/insertions of major muscle batteries for 20-30s each to release peripheral nerve entrapment and myofascial adhesions.`
      : `회로 주요 근육 배터리의 기시부/부착부를 순차적으로 각 20~30초씩 통전하여 말초 신경 포착과 근막 유착을 해소합니다.`;
  }

  renderMuscles(circuit);
  resetFixedAnatomy(circuit);
  resetFigureAlignment();

  const prevBtn = $("previous-circuit");
  const nextBtn = $("next-circuit");
  if (prevBtn) prevBtn.disabled = selected === 0;
  if (nextBtn) nextBtn.disabled = selected === CIRCUITS.length - 1;

  history.replaceState(null, "", `#${circuit.order.toString().padStart(2, "0")}`);
}

function selectById(id) {
  const idx = CIRCUITS.findIndex((c) => c.id === id);
  if (idx !== -1) {
    selected = idx;
    renderList();
    renderDetail(CIRCUITS[selected]);
  }
}

function handleSearch(query) {
  const q = query.trim().toLowerCase();
  if (!q) {
    filtered = [...CIRCUITS];
  } else {
    filtered = CIRCUITS.filter((c) => {
      const matchName = c.name.toLowerCase().includes(q) || c.en.toLowerCase().includes(q);
      const matchCode = c.code.toLowerCase().includes(q);
      const matchUses = c.uses.toLowerCase().includes(q) || (c.usesEn && c.usesEn.toLowerCase().includes(q));
      const matchMuscles = c.muscles.some(
        (m) => m.ko.toLowerCase().includes(q) || m.en.toLowerCase().includes(q)
      );
      const matchPoints = c.extraPoints && c.extraPoints.some((p) => p.name.toLowerCase().includes(q) || (p.nameEn && p.nameEn.toLowerCase().includes(q)));
      return matchName || matchCode || matchUses || matchMuscles || matchPoints;
    });
  }

  if (!filtered.some((c) => c.id === CIRCUITS[selected]?.id)) {
    if (filtered.length > 0) {
      selected = CIRCUITS.findIndex((c) => c.id === filtered[0].id);
    }
  }

  renderList();
  if (filtered.length > 0) {
    renderDetail(CIRCUITS[selected]);
  }
}

/* ==========================================================================
   Timer & Audio Engine
   ========================================================================== */
let totalTimerSeconds = 300;
let remainingTimerSeconds = 300;
let isTimerRunning = false;
let isAudioMuted = false;
let masterVolume = 0.65;
let timerInterval = null;

let audioCtx = null;
let timerGainNode = null;
let osc528 = null;
let oscSub = null;

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

function playTestChime() {
  if (isAudioMuted || masterVolume <= 0.01) return;
  try {
    const ctx = getAudioContext();
    if (!ctx) return;
    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = "sine";
    osc.frequency.setValueAtTime(528, now);

    const vol = 0.22 * masterVolume;
    gain.gain.setValueAtTime(0.001, now);
    gain.gain.linearRampToValueAtTime(vol, now + 0.04);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.45);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(now);
    osc.stop(now + 0.46);
  } catch (e) {}
}

function setVolume(pct) {
  pct = Math.max(0, Math.min(100, pct));
  masterVolume = pct / 100;

  try {
    localStorage.setItem("novacell_timer_vol", masterVolume.toString());
  } catch (e) {}

  const slider = $("timer-volume-slider");
  const pctLabel = $("vol-pct");
  const volIcon = $("vol-icon");

  const displayPct = isAudioMuted ? 0 : pct;
  if (slider && parseInt(slider.value, 10) !== displayPct) {
    slider.value = displayPct;
  }
  if (pctLabel) {
    pctLabel.textContent = `${displayPct}%`;
  }

  if (volIcon) {
    if (masterVolume <= 0.01 || isAudioMuted) {
      volIcon.textContent = "🔇";
    } else if (masterVolume < 0.5) {
      volIcon.textContent = "🔉";
    } else {
      volIcon.textContent = "🔊";
    }
  }

  if (timerGainNode && audioCtx) {
    try {
      const now = audioCtx.currentTime;
      timerGainNode.gain.cancelScheduledValues(now);
      const targetGain = isAudioMuted ? 0.0001 : 0.28 * masterVolume;
      timerGainNode.gain.linearRampToValueAtTime(Math.max(0.0001, targetGain), now + 0.08);
    } catch (e) {}
  }
}

function stop528HzSound() {
  if (!timerGainNode && !osc528 && !oscSub) return;
  const curCtx = audioCtx;
  const curGain = timerGainNode;
  const curOsc528 = osc528;
  const curOscSub = oscSub;

  timerGainNode = null;
  osc528 = null;
  oscSub = null;

  if (curGain && curCtx) {
    try {
      const now = curCtx.currentTime;
      curGain.gain.cancelScheduledValues(now);
      curGain.gain.setValueAtTime(curGain.gain.value, now);
      curGain.gain.linearRampToValueAtTime(0.0001, now + 0.12);
    } catch (e) {}
  }

  setTimeout(() => {
    try {
      if (curOsc528) {
        curOsc528.stop();
        curOsc528.disconnect();
      }
    } catch (e) {}
    try {
      if (curOscSub) {
        curOscSub.stop();
        curOscSub.disconnect();
      }
    } catch (e) {}
    try {
      if (curGain) curGain.disconnect();
    } catch (e) {}
  }, 150);
}

function start528HzSound() {
  if (isAudioMuted || masterVolume <= 0.01) return;
  try {
    const ctx = getAudioContext();
    if (!ctx) return;

    if (ctx.state === "suspended") {
      ctx.resume().then(() => doStart528(ctx));
    } else {
      doStart528(ctx);
    }
  } catch (e) {
    console.warn("Audio start error:", e);
  }
}

function doStart528(ctx) {
  if (osc528 && timerGainNode) return;

  stop528HzSound();

  const now = ctx.currentTime;
  const vol = Math.max(0, Math.min(1, masterVolume));

  const filter = ctx.createBiquadFilter();
  filter.type = "lowpass";
  filter.frequency.setValueAtTime(850, now);
  filter.connect(ctx.destination);

  const masterGain = ctx.createGain();
  masterGain.gain.cancelScheduledValues(now);
  masterGain.gain.setValueAtTime(0.0001, now);
  masterGain.gain.linearRampToValueAtTime(0.28 * vol, now + 0.35);
  masterGain.connect(filter);
  timerGainNode = masterGain;

  const o528 = ctx.createOscillator();
  o528.type = "sine";
  o528.frequency.setValueAtTime(528.0, now);
  o528.connect(masterGain);
  o528.start(now);
  osc528 = o528;

  const oSub = ctx.createOscillator();
  oSub.type = "sine";
  oSub.frequency.setValueAtTime(264.0, now);
  const subGain = ctx.createGain();
  subGain.gain.setValueAtTime(0.12 * vol, now);
  oSub.connect(subGain);
  subGain.connect(masterGain);
  oSub.start(now);
  oscSub = oSub;
}

/* ==========================================================================
   Tibetan Meditation Singing Bowl Synthesis (Doubled 2x Volume Boost)
   ========================================================================== */
function playSingingBowlBell() {
  if (isAudioMuted || masterVolume <= 0.01) return;
  try {
    const ctx = getAudioContext();
    if (!ctx) return;

    if (ctx.state === "suspended") {
      ctx.resume().then(() => doPlaySingingBowl(ctx));
    } else {
      doPlaySingingBowl(ctx);
    }
  } catch (e) {
    console.warn("Singing bowl error:", e);
  }
}

function doPlaySingingBowl(ctx) {
  const now = ctx.currentTime;
  const vol = Math.max(0, Math.min(1, masterVolume));

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

  // Meditation bowl harmonic structure (2x doubled gains)
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

  const soundBtn = $("timer-sound-toggle");
  if (soundBtn) {
    soundBtn.addEventListener("click", () => {
      getAudioContext();
      isAudioMuted = !isAudioMuted;
      soundBtn.classList.toggle("muted", isAudioMuted);
      const icon = $("sound-icon");
      const sLabel = $("sound-label");
      if (icon) icon.textContent = isAudioMuted ? "🔇" : "🔊";
      if (sLabel) {
        if (isEn()) {
          sLabel.textContent = isAudioMuted ? "Sound Off" : "Sound On";
        } else {
          sLabel.textContent = isAudioMuted ? "치유음 꺼짐" : "치유음 켜짐";
        }
      }

      const volIcon = $("vol-icon");
      if (volIcon) {
        volIcon.textContent = isAudioMuted ? "🔇" : (masterVolume < 0.5 ? "🔉" : "🔊");
      }

      if (isAudioMuted) {
        stop528HzSound();
      } else {
        if (isTimerRunning) {
          start528HzSound();
        } else {
          playTestChime();
        }
      }
    });
  }

  const volSlider = $("timer-volume-slider");
  if (volSlider) {
    volSlider.addEventListener("input", (e) => {
      getAudioContext();
      const val = parseInt(e.target.value, 10);
      if (isAudioMuted && val > 0) {
        isAudioMuted = false;
        if (soundBtn) {
          soundBtn.classList.remove("muted");
          const icon = $("sound-icon");
          const sLabel = $("sound-label");
          if (icon) icon.textContent = "🔊";
          if (sLabel) sLabel.textContent = isEn() ? "Sound On" : "치유음 켜짐";
        }
      }
      setVolume(val);
    });
  }

  try {
    const savedVol = localStorage.getItem("novacell_timer_vol");
    if (savedVol !== null) {
      const parsed = parseFloat(savedVol);
      if (!isNaN(parsed)) setVolume(Math.round(parsed * 100));
    } else {
      setVolume(65);
    }
  } catch (e) {
    setVolume(65);
  }

  updateTimerDisplay();
}

/* ==========================================================================
   Multi-Language Engine (KO / EN)
   ========================================================================== */
function applyLang(lang) {
  currentSiteLang = lang;
  try {
    localStorage.setItem("novacell_site_lang", lang);
  } catch (e) {}

  const langBtn = $("lang-toggle-btn");
  if (langBtn) {
    if (lang === "en") {
      langBtn.querySelector(".lang-opt.ko")?.classList.remove("active");
      langBtn.querySelector(".lang-opt.en")?.classList.add("active");
    } else {
      langBtn.querySelector(".lang-opt.ko")?.classList.add("active");
      langBtn.querySelector(".lang-opt.en")?.classList.remove("active");
    }
  }

  // 1. Header Navigation
  const pageTitle = $("page-title");
  if (pageTitle) {
    pageTitle.textContent = lang === "en"
      ? "NovaCell Healing Points | Neural Biological Circuit Batteries Guide (v38)"
      : "NovaCell Healing Points | 신경 생체 회로 배터리 도해 (v38)";
  }

  const navTherapy = $("nav-therapy");
  const navChakra = $("nav-chakra");
  const navCircuit = $("nav-circuit");
  const brandSub = $("brand-sub-title");

  if (lang === "en") {
    if (navTherapy) navTherapy.textContent = "Condition Therapy Points";
    if (navChakra) navChakra.textContent = "Chakra Bio Points";
    if (navCircuit) navCircuit.textContent = "Neural Circuit Therapy";
    if (brandSub) brandSub.textContent = "NEURAL CIRCUIT THERAPY GUIDE";
  } else {
    if (navTherapy) navTherapy.textContent = "질환별 치료 포인트";
    if (navChakra) navChakra.textContent = "차크라 바이오 포인트";
    if (navCircuit) navCircuit.textContent = "신경 생체 회로";
    if (brandSub) brandSub.textContent = "NEURAL CIRCUIT THERAPY GUIDE";
  }

  // 2. Sidebar Headings & Search
  const sidebarEyebrow = $("sidebar-eyebrow");
  const sidebarMain = $("sidebar-main-title");
  const sidebarIntro = $("sidebar-intro");
  const searchLabel = $("search-label");
  const searchInput = $("circuit-search");

  if (sidebarEyebrow) sidebarEyebrow.textContent = "NEURAL BIOLOGICAL CIRCUIT";

  if (sidebarMain) {
    if (lang === "en") {
      sidebarMain.innerHTML = `Neural Biological Circuit<br><span id="sidebar-sub-title" style="font-size:0.62em; font-weight:600; color:var(--text-sub);">Neural Circuit Therapy</span><br><span id="sidebar-book-title" class="accent-title">NovaCell Master Therapy</span>`;
    } else {
      sidebarMain.innerHTML = `신경 생체 회로<br><span id="sidebar-sub-title" style="font-size:0.62em; font-weight:600; color:var(--text-sub);">Neural Circuit Therapy</span><br><span id="sidebar-book-title" class="accent-title">노바셀 통치 요법</span>`;
    }
  }

  if (sidebarIntro) {
    sidebarIntro.textContent = lang === "en"
      ? "Select and explore 14 biological circuits from Lung to Conception & Governor vessel circuits."
      : "폐 회로부터 임맥과 독맥 회로까지 14개 회로를 선택해 확인합니다.";
  }

  if (searchLabel) {
    searchLabel.textContent = lang === "en" ? "Search Circuit & Symptoms" : "회로·질환 검색";
  }
  if (searchInput) {
    searchInput.placeholder = lang === "en" ? "e.g., Lung, Headache, Tinnitus, LU 7" : "예: 폐, 두통, 이명, LU 7";
  }

  // 3. Static Section Headers
  const routeTitle = $("circuit-route-title");
  if (routeTitle) routeTitle.textContent = lang === "en" ? "Circuit Pathway Route" : "회로 진행 경로";

  const checkLabel = $("circuit-check-label");
  if (checkLabel) checkLabel.textContent = lang === "en" ? "Voltage Check" : "전압 체크";

  const supplyLabel = $("circuit-supply-label");
  if (supplyLabel) supplyLabel.textContent = lang === "en" ? "Voltage Supply" : "전압 공급";

  const muscleEyebrow = $("muscle-eyebrow");
  if (muscleEyebrow) muscleEyebrow.textContent = "MUSCLE BATTERIES";

  const muscleCardTitle = $("muscle-card-title");
  if (muscleCardTitle) muscleCardTitle.textContent = lang === "en" ? "Circuit Muscle Batteries" : "회로 배터리 근육 목록";

  const muscleHint = $("muscle-hint");
  if (muscleHint) {
    muscleHint.textContent = lang === "en"
      ? "Hover over numbered pins on the AI model or click a muscle below to view anatomy and location."
      : "인체 AI 모델 위의 번호 원(핀)에 커서를 올리거나 아래 근육을 선택하면 위치와 해부도가 표시됩니다.";
  }

  const prevBtn = $("previous-circuit");
  if (prevBtn) prevBtn.textContent = lang === "en" ? "← Previous Circuit" : "← 이전 회로";

  const nextBtn = $("next-circuit");
  if (nextBtn) nextBtn.textContent = lang === "en" ? "Next Circuit →" : "다음 회로 →";

  // 4. Figure Toolbar & Fixed Anatomy
  const figBrandTitle = $("fig-brand-title");
  if (figBrandTitle) figBrandTitle.textContent = lang === "en" ? "Human AI Interactive Anatomy Model" : "인체 AI 모델 상호작용 도해";

  const figBrandSub = $("fig-brand-sub");
  if (figBrandSub) figBrandSub.textContent = "Interactive Muscle Batteries Guide";

  const fixedAnatomyTitle = $("fixed-anatomy-title");
  if (fixedAnatomyTitle && !activeMuscleIndex) {
    fixedAnatomyTitle.textContent = lang === "en" ? "Select a Muscle" : "근육을 선택하세요";
  }

  const fixedAnatomyPlaceholder = $("fixed-anatomy-placeholder-text");
  if (fixedAnatomyPlaceholder) {
    fixedAnatomyPlaceholder.innerHTML = lang === "en"
      ? "Hover over the left muscle batteries list<br>to view the <strong>authentic 3D anatomy guide</strong> here."
      : "좌측 배터리 근육 목록에 커서를 올리면<br><strong>실제 3D 인체 해부도</strong>가 여기에 고정 표시됩니다.";
  }

  // 5. Timer Card Labels
  const timerTitle = $("timer-title");
  if (timerTitle) timerTitle.textContent = lang === "en" ? "528Hz Cellular Voltage Healing Timer" : "528Hz 세포 전압 치유 타이머";

  const timerSub = $("timer-sub");
  if (timerSub) timerSub.textContent = lang === "en" ? "DNA Restorative Solfeggio & Tibetan Singing Bowl" : "DNA 복원 주파수 · 싱잉볼 차임 벨";

  const p1 = $("preset-1min"); if (p1) p1.textContent = lang === "en" ? "1 Min" : "1분";
  const p3 = $("preset-3min"); if (p3) p3.textContent = lang === "en" ? "3 Min" : "3분";
  const p5 = $("preset-5min"); if (p5) p5.textContent = lang === "en" ? "5 Min" : "5분";
  const p7 = $("preset-7min"); if (p7) p7.textContent = lang === "en" ? "7 Min" : "7분";
  const p10 = $("preset-10min"); if (p10) p10.textContent = lang === "en" ? "10 Min" : "10분";

  const tDec = $("timer-dec-btn"); if (tDec) tDec.textContent = lang === "en" ? "-30s" : "-30초";
  const tInc = $("timer-inc-btn"); if (tInc) tInc.textContent = lang === "en" ? "+30s" : "+30초";

  const tReset = $("timer-reset-label"); if (tReset) tReset.textContent = lang === "en" ? "Reset" : "리셋";

  const tLabel = $("timer-btn-label");
  if (tLabel) {
    if (isTimerRunning) {
      tLabel.textContent = lang === "en" ? "Pause" : "일시정지";
    } else if (remainingTimerSeconds <= 0) {
      tLabel.textContent = lang === "en" ? "Restart" : "다시 시작";
    } else if (remainingTimerSeconds < totalTimerSeconds) {
      tLabel.textContent = lang === "en" ? "Resume" : "계속 시작";
    } else {
      tLabel.textContent = lang === "en" ? "Start Healing Timer" : "치유 타이머 시작";
    }
  }

  const sLabel = $("sound-label");
  if (sLabel) {
    if (lang === "en") {
      sLabel.textContent = isAudioMuted ? "Sound Off" : "Sound On";
    } else {
      sLabel.textContent = isAudioMuted ? "치유음 꺼짐" : "치유음 켜짐";
    }
  }

  const timerDesc = $("timer-desc");
  if (timerDesc) {
    timerDesc.innerHTML = lang === "en"
      ? "* <strong>528Hz Frequency</strong> restores cellular transmembrane voltage and promotes mitochondrial ATP synthesis. A soothing <strong>Tibetan Singing Bowl Bell</strong> rings upon completion."
      : "* <strong>528Hz 주파수</strong>는 손상된 세포 전압을 깨우고 미토콘드리아 ATP 생성을 촉진합니다. 타이머 종료 시 <strong>티베트 싱잉볼 알림</strong>이 부드럽게 울립니다.";
  }

  // 6. NovaCell Clinical Protocol Guide Card
  const protoTag = $("proto-card-tag");
  if (protoTag) protoTag.textContent = lang === "en" ? "Linked to Clinical Case Guide" : "임상 가이드 & 증례 분석실 연계";

  const protoTitle = $("proto-card-title");
  if (protoTitle) protoTitle.textContent = lang === "en" ? "NovaCell Circuit Therapy Clinical Protocol Guide" : "노바셀 의료기 생체 회로 적용 임상 시술 가이드";

  const protoSub = $("proto-card-sub");
  if (protoSub) protoSub.textContent = "NovaCell Microcurrent Probe Circuit Protocol & Clinical Pearls";

  const tile1Label = $("spec-tile-1-label");
  if (tile1Label) tile1Label.textContent = lang === "en" ? "Output Intensity" : "출력 강도 레벨";
  const tile1Val = $("spec-tile-1-val");
  if (tile1Val) tile1Val.textContent = lang === "en" ? "High-Voltage Microcurrent Level 03~05 (Gentle Pulse)" : "고전압 미세전류 03~05단계 (편안한 펄스 진동)";

  const tile2Label = $("spec-tile-2-label");
  if (tile2Label) tile2Label.textContent = lang === "en" ? "Probe Technique" : "펜 도자 접촉 방식";
  const tile2Val = $("spec-tile-2-val");
  if (tile2Val) tile2Val.textContent = lang === "en" ? "Gradual Perpendicular Compression (Point Compression)" : "점진적 심부 압박 직각 안착 (Point Compression)";

  const tile3Label = $("spec-tile-3-label");
  if (tile3Label) tile3Label.textContent = lang === "en" ? "Stinging Remedy / Conductivity" : "따끔거림 예방 / 전도성";
  const tile3Val = $("spec-tile-3-val");
  if (tile3Val) tile3Val.textContent = lang === "en" ? "Alcohol or Saline / Conductive Mist Spray" : "알콜 또는 생리식염수/전도성 미스트 스프레이";

  const seqTitle = $("proto-sequence-title");
  if (seqTitle) seqTitle.textContent = lang === "en" ? "Treatment Sequence (Clinical 3 Steps)" : "임상 시술 순서 (Treatment Sequence)";

  const b1 = $("proto-step-1-badge"); if (b1) b1.textContent = lang === "en" ? "Step 1 [Voltage Check]" : "1단계 [전압 체크]";
  const b2 = $("proto-step-2-badge"); if (b2) b2.textContent = lang === "en" ? "Step 2 [Voltage Supply]" : "2단계 [전압 공급]";
  const b3 = $("proto-step-3-badge"); if (b3) b3.textContent = lang === "en" ? "Step 3 [Muscle Batteries]" : "3단계 [근육 배터리]";

  const pearlsTitle = $("proto-pearls-title");
  if (pearlsTitle) pearlsTitle.textContent = lang === "en" ? "💡 Clinical Pearls & Expert Insights" : "임상 시술 노하우 & Clinical Pearls";

  const pearlsList = $("proto-pearls-list");
  if (pearlsList) {
    if (lang === "en") {
      pearlsList.innerHTML = `
        <li><strong>Perpendicular Fossa Seating:</strong> Do not scrub or forcefully push the probe tip. Gently seat the pen tip perpendicularly into anatomical depressions (acupoints & tendon-fascia junctions) before applying microcurrent.</li>
        <li><strong>Maintain Conductive Moisture:</strong> Lightly spray conductive mist, alcohol, or normal saline onto the skin. Keeping the area hydrated maximizes deep current penetration and eliminates sharp stinging sensations.</li>
        <li><strong>528Hz Breath Synchronization:</strong> Play the 528Hz healing sound and guide the patient through diaphragmatic breathing (4s inhale, 6s exhale). Activating parasympathetic tone maximizes cellular voltage uptake.</li>
        <li><strong>Post-Session Re-assessment:</strong> When the deep Tibetan singing bowl chime rings, remove the probe and immediately re-evaluate the joint Range of Motion (ROM), pain level, and muscle battery strength.</li>
      `;
    } else {
      pearlsList.innerHTML = `
        <li><strong>해부학적 함요처 직각 안착:</strong> 도자 팁을 강하게 비비거나 찌르지 말고, 뼈 경계 오목한 곳(혈자리 및 건·근막 접합부)에 펜촉을 가만히 직각으로 안착시킨 상태에서 전기를 인가합니다.</li>
        <li><strong>전도성 수분감 유지:</strong> 피부 표면에 전도성 미스트나 알콜/생리식염수를 가볍게 도포하여 촉촉한 수분감을 유지하면 미세전류의 심부 침투율과 통전 효율이 극대화되고 따끔거림이 예방됩니다.</li>
        <li><strong>528Hz 치유 주파수 호흡 동기화:</strong> 타이머와 528Hz 음원을 가동하며 환자가 편안한 복식 호흡(들숨 4초, 날숨 6초)을 하도록 유도하면 부교감 신경이 활성화되어 전압 흡수가 최적화됩니다.</li>
        <li><strong>싱잉볼 알림 종료 후 재평가:</strong> 세션 완료 시 맑게 울리는 티베트 싱잉볼 종소리와 함께 도자를 떼고, 관절 가동 범위(ROM)와 통증 경감 및 배터리 근력을 재평가합니다.</li>
      `;
    }
  }

  // 7. Evidence Disclaimer Note
  const evTitle = $("evidence-title");
  if (evTitle) evTitle.textContent = lang === "en" ? "Data Scope & Disclaimer" : "자료 범위와 주의";

  const evText = $("evidence-text");
  if (evText) {
    evText.textContent = lang === "en"
      ? "This page is an educational interface referencing pages 204-217 of 『NovaCell Master Therapy』 by Chang-Hyuk Park. It guides users through book-documented circuits, points, and conditions, without asserting independent verification of diagnostic or therapeutic outcomes. Always consult qualified clinical judgment, anatomy, and individual contraindications before application."
      : "이 페이지는 박창혁 저 『노바셀 통치 요법』 인쇄 페이지 204~217의 내용을 앱에서 찾기 쉽게 옮긴 교육·작업용 화면입니다. 책에 기재된 적용 질환, 회로 설명과 포인트를 안내하며, 앱이 치료 효과나 환자별 위치를 독립적으로 검증했다는 뜻은 아닙니다. 실제 적용 전 환자 상태, 금기, 해부학적 구조와 임상 판단을 별도로 확인해 주세요.";
  }

  renderList();
  renderDetail(CIRCUITS[selected]);
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
      const nextLang = currentSiteLang === "ko" ? "en" : "ko";
      applyLang(nextLang);
    });
  }

  applyLang(currentLang);
}

document.addEventListener("DOMContentLoaded", () => {
  const searchInput = $("circuit-search");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      handleSearch(e.target.value);
    });
  }

  const prevBtn = $("previous-circuit");
  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      if (selected > 0) {
        selected--;
        renderList();
        renderDetail(CIRCUITS[selected]);
      }
    });
  }

  const nextBtn = $("next-circuit");
  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      if (selected < CIRCUITS.length - 1) {
        selected++;
        renderList();
        renderDetail(CIRCUITS[selected]);
      }
    });
  }

  const initial = location.hash.slice(1);
  if (initial) {
    const foundIdx = CIRCUITS.findIndex(
      (c) => c.id === initial || c.order.toString().padStart(2, "0") === initial
    );
    if (foundIdx !== -1) {
      selected = foundIdx;
    }
  }

  initTimerEvents();
  initLanguageToggle();
});
