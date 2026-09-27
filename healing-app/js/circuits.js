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
    name: "\uC704\uC7A5 \uD68C\uB85C",
    en: "Stomach (ST) Circuit",
    page: 209,
    image: "assets/circuits/stomach.png",
    route: "\uB208 \uC544\uB798 \u2192 \uC785 \uC8FC\uC704 \u2192 \uBAA9 \u2192 \uD749\uBCF5\uBD80 \u2192 \uD558\uC9C0 \uC804\uBA74 \uC678\uCE21 \u2192 \uC81C2\u00B73\uC871\uC9C0",
    check: "ST 42",
    supply: "ST 41",
    uses: "\uC704 \uC9C8\uD658, \uC704\uC0B0\uACFC\uB2E4, \uC2ED\uC774\uC9C0\uC7A5\uADFF\uC591, \uC704\uD558\uC218, \uAD6C\uC548\uC640\uC0AC, \uC548\uBA74\uC2E0\uACBD\uB9C8\uBE44, \uC2AC\uAD00\uC808\uD1B5, \uACE0\uAD00\uC808\uD1B5, \uB450\uD1B5, \uCE58\uD1B5, \uC548\uAD6C\uD1B5, \uAC11\uC0C1\uC120 \uC9C8\uD658 \uB4F1\uC758 \uC9C8\uD658\uC5D0 \uC801\uC6A9\uD569\uB2C8\uB2E4.",
    muscles: [
      { num: 1, ko: "\uC804\uACBD\uACE8\uADFC", en: "Tibialis anterior", x: 68.0, y: 78.5, anatomyImg: "assets/circuits/user_muscles/tibialis_anterior_stomach_v2.png" },
      { num: 2, ko: "\uC7A5\uC9C0\uC2E0\uADFC", en: "Extensor digitorum longus", x: 69.5, y: 75.0, anatomyImg: "assets/circuits/user_muscles/extensor_digitorum_longus_stomach.png" },
      { num: 3, ko: "\uC7A5\uBAA8\uC9C0\uC2E0\uADFC", en: "Extensor hallucis longus", x: 68.5, y: 79.5, anatomyImg: "assets/circuits/user_muscles/extensor_hallucis_longus_stomach.png" },
      { num: 4, ko: "\uB2E8\uBAA8\uC9C0\uC2E0\uADFC", en: "Extensor hallucis brevis", x: 69.0, y: 82.0, anatomyImg: "assets/circuits/user_muscles/extensor_hallucis_brevis_stomach.png" },
      { num: 5, ko: "\uB300\uD1F4\uC9C1\uADFC", en: "Rectus femoris", x: 67.0, y: 56.5, anatomyImg: "assets/circuits/user_muscles/rectus_femoris_stomach_v2.png" },
      { num: 6, ko: "\uB300\uD1F4\uC0AC\uB450\uADFC (\uB0B4/\uC678\uCE21\uAD11\uADFC)", en: "Quadriceps (Vastus lateralis/medialis)", x: 65.5, y: 61.5, anatomyImg: "assets/circuits/user_muscles/quadriceps_vastus_stomach.png" },
      { num: 7, ko: "\uC11C\uD61C\uC778\uB300", en: "Inguinal ligament", x: 61.0, y: 47.5, anatomyImg: "assets/circuits/user_muscles/inguinal_ligament_stomach.png" },
      { num: 8, ko: "\uB300\uD749\uADFC \uC1C4\uACE8\uB450", en: "Pectoralis major clavicular", x: 60.5, y: 25.5, anatomyImg: "assets/circuits/user_muscles/pectoralis_major_clavicular_stomach.png" },
      { num: 9, ko: "\uBCF5\uC9C1\uADFC", en: "Rectus abdominis", x: 57.5, y: 39.0, anatomyImg: "assets/circuits/user_muscles/rectus_abdominis_stomach.png" },
      { num: 10, ko: "\uC548\uB95C\uADFC", en: "Orbicularis oculi", x: 50.0, y: 11.5, anatomyImg: "assets/circuits/user_muscles/orbicularis_oculi_stomach.png" },
      { num: 11, ko: "\uAD6C\uB95C\uADFC", en: "Orbicularis oris", x: 49.5, y: 14.5, anatomyImg: "assets/circuits/user_muscles/orbicularis_oris_stomach.png" },
      { num: 12, ko: "\uAD50\uADFC (\uCC9C\uCE35)", en: "Superficial masseter", x: 53.0, y: 13.5, anatomyImg: "assets/circuits/user_muscles/masseter_stomach.png" },
      { num: 13, ko: "\uCE21\uB450\uADFC \uC804\uB450\uBD80", en: "Temporalis anterior", x: 53.5, y: 10.0, anatomyImg: "assets/circuits/user_muscles/temporalis_anterior_stomach.png" }
    ],
    extraPoints: [
      { name: "ST 41 (\uC804\uC555 \uACF5\uAE09, \uD574\uACC4)", x: 68.0, y: 86.5, type: "supply", anatomyImg: "assets/circuits/user_muscles/tibialis_anterior_stomach_v2.png" },
      { name: "ST 42 (\uC804\uC555 \uCCB4\uD06C, \uCDA9\uC591)", x: 68.5, y: 89.0, type: "check", anatomyImg: "assets/circuits/user_muscles/tibialis_anterior_stomach_v2.png" }
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
    name: "\uAC04 \uD68C\uB85C",
    en: "Liver (LV) Circuit",
    page: 212,
    image: "assets/circuits/liver.png",
    route: "\uC871\uB300\uC9C0 \uC678\uCE21 \u2192 \uC871\uBC30 \u2192 \uACBD\uACE8 \uB0B4\uCE21 \u2192 \uB300\uD1F4 \uB0B4\uCE21 \u2192 \uC0DD\uC2DD\uAE30 \u2192 \uD558\uBCF5\uBD80 \u2192 \uAE30\uBB38",
    check: "LV 3",
    supply: "LV 8",
    uses: "\uAC04\uC7A5 \uC9C8\uD658, \uD669\uB2EC, \uB2F4\uC11D\uC99D, \uC2E0\uACBD\uC3E0\uC57D, \uC548\uC9C8\uD658, \uB179\uB0B4\uC7A5, \uADFC\uC721 \uACBD\uB828, \uACE0\uD608\uC555, \uB291\uAC04 \uC2E0\uACBD\uD1B5, \uC0DD\uC2DD\uAE30 \uC9C8\uD658, \uC0DD\uB9AC\uD1B5 \uB4F1\uC758 \uC9C8\uD658\uC5D0 \uC801\uC6A9\uD569\uB2C8\uB2E4.",
    muscles: [
      { num: 1, ko: "\uC7A5\u00B7\uB2E8\uBE44\uACE8\uADFC", en: "Fibularis longus/brevis", x: 67.5, y: 80.0, anatomyImg: "assets/circuits/user_muscles/tibialis_posterior_liver.png" },
      { num: 2, ko: "\uD6C4\uACBD\uACE8\uADFC", en: "Tibialis posterior", x: 68.0, y: 81.5, anatomyImg: "assets/circuits/user_muscles/tibialis_posterior_liver.png" },
      { num: 3, ko: "\uC7A5\uBAA8\uC9C0\uAD74\uADFC", en: "Flexor hallucis longus", x: 69.5, y: 84.5, anatomyImg: "assets/circuits/user_muscles/flexor_hallucis_longus_liver.png" },
      { num: 4, ko: "\uC2AC\uC640\uADFC", en: "Popliteus", x: 68.5, y: 70.0, anatomyImg: "assets/circuits/user_muscles/popliteus_liver.png" },
      { num: 5, ko: "\uB300\uB0B4\uC804\uADFC (\uC7A5\u00B7\uB2E8\uB0B4\uC804\uADFC)", en: "Adductor magnus / longus", x: 66.5, y: 58.5, anatomyImg: "assets/circuits/user_muscles/adductor_magnus_liver.png" },
      { num: 6, ko: "\uD3D0\uC1C4\uADFC", en: "Obturator muscle", x: 65.0, y: 52.0, anatomyImg: "assets/circuits/user_muscles/obturator_muscle_liver.png" },
      { num: 7, ko: "\uC7A5\uACE8\uADFC", en: "Iliacus", x: 62.5, y: 48.0, anatomyImg: "assets/circuits/user_muscles/iliacus_liver.png" },
      { num: 8, ko: "\uB300\uC694\uADFC", en: "Psoas major", x: 61.5, y: 44.5, anatomyImg: "assets/circuits/user_muscles/psoas_major_liver.png" },
      { num: 9, ko: "\uD6A1\uACA9\uB9C9", en: "Diaphragm", x: 57.5, y: 34.0, anatomyImg: "assets/circuits/user_muscles/diaphragm_liver.png" },
      { num: 10, ko: "\uD749\uB9C9", en: "Pleura", x: 56.5, y: 29.5, anatomyImg: "assets/circuits/user_muscles/pleura_liver.png" },
      { num: 11, ko: "\uC2EC\uB0AD", en: "Pericardium", x: 55.5, y: 27.0, anatomyImg: "assets/circuits/user_muscles/pericardium_liver.png" },
      { num: 12, ko: "\uC124\uACE8\uC0C1\uADFC\uAD70 (\uC545\uC124\uACE8\uADFC/\uC774\uC124\uACE8\uADFC)", en: "Suprahyoid muscles", x: 49.5, y: 15.5, anatomyImg: "assets/circuits/user_muscles/hyoid_muscles_liver.png" },
      { num: 13, ko: "\uB450\uC7A5\uADFC / \uACBD\uC7A5\uADFC", en: "Longus capitis / colli", x: 50.5, y: 19.0, anatomyImg: "assets/circuits/user_muscles/longus_capitis_liver.png" }
    ],
    extraPoints: [
      { name: "LV 8 (\uC804\uC555 \uACF5\uAE09, \uACE1\uCC8C)", x: 69.0, y: 67.0, type: "supply", anatomyImg: "assets/circuits/user_muscles/flexor_hallucis_longus_liver.png" },
      { name: "LV 3 (\uC804\uC555 \uCCB4\uD06C, \uD0DC\uCDA9)", x: 69.0, y: 89.5, type: "check", anatomyImg: "assets/circuits/user_muscles/flexor_hallucis_longus_liver.png" }
    ]
  },
  {
    id: "gallbladder",
    order: 10,
    code: "GB",
    name: "\uB2F4\uB0AD \uD68C\uB85C",
    en: "Gallbladder (GB) Circuit",
    page: 213,
    image: "assets/circuits/gallbladder.png",
    route: "\uB208 \uC678\uCE21 \u2192 \uCE21\uB450\uBD80 \uD3B8\uCE21 \u2192 \uBAA9 \u2192 \uD749\uD611\uBD80 \uCE21\uBA74 \u2192 \uACE0\uAD00\uC808 \u2192 \uD558\uC9C0 \uC678\uCE21 \u2192 \uC81C4\uC871\uC9C0",
    check: "GB 40",
    supply: "GB 43",
    uses: "\uB2F4\uC11D\uC99D, \uD669\uB2EC, \uC2E0\uACBD\uD1B5, \uB291\uAC04 \uC2E0\uACBD\uD1B5, \uACE0\uD608\uC555, \uD3B8\uB450\uD1B5, \uC88C\uACE8\uC2E0\uACBD\uD1B5, \uC774\uBA85, \uBC31\uB0B4\uC7A5, \uC911\uC774\uC5FC, \uC5B4\uAE68 \uACB0\uB9BC, \uBB34\uB98E \uAD00\uC808\uD1B5 \uB4F1\uC758 \uC9C8\uD658\uC5D0 \uC801\uC6A9\uD569\uB2C8\uB2E4.",
    muscles: [
      { num: 1, ko: "\uC81C3\uBE44\uACE8\uADFC", en: "Fibularis tertius", x: 73.5, y: 86.5, anatomyImg: "assets/circuits/user_muscles/fibularis_tertius_gallbladder.png" },
      { num: 2, ko: "\uB2E8\uBE44\uACE8\uADFC", en: "Fibularis brevis", x: 74.0, y: 83.0, anatomyImg: "assets/circuits/user_muscles/fibularis_brevis_gallbladder.png" },
      { num: 3, ko: "\uC7A5\uBE44\uACE8\uADFC", en: "Fibularis longus", x: 73.5, y: 78.5, anatomyImg: "assets/circuits/user_muscles/fibularis_longus_gallbladder.png" },
      { num: 4, ko: "\uC7A5\uACBD\uC778\uB300 (IT Band)", en: "Iliotibial tract", x: 71.0, y: 63.5, anatomyImg: "assets/circuits/user_muscles/iliotibial_tract_gallbladder.png" },
      { num: 5, ko: "\uB300\uD1F4\uADFC\uB9C9\uC7A5\uADFC (TFL)", en: "Tensor fasciae latae", x: 69.5, y: 53.0, anatomyImg: "assets/circuits/user_muscles/tensor_fasciae_latae_gallbladder.png" },
      { num: 6, ko: "\uC694\uBC29\uD615\uADFC / \uC678\uBCF5\uC0AC\uADFC", en: "External oblique / QL", x: 64.5, y: 44.5, anatomyImg: "assets/circuits/user_muscles/external_oblique_gallbladder.png" },
      { num: 7, ko: "\uC804\uAC70\uADFC / \uB291\uAC04\uADFC", en: "Intercostal muscles", x: 62.0, y: 33.5, anatomyImg: "assets/circuits/user_muscles/intercostal_muscles_gallbladder.png" },
      { num: 8, ko: "\uC2EC\uBD80\uAD50\uADFC", en: "Deep masseter", x: 53.0, y: 14.5, anatomyImg: "assets/circuits/user_muscles/deep_masseter_gallbladder.png" },
      { num: 9, ko: "\uB450\uD310\uC0C1\uADFC", en: "Splenius capitis", x: 50.0, y: 17.5, anatomyImg: "assets/circuits/user_muscles/splenius_capitis_gallbladder.png" },
      { num: 10, ko: "\uB450\uBC18\uADF9\uADFC", en: "Semispinalis capitis", x: 51.5, y: 16.0, anatomyImg: "assets/circuits/user_muscles/semispinalis_capitis_gallbladder.png" },
      { num: 11, ko: "\uCE21\uB450\uADFC (\uC911\u00B7\uD6C4\uBD80)", en: "Temporalis (Middle/Posterior)", x: 48.0, y: 11.5, anatomyImg: "assets/circuits/user_muscles/temporalis_gallbladder.png" }
    ],
    extraPoints: [
      { name: "GB 43 (\uC804\uC555 \uACF5\uAE09, \uD611\uACC4)", x: 74.5, y: 92.0, type: "supply", anatomyImg: "assets/circuits/user_muscles/fibularis_longus_gallbladder.png" },
      { name: "GB 40 (\uC804\uC555 \uCCB4\uD06C, \uAD6C\uD5C8)", x: 73.0, y: 88.0, type: "check", anatomyImg: "assets/circuits/user_muscles/fibularis_longus_gallbladder.png" }
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

function isNoHoverCircuit(c) {
  if (!c) return false;
  return (c.id === "conception-vessel" || c.id === "governor-vessel" || c.order === 13 || c.order === 14);
}

function alignFigureWithMuscle(item) {
  const figureCol = document.getElementById("detail-figure-col") || document.getElementById("circuit-figure-card");
  const detailGrid = document.querySelector(".detail-grid");
  if (!figureCol || !detailGrid) return;

  // On mobile or tablet single-column view, do not shift translateY
  if (window.innerWidth <= 1024) {
    figureCol.style.transform = "none";
    return;
  }

  const gridRect = detailGrid.getBoundingClientRect();
  const itemRect = item.getBoundingClientRect();

  // Target relative top offset from top of the grid
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
    countBadge.textContent = `${circuit.muscles.length}\uAC1C \uADFC\uC721`; // "N媛?洹쇱쑁"
  }

  const noHover = isNoHoverCircuit(circuit);

  circuit.muscles.forEach((muscle, index) => {
    const item = document.createElement("div");
    item.className = "muscle-item" + (noHover ? " no-hover" : "");
    item.dataset.index = index;
    item.dataset.num = muscle.num;

    item.innerHTML = `
      <span class="muscle-num">${muscle.num}</span>
      <div class="muscle-name-group">
        <strong class="muscle-ko">${muscle.ko}</strong>
        <span class="muscle-en">${muscle.en}</span>
      </div>
    `;

    // 13 & 14 have NO hover/popup effects
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

  // Reset alignment when mouse leaves container
  container.addEventListener("mouseleave", () => {
    if (!noHover) {
      resetFigureAlignment();
    }
  });
}
// 2. Fixed 3D Anatomy Card Display
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

  if (badge) badge.textContent = `[${muscle.num}] ${circuit.name} \uBC30\uD130\uB9AC`; // "諛고꽣由?
  if (title) title.textContent = muscle.ko;
  if (en) en.textContent = muscle.en;

  if (img && muscle.anatomyImg) {
    img.src = muscle.anatomyImg;
    img.alt = `${muscle.ko} 3D \uB3C4\uD574`;
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
  $("circuit-title").textContent = circuit.name;
  $("circuit-title-en").textContent = circuit.en;
  $("source-page").textContent = `\uCC45 ${circuit.page}\uCABD`; // "梨?N履?
  $("circuit-route").textContent = circuit.route;
  $("circuit-check").textContent = circuit.check;
  $("circuit-supply").textContent = circuit.supply;

  const usesTitle = $("circuit-uses-title");
  if (usesTitle) {
    usesTitle.textContent = circuit.usesTitle || "\uCC45\uC5D0 \uAE30\uC7AC\uB41C \uC801\uC6A9 \uC9C8\uD658";
  }
  $("circuit-uses").textContent = circuit.uses;

  const img = $("circuit-image");
  if (img) {
    img.src = circuit.image;
    img.alt = `${circuit.name} \uC778\uCCB4 AI \uBAA8\uB378 \uB3C4\uD574`;
  }

  const caption = $("circuit-caption");
  if (caption) {
    caption.textContent = `\u300E\uB178\uBC14\uC140 \uD1B5\uCE58 \uC694\uBC95\u300F ${circuit.page}\uCABD \uAD00\uB828 \uB3C4\uD574 \u00B7 ${circuit.name} \u00B7 \uCCB4\uD06C ${circuit.check} \u00B7 \uACF5\uAE09 ${circuit.supply}`;
  }

  renderMuscles(circuit);
  resetFixedAnatomy(circuit); resetFigureAlignment();

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

/* ==========================================================================
   5. 528Hz Healing Voltage Timer & Tibetan Singing Bowl Audio Engine
   ========================================================================== */
/* ==========================================================================
   5. 528Hz Healing Voltage Timer & Tibetan Singing Bowl Audio Engine
   ========================================================================== */
/* ==========================================================================
   5. 528Hz Healing Voltage Timer & Tibetan Singing Bowl Audio Engine
   ========================================================================== */
/* ==========================================================================
   5. 528Hz Healing Voltage Timer & Tibetan Singing Bowl Audio Engine
   ========================================================================== */
let audioCtx = null;
let osc528 = null;
let oscSub = null;
let timerGainNode = null;
let isAudioMuted = false;
let masterVolume = 0.65; // Default volume: 65%

let totalTimerSeconds = 300;
let remainingTimerSeconds = 300;
let timerInterval = null;
let isTimerRunning = false;

function getAudioContext() {
  if (!audioCtx) {
    const AudioCtxClass = window.AudioContext || window.webkitAudioContext;
    if (AudioCtxClass) {
      audioCtx = new AudioCtxClass();
    }
  }
  if (audioCtx && audioCtx.state === "suspended") {
    audioCtx.resume();
  }
  return audioCtx;
}

function setVolume(pct) {
  masterVolume = Math.max(0, Math.min(100, pct)) / 100;
  try {
    localStorage.setItem("novacell_timer_vol", masterVolume);
  } catch (e) {}

  const slider = $("timer-volume-slider");
  const pctLabel = $("vol-pct");
  const volIcon = $("vol-icon");

  const displayPct = Math.round(masterVolume * 100);
  if (slider && parseInt(slider.value, 10) !== displayPct) {
    slider.value = displayPct;
  }
  if (pctLabel) {
    pctLabel.textContent = `${displayPct}%`;
  }

  if (volIcon) {
    if (masterVolume <= 0.01 || isAudioMuted) {
      volIcon.textContent = "\uD83D\uDD07"; // ?뵁
    } else if (masterVolume < 0.5) {
      volIcon.textContent = "\uD83D\uDD09"; // ?뵃
    } else {
      volIcon.textContent = "\uD83D\uDD0A"; // ?뵄
    }
  }

  // Adjust currently playing 528Hz tone in real time
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
  // If already playing continuously, keep playing without interruption
  if (osc528 && timerGainNode) return;

  stop528HzSound();

  const now = ctx.currentTime;
  const vol = Math.max(0, Math.min(1, masterVolume));

  // Lowpass filter for smooth, warm solfeggio tone (no harsh screech)
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

  // 528Hz Solfeggio fundamental tone (DNA repair / Cellular voltage restoration)
  const o528 = ctx.createOscillator();
  o528.type = "sine";
  o528.frequency.setValueAtTime(528.0, now);
  o528.connect(masterGain);
  o528.start(now);
  osc528 = o528;

  // 264Hz subharmonic octave resonance (warm, grounded soothing overtone)
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
   Genuine Tibetan Meditation Singing Bowl Synthesis
   - Soft padded felt-mallet strike (no harsh metallic click)
   - Lowpass filtered (<650Hz) for deep golden bronze warmth
   - 1.4Hz binaural acoustic beating ("??~~~ ?? ?? ??")
   - Rich 9-second meditative lingering decay
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

  // Lowpass filter: cuts all harsh high-frequency noise above 650Hz completely
  const filter = ctx.createBiquadFilter();
  filter.type = "lowpass";
  filter.frequency.setValueAtTime(650, now);
  filter.Q.setValueAtTime(2.2, now);
  filter.connect(ctx.destination);

  // Meditation bowl harmonic structure
  const voices = [
    { freq: 264.0, gain: 0.45 * vol, decay: 9.0 },  // Primary warm bowl body
    { freq: 265.4, gain: 0.40 * vol, decay: 8.5 },  // Acoustic tremolo beating (1.4Hz soothing wobble)
    { freq: 132.0, gain: 0.28 * vol, decay: 7.5 },  // Deep temple gong sub-bass foundation
    { freq: 528.0, gain: 0.16 * vol, decay: 6.0 },  // Sweet soft Solfeggio harmonic overtone
    { freq: 529.2, gain: 0.12 * vol, decay: 5.5 }   // Subtle harmonic shimmer
  ];

  voices.forEach((v) => {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = "sine";
    osc.frequency.setValueAtTime(v.freq, now);

    // Felt-mallet soft attack (0.09s) - zero sharp transient click
    gain.gain.cancelScheduledValues(now);
    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.linearRampToValueAtTime(v.gain, now + 0.09);

    // Long, deep, tranquil decay (??~~~ ?? ?? ??)
    gain.gain.exponentialRampToValueAtTime(0.00005, now + v.decay);

    osc.connect(gain);
    gain.connect(filter);

    osc.start(now);
    osc.stop(now + v.decay + 0.1);
  });
}

function playTestChime() {
  if (masterVolume <= 0.01) return;
  try {
    const ctx = getAudioContext();
    if (!ctx) return;
    const now = ctx.currentTime;
    const vol = Math.max(0, Math.min(1, masterVolume));

    const filter = ctx.createBiquadFilter();
    filter.type = "lowpass";
    filter.frequency.setValueAtTime(800, now);
    filter.connect(ctx.destination);

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = "sine";
    osc.frequency.setValueAtTime(528, now);

    gain.gain.cancelScheduledValues(now);
    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.linearRampToValueAtTime(0.24 * vol, now + 0.06);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.6);

    osc.connect(gain);
    gain.connect(filter);

    osc.start(now);
    osc.stop(now + 0.65);
  } catch (e) {}
}

function updateTimerDisplay() {
  const display = $("timer-time-display");
  const bar = $("timer-bar-fill");

  const mins = Math.floor(remainingTimerSeconds / 60);
  const secs = remainingTimerSeconds % 60;
  if (display) {
    display.textContent = `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  }

  if (bar) {
    const pct = totalTimerSeconds > 0 ? (remainingTimerSeconds / totalTimerSeconds) * 100 : 0;
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
  if (label) label.textContent = "\uC77C\uC2DC\uC815\uC9C0";
  if (icon) icon.textContent = "\u23F8";
  if (badge) {
    badge.textContent = "528Hz \uCE58\uC720 \uC911";
    badge.className = "timer-status-badge running";
  }
  if (pulseDot) pulseDot.className = "freq-pulse-dot pulsing";
  if (freqLabel) freqLabel.textContent = "528Hz \uC8FC\uD30C\uC218 \uBC1C\uC0DD \uC911";

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
  if (label) label.textContent = "\uACC4\uC18D \uC2DC\uC791";
  if (icon) icon.textContent = "\u25B6";
  if (badge) {
    badge.textContent = "\uC77C\uC2DC\uC815\uC9C0";
    badge.className = "timer-status-badge";
  }
  if (pulseDot) pulseDot.className = "freq-pulse-dot";
  if (freqLabel) freqLabel.textContent = "\uCE58\uC720 \uC77C\uC2DC\uC815\uC9C0";
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
  if (label) label.textContent = "\uCE58\uC720 \uD0C0\uC774\uBA38 \uC2DC\uC791";
  if (icon) icon.textContent = "\u25B6";
  if (badge) {
    badge.textContent = "\uB300\uAE30 \uC911";
    badge.className = "timer-status-badge";
  }
  if (pulseDot) pulseDot.className = "freq-pulse-dot";
  if (freqLabel) freqLabel.textContent = "528Hz \uCE58\uC720 \uC8FC\uD30C\uC218 \uC900\uBE44";
}

function finishTimer() {
  pauseTimer();
  remainingTimerSeconds = 0;
  updateTimerDisplay();

  const badge = $("timer-status-badge");
  const freqLabel = $("freq-label");
  const label = $("timer-btn-label");

  if (badge) {
    badge.textContent = "\uCE58\uC720 \uC644\uB8CC \uD83D\uDD14";
    badge.className = "timer-status-badge finished";
  }
  if (freqLabel) freqLabel.textContent = "\uC2F1\uC789\uBCFC \uB9C8\uBB34\uB9AC \uC54C\uB9BC";
  if (label) label.textContent = "\uB2E4\uC2DC \uC2DC\uC791";

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
      if (icon) icon.textContent = isAudioMuted ? "\uD83D\uDD07" : "\uD83D\uDD0A";
      if (sLabel) sLabel.textContent = isAudioMuted ? "\uCE58\uC720\uC74C \uAEBC\uC9D0" : "\uCE58\uC720\uC74C \uCF1C\uC9D0";

      const volIcon = $("vol-icon");
      if (volIcon) {
        volIcon.textContent = isAudioMuted ? "\uD83D\uDD07" : (masterVolume < 0.5 ? "\uD83D\uDD09" : "\uD83D\uDD0A");
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

  // Volume slider event listener
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
          if (icon) icon.textContent = "\uD83D\uDD0A";
          if (sLabel) sLabel.textContent = "\uCE58\uC720\uC74C \uCF1C\uC9D0";
        }
      }
      setVolume(val);
    });
  }

  // Restore saved volume
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
   6. Header Menu Multi-Language Switcher (KO / EN)
   ========================================================================== */
function initLanguageToggle() {
  const langBtn = $("lang-toggle-btn");
  let currentLang = localStorage.getItem("novacell_site_lang") || "ko";

  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.get("lang") === "en") {
    currentLang = "en";
  }

  function applyLang(lang) {
    currentLang = lang;
    try {
      localStorage.setItem("novacell_site_lang", lang);
    } catch (e) {}

    const navTherapy = $("nav-therapy");
    const navChakra = $("nav-chakra");
    const navCircuit = $("nav-circuit");
    const brandSub = $("brand-sub-title");

    if (lang === "en") {
      if (navTherapy) navTherapy.textContent = "Therapy Points";
      if (navChakra) navChakra.textContent = "Chakra Bio Points";
      if (navCircuit) navCircuit.textContent = "Neural Circuit";
      if (brandSub) brandSub.textContent = "NEURAL CIRCUIT GUIDE";
      if (langBtn) {
        langBtn.querySelector(".lang-opt.ko")?.classList.remove("active");
        langBtn.querySelector(".lang-opt.en")?.classList.add("active");
      }
    } else {
      if (navTherapy) navTherapy.textContent = "\uCE58\uB8CC \uD3EC\uC778\uD2B8";
      if (navChakra) navChakra.textContent = "\uCC28\uD06C\uB77C \uBC14\uC774\uC624 \uD3EC\uC778\uD2B8";
      if (navCircuit) navCircuit.textContent = "\uC2E0\uACBD \uC0DD\uCCB4 \uD68C\uB85C";
      if (brandSub) brandSub.textContent = "NEURAL CIRCUIT GUIDE";
      if (langBtn) {
        langBtn.querySelector(".lang-opt.ko")?.classList.add("active");
        langBtn.querySelector(".lang-opt.en")?.classList.remove("active");
      }
    }
  }

  if (langBtn) {
    langBtn.addEventListener("click", () => {
      const nextLang = currentLang === "ko" ? "en" : "ko";
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

  renderList();
  renderDetail(CIRCUITS[selected]);
  initTimerEvents();
  initLanguageToggle();
});
