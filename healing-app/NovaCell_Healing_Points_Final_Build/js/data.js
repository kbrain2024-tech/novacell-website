/**
 * NovaCell Healing Points - Clinical Knowledge Base (Full Master Taxonomy: 32 Conditions)
 * NOVACELL CLINICAL GUIDE: 고전압 미세전류 펜 도자 임상 치유 레시피 시스템
 * 
 * [원칙 준수 사항]
 * 1. 단일 펜 도자(Monopolar Pen Probe) 고전압 미세전류 통전 프로토콜 준수
 * 2. 해부학적 위험 구조물(동맥, 흉막, 신경간 등) 회피 및 안전 접촉 가이드 완비
 * 3. 풍부한 실제 임상 증례(기왕력, 이학적 검사, 통전 반응, 호전 경과) 수록
 * 4. 금기 용어 전면 배제 및 올바른 학술/임상 용어 정착
 */

export const CATEGORIES = [
  { id: 'all', nameKo: '전체 질환 (32종)', nameEn: 'All Conditions', icon: 'grid' },
  { id: 'head-neck', nameKo: '두경부 / 안면 / 턱관절', nameEn: 'Head & Neck & TMJ', icon: 'smile' },
  { id: 'shoulder-arm', nameKo: '견관절 / 상지부', nameEn: 'Shoulder & Upper Arm', icon: 'shield' },
  { id: 'hand-wrist', nameKo: '팔꿈치 / 손목 / 수부', nameEn: 'Elbow & Hand & Wrist', icon: 'hand' },
  { id: 'trunk-chest', nameKo: '흉부 / 복부 / 흉배부', nameEn: 'Thorax & Torso & Back', icon: 'layers' },
  { id: 'lumbar-pelvis', nameKo: '요추 / 둔부 / 골반', nameEn: 'Lumbar & Pelvis & Hip', icon: 'activity' },
  { id: 'knee-foot', nameKo: '슬관절 / 족부 / 하지', nameEn: 'Knee & Ankle & Foot', icon: 'target' },
  { id: 'autonomic', nameKo: '자율신경 / 전신 질환', nameEn: 'Autonomic & Systemic', icon: 'zap' }
];

export const CONDITIONS_DATA = [
  // =========================================================================
  // 1. 두경부 / 안면 / 턱관절 (Head, Neck & TMJ)
  // =========================================================================
  {
    id: 'cervicogenic-headache',
    categoryId: 'head-neck',
    titleKo: '경추성 두통 / 후두신경통',
    titleEn: 'Cervicogenic Headache & Occipital Neuralgia',
    badge: '두경부 대표',
    illustrationImage: 'assets/regions/cervicogenic-headache-occipital-neuralgia.webp',
    overview: '경추 상부(C1-C3) 신경근 자극과 후두하근막의 긴장으로 인해 후두신경이 포착되어 발생하는 두통입니다. 관자놀이, 정수리, 안구 뒤쪽까지 방사통이 뻗칩니다.',
    symptoms: [
      '뒷머리(후두부)가 묵직하고 쥐어짜는 듯한 통증',
      '두통 발생 시 눈 주위나 이마, 관자놀이까지 당기고 아픔',
      '목을 뒤로 젖히거나 돌릴 때 두통이 심해짐',
      '만성적인 어깨 결림, 만성 피로 및 어지럼증 동반'
    ],
    pathologyMechanism: 'C1-C3 척수 신경근의 후지(Dorsal rami)가 후두하근(두소후두직근, 상두사근 등)과 승모근 건막을 뚫고 나오는 부위에서 압박 및 허혈을 받습니다. 삼차신경-경수 복합체(Trigeminocervical complex)의 감작으로 인해 안면 및 안구 통증으로 투사됩니다.',
    healingPoints: [
      {
        id: 'HP-HN-01',
        code: 'HP-01',
        nameKo: '대후두신경 출구점 (상항선 통과부)',
        nameEn: 'Greater Occipital Nerve (Superior Nuchal Line)',
        targetAnatomy: '대후두신경(C2 후지), 승모근 및 두반극근 부착건막',
        locationGuide: '외후두융기(EOP)에서 외측 2~2.5cm, 상항선 바로 아래 압통점',
        significance: '후두부 통증 및 두정부(정수리) 방사통의 직접적인 포착 해소 포인트',
        pinCoordinates: { x: 46.0, y: 13.5, view: 'posterior' }
      },
      {
        id: 'HP-HN-02',
        code: 'HP-02',
        nameKo: '후두하삼각 심부점 (C1-C2 척추사이)',
        nameEn: 'Suboccipital Triangle Core (C1-C2 Gap)',
        targetAnatomy: '상/하두사근, 대후두직근 사이 삼각영역, 추골동맥 주위 교감신경총',
        locationGuide: '상항선 아래 C2 극돌기 외측 2cm 오목한 함요처',
        significance: '뇌혈류 순환 촉진, 긴장성/혈관성 두통 및 어지럼증의 핵심 스위치',
        pinCoordinates: { x: 50.0, y: 14.5, view: 'posterior' }
      },
      {
        id: 'HP-HN-03',
        code: 'HP-03',
        nameKo: '소후두신경 통과점 (유양돌기 후하방)',
        nameEn: 'Lesser Occipital Nerve (Retro-Mastoid)',
        targetAnatomy: '소후두신경(C2,3 전지 분지), 흉쇄유돌근(SCM) 후연 상단',
        locationGuide: '귀 뒤쪽 유양돌기(Mastoid process) 바로 뒤 오목한 경계부',
        significance: '측두부(관자놀이) 및 귀 뒤쪽 찌르는 통증, 편두통 완화',
        pinCoordinates: { x: 55.0, y: 14.0, view: 'posterior' }
      },
      {
        id: 'HP-HN-04',
        code: 'HP-04',
        nameKo: '경추 C2-C3 후관절 분절점',
        nameEn: 'C2-C3 Facet Joint Segmental Point',
        targetAnatomy: '제3후두신경(TON), C2-3 관절포 및 다열근 부착부',
        locationGuide: '경추 2번 극돌기 하외측 약 1.5cm 관절주두 촉지부',
        significance: '경추성 연관통의 근원 분절을 직접 탈감작시키는 중추 반사점',
        pinCoordinates: { x: 47.0, y: 16.5, view: 'posterior' }
      }
    ],
    novaCellProtocol: {
      probeType: '단일 펜 도자 (Monopolar Pen Probe - 무극성 고전압 미세전류)',
      contactMethod: '점진적 심부 압박 접촉 (Point Compression) 후 미세 회전 통전',
      contactDurationPerPoint: '\uD3EC\uC778\uD2B8\uB2F9 20\uCD08 ~ 30\uCD08 (\uD658\uC790\uAC00 \uB530\uB054 \uAC70\uB9BC\uC774 \uC0AC\uB77C\uC9C0\uAC70\uB098 \uBB35\uC9C1\uD55C \uC774\uC644\uAC10\uC744 \uB290\uB084\uB54C\uAE4C\uC9C0)',
      outputIntensity: '\uACE0\uC804\uC555 \uBBF8\uC138\uC804\uB958 03~05\uB2E8\uACC4 (\uD3B8\uC548\uD55C \uD384\uC2A4 \uC9C4\uB3D9 \uAC10\uAC01)',
      stingingRemedy: '\uD658\uBD80\uC5D0 \uC54C\uCF5C \uB610\uB294 \uC0DD\uB9AC\uC2DD\uC5FC\uC218 \uC2A4\uD504\uB808\uC774',
      treatmentSequence: [
        '1단계 [분절 안정화]: HP-04 (C2-C3 후관절점)에 펜 도자를 25초간 접촉하여 중추 분절 흥분을 가라앉힙니다.',
        '2단계 [심부 순환 개방]: HP-02 (후두하삼각점)에 도자를 수직으로 부드럽게 대어 30초간 통전합니다.',
        '3단계 [말초 신경 포착 해소]: HP-01 (대후두신경점) 및 HP-03 (소후두신경점)에 각각 20초씩 펜을 접촉하여 방사통 경로를 차단합니다.'
      ],
      clinicalPearls: [
        '피부 표면에 수분감(전도성 미스트나 겔 소량)을 유지하면 미세전류의 심부 침투율이 극대화됩니다.',
        '도자 팁을 강하게 비비지 말고, 해부학적 함요처(뼈 경계 오목한 곳)에 펜촉을 가만히 안착시킨 상태에서 전기를 인가합니다.'
      ]
    },
    anatomicalSafetyGuide: {
      primaryLandmarks: '외후두융기(External Occipital Protuberance), 유양돌기(Mastoid Process), 제2경추 극돌기(C2 Spinous Process)',
      dangerStructures: '추골동맥(Vertebral Artery, C1-C2 사이 외측 주행), 경정맥공 주위 혈관총, 척수관',
      probeTechnique: '두개골 하연 및 상항선 골면에 수직으로 직각 접촉하되, C1-C2 사이 후두하삼각 통전 시 두개강 방향으로 깊게 찌르는 압박을 금하고 연조직 표층 뼈 표면에 펜 도자를 지지합니다.',
      safetyPrecautions: '추골동맥 박리 또는 뇌혈류 부전 병력이 있는 환자는 C1 외측 강압 촉진을 피하고 미세전류 통전 시간은 30초 미만으로 제한합니다.'
    },
    clinicalCases: [
      {
        caseId: 'CASE-HN-01',
        patientProfile: '48세 여성 / 컴퓨터 프로그래머 / 유병기간 4년 만성 난치성 우측 후두통',
        chiefComplaint: '우측 뒷머리에서 정수리를 지나 우측 안구 안쪽까지 쑤시고 타는 듯한 지속적 통증 (NRS 8)',
        priorTreatments: '신경차단술 10회 이상 시행했으나 3~4일 후 재발, 진통소염제 및 근이완제 복용 시 위장 장애로 중단',
        clinicalExamination: '우측 상항선(대후두신경 출구부) 극심한 압통과 함께 틴넬 징후 양성. 우측 C2-3 관절돌기 촉진 시 안구 후방으로 연관통 유발 확인',
        novaCellApplication: '노바셀 단일 펜 도자로 HP-04(C2-C3 후관절 분절점) 25초, HP-02(후두하삼각) 30초, HP-01(대후두신경 출구점) 25초 통전 실시 (출력 레벨 3)',
        therapeuticOutcome: '1회 시술 직후 후두부 압박감이 8에서 3으로 경감, 안구 후방 통증 즉시 소실. 주 2회씩 총 4회 시술 후 NRS 1 이하로 안정화되어 컴퓨터 작업 시 통증 없음.',
        clinicalPearls: '경추성 두통 환자의 상당수는 후두부 자체보다 C2-C3 후관절낭의 기계적 감작이 선행하므로 반드시 분절 포인트를 먼저 통전하는 것이 성공의 열쇠입니다.'
      },
      {
        caseId: 'CASE-HN-02',
        patientProfile: '35세 남성 / 금융업 / 유병기간 6개월 심한 편두통 양상의 측두부 박동통',
        chiefComplaint: '귀 뒤쪽부터 관자놀이까지 벼락치듯 찌르는 편두통과 경부 뻣뻣함',
        priorTreatments: '트립탄 계열 편두통약 복용 중이었으나 약물 과용성 두통 의심 단계에 이름',
        clinicalExamination: '유양돌기 후하방 소후두신경 주행부(HP-HN-03) 촉진 시 관자놀이로 뻗치는 방사통 정확히 일치',
        novaCellApplication: 'HP-HN-03(소후두신경점) 및 HP-HN-01(상항선)에 고전압 미세전류 펜 도자 각 25초 접촉 통전',
        therapeuticOutcome: '시술 2회 차에 박동성 관자놀이 통증 소실, 두경부 가동범위 정상 회복 및 트립탄 약물 투약 완전 중단.'
      }
    ]
  },

  {
    id: 'trigeminal-neuralgia',
    categoryId: 'head-neck',
    titleKo: '삼차신경통 / 안면 신경통',
    titleEn: 'Trigeminal Neuralgia & Facial Pain',
    badge: '안면 대표',
    illustrationImage: 'assets/regions/trigeminal-facial-neuralgia.webp',
    overview: '제5 뇌신경(삼차신경)의 가지가 안면부 골공(Foramen) 통과부에서 포착되거나 미세혈관 압박으로 인해 뺨, 턱, 잇몸, 이마에 번개 치듯 스치는 극심한 발작성 통증입니다.',
    symptoms: [
      '세수하거나 양치질, 음식 저작, 대화 시 번개 치듯 찌릿한 안면 통증',
      '바람만 스쳐도 뺨이나 잇몸에 전기가 오르는 듯한 과민 반응',
      '통증 발작기에는 몇 초에서 수 분간 극심한 고통 지속',
      '치과 검진에서 치아 이상이 없음에도 지속되는 발치 후 안면통'
    ],
    pathologyMechanism: '안와상공(V1), 안와하공(V2), 이공(V3) 등 안면골 골공 통과부에서 신경 주위 근막 및 골막의 유착과 섬유화가 발생하여 역치 전위가 급격히 저하되고, 교감신경의 과항진이 통증 신호를 증폭합니다.',
    healingPoints: [
      {
        id: 'HP-TN-01',
        code: 'HP-01',
        nameKo: '안와상절제점 (V1 분지 골공부)',
        nameEn: 'Supraorbital Notch Point (V1 Division)',
        targetAnatomy: '안와상신경(V1 분지), 전두근 건막',
        locationGuide: '눈썹 안쪽 1/3 지점 안와 상연의 오목하게 만져지는 홈(Notch)',
        significance: '이마와 전두부, 두피 전방의 찌릿한 감각이상 및 쏘는 통증 해소',
        pinCoordinates: { x: 47.0, y: 10.5, view: 'anterior' }
      },
      {
        id: 'HP-TN-02',
        code: 'HP-02',
        nameKo: '안와하공 신경통과점 (V2 분지 골공부)',
        nameEn: 'Infraorbital Foramen Point (V2 Division)',
        targetAnatomy: '안와하신경(V2 분지), 상악골 골막, 상순거근 심부',
        locationGuide: '눈동자 직하방 안와 하연 1cm 아래 상악골의 오목한 함요부',
        significance: '뺨, 윗입술, 상악 잇몸의 벼락 치는 통증을 완화하는 핵심 치유점',
        pinCoordinates: { x: 46.5, y: 12.5, view: 'anterior' }
      },
      {
        id: 'HP-TN-03',
        code: 'HP-03',
        nameKo: '이공 신경통과점 (V3 분지 골공부)',
        nameEn: 'Mental Foramen Point (V3 Division)',
        targetAnatomy: '이신경(하치조신경 말초지, V3), 하악골 골막',
        locationGuide: '하악 제1-2 소구치(어금니 앞) 하방 턱뼈 중앙부의 함요처',
        significance: '아랫입술, 턱끝, 하악 잇몸 통증 및 치통 유사 안면통 완화',
        pinCoordinates: { x: 47.0, y: 15.5, view: 'anterior' }
      },
      {
        id: 'HP-TN-04',
        code: 'HP-04',
        nameKo: '경돌유돌공 안면-삼차 반사점',
        nameEn: 'Stylomastoid Reflex Area',
        targetAnatomy: '안면신경 본간 및 경돌설골인대, 외이도 전하방 교감신경총',
        locationGuide: '귓불 뒤쪽 유양돌기와 하악지 사이 오목한 깊은 함요부',
        significance: '안면 전체의 신경혈류 재개통 및 중추성 통증 회로 탈감작',
        pinCoordinates: { x: 44.5, y: 14.5, view: 'anterior' }
      }
    ],
    novaCellProtocol: {
      probeType: '단일 펜 도자 (Monopolar Pen Probe)',
      contactMethod: '미세 수직 안착 (Minimal Pressure Touch - 통증 유발점 자극 최소화)',
      contactDurationPerPoint: '\uD3EC\uC778\uD2B8\uB2F9 20\uCD08 ~ 30\uCD08 (\uD658\uC790\uAC00 \uB530\uB054 \uAC70\uB9BC\uC774 \uC0AC\uB77C\uC9C0\uAC70\uB098 \uBB35\uC9C1\uD55C \uC774\uC644\uAC10\uC744 \uB290\uB084\uB54C\uAE4C\uC9C0)',
      outputIntensity: '\uACE0\uC804\uC555 \uBBF8\uC138\uC804\uB958 03~05\uB2E8\uACC4 (\uD3B8\uC548\uD55C \uD384\uC2A4 \uC9C4\uB3D9 \uAC10\uAC01)',
      stingingRemedy: '\uD658\uBD80\uC5D0 \uC54C\uCF5C \uB610\uB294 \uC0DD\uB9AC\uC2DD\uC5FC\uC218 \uC2A4\uD504\uB808\uC774',
      treatmentSequence: [
        '1단계 [중추 안정]: HP-04 (경돌유돌부)에 펜 도자를 20초간 부드럽게 대어 신경혈관 긴장을 풉니다.',
        '2단계 [해당 분지 골공 통전]: 통증 호발 분지에 맞춰 HP-01(이마), HP-02(뺨), HP-03(턱끝) 골공 외연에 15초간 살포시 펜을 접촉합니다.'
      ],
      clinicalPearls: [
        '삼차신경통 환자는 과도한 압박 자체가 격렬한 통증 발작(Trigger point)을 유발할 수 있으므로, 펜 도자 끝을 피부 표면에만 가볍게 접촉시키는 것이 중요합니다.',
        '전도성 수분 미스트를 펜 팁에 묻혀 통전 효율을 높이십시오.'
      ]
    },
    anatomicalSafetyGuide: {
      primaryLandmarks: '안와상연 홈(Supraorbital notch), 안와하연(Infraorbital rim), 하악체(Mandibular body)',
      dangerStructures: '안구 결막(안구 내 직접 접촉 금지), 안와하동맥, 안면동맥 주행지',
      probeTechnique: '안와 내부로 도자 팁이 들어가지 않도록 반드시 골격 외측 뼈 턱을 향해 비스듬히 안착시킵니다.',
      safetyPrecautions: '안와 주변 시술 시 환자에게 눈을 감도록 하고 도자 전극이 안구 쪽으로 미끄러지지 않도록 시술자의 손을 뺨에 단단히 지지(Finger rest)합니다.'
    },
    clinicalCases: [
      {
        caseId: 'CASE-TN-01',
        patientProfile: '63세 여성 / 주부 / 유병기간 2년 우측 안면부 삼차신경통(V2 분지)',
        chiefComplaint: '양치질과 식사 시 우측 뺨과 상악 잇몸에 전기가 통하듯 찌릿하여 음식을 씹지 못함 (NRS 9)',
        priorTreatments: '카르바마제핀(항경련제) 복용 중 간수치 상승으로 감량 후 통증 재발, 미세혈관감압술 권유받았으나 고령으로 주저함',
        clinicalExamination: '우측 안와하공(Infraorbital foramen) 가벼운 접촉만으로도 뺨 전체로 번지는 강렬한 발작성 통증 유발',
        novaCellApplication: '노바셀 단일 펜 도자 최저 1단계 세팅으로 HP-TN-04(유양돌기 전하방) 20초 안착 후, HP-TN-02(안와하공 외연)에 15초간 비침습 미세전류 통전 시행',
        therapeuticOutcome: '1회 치료 후 식사 시 통증 빈도 50% 감소. 총 6회 통전 후 음식 저작 및 양치질이 통증 없이 가능해져 NRS 1로 안정.'
      }
    ]
  },

  {
    id: 'facial-palsy-bells',
    categoryId: 'head-neck',
    titleKo: '말초성 안면신경마비 후유증 (벨마비)',
    titleEn: 'Peripheral Facial Palsy / Bell\'s Palsy Sequelae',
    badge: '안면 마비',
    illustrationImage: 'assets/regions/facial-palsy-bells-lateral.webp',
    overview: '제7 뇌신경(안면신경)의 부종과 허혈성 포착으로 인해 눈이 잘 감기지 않고 입이 돌아가며 표정근 마비와 감각 둔화가 발생하는 질환입니다.',
    symptoms: [
      '한쪽 이마 주름이 잡히지 않고 눈이 완전히 감기지 않음',
      '물이나 양치물을 머금을 때 마비된 쪽 입술 사이로 물이 셈',
      '웃을 때 입꼬리가 건강한 쪽으로만 당겨 올라감',
      '귀 뒤쪽 통증(유양돌기통) 및 미각 저하, 청각 과민'
    ],
    pathologyMechanism: '측두골 안면신경관(Fallopian canal) 내에서 바이러스성 염증이나 미세혈관 연축에 의해 신경 부종이 생겨 신경 전도가 차단됩니다. 표정근육의 지속적 탈신경 위축을 방지하고 신경 재생을 촉진해야 합니다.',
    healingPoints: [
      {
        id: 'HP-FP-01',
        code: 'HP-01',
        nameKo: '경돌유돌공 안면신경 주간부',
        nameEn: 'Stylomastoid Foramen Main Trunk Point',
        targetAnatomy: '안면신경 주간(Main trunk), 후이개동맥 분지',
        locationGuide: '귓불 뒤쪽 유양돌기와 하악골 사이 깊은 골성 함요부',
        significance: '안면신경 본간의 허혈과 신경관 내 압력을 감압하는 가장 근본적인 핵심 포인트',
        pinCoordinates: { x: 44.5, y: 14.5, view: 'anterior' }
      },
      {
        id: 'HP-FP-02',
        code: 'HP-02',
        nameKo: '협근 안면신경 협근지점',
        nameEn: 'Buccal Branch & Buccinator Point',
        targetAnatomy: '안면신경 협근지(Buccal branch), 볼근, 안면정맥 외측',
        locationGuide: '입꼬리 외측 2cm 지점, 볼근(Buccinator)의 중앙 함요부',
        significance: '음식물 저작 시 볼 안쪽에 끼는 현상과 입술 비대칭 완화',
        pinCoordinates: { x: 46.5, y: 13.5, view: 'anterior' }
      },
      {
        id: 'HP-FP-03',
        code: 'HP-03',
        nameKo: '안륜근 신경종말 운동점',
        nameEn: 'Orbicularis Oculi Motor Point',
        targetAnatomy: '측두관골지(Zygomatic branch), 안륜근 외측연',
        locationGuide: '눈꼬리 외측 1cm 관골궁 상연 오목한 지점',
        significance: '눈 깜빡임 기능 회복 및 토안(Lagophthalmos) 개선',
        pinCoordinates: { x: 46.5, y: 11.5, view: 'anterior' }
      }
    ],
    novaCellProtocol: {
      probeType: '단일 펜 도자 (Monopolar Pen Probe)',
      contactMethod: '부드러운 정적 접촉 후 마비근 주행 방향으로 미세 유도 스트로킹',
      contactDurationPerPoint: '\uD3EC\uC778\uD2B8\uB2F9 20\uCD08 ~ 30\uCD08 (\uD658\uC790\uAC00 \uB530\uB054 \uAC70\uB9BC\uC774 \uC0AC\uB77C\uC9C0\uAC70\uB098 \uBB35\uC9C1\uD55C \uC774\uC644\uAC10\uC744 \uB290\uB084\uB54C\uAE4C\uC9C0)',
      outputIntensity: '\uACE0\uC804\uC555 \uBBF8\uC138\uC804\uB958 03~05\uB2E8\uACC4 (\uD3B8\uC548\uD55C \uD384\uC2A4 \uC9C4\uB3D9 \uAC10\uAC01)',
      stingingRemedy: '\uD658\uBD80\uC5D0 \uC54C\uCF5C \uB610\uB294 \uC0DD\uB9AC\uC2DD\uC5FC\uC218 \uC2A4\uD504\uB808\uC774',
      treatmentSequence: [
        '1단계: HP-01(경돌유돌공 주간부)에 펜 도자를 25초간 접촉하여 본간 신경혈류를 촉진합니다.',
        '2단계: HP-03(안륜근점)과 HP-02(협근점)에 각각 20초간 통전하며 근육 긴장도를 유도합니다.'
      ],
      clinicalPearls: [
        '발병 초기 골든타임(발병 2주 이내)뿐만 아니라, 수개월이 지난 후유증기(연합운동, 근경련)에도 미세전류의 세포 ATP 합성 촉진 효과가 탁월합니다.'
      ]
    },
    anatomicalSafetyGuide: {
      primaryLandmarks: '유양돌기(Mastoid process), 하악각(Mandibular angle), 관골궁(Zygomatic arch)',
      dangerStructures: '이하선(Parotid gland), 외경동맥 안면분지',
      probeTechnique: '귓불 뒤쪽 경돌유돌공 통전 시 너무 깊숙이 찌르지 말고 유양돌기 앞쪽 골면에 부드럽게 펜을 기댑니다.',
      safetyPrecautions: '안면신경은 표층 주행하므로 과도한 압력을 가하면 오히려 신경관 압박이 심해질 수 있어 깃털 같은 정밀 터치가 요구됩니다.'
    },
    clinicalCases: [
      {
        caseId: 'CASE-FP-01',
        patientProfile: '52세 남성 / 자영업 / 벨마비 발병 3개월 경과 후유증 환자',
        chiefComplaint: '양치 시 입술 우측으로 물이 주르륵 흐르고, 눈이 2mm가량 덜 감겨 안구건조증 극심',
        priorTreatments: '발병 초기 스테로이드 2주 복용 후 호전 정체, 침 치료 및 물리치료 병행 중이었으나 눈꺼풀 마비 지속',
        clinicalExamination: 'House-Brackmann 등급 Grade IV. 귓불 뒤쪽 유양돌기 함요부 압통 및 협근 긴장도 현저히 저하',
        novaCellApplication: '노바셀 단일 펜 도자로 HP-FP-01(경돌유돌공) 25초, HP-FP-03(안륜근 외측) 20초, HP-FP-02(협근) 20초 주 3회 시술',
        therapeuticOutcome: '치료 2주 차(6회)에 눈이 완전히 감기기 시작했으며, 4주 차에 입술 비대칭이 Grade II로 획기적 호전됨.'
      }
    ]
  },

  {
    id: 'tension-headache-suboccipital',
    categoryId: 'head-neck',
    titleKo: '긴장성 두통 / 후두하근막염',
    titleEn: 'Tension-Type Headache & Suboccipital Strain',
    badge: '두경부 만성',
    illustrationImage: 'assets/regions/tension-headache-suboccipital-posterior.webp',
    overview: '정신적 스트레스와 잘못된 거북목 자세로 인해 승모근, 두판상근, 후두하근이 팽팽하게 굳어 머리 전체를 띠로 동여맨 듯한 조이는 통증을 유발합니다.',
    symptoms: [
      '머리 둘레를 꽉 조이는 듯한 둔하고 지속적인 압박통',
      '오후가 되거나 피로가 누적될수록 두통 강도 증가',
      '목덜미와 어깨가 돌처럼 단단하게 굳어 있음',
      '빛이나 소리에 대한 경미한 과민증 및 집중력 저하'
    ],
    pathologyMechanism: '경추-두개 접합부의 지속적인 근막 과긴장이 근막 내 미세 순환을 차단하여 허혈성 산성 노폐물을 축적시키고, 감각 신경 말단을 자극하여 중추성 통각 감작을 유발합니다.',
    healingPoints: [
      {
        id: 'HP-TH-01',
        code: 'HP-01',
        nameKo: '두판상근 건막 부착점 (풍지혈 상방)',
        nameEn: 'Splenius Capitis Tendinous Insertion',
        targetAnatomy: '두판상근, 두반극근 상단 부착건막',
        locationGuide: '유양돌기 내측 2.5cm 함요부, 모발선 경계 오목한 곳',
        significance: '목덜미에서 측두부로 뻗치는 조임성 두통의 주 원인 근막 이완',
        pinCoordinates: { x: 46.0, y: 14.0, view: 'posterior' }
      },
      {
        id: 'HP-TH-02',
        code: 'HP-02',
        nameKo: '상두사근 긴장 해소점',
        nameEn: 'Obliquus Capitis Superior Point',
        targetAnatomy: '상두사근, 후두골 하항선 외측',
        locationGuide: '후두골 아래 C1 횡돌기와 상항선 사이 외측 3cm 심부',
        significance: '경추 회전 시 발생하는 뒷머리 당김 및 정수리 두통 해소',
        pinCoordinates: { x: 47.5, y: 13.5, view: 'posterior' }
      }
    ],
    novaCellProtocol: {
      probeType: '단일 펜 도자 (Monopolar Pen Probe)',
      contactMethod: '부드러운 압박 후 작은 원을 그리며 미세 진동 인가',
      contactDurationPerPoint: '\uD3EC\uC778\uD2B8\uB2F9 20\uCD08 ~ 30\uCD08 (\uD658\uC790\uAC00 \uB530\uB054 \uAC70\uB9BC\uC774 \uC0AC\uB77C\uC9C0\uAC70\uB098 \uBB35\uC9C1\uD55C \uC774\uC644\uAC10\uC744 \uB290\uB084\uB54C\uAE4C\uC9C0)',
      outputIntensity: '\uACE0\uC804\uC555 \uBBF8\uC138\uC804\uB958 03~05\uB2E8\uACC4 (\uD3B8\uC548\uD55C \uD384\uC2A4 \uC9C4\uB3D9 \uAC10\uAC01)',
      stingingRemedy: '\uD658\uBD80\uC5D0 \uC54C\uCF5C \uB610\uB294 \uC0DD\uB9AC\uC2DD\uC5FC\uC218 \uC2A4\uD504\uB808\uC774',
      treatmentSequence: [
        'HP-TH-01(두판상근 부착점)과 HP-TH-02(상두사근점)에 각각 25초간 순차적으로 도자를 접촉합니다.'
      ],
      clinicalPearls: [
        '목을 가볍게 턱을 당긴(Chin-tuck) 자세에서 통전하면 근막 이완 효과가 배가됩니다.'
      ]
    },
    anatomicalSafetyGuide: {
      primaryLandmarks: '하항선(Inferior nuchal line), C1 횡돌기(C1 Transverse process)',
      dangerStructures: '추골동맥 하부 루프(Vertebral artery V3 segment)',
      probeTechnique: '두개골 뼈 바탕에 펜촉을 안전하게 고정하고 척추 뼈 사이 깊은 틈으로 과도하게 찔러 넣지 않습니다.',
      safetyPrecautions: '고령 환자 통전 시 급격한 자세 변화로 인한 기립성 어지럼증 여부를 관찰하십시오.'
    },
    clinicalCases: [
      {
        caseId: 'CASE-TH-01',
        patientProfile: '29세 여성 / 그래픽 디자이너 / 유병기간 1년 만성 긴장성 두통',
        chiefComplaint: '매일 오후 3시만 되면 머리 전체가 터질 듯 조이고 눈이 침침함 (NRS 6)',
        priorTreatments: '진통제 매일 2알 복용, 마사지 및 스트레칭으로도 반나절 후 재발',
        clinicalExamination: '양측 두판상근 부착부 극심한 밴드형 경결 및 압통 확인',
        novaCellApplication: '노바셀 단일 펜 도자로 HP-TH-01 및 HP-TH-02에 각 25초 통전 (주 2회, 2주간 총 4회)',
        therapeuticOutcome: '1회 치료 후 당일 오후 두통 없이 근무 완료. 4회 시술 후 진통제 투약 100% 중단.'
      }
    ]
  },

  {
    id: 'tmj-disorder',
    categoryId: 'head-neck',
    titleKo: '턱관절 장애 증후군 (측두하악관절통)',
    titleEn: 'Temporomandibular Joint Disorder (TMD) & Masticatory Spasm',
    badge: '턱관절 대표',
    illustrationImage: 'assets/regions/tmj-disorder-lateral.webp',
    overview: '교근과 측두근의 과도한 경련, 하악과두 원반(디스크)의 변위로 인해 입을 벌릴 때 딱딱 소리가 나고 턱관절 부위와 관자놀이에 찌르는 통증이 발생합니다.',
    symptoms: [
      '입을 크게 벌리거나 하품할 때 턱에서 "딱" 소리(Clicking)와 통증',
      '음식을 씹을 때 귀 앞쪽 턱관절과 볼 부위가 얼얼하고 아픔',
      '아침에 일어났을 때 턱이 뻐근하여 입이 잘 벌어지지 않음(개구장애)',
      '관자놀이 두통, 이명 및 어깨 결림 동반'
    ],
    pathologyMechanism: '이갈이나 편측 저작 습관으로 익돌근(Pterygoid)과 교근(Masseter)이 만성 연축되고, 이개측두신경(Auriculotemporal nerve)이 압박되어 관절낭염과 연관통이 유발됩니다.',
    healingPoints: [
      {
        id: 'HP-TM-01',
        code: 'HP-01',
        nameKo: '외측익돌근-하악절제부 신경점',
        nameEn: 'Lateral Pterygoid & Mandibular Notch Point',
        targetAnatomy: '외측익돌근 건, 하악절제(Mandibular notch), 삼차 V3 교근신경',
        locationGuide: '관골궁 아래, 하악지 전연과 외이도 사이 오목한 틈새',
        significance: '턱관절 디스크의 전방 전위를 제어하고 개구통을 즉각 경감',
        pinCoordinates: { x: 43.5, y: 13.5, view: 'anterior' }
      },
      {
        id: 'HP-TM-02',
        code: 'HP-02',
        nameKo: '교근 심부 결절점',
        nameEn: 'Deep Masseter Hypertonicity Point',
        targetAnatomy: '심부/천부 교근 복합체, 교근건막',
        locationGuide: '하악각(턱모서리) 상방 1.5cm 지점의 가장 단단한 알갱이 경결부',
        significance: '저작근 연축 해소 및 하악의 균형 있는 교합 회복',
        pinCoordinates: { x: 44.5, y: 15.0, view: 'anterior' }
      },
      {
        id: 'HP-TM-03',
        code: 'HP-03',
        nameKo: '이개측두신경 통과점 (귀 앞 관절낭부)',
        nameEn: 'Auriculotemporal Nerve / Retrodiscal Point',
        targetAnatomy: '이개측두신경, 천측두동맥 후방, 턱관절 후원반조직',
        locationGuide: '이주(Tragus, 귓바퀴 앞 돌기) 바로 앞 오목한 관절 함요처',
        significance: '턱관절 내부의 만성 관절낭염 및 관자놀이 방사통 차단',
        pinCoordinates: { x: 43.0, y: 12.5, view: 'anterior' }
      }
    ],
    novaCellProtocol: {
      probeType: '단일 펜 도자 (Monopolar Pen Probe)',
      contactMethod: '입을 살짝 벌린(Rest position) 상태에서 관절 틈새에 직각 안착',
      contactDurationPerPoint: '\uD3EC\uC778\uD2B8\uB2F9 20\uCD08 ~ 30\uCD08 (\uD658\uC790\uAC00 \uB530\uB054 \uAC70\uB9BC\uC774 \uC0AC\uB77C\uC9C0\uAC70\uB098 \uBB35\uC9C1\uD55C \uC774\uC644\uAC10\uC744 \uB290\uB084\uB54C\uAE4C\uC9C0)',
      outputIntensity: '\uACE0\uC804\uC555 \uBBF8\uC138\uC804\uB958 03~05\uB2E8\uACC4 (\uD3B8\uC548\uD55C \uD384\uC2A4 \uC9C4\uB3D9 \uAC10\uAC01)',
      stingingRemedy: '\uD658\uBD80\uC5D0 \uC54C\uCF5C \uB610\uB294 \uC0DD\uB9AC\uC2DD\uC5FC\uC218 \uC2A4\uD504\uB808\uC774',
      treatmentSequence: [
        '1단계: HP-02(교근 심부점)에 25초간 통전하여 강직된 턱 근육을 이완합니다.',
        '2단계: 입을 반쯤 벌린 상태에서 HP-01(외측익돌근점)과 HP-03(이개측두신경점)에 각 20초간 세밀히 통전합니다.'
      ],
      clinicalPearls: [
        '환자에게 혀를 입천장에 가볍게 대고 힘을 뺀 상태를 유지하도록 지도하면 관절강이 열려 효과가 극대화됩니다.'
      ]
    },
    anatomicalSafetyGuide: {
      primaryLandmarks: '이주(Tragus), 관골궁(Zygomatic arch), 하악각(Angle of mandible)',
      dangerStructures: '천측두동맥(Superficial temporal artery, 맥박 촉지 주의), 안면신경 측두지',
      probeTechnique: '귀 앞 관절강 촉진 시 맥박이 뛰는 천측두동맥을 손가락으로 가볍게 확인 후 이를 피해 전방 관절낭 골면에 접촉합니다.',
      safetyPrecautions: '동맥 혈관 위에 직접 고압력으로 누르지 않도록 주의하십시오.'
    },
    clinicalCases: [
      {
        caseId: 'CASE-TM-01',
        patientProfile: '24세 여성 / 대학생 / 유병기간 8개월 턱관절 개구 장애 및 통증',
        chiefComplaint: '입을 벌릴 때 손가락 2개도 들어가지 않고(개구량 23mm) 턱에서 뚝뚝 소리와 심한 통증 (NRS 7)',
        priorTreatments: '치과 스플린트(마우스피스) 6개월 착용했으나 개구제한 지속',
        clinicalExamination: '우측 외측익돌근 및 심부 교근 촉진 시 격렬한 압통, 개구 시 하악이 우측으로 지그재그 편위',
        novaCellApplication: '노바셀 단일 펜 도자로 HP-TM-02(교근) 25초 통전 후, 입을 살짝 벌린 상태에서 HP-TM-01 및 HP-TM-03 각 20초 통전',
        therapeuticOutcome: '1회 시술 직후 개구량 38mm(손가락 3개 통과)로 즉시 회복. 3회 치료 후 관절 잡음 소실 및 정상 식사 가능.'
      }
    ]
  },

  // =========================================================================
  // 2. 견관절 / 상지부 (Shoulder & Upper Arm)
  // =========================================================================
  {
    id: 'frozen-shoulder',
    categoryId: 'shoulder-arm',
    titleKo: '오십견 / 동결견 (유착성 관절낭염)',
    titleEn: 'Frozen Shoulder / Adhesive Capsulitis',
    badge: '어깨 대표',
    illustrationImage: 'assets/regions/frozen-shoulder-biceps-bilateral.webp',
    overview: '어깨 관절낭의 염증과 유착으로 인해 능동적/수동적 어깨 운동 범위가 심각하게 제한되고 야간통으로 수면을 방해하는 대표적인 퇴행성 관절 질환입니다.',
    symptoms: [
      '팔을 위로 올리거나 뒤로 돌려 열중쉬어 자세를 취할 때 극심한 통증',
      '옷을 입거나 벗기 힘들고, 빗질이나 세수하기가 어려움',
      '밤에 아픈 쪽으로 누우면 욱신거려 잠에서 깨는 야간통(Night pain)',
      '통증기를 지나 어깨가 얼어붙은 듯 굳어버리는 동결기 진행'
    ],
    pathologyMechanism: '견관절낭의 섬유아세포 과증식과 교원섬유의 비후로 관절낭 용적이 15ml에서 3ml 이하로 급감합니다. 견갑상신경과 액와신경 주위의 섬유성 유착으로 관절낭 통각 수용기가 심하게 감작됩니다.',
    healingPoints: [
      {
        id: 'HP-FS-01',
        code: 'HP-01',
        nameKo: '견갑상신경 통과점 (견갑절흔부)',
        nameEn: 'Suprascapular Nerve (Suprascapular Notch)',
        targetAnatomy: '견갑상신경(C5,6), 상견갑횡인대, 극상근 심부',
        locationGuide: '견갑극 상연 내외측 1/3 분기점, 쇄골과 견갑극이 만나는 V자 함요부',
        significance: '어깨 관절낭 감각의 70%를 지배하는 중추 신경을 탈감작시켜 극심한 관절통 제어',
        pinCoordinates: { x: 41.5, y: 21.0, view: 'posterior' }
      },
      {
        id: 'HP-FS-02',
        code: 'HP-02',
        nameKo: '액와신경 사각간극점 (후방 관절낭)',
        nameEn: 'Axillary Nerve (Quadrangular Space)',
        targetAnatomy: '액와신경, 후견봉회선동맥, 소원근-대원근-상완삼두근 장두 사이',
        locationGuide: '액와 후벽 주름 상방 2cm, 견봉 후하방 3cm 지점의 오목한 틈',
        significance: '후하방 관절낭 구축을 풀고 야간통 및 팔 뒤로 젖힘 가동성 회복',
        pinCoordinates: { x: 37.0, y: 24.5, view: 'posterior' }
      },
      {
        id: 'HP-FS-03',
        code: 'HP-03',
        nameKo: '상완이두근 장두건구점 (전방 관절낭)',
        nameEn: 'Biceps Long Head (Bicipital Groove)',
        targetAnatomy: '상완이두근 장두건, 횡상완인대, 대결절-소결절 사이 고랑',
        locationGuide: '견봉 전방 4cm 하방, 상완골 전면에 만져지는 건의 주행 홈',
        significance: '팔을 앞으로 들어 올릴 때 앞쪽 어깨가 결리고 찌르는 통증 해소',
        pinCoordinates: { x: 39.5, y: 23.5, view: 'anterior' }
      }
    ],
    novaCellProtocol: {
      probeType: '단일 펜 도자 (Monopolar Pen Probe)',
      contactMethod: '심부 지지 압박 후 관절낭 방향으로 미세 통전 회전',
      contactDurationPerPoint: '\uD3EC\uC778\uD2B8\uB2F9 20\uCD08 ~ 30\uCD08 (\uD658\uC790\uAC00 \uB530\uB054 \uAC70\uB9BC\uC774 \uC0AC\uB77C\uC9C0\uAC70\uB098 \uBB35\uC9C1\uD55C \uC774\uC644\uAC10\uC744 \uB290\uB084\uB54C\uAE4C\uC9C0)',
      outputIntensity: '\uACE0\uC804\uC555 \uBBF8\uC138\uC804\uB958 03~05\uB2E8\uACC4 (\uD3B8\uC548\uD55C \uD384\uC2A4 \uC9C4\uB3D9 \uAC10\uAC01)',
      stingingRemedy: '\uD658\uBD80\uC5D0 \uC54C\uCF5C \uB610\uB294 \uC0DD\uB9AC\uC2DD\uC5FC\uC218 \uC2A4\uD504\uB808\uC774',
      treatmentSequence: [
        '1단계: HP-01(견갑절흔 견갑상신경)에 30초간 통전하여 관절낭 중추 통증을 차단합니다.',
        '2단계: HP-02(액와신경 사각간극)와 HP-03(이두근구)에 각 25초간 통전하여 전·후방 관절낭 섬유화를 이완시킵니다.'
      ],
      clinicalPearls: [
        '통전 직후 통증이 가라앉은 상태에서 환자에게 가벼운 시계추 운동(Codman exercise)을 30초간 병행시키면 관절낭 이완 효과가 오래 유지됩니다.'
      ]
    },
    anatomicalSafetyGuide: {
      primaryLandmarks: '견봉(Acromion), 견갑극(Spine of scapula), 쇄골 외측단(Lateral clavicle)',
      dangerStructures: '견갑상동맥(Suprascapular artery), 후견봉회선동맥, 흉막 상부(폐첨부 전방 접근 시 주의)',
      probeTechnique: '견갑절흔 접근 시 도자를 폐가 있는 전하방으로 향하지 말고 견갑골 바닥 뼈를 향해 등 뒤에서 편평하게 안착시킵니다.',
      safetyPrecautions: '흉곽 방향으로 깊은 침투를 절대 금하며 견갑골 골격 구조를 벽 삼아 안전하게 지지합니다.'
    },
    clinicalCases: [
      {
        caseId: 'CASE-FS-01',
        patientProfile: '56세 여성 / 요식업 / 유병기간 7개월 우측 오십견 동결기',
        chiefComplaint: '야간에 우측으로 눕지 못하고 자다가 깨서 울 정도로 아픔, 굴곡 80도, 외전 70도, 열중쉬어 불가 (NRS 8)',
        priorTreatments: '체외충격파 8회 및 소염진통제 복용했으나 야간통 지속',
        clinicalExamination: '견갑절흔부(HP-FS-01) 촉진 시 극심한 압통과 함께 어깨 심부로 뻗치는 통증, 후방 사각간극 결절 확인',
        novaCellApplication: '노바셀 단일 펜 도자로 HP-FS-01 30초, HP-FS-02 30초, HP-FS-03 25초 통전 (주 2회, 3주간 총 6회)',
        therapeuticOutcome: '2회 시술 후 야간통 90% 소실로 수면 회복. 6회 시술 후 굴곡 160도, 외전 150도로 가동 범위 대부분 정상화.'
      }
    ]
  },

  {
    id: 'rotator-cuff-syndrome',
    categoryId: 'shoulder-arm',
    titleKo: '회전근개 증후군 / 충돌증후군',
    titleEn: 'Rotator Cuff Syndrome & Subacromial Impingement',
    badge: '어깨 손상',
    illustrationImage: 'assets/regions/rotator-cuff-bilateral.webp',
    overview: '어깨를 들어 올릴 때 견봉 아래에서 극상근 건이 부딪치며 염증, 미세 파열 및 건병증이 발생하여 60~120도 외전 시 통증 호(Painful arc)를 보입니다.',
    symptoms: [
      '팔을 옆으로 들어 올릴 때 60~120도 각도 부근에서 날카로운 통증',
      '팔을 완전히 머리 위로 올리면 오히려 통증이 감소함',
      '물건을 선반에 올리거나 안전벨트를 당길 때 뜨끔한 어깨 통증',
      '삼각근 부착부(팔 바깥쪽 중간)로 뻗치는 묵직한 연관통'
    ],
    pathologyMechanism: '오구견봉인대와 견봉 전하방 골극 사이에서 극상근건의 반복적 마찰과 허혈성 저관류(Critical zone)로 인해 건섬유의 퇴행성 변화가 발생합니다.',
    healingPoints: [
      {
        id: 'HP-RC-01',
        code: 'HP-01',
        nameKo: '극상근 건부착부 (상완골 대결절 상면)',
        nameEn: 'Supraspinatus Tendon Insertion (Greater Tubercle)',
        targetAnatomy: '극상근건 부착부, 견봉하 점액낭(Subacromial bursa)',
        locationGuide: '견봉 전외측단 바로 아래 1cm, 팔을 뒤로 젖힐 때 만져지는 골결절',
        significance: '건병증 발생 핵심 호발부위의 미세혈류 촉진 및 염증 신호 감쇠',
        pinCoordinates: { x: 38.0, y: 22.5, view: 'anterior' }
      },
      {
        id: 'HP-RC-02',
        code: 'HP-02',
        nameKo: '견봉하 간극점 (오구견봉궁 하방)',
        nameEn: 'Subacromial Space Point',
        targetAnatomy: '오구견봉인대 하연, 견봉하 점액낭',
        locationGuide: '견봉 외측연 중앙 바로 아래의 관절 간극 틈새',
        significance: '충돌증후군으로 인한 점액낭염의 부종과 급성 통증 완화',
        pinCoordinates: { x: 39.5, y: 21.5, view: 'anterior' }
      }
    ],
    novaCellProtocol: {
      probeType: '단일 펜 도자 (Monopolar Pen Probe)',
      contactMethod: '팔을 가볍게 뒤로 신전시킨 상태에서 대결절 건면에 직각 안착',
      contactDurationPerPoint: '\uD3EC\uC778\uD2B8\uB2F9 20\uCD08 ~ 30\uCD08 (\uD658\uC790\uAC00 \uB530\uB054 \uAC70\uB9BC\uC774 \uC0AC\uB77C\uC9C0\uAC70\uB098 \uBB35\uC9C1\uD55C \uC774\uC644\uAC10\uC744 \uB290\uB084\uB54C\uAE4C\uC9C0)',
      outputIntensity: '\uACE0\uC804\uC555 \uBBF8\uC138\uC804\uB958 03~05\uB2E8\uACC4 (\uD3B8\uC548\uD55C \uD384\uC2A4 \uC9C4\uB3D9 \uAC10\uAC01)',
      stingingRemedy: '\uD658\uBD80\uC5D0 \uC54C\uCF5C \uB610\uB294 \uC0DD\uB9AC\uC2DD\uC5FC\uC218 \uC2A4\uD504\uB808\uC774',
      treatmentSequence: [
        'HP-RC-02(견봉하 점액낭점) 25초 통전 후, HP-RC-01(극상근 부착부)에 25초간 집중 통전합니다.'
      ],
      clinicalPearls: [
        '팔을 약간 뒤로 젖히면 견봉 밑에 숨어있던 극상근 건이 전방으로 노출되어 펜 도자의 미세전류가 건병증 부위에 정확히 도달합니다.'
      ]
    },
    anatomicalSafetyGuide: {
      primaryLandmarks: '견봉 전외측연(Anterolateral acromion), 대결절(Greater tubercle)',
      dangerStructures: '상완회선동맥 분지, 액와신경 전방지',
      probeTechnique: '삼각근을 관통하여 상완골 대결절 골면에 단단히 안착시키며 불필요하게 뼈를 긁지 않습니다.',
      safetyPrecautions: '완전 파열 의심 시(Drop arm sign 양성) 무리한 도수 견인을 피하고 보존적 통전 요법을 적용합니다.'
    },
    clinicalCases: [
      {
        caseId: 'CASE-RC-01',
        patientProfile: '45세 남성 / 배드민턴 동호인 / 유병기간 4개월 극상근 건병증',
        chiefComplaint: '스매싱 동작 시 어깨 외측에 날카로운 통증, 외전 80도에서 전형적인 통증 호 (NRS 7)',
        priorTreatments: '물리치료 및 찜질 2개월간 시행했으나 운동 복귀 시 통증 재발',
        clinicalExamination: 'Neer 충돌 검사 및 Hawkins 검사 양성, 대결절 상면 압통 현저',
        novaCellApplication: '노바셀 단일 펜 도자로 HP-RC-01 및 HP-RC-02에 각 25초 통전 (주 2회, 2주간 총 4회)',
        therapeuticOutcome: '2회 시술 후 일상생활 통증 소실, 4회 시술 후 Painful arc 음성으로 전환되어 배드민턴 복귀.'
      }
    ]
  },

  {
    id: 'thoracic-outlet-syndrome',
    categoryId: 'shoulder-arm',
    titleKo: '흉곽출구 증후군 / 사각근 포착증',
    titleEn: 'Thoracic Outlet Syndrome (TOS) & Scalene Entrapment',
    badge: '신경 포착',
    illustrationImage: 'assets/regions/thoracic-outlet-bilateral.webp',
    overview: '전사각근과 중사각근 사이, 또는 쇄골과 제1늑골 사이에서 상완신경총과 쇄골하혈관이 압박되어 팔과 손 전체가 저리고 시리며 힘이 빠지는 증상입니다.',
    symptoms: [
      '팔을 들어 올려 작업할 때 팔 전체가 저리고 무거워져 팔을 내리게 됨',
      '새끼손가락과 넷째 손가락 쪽으로 뻗치는 저림과 감각 저하',
      '손이 차갑고 파래지거나 붓는 혈관성 압박 증상',
      '목 옆쪽, 쇄골 상와 부위를 누르면 팔 끝까지 전기가 찌릿하게 통함'
    ],
    pathologyMechanism: '상완신경총(Brachial plexus) 트렁크가 비후된 전사각근 건막과 제1늑골 사이 삼각 간극(Interscalene triangle)에서 기계적으로 포착됩니다.',
    healingPoints: [
      {
        id: 'HP-TOS-01',
        code: 'HP-01',
        nameKo: '사각근 간극 신경총 통과점',
        nameEn: 'Interscalene Triangle Brachial Plexus Point',
        targetAnatomy: '상완신경총 상·중간간, 전사각근-중사각근 사이 틈새',
        locationGuide: '쇄골 상방 2.5cm, 흉쇄유돌근 쇄골지 후연 바로 외측 오목한 함요부',
        significance: '상완신경총의 가장 근위부 포착을 해소하여 상지 전체 저림과 마비 완화',
        pinCoordinates: { x: 44.0, y: 19.5, view: 'anterior' }
      },
      {
        id: 'HP-TOS-02',
        code: 'HP-02',
        nameKo: '소흉근 하 간극점 (오구돌기 하방)',
        nameEn: 'Retropectoralis Minor Space',
        targetAnatomy: '소흉근 정지건막 심부, 액와동·정맥, 상완신경총 코드',
        locationGuide: '오구돌기 내측 및 하방 2cm 지점, 대흉근 심부의 소흉근 결절',
        significance: '팔을 올릴 때 발생하는 제2의 흉곽출구 포착(과외전 증후군) 해소',
        pinCoordinates: { x: 41.0, y: 22.5, view: 'anterior' }
      }
    ],
    novaCellProtocol: {
      probeType: '단일 펜 도자 (Monopolar Pen Probe)',
      contactMethod: '미세 수직 안착 (과도한 심부 찌름 금지, 표재 근막 접촉)',
      contactDurationPerPoint: '\uD3EC\uC778\uD2B8\uB2F9 20\uCD08 ~ 30\uCD08 (\uD658\uC790\uAC00 \uB530\uB054 \uAC70\uB9BC\uC774 \uC0AC\uB77C\uC9C0\uAC70\uB098 \uBB35\uC9C1\uD55C \uC774\uC644\uAC10\uC744 \uB290\uB084\uB54C\uAE4C\uC9C0)',
      outputIntensity: '\uACE0\uC804\uC555 \uBBF8\uC138\uC804\uB958 03~05\uB2E8\uACC4 (\uD3B8\uC548\uD55C \uD384\uC2A4 \uC9C4\uB3D9 \uAC10\uAC01)',
      stingingRemedy: '\uD658\uBD80\uC5D0 \uC54C\uCF5C \uB610\uB294 \uC0DD\uB9AC\uC2DD\uC5FC\uC218 \uC2A4\uD504\uB808\uC774',
      treatmentSequence: [
        'HP-TOS-01(사각근 간극)에 20초간 부드럽게 대어 신경 긴장을 풀고, HP-TOS-02(소흉근부)에 20초간 접촉합니다.'
      ],
      clinicalPearls: [
        '쇄골 상와 부위는 쇄골하동맥이 주행하므로 반드시 손가락으로 동맥 맥박을 확인하고 맥박의 외측 안전 구역에 펜을 접촉해야 합니다.'
      ]
    },
    anatomicalSafetyGuide: {
      primaryLandmarks: '쇄골 상연(Superior clavicle), 흉쇄유돌근 후연(Posterior SCM border), 제1늑골(First rib)',
      dangerStructures: '쇄골하동맥(Subclavian artery), 내경정맥, 흉막첨(Cupula of pleura, 기흉 위험 부위)',
      probeTechnique: '쇄골 상와에서 펜 도자를 폐가 있는 흉강 안쪽 아래로 깊이 찌르지 말고, 제1늑골 상면 뼈를 향해 편평하게 접촉합니다.',
      safetyPrecautions: '환자가 시술 중 기침을 하거나 호흡 곤란을 호소하지 않도록 관찰하며 절대 깊은 압박을 가하지 마십시오.'
    },
    clinicalCases: [
      {
        caseId: 'CASE-TOS-01',
        patientProfile: '31세 여성 / 미용사 / 유병기간 1년 양측 팔 저림 및 손 시림',
        chiefComplaint: '가위질이나 드라이기를 들고 5분만 있어도 양팔이 저려 팔을 떨어뜨림, Roos 검사 양성 (NRS 7)',
        priorTreatments: '목 디스크로 오인하여 경추 도수치료 및 견인치료 3개월 받았으나 무효',
        clinicalExamination: 'Wright 과외전 검사 및 Adson 검사 양성, 쇄골 상와 사각근 촉진 시 제4-5수지로 전기가 방사됨',
        novaCellApplication: '노바셀 단일 펜 도자로 HP-TOS-01(사각근 간극 외측 안전구역) 20초, HP-TOS-02(소흉근) 20초 주 2회 통전',
        therapeuticOutcome: '3회 시술 후 드라이기 사용 시 팔 저림 70% 감소, 6회 치료 후 Roos 검사 3분간 정상 유지.'
      }
    ]
  },

  {
    id: 'scapular-dorsal-pain',
    categoryId: 'shoulder-arm',
    titleKo: '견갑배신경통 / 능형근 견갑골 결림',
    titleEn: 'Dorsal Scapular Nerve Pain & Rhomboid Spasm',
    badge: '흉배부 결림',
    illustrationImage: 'assets/regions/scapular-dorsal.webp',
    overview: '날개뼈(견갑골) 안쪽 가장자리를 따라 칼로 에이거나 담이 결린 듯한 묵직한 통증이 지속되며, 견갑배신경의 중사각근 관통부 포착이 주원인입니다.',
    symptoms: [
      '견갑골 내측 연을 따라 쑤시고 묵직한 만성 결림',
      '손을 뻗어 날개뼈 안쪽을 긁거나 두드려도 시원하지 않은 깊은 통증',
      '고개를 통증 반대쪽으로 돌리고 숙일 때 견갑골 부위가 당김',
      '스트레스나 장시간 컴퓨터 작업 시 결림 심화'
    ],
    pathologyMechanism: '견갑배신경(C5 분지)이 중사각근을 뚫고 나와 견갑거근과 대/소능형근 심부를 주행하는데, 목의 사각근 긴장 또는 흉곽 후방 비틀림으로 인해 신경이 당겨져 허혈성 통증을 일으킵니다.',
    healingPoints: [
      {
        id: 'HP-DSN-01',
        code: 'HP-01',
        nameKo: '견갑거근 정지부 (견갑골 상각점)',
        nameEn: 'Levator Scapulae Insertion (Superior Angle)',
        targetAnatomy: '견갑거근 정지건, 견갑골 상각 골막',
        locationGuide: '견갑골 상각(가장 윗모서리) 뼈 끝의 몹시 단단한 압통점',
        significance: '목에서 어깨로 이어지는 상부 승모근-견갑거근 긴장의 중심축 해소',
        pinCoordinates: { x: 43.0, y: 21.0, view: 'posterior' }
      },
      {
        id: 'HP-DSN-02',
        code: 'HP-02',
        nameKo: '견갑배신경 능형근 관통점',
        nameEn: 'Dorsal Scapular Nerve (Rhomboid Point)',
        targetAnatomy: '견갑배신경, 소능형근-대능형근 사이 건막',
        locationGuide: '견갑골 내측연 중앙, 척추 극돌기와 견갑골 사이 내측 2cm',
        significance: '날개뼈 안쪽 만성 결림 및 연관통의 직접적인 포착 해제',
        pinCoordinates: { x: 44.5, y: 25.5, view: 'posterior' }
      }
    ],
    novaCellProtocol: {
      probeType: '단일 펜 도자 (Monopolar Pen Probe)',
      contactMethod: '견갑골 뼈 가장자리에 지지하여 뼈를 향해 비스듬히 통전',
      contactDurationPerPoint: '\uD3EC\uC778\uD2B8\uB2F9 20\uCD08 ~ 30\uCD08 (\uD658\uC790\uAC00 \uB530\uB054 \uAC70\uB9BC\uC774 \uC0AC\uB77C\uC9C0\uAC70\uB098 \uBB35\uC9C1\uD55C \uC774\uC644\uAC10\uC744 \uB290\uB084\uB54C\uAE4C\uC9C0)',
      outputIntensity: '\uACE0\uC804\uC555 \uBBF8\uC138\uC804\uB958 03~05\uB2E8\uACC4 (\uD3B8\uC548\uD55C \uD384\uC2A4 \uC9C4\uB3D9 \uAC10\uAC01)',
      stingingRemedy: '\uD658\uBD80\uC5D0 \uC54C\uCF5C \uB610\uB294 \uC0DD\uB9AC\uC2DD\uC5FC\uC218 \uC2A4\uD504\uB808\uC774',
      treatmentSequence: [
        'HP-DSN-01(견갑골 상각) 25초 통전 후, HP-DSN-02(능형근점)에 25초간 도자를 안착시킵니다.'
      ],
      clinicalPearls: [
        '환자가 팔을 반대쪽 어깨로 감싸 쥐어 날개뼈가 외측으로 벌어지게 한 후 시술하면 능형근 부위가 편평하게 펴져 통전 효과가 탁월합니다.'
      ]
    },
    anatomicalSafetyGuide: {
      primaryLandmarks: '견갑골 상각(Superior angle), 견갑골 척추연(Vertebral border of scapula)',
      dangerStructures: '늑간동맥 분지, 흉막(늑골 간극을 향해 수직으로 찌를 경우 기흉 위험)',
      probeTechnique: '늑골 사이 빈 공간으로 도자를 깊이 밀지 말고, 반드시 견갑골 내측 뼈 가장자리 골면에 비스듬히 안착시킵니다.',
      safetyPrecautions: '흉곽 방향으로 과도한 수직 압박을 가하지 않도록 주의합니다.'
    },
    clinicalCases: [
      {
        caseId: 'CASE-DS-01',
        patientProfile: '38세 남성 / 소프트웨어 엔지니어 / 유병기간 2년 좌측 날개뼈 안쪽 결림',
        chiefComplaint: '좌측 견갑골 안쪽이 칼로 도려내는 듯 아파 업무 집중 불가, 야간 수면 방해 (NRS 7)',
        priorTreatments: '체외충격파 10회 및 마사지 지속했으나 일시적 호전 후 당일 재발',
        clinicalExamination: '견갑골 상각 및 내측연(HP-DSN-02)에 굵은 연필심 같은 근막 경결 촉진',
        novaCellApplication: '노바셀 단일 펜 도자로 HP-DSN-01 25초, HP-DSN-02 25초 통전 (주 2회, 2주간 총 4회)',
        therapeuticOutcome: '1회 시술 직후 묵직하던 결림의 60% 즉각 경감, 4회 치료 후 만성 결림 완전 소실.'
      }
    ]
  },

  // =========================================================================
  // 3. 팔꿈치 / 손목 / 수부 (Elbow, Wrist & Hand)
  // =========================================================================
  {
    id: 'lateral-epicondylitis',
    categoryId: 'hand-wrist',
    titleKo: '테니스 엘보 / 외측상과염',
    titleEn: 'Lateral Epicondylitis / Tennis Elbow',
    badge: '팔꿈치 대표',
    illustrationImage: 'assets/regions/lateral-epicondylitis-bilateral.webp',
    overview: '단요측수근신근건(ECRB) 기시부의 미세 파열과 퇴행성 건병증으로 인해 손목을 뒤로 젖히거나 물건을 쥘 때 팔꿈치 바깥쪽에 찌릿한 통증이 발생합니다.',
    symptoms: [
      '문고리를 돌리거나 찻잔을 들 때 팔꿈치 바깥쪽 통증',
      '손목을 뒤로 젖힐 때 팔꿈치 외측 상과 부위에 날카로운 통증',
      '팔꿈치 바깥쪽 튀어나온 뼈를 누르면 몹시 아픔',
      '손에 쥐는 힘(악력)이 약해져 물건을 자주 떨어뜨림'
    ],
    pathologyMechanism: '반복적인 손목 신전 부하로 단요측수근신근건 부착부의 혈관신경성 비후(Angiofibroblastic hyperplasia)와 불완전 치유가 악순환을 형성합니다.',
    healingPoints: [
      {
        id: 'HP-LE-01',
        code: 'HP-01',
        nameKo: '단요측수근신근 기시부 건골막점',
        nameEn: 'ECRB Origin Tenoperiosteal Point',
        targetAnatomy: '단요측수근신근(ECRB) 건, 상완골 외측상과 골막',
        locationGuide: '상완골 외측상과 바로 앞쪽 및 원위부 5mm 지점의 극심한 압통 결절',
        significance: '건-골막 부착부의 만성 염증 신호 감쇠 및 교원질 재생 촉진',
        pinCoordinates: { x: 32.5, y: 37.0, view: 'posterior' }
      },
      {
        id: 'HP-LE-02',
        code: 'HP-02',
        nameKo: '요골신경 심부지 관통점 (Frohse 아케이드)',
        nameEn: 'Deep Radial Nerve (Arcade of Frohse)',
        targetAnatomy: '후골간신경(PIN), 회외근 상연 건성 아치',
        locationGuide: '외측상과 하방 약 3~4cm, 회외근 복직부의 압통 함요처',
        significance: '동반된 요골관 증후군(Radial tunnel syndrome) 신경 포착 동시 해결',
        pinCoordinates: { x: 31.5, y: 39.5, view: 'posterior' }
      }
    ],
    novaCellProtocol: {
      probeType: '단일 펜 도자 (Monopolar Pen Probe)',
      contactMethod: '골막 부착부에 직각으로 단단히 지지 후 미세 전류 인가',
      contactDurationPerPoint: '\uD3EC\uC778\uD2B8\uB2F9 20\uCD08 ~ 30\uCD08 (\uD658\uC790\uAC00 \uB530\uB054 \uAC70\uB9BC\uC774 \uC0AC\uB77C\uC9C0\uAC70\uB098 \uBB35\uC9C1\uD55C \uC774\uC644\uAC10\uC744 \uB290\uB084\uB54C\uAE4C\uC9C0)',
      outputIntensity: '\uACE0\uC804\uC555 \uBBF8\uC138\uC804\uB958 03~05\uB2E8\uACC4 (\uD3B8\uC548\uD55C \uD384\uC2A4 \uC9C4\uB3D9 \uAC10\uAC01)',
      stingingRemedy: '\uD658\uBD80\uC5D0 \uC54C\uCF5C \uB610\uB294 \uC0DD\uB9AC\uC2DD\uC5FC\uC218 \uC2A4\uD504\uB808\uC774',
      treatmentSequence: [
        'HP-LE-01(외측상과 건부착점) 25초 통전 후, HP-LE-02(Frohse 아케이드)에 25초간 접촉합니다.'
      ],
      clinicalPearls: [
        '외측상과 뼈만 누르지 말고 그 바로 1cm 아래 근육 힘줄 접합부(Musculotendinous junction)를 함께 통전해야 재발하지 않습니다.'
      ]
    },
    anatomicalSafetyGuide: {
      primaryLandmarks: '상완골 외측상과(Lateral epicondyle), 요골두(Radial head)',
      dangerStructures: '요골신경 천지(Superficial radial nerve), 후골간신경',
      probeTechnique: '골막에 직접 펜을 접촉하되 신경 주행부 압박 시 환자가 손가락 마비감을 호소하지 않는지 확인합니다.',
      safetyPrecautions: '과도한 뼈 마찰을 삼가고 미세전류 전도 겔을 팁에 얇게 도포하십시오.'
    },
    clinicalCases: [
      {
        caseId: 'CASE-LE-01',
        patientProfile: '49세 남성 / 목수 / 유병기간 5개월 우측 팔꿈치 외측상과염',
        chiefComplaint: '망치질이나 나사 조일 때 팔꿈치 바깥이 찢어지듯 아파 일손을 놓음, Cozen 검사 강양성 (NRS 8)',
        priorTreatments: '물리치료 10회 및 팔꿈치 밴드 착용했으나 호전 없음',
        clinicalExamination: '외측상과 건부착부(HP-LE-01) 극심한 압통 및 악력 측정 시 건측의 40%로 저하',
        novaCellApplication: '노바셀 단일 펜 도자로 HP-LE-01 및 HP-LE-02 각 25초 통전 (주 2회, 총 4회)',
        therapeuticOutcome: '2회 시술 후 악력 80% 회복, 4회 치료 후 Cozen 검사 음성 전환 및 목수 작업 통증 없이 복귀.'
      }
    ]
  },

  {
    id: 'medial-epicondylitis',
    categoryId: 'hand-wrist',
    titleKo: '골퍼 엘보 / 내측상과염',
    titleEn: 'Medial Epicondylitis / Golfer\'s Elbow',
    badge: '팔꿈치 내측',
    illustrationImage: 'assets/regions/medial-epicondylitis-bilateral.webp',
    overview: '원회내근과 요측수근굴근 등 공통 굴근건 기시부의 미세 손상으로 손목을 안으로 굽히거나 비틀 때 팔꿈치 안쪽 뼈에 통증이 발생합니다.',
    symptoms: [
      '걸레를 짜거나 손잡이를 안쪽으로 돌릴 때 팔꿈치 안쪽 통증',
      '손목을 손바닥 쪽으로 굽힐 때 내측 상과 부위 찌릿함',
      '팔꿈치 안쪽 튀어나온 뼈를 누르면 몹시 아픔',
      '심할 경우 넷째, 다섯째 손가락으로 찌릿한 저림 동반'
    ],
    pathologyMechanism: '공통 굴근건(Common flexor tendon)의 반복적 과부하로 인한 건병증과, 인접한 척골신경(Ulnar nerve)의 2차성 자극이 원인입니다.',
    healingPoints: [
      {
        id: 'HP-ME-01',
        code: 'HP-01',
        nameKo: '공통 굴근건 기시부 건골막점',
        nameEn: 'Common Flexor Tendon Origin Point',
        targetAnatomy: '공통 굴근건, 상완골 내측상과 전하면 골막',
        locationGuide: '상완골 내측상과 전하방 5mm 지점의 압통 결절',
        significance: '굴근건 기시부 건염의 직접적인 통증 차단 및 조직 회복',
        pinCoordinates: { x: 34.5, y: 37.0, view: 'anterior' }
      },
      {
        id: 'HP-ME-02',
        code: 'HP-02',
        nameKo: '원회내근 근복 신경점',
        nameEn: 'Pronator Teres Muscle Belly Point',
        targetAnatomy: '원회내근, 정중신경 주행로 외측',
        locationGuide: '내측상과 하방 3cm, 전완 전내측 사선 주행부',
        significance: '전완 회내 시 발생하는 장력 부하 분산 및 연축 이완',
        pinCoordinates: { x: 33.5, y: 39.5, view: 'anterior' }
      }
    ],
    novaCellProtocol: {
      probeType: '단일 펜 도자 (Monopolar Pen Probe)',
      contactMethod: '내측상과 전면 골면에 안전 지지 접촉',
      contactDurationPerPoint: '\uD3EC\uC778\uD2B8\uB2F9 20\uCD08 ~ 30\uCD08 (\uD658\uC790\uAC00 \uB530\uB054 \uAC70\uB9BC\uC774 \uC0AC\uB77C\uC9C0\uAC70\uB098 \uBB35\uC9C1\uD55C \uC774\uC644\uAC10\uC744 \uB290\uB084\uB54C\uAE4C\uC9C0)',
      outputIntensity: '\uACE0\uC804\uC555 \uBBF8\uC138\uC804\uB958 03~05\uB2E8\uACC4 (\uD3B8\uC548\uD55C \uD384\uC2A4 \uC9C4\uB3D9 \uAC10\uAC01)',
      stingingRemedy: '\uD658\uBD80\uC5D0 \uC54C\uCF5C \uB610\uB294 \uC0DD\uB9AC\uC2DD\uC5FC\uC218 \uC2A4\uD504\uB808\uC774',
      treatmentSequence: [
        'HP-ME-01(내측상과 건부착점) 25초 통전 후, HP-ME-02(원회내근)에 25초간 접촉합니다.'
      ],
      clinicalPearls: [
        '내측상과 바로 뒤쪽 고랑에는 척골신경이 지나가므로 절대 뒤쪽 고랑을 찌르지 말고 전하면 뼈에만 도자를 안착시킵니다.'
      ]
    },
    anatomicalSafetyGuide: {
      primaryLandmarks: '상완골 내측상과(Medial epicondyle), 주두(Olecranon)',
      dangerStructures: '척골신경(Ulnar nerve, 내측상과 후방 주관 구강 주행)',
      probeTechnique: '후방 척골신경 고랑을 엄지손가락으로 보호하고 내측상과의 전방 골면에만 직각 안착합니다.',
      safetyPrecautions: '척골신경 자극으로 인한 제4-5수지 저림 유발 여부를 실시간 확인하십시오.'
    },
    clinicalCases: [
      {
        caseId: 'CASE-ME-01',
        patientProfile: '42세 남성 / 골프 강사 / 유병기간 3개월 좌측 골퍼 엘보',
        chiefComplaint: '아이언 샷 임팩트 시 좌측 팔꿈치 안쪽이 찢어지는 통증, 손목 굴곡 저항 검사 양성 (NRS 7)',
        priorTreatments: '소염진통제 복용 및 파스 부착했으나 스윙 시 재발',
        clinicalExamination: '내측상과 전하방(HP-ME-01) 국소 압통 명확, 척골신경 틴넬 징후는 음성',
        novaCellApplication: '노바셀 단일 펜 도자로 HP-ME-01 및 HP-ME-02 각 25초 통전 (주 2회, 총 3회)',
        therapeuticOutcome: '2회 시술 후 스윙 임팩트 통증 소실, 3회 치료 후 필드 레슨 정상 복귀.'
      }
    ]
  },

  {
    id: 'cubital-tunnel-syndrome',
    categoryId: 'hand-wrist',
    titleKo: '주관 증후군 / 척골신경 포착증',
    titleEn: 'Cubital Tunnel Syndrome & Ulnar Entrapment',
    badge: '척골 신경',
    illustrationImage: 'assets/regions/cubital-tunnel-bilateral.webp',
    overview: '팔꿈치 내측의 주관(Cubital tunnel)에서 척골신경이 압박되어 넷째 손가락 안쪽과 새끼손가락이 저리고 손가락 사이 근육이 마르는 질환입니다.',
    symptoms: [
      '새끼손가락과 넷째 손가락 안쪽의 지속적인 저림과 무감각',
      '팔꿈치를 구부리고 전화 통화를 오래 하면 저림이 심해짐',
      '단추 채우기, 젓가락질 등 미세한 손동작이 어눌해짐',
      '엄지와 검지 사이 근육(제1배측골간근)이 쏙 꺼지는 근위축'
    ],
    pathologyMechanism: '내측상과 후방 주관에서 오스본 인대(Osborne\'s ligament)나 척측수근굴근 두 갈래 사이 건궁의 비후로 척골신경이 마찰 및 압박을 받습니다.',
    healingPoints: [
      {
        id: 'HP-CuT-01',
        code: 'HP-01',
        nameKo: '주관 입구 오스본 인대 신경점',
        nameEn: 'Osborne\'s Ligament Entry Point',
        targetAnatomy: '척골신경, 오스본 인대(Cubital tunnel retinaculum)',
        locationGuide: '내측상과와 주두(팔꿈치 머리) 사이 오목한 홈의 상단부',
        significance: '주관 입구부 척골신경의 기계적 마찰 완화 및 신경 전도 속도 개선',
        pinCoordinates: { x: 35.5, y: 37.5, view: 'posterior' }
      },
      {
        id: 'HP-CuT-02',
        code: 'HP-02',
        nameKo: '척측수근굴근 건궁 출구점',
        nameEn: 'FCU Aponeurosis Exit Point',
        targetAnatomy: '척측수근굴근(FCU) 두 갈래 사이 건막, 척골신경 원위부',
        locationGuide: '주관 아래 3cm 지점, 전완 후내측 근육 사이 틈새',
        significance: '척골신경이 전완부로 진입할 때의 제2 포착부위 감압',
        pinCoordinates: { x: 34.5, y: 40.5, view: 'posterior' }
      }
    ],
    novaCellProtocol: {
      probeType: '단일 펜 도자 (Monopolar Pen Probe)',
      contactMethod: '신경을 짓누르지 않고 인대 가장자리에 깃털처럼 가볍게 안착',
      contactDurationPerPoint: '\uD3EC\uC778\uD2B8\uB2F9 20\uCD08 ~ 30\uCD08 (\uD658\uC790\uAC00 \uB530\uB054 \uAC70\uB9BC\uC774 \uC0AC\uB77C\uC9C0\uAC70\uB098 \uBB35\uC9C1\uD55C \uC774\uC644\uAC10\uC744 \uB290\uB084\uB54C\uAE4C\uC9C0)',
      outputIntensity: '\uACE0\uC804\uC555 \uBBF8\uC138\uC804\uB958 03~05\uB2E8\uACC4 (\uD3B8\uC548\uD55C \uD384\uC2A4 \uC9C4\uB3D9 \uAC10\uAC01)',
      stingingRemedy: '\uD658\uBD80\uC5D0 \uC54C\uCF5C \uB610\uB294 \uC0DD\uB9AC\uC2DD\uC5FC\uC218 \uC2A4\uD504\uB808\uC774',
      treatmentSequence: [
        'HP-CuT-01 및 HP-CuT-02에 각 20초간 부드럽게 접촉하여 통전합니다.'
      ],
      clinicalPearls: [
        '척골신경 본간을 펜촉으로 세게 누르면 전기 충격 같은 통증이 유발되므로, 주관의 골성 테두리에 펜 도자를 지지하여 전류를 유도하십시오.'
      ]
    },
    anatomicalSafetyGuide: {
      primaryLandmarks: '내측상과 후면(Posterior medial epicondyle), 주두 돌기(Olecranon process)',
      dangerStructures: '척골신경 본간(Ulnar nerve trunk), 후척골재발동맥',
      probeTechnique: '신경을 강압으로 직접 압축하지 말고 인접 지지대 인대 표면에 미세전류를 인가합니다.',
      safetyPrecautions: '손가락으로 찌릿한 방전통이 너무 심하게 뻗칠 경우 출력을 1단계로 낮추고 펜 위치를 2mm 이동합니다.'
    },
    clinicalCases: [
      {
        caseId: 'CASE-CUT-01',
        patientProfile: '51세 여성 / 경리직 / 유병기간 6개월 우측 제4-5수지 저림',
        chiefComplaint: '컴퓨터 키보드 칠 때 우측 새끼손가락 감각이 둔하고 밤에 팔꿈치를 접고 자면 저려 깸 (NRS 6)',
        priorTreatments: '비타민 B제제 복용 및 물리치료 했으나 진전 없음',
        clinicalExamination: '주관 부위 틴넬 징후 강양성(새끼손가락으로 찌릿), Froment 징후 양성',
        novaCellApplication: '노바셀 단일 펜 도자 1단계 출력으로 HP-CuT-01 및 HP-CuT-02 각 20초 주 2회 통전',
        therapeuticOutcome: '2주(4회) 시술 후 야간 수면 저림 소실, 4주 후 새끼손가락 감각 90% 정상 회복.'
      }
    ]
  },

  {
    id: 'carpal-tunnel-syndrome',
    categoryId: 'hand-wrist',
    titleKo: '수근관 증후군 / 정중신경 포착',
    titleEn: 'Carpal Tunnel Syndrome & Median Nerve Entrapment',
    badge: '손목 대표',
    illustrationImage: 'assets/regions/carpal-tunnel-bilateral.webp',
    overview: '손목 안쪽 수근관을 덮고 있는 횡수근인대의 비후와 굴근건 건초염으로 정중신경이 압박되어 엄지, 검지, 중지의 저림과 야간통이 발생하는 대표적 수부 질환입니다.',
    symptoms: [
      '엄지, 검지, 중지 및 손바닥 부위의 저림과 화끈거리는 통증',
      '밤이나 새벽에 손이 몹시 저려서 손을 탈탈 털어야 진정됨',
      '단추 잠그기, 젓가락질, 바늘귀 꿰기 등 손끝 정밀 감각 저하',
      '오래 방치 시 엄지손가락 밑 볼록한 근육(무지구)이 얇아짐'
    ],
    pathologyMechanism: '손목 굴곡근건의 과사용과 섬유화로 수근관 내압이 정상(2~10mmHg)에서 30~90mmHg로 상승하여 정중신경의 모세혈관 순환이 차단되고 신경 부종이 고착화됩니다.',
    healingPoints: [
      {
        id: 'HP-CTS-01',
        code: 'HP-01',
        nameKo: '수근관 입구 정중신경점 (완관절 주름 중앙)',
        nameEn: 'Carpal Tunnel Inlet (Median Nerve)',
        targetAnatomy: '정중신경 본간, 횡수근인대(Flexor retinaculum) 근위연',
        locationGuide: '손목 안쪽 가로주름 중앙, 장장근건과 요측수근굴근건 사이',
        significance: '수근관 입구 내압 강하 및 정중신경 축삭류(Axoplasmic flow) 회복',
        pinCoordinates: { x: 29.5, y: 50.0, view: 'anterior' }
      },
      {
        id: 'HP-CTS-02',
        code: 'HP-02',
        nameKo: '원회내근 정중신경 관통부 (전완 근위부)',
        nameEn: 'Pronator Teres Median Nerve Entrapment Point',
        targetAnatomy: '정중신경, 원회내근 상완두-척골두 사이',
        locationGuide: '팔꿈치 접히는 주름 중앙에서 하방 3~4cm 전완 정중선상',
        significance: '이중 압박 증후군(Double crush)을 차단하여 손목 통증 치료 효과 2배 증대',
        pinCoordinates: { x: 33.5, y: 40.5, view: 'anterior' }
      },
      {
        id: 'HP-CTS-03',
        code: 'HP-03',
        nameKo: '무지구근 정중신경 반회지 분기점',
        nameEn: 'Recurrent Motor Branch / Thenar Point',
        targetAnatomy: '정중신경 운동반회지, 단무지외전근',
        locationGuide: '엄지손가락 두덩(Thenar eminence) 기저부의 오목한 중심부',
        significance: '엄지 대립 기능(Opponens) 회복 및 손가락 악력 복원',
        pinCoordinates: { x: 28.5, y: 52.5, view: 'anterior' }
      }
    ],
    novaCellProtocol: {
      probeType: '단일 펜 도자 (Monopolar Pen Probe)',
      contactMethod: '수근관 횡수근인대 표면에 수직 점진 안착',
      contactDurationPerPoint: '\uD3EC\uC778\uD2B8\uB2F9 20\uCD08 ~ 30\uCD08 (\uD658\uC790\uAC00 \uB530\uB054 \uAC70\uB9BC\uC774 \uC0AC\uB77C\uC9C0\uAC70\uB098 \uBB35\uC9C1\uD55C \uC774\uC644\uAC10\uC744 \uB290\uB084\uB54C\uAE4C\uC9C0)',
      outputIntensity: '\uACE0\uC804\uC555 \uBBF8\uC138\uC804\uB958 03~05\uB2E8\uACC4 (\uD3B8\uC548\uD55C \uD384\uC2A4 \uC9C4\uB3D9 \uAC10\uAC01)',
      stingingRemedy: '\uD658\uBD80\uC5D0 \uC54C\uCF5C \uB610\uB294 \uC0DD\uB9AC\uC2DD\uC5FC\uC218 \uC2A4\uD504\uB808\uC774',
      treatmentSequence: [
        '1단계: HP-CTS-02(원회내근부) 25초 통전으로 상부 신경 경로를 개방합니다.',
        '2단계: HP-CTS-01(수근관 입구)에 25초, HP-CTS-03(무지구)에 20초간 순차적으로 도자를 접촉합니다.'
      ],
      clinicalPearls: [
        '손목 터널 증후군은 손목만 치료하면 재발률이 높으므로, 반드시 전완 상부의 원회내근 관통점(HP-CTS-02)을 함께 통전해야 근본 치료가 됩니다.'
      ]
    },
    anatomicalSafetyGuide: {
      primaryLandmarks: '원위 수근 주름(Distal wrist crease), 장장근건(Palmaris longus tendon)',
      dangerStructures: '정중신경 천수장지, 요골동맥 천수장지',
      probeTechnique: '손목 인대 표면에 가볍게 안착시키며 신경 본간을 강하게 찌르지 않습니다.',
      safetyPrecautions: '손바닥 쪽으로 전기 찌릿함이 너무 강할 경우 펜 팁을 약간 외측으로 이동하여 조절합니다.'
    },
    clinicalCases: [
      {
        caseId: 'CASE-CTS-01',
        patientProfile: '54세 여성 / 식당 조리사 / 유병기간 1년 양측 수근관 증후군',
        chiefComplaint: '새벽마다 손이 타는 듯이 저려 깨서 손을 털어야 함, 팔렌 검사 15초 만에 양성 (NRS 8)',
        priorTreatments: '수술 권유받았으나 조리 업무 중단이 어려워 보존적 치료 희망',
        clinicalExamination: '양측 손목 틴넬 징후 양성, 무지구 근위축 경미하게 관찰됨',
        novaCellApplication: '노바셀 단일 펜 도자로 HP-CTS-02 25초, HP-CTS-01 25초, HP-CTS-03 20초 주 2회 통전',
        therapeuticOutcome: '시술 1주(2회) 후 야간 수면 저림 소실, 4주(8회) 치료 후 팔렌 검사 60초 이상 음성으로 완치.'
      }
    ]
  },

  {
    id: 'trigger-finger-dequervain',
    categoryId: 'hand-wrist',
    titleKo: '방아쇠수지 및 드퀘르벵 건초염',
    titleEn: 'Trigger Finger & De Quervain\'s Tenosynovitis',
    badge: '수부 건초염',
    illustrationImage: 'assets/regions/trigger-finger-dequervain-bilateral.webp',
    overview: '손가락 굴근건의 A1 도르래 협착으로 손가락이 걸렸다가 튕기듯 펴지는 방아쇠수지와, 엄지손가락 기저부 건초염으로 엄지를 움직일 때 손목 외측이 아픈 드퀘르벵 건초염입니다.',
    symptoms: [
      '아침에 손가락이 굽혀진 채 굳어 반대 손으로 펴야 "딱" 소리가 나며 펴짐',
      '손바닥 손가락 기저부 뼈마디에 멍울(결절)이 만져지고 누르면 아픔',
      '엄지손가락을 쥐고 손목을 아래로 꺾을 때 손목 외측에 극심한 통증(핑켈스타인 양성)',
      '스마트폰을 쥐거나 칼질할 때 엄지손가락 기저부 결림'
    ],
    pathologyMechanism: 'A1 도르래(Pulley) 또는 제1 신전건 구획(EPB, APL 건초)의 마찰과 비후로 활액막염이 생겨 건 활차가 좁아집니다.',
    healingPoints: [
      {
        id: 'HP-TF-01',
        code: 'HP-01',
        nameKo: '수장측 A1 도르래 결절점',
        nameEn: 'A1 Pulley Flexor Tendon Point',
        targetAnatomy: 'A1 도르래, 심수지굴근건 비후 결절',
        locationGuide: '원위 수장 주름상 해당 손가락 기저부의 단단하게 만져지는 결절',
        significance: '도르래 부종을 가라앉히고 손가락 굴신 시 걸림(Snapping) 즉각 해소',
        pinCoordinates: { x: 28.5, y: 53.5, view: 'anterior' }
      },
      {
        id: 'HP-DQ-01',
        code: 'HP-02',
        nameKo: '제1 신전건 구획점 (요골 붓돌기부)',
        nameEn: 'First Extensor Compartment (Radial Styloid)',
        targetAnatomy: '단무지신전근(EPB), 단무지외전근(APL) 건초',
        locationGuide: '손목 외측 요골 붓돌기(Radial styloid) 바로 위의 오목한 고랑',
        significance: '드퀘르벵 건초염의 핑켈스타인 통증 및 엄지 기저부 마찰염 완화',
        pinCoordinates: { x: 29.5, y: 49.5, view: 'posterior' }
      }
    ],
    novaCellProtocol: {
      probeType: '단일 펜 도자 (Monopolar Pen Probe)',
      contactMethod: '도르래 결절 및 건초 구획 골면에 밀착 접촉',
      contactDurationPerPoint: '\uD3EC\uC778\uD2B8\uB2F9 20\uCD08 ~ 30\uCD08 (\uD658\uC790\uAC00 \uB530\uB054 \uAC70\uB9BC\uC774 \uC0AC\uB77C\uC9C0\uAC70\uB098 \uBB35\uC9C1\uD55C \uC774\uC644\uAC10\uC744 \uB290\uB084\uB54C\uAE4C\uC9C0)',
      outputIntensity: '\uACE0\uC804\uC555 \uBBF8\uC138\uC804\uB958 03~05\uB2E8\uACC4 (\uD3B8\uC548\uD55C \uD384\uC2A4 \uC9C4\uB3D9 \uAC10\uAC01)',
      stingingRemedy: '\uD658\uBD80\uC5D0 \uC54C\uCF5C \uB610\uB294 \uC0DD\uB9AC\uC2DD\uC5FC\uC218 \uC2A4\uD504\uB808\uC774',
      treatmentSequence: [
        '해당 증상에 맞춰 HP-TF-01(도르래 결절) 또는 HP-DQ-01(요골 붓돌기)에 25초간 접촉 통전합니다.'
      ],
      clinicalPearls: [
        '방아쇠수지 시술 시 손가락을 가볍게 굽혔다 펴는 동작을 하면서 통전하면 도르래와 건 사이 유착 박리 속도가 훨씬 빨라집니다.'
      ]
    },
    anatomicalSafetyGuide: {
      primaryLandmarks: '중수골두(Metacarpal head), 요골 붓돌기(Radial styloid)',
      dangerStructures: '고유 수지 신경 및 동맥(Digital nerve/artery), 요골신경 천지',
      probeTechnique: '손가락 양측 측면으로 주행하는 신경동맥 다발을 피해 손바닥 정중선 건 중심부에 안착합니다.',
      safetyPrecautions: '손가락 말단 허혈을 방지하기 위해 과도한 측면 압박을 피하십시오.'
    },
    clinicalCases: [
      {
        caseId: 'CASE-TF-01',
        patientProfile: '58세 여성 / 주부 / 유병기간 4개월 우측 3지 방아쇠수지',
        chiefComplaint: '아침마다 중지가 걸려 펴지지 않고 펼 때 딱 소리와 함께 극심한 통증 (NRS 7)',
        priorTreatments: '물리치료 및 파스 부착했으나 걸림 증상 악화',
        clinicalExamination: '우측 3지 A1 도르래 부위 직경 4mm 결절 촉진 및 굴신 시 Snapping 명확',
        novaCellApplication: '노바셀 단일 펜 도자로 HP-TF-01 결절부에 25초간 주 2회 통전',
        therapeuticOutcome: '2회 시술 후 걸림 현상 80% 완화, 4회 치료 후 걸림 없이 부드러운 손가락 굴신 회복.'
      }
    ]
  },

  // =========================================================================
  // 4. 흉부 / 복부 / 흉배부 (Thorax & Torso & Back)
  // =========================================================================
  {
    id: 'intercostal-neuralgia',
    categoryId: 'trunk-chest',
    titleKo: '늑간신경통 / 흉곽 외측 통증',
    titleEn: 'Intercostal Neuralgia & Rib Cage Pain',
    badge: '흉곽 대표',
    illustrationImage: 'assets/regions/postherpetic-thoracic-nerves.webp',
    overview: '늑골 아래 홈을 따라 주행하는 늑간신경이 갈비뼈 사이 근막이나 늑골 변위로 포착되어 숨을 들이쉬거나 기침할 때 옆구리와 가슴에 바늘로 찌르는 듯한 통증이 발생합니다.',
    symptoms: [
      '갈비뼈를 따라 등 뒤에서 앞가슴 쪽으로 띠를 두르듯 뻗치는 날카로운 통증',
      '심호흡을 하거나 기침, 재채기, 웃을 때 흉곽이 확장되며 찌르는 통증',
      '옆구리 특정 갈비뼈 틈새를 누르면 깜짝 놀랄 만큼 아픔',
      '자세를 비틀거나 숙일 때 옆구리가 뻐근하고 숨쉬기 답답함'
    ],
    pathologyMechanism: '늑하구(Subcostal groove)에서 늑간신경-혈관 다발이 내늑간근과 최내늑간근 사이에서 포착 및 허혈성 염증을 일으킵니다.',
    healingPoints: [
      {
        id: 'HP-IN-01',
        code: 'HP-01',
        nameKo: '늑간신경 후외측 분절 출구점',
        nameEn: 'Posterolateral Intercostal Nerve Point',
        targetAnatomy: '늑간신경 외측피지, 늑골각(Rib angle) 하연',
        locationGuide: '등 뒤 척추 극돌기 외측 7~8cm, 늑골각 하연의 오목한 고랑',
        significance: '늑간신경 주행로의 가장 근위부 포착을 해소하여 흉곽 전체 방사통 완화',
        pinCoordinates: { x: 44.5, y: 30.5, view: 'posterior' }
      },
      {
        id: 'HP-IN-02',
        code: 'HP-02',
        nameKo: '늑골 외측피지 포착점 (액와선상)',
        nameEn: 'Lateral Cutaneous Branch (Midaxillary Line)',
        targetAnatomy: '외측피지, 전거근 건막 관통부',
        locationGuide: '중액와선(겨드랑이 중심 수직선) 상 해당 늑골 사이 틈새',
        significance: '옆구리 측면의 바늘로 찌르는 듯한 통증과 피부 감각과민 해소',
        pinCoordinates: { x: 39.5, y: 32.5, view: 'anterior' }
      }
    ],
    novaCellProtocol: {
      probeType: '단일 펜 도자 (Monopolar Pen Probe)',
      contactMethod: '늑골 뼈 표면에 펜 도자를 비스듬히 안착 (늑간 틈새 깊은 직각 찌름 금지)',
      contactDurationPerPoint: '\uD3EC\uC778\uD2B8\uB2F9 20\uCD08 ~ 30\uCD08 (\uD658\uC790\uAC00 \uB530\uB054 \uAC70\uB9BC\uC774 \uC0AC\uB77C\uC9C0\uAC70\uB098 \uBB35\uC9C1\uD55C \uC774\uC644\uAC10\uC744 \uB290\uB084\uB54C\uAE4C\uC9C0)',
      outputIntensity: '\uACE0\uC804\uC555 \uBBF8\uC138\uC804\uB958 03~05\uB2E8\uACC4 (\uD3B8\uC548\uD55C \uD384\uC2A4 \uC9C4\uB3D9 \uAC10\uAC01)',
      stingingRemedy: '\uD658\uBD80\uC5D0 \uC54C\uCF5C \uB610\uB294 \uC0DD\uB9AC\uC2DD\uC5FC\uC218 \uC2A4\uD504\uB808\uC774',
      treatmentSequence: [
        'HP-IN-01(늑골각 하연) 20초 통전 후, HP-IN-02(중액와선 외측피지)에 20초간 순차적으로 도자를 접촉합니다.'
      ],
      clinicalPearls: [
        '늑골 아래 고랑에는 신경과 함께 늑간동맥이 주행하므로 강한 압박을 피하고 늑골 뼈 하연 골막에 살짝 걸치듯 펜을 유지합니다.'
      ]
    },
    anatomicalSafetyGuide: {
      primaryLandmarks: '늑골각(Rib angle), 중액와선(Midaxillary line), 늑골 하연(Inferior rib border)',
      dangerStructures: '벽측 흉막 및 폐(기흉 위험 절대 방지), 늑간동맥(Intercostal artery)',
      probeTechnique: '늑골 뼈 표면에 지지하여 펜촉 각도를 뼈와 수평에 가깝게 유지하며 늑간 사이 깊은 흉강으로 진입하지 않습니다.',
      safetyPrecautions: '과도한 압력으로 늑간 공간을 누르면 기흉의 위험이 발생할 수 있으므로 늑골 뼈를 가이드 삼아 안전하게 통전하십시오.'
    },
    clinicalCases: [
      {
        caseId: 'CASE-IN-01',
        patientProfile: '50세 남성 / 운송업 / 유병기간 2개월 좌측 제7-8 늑간신경통',
        chiefComplaint: '기침하거나 차를 후진할 때 좌측 옆구리에서 앞가슴까지 전기가 오르듯 찔러 숨을 헐떡임 (NRS 8)',
        priorTreatments: '흉부 엑스레이 및 CT상 폐와 늑골 골절 이상 없음, 진통소염제 복용 무효',
        clinicalExamination: '좌측 제7늑골각 하연(HP-IN-01) 촉진 시 앞가슴으로 뻗치는 번개 통증 재현',
        novaCellApplication: '노바셀 단일 펜 도자로 HP-IN-01 및 HP-IN-02 각 20초간 안전 안착 통전 (주 2회, 총 3회)',
        therapeuticOutcome: '1회 시술 직후 심호흡 시 통증 70% 감소, 3회 시술 후 기침 및 상체 회전 통증 완전 소실.'
      }
    ]
  },

  {
    id: 'dorsal-spine-pain',
    categoryId: 'trunk-chest',
    titleKo: '흉추 후관절증 / 흉배부 만성 방사통',
    titleEn: 'Thoracic Facet Syndrome & Mid-Back Pain',
    badge: '등 통증',
    illustrationImage: 'assets/regions/dorsal-thoracic-spine.webp',
    overview: '구부정한 자세로 장시간 앉아 있을 때 흉추 후관절낭의 압박과 흉추 기립근, 다열근의 경직으로 인해 등 한가운데가 뻐근하고 앞가슴으로 연관통이 방사되는 질환입니다.',
    symptoms: [
      '등 한가운데 척추 뼈 주변이 묵직하고 쑤시는 만성 통증',
      '상체를 뒤로 젖히거나 회전할 때 등에 뜨끔한 걸림',
      '등 통증이 갈비뼈를 타고 앞가슴이나 명치 쪽으로 퍼짐',
      '오래 앉아 있으면 등이 굳어 펴기 힘들고 만성 피로 동반'
    ],
    pathologyMechanism: '흉추 신경 후지 내측지(Medial branch)의 포착 및 흉추 후관절의 퇴행성 변화로 인한 척추 분절성 통증입니다.',
    healingPoints: [
      {
        id: 'HP-DSP-01',
        code: 'HP-01',
        nameKo: '흉추 후관절 내측지 분절점',
        nameEn: 'Thoracic Facet Medial Branch Point',
        targetAnatomy: '흉추 신경 후지 내측지, 흉추 횡돌기 상연',
        locationGuide: '해당 흉추 극돌기 외측 2~2.5cm, 횡돌기 기저부 상연 골표면',
        significance: '흉추 후관절 유래 등 통증의 근원 분절을 탈감작',
        pinCoordinates: { x: 48.0, y: 28.5, view: 'posterior' }
      },
      {
        id: 'HP-DSP-02',
        code: 'HP-02',
        nameKo: '흉장늑근 골막 부착점',
        nameEn: 'Iliocostalis Thoracis Rib Attachment Point',
        targetAnatomy: '흉장늑근 건, 늑골 후면 골막',
        locationGuide: '극돌기 외측 5cm, 늑골각 직내측 근막 결절',
        significance: '등 전체를 짓누르는 흉배부 기립근 밴드 경결 해소',
        pinCoordinates: { x: 44.5, y: 31.5, view: 'posterior' }
      }
    ],
    novaCellProtocol: {
      probeType: '단일 펜 도자 (Monopolar Pen Probe)',
      contactMethod: '횡돌기 및 늑골 골면에 도자를 안착하여 통전',
      contactDurationPerPoint: '\uD3EC\uC778\uD2B8\uB2F9 20\uCD08 ~ 30\uCD08 (\uD658\uC790\uAC00 \uB530\uB054 \uAC70\uB9BC\uC774 \uC0AC\uB77C\uC9C0\uAC70\uB098 \uBB35\uC9C1\uD55C \uC774\uC644\uAC10\uC744 \uB290\uB084\uB54C\uAE4C\uC9C0)',
      outputIntensity: '\uACE0\uC804\uC555 \uBBF8\uC138\uC804\uB958 03~05\uB2E8\uACC4 (\uD3B8\uC548\uD55C \uD384\uC2A4 \uC9C4\uB3D9 \uAC10\uAC01)',
      stingingRemedy: '\uD658\uBD80\uC5D0 \uC54C\uCF5C \uB610\uB294 \uC0DD\uB9AC\uC2DD\uC5FC\uC218 \uC2A4\uD504\uB808\uC774',
      treatmentSequence: [
        'HP-DSP-01(후관절점) 25초 통전 후, HP-DSP-02(흉장늑근점)에 25초간 접촉합니다.'
      ],
      clinicalPearls: [
        '흉추 분절 통전 시 복식호흡을 유도하여 흉곽이 부드럽게 움직이게 하면 후관절 간극의 압력이 빠르게 정상화됩니다.'
      ]
    },
    anatomicalSafetyGuide: {
      primaryLandmarks: '흉추 극돌기(Thoracic spinous process), 흉추 횡돌기(Transverse process)',
      dangerStructures: '흉곽 늑막(Pleura), 추골동맥 척수 분지',
      probeTechnique: '횡돌기 골면에 직각 접촉하되 횡돌기 사이 빈 공간으로 깊게 밀어 넣지 않습니다.',
      safetyPrecautions: '흉추 전방은 흉막과 폐가 위치하므로 단단한 골성 바닥을 반드시 확인하고 통전합니다.'
    },
    clinicalCases: [
      {
        caseId: 'CASE-DSP-01',
        patientProfile: '44세 여성 / 사무직 / 유병기간 8개월 흉배부 만성 통증',
        chiefComplaint: '오후 2시만 되면 등 한가운데가 타는 듯 뻐근하고 명치 부근까지 결려 업무 중단 (NRS 6)',
        priorTreatments: '도수치료 10회 및 마사지 지속했으나 당일 저녁 재발',
        clinicalExamination: 'T5-6 흉추 후관절 횡돌기 상연(HP-DSP-01) 국소 압통 현저 및 흉장늑근 경결',
        novaCellApplication: '노바셀 단일 펜 도자로 HP-DSP-01 및 HP-DSP-02에 각 25초 통전 (주 2회, 총 4회)',
        therapeuticOutcome: '2회 시술 후 타는 듯한 통증 소실, 4회 치료 후 장시간 컴퓨터 근무에도 등 결림 없음.'
      }
    ]
  },

  {
    id: 'postherpetic-neuralgia-torso',
    categoryId: 'trunk-chest',
    titleKo: '체간부 대상포진 후 신경통 (PHN)',
    titleEn: 'Postherpetic Neuralgia (PHN) of Torso',
    badge: '난치성 신경통',
    illustrationImage: 'assets/regions/postherpetic-thoracic-nerves.webp',
    overview: '대상포진 수포가 치유된 후에도 바이러스가 손상시킨 후근신경절(DRG)과 말초 감각신경 섬유의 과흥분으로 옷깃만 스쳐도 불에 타는 듯한 극심한 이질통(Allodynia)이 지속되는 질환입니다.',
    symptoms: [
      '옷이나 이불이 살에 닿기만 해도 칼로 베이거나 불에 데인 듯한 극통',
      '피부 표면은 감각이 마비된 듯 무딘데 속에서는 지속적으로 찌릿찌릿 쑤심',
      '바람만 스쳐도 깜짝 놀라 옷을 입지 못할 정도의 스침 통증(이질통)',
      '수면 장애, 극심한 우울감 및 만성 피로'
    ],
    pathologyMechanism: '수두-대상포진 바이러스에 의한 후근신경절 C-섬유 파괴 및 A-베타 섬유의 이상 발아(Sprouting)로 척수 후각 교양질(Substantia gelatinosa)의 억제성 회로가 붕괴되어 발생합니다.',
    healingPoints: [
      {
        id: 'HP-PHN-01',
        code: 'HP-01',
        nameKo: '후근신경절 추간공 외측 반사점',
        nameEn: 'Dorsal Root Ganglion Paravertebral Point',
        targetAnatomy: '해당 분절 후근신경절(DRG) 투사 영역, 흉추 횡돌기 기저부',
        locationGuide: '통증 피부분절(Dermatome)에 해당하는 흉추 극돌기 외측 2cm 부척추 영역',
        significance: '중추 신경 과감작(Central sensitization)을 가라앉히고 신경전도 역치 정상화',
        pinCoordinates: { x: 48.0, y: 30.0, view: 'posterior' }
      },
      {
        id: 'HP-PHN-02',
        code: 'HP-02',
        nameKo: '피부 감각신경 통과 원위점',
        nameEn: 'Peripheral Cutaneous Nerve Exit Point',
        targetAnatomy: '늑간신경 외측피지 또는 전피지 신경종말',
        locationGuide: '이질통(Allodynia) 호발 부위 외곽의 통증 경계 정상 피부 함요처',
        significance: '말초 통각 수용체의 자발 방전 억제 및 피부 미세순환 촉진',
        pinCoordinates: { x: 43.5, y: 32.0, view: 'anterior' }
      }
    ],
    novaCellProtocol: {
      probeType: '단일 펜 도자 (Monopolar Pen Probe)',
      contactMethod: '극미세 가벼운 접촉 (Light Touch - 통증 유발 금지, 경계부 접근)',
      contactDurationPerPoint: '\uD3EC\uC778\uD2B8\uB2F9 20\uCD08 ~ 30\uCD08 (\uD658\uC790\uAC00 \uB530\uB054 \uAC70\uB9BC\uC774 \uC0AC\uB77C\uC9C0\uAC70\uB098 \uBB35\uC9C1\uD55C \uC774\uC644\uAC10\uC744 \uB290\uB084\uB54C\uAE4C\uC9C0)',
      outputIntensity: '\uACE0\uC804\uC555 \uBBF8\uC138\uC804\uB958 03~05\uB2E8\uACC4 (\uD3B8\uC548\uD55C \uD384\uC2A4 \uC9C4\uB3D9 \uAC10\uAC01)',
      stingingRemedy: '\uD658\uBD80\uC5D0 \uC54C\uCF5C \uB610\uB294 \uC0DD\uB9AC\uC2DD\uC5FC\uC218 \uC2A4\uD504\uB808\uC774',
      treatmentSequence: [
        '1단계: 통증 부위의 근원인 척추 부근 HP-PHN-01(DRG 반사점)에 20초간 조용히 접촉합니다.',
        '2단계: 극심한 이질통 부위 중심부가 아닌 그 외곽 경계부 HP-PHN-02에 15초간 살포시 펜을 댑니다.'
      ],
      clinicalPearls: [
        'PHN 환자는 붉은 흉터가 있는 가장 아픈 부위를 직접 건드리면 통증 발작이 오므로, 반드시 척추 쪽 신경절(HP-PHN-01)부터 안정시킨 후 외곽에서 안쪽으로 서서히 접근해야 합니다.'
      ]
    },
    anatomicalSafetyGuide: {
      primaryLandmarks: '흉추 횡돌기(Thoracic transverse process), 해당 늑골 피부분절(Dermatome)',
      dangerStructures: '흉막, 척수강',
      probeTechnique: '골성 구조물 상부에 가볍게 펜을 안착시키고 절대 피부를 문지르거나 긁지 않습니다.',
      safetyPrecautions: '환자의 통증 반응을 실시간 관찰하며 출력을 1단계에서 시작하고 절대로 급격히 올리지 마십시오.'
    },
    clinicalCases: [
      {
        caseId: 'CASE-PHN-01',
        patientProfile: '68세 여성 / 주부 / 유병기간 10개월 우측 제6-7 흉추 피부분절 대상포진 후 신경통',
        chiefComplaint: '옷이 닿기만 해도 불에 덴 듯 아파 헐렁한 얇은 옷만 겨우 걸치고 외출 불가 (NRS 9)',
        priorTreatments: '마약성 진통제(패치) 및 항우울제 복용 중이나 어지럼증과 변비 부작용, 신경차단술 5회 무효',
        clinicalExamination: '우측 흉곽 옆구리에 심한 이질통(Allodynia)과 색소침착 관찰, T6-7 척추 주위 압통',
        novaCellApplication: '노바셀 단일 펜 도자 1단계 출력으로 HP-PHN-01(DRG 영역) 20초, 이질통 외곽 정상 피부에 15초 주 2회 통전',
        therapeuticOutcome: '2주(4회) 후 불타는 작열통 50% 경감, 6주 치료 후 옷을 입고 산책이 가능할 정도로 NRS 2로 안정.'
      }
    ]
  },

  {
    id: 'anterior-chest-syndrome',
    categoryId: 'trunk-chest',
    titleKo: '전흉부 증후군 / 흉늑관절염 (티체 증후군)',
    titleEn: 'Anterior Chest Wall Syndrome & Costochondritis (Tietze Syndrome)',
    badge: '앞가슴 통증',
    illustrationImage: 'assets/regions/anterior-chest-tietze.webp',
    overview: '흉골과 갈비뼈 연골이 만나는 흉늑관절에 무균성 염증과 미세 부종이 생겨 가슴 한가운데나 젖가슴 안쪽에 찌르는 통증이 발생하며 심장 질환으로 오인되기 쉽습니다.',
    symptoms: [
      '가슴 앞쪽(흉골 옆)을 손가락으로 꾹 누르면 소리를 지를 정도로 아픔',
      '숨을 깊이 들이마시거나 가슴을 펼 때 앞가슴이 결리고 뻐근함',
      '기침을 하거나 무거운 물건을 안을 때 앞가슴 통증 악화',
      '심장 내과 검사(심전도, 관상동맥 조영술)에서 심장 이상 없음 판정'
    ],
    pathologyMechanism: '흉늑관절(Costochondral joint) 및 흉연골의 반복적 기계적 스트레스와 흉골 골막의 과민 반응으로 인한 국소 연골염입니다.',
    healingPoints: [
      {
        id: 'HP-ACS-01',
        code: 'HP-01',
        nameKo: '흉늑관절 접합부 연골점',
        nameEn: 'Costochondral Junction Point',
        targetAnatomy: '제2~4 흉늑관절 연골, 방사상 흉늑인대',
        locationGuide: '흉골 외측연 2~3cm 지점, 늑연골과 늑골 뼈가 만나는 결절',
        significance: '앞가슴을 찌르는 국소 흉늑관절염의 통증과 부종 해소',
        pinCoordinates: { x: 46.5, y: 27.0, view: 'anterior' }
      },
      {
        id: 'HP-ACS-02',
        code: 'HP-02',
        nameKo: '흉골병-흉골체 관절점 (루이스각)',
        nameEn: 'Sternal Angle Point (Angle of Louis)',
        targetAnatomy: '흉골각 연골결합, 대흉근 흉골두 기시부',
        locationGuide: '흉골 상단 가로로 볼록하게 만져지는 루이스각의 중앙 및 외측',
        significance: '가슴 정중앙의 답답함과 연관 흉근 연축 해소',
        pinCoordinates: { x: 50.0, y: 24.5, view: 'anterior' }
      }
    ],
    novaCellProtocol: {
      probeType: '단일 펜 도자 (Monopolar Pen Probe)',
      contactMethod: '흉골 및 늑연골 뼈 표면에 수직으로 부드럽게 안착',
      contactDurationPerPoint: '\uD3EC\uC778\uD2B8\uB2F9 20\uCD08 ~ 30\uCD08 (\uD658\uC790\uAC00 \uB530\uB054 \uAC70\uB9BC\uC774 \uC0AC\uB77C\uC9C0\uAC70\uB098 \uBB35\uC9C1\uD55C \uC774\uC644\uAC10\uC744 \uB290\uB084\uB54C\uAE4C\uC9C0)',
      outputIntensity: '\uACE0\uC804\uC555 \uBBF8\uC138\uC804\uB958 03~05\uB2E8\uACC4 (\uD3B8\uC548\uD55C \uD384\uC2A4 \uC9C4\uB3D9 \uAC10\uAC01)',
      stingingRemedy: '\uD658\uBD80\uC5D0 \uC54C\uCF5C \uB610\uB294 \uC0DD\uB9AC\uC2DD\uC5FC\uC218 \uC2A4\uD504\uB808\uC774',
      treatmentSequence: [
        'HP-ACS-02(루이스각) 20초 통전 후, 가장 압통이 심한 HP-ACS-01(흉늑관절 결절)에 20초간 도자를 접촉합니다.'
      ],
      clinicalPearls: [
        '환자가 숨을 천천히 내쉰(Exhalation) 상태에서 가볍게 접촉하면 흉골 뼈 표면에 안정적으로 밀착됩니다.'
      ]
    },
    anatomicalSafetyGuide: {
      primaryLandmarks: '흉골병(Manubrium), 흉골체(Sternal body), 흉골각(Angle of Louis)',
      dangerStructures: '내흉동맥(Internal thoracic artery, 흉골연 외측 1cm 심부 주행), 심장 및 종격동',
      probeTechnique: '흉골 및 늑연골 전면 뼈 표면에 평평하게 지지하며 늑간 사이 틈으로 깊게 찌르지 않습니다.',
      safetyPrecautions: '심장 질환(협심증, 심근경색)의 응급 배제가 선행되어야 하며 심장 페이스메이커 삽입 환자는 흉부 통전을 금기합니다.'
    },
    clinicalCases: [
      {
        caseId: 'CASE-ACS-01',
        patientProfile: '36세 남성 / 직장인 / 유병기간 3개월 좌측 앞가슴 통증',
        chiefComplaint: '좌측 흉골 옆이 찌릿찌릿 쑤셔 심장마비 공포감에 응급실 2회 방문 (NRS 7)',
        priorTreatments: '심장 초음파, 24시간 홀터 심전도 정상 판정 후 신경안정제 처방받음',
        clinicalExamination: '좌측 제3, 4 흉늑관절(HP-ACS-01)을 누르면 "바로 여기가 아픈 곳이다"라며 극심한 압통 확인 (Tietze 검사 양성)',
        novaCellApplication: '노바셀 단일 펜 도자로 HP-ACS-02 및 HP-ACS-01 각 20초간 부드럽게 통전 (주 2회, 2주간 총 4회)',
        therapeuticOutcome: '1회 시술 직후 압통 50% 호전 및 심리적 불안 해소, 4회 치료 후 가슴 찌름 통증 완전 소실.'
      }
    ]
  },

  // =========================================================================
  // 5. 요추 / 둔부 / 골반 (Lumbar & Pelvis & Hip)
  // =========================================================================
  {
    id: 'lumbar-facet-pain',
    categoryId: 'lumbar-pelvis',
    titleKo: '요추 후관절증 / 척추기립근 요통',
    titleEn: 'Lumbar Facet Syndrome & Erector Spinae Strain',
    badge: '허리 대표',
    illustrationImage: 'assets/regions/lumbar-facet-erector-spinae-posterior.webp',
    overview: '허리를 뒤로 젖히거나 회전할 때 뜨끔하고 묵직한 통증이 발생하며, 요추 신경 후지의 내측지(Medial branch) 흥분과 최장근/장늑근의 골막 부착부 긴장이 원인입니다.',
    symptoms: [
      '아침에 기상할 때 허리가 굳고 바로 펴기 힘듦',
      '허리를 뒤로 젖히거나 비틀 때 요통 악화, 앞으로 숙이면 다소 편안함',
      '엉치(둔부)와 허벅지 뒤쪽으로 뻐근한 연관통 발생 (무릎 아래로는 내려가지 않음)',
      '의자에서 일어날 때 허리를 손으로 받쳐야 함'
    ],
    pathologyMechanism: '퇴행성 추간판 높이 감소로 후관절낭에 과도한 체중 부하가 집중되고, 관절포를 지배하는 척수신경 후지 내측지(Medial branch)가 횡돌기-상관절돌기 고랑에서 포착됩니다.',
    healingPoints: [
      {
        id: 'HP-LP-01',
        code: 'HP-01',
        nameKo: 'L4-L5 요추 후관절점 (유두돌기 외측)',
        nameEn: 'L4-L5 Facet Joint (Mamillo-Accessory Notch)',
        targetAnatomy: '요추 신경 후지 내측지, L4-5 후관절낭, 다열근 심부',
        locationGuide: 'L4 극돌기 하연 외측 2cm, 횡돌기 기저부와 상관절돌기 사이 고랑',
        significance: '요추 후관절성 요통 및 둔부 방사통의 핵심 분절 차단점',
        pinCoordinates: { x: 47.5, y: 40.5, view: 'posterior' }
      },
      {
        id: 'HP-LP-02',
        code: 'HP-02',
        nameKo: 'L5-S1 요천추 이행부 후관절점',
        nameEn: 'L5-S1 Lumbosacral Junction Facet Point',
        targetAnatomy: 'L5 후지 후내측지, 천골익(Sacral ala) 접합부 관절포',
        locationGuide: '장골능 연결선(양측 장골능 최고점) 하방 1.5cm, 천골 외측 함요처',
        significance: '가장 체중 부하가 큰 L5-S1 분절 감압 및 만성 요천추통 해소',
        pinCoordinates: { x: 48.0, y: 43.0, view: 'posterior' }
      },
      {
        id: 'HP-LP-03',
        code: 'HP-03',
        nameKo: '장골능 장늑근 골막 부착점',
        nameEn: 'Iliac Crest Iliocostalis Insertion',
        targetAnatomy: '장늑근 건 부착부, 흉요근막 후엽, 장골능 후연',
        locationGuide: '후상장골극(PSIS) 외측 4~5cm 장골능 능선 골막의 단단한 결절',
        significance: '허리 양옆 골반 라인을 따라 묵직하게 조여오는 근막 긴장 이완',
        pinCoordinates: { x: 43.5, y: 42.5, view: 'posterior' }
      }
    ],
    novaCellProtocol: {
      probeType: '단일 펜 도자 (Monopolar Pen Probe)',
      contactMethod: '수직 심부 압박 접촉 (Deep Perpendicular Compression)',
      contactDurationPerPoint: '\uD3EC\uC778\uD2B8\uB2F9 20\uCD08 ~ 30\uCD08 (\uD658\uC790\uAC00 \uB530\uB054 \uAC70\uB9BC\uC774 \uC0AC\uB77C\uC9C0\uAC70\uB098 \uBB35\uC9C1\uD55C \uC774\uC644\uAC10\uC744 \uB290\uB084\uB54C\uAE4C\uC9C0)',
      outputIntensity: '\uACE0\uC804\uC555 \uBBF8\uC138\uC804\uB958 03~05\uB2E8\uACC4 (\uD3B8\uC548\uD55C \uD384\uC2A4 \uC9C4\uB3D9 \uAC10\uAC01)',
      stingingRemedy: '\uD658\uBD80\uC5D0 \uC54C\uCF5C \uB610\uB294 \uC0DD\uB9AC\uC2DD\uC5FC\uC218 \uC2A4\uD504\uB808\uC774',
      treatmentSequence: [
        '1단계: HP-01(L4-L5 후관절) 및 HP-02(L5-S1 후관절)에 각각 30초간 펜 도자를 수직으로 깊게 안착시킵니다.',
        '2단계: HP-03(장골능 부착점)에 25초간 접촉하여 외측 지지 인대의 긴장도를 낮춥니다.'
      ],
      clinicalPearls: [
        '환자를 엎드리게 한 후 배 밑에 베개를 하나 받쳐 요추 전만을 약간 완만하게 만들어주면 후관절 간극이 열려 통전 효율이 대폭 상승합니다.'
      ]
    },
    anatomicalSafetyGuide: {
      primaryLandmarks: 'L4 극돌기(양측 장골능 연결선 Tuffier\'s line), 후상장골극(PSIS)',
      dangerStructures: '척수강(척추관 내부 진입 금지), 요천추 신경총',
      probeTechnique: '횡돌기 및 관절돌기 골면에 직각으로 뼈를 지지대로 삼아 접촉하며 척추뼈 사이 깊은 곳으로 무리하게 파고들지 않습니다.',
      safetyPrecautions: '골다공증이 심한 고령 환자에게 과도한 흉요추 수직 체중 압박을 가하지 않도록 주의합니다.'
    },
    clinicalCases: [
      {
        caseId: 'CASE-LP-01',
        patientProfile: '52세 남성 / 택시 운전사 / 유병기간 3년 만성 요통',
        chiefComplaint: '장시간 운전 후 차에서 내릴 때 허리가 굳어 바로 서지 못하고 뒤로 젖히면 악 소리 나게 아픔 (NRS 7)',
        priorTreatments: '허리 신경차단술 6회 시행했으나 2~3주 후 재발, 진통소염제 장기 복용으로 속쓰림',
        clinicalExamination: 'Kemp 검사 양성(허리 신전 및 회전 시 요통 악화), 하지 직거상 검사(SLR)는 80도 정상',
        novaCellApplication: '노바셀 단일 펜 도자로 HP-LP-01(L4-5) 30초, HP-LP-02(L5-S1) 30초, HP-LP-03 25초 주 2회 통전',
        therapeuticOutcome: '1회 시술 직후 허리 젖힘 각도 15도에서 30도로 증가, 4회 치료 후 운전 후 하차 시 허리 바로 펴짐.'
      }
    ]
  },

  {
    id: 'acute-lumbar-sprain',
    categoryId: 'lumbar-pelvis',
    titleKo: '급성 요추 염좌 / 요방형근 연축',
    titleEn: 'Acute Lumbar Sprain & Quadratus Lumborum Spasm',
    badge: '급성 요통',
    illustrationImage: 'assets/regions/lumbar-disc-radiculopathy-posterior.webp',
    overview: '무거운 물건을 들거나 삐끗한 후 요방형근과 기립근의 급성 연축 및 인대 미세 손상으로 허리를 전혀 움직이지 못하고 기어 다닐 정도의 극심한 통증이 발생합니다.',
    symptoms: [
      '허리를 삐끗한 직후 꼼짝도 못 하고 침대에서 돌아눕기조차 힘듦',
      '기침이나 재채기할 때 허리가 끊어질 듯 울림',
      '허리 한쪽 근육이 돌덩이처럼 단단하게 뭉쳐 쥐가 난 느낌',
      '허리가 한쪽으로 삐딱하게 틀어지는 통증성 측만(Sciatic list)'
    ],
    pathologyMechanism: '요방형근(Quadratus lumborum)의 급성 근방추 과흥분과 흉요근막 팽창, 요추 횡돌기 부착부의 인대 미세 파열로 인한 보호성 근경련(Muscle guarding)입니다.',
    healingPoints: [
      {
        id: 'HP-ALS-01',
        code: 'HP-01',
        nameKo: '요방형근 외측연 정지점 (제12늑골 하연)',
        nameEn: 'Quadratus Lumborum 12th Rib Attachment',
        targetAnatomy: '요방형근 상단 건, 제12늑골 하연 골막',
        locationGuide: '제12늑골 하연과 척추기립근 외측 경계가 만나는 각도 함요부',
        significance: '급성 연축된 요방형근 상부 긴장 긴급 해제 및 호흡 시 요통 완화',
        pinCoordinates: { x: 44.0, y: 37.5, view: 'posterior' }
      },
      {
        id: 'HP-ALS-02',
        code: 'HP-02',
        nameKo: '요방형근 장골능 부착점',
        nameEn: 'Quadratus Lumborum Iliac Crest Attachment',
        targetAnatomy: '요방형근 하단 건, 장골능 내측 능선',
        locationGuide: '장골능 상연 중앙, 기립근 외측 홈의 극심한 압통 결절',
        significance: '골반을 위로 끌어당기는 근육 경련을 풀어 보행 가능 상태 복원',
        pinCoordinates: { x: 43.5, y: 41.5, view: 'posterior' }
      }
    ],
    novaCellProtocol: {
      probeType: '단일 펜 도자 (Monopolar Pen Probe)',
      contactMethod: '부드러운 정적 접촉 후 경련 근육을 가볍게 지지',
      contactDurationPerPoint: '\uD3EC\uC778\uD2B8\uB2F9 20\uCD08 ~ 30\uCD08 (\uD658\uC790\uAC00 \uB530\uB054 \uAC70\uB9BC\uC774 \uC0AC\uB77C\uC9C0\uAC70\uB098 \uBB35\uC9C1\uD55C \uC774\uC644\uAC10\uC744 \uB290\uB084\uB54C\uAE4C\uC9C0)',
      outputIntensity: '\uACE0\uC804\uC555 \uBBF8\uC138\uC804\uB958 03~05\uB2E8\uACC4 (\uD3B8\uC548\uD55C \uD384\uC2A4 \uC9C4\uB3D9 \uAC10\uAC01)',
      stingingRemedy: '\uD658\uBD80\uC5D0 \uC54C\uCF5C \uB610\uB294 \uC0DD\uB9AC\uC2DD\uC5FC\uC218 \uC2A4\uD504\uB808\uC774',
      treatmentSequence: [
        'HP-ALS-01(제12늑골 하연) 25초 통전 후, HP-ALS-02(장골능 부착점)에 25초간 접촉하여 긴장을 풉니다.'
      ],
      clinicalPearls: [
        '급성기 환자는 엎드리기 어려우므로 아픈 쪽이 위로 오도록 옆으로 눕힌 자세(측와위)에서 다리 사이에 베개를 끼우고 시술하면 매우 편안해합니다.'
      ]
    },
    anatomicalSafetyGuide: {
      primaryLandmarks: '제12늑골(12th rib), 장골능(Iliac crest), 척추기립근 외측연',
      dangerStructures: '신장(Kidney, 제12늑골 심부 위치), 결장 후벽',
      probeTechnique: '복강 내부로 깊이 찌르지 말고 장골능 골막과 늑골 하연 뼈 경계를 향해 편평하게 도자를 안착시킵니다.',
      safetyPrecautions: '복강 쪽으로 수직 압박을 절대 금하며 뼈를 받침대로 이용합니다.'
    },
    clinicalCases: [
      {
        caseId: 'CASE-ALS-01',
        patientProfile: '39세 남성 / 택배 기사 / 유병기간 1일 급성 요추 염좌',
        chiefComplaint: '무거운 상자를 들다 허리에서 "뚝" 소리가 난 후 허리를 전혀 펴지 못하고 부축받아 내원 (NRS 9)',
        priorTreatments: '내원 직전 소염진통 처치 및 약물 복용했으나 보행 불가 상태 지속',
        clinicalExamination: '우측 요방형근 돌처럼 단단하게 뭉침, 허리 굴곡 10도 이상 불가능',
        novaCellApplication: '측와위 자세에서 노바셀 단일 펜 도자로 HP-ALS-01 및 HP-ALS-02 각 25초 통전 후 5분 안정',
        therapeuticOutcome: '시술 직후 혼자 힘으로 일어서서 걸을 수 있게 되었으며 허리 굴곡 60도 회복, 2일 후 완치.'
      }
    ]
  },

  {
    id: 'lumbar-disc-radiculopathy',
    categoryId: 'lumbar-pelvis',
    titleKo: '요추 추간판 탈출증 방사통 (요추 신경근염)',
    titleEn: 'Lumbar Disc Herniation & Radiculopathy',
    badge: '디스크 신경근',
    illustrationImage: 'assets/regions/lumbar-disc-radiculopathy-posterior.webp',
    overview: '탈출된 수핵이 요추 신경근을 기계적으로 압박하고 수핵 내 염증 화학 물질이 신경근을 자극하여 엉덩이에서 허벅지, 종아리, 발끝까지 전기가 통하듯 당기고 저린 통증입니다.',
    symptoms: [
      '허리를 앞으로 숙이거나 세수할 때 다리로 뻗치는 방사통 악화',
      '엉치부터 허벅지 뒤쪽, 종아리 외측, 엄지발가락까지 저리고 찌릿함',
      '누워서 다리를 30~50도만 들어 올려도 다리 뒤가 당겨 올리지 못함(SLR 양성)',
      '발가락이나 발목을 위로 젖히는 힘이 일시적으로 빠짐'
    ],
    pathologyMechanism: '파열된 추간판에서 분비된 인지질분해효소 A2(Phospholipase A2) 등 염증 유발 매개체가 신경근초(Nerve root sheath)를 자극하여 신경 내 부종과 허혈을 초래합니다.',
    healingPoints: [
      {
        id: 'HP-LDR-01',
        code: 'HP-01',
        nameKo: '추간공 외측 신경근 반사점 (해당 분절)',
        nameEn: 'Transverse-Facet Junction Root Point',
        targetAnatomy: '해당 척수신경근 외측지, 횡돌기간 인대',
        locationGuide: 'L4 또는 L5 극돌기 외측 2.5cm, 횡돌기 상연 접합부',
        significance: '신경근 부종 및 염증 화학 매개체로 인한 중추성 방사통 차단',
        pinCoordinates: { x: 47.0, y: 41.0, view: 'posterior' }
      },
      {
        id: 'HP-LDR-02',
        code: 'HP-02',
        nameKo: '상둔피신경 포착점 (장골능 능선)',
        nameEn: 'Superior Cluneal Nerve (Iliac Crest)',
        targetAnatomy: '상둔피신경(L1-L3 후지), 흉요근막 외측연',
        locationGuide: '후상장골극(PSIS) 외측 7~8cm 장골능 능선 위 뼈 고랑',
        significance: '디스크 환자에게 흔히 동반되는 엉치 전체의 시린 저림 해소',
        pinCoordinates: { x: 42.5, y: 43.5, view: 'posterior' }
      }
    ],
    novaCellProtocol: {
      probeType: '단일 펜 도자 (Monopolar Pen Probe)',
      contactMethod: '점진적 압박 후 신경근 흥분 신호 안정화 유도',
      contactDurationPerPoint: '\uD3EC\uC778\uD2B8\uB2F9 20\uCD08 ~ 30\uCD08 (\uD658\uC790\uAC00 \uB530\uB054 \uAC70\uB9BC\uC774 \uC0AC\uB77C\uC9C0\uAC70\uB098 \uBB35\uC9C1\uD55C \uC774\uC644\uAC10\uC744 \uB290\uB084\uB54C\uAE4C\uC9C0)',
      outputIntensity: '\uACE0\uC804\uC555 \uBBF8\uC138\uC804\uB958 03~05\uB2E8\uACC4 (\uD3B8\uC548\uD55C \uD384\uC2A4 \uC9C4\uB3D9 \uAC10\uAC01)',
      stingingRemedy: '\uD658\uBD80\uC5D0 \uC54C\uCF5C \uB610\uB294 \uC0DD\uB9AC\uC2DD\uC5FC\uC218 \uC2A4\uD504\uB808\uC774',
      treatmentSequence: [
        'HP-LDR-01(해당 신경근점) 30초 통전 후, HP-LDR-02(상둔피신경점)에 25초간 순차적으로 도자를 접촉합니다.'
      ],
      clinicalPearls: [
        '다리로 뻗치는 통증이 심할수록 발끝 말초만 만지지 말고 허리의 신경근 기시부(HP-LDR-01)를 먼저 통전하여 신경근 부종을 가라앉혀야 합니다.'
      ]
    },
    anatomicalSafetyGuide: {
      primaryLandmarks: 'L4-L5 극돌기, 장골능(Iliac crest)',
      dangerStructures: '척추관(Spinal canal), 경막낭(Dural sac)',
      probeTechnique: '횡돌기 골면에 단단히 펜을 대고 척추관 방향(중앙 내측)으로 각도를 꺾지 않고 수직을 유지합니다.',
      safetyPrecautions: '대소변 장애나 마미총 증후군(Cauda equina syndrome) 증상 여부를 사전 확인하십시오.'
    },
    clinicalCases: [
      {
        caseId: 'CASE-LDR-01',
        patientProfile: '43세 남성 / 회사원 / 유병기간 2개월 L4-5 수핵 탈출증 좌측 방사통',
        chiefComplaint: '좌측 엉덩이부터 종아리 바깥쪽, 엄지발가락까지 찌릿하고 당겨 50m 이상 보행 불가 (NRS 8)',
        priorTreatments: 'MRI상 L4-5 추간판 후외측 탈출 확인, 경막외 신경차단술 2회 후에도 저림 지속',
        clinicalExamination: '하지 직거상 검사(SLR) 좌측 35도에서 극심한 하지 방사통 양성, L5 감각 저하',
        novaCellApplication: '노바셀 단일 펜 도자로 HP-LDR-01(L4-5 신경근점) 30초, HP-LDR-02 25초 주 2회 통전',
        therapeuticOutcome: '2주(4회) 시술 후 SLR 70도로 호전, 종아리 저림 80% 소실되어 500m 이상 정상 보행.'
      }
    ]
  },

  {
    id: 'lumbar-spinal-stenosis',
    categoryId: 'lumbar-pelvis',
    titleKo: '요추 척추관 협착증 / 신경인성 파행',
    titleEn: 'Lumbar Spinal Stenosis & Neurogenic Claudication',
    badge: '협착 파행',
    illustrationImage: 'assets/regions/lumbar-spinal-stenosis-posterior.webp',
    overview: '황색인대의 비후와 척추관의 퇴행성 협착으로 신경 다발이 압박되어, 조금만 걸어도 다리가 터질 듯이 무겁고 저려 쪼그리고 앉아 쉬어야만 다시 걸을 수 있는 질환입니다.',
    symptoms: [
      '100~200m만 걸어도 양쪽 종아리가 터질 듯이 아프고 저려 주저앉음 (신경인성 파행)',
      '허리를 앞으로 구부리면 편하고, 허리를 펴고 서 있으면 다리 통증 악화',
      '밤에 종아리에 쥐가 자주 나고 발바닥이 마치 남의 살처럼 둔함',
      '유모차나 카트를 밀고 장을 볼 때는 허리와 다리가 훨씬 편안함'
    ],
    pathologyMechanism: '척추관 전후경 감소로 마미총 신경근의 정맥 울혈과 허혈성 산소 부족이 걷는 동안 급격히 심화되어 신경 전도가 차단됩니다.',
    healingPoints: [
      {
        id: 'HP-LSS-01',
        code: 'HP-01',
        nameKo: '요추 추간공 외측 혈관신경 회복점',
        nameEn: 'Intervertebral Foramen Neurovascular Point',
        targetAnatomy: '요추 신경근 정맥총, 척추 주위 다열근 심부 건막',
        locationGuide: 'L4-L5 극돌기 사이 외측 2cm 지점의 함요부',
        significance: '척수신경 정맥 울혈을 개선하고 마미총의 허혈성 통증을 완화',
        pinCoordinates: { x: 48.0, y: 40.5, view: 'posterior' }
      },
      {
        id: 'HP-LSS-02',
        code: 'HP-02',
        nameKo: '후천골공 분절 자율신경 반사점 (S1-S2)',
        nameEn: 'Posterior Sacral Foramen (S1-S2)',
        targetAnatomy: '천골신경 후지, 골반 장기 및 하지 혈관 교감신경총',
        locationGuide: '후상장골극(PSIS) 내하방 1.5cm 천골의 오목한 구멍',
        significance: '골반 및 하지 말초 혈류량을 증대시켜 보행 파행 거리 연장',
        pinCoordinates: { x: 48.5, y: 45.5, view: 'posterior' }
      }
    ],
    novaCellProtocol: {
      probeType: '단일 펜 도자 (Monopolar Pen Probe)',
      contactMethod: '골막 심부 지지 접촉 후 척추 주위 미세 순환 유도',
      contactDurationPerPoint: '\uD3EC\uC778\uD2B8\uB2F9 20\uCD08 ~ 30\uCD08 (\uD658\uC790\uAC00 \uB530\uB054 \uAC70\uB9BC\uC774 \uC0AC\uB77C\uC9C0\uAC70\uB098 \uBB35\uC9C1\uD55C \uC774\uC644\uAC10\uC744 \uB290\uB084\uB54C\uAE4C\uC9C0)',
      outputIntensity: '\uACE0\uC804\uC555 \uBBF8\uC138\uC804\uB958 03~05\uB2E8\uACC4 (\uD3B8\uC548\uD55C \uD384\uC2A4 \uC9C4\uB3D9 \uAC10\uAC01)',
      stingingRemedy: '\uD658\uBD80\uC5D0 \uC54C\uCF5C \uB610\uB294 \uC0DD\uB9AC\uC2DD\uC5FC\uC218 \uC2A4\uD504\uB808\uC774',
      treatmentSequence: [
        'HP-LSS-01(L4-L5 추간공부) 30초 통전 후, HP-LSS-02(후천골공점)에 30초간 순차적으로 도자를 접촉합니다.'
      ],
      clinicalPearls: [
        '협착증 환자는 허리를 약간 구부린 새우잠 자세(Fetal position)로 눕힌 후 시술하면 척추관이 확장되어 통전 시 신경 편안함이 극대화됩니다.'
      ]
    },
    anatomicalSafetyGuide: {
      primaryLandmarks: 'L4-5 극돌기 간격, 후천골공(Posterior sacral foramina)',
      dangerStructures: '척수 신경낭, 천골신경 전지',
      probeTechnique: '천골 뼈 표면에 펜을 편평하게 지지하며 천골공 내부로 깊이 밀어 넣지 않습니다.',
      safetyPrecautions: '고령 환자의 골다공증성 뼈 손상을 방지하기 위해 도자 압박력을 적절히 조절하십시오.'
    },
    clinicalCases: [
      {
        caseId: 'CASE-LSS-01',
        patientProfile: '71세 여성 / 주부 / 유병기간 4년 요추관 협착증(L4-5 중증)',
        chiefComplaint: '연속 보행 가능 거리 50m 미만, 종아리가 터질 듯해 마트 장보기가 불가능 (NRS 8)',
        priorTreatments: '신경성형술 1회 및 풍선확장술 1회 받았으나 6개월 후 파행 재발, 수술 고려 중',
        clinicalExamination: '보행 파행 테스트 70m에서 종아리 통증 발현, SLR은 75도 정상 (협착증 전형 소견)',
        novaCellApplication: '노바셀 단일 펜 도자로 HP-LSS-01 30초, HP-LSS-02 30초 주 2회 통전 (총 8회)',
        therapeuticOutcome: '4주 치료 후 연속 보행 거리 50m에서 300m 이상으로 비약적 증가, 야간 종아리 쥐남 소실.'
      }
    ]
  },

  {
    id: 'piriformis-sciatica',
    categoryId: 'lumbar-pelvis',
    titleKo: '이상근 증후군 / 좌골신경통',
    titleEn: 'Piriformis Syndrome & Sciatica',
    badge: '골반 좌골신경',
    illustrationImage: 'assets/regions/piriformis-sciatica-posterior.webp',
    overview: '둔부 심부의 이상근(Piriformis)이 경련 및 비후되어 그 아래를 통과하는 좌골신경을 직접 압박하여 엉덩이 깊은 곳의 통증과 다리 뒤쪽의 저림을 유발합니다.',
    symptoms: [
      '의자나 바닥에 오래 앉아 있을 때 엉덩이가 배기고 쑤심',
      '지갑을 뒷주머니에 넣고 앉으면 엉덩이와 허벅지 뒤쪽 저림 악화',
      '엉덩이 중앙 쏙 들어간 곳을 누르면 다리 끝까지 전기가 찌릿하게 방사됨',
      '양반다리를 하거나 고관절을 안으로 모을 때 엉덩이 깊은 통증'
    ],
    pathologyMechanism: '대좌골공(Greater sciatic foramen) 하방에서 이상근과 상쌍자근 사이의 근막 협착으로 좌골신경의 기계적 압박 및 혈류 장애가 발생합니다.',
    healingPoints: [
      {
        id: 'HP-PS-01',
        code: 'HP-01',
        nameKo: '이상근-좌골신경 포착점 (이상근하공)',
        nameEn: 'Piriformis Sciatic Entrapment Point (Infrapiriform Foramen)',
        targetAnatomy: '좌골신경(Sciatic nerve 본간), 이상근 하연, 하둔신경',
        locationGuide: '후상장골극(PSIS)과 대퇴골 대전자 연결선의 내외측 1/3 분기점',
        significance: '좌골신경을 짓누르는 이상근의 단축을 직접 해제하는 가장 핵심적인 포인트',
        pinCoordinates: { x: 45.5, y: 47.5, view: 'posterior' }
      },
      {
        id: 'HP-PS-02',
        code: 'HP-02',
        nameKo: '이상근 대전자 정지건 부착점',
        nameEn: 'Piriformis Greater Trochanter Insertion',
        targetAnatomy: '이상근 건, 대퇴골 대전자 상내측 골막',
        locationGuide: '대전자 상단 후내측의 오목한 고랑(Trochanteric fossa)',
        significance: '고관절 외회전근의 장력 균형을 맞추고 보행 시 둔부 통증 제거',
        pinCoordinates: { x: 40.5, y: 48.5, view: 'posterior' }
      },
      {
        id: 'HP-PS-03',
        code: 'HP-03',
        nameKo: '좌골결절 햄스트링 기시부 신경점',
        nameEn: 'Ischial Tuberosity Sciatic Branch Point',
        targetAnatomy: '좌골신경 주행로, 햄스트링 공통 기시건, 좌골결절 외측',
        locationGuide: '앉을 때 닿는 엉덩이 뼈(좌골결절) 외측 2cm 지점의 함요부',
        significance: '엉덩이 밑선부터 허벅지 뒤쪽으로 뻗치는 당김과 저림 해소',
        pinCoordinates: { x: 44.5, y: 51.5, view: 'posterior' }
      }
    ],
    novaCellProtocol: {
      probeType: '단일 펜 도자 (Monopolar Pen Probe)',
      contactMethod: '심부 지지 압박 접촉 (Point Compression) 후 미세 진동 인가',
      contactDurationPerPoint: '\uD3EC\uC778\uD2B8\uB2F9 20\uCD08 ~ 30\uCD08 (\uD658\uC790\uAC00 \uB530\uB054 \uAC70\uB9BC\uC774 \uC0AC\uB77C\uC9C0\uAC70\uB098 \uBB35\uC9C1\uD55C \uC774\uC644\uAC10\uC744 \uB290\uB084\uB54C\uAE4C\uC9C0)',
      outputIntensity: '\uACE0\uC804\uC555 \uBBF8\uC138\uC804\uB958 03~05\uB2E8\uACC4 (\uD3B8\uC548\uD55C \uD384\uC2A4 \uC9C4\uB3D9 \uAC10\uAC01)',
      stingingRemedy: '\uD658\uBD80\uC5D0 \uC54C\uCF5C \uB610\uB294 \uC0DD\uB9AC\uC2DD\uC5FC\uC218 \uC2A4\uD504\uB808\uC774',
      treatmentSequence: [
        '1단계: HP-PS-02(대전자 정지부) 25초 통전으로 근육 외측 장력을 풉니다.',
        '2단계: HP-PS-01(이상근하공 좌골신경점)에 30초간 깊고 편안하게 펜을 안착시킵니다.',
        '3단계: HP-PS-03(좌골결절 외측)에 25초간 접촉하여 허벅지 방사통을 정리합니다.'
      ],
      clinicalPearls: [
        '이상근은 대둔근 심부에 위치하므로 도자 끝으로 대둔근을 부드럽게 밀어내며 천골 뼈 방향으로 비스듬히 안착시키면 미세전류가 좌골신경에 정확히 닿습니다.'
      ]
    },
    anatomicalSafetyGuide: {
      primaryLandmarks: '후상장골극(PSIS), 대퇴골 대전자(Greater trochanter), 좌골결절(Ischial tuberosity)',
      dangerStructures: '하둔동맥(Inferior gluteal artery), 음부신경(Pudendal nerve, 좌골결절 내측 주행)',
      probeTechnique: '좌골결절 내측 음부신경 영역으로 접근하지 말고 대전자 방향 외측 안전 구역을 지켜 안착합니다.',
      safetyPrecautions: '신경 압박으로 인한 다리 쥐남 반응 발생 시 압박력을 10% 줄이고 위치를 유지하십시오.'
    },
    clinicalCases: [
      {
        caseId: 'CASE-PS-01',
        patientProfile: '47세 남성 / 은행원 / 유병기간 5개월 우측 둔부 및 하지 방사통',
        chiefComplaint: '의자에 20분만 앉아 있어도 우측 엉덩이가 쑤시고 허벅지 뒤가 당겨 앉아 있을 수 없음 (NRS 7)',
        priorTreatments: '허리 디스크 의심으로 요추 신경차단술 3회 받았으나 둔부 통증 호전 전혀 없음',
        clinicalExamination: 'FAIR 검사(굴곡-내전-내회전 시 둔통 유발) 강양성, 이상근하공(HP-PS-01) 극심한 압통 확인',
        novaCellApplication: '노바셀 단일 펜 도자로 HP-PS-01 30초, HP-PS-02 25초, HP-PS-03 25초 주 2회 통전',
        therapeuticOutcome: '1회 시술 후 의자 착석 시간 1시간으로 연장, 3회 치료 후 FAIR 검사 음성 전환 및 완치.'
      }
    ]
  },

  {
    id: 'sacroiliac-joint-pain',
    categoryId: 'lumbar-pelvis',
    titleKo: '천장관절 증후군 / 골반통',
    titleEn: 'Sacroiliac Joint Dysfunction & Pelvic Pain',
    badge: '골반 천장관절',
    illustrationImage: 'assets/regions/piriformis-sciatica-posterior.webp',
    overview: '천골과 장골이 만나는 천장관절 인대의 이완 및 비틀림으로 인해 엉치뼈 주변, 서혜부(사타구니), 허벅지 외측으로 쑤시고 묵직한 통증이 발생합니다.',
    symptoms: [
      '엉덩이 뒤쪽 쏙 들어간 곳(골반 보조개 부위)을 손가락으로 가리키며 아프다고 호소(Fortin finger test)',
      '의자에서 일어날 때, 한 발로 서서 양말을 신을 때 골반이 어긋나는 듯한 통증',
      '누워서 돌아누울 때 골반에서 뜨끔한 걸림',
      '서혜부(사타구니) 앞쪽과 허벅지 바깥쪽으로 뻐근한 연관통'
    ],
    pathologyMechanism: '골반 비틀림이나 출산 후 인대 이완으로 후천장인대(Posterior sacroiliac ligament)와 천결절인대에 비정상적 전단력이 작용하여 천골 신경 후지 외측지가 감작됩니다.',
    healingPoints: [
      {
        id: 'HP-SIJ-01',
        code: 'HP-01',
        nameKo: '후상장골극 관절연 신경점 (Fortin 영역)',
        nameEn: 'PSIS Sacroiliac Joint Line (Fortin Area)',
        targetAnatomy: '장후천장인대(Long posterior sacroiliac ligament), 천골 후지 외측지',
        locationGuide: '후상장골극(PSIS) 바로 하내측 1cm 관절 간극 틈새',
        significance: '천장관절통의 80%가 호발하는 통증 유발 중심점 해소',
        pinCoordinates: { x: 46.5, y: 45.0, view: 'posterior' }
      },
      {
        id: 'HP-SIJ-02',
        code: 'HP-02',
        nameKo: '천결절인대 골막 부착점',
        nameEn: 'Sacrotuberous Ligament Attachment Point',
        targetAnatomy: '천결절인대, 천골 하외측연 골막',
        locationGuide: '천골 하단 외측 모서리에서 좌골결절로 이어지는 단단한 인대 밴드',
        significance: '골반의 회전 비틀림을 안정화시키고 둔부 심부 뻐근함 제거',
        pinCoordinates: { x: 45.5, y: 48.5, view: 'posterior' }
      }
    ],
    novaCellProtocol: {
      probeType: '단일 펜 도자 (Monopolar Pen Probe)',
      contactMethod: '천장관절 간극 골면에 비스듬히 안착 지지',
      contactDurationPerPoint: '\uD3EC\uC778\uD2B8\uB2F9 20\uCD08 ~ 30\uCD08 (\uD658\uC790\uAC00 \uB530\uB054 \uAC70\uB9BC\uC774 \uC0AC\uB77C\uC9C0\uAC70\uB098 \uBB35\uC9C1\uD55C \uC774\uC644\uAC10\uC744 \uB290\uB084\uB54C\uAE4C\uC9C0)',
      outputIntensity: '\uACE0\uC804\uC555 \uBBF8\uC138\uC804\uB958 03~05\uB2E8\uACC4 (\uD3B8\uC548\uD55C \uD384\uC2A4 \uC9C4\uB3D9 \uAC10\uAC01)',
      stingingRemedy: '\uD658\uBD80\uC5D0 \uC54C\uCF5C \uB610\uB294 \uC0DD\uB9AC\uC2DD\uC5FC\uC218 \uC2A4\uD504\uB808\uC774',
      treatmentSequence: [
        'HP-SIJ-01(PSIS 하내측점) 30초 통전 후, HP-SIJ-02(천결절인대)에 25초간 순차적으로 도자를 접촉합니다.'
      ],
      clinicalPearls: [
        '환자의 통증 부위가 허리뼈 중심인지 골반 보조개(PSIS) 부근인지 정확히 구분(Fortin sign)하여 관절 간극에 펜을 정확히 안착시켜야 합니다.'
      ]
    },
    anatomicalSafetyGuide: {
      primaryLandmarks: '후상장골극(PSIS), 천골 외측연(Lateral sacral crest)',
      dangerStructures: '천골신경 후지, 상둔동맥 천골 분지',
      probeTechnique: '천장관절 틈새 뼈 테두리에 편평하게 지지하며 뼈 틈 사이로 깊은 찌름을 가하지 않습니다.',
      safetyPrecautions: '임산부의 경우 골반 인대 호르몬 이완기이므로 과도한 강압 자극을 금합니다.'
    },
    clinicalCases: [
      {
        caseId: 'CASE-SIJ-01',
        patientProfile: '34세 여성 / 출산 6개월 차 / 유병기간 5개월 우측 천장관절통',
        chiefComplaint: '출산 후 침대에서 일어날 때 우측 골반 뼈가 빠질 듯 아프고 한 발로 서지 못함 (NRS 7)',
        priorTreatments: '골반 교정 도수치료 받았으나 1~2일 후 재발',
        clinicalExamination: 'Patrick(FABER) 검사 및 Gaenslen 검사 양성, PSIS 직하방(HP-SIJ-01) 압통 명확',
        novaCellApplication: '노바셀 단일 펜 도자로 HP-SIJ-01 30초, HP-SIJ-02 25초 주 2회 통전 (총 4회)',
        therapeuticOutcome: '2회 시술 후 기상 시 통증 70% 감소, 4회 치료 후 한 발로 서서 양말 신기 가능해짐.'
      }
    ]
  },

  // =========================================================================
  // 6. 슬관절 / 족부 / 하지 (Knee & Ankle & Foot)
  // =========================================================================
  {
    id: 'knee-osteoarthritis',
    categoryId: 'knee-foot',
    titleKo: '퇴행성 슬관절염 / 거위발건염',
    titleEn: 'Knee Osteoarthritis & Pes Anserine Tendinopathy',
    badge: '무릎 대표',
    illustrationImage: 'assets/regions/knee-osteoarthritis-pes-anserine-medial-lateral.webp',
    overview: '무릎 관절 연골의 마모와 내측 관절 간극 협착, 거위발건(봉공근, 박근, 반건양근) 부착부의 만성 건염으로 계단을 내려갈 때 무릎 안쪽에 시큰거리는 통증이 발생합니다.',
    symptoms: [
      '계단을 내려갈 때 무릎 안쪽이 시큰거리고 주저앉고 싶음',
      '의자에서 일어날 때 무릎을 바로 펴지 못하고 삐걱거림',
      '양반다리를 하거나 쪼그려 앉을 때 무릎 안쪽 통증',
      '무릎이 붓고 열감이 나며 관절이 완전히 다 펴지지 않음'
    ],
    pathologyMechanism: '대퇴-경골 내측 관절 간극의 부하 집중으로 관절낭염이 생기고, 복재신경 슬개하자(Infrapatellar branch of saphenous nerve)가 거위발건막 아래에서 포착되어 연관통을 일으킵니다.',
    healingPoints: [
      {
        id: 'HP-KOA-01',
        code: 'HP-01',
        nameKo: '내측 관절간극 관절포점',
        nameEn: 'Medial Joint Line Capsule Point',
        targetAnatomy: '내측측부인대(MCL) 심부, 내측 반월상연골 변연부 관절포',
        locationGuide: '슬개골 내측연과 경골 고평부 사이 오목한 관절 간극 틈새',
        significance: '퇴행성 관절염의 내측 관절낭 염증 및 체중 부하 통증 직접 제어',
        pinCoordinates: { x: 47.5, y: 70.5, view: 'anterior' }
      },
      {
        id: 'HP-KOA-02',
        code: 'HP-02',
        nameKo: '거위발건 부착부 복재신경점',
        nameEn: 'Pes Anserinus Insertion & Saphenous Nerve Point',
        targetAnatomy: '봉공근·박근·반건양근 정지건, 복재신경 슬개하 분지',
        locationGuide: '경골 조면(무릎 앞 튀어나온 뼈) 내측 2.5~3cm 아래 골막',
        significance: '계단 보행 시 무릎 내측을 찌르는 거위발건 활액낭염 및 신경통 완화',
        pinCoordinates: { x: 47.5, y: 73.5, view: 'anterior' }
      }
    ],
    novaCellProtocol: {
      probeType: '단일 펜 도자 (Monopolar Pen Probe)',
      contactMethod: '무릎을 30도 굴곡한 상태에서 경골 골막에 수직 안착',
      contactDurationPerPoint: '\uD3EC\uC778\uD2B8\uB2F9 20\uCD08 ~ 30\uCD08 (\uD658\uC790\uAC00 \uB530\uB054 \uAC70\uB9BC\uC774 \uC0AC\uB77C\uC9C0\uAC70\uB098 \uBB35\uC9C1\uD55C \uC774\uC644\uAC10\uC744 \uB290\uB084\uB54C\uAE4C\uC9C0)',
      outputIntensity: '\uACE0\uC804\uC555 \uBBF8\uC138\uC804\uB958 03~05\uB2E8\uACC4 (\uD3B8\uC548\uD55C \uD384\uC2A4 \uC9C4\uB3D9 \uAC10\uAC01)',
      stingingRemedy: '\uD658\uBD80\uC5D0 \uC54C\uCF5C \uB610\uB294 \uC0DD\uB9AC\uC2DD\uC5FC\uC218 \uC2A4\uD504\uB808\uC774',
      treatmentSequence: [
        'HP-KOA-01(내측 관절간극) 30초 통전 후, HP-KOA-02(거위발건 부착부)에 25초간 순차적으로 도자를 접촉합니다.'
      ],
      clinicalPearls: [
        '무릎 밑에 작은 수건을 받쳐 무릎을 20~30도 구부려주면 관절 간극이 넓어져 도자 전류가 심부 관절포에 깊숙이 도달합니다.'
      ]
    },
    anatomicalSafetyGuide: {
      primaryLandmarks: '경골 조면(Tibial tuberosity), 내측 관절 간극(Medial joint line)',
      dangerStructures: '복재정맥(Great saphenous vein), 슬와동·정맥(무릎 후방 오금 깊은 주행)',
      probeTechnique: '무릎 앞쪽과 내측 뼈 표면에 펜을 지지하며 오금(Popliteal fossa) 깊은 혈관 다발 방향으로 향하지 않습니다.',
      safetyPrecautions: '무릎 후방 오금 부위 통전 시 낭종(Baker\'s cyst) 파열 위험이 있으므로 전면 골면에만 시술하십시오.'
    },
    clinicalCases: [
      {
        caseId: 'CASE-KOA-01',
        patientProfile: '64세 여성 / 주부 / 유병기간 2년 퇴행성 슬관절염(K-L grade II)',
        chiefComplaint: '아파트 계단 내려갈 때 우측 무릎 안쪽이 시큰거려 게걸음으로 내려옴 (NRS 7)',
        priorTreatments: '히알루론산 관절강 치료 3회 받았으나 계단 하강 시 통증 지속',
        clinicalExamination: '내측 관절 간극(HP-KOA-01) 및 거위발건(HP-KOA-02) 부위 국소 압통 명확',
        novaCellApplication: '노바셀 단일 펜 도자로 HP-KOA-01 30초, HP-KOA-02 25초 주 2회 통전 (총 6회)',
        therapeuticOutcome: '2주(4회) 후 평지 보행 통증 완전 소실, 6회 치료 후 계단 정상 보행 가능.'
      }
    ]
  },

  {
    id: 'patellar-tendinopathy',
    categoryId: 'knee-foot',
    titleKo: '슬개골 건병증 / 점퍼스 니',
    titleEn: 'Patellar Tendinopathy & Jumper\'s Knee',
    badge: '슬개건 손상',
    illustrationImage: 'assets/regions/patellar-tendinopathy-medial-lateral.webp',
    overview: '점프, 달리기, 쪼그려 앉기 등 반복적인 무릎 폄 부하로 인해 슬개골 하단과 슬개건 부착부에 미세 파열과 건병증이 생겨 발생하는 전방 무릎 통증입니다.',
    symptoms: [
      '점프 후 착지하거나 쪼그려 앉았다 일어날 때 슬개골 바로 아래가 찌릿함',
      '달리기 시작할 때 통증이 있다가 몸이 풀리면 줄어들고 운동 후 다시 악화',
      '슬개골 아래쪽 뼈 모서리를 꼬집듯 누르면 깜짝 놀랄 만큼 아픔',
      '영화관이나 차 안에서 무릎을 오래 구부리고 있으면 무릎 앞이 쑤심(Movie sign)'
    ],
    pathologyMechanism: '슬개골 하극(Inferior pole of patella)에서 슬개건 기시부의 만성 견인 부하로 인한 점액양 변성 및 신생혈관신경 증식입니다.',
    healingPoints: [
      {
        id: 'HP-PT-01',
        code: 'HP-01',
        nameKo: '슬개골 하극 건기시부 골막점',
        nameEn: 'Inferior Pole of Patella (Tendon Origin)',
        targetAnatomy: '슬개건 기시부, 슬개하 지방체(Hoffa\'s fat pad) 상단',
        locationGuide: '슬개골 가장 아랫모서리 뼈 끝 바로 아래의 홈',
        significance: '점퍼스 니의 근본 원인부위 건-골 접합부 재생 및 통증 차단',
        pinCoordinates: { x: 49.5, y: 71.0, view: 'anterior' }
      },
      {
        id: 'HP-PT-02',
        code: 'HP-02',
        nameKo: '대퇴사두근건 슬개골 상극 부착점',
        nameEn: 'Quadriceps Tendon Superior Patellar Point',
        targetAnatomy: '대퇴직근 및 중간광근 건 부착부',
        locationGuide: '슬개골 상연 중앙 뼈 모서리의 단단한 힘줄 부착부',
        significance: '슬개건으로 전달되는 대퇴사두근의 과도한 장력을 분산 이완',
        pinCoordinates: { x: 49.5, y: 68.5, view: 'anterior' }
      }
    ],
    novaCellProtocol: {
      probeType: '단일 펜 도자 (Monopolar Pen Probe)',
      contactMethod: '슬개골 뼈 모서리에 직각으로 단단히 지지 접촉',
      contactDurationPerPoint: '\uD3EC\uC778\uD2B8\uB2F9 20\uCD08 ~ 30\uCD08 (\uD658\uC790\uAC00 \uB530\uB054 \uAC70\uB9BC\uC774 \uC0AC\uB77C\uC9C0\uAC70\uB098 \uBB35\uC9C1\uD55C \uC774\uC644\uAC10\uC744 \uB290\uB084\uB54C\uAE4C\uC9C0)',
      outputIntensity: '\uACE0\uC804\uC555 \uBBF8\uC138\uC804\uB958 03~05\uB2E8\uACC4 (\uD3B8\uC548\uD55C \uD384\uC2A4 \uC9C4\uB3D9 \uAC10\uAC01)',
      stingingRemedy: '\uD658\uBD80\uC5D0 \uC54C\uCF5C \uB610\uB294 \uC0DD\uB9AC\uC2DD\uC5FC\uC218 \uC2A4\uD504\uB808\uC774',
      treatmentSequence: [
        'HP-PT-02(상극 대퇴사두근건) 25초 통전 후, HP-PT-01(하극 슬개건)에 25초간 접촉합니다.'
      ],
      clinicalPearls: [
        '슬개골 상극을 살짝 아래로 누르면 슬개골 하극 뼈 모서리가 위로 들려 펜 도자가 건병증 부위에 정확하게 접촉됩니다.'
      ]
    },
    anatomicalSafetyGuide: {
      primaryLandmarks: '슬개골 상·하극(Superior and inferior poles of patella)',
      dangerStructures: '슬개하 지방체 과자극, 무릎 관절강',
      probeTechnique: '슬개골 뼈 가장자리에 지지하여 인가하며 관절강 속으로 도자를 무리하게 찌르지 않습니다.',
      safetyPrecautions: '건의 급성 완전 파열 의심 시 도수 부하를 피하고 정밀 검사를 병행하십시오.'
    },
    clinicalCases: [
      {
        caseId: 'CASE-PT-01',
        patientProfile: '23세 남성 / 농구 동호인 / 유병기간 3개월 슬개건염',
        chiefComplaint: '농구 리바운드 점프 착지 시 무릎 앞쪽이 찌릿하게 꺾여 운동 중단 (NRS 7)',
        priorTreatments: '냉찜질 및 소염제 복용했으나 점프 동작 시 재발',
        clinicalExamination: '슬개골 하극(HP-PT-01) 핀포인트 압통 명확, Basset 검사 양성',
        novaCellApplication: '노바셀 단일 펜 도자로 HP-PT-02 및 HP-PT-01 각 25초 통전 (주 2회, 총 4회)',
        therapeuticOutcome: '2회 치료 후 쪼그려 앉기 통증 소실, 4회 치료 후 점프 착지 통증 없이 농구 복귀.'
      }
    ]
  },

  {
    id: 'peroneal-nerve-entrapment',
    categoryId: 'knee-foot',
    titleKo: '총비골신경 포착증 / 하퇴 외측통 및 족하수',
    titleEn: 'Common Peroneal Nerve Entrapment',
    badge: '비골 신경',
    illustrationImage: 'assets/regions/peroneal-entrapment-medial-lateral.webp',
    overview: '무릎 바깥쪽 비골두 목을 감아 도는 총비골신경이 다리를 꼬거나 외상으로 압박되어 종아리 바깥쪽과 발등이 저리고 심하면 발목을 위로 들지 못하는 족하수(Foot drop)가 발생합니다.',
    symptoms: [
      '종아리 바깥쪽과 발등, 발가락 부위의 감각 저하 및 저림',
      '걸을 때 발끝이 바닥에 끌려 자꾸 걸려 넘어질 뻔함(족하수)',
      '무릎 바깥쪽 튀어나온 뼈 아래를 톡톡 치면 발등으로 찌릿한 전기가 통함',
      '다리를 꼬고 앉거나 쪼그려 일한 후 급격한 증상 발생'
    ],
    pathologyMechanism: '비골두 경부(Fibular neck)에서 장비골근 기시부 건궁(Peroneal tunnel)을 통과할 때 신경이 골막과 건막 사이에 끼어 허혈성 전도 장애를 겪습니다.',
    healingPoints: [
      {
        id: 'HP-CPN-01',
        code: 'HP-01',
        nameKo: '비골두 경부 비골터널 신경점',
        nameEn: 'Fibular Neck Peroneal Tunnel Point',
        targetAnatomy: '총비골신경, 장비골근 기시건막, 비골경 골막',
        locationGuide: '비골두(무릎 외측 둥근 뼈) 후하방 1.5cm 목 부위의 오목한 고랑',
        significance: '총비골신경 압박 해소 및 전경골근 운동 신경 전도율 회복',
        pinCoordinates: { x: 41.5, y: 72.5, view: 'anterior' }
      },
      {
        id: 'HP-CPN-02',
        code: 'HP-02',
        nameKo: '심비골신경 전경골근 분기점',
        nameEn: 'Deep Peroneal Nerve Tibialis Anterior Point',
        targetAnatomy: '심비골신경, 전경골근-장지신근 사이 근간 중격',
        locationGuide: '비골두 하방 5cm, 하퇴 전외측 근육 사이 홈',
        significance: '발목을 들어 올리는 족배굴곡근(Dorsiflexor) 근력 회복 촉진',
        pinCoordinates: { x: 43.5, y: 76.5, view: 'anterior' }
      }
    ],
    novaCellProtocol: {
      probeType: '단일 펜 도자 (Monopolar Pen Probe)',
      contactMethod: '비골 뼈 바닥에 부드럽게 대고 가벼운 전기 자극 인가',
      contactDurationPerPoint: '\uD3EC\uC778\uD2B8\uB2F9 20\uCD08 ~ 30\uCD08 (\uD658\uC790\uAC00 \uB530\uB054 \uAC70\uB9BC\uC774 \uC0AC\uB77C\uC9C0\uAC70\uB098 \uBB35\uC9C1\uD55C \uC774\uC644\uAC10\uC744 \uB290\uB084\uB54C\uAE4C\uC9C0)',
      outputIntensity: '\uACE0\uC804\uC555 \uBBF8\uC138\uC804\uB958 03~05\uB2E8\uACC4 (\uD3B8\uC548\uD55C \uD384\uC2A4 \uC9C4\uB3D9 \uAC10\uAC01)',
      stingingRemedy: '\uD658\uBD80\uC5D0 \uC54C\uCF5C \uB610\uB294 \uC0DD\uB9AC\uC2DD\uC5FC\uC218 \uC2A4\uD504\uB808\uC774',
      treatmentSequence: [
        'HP-CPN-01(비골두 경부) 25초 통전 후, HP-CPN-02(심비골신경점)에 20초간 접촉합니다.'
      ],
      clinicalPearls: [
        '비골두 뒤쪽은 신경이 매우 표층에 있으므로 도자를 강하게 짓누르지 말고 뼈 표면에 펜을 가볍게 얹는 느낌으로 통전하십시오.'
      ]
    },
    anatomicalSafetyGuide: {
      primaryLandmarks: '비골두(Fibular head), 비골 경부(Fibular neck)',
      dangerStructures: '총비골신경 본간, 전경골동맥 관통지',
      probeTechnique: '뼈 모서리에 가볍게 지지하며 신경을 과도한 압력으로 마찰하지 않습니다.',
      safetyPrecautions: '완전 마비로 인한 족하수의 경우 Foot-up 스플린트 착용을 병행하도록 지도하십시오.'
    },
    clinicalCases: [
      {
        caseId: 'CASE-CPN-01',
        patientProfile: '55세 여성 / 밭일 농업 / 유병기간 3주 우측 하퇴 외측 마비',
        chiefComplaint: '쪼그려 밭일한 후 우측 발등 감각이 무디고 걸을 때 발끝이 끌려 슬리퍼가 벗겨짐 (발목 신전 근력 Gr 3)',
        priorTreatments: '한의원 침 치료 및 신경비타민 복용했으나 발목 힘 빠짐 지속',
        clinicalExamination: '비골두 하방(HP-CPN-01) 틴넬 징후 양성, 발목 족배굴곡 및 엄지 신전력 저하',
        novaCellApplication: '노바셀 단일 펜 도자로 HP-CPN-01 25초, HP-CPN-02 20초 주 3회 집중 통전',
        therapeuticOutcome: '1주(3회) 치료 후 발등 감각 80% 회복, 3주 치료 후 발목 근력 Gr 5 정상 회복되어 보행 정상화.'
      }
    ]
  },

  {
    id: 'ankle-sprain-instability',
    categoryId: 'knee-foot',
    titleKo: '발목 외측 염좌 / 전거비인대 만성 불안정증',
    titleEn: 'Lateral Ankle Sprain & Chronic Instability',
    badge: '발목 인대',
    illustrationImage: 'assets/regions/right-foot-outer-inner.webp',
    overview: '발목이 안쪽으로 꺾이며 접질린 후 전거비인대(ATFL)와 종비인대(CFL)의 부분 파열 및 이완으로 만성적인 발목 시큰거림과 헛디딤이 발생하는 질환입니다.',
    symptoms: [
      '울퉁불퉁한 길을 걸을 때 발목이 휙 돌아가며 헛디딜 것 같음(불안정성)',
      '발목 바깥쪽 복사뼈 앞부분이 늘 부어있고 뻐근하게 아픔',
      '발목을 안쪽으로 돌릴 때 외측 인대 부위에 날카로운 통증',
      '과거에 발목을 심하게 삔 후 수개월이 지나도 붓기와 통증이 잔존함'
    ],
    pathologyMechanism: '전거비인대의 반흔 치유(Scar tissue) 및 고유수용감각기(Proprioceptor) 결손으로 비골근 반사 수축이 지연되어 반복 손상이 악순환됩니다.',
    healingPoints: [
      {
        id: 'HP-AS-01',
        code: 'HP-01',
        nameKo: '전거비인대 거골 부착점 (외과 전하방)',
        nameEn: 'ATFL Talar Insertion Point',
        targetAnatomy: '전거비인대(ATFL), 거골 경부 외측 골막',
        locationGuide: '외측 복사뼈(외과) 전하방 1cm 오목한 관절 함요처',
        significance: '가장 흔히 파열되는 전거비인대의 인대 재형성 촉진 및 국소 통증 차단',
        pinCoordinates: { x: 44.5, y: 90.5, view: 'anterior' }
      },
      {
        id: 'HP-AS-02',
        code: 'HP-02',
        nameKo: '종비인대 종골 부착점 (외과 직하방)',
        nameEn: 'CFL Calcaneal Insertion Point',
        targetAnatomy: '종비인대(CFL), 종골 외측면, 비골하 활액낭',
        locationGuide: '외측 복사뼈 끝에서 수직 아래 1.5cm 종골 뼈 표면',
        significance: '발목 관절의 거골하 안정성 회복 및 만성 인대 견인통 완화',
        pinCoordinates: { x: 44.0, y: 91.5, view: 'posterior' }
      }
    ],
    novaCellProtocol: {
      probeType: '단일 펜 도자 (Monopolar Pen Probe)',
      contactMethod: '외측 인대 부착부 골면에 직각 지지 접촉',
      contactDurationPerPoint: '\uD3EC\uC778\uD2B8\uB2F9 20\uCD08 ~ 30\uCD08 (\uD658\uC790\uAC00 \uB530\uB054 \uAC70\uB9BC\uC774 \uC0AC\uB77C\uC9C0\uAC70\uB098 \uBB35\uC9C1\uD55C \uC774\uC644\uAC10\uC744 \uB290\uB084\uB54C\uAE4C\uC9C0)',
      outputIntensity: '\uACE0\uC804\uC555 \uBBF8\uC138\uC804\uB958 03~05\uB2E8\uACC4 (\uD3B8\uC548\uD55C \uD384\uC2A4 \uC9C4\uB3D9 \uAC10\uAC01)',
      stingingRemedy: '\uD658\uBD80\uC5D0 \uC54C\uCF5C \uB610\uB294 \uC0DD\uB9AC\uC2DD\uC5FC\uC218 \uC2A4\uD504\uB808\uC774',
      treatmentSequence: [
        'HP-AS-01(전거비인대점) 25초 통전 후, HP-AS-02(종비인대점)에 25초간 도자를 접촉합니다.'
      ],
      clinicalPearls: [
        '발목을 90도 중립 상태로 고정한 후 통전해야 인대가 적절한 장력을 받아 치유 전류의 흡수율이 높아집니다.'
      ]
    },
    anatomicalSafetyGuide: {
      primaryLandmarks: '외측 복사뼈(Lateral malleolus), 거골 경부(Talar neck)',
      dangerStructures: '천비골신경 피지(Superficial peroneal nerve), 소복재정맥',
      probeTechnique: '인대 부착부 뼈 골면에 정확히 안착시키며 피하 정맥을 강하게 압박하지 않습니다.',
      safetyPrecautions: '급성 뼈 골절(Ottawa ankle rules 양성) 여부를 사전 감별하십시오.'
    },
    clinicalCases: [
      {
        caseId: 'CASE-AS-01',
        patientProfile: '27세 여성 / 필라테스 강사 / 유병기간 4개월 만성 발목 불안정증',
        chiefComplaint: '계단이나 매트 운동 시 발목 외측이 시큰거리고 헛디딤 발생 (NRS 6)',
        priorTreatments: '깁스 2주 후 한의원 침 맞았으나 발목 외측 복사뼈 앞 부종 지속',
        clinicalExamination: '전거비인대 부착부(HP-AS-01) 굵은 압통 결절, 전방 전위 검사(Anterior drawer) 경미한 이완',
        novaCellApplication: '노바셀 단일 펜 도자로 HP-AS-01 및 HP-AS-02 각 25초 통전 (주 2회, 총 4회)',
        therapeuticOutcome: '2회 시술 후 붓기와 시큰거림 70% 소실, 4회 치료 후 불안정감 없이 필라테스 지도 복귀.'
      }
    ]
  },

  {
    id: 'plantar-fasciitis',
    categoryId: 'knee-foot',
    titleKo: '족저근막염 / 종골 골극 통증',
    titleEn: 'Plantar Fasciitis & Calcaneal Spur Pain',
    badge: '발바닥 대표',
    illustrationImage: 'assets/regions/right-foot-outer-inner.webp',
    overview: '발뒤꿈치 뼈(종골)에 부착하는 족저근막의 만성 과부하와 퇴행성 변성으로, 아침에 일어나 첫 발을 디딜 때 뒤꿈치 바닥에 찢어지는 듯한 격통이 발생하는 질환입니다.',
    symptoms: [
      '아침 기상 후 첫 발을 디딜 때 발뒤꿈치 바닥에 찌릿한 극통',
      '몇 걸음 걷다 보면 통증이 약간 줄어들지만 오후가 되면 다시 악화',
      '발뒤꿈치 바닥 안쪽 튀어나온 뼈 부위를 누르면 몹시 아픔',
      '오래 서 있거나 딱딱한 신발을 신으면 발바닥 전체가 화끈거림'
    ],
    pathologyMechanism: '종골 내측 결절(Medial calcaneal tubercle) 부착부에서 족저근막의 반복적 미세 파열과 교원섬유의 점액양 변성, 내측 종골 신경의 압박입니다.',
    healingPoints: [
      {
        id: 'HP-PF-01',
        code: 'HP-01',
        nameKo: '종골 내측결절 족저근막 기시부점',
        nameEn: 'Medial Calcaneal Tubercle Origin Point',
        targetAnatomy: '족저근막 건기시부, 단지굴근, 종골 골막',
        locationGuide: '발뒤꿈치 바닥 중심에서 약간 안쪽으로 치우친 가장 아픈 골돌기',
        significance: '족저근막염의 핵심 발원지 통증을 차단하고 섬유아세포 활성화 유도',
        pinCoordinates: { x: 46.5, y: 94.5, view: 'posterior' }
      },
      {
        id: 'HP-PF-02',
        code: 'HP-02',
        nameKo: '족저근막 내측 아치 장력점',
        nameEn: 'Plantar Medial Longitudinal Arch Point',
        targetAnatomy: '족저근막 내측 밴드, 주상골 하방 건막',
        locationGuide: '발바닥 안쪽 아치 중앙의 오목하게 만져지는 질긴 밴드 중심',
        significance: '보행 시 발바닥 윈드라스(Windlass) 기전의 장력을 완화',
        pinCoordinates: { x: 47.0, y: 93.5, view: 'anterior' }
      },
      {
        id: 'HP-PF-03',
        code: 'HP-03',
        nameKo: '아킬레스건-족저근막 연결점',
        nameEn: 'Achilles-Plantar Fascial Junction Point',
        targetAnatomy: '아킬레스건 종골 부착부, 족저근막 후방 연속 건막',
        locationGuide: '발뒤꿈치 후면 종골 부착부 상단 1.5cm 지점',
        significance: '종골을 사이에 둔 아킬레스건과 족저근막의 후방 장력선 이완',
        pinCoordinates: { x: 46.5, y: 92.0, view: 'posterior' }
      }
    ],
    novaCellProtocol: {
      probeType: '단일 펜 도자 (Monopolar Pen Probe)',
      contactMethod: '발뒤꿈치 바닥 골막을 향해 수직 강압 지지 접촉',
      contactDurationPerPoint: '\uD3EC\uC778\uD2B8\uB2F9 20\uCD08 ~ 30\uCD08 (\uD658\uC790\uAC00 \uB530\uB054 \uAC70\uB9BC\uC774 \uC0AC\uB77C\uC9C0\uAC70\uB098 \uBB35\uC9C1\uD55C \uC774\uC644\uAC10\uC744 \uB290\uB084\uB54C\uAE4C\uC9C0)',
      outputIntensity: '\uACE0\uC804\uC555 \uBBF8\uC138\uC804\uB958 03~05\uB2E8\uACC4 (\uD3B8\uC548\uD55C \uD384\uC2A4 \uC9C4\uB3D9 \uAC10\uAC01)',
      stingingRemedy: '\uD658\uBD80\uC5D0 \uC54C\uCF5C \uB610\uB294 \uC0DD\uB9AC\uC2DD\uC5FC\uC218 \uC2A4\uD504\uB808\uC774',
      treatmentSequence: [
        '1단계: HP-PF-03(아킬레스건 부착점) 25초 통전으로 뒤쪽 장력을 풉니다.',
        '2단계: 가장 통증이 극심한 HP-PF-01(종골 내측결절)에 30초간 집중 통전합니다.',
        '3단계: HP-PF-02(아치 장력점)에 20초간 접촉하여 마무리합니다.'
      ],
      clinicalPearls: [
        '발바닥 각질층은 전기 저항이 높으므로 시술 전 전도성 겔을 충분히 도포하고 펜 도자를 뼈를 향해 단단히 눌러 접촉시켜야 미세전류가 100% 흡수됩니다.'
      ]
    },
    anatomicalSafetyGuide: {
      primaryLandmarks: '종골 결절(Calcaneal tuberosity), 발바닥 내측 종아치',
      dangerStructures: '외측 족저신경 제1분지(Baxter\'s nerve), 족저동맥궁',
      probeTechnique: '종골 뼈 바닥에 단단히 지지하여 접촉하며 신경 혈관 주행부로 비껴나가지 않도록 주의합니다.',
      safetyPrecautions: '발뒤꿈치 패드 위축 환자의 경우 무리한 충격성 압박을 삼가고 미세전류 통전 시간을 준수하십시오.'
    },
    clinicalCases: [
      {
        caseId: 'CASE-PF-01',
        patientProfile: '50세 여성 / 백화점 판매원 / 유병기간 6개월 양측 족저근막염',
        chiefComplaint: '아침 첫 발 디딜 때 발뒤꿈치가 칼로 찔리는 듯 아파 까치발로 화장실 이동 (NRS 8)',
        priorTreatments: '체외충격파 5회 시행했으나 시술 시 너무 아프고 효과 일시적, 맞춤 깔창 착용 중',
        clinicalExamination: '종골 내측 결절(HP-PF-01) 핀포인트 압통 극심, 족저근막 초음파상 근막 두께 5.8mm(비후)',
        novaCellApplication: '노바셀 단일 펜 도자로 HP-PF-03 25초, HP-PF-01 30초, HP-PF-02 20초 주 2회 통전',
        therapeuticOutcome: '1주(2회) 후 아침 첫 발 통증 50% 감소, 3주(6회) 치료 후 아침 첫 발 통증 0으로 소실.'
      }
    ]
  },

  {
    id: 'tarsal-tunnel-syndrome',
    categoryId: 'knee-foot',
    titleKo: '발목터널 증후군 / 후경골신경 포착',
    titleEn: 'Tarsal Tunnel Syndrome & Posterior Tibial Nerve',
    badge: '발목터널',
    illustrationImage: 'assets/regions/right-foot-outer-inner.webp',
    overview: '안쪽 복사뼈 뒤쪽 굴근지대(Flexor retinaculum) 아래에서 후경골신경이 압박되어 발바닥 전체와 발가락이 화끈거리고 저리며 모래를 밟는 듯한 이물감이 드는 질환입니다.',
    symptoms: [
      '발바닥 전체가 불에 타듯 화끈거리거나 저리고 얼얼함',
      '발바닥에 모래알이나 껌이 붙어 있는 듯 감각이 둔하고 이상함',
      '안쪽 복사뼈 뒤쪽을 톡톡 치면 발바닥으로 찌릿한 방사통(틴넬 양성)',
      '밤에 발바닥이 뜨겁고 저려 이불 밖으로 발을 내놓고 자야 함'
    ],
    pathologyMechanism: '족근관(Tarsal tunnel) 내에서 후경골신경이 굴근건들의 건초염이나 정맥류, 낭종으로 인해 포착되어 족저신경으로 가는 혈류가 차단됩니다.',
    healingPoints: [
      {
        id: 'HP-TTS-01',
        code: 'HP-01',
        nameKo: '발목터널 굴근지대 후경골신경점',
        nameEn: 'Tarsal Tunnel Retinaculum (Posterior Tibial Nerve)',
        targetAnatomy: '후경골신경(Posterior tibial nerve), 굴근지대, 후경골동맥',
        locationGuide: '내측 복사뼈(내과) 후하방 1.5cm 오목한 함요처(맥박 촉지부 직후방)',
        significance: '발목터널 내압을 감소시키고 족저신경의 신경전도 장애 해소',
        pinCoordinates: { x: 47.5, y: 91.0, view: 'posterior' }
      },
      {
        id: 'HP-TTS-02',
        code: 'HP-02',
        nameKo: '내측 족저신경 종골관 분기점',
        nameEn: 'Medial Plantar Nerve Calcaneal Point',
        targetAnatomy: '내측 족저신경, 외전근 건막',
        locationGuide: '발바닥 안쪽 아치 시작부, 주상골 결절 후하방 2cm',
        significance: '엄지발가락 및 발바닥 내측의 저림과 감각 저하 완화',
        pinCoordinates: { x: 47.0, y: 93.5, view: 'anterior' }
      }
    ],
    novaCellProtocol: {
      probeType: '단일 펜 도자 (Monopolar Pen Probe)',
      contactMethod: '발목터널 인대 표면에 가볍게 안착 접촉',
      contactDurationPerPoint: '\uD3EC\uC778\uD2B8\uB2F9 20\uCD08 ~ 30\uCD08 (\uD658\uC790\uAC00 \uB530\uB054 \uAC70\uB9BC\uC774 \uC0AC\uB77C\uC9C0\uAC70\uB098 \uBB35\uC9C1\uD55C \uC774\uC644\uAC10\uC744 \uB290\uB084\uB54C\uAE4C\uC9C0)',
      outputIntensity: '\uACE0\uC804\uC555 \uBBF8\uC138\uC804\uB958 03~05\uB2E8\uACC4 (\uD3B8\uC548\uD55C \uD384\uC2A4 \uC9C4\uB3D9 \uAC10\uAC01)',
      stingingRemedy: '\uD658\uBD80\uC5D0 \uC54C\uCF5C \uB610\uB294 \uC0DD\uB9AC\uC2DD\uC5FC\uC218 \uC2A4\uD504\uB808\uC774',
      treatmentSequence: [
        'HP-TTS-01(발목터널 입구) 25초 통전 후, HP-TTS-02(내측 족저신경점)에 25초간 접촉합니다.'
      ],
      clinicalPearls: [
        '안쪽 복사뼈 뒤에는 후경골동맥의 박동이 뛰고 있으므로, 맥박을 손끝으로 확인하고 맥박 바로 뒤쪽 고랑에 펜 도자를 안착시킵니다.'
      ]
    },
    anatomicalSafetyGuide: {
      primaryLandmarks: '내측 복사뼈(Medial malleolus), 종골(Calcaneus)',
      dangerStructures: '후경골동맥(Posterior tibial artery), 복재신경',
      probeTechnique: '동맥 혈관 벽을 직접 누르지 않도록 맥박 외측 굴근지대 골성 홈에 도자를 지지합니다.',
      safetyPrecautions: '환자가 발바닥으로 번개 치는 전격통을 호소할 경우 출력 레벨을 조절하십시오.'
    },
    clinicalCases: [
      {
        caseId: 'CASE-TTS-01',
        patientProfile: '59세 남성 / 자영업 / 유병기간 8개월 우측 발바닥 화끈거림',
        chiefComplaint: '밤마다 발바닥이 불타는 듯 화끈거려 잠을 못 자고 발바닥에 종이를 댄 듯 감각 무딤 (NRS 7)',
        priorTreatments: '혈액순환제 및 진통소염제 복용 무효, 족저근막염으로 오인 치료받음',
        clinicalExamination: '내과 후하방 발목터널(HP-TTS-01) 틴넬 징후 강양성(발바닥으로 전기 방사)',
        novaCellApplication: '노바셀 단일 펜 도자로 HP-TTS-01 및 HP-TTS-02 각 25초 주 2회 통전',
        therapeuticOutcome: '2주(4회) 시술 후 야간 발바닥 화끈거림 소실, 4주 후 발바닥 감각 85% 회복.'
      }
    ]
  },

  // =========================================================================
  // 7. 자율신경 / 전신 질환 (Autonomic & Systemic)
  // =========================================================================
  {
    id: 'sgb-autonomic-dysfunction',
    categoryId: 'autonomic',
    titleKo: '성상신경절 자율신경실조증 / 뇌혈류 장애',
    titleEn: 'Stellate Ganglion Autonomic Dysfunction & Cerebral Hypoperfusion',
    badge: '자율신경 대표',
    illustrationImage: 'assets/autonomic_sympathetic_3d.jpg',
    overview: '경추부 교감신경절(성상신경절)의 과흥분으로 인해 두경부 및 상지의 혈관이 수축되고 뇌혈류 장애, 만성 불면증, 안면 홍조, 이명, 어지럼증, 자율신경실조증이 유발됩니다.',
    symptoms: [
      '가슴이 두근거리고 이유 없이 불안하며 깊은 잠을 자지 못하는 만성 불면',
      '머리가 맑지 않고 안개가 낀 듯 멍함(Brain fog)과 만성 피로',
      '얼굴로 열이 달아오르고(안면홍조), 손발은 얼음처럼 차가운 상열하한',
      '이명(귀울림), 어지럼증 및 목덜미의 극심한 뻣뻣함'
    ],
    pathologyMechanism: '제6, 7경추 전외측에 위치한 성상신경절(Stellate ganglion)의 과도한 교감신경 톤(Sympathetic tone) 증가로 뇌혈관 및 추골뇌저동맥의 혈류 저항이 급증하고 전신 자율신경 항상성이 파괴됩니다.',
    healingPoints: [
      {
        id: 'HP-SGB-01',
        code: 'HP-01',
        nameKo: '성상신경절 C6 경동맥결절 반사점',
        nameEn: 'Stellate Ganglion (C6 Chassaignac\'s Tubercle)',
        targetAnatomy: '성상신경절(C6-C7 교감신경간), C6 횡돌기 전결절 골막',
        locationGuide: '윤상연골(C6 레벨) 외측 2.5cm, 흉쇄유돌근과 경동맥 박동부 사이 함요부',
        significance: '두경부 교감신경 과항진을 정상화하고 뇌혈류 및 자율신경 밸런스를 즉각 리셋',
        pinCoordinates: { x: 46.5, y: 18.5, view: 'anterior' }
      },
      {
        id: 'HP-SGB-02',
        code: 'HP-02',
        nameKo: '상경신경절 하악각 후방점',
        nameEn: 'Superior Cervical Ganglion Point',
        targetAnatomy: '상경신경절(SCG), C2-C3 횡돌기 전방 영역',
        locationGuide: '하악각(턱모서리) 후방, 흉쇄유돌근 상부 전연 오목한 틈새',
        significance: '안면부 혈류 촉진, 이명 및 편두통, 안구 피로 완화',
        pinCoordinates: { x: 46.0, y: 15.5, view: 'anterior' }
      }
    ],
    novaCellProtocol: {
      probeType: '단일 펜 도자 (Monopolar Pen Probe - 무극성 고전압 미세전류)',
      contactMethod: '미세 안착 접촉 (Micro-Touch - 뼈 바닥 지지 후 무압박 통전)',
      contactDurationPerPoint: '\uD3EC\uC778\uD2B8\uB2F9 20\uCD08 ~ 30\uCD08 (\uD658\uC790\uAC00 \uB530\uB054 \uAC70\uB9BC\uC774 \uC0AC\uB77C\uC9C0\uAC70\uB098 \uBB35\uC9C1\uD55C \uC774\uC644\uAC10\uC744 \uB290\uB084\uB54C\uAE4C\uC9C0)',
      outputIntensity: '\uACE0\uC804\uC555 \uBBF8\uC138\uC804\uB958 03~05\uB2E8\uACC4 (\uD3B8\uC548\uD55C \uD384\uC2A4 \uC9C4\uB3D9 \uAC10\uAC01)',
      stingingRemedy: '\uD658\uBD80\uC5D0 \uC54C\uCF5C \uB610\uB294 \uC0DD\uB9AC\uC2DD\uC5FC\uC218 \uC2A4\uD504\uB808\uC774',
      treatmentSequence: [
        '1단계 [경동맥 보호]: 검지로 총경동맥 박동을 내측으로 가볍게 밀어 보호합니다.',
        '2단계 [성상신경절 통전]: HP-01(C6 결절점)에 펜 도자를 수직으로 대어 C6 횡돌기 뼈 바닥에 살포시 안착 후 30초간 통전합니다.',
        '3단계 [상경신경절 리셋]: HP-02(상경신경절점)에 20초간 부드럽게 접촉하여 뇌순환을 촉진합니다.'
      ],
      clinicalPearls: [
        '통전 중 환자에게 눈을 감고 편안히 심호흡을 유도하면 통전 10~15초 후 안면과 손끝이 따뜻해지는 부교감신경 활성화 반응(혈관 확장)이 나타납니다.'
      ]
    },
    anatomicalSafetyGuide: {
      primaryLandmarks: '윤상연골(Cricoid cartilage, C6 레벨), C6 횡돌기 전결절(Chassaignac\'s tubercle)',
      dangerStructures: '총경동맥(Common carotid artery, 내측 위치), 내경정맥, 미주신경, 추골동맥',
      probeTechnique: '시술자의 둘째, 셋째 손가락으로 총경동맥 맥박을 만져 내측(기도 방향)으로 가볍게 밀어 젖히고, 그 외측 틈으로 펜 도자를 진입시켜 단단한 C6 횡돌기 뼈에 지지합니다.',
      safetyPrecautions: '경동맥 동(Carotid sinus)을 직접 압박하면 미주신경성 서맥이나 혈압 저하가 올 수 있으므로 경동맥 박동 자체를 누르지 말고 외측 뼈를 목표로 안착하십시오.'
    },
    clinicalCases: [
      {
        caseId: 'CASE-SGB-01',
        patientProfile: '46세 여성 / 교사 / 유병기간 1년 자율신경실조증 및 만성 불면증',
        chiefComplaint: '매일 밤 수면제를 먹어도 2~3시간밖에 못 자고, 얼굴로 열이 치솟으며 손발은 얼음장처럼 차가움 (NRS 8)',
        priorTreatments: '신경안정제 및 수면제 복용 중이었으나 주간 졸림증으로 일상생활 곤란',
        clinicalExamination: 'C6 Chassaignac 결절(HP-SGB-01) 극심한 압통 및 양측 손끝 체열 검사상 현저한 저체온 관찰',
        novaCellApplication: '노바셀 단일 펜 도자로 경동맥을 외측으로 분리 후 HP-SGB-01에 30초간 안전 통전 (주 2회, 3주간 총 6회)',
        therapeuticOutcome: '1회 시술 직후 손끝이 따뜻해지며 당일 밤 수면제 없이 6시간 연속 수면 성공. 6회 치료 후 안면홍조 소실 및 불면증 완전 탈출.'
      }
    ]
  },

  {
    id: 'postpartum-cold-syndrome',
    categoryId: 'autonomic',
    titleKo: '산후풍 / 전신 관절 시림 및 자율신경 부조화',
    titleEn: 'Postpartum Cold Syndrome & Systemic Dysautonomia',
    badge: '전신 시림',
    illustrationImage: 'assets/regions/postpartum-cervical-sacral-posterior.webp',
    overview: '출산 후 관절과 인대의 불완전 회복 및 체온 조절 중추의 자율신경 실조로 인해 한여름에도 찬바람이 뼈마디 속으로 스며드는 듯한 전신 시림과 쑤심이 지속되는 질환입니다.',
    symptoms: [
      '에어컨 바람이나 찬 공기를 쐬면 무릎, 손목, 어깨 속으로 시린 기운이 침투함',
      '한여름에도 내복이나 수면양말을 신어야 할 정도로 뼈마디가 시리고 시림',
      '전신 관절이 쑤시고 기운이 하나도 없으며 땀을 흘리고 나면 오한 발생',
      '산후 우울감, 불안증 및 만성 어지럼증 동반'
    ],
    pathologyMechanism: '릴랙신(Relaxin) 호르몬 분비 후 관절낭의 고유감각 수용기 손상과, 시상하부-교감신경 축의 실조로 인한 말초 미세혈관의 지속적 수축 및 저체온증입니다.',
    healingPoints: [
      {
        id: 'HP-PCS-01',
        code: 'HP-01',
        nameKo: 'C6 교감신경 체온조절 중추 반사점',
        nameEn: 'C6 Sympathetic Thermoregulatory Point',
        targetAnatomy: '성상신경절, 척추 주위 교감신경간',
        locationGuide: '경추 6번 횡돌기 전외측 결절부',
        significance: '시상하부 체온 조절 회로를 정상화하여 전신 혈관 개방 유도',
        pinCoordinates: { x: 46.5, y: 18.5, view: 'anterior' }
      },
      {
        id: 'HP-PCS-02',
        code: 'HP-02',
        nameKo: '천골 자율신경 림프순환점',
        nameEn: 'Sacral Autonomic Lymphatic Point',
        targetAnatomy: '천골 교감신경 신경절, 천골익 외측부',
        locationGuide: '후천골공 제2공(S2) 외측 1.5cm 지점',
        significance: '골반 내 미세 순환을 복원하고 하지 냉증 및 요통 해소',
        pinCoordinates: { x: 49.0, y: 46.0, view: 'posterior' }
      }
    ],
    novaCellProtocol: {
      probeType: '단일 펜 도자 (Monopolar Pen Probe)',
      contactMethod: '부드러운 정적 접촉으로 따스한 생체 파동 유도',
      contactDurationPerPoint: '\uD3EC\uC778\uD2B8\uB2F9 20\uCD08 ~ 30\uCD08 (\uD658\uC790\uAC00 \uB530\uB054 \uAC70\uB9BC\uC774 \uC0AC\uB77C\uC9C0\uAC70\uB098 \uBB35\uC9C1\uD55C \uC774\uC644\uAC10\uC744 \uB290\uB084\uB54C\uAE4C\uC9C0)',
      outputIntensity: '\uACE0\uC804\uC555 \uBBF8\uC138\uC804\uB958 03~05\uB2E8\uACC4 (\uD3B8\uC548\uD55C \uD384\uC2A4 \uC9C4\uB3D9 \uAC10\uAC01)',
      stingingRemedy: '\uD658\uBD80\uC5D0 \uC54C\uCF5C \uB610\uB294 \uC0DD\uB9AC\uC2DD\uC5FC\uC218 \uC2A4\uD504\uB808\uC774',
      treatmentSequence: [
        'HP-PCS-01(C6 교감신경점) 30초 통전 후, HP-PCS-02(천골 자율신경점)에 30초간 순차적으로 도자를 접촉합니다.'
      ],
      clinicalPearls: [
        '통전 부위에 따뜻한 온열팩을 가볍게 얹어둔 상태에서 시술하면 미세전류와 열에너지가 복합 작용하여 뼈 시림이 훨씬 빠르게 가라앉습니다.'
      ]
    },
    anatomicalSafetyGuide: {
      primaryLandmarks: 'C6 횡돌기, 천골익(Sacral ala)',
      dangerStructures: '경동맥, 천골신경공',
      probeTechnique: '경동맥을 안전하게 젖히고 뼈 표면에 부드럽게 지지하여 접촉합니다.',
      safetyPrecautions: '환자가 시림으로 인해 근육을 심하게 긴장시킬 수 있으므로 실내 온도를 따뜻하게 유지하십시오.'
    },
    clinicalCases: [
      {
        caseId: 'CASE-PCS-01',
        patientProfile: '33세 여성 / 출산 1년 차 / 유병기간 1년 산후풍',
        chiefComplaint: '한여름에도 선풍기나 에어컨 바람을 전혀 쐬지 못하고 손목과 무릎 속이 얼음장처럼 시림 (NRS 7)',
        priorTreatments: '한약 복용 및 산후조리원 찜질 요법 시행했으나 찬바람 노출 시 시림 지속',
        clinicalExamination: '전신 적외선 체열 검사상 양측 상하지 말단 심한 저체온, C6 성상신경절 및 천골부 압통',
        novaCellApplication: '노바셀 단일 펜 도자로 HP-PCS-01 30초, HP-PCS-02 30초 주 2회 통전 (총 6회)',
        therapeuticOutcome: '3회 시술 후 손발 냉증 60% 개선, 6회 치료 후 여름철 얇은 옷 착용 및 가벼운 냉방 가능해짐.'
      }
    ]
  }
];




