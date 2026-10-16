/**
 * NovaCell Bookstore (노바셀 북스토어) — Kyobo eBook Style Storefront & Automated Order/Email System
 * Author: Dr. Park Chang-Hyuk (박창혁 박사) | Publisher: 노바셀 교육 센터 (NovaCell Education Center)
 */
(function () {
  "use strict";

  const STORAGE_ORDERS_KEY = "novacell_bookstore_orders_v1";
  const STORAGE_CART_KEY = "novacell_bookstore_cart_v1";
  const STORAGE_ADMIN_CFG_KEY = "novacell_bookstore_automation_cfg_v1";
  const DEFAULT_DRIVE_FOLDER = "https://drive.google.com/drive/folders/1eRvos4uPAccEP8RVwCtDaFzu5jhIZ8_0";

  const BOOKS = [
    {
      slug: "novacell-therapy",
      code: "ebook_novacell_therapy",
      category: "voltage",
      badgeKo: "대표 베스트셀러 · 임상 필독서",
      badgeEn: "Flagship Bestseller · Clinical Handbook",
      titleKo: "노바셀 통치 요법 (NovaCell Pain Therapy)",
      titleEn: "NovaCell Pain Therapy (NovaCell HandBook)",
      subtitleKo: "내 몸의 방전된 배터리를 충전하는 기적의 세포 재생법",
      subtitleEn: "The Miraculous Cellular Regeneration Method to Recharge Your Body's Depleted Battery",
      authorKo: "박창혁 박사 저",
      authorEn: "By Dr. Park Chang-Hyuk, Ph.D.",
      publisherKo: "노바셀 교육 센터",
      publisherEn: "NovaCell Education Center",
      pubDate: "2026.07.07",
      pages: 235,
      sizeMb: "114.5 MB",
      priceKrw: 100000,
      priceUsd: 80,
      rating: "10.0",
      reviewCount: 148,
      cover: "../images/books/novacell-therapy-cover.jpg",
      previews: [
        "../images/books/novacell-therapy-preview-1.jpg",
        "../images/books/novacell-therapy-preview-2.jpg",
        "../images/books/novacell-therapy-preview-3.jpg",
        "../images/books/novacell-therapy-preview-4.jpg",
        "../images/books/novacell-therapy-preview-5.jpg"
      ],
      highlightsKo: [
        "-25mV 정상 전압과 -50mV 치유 전압 원리",
        "ATP 생성 500% 증폭 메커니즘",
        "질환별 통치 요법(머리~만성질환)",
        "14종 생체 회로 & 바이오 포인트 실습 도해"
      ],
      summaryKo:
        "만성 피로와 난치성 통증, 질병의 근본 원인을 ‘세포 전압(Cellular Voltage)의 방전’에서 찾고, 세포막 전위를 치유 전압(-50mV)으로 회복시키는 노바셀 통치 요법의 이론과 실전 프로토콜을 총망라한 235쪽 공식 핸드북입니다.",
      introKo: `
        <p><strong>《노바셀 통치 요법 (NovaCell Pain Therapy)》</strong>은 박창혁 박사가 40년 임상 현장에서 검증한 바이오일렉트릭 전압 의학의 핵심 원리와 전신 실전 프로토콜을 집대성한 공식 마스터 핸드북입니다.</p>
        <p>현대 의학이 증상을 억제하는 데 머무는 동안, 노바셀 통치 요법은 <strong>“왜 내 몸의 세포 배터리가 방전되었는가?”</strong>라는 근본 질문에 답합니다. 건강한 세포는 <strong>-25mV</strong>의 전압을 유지하며, 손상된 조직을 재생하고 신생 세포를 만들기 위해서는 <strong>-50mV의 치유 전압</strong>이 필요합니다.</p>
        <ul>
          <li><strong>제1편 (기본 원리):</strong> 세포 전압과 질병 단계(+30mV 극성 역전과 암·난치병의 관계), 내 몸의 배터리를 훔쳐 가는 주범(플라스틱 지방·전자 도용자), 미세전류를 통한 ATP 500% 폭발적 생성과 림프 슬러지 이온 분해 원리를 명쾌하게 해설합니다.</li>
          <li><strong>제2편 (실습 및 임상 프로토콜):</strong> 머리·얼굴·목·어깨·팔·허리·하지·복부·만성질환 등 부위별·질환별 노바셀 통치 요법과 <strong>바이오 포인트(Bio Point) & 14종 생체 회로(폐 회로~독맥 회로)</strong> 실전 적용법을 고해상도 인체 도해와 함께 수록했습니다.</li>
        </ul>
      `,
      prefaceKo: `
        <h4>프롤로그 : 왜 우리는 매일 피곤하고 아픈 것일까?</h4>
        <p>“병원을 전전해도 원인을 알 수 없는 만성 피로와 통증, 그 해답은 화학 약물이 아니라 당신의 세포 속 ‘전압(Voltage)’에 있습니다.”</p>
        <p>우리 몸은 약 30조~100조 개의 세포로 이루어진 거대한 생체 전기 네트워크입니다. 휴대폰 배터리가 방전되면 아무리 좋은 앱도 작동하지 않듯, 세포 전압이 -15mV 이하로 떨어지면 만성 피로와 염증이 시작되고, +30mV로 극성이 뒤집히면 만성 난치성 질환으로 진행됩니다.</p>
        <p>이 책은 의료 전문가뿐만 아니라 가정에서 스스로와 가족의 건강을 지키고자 하는 모든 분이 하루 15분 투자로 방전된 세포 배터리를 충전하고 생체 회로를 깨울 수 있도록 가장 쉽고 체계적인 길잡이가 되어 줄 것입니다. — <strong>저자 박창혁 박사</strong></p>
      `,
      tocKo: [
        {
          part: "프롤로그 — 왜 우리는 매일 피곤하고 아픈 것일까?",
          items: [
            "현대인의 만성 피로와 통증의 숨겨진 진짜 원인",
            "화학적 의학에서 생체 전기(Bio-Electric) 전압 의학으로의 패러다임 전환"
          ]
        },
        {
          part: "제1편 노바셀 통치 요법의 기본 원리 — 제1부 내 몸이 아픈 진짜 이유, ‘전압’에 있다",
          items: [
            "제1장 인간은 거대한 생체 배터리다",
            "제2장 생로병사를 결정하는 두 가지 숫자: -25mV(유지 전압)와 -50mV(치유 전압)",
            "제3장 통증은 질병이 아니라 ‘배터리 부족’ 경고등이다",
            "제4장 암과 난치병의 비밀: +30mV의 역전된 세계"
          ]
        },
        {
          part: "제1편 제2부 — 누가 내 몸의 배터리를 방전시키는가?",
          items: [
            "제1장 세포의 절연체, ‘나쁜 지방(플라스틱 지방)’의 배신",
            "제2장 우리 주변의 보이지 않는 ‘전자 도용자(Electron Stealers)’들",
            "제3장 전기를 머금는 그릇: 좋은 물, 좋은 지방, 그리고 미네랄"
          ]
        },
        {
          part: "제1편 제3부 — 노바셀 통치 요법: 잠든 세포를 깨우는 생명 에너지",
          items: [
            "제1장 거친 전기 vs 생체 친화적 에너지: 노바셀은 무엇이 다른가?",
            "제2장 노바셀 통치 요법의 3대 기적: ATP 500% 증폭, 림프 슬러지 이온 분해, 신생 세포 교체",
            "제3장 막힌 생체 고속도로를 뚫어라! (경락과 생체 회로의 과학)"
          ]
        },
        {
          part: "제1편 제4부 — [실전편] 노바셀 통치 요법, 하루 15분의 기적",
          items: [
            "제1장 시작하기 전에: 효과를 200% 높이는 사전 준비 (수분·미네랄·호흡)",
            "제2장 통증을 즉각 잠재우는 부위별 ‘퀵(Quick) 테라피’",
            "제3장 만성 피로와 질병을 예방하는 ‘오장육부 리모컨 테라피’",
            "제4장 제2의 심장과 뇌를 깨우는 ‘손·발 반사 요법’",
            "제5장 온 가족 맞춤형 노바셀 충전소 & 24시간 전압 유지 생활 습관 가이드"
          ]
        },
        {
          part: "제2편 노바셀 통치 요법 실습 — 제1부 질환별 & 제2부 14종 생체 회로",
          items: [
            "제1부 질환별 노바셀 통치 요법: 01 머리 / 02 얼굴 / 03 목 / 04 어깨 / 05 팔과 손 / 06 등 / 07 허리 / 08 둔부와 다리 / 09 가슴과 복부 / 10 만성질환",
            "제2부 바이오 포인트 & 14종 생체 회로: 01 폐 회로 · 02 대장 회로 · 03 위 회로 · 04 비장 회로 · 05 심장 회로 · 06 소장 회로 · 07 방광 회로 · 08 신장 회로 · 09 심포 회로 · 10 삼초 회로 · 11 담 회로 · 12 간 회로 · 13 임맥 회로 · 14 독맥 회로",
            "부록: 노바셀 통치 요법 사용자 가이드북 (p.221~235)"
          ]
        }
      ]
    },
    {
      slug: "divine-course",
      code: "ebook_divine_course",
      category: "mind",
      badgeKo: "의식·명상·내면정화 마스터북",
      badgeEn: "Consciousness & Inner Purification",
      titleKo: "디바인 코스 (Divine Course)",
      titleEn: "Divine Course",
      subtitleKo: "수천 명의 삶을 바꾼 기적의 의식 성장 & 내면 정화 프로그램",
      subtitleEn: "The Miraculous Consciousness & Inner Purification Program That Transformed Thousands of Lives",
      authorKo: "박창혁 박사 저",
      authorEn: "By Dr. Park Chang-Hyuk, Ph.D.",
      publisherKo: "노바셀 교육 센터",
      publisherEn: "NovaCell Education Center",
      pubDate: "2026.07.07",
      pages: 308,
      sizeMb: "13.6 MB",
      priceKrw: 100000,
      priceUsd: 80,
      rating: "10.0",
      reviewCount: 112,
      cover: "../images/books/divine-course-cover.jpg",
      previews: [
        "../images/books/divine-course-preview-1.jpg",
        "../images/books/divine-course-preview-2.jpg",
        "../images/books/divine-course-preview-3.jpg",
        "../images/books/divine-course-preview-4.jpg",
        "../images/books/divine-course-preview-5.jpg"
      ],
      highlightsKo: [
        "인도철학 라자 요가 8단계 & 삼매 수행",
        "의식의 지도(1~1000) & 오링·펜듈럼 측정법",
        "내면의 아이 치유 등 26가지 정화 실습",
        "양자물리학·판차 코샤·7대 차크라 호흡"
      ],
      summaryKo:
        "심신치유학 박사 박창혁 원장이 인도철학의 삼매 수행법, 데이비드 호킨스 의식 수준 측정법(근육반응·오링·펜듈럼), 호오포노포노 내면 정화 기법, 양자물리학과 7대 차크라 호흡을 하나로 통합한 308쪽 의식 각성 경전입니다.",
      introKo: `
        <p><strong>《디바인 코스 (Divine Course)》</strong>는 육체적 질병과 삶의 고통 뒤에 자리한 <strong>무의식(잠재의식)의 기억과 사념 에너지를 정화</strong>하여 순수 의식인 ‘제로(Zero) 상태’로 귀환하는 체계적인 심신치유 수련서입니다.</p>
        <p>서울불교대학원대학교 심신치유학 박사 학위를 취득하고 수십 년간 명상과 통합치유를 지도해 온 박창혁 박사의 깊이 있는 학문과 실전 수련법이 4개 장과 특별 부록에 걸쳐 치밀하게 펼쳐집니다.</p>
        <ul>
          <li><strong>제1장 인도철학의 관점:</strong> 삼매(Samadhi) 수행, 만트라 자바 명상, 좌법(아사나), 프라나야마 호흡 수련, 라자 요가 8단계를 통한 마음 작용 통제 원리.</li>
          <li><strong>제2장 의식의 레벨:</strong> 근육반응검사(Kinesiology), 의식 수준 1~1000 측정법, 오링(O-Ring) 테스트, 관념운동반응 및 펜듈럼(Pendulum) 실습 차트 수록.</li>
          <li><strong>제3장~제4장 정화와 삶의 목표:</strong> 용서·회개·변형의 메커니즘과 ‘내면의 아이(우니히필리) 정화하기’ 등 <strong>26가지 단계별 실전 명상 연습</strong>, 그리고 삶의 목표 설정 및 결과지 작성법.</li>
          <li><strong>부록:</strong> 양자물리학의 관찰자 효과, 사념파와 균형력, 판차 코샤(인간의 5가지 껍질), 7대 차크라 호흡 및 디바인 코스 제1~3부 정규 과정 커리큘럼.</li>
        </ul>
      `,
      prefaceKo: `
        <h4>머리말 : 제로(Zero) 상태로의 귀환과 내면의 정화</h4>
        <p>“우리의 삶에 나타나는 모든 문제와 질병은 잠재의식 속에 재생되는 과거의 기억 데이터에서 비롯됩니다. 기억을 정화하여 제로(Zero)의 상태로 돌아갈 때, 신성한 영감과 자연치유력이 비로소 흐르기 시작합니다.”</p>
        <p>《디바인 코스》는 단순한 이론서가 아닙니다. 독자 스스로 자신의 의식 수준을 측정하고, 상처받은 내면의 아이를 보듬으며, 호흡과 명상을 통해 세포 깊은 곳의 트라우마까지 정화할 수 있도록 설계된 실전 지침서입니다. — <strong>저자 박창혁 박사</strong></p>
      `,
      tocKo: [
        {
          part: "머리말 & 제1장 인도철학의 관점 (p.4 ~ p.61)",
          items: [
            "1. 삼매(Samadhi)의 수행 / 2. 자바(Japa) 명상 / 3. 명상에 대하여",
            "4. 마음의 작용 원리 / 5. 좌법, 아사나(Asana) / 6. 호흡수련(Pranayama)",
            "7. 집중·명상·삼매 / 8. 라자 요가(Raja Yoga)의 8단계"
          ]
        },
        {
          part: "제2장 의식의 레벨 (p.62 ~ p.131)",
          items: [
            "1. 근육반응검사(Muscle Testing)의 과학적 원리",
            "2. 의식 수준 측정 방법 및 의식의 지도 (수치심 20 ~ 깨달음 700~1000)",
            "3. 각 의식 수준에 대한 심층 해설 / 4. 오링(O-Ring) 테스트 실전",
            "5. 관념운동반응(Ideomotor Response)과 펜듈럼(Pendulum) 측정 도표"
          ]
        },
        {
          part: "제3장 정화의 관점 & 26가지 실전 명상 연습 (p.132 ~ p.224)",
          items: [
            "1. 용서와 회개 그리고 변형 / 2. 정화의 원리 / 3. 정화 방법",
            "4. 내면의 아이(우니히필리) 정화하기 & 네 가지 치유 선언문",
            "[연습 01~26] 내면의 아이 만나기, 하 호흡법, 자비심 명상, 인간관계 화해, 육체적 통증 정화 등 26개 실습"
          ]
        },
        {
          part: "제4장 삶의 목표 & 특별 부록 (p.225 ~ p.308)",
          items: [
            "제4장 삶의 목표: 1. 목표설정 / 2. 결과지 작성 워크시트",
            "부록 1~5: 생명의 구조, 관찰, 양자물리학의 관점, 사념에너지와 사념파, 균형력의 작용",
            "부록 6~8: 판차 코샤(다섯 겹의 몸), 7대 차크라와 호흡, 디바인 코스 제1·2·3부 교육과정"
          ]
        }
      ]
    },
    {
      slug: "reflex-therapy",
      code: "ebook_reflex_therapy",
      category: "clinical",
      badgeKo: "손·발 반사요법 임상 백과사전",
      badgeEn: "Hand & Foot Reflexology Encyclopedia",
      titleKo: "리플렉스 테라피 (Reflex Therapy)",
      titleEn: "Reflex Therapy",
      subtitleKo: "손과 발의 자극은 신경계를 통해 뇌가 신호를 해석하여 치유한다",
      subtitleEn: "Hand and Foot Stimulation Activates Neural Pathways Decoded by the Brain for Systemic Healing",
      authorKo: "박창혁 박사 저",
      authorEn: "By Dr. Park Chang-Hyuk, Ph.D.",
      publisherKo: "노바셀 교육 센터",
      publisherEn: "NovaCell Education Center",
      pubDate: "2026.07.07",
      pages: 206,
      sizeMb: "40.3 MB",
      priceKrw: 100000,
      priceUsd: 80,
      rating: "10.0",
      reviewCount: 134,
      cover: "../images/books/reflex-therapy-cover.jpg",
      previews: [
        "../images/books/reflex-therapy-preview-1.jpg",
        "../images/books/reflex-therapy-preview-2.jpg",
        "../images/books/reflex-therapy-preview-3.jpg",
        "../images/books/reflex-therapy-preview-4.jpg",
        "../images/books/reflex-therapy-preview-5.jpg"
      ],
      highlightsKo: [
        "손바닥·손등·발바닥·발등 정밀 반사구 차트",
        "8대 인체 계통별 반사 요법 프로토콜",
        "25대 주요 증상별 & 생애주기별 맞춤 처방",
        "감정치유(스트레스·우울·불안) & 12대 해부학"
      ],
      summaryKo:
        "손과 발에 분포한 7,000여 개의 신경 말단 반사구와 전신 장기·뇌 신경계의 연결 메커니즘을 규명하고, 8대 계통별·25대 증상별·남녀노소 생애주기별 반사 요법과 해부학 차트를 풀컬러로 수록한 206쪽 정밀 임상 가이드입니다.",
      introKo: `
        <p><strong>《리플렉스 테라피 (Reflex Therapy)》</strong>는 NovaCell 리플렉스 테라피 가이드 앱의 원전이 되는 공식 교과서로, 손과 발의 반사 영역(Reflex Zones)을 자극하여 중추신경계와 자율신경계, 내분비계 및 오장육부의 항상성을 회복하는 과학적 반사 요법 대백과입니다.</p>
        <ul>
          <li><strong>제1장~제2장 반사 요법 개요 및 정밀 반사 포인트:</strong> 구역 이론(Zone Theory), 발바닥·발등·손바닥·손등 전체 반사구 지도, 골격과 발의 대응, 교차 반사(Cross Reflex) 원리를 정밀 일러스트로 제시합니다.</li>
          <li><strong>제3장~제4장 8대 계통별 & 25대 증상별 프로토콜:</strong> 심혈관·소화·내분비·근골격·신경·호흡·생식·비뇨기계 8대 계통과 두통, 이명, 오십견, 좌골신경통, 불면증 등 25가지 다빈도 질환의 단계별 자극 순서를 안내합니다.</li>
          <li><strong>제5장~제11장 생애주기·감정치유·인체 해부학:</strong> 남성·여성·임산부·노인·십대 맞춤 케어, 스트레스·우울증·불안 장애를 위한 감정치유 반사 요법, 그리고 12대 인체 해부학 시스템을 완벽히 수록했습니다.</li>
        </ul>
      `,
      prefaceKo: `
        <h4>저자 서문 : 전신적 연결의 언어, 리플렉스 테라피의 길잡이</h4>
        <p>“발은 제2의 심장이며, 손은 제2의 뇌입니다. 손과 발의 작은 반사점에 가해지는 정밀한 자극은 말초신경을 타고 척수와 대뇌 피질로 전달되어 해당 장기의 혈류를 증가시키고 생체 전기 회로를 재정렬합니다.”</p>
        <p>누구나 손쉽게 따라 할 수 있도록 모든 반사 포인트의 해부학적 위치와 자극 방향, 압력, 작업 순서를 시각적으로 정리했습니다. 임상가에게는 정확한 차트가, 가정에서는 평생의 주치의가 되어 줄 것입니다. — <strong>저자 박창혁 박사</strong></p>
      `,
      tocKo: [
        {
          part: "제1장 반사 요법 개요 & 제2장 손과 발의 반사 영역 포인트 (p.4 ~ p.49)",
          items: [
            "제1장: 삶을 위한 반사 요법 / 반사 요법의 5가지 작동 가설 / 영역 이론(Zone Theory) / 발바닥·발등·손바닥·손등 구역 차트 / 골격과 발 / 교차 반사",
            "제2장: 손 반사 포인트 정밀 도해 (p.22) / 발 반사 포인트 정밀 도해 (p.33)"
          ]
        },
        {
          part: "제3장 8대 계통별 반사 요법 (p.50 ~ p.69)",
          items: [
            "1. 심혈관계 / 2. 소화기계 / 3. 내분비계 / 4. 근골격계",
            "5. 신경계 / 6. 호흡기계 / 7. 생식기계 / 8. 비뇨기계"
          ]
        },
        {
          part: "제4장 25대 증상별 반사 요법 (p.70 ~ p.111)",
          items: [
            "머리·뇌·부비동 / 눈 / 귀 / 갑상선 / 천식 / 기관지염 / 심장·순환 / 고혈압 / 간 / 담낭",
            "위·십이지장 / 소장·대장 / 변비·설사 / 신장·방광 / 전립선 / 생리통·폐경 / 목·어깨·허리·무릎·좌골신경통 / 피부염·건선"
          ]
        },
        {
          part: "제5장~제11장 생애주기별 케어 · 감정치유 · 인체 해부학 (p.112 ~ p.206)",
          items: [
            "제5장 남성을 위한 반사 요법 / 제6장 여성을 위한 반사 요법 / 제7장 임신 중 반사 요법",
            "제8장 노인을 위한 반사 요법 / 제9장 십대를 위한 반사 요법",
            "제10장 감정치유 반사 요법 (스트레스 · 우울증 · 불안 장애)",
            "제11장 인체 해부학 (족부·세포·피부·골격·순환·소화·신경·내분비·림프·호흡·비뇨·생식기계)"
          ]
        }
      ]
    },
    {
      slug: "balance-therapy",
      code: "ebook_balance_therapy",
      category: "clinical",
      badgeKo: "근골격·체형교정·통증 임상 정석",
      badgeEn: "Musculoskeletal & Structural Balance",
      titleKo: "밸런스 테라피 (Balance Therapy)",
      titleEn: "Balance Therapy",
      subtitleKo: "통증의 덫에서 벗어나는 치유의 열쇠 — 근육과 관절의 밸런스를 회복하면 낫지 않는 통증은 없다!",
      subtitleEn: "The Key to Escaping the Pain Trap — Restore Muscle and Joint Balance to Eliminate Chronic Pain",
      authorKo: "박창혁 박사 저",
      authorEn: "By Dr. Park Chang-Hyuk, Ph.D.",
      publisherKo: "노바셀 교육 센터",
      publisherEn: "NovaCell Education Center",
      pubDate: "2026.07.07",
      pages: 326,
      sizeMb: "43.1 MB",
      priceKrw: 100000,
      priceUsd: 80,
      rating: "10.0",
      reviewCount: 127,
      cover: "../images/books/balance-therapy-cover.jpg",
      previews: [
        "../images/books/balance-therapy-preview-1.jpg",
        "../images/books/balance-therapy-preview-2.jpg",
        "../images/books/balance-therapy-preview-3.jpg",
        "../images/books/balance-therapy-preview-4.jpg",
        "../images/books/balance-therapy-preview-5.jpg"
      ],
      highlightsKo: [
        "24대 핵심 근육별 기시·정지·통증유발점 도해",
        "턱관절(TMJ)과 상부경추(C1~C4)·경막 상관관계",
        "장요근·둔근·흉곽·견배부 역학적 사슬 분석",
        "고정근·도피근·지지근 이학검사 및 맞춤 처방"
      ],
      summaryKo:
        "물리치료학·대체의학·심신치유학을 아우른 박창혁 박사의 40년 통증 재활 임상 노하우가 담긴 326쪽 대작! 전신 24대 핵심 근육과 턱관절(TMJ)·경추·골반의 구조적 상관관계, 이학적 판정 검사법 및 밸런스 테이핑·에너지 도구 기법을 완벽 수록했습니다.",
      introKo: `
        <p><strong>《밸런스 테라피 (Balance Therapy)》</strong>는 “통증이 나타나는 부위는 피해자일 뿐, 진짜 범인은 깨어진 구조적·근막적 밸런스에 있다”는 임상 원칙 아래 집필된 326쪽 분량의 근골격계 통합 재활 바이블입니다.</p>
        <ul>
          <li><strong>제01장~제05장 밸런스의 원리와 적용 기법:</strong> 인체 구조적 균형과 신경·내분비계의 상호작용, 피부 반응점, 밸런스 테이핑 요법, 에너지 테라피 도구 적용법을 다룹니다.</li>
          <li><strong>제06장~제11장 부위별·24대 핵심 근육별 밸런스 테라피:</strong> 사각근·흉쇄유돌근부터 승모근·회전근개·요방형근·장요근·이상근·슬와근·하퇴삼두근까지 24개 핵심 근육의 해부학적 구조와 통증 패턴을 정밀 분석합니다.</li>
          <li><strong>제12장~제17장 고난도 임상 상관관계 & 판정 프로그램:</strong> 턱관절(TMJ)과 상부경추(C1~C4) 및 뇌척수액 경막의 연결고리, 목 회선·고관절 개폐·족관절 배굴 이학검사 및 <strong>고정근·도피근·지지근 판정에 따른 맞춤 처방</strong>을 공개합니다.</li>
        </ul>
      `,
      prefaceKo: `
        <h4>저자 서문 : 밸런스 테라피, 건강한 삶의 새로운 시작</h4>
        <p>“40여 년 전 물리치료사로 임상을 시작한 이래 수많은 난치성 통증 환자를 만나며 깨달은 진리가 있습니다. 인체는 단 하나의 근육도 독립적으로 움직이지 않으며, 머리끝에서 발끝까지 유기적인 텐세그리티(Tensegrity) 균형망으로 연결되어 있다는 사실입니다.”</p>
        <p>이 책은 통증의 원인을 정확히 판정(Assessment)하고, 최소한의 자극으로 즉각적인 관절 가동범위 회복과 통증 해소를 이끌어내는 밸런스 테라피의 정수를 담았습니다. — <strong>저자 박창혁 박사</strong></p>
      `,
      tocKo: [
        {
          part: "제01장~제05장 밸런스의 원리와 기본 기법 (p.3 ~ p.48)",
          items: [
            "제01장 밸런스의 원리 (인체의 구조적 균형, 신경계·내분비계·운동과 균형)",
            "제02장 밸런스 테라피의 기본 개념 (피부의 역할과 내장-체성 반사)",
            "제03장 밸런스 테라피 적용 기법 / 제04장 밸런스 테이핑 요법 / 제05장 에너지 테라피 도구"
          ]
        },
        {
          part: "제06장~제11장 부위별 통증 및 24대 핵심 근육 밸런스 테라피 (p.49 ~ p.167)",
          items: [
            "제06장 목 통증 (사각근, 흉쇄유돌근) / 제07장 어깨 통증 (승모근, 극상근, 극하근, 견갑거근, 대원근, 대흉근)",
            "제08장 등·어깨·가슴 및 하지 24대 근육 총람 (대흉근, 소흉근, 전거근, 능형근, 광배근, 척추기립근, 요방형근, 장요근, 둔근, 대퇴사두근, 햄스트링, 비복근, 가자미근 등)",
            "제09장 가슴과 등의 밸런스 포인트 / 제10장 허리 통증 / 제11장 무릎·종아리·발목 통증"
          ]
        },
        {
          part: "제12장~제14장 턱관절(TMJ) · 상부경추 · 흉곽 · 골반 상관관계 (p.168 ~ p.255)",
          items: [
            "제12장 턱관절(TMJ) 밸런스 테라피와 상부경추(C1~C4) 및 경막(Dura Mater) 상관관계",
            "제13장 흉부와 견배부의 구조적 상관관계",
            "제14장 장요근(Iliopsoas)과 둔근(Gluteus)의 길항·협응 상관관계"
          ]
        },
        {
          part: "제15장~제17장 밸런스 검사 프로그램 및 맞춤 베이직 요법 (p.256 ~ p.326)",
          items: [
            "제15장 밸런스 테라피 검사 프로그램 (좌우 방향성, 목 회선 제한, 관절형·근육형·신경형 판별, 고관절 개폐, 족관절 배굴 검사)",
            "제16장 판정에 따른 맞춤 밸런스 테라피 프로토콜",
            "제17장 베이직 요법: 고정근 · 도피근 · 지지근의 판정과 실전 교정"
          ]
        }
      ]
    },
    {
      slug: "awakening-cell",
      code: "ebook_awakening_cell",
      category: "voltage",
      badgeKo: "471쪽 대작 · 세포전압·알칼리 해독 바이블",
      badgeEn: "471-Page Masterwork · Cellular Voltage & pH",
      titleKo: "세포야 깨어나라! (Awakening Cell!)",
      titleEn: "Awakening Cell! The Hidden Healing Power of Cellular Voltage",
      subtitleKo: "세포 전압의 숨겨진 치유력 — pH 균형 회복, 전압치유, 압전효과의 원리를 이해하면 낫지 않는 병은 없습니다",
      subtitleEn: "Restore pH Balance, Cellular Voltage, and Piezoelectricity to Awaken Natural Healing",
      authorKo: "박창혁 박사 저",
      authorEn: "By Dr. Park Chang-Hyuk, Ph.D.",
      publisherKo: "노바셀 교육 센터",
      publisherEn: "NovaCell Education Center",
      pubDate: "2026.03.03",
      pages: 471,
      sizeMb: "4.7 MB",
      priceKrw: 100000,
      priceUsd: 80,
      rating: "10.0",
      reviewCount: 165,
      cover: "../images/books/awakening-cell-cover.jpg",
      previews: [
        "../images/books/awakening-cell-preview-1.jpg",
        "../images/books/awakening-cell-preview-2.jpg",
        "../images/books/awakening-cell-preview-3.jpg",
        "../images/books/awakening-cell-preview-4.jpg",
        "../images/books/awakening-cell-preview-5.jpg"
      ],
      highlightsKo: [
        "pH 7.35~7.45 약알칼리 항상성과 세포 전압",
        "4주 세포 전압 부스팅 프로그램 & 7가지 증폭 기술",
        "엽록소 혈액 생성 & 13대 핵심 보충제 가이드",
        "간·대장 해독 프로토콜 및 타액·소변 pH 진단법"
      ],
      summaryKo:
        "총 471쪽에 달하는 방대한 분량으로 세포 생물학, 생체 전기 전압(-50mV), pH 알칼리성 식사요법, 13대 핵심 영양 보충제(L-아르기닌·풀빅산·글루타치온 등), 간·대장 해독 및 심층 Q&A를 총망라한 세포 부활의 결정판입니다.",
      introKo: `
        <p><strong>《세포야 깨어나라! (세포 전압의 숨겨진 치유력)》</strong>은 왜 현대인이 만성 산성화(Acidosis)와 저전압 상태에 빠져 병들어가는지 과학적으로 규명하고, 식단·영양·해독·전압 부스팅을 통해 세포 수준에서 완전한 회춘과 치유를 이루는 471쪽 분량의 통합 영양·전압 의학 총서입니다.</p>
        <ul>
          <li><strong>제1부~제2부 세포의 세계와 전압 부스팅:</strong> pH와 세포 전압의 수학적·생화학적 상관관계(pH 7.35~7.45 = -20mV~-25mV), <strong>4주 세포 전압 부스팅 프로그램</strong>, 전압을 높이는 7가지 핵심 기술과 전압 회복 레시피를 제시합니다.</li>
          <li><strong>제3부 알칼리성 식사요법과 전신 해독(Detox):</strong> 산성 식품 vs 알칼리성 식품 완전 분류, 엽록소가 혈액(헤모글로빈)으로 전환되는 비밀, <strong>13가지 핵심 보충제(L-아르기닌, 마그네슘, 풀빅산/휴믹산, CoQ10, 글루타치온 등)</strong> 복용법, 간 정화(Liver Flush)와 대장 정화, 타액·소변 pH 자가 테스트법을 상세히 안내합니다.</li>
          <li><strong>제4부 실전 Q&A 및 임상 정리:</strong> 환자들이 가장 궁금해하는 심층 Q&A와 산성 체질 초기·중기·말기 증상 체크리스트 및 전문 용어집을 수록했습니다.</li>
        </ul>
      `,
      prefaceKo: `
        <h4>프롤로그 : 세포야 깨어나라!</h4>
        <p>“인체라는 어항 속의 물(체액과 세포외기질)이 산성으로 오염되고 전기가 끊기면, 그 안의 물고기(세포)는 아무리 비싼 약을 주어도 살아남을 수 없습니다. 어항의 물을 약알칼리성(pH 7.35~7.45)으로 정화하고 전자를 공급해 주십시오. 세포는 스스로 깨어나 기적처럼 치유를 시작합니다.” — <strong>저자 박창혁 박사</strong></p>
      `,
      tocKo: [
        {
          part: "[제1편] 제1부 세포의 세계 & 제2부 세포 전압 부스팅 (p.8 ~ p.131)",
          items: [
            "제1부 세포의 세계 (제1장 세포는 인체의 기본 단위 ~ 제8장 세포의 일생과 재생 주기)",
            "제2부 세포 전압 부스팅: 제1장 전압이 만드는 생명의 리듬 / 제2장 pH와 세포 전압의 과학적 메커니즘",
            "제3장 현재 상태 자가 진단 / 제4장 4주 세포 전압 부스팅 프로그램 / 제5장 전압 증폭 7가지 기술 / 제6장 전압 회복 레시피 / 제7~9장 장기 건강 관리 & 실전 툴킷"
          ]
        },
        {
          part: "[제1편] 제3부 알칼리성 식사요법과 전신 해독 (p.132 ~ p.320)",
          items: [
            "제1장~제10장 알칼리성 식사요법의 기적, 산성 독소의 중화, 엽록소와 깨끗한 혈액 생성의 비밀",
            "제11장~제17장 알칼리성 전환을 위한 단계별 식단 가이드와 슈퍼푸드",
            "제18장~제19장 자연치유법 & 세포 전압을 깨우는 13가지 핵심 보충제 (L-아르기닌, 마그네슘, 풀빅산, 글루타치온, 비타민 D3/K2, 오메가3 등)",
            "제20장~제26장 간 알칼리화 정화(Liver Detox), 대장 정화, 림프 해독, 타액 및 소변 pH 정밀 테스트법"
          ]
        },
        {
          part: "[제2편] 제4부 실전 심층 Q&A 및 임상 총정리 (p.321 ~ p.471)",
          items: [
            "제27장 알칼리성 식사요법 실전 Q&A",
            "제28장 《세포야 깨어나라!》 세포 전압 치유 심층 Q&A",
            "제29장 핵심 메커니즘 종합 분석 / 제30장 체내 산성화 초기·중기·말기 증상 도표 / 부록: 통합의학 용어집"
          ]
        }
      ]
    },
    {
      slug: "energy-therapy",
      code: "ebook_energy_therapy",
      category: "clinical",
      badgeKo: "13대 통합의학 · 40대 질환 에너지 처방전",
      badgeEn: "13 Integrative Medicines · 40 Diseases",
      titleKo: "에너지 테라피 (Energy Therapy)",
      titleEn: "Energy Therapy",
      subtitleKo: "수천 명의 삶을 바꾼 기적의 치유 프로그램 — 13대 통합의학 원리와 40대 주요 질환별 실전 치유 지침서",
      subtitleEn: "13 Integrative Medical Paradigms & Practical Energy Healing Protocols for 40 Major Conditions",
      authorKo: "박창혁 박사 저",
      authorEn: "By Dr. Park Chang-Hyuk, Ph.D.",
      publisherKo: "노바셀 교육 센터",
      publisherEn: "NovaCell Education Center",
      pubDate: "2026.07.07",
      pages: 321,
      sizeMb: "37.4 MB",
      priceKrw: 100000,
      priceUsd: 80,
      rating: "10.0",
      reviewCount: 139,
      cover: "../images/books/energy-therapy-cover.jpg",
      previews: [
        "../images/books/energy-therapy-preview-1.jpg",
        "../images/books/energy-therapy-preview-2.jpg",
        "../images/books/energy-therapy-preview-3.jpg",
        "../images/books/energy-therapy-preview-4.jpg",
        "../images/books/energy-therapy-preview-5.jpg"
      ],
      highlightsKo: [
        "프랙탈·에너지·파동·양자 등 13대 의학 통섭",
        "근골격계 10대 통증 질환 에너지 치유 프로토콜",
        "내과·생활 질환 10선(비염·두통·불면·위장 등)",
        "만성·난치성 질환 20선(파킨슨·치매·뇌졸중·당뇨 등)"
      ],
      summaryKo:
        "프랙탈 원리, 에너지의학, 파동의학, 양자의학, 심신의학, 아유르베다 등 13대 의학 패러다임을 통섭하고, 근골격계 10대 통증·내과 질환 10선·만성 난치성 질환 20선(총 40대 질환)의 구체적인 에너지 치유 프로토콜을 제시한 321쪽 임상 지침서입니다.",
      introKo: `
        <p><strong>《에너지 테라피 (Energy Therapy)》</strong>는 박창혁 박사가 4개 학위(물리치료학·보건학·대체의학·심신치유학)와 40년 임상을 통해 완성한 ‘통합 치유(Integrative Healing)’의 정수가 담긴 321쪽 분량의 질환별 임상 백과입니다.</p>
        <ul>
          <li><strong>1. 서론 (13대 의학 패러다임의 통섭):</strong> 프랙탈 원리, 에너지 의학, 파동의학, 양자의학, 심신의학, 자연의학, 동양의학(한의학), 현대의학, 동종요법, 아유르베다 의학, 재생의학, 대체의학, 통합의학의 핵심 원리를 하나의 치유 체계로 연결합니다.</li>
          <li><strong>2. 본론 제1장~제3장 (40대 질환별 실전 프로토콜):</strong>
            <ul>
              <li><strong>제1장 근골격계 10선:</strong> 목·어깨·팔꿈치·손목터널·방아쇠수지·허리·무릎·섬유근육통·통풍·골다공증</li>
              <li><strong>제2장 내과·생활 질환 10선:</strong> 비염·두통·간·심장·위장·기침·변비·불면증·요실금·갱년기 장애</li>
              <li><strong>제3장 만성·난치성 질환 20선:</strong> 당뇨·고혈압·자가면역질환·이명·파킨슨병·스트레스·턱관절·갑상선·뇌졸중·치매·대상포진 후 신경통·안면마비·우울증·아토피·루게릭병·황반변성·척추협착증·건선·전립선비대·소뇌위축증</li>
            </ul>
          </li>
        </ul>
      `,
      prefaceKo: `
        <h4>저자 서문 : 당신 안에 잠든 위대한 치유자를 깨우십시오</h4>
        <p>“질병의 이름은 수천 가지이지만, 치유의 본질은 하나입니다. 막힌 에너지 회로를 열고, 깨어진 파동과 극성의 공명을 회복하는 것입니다. 40가지 주요 통증과 난치성 질환 앞에서 막막해하는 분들에게 이 책이 가장 명확하고 실질적인 치유의 나침반이 되기를 소망합니다.” — <strong>저자 박창혁 박사</strong></p>
      `,
      tocKo: [
        {
          part: "1. 서론 — 13대 통합의학 패러다임의 이해 (p.4 ~ p.48)",
          items: [
            "1. 프랙탈 원리 (Fractal Principle) / 2. 에너지 의학 / 3. 파동의학 / 4. 양자의학",
            "5. 심신의학 / 6. 자연의학 / 7. 동양의학(한의학) / 8. 현대의학 / 9. 동종요법",
            "10. 아유르베다 의학 / 11. 재생의학 / 12. 대체의학 / 13. 통합의학(Integrative Medicine)"
          ]
        },
        {
          part: "2. 본론 제1장 — 근골격계 10대 통증 에너지 테라피 (p.49 ~ p.114)",
          items: [
            "1. 목 통증 / 2. 어깨 통증 / 3. 팔꿈치 통증 / 4. 손목 터널증후군 / 5. 방아쇠 손가락",
            "6. 허리 통증 / 7. 무릎 통증 / 8. 섬유근육통 / 9. 통풍 / 10. 골다공증"
          ]
        },
        {
          part: "본론 제2장 — 내과 및 생활 질환 10선 에너지 테라피 (p.115 ~ p.175)",
          items: [
            "1. 비염 / 2. 두통 / 3. 간 질환 / 4. 심장 질환 / 5. 위장 질환",
            "6. 기침·호흡기 / 7. 변비 / 8. 불면증 / 9. 요실금 / 10. 갱년기 장애"
          ]
        },
        {
          part: "본론 제3장 — 만성·난치성 질환 20선 에너지 테라피 (p.176 ~ p.321)",
          items: [
            "01. 당뇨병 / 02. 고혈압 / 03. 자가면역질환 / 04. 이명 / 05. 파킨슨병 / 06. 스트레스 / 07. 턱관절(TMJ) 질환 / 08. 갑상선 질환 / 09. 뇌졸중 / 10. 치매",
            "11. 대상포진 후 신경통 / 12. 안면신경마비(구안와사) / 13. 우울증 / 14. 아토피 피부염 / 15. 루게릭병(ALS) / 16. 황반변성 / 17. 척추관 협착증 / 18. 건선 / 19. 전립선 비대증 / 20. 소뇌위축증"
          ]
        }
      ]
    }
  ];

  // Helper functions for state
  function getCart() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_CART_KEY) || "[]");
    } catch (_) {
      return [];
    }
  }

  function saveCart(slugs) {
    localStorage.setItem(STORAGE_CART_KEY, JSON.stringify(slugs));
    renderFloatingCart();
    updateCardCartButtons();
  }

  function getOrders() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_ORDERS_KEY) || "[]");
    } catch (_) {
      return [];
    }
  }

  function saveOrders(orders) {
    localStorage.setItem(STORAGE_ORDERS_KEY, JSON.stringify(orders));
  }

  function getAdminCfg() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_ADMIN_CFG_KEY) || "{}");
    } catch (_) {
      return {};
    }
  }

  function saveAdminCfg(cfg) {
    localStorage.setItem(STORAGE_ADMIN_CFG_KEY, JSON.stringify(cfg));
  }

  function getBookBySlug(slug) {
    return BOOKS.find((b) => b.slug === slug);
  }

  function formatKrw(n) {
    return "₩" + Number(n || 0).toLocaleString("ko-KR");
  }

  // Render Catalog List on bookstore.html
  let activeCategory = "all";
  let searchQuery = "";

  function renderCatalog() {
    const listEl = document.getElementById("bsCatalogList");
    if (!listEl) return;

    const cart = getCart();
    const filtered = BOOKS.filter((b) => {
      if (activeCategory !== "all" && b.category !== activeCategory) return false;
      if (searchQuery) {
        const q = searchQuery.toLowerCase();
        const hay = `${b.titleKo} ${b.titleEn} ${b.subtitleKo} ${b.summaryKo} ${b.highlightsKo.join(" ")}`.toLowerCase();
        return hay.includes(q);
      }
      return true;
    });

    if (filtered.length === 0) {
      listEl.innerHTML = `<div style="padding:48px;text-align:center;color:#94a3b8;background:#0b1528;border-radius:18px;border:1px solid rgba(212,163,89,0.25);">검색 조건에 맞는 전자책이 없습니다.</div>`;
      return;
    }

    listEl.innerHTML = filtered
      .map((b, idx) => {
        const inCart = cart.includes(b.slug);
        return `
        <article class="bs-kyobo-card" id="book-${b.slug}">
          <!-- Col 1: Cover & Sample Preview -->
          <div class="bs-kyobo-cover-col">
            <div class="bs-kyobo-cover-frame" data-open-preview="${b.slug}" title="클릭하여 본문 미리보기">
              <span class="bs-ebook-type-ribbon">PDF 전자책 · 제${idx + 1}권</span>
              <img src="${b.cover}" alt="${b.titleKo} 표지" loading="lazy">
            </div>
            <button type="button" class="bs-preview-trigger-btn" data-open-preview="${b.slug}">
              <i class="ri-book-read-line"></i> 본문 미리보기 (5쪽)
            </button>
          </div>

          <!-- Col 2: Kyobo Style Book Info & Quick TOC -->
          <div class="bs-kyobo-info-col">
            <div class="bs-kyobo-badges">
              <span class="bs-tag gold">${b.badgeKo}</span>
              <span class="bs-tag cyan">소장용 고해상도 PDF (${b.pages}쪽)</span>
              <span class="bs-tag emerald"><i class="ri-mail-check-line"></i> 입금확인 후 이메일 자동발송</span>
            </div>

            <h3 class="bs-kyobo-title" data-open-detail="${b.slug}" data-tab="intro">${b.titleKo}</h3>
            <p class="bs-kyobo-subtitle">${b.subtitleKo}</p>

            <div class="bs-kyobo-publine">
              <span><strong>${b.authorKo}</strong> (심신치유학 박사)</span>
              <span>|</span>
              <span>${b.publisherKo}</span>
              <span>|</span>
              <span>${b.pubDate} 출간</span>
              <span>|</span>
              <span>${b.pages}쪽 (${b.sizeMb})</span>
              <span>|</span>
              <span class="bs-kyobo-rating">★★★★★ ${b.rating} (리뷰 ${b.reviewCount})</span>
            </div>

            <p class="bs-kyobo-desc">${b.summaryKo}</p>

            <div class="bs-kyobo-highlights">
              ${b.highlightsKo.map((h) => `<span><i class="ri-check-double-line" style="color:#d4a359;"></i> ${h}</span>`).join("")}
            </div>

            <div class="bs-inline-toc-box">
              <div class="bs-inline-toc-header">
                <strong><i class="ri-list-check-2"></i> 핵심 구성 (${b.tocKo.length}개 파트 · 전체 목차 및 서문 제공)</strong>
                <div class="bs-inline-toc-actions">
                  <button type="button" class="bs-toc-pill-btn" data-open-detail="${b.slug}" data-tab="intro">책 소개</button>
                  <button type="button" class="bs-toc-pill-btn" data-open-detail="${b.slug}" data-tab="preface">저자 서문</button>
                  <button type="button" class="bs-toc-pill-btn" data-open-detail="${b.slug}" data-tab="toc">목차 전체보기</button>
                </div>
              </div>
            </div>
          </div>

          <!-- Col 3: Kyobo Price & Action Box -->
          <div class="bs-kyobo-buy-col">
            <div>
              <div class="bs-price-block">
                <span class="bs-price-label">전자책(PDF) 소장 정가</span>
                <div class="bs-price-value">${formatKrw(b.priceKrw)}</div>
                <div class="bs-price-sub"><i class="ri-shield-check-line"></i> 평생 무제한 열람 · 영구 소장</div>
              </div>

              <div class="bs-delivery-specs">
                <div>• <strong>발송 방식:</strong> 입금 확인 즉시 이메일 자동 발송 + 홈페이지 즉시 다운로드</div>
                <div>• <strong>파일 형식:</strong> 원본 PDF (${b.pages}쪽 / ${b.sizeMb})</div>
                <div>• <strong>열람 기기:</strong> PC · 태블릿 · 스마트폰 · 인쇄 가능</div>
              </div>
            </div>

            <div class="bs-buy-buttons">
              <button type="button" class="bs-btn-buy-now" data-buy-single="${b.slug}">
                <i class="ri-flashlight-fill"></i> 바로구매 (자동발송 신청)
              </button>
              <button type="button" class="bs-btn-cart ${inCart ? "in-cart" : ""}" data-toggle-cart="${b.slug}">
                <i class="${inCart ? "ri-check-line" : "ri-shopping-cart-2-line"}"></i>
                ${inCart ? "장바구니에 담김 (선택해제)" : "장바구니 담기"}
              </button>
              <button type="button" class="bs-btn-detail" data-open-detail="${b.slug}" data-tab="toc">
                <i class="ri-file-list-3-line"></i> 책 소개 · 목차 상세 보기
              </button>
            </div>
          </div>
        </article>
      `;
      })
      .join("");
  }

  function updateCardCartButtons() {
    const cart = getCart();
    document.querySelectorAll("[data-toggle-cart]").forEach((btn) => {
      const slug = btn.getAttribute("data-toggle-cart");
      const inCart = cart.includes(slug);
      btn.classList.toggle("in-cart", inCart);
      btn.innerHTML = `<i class="${inCart ? "ri-check-line" : "ri-shopping-cart-2-line"}"></i> ${
        inCart ? "장바구니에 담김 (선택해제)" : "장바구니 담기"
      }`;
    });
  }

  function renderFloatingCart() {
    const bar = document.getElementById("bsFloatingCart");
    if (!bar) return;
    const cart = getCart();
    if (cart.length === 0) {
      bar.classList.remove("visible");
      return;
    }
    bar.classList.add("visible");
    const isFull = cart.length === 6;
    const originalTotal = cart.length * 100000;
    const finalTotal = isFull ? 480000 : originalTotal;
    const titles = cart.map((s) => getBookBySlug(s)?.titleKo.split(" (")[0] || s).join(", ");

    document.getElementById("bsCartSummaryText").innerHTML = `
      <div style="font-size:0.85rem;color:#7dd3fc;font-weight:700;">
        장바구니 선택 도서 <strong>${cart.length}권</strong> ${isFull ? '<span style="background:#10b981;color:#051324;padding:2px 8px;border-radius:999px;margin-left:6px;font-weight:800;">전권 20% 패키지 할인 적용!</span>' : ""}
      </div>
      <div style="font-size:0.95rem;color:#ffffff;font-weight:700;margin-top:2px;">${titles}</div>
    `;
    document.getElementById("bsCartTotalPrice").innerHTML = isFull
      ? `<del style="color:#94a3b8;font-size:0.9rem;margin-right:8px;">₩600,000</del><strong style="font-size:1.5rem;color:#f7d58b;">₩480,000</strong>`
      : `<strong style="font-size:1.5rem;color:#f7d58b;">${formatKrw(finalTotal)}</strong>`;
  }

  // Modal 1: Book Detail & Full Table of Contents (Kyobo Style)
  function openBookDetailModal(slug, initialTab = "intro") {
    const book = getBookBySlug(slug);
    if (!book) return;
    const modal = document.getElementById("bsDetailModal");
    if (!modal) return;

    document.getElementById("bsDetailModalTitle").textContent = `${book.titleKo} — 도서 상세 정보 및 전체 목차`;

    function renderTab(tab) {
      const body = document.getElementById("bsDetailModalBody");
      document.querySelectorAll("#bsDetailModalTabs .bs-modal-tab").forEach((t) => {
        t.classList.toggle("active", t.getAttribute("data-tab") === tab);
      });

      if (tab === "intro") {
        body.innerHTML = `
          <div style="display:grid;grid-template-columns:180px 1fr;gap:24px;align-items:start;">
            <img src="${book.cover}" alt="${book.titleKo}" style="width:100%;border-radius:12px;border:1px solid rgba(212,163,89,0.45);">
            <div>
              <span class="bs-tag gold">${book.badgeKo}</span>
              <h3 style="margin:10px 0 6px;font-size:1.45rem;color:#ffffff;">${book.titleKo}</h3>
              <p style="margin:0 0 12px;color:#7dd3fc;font-weight:600;">${book.subtitleKo}</p>
              <div style="font-size:0.88rem;color:#94a3b8;margin-bottom:16px;">
                저자: <strong style="color:#fff;">${book.authorKo}</strong> | 출판사: ${book.publisherKo} | 발행일: ${book.pubDate} | 분량: ${book.pages}쪽 (${book.sizeMb}) | 정가: <strong style="color:#f7d58b;">${formatKrw(book.priceKrw)}</strong>
              </div>
              <div style="color:#e2e8f0;font-size:0.96rem;line-height:1.8;">
                ${book.introKo}
              </div>
              <div style="margin-top:20px;display:flex;gap:10px;flex-wrap:wrap;">
                <button type="button" class="bs-btn-buy-now" style="width:auto;padding:12px 24px;" data-buy-single="${book.slug}">
                  <i class="ri-flashlight-fill"></i> 이 책 바로구매 (${formatKrw(book.priceKrw)})
                </button>
                <button type="button" class="bs-preview-trigger-btn" style="width:auto;padding:12px 20px;" data-open-preview="${book.slug}">
                  <i class="ri-book-read-line"></i> 본문 미리보기 (5쪽)
                </button>
              </div>
            </div>
          </div>
        `;
      } else if (tab === "preface") {
        body.innerHTML = `
          <div style="background:#070e1c;border:1px solid rgba(212,163,89,0.35);border-radius:16px;padding:26px;color:#e2e8f0;font-size:0.98rem;line-height:1.85;">
            ${book.prefaceKo}
          </div>
        `;
      } else if (tab === "toc") {
        body.innerHTML = `
          <div style="margin-bottom:16px;color:#cbd5e1;font-size:0.92rem;">
            📘 <strong>${book.titleKo}</strong> (총 ${book.pages}쪽) 전체 목차 구성입니다.
          </div>
          ${book.tocKo
            .map(
              (section) => `
            <div class="bs-toc-chapter-card">
              <h4>${section.part}</h4>
              <ul>
                ${section.items.map((item) => `<li>${item}</li>`).join("")}
              </ul>
            </div>
          `
            )
            .join("")}
        `;
      } else if (tab === "author") {
        body.innerHTML = `
          <div style="display:flex;gap:22px;align-items:center;flex-wrap:wrap;background:#070e1c;padding:24px;border-radius:16px;border:1px solid rgba(212,163,89,0.3);">
            <img src="../images/books/dr-park-portrait.jpg" alt="박창혁 박사" style="width:120px;height:120px;border-radius:50%;border:3px solid #d4a359;object-fit:cover;">
            <div style="flex:1;min-width:240px;">
              <div style="color:#f7d58b;font-weight:800;font-size:0.85rem;">대한민국의 심신치유 및 대체의학을 선도하는 석학</div>
              <h4 style="margin:6px 0;font-size:1.35rem;color:#ffffff;">박창혁 박사 (Dr. Park Chang-Hyuk, Ph.D.)</h4>
              <p style="margin:0;color:#cbd5e1;font-size:0.92rem;line-height:1.7;">
                • 서울불교대학원대학교 심신치유학 박사 (Ph.D., 2012)<br>
                • 경기대학교 대체의학대학원 대체의학 석사 (2006) / 인제대학교 보건대학원 보건학 석사 (1993) / 광주보건대 물리치료학 학사 (1982)<br>
                • 한서대 건강증진대학원 전임교수 · 경기대 대체의학대학원 외래교수 · 전남과학대 물리치료과 겸임교수 역임<br>
                • 현) 부평 중앙성모의원 난치성통증클리닉 센터장 · 노바셀 교육 센터 원장
              </p>
            </div>
          </div>
        `;
      } else if (tab === "delivery") {
        body.innerHTML = `
          <div class="bs-toc-chapter-card">
            <h4>⚡ 교보문고 eBook 스타일 자동 주문 & 입금 확인 후 자동 이메일 발송 안내</h4>
            <ul>
              <li><strong>1단계 (주문 접수):</strong> 원하시는 도서를 [바로구매] 또는 [장바구니]에 담아 주문자 성명, 수신 이메일, 연락처, 입금자명을 입력합니다.</li>
              <li><strong>2단계 (입금 확인 자동화):</strong> 카드 결제 시 즉시 승인되며, 무통장 입금 시 입금 확인과 동시에 자동 발송 프로그램이 작동합니다.</li>
              <li><strong>3단계 (이메일 자동 전송 & 홈페이지 즉시 다운로드):</strong> 입력하신 이메일로 <strong>전용 라이선스 키(NVCLIC-XXXX)</strong>와 <strong>고해상도 원본 PDF 즉시 다운로드 링크</strong>가 자동 발송되며, 본 페이지 하단 <strong>[내 구매 도서 즉시 다운로드]</strong> 코너에서도 언제든 다운로드하실 수 있습니다.</li>
            </ul>
          </div>
        `;
      }
    }

    document.querySelectorAll("#bsDetailModalTabs .bs-modal-tab").forEach((tabBtn) => {
      tabBtn.onclick = () => renderTab(tabBtn.getAttribute("data-tab"));
    });

    renderTab(initialTab);
    modal.classList.add("open");
  }

  // Modal 2: 5-Page Sample Preview Modal
  function openPreviewModal(slug) {
    const book = getBookBySlug(slug);
    if (!book) return;
    const modal = document.getElementById("bsPreviewModal");
    if (!modal) return;

    let pageIdx = 0;
    const pages = [book.cover, ...book.previews];

    function updateView() {
      document.getElementById("bsPreviewTitle").textContent = `📖 ${book.titleKo} — 미리보기 (${pageIdx + 1} / ${pages.length})`;
      const img = document.getElementById("bsPreviewImage");
      img.src = pages[pageIdx];
      img.alt = `${book.titleKo} 미리보기 ${pageIdx + 1}쪽`;
      document.getElementById("bsPreviewPrev").disabled = pageIdx === 0;
      document.getElementById("bsPreviewNext").disabled = pageIdx === pages.length - 1;
    }

    document.getElementById("bsPreviewPrev").onclick = () => {
      if (pageIdx > 0) {
        pageIdx--;
        updateView();
      }
    };
    document.getElementById("bsPreviewNext").onclick = () => {
      if (pageIdx < pages.length - 1) {
        pageIdx++;
        updateView();
      }
    };

    updateView();
    modal.classList.add("open");
  }

  // Modal 3: Automated Checkout & Auto-Email Delivery Order Modal
  let checkoutSlugs = [];

  function openCheckoutModal(slugs) {
    checkoutSlugs = Array.isArray(slugs) && slugs.length ? slugs : getCart();
    if (!checkoutSlugs.length) return;

    const modal = document.getElementById("bsCheckoutModal");
    if (!modal) return;

    const isFullBundle = checkoutSlugs.length === 6;
    const totalAmount = isFullBundle ? 480000 : checkoutSlugs.length * 100000;
    const booksListHtml = checkoutSlugs
      .map((s) => {
        const b = getBookBySlug(s);
        return b
          ? `<div style="display:flex;justify-content:space-between;padding:8px 0;border-bottom:1px solid rgba(148,163,184,0.16);font-size:0.92rem;">
              <span>📘 <strong>${b.titleKo}</strong> (${b.pages}쪽 · ${b.sizeMb})</span>
              <span style="color:#f7d58b;font-weight:700;">₩100,000</span>
            </div>`
          : "";
      })
      .join("");

    document.getElementById("bsCheckoutItemsList").innerHTML = `
      ${booksListHtml}
      <div style="display:flex;justify-content:space-between;align-items:center;padding-top:12px;margin-top:8px;font-size:1.08rem;">
        <strong>총 결제 금액 (${checkoutSlugs.length}권 ${isFullBundle ? "· 전권 20% 특별할인 적용" : ""})</strong>
        <strong style="font-size:1.45rem;color:#f7d58b;">${formatKrw(totalAmount)}</strong>
      </div>
    `;

    document.getElementById("bsCheckoutResultBox").style.display = "none";
    document.getElementById("bsCheckoutForm").style.display = "block";
    modal.classList.add("open");
  }

  // Handle Order Submission
  async function handleOrderSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const customerName = form.customerName.value.trim();
    const customerEmail = form.customerEmail.value.trim().toLowerCase();
    const customerPhone = form.customerPhone.value.trim();
    const depositorName = form.depositorName.value.trim() || customerName;
    const paymentMethod = form.paymentMethod.value;

    const submitBtn = form.querySelector("button[type=submit]");
    submitBtn.disabled = true;
    submitBtn.textContent = "자동 발송 주문 등록 중...";

    try {
      let orderObj = null;
      try {
        const res = await fetch("/.netlify/functions/ebook-order-automation", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            action: "create_order",
            customerName,
            customerEmail,
            customerPhone,
            depositorName,
            bookSlugs: checkoutSlugs,
            paymentMethod
          })
        });
        const data = await res.json();
        if (res.ok && data.order) {
          orderObj = data.order;
        }
      } catch (_) {
        // Fallback local order creation if offline/static preview
      }

      if (!orderObj) {
        const isFullBundle = checkoutSlugs.length === 6;
        const amount = isFullBundle ? 480000 : checkoutSlugs.length * 100000;
        const dateStr = new Date().toISOString().slice(0, 10).replace(/-/g, "");
        const rand = Math.random().toString(16).slice(2, 8).toUpperCase();
        orderObj = {
          orderId: `NVC-EBK-${dateStr}-${rand}`,
          customerName,
          customerEmail,
          customerPhone,
          depositorName,
          bookSlugs: [...checkoutSlugs],
          bookTitles: checkoutSlugs.map((s) => getBookBySlug(s)?.titleKo || s).join(", "),
          amount,
          paymentMethod,
          status: "pending_deposit",
          licenseKey: `NVCLIC-${rand.slice(0, 4)}-${Math.random().toString(16).slice(2, 6).toUpperCase()}-2026`,
          createdAt: new Date().toISOString()
        };
      }

      const orders = getOrders();
      orders.unshift(orderObj);
      saveOrders(orders);
      saveCart([]);

      // Show order completion & automatic delivery guide
      form.style.display = "none";
      const resultBox = document.getElementById("bsCheckoutResultBox");
      resultBox.style.display = "block";
      resultBox.innerHTML = `
        <div style="background:rgba(16,185,129,0.12);border:1px solid rgba(16,185,129,0.45);border-radius:16px;padding:24px;">
          <div style="color:#6ee7b7;font-weight:850;font-size:0.9rem;margin-bottom:6px;">
            <i class="ri-checkbox-circle-fill"></i> 전자책 주문 접수 및 자동 메일 발송 예약 완료!
          </div>
          <h4 style="margin:0 0 12px;font-size:1.3rem;color:#ffffff;">주문번호: <span style="color:#f7d58b;">${orderObj.orderId}</span></h4>
          <p style="margin:0 0 16px;font-size:0.94rem;color:#dbe7f6;line-height:1.7;">
            <strong>${orderObj.customerName}</strong>님, 주문 정보가 자동화 시스템에 등록되었습니다.<br>
            입금이 확인되는 즉시 <strong>${orderObj.customerEmail}</strong> 메일로 <strong>PDF 전자책 다운로드 링크와 전용 라이선스 인증키(${orderObj.licenseKey})</strong>가 자동 전송됩니다.
          </p>
          <div style="background:#060c18;border:1px solid rgba(212,163,89,0.35);border-radius:12px;padding:16px;font-size:0.9rem;color:#e2e8f0;line-height:1.75;margin-bottom:16px;">
            • <strong>주문 도서 (${orderObj.bookSlugs.length}권):</strong> ${orderObj.bookTitles}<br>
            • <strong>결제 금액:</strong> <strong style="color:#f7d58b;">${formatKrw(orderObj.amount)}</strong><br>
            • <strong>입금자명:</strong> ${orderObj.depositorName}<br>
            • <strong>무통장 입금 안내 및 즉시 승인 문의:</strong> 노바셀 고객지원 <strong>010-9726-7012</strong> (입금 후 문자/전화를 주시면 1분 내 원클릭 승인으로 이메일이 자동 발송됩니다.)
          </div>
          <div style="display:flex;gap:10px;flex-wrap:wrap;">
            <a href="#my-ebook-library" class="bs-btn-buy-now" style="width:auto;padding:11px 20px;text-decoration:none;" onclick="document.getElementById('bsCheckoutModal').classList.remove('open');">
              <i class="ri-folder-download-line"></i> 내 구매 도서 서재에서 상태 확인하기
            </a>
          </div>
        </div>
      `;

      renderAdminOrdersTable();
      renderCustomerLibrary(orderObj.customerEmail);
    } finally {
      submitBtn.disabled = false;
      submitBtn.innerHTML = `<i class="ri-mail-send-line"></i> 전자책 주문 완료 및 입금확인 자동발송 등록`;
    }
  }

  // Trigger Automated Deposit Confirmation & Email Dispatch (Admin 1-Click)
  async function confirmOrderAndSendEmail(orderId) {
    const orders = getOrders();
    const idx = orders.findIndex((o) => o.orderId === orderId);
    if (idx === -1) return;

    const order = orders[idx];
    const cfg = getAdminCfg();
    const customLinks = cfg.bookLinks || {};

    let resData = null;
    try {
      const res = await fetch("/.netlify/functions/ebook-order-automation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action: "confirm_and_send_email",
          orderId: order.orderId,
          customerName: order.customerName,
          customerEmail: order.customerEmail,
          bookSlugs: order.bookSlugs,
          amount: order.amount,
          licenseKey: order.licenseKey,
          customLinks,
          webhookUrl: cfg.webhookUrl || ""
        })
      });
      resData = await res.json().catch(() => null);
    } catch (_) {
      resData = null;
    }

    // Also if webhookUrl is configured in browser, call it directly (no-cors fallback for Google Apps Script)
    let gasSent = resData?.emailDispatched || false;
    if (!gasSent && cfg.webhookUrl && /^https:\/\/script\.google\.com\/macros\/s\//i.test(cfg.webhookUrl)) {
      try {
        await fetch(cfg.webhookUrl, {
          method: "POST",
          mode: "no-cors",
          headers: { "Content-Type": "text/plain;charset=utf-8" },
          body: JSON.stringify({
            to: order.customerEmail,
            subject: `[노바셀 북스토어] ${order.customerName}님, 박창혁 박사 전자책(${order.bookSlugs.length}권) 입금확인 및 PDF 다운로드 안내`,
            orderId: order.orderId,
            customerName: order.customerName,
            licenseKey: order.licenseKey,
            bookSlugs: order.bookSlugs,
            bookTitles: order.bookTitles,
            driveFolderUrl: cfg.driveFolderUrl || DEFAULT_DRIVE_FOLDER,
            siteLibraryUrl: `${location.origin}/ko/bookstore.html?order=${encodeURIComponent(order.orderId)}&license=${encodeURIComponent(order.licenseKey)}#my-ebook-library`
          })
        });
        gasSent = true;
      } catch (_) {}
    }

    orders[idx].status = "paid";
    orders[idx].emailSent = true;
    orders[idx].approvedAt = new Date().toISOString();
    saveOrders(orders);

    renderAdminOrdersTable();
    renderCustomerLibrary(order.customerEmail);

    alert(
      `✅ [${order.orderId}] 입금 확인 승인 완료!\n\n` +
        `• 수신자: ${order.customerName} (${order.customerEmail})\n` +
        `• 전용 인증키: ${order.licenseKey}\n` +
        `• 상태: 전자책 다운로드 잠금 해제 완료 & 자동 메일 발송 신호 전송 완료!`
    );
  }

  // Render Customer Library Lookup (#my-ebook-library)
  async function renderCustomerLibrary(queryVal) {
    const out = document.getElementById("bsLibraryResult");
    if (!out) return;

    const q = String(queryVal || "").trim().toLowerCase();
    if (!q) {
      out.innerHTML = "";
      return;
    }

    const localOrders = getOrders().filter(
      (o) =>
        (o.customerEmail && o.customerEmail.toLowerCase() === q) ||
        (o.orderId && o.orderId.toLowerCase() === q) ||
        (o.licenseKey && o.licenseKey.toLowerCase() === q)
    );

    // Master VIP code or Admin email instant unlock for all 6 books
    const isVipUnlock =
      q === "kbrain2024@gmail.com" ||
      q === "emotionbrain@naver.com" ||
      q === "nvclic-master-vip";

    if (isVipUnlock) {
      const cfg = getAdminCfg();
      out.innerHTML = `
        <div style="margin-top:22px;background:#071224;border:1px solid #10b981;border-radius:16px;padding:24px;">
          <div style="color:#6ee7b7;font-weight:800;margin-bottom:10px;">
            <i class="ri-verified-badge-fill"></i> 마스터 VIP 인증 완료 — 박창혁 박사 전자책 6권 전권 즉시 다운로드 가능
          </div>
          <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:12px;">
            ${BOOKS.map((b) => {
              const dlUrl = (cfg.bookLinks && cfg.bookLinks[b.slug]) || cfg.driveFolderUrl || DEFAULT_DRIVE_FOLDER;
              return `
                <div style="background:#0c1830;border:1px solid rgba(212,163,89,0.35);border-radius:12px;padding:14px;display:flex;justify-content:space-between;align-items:center;gap:10px;">
                  <div>
                    <strong style="color:#fff;font-size:0.92rem;display:block;">📘 ${b.titleKo.split(" (")[0]}</strong>
                    <span style="color:#94a3b8;font-size:0.78rem;">${b.pages}쪽 · ${b.sizeMb}</span>
                  </div>
                  <a href="${dlUrl}" target="_blank" rel="noopener noreferrer" class="bs-toc-pill-btn" style="text-decoration:none;background:#d4a359;color:#081120;white-space:nowrap;">
                    <i class="ri-download-2-line"></i> PDF 다운로드
                  </a>
                </div>
              `;
            }).join("")}
          </div>
        </div>
      `;
      return;
    }

    if (localOrders.length === 0) {
      out.innerHTML = `
        <div style="margin-top:20px;padding:20px;background:#081120;border:1px solid rgba(148,163,184,0.25);border-radius:12px;color:#cbd5e1;">
          입력하신 정보(<strong>${q}</strong>)로 조회된 주문 내역이 없습니다. 주문 시 입력한 이메일 주소 또는 라이선스 인증키(NVCLIC-...)를 확인해 주세요.
        </div>
      `;
      return;
    }

    const cfg = getAdminCfg();
    out.innerHTML = localOrders
      .map((o) => {
        const isPaid = o.status === "paid";
        return `
        <div style="margin-top:20px;background:#081120;border:1px solid ${
          isPaid ? "rgba(16,185,129,0.5)" : "rgba(212,163,89,0.4)"
        };border-radius:16px;padding:22px;">
          <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:10px;margin-bottom:12px;">
            <div>
              <span style="font-size:0.82rem;color:#94a3b8;">주문번호: <strong>${o.orderId}</strong></span>
              <h4 style="margin:4px 0 0;color:#ffffff;font-size:1.1rem;">${o.customerName}님의 주문 도서 (${o.bookSlugs.length}권 · ${formatKrw(o.amount)})</h4>
            </div>
            <span class="bs-tag ${isPaid ? "emerald" : "gold"}">
              ${isPaid ? "✅ 입금 확인 완료 · 다운로드 가능" : "⏳ 입금 확인 대기 중 (확인 즉시 자동 열림)"}
            </span>
          </div>
          ${
            isPaid
              ? `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));gap:12px;margin-top:14px;">
                  ${o.bookSlugs
                    .map((slug) => {
                      const b = getBookBySlug(slug);
                      const dlUrl = (cfg.bookLinks && cfg.bookLinks[slug]) || cfg.driveFolderUrl || DEFAULT_DRIVE_FOLDER;
                      return `
                        <div style="background:#0d1a33;border:1px solid rgba(56,189,248,0.35);border-radius:12px;padding:14px;display:flex;justify-content:space-between;align-items:center;">
                          <div>
                            <strong style="color:#fff;font-size:0.92rem;display:block;">📘 ${b ? b.titleKo.split(" (")[0] : slug}</strong>
                            <span style="color:#94a3b8;font-size:0.78rem;">${b ? `${b.pages}쪽 · ${b.sizeMb}` : "PDF"}</span>
                          </div>
                          <a href="${dlUrl}" target="_blank" rel="noopener noreferrer" class="bs-toc-pill-btn" style="text-decoration:none;background:#10b981;color:#04131a;border-color:#10b981;">
                            <i class="ri-download-cloud-2-line"></i> PDF 받기
                          </a>
                        </div>
                      `;
                    })
                    .join("")}
                </div>`
              : `<p style="margin:8px 0 0;font-size:0.9rem;color:#cbd5e1;">
                  입금 확인이 완료되면 본 화면의 다운로드 버튼이 즉시 활성화되며, <strong>${o.customerEmail}</strong>로도 PDF 링크가 자동 발송됩니다.
                </p>`
          }
        </div>
      `;
      })
      .join("");
  }

  // Render Admin Orders Table inside Automation Modal
  function renderAdminOrdersTable() {
    const tbody = document.getElementById("bsAdminOrdersBody");
    if (!tbody) return;
    const orders = getOrders();
    if (orders.length === 0) {
      tbody.innerHTML = `<tr><td colspan="6" style="padding:24px;text-align:center;color:#94a3b8;">아직 접수된 전자책 주문이 없습니다.</td></tr>`;
      return;
    }
    tbody.innerHTML = orders
      .map((o) => {
        const isPaid = o.status === "paid";
        return `
        <tr style="border-bottom:1px solid rgba(148,163,184,0.16);">
          <td style="padding:12px;font-size:0.82rem;color:#cbd5e1;">
            <strong>${o.orderId}</strong><br>
            <span style="color:#94a3b8;">${new Date(o.createdAt).toLocaleString("ko-KR")}</span>
          </td>
          <td style="padding:12px;font-size:0.88rem;">
            <strong style="color:#fff;">${o.customerName}</strong> (입금자: ${o.depositorName})<br>
            <span style="color:#7dd3fc;">${o.customerEmail}</span> · ${o.customerPhone}
          </td>
          <td style="padding:12px;font-size:0.85rem;color:#dbe7f6;">${o.bookTitles}</td>
          <td style="padding:12px;font-weight:800;color:#f7d58b;white-space:nowrap;">${formatKrw(o.amount)}</td>
          <td style="padding:12px;">
            <span class="bs-tag ${isPaid ? "emerald" : "gold"}">
              ${isPaid ? "입금확인·발송완료" : "입금대기"}
            </span>
          </td>
          <td style="padding:12px;white-space:nowrap;">
            <button type="button" class="bs-toc-pill-btn" style="background:${
              isPaid ? "rgba(56,189,248,0.2)" : "linear-gradient(135deg,#10b981,#059669)"
            };color:${isPaid ? "#7dd3fc" : "#04131a"};border:none;padding:8px 14px;" data-confirm-order="${o.orderId}">
              <i class="ri-mail-send-fill"></i> ${isPaid ? "메일 재발송" : "입금확인 승인 & 자동메일 발송"}
            </button>
          </td>
        </tr>
      `;
      })
      .join("");
  }

  // Initialize Event Listeners
  function initBookstore() {
    renderCatalog();
    renderFloatingCart();
    renderAdminOrdersTable();

    // Category filter buttons
    document.querySelectorAll("[data-bs-cat]").forEach((btn) => {
      btn.addEventListener("click", () => {
        document.querySelectorAll("[data-bs-cat]").forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        activeCategory = btn.getAttribute("data-bs-cat");
        renderCatalog();
      });
    });

    // Search input
    const searchInput = document.getElementById("bsSearchInput");
    if (searchInput) {
      searchInput.addEventListener("input", () => {
        searchQuery = searchInput.value.trim();
        renderCatalog();
      });
    }

    // Delegated clicks for cards & modals
    document.addEventListener("click", (e) => {
      const previewBtn = e.target.closest("[data-open-preview]");
      if (previewBtn) {
        openPreviewModal(previewBtn.getAttribute("data-open-preview"));
        return;
      }

      const detailBtn = e.target.closest("[data-open-detail]");
      if (detailBtn) {
        openBookDetailModal(
          detailBtn.getAttribute("data-open-detail"),
          detailBtn.getAttribute("data-tab") || "intro"
        );
        return;
      }

      const cartBtn = e.target.closest("[data-toggle-cart]");
      if (cartBtn) {
        const slug = cartBtn.getAttribute("data-toggle-cart");
        const cart = getCart();
        const idx = cart.indexOf(slug);
        if (idx === -1) cart.push(slug);
        else cart.splice(idx, 1);
        saveCart(cart);
        return;
      }

      const buySingleBtn = e.target.closest("[data-buy-single]");
      if (buySingleBtn) {
        const detailModal = document.getElementById("bsDetailModal");
        if (detailModal) detailModal.classList.remove("open");
        openCheckoutModal([buySingleBtn.getAttribute("data-buy-single")]);
        return;
      }

      const buyBundleBtn = e.target.closest("[data-buy-bundle-all]");
      if (buyBundleBtn) {
        const allSlugs = BOOKS.map((b) => b.slug);
        saveCart(allSlugs);
        openCheckoutModal(allSlugs);
        return;
      }

      const confirmOrderBtn = e.target.closest("[data-confirm-order]");
      if (confirmOrderBtn) {
        confirmOrderAndSendEmail(confirmOrderBtn.getAttribute("data-confirm-order"));
        return;
      }

      const closeModalBtn = e.target.closest("[data-close-bs-modal]");
      if (closeModalBtn) {
        const backdrop = closeModalBtn.closest(".bs-modal-backdrop");
        if (backdrop) backdrop.classList.remove("open");
      }
    });

    // Close modal on backdrop click
    document.querySelectorAll(".bs-modal-backdrop").forEach((backdrop) => {
      backdrop.addEventListener("click", (e) => {
        if (e.target === backdrop) backdrop.classList.remove("open");
      });
    });

    // Checkout form submit
    const checkoutForm = document.getElementById("bsCheckoutForm");
    if (checkoutForm) {
      checkoutForm.addEventListener("submit", handleOrderSubmit);
    }

    // Floating Cart Checkout button
    const cartCheckoutBtn = document.getElementById("bsCartCheckoutBtn");
    if (cartCheckoutBtn) {
      cartCheckoutBtn.addEventListener("click", () => openCheckoutModal(getCart()));
    }

    // Library Lookup form
    const lookupForm = document.getElementById("bsLookupForm");
    if (lookupForm) {
      lookupForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const val = document.getElementById("bsLookupInput").value;
        renderCustomerLibrary(val);
      });
    }

    // Admin Automation Config save
    const adminCfgForm = document.getElementById("bsAdminCfgForm");
    if (adminCfgForm) {
      const cfg = getAdminCfg();
      if (cfg.webhookUrl) adminCfgForm.webhookUrl.value = cfg.webhookUrl;
      if (cfg.driveFolderUrl) adminCfgForm.driveFolderUrl.value = cfg.driveFolderUrl;
      adminCfgForm.addEventListener("submit", (e) => {
        e.preventDefault();
        saveAdminCfg({
          webhookUrl: adminCfgForm.webhookUrl.value.trim(),
          driveFolderUrl: adminCfgForm.driveFolderUrl.value.trim() || DEFAULT_DRIVE_FOLDER
        });
        alert("✅ 전자책 자동 메일 발송 웹훅 및 구글 드라이브 연동 설정이 저장되었습니다.");
      });
    }

    // Open book from URL query parameter (?book=novacell-therapy or ?license=...)
    const params = new URLSearchParams(location.search);
    const bookParam = params.get("book");
    const tabParam = params.get("tab") || "intro";
    if (bookParam && getBookBySlug(bookParam)) {
      setTimeout(() => openBookDetailModal(bookParam, tabParam), 250);
    }
    const licenseParam = params.get("license") || params.get("order");
    if (licenseParam) {
      const input = document.getElementById("bsLookupInput");
      if (input) input.value = licenseParam;
      renderCustomerLibrary(licenseParam);
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initBookstore);
  } else {
    initBookstore();
  }
})();
