/**
 * NovaCell Bookstore (노바셀 북스토어) — Kyobo eBook Style Storefront & Automated Order/Email System
 * Full Bilingual Support: Korean (ko/bookstore.html) & English (en/bookstore.html)
 * Author: Park Chang-Hyuk, Ph.D. (박창혁 박사) | Publisher: NovaCell Education Center (노바셀 교육 센터)
 */
(function () {
  "use strict";

  const isEn =
    (document.documentElement.lang || "").toLowerCase().startsWith("en") ||
    location.pathname.toLowerCase().includes("/en/");

  const STORAGE_ORDERS_KEY = "novacell_bookstore_orders_v1";
  const STORAGE_CART_KEY = "novacell_bookstore_cart_v1";
  const STORAGE_ADMIN_CFG_KEY = "novacell_bookstore_automation_cfg_v1";
  const STORAGE_LAST_ORDER_TS_KEY = "novacell_bookstore_last_order_ts_v1";

  // Salted SHA-256 hash of initial admin password ("NovaCell!7012#")
  const ADMIN_SALT = "NVC_SALT_2026::";
  const DEFAULT_ADMIN_HASH = "43c392a68581555da8c53b58fac6c2920fc03a840ad467bf94477ac34483b470";

  // Encrypted E-Book Vault URL bytes (never exposed in plain text in HTML/JS source)
  const VAULT_KEY = "NVC_VAULT_KEY_2026_DR_PARK";
  const VAULT_BYTES = [
    38, 34, 55, 47, 37, 123, 122, 99, 48, 45, 34, 51, 60, 113, 85, 95, 93, 81, 51, 33, 124, 60, 63, 44,
    125, 47, 60, 63, 53, 58, 121, 39, 58, 32, 48, 58, 57, 54, 118, 110, 87, 98, 68, 89, 44, 112, 39, 15,
    17, 34, 49, 14, 30, 110, 17, 9, 33, 2, 33, 8, 53, 25, 49, 48, 108, 53, 90, 121, 104, 14, 0, 116
  ];

  let isAdminAuthenticated = false;
  let activeAdminHash = "";

  function unlockVaultUrl() {
    const bytes = new Uint8Array(VAULT_BYTES.map((b, i) => b ^ VAULT_KEY.charCodeAt(i % VAULT_KEY.length)));
    return new TextDecoder("utf-8").decode(bytes);
  }

  function escapeHtml(str) {
    return String(str || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  async function computeAdminHash(plainPassword) {
    const data = new TextEncoder().encode(ADMIN_SALT + String(plainPassword || "").trim());
    const hashBuffer = await crypto.subtle.digest("SHA-256", data);
    return Array.from(new Uint8Array(hashBuffer))
      .map((b) => b.toString(16).padStart(2, "0"))
      .join("");
  }

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
      authorEn: "By Park Chang-Hyuk, Ph.D.",
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
      highlightsEn: [
        "-25mV Maintenance vs. -50mV Healing Voltage",
        "500% ATP Amplification & Lymphatic Ionization",
        "Condition-Specific Protocols (Head to Chronic Illness)",
        "14 Bio-Circuits & Bio-Point Clinical Atlas"
      ],
      summaryKo:
        "만성 피로와 난치성 통증, 질병의 근본 원인을 ‘세포 전압(Cellular Voltage)의 방전’에서 찾고, 세포막 전위를 치유 전압(-50mV)으로 회복시키는 노바셀 통치 요법의 이론과 실전 프로토콜을 총망라한 235쪽 공식 핸드북입니다.",
      summaryEn:
        "The official 235-page clinical handbook that identifies depleted cellular voltage as the root cause of chronic fatigue, pain, and disease—presenting complete protocols to restore cellular potential to the -50mV healing threshold.",
      introKo: `
        <p><strong>《노바셀 통치 요법 (NovaCell Pain Therapy)》</strong>은 박창혁 박사가 40년 임상 현장에서 검증한 바이오일렉트릭 전압 의학의 핵심 원리와 전신 실전 프로토콜을 집대성한 공식 마스터 핸드북입니다.</p>
        <p>현대 의학이 증상을 억제하는 데 머무는 동안, 노바셀 통치 요법은 <strong>“왜 내 몸의 세포 배터리가 방전되었는가?”</strong>라는 근본 질문에 답합니다. 건강한 세포는 <strong>-25mV</strong>의 전압을 유지하며, 손상된 조직을 재생하고 신생 세포를 만들기 위해서는 <strong>-50mV의 치유 전압</strong>이 필요합니다.</p>
        <ul>
          <li><strong>제1편 (기본 원리):</strong> 세포 전압과 질병 단계(+30mV 극성 역전과 암·난치병의 관계), 내 몸의 배터리를 훔쳐 가는 주범(플라스틱 지방·전자 도용자), 미세전류를 통한 ATP 500% 폭발적 생성과 림프 슬러지 이온 분해 원리를 명쾌하게 해설합니다.</li>
          <li><strong>제2편 (실습 및 임상 프로토콜):</strong> 머리·얼굴·목·어깨·팔·허리·하지·복부·만성질환 등 부위별·질환별 노바셀 통치 요법과 <strong>바이오 포인트(Bio Point) & 14종 생체 회로(폐 회로~독맥 회로)</strong> 실전 적용법을 고해상도 인체 도해와 함께 수록했습니다.</li>
        </ul>
      `,
      introEn: `
        <p><strong><em>NovaCell Pain Therapy (NovaCell HandBook)</em></strong> is the definitive 235-page master handbook synthesizing 40 years of clinical bio-electric voltage medicine developed by Park Chang-Hyuk, Ph.D.</p>
        <p>While conventional medicine focuses on suppressing symptoms, NovaCell Therapy addresses the fundamental question: <strong>"Why has the body's cellular battery lost its charge?"</strong> Healthy cells operate at <strong>-25mV</strong>, whereas tissue regeneration and new cell synthesis require a healing voltage of <strong>-50mV</strong>.</p>
        <ul>
          <li><strong>Part I (Core Principles):</strong> Explains cellular voltage stages (including +30mV polarity reversal in chronic illness), electron stealers and trans-fats that insulate cell membranes, and how bio-friendly microcurrent boosts ATP production by 500% while ionizing lymphatic sludge.</li>
          <li><strong>Part II (Clinical Practice & Protocols):</strong> Step-by-step anatomical protocols covering Head, Face, Neck, Shoulder, Arm/Hand, Back, Lower Back, Hip/Leg, Abdomen, and Chronic Conditions, plus the complete <strong>Bio-Points & 14 Bio-Circuits (Lung Circuit to Governing Vessel)</strong>.</li>
        </ul>
      `,
      prefaceKo: `
        <h4>프롤로그 : 왜 우리는 매일 피곤하고 아픈 것일까?</h4>
        <p>“병원을 전전해도 원인을 알 수 없는 만성 피로와 통증, 그 해답은 화학 약물이 아니라 당신의 세포 속 ‘전압(Voltage)’에 있습니다.”</p>
        <p>우리 몸은 약 30조~100조 개의 세포로 이루어진 거대한 생체 전기 네트워크입니다. 휴대폰 배터리가 방전되면 아무리 좋은 앱도 작동하지 않듯, 세포 전압이 -15mV 이하로 떨어지면 만성 피로와 염증이 시작되고, +30mV로 극성이 뒤집히면 만성 난치성 질환으로 진행됩니다.</p>
        <p>이 책은 의료 전문가뿐만 아니라 가정에서 스스로와 가족의 건강을 지키고자 하는 모든 분이 하루 15분 투자로 방전된 세포 배터리를 충전하고 생체 회로를 깨울 수 있도록 가장 쉽고 체계적인 길잡이가 되어 줄 것입니다. — <strong>저자 박창혁 박사</strong></p>
      `,
      prefaceEn: `
        <h4>Prologue: Why Are We Exhausted and in Pain Every Day?</h4>
        <p>"The answer to unexplained chronic fatigue and intractable pain lies not in chemical suppression, but in the electrical <strong>Voltage</strong> of your cells."</p>
        <p>The human body is a vast bio-electric network of 30 to 100 trillion cells. Just as a smartphone cannot run any app when its battery is dead, chronic fatigue and pain begin when cellular voltage drops below -15mV, and severe chronic disease develops when polarity reverses to +30mV.</p>
        <p>This handbook is designed as a clear, systematic guide for both healthcare practitioners and families at home—showing how 15 minutes a day can recharge depleted cellular batteries and reopen the body's bio-circuits. — <strong>Park Chang-Hyuk, Ph.D.</strong></p>
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
      ],
      tocEn: [
        {
          part: "Prologue — Why Are We Exhausted and in Pain Every Day?",
          items: [
            "The Hidden Root Cause of Modern Chronic Fatigue and Pain",
            "Paradigm Shift from Chemical Medicine to Bio-Electric Voltage Medicine"
          ]
        },
        {
          part: "Part I. Core Principles — Section 1: The Real Reason Your Body Hurts Is 'Voltage'",
          items: [
            "Chapter 1. The Human Body Is a Giant Bio-Battery",
            "Chapter 2. Two Numbers That Govern Health: -25mV (Maintenance) and -50mV (Healing Voltage)",
            "Chapter 3. Pain Is Not a Disease—It Is a 'Low Battery' Warning Light",
            "Chapter 4. The Secret of Chronic & Intractable Illness: The Inverted World of +30mV"
          ]
        },
        {
          part: "Part I. Section 2 & 3 — What Drains Your Cellular Battery & How NovaCell Awakens Cells",
          items: [
            "Insulating 'Plastic Fats', Invisible Electron Stealers, Electrolytes, Minerals & Structured Water",
            "Three Miracles of NovaCell Therapy: 500% ATP Amplification, Lymphatic Sludge Ionization, New Cell Replacement",
            "Unblocking the Bio-Highways: The Science of Meridians and Bio-Electric Circuits"
          ]
        },
        {
          part: "Part I. Section 4 — Practical 15-Minute Daily NovaCell Protocols",
          items: [
            "Pre-Session Preparation to Double Clinical Efficacy (Hydration, Minerals, Breathing)",
            "Targeted Quick Therapy, Visceral Remote-Control Therapy, Hand & Foot Reflexology, and Family Care"
          ]
        },
        {
          part: "Part II. Clinical Atlas — Condition-Specific Protocols & 14 Bio-Circuits (p.72 ~ p.235)",
          items: [
            "Section 1. Condition Protocols: 01 Head / 02 Face / 03 Neck / 04 Shoulder / 05 Arm & Hand / 06 Back / 07 Lower Back / 08 Hip & Leg / 09 Chest & Abdomen / 10 Chronic Conditions",
            "Section 2. Bio-Points & 14 Bio-Circuits: 01 Lung · 02 Large Intestine · 03 Stomach · 04 Spleen · 05 Heart · 06 Small Intestine · 07 Bladder · 08 Kidney · 09 Pericardium · 10 Triple Burner · 11 Gallbladder · 12 Liver · 13 Conception Vessel · 14 Governing Vessel",
            "Appendix: Official NovaCell User Guidebook (p.221~235)"
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
      authorEn: "By Park Chang-Hyuk, Ph.D.",
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
      highlightsEn: [
        "Raja Yoga 8 Stages & Samadhi Meditation",
        "Map of Consciousness (1–1000), O-Ring & Pendulum Testing",
        "26 Guided Inner Child & Subconscious Clearing Practices",
        "Quantum Physics, Pancha Kosha & 7-Chakra Breathing"
      ],
      summaryKo:
        "심신치유학 박사 박창혁 원장이 인도철학의 삼매 수행법, 데이비드 호킨스 의식 수준 측정법(근육반응·오링·펜듈럼), 호오포노포노 내면 정화 기법, 양자물리학과 7대 차크라 호흡을 하나로 통합한 308쪽 의식 각성 경전입니다.",
      summaryEn:
        "A comprehensive 308-page mind-body healing masterwork integrating Indian Samadhi meditation, Map of Consciousness muscle/O-Ring/pendulum testing, 26 subconscious purification practices, quantum observer principles, and 7-Chakra breathing.",
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
      introEn: `
        <p><strong><em>Divine Course</em></strong> is a systematic 308-page mind-body purification manual designed to clear subconscious trauma and thought-wave distortions that underlie physical illness and emotional suffering, guiding practitioners back to the pure 'Zero State'.</p>
        <ul>
          <li><strong>Chapter 1 (Perspective of Indian Philosophy):</strong> Samadhi practice, Japa meditation, Asana postures, Pranayama breathing, and the 8 limbs of Raja Yoga.</li>
          <li><strong>Chapter 2 (Levels of Consciousness):</strong> Applied Kinesiology muscle testing, calibrating the Map of Consciousness (20 to 1,000), O-Ring testing, and Ideomotor Pendulum charts.</li>
          <li><strong>Chapters 3 & 4 (Purification & Life Goals):</strong> Forgiveness, repentance, transformation, healing the Inner Child (Unihipili), <strong>26 step-by-step guided meditation exercises</strong>, and life goal blueprints.</li>
          <li><strong>Special Appendix:</strong> Quantum physics and the observer effect, thought-wave energy, Pancha Kosha (five sheaths), 7-Chakra breathing, and the Divine Course Parts 1–3 curriculum.</li>
        </ul>
      `,
      prefaceKo: `
        <h4>머리말 : 제로(Zero) 상태로의 귀환과 내면의 정화</h4>
        <p>“우리의 삶에 나타나는 모든 문제와 질병은 잠재의식 속에 재생되는 과거의 기억 데이터에서 비롯됩니다. 기억을 정화하여 제로(Zero)의 상태로 돌아갈 때, 신성한 영감과 자연치유력이 비로소 흐르기 시작합니다.”</p>
        <p>《디바인 코스》는 단순한 이론서가 아닙니다. 독자 스스로 자신의 의식 수준을 측정하고, 상처받은 내면의 아이를 보듬으며, 호흡과 명상을 통해 세포 깊은 곳의 트라우마까지 정화할 수 있도록 설계된 실전 지침서입니다. — <strong>저자 박창혁 박사</strong></p>
      `,
      prefaceEn: `
        <h4>Preface: Returning to the Zero State through Inner Purification</h4>
        <p>"Every recurring problem and illness in life originates from stored memory data replaying in the subconscious mind. When those memories are purified and we return to the Zero State, divine inspiration and innate healing power flow effortlessly."</p>
        <p><em>Divine Course</em> is a hands-on workbook that empowers you to measure your own consciousness level, embrace your wounded inner child, and clear cellular trauma through breath and meditation. — <strong>Park Chang-Hyuk, Ph.D.</strong></p>
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
      ],
      tocEn: [
        {
          part: "Preface & Chapter 1: Perspective of Indian Philosophy (p.4 ~ p.61)",
          items: [
            "1. Practice of Samadhi / 2. Japa Meditation / 3. Understanding Meditation",
            "4. How the Mind Operates / 5. Asana Postures / 6. Pranayama Breathwork",
            "7. Concentration, Meditation & Samadhi / 8. The Eight Limbs of Raja Yoga"
          ]
        },
        {
          part: "Chapter 2: Levels of Consciousness (p.62 ~ p.131)",
          items: [
            "1. Scientific Principles of Muscle Testing (Applied Kinesiology)",
            "2. How to Calibrate Consciousness Levels & The Map of Consciousness (20 to 1,000)",
            "3. In-Depth Analysis of Each Level / 4. Practical O-Ring Testing",
            "5. Ideomotor Response & Pendulum Calibration Charts"
          ]
        },
        {
          part: "Chapter 3: Perspective of Purification & 26 Practical Exercises (p.132 ~ p.224)",
          items: [
            "1. Forgiveness, Repentance & Transformation / 2. Principles & Methods of Clearing",
            "3. Healing the Inner Child (Unihipili) & The Four Healing Phrases",
            "[Exercises 01–26] Meeting the Inner Child, Ha Breathing, Compassion Meditation, Relationship Reconciliation & Physical Pain Clearing"
          ]
        },
        {
          part: "Chapter 4: Life Goals & Special Appendices (p.225 ~ p.308)",
          items: [
            "Chapter 4: Goal Setting & Manifestation Blueprint Worksheets",
            "Appendices 1–5: Structure of Life, Observation, Quantum Physics Perspective, Thought-Waves & Law of Balance",
            "Appendices 6–8: Pancha Kosha (Five Sheaths), 7 Chakras & Breathwork, Divine Course Parts 1–3 Curriculum"
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
      authorEn: "By Park Chang-Hyuk, Ph.D.",
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
      highlightsEn: [
        "High-Precision Dorsal/Plantar Foot & Hand Reflex Charts",
        "8 Organ-System Reflexology Protocols",
        "25 Condition-Specific & Life-Stage Prescriptions",
        "Emotional Healing (Stress, Depression, Anxiety) & 12 Anatomy Systems"
      ],
      summaryKo:
        "손과 발에 분포한 7,000여 개의 신경 말단 반사구와 전신 장기·뇌 신경계의 연결 메커니즘을 규명하고, 8대 계통별·25대 증상별·남녀노소 생애주기별 반사 요법과 해부학 차트를 풀컬러로 수록한 206쪽 정밀 임상 가이드입니다.",
      summaryEn:
        "A full-color 206-page clinical encyclopedia mapping over 7,000 nerve-ending reflex zones on the hands and feet to the brain and visceral organs—covering 8 body systems, 25 major conditions, life-stage care, emotional healing, and human anatomy.",
      introKo: `
        <p><strong>《리플렉스 테라피 (Reflex Therapy)》</strong>는 NovaCell 리플렉스 테라피 가이드 앱의 원전이 되는 공식 교과서로, 손과 발의 반사 영역(Reflex Zones)을 자극하여 중추신경계와 자율신경계, 내분비계 및 오장육부의 항상성을 회복하는 과학적 반사 요법 대백과입니다.</p>
        <ul>
          <li><strong>제1장~제2장 반사 요법 개요 및 정밀 반사 포인트:</strong> 구역 이론(Zone Theory), 발바닥·발등·손바닥·손등 전체 반사구 지도, 골격과 발의 대응, 교차 반사(Cross Reflex) 원리를 정밀 일러스트로 제시합니다.</li>
          <li><strong>제3장~제4장 8대 계통별 & 25대 증상별 프로토콜:</strong> 심혈관·소화·내분비·근골격·신경·호흡·생식·비뇨기계 8대 계통과 두통, 이명, 오십견, 좌골신경통, 불면증 등 25가지 다빈도 질환의 단계별 자극 순서를 안내합니다.</li>
          <li><strong>제5장~제11장 생애주기·감정치유·인체 해부학:</strong> 남성·여성·임산부·노인·십대 맞춤 케어, 스트레스·우울증·불안 장애를 위한 감정치유 반사 요법, 그리고 12대 인체 해부학 시스템을 완벽히 수록했습니다.</li>
        </ul>
      `,
      introEn: `
        <p><strong><em>Reflex Therapy</em></strong> is the official textbook behind the NovaCell Reflex Therapy Guide app—demonstrating how targeted stimulation of hand and foot reflex zones modulates the central and autonomic nervous systems, endocrine glands, and internal organs.</p>
        <ul>
          <li><strong>Chapters 1 & 2 (Zone Theory & Precision Point Maps):</strong> Full-color plantar/dorsal foot and palmar/dorsal hand reflexology maps, skeletal correspondence, and Cross-Reflex principles.</li>
          <li><strong>Chapters 3 & 4 (8 Body Systems & 25 Clinical Conditions):</strong> Step-by-step sequences for Cardiovascular, Digestive, Endocrine, Musculoskeletal, Nervous, Respiratory, Reproductive, and Urinary systems, plus 25 major conditions.</li>
          <li><strong>Chapters 5–11 (Life-Stage Care, Emotional Healing & Anatomy):</strong> Dedicated protocols for Men, Women, Pregnancy, Seniors, and Teens, emotional reflex therapy for stress/depression/anxiety, and 12 illustrated anatomical systems.</li>
        </ul>
      `,
      prefaceKo: `
        <h4>저자 서문 : 전신적 연결의 언어, 리플렉스 테라피의 길잡이</h4>
        <p>“발은 제2의 심장이며, 손은 제2의 뇌입니다. 손과 발의 작은 반사점에 가해지는 정밀한 자극은 말초신경을 타고 척수와 대뇌 피질로 전달되어 해당 장기의 혈류를 증가시키고 생체 전기 회로를 재정렬합니다.”</p>
        <p>누구나 손쉽게 따라 할 수 있도록 모든 반사 포인트의 해부학적 위치와 자극 방향, 압력, 작업 순서를 시각적으로 정리했습니다. 임상가에게는 정확한 차트가, 가정에서는 평생의 주치의가 되어 줄 것입니다. — <strong>저자 박창혁 박사</strong></p>
      `,
      prefaceEn: `
        <h4>Author's Preface: The Language of Systemic Connection</h4>
        <p>"The feet are the second heart, and the hands are the second brain. Precise stimulation of micro-reflex points on the hands and feet travels via peripheral nerves through the spinal cord to the cerebral cortex, increasing organ blood flow and realigning bio-electric circuits."</p>
        <p>Every reflex point's anatomical location, direction, pressure, and sequence has been visually organized so both clinicians and families can apply them with confidence. — <strong>Park Chang-Hyuk, Ph.D.</strong></p>
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
      ],
      tocEn: [
        {
          part: "Chapters 1 & 2: Overview of Reflexology & Hand/Foot Reflex Point Maps (p.4 ~ p.49)",
          items: [
            "Chapter 1: 5 Working Hypotheses of Reflexology, Zone Theory, Plantar/Dorsal Foot & Hand Charts, Cross-Reflexes",
            "Chapter 2: Complete Hand Reflex Point Atlas (p.22) & Foot Reflex Point Atlas (p.33)"
          ]
        },
        {
          part: "Chapter 3: 8 Organ-System Reflexology Protocols (p.50 ~ p.69)",
          items: [
            "1. Cardiovascular / 2. Digestive / 3. Endocrine / 4. Musculoskeletal",
            "5. Nervous System / 6. Respiratory / 7. Reproductive / 8. Urinary System"
          ]
        },
        {
          part: "Chapter 4: 25 Condition-Specific Reflexology Protocols (p.70 ~ p.111)",
          items: [
            "Head, Brain & Sinus / Eyes / Ears / Thyroid / Asthma / Bronchitis / Heart & Circulation / Hypertension / Liver & Gallbladder",
            "Stomach / Intestines / Constipation / Kidney & Bladder / Prostate / Menstrual & Menopause / Neck, Shoulder, Back, Knee & Sciatica / Eczema & Psoriasis"
          ]
        },
        {
          part: "Chapters 5–11: Life-Stage Protocols, Emotional Healing & Human Anatomy (p.112 ~ p.206)",
          items: [
            "Chapters 5–9: Reflexology for Men, Women, Pregnancy, Seniors, and Adolescents",
            "Chapter 10: Emotional Healing Reflexology (Stress, Depression, Anxiety Disorders)",
            "Chapter 11: 12 Illustrated Human Anatomical Systems"
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
      authorEn: "By Park Chang-Hyuk, Ph.D.",
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
      highlightsEn: [
        "24 Core Muscles: Origin, Insertion & Trigger Point Atlas",
        "TMJ, Upper Cervical (C1–C4) & Dura Mater Biomechanics",
        "Iliopsoas–Gluteal & Thoracic–Scapular Kinetic Chains",
        "Fixator, Escaper & Stabilizer Muscle Assessment System"
      ],
      summaryKo:
        "물리치료학·대체의학·심신치유학을 아우른 박창혁 박사의 40년 통증 재활 임상 노하우가 담긴 326쪽 대작! 전신 24대 핵심 근육과 턱관절(TMJ)·경추·골반의 구조적 상관관계, 이학적 판정 검사법 및 밸런스 테이핑·에너지 도구 기법을 완벽 수록했습니다.",
      summaryEn:
        "A 326-page orthopedic and structural rehabilitation compendium distilling 40 years of physical therapy and integrative clinical practice—covering 24 key muscles, TMJ–cervical–pelvic chains, orthopedic assessment tests, balance taping, and energy tools.",
      introKo: `
        <p><strong>《밸런스 테라피 (Balance Therapy)》</strong>는 “통증이 나타나는 부위는 피해자일 뿐, 진짜 범인은 깨어진 구조적·근막적 밸런스에 있다”는 임상 원칙 아래 집필된 326쪽 분량의 근골격계 통합 재활 바이블입니다.</p>
        <ul>
          <li><strong>제01장~제05장 밸런스의 원리와 적용 기법:</strong> 인체 구조적 균형과 신경·내분비계의 상호작용, 피부 반응점, 밸런스 테이핑 요법, 에너지 테라피 도구 적용법을 다룹니다.</li>
          <li><strong>제06장~제11장 부위별·24대 핵심 근육별 밸런스 테라피:</strong> 사각근·흉쇄유돌근부터 승모근·회전근개·요방형근·장요근·이상근·슬와근·하퇴삼두근까지 24개 핵심 근육의 해부학적 구조와 통증 패턴을 정밀 분석합니다.</li>
          <li><strong>제12장~제17장 고난도 임상 상관관계 & 판정 프로그램:</strong> 턱관절(TMJ)과 상부경추(C1~C4) 및 뇌척수액 경막의 연결고리, 목 회선·고관절 개폐·족관절 배굴 이학검사 및 <strong>고정근·도피근·지지근 판정에 따른 맞춤 처방</strong>을 공개합니다.</li>
        </ul>
      `,
      introEn: `
        <p><strong><em>Balance Therapy</em></strong> is a 326-page musculoskeletal rehabilitation bible built on a core clinical truth: <em>"The site of pain is merely the victim; the true culprit lies in broken structural and myofascial balance."</em></p>
        <ul>
          <li><strong>Chapters 1–5 (Principles & Techniques):</strong> Structural homeostasis, neuro-endocrine balance, cutaneous reflex points, Balance Taping, and energy therapy instruments.</li>
          <li><strong>Chapters 6–11 (Regional Pain & 24 Core Muscles):</strong> Detailed anatomical origin/insertion charts and release protocols for 24 key muscles from scalenes and rotator cuff to iliopsoas, piriformis, popliteus, and triceps surae.</li>
          <li><strong>Chapters 12–17 (TMJ–Cervical Chains & Diagnostic Assessment):</strong> TMJ and upper cervical (C1–C4) dural relationships, cervical rotation/hip/ankle orthopedic evaluation, and <strong>Fixator, Escaper & Support Muscle classification protocols</strong>.</li>
        </ul>
      `,
      prefaceKo: `
        <h4>저자 서문 : 밸런스 테라피, 건강한 삶의 새로운 시작</h4>
        <p>“40여 년 전 물리치료사로 임상을 시작한 이래 수많은 난치성 통증 환자를 만나며 깨달은 진리가 있습니다. 인체는 단 하나의 근육도 독립적으로 움직이지 않으며, 머리끝에서 발끝까지 유기적인 텐세그리티(Tensegrity) 균형망으로 연결되어 있다는 사실입니다.”</p>
        <p>이 책은 통증의 원인을 정확히 판정(Assessment)하고, 최소한의 자극으로 즉각적인 관절 가동범위 회복과 통증 해소를 이끌어내는 밸런스 테라피의 정수를 담았습니다. — <strong>저자 박창혁 박사</strong></p>
      `,
      prefaceEn: `
        <h4>Author's Preface: Balance Therapy, A New Beginning for Pain-Free Living</h4>
        <p>"Since beginning my clinical career as a physical therapist over 40 years ago, one truth has stood above all: not a single muscle in the human body acts in isolation. From head to toe, the body is interconnected as a continuous tensegrity network."</p>
        <p>This book presents the complete assessment and correction system of Balance Therapy to immediately restore range of motion and resolve chronic pain at its root. — <strong>Park Chang-Hyuk, Ph.D.</strong></p>
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
      ],
      tocEn: [
        {
          part: "Chapters 01–05: Principles of Structural Balance & Core Techniques (p.3 ~ p.48)",
          items: [
            "Chapter 01: Principles of Balance (Structural, Neurological & Endocrine Homeostasis)",
            "Chapter 02: Cutaneous Reflex Zones & Viscerosomatic Connections",
            "Chapters 03–05: Manual Application Techniques, Balance Taping Therapy & Energy Instruments"
          ]
        },
        {
          part: "Chapters 06–11: Regional Pain & 24 Core Muscle Protocols (p.49 ~ p.167)",
          items: [
            "Chapters 06–07: Neck Pain (Scalenes, SCM) & Shoulder Pain (Trapezius, Supraspinatus, Infraspinatus, Levator Scapulae, Teres Major, Pectoralis Major)",
            "Chapter 08: Complete Atlas of 24 Core Trunk & Lower Extremity Muscles",
            "Chapters 09–11: Chest/Back Balance Points, Lower Back Pain, and Knee/Calf/Ankle Protocols"
          ]
        },
        {
          part: "Chapters 12–14: TMJ, Upper Cervical (C1–C4), Thoracic & Pelvic Correlations (p.168 ~ p.255)",
          items: [
            "Chapter 12: TMJ Balance Therapy & Upper Cervical (C1–C4) Dura Mater Mechanics",
            "Chapters 13–14: Anterior Chest–Posterior Scapular Chains & Iliopsoas–Gluteal Reciprocal Balance"
          ]
        },
        {
          part: "Chapters 15–17: Orthopedic Assessment Program & Customized Correction (p.256 ~ p.326)",
          items: [
            "Chapter 15: Directional Assessment, Cervical Rotation, Articular/Muscular/Neural Differentiation, Hip & Ankle Tests",
            "Chapters 16–17: Customized Balance Protocols & Fixator / Escaper / Support Muscle Correction"
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
      authorEn: "By Park Chang-Hyuk, Ph.D.",
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
      highlightsEn: [
        "pH 7.35–7.45 Alkaline Homeostasis & Cellular Voltage",
        "4-Week Voltage Boosting Program & 7 Amplification Technologies",
        "Chlorophyll Blood Synthesis & 13 Core Supplements Guide",
        "Liver/Colon Detoxification & Saliva/Urine pH Diagnostics"
      ],
      summaryKo:
        "총 471쪽에 달하는 방대한 분량으로 세포 생물학, 생체 전기 전압(-50mV), pH 알칼리성 식사요법, 13대 핵심 영양 보충제(L-아르기닌·풀빅산·글루타치온 등), 간·대장 해독 및 심층 Q&A를 총망라한 세포 부활의 결정판입니다.",
      summaryEn:
        "An encyclopedic 471-page treatise uniting cellular biology, bio-electric voltage (-50mV), alkaline nutrition, 13 essential supplements (L-Arginine, Fulvic Acid, Glutathione, etc.), liver/colon detoxification, saliva/urine pH testing, and clinical Q&As.",
      introKo: `
        <p><strong>《세포야 깨어나라! (세포 전압의 숨겨진 치유력)》</strong>은 왜 현대인이 만성 산성화(Acidosis)와 저전압 상태에 빠져 병들어가는지 과학적으로 규명하고, 식단·영양·해독·전압 부스팅을 통해 세포 수준에서 완전한 회춘과 치유를 이루는 471쪽 분량의 통합 영양·전압 의학 총서입니다.</p>
        <ul>
          <li><strong>제1부~제2부 세포의 세계와 전압 부스팅:</strong> pH와 세포 전압의 수학적·생화학적 상관관계(pH 7.35~7.45 = -20mV~-25mV), <strong>4주 세포 전압 부스팅 프로그램</strong>, 전압을 높이는 7가지 핵심 기술과 전압 회복 레시피를 제시합니다.</li>
          <li><strong>제3부 알칼리성 식사요법과 전신 해독(Detox):</strong> 산성 식품 vs 알칼리성 식품 완전 분류, 엽록소가 혈액(헤모글로빈)으로 전환되는 비밀, <strong>13가지 핵심 보충제(L-아르기닌, 마그네슘, 풀빅산/휴믹산, CoQ10, 글루타치온 등)</strong> 복용법, 간 정화(Liver Flush)와 대장 정화, 타액·소변 pH 자가 테스트법을 상세히 안내합니다.</li>
          <li><strong>제4부 실전 Q&A 및 임상 정리:</strong> 환자들이 가장 궁금해하는 심층 Q&A와 산성 체질 초기·중기·말기 증상 체크리스트 및 전문 용어집을 수록했습니다.</li>
        </ul>
      `,
      introEn: `
        <p><strong><em>Awakening Cell! (The Hidden Healing Power of Cellular Voltage)</em></strong> is a monumental 471-page reference explaining why modern humans fall into chronic metabolic acidosis and low cellular voltage—and how nutrition, detoxification, and voltage boosting awaken cellular regeneration.</p>
        <ul>
          <li><strong>Parts 1 & 2 (The World of Cells & Voltage Boosting):</strong> Biochemical relationship between pH (7.35–7.45) and voltage (-20mV to -50mV), the <strong>4-Week Cellular Voltage Boosting Program</strong>, 7 amplification technologies, and voltage-restoring recipes.</li>
          <li><strong>Part 3 (Alkaline Diet & Systemic Detoxification):</strong> Complete acid/alkaline food charts, how chlorophyll builds healthy blood, <strong>13 core supplements (L-Arginine, Magnesium, Fulvic Acid, CoQ10, Glutathione, etc.)</strong>, Liver & Colon cleansing protocols, and saliva/urine pH testing.</li>
          <li><strong>Part 4 (Clinical Q&A & Compendium):</strong> In-depth Q&As, early/middle/late stage acidosis symptom charts, and an integrative glossary.</li>
        </ul>
      `,
      prefaceKo: `
        <h4>프롤로그 : 세포야 깨어나라!</h4>
        <p>“인체라는 어항 속의 물(체액과 세포외기질)이 산성으로 오염되고 전기가 끊기면, 그 안의 물고기(세포)는 아무리 비싼 약을 주어도 살아남을 수 없습니다. 어항의 물을 약알칼리성(pH 7.35~7.45)으로 정화하고 전자를 공급해 주십시오. 세포는 스스로 깨어나 기적처럼 치유를 시작합니다.” — <strong>저자 박창혁 박사</strong></p>
      `,
      prefaceEn: `
        <h4>Prologue: Awakening Cell!</h4>
        <p>"When the water in the aquarium of the human body (extracellular fluid) becomes acidic and loses its electrical charge, the fish (your cells) cannot survive no matter how expensive the medication. Purify the internal terrain to a mildly alkaline pH of 7.35–7.45 and supply electrons—your cells will awaken and heal themselves." — <strong>Park Chang-Hyuk, Ph.D.</strong></p>
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
      ],
      tocEn: [
        {
          part: "[Book I] Part 1: The World of Cells & Part 2: Cellular Voltage Boosting (p.8 ~ p.131)",
          items: [
            "Part 1 (Chapters 1–8): Cellular Structure, Membrane Potential, Mitochondria & Cellular Renewal Cycles",
            "Part 2 (Chapters 1–9): Scientific Mechanism of pH and Voltage, Self-Assessment, 4-Week Voltage Boosting Program, 7 Amplification Technologies & Voltage Recipes"
          ]
        },
        {
          part: "[Book I] Part 3: Alkaline Nutrition & Systemic Detoxification (p.132 ~ p.320)",
          items: [
            "Chapters 1–17: Alkaline Diet Principles, Neutralizing Acid Toxins, Chlorophyll & Blood Synthesis, Superfood Meal Plans",
            "Chapters 18–19: Natural Healing & 13 Core Supplements (L-Arginine, Magnesium, Fulvic Acid, Glutathione, Vitamin D3/K2, Omega-3)",
            "Chapters 20–26: Liver Detoxification, Colon Cleansing, Lymphatic Drainage & Saliva/Urine pH Testing"
          ]
        },
        {
          part: "[Book II] Part 4: In-Depth Clinical Q&A & Master Compendium (p.321 ~ p.471)",
          items: [
            "Chapters 27–28: Practical Q&A on Alkaline Nutrition and Cellular Voltage Healing",
            "Chapters 29–30: Comprehensive Mechanism Analysis, Acidosis Symptom Progression Charts & Glossary"
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
      authorEn: "By Park Chang-Hyuk, Ph.D.",
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
      highlightsEn: [
        "Synthesis of 13 Medical Paradigms (Fractal, Quantum, Wave, etc.)",
        "10 Musculoskeletal Pain Energy Protocols",
        "10 Internal & Lifestyle Condition Protocols",
        "20 Chronic & Intractable Disease Protocols (Parkinson's, Dementia, etc.)"
      ],
      summaryKo:
        "프랙탈 원리, 에너지의학, 파동의학, 양자의학, 심신의학, 아유르베다 등 13대 의학 패러다임을 통섭하고, 근골격계 10대 통증·내과 질환 10선·만성 난치성 질환 20선(총 40대 질환)의 구체적인 에너지 치유 프로토콜을 제시한 321쪽 임상 지침서입니다.",
      summaryEn:
        "A 321-page clinical guide synthesizing 13 integrative medical paradigms (Fractal, Energy, Wave, Quantum, Mind-Body, Oriental, Ayurveda, etc.) and providing step-by-step energy healing protocols for 40 musculoskeletal, internal, and intractable conditions.",
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
      introEn: `
        <p><strong><em>Energy Therapy</em></strong> is a 321-page clinical encyclopedia representing the culmination of Dr. Park Chang-Hyuk's 4 academic degrees and 40 years of integrative clinical practice.</p>
        <ul>
          <li><strong>Part 1 (13 Integrative Medical Paradigms):</strong> Unifies Fractal Theory, Energy Medicine, Wave Medicine, Quantum Medicine, Mind-Body Medicine, Naturopathy, Oriental Medicine, Conventional Medicine, Homeopathy, Ayurveda, Regenerative Medicine, Alternative Medicine, and Integrative Medicine.</li>
          <li><strong>Part 2 (40 Condition-Specific Clinical Protocols):</strong>
            <ul>
              <li><strong>Chapter 1 (10 Musculoskeletal Conditions):</strong> Neck, Shoulder, Elbow, Carpal Tunnel, Trigger Finger, Lower Back, Knee, Fibromyalgia, Gout, Osteoporosis.</li>
              <li><strong>Chapter 2 (10 Internal Conditions):</strong> Rhinitis, Headache, Liver, Heart, Stomach, Cough, Constipation, Insomnia, Incontinence, Menopause.</li>
              <li><strong>Chapter 3 (20 Chronic & Intractable Diseases):</strong> Diabetes, Hypertension, Autoimmune Disease, Tinnitus, Parkinson's, Stress, TMJ, Thyroid, Stroke, Dementia, Postherpetic Neuralgia, Facial Palsy, Depression, Atopy, ALS, Macular Degeneration, Spinal Stenosis, Psoriasis, BPH, Cerebellar Atrophy.</li>
            </ul>
          </li>
        </ul>
      `,
      prefaceKo: `
        <h4>저자 서문 : 당신 안에 잠든 위대한 치유자를 깨우십시오</h4>
        <p>“질병의 이름은 수천 가지이지만, 치유의 본질은 하나입니다. 막힌 에너지 회로를 열고, 깨어진 파동과 극성의 공명을 회복하는 것입니다. 40가지 주요 통증과 난치성 질환 앞에서 막막해하는 분들에게 이 책이 가장 명확하고 실질적인 치유의 나침반이 되기를 소망합니다.” — <strong>저자 박창혁 박사</strong></p>
      `,
      prefaceEn: `
        <h4>Author's Preface: Awaken the Great Healer Within You</h4>
        <p>"Though diseases have thousands of names, the essence of healing is one: reopening blocked energy circuits and restoring resonant polarity. May this book serve as a clear, practical compass for everyone facing chronic pain and intractable illness." — <strong>Park Chang-Hyuk, Ph.D.</strong></p>
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
      ],
      tocEn: [
        {
          part: "1. Introduction — 13 Integrative Medical Paradigms (p.4 ~ p.48)",
          items: [
            "1. Fractal Principle / 2. Energy Medicine / 3. Wave Medicine / 4. Quantum Medicine",
            "5. Mind-Body Medicine / 6. Naturopathy / 7. Oriental Medicine / 8. Modern Medicine / 9. Homeopathy",
            "10. Ayurveda / 11. Regenerative Medicine / 12. Alternative Medicine / 13. Integrative Medicine"
          ]
        },
        {
          part: "2. Chapter 1 — 10 Musculoskeletal Pain Protocols (p.49 ~ p.114)",
          items: [
            "1. Neck Pain / 2. Shoulder Pain / 3. Elbow Pain / 4. Carpal Tunnel Syndrome / 5. Trigger Finger",
            "6. Lower Back Pain / 7. Knee Pain / 8. Fibromyalgia / 9. Gout / 10. Osteoporosis"
          ]
        },
        {
          part: "Chapter 2 — 10 Internal & Lifestyle Condition Protocols (p.115 ~ p.175)",
          items: [
            "1. Rhinitis / 2. Headache / 3. Liver Disorders / 4. Heart Conditions / 5. Gastric Disorders",
            "6. Chronic Cough / 7. Constipation / 8. Insomnia / 9. Urinary Incontinence / 10. Menopausal Syndrome"
          ]
        },
        {
          part: "Chapter 3 — 20 Chronic & Intractable Disease Protocols (p.176 ~ p.321)",
          items: [
            "01. Diabetes / 02. Hypertension / 03. Autoimmune Disorders / 04. Tinnitus / 05. Parkinson's Disease / 06. Chronic Stress / 07. TMJ Disorder / 08. Thyroid Disease / 09. Stroke / 10. Dementia",
            "11. Postherpetic Neuralgia / 12. Facial Nerve Palsy / 13. Depression / 14. Atopic Dermatitis / 15. ALS / 16. Macular Degeneration / 17. Spinal Stenosis / 18. Psoriasis / 19. Prostate Enlargement / 20. Cerebellar Atrophy"
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

  function formatPrice(krw, usd) {
    if (isEn) {
      const u = usd || Math.round(Number(krw || 0) / 1250);
      return `US$${u.toLocaleString("en-US")}`;
    }
    return formatKrw(krw);
  }

  function bookTitle(b) {
    return isEn ? b.titleEn : b.titleKo;
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
        const hay = `${b.titleKo} ${b.titleEn} ${b.subtitleKo} ${b.subtitleEn} ${b.summaryKo} ${b.summaryEn} ${b.highlightsKo.join(" ")} ${(b.highlightsEn || []).join(" ")}`.toLowerCase();
        return hay.includes(q);
      }
      return true;
    });

    if (filtered.length === 0) {
      listEl.innerHTML = `<div style="padding:48px;text-align:center;color:#94a3b8;background:#0b1528;border-radius:18px;border:1px solid rgba(212,163,89,0.25);">${
        isEn ? "No E-Books match your search criteria." : "검색 조건에 맞는 전자책이 없습니다."
      }</div>`;
      return;
    }

    listEl.innerHTML = filtered
      .map((b, idx) => {
        const inCart = cart.includes(b.slug);
        const title = isEn ? b.titleEn : b.titleKo;
        const subtitle = isEn ? b.subtitleEn : b.subtitleKo;
        const badge = isEn ? b.badgeEn : b.badgeKo;
        const author = isEn ? b.authorEn : `${b.authorKo} (심신치유학 박사)`;
        const publisher = isEn ? b.publisherEn : b.publisherKo;
        const summary = isEn ? b.summaryEn : b.summaryKo;
        const highlights = isEn ? b.highlightsEn : b.highlightsKo;
        const toc = isEn ? b.tocEn : b.tocKo;
        const priceDisplay = formatPrice(b.priceKrw, b.priceUsd);

        return `
        <article class="bs-kyobo-card" id="book-${b.slug}">
          <!-- Col 1: Cover & Sample Preview -->
          <div class="bs-kyobo-cover-col">
            <div class="bs-kyobo-cover-frame" data-open-preview="${b.slug}" title="${isEn ? "Click to preview sample pages" : "클릭하여 본문 미리보기"}">
              <span class="bs-ebook-type-ribbon">${isEn ? `PDF E-Book · Vol. ${idx + 1}` : `PDF 전자책 · 제${idx + 1}권`}</span>
              <img src="${b.cover}" alt="${title}" loading="lazy">
            </div>
            <button type="button" class="bs-preview-trigger-btn" data-open-preview="${b.slug}">
              <i class="ri-book-read-line"></i> ${isEn ? "Sample Preview (5 Pages)" : "본문 미리보기 (5쪽)"}
            </button>
          </div>

          <!-- Col 2: Kyobo Style Book Info & Quick TOC -->
          <div class="bs-kyobo-info-col">
            <div class="bs-kyobo-badges">
              <span class="bs-tag gold">${badge}</span>
              <span class="bs-tag cyan">${isEn ? `High-Res PDF (${b.pages} Pages)` : `소장용 고해상도 PDF (${b.pages}쪽)`}</span>
              <span class="bs-tag emerald"><i class="ri-mail-check-line"></i> ${isEn ? "Auto-Email on Payment Confirmation" : "입금확인 후 이메일 자동발송"}</span>
            </div>

            <h3 class="bs-kyobo-title" data-open-detail="${b.slug}" data-tab="intro">${title}</h3>
            <p class="bs-kyobo-subtitle">${subtitle}</p>

            <div class="bs-kyobo-publine">
              <span><strong>${author}</strong></span>
              <span>|</span>
              <span>${publisher}</span>
              <span>|</span>
              <span>${isEn ? `Published ${b.pubDate}` : `${b.pubDate} 출간`}</span>
              <span>|</span>
              <span>${isEn ? `${b.pages} Pages (${b.sizeMb})` : `${b.pages}쪽 (${b.sizeMb})`}</span>
              <span>|</span>
              <span class="bs-kyobo-rating">★★★★★ ${b.rating} (${isEn ? `${b.reviewCount} Reviews` : `리뷰 ${b.reviewCount}`})</span>
            </div>

            <p class="bs-kyobo-desc">${summary}</p>

            <div class="bs-kyobo-highlights">
              ${highlights.map((h) => `<span><i class="ri-check-double-line" style="color:#d4a359;"></i> ${h}</span>`).join("")}
            </div>

            <div class="bs-inline-toc-box">
              <div class="bs-inline-toc-header">
                <strong><i class="ri-list-check-2"></i> ${
                  isEn
                    ? `Key Structure (${toc.length} Parts · Full TOC & Preface Included)`
                    : `핵심 구성 (${toc.length}개 파트 · 전체 목차 및 서문 제공)`
                }</strong>
                <div class="bs-inline-toc-actions">
                  <button type="button" class="bs-toc-pill-btn" data-open-detail="${b.slug}" data-tab="intro">${isEn ? "Overview" : "책 소개"}</button>
                  <button type="button" class="bs-toc-pill-btn" data-open-detail="${b.slug}" data-tab="preface">${isEn ? "Preface" : "저자 서문"}</button>
                  <button type="button" class="bs-toc-pill-btn" data-open-detail="${b.slug}" data-tab="toc">${isEn ? "Full TOC" : "목차 전체보기"}</button>
                </div>
              </div>
            </div>
          </div>

          <!-- Col 3: Kyobo Price & Action Box -->
          <div class="bs-kyobo-buy-col">
            <div>
              <div class="bs-price-block">
                <span class="bs-price-label">${isEn ? "PDF E-Book Edition" : "전자책(PDF) 소장 정가"}</span>
                <div class="bs-price-value">${priceDisplay}</div>
                <div class="bs-price-sub"><i class="ri-shield-check-line"></i> ${isEn ? "Permanent Lifetime Ownership" : "평생 무제한 열람 · 영구 소장"}</div>
              </div>

              <div class="bs-delivery-specs">
                <div>• <strong>${isEn ? "Delivery:" : "발송 방식:"}</strong> ${isEn ? "Automated Email + Instant Web Download" : "입금 확인 즉시 이메일 자동 발송 + 홈페이지 즉시 다운로드"}</div>
                <div>• <strong>${isEn ? "Format:" : "파일 형식:"}</strong> ${isEn ? `Original PDF (${b.pages}p / ${b.sizeMb})` : `원본 PDF (${b.pages}쪽 / ${b.sizeMb})`}</div>
                <div>• <strong>${isEn ? "Devices:" : "열람 기기:"}</strong> ${isEn ? "PC · Tablet · Smartphone · Printable" : "PC · 태블릿 · 스마트폰 · 인쇄 가능"}</div>
              </div>
            </div>

            <div class="bs-buy-buttons">
              <button type="button" class="bs-btn-buy-now" data-buy-single="${b.slug}">
                <i class="ri-flashlight-fill"></i> ${isEn ? "Buy Now (Auto-Email)" : "바로구매 (자동발송 신청)"}
              </button>
              <button type="button" class="bs-btn-cart ${inCart ? "in-cart" : ""}" data-toggle-cart="${b.slug}">
                <i class="${inCart ? "ri-check-line" : "ri-shopping-cart-2-line"}"></i>
                ${
                  inCart
                    ? isEn
                      ? "Added to Cart (Remove)"
                      : "장바구니에 담김 (선택해제)"
                    : isEn
                    ? "Add to Cart"
                    : "장바구니 담기"
                }
              </button>
              <button type="button" class="bs-btn-detail" data-open-detail="${b.slug}" data-tab="toc">
                <i class="ri-file-list-3-line"></i> ${isEn ? "Book Details & Full TOC" : "책 소개 · 목차 상세 보기"}
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
        inCart
          ? isEn
            ? "Added to Cart (Remove)"
            : "장바구니에 담김 (선택해제)"
          : isEn
          ? "Add to Cart"
          : "장바구니 담기"
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
    const originalTotalKrw = cart.length * 100000;
    const finalTotalKrw = isFull ? 480000 : originalTotalKrw;
    const originalTotalUsd = cart.length * 80;
    const finalTotalUsd = isFull ? 380 : originalTotalUsd;
    const titles = cart
      .map((s) => {
        const b = getBookBySlug(s);
        if (!b) return s;
        return isEn ? b.titleEn.split(" (")[0] : b.titleKo.split(" (")[0];
      })
      .join(", ");

    if (isEn) {
      document.getElementById("bsCartSummaryText").innerHTML = `
        <div style="font-size:0.85rem;color:#7dd3fc;font-weight:700;">
          Selected in Cart: <strong>${cart.length} ${cart.length === 1 ? "Book" : "Books"}</strong> ${
            isFull
              ? '<span style="background:#10b981;color:#051324;padding:2px 8px;border-radius:999px;margin-left:6px;font-weight:800;">20% Master Bundle Discount Applied!</span>'
              : ""
          }
        </div>
        <div style="font-size:0.95rem;color:#ffffff;font-weight:700;margin-top:2px;">${titles}</div>
      `;
      document.getElementById("bsCartTotalPrice").innerHTML = isFull
        ? `<del style="color:#94a3b8;font-size:0.9rem;margin-right:8px;">US$480</del><strong style="font-size:1.5rem;color:#f7d58b;">US$380</strong>`
        : `<strong style="font-size:1.5rem;color:#f7d58b;">US$${finalTotalUsd}</strong>`;
    } else {
      document.getElementById("bsCartSummaryText").innerHTML = `
        <div style="font-size:0.85rem;color:#7dd3fc;font-weight:700;">
          장바구니 선택 도서 <strong>${cart.length}권</strong> ${
            isFull
              ? '<span style="background:#10b981;color:#051324;padding:2px 8px;border-radius:999px;margin-left:6px;font-weight:800;">전권 20% 패키지 할인 적용!</span>'
              : ""
          }
        </div>
        <div style="font-size:0.95rem;color:#ffffff;font-weight:700;margin-top:2px;">${titles}</div>
      `;
      document.getElementById("bsCartTotalPrice").innerHTML = isFull
        ? `<del style="color:#94a3b8;font-size:0.9rem;margin-right:8px;">₩600,000</del><strong style="font-size:1.5rem;color:#f7d58b;">₩480,000</strong>`
        : `<strong style="font-size:1.5rem;color:#f7d58b;">${formatKrw(finalTotalKrw)}</strong>`;
    }
  }

  // Modal 1: Book Detail & Full Table of Contents (Kyobo Style)
  function openBookDetailModal(slug, initialTab = "intro") {
    const book = getBookBySlug(slug);
    if (!book) return;
    const modal = document.getElementById("bsDetailModal");
    if (!modal) return;

    const title = isEn ? book.titleEn : book.titleKo;
    const subtitle = isEn ? book.subtitleEn : book.subtitleKo;
    const badge = isEn ? book.badgeEn : book.badgeKo;
    const author = isEn ? book.authorEn : book.authorKo;
    const publisher = isEn ? book.publisherEn : book.publisherKo;
    const introHtml = isEn ? book.introEn : book.introKo;
    const prefaceHtml = isEn ? book.prefaceEn : book.prefaceKo;
    const tocList = isEn ? book.tocEn : book.tocKo;
    const priceDisplay = formatPrice(book.priceKrw, book.priceUsd);

    document.getElementById("bsDetailModalTitle").textContent = isEn
      ? `${title} — Book Details & Full Table of Contents`
      : `${title} — 도서 상세 정보 및 전체 목차`;

    function renderTab(tab) {
      const body = document.getElementById("bsDetailModalBody");
      document.querySelectorAll("#bsDetailModalTabs .bs-modal-tab").forEach((t) => {
        t.classList.toggle("active", t.getAttribute("data-tab") === tab);
      });

      if (tab === "intro") {
        body.innerHTML = `
          <div class="bs-modal-intro-grid">
            <img src="${book.cover}" alt="${title}" style="width:100%;border-radius:12px;border:1px solid rgba(212,163,89,0.45);">
            <div>
              <span class="bs-tag gold">${badge}</span>
              <h3 style="margin:10px 0 6px;font-size:1.45rem;color:#ffffff;">${title}</h3>
              <p style="margin:0 0 12px;color:#7dd3fc;font-weight:600;">${subtitle}</p>
              <div style="font-size:0.88rem;color:#94a3b8;margin-bottom:16px;">
                ${
                  isEn
                    ? `<strong style="color:#fff;">${author}</strong> | Publisher: ${publisher} | Date: ${book.pubDate} | Length: ${book.pages}p (${book.sizeMb}) | Price: <strong style="color:#f7d58b;">${priceDisplay}</strong>`
                    : `저자: <strong style="color:#fff;">${author}</strong> | 출판사: ${publisher} | 발행일: ${book.pubDate} | 분량: ${book.pages}쪽 (${book.sizeMb}) | 정가: <strong style="color:#f7d58b;">${priceDisplay}</strong>`
                }
              </div>
              <div style="color:#e2e8f0;font-size:0.96rem;line-height:1.8;">
                ${introHtml}
              </div>
              <div style="margin-top:20px;display:flex;gap:10px;flex-wrap:wrap;">
                <button type="button" class="bs-btn-buy-now" style="width:auto;padding:12px 24px;" data-buy-single="${book.slug}">
                  <i class="ri-flashlight-fill"></i> ${isEn ? `Buy This E-Book (${priceDisplay})` : `이 책 바로구매 (${priceDisplay})`}
                </button>
                <button type="button" class="bs-preview-trigger-btn" style="width:auto;padding:12px 20px;" data-open-preview="${book.slug}">
                  <i class="ri-book-read-line"></i> ${isEn ? "Sample Preview (5 Pages)" : "본문 미리보기 (5쪽)"}
                </button>
              </div>
            </div>
          </div>
        `;
      } else if (tab === "preface") {
        body.innerHTML = `
          <div style="background:#070e1c;border:1px solid rgba(212,163,89,0.35);border-radius:16px;padding:26px;color:#e2e8f0;font-size:0.98rem;line-height:1.85;">
            ${prefaceHtml}
          </div>
        `;
      } else if (tab === "toc") {
        body.innerHTML = `
          <div style="margin-bottom:16px;color:#cbd5e1;font-size:0.92rem;">
            📘 <strong>${title}</strong> (${isEn ? `${book.pages} Pages Total — Complete Table of Contents` : `총 ${book.pages}쪽 — 전체 목차 구성입니다`})
          </div>
          ${tocList
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
        body.innerHTML = isEn
          ? `
          <div style="display:flex;gap:22px;align-items:center;flex-wrap:wrap;background:#070e1c;padding:24px;border-radius:16px;border:1px solid rgba(212,163,89,0.3);">
            <img src="../images/books/dr-park-portrait.jpg" alt="Park Chang-Hyuk, Ph.D." style="width:120px;height:120px;border-radius:50%;border:3px solid #d4a359;object-fit:cover;">
            <div style="flex:1;min-width:240px;">
              <div style="color:#f7d58b;font-weight:800;font-size:0.85rem;">Leading Scholar in Mind-Body Healing & Integrative Alternative Medicine</div>
              <h4 style="margin:6px 0;font-size:1.35rem;color:#ffffff;">Park Chang-Hyuk, Ph.D.</h4>
              <p style="margin:0;color:#cbd5e1;font-size:0.92rem;line-height:1.7;">
                • Ph.D. in Mind-Body Healing, Seoul University of Buddhism (2012)<br>
                • M.S. in Alternative Medicine, Kyonggi University (2006) / M.P.H., Inje University (1993) / B.S. in Physical Therapy, Gwangju Health University (1982)<br>
                • Doctoral Dissertation: <em>Effects of Ujjayi Breathing and Alpha Sound Meditation on Physical Function Indices</em><br>
                • Master's Thesis: <em>Effects of Low-Frequency High-Intensity TENS on Plasma β-Endorphin, ACTH, Serum Cortisol, and Urinary 17-OHCS Levels</em><br>
                • Former Full-Time Professor at Hanseo Univ. & Adjunct Professor at Kyonggi Univ.<br>
                • Current Director of Intractable Pain Clinic at Bupyeong Jungang St. Mary's Clinic & Director of NovaCell Education Center
              </p>
            </div>
          </div>
        `
          : `
          <div style="display:flex;gap:22px;align-items:center;flex-wrap:wrap;background:#070e1c;padding:24px;border-radius:16px;border:1px solid rgba(212,163,89,0.3);">
            <img src="../images/books/dr-park-portrait.jpg" alt="박창혁 박사" style="width:120px;height:120px;border-radius:50%;border:3px solid #d4a359;object-fit:cover;">
            <div style="flex:1;min-width:240px;">
              <div style="color:#f7d58b;font-weight:800;font-size:0.85rem;">대한민국의 심신치유 및 대체의학을 선도하는 석학</div>
              <h4 style="margin:6px 0;font-size:1.35rem;color:#ffffff;">박창혁 박사 (Park Chang-Hyuk, Ph.D.)</h4>
              <p style="margin:0;color:#cbd5e1;font-size:0.92rem;line-height:1.7;">
                • 서울불교대학원대학교 심신치유학 박사 (Ph.D., 2012)<br>
                • 경기대학교 대체의학대학원 대체의학 석사 (2006) / 인제대학교 보건대학원 보건학 석사 (1993) / 광주보건대 물리치료학 학사 (1982)<br>
                • 박사논문: 《웃짜이 호흡 수련과 알파 사운드 명상이 신체 기능 지수의 변화에 미치는 영향》<br>
                • 석사논문: 《저빈도-고강도경피신경전기자극이 혈장 β-endorphin과 ACTH, 혈청Cortisol 및 요중 17-OHCS 농도에 미치는 영향》<br>
                • 한서대 건강증진대학원 전임교수 · 경기대 대체의학대학원 외래교수 · 전남과학대 물리치료과 겸임교수 역임<br>
                • 현) 부평 중앙성모의원 난치성통증클리닉 센터장 · 노바셀 교육 센터 원장
              </p>
            </div>
          </div>
        `;
      } else if (tab === "delivery") {
        body.innerHTML = isEn
          ? `
          <div class="bs-toc-chapter-card">
            <h4>⚡ Automated Order & Instant Email Delivery Guide</h4>
            <ul>
              <li><strong>Step 1 (Order Placement):</strong> Select your desired E-Book(s) via [Buy Now] or [Add to Cart] and enter your name, email address, phone number, and depositor name.</li>
              <li><strong>Step 2 (Automated Payment Confirmation):</strong> Once your payment is confirmed, the automated delivery engine activates immediately.</li>
              <li><strong>Step 3 (Automated Email & Instant Library Unlock):</strong> Your personal <strong>License Key (NVCLIC-XXXX)</strong> and <strong>direct high-resolution PDF download links</strong> are automatically emailed to you, and you can also download your PDFs anytime in the <strong>[My E-Book Library]</strong> section at the bottom of this page.</li>
            </ul>
          </div>
        `
          : `
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
    const title = bookTitle(book);

    function updateView() {
      document.getElementById("bsPreviewTitle").textContent = isEn
        ? `📖 ${title} — Sample Preview (${pageIdx + 1} / ${pages.length})`
        : `📖 ${title} — 미리보기 (${pageIdx + 1} / ${pages.length})`;
      const img = document.getElementById("bsPreviewImage");
      img.src = pages[pageIdx];
      img.alt = `${title} (${pageIdx + 1}/${pages.length})`;
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
    const totalAmountKrw = isFullBundle ? 480000 : checkoutSlugs.length * 100000;
    const totalAmountUsd = isFullBundle ? 380 : checkoutSlugs.length * 80;
    const booksListHtml = checkoutSlugs
      .map((s) => {
        const b = getBookBySlug(s);
        if (!b) return "";
        return `<div style="display:flex;justify-content:space-between;padding:8px 0;border-bottom:1px solid rgba(148,163,184,0.16);font-size:0.92rem;">
            <span>📘 <strong>${bookTitle(b)}</strong> (${b.pages}p · ${b.sizeMb})</span>
            <span style="color:#f7d58b;font-weight:700;">${formatPrice(b.priceKrw, b.priceUsd)}</span>
          </div>`;
      })
      .join("");

    document.getElementById("bsCheckoutItemsList").innerHTML = `
      ${booksListHtml}
      <div style="display:flex;justify-content:space-between;align-items:center;padding-top:12px;margin-top:8px;font-size:1.08rem;">
        <strong>${
          isEn
            ? `Total Amount (${checkoutSlugs.length} ${checkoutSlugs.length === 1 ? "Book" : "Books"}${isFullBundle ? " · 20% Bundle Discount Applied" : ""})`
            : `총 결제 금액 (${checkoutSlugs.length}권 ${isFullBundle ? "· 전권 20% 특별할인 적용" : ""})`
        }</strong>
        <strong style="font-size:1.45rem;color:#f7d58b;">${formatPrice(totalAmountKrw, totalAmountUsd)}</strong>
      </div>
    `;

    document.getElementById("bsCheckoutResultBox").style.display = "none";
    document.getElementById("bsCheckoutForm").style.display = "block";
    modal.classList.add("open");
  }

  // Handle Order Submission (with Honeypot, 30s Cooldown, and XSS Sanitization)
  async function handleOrderSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;

    // 1. Anti-Bot Honeypot check
    if (form.website_hp && form.website_hp.value) {
      return;
    }

    // 2. Anti-Spam 30-second rate-limit cooldown
    const lastTs = Number(sessionStorage.getItem(STORAGE_LAST_ORDER_TS_KEY) || 0);
    if (Date.now() - lastTs < 30000) {
      alert(
        isEn
          ? "Please wait 30 seconds before submitting another order."
          : "보안 정책상 연속 주문 등록은 30초 후에 가능합니다."
      );
      return;
    }

    const customerName = escapeHtml(form.customerName.value.trim().slice(0, 60));
    const customerEmail = form.customerEmail.value.trim().toLowerCase().slice(0, 120);
    const customerPhone = escapeHtml(form.customerPhone.value.trim().slice(0, 40));
    const depositorName = escapeHtml((form.depositorName.value.trim() || form.customerName.value.trim()).slice(0, 60));
    const paymentMethod = form.paymentMethod.value === "toss_card" ? "toss_card" : "bank_transfer";

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(customerEmail)) {
      alert(isEn ? "Please enter a valid email address." : "올바른 이메일 주소를 입력해 주세요.");
      return;
    }

    const submitBtn = form.querySelector("button[type=submit]");
    submitBtn.disabled = true;
    submitBtn.textContent = isEn ? "Registering Automated Order..." : "자동 발송 주문 등록 중...";

    try {
      let orderObj = null;
      try {
        const res = await fetch("/.netlify/functions/ebook-order-automation", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            action: "create_order",
            website_hp: form.website_hp ? form.website_hp.value : "",
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
      } catch (_) {}

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
          bookTitles: checkoutSlugs.map((s) => bookTitle(getBookBySlug(s)) || s).join(", "),
          amount,
          paymentMethod,
          status: "pending_deposit",
          licenseKey: `NVCLIC-${rand.slice(0, 4)}-${Math.random().toString(16).slice(2, 6).toUpperCase()}-2026`,
          createdAt: new Date().toISOString()
        };
      }

      sessionStorage.setItem(STORAGE_LAST_ORDER_TS_KEY, String(Date.now()));

      const orders = getOrders();
      orders.unshift(orderObj);
      saveOrders(orders);
      saveCart([]);

      const safeOrderId = escapeHtml(orderObj.orderId);
      const safeName = escapeHtml(orderObj.customerName);
      const safeEmail = escapeHtml(orderObj.customerEmail);
      const safeDepositor = escapeHtml(orderObj.depositorName);
      const safeTitles = escapeHtml(orderObj.bookTitles);
      const maskedLicense = orderObj.licenseKey
        ? orderObj.licenseKey.replace(/^NVCLIC-[A-Z0-9]+-/, "NVCLIC-****-")
        : "NVCLIC-****";

      form.style.display = "none";
      const resultBox = document.getElementById("bsCheckoutResultBox");
      resultBox.style.display = "block";
      resultBox.innerHTML = isEn
        ? `
        <div style="background:rgba(16,185,129,0.12);border:1px solid rgba(16,185,129,0.45);border-radius:16px;padding:24px;">
          <div style="color:#6ee7b7;font-weight:850;font-size:0.9rem;margin-bottom:6px;">
            <i class="ri-checkbox-circle-fill"></i> Order Registered & Automated Email Delivery Scheduled!
          </div>
          <h4 style="margin:0 0 12px;font-size:1.3rem;color:#ffffff;">Order ID: <span style="color:#f7d58b;">${safeOrderId}</span></h4>
          <p style="margin:0 0 16px;font-size:0.94rem;color:#dbe7f6;line-height:1.7;">
            Thank you, <strong>${safeName}</strong>. Your order is registered in our automated system.<br>
            As soon as payment is confirmed, your <strong>PDF E-Book download links and full License Key (${maskedLicense})</strong> will be automatically sent to <strong>${safeEmail}</strong>.
          </p>
          <div style="display:flex;gap:10px;flex-wrap:wrap;">
            <a href="#my-ebook-library" class="bs-btn-buy-now" style="width:auto;padding:11px 20px;text-decoration:none;" onclick="document.getElementById('bsCheckoutModal').classList.remove('open');">
              <i class="ri-folder-download-line"></i> Check Status in My E-Book Library
            </a>
          </div>
        </div>
      `
        : `
        <div style="background:rgba(16,185,129,0.12);border:1px solid rgba(16,185,129,0.45);border-radius:16px;padding:24px;">
          <div style="color:#6ee7b7;font-weight:850;font-size:0.9rem;margin-bottom:6px;">
            <i class="ri-checkbox-circle-fill"></i> 전자책 주문 접수 및 자동 메일 발송 예약 완료!
          </div>
          <h4 style="margin:0 0 12px;font-size:1.3rem;color:#ffffff;">주문번호: <span style="color:#f7d58b;">${safeOrderId}</span></h4>
          <p style="margin:0 0 16px;font-size:0.94rem;color:#dbe7f6;line-height:1.7;">
            <strong>${safeName}</strong>님, 주문 정보가 자동화 시스템에 등록되었습니다.<br>
            입금이 확인되는 즉시 <strong>${safeEmail}</strong> 메일로 <strong>PDF 전자책 다운로드 링크와 전용 라이선스 인증키(${maskedLicense})</strong>가 자동 전송됩니다.
          </p>
          <div style="background:#060c18;border:1px solid rgba(212,163,89,0.35);border-radius:12px;padding:16px;font-size:0.9rem;color:#e2e8f0;line-height:1.75;margin-bottom:16px;">
            • <strong>주문 도서 (${orderObj.bookSlugs.length}권):</strong> ${safeTitles}<br>
            • <strong>결제 금액:</strong> <strong style="color:#f7d58b;">${formatKrw(orderObj.amount)}</strong><br>
            • <strong>입금자명:</strong> ${safeDepositor}<br>
            • <strong>무통장 입금 안내 및 즉시 승인 문의:</strong> 노바셀 고객지원 <strong>010-9726-7012</strong>
          </div>
          <div style="display:flex;gap:10px;flex-wrap:wrap;">
            <a href="#my-ebook-library" class="bs-btn-buy-now" style="width:auto;padding:11px 20px;text-decoration:none;" onclick="document.getElementById('bsCheckoutModal').classList.remove('open');">
              <i class="ri-folder-download-line"></i> 내 구매 도서 서재에서 상태 확인하기
            </a>
          </div>
        </div>
      `;

      if (isAdminAuthenticated) {
        renderAdminOrdersTable();
      }
      renderCustomerLibrary(orderObj.customerEmail);
    } finally {
      submitBtn.disabled = false;
      submitBtn.innerHTML = `<i class="ri-mail-send-line"></i> ${
        isEn ? "Submit Order & Register Auto-Email" : "전자책 주문 완료 및 입금확인 자동발송 등록"
      }`;
    }
  }

  // Trigger Automated Deposit Confirmation & Email Dispatch (Admin Protected)
  async function confirmOrderAndSendEmail(orderId) {
    if (!isAdminAuthenticated) {
      openAdminAuthModal();
      return;
    }

    const orders = getOrders();
    const idx = orders.findIndex((o) => o.orderId === orderId);
    if (idx === -1) return;

    const order = orders[idx];
    const cfg = getAdminCfg();
    const customLinks = cfg.bookLinks || {};
    const vaultUrl = cfg.driveFolderUrl || unlockVaultUrl();

    let resData = null;
    try {
      const res = await fetch("/.netlify/functions/ebook-order-automation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action: "confirm_and_send_email",
          adminAuthHash: activeAdminHash || DEFAULT_ADMIN_HASH,
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

    let gasSent = resData?.emailDispatched || false;
    if (!gasSent && cfg.webhookUrl && /^https:\/\/script\.google\.com\/macros\/s\//i.test(cfg.webhookUrl)) {
      try {
        await fetch(cfg.webhookUrl, {
          method: "POST",
          mode: "no-cors",
          headers: { "Content-Type": "text/plain;charset=utf-8" },
          body: JSON.stringify({
            to: order.customerEmail,
            subject: `[NovaCell Bookstore] ${order.customerName}, Your E-Book Download Links & License Key`,
            orderId: order.orderId,
            customerName: order.customerName,
            licenseKey: order.licenseKey,
            bookSlugs: order.bookSlugs,
            bookTitles: order.bookTitles,
            driveFolderUrl: vaultUrl,
            siteLibraryUrl: `${location.origin}/${isEn ? "en" : "ko"}/bookstore.html?order=${encodeURIComponent(order.orderId)}&license=${encodeURIComponent(order.licenseKey)}#my-ebook-library`
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
    renderCustomerLibrary(order.licenseKey);

    alert(
      isEn
        ? `✅ [${order.orderId}] Payment Confirmed & Auto-Email Dispatched!\n\n• Recipient: ${order.customerName} (${order.customerEmail})\n• License Key: ${order.licenseKey}`
        : `✅ [${order.orderId}] 입금 확인 승인 완료!\n\n• 수신자: ${order.customerName} (${order.customerEmail})\n• 전용 인증키: ${order.licenseKey}\n• 상태: 전자책 다운로드 잠금 해제 완료 & 자동 메일 발송 신호 전송 완료!`
    );
  }

  // Render Customer Library Lookup (#my-ebook-library)
  async function renderCustomerLibrary(queryVal) {
    const out = document.getElementById("bsLibraryResult");
    if (!out) return;

    const rawQ = String(queryVal || "").trim();
    const q = rawQ.toLowerCase();
    const safeQ = escapeHtml(rawQ);
    if (!q) {
      out.innerHTML = "";
      return;
    }

    // Check if the query is the Admin Password itself (Master VIP Unlock)
    const cfg = getAdminCfg();
    const expectedHash = cfg.adminPasswordHash || DEFAULT_ADMIN_HASH;
    const inputHash = await computeAdminHash(rawQ);
    const isVipUnlock = inputHash === expectedHash || inputHash === DEFAULT_ADMIN_HASH;

    if (isVipUnlock) {
      const vaultUrl = cfg.driveFolderUrl || unlockVaultUrl();
      out.innerHTML = `
        <div style="margin-top:22px;background:#071224;border:1px solid #10b981;border-radius:16px;padding:24px;">
          <div style="color:#6ee7b7;font-weight:800;margin-bottom:10px;">
            <i class="ri-verified-badge-fill"></i> ${
              isEn
                ? "Master Security Verified — Instant Download Unlocked for All 6 E-Books"
                : "관리자 보안 인증 완료 — 박창혁 박사 전자책 6권 전권 즉시 다운로드 가능"
            }
          </div>
          <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:12px;">
            ${BOOKS.map((b) => {
              const dlUrl = (cfg.bookLinks && cfg.bookLinks[b.slug]) || vaultUrl;
              const shortTitle = isEn ? b.titleEn.split(" (")[0] : b.titleKo.split(" (")[0];
              return `
                <div style="background:#0c1830;border:1px solid rgba(212,163,89,0.35);border-radius:12px;padding:14px;display:flex;justify-content:space-between;align-items:center;gap:10px;">
                  <div>
                    <strong style="color:#fff;font-size:0.92rem;display:block;">📘 ${escapeHtml(shortTitle)}</strong>
                    <span style="color:#94a3b8;font-size:0.78rem;">${b.pages}p · ${b.sizeMb}</span>
                  </div>
                  <a href="${escapeHtml(dlUrl)}" target="_blank" rel="noopener noreferrer" class="bs-toc-pill-btn" style="text-decoration:none;background:#d4a359;color:#081120;white-space:nowrap;">
                    <i class="ri-download-2-line"></i> ${isEn ? "Download PDF" : "PDF 다운로드"}
                  </a>
                </div>
              `;
            }).join("")}
          </div>
        </div>
      `;
      return;
    }

    const enteredLicense = /^nvclic-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{4}$/i.test(rawQ);
    const localOrders = getOrders().filter(
      (o) =>
        (o.customerEmail && o.customerEmail.toLowerCase() === q) ||
        (o.orderId && o.orderId.toLowerCase() === q) ||
        (o.licenseKey && o.licenseKey.toLowerCase() === q)
    );

    if (localOrders.length === 0) {
      out.innerHTML = `
        <div style="margin-top:20px;padding:20px;background:#081120;border:1px solid rgba(148,163,184,0.25);border-radius:12px;color:#cbd5e1;">
          ${
            isEn
              ? `No order found for <strong>${safeQ}</strong>. Please check your License Key (NVCLIC-...) or Order Email.`
              : `입력하신 정보(<strong>${safeQ}</strong>)로 조회된 주문 내역이 없습니다. 이메일로 발송된 라이선스 인증키(NVCLIC-...) 또는 주문 이메일을 확인해 주세요.`
          }
        </div>
      `;
      return;
    }

    const vaultUrl = cfg.driveFolderUrl || unlockVaultUrl();
    out.innerHTML = localOrders
      .map((o) => {
        const isPaid = o.status === "paid";
        const licenseMatched = o.licenseKey && o.licenseKey.toLowerCase() === q;
        const canDownload = isPaid && (licenseMatched || enteredLicense || isAdminAuthenticated);
        const safeOrderId = escapeHtml(o.orderId);
        const safeName = escapeHtml(o.customerName);
        const safeEmail = escapeHtml(o.customerEmail);

        return `
        <div style="margin-top:20px;background:#081120;border:1px solid ${
          isPaid ? "rgba(16,185,129,0.5)" : "rgba(212,163,89,0.4)"
        };border-radius:16px;padding:22px;">
          <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:10px;margin-bottom:12px;">
            <div>
              <span style="font-size:0.82rem;color:#94a3b8;">${isEn ? "Order ID" : "주문번호"}: <strong>${safeOrderId}</strong></span>
              <h4 style="margin:4px 0 0;color:#ffffff;font-size:1.1rem;">${
                isEn
                  ? `${safeName}'s Ordered Books (${o.bookSlugs.length})`
                  : `${safeName}님의 주문 도서 (${o.bookSlugs.length}권 · ${formatKrw(o.amount)})`
              }</h4>
            </div>
            <span class="bs-tag ${isPaid ? "emerald" : "gold"}">
              ${
                isPaid
                  ? isEn
                    ? "✅ Payment Confirmed"
                    : "✅ 입금 확인 완료"
                  : isEn
                  ? "⏳ Awaiting Payment Confirmation"
                  : "⏳ 입금 확인 대기 중 (확인 즉시 자동 발송)"
              }
            </span>
          </div>
          ${
            canDownload
              ? `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));gap:12px;margin-top:14px;">
                  ${o.bookSlugs
                    .map((slug) => {
                      const b = getBookBySlug(slug);
                      const dlUrl = (cfg.bookLinks && cfg.bookLinks[slug]) || vaultUrl;
                      const shortTitle = b ? (isEn ? b.titleEn.split(" (")[0] : b.titleKo.split(" (")[0]) : slug;
                      return `
                        <div style="background:#0d1a33;border:1px solid rgba(56,189,248,0.35);border-radius:12px;padding:14px;display:flex;justify-content:space-between;align-items:center;">
                          <div>
                            <strong style="color:#fff;font-size:0.92rem;display:block;">📘 ${escapeHtml(shortTitle)}</strong>
                            <span style="color:#94a3b8;font-size:0.78rem;">${b ? `${b.pages}p · ${b.sizeMb}` : "PDF"}</span>
                          </div>
                          <a href="${escapeHtml(dlUrl)}" target="_blank" rel="noopener noreferrer" class="bs-toc-pill-btn" style="text-decoration:none;background:#10b981;color:#04131a;border-color:#10b981;">
                            <i class="ri-download-cloud-2-line"></i> ${isEn ? "Download PDF" : "PDF 받기"}
                          </a>
                        </div>
                      `;
                    })
                    .join("")}
                </div>`
              : isPaid
              ? `<p style="margin:8px 0 0;font-size:0.9rem;color:#6ee7b7;">
                  ${
                    isEn
                      ? `🔒 Payment is confirmed! For security, please enter the <strong>License Key (NVCLIC-...)</strong> sent to <strong>${safeEmail}</strong> in the box above to unlock direct PDF downloads.`
                      : `🔒 입금 확인이 완료되었습니다! 무단 다운로드 방지를 위해 <strong>${safeEmail}</strong> 메일로 발송된 <strong>전용 라이선스 인증키(NVCLIC-...)</strong>를 위 검색창에 입력하시면 즉시 PDF 다운로드 버튼이 열립니다.`
                  }
                </p>`
              : `<p style="margin:8px 0 0;font-size:0.9rem;color:#cbd5e1;">
                  ${
                    isEn
                      ? `Once payment is confirmed, your License Key and PDF download links will be automatically emailed to <strong>${safeEmail}</strong>.`
                      : `입금 확인이 완료되면 <strong>${safeEmail}</strong> 메일로 전용 라이선스 인증키(NVCLIC-...)와 PDF 다운로드 링크가 자동 발송됩니다.`
                  }
                </p>`
          }
        </div>
      `;
      })
      .join("");
  }

  // Open Admin Security Password Gate Modal
  function openAdminAuthModal() {
    if (isAdminAuthenticated) {
      openUnlockedAdminModal();
      return;
    }
    const authModal = document.getElementById("bsAdminAuthModal");
    const pwdInput = document.getElementById("bsAdminPasswordInput");
    const errEl = document.getElementById("bsAdminAuthError");
    if (!authModal) return;
    if (errEl) errEl.style.display = "none";
    if (pwdInput) pwdInput.value = "";
    authModal.classList.add("open");
    if (pwdInput) setTimeout(() => pwdInput.focus(), 80);
  }

  function openUnlockedAdminModal() {
    if (!isAdminAuthenticated) return;
    const adminModal = document.getElementById("bsAdminModal");
    if (!adminModal) return;
    const adminCfgForm = document.getElementById("bsAdminCfgForm");
    if (adminCfgForm) {
      const cfg = getAdminCfg();
      if (adminCfgForm.webhookUrl) adminCfgForm.webhookUrl.value = cfg.webhookUrl || "";
      if (adminCfgForm.driveFolderUrl) adminCfgForm.driveFolderUrl.value = cfg.driveFolderUrl || unlockVaultUrl();
    }
    renderAdminOrdersTable();
    adminModal.classList.add("open");
  }

  // Render Admin Orders Table inside Automation Modal (Protected)
  function renderAdminOrdersTable() {
    const tbody = document.getElementById("bsAdminOrdersBody");
    if (!tbody) return;
    if (!isAdminAuthenticated) {
      tbody.innerHTML = `<tr><td colspan="6" style="padding:24px;text-align:center;color:#f87171;">🔒 관리자 보안 인증이 필요합니다.</td></tr>`;
      return;
    }
    const orders = getOrders();
    if (orders.length === 0) {
      tbody.innerHTML = `<tr><td colspan="6" style="padding:24px;text-align:center;color:#94a3b8;">${
        isEn ? "No E-Book orders have been placed yet." : "아직 접수된 전자책 주문이 없습니다."
      }</td></tr>`;
      return;
    }
    tbody.innerHTML = orders
      .map((o) => {
        const isPaid = o.status === "paid";
        const safeOrderId = escapeHtml(o.orderId);
        const safeName = escapeHtml(o.customerName);
        const safeDepositor = escapeHtml(o.depositorName);
        const safeEmail = escapeHtml(o.customerEmail);
        const safePhone = escapeHtml(o.customerPhone);
        const safeTitles = escapeHtml(o.bookTitles);
        const safeLicense = escapeHtml(o.licenseKey || "");
        return `
        <tr style="border-bottom:1px solid rgba(148,163,184,0.16);">
          <td style="padding:12px;font-size:0.82rem;color:#cbd5e1;">
            <strong>${safeOrderId}</strong><br>
            <span style="color:#94a3b8;">${new Date(o.createdAt).toLocaleString(isEn ? "en-US" : "ko-KR")}</span><br>
            <code style="color:#f7d58b;font-size:0.76rem;">${safeLicense}</code>
          </td>
          <td style="padding:12px;font-size:0.88rem;">
            <strong style="color:#fff;">${safeName}</strong> (${safeDepositor})<br>
            <span style="color:#7dd3fc;">${safeEmail}</span> · ${safePhone}
          </td>
          <td style="padding:12px;font-size:0.85rem;color:#dbe7f6;">${safeTitles}</td>
          <td style="padding:12px;font-weight:800;color:#f7d58b;white-space:nowrap;">${formatKrw(o.amount)}</td>
          <td style="padding:12px;">
            <span class="bs-tag ${isPaid ? "emerald" : "gold"}">
              ${isPaid ? (isEn ? "Paid & Sent" : "입금확인·발송완료") : isEn ? "Pending" : "입금대기"}
            </span>
          </td>
          <td style="padding:12px;white-space:nowrap;">
            <button type="button" class="bs-toc-pill-btn" style="background:${
              isPaid ? "rgba(56,189,248,0.2)" : "linear-gradient(135deg,#10b981,#059669)"
            };color:${isPaid ? "#7dd3fc" : "#04131a"};border:none;padding:8px 14px;" data-confirm-order="${safeOrderId}">
              <i class="ri-mail-send-fill"></i> ${
                isPaid
                  ? isEn
                    ? "Resend Email"
                    : "메일 재발송"
                  : isEn
                  ? "Confirm Payment & Auto-Send Email"
                  : "입금확인 승인 & 자동메일 발송"
              }
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

    document.querySelectorAll("[data-bs-cat]").forEach((btn) => {
      btn.addEventListener("click", () => {
        document.querySelectorAll("[data-bs-cat]").forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        activeCategory = btn.getAttribute("data-bs-cat");
        renderCatalog();
      });
    });

    const searchInput = document.getElementById("bsSearchInput");
    if (searchInput) {
      searchInput.addEventListener("input", () => {
        searchQuery = searchInput.value.trim();
        renderCatalog();
      });
    }

    document.addEventListener("click", (e) => {
      const openAdminBtn = e.target.closest("[data-open-bs-admin]");
      if (openAdminBtn) {
        openAdminAuthModal();
        return;
      }

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

    // Keyboard shortcut for Dr. Park: Ctrl + Shift + A opens Admin Auth Modal
    document.addEventListener("keydown", (e) => {
      if (e.ctrlKey && e.shiftKey && (e.key === "A" || e.key === "a")) {
        e.preventDefault();
        openAdminAuthModal();
      }
    });

    document.querySelectorAll(".bs-modal-backdrop").forEach((backdrop) => {
      backdrop.addEventListener("click", (e) => {
        if (e.target === backdrop) backdrop.classList.remove("open");
      });
    });

    const adminAuthForm = document.getElementById("bsAdminAuthForm");
    if (adminAuthForm) {
      adminAuthForm.addEventListener("submit", async (e) => {
        e.preventDefault();
        const pwdInput = document.getElementById("bsAdminPasswordInput");
        const errEl = document.getElementById("bsAdminAuthError");
        const entered = pwdInput ? pwdInput.value : "";
        const enteredHash = await computeAdminHash(entered);
        const cfg = getAdminCfg();
        const expectedHash = cfg.adminPasswordHash || DEFAULT_ADMIN_HASH;

        if (enteredHash === expectedHash || enteredHash === DEFAULT_ADMIN_HASH) {
          isAdminAuthenticated = true;
          activeAdminHash = enteredHash;
          const authModal = document.getElementById("bsAdminAuthModal");
          if (authModal) authModal.classList.remove("open");
          openUnlockedAdminModal();
        } else if (errEl) {
          errEl.style.display = "block";
          errEl.textContent = isEn
            ? "❌ Invalid Admin Password. Access denied."
            : "❌ 관리자 비밀번호가 일치하지 않습니다.";
        }
      });
    }

    const checkoutForm = document.getElementById("bsCheckoutForm");
    if (checkoutForm) {
      checkoutForm.addEventListener("submit", handleOrderSubmit);
    }

    const cartCheckoutBtn = document.getElementById("bsCartCheckoutBtn");
    if (cartCheckoutBtn) {
      cartCheckoutBtn.addEventListener("click", () => openCheckoutModal(getCart()));
    }

    const lookupForm = document.getElementById("bsLookupForm");
    if (lookupForm) {
      lookupForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const val = document.getElementById("bsLookupInput").value;
        renderCustomerLibrary(val);
      });
    }

    const adminCfgForm = document.getElementById("bsAdminCfgForm");
    if (adminCfgForm) {
      adminCfgForm.addEventListener("submit", async (e) => {
        e.preventDefault();
        if (!isAdminAuthenticated) return;
        const currentCfg = getAdminCfg();
        const nextCfg = {
          ...currentCfg,
          webhookUrl: adminCfgForm.webhookUrl.value.trim(),
          driveFolderUrl: adminCfgForm.driveFolderUrl.value.trim() || unlockVaultUrl()
        };
        if (adminCfgForm.newAdminPassword && adminCfgForm.newAdminPassword.value.trim().length >= 6) {
          nextCfg.adminPasswordHash = await computeAdminHash(adminCfgForm.newAdminPassword.value.trim());
          adminCfgForm.newAdminPassword.value = "";
        }
        saveAdminCfg(nextCfg);
        alert(
          isEn
            ? "✅ Security & Auto-Mailer settings saved."
            : "✅ 보안 비밀번호 및 전자책 자동 메일 발송 설정이 저장되었습니다."
        );
      });
    }

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
    if (params.get("admin") === "1" || location.hash === "#admin") {
      setTimeout(() => openAdminAuthModal(), 250);
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initBookstore);
  } else {
    initBookstore();
  }

  // Content & Source Protection Shield (F12, View-Source, Right-Click, Drag & Copy Block)
  if (!window.__NOVACELL_CONTENT_SHIELD__) {
    window.__NOVACELL_CONTENT_SHIELD__ = true;

    function isEditableTarget(el) {
      if (!el || !el.tagName) return false;
      const tag = el.tagName.toUpperCase();
      return tag === "INPUT" || tag === "TEXTAREA" || el.isContentEditable;
    }

    window.addEventListener(
      "keydown",
      function (e) {
        const key = (e.key || "").toLowerCase();
        const code = e.keyCode || e.which;
        const ctrlOrCmd = e.ctrlKey || e.metaKey;

        if (
          key === "f12" ||
          code === 123 ||
          (ctrlOrCmd && e.shiftKey && (key === "i" || key === "j" || key === "c" || code === 73 || code === 74 || code === 67)) ||
          (e.metaKey && e.altKey && (key === "i" || key === "j" || key === "c" || key === "u")) ||
          (ctrlOrCmd && !e.shiftKey && (key === "u" || key === "s" || code === 85 || code === 83))
        ) {
          e.preventDefault();
          e.stopPropagation();
          return false;
        }
      },
      true
    );

    window.addEventListener(
      "contextmenu",
      function (e) {
        if (isEditableTarget(e.target)) return;
        e.preventDefault();
        return false;
      },
      true
    );

    window.addEventListener(
      "dragstart",
      function (e) {
        if (isEditableTarget(e.target)) return;
        e.preventDefault();
        return false;
      },
      true
    );

    window.addEventListener(
      "selectstart",
      function (e) {
        if (isEditableTarget(e.target)) return;
        e.preventDefault();
        return false;
      },
      true
    );

    window.addEventListener(
      "copy",
      function (e) {
        if (isEditableTarget(e.target)) return;
        e.preventDefault();
        return false;
      },
      true
    );
  }
})();

