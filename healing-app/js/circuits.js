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
    check: "LU 8",
    supply: "LU 7",
    uses: "천식, 결핵성 기침, 후두염, 감기, 갱년기 장애, 어깨관절 통증, 목구멍이나 기관지에 생긴 질병 등의 질환에 적용합니다.",
    muscles: [
      { num: 1, ko: "삼각근 전두", en: "Deltoid anterior head", x: 69.5, y: 23.9, anatomyImg: "assets/circuits/user_muscles/deltoid_anterior_head_v2.png" },
      { num: 2, ko: "상완이두근 장두", en: "Biceps long head", x: 69.5, y: 32.5, anatomyImg: "assets/circuits/user_muscles/biceps_long_head_v2.png" },
      { num: 3, ko: "상완요골근", en: "Brachioradialis", x: 67.5, y: 44.6, anatomyImg: "assets/circuits/user_muscles/brachioradialis_v2.png" },
      { num: 4, ko: "단무지 외전근", en: "Abductor pollicis brevis", x: 65.0, y: 55.4, anatomyImg: "assets/circuits/user_muscles/abductor_pollicis_brevis_v2.png" },
      { num: 5, ko: "극상근", en: "Supraspinatus", x: 26.2, y: 25.8, anatomyImg: "assets/circuits/user_muscles/supraspinatus_v2.png" }
    ],
    extraPoints: [
      { name: "LU 7 (전압 공급, 열결)", x: 66.2, y: 49.3, type: "supply", anatomyImg: "assets/circuits/user_muscles/brachioradialis_v2.png" },
      { name: "LU 8 (전압 체크, 경거)", x: 66.2, y: 52.8, type: "check", anatomyImg: "assets/circuits/user_muscles/abductor_pollicis_brevis_v2.png" }
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
    check: "LI 5",
    supply: "LI 5",
    uses: "후두염, 치통, 코병, 눈병, 맹장염, 어깨결림, 비염, 안면마비, 축농증, 고혈압, 뇌일혈 등의 질환에 적용합니다.",
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
      { name: "LI 5 (양계, 전압 체크/공급)", x: 84.5, y: 46.5, type: "supply", anatomyImg: "assets/circuits/user_muscles/first_dorsal_interosseous_li.png" }
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
    check: "HT 7",
    supply: "HT 5",
    uses: "심장병, 이명, 눈의 충혈, 천식, 피로회복, 심한 어깨 결림, 호흡장애, 팔꿈치통증, 신경쇠약, 고혈압 등의 질환에 적용합니다.",
    muscles: [
      { num: 1, ko: "견갑하근", en: "Subscapularis", x: 68.5, y: 26.0, anatomyImg: "assets/circuits/user_muscles/subscapularis_heart.png" },
      { num: 2, ko: "소원근", en: "Teres minor", x: 33.0, y: 30.5, anatomyImg: "assets/circuits/user_muscles/teres_minor_heart.png" },
      { num: 3, ko: "상완삼두근 장두", en: "Triceps long head", x: 60.5, y: 25.0, anatomyImg: "assets/circuits/user_muscles/triceps_long_head_heart.png" },
      { num: 4, ko: "척측수근굴근", en: "Flexor carpi ulnaris", x: 46.0, y: 21.5, anatomyImg: "assets/circuits/user_muscles/flexor_carpi_ulnaris_heart.png" },
      { num: 5, ko: "소지외전근", en: "Abductor digiti minimi", x: 43.0, y: 8.0, anatomyImg: "assets/circuits/user_muscles/abductor_digiti_minimi_heart.png" }
    ],
    extraPoints: [
      { name: "HT 7 (전압 체크, 신문)", x: 43.0, y: 10.5, type: "check", anatomyImg: "assets/circuits/user_muscles/flexor_carpi_ulnaris_heart.png" },
      { name: "HT 5 (전압 공급, 통리)", x: 43.5, y: 12.5, type: "supply", anatomyImg: "assets/circuits/user_muscles/flexor_carpi_ulnaris_heart.png" }
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
    check: "SI 5",
    supply: "SI 7",
    uses: "어깨 결림, 신경통, 오십견, 이명, 안압항진, 척골신경통, 변비, 목이 뻣뻣해지는 증상, 안면신경마비 등의 질환에 적용합니다.",
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
      { name: "SI 7 (전압 공급, 지정)", x: 85.0, y: 70.5, type: "supply", anatomyImg: "assets/circuits/user_muscles/extensor_carpi_ulnaris_si.png" },
      { name: "SI 5 (전압 체크, 양곡)", x: 88.0, y: 82.5, type: "check", anatomyImg: "assets/circuits/user_muscles/extensor_carpi_ulnaris_si.png" }
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
    check: "SP 5",
    supply: "SP 4",
    uses: "위의 통증, 위하수, 각막, 눈꺼풀, 설사, 림프, 부종, 식중독, 췌장, 당뇨병, 심한 졸음, 장 질환, 변비, 늑간 신경통, 천식, 소아천식 등의 질환에 적용합니다.",
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
      { name: "SP 4 (전압 공급, 공손)", x: 76.5, y: 91.5, type: "supply", anatomyImg: "assets/circuits/user_muscles/abductor_hallucis_spleen.png" },
      { name: "SP 5 (전압 체크, 상구)", x: 75.0, y: 88.0, type: "check", anatomyImg: "assets/circuits/user_muscles/abductor_hallucis_spleen.png" }
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
    check: "ST 42",
    supply: "ST 41",
    uses: "위 질환, 위산과다, 십이지장궤양, 위하수, 구안와사, 안면신경마비, 슬관절통, 고관절통, 두통, 치통, 안구통, 갑상선 질환 등의 질환에 적용합니다.",
    muscles: [
      { num: 1, ko: "전경골근", en: "Tibialis anterior", x: 68.0, y: 78.5, anatomyImg: "assets/circuits/user_muscles/tibialis_anterior_stomach_v2.png" },
      { num: 2, ko: "장지신근", en: "Extensor digitorum longus", x: 69.5, y: 75.0, anatomyImg: "assets/circuits/user_muscles/extensor_digitorum_longus_stomach.png" },
      { num: 3, ko: "대퇴직근", en: "Rectus femoris", x: 67.0, y: 56.5, anatomyImg: "assets/circuits/user_muscles/rectus_femoris_stomach_v2.png" },
      { num: 4, ko: "대퇴사두근 (내/외측광근)", en: "Quadriceps (Vastus lateralis/medialis)", x: 65.5, y: 61.5, anatomyImg: "assets/circuits/user_muscles/quadriceps_vastus_stomach.png" },
      { num: 5, ko: "대흉근 쇄골두", en: "Pectoralis major clavicular", x: 60.5, y: 25.5, anatomyImg: "assets/circuits/user_muscles/pectoralis_major_clavicular_stomach.png" },
      { num: 6, ko: "복직근", en: "Rectus abdominis", x: 57.5, y: 39.0, anatomyImg: "assets/circuits/user_muscles/rectus_abdominis_stomach.png" },
      { num: 7, ko: "안륜근", en: "Orbicularis oculi", x: 50.0, y: 11.5, anatomyImg: "assets/circuits/user_muscles/orbicularis_oculi_stomach.png" },
      { num: 8, ko: "구륜근", en: "Orbicularis oris", x: 49.5, y: 14.5, anatomyImg: "assets/circuits/user_muscles/orbicularis_oris_stomach.png" },
      { num: 9, ko: "교근 (천층)", en: "Superficial masseter", x: 53.0, y: 13.5, anatomyImg: "assets/circuits/user_muscles/masseter_stomach.png" },
      { num: 10, ko: "측두근 전두부", en: "Temporalis anterior", x: 53.5, y: 10.0, anatomyImg: "assets/circuits/user_muscles/temporalis_anterior_stomach.png" }
    ],
    extraPoints: [
      { name: "ST 41 (전압 공급, 해계)", x: 68.0, y: 86.5, type: "supply", anatomyImg: "assets/circuits/user_muscles/tibialis_anterior_stomach_v2.png" },
      { name: "ST 42 (전압 체크, 충양)", x: 68.5, y: 89.0, type: "check", anatomyImg: "assets/circuits/user_muscles/tibialis_anterior_stomach_v2.png" }
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
    route: "족소지 하부 → 용천 → 경골 내측 후면 → 대퇴 내측 후면 → 흉복부 앞정중선",
    check: "KI 3",
    supply: "KI 7",
    uses: "신장병, 방광염, 요도염, 신우신염, 협심증, 저혈압, 피로회복, 부종, 귀병, 치통, 천식, 뇌일혈, 정력감퇴, 동맥경화 등의 질환에 적용합니다.",
    muscles: [
      { num: 1, ko: "단지굴근", en: "Flexor digitorum brevis", x: 74.0, y: 92.5, anatomyImg: "assets/circuits/user_muscles/flexor_digitorum_brevis_kidney.png" },
      { num: 2, ko: "족저근막", en: "Plantar fascia", x: 74.0, y: 88.0, anatomyImg: "assets/circuits/user_muscles/plantar_fascia_kidney.png" },
      { num: 3, ko: "박근", en: "Gracilis", x: 70.0, y: 67.0, anatomyImg: "assets/circuits/user_muscles/gracilis_kidney.png" },
      { num: 4, ko: "복횡근", en: "Transversus abdominis", x: 64.5, y: 46.5, anatomyImg: "assets/circuits/user_muscles/transverse_abdominis_kidney.png" },
      { num: 5, ko: "장요근 (신장 배터리)", en: "Psoas major", x: 62.0, y: 41.5, anatomyImg: "assets/circuits/user_muscles/iliopsoas_kidney.png" },
      { num: 6, ko: "외늑간근 / 내늑간근", en: "Intercostales externi/interni", x: 60.5, y: 33.0, anatomyImg: "assets/circuits/user_muscles/intercostal_muscles_kidney.png" },
      { num: 7, ko: "상인두수축근", en: "Superior pharyngeal constrictor", x: 50.5, y: 15.5, anatomyImg: "assets/circuits/user_muscles/superior_pharyngeal_constrictor_kidney.png" }
    ],
    extraPoints: [
      { name: "KI 7 (전압 공급, 복류)", x: 73.0, y: 85.0, type: "supply", anatomyImg: "assets/circuits/user_muscles/flexor_digitorum_brevis_kidney.png" },
      { name: "KI 3 (전압 체크, 태계)", x: 73.5, y: 87.5, type: "check", anatomyImg: "assets/circuits/user_muscles/flexor_digitorum_brevis_kidney.png" }
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
    route: "눈 안쪽 → 두정부 → 후두부 → 척추 양측 1·2선 → 하지 후면 중앙 → 족소지 외측",
    check: "BL 64",
    supply: "BL 67",
    uses: "방광염, 신장병, 요도염, 신우신염, 두통, 후두통, 뇌일혈, 뇌막염, 눈병, 콧병, 발열, 오한, 좌골신경통, 요통, 치질 등의 질환에 적용합니다.",
    muscles: [
      { num: 1, ko: "단소지외전근 / 족저근", en: "Abductor digiti minimi pedis", x: 67.5, y: 92.5, anatomyImg: "assets/circuits/user_muscles/abductor_digiti_minimi_plantaris_bladder (1).png" },
      { num: 2, ko: "아킬레스건 복합체", en: "Achilles tendon complex", x: 65.0, y: 85.5, anatomyImg: "assets/circuits/user_muscles/achilles_tendon_bladder.png" },
      { num: 3, ko: "비복근 내·외측두", en: "Gastrocnemius", x: 63.5, y: 76.5, anatomyImg: "assets/circuits/user_muscles/gastrocnemius_bladder (1).png" },
      { num: 4, ko: "햄스트링 (반건양근/대퇴이두근)", en: "Hamstrings (Semitendinosus/Biceps)", x: 61.5, y: 61.5, anatomyImg: "assets/circuits/user_muscles/hamstrings_bladder (1).png" },
      { num: 5, ko: "천결절인대 / 이상근", en: "Sacrotuberous ligament / Piriformis", x: 57.5, y: 51.5, anatomyImg: "assets/circuits/user_muscles/piriformis_sacrotuberous_bladder.png" },
      { num: 6, ko: "척주기립근 (최장근/장늑근)", en: "Erector spinae (Longissimus/Iliocostalis)", x: 54.0, y: 38.0, anatomyImg: "assets/circuits/user_muscles/erector_spinae_bladder.png" },
      { num: 7, ko: "다열근 / 회선근", en: "Multifidus / Rotatores", x: 51.5, y: 30.0, anatomyImg: "assets/circuits/user_muscles/multifidus_rotatores_bladder (1).png" },
      { num: 8, ko: "후두하근군", en: "Suboccipital muscles", x: 49.5, y: 17.5, anatomyImg: "assets/circuits/user_muscles/suboccipital_muscles_bladder (1).png" }
    ],
    extraPoints: [
      { name: "BL 67 (전압 공급, 지음)", x: 67.5, y: 95.0, type: "supply", anatomyImg: "assets/circuits/user_muscles/achilles_tendon_bladder.png" },
      { name: "BL 64 (전압 체크, 경골)", x: 67.0, y: 91.5, type: "check", anatomyImg: "assets/circuits/user_muscles/achilles_tendon_bladder.png" }
    ]
  },
  {
    id: "liver",
    order: 9,
    code: "LV",
    name: "간 회로",
    en: "Liver (LV) Circuit",
    page: 212,
    image: "assets/circuits/liver.png",
    route: "족대지 외측 → 족배 → 경골 내측 → 대퇴 내측 → 생식기 → 하복부 → 기문",
    check: "LV 3",
    supply: "LV 8",
    uses: "간장 질환, 황달, 담석증, 신경쇠약, 안질환, 녹내장, 근육 경련, 고혈압, 늑간 신경통, 생식기 질환, 생리통 등의 질환에 적용합니다.",
    muscles: [
      { num: 1, ko: "장·단비골근", en: "Fibularis longus/brevis", x: 67.5, y: 80.0, anatomyImg: "assets/circuits/user_muscles/tibialis_posterior_liver.png" },
      { num: 2, ko: "후경골근 / 장모지굴근", en: "Tibialis posterior / Flexor hallucis", x: 69.5, y: 76.0, anatomyImg: "assets/circuits/user_muscles/flexor_hallucis_longus_liver.png" },
      { num: 3, ko: "장·단내전근 / 대내전근", en: "Adductor longus / magnus", x: 66.5, y: 58.5, anatomyImg: "assets/circuits/user_muscles/adductor_magnus_liver.png" },
      { num: 4, ko: "대요근 / 장골근", en: "Psoas major / Iliacus", x: 63.5, y: 46.5, anatomyImg: "assets/circuits/user_muscles/psoas_major_liver.png" },
      { num: 5, ko: "횡격막", en: "Diaphragm", x: 57.5, y: 34.0, anatomyImg: "assets/circuits/user_muscles/diaphragm_liver.png" },
      { num: 6, ko: "설골상근군 (악설골근/이설골근)", en: "Suprahyoid muscles", x: 49.5, y: 15.5, anatomyImg: "assets/circuits/user_muscles/hyoid_muscles_liver.png" }
    ],
    extraPoints: [
      { name: "LV 8 (전압 공급, 곡천)", x: 69.0, y: 67.0, type: "supply", anatomyImg: "assets/circuits/user_muscles/flexor_hallucis_longus_liver.png" },
      { name: "LV 3 (전압 체크, 태충)", x: 69.0, y: 89.5, type: "check", anatomyImg: "assets/circuits/user_muscles/flexor_hallucis_longus_liver.png" }
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
    route: "눈 외측 → 측두부 편측 → 목 → 흉협부 측면 → 고관절 → 하지 외측 → 제4족지",
    check: "GB 40",
    supply: "GB 43",
    uses: "담석증, 황달, 신경통, 늑간 신경통, 고혈압, 편두통, 좌골신경통, 이명, 백내장, 중이염, 어깨 결림, 무릎 관절통 등의 질환에 적용합니다.",
    muscles: [
      { num: 1, ko: "제3비골근 / 장·단비골근", en: "Fibularis tertius / brevis", x: 74.0, y: 84.0, anatomyImg: "assets/circuits/user_muscles/fibularis_longus_gallbladder.png" },
      { num: 2, ko: "대퇴근막장근 (TFL)", en: "Tensor fasciae latae", x: 69.5, y: 53.0, anatomyImg: "assets/circuits/user_muscles/tensor_fasciae_latae_gallbladder.png" },
      { num: 3, ko: "장경인대 (IT Band)", en: "Iliotibial tract", x: 71.0, y: 63.5, anatomyImg: "assets/circuits/user_muscles/iliotibial_tract_gallbladder.png" },
      { num: 4, ko: "요방형근 / 외복사근", en: "External oblique / QL", x: 64.5, y: 44.5, anatomyImg: "assets/circuits/user_muscles/external_oblique_gallbladder.png" },
      { num: 5, ko: "전거근 / 늑간근", en: "Intercostal muscles", x: 62.0, y: 33.5, anatomyImg: "assets/circuits/user_muscles/intercostal_muscles_gallbladder.png" },
      { num: 6, ko: "두판상근 / 후두하근", en: "Splenius capitis / Suboccipitals", x: 50.0, y: 17.5, anatomyImg: "assets/circuits/user_muscles/splenius_capitis_gallbladder.png" },
      { num: 7, ko: "측두근 (중·후부)", en: "Temporalis (Middle/Posterior)", x: 48.0, y: 11.5, anatomyImg: "assets/circuits/user_muscles/temporalis_gallbladder.png" }
    ],
    extraPoints: [
      { name: "GB 43 (전압 공급, 협계)", x: 74.5, y: 92.0, type: "supply", anatomyImg: "assets/circuits/user_muscles/fibularis_longus_gallbladder.png" },
      { name: "GB 40 (전압 체크, 구허)", x: 73.0, y: 88.0, type: "check", anatomyImg: "assets/circuits/user_muscles/fibularis_longus_gallbladder.png" }
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
    route: "흉부(유두 외측) → 상지 내측 중앙선 → 수장 중심(노궁) → 중지 끝",
    check: "PC 7",
    supply: "PC 8",
    uses: "심근경색, 협심증, 심장마비, 뇌일혈, 저혈압, 늑간 신경통, 천식, 딸꾹질, 손바닥 발열, 위통, 구토, 가슴 답답함 등의 질환에 적용합니다.",
    muscles: [
      { num: 1, ko: "장장근", en: "Palmaris longus", x: 73.5, y: 49.0, anatomyImg: "assets/circuits/user_muscles/palmaris_longus_pericardium.png" },
      { num: 2, ko: "천지굴근 / 요측수근굴근", en: "Flexor digitorum superficialis", x: 73.0, y: 44.5, anatomyImg: "assets/circuits/user_muscles/flexor_digitorum_superficialis_pericardium.png" },
      { num: 3, ko: "상완이두근 단두", en: "Biceps short head", x: 72.0, y: 32.0, anatomyImg: "assets/circuits/user_muscles/biceps_short_head_pericardium.png" },
      { num: 4, ko: "소흉근", en: "Pectoralis minor", x: 67.5, y: 26.5, anatomyImg: "assets/circuits/user_muscles/pectoralis_minor_pericardium.png" },
      { num: 5, ko: "흉쇄유돌근 (SCM)", en: "Sternocleidomastoid", x: 66.0, y: 19.5, anatomyImg: "assets/circuits/user_muscles/sternocleidomastoid_pericardium.png" }
    ],
    extraPoints: [
      { name: "PC 8 (전압 공급, 노궁)", x: 75.5, y: 56.5, type: "supply", anatomyImg: "assets/circuits/user_muscles/palmaris_longus_pericardium.png" },
      { name: "PC 7 (전압 체크, 대릉)", x: 75.5, y: 54.0, type: "check", anatomyImg: "assets/circuits/user_muscles/palmaris_longus_pericardium.png" }
    ]
  },
  {
    id: "triple-burner",
    order: 12,
    code: "TB",
    name: "삼초 회로",
    en: "Sympathetic/Triple Burner (TB) Circuit",
    page: 215,
    image: "assets/circuits/triple-burner.png",
    route: "약지 외측 → 상지 외측 정중면 → 어깨·목 → 귀를 돌아 눈 외측단",
    check: "TB 4",
    supply: "TB 5",
    uses: "모든 부인병, 갱년기 장애, 변비, 소장의 질환, 맹장, 난청, 이명, 편통, 출혈성 질환, 월경 이상, 피로 회복, 중이염, 치통, 어깨 결림, 상지 신경통, 편도선, 눈병 등의 질환에 적용합니다.",
    muscles: [
      { num: 1, ko: "지신근", en: "Extensor digitorum", x: 61.5, y: 45.0, anatomyImg: "assets/circuits/user_muscles/extensor_digitorum_tb.png" },
      { num: 2, ko: "삼두근 외측두", en: "Triceps lateral head", x: 65.5, y: 33.5, anatomyImg: "assets/circuits/user_muscles/triceps_lateral_head_tb.png" },
      { num: 3, ko: "삼각근 중앙두", en: "Deltoid middle head", x: 65.0, y: 27.5, anatomyImg: "assets/circuits/user_muscles/deltoid_middle_head_tb.png" },
      { num: 4, ko: "승모근", en: "Trapezius", x: 69.5, y: 23.0, anatomyImg: "assets/circuits/user_muscles/trapezius_tb.png" },
      { num: 5, ko: "견갑거근", en: "Levator scapulae", x: 72.5, y: 20.0, anatomyImg: "assets/circuits/user_muscles/levator_scapulae_tb.png" },
      { num: 6, ko: "판상근", en: "Splenius", x: 74.0, y: 17.0, anatomyImg: "assets/circuits/user_muscles/splenius_tb.png" },
      { num: 7, ko: "상이개근", en: "Auricularis superior", x: 41.5, y: 12.5, anatomyImg: "assets/circuits/user_muscles/superior_auricular_tb.png" },
      { num: 8, ko: "전이개근", en: "Auricularis anterior", x: 39.5, y: 14.0, anatomyImg: "assets/circuits/user_muscles/anterior_auricular_tb.png" },
      { num: 9, ko: "비근근", en: "Procerus", x: 31.0, y: 13.0, anatomyImg: "assets/circuits/user_muscles/procerus_nasalis_tb.png" }
    ],
    extraPoints: [
      { name: "TB 5 (전압 공급, 외관)", x: 60.5, y: 49.0, type: "supply", anatomyImg: "assets/circuits/user_muscles/extensor_digitorum_tb.png" },
      { name: "TB 4 (전압 체크, 양지)", x: 60.5, y: 51.5, type: "check", anatomyImg: "assets/circuits/user_muscles/extensor_digitorum_tb.png" }
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
    route: "회음 → 하복·복부 → 몸의 앞 정중선 → 목구멍 → 아랫입술을 돌아 양 뺨",
    check: "책에 별도 표기 없음",
    supply: "책에 별도 표기 없음",
    usesTitle: "책에 기재된 설명",
    uses: "임맥(CV)은 몸의 앞 정중선에 분포되어 있습니다. 회음에서 시작하여 하복과 뱃속을 지나 몸의 앞 정중선을 따라 곧바로 목구멍에까지 가서 아랫입술에 이른 다음 뺨을 지나 눈 속으로 들어갑니다. 인체의 마이너스 에너지를 조절합니다.",
    muscles: [
      { num: 20, ko: "교감신경 이마 연계", en: "Sympathetic Frontal Branch", x: 49.5, y: 8.5, anatomyImg: "assets/circuits/anatomy/cv_energy_circuit.jpg" },
      { num: 21, ko: "안면 신경 혈관 연계", en: "Facial Vascular Terminal", x: 45.5, y: 14.5, anatomyImg: "assets/circuits/anatomy/cv_energy_circuit.jpg" },
      { num: 12, ko: "대장 회로 연계 (3rd 늑골 공간)", en: "Large Intestine (3rd ICS)", x: 48.5, y: 22.5, anatomyImg: "assets/circuits/anatomy/cv_energy_circuit.jpg" },
      { num: 13, ko: "소장 회로 연계 (흉골 하단)", en: "Small Intestine Reflex", x: 48.5, y: 27.5, anatomyImg: "assets/circuits/anatomy/cv_energy_circuit.jpg" },
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
    check: "책에 별도 표기 없음",
    supply: "책에 별도 표기 없음",
    usesTitle: "책에 기재된 설명",
    uses: "독맥(GV)은 미골 끝 장강혈에서 시작하여 척추 안을 따라 위로 올라가 풍부혈에 이르러 뇌 속으로 들어가고, 다시 정수리로 올라가 이마와 콧마루를 거쳐 윗입술 안쪽 잇몸에서 끝납니다. 인체의 플러스 에너지를 총괄합니다.",
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
let showPins = true;

function renderList() {
  const list = $("circuit-list");
  if (!list) return;
  list.innerHTML = "";

  if (filtered.length === 0) {
    const empty = document.createElement("div");
    empty.className = "empty-search";
    empty.textContent = "검색 결과가 없습니다.";
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

    button.innerHTML = `
      <span class="circuit-order">${circuit.order.toString().padStart(2, "0")}</span>
      <span class="circuit-name-group">
        <strong>${circuit.name}</strong>
        <small>${circuit.en}</small>
      </span>
      <span class="circuit-code">${circuit.code}</span>
    `;

    button.addEventListener("click", () => {
      selectById(circuit.id);
    });

    list.appendChild(button);
  });
}

function renderMuscles(circuit) {
  const container = $("circuit-muscles");
  if (!container) return;
  container.innerHTML = "";

  const badge = $("muscle-count-badge");
  if (badge) {
    badge.textContent = `${circuit.muscles.length}개 근육 배터리`;
  }

  circuit.muscles.forEach((muscle, index) => {
    const item = document.createElement("div");
    item.className = "muscle-item";
    item.dataset.index = index;
    item.dataset.num = muscle.num;

    item.innerHTML = `
      <span class="muscle-num">${muscle.num}</span>
      <div class="muscle-name-group">
        <strong class="muscle-ko">${muscle.ko}</strong>
        <span class="muscle-en">${muscle.en}</span>
      </div>
    `;

    item.addEventListener("mouseenter", () => {
      highlightMuscle(index, true);
      showFloatingAnatomy(muscle, item, circuit);
    });

    item.addEventListener("mouseleave", () => {
      highlightMuscle(index, false);
      hideFloatingAnatomy();
    });

    item.addEventListener("click", () => {
      highlightMuscle(index, true);
      showFloatingAnatomy(muscle, item, circuit);
    });

    container.appendChild(item);
  });
}

function renderNavyTable(circuit) {
  // 1. Render bottom table below the stage
  const tbody = $("navy-table-tbody");
  const circuitBadge = $("figure-table-circuit-badge");
  if (circuitBadge) {
    circuitBadge.textContent = `${circuit.code} CIRCUIT · ${circuit.muscles.length} Batteries`;
  }

  if (tbody) {
    tbody.innerHTML = "";
    circuit.muscles.forEach((muscle, index) => {
      const tr = document.createElement("tr");
      tr.className = "navy-table-row";
      tr.dataset.index = index;
      tr.dataset.num = muscle.num;

      tr.innerHTML = `
        <td class="td-num"><span class="badge-num">${muscle.num}</span></td>
        <td class="td-ko"><strong>${muscle.ko}</strong></td>
        <td class="td-en">${muscle.en}</td>
        <td class="td-view"><button type="button" class="view-anatomy-btn">도해 보기</button></td>
      `;

      tr.addEventListener("mouseenter", () => {
        highlightMuscle(index, true);
        showFloatingAnatomy(muscle, tr, circuit);
      });

      tr.addEventListener("mouseleave", () => {
        highlightMuscle(index, false);
        hideFloatingAnatomy();
      });

      tr.addEventListener("click", () => {
        highlightMuscle(index, true);
        showFloatingAnatomy(muscle, tr, circuit);
      });

      tbody.appendChild(tr);
    });
  }

  // 2. Render canvas overlay table
  const canvasList = $("canvas-table-list");
  const canvasTitle = $("canvas-table-title");
  if (canvasTitle) {
    canvasTitle.textContent = `${circuit.name} 배터리 도표 (${circuit.code})`;
  }
  if (canvasList) {
    canvasList.innerHTML = "";
    circuit.muscles.forEach((muscle, index) => {
      const row = document.createElement("div");
      row.className = "canvas-table-row";
      row.dataset.index = index;
      row.dataset.num = muscle.num;

      row.innerHTML = `
        <span class="canvas-row-num">${muscle.num}</span>
        <span class="canvas-row-ko">${muscle.ko}</span>
        <span class="canvas-row-en">${muscle.en}</span>
      `;

      row.addEventListener("mouseenter", () => {
        highlightMuscle(index, true);
        showFloatingAnatomy(muscle, row, circuit);
      });

      row.addEventListener("mouseleave", () => {
        highlightMuscle(index, false);
        hideFloatingAnatomy();
      });

      row.addEventListener("click", () => {
        highlightMuscle(index, true);
        showFloatingAnatomy(muscle, row, circuit);
      });

      canvasList.appendChild(row);
    });
  }
}

function renderPins(circuit) {
  const overlay = $("pins-overlay");
  if (!overlay) return;
  overlay.innerHTML = "";

  if (!showPins) {
    overlay.style.display = "none";
    return;
  }
  overlay.style.display = "block";

  // Render muscle pins
  circuit.muscles.forEach((muscle, index) => {
    const pin = document.createElement("button");
    pin.type = "button";
    pin.className = "circuit-pin pin-muscle";
    pin.dataset.index = index;
    pin.dataset.num = muscle.num;
    pin.style.left = `${muscle.x}%`;
    pin.style.top = `${muscle.y}%`;
    pin.setAttribute("aria-label", `${muscle.num}번 근육: ${muscle.ko} (${muscle.en})`);

    pin.innerHTML = `<span class="pin-inner">${muscle.num}</span>`;

    pin.addEventListener("mouseenter", () => {
      highlightMuscle(index, true);
      showFloatingAnatomy(muscle, pin, circuit);
    });

    pin.addEventListener("mouseleave", () => {
      highlightMuscle(index, false);
      hideFloatingAnatomy();
    });

    pin.addEventListener("click", () => {
      highlightMuscle(index, true);
      showFloatingAnatomy(muscle, pin, circuit);
    });

    overlay.appendChild(pin);
  });

  // Render voltage check / supply points
  if (circuit.extraPoints) {
    circuit.extraPoints.forEach((pt) => {
      const pin = document.createElement("div");
      pin.className = `circuit-pin pin-point pin-${pt.type}`;
      pin.style.left = `${pt.x}%`;
      pin.style.top = `${pt.y}%`;
      pin.setAttribute("aria-label", pt.name);

      const label = pt.type === "check" ? "체" : "공";
      pin.innerHTML = `<span class="pin-inner">${label}</span>`;

      pin.addEventListener("mouseenter", () => {
        showPointTooltip(pt, pin, circuit);
      });

      pin.addEventListener("mouseleave", () => {
        hideFloatingAnatomy();
      });

      overlay.appendChild(pin);
    });
  }
}

function highlightMuscle(index, active) {
  activeMuscleIndex = active ? index : null;

  // Left card list items
  document.querySelectorAll(".muscle-item").forEach((el) => {
    const elIdx = parseInt(el.dataset.index, 10);
    el.classList.toggle("active", active && elIdx === index);
  });

  // Model pins
  document.querySelectorAll(".pin-muscle").forEach((el) => {
    const elIdx = parseInt(el.dataset.index, 10);
    el.classList.toggle("highlight", active && elIdx === index);
  });

  // Navy table rows
  document.querySelectorAll(".navy-table-row").forEach((el) => {
    const elIdx = parseInt(el.dataset.index, 10);
    el.classList.toggle("active", active && elIdx === index);
  });

  // Canvas table rows
  document.querySelectorAll(".canvas-table-row").forEach((el) => {
    const elIdx = parseInt(el.dataset.index, 10);
    el.classList.toggle("active", active && elIdx === index);
  });
}

function showFloatingAnatomy(muscle, targetEl, circuit) {
  const tooltip = $("pin-floating-tooltip");
  if (!tooltip) return;

  const imgSrc = muscle.anatomyImg || "";

  tooltip.innerHTML = `
    <div class="anatomy-pop-card">
      <div class="anatomy-pop-header">
        <span class="anatomy-pop-tag">${circuit ? circuit.name : '회로'} 배터리 [${muscle.num}]</span>
        <strong class="anatomy-pop-ko">${muscle.ko}</strong>
        <span class="anatomy-pop-en">${muscle.en}</span>
      </div>
      <div class="anatomy-pop-media">
        ${imgSrc ? `<img src="${imgSrc}" alt="${muscle.ko} 3D 도해" onerror="this.parentElement.innerHTML='<div class=\\'no-img\\'>도해 준비 중</div>'">` : `<div class="no-img">도해 준비 중</div>`}
      </div>
    </div>
  `;

  tooltip.hidden = false;

  let anchorEl = targetEl;
  if (!targetEl.classList.contains("circuit-pin") && !targetEl.classList.contains("canvas-table-row")) {
    const pin = document.querySelector(`.pin-muscle[data-num="${muscle.num}"]`);
    if (pin) anchorEl = pin;
  }

  positionTooltip(anchorEl, tooltip);
}

function showPointTooltip(pt, targetEl, circuit) {
  const tooltip = $("pin-floating-tooltip");
  if (!tooltip) return;

  const typeName = pt.type === "check" ? "전압 체크 포인트" : "전압 공급 포인트";
  const imgSrc = pt.anatomyImg || "";

  tooltip.innerHTML = `
    <div class="anatomy-pop-card point-pop-card">
      <div class="anatomy-pop-header">
        <span class="anatomy-pop-tag ${pt.type}">${typeName}</span>
        <strong class="anatomy-pop-ko">${pt.name}</strong>
      </div>
      ${imgSrc ? `
      <div class="anatomy-pop-media">
        <img src="${imgSrc}" alt="${pt.name} 도해">
      </div>
      ` : ""}
    </div>
  `;

  tooltip.hidden = false;
  positionTooltip(targetEl, tooltip);
}

function positionTooltip(targetEl, tooltip) {
  const stage = $("stage-canvas-wrap");
  if (!stage) return;

  const stageRect = stage.getBoundingClientRect();
  const targetRect = targetEl.getBoundingClientRect();

  const tipWidth = tooltip.offsetWidth || 280;
  const tipHeight = tooltip.offsetHeight || 280;

  const pinCenterX = targetRect.left - stageRect.left + (targetRect.width / 2);
  const pinCenterY = targetRect.top - stageRect.top + (targetRect.height / 2);

  let left;
  if (pinCenterX > stageRect.width * 0.45) {
    left = targetRect.left - stageRect.left - tipWidth - 14;
    if (left < 10) left = 10;
  } else {
    left = targetRect.right - stageRect.left + 14;
    if (left + tipWidth > stageRect.width - 10) {
      left = stageRect.width - tipWidth - 10;
    }
  }

  let top = pinCenterY - (tipHeight / 2);
  if (top < 10) top = 10;
  if (top + tipHeight > stageRect.height - 10) {
    top = stageRect.height - tipHeight - 10;
  }

  tooltip.style.left = `${left}px`;
  tooltip.style.top = `${top}px`;
  tooltip.style.transform = "none";
}

function hideFloatingAnatomy() {
  const tooltip = $("pin-floating-tooltip");
  if (tooltip) {
    tooltip.hidden = true;
  }
}

function renderDetail(circuit) {
  if (!circuit) return;

  $("circuit-sequence").textContent = `${circuit.order.toString().padStart(2, "0")} / 14`;
  $("circuit-title").textContent = circuit.name;
  $("circuit-title-en").textContent = circuit.en;
  $("source-page").textContent = `책 ${circuit.page}쪽`;
  $("circuit-route").textContent = circuit.route;
  $("circuit-check").textContent = circuit.check;
  $("circuit-supply").textContent = circuit.supply;

  const usesTitle = $("circuit-uses-title");
  if (usesTitle) {
    usesTitle.textContent = circuit.usesTitle || "책에 기재된 적용 질환";
  }
  $("circuit-uses").textContent = circuit.uses;

  const img = $("circuit-image");
  if (img) {
    img.src = circuit.image;
    img.alt = `${circuit.name} 인체 AI 모델 상호작용 도해`;
  }

  const caption = $("circuit-caption");
  if (caption) {
    caption.textContent = `『노바셀 통치 요법』 ${circuit.page}쪽 관련 도해 · ${circuit.name} · 체크 ${circuit.check} · 공급 ${circuit.supply}`;
  }

  renderMuscles(circuit);
  renderNavyTable(circuit);
  renderPins(circuit);

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
      const matchUses = c.uses.toLowerCase().includes(q);
      const matchMuscles = c.muscles.some(
        (m) => m.ko.toLowerCase().includes(q) || m.en.toLowerCase().includes(q)
      );
      const matchPoints = c.extraPoints && c.extraPoints.some((p) => p.name.toLowerCase().includes(q));
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

  const togglePinsBtn = $("toggle-pins-btn");
  if (togglePinsBtn) {
    togglePinsBtn.addEventListener("click", () => {
      showPins = !showPins;
      togglePinsBtn.classList.toggle("active", showPins);
      const overlay = $("pins-overlay");
      if (overlay) {
        overlay.style.display = showPins ? "block" : "none";
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

  renderList();
  renderDetail(CIRCUITS[selected]);
});
