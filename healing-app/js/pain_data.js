window.PAIN_CATEGORIES = {
  "1": {
    "id": "head_neck",
    "name_ko": "두경부 및 안면 질환",
    "name_en": "Head, Face & Neck Diseases",
    "icon": "fa-head-side-virus",
    "color": "#06b6d4"
  },
  "2": {
    "id": "shoulder_arm",
    "name_ko": "어깨, 상지 및 수부 질환",
    "name_en": "Shoulder, Arm, Wrist & Hand Diseases",
    "icon": "fa-hand-back-fist",
    "color": "#3b82f6"
  },
  "3": {
    "id": "chest_torso",
    "name_ko": "흉부, 복부 및 몸통 질환",
    "name_en": "Chest, Abdomen & Trunk Diseases",
    "icon": "fa-lungs",
    "color": "#10b981"
  },
  "4": {
    "id": "back_hip",
    "name_ko": "요추, 골반, 둔부 및 고관절 질환",
    "name_en": "Lumbar, Pelvis, Gluteal & Hip Diseases",
    "icon": "fa-person",
    "color": "#f59e0b"
  },
  "5": {
    "id": "knee_foot",
    "name_ko": "무릎, 발목 및 족부 질환",
    "name_en": "Knee, Leg, Ankle & Foot Diseases",
    "icon": "fa-shoe-prints",
    "color": "#ec4899"
  },
  "6": {
    "id": "autonomic_systemic",
    "name_ko": "자율신경계(Autonomic Nerve) 및 전신/특수 질환",
    "name_en": "Autonomic S & Systemic / Special Conditions",
    "icon": "fa-dna",
    "color": "#8b5cf6"
  }
};

window.CLINIC_TO_CONDITIONS_MAP = {
  "1": [
    33,
    31,
    63
  ],
  "2": [
    35,
    36,
    38,
    37,
    39,
    40,
    41,
    64
  ],
  "3": [
    9,
    10,
    55,
    56,
    32,
    34
  ],
  "4": [
    13,
    18,
    16,
    20,
    57
  ],
  "5": [
    14,
    15,
    12,
    19,
    16,
    17
  ],
  "6": [
    2,
    7,
    8,
    54
  ],
  "7": [
    11,
    24,
    25,
    22,
    58,
    59
  ],
  "8": [
    28,
    27,
    29,
    30,
    44,
    26,
    60,
    61,
    62
  ],
  "9": [
    1,
    3,
    4,
    5,
    52,
    53
  ],
  "10": [
    42,
    43,
    45,
    46,
    23,
    21,
    6,
    59
  ],
  "11": [
    47,
    48,
    49,
    50,
    51
  ]
};

window.PAIN_CONDITIONS = [
  {
    "id": 1,
    "catId": "head_neck",
    "catNum": 1,
    "category": {
      "ko": "두경부 및 안면 질환",
      "en": "Head, Neck & Facial Disorders"
    },
    "mechanism": {
      "ko": "신경유착 / 자율신경 오작동",
      "en": "[신경유착 / 자율신경 오작동] Nerve Entrapment & Autonomic Response"
    },
    "mechTags": [
      "nerve",
      "autonomic"
    ],
    "title": {
      "ko": "두피형 삼차신경통 / 두피 감각신경통",
      "en": "Scalp Trigeminal Neuralgia / Scalp Sensory Neuralgia"
    },
    "symptoms": {
      "ko": "전두부, 두정부, 측두부 두피 전체가 톡톡 쏘거나 찌릿찌릿함. 머리카락을 살짝만 건드려도 과민한 자극감 유발.",
      "en": "Shooting, stinging, or tingling sensation across the frontal, parietal, and temporal scalp. Hypersensitivity to light touch (even touching hair)."
    },
    "pathophysiology": {
      "ko": "삼차신경 말초 가지(V1, V2, V3)가 두반극근(SsC)이나 두판상근(SC)의 과 긴장에 의해 C2, C3 레벨에서 신경이 유착되거나 신경 오작동에 의해 과흥 분됨.",
      "en": "Peripheral branches of trigeminal nerve (V1, V2, V3) are entrapped at C2-C3 level due to hypertonicity of semispinalis capitis (SsC) or splenius capitis (SC), or hyper-excited via S."
    },
    "targetTissues": {
      "ko": "두반극근(Semispinalis capitis, SsC), 두판상근(Splenius capitis, SC), C2/C3 척추주위 심부근육군.",
      "en": "Semispinalis capitis (SsC), Splenius capitis (SC), C2/C3 deep paraspinal muscle group."
    },
    "palpation": {
      "ko": "C2, C3 레벨 TS 및 inferior nuchal line 근처 두반극근 근복의 뚜렷한 압통점.",
      "en": "Distinct tenderness at C2/C3 level TS and SsC muscle belly near inferior nuchal line."
    },
    "clinicalCase": {
      "ko": "수일 전부터 발생한 뒤통수에서 정수리 두피를 따라 방사되는 찌릿한 두통 및 머리카락 접촉 시 과민한 통증 사례. C2, C3 척추주위 심부근 및 두반극근 압통 부위에 NovaCell Therapy(노바셀 생체 전압 및 타깃 공명 치료)를 적용하여 신경 유착을 해소한 결과, 시술 30분 만에 두피 통증 80% 이상 소실 및 자극 과민성 정상화.",
      "en": "44yo female with headache radiating upward along posterior head and scalp for 3 days. 80% pain relief within 30 minutes following C2/C3 TS treatment with NovaCell probe."
    },
    "diagram": "images/diagrams/diagram_01.png",
    "targets": [
      {
        "code": "T1",
        "color": "#ff334b",
        "x": 69.3,
        "y": 40.9,
        "role": {
          "ko": "주 신경포착점",
          "en": "Primary Nerve Entrapment"
        },
        "name": {
          "ko": "T1: 하항선 두반극근·대후두신경 출구점 (GON & 삼차신경 교차점)",
          "en": "T1: Inferior Nuchal Line SsC & GON Exit"
        },
        "desc": {
          "ko": "[표적 해부] 하항선(Inferior Nuchal Line) 두반극근(SsC)·두판상근(SC) 상부 부착건막 및 대후두신경(GON).\n[촉지 및 시술] 외후두융기(EOP) 외측 2~2.5cm 상항선·하항선 함요처. 삼차-경수 복합체(TCC) 감작을 해제하여 두피 전체 찌릿함과 모발 접촉 과민통을 즉각 차단합니다.",
          "en": "Semispinalis capitis & splenius capitis insertion near inferior nuchal line; relieves trigeminocervical complex sensitization."
        }
      },
      {
        "code": "T2",
        "color": "#00f5d4",
        "x": 50.1,
        "y": 76.0,
        "role": {
          "ko": "후관절·신경근점",
          "en": "Facet & Nerve Root Target"
        },
        "name": {
          "ko": "T2: 경추 C2-C3 횡돌극근(TS) 및 제2선 후관절 심부점",
          "en": "T2: C2-C3 Transversospinales & Facet Line 2"
        },
        "desc": {
          "ko": "[표적 해부] C2-C3 다열근·회선근(TS) 및 제3후두신경(TON) 분절.\n[촉지 및 시술] C2·C3 극돌기 외측 1.5~2cm 경추 제2선 후관절 주두 골막 접촉. 후두부에서 정수리로 뻗치는 방사통의 뿌리 분절을 안정화합니다.",
          "en": "C2-C3 deep paraspinal transversospinales & TON facet point (Cervical Line 2 Periosteal Contact)."
        }
      },
      {
        "code": "T3",
        "color": "#ff9f43",
        "x": 38.0,
        "y": 62.0,
        "role": {
          "ko": "신경 주행·분지점",
          "en": "Nerve Pathway Target"
        },
        "name": {
          "ko": "T3: 안와상공·안와하공·이공 삼차신경 3분지 골공점 (V1·V2·V3)",
          "en": "T3: Supraorbital, Infraorbital & Mental Foramina (V1-V3)"
        },
        "desc": {
          "ko": "[표적 해부] 삼차신경 제1지(안와상절흔 V1), 제2지(안와하공 V2), 제3지(이공 V3) 골공 출구.\n[촉지 및 시술] 눈썹 내측 1/3 안와상연(V1), 동공 수직선상 광대뼈 하연 1cm(V2), 하악 제2소구치 하방(V3) 골막 타깃. 안면·두피 말초 분지 과흥분을 진정시킵니다.",
          "en": "Terminal foramina of Trigeminal nerve branches V1, V2, and V3."
        }
      },
      {
        "code": "T4",
        "color": "#38bdf8",
        "x": 62.0,
        "y": 38.0,
        "role": {
          "ko": "신경 주행·분지점",
          "en": "Nerve Pathway Target"
        },
        "name": {
          "ko": "T4: 경돌유돌공 안면-삼차 신경반사점 (귀불 뒤 오목부)",
          "en": "T4: Stylomastoid Foramen Cranial Nerve Switch"
        },
        "desc": {
          "ko": "[표적 해부] 유양돌기 전하방 경돌유돌공 및 두개저 자율신경 연접부.\n[촉지 및 시술] 귓불 뒤 유양돌기(Mastoid)와 하악지 사이 깊은 함요처. 뇌신경 흥분 역치를 낮추고 측두-두피 방사통을 제어합니다.",
          "en": "Deep hollow between mastoid process and mandibular ramus; cranial nerve reflex switch."
        }
      }
    ],
    "anatomicalLabels": [
      "Semispinalis Capitis",
      "Splenius Capitis",
      "C2-C3 Transversospinales",
      "Inferior Nuchal Line",
      "Trigeminal & Greater Occipital Nerves"
    ],
    "rifeFreq": 727,
    "searchKeywords": "두피형 삼차신경통 / 두피 감각신경통 Scalp Trigeminal Neuralgia / Scalp Sensory Neuralgia 전두부, 두정부, 측두부 두피 전체가 톡톡 쏘거나 찌릿찌릿함. 머리카락을 살짝만 건드려도 과민한 자극감 유발. Shooting, stinging, or tingling sensation across the frontal, parietal, and temporal scalp. Hypersensitivity to light touch (even touching hair). 두경부 및 안면 질환 Head, Neck & Facial Disorders"
  },
  {
    "id": 2,
    "catId": "head_neck",
    "catNum": 1,
    "category": {
      "ko": "두경부 및 안면 질환",
      "en": "Head, Neck & Facial Disorders"
    },
    "mechanism": {
      "ko": "신경유착",
      "en": "[신경유착] Nerve Entrapment"
    },
    "mechTags": [
      "nerve"
    ],
    "title": {
      "ko": "소두후신경 유착증",
      "en": "Lesser Occipital Nerve (LON) Entrapment"
    },
    "symptoms": {
      "ko": "귀 뒤쪽, 목 전외측, 두피 옆면이 바늘로 콕콕 쑤시듯 아프고 피부 타진 시 극심한 자각통 발생.",
      "en": "Stabbing, needle-like pain behind the ear, anterolateral neck, and lateral scalp, with severe tactile dysesthesia upon tapping."
    },
    "pathophysiology": {
      "ko": "경신경총(superficial cervical plexus) 분지인 소후두신경(LON)이 흉쇄유돌근(SCM) 중간 유발점이나 상부경추(C2, C3) 추간공/심부근육에 의해 유착됨.",
      "en": "Lesser occipital nerve (LON), a branch of superficial cervical plexus, is entrapped by trigger points in mid-SCM or C2/C3 intervertebral foramina / deep paraspinal muscles."
    },
    "targetTissues": {
      "ko": "흉쇄유돌근(SCM) 중간 부위, C2/C3 추간공 및 척추주위 심부근육.",
      "en": "Middle portion of sternocleidomastoid (SCM), C2/C3 intervertebral foramina, and deep paraspinal muscles."
    },
    "palpation": {
      "ko": "흉쇄유돌근(SCM) 후연 중간 지점(경신경총 4개 감각가지 분지점)을 집어 올렸을 때(pinch & roll) 뚜렷한 압통점.",
      "en": "Distinct tenderness elicited by pinching and rolling (Pinch & Roll) posterior border of mid-SCM (branching point of 4 sensory branches of superficial cervical plexus)."
    },
    "clinicalCase": {
      "ko": "귀 뒤쪽과 후두부 외측의 바늘로 찌르는 듯한 박동성 신경통으로 수면 장애를 겪던 사례. 흉쇄유돌근(SCM) 후연 신경 유착 지점 및 C2, C3 분절에 NovaCell Therapy를 적용하여 신경 압박을 이완시켰으며, 시술 당일 통증 소실 및 편안한 숙면 회복.",
      "en": "73yo female unable to sleep for 2 weeks due to stabbing pain behind left ear. Pain resolved and restful sleep restored after left mid-SCM and C2/C3 TS NovaCell treatment."
    },
    "diagram": "images/diagrams/diagram_02.png",
    "targets": [
      {
        "code": "T1",
        "color": "#ff334b",
        "x": 37.1,
        "y": 56.8,
        "role": {
          "ko": "주 신경포착점",
          "en": "Primary Nerve Entrapment"
        },
        "name": {
          "ko": "T1: 흉쇄유돌근(SCM) 후연 중간 표재경신경총점 (Erb's Point)",
          "en": "T1: SCM Posterior Border Erb's Point (LON Exit)"
        },
        "desc": {
          "ko": "[표적 해부] 표재경신경총 4대 피지 분기점(Erb's point) 및 소후두신경(LON, C2-C3).\n[촉지 및 시술] 흉쇄유돌근 후연 중간 지점을 집어 올릴 때(Pinch & Roll) 가장 예리한 압통점. 귀 뒤·측두부 바늘로 찌르는 통증의 1차 포착점입니다.",
          "en": "Mid-posterior border of SCM (Erb's point) where Lesser Occipital Nerve emerges."
        }
      },
      {
        "code": "T2",
        "color": "#00f5d4",
        "x": 56.0,
        "y": 54.0,
        "role": {
          "ko": "힘줄·골막 부착점",
          "en": "Tendon & Periosteal Target"
        },
        "name": {
          "ko": "T2: 유양돌기 후하방 소후두신경-두판상근 부착점 (골막 부착부)",
          "en": "T2: Retro-Mastoid LON & Splenius Capitis Insertion"
        },
        "desc": {
          "ko": "[표적 해부] 유양돌기 후하방 두판상근·흉쇄유돌근 상부 골막 부착부 및 소후두신경 상행로.\n[촉지 및 시술] 귀 뒤 유양돌기 바로 뒤쪽 오목한 골막 경계부(완골~풍지 구간). 귀 뒤쪽과 측두부 두피 통증을 즉각 소실시킵니다.",
          "en": "Retro-mastoid groove at splenius capitis & SCM superior insertion."
        }
      },
      {
        "code": "T3",
        "color": "#ff9f43",
        "x": 49.0,
        "y": 71.0,
        "role": {
          "ko": "후관절·신경근점",
          "en": "Facet & Nerve Root Target"
        },
        "name": {
          "ko": "T3: 상부 경추 C1-C2 후두하삼각 및 C2-C3 추간공 심부점",
          "en": "T3: Suboccipital Triangle (C1-C2) & C2-C3 Foramen"
        },
        "desc": {
          "ko": "[표적 해부] 상·하두사근, 대후두직근 사이 후두하삼각 및 추골동맥 주위 교감신경총.\n[촉지 및 시술] 상항선 아래 C2 극돌기 외측 2cm 오목한 함요처. 뇌혈류 순환 촉진 및 후두신경 근위부 포착 해소 핵심 스위치입니다.",
          "en": "Suboccipital triangle core & C2-C3 intervertebral foramen."
        }
      },
      {
        "code": "T4",
        "color": "#38bdf8",
        "x": 62.0,
        "y": 38.0,
        "role": {
          "ko": "신경 주행·분지점",
          "en": "Nerve Pathway Target"
        },
        "name": {
          "ko": "T4: 대후두신경 상항선 출구점 (외후두융기 외측 2.5cm)",
          "en": "T4: Greater Occipital Nerve Superior Nuchal Line Exit"
        },
        "desc": {
          "ko": "[표적 해부] 대후두신경(C2 후지) 승모근 및 두반극근 부착건막 관통부.\n[촉지 및 시술] 외후두융기(EOP)에서 외측 2~2.5cm 상항선 바로 아래 압통점. 후두부~두정부 방사통을 동시 차단합니다.",
          "en": "GON exit 2.5cm lateral to EOP just below superior nuchal line."
        }
      }
    ],
    "anatomicalLabels": [
      "Lesser Occipital Nerve",
      "Sternocleidomastoid (SCM)",
      "Splenius Capitis",
      "C2-C3 Cervical Root"
    ],
    "rifeFreq": 787,
    "searchKeywords": "소두후신경 유착증 Lesser Occipital Nerve (LON) Entrapment 귀 뒤쪽, 목 전외측, 두피 옆면이 바늘로 콕콕 쑤시듯 아프고 피부 타진 시 극심한 자각통 발생. Stabbing, needle-like pain behind the ear, anterolateral neck, and lateral scalp, with severe tactile dysesthesia upon tapping. 두경부 및 안면 질환 Head, Neck & Facial Disorders"
  },
  {
    "id": 3,
    "catId": "head_neck",
    "catNum": 1,
    "category": {
      "ko": "두경부 및 안면 질환",
      "en": "Head, Neck & Facial Disorders"
    },
    "mechanism": {
      "ko": "신경유착",
      "en": "[TTP / ] Tendon Traction & Nerve Entrapment"
    },
    "mechTags": [
      "nerve"
    ],
    "title": {
      "ko": "측두근 신경유착 / 측두부 감각 신경통",
      "en": "Temporalis TTP / Temporal Sensory Neuralgia"
    },
    "symptoms": {
      "ko": "관자놀이(temple) 부위가 주기적으로 콕콕 쑤시고 찌릿하거나, 머리를 띠로 두른 듯한 강한 압박감.",
      "en": "Periodic stabbing or tingling pain in temple, or heavy band-like compressive sensation around the head."
    },
    "pathophysiology": {
      "ko": "Zygomaticotemporal n.가 측두근 근막을 뚫고 나오는 지점에서 유착되 거나, 외익상근에 의해 심측두신경(deep temporal n.)이 유착되어 측두 근 허혈/골막 자극(신경유착/견인통) 발생.",
      "en": "Entrapment of zygomaticotemporal nerve as it pierces temporalis fascia, or entrapment of deep temporal nerve by lateral pterygoid, causing temporalis ischemia/periosteal traction (TTP/)."
    },
    "targetTissues": {
      "ko": "측두근(Temporalis) 기시부 골막, 외익상근(Lateral pterygoid, superior head).",
      "en": "Temporalis muscle origin periosteum, Lateral pterygoid muscle (superior head)."
    },
    "palpation": {
      "ko": "관자놀이 부근 측두근 근복 압통점 및 외익상근 부위.",
      "en": "Temporalis muscle belly tender point near temple and lateral pterygoid region."
    },
    "clinicalCase": {
      "ko": "관자놀이 부위가 날카롭게 콕콕 쑤시고 전기가 통하듯 뻗치는 편두통 양상의 감각신경통 사례. 관골측두신경 출구부 및 측두근 심부 긴장점에 NovaCell Therapy를 집중 조율한 결과, 시술 직후 통증 지수(VAS)가 8에서 0으로 극적으로 개선되며 완전 회복.",
      "en": "59yo female with sharp, electric shock-like stabbing temple pain for 2 days. Complete resolution (VAS 8??) following NovaCell treatment at zygomaticotemporal nerve exit point in temporalis."
    },
    "diagram": "images/diagrams/diagram_03.png",
    "targets": [
      {
        "code": "T1",
        "color": "#ff334b",
        "x": 58.4,
        "y": 32.7,
        "role": {
          "ko": "주 신경포착점",
          "en": "Primary Nerve Entrapment"
        },
        "name": {
          "ko": "T1: 측두근(Temporalis) 전·중부 근복 및 이개측두신경 포착점",
          "en": "T1: Temporalis Muscle Belly & Auriculotemporal Nerve"
        },
        "desc": {
          "ko": "[표적 해부] 측두근 전·중간 섬유 근복 및 이개측두신경·협골측두신경 관통부.\n[촉지 및 시술] 관자놀이(Temple) 중앙 및 안와 외측연 뒤쪽 2cm 측두근 건막 압통점. 편두통·관자놀이 박동통을 즉각 해소합니다.",
          "en": "Temporalis anterior/middle belly & auriculotemporal nerve entrapment point."
        }
      },
      {
        "code": "T2",
        "color": "#00f5d4",
        "x": 62.2,
        "y": 61.9,
        "role": {
          "ko": "심부 근복·근막점",
          "en": "Deep Myofascial Trigger Point"
        },
        "name": {
          "ko": "T2: 하악절흔 외측익돌근 상·하두 심부 타깃 (측두하와)",
          "en": "T2: Mandibular Notch Lateral Pterygoid Core"
        },
        "desc": {
          "ko": "[표적 해부] 관골궁 하방 하악절흔(Mandibular notch) 심부의 외측익돌근 상·하두 및 삼차신경 하악지(V3).\n[촉지 및 시술] 귀 앞 관골궁 바로 아래 입을 살짝 벌릴 때 열리는 반달형 함요처. 측두부 연관통과 턱관절-편두통 연쇄 회로를 끊어줍니다.",
          "en": "Lateral pterygoid muscle deep to mandibular notch below zygomatic arch."
        }
      },
      {
        "code": "T3",
        "color": "#ff9f43",
        "x": 38.0,
        "y": 62.0,
        "role": {
          "ko": "힘줄·골막 부착점",
          "en": "Tendon & Periosteal Target"
        },
        "name": {
          "ko": "T3: 귀 앞 이개측두신경-측두하악관절낭 통과점",
          "en": "T3: Pre-auricular Auriculotemporal Nerve & TMJ Capsule"
        },
        "desc": {
          "ko": "[표적 해부] 이주(Tragus) 전방 1cm 이개측두신경 상행로 및 턱관절 후방 원판인대.\n[촉지 및 시술] 귀 구슬(이주) 바로 앞 관절낭 함요처. 귀에서 관자놀이로 뻗치는 신경통을 제어합니다.",
          "en": "1cm anterior to tragus over auriculotemporal nerve and posterior TMJ capsule."
        }
      },
      {
        "code": "T4",
        "color": "#38bdf8",
        "x": 73.0,
        "y": 47.0,
        "role": {
          "ko": "후관절·신경근점",
          "en": "Facet & Nerve Root Target"
        },
        "name": {
          "ko": "T4: 상부 경추 C1-C2 횡돌기 및 두판상근 상부점 (GOTS 스위치)",
          "en": "T4: C1-C2 Transverse Process & GOTS Relay Switch"
        },
        "desc": {
          "ko": "[표적 해부] 대후두신경-삼차신경 증후군(GOTS) 연결축인 C1-C2 후두하부 및 두판상근 상단.\n[촉지 및 시술] 유양돌기 후내측 풍지혈 선상. 난치성 편두통 및 안구 뒤 통증의 중추 감작을 리셋합니다.",
          "en": "C1-C2 GOTS relay point medial to mastoid process."
        }
      }
    ],
    "anatomicalLabels": [
      "Zygomaticotemporal Nerve",
      "Temporalis Muscle",
      "Deep Temporal Nerves",
      "Zygomatic Arch"
    ],
    "rifeFreq": 528,
    "searchKeywords": "측두근 신경유착 / 측두부 감각 신경통 Temporalis TTP / Temporal Sensory Neuralgia 관자놀이(temple) 부위가 주기적으로 콕콕 쑤시고 찌릿하거나, 머리를 띠로 두른 듯한 강한 압박감. Periodic stabbing or tingling pain in temple, or heavy band-like compressive sensation around the head. 두경부 및 안면 질환 Head, Neck & Facial Disorders"
  },
  {
    "id": 4,
    "catId": "head_neck",
    "catNum": 1,
    "category": {
      "ko": "두경부 및 안면 질환",
      "en": "Head, Neck & Facial Disorders"
    },
    "mechanism": {
      "ko": "신경유착",
      "en": "[신경유착] Nerve Entrapment"
    },
    "mechTags": [
      "nerve"
    ],
    "title": {
      "ko": "전두근 신경유착 / 전두부 신경통",
      "en": "Frontalis / Frontal Neuralgia"
    },
    "symptoms": {
      "ko": "우측 또는 좌측 앞이마 겉살이 찌릿찌릿하게 아프고, 가볍게 톡톡 두드리면 이마 표면으로 찌릿함이 확산됨.",
      "en": "Tingling pain on superficial scalp/skin of right or left forehead; tapping lightly spreads tingling sensation across forehead."
    },
    "pathophysiology": {
      "ko": "삼차신경 V1 가지인 supraorbital n.가 전두근(frontalis) 및 눈눈썹근 근막을 뚫고 나올 때 전두근 과긴장으로 유착됨.",
      "en": "Entrapment of supraorbital nerve (trigeminal V1 branch) due to hypertonicity of frontalis and corrugator supercilii fascia as it exits supraorbital canal/fascia."
    },
    "targetTissues": {
      "ko": "전두근(Frontalis), 안륜근/추미근 영역.",
      "en": "Frontalis muscle, Orbicularis oculi / Corrugator supercilii region."
    },
    "palpation": {
      "ko": "앞이마 외측 및 안화상공(supraorbital foramen) 상방 전두근 근복의 가 장 심한 압통점.",
      "en": "Maximum tenderness in lateral frontalis muscle belly above supraorbital foramen."
    },
    "clinicalCase": {
      "ko": "신체 활동 후 전두부 이마 표면에 발생한 찌릿찌릿한 피부 감각 과민과 신경통 사례. 안와상신경 절흔 및 전두근 최대 압통 영역에 NovaCell Therapy를 가동하여 신경근막 긴장을 정상화하였으며, 15분 내 통증 90% 이상 감소 및 편안함 회복.",
      "en": "59yo female with tingling forehead skin pain after hiking. 90% pain reduction within 10 minutes following NovaCell conduction at most tender frontalis point."
    },
    "diagram": "images/diagrams/diagram_04.png",
    "targets": [
      {
        "code": "T1",
        "color": "#ff334b",
        "x": 74.2,
        "y": 24.9,
        "role": {
          "ko": "주 신경포착점",
          "en": "Primary Nerve Entrapment"
        },
        "name": {
          "ko": "T1: 안와상공·안와상절흔 신경출구점 (V1 상안와신경 출구 골막부)",
          "en": "T1: Supraorbital Foramen/Notch V1 Periosteal Contact"
        },
        "desc": {
          "ko": "[표적 해부] 삼차신경 제1지(V1) 분지인 상안와신경(Supraorbital n.) 골공 출구 및 추미근 기시부.\n[촉지 및 시술] 눈썹 내측 1/3 지점 안와상연의 작은 홈(Notch). 앞이마 전체로 번지는 찌릿한 신경통의 핵심 출구 감압점입니다.",
          "en": "Supraorbital notch at medial 1/3 of eyebrow; primary V1 nerve exit."
        }
      },
      {
        "code": "T2",
        "color": "#00f5d4",
        "x": 54.3,
        "y": 41.4,
        "role": {
          "ko": "신경 주행·분지점",
          "en": "Nerve Pathway Target"
        },
        "name": {
          "ko": "T2: 추미근(Corrugator) 및 활차상신경 포착점 (미간 외측)",
          "en": "T2: Corrugator Supercilii & Supratrochlear Nerve"
        },
        "desc": {
          "ko": "[표적 해부] 눈썹 내측단 추미근·비근근 및 활차상신경(Supratrochlear n.) 관통부.\n[촉지 및 시술] 미간에서 눈썹 내측 끝 바로 위 압통점. 안구 내측 및 전두부 통증을 해소합니다.",
          "en": "Supratrochlear nerve entrapment through corrugator supercilii at medial brow."
        }
      },
      {
        "code": "T3",
        "color": "#ff9f43",
        "x": 77.5,
        "y": 44.1,
        "role": {
          "ko": "힘줄·골막 부착점",
          "en": "Tendon & Periosteal Target"
        },
        "name": {
          "ko": "T3: 전두근(Frontalis) 중앙 근복 및 모상건막 이행부",
          "en": "T3: Frontalis Belly & Galea Aponeurotica Junction"
        },
        "desc": {
          "ko": "[표적 해부] 이마 전면 전두근 근복(양동공 수직선상 이마 중앙) 및 상안와신경 피지.\n[촉지 및 시술] 눈썹 위 2~3cm 전두골 전면 골막 및 근복. 이마 표면 감각신경 과민을 진정시킵니다.",
          "en": "Frontalis muscle belly 2-3cm above eyebrow along pupil line."
        }
      },
      {
        "code": "T4",
        "color": "#38bdf8",
        "x": 62.0,
        "y": 38.0,
        "role": {
          "ko": "후관절·신경근점",
          "en": "Facet & Nerve Root Target"
        },
        "name": {
          "ko": "T4: 후두하삼각 C1-C2 대후두신경 원격 반사점",
          "en": "T4: Suboccipital C1-C2 GON-V1 Reflex Switch"
        },
        "desc": {
          "ko": "[표적 해부] 후두하삼각(C1-C2) 대후두신경 근위부 (삼차신경 척수핵 V1 수렴 분절).\n[촉지 및 시술] 뒷머리 상항선 직하방 후두하 함요처. 후두신경에서 앞이마(V1)로 투사되는 신경 반사 고리를 차단합니다.",
          "en": "Suboccipital C1-C2 point modulating trigeminal V1 convergence."
        }
      }
    ],
    "anatomicalLabels": [
      "Supraorbital Nerve",
      "Supratrochlear Nerve",
      "Frontalis Muscle",
      "Galea Aponeurotica"
    ],
    "rifeFreq": 727,
    "searchKeywords": "전두근 신경유착 / 전두부 신경통 Frontalis / Frontal Neuralgia 우측 또는 좌측 앞이마 겉살이 찌릿찌릿하게 아프고, 가볍게 톡톡 두드리면 이마 표면으로 찌릿함이 확산됨. Tingling pain on superficial scalp/skin of right or left forehead; tapping lightly spreads tingling sensation across forehead. 두경부 및 안면 질환 Head, Neck & Facial Disorders"
  },
  {
    "id": 5,
    "catId": "head_neck",
    "catNum": 1,
    "category": {
      "ko": "두경부 및 안면 질환",
      "en": "Head, Neck & Facial Disorders"
    },
    "mechanism": {
      "ko": "자율신경 오작동 / 힘줄견인",
      "en": "[S / TTP] Autonomic Response & Tendon Traction"
    },
    "mechTags": [
      "nerve",
      "tendon",
      "autonomic"
    ],
    "title": {
      "ko": "긴장성 두통 / 군집성 두통",
      "en": "Tension Headache / Cluster Headache"
    },
    "symptoms": {
      "ko": "머리에 꽉 죄는 헬멧이나 수영모를 쓴 듯 묵직하고 조이는 통증, 안구 통증 동반.",
      "en": "Heavy, tightening pain as if wearing a tight helmet or swim cap, often accompanied by retro-orbital eye pain."
    },
    "pathophysiology": {
      "ko": "교체신경계적 Autonomic Nerve에 의해 두개외 근육(epicranius)의 허혈이 가중되고, 두판상근(SC) 및 후두근/측두근의 TTP 가 복합 작용함.",
      "en": "Ischemia of epicranial muscles aggravated by sympathetic S, combined with TTPs in splenius capitis (SC), occipitalis, and temporalis."
    },
    "targetTissues": {
      "ko": "두판상근(Splenius capitis, SC), 후두근(Occipitalis), 측두근, T1~T4 상부흉추 다열근.",
      "en": "Splenius capitis (SC), Occipitalis, Temporalis, T1?밫4 upper thoracic multifidus."
    },
    "palpation": {
      "ko": "SC 근복, 후두골 부착부 occipitalis TTP, 상부흉추 TS/다 열근.",
      "en": "SC muscle belly, occipitalis TTP at occipital attachment, upper thoracic TS/multifidus."
    },
    "clinicalCase": {
      "ko": "안구 깊은 곳의 압박감과 후두부 전갈로 긁는 듯한 발작성 통증을 동반한 군집성 및 만성 긴장성 두통 사례. 두판상근 상부 및 T2, T3 흉추 분절 교감신경 경로에 NovaCell Therapy를 체계적으로 적용하여 자율신경 오작동을 진정시키고 두통 발작 완치.",
      "en": "Patient with cluster headache featuring eye pain and severe scratching-like attacks in posterior head. Completely resolved following right SC and T2/T3 level TS S NovaCell therapy."
    },
    "diagram": "images/diagrams/diagram_05.png",
    "targets": [
      {
        "code": "T1",
        "color": "#ff334b",
        "x": 36.2,
        "y": 25.6,
        "role": {
          "ko": "주 신경포착점",
          "en": "Primary Nerve Entrapment"
        },
        "name": {
          "ko": "T1: 후두근·상항선 대후두신경 부착점 (후두부 헬멧 조임점)",
          "en": "T1: Occipitalis & Superior Nuchal Line GON Point"
        },
        "desc": {
          "ko": "[표적 해부] 후두골 상항선 후두근(Occipitalis)·두반극근 건막 부착부 및 대후두신경.\n[촉지 및 시술] 뒷머리 상항선 중앙~외측 2.5cm 골막 부착부. 머리를 조이는 긴장성 두통의 후방 잠금점입니다.",
          "en": "Occipitalis & semispinalis attachment on superior nuchal line."
        }
      },
      {
        "code": "T2",
        "color": "#00f5d4",
        "x": 48.2,
        "y": 49.9,
        "role": {
          "ko": "후관절·신경근점",
          "en": "Facet & Nerve Root Target"
        },
        "name": {
          "ko": "T2: 경추 C2-C3 두판상근(SC) 내측 및 상두사근·다열근점",
          "en": "T2: C2-C3 Splenius Capitis & Obliquus Capitis Superior"
        },
        "desc": {
          "ko": "[표적 해부] C2-C3 극돌기 외측 두판상근·상두사근 및 심층 다열근(제2선).\n[촉지 및 시술] 유양돌기 내측 후두골 하연(풍지혈 상방). 후두하근막 긴장과 혈류 정체를 동시에 해소합니다.",
          "en": "C2-C3 deep multifidus, obliquus capitis superior & splenius capitis."
        }
      },
      {
        "code": "T3",
        "color": "#ff9f43",
        "x": 39.6,
        "y": 49.9,
        "role": {
          "ko": "심부 근복·근막점",
          "en": "Deep Myofascial Trigger Point"
        },
        "name": {
          "ko": "T3: 두판상근(Splenius Capitis) 중간 근복 압통점",
          "en": "T3: Splenius Capitis Mid-Belly Trigger Point"
        },
        "desc": {
          "ko": "[표적 해부] 두판상근 중간 근복(승모근과 흉쇄유돌근 사이 삼각 공간).\n[촉지 및 시술] 유양돌기에서 하내측으로 내려오는 두판상근 근복. 정수리(두정부)와 안구 뒤로 쏘는 연관통을 해소합니다.",
          "en": "Splenius capitis mid-belly referring pain to vertex and ipsilateral orbit."
        }
      },
      {
        "code": "T4",
        "color": "#38bdf8",
        "x": 71.2,
        "y": 17.7,
        "role": {
          "ko": "힘줄·골막 부착점",
          "en": "Tendon & Periosteal Target"
        },
        "name": {
          "ko": "T4: 측두근(Temporalis) 상부 건막 및 모상건막 측방점",
          "en": "T4: Temporalis Superior Aponeurosis Point"
        },
        "desc": {
          "ko": "[표적 해부] 측두근 상부 부채꼴 섬유 및 두개 외측 모상건막.\n[촉지 및 시술] 귀 위쪽 측두부 압통점. 양측 관자놀이를 조이는 압박성 두통을 이완합니다.",
          "en": "Superior temporalis fascia relieving band-like temporal headache."
        }
      },
      {
        "code": "T5",
        "color": "#a855f7",
        "x": 36.3,
        "y": 80.0,
        "role": {
          "ko": "자율신경 조절점",
          "en": "Autonomic Control Target"
        },
        "name": {
          "ko": "T5: 상부흉추 T1-T4 다열근·최장근 교감신경 반사점",
          "en": "T5: Upper Thoracic T1-T4 Multifidus & Autonomic Point"
        },
        "desc": {
          "ko": "[표적 해부] T1~T4 극돌기 외측 1.5~2cm 다열근·흉최장근 및 두경부 행 교감신경 절전섬유.\n[촉지 및 시술] 상부 흉추 제2·3선 심부 압통점. 군발 두통과 만성 긴장성 두통의 자율신경 발작을 근본 제어합니다.",
          "en": "T1-T4 paraspinal multifidus & sympathetic preganglionic origin."
        }
      }
    ],
    "anatomicalLabels": [
      "Splenius Capitis",
      "T2-T3 Transversospinales",
      "Sympathetic Trunk",
      "Greater Occipital Nerve"
    ],
    "rifeFreq": 432,
    "searchKeywords": "긴장성 두통 / 군집성 두통 Tension Headache / Cluster Headache 머리에 꽉 죄는 헬멧이나 수영모를 쓴 듯 묵직하고 조이는 통증, 안구 통증 동반. Heavy, tightening pain as if wearing a tight helmet or swim cap, often accompanied by retro-orbital eye pain. 두경부 및 안면 질환 Head, Neck & Facial Disorders"
  },
  {
    "id": 6,
    "catId": "head_neck",
    "catNum": 1,
    "category": {
      "ko": "두경부 및 안면 질환",
      "en": "Head, Neck & Facial Disorders"
    },
    "mechanism": {
      "ko": "자율신경 오작동 / 힘줄견인",
      "en": "[S / ] Autonomic Response & Nerve Entrapment"
    },
    "mechTags": [
      "nerve",
      "tendon",
      "autonomic"
    ],
    "title": {
      "ko": "자율신경성 인후통 및 두통 / 비인두염 양상",
      "en": "Autonomic Sore Throat & Headache / Nasopharyngitis Pattern"
    },
    "symptoms": {
      "ko": "침을 삼킬 때 찢어질 듯한 목 통증, 귀 속으로 뻗치는 찌릿한 통증, 한쪽 두통 동반.",
      "en": "Tearing throat pain upon swallowing, radiating electric pain into inner ear, accompanied by unilateral headache."
    },
    "pathophysiology": {
      "ko": "SCM 상부 및 두판상근의 긴장으로 설인신경/미경신경 교감신경 가지가 자극(Autonomic Nerve)되어 비인두 연부조직에 허혈성 통증 유발.",
      "en": "Tension in upper SCM and splenius capitis stimulates sympathetic branches of glossopharyngeal and vagus nerves (S), causing ischemic pain in nasopharyngeal soft tissues."
    },
    "targetTissues": {
      "ko": "흉쇄유돌근(SCM) 상부, 두판상근(Splenius capitis).",
      "en": "Upper sternocleidomastoid (SCM), Splenius capitis."
    },
    "palpation": {
      "ko": "유두돌기 하방 SCM 상부 근복 및 두판상근 상부 압통점.",
      "en": "Tenderness in upper SCM muscle belly below mastoid process and upper splenius capitis."
    },
    "clinicalCase": {
      "ko": "연하 시 목 안쪽이 찢어지는 듯한 통증과 외이도 깊은 통증을 동반한 자율신경성 비인두 통증 사례. 흉쇄유돌근 상부 및 두판상근 부착부에 NovaCell Therapy를 적용하여 신경 반사성 과흥분을 차단하고 인후부 통증과 연하 곤란 즉시 소실.",
      "en": "Patient presenting with severe tearing throat pain during swallowing and inner ear pain. Throat pain resolved after treating upper SCM and splenius capitis with NovaCell frequency conduction."
    },
    "diagram": "images/diagrams/diagram_06.png",
    "targets": [
      {
        "code": "T1",
        "color": "#ff334b",
        "x": 43.0,
        "y": 52.4,
        "role": {
          "ko": "주 신경포착점",
          "en": "Primary Nerve Entrapment"
        },
        "name": {
          "ko": "T1: 유양돌기 하방 흉쇄유돌근(SCM) 상부 및 C1 횡돌기 전방점 (설인신경)",
          "en": "T1: Superior SCM & C1 Transverse Process (CN IX Switch)"
        },
        "desc": {
          "ko": "[표적 해부] 유양돌기 직하방 SCM 상부 근복, C1(환추) 횡돌기 전방 공간 및 설인신경(CN IX)·미주신경 교감가지.\n[촉지 및 시술] 귓불 아래 유양돌기 첨단과 하악각 사이 C1 횡돌기 전외측. 침 삼킬 때 목이 찢어지는 듯한 인후통·설인신경통의 1차 타깃입니다.",
          "en": "C1 transverse process & superior SCM modulating glossopharyngeal (CN IX) & pharyngeal plexus."
        }
      },
      {
        "code": "T2",
        "color": "#00f5d4",
        "x": 66.8,
        "y": 65.3,
        "role": {
          "ko": "후관절·신경근점",
          "en": "Facet & Nerve Root Target"
        },
        "name": {
          "ko": "T2: 두판상근(Splenius Capitis) 상부 및 경추 C2-C3 추간공점",
          "en": "T2: Superior Splenius Capitis & C2-C3 Foramen"
        },
        "desc": {
          "ko": "[표적 해부] 두판상근 상부 부착부 및 상경신경절(SCG) 후방 C2-C3 교감신경 문합지.\n[촉지 및 시술] 유양돌기 후내측 두판상근 압통점. 비인두 점막 허혈과 귀 안쪽(중이)으로 뻗치는 방사통을 해소합니다.",
          "en": "Superior splenius capitis & C2-C3 sympathetic rami to superior cervical ganglion."
        }
      },
      {
        "code": "T3",
        "color": "#ff9f43",
        "x": 38.0,
        "y": 62.0,
        "role": {
          "ko": "심부 근복·근막점",
          "en": "Deep Myofascial Trigger Point"
        },
        "name": {
          "ko": "T3: 설골(Hyoid) 대각 외측 및 이복근 후복 압통점",
          "en": "T3: Greater Horn of Hyoid & Posterior Digastric"
        },
        "desc": {
          "ko": "[표적 해부] 설골 대각(Greater horn) 부착 설골상·하근 및 상후두신경 내측지.\n[촉지 및 시술] 하악각 전내측 설골 대각 끝 압통점. 연하통과 목 이물감을 즉각 제거합니다.",
          "en": "Greater horn of hyoid bone & posterior digastric belly for swallowing pain."
        }
      },
      {
        "code": "T4",
        "color": "#38bdf8",
        "x": 62.0,
        "y": 38.0,
        "role": {
          "ko": "자율신경 조절점",
          "en": "Autonomic Control Target"
        },
        "name": {
          "ko": "T4: 경추 C3-C4 후관절 및 성상신경절(C6) 자율신경 보조점",
          "en": "T4: C3-C4 Facet & C6 Stellate Ganglion Relay"
        },
        "desc": {
          "ko": "[표적 해부] C3-C4 후관절 내측지 및 C6 횡돌기 전결절 교감신경절.\n[촉지 및 시술] 인후부 점막 자율신경 과민과 만성 비인두염 양상을 정상화합니다.",
          "en": "C3-C4 facet and C6 stellate ganglion autonomic stabilization point."
        }
      }
    ],
    "anatomicalLabels": [
      "Superior SCM",
      "Splenius Capitis",
      "Glossopharyngeal Nerve Branch",
      "Carotid Sheath"
    ],
    "rifeFreq": 880,
    "searchKeywords": "자율신경성 인후통 및 두통 / 비인두염 양상 Autonomic Sore Throat & Headache / Nasopharyngitis Pattern 침을 삼킬 때 찢어질 듯한 목 통증, 귀 속으로 뻗치는 찌릿한 통증, 한쪽 두통 동반. Tearing throat pain upon swallowing, radiating electric pain into inner ear, accompanied by unilateral headache. 두경부 및 안면 질환 Head, Neck & Facial Disorders"
  },
  {
    "id": 7,
    "catId": "head_neck",
    "catNum": 1,
    "category": {
      "ko": "두경부 및 안면 질환",
      "en": "Head, Neck & Facial Disorders"
    },
    "mechanism": {
      "ko": "신경유착",
      "en": "[신경유착] Nerve Entrapment"
    },
    "mechTags": [
      "nerve"
    ],
    "title": {
      "ko": "경신경총 유착증",
      "en": "Superficial Cervical Plexus Entrapment"
    },
    "symptoms": {
      "ko": "목 전외측, 쇄골 상방, 귀 뒤쪽으로 번지는 넓은 이상감각 및 찌릿찌릿한 피부 통증.",
      "en": "Burning sensation, stabbing pain, and cutaneous dysesthesia on anterolateral neck, scalp, or upper ear surface."
    },
    "pathophysiology": {
      "ko": "Superficial cervical plexus 감각 가지들이 SCM 후연을 뚫고 나올 때 SCM 과긴장에 의해 유착됨.",
      "en": "Entrapment of sensory branches of superficial cervical plexus due to SCM hypertonicity as they pierce posterior border of SCM."
    },
    "targetTissues": {
      "ko": "흉쇄유돌근(SCM) 중간 부위, C2-C4 척추주위 심부근육.",
      "en": "Branching point of 4 sensory branches of superficial cervical plexus (mid-to-upper posterior border of SCM)."
    },
    "palpation": {
      "ko": "SCM 후연 중간 높이(Erb's point) 꼬집어 올렸을 때 압통점.",
      "en": "Deep tenderness at posterior border of SCM at mid-neck height (Erb's point)."
    },
    "clinicalCase": {
      "ko": "경추 측면에서 쇄골 부위까지 피부가 화끈거리고 가벼운 옷깃 스침에도 과민한 통증을 호소한 경신경총 유착 사례. SCM 중앙부 Erb's point 신경 유착 부위에 NovaCell Therapy를 부드럽게 통전하여 감각신경 과흥분을 해소하고 작열통 완전 완화.",
      "en": "Patient with lateral neck burning and subauricular dysesthesia. Immediate pain relief following NovaCell therapy at mid-SCM cervical plexus branching point."
    },
    "diagram": "images/diagrams/diagram_07.png",
    "targets": [
      {
        "code": "T1",
        "color": "#ff334b",
        "x": 33.0,
        "y": 51.2,
        "role": {
          "ko": "주 신경포착점",
          "en": "Primary Nerve Entrapment"
        },
        "name": {
          "ko": "T1: 흉쇄유돌근(SCM) 후연 중앙 표재경신경총 분지점 (Erb's Point)",
          "en": "T1: Erb's Point Superficial Cervical Plexus Exit"
        },
        "desc": {
          "ko": "[표적 해부] 표재경신경총 4대 감각지(소후두·대이개·경횡·쇄골상신경) 합류 출구점.\n[촉지 및 시술] SCM 후연 정중앙(윤상연골 수평선 높이). 목 전외측·귀 밑·쇄골 위로 퍼지는 피부 저림과 이상감각을 차단합니다.",
          "en": "Erb's point at mid-posterior border of SCM where all 4 cutaneous branches emerge."
        }
      },
      {
        "code": "T2",
        "color": "#00f5d4",
        "x": 52.9,
        "y": 57.7,
        "role": {
          "ko": "후관절·신경근점",
          "en": "Facet & Nerve Root Target"
        },
        "name": {
          "ko": "T2: 경추 C2-C4 추간공 외측 및 심부 다열근·사각근 기시점",
          "en": "T2: C2-C4 Intervertebral Foramen & Deep Paraspinal Point"
        },
        "desc": {
          "ko": "[표적 해부] C2~C4 신경근 전지가 나오는 추간공 외측(횡돌기 후결절) 및 중사각근 기시부.\n[촉지 및 시술] SCM 후방, 경추 외측면 C2~C4 횡돌기 골막 접촉부. 경신경총 뿌리 유착을 감압합니다.",
          "en": "C2-C4 transverse process posterior tubercle where cervical plexus roots originate."
        }
      },
      {
        "code": "T3",
        "color": "#ff9f43",
        "x": 38.0,
        "y": 62.0,
        "role": {
          "ko": "신경 주행·분지점",
          "en": "Nerve Pathway Target"
        },
        "name": {
          "ko": "T3: 대이개신경·경횡신경 SCM 표면 주행 압통점",
          "en": "T3: Great Auricular & Transverse Cervical Nerve Track"
        },
        "desc": {
          "ko": "[표적 해부] SCM 외측 표면을 가로질러 귀밑(이하선)·하악각 및 전경부로 주행하는 신경 피지.\n[촉지 및 시술] SCM 근복 중앙을 집어 롤링(Pinch & Roll)할 때 찌릿한 신경 섬유띠.",
          "en": "Cutaneous track of great auricular & transverse cervical nerves over SCM belly."
        }
      },
      {
        "code": "T4",
        "color": "#38bdf8",
        "x": 62.0,
        "y": 38.0,
        "role": {
          "ko": "신경 주행·분지점",
          "en": "Nerve Pathway Target"
        },
        "name": {
          "ko": "T4: 쇄골상와 쇄골상신경(Supraclavicular N.) 분기점",
          "en": "T4: Supraclavicular Fossa Cutaneous Branch Point"
        },
        "desc": {
          "ko": "[표적 해부] 쇄골 상연 중내측 1/3 쇄골상신경(C3-C4) 관통건막.\n[촉지 및 시술] 쇄골 위 오목한 곳에서 전면 흉벽·어깨로 내려가는 감각신경 포착을 해소합니다.",
          "en": "Supraclavicular nerve passage above middle third of clavicle."
        }
      }
    ],
    "anatomicalLabels": [
      "Erb's Point (Punctum Nervosum)",
      "Great Auricular Nerve",
      "Transverse Cervical Nerve",
      "Supraclavicular Nerves",
      "Middle Scalene"
    ],
    "rifeFreq": 787,
    "searchKeywords": "경신경총 유착증 Superficial Cervical Plexus Entrapment 목 전외측, 쇄골 상방, 귀 뒤쪽으로 번지는 넓은 이상감각 및 찌릿찌릿한 피부 통증. Burning sensation, stabbing pain, and cutaneous dysesthesia on anterolateral neck, scalp, or upper ear surface. 두경부 및 안면 질환 Head, Neck & Facial Disorders"
  },
  {
    "id": 8,
    "catId": "head_neck",
    "catNum": 1,
    "category": {
      "ko": "두경부 및 안면 질환",
      "en": "Head, Neck & Facial Disorders"
    },
    "mechanism": {
      "ko": "힘줄견인/ 신경유착",
      "en": "[TTP / ] Tendon Traction & Nerve Entrapment"
    },
    "mechTags": [
      "nerve",
      "tendon"
    ],
    "title": {
      "ko": "소아 근긴장성 사경 (Childhood Torticollis)",
      "en": "Pediatric Muscular Torticollis / Cervical Sprain"
    },
    "symptoms": {
      "ko": "목이 한쪽으로 기울어지고 반대쪽으로 회전하기 힘듦, 목 근육 뻐근함 및 동작 제한.",
      "en": "Sudden posterior neck pain, inability to rotate head, and lateral head tilt."
    },
    "pathophysiology": {
      "ko": "SCM 및 사각근, 승모근의 병적 수축으로 인한 기시/정지부 견인통/마찰통 및 경신경 유착 복합 작용.",
      "en": "Acute isotonic contraction of pediatric SCM and scalene muscles causing periosteal traction at attachments and nerve branch irritation."
    },
    "targetTissues": {
      "ko": "흉쇄유돌근(SCM), 사각근(Scalene), C2-C5 다열근.",
      "en": "Sternocleidomastoid (SCM) and Middle scalene."
    },
    "palpation": {
      "ko": "SCM 근복 단단한 결절 부위 및 C2-C5 극돌기 외측 압통점.",
      "en": "Tender points in SCM muscle belly and middle scalene."
    },
    "clinicalCase": {
      "ko": "목이 한쪽으로 기울어지고 반대편 회전 운동이 제한된 급성 근긴장성 사경 사례. 흉쇄유돌근과 사각근 근복에 미세전류 기반의 부드러운 NovaCell Therapy를 집중 적용하여 근육 경축을 완화하고 경추 회전 가동 범위를 즉시 정상 회복.",
      "en": "7yo child unable to turn head after waking. Immediate restoration of cervical range of motion following NovaCell application at SCM and middle scalene tender points."
    },
    "diagram": "images/diagrams/diagram_08.png",
    "targets": [
      {
        "code": "T1",
        "color": "#ff334b",
        "x": 40.4,
        "y": 38.0,
        "role": {
          "ko": "제1 핵심 치료점",
          "en": "Primary Clinical Target"
        },
        "name": {
          "ko": "T1: 흉쇄유돌근(SCM) 상·중·하 근복 및 흉골·쇄골두 기시점",
          "en": "T1: SCM Belly & Sternal/Clavicular Heads"
        },
        "desc": {
          "ko": "[표적 해부] 흉쇄유돌근 흉골두·쇄골두 및 중심 근복(부신경 CN XI 운동점).\n[촉지 및 시술] 유양돌기부터 쇄골·흉골 부착부까지 SCM 주행선 결절. 고개 회전 제한과 사경(Torticollis)·급성 낙침을 풀어줍니다.",
          "en": "SCM muscle belly and sternal/clavicular origins innervated by accessory nerve (CN XI)."
        }
      },
      {
        "code": "T2",
        "color": "#00f5d4",
        "x": 64.9,
        "y": 47.8,
        "role": {
          "ko": "후관절·신경근점",
          "en": "Facet & Nerve Root Target"
        },
        "name": {
          "ko": "T2: 경추 C2-C5 후관절 다열근(제2선) 및 판상근 회전 제한점",
          "en": "T2: C2-C5 Multifidus (Line 2) & Splenius Cervicis"
        },
        "desc": {
          "ko": "[표적 해부] C2~C5 후관절(Facet) 및 경판상근·반극근 심부층.\n[촉지 및 시술] 경추 극돌기 외측 1.5~2cm 제2선 연속 타깃. 후관절 잠김(Facet locking)을 즉각 해제합니다.",
          "en": "C2-C5 facet joint line and deep multifidus/splenius cervicis."
        }
      },
      {
        "code": "T3",
        "color": "#ff9f43",
        "x": 38.4,
        "y": 48.6,
        "role": {
          "ko": "후관절·신경근점",
          "en": "Facet & Nerve Root Target"
        },
        "name": {
          "ko": "T3: 전·중사각근(Scalenes) C3-C6 횡돌기 부착점",
          "en": "T3: Anterior & Middle Scalene Transverse Process Origins"
        },
        "desc": {
          "ko": "[표적 해부] SCM 뒤쪽 사각근 삼각의 전·중사각근 근복 및 제1늑골 착점.\n[촉지 및 시술] 측경부 SCM 후연 심부. 측굴 제한과 신경근 견인을 이완합니다.",
          "en": "Anterior and middle scalene bellies in lateral cervical triangle."
        }
      },
      {
        "code": "T4",
        "color": "#38bdf8",
        "x": 36.2,
        "y": 56.2,
        "role": {
          "ko": "후관절·신경근점",
          "en": "Facet & Nerve Root Target"
        },
        "name": {
          "ko": "T4: 견갑거근(Levator Scapulae) C1-C4 횡돌기 기시부 및 견갑상각점",
          "en": "T4: Levator Scapulae C1-C4 Origin & Superior Angle"
        },
        "desc": {
          "ko": "[표적 해부] C1~C4 횡돌기 후결절 기시부 및 견갑골 상각 골막 착점.\n[촉지 및 시술] 목이 돌아가지 않을 때 필수 동반 이완해야 하는 핵심 골막·건 포인트입니다.",
          "en": "Levator scapulae origin at C1-C4 TP and insertion at superior angle of scapula."
        }
      }
    ],
    "anatomicalLabels": [
      "Sternocleidomastoid (SCM)",
      "Anterior/Middle Scalene",
      "Accessory Nerve",
      "Clavicular Head"
    ],
    "rifeFreq": 528,
    "searchKeywords": "소아 근긴장성 사경 (Childhood Torticollis) Pediatric Muscular Torticollis / Cervical Sprain 목이 한쪽으로 기울어지고 반대쪽으로 회전하기 힘듦, 목 근육 뻐근함 및 동작 제한. Sudden posterior neck pain, inability to rotate head, and lateral head tilt. 두경부 및 안면 질환 Head, Neck & Facial Disorders"
  },
  {
    "id": 9,
    "catId": "shoulder_arm",
    "catNum": 2,
    "category": {
      "ko": "어깨, 상지 및 수부 질환",
      "en": "Shoulder, Upper Extremity & Hand"
    },
    "mechanism": {
      "ko": "신경유착",
      "en": "[신경유착] Nerve Entrapment"
    },
    "mechTags": [
      "nerve"
    ],
    "title": {
      "ko": "부신경 / 견갑배신경유착증",
      "en": "Accessory Nerve / Dorsal Scapular Nerve Entrapment"
    },
    "symptoms": {
      "ko": "뒷목의 뻐근한 허혈성 통증, 자다가 깰 정도의 뒷목 및 어깻죽지 짓누르는 통증.",
      "en": "Dull ischemic pain in posterior neck, heavy crushing pain in neck and shoulder blade severe enough to awaken from sleep."
    },
    "pathophysiology": {
      "ko": "C5 척수신경 근위부(IVF) 및 중사각근 레벨에서 견갑배신경이 유착되어 견갑거근/능형근에 긴장성 허혈성 통증 유발.",
      "en": "Entrapment of dorsal scapular nerve at proximal C5 spinal nerve level (IVF) and middle scalene, causing tension ischemic pain in levator scapulae/rhomboids; spinal accessory nerve entrapment causes trapezius ischemia."
    },
    "targetTissues": {
      "ko": "C5 레벨 척추주위 심부근육군, 중사각근(Middle scalene), SCM.",
      "en": "C5 level deep paraspinal muscles, Middle scalene, SCM."
    },
    "palpation": {
      "ko": "C5 극돌기 주변 심부근육 압통점, 중사각근 C5 높이.",
      "en": "Tenderness in deep paraspinal muscles around C5 spinous process, middle scalene at C5 level."
    },
    "clinicalCase": {
      "ko": "뒷목에서 어깻죽지, 견갑골 내측연까지 짓누르고 결리는 만성 허혈성 통증 사례. C5 척추주위 심부근 및 중사각근 레벨의 견갑배신경 주행부에 NovaCell Therapy를 적용하여 유착된 신경을 이완시킴으로써 만성적인 뻐근함과 압박 통증 완전 소실.",
      "en": "Clustered pain in posterior neck, shoulder top, and interscapular region. Dull pain resolved after treating deep paraspinal muscles around C3 and C5 with NovaCell therapy."
    },
    "diagram": "images/diagrams/diagram_09.png",
    "targets": [
      {
        "code": "T1",
        "color": "#ff334b",
        "x": 63.7,
        "y": 47.4,
        "role": {
          "ko": "주 신경포착점",
          "en": "Primary Nerve Entrapment"
        },
        "name": {
          "ko": "T1: 중사각근(Middle Scalene) C5 견갑배신경 관통점",
          "en": "T1: Middle Scalene C5 Dorsal Scapular Nerve Piercing Point"
        },
        "desc": {
          "ko": "[표적 해부] 경추 C5 신경근에서 분지한 견갑배신경(DSN)이 중사각근 근복을 관통하는 지점.\n[촉지 및 시술] 측경부 SCM 후연과 승모근 전연 사이 C5 높이 중사각근 압통점. 날개뼈 안쪽(능형근) 깊숙한 통증의 진짜 뿌리 포착점입니다.",
          "en": "C5 Dorsal Scapular Nerve piercing point through middle scalene belly."
        }
      },
      {
        "code": "T2",
        "color": "#00f5d4",
        "x": 40.8,
        "y": 58.8,
        "role": {
          "ko": "후관절·신경근점",
          "en": "Facet & Nerve Root Target"
        },
        "name": {
          "ko": "T2: 경추 C5-C6 극돌기 외측 심부 다열근·후관절점 (경추 제2선)",
          "en": "T2: C5-C6 Deep Multifidus & Facet Joint (Line 2)"
        },
        "desc": {
          "ko": "[표적 해부] C5-C6 후관절 및 다열근·반극근 심부층.\n[촉지 및 시술] C5·C6 극돌기 외측 1.5cm 골막 부착부. 견갑배신경 기시 분절의 척수 후지 감작을 해소합니다.",
          "en": "C5-C6 deep paraspinal multifidus & facet joint point."
        }
      },
      {
        "code": "T3",
        "color": "#ff9f43",
        "x": 49.0,
        "y": 71.0,
        "role": {
          "ko": "힘줄·골막 부착점",
          "en": "Tendon & Periosteal Target"
        },
        "name": {
          "ko": "T3: 견갑골 상각(Superior Angle) 견갑거근 정지부 골막 부착점",
          "en": "T3: Superior Angle of Scapula Levator Scapulae Insertion"
        },
        "desc": {
          "ko": "[표적 해부] 견갑골 상각(T2 높이) 견갑거근 골막 부착부 및 견갑배신경 하행로.\n[촉지 및 시술] 날개뼈 위쪽 모서리 꼭짓점 골막 압통점(HP-DSN-01). 목을 돌릴 때 날개뼈가 결리는 증상을 즉각 제거합니다.",
          "en": "Levator scapulae periosteal insertion at superior angle of scapula."
        }
      },
      {
        "code": "T4",
        "color": "#38bdf8",
        "x": 62.0,
        "y": 38.0,
        "role": {
          "ko": "심부 근복·근막점",
          "en": "Deep Myofascial Trigger Point"
        },
        "name": {
          "ko": "T4: 견갑골 내측연 능형근(Rhomboids)·상후거근(SPS) 관통점",
          "en": "T4: Medial Scapular Border Rhomboid & SPS Point"
        },
        "desc": {
          "ko": "[표적 해부] T2~T5 높이 견갑골 내측연 소·대능형근, 상후거근(SPS) 및 견갑배신경 말단.\n[촉지 및 시술] 팔을 앞으로 감싸 안아 날개뼈를 외전(Protraction)시킨 뒤 노출되는 내측연 심부 압통점(HP-DSN-02).",
          "en": "Medial border of scapula at T2-T5 level over rhomboids and serratus posterior superior."
        }
      },
      {
        "code": "T5",
        "color": "#a855f7",
        "x": 59.0,
        "y": 83.0,
        "role": {
          "ko": "신경 주행·분지점",
          "en": "Nerve Pathway Target"
        },
        "name": {
          "ko": "T5: 상부 승모근(Upper Trapezius) 부신경(CN XI) 운동점",
          "en": "T5: Upper Trapezius Accessory Nerve (CN XI) Entry Point"
        },
        "desc": {
          "ko": "[표적 해부] 목과 어깨가 만나는 능선 중앙(견정혈 부근) 부신경 승모근 진입부.\n[촉지 및 시술] 승모근 TrP 1·2 핵심 결절. 어깨 상부 무거운 돌덩이 같은 결림을 동시 이완합니다.",
          "en": "Accessory nerve motor entry point at mid-ridge of upper trapezius."
        }
      }
    ],
    "anatomicalLabels": [
      "Dorsal Scapular Nerve",
      "Middle Scalene",
      "Levator Scapulae",
      "Rhomboid Muscles",
      "C5 Root"
    ],
    "rifeFreq": 787,
    "searchKeywords": "부신경 / 견갑배신경유착증 Accessory Nerve / Dorsal Scapular Nerve Entrapment 뒷목의 뻐근한 허혈성 통증, 자다가 깰 정도의 뒷목 및 어깻죽지 짓 누르는 통증. Dull ischemic pain in posterior neck, heavy crushing pain in neck and shoulder blade severe enough to awaken from sleep. 어깨, 상지 및 수부 질환 Shoulder, Upper Extremity & Hand"
  },
  {
    "id": 10,
    "catId": "shoulder_arm",
    "catNum": 2,
    "category": {
      "ko": "어깨, 상지 및 수부 질환",
      "en": "Shoulder, Upper Extremity & Hand"
    },
    "mechanism": {
      "ko": "힘줄견인 / 근막유착",
      "en": "[TTP / c] Tendon Traction & Complex Nerve Entrapment"
    },
    "mechTags": [
      "nerve",
      "tendon"
    ],
    "title": {
      "ko": "견쇄관절 가성 관절통 및 견쇄 관절염",
      "en": "AC Joint Pseudo-arthralgia & AC Osteoarthritis"
    },
    "symptoms": {
      "ko": "어깨 견봉, 견쇄관절(AC joint), 쇄골 외측 1/3 부위의 동작 시 날카로운 통증 및 움직임 제한.",
      "en": "Sharp pain and movement restriction at acromion, acromioclavicular (AC) joint, and lateral 1/3 of clavicle during shoulder motion."
    },
    "pathophysiology": {
      "ko": "승모근(MT/UT) 및 삼각근의 등장성 수축으로 견쇄관절 기시/정지부 골막에 견인력이 작용하고, 부신경/액와신경 과흥분이 복합 작용함.",
      "en": "Isotonic contraction of middle/upper trapezius (MT/UT) and deltoid exerts traction force (TTP) on AC joint attachment periosteum, combined with spinal accessory and axillary nerve hyperexcitation."
    },
    "targetTissues": {
      "ko": "중부승모근(MT), 상부승모근(UT), 소원근(Teres minor), SCM.",
      "en": "Middle trapezius (MT), Upper trapezius (UT), Teres minor, SCM."
    },
    "palpation": {
      "ko": "견갑골 가시(scapular spine) 상연, 견봉(acromion), 쇄골 외측 부착부, SCM 중간.",
      "en": "Superior margin of scapular spine, acromion, lateral clavicle attachment, mid-SCM."
    },
    "clinicalCase": {
      "ko": "견봉쇄골(AC) 관절 부위의 지속적인 압통과 팔 거상 시 상투적인 어깨 통증 사례. 승모근 중부 건 견인점 및 소원근 보상 유착 부위에 NovaCell Therapy를 복합 적용하여 관절 내 장력을 재정렬하고 능동적 어깨 거상 각도 통증 없이 회복.",
      "en": "60yo male with 4 months of shoulder top to AC joint pain. Pain relieved after MT, SCM, and teres minor targeted NovaCell treatment."
    },
    "diagram": "images/diagrams/diagram_10.png",
    "targets": [
      {
        "code": "T1",
        "color": "#ff334b",
        "x": 45.6,
        "y": 17.8,
        "role": {
          "ko": "제1 핵심 치료점",
          "en": "Primary Clinical Target"
        },
        "name": {
          "ko": "T1: 견쇄관절(AC Joint) 상면 관절낭 및 골막 타깃",
          "en": "T1: Acromioclavicular (AC) Joint Superior Capsule Point"
        },
        "desc": {
          "ko": "[표적 해부] 쇄골 외측단과 견봉이 만나는 견쇄관절낭 상면 및 견쇄인대.\n[촉지 및 시술] 어깨 꼭대기 쇄골 끝 오목한 관절 간극 골막 접촉. 팔을 수평 내전할 때 발생하는 어깨 꼭대기 통증을 해소합니다.",
          "en": "Superior capsule and ligament of Acromioclavicular (AC) joint."
        }
      },
      {
        "code": "T2",
        "color": "#00f5d4",
        "x": 64.8,
        "y": 47.2,
        "role": {
          "ko": "힘줄·골막 부착점",
          "en": "Tendon & Periosteal Target"
        },
        "name": {
          "ko": "T2: 견갑극 상연·견봉·쇄골 외측 승모근 부착부 골막점",
          "en": "T2: Scapular Spine, Acromion & Lateral Clavicle Trapezius Insertion"
        },
        "desc": {
          "ko": "[표적 해부] 상부 승모근이 쇄골 외측 1/3, 견봉, 견갑극 상연에 정지하는 골막 부착선.\n[촉지 및 시술] 견쇄관절 주변 골막 견인통을 유발하는 힘줄 부착부 연속 타깃.",
          "en": "Trapezius periosteal insertion along lateral clavicle, acromion, and scapular spine."
        }
      },
      {
        "code": "T3",
        "color": "#ff9f43",
        "x": 58.8,
        "y": 76.9,
        "role": {
          "ko": "신경 주행·분지점",
          "en": "Nerve Pathway Target"
        },
        "name": {
          "ko": "T3: 흉쇄유돌근(SCM) 중간 근복 및 쇄골상신경 외측지 포착점",
          "en": "T3: Mid-SCM Belly & Lateral Supraclavicular Nerve Point"
        },
        "desc": {
          "ko": "[표적 해부] SCM 후연에서 분지하여 쇄골을 넘어 견쇄관절 피부를 지배하는 외측 쇄골상신경(C3-C4).\n[촉지 및 시술] 견쇄관절 자체 병변 없이도 어깨 꼭대기에 가성 관절통을 투사하는 신경원성 스위치입니다.",
          "en": "Lateral supraclavicular nerve entrapment at mid-SCM projecting pseudo-AC joint pain."
        }
      },
      {
        "code": "T4",
        "color": "#38bdf8",
        "x": 62.0,
        "y": 38.0,
        "role": {
          "ko": "신경 주행·분지점",
          "en": "Nerve Pathway Target"
        },
        "name": {
          "ko": "T4: 견갑골 외측연 소원근(Teres Minor) 및 액와신경 사각공간점",
          "en": "T4: Lateral Scapular Border Teres Minor & Quadrangular Space"
        },
        "desc": {
          "ko": "[표적 해부] 견갑골 외측연 소원근 근복 및 사각공간 액와신경.\n[촉지 및 시술] 어깨 거상 및 외회전 시 견쇄관절에 가해지는 보상적 후방 관절낭 장력을 완화합니다.",
          "en": "Teres minor belly & quadrangular space axillary nerve point."
        }
      }
    ],
    "anatomicalLabels": [
      "AC Joint",
      "Middle Trapezius",
      "Teres Minor",
      "SCM",
      "Suprascapular Nerve"
    ],
    "rifeFreq": 880,
    "searchKeywords": "견쇄관절 가성 관절통 및 견쇄 관절염 AC Joint Pseudo-arthralgia & AC Osteoarthritis 어깨 견봉, 견쇄관절(AC joint), 쇄골 외측 1/3 부위의 동작 시 날카로운 통증 및 움직임 제한. Sharp pain and movement restriction at acromion, acromioclavicular (AC) joint, and lateral 1/3 of clavicle during shoulder motion. 어깨, 상지 및 수부 질환 Shoulder, Upper Extremity & Hand"
  },
  {
    "id": 11,
    "catId": "shoulder_arm",
    "catNum": 2,
    "category": {
      "ko": "어깨, 상지 및 수부 질환",
      "en": "Shoulder, Upper Extremity & Hand"
    },
    "mechanism": {
      "ko": "신경유착 / 흉곽출구증후군",
      "en": "[ / TOS] Thoracic Outlet Syndrome & Nerve Entrapment"
    },
    "mechTags": [
      "nerve"
    ],
    "title": {
      "ko": "늑쇄터널 증후군 / 전사각근 증후군",
      "en": "Costoclavicular Space Syndrome / Anterior Scalene Syndrome"
    },
    "symptoms": {
      "ko": "가슴 결림, 기침 시 가슴/등 통증, 팔 전체 및 손가락 저림, 조조강직, 상 완신경총 압박 증상.",
      "en": "Chest tightness, chest/back pain when coughing, numbness throughout arm and fingers, morning stiffness, brachial plexus compression symptoms."
    },
    "pathophysiology": {
      "ko": "전사각근과 쇄골하근의 과긴장/단축으로 늑쇄터널(쇄골과 1st rib 사이) 이 좁아지며 상완신경총 및 흉근신경(pectoral n.)이 유착됨.",
      "en": "Hypertonicity/shortening of anterior scalene and subclavius narrows costoclavicular space (between clavicle and 1st rib), entrapping brachial plexus and pectoral nerves."
    },
    "targetTissues": {
      "ko": "전사각근(Anterior scalene), 쇄골하근(Subclavius).",
      "en": "Anterior scalene, Subclavius."
    },
    "palpation": {
      "ko": "목 전외측 전사각근 근복 깊은 압통점, 쇄골 하방 쇄골하근 부위.",
      "en": "Deep tender point in anterior scalene belly at anterolateral neck, subclavius region below clavicle."
    },
    "clinicalCase": {
      "ko": "전흉부 압박감과 상지 전완부 저림으로 호흡까지 불편하던 늑쇄터널/전사각근 흉곽출구 압박 사례. 제1늑골 부착부 전사각근 및 흉근신경 주행부에 NovaCell Therapy를 적용하여 신경 혈관 다발 압박을 해소하고 가슴 통증과 팔 저림 즉각 호전.",
      "en": "52yo female with left chest pain making breathing uncomfortable. Overcame chest pain by releasing lateral/medial pectoral nerve hyperexcitation via anterior scalene NovaCell treatment."
    },
    "diagram": "images/diagrams/diagram_11.png",
    "targets": [
      {
        "code": "T1",
        "color": "#ff334b",
        "x": 39.1,
        "y": 34.6,
        "role": {
          "ko": "주 신경포착점",
          "en": "Primary Nerve Entrapment"
        },
        "name": {
          "ko": "T1: 전·중사각근 간극(Interscalene Triangle) 상완신경총 통과점",
          "en": "T1: Interscalene Triangle Brachial Plexus & Anterior Scalene"
        },
        "desc": {
          "ko": "[표적 해부] 전사각근과 중사각근 사이 사각근 간극(상완신경총 C5-T1 및 쇄골하동맥 통과부) 및 제1늑골 사각근 결절.\n[촉지 및 시술] 쇄골 상방 2~3cm, SCM 쇄골두 바로 뒤쪽 오목한 삼각 공간(HP-TOS-01). 팔 전체로 내려가는 저림과 흉곽출구 증후군의 1차 관문입니다.",
          "en": "Interscalene triangle between anterior and middle scalenes above first rib."
        }
      },
      {
        "code": "T2",
        "color": "#00f5d4",
        "x": 49.3,
        "y": 61.0,
        "role": {
          "ko": "심부 근복·근막점",
          "en": "Deep Myofascial Trigger Point"
        },
        "name": {
          "ko": "T2: 쇄골하근(Subclavius) 근복 및 늑쇄간극(Costoclavicular Space) 타깃",
          "en": "T2: Subclavius Belly & Costoclavicular Space Point"
        },
        "desc": {
          "ko": "[표적 해부] 쇄골 하면과 제1늑골 연골 사이 쇄골하근 근복 및 늑쇄터널.\n[촉지 및 시술] 쇄골 중앙 바로 아래 오목한 부위를 쇄골 밑면 방향으로 촉지. 늑쇄 압박을 해제합니다.",
          "en": "Subclavius muscle under mid-clavicle decompressing the costoclavicular tunnel."
        }
      },
      {
        "code": "T3",
        "color": "#ff9f43",
        "x": 38.0,
        "y": 62.0,
        "role": {
          "ko": "힘줄·골막 부착점",
          "en": "Tendon & Periosteal Target"
        },
        "name": {
          "ko": "T3: 오훼돌기 하방 소흉근하 간극점 (Pectoralis Minor Tunnel)",
          "en": "T3: Sub-coracoid Pectoralis Minor Neurovascular Tunnel"
        },
        "desc": {
          "ko": "[표적 해부] 오훼돌기(Coracoid process) 하내측 2cm 소흉근 건 직하방 상완신경총 통과부.\n[촉지 및 시술] 팔을 머리 위로 들거나 뒤로 젖힐 때 손이 저리는 소흉근하 흉곽출구 포착을 해소합니다(HP-TOS-02).",
          "en": "2cm inferomedial to coracoid process beneath pectoralis minor tendon."
        }
      },
      {
        "code": "T4",
        "color": "#38bdf8",
        "x": 62.0,
        "y": 38.0,
        "role": {
          "ko": "후관절·신경근점",
          "en": "Facet & Nerve Root Target"
        },
        "name": {
          "ko": "T4: 경추 C5-T1 추간공 외측 후관절·다열근 뿌리점",
          "en": "T4: C5-T1 Segmental Facet & Multifidus Root Point"
        },
        "desc": {
          "ko": "[표적 해부] 상완신경총 기시 분절인 하부 경추(C5~T1) 후관절 제2선.\n[촉지 및 시술] 말초 포착과 동반된 경추 신경근 이중 포착(Double Crush Syndrome)을 동시 차단합니다.",
          "en": "Lower cervical C5-T1 facet joint line resolving double-crush radiculopathy."
        }
      }
    ],
    "anatomicalLabels": [
      "Anterior Scalene",
      "Brachial Plexus",
      "Subclavian Artery",
      "1st Rib",
      "Pectoral Nerves"
    ],
    "rifeFreq": 727,
    "searchKeywords": "늑쇄터널 증후군 / 전사각근 증후군 Costoclavicular Space Syndrome / Anterior Scalene Syndrome 가슴 결림, 기침 시 가슴/등 통증, 팔 전체 및 손가락 저림, 조조강직, 상 완신경총 압박 증상. Chest tightness, chest/back pain when coughing, numbness throughout arm and fingers, morning stiffness, brachial plexus compression symptoms. 어깨, 상지 및 수부 질환 Shoulder, Upper Extremity & Hand"
  },
  {
    "id": 12,
    "catId": "shoulder_arm",
    "catNum": 2,
    "category": {
      "ko": "어깨, 상지 및 수부 질환",
      "en": "Shoulder, Upper Extremity & Hand"
    },
    "mechanism": {
      "ko": "신경유착",
      "en": "[TTP] Tendon/Periosteal Traction Pain"
    },
    "mechTags": [
      "nerve"
    ],
    "title": {
      "ko": "드퀘르뱅 증후군 (De Quervain's Disease)",
      "en": "De Quervain's Disease"
    },
    "symptoms": {
      "ko": "손목 요골 측(엄지 쪽) 및 1st metacarpal base 통증, Finkelstein 검사 양성, 엄지 움직임 시 통증.",
      "en": "Pain at radial side of wrist (thumb side) and 1st metacarpal base, positive Finkelstein test, pain upon thumb movement."
    },
    "pathophysiology": {
      "ko": "장무지외전근(APL)과 단무지신근(EPB)의 과사용으로 근복에 힘줄견인점이 형성되어 1st metacarpal base 및 1st proximal phalanx 골막에 염증성 견인 통증 유 발.",
      "en": "Overuse of abductor pollicis longus (APL) and extensor pollicis brevis (EPB) forms muscle belly TTPs, causing inflammatory traction pain on periosteum of 1st metacarpal base and 1st proximal phalanx."
    },
    "targetTissues": {
      "ko": "장무지외전근(APL), 단무지신근(EPB) 근복.",
      "en": "APL and EPB muscle bellies."
    },
    "palpation": {
      "ko": "손목 관절면 상방 3~4 FB(손가락 폭) 지점, 전완 외측 비스듬히 주행하는 APL/EPB 근복의 지그시 깊은 압통 점.",
      "en": "Firm deep tender point in obliquely running APL/EPB muscle belly on lateral forearm, 3?? finger breadths (FB) proximal to wrist joint line."
    },
    "clinicalCase": {
      "ko": "엄지손가락 움직임 및 손목 요골측 굴곡 시 칼로 베는 듯한 건초염 통증 사례. 손목 근위부 4횡지 높이의 장무지외전근(APL)과 단무지신근(EPB) 근복에 NovaCell Therapy를 집중 조율하여 건막 마찰을 해소하고 엄지 쥠 동작 정상화.",
      "en": "48yo masseuse with 6 months of radial wrist/thumb pain. Pain upon thumb/wrist motion resolved after NovaCell therapy on APL/EPB belly 4 FB above wrist."
    },
    "diagram": "images/diagrams/diagram_12.png",
    "targets": [
      {
        "code": "T1",
        "color": "#ff334b",
        "x": 35.7,
        "y": 62.3,
        "role": {
          "ko": "주 신경포착점",
          "en": "Primary Nerve Entrapment"
        },
        "name": {
          "ko": "T1: 요골 경상돌기 제1신전건 구획 건골막 부착점 (APL·EPB 건초 터널)",
          "en": "T1: Radial Styloid 1st Extensor Compartment Periosteal Contact"
        },
        "desc": {
          "ko": "[표적 해부] 요골 경상돌기(Radial styloid) 외측의 제1배측 신전건 구획(장무지외전근 APL + 단무지신근 EPB 섬유성 골터널).\n[촉지 및 시술] 손목 엄지 측 붓돌기 직상방 가장 볼록하고 아픈 건초 결절(HP-DQ-01). 핀켈스타인 검사 양성 통증의 직접 감압점입니다.",
          "en": "1st dorsal extensor compartment over radial styloid process (APL & EPB sheath)."
        }
      },
      {
        "code": "T2",
        "color": "#00f5d4",
        "x": 56.0,
        "y": 54.0,
        "role": {
          "ko": "심부 근복·근막점",
          "en": "Deep Myofascial Trigger Point"
        },
        "name": {
          "ko": "T2: 전완 요측 장무지외전근(APL)·단무지신근(EPB) 근복 압통점",
          "en": "T2: Forearm APL & EPB Muscle Belly Trigger Point"
        },
        "desc": {
          "ko": "[표적 해부] 손목 관절선 상방 3~4손가락(FB) 지점, 전완 외측을 비스듬히 감고 도는 APL/EPB 근복 교차부.\n[촉지 및 시술] 힘줄을 잡아당기는 근복 자체의 등장성 수축 장력을 풀어 재발을 막습니다.",
          "en": "APL & EPB muscle belly 3-4 finger-breadths proximal to wrist crease."
        }
      },
      {
        "code": "T3",
        "color": "#ff9f43",
        "x": 49.0,
        "y": 71.0,
        "role": {
          "ko": "신경 주행·분지점",
          "en": "Nerve Pathway Target"
        },
        "name": {
          "ko": "T3: 해부학적 코담배갑(Anatomical Snuffbox) 요골신경 천지 포착점",
          "en": "T3: Anatomical Snuffbox Superficial Radial Nerve Point"
        },
        "desc": {
          "ko": "[표적 해부] 제1구획과 제3구획(EPL) 사이 코담배갑 바닥(주상골·대능형골) 및 요골신경 천지(Wartenberg 증후군).\n[촉지 및 시술] 엄지 기저부 저림과 손목 요측 심부 관절낭 통증을 함께 제거합니다.",
          "en": "Anatomical snuffbox floor and superficial branch of radial nerve."
        }
      },
      {
        "code": "T4",
        "color": "#38bdf8",
        "x": 62.0,
        "y": 38.0,
        "role": {
          "ko": "힘줄·골막 부착점",
          "en": "Tendon & Periosteal Target"
        },
        "name": {
          "ko": "T4: 주관절 외측 완요골근·장요측수근신근 근위 연계점",
          "en": "T4: Proximal Brachioradialis & ECRL Relay Point"
        },
        "desc": {
          "ko": "[표적 해부] 주관절 외측상과 상방 요측 신근군 기시부.\n[촉지 및 시술] 손목 요측 건초염 환자에게 항상 동반되는 근위 전완 근막 사슬 긴장을 해소합니다.",
          "en": "Lateral supracondylar ridge origin of radial wrist extensors."
        }
      }
    ],
    "anatomicalLabels": [
      "Abductor Pollicis Longus (APL)",
      "Extensor Pollicis Brevis (EPB)",
      "Radial Styloid Process",
      "Radial Nerve"
    ],
    "rifeFreq": 787,
    "searchKeywords": "드퀘르뱅 증후군 (De Quervain's Disease) De Quervain's Disease 손목 요골 측(엄지 쪽) 및 1st metacarpal base 통증, Finkelstein 검사 양성, 엄지 움직임 시 통증. Pain at radial side of wrist (thumb side) and 1st metacarpal base, positive Finkelstein test, pain upon thumb movement. 어깨, 상지 및 수부 질환 Shoulder, Upper Extremity & Hand"
  },
  {
    "id": 13,
    "catId": "shoulder_arm",
    "catNum": 2,
    "category": {
      "ko": "어깨, 상지 및 수부 질환",
      "en": "Shoulder, Upper Extremity & Hand"
    },
    "mechanism": {
      "ko": "힘줄견인",
      "en": "[TTP] Tendon/Periosteal Traction Pain"
    },
    "mechTags": [
      "tendon"
    ],
    "title": {
      "ko": "상완요골근 증후군",
      "en": "Brachioradialis Syndrome"
    },
    "symptoms": {
      "ko": "손목 요골 경상돌기 앞쪽/손바닥 쪽 통증, 팔굽혀펴기나 물건 짚을 때 통증.",
      "en": "Pain anterior to radial styloid process / palmar wrist, pain during push-ups or weight-bearing through palm."
    },
    "pathophysiology": {
      "ko": "팔씨름이나 손자 안아주기 등으로 상완요골근 과부하 유 발 -> 요골 경상돌기 정지부 골막 자극 (힘줄견인/골막염).",
      "en": "Overload of brachioradialis from arm wrestling or lifting children -> periostitis/traction pain (TTP) at radial styloid insertion."
    },
    "targetTissues": {
      "ko": "상완요골근(Brachioradialis) 근복.",
      "en": "Brachioradialis muscle belly."
    },
    "palpation": {
      "ko": "팔꿈치 주름 하방 3 FB(손가락 폭) 지점 상완요골근 근복 을 지그시 끼워 누를 때 심한 압통.",
      "en": "Severe tenderness when pinching brachioradialis belly 3 FB below cubital crease."
    },
    "clinicalCase": {
      "ko": "전완부 외측 통증과 상완요골근 부위 압통으로 주관절 신전 및 물건 들기가 제한되던 사례. 팔꿈치 하방 3횡지 상완요골근 근복에 NovaCell Therapy를 통전하여 건-골막 견인 긴장을 해소하고 팔굽혀펴기 및 파워 그립 기능 복원.",
      "en": "28yo police officer with radial wrist pain after arm wrestling. Able to perform push-ups after treating brachioradialis belly 3 FB below elbow with NovaCell therapy."
    },
    "diagram": "images/diagrams/diagram_13.png",
    "targets": [
      {
        "code": "T1",
        "color": "#ff334b",
        "x": 49.7,
        "y": 47.2,
        "role": {
          "ko": "제1 핵심 치료점",
          "en": "Primary Clinical Target"
        },
        "name": {
          "ko": "T1: 상완요골근(Brachioradialis) 근위 근복 핵심 압통점 (주관절 하방 3FB)",
          "en": "T1: Brachioradialis Proximal Belly Trigger Point"
        },
        "desc": {
          "ko": "[표적 해부] 주관절 주름 하방 약 3손가락 너비(3 FB) 지점의 상완요골근 최대 근복 및 요골신경 분지.\n[촉지 및 시술] 팔꿈치를 90도 굽히고 엄지가 위로 오게 힘줄 때 가장 두툼하게 솟아오르는 외측 전완 근복.",
          "en": "Thickest belly of brachioradialis 3 finger-breadths distal to elbow crease."
        }
      },
      {
        "code": "T2",
        "color": "#00f5d4",
        "x": 67.0,
        "y": 63.0,
        "role": {
          "ko": "힘줄·골막 부착점",
          "en": "Tendon & Periosteal Target"
        },
        "name": {
          "ko": "T2: 상완골 외측상과능(Lateral Supracondylar Ridge) 기시부 골막 부착점",
          "en": "T2: Lateral Supracondylar Ridge Periosteal Contact Origin"
        },
        "desc": {
          "ko": "[표적 해부] 상완골 원위 외측능 상부 2/3(상완요골근 기시부) 및 하부 1/3(장요측수근신근 ECRL 기시부) 골막.\n[촉지 및 시술] 외측상과 바로 위 능선 골막. 팔꿈치 외측 심부 견인통을 소실시킵니다.",
          "en": "Lateral supracondylar ridge periosteal origin of brachioradialis and ECRL."
        }
      },
      {
        "code": "T3",
        "color": "#ff9f43",
        "x": 38.0,
        "y": 62.0,
        "role": {
          "ko": "신경 주행·분지점",
          "en": "Nerve Pathway Target"
        },
        "name": {
          "ko": "T3: 요골두 전외측 요골신경 관통부 (Radial Tunnel & Frohse 아케이드)",
          "en": "T3: Radial Tunnel & Arcade of Frohse Nerve Point"
        },
        "desc": {
          "ko": "[표적 해부] 요골두 전외측 상완요골근과 상완근 사이 요골터널 및 회외근 상연(Frohse 아케이드).\n[촉지 및 시술] 전완 회내·회외 시 걸리는 요골신경 포착을 함께 감압합니다.",
          "en": "Radial tunnel anterior to radial head and Arcade of Frohse."
        }
      },
      {
        "code": "T4",
        "color": "#38bdf8",
        "x": 62.0,
        "y": 38.0,
        "role": {
          "ko": "힘줄·골막 부착점",
          "en": "Tendon & Periosteal Target"
        },
        "name": {
          "ko": "T4: 요골 경상돌기 상방 상완요골근 정지건 및 엄지 기저 방사통점",
          "en": "T4: Distal Brachioradialis Insertion at Radial Styloid"
        },
        "desc": {
          "ko": "[표적 해부] 요골 원위단 경상돌기 기저부 상완요골근 정지건.\n[촉지 및 시술] 엄지와 검지 사이(합곡혈 부근)로 뻗치는 원위부 연관통 사슬을 마무리합니다.",
          "en": "Distal insertion of brachioradialis just proximal to radial styloid process."
        }
      }
    ],
    "anatomicalLabels": [
      "Brachioradialis",
      "Superficial Radial Nerve",
      "Radial Styloid Process",
      "Radius"
    ],
    "rifeFreq": 880,
    "searchKeywords": "상완요골근 증후군 Brachioradialis Syndrome 손목 요골 경상돌기 앞쪽/손바닥 쪽 통증, 팔굽혀펴기나 물건 짚을 때 통증. Pain anterior to radial styloid process / palmar wrist, pain during push-ups or weight-bearing through palm. 어깨, 상지 및 수부 질환 Shoulder, Upper Extremity & Hand"
  },
  {
    "id": 14,
    "catId": "shoulder_arm",
    "catNum": 2,
    "category": {
      "ko": "어깨, 상지 및 수부 질환",
      "en": "Shoulder, Upper Extremity & Hand"
    },
    "mechanism": {
      "ko": "신경유착 / 힘줄견인",
      "en": "[ / TTP] Nerve Entrapment & Tendon Traction"
    },
    "mechTags": [
      "nerve",
      "tendon"
    ],
    "title": {
      "ko": "손목터널증후군 (Carpal Tunnel Syndrome)",
      "en": "Carpal Tunnel Syndrome"
    },
    "symptoms": {
      "ko": "엄지~약지 손가락 저림, 밤/새벽에 깨서 손을 털어야 함, 무 지구근 위축.",
      "en": "Numbness in digits 1??, waking at night/dawn needing to shake hands out, thenar muscle atrophy."
    },
    "pathophysiology": {
      "ko": "요수근굴근(FCR)의 일차적 강직 및 신경유착과 힘줄견인으 로 인해 수근관 내부 압력이 이차적으로 증가하거나, 원회내 근에 의해 정중신경이 유착됨.",
      "en": "Primary hypertonicity and TT of flexor carpi radialis (FCR) secondarily increases carpal tunnel pressure, or median nerve is entrapped by pronator teres."
    },
    "targetTissues": {
      "ko": "요수근굴근(FCR), 원회내근(Pronator teres, PT), 전사각근.",
      "en": "Flexor carpi radialis (FCR), Pronator teres (PT), Anterior scalene."
    },
    "palpation": {
      "ko": "전완 중간 높이 FCR 근복(장장근 요골 측 옆), 주관절 하방 원회내근 근복 압통점.",
      "en": "Mid-forearm FCR muscle belly (adjacent to palmaris longus radial side), pronator teres belly tender point below cubital joint."
    },
    "clinicalCase": {
      "ko": "야간마다 손가락(1~3지)이 타는 듯 저려 수면 중 손을 털어야 했던 수근관증후군 사례. 요측수근굴근(FCR) 및 원회내근 전완 근복에 NovaCell Therapy를 적용하여 정중신경의 근위부 압박을 이완시킴으로써 야간 저림 완치 및 편안한 숙면 달성.",
      "en": "Female restaurant worker in 50s waking nightly from hand numbness. Night numbness completely resolved after FCR muscle belly NovaCell conduction."
    },
    "diagram": "images/diagrams/diagram_14.png",
    "targets": [
      {
        "code": "T1",
        "color": "#ff334b",
        "x": 49.8,
        "y": 47.2,
        "role": {
          "ko": "주 신경포착점",
          "en": "Primary Nerve Entrapment"
        },
        "name": {
          "ko": "T1: 수근관 입구 정중신경 포착점 (완관절 주름 중앙 횡수근인대)",
          "en": "T1: Carpal Tunnel Inlet Median Nerve (Flexor Retinaculum)"
        },
        "desc": {
          "ko": "[표적 해부] 완관절 수장측 주름 중앙(장장근건 PL과 요측수근굴근건 FCR 사이) 횡수근인대 및 정중신경.\n[촉지 및 시술] 손목 주름 정중앙 수근관 입구(HP-CTS-01). 밤에 심해지는 엄지·검지·중지 저림과 Tinel 징후를 직접 감압합니다.",
          "en": "Carpal tunnel inlet between palmaris longus and FCR tendons at distal wrist crease."
        }
      },
      {
        "code": "T2",
        "color": "#00f5d4",
        "x": 67.0,
        "y": 63.0,
        "role": {
          "ko": "신경 주행·분지점",
          "en": "Nerve Pathway Target"
        },
        "name": {
          "ko": "T2: 전완 근위부 원회내근(Pronator Teres) 정중신경 관통점",
          "en": "T2: Pronator Teres Median Nerve Piercing Point"
        },
        "desc": {
          "ko": "[표적 해부] 주관절 내측상과 하방 3~4cm 원회내근 상완두·척골두 사이 정중신경 관통 터널.\n[촉지 및 시술] 수근관 수술 후에도 손저림이 남는 가장 흔한 원인인 근위부 원회내근 증후군(이중 포착) 핵심 타깃입니다(HP-CTS-02).",
          "en": "Pronator teres two-head tunnel 3-4cm distal to medial epicondyle."
        }
      },
      {
        "code": "T3",
        "color": "#ff9f43",
        "x": 38.0,
        "y": 62.0,
        "role": {
          "ko": "심부 근복·근막점",
          "en": "Deep Myofascial Trigger Point"
        },
        "name": {
          "ko": "T3: 전완 중간 요측수근굴근(FCR) 및 천지굴근(FDS) 건궁 압통점",
          "en": "T3: Mid-Forearm FCR & FDS Arch Median Nerve Track"
        },
        "desc": {
          "ko": "[표적 해부] 전완 수장측 중간 높이의 요측수근굴근(FCR) 및 천지굴근 섬유성 건궁.\n[촉지 및 시술] 손목과 손가락 굴곡근 과긴장으로 인한 정중신경 주행로 압박을 해소합니다.",
          "en": "Mid-forearm FCR belly and FDS fibrous arch over median nerve."
        }
      },
      {
        "code": "T4",
        "color": "#38bdf8",
        "x": 62.0,
        "y": 38.0,
        "role": {
          "ko": "신경 주행·분지점",
          "en": "Nerve Pathway Target"
        },
        "name": {
          "ko": "T4: 무지구근(Thenar) 정중신경 반회지 분기점",
          "en": "T4: Thenar Eminence Recurrent Motor Branch Point"
        },
        "desc": {
          "ko": "[표적 해부] 수근관 출구 원위부, 제1중수골 기저부 내측 무지구근(단무지외전근·무지대립근) 운동지.\n[촉지 및 시술] 엄지손가락 힘 빠짐과 무지구 위축, 엄지 뿌리 통증을 회복시킵니다(HP-CTS-03).",
          "en": "Recurrent motor branch of median nerve at base of thenar eminence."
        }
      }
    ],
    "anatomicalLabels": [
      "Median Nerve",
      "Flexor Carpi Radialis (FCR)",
      "Transverse Carpal Ligament",
      "Pronator Teres"
    ],
    "rifeFreq": 727,
    "searchKeywords": "손목터널증후군 (Carpal Tunnel Syndrome) Carpal Tunnel Syndrome 엄지~약지 손가락 저림, 밤/새벽에 깨서 손을 털어야 함, 무 지구근 위축. Numbness in digits 1??, waking at night/dawn needing to shake hands out, thenar muscle atrophy. 어깨, 상지 및 수부 질환 Shoulder, Upper Extremity & Hand"
  },
  {
    "id": 15,
    "catId": "shoulder_arm",
    "catNum": 2,
    "category": {
      "ko": "어깨, 상지 및 수부 질환",
      "en": "Shoulder, Upper Extremity & Hand"
    },
    "mechanism": {
      "ko": "신경유착",
      "en": "[TTP] Tendon/Periosteal Traction Pain"
    },
    "mechTags": [
      "nerve"
    ],
    "title": {
      "ko": "방아쇠수지 (Trigger Finger)",
      "en": "Trigger Finger"
    },
    "symptoms": {
      "ko": "손가락 마디 걸림(triggering), 아침에 손가락이 잘 안 펴짐, MCP 관절 근위부(A1, A2 pulley) 압통.",
      "en": "Finger joint catching/triggering, difficulty extending finger in morning, tenderness proximal to MCP joint (A1, A2 pulley)."
    },
    "pathophysiology": {
      "ko": "지굴근(FDS, FDP)의 병적 등장성 수축으로 힘줄이 팽팽해져 A1, A2 pulley 및 metacarpal head와의 마찰/협착성 건막염 발생.",
      "en": "Pathologic isotonic contraction of flexor digitorum (FDS/FDP) tightens tendons, causing friction and stenosing tenosynovitis with A1/A2 pulleys and metacarpal heads."
    },
    "targetTissues": {
      "ko": "지심굴근/지표굴근(FDS/FDP) 근복, 원회내근(PT).",
      "en": "Flexor digitorum profundus / superficialis (FDP/FDS) muscle bellies, Pronator teres (PT)."
    },
    "palpation": {
      "ko": "전완 중간 높이 장장근 척골 측 바로 옆 FDS/FDP 근복 지그시 깊은 압통점.",
      "en": "Deep tender point in FDS/FDP muscle belly at mid-forearm, immediately ulnar to palmaris longus."
    },
    "clinicalCase": {
      "ko": "손가락을 굽혔다 펼 때 뚝 소리와 함께 튕기며 걸리는 만성 방아쇠수지 사례. 전완 심부 굴근(FDS/FDP) 근복 및 건막 이행부에 NovaCell Therapy를 단계별로 적용하여 굴곡건의 활주 저항을 제거함으로써 걸림 현상 완치 및 부드러운 손동작 회복.",
      "en": "68yo female with 3-year history of middle finger triggering. Catching completely cured after 3 sessions treating mid-forearm FDS/FDP bellies and pronator teres with NovaCell probe."
    },
    "diagram": "images/diagrams/diagram_15.png",
    "targets": [
      {
        "code": "T1",
        "color": "#ff334b",
        "x": 66.7,
        "y": 39.9,
        "role": {
          "ko": "제1 핵심 치료점",
          "en": "Primary Clinical Target"
        },
        "name": {
          "ko": "T1: 수장측 A1 도르래(A1 Pulley) 굴근건 결절점 (MP 관절두 골막 부착부)",
          "en": "T1: Palmar A1 Pulley Flexor Tendon Nodule Point"
        },
        "desc": {
          "ko": "[표적 해부] 중수지절관절(MCP joint) 수장측 주름 직상방의 A1 윤상인대(도르래) 및 천·심지굴근건 섬유성 결절.\n[촉지 및 시술] 손가락을 굽혔다 펼 때 '딸깍' 걸리는 손바닥 뼈머리(중수골두) 위 딱딱한 결절(HP-TF-01). 도르래 마찰과 부종을 직접 해소합니다.",
          "en": "A1 pulley nodule over palmar metacarpal head at distal palmar crease."
        }
      },
      {
        "code": "T2",
        "color": "#00f5d4",
        "x": 56.0,
        "y": 54.0,
        "role": {
          "ko": "심부 근복·근막점",
          "en": "Deep Myofascial Trigger Point"
        },
        "name": {
          "ko": "T2: 전완 중간 심부 천·심지굴근(FDS·FDP) 근복 핵심 압통점",
          "en": "T2: Mid-Forearm FDS & FDP Deep Muscle Belly Point"
        },
        "desc": {
          "ko": "[표적 해부] 전완 수장측 중간 높이, 장장근(PL) 척측 바로 옆의 천지굴근·심지굴근 근복.\n[촉지 및 시술] 손가락 힘줄을 끊임없이 잡아당기는 전완 굴근 엔진의 단축을 이완하여 딸깍거림(Triggering)을 근원부터 풀어줍니다.",
          "en": "Mid-forearm flexor digitorum superficialis and profundus muscle belly."
        }
      },
      {
        "code": "T3",
        "color": "#ff9f43",
        "x": 38.0,
        "y": 62.0,
        "role": {
          "ko": "힘줄·골막 부착점",
          "en": "Tendon & Periosteal Target"
        },
        "name": {
          "ko": "T3: 근위지절(PIP) 수장판 및 A2 도르래 원위 힘줄점",
          "en": "T3: Proximal Phalanx Palmar Plate & A2 Pulley Point"
        },
        "desc": {
          "ko": "[표적 해부] 손가락 첫째 마디 바닥면 섬유연골성 수장판(Volar plate) 및 굴근건초.\n[촉지 및 시술] 아침에 손가락이 완전히 펴지지 않는 관절낭·건초 유착을 부드럽게 이완합니다.",
          "en": "Palmar plate and A2 pulley region at proximal phalanx base."
        }
      },
      {
        "code": "T4",
        "color": "#38bdf8",
        "x": 73.0,
        "y": 47.0,
        "role": {
          "ko": "힘줄·골막 부착점",
          "en": "Tendon & Periosteal Target"
        },
        "name": {
          "ko": "T4: 수근관 횡수근인대 굴근건 활주 터널점",
          "en": "T4: Carpal Tunnel Flexor Tendon Gliding Gate"
        },
        "desc": {
          "ko": "[표적 해부] 9개의 수지 굴근건이 통과하는 수근관(Carpal tunnel) 중심부.\n[촉지 및 시술] 방아쇠수지와 자주 동반되는 수근관 내 건막 염증 및 활주 저항을 감소시킵니다.",
          "en": "Carpal tunnel flexor tendon common synovial sheath point."
        }
      }
    ],
    "anatomicalLabels": [
      "A1 Pulley",
      "Flexor Digitorum Superficialis (FDS)",
      "Flexor Digitorum Profundus (FDP)",
      "Pronator Teres"
    ],
    "rifeFreq": 787,
    "searchKeywords": "방아쇠수지 (Trigger Finger) Trigger Finger 손가락 마디 걸림(triggering), 아침에 손가락이 잘 안 펴짐, MCP 관절 근위부(A1, A2 pulley) 압통. Finger joint catching/triggering, difficulty extending finger in morning, tenderness proximal to MCP joint (A1, A2 pulley). 어깨, 상지 및 수부 질환 Shoulder, Upper Extremity & Hand"
  },
  {
    "id": 16,
    "catId": "shoulder_arm",
    "catNum": 2,
    "category": {
      "ko": "어깨, 상지 및 수부 질환",
      "en": "Shoulder, Upper Extremity & Hand"
    },
    "mechanism": {
      "ko": "신경유착",
      "en": "[신경유착] Nerve Entrapment"
    },
    "mechTags": [
      "nerve"
    ],
    "title": {
      "ko": "척골신경 유착증 (주관증후군 / 가이온관증후군)",
      "en": "Cubital Tunnel / Ulnar Nerve Entrapment"
    },
    "symptoms": {
      "ko": "약지 외측 및 새끼손가락 저림, 손가락 사이 근육 위축, 주 관절 내측/손목 척골측 찌릿함.",
      "en": "Numbness in 4th/5th digits, 5th finger catching when reaching into pockets, reduced grip strength, hypothenar atrophy."
    },
    "pathophysiology": {
      "ko": "척측수근굴근(FCU) 두 머리 사이(주관) 또는 가이온관 (Guyon's canal)에서 척골신경이 유착됨.",
      "en": "Ulnar nerve entrapped in cubital tunnel between medial head of FCU and pectoralis minor c."
    },
    "targetTissues": {
      "ko": "척측수근굴근(FCU) 근복, 삼두근 내측두, 내측사각근.",
      "en": "Flexor carpi ulnaris (FCU) muscle belly, Pectoralis minor."
    },
    "palpation": {
      "ko": "내측상과 하방 2-3cm FCU 두 머리 사이 주관 부위 압통 점.",
      "en": "Tender points in FCU muscle belly below medial epicondyle and pectoralis minor."
    },
    "clinicalCase": {
      "ko": "4번째와 5번째 손가락의 찌릿한 저림과 팔꿈치 내측 저림을 호소하던 척골신경 유착 사례. 척측수근굴근(FCU) 근복 및 주관 부위 신경 터널에 NovaCell Therapy를 적용하여 척골신경의 기계적 압박을 해소하고 수지 감각 완전 회복.",
      "en": "Patient with small finger numbness and grip weakness. Numbness resolved following FCU muscle belly and pectoralis minor NovaCell application."
    },
    "diagram": "images/diagrams/diagram_16.png",
    "targets": [
      {
        "code": "T1",
        "color": "#ff334b",
        "x": 49.5,
        "y": 57.9,
        "role": {
          "ko": "주 신경포착점",
          "en": "Primary Nerve Entrapment"
        },
        "name": {
          "ko": "T1: 주관 입구 오스본 인대(Osborne's Ligament) 척골신경 포착점",
          "en": "T1: Cubital Tunnel Osborne's Ligament Ulnar Nerve Point"
        },
        "desc": {
          "ko": "[표적 해부] 상완골 내측상과와 주두(Olecranon) 사이 척골신경구 및 오스본 인대(주관 망상인대).\n[촉지 및 시술] 내측상과 뒤쪽 오목한 고랑(HP-CuT-01). 약지(4지)와 소지(5지)가 저리고 찌릿한 주관증후군의 1차 포착점입니다.",
          "en": "Ulnar groove between medial epicondyle and olecranon under Osborne's ligament."
        }
      },
      {
        "code": "T2",
        "color": "#00f5d4",
        "x": 67.0,
        "y": 63.0,
        "role": {
          "ko": "힘줄·골막 부착점",
          "en": "Tendon & Periosteal Target"
        },
        "name": {
          "ko": "T2: 내측상과 하방 2~3cm 척측수근굴근(FCU) 양두 사이 건궁 출구점",
          "en": "T2: FCU Two-Head Aponeurotic Arch (2-3cm Distal to ME)"
        },
        "desc": {
          "ko": "[표적 해부] 척측수근굴근(FCU)의 상완두와 척골두가 합쳐지는 섬유성 아케이드 내부 척골신경 관통부.\n[촉지 및 시술] 내측상과 하방 2~3cm 전완 내측 심부 압통점(HP-CuT-02). 팔꿈치를 굽힐 때 척골신경이 조여지는 핵심 병소입니다.",
          "en": "Fibrous arch between humeral and ulnar heads of FCU 2-3cm distal to medial epicondyle."
        }
      },
      {
        "code": "T3",
        "color": "#ff9f43",
        "x": 38.0,
        "y": 62.0,
        "role": {
          "ko": "신경 주행·분지점",
          "en": "Nerve Pathway Target"
        },
        "name": {
          "ko": "T3: 손목 척측 가이온관(Guyon's Canal) 두상골-유구골구 신경점",
          "en": "T3: Guyon's Canal Pisiform-Hamate Ulnar Nerve Tunnel"
        },
        "desc": {
          "ko": "[표적 해부] 손목 수장측 척골 끝 두상골(Pisiform)과 유구골 갈고리(Hook of hamate) 사이 가이온관.\n[촉지 및 시술] 손바닥 새끼손가락 쪽 뿌리 볼록한 두상골 바로 바깥쪽 함요처. 소지구근 약화와 4·5지 감각이상을 해소합니다.",
          "en": "Guyon's canal between pisiform and hook of hamate at ulnar wrist."
        }
      },
      {
        "code": "T4",
        "color": "#38bdf8",
        "x": 62.0,
        "y": 38.0,
        "role": {
          "ko": "후관절·신경근점",
          "en": "Facet & Nerve Root Target"
        },
        "name": {
          "ko": "T4: 경추 C8-T1 추간공 및 전사각근·소흉근 하부신경총 연계점",
          "en": "T4: C8-T1 Root & Lower Brachial Plexus Relay Point"
        },
        "desc": {
          "ko": "[표적 해부] 척골신경의 기시 분절인 C8-T1 후관절 및 쇄골상 하부 신경간.\n[촉지 및 시술] 경추 하부에서 시작되는 척골신경 이중 포착(Double crush)을 감별·해소합니다.",
          "en": "C8-T1 segmental facet and lower trunk of brachial plexus."
        }
      }
    ],
    "anatomicalLabels": [
      "Ulnar Nerve",
      "Flexor Carpi Ulnaris (FCU)",
      "Cubital Tunnel",
      "Guyon's Canal"
    ],
    "rifeFreq": 880,
    "searchKeywords": "척골신경 유착증 (주관증후군 / 가이온관증후군) Cubital Tunnel / Ulnar Nerve Entrapment 약지 외측 및 새끼손가락 저림, 손가락 사이 근육 위축, 주 관절 내측/손목 척골측 찌릿함. Numbness in 4th/5th digits, 5th finger catching when reaching into pockets, reduced grip strength, hypothenar atrophy. 어깨, 상지 및 수부 질환 Shoulder, Upper Extremity & Hand"
  },
  {
    "id": 17,
    "catId": "shoulder_arm",
    "catNum": 2,
    "category": {
      "ko": "어깨, 상지 및 수부 질환",
      "en": "Shoulder, Upper Extremity & Hand"
    },
    "mechanism": {
      "ko": "힘줄견인",
      "en": "[TTP] Tendon/Periosteal Traction Pain"
    },
    "mechTags": [
      "tendon"
    ],
    "title": {
      "ko": "장/단척측수근신경 및 척측수근굴근 힘줄염",
      "en": "Extensor Carpi Ulnaris / Flexor Carpi Ulnaris Tendinopathy (ECU / FCU TTP)"
    },
    "symptoms": {
      "ko": "손목 등쪽/척골측 통증, 주먹 쥐거나 손목을 꺾을 때 손목 관절통증.",
      "en": "Ulnar-sided wrist pain, weakness and pain when wringing objects or carrying bags."
    },
    "pathophysiology": {
      "ko": "ECRL, ECRB, ECU 또는 FCU 근복의 TTP로 인해 중수골 기저부 골막 부착부에 견인성 염증 발생.",
      "en": "Overuse of ECU/FCU forms muscle belly TTPs, inducing traction irritation on pisiform and 5th metacarpal base periosteum."
    },
    "targetTissues": {
      "ko": "ECRL, ECRB, ECU, FCU 근복.",
      "en": "ECU muscle belly, FCU muscle belly, and pisiform attachment."
    },
    "palpation": {
      "ko": "전완 근위부 및 중간 높이 각 근육 근복의 심부 압통점.",
      "en": "Deep tender points in ECU/FCU muscle bellies on ulnar forearm."
    },
    "clinicalCase": {
      "ko": "라켓/골프 운동 후 발생한 손목 척측 및 배측의 시큰거리는 힘줄 통증 사례. 전완 외측 신전근 및 척측수근굴근 기시부에 NovaCell Therapy를 통전하여 건초의 염증성 긴장을 이완시킴으로써 손목 비틀기 동작 시 통증 소실.",
      "en": "Patient with ulnar wrist pain when wringing objects. Pain improved following ECU/FCU muscle belly NovaCell therapy."
    },
    "diagram": "images/diagrams/diagram_17.png",
    "targets": [
      {
        "code": "T1",
        "color": "#ff334b",
        "x": 62.5,
        "y": 35.4,
        "role": {
          "ko": "제1 핵심 치료점",
          "en": "Primary Clinical Target"
        },
        "name": {
          "ko": "T1: 전완 근위~중간 척측수근굴근(FCU)·척측수근신근(ECU) 근복 압통점",
          "en": "T1: Proximal/Mid-Forearm FCU & ECU Muscle Belly Point"
        },
        "desc": {
          "ko": "[표적 해부] 전완 척측(새끼손가락 쪽)을 따라 주행하는 척측수근굴근(FCU) 및 척측수근신근(ECU) 심부 근복.\n[촉지 및 시술] 전완 상부 1/3~중간 높이 척골연 양측 근복. 손목을 비틀거나 땅을 짚을 때 발생하는 척측 견인 장력을 제거합니다.",
          "en": "Deep muscle bellies of FCU and ECU along ulnar border of mid-forearm."
        }
      },
      {
        "code": "T2",
        "color": "#00f5d4",
        "x": 29.0,
        "y": 78.9,
        "role": {
          "ko": "힘줄·골막 부착점",
          "en": "Tendon & Periosteal Target"
        },
        "name": {
          "ko": "T2: 손목 삼각섬유연골복합체(TFCC) 척골와(Fovea) 및 척골 경상돌기점",
          "en": "T2: TFCC Ulnar Fovea & Ulnar Styloid Periosteal Contact"
        },
        "desc": {
          "ko": "[표적 해부] 척골 경상돌기 하방 척골와(Fovea), 삼각섬유연골복합체(TFCC) 및 ECU 제6신전건 구획.\n[촉지 및 시술] 손목 새끼손가락 쪽 뼈 돌기 바로 아래 오목한 관절 공간. 걸레를 짜거나 손목을 젖힐 때 시큰거리는 통증의 핵심점입니다.",
          "en": "Ulnar fovea depression just distal to ulnar styloid process over TFCC."
        }
      },
      {
        "code": "T3",
        "color": "#ff9f43",
        "x": 38.0,
        "y": 62.0,
        "role": {
          "ko": "힘줄·골막 부착점",
          "en": "Tendon & Periosteal Target"
        },
        "name": {
          "ko": "T3: 제2·3·5 중수골 기저부(Metacarpal Bases) 수근신근·굴근 골막 정지점",
          "en": "T3: 2nd, 3rd & 5th Metacarpal Base Periosteal Insertions"
        },
        "desc": {
          "ko": "[표적 해부] 장·단요측수근신근(제2·3중수골 기저부) 및 척측수근신근·굴근(제5중수골 기저부·유구골) 골막 부착부.\n[촉지 및 시술] 손등과 손목 경계의 중수골 기저부 골막 부착부. 힘줄 정지부 골막 염증을 진정시킵니다.",
          "en": "Periosteal insertions of wrist extensors and flexors at bases of 2nd, 3rd, and 5th metacarpals."
        }
      },
      {
        "code": "T4",
        "color": "#38bdf8",
        "x": 73.0,
        "y": 47.0,
        "role": {
          "ko": "힘줄·골막 부착점",
          "en": "Tendon & Periosteal Target"
        },
        "name": {
          "ko": "T4: 원위 요척관절(DRUJ) 배측·장측 관절낭 안정화점",
          "en": "T4: Distal Radioulnar Joint (DRUJ) Capsule Point"
        },
        "desc": {
          "ko": "[표적 해부] 원위 요골과 척골두 사이 원위요척관절(DRUJ) 및 방형회내근(Pronator quadratus).\n[촉지 및 시술] 전완 회내·회외 시 손목에서 소리가 나거나 불안정한 통증을 잡아줍니다.",
          "en": "Distal radioulnar joint capsule and pronator quadratus stabilizing point."
        }
      }
    ],
    "anatomicalLabels": [
      "Extensor Carpi Ulnaris (ECU)",
      "Flexor Carpi Ulnaris (FCU)",
      "Ulnar Styloid",
      "TFCC"
    ],
    "rifeFreq": 727,
    "searchKeywords": "장/단척측수근신경 및 척측수근굴근 힘줄염 Extensor Carpi Ulnaris / Flexor Carpi Ulnaris Tendinopathy (ECU / FCU TTP) 손목 등쪽/척골측 통증, 주먹 쥐거나 손목을 꺾을 때 손목 관절통증. Ulnar-sided wrist pain, weakness and pain when wringing objects or carrying bags. 어깨, 상지 및 수부 질환 Shoulder, Upper Extremity & Hand"
  },
  {
    "id": 18,
    "catId": "shoulder_arm",
    "catNum": 2,
    "category": {
      "ko": "어깨, 상지 및 수부 질환",
      "en": "Shoulder, Upper Extremity & Hand"
    },
    "mechanism": {
      "ko": "힘줄견인 / 근막유착",
      "en": "[TTP / c] Tendon Traction & Complex Nerve Entrapment"
    },
    "mechTags": [
      "nerve",
      "tendon"
    ],
    "title": {
      "ko": "골프엘보 / 척측수근굴근 힘줄견인통",
      "en": "Golfer's Elbow / Flexor Carpi Ulnaris TTP"
    },
    "symptoms": {
      "ko": "주관절 내측상과 국소 통증, 세수할 때나 물건 잡을 때 내측 팔꿈치 통증.",
      "en": "Localized pain at medial epicondyle of elbow, inner elbow pain during face washing or gripping."
    },
    "pathophysiology": {
      "ko": "척측수근굴근(FCU) 및 굴근군의 과긴장으로 내측상과 기시부 골막에 염증성 견인 자극(TTP) 발생; 소흉근 c 연루.",
      "en": "Hypertonicity of FCU and flexor group causes inflammatory traction irritation (TTP) on medial epicondyle origin periosteum; pectoralis minor c involved."
    },
    "targetTissues": {
      "ko": "척측수근굴근(FCU) 근복, 소흉근(Pectoralis minor).",
      "en": "Flexor carpi ulnaris (FCU) muscle belly, Pectoralis minor."
    },
    "palpation": {
      "ko": "내측상과 하방 3 FB(손가락 폭) FCU 근복 및 소흉근 압통점.",
      "en": "FCU muscle belly 3 FB below medial epicondyle, and pectoralis minor tender point."
    },
    "clinicalCase": {
      "ko": "팔꿈치 내측상과 부위의 찌르는 통증과 악수 시 힘이 빠지던 골프엘보 사례. 소흉근 보상 유착점 및 척측수근굴근(FCU) 기시부에 복합 NovaCell Therapy를 적용하여 상지 운동 사슬의 장력을 균형화함으로써 팔꿈치 통증 85% 이상 개선.",
      "en": "48yo female with 4 months of right medial epicondyle pain. >70% pain improvement after NovaCell conduction at right pectoralis minor and FCU muscle belly."
    },
    "diagram": "images/diagrams/diagram_18.png",
    "targets": [
      {
        "code": "T1",
        "color": "#ff334b",
        "x": 63.9,
        "y": 33.1,
        "role": {
          "ko": "제1 핵심 치료점",
          "en": "Primary Clinical Target"
        },
        "name": {
          "ko": "T1: 상완골 내측상과 공통굴근건 기시부 골막 부착점 (Medial Epicondyle)",
          "en": "T1: Medial Epicondyle Common Flexor Tendon Periosteal Contact"
        },
        "desc": {
          "ko": "[표적 해부] 상완골 내측상과 전면 첨부의 공통굴근건(원회내근·요측수근굴근·장장근·척측수근굴근) 골막 기시부.\n[촉지 및 시술] 팔꿈치 안쪽 가장 튀어나온 뼈 돌기 전면 및 직하방 1cm 골막(HP-ME-01). 골프엘보·내측상과염의 핵심 골막·건 타깃입니다.",
          "en": "Anterior-inferior aspect of medial epicondyle common flexor origin."
        }
      },
      {
        "code": "T2",
        "color": "#00f5d4",
        "x": 28.3,
        "y": 78.3,
        "role": {
          "ko": "힘줄·골막 부착점",
          "en": "Tendon & Periosteal Target"
        },
        "name": {
          "ko": "T2: 내측상과 하방 3FB 척측수근굴근(FCU) 및 원회내근 근복 압통점",
          "en": "T2: FCU & Pronator Teres Belly (3 FB Distal to ME)"
        },
        "desc": {
          "ko": "[표적 해부] 내측상과 하방 약 3손가락 너비(3 FB) 지점의 척측수근굴근(FCU) 및 원회내근 근복.\n[촉지 및 시술] 내측상과 골막을 지속적으로 잡아당기는 굴근·회내근 근복의 단축 결절을 직접 이완합니다(HP-ME-02).",
          "en": "FCU and pronator teres muscle bellies 3 finger-breadths distal to medial epicondyle."
        }
      },
      {
        "code": "T3",
        "color": "#ff9f43",
        "x": 38.0,
        "y": 62.0,
        "role": {
          "ko": "신경 주행·분지점",
          "en": "Nerve Pathway Target"
        },
        "name": {
          "ko": "T3: 전흉벽 소흉근(Pectoralis Minor) 근복 및 내측신경다발 근위 연계점",
          "en": "T3: Pectoralis Minor Belly & Medial Cord Brachial Plexus"
        },
        "desc": {
          "ko": "[표적 해부] 제3~5늑골~오훼돌기 소흉근 근복 및 상완신경총 내측신경다발(C8-T1).\n[촉지 및 시술] 팔꿈치 내측 통증(골프엘보)이 잘 낫지 않을 때 반드시 함께 풀어야 하는 근위부 신경·근막 사슬 타깃입니다.",
          "en": "Pectoralis minor belly decompressing medial cord of brachial plexus feeding medial elbow."
        }
      },
      {
        "code": "T4",
        "color": "#38bdf8",
        "x": 73.0,
        "y": 47.0,
        "role": {
          "ko": "신경 주행·분지점",
          "en": "Nerve Pathway Target"
        },
        "name": {
          "ko": "T4: 주관(Cubital Tunnel) 척골신경 인접 감압점",
          "en": "T4: Adjacent Cubital Tunnel Ulnar Nerve Point"
        },
        "desc": {
          "ko": "[표적 해부] 내측상과 바로 뒤쪽 척골신경구.\n[촉지 및 시술] 내측상과염 환자의 40%에서 동반되는 척골신경 자극 증상을 동시에 해소합니다.",
          "en": "Ulnar nerve groove immediately posterior to medial epicondyle."
        }
      }
    ],
    "anatomicalLabels": [
      "Medial Epicondyle",
      "Common Flexor Tendon",
      "Pectoralis Minor",
      "Flexor Carpi Ulnaris (FCU)"
    ],
    "rifeFreq": 880,
    "searchKeywords": "골프엘보 / 척측수근굴근 힘줄견인통 Golfer's Elbow / Flexor Carpi Ulnaris TTP 주관절 내측상과 국소 통증, 세수할 때나 물건 잡을 때 내측 팔꿈치 통증. Localized pain at medial epicondyle of elbow, inner elbow pain during face washing or gripping. 어깨, 상지 및 수부 질환 Shoulder, Upper Extremity & Hand"
  },
  {
    "id": 19,
    "catId": "shoulder_arm",
    "catNum": 2,
    "category": {
      "ko": "어깨, 상지 및 수부 질환",
      "en": "Shoulder, Upper Extremity & Hand"
    },
    "mechanism": {
      "ko": "힘줄견인",
      "en": "[TTP] Tendon/Periosteal Traction Pain"
    },
    "mechTags": [
      "tendon"
    ],
    "title": {
      "ko": "제1배측골간근 힘줄견인통",
      "en": "1st Dorsal Interosseous TTP"
    },
    "symptoms": {
      "ko": "엄지~검지 사이 손등 쪽 날카로운 통증, 물건을 쥐거나 머리를 빗 기 힘듦.",
      "en": "Sharp dorsum pain between thumb and index finger, difficulty pinching objects or combing hair."
    },
    "pathophysiology": {
      "ko": "제1배측골간근 요골측 깃(1st dorsal interosseous pennate head) 기시부의 미세손상 및 골막 자극 통증 (힘줄견인통/골막염).",
      "en": "Micro-damage and periosteal traction pain (TTP/periostitis) at origin of radial pennate head of 1st dorsal interosseous."
    },
    "targetTissues": {
      "ko": "제1배측골간근(1st dorsal interosseous, 요골측).",
      "en": "1st dorsal interosseous muscle (radial head)."
    },
    "palpation": {
      "ko": "제1중수골 요골 측 기시부 지그시 깊은 압통점.",
      "en": "Deep tender point pressed firmly along radial origin on 1st metacarpal."
    },
    "clinicalCase": {
      "ko": "엄지와 검지 사이 손등 부위 통증으로 일상적인 손 사용(머리 빗기, 열쇠 돌리기)이 어려웠던 사례. 제1배측골간근 근복의 중심 압통점에 NovaCell Therapy를 정밀 통전하여 골막 견인 통증을 즉각 이완하고 정밀 손 기능 회복.",
      "en": "Patient unable to comb hair for 3?? months due to hand pain. Immediate pain relief and ability to comb hair restored after 1st dorsal interosseous NovaCell treatment."
    },
    "diagram": "images/diagrams/diagram_19.png",
    "targets": [
      {
        "code": "T1",
        "color": "#ff334b",
        "x": 53.3,
        "y": 58.3,
        "role": {
          "ko": "제1 핵심 치료점",
          "en": "Primary Clinical Target"
        },
        "name": {
          "ko": "T1: 제1배측골간근(1st Dorsal Interosseous) 제1·2중수골 기시부 골막 부착점",
          "en": "T1: 1st Dorsal Interosseous Metacarpal Origin Periosteal Contact"
        },
        "desc": {
          "ko": "[표적 해부] 엄지(제1중수골)와 검지(제2중수골) 사이 물갈퀴 공간(합곡혈 심부) 제1배측골간근 양측 기시부 골막.\n[촉지 및 시술] 제1중수골 척측연과 제2중수골 요측연 골막 압통점. 글씨를 쓰거나 물건을 집을 때 엄지·검지 손등 통증을 즉각 소실시킵니다.",
          "en": "1st dorsal interosseous origin along shafts of 1st and 2nd metacarpals (Hegu/LI4 deep zone)."
        }
      },
      {
        "code": "T2",
        "color": "#00f5d4",
        "x": 67.0,
        "y": 63.0,
        "role": {
          "ko": "힘줄·골막 부착점",
          "en": "Tendon & Periosteal Target"
        },
        "name": {
          "ko": "T2: 제1수근중수관절(1st CMC Joint) 및 무지내전근(Adductor Pollicis) 심부점",
          "en": "T2: 1st Carpometacarpal (CMC) Joint & Adductor Pollicis"
        },
        "desc": {
          "ko": "[표적 해부] 대능형골과 제1중수골 기저부가 만나는 엄지 뿌리 관절(1st CMC) 및 무지내전근 사두·횡두.\n[촉지 및 시술] 엄지 뿌리 관절염 및 수부 관절통(E: 통사 수부관절통증 핵심 타깃)을 해결하는 관절낭·골막 포인트입니다.",
          "en": "1st CMC joint capsule at base of thumb and deep adductor pollicis."
        }
      },
      {
        "code": "T3",
        "color": "#ff9f43",
        "x": 38.0,
        "y": 62.0,
        "role": {
          "ko": "힘줄·골막 부착점",
          "en": "Tendon & Periosteal Target"
        },
        "name": {
          "ko": "T3: 검지 근위지절(제2지 MCP/PIP) 및 골간근 정지건 타깃",
          "en": "T3: 2nd MCP Joint & Interosseous Extensor Hood Insertion"
        },
        "desc": {
          "ko": "[표적 해부] 제2중수지절관절(검지 뿌리 관절) 요측 측부인대 및 제1배측골간근 정지건.\n[촉지 및 시술] 검지 손가락 전체와 손바닥으로 뻗치는 방사통을 차단합니다.",
          "en": "Radial aspect of 2nd MCP joint where 1st dorsal interosseous inserts."
        }
      },
      {
        "code": "T4",
        "color": "#38bdf8",
        "x": 62.0,
        "y": 38.0,
        "role": {
          "ko": "신경 주행·분지점",
          "en": "Nerve Pathway Target"
        },
        "name": {
          "ko": "T4: 가이온관 척골신경 심부 운동지(Deep Ulnar Branch) 스위치",
          "en": "T4: Guyon's Canal Deep Motor Branch of Ulnar Nerve"
        },
        "desc": {
          "ko": "[표적 해부] 모든 골간근과 무지내전근을 지배하는 척골신경 심부 운동지(유구골 구 부근).\n[촉지 및 시술] 수부 내재근(골간근) 만성 경직의 신경원성 원인을 해소합니다.",
          "en": "Deep motor branch of ulnar nerve innervating all interossei and adductor pollicis."
        }
      }
    ],
    "anatomicalLabels": [
      "1st Dorsal Interosseous Muscle",
      "Radial Artery Branch",
      "Thumb Metacarpal",
      "Index Metacarpal"
    ],
    "rifeFreq": 528,
    "searchKeywords": "제1배측골간근 힘줄견인통 1st Dorsal Interosseous TTP 엄지~검지 사이 손등 쪽 날카로운 통증, 물건을 쥐거나 머리를 빗 기 힘듦. Sharp dorsum pain between thumb and index finger, difficulty pinching objects or combing hair. 어깨, 상지 및 수부 질환 Shoulder, Upper Extremity & Hand"
  },
  {
    "id": 20,
    "catId": "shoulder_arm",
    "catNum": 2,
    "category": {
      "ko": "어깨, 상지 및 수부 질환",
      "en": "Shoulder, Upper Extremity & Hand"
    },
    "mechanism": {
      "ko": "신경유착",
      "en": "[신경유착] Nerve Entrapment"
    },
    "mechTags": [
      "nerve"
    ],
    "title": {
      "ko": "회외근 신경유착증 / 요골신경 신경유착증",
      "en": "Supinator / Radial Nerve Entrapment"
    },
    "symptoms": {
      "ko": "전완 신전근 부위 둔통, 저항 하 회외(resisted supination) 시 통증 악화, 척골 쪽 손목 등쪽 통증.",
      "en": "Dull pain in forearm extensor region, pain aggravated by resisted supination, dorsal wrist pain on ulnar side."
    },
    "pathophysiology": {
      "ko": "회외근의 과긴장으로 요골신경 깊은가지(PIN)가 Frohse의 아 치에서 유착되거나 상완삼두근 외측두 레벨(spiral groove)에 서 유착됨.",
      "en": "Hypertonicity of supinator entraps posterior interosseous nerve (PIN) at Arcade of Frohse or at spiral groove level (triceps lateral head)."
    },
    "targetTissues": {
      "ko": "회외근(Supinator), 상완삼두근 외측두(Triceps brachii lateral head).",
      "en": "Supinator, Triceps brachii lateral head."
    },
    "palpation": {
      "ko": "요골두 하방 전완 외후면 심부 회외근 근복 압통점.",
      "en": "Deep tender point in supinator belly on posterolateral forearm, 2?? cm below radial head."
    },
    "clinicalCase": {
      "ko": "무거운 하중을 지탱한 뒤 지속된 전완 외측 깊은 통증 및 손목 신전 쇠약 사례. 요골두 하방 회외근의 프로세 아케이드(Frohse Arcade) 심부 압통점에 NovaCell Therapy를 적용하여 후골간신경(PIN)을 감압하고 손목 신전력 완전 회복.",
      "en": "57yo male with persistent ulnar dorsal wrist pain after pulling heavy machinery. Pain relieved after treating deep supinator tender point with NovaCell therapy."
    },
    "diagram": "images/diagrams/diagram_20.png",
    "targets": [
      {
        "code": "T1",
        "color": "#ff334b",
        "x": 57.4,
        "y": 28.9,
        "role": {
          "ko": "주 신경포착점",
          "en": "Primary Nerve Entrapment"
        },
        "name": {
          "ko": "T1: 요골두 하방 회외근(Supinator) 근복 및 프호제 아케이드(Arcade of Frohse)",
          "en": "T1: Supinator Belly & Arcade of Frohse (PIN Entrapment)"
        },
        "desc": {
          "ko": "[표적 해부] 요골두 하방 2~3cm 전완 후외측 심부 회외근 상연의 섬유성 반월궁(Arcade of Frohse) 및 후골간신경(PIN, 요골신경 심부지).\n[촉지 및 시술] 완요골근과 신근 사이를 벌리고 요골경부 심부를 누를 때 가장 아픈 신경포착점(HP-LE-02). 난치성 테니스엘보와 똑같은 통증을 유발하는 핵심 병소입니다.",
          "en": "Arcade of Frohse at superior border of supinator 2-3cm distal to radial head."
        }
      },
      {
        "code": "T2",
        "color": "#00f5d4",
        "x": 37.9,
        "y": 70.6,
        "role": {
          "ko": "심부 근복·근막점",
          "en": "Deep Myofascial Trigger Point"
        },
        "name": {
          "ko": "T2: 상완골 원위 외측 상완삼두근 외측두·주근(Anconeus) 연계 압통점",
          "en": "T2: Distal Lateral Triceps & Anconeus Relay Point"
        },
        "desc": {
          "ko": "[표적 해부] 상완골 후외측 하단 상완삼두근 외측두, 주근(Anconeus) 및 요골신경 주간부(나선구 출구).\n[촉지 및 시술] 상완 외측 하부 요골신경이 외측근간중격을 뚫고 나오는 지점. 근위-원위 요골신경 이중 포착을 풀어줍니다.",
          "en": "Radial nerve passage through lateral intermuscular septum & anconeus belly."
        }
      },
      {
        "code": "T3",
        "color": "#ff9f43",
        "x": 38.0,
        "y": 62.0,
        "role": {
          "ko": "힘줄·골막 부착점",
          "en": "Tendon & Periosteal Target"
        },
        "name": {
          "ko": "T3: 단요측수근신근(ECRB)·총지신근(EDC) 외측상과 기시부 골막 부착점",
          "en": "T3: Lateral Epicondyle ECRB & EDC Origin Periosteal Contact"
        },
        "desc": {
          "ko": "[표적 해부] 상완골 외측상과 전면 ECRB/EDC 공통신근건 기시부 골막.\n[촉지 및 시술] 회외근 포착과 동반된 외측상과 건골막 견인통을 동시 제거합니다.",
          "en": "Common extensor tendon periosteal origin at anterior lateral epicondyle."
        }
      },
      {
        "code": "T4",
        "color": "#38bdf8",
        "x": 62.0,
        "y": 38.0,
        "role": {
          "ko": "신경 주행·분지점",
          "en": "Nerve Pathway Target"
        },
        "name": {
          "ko": "T4: 원위 전완 배측 골간막(후골간신경 말단·외관혈 구간) 감압점",
          "en": "T4: Distal Dorsal Interosseous Membrane PIN Terminal Point"
        },
        "desc": {
          "ko": "[표적 해부] 손목 상방 3~4cm 요골과 척골 사이 골간막 배측(후골간신경 손목관절 감각지).\n[촉지 및 시술] 손목 등쪽 중앙으로 뻗치는 묵직한 신경통을 해소합니다.",
          "en": "Terminal sensory branch of posterior interosseous nerve over distal interosseous membrane."
        }
      }
    ],
    "anatomicalLabels": [
      "Supinator Muscle",
      "Posterior Interosseous Nerve (PIN)",
      "Arcade of Frohse",
      "Radial Tunnel"
    ],
    "rifeFreq": 727,
    "searchKeywords": "회외근 신경유착증 / 요골신경 신경유착증 Supinator / Radial Nerve Entrapment 전완 신전근 부위 둔통, 저항 하 회외(resisted supination) 시 통증 악화, 척골 쪽 손목 등쪽 통증. Dull pain in forearm extensor region, pain aggravated by resisted supination, dorsal wrist pain on ulnar side. 어깨, 상지 및 수부 질환 Shoulder, Upper Extremity & Hand"
  },
  {
    "id": 21,
    "catId": "chest_torso",
    "catNum": 3,
    "category": {
      "ko": "흉부, 복부 및 몸통 질환",
      "en": "Thorax, Abdomen & Torso Disorders"
    },
    "mechanism": {
      "ko": "신경유착 / 근막유착",
      "en": "[ / c] Nerve Entrapment & Complex Entrapment"
    },
    "mechTags": [
      "nerve"
    ],
    "title": {
      "ko": "복벽신경유착증후군",
      "en": "Abdominal Cutaneous Nerve Entrapment Syndrome"
    },
    "symptoms": {
      "ko": "만성 복통, 생리통 양상, 걷거나 복근 움직일 때 악화, Pinch & roll 검사 시 비명 유발.",
      "en": "Chronic abdominal pain mimicking dysmenorrhea, aggravated by walking or engaging abdominal muscles, screaming pain upon Pinch & Roll test."
    },
    "pathophysiology": {
      "ko": "흉늑신경 전피가지가 복직근 건막(aponeurotic opening)을 통과할 때 신경유착되어 통증 발생; T7~T12 척추주위 심부근 육 근막 유착 연루.",
      "en": "Entrapment of anterior cutaneous branches of intercostal nerves passing through rectus abdominis aponeurotic opening; T7?밫12 paraspinal deep muscle c involved."
    },
    "targetTissues": {
      "ko": "복직근(Rectus abdominis) 건막 터널, T7~T12 TS/다열근.",
      "en": "Rectus abdominis aponeurotic tunnel, T7?밫12 TS/multifidus."
    },
    "palpation": {
      "ko": "복부 측면 dimple/복직근 외측연 눌렀을 때 심한 압통점.",
      "en": "Severe tender point at lateral border of rectus abdominis / lateral abdominal dimple."
    },
    "clinicalCase": {
      "ko": "체간 굴곡 및 기침 시 복벽 특정 부위가 날카롭게 콕콕 찔리던 복벽피부신경유착 사례. T7~T9 분절 복직근 외측연 신경 관통부에 NovaCell Therapy를 적용하여 유착된 신경가지를 이완함으로써 수분 내 만성 복통 완전 소실.",
      "en": "Sharp abdominal cutaneous pain worsening with movement. Abdominal pain completely vanished within 10 minutes following T7, T8, T9 NovaCell treatment."
    },
    "diagram": "images/diagrams/diagram_21.png",
    "targets": [
      {
        "code": "T1",
        "color": "#ff334b",
        "x": 67.3,
        "y": 36.8,
        "role": {
          "ko": "주 신경포착점",
          "en": "Primary Nerve Entrapment"
        },
        "name": {
          "ko": "T1: 복직근 외측연(반월선) 전피신경 건막터널 포착점 (ACNES 타깃)",
          "en": "T1: Lateral Rectus Sheath Anterior Cutaneous Nerve Tunnel (ACNES)"
        },
        "desc": {
          "ko": "[표적 해부] 복직근 외측연(Linea semilunaris)에서 흉복부 신경(T7~T12 늑간신경 전피지)이 복직근초 섬유륜을 직각으로 뚫고 나오는 신경혈관 터널.\n[촉지 및 시술] 배꼽 상·하방 복직근 외측 경계선에서 손가락 끝 하나 크기로 극심하게 아픈 압통점(Carnett 징후 양성). 내장 질환으로 오인되는 만성 복벽 통증을 즉각 소실시킵니다.",
          "en": "Fibrous foramen at lateral border of rectus abdominis sheath (Carnett's sign positive point)."
        }
      },
      {
        "code": "T2",
        "color": "#00f5d4",
        "x": 47.8,
        "y": 64.0,
        "role": {
          "ko": "후관절·신경근점",
          "en": "Facet & Nerve Root Target"
        },
        "name": {
          "ko": "T2: 흉추 T7-T12 극돌기 외측 심부 다열근·후관절점 (흉추 제2·3선)",
          "en": "T2: T7-T12 Paraspinal Multifidus & Facet Root Point"
        },
        "desc": {
          "ko": "[표적 해부] 복벽신경의 기시 분절인 하부 흉추(T7~T12) 척수신경 후지 및 추간공 외측.\n[촉지 및 시술] 해당 복통 높이와 일치하는 등 뒤 T7~T12 극돌기 외측 1.5~2cm 다열근 심부 골막 부착부. 체성-내장 반사 복통을 뿌리에서 차단합니다.",
          "en": "T7-T12 paraspinal multifidus & dorsal ramus root controlling somato-visceral convergence."
        }
      },
      {
        "code": "T3",
        "color": "#ff9f43",
        "x": 38.0,
        "y": 62.0,
        "role": {
          "ko": "힘줄·골막 부착점",
          "en": "Tendon & Periosteal Target"
        },
        "name": {
          "ko": "T3: 검상돌기 하방 백선(Linea Alba) 및 상복부 복직근 기시부 골막점",
          "en": "T3: Xiphoid Process & Epigastric Linea Alba Point"
        },
        "desc": {
          "ko": "[표적 해부] 제5~7늑연골 및 검상돌기 복직근 상부 부착부(중완~거궐 구간).\n[촉지 및 시술] 명치 끝이 답답하고 체한 듯한 상복부 근막 긴장을 이완합니다.",
          "en": "Superior rectus abdominis attachment at 5th-7th costal cartilages and xiphoid."
        }
      },
      {
        "code": "T4",
        "color": "#38bdf8",
        "x": 73.0,
        "y": 47.0,
        "role": {
          "ko": "힘줄·골막 부착점",
          "en": "Tendon & Periosteal Target"
        },
        "name": {
          "ko": "T4: 외·내복사근 늑골궁 하연 부착부 측복벽 압통점",
          "en": "T4: Subcostal Margin Oblique Muscle Attachment Point"
        },
        "desc": {
          "ko": "[표적 해부] 제9~11늑골 하연 외복사근·내복사근 부착부 및 늑간신경 외측피지.\n[촉지 및 시술] 옆구리와 갈비뼈 아래가 결리는 측복벽 방사통을 해소합니다.",
          "en": "Costal margin attachment of external/internal obliques and lateral cutaneous branches."
        }
      }
    ],
    "anatomicalLabels": [
      "Anterior Cutaneous Nerve",
      "Rectus Abdominis",
      "T7-T9 Intercostal Nerves",
      "Rectus Sheath"
    ],
    "rifeFreq": 787,
    "searchKeywords": "복벽신경유착증후군 Abdominal Cutaneous Nerve Entrapment Syndrome 만성 복통, 생리통 양상, 걷거나 복근 움직일 때 악화, Pinch & roll 검사 시 비명 유발. Chronic abdominal pain mimicking dysmenorrhea, aggravated by walking or engaging abdominal muscles, screaming pain upon Pinch & Roll test. 흉부, 복부 및 몸통 질환 Thorax, Abdomen & Torso Disorders"
  },
  {
    "id": 22,
    "catId": "chest_torso",
    "catNum": 3,
    "category": {
      "ko": "흉부, 복부 및 몸통 질환",
      "en": "Thorax, Abdomen & Torso Disorders"
    },
    "mechanism": {
      "ko": "신경유착 / 힘줄견인",
      "en": "[ / TTP] Nerve Entrapment & Tendon Traction"
    },
    "mechTags": [
      "nerve",
      "tendon"
    ],
    "title": {
      "ko": "T8-T9/등허리 감각신경성 통증 및 흉추 다열근 염증",
      "en": "T8-T9 Thoracic Sensory Neuralgia & Multifidus Inflammation"
    },
    "symptoms": {
      "ko": "등허리 부위의 찌릿찌릿한 전기 통함, 붉은 구진/발 진, 브래지어 끈 라인~장골능 사이 통증.",
      "en": "Electric tingling in thoracolumbar region, red papules/rashes, pain along bra strap line to iliac crest."
    },
    "pathophysiology": {
      "ko": "흉추 후지가 다열근 및 최장근을 뚫고 나올 때 유착되거나 T8-T9 다열근 TTP에 의해 피부 감각과민 유발.",
      "en": "Thoracic posterior rami entrapped as they pierce multifidus/longissimus, causing cutaneous dysesthesia and pain."
    },
    "targetTissues": {
      "ko": "T8, T9 레벨 흉추 다열근(Multifidus), 최장근.",
      "en": "Multifidus between T3/T4?밫12/L1 spinous processes (especially T5?밫10 levels)."
    },
    "palpation": {
      "ko": "T8, T9 극돌기 외측 1.5cm 다열근 심부 압통점.",
      "en": "Multifidus tender point 1.5 cm lateral to thoracic spinous processes."
    },
    "clinicalCase": {
      "ko": "등허리 늑간을 따라 찌릿한 신경통과 피부 발적이 지속되어 대상포진으로 오인받았던 흉추 다열근 염증 사례. T8, T9 흉추 심부 다열근 압통점에 NovaCell Therapy를 정밀 통전하여 척추신경 후지 유착을 해소하고 등허리 통증 및 신경성 발적 정상화.",
      "en": "Patient with thoracolumbar tingling and rash. Completely resolved after treating T8 and T9 multifidus with NovaCell therapy."
    },
    "diagram": "images/diagrams/diagram_22.png",
    "targets": [
      {
        "code": "T1",
        "color": "#ff334b",
        "x": 24.6,
        "y": 36.5,
        "role": {
          "ko": "핵심 후관절·신경근점",
          "en": "Primary Facet & Root Target"
        },
        "name": {
          "ko": "T1: 흉추 T8 극돌기 외측 1.5cm 심부 다열근·후관절 내측지점 (흉추 제2선)",
          "en": "T1: T8 Multifidus & Facet Medial Branch (Thoracic Line 2)"
        },
        "desc": {
          "ko": "[표적 해부] T8 추궁판(Lamina)·후관절낭 및 척수신경 후지 내측지(Medial branch of dorsal ramus).\n[촉지 및 시술] T8 극돌기 외측 1.5cm 심부 골막 접촉점(HP-DSP-01). 등 한가운데가 타는 듯하고 숨쉴 때 결리는 감각신경성 배통의 핵심 타깃입니다.",
          "en": "T8 lamina & facet joint medial branch 1.5cm lateral to T8 spinous process."
        }
      },
      {
        "code": "T2",
        "color": "#00f5d4",
        "x": 27.9,
        "y": 64.4,
        "role": {
          "ko": "후관절·신경근점",
          "en": "Facet & Nerve Root Target"
        },
        "name": {
          "ko": "T2: 흉추 T9 극돌기 외측 1.5cm 심부 다열근·회선근 타깃",
          "en": "T2: T9 Multifidus & Rotatores Deep Target"
        },
        "desc": {
          "ko": "[표적 해부] T9 후관절 및 다열근·회선근 부착부.\n[촉지 및 시술] T8과 함께 연속 분절로 포착되는 T9 제2선 골막점. 만성 등허리 전환부 통증을 제거합니다.",
          "en": "T9 deep multifidus and rotatores periosteal target."
        }
      },
      {
        "code": "T3",
        "color": "#ff9f43",
        "x": 38.0,
        "y": 62.0,
        "role": {
          "ko": "후관절·신경근점",
          "en": "Facet & Nerve Root Target"
        },
        "name": {
          "ko": "T3: 후방 늑골각(Rib Angle) 흉장늑근 골막 부착점 (흉추 제4선)",
          "en": "T3: Posterior Rib Angle Iliocostalis Thoracis Periosteal Contact (Line 4)"
        },
        "desc": {
          "ko": "[표적 해부] 극돌기 외측 4~5cm 후방 늑골각(Rib angle) 흉장늑근 부착부 및 척수신경 후지 외측지.\n[촉지 및 시술] 기흉 ZERO 수지 늑골 고정법으로 늑골 표면을 정확히 짚고 통전(HP-DSP-02). 옆구리와 앞가슴으로 뻗치는 연관통을 차단합니다.",
          "en": "Posterior rib angle 4-5cm lateral to midline over iliocostalis thoracis (rib-guarded Periosteal Contact)."
        }
      },
      {
        "code": "T4",
        "color": "#38bdf8",
        "x": 62.0,
        "y": 38.0,
        "role": {
          "ko": "후관절·신경근점",
          "en": "Facet & Nerve Root Target"
        },
        "name": {
          "ko": "T4: 흉추 횡돌기 첨부(제3선) 늑횡돌관절 및 상승모근·하후거근 교차점",
          "en": "T4: Thoracic Transverse Process (Line 3) Costotransverse Joint"
        },
        "desc": {
          "ko": "[표적 해부] T7~T10 횡돌기 배면(극돌기 외측 2.5~3cm 제3선) 늑횡돌인대 및 흉최장근.\n[촉지 및 시술] 깊은 심호흡이나 몸통 회전 시 등에 걸리는 관절 잠김을 해제합니다.",
          "en": "Costotransverse joint and longissimus thoracis at Thoracic Line 3 (2.5-3cm lateral)."
        }
      }
    ],
    "anatomicalLabels": [
      "Thoracic Multifidus",
      "T8-T9 Dorsal Rami",
      "Erector Spinae",
      "Intercostal Nerve"
    ],
    "rifeFreq": 880,
    "searchKeywords": "T8-T9/등허리 감각신경성 통증 및 흉추 다열근 염증 T8-T9 Thoracic Sensory Neuralgia & Multifidus Inflammation 등허리 부위의 찌릿찌릿한 전기 통함, 붉은 구진/발 진, 브래지어 끈 라인~장골능 사이 통증. Electric tingling in thoracolumbar region, red papules/rashes, pain along bra strap line to iliac crest. 흉부, 복부 및 몸통 질환 Thorax, Abdomen & Torso Disorders"
  },
  {
    "id": 23,
    "catId": "chest_torso",
    "catNum": 3,
    "category": {
      "ko": "흉부, 복부 및 몸통 질환",
      "en": "Thorax, Abdomen & Torso Disorders"
    },
    "mechanism": {
      "ko": "자율신경 오작동",
      "en": "[자율신경 오작동] Autonomic Sympathetic Response"
    },
    "mechTags": [
      "nerve",
      "autonomic"
    ],
    "title": {
      "ko": "체성 장애, 우울, 불안 / 상부·중부 흉추 증후군",
      "en": "/ Upper & Mid Thoracic Syndrome"
    },
    "symptoms": {
      "ko": "가슴 답답함, 한숨, 명치 콕콕 쑤심, 속 더부룩함, 소화불량, 심장 두근거림, 우울/불안감 동반.",
      "en": "Chest tightness, sighing, epigastric stabbing, indigestion, dyspepsia, palpitations, accompanied by depression/anxiety."
    },
    "pathophysiology": {
      "ko": "상부/중부 흉추(T1~T12) 척추주위 심부근육의 과긴장으로 교감신경절 및 ramus communicans가 유착(자율신경 오작동)되어 내장 기/심혈관계 자율신경 불균형 유발. • 치료 타깃 조직 복직근(Rectus abdominis) 건막 터널, T7~T12 TS/다열근 • 촉진 및 위치 복부 측면 dimple/복직근 외측연 눌렀을 때 심한 압통점",
      "en": "Hypertonicity of upper/mid thoracic (T1?밫12) paraspinal deep muscles entraps sympathetic ganglia and ramus communicans (S), causing autonomic imbalance in visceral/cardiovascular systems."
    },
    "targetTissues": {
      "ko": "",
      "en": "T1?밫12 paraspinal deep muscle group (Multifidus/Transversospinales), Splenius capitis, Mid/Lower trapezius."
    },
    "palpation": {
      "ko": "",
      "en": "Deep paraspinal tender points between T1?밫12 spinous processes and 1?? cm laterally."
    },
    "clinicalCase": {
      "ko": "명치 끝의 지속적인 더부룩함과 콕콕 쑤시는 상복부 불쾌감 및 등마루 결림을 호소하던 체성 자율신경 장애 사례. T4~T7 중부 흉추 분절 교감신경 경로에 NovaCell Therapy를 집중 조율하여 내장 신경 반사를 안정시키고 소화 기능 정상화.",
      "en": "26yo female with epigastric stabbing pain, indigestion, and mid-back pain for 16 hours. Epigastric pain vanished and digestion stimulated within 30 minutes after mid-thoracic NovaCell therapy."
    },
    "diagram": "images/diagrams/diagram_23.png",
    "targets": [
      {
        "code": "T1",
        "color": "#ff334b",
        "x": 67.6,
        "y": 14.2,
        "role": {
          "ko": "자율신경 핵심점",
          "en": "Primary Autonomic Target"
        },
        "name": {
          "ko": "T1: 경추 C2-C3 두반극근·후두하 미주-교감 자율신경 스위치",
          "en": "T1: C2-C3 Semispinalis Capitis & Vagal-Autonomic Switch"
        },
        "desc": {
          "ko": "[표적 해부] 상부 경추 C2-C3 심부 두반극근·다열근 및 상경신경절(SCG)-미주신경 연접 구역.\n[촉지 및 시술] 뒷목 상부 심부 압통점. 뇌간 자율신경 중추로의 과도한 구심성 스트레스 신호를 차단하여 불안·불면·두통을 진정시킵니다.",
          "en": "Upper cervical C2-C3 deep paraspinal point modulating vagal and superior cervical sympathetic tone."
        }
      },
      {
        "code": "T2",
        "color": "#00f5d4",
        "x": 56.7,
        "y": 28.0,
        "role": {
          "ko": "자율신경 조절점",
          "en": "Autonomic Control Target"
        },
        "name": {
          "ko": "T2: 하부 경추 C6-C7 다열근 및 성상신경절(SGB) 후방 반사점",
          "en": "T2: C6-C7 Multifidus & Posterior Stellate Ganglion Reflex"
        },
        "desc": {
          "ko": "[표적 해부] C6-C7 후관절·다열근 및 성상신경절(하경교감신경절) 체절 반사구역.\n[촉지 및 시술] 목과 등이 만나는 대추혈(C7) 상외측 1.5cm. 교감신경 항진(가슴 두근거림, 상열감, 안면홍조)을 완화합니다.",
          "en": "C6-C7 paraspinal multifidus segmental reflex point for stellate ganglion modulation."
        }
      },
      {
        "code": "T3",
        "color": "#ff9f43",
        "x": 58.6,
        "y": 71.0,
        "role": {
          "ko": "자율신경 조절점",
          "en": "Autonomic Control Target"
        },
        "name": {
          "ko": "T3: 상·중부 흉추 T3-T6 다열근 심폐 교감신경총(심유·신유·영대) 타깃",
          "en": "T3: T3-T6 Multifidus Cardiopulmonary Sympathetic Plexus"
        },
        "desc": {
          "ko": "[표적 해부] T3~T6 극돌기 외측 1.5cm 심부 다열근(심장·폐·식도 교감신경 절전섬유 기시 분절).\n[촉지 및 시술] 검사상 이상이 없는데도 가슴이 답답하고 숨이 차며 우울·불안이 동반되는 상·중부 흉추 자율신경 실조증의 핵심 치료점입니다.",
          "en": "T3-T6 deep multifidus corresponding to cardiac and pulmonary sympathetic segments."
        }
      },
      {
        "code": "T4",
        "color": "#38bdf8",
        "x": 59.0,
        "y": 88.5,
        "role": {
          "ko": "자율신경 조절점",
          "en": "Autonomic Control Target"
        },
        "name": {
          "ko": "T4: 중하부 흉추 T7-T9 다열근 복강신경총(위·간·담 자율신경) 타깃",
          "en": "T4: T7-T9 Multifidus Greater Splanchnic Autonomic Point"
        },
        "desc": {
          "ko": "[표적 해부] T7~T9 극돌기 외측 1.5cm 다열근(대내장신경 기시 분절).\n[촉지 및 시술] 스트레스성 신경성 위염, 명치 막힘, 소화기 자율신경 기능 저하를 회복시킵니다.",
          "en": "T7-T9 deep multifidus regulating greater splanchnic nerve and digestive autonomic balance."
        }
      }
    ],
    "anatomicalLabels": [
      "Mid-Thoracic Sympathetic Chain",
      "T4-T7 Transversospinales",
      "Splanchnic Nerves",
      "Rhomboids"
    ],
    "rifeFreq": 528,
    "searchKeywords": "체성 장애, 우울, 불안 / 상부·중부 흉추 증후군 / Upper & Mid Thoracic Syndrome 가슴 답답함, 한숨, 명치 콕콕 쑤심, 속 더부룩함, 소화불량, 심장 두근거림, 우울/불안감 동반. Chest tightness, sighing, epigastric stabbing, indigestion, dyspepsia, palpitations, accompanied by depression/anxiety. 흉부, 복부 및 몸통 질환 Thorax, Abdomen & Torso Disorders"
  },
  {
    "id": 24,
    "catId": "chest_torso",
    "catNum": 3,
    "category": {
      "ko": "흉부, 복부 및 몸통 질환",
      "en": "Thorax, Abdomen & Torso Disorders"
    },
    "mechanism": {
      "ko": "신경유착",
      "en": "[신경유착] Nerve Entrapment"
    },
    "mechTags": [
      "nerve"
    ],
    "title": {
      "ko": "전거근 신경유착 / 장흉신경유착",
      "en": "Serratus Anterior / Long Thoracic Nerve Entrapment"
    },
    "symptoms": {
      "ko": "젖꼭지 바깥쪽 흉통, 달리기나 숨 쉴 때 가슴/옆구리 콕콕 찌르는 통증.",
      "en": "Lateral chest pain outside nipple, stabbing chest/flank pain during running or deep breathing."
    },
    "pathophysiology": {
      "ko": "장흉신경(long thoracic n.)이 중사각근 하단에서 유착되거나, C5~C7 척추주위 심부근육에 의해 근위부 에서 유착되어 전거근의 긴장성 허혈성 유발.",
      "en": "Long thoracic nerve entrapped at inferior middle scalene or proximally by C5-C7 paraspinal deep muscles, inducing ischemic pain in serratus anterior."
    },
    "targetTissues": {
      "ko": "중사각근(Middle scalene) 하단, C5~C7 척추주위 심부근육.",
      "en": "Inferior middle scalene, C5-C7 paraspinal deep muscles."
    },
    "palpation": {
      "ko": "쇄골 상방 중사각근 하단 압통점.",
      "en": "Tender point at inferior middle scalene above clavicle."
    },
    "clinicalCase": {
      "ko": "달리기나 상체 운동 시 측흉부 외측(늑골 부위)에 칼로 찌르는 듯한 흉통이 발생하던 전거근 신경유착 사례. 중사각근 하단 및 전거근 늑골 부착부에 NovaCell Therapy를 적용하여 장흉신경의 긴장을 완화함으로써 30분 이상 조깅에도 무통 유지.",
      "en": "Patient experiencing lateral chest pain outside nipple within 1 minute on treadmill. No pain even after 20??0 minutes of running following bilateral inferior middle scalene NovaCell treatment."
    },
    "diagram": "images/diagrams/diagram_24.png",
    "targets": [
      {
        "code": "T1",
        "color": "#ff334b",
        "x": 63.5,
        "y": 46.8,
        "role": {
          "ko": "주 신경포착점",
          "en": "Primary Nerve Entrapment"
        },
        "name": {
          "ko": "T1: 액와 중앙선 제4~7늑골 전거근(Serratus Anterior) 수지부 & 장흉신경점",
          "en": "T1: Mid-Axillary 4th-7th Rib Serratus Anterior & Long Thoracic Nerve"
        },
        "desc": {
          "ko": "[표적 해부] 옆구리 중간액와선(Mid-axillary line) 제4~7늑골 외측면의 전거근 톱니 모양 기시부 및 장흉신경(C5-C7).\n[촉지 및 시술] 팔을 약간 든 상태에서 옆구리 갈비뼈 표면을 직접 만져 촉지되는 띠 모양 압통점. 옆구리 통증, 깊은 숨을 쉴 때 결림, 익상견갑을 해결합니다.",
          "en": "Serratus anterior digitations on 4th-7th ribs along mid-axillary line where long thoracic nerve runs."
        }
      },
      {
        "code": "T2",
        "color": "#00f5d4",
        "x": 41.0,
        "y": 53.4,
        "role": {
          "ko": "신경 주행·분지점",
          "en": "Nerve Pathway Target"
        },
        "name": {
          "ko": "T2: 측경부 중사각근(Middle Scalene) 장흉신경 근위 관통점",
          "en": "T2: Middle Scalene Proximal Long Thoracic Nerve Piercing Point"
        },
        "desc": {
          "ko": "[표적 해부] C5·C6·C7 신경근에서 합류한 장흉신경이 중사각근을 뚫고 나오는 근위부 포착점.\n[촉지 및 시술] 측경부 사각근 삼각 중간 높이. 전거근 약화와 만성 외측 흉벽통의 상류 신경 압박을 해소합니다.",
          "en": "Proximal piercing point of long thoracic nerve (C5-C7) through middle scalene."
        }
      },
      {
        "code": "T3",
        "color": "#ff9f43",
        "x": 38.0,
        "y": 62.0,
        "role": {
          "ko": "힘줄·골막 부착점",
          "en": "Tendon & Periosteal Target"
        },
        "name": {
          "ko": "T3: 견갑골 하각(Inferior Angle) 및 내측연 전거근 정지부 골막 부착점",
          "en": "T3: Inferior Angle of Scapula Serratus Anterior Insertion"
        },
        "desc": {
          "ko": "[표적 해부] 견갑골 하각(T7 높이) 및 내측연 늑골면 전거근 정지부 골막.\n[촉지 및 시술] 날개뼈 아래쪽 끝 모서리 골막 부착부. 견갑흉곽 불안정성을 잡아줍니다.",
          "en": "Inferior angle of scapula where lower serratus anterior fibers converge."
        }
      },
      {
        "code": "T4",
        "color": "#38bdf8",
        "x": 62.0,
        "y": 38.0,
        "role": {
          "ko": "신경 주행·분지점",
          "en": "Nerve Pathway Target"
        },
        "name": {
          "ko": "T4: 제5~7늑간신경 외측피지(Lateral Cutaneous Branch) 교차점",
          "en": "T4: 5th-7th Intercostal Lateral Cutaneous Nerve Point"
        },
        "desc": {
          "ko": "[표적 해부] 전거근 수지 사이로 뚫고 나오는 늑간신경 외측피지.\n[촉지 및 시술] 유방 외측 및 옆구리로 퍼지는 찌릿한 신경통을 동시 차단합니다.",
          "en": "Lateral cutaneous branches of 5th-7th intercostal nerves emerging between serratus digitations."
        }
      }
    ],
    "anatomicalLabels": [
      "Serratus Anterior",
      "Long Thoracic Nerve",
      "Middle Scalene",
      "Lateral Rib Cage"
    ],
    "rifeFreq": 727,
    "searchKeywords": "전거근 신경유착 / 장흉신경유착 Serratus Anterior / Long Thoracic Nerve Entrapment 젖꼭지 바깥쪽 흉통, 달리기나 숨 쉴 때 가슴/옆구리 콕콕 찌르는 통증. Lateral chest pain outside nipple, stabbing chest/flank pain during running or deep breathing. 흉부, 복부 및 몸통 질환 Thorax, Abdomen & Torso Disorders"
  },
  {
    "id": 25,
    "catId": "chest_torso",
    "catNum": 3,
    "category": {
      "ko": "흉부, 복부 및 몸통 질환",
      "en": "Thorax, Abdomen & Torso Disorders"
    },
    "mechanism": {
      "ko": "힘줄견인",
      "en": "[TTP] Tendon/Periosteal Traction Pain"
    },
    "mechTags": [
      "tendon"
    ],
    "title": {
      "ko": "소흉근 힘줄견인통 / 전흉부 통증",
      "en": "Pectoralis Minor TTP / Anterior Chest Pain"
    },
    "symptoms": {
      "ko": "숨 쉴 때마다 가슴 앞쪽(젖꼭지 위 수직선)이 콕콕 찔림.",
      "en": "Stabbing pain in anterior chest (vertical line above nipple) with each breath."
    },
    "pathophysiology": {
      "ko": "소흉근의 병적 등장성 수축으로 늑골 기시부 골막에 염증성 통증(견인통(마찰통)/periostitis) 발생.",
      "en": "Pathologic isotonic contraction of pectoralis minor induces inflammatory periosteal pain (TTP/periostitis) at rib origin."
    },
    "targetTissues": {
      "ko": "소흉근(Pectoralis minor), 쇄골하근.",
      "en": "Pectoralis minor, Subclavius."
    },
    "palpation": {
      "ko": "오훼돌기 및 3~5번 늑골 기시부 소흉근 근복 압통점.",
      "en": "Pectoralis minor belly tender points at coracoid process and origins on ribs 3??."
    },
    "clinicalCase": {
      "ko": "심호흡 및 흉곽 확장 시 앞가슴이 콕콕 찔리고 결리던 소흉근 힘줄견인통 사례. 오구돌기 부착부 및 소흉근 근복에 NovaCell Therapy를 통전하여 흉벽 근막의 단축을 해소하고 가슴 답답함과 호흡 시 흉통 즉각 소실.",
      "en": "37yo male with right anterior chest stabbing pain upon breathing for 1 week. Pain improved after treating pectoralis minor and adjacent structures with NovaCell therapy."
    },
    "diagram": "images/diagrams/diagram_25.png",
    "targets": [
      {
        "code": "T1",
        "color": "#ff334b",
        "x": 63.3,
        "y": 37.3,
        "role": {
          "ko": "주 신경포착점",
          "en": "Primary Nerve Entrapment"
        },
        "name": {
          "ko": "T1: 오훼돌기(Coracoid Process) 소흉근 정지건 골막 부착부 및 소흉근하 신경총점",
          "en": "T1: Coracoid Process Pectoralis Minor Insertion & Sub-coracoid Plexus"
        },
        "desc": {
          "ko": "[표적 해부] 견갑골 오훼돌기 내측연 소흉근(Pectoralis minor) 정지건 골막 및 바로 아래 상완신경총·액와동맥 터널.\n[촉지 및 시술] 쇄골 외측 하방 오훼돌기 뼈 끝과 그 하내측 1.5cm(HP-TOS-02). 라운드숄더와 앞가슴 통증, 팔 저림을 동시에 여는 제1 핵심 타깃입니다.",
          "en": "Coracoid process periosteal insertion of pectoralis minor and sub-coracoid neurovascular tunnel."
        }
      },
      {
        "code": "T2",
        "color": "#00f5d4",
        "x": 52.9,
        "y": 51.2,
        "role": {
          "ko": "심부 근복·근막점",
          "en": "Deep Myofascial Trigger Point"
        },
        "name": {
          "ko": "T2: 소흉근(Pectoralis Minor) 중앙 근복 핵심 압통점 (TrP)",
          "en": "T2: Pectoralis Minor Central Belly Trigger Point"
        },
        "desc": {
          "ko": "[표적 해부] 대흉근 심층에 위치한 소흉근 중앙 근복 및 내·외측 흉근신경.\n[촉지 및 시술] 오훼돌기와 제3~5늑골을 잇는 사선 중앙부. 협심증과 유사한 좌측 앞가슴 통증과 어깨 전면 방사통을 즉각 완화합니다.",
          "en": "Central muscle belly of pectoralis minor deep to pectoralis major."
        }
      },
      {
        "code": "T3",
        "color": "#ff9f43",
        "x": 37.7,
        "y": 58.4,
        "role": {
          "ko": "힘줄·골막 부착점",
          "en": "Tendon & Periosteal Target"
        },
        "name": {
          "ko": "T3: 제3늑골 소흉근 기시부(3rd Rib Origin) 늑연골 외측 골막 부착점",
          "en": "T3: 3rd Rib Pectoralis Minor Origin Periosteal Contact"
        },
        "desc": {
          "ko": "[표적 해부] 제3늑골 전외측면(늑연골 접합부 외측) 소흉근 상부 섬유 기시부 골막.\n[촉지 및 시술] 3번 갈비뼈 표면을 손끝으로 고정하고 통전하여 상부 흉곽 거상·호흡 제한을 풀어줍니다.",
          "en": "Periosteal origin of pectoralis minor on anterior surface of 3rd rib."
        }
      },
      {
        "code": "T4",
        "color": "#38bdf8",
        "x": 40.8,
        "y": 73.4,
        "role": {
          "ko": "힘줄·골막 부착점",
          "en": "Tendon & Periosteal Target"
        },
        "name": {
          "ko": "T4: 제4늑골 소흉근 기시부(4th Rib Origin) 골막 부착점",
          "en": "T4: 4th Rib Pectoralis Minor Origin Periosteal Contact"
        },
        "desc": {
          "ko": "[표적 해부] 제4늑골 전외측면 소흉근 중간 섬유 기시부 골막.\n[촉지 및 시술] 4번 갈비뼈 기시부 힘줄견인통(TTP) 및 흉벽 압통을 해소합니다.",
          "en": "Periosteal origin of pectoralis minor on anterior surface of 4th rib."
        }
      },
      {
        "code": "T5",
        "color": "#a855f7",
        "x": 45.1,
        "y": 87.0,
        "role": {
          "ko": "힘줄·골막 부착점",
          "en": "Tendon & Periosteal Target"
        },
        "name": {
          "ko": "T5: 제5늑골 소흉근 기시부(5th Rib Origin) 및 흉늑관절(티체) 연계점",
          "en": "T5: 5th Rib Pectoralis Minor Origin & Sternocostal Junction"
        },
        "desc": {
          "ko": "[표적 해부] 제5늑골 소흉근 하부 기시부 및 흉골-늑연골 접합부(HP-ACS-01/02).\n[촉지 및 시술] 5번 갈비뼈 기시부와 흉골 옆 늑연골 압통점을 함께 다스려 난치성 전흉벽 통증(티체 증후군 양상)을 완결합니다.",
          "en": "5th rib origin of pectoralis minor and adjacent costochondral/sternocostal junction."
        }
      }
    ],
    "anatomicalLabels": [
      "Pectoralis Minor",
      "Coracoid Process",
      "Medial Pectoral Nerve",
      "Brachial Plexus"
    ],
    "rifeFreq": 880,
    "searchKeywords": "소흉근 힘줄견인통 / 전흉부 통증 Pectoralis Minor TTP / Anterior Chest Pain 숨 쉴 때마다 가슴 앞쪽(젖꼭지 위 수직선)이 콕콕 찔림. Stabbing pain in anterior chest (vertical line above nipple) with each breath. 흉부, 복부 및 몸통 질환 Thorax, Abdomen & Torso Disorders"
  },
  {
    "id": 26,
    "catId": "back_hip",
    "catNum": 4,
    "category": {
      "ko": "요추, 골반, 둔부 및 고관절 질환",
      "en": "Lumbar Spine, Pelvis & Hip Disorders"
    },
    "mechanism": {
      "ko": "신경유착 / 힘줄견인",
      "en": "[ / TTP] Nerve Entrapment & Tendon Traction"
    },
    "mechTags": [
      "nerve",
      "tendon"
    ],
    "title": {
      "ko": "흉요추 이행부 증후군 (T-L Junction Syndrome)",
      "en": "Thoracolumbar Junction Syndrome (Maigne's Syndrome)"
    },
    "symptoms": {
      "ko": "허리-엉덩이 경계 부위 시림, 장골능 후방 1/3 통증, 대전자 외측(고관절 옆)·서혜부·하복부 방사통, 허리를 비틀거나 오래 앉아있을 때 악화되는 요통.",
      "en": "Coldness at lumbar-gluteal junction, posterior 1/3 iliac crest pain, referred pain to lateral greater trochanter and groin, low back pain aggravated by trunk rotation or sitting."
    },
    "pathophysiology": {
      "ko": "흉추 회전축과 요추 굴신축이 교차하는 흉요추 이행부(T11-T12-L1) 후관절 기능장애 및 다열근·최장근·하후거근 긴장으로 T12~L3 신경 분지(상둔피신경, 늑하신경, 장골하복·장골서혜신경)가 자극·유착되어 둔부·대전자·서혜부로 연관통을 일으키는 Maigne 증후군(메뉴 증후군).",
      "en": "Maigne's Syndrome: facet dysfunction at the thoracolumbar junction (T11-L1) and deep multifidus/longissimus/SPI tension irritate T12-L3 rami (superior cluneal, subcostal, iliohypogastric/ilioinguinal nerves), causing referred pain to the iliac crest, greater trochanter, and groin."
    },
    "targetTissues": {
      "ko": "흉요추 이행부(T11-T12-L1) 후관절, 다열근(Multifidus)·최장근(Longissimus), 하후거근(Serratus Posterior Inferior·제11·12늑골), T12~L3 신경 기원(상둔피신경·늑하·장골하복신경) 및 대전자 외측·서혜부 Maigne 투사점.",
      "en": "T11-L1 facet joints, Multifidus & Longissimus, Serratus Posterior Inferior (11th-12th ribs), T12-L3 rami (Superior Cluneal, Subcostal, Iliohypogastric nerves), and Maigne lateral/anterior cutaneous referral zones."
    },
    "palpation": {
      "ko": "① 흉요추 이행부(T11-L1) 후관절 & 다열근 심부점 ② 장골능 후외측 상둔피신경 골섬유성 터널 ③ 하후거근 & 제11·12늑골 ④ 대전자 외측·서혜부 Maigne 외측·전피지 투사점(피부 집어올리기 Pinch-Roll 압통점).",
      "en": "1) T11-L1 facet & deep multifidus 2) Iliac crest superior cluneal osteofibrous tunnel 3) Serratus posterior inferior & 11th-12th ribs 4) Greater trochanter & groin Maigne cutaneous referral zone (Pinch-Roll tender point)."
    },
    "clinicalCase": {
      "ko": "기상 후 또는 체간 회전 시 등허리·장골능 상부와 고관절 외측(대전자)·서혜부까지 광범위한 결림과 연관통을 호소하던 흉요추 이행부(Maigne) 증후군 사례. T11~L1 후관절 심부근, 상둔피신경 터널, 대전자 외측 투사점에 노바셀(-50mV)을 연계 적용하여 난치성 골반·서혜부 연관통 및 요통 호전.",
      "en": "Case of Maigne's thoracolumbar junction syndrome presenting with iliac crest, lateral trochanteric, and groin referred pain aggravated by rotation. Resolved after combined NovaCell (-50mV) treatment targeting T11-L1 facets, superior cluneal tunnel, and trochanteric referral points."
    },
    "diagram": "images/diagrams/diagram_26.png",
    "targets": [
      {
        "code": "T1",
        "color": "#ff334b",
        "x": 47.7,
        "y": 36.6,
        "role": {
          "ko": "핵심 후관절·신경근점",
          "en": "Primary Facet & Root Target"
        },
        "name": {
          "ko": "T1: 흉요추 이행부(T11-T12-L1) 후관절 & 다열근 심부점",
          "en": "T1: T11-L1 Facet Joint & Deep Multifidus (Maigne's Origin)"
        },
        "desc": {
          "ko": "[표적 해부] 흉추 회전축과 요추 굴신축이 교차하는 T11-T12-L1 후관절(Facet Joint) 및 심부 다열근·최장근.\n[촉지 및 시술] T12·L1 극돌기 외측 1.5~2cm 골막 부착부(Maigne 증후군 핵심 발원지). 엉덩이 상부, 대전자 외측, 서혜부로 뻗어 내려가는 원격 연관통의 실제 근위 원인을 감압·차단합니다.",
          "en": "T11-L1 facet joint and deep multifidus/longissimus (1.5-2cm lateral to spinous processes) — primary proximal origin of Maigne's thoracolumbar junction syndrome."
        }
      },
      {
        "code": "T2",
        "color": "#00f5d4",
        "x": 66.4,
        "y": 52.9,
        "role": {
          "ko": "신경 주행·분지점",
          "en": "Nerve Pathway Target"
        },
        "name": {
          "ko": "T2: 장골능 후외측 상둔피신경 · 골섬유성 터널",
          "en": "T2: Superior Cluneal Nerve · Iliac Crest Osteofibrous Tunnel"
        },
        "desc": {
          "ko": "[표적 해부] T12~L3 척추신경 후지 외측지에서 기원한 상둔피신경(Superior Cluneal Nerve)이 정중선 외측 7~8cm 장골능 상연 흉요근막 골섬유성 터널을 통과하는 포착점.\n[촉지 및 시술] 골반 능선(장골능) 후외측을 따라 촉지되는 신경 결절(HP-LDR-02). 하부 요통 및 엉덩이 상부 시림·방사통을 해소하는 핵심 말초 타깃입니다.",
          "en": "Superior cluneal nerve passage through the osteofibrous tunnel over the posterior iliac crest 7-8cm lateral to midline."
        }
      },
      {
        "code": "T3",
        "color": "#ff9f43",
        "x": 37.0,
        "y": 29.1,
        "role": {
          "ko": "힘줄·골막 부착점",
          "en": "Tendon & Periosteal Target"
        },
        "name": {
          "ko": "T3: 하후거근(Serratus Posterior Inferior) & 제11·12늑골",
          "en": "T3: Serratus Posterior Inferior & 11th-12th Ribs"
        },
        "desc": {
          "ko": "[표적 해부] T11~L2 극돌기에서 기시하여 제9~12늑골 하연에 정지하는 하후거근(Serratus Posterior Inferior) 근복 및 제11·12늑골 골막 부착부.\n[촉지 및 시술] 등·허리 경계부의 묵직한 결림과 체간 회전·심호흡 시 유발되는 측배부 견인통을 이완시킵니다.",
          "en": "Serratus posterior inferior belly and 11th-12th rib periosteal insertions; relieves lower thoracic-lumbar stiffness and rotational traction pain."
        }
      },
      {
        "code": "T4",
        "color": "#38bdf8",
        "x": 70.2,
        "y": 77.7,
        "role": {
          "ko": "보조 연계 치료점",
          "en": "Secondary Synergistic Target"
        },
        "name": {
          "ko": "T4: 대전자 외측 · 서혜부 Maigne 외측·전피지 투사점",
          "en": "T4: Greater Trochanter & Groin · Maigne's Cutaneous Referral Zone"
        },
        "desc": {
          "ko": "[표적 해부] T12 늑하신경(Subcostal Nerve) 및 L1 장골하복·장골서혜신경의 외측피지(대전자 외측)와 전피지(서혜부·하복부) 투사 영역.\n[Maigne 증후군이란?] 프랑스의 로베르 메뉴(Robert Maigne) 박사가 정립한 증후군으로, 실제 병변은 등·허리 경계(흉요추 이행부 T11~L1 후관절 및 척추신경 자극)에 있지만 통증은 해당 신경이 분포하는 엉덩이 상부(후지·상둔피신경), 고관절 옆 대전자 외측(외측피지), 사타구니·서혜부(전피지)에 멀리 투사되는 것이 특징입니다. 이 때문에 고관절 점액낭염·허리디스크(L4-5)·서혜부 질환으로 오진되어 국소 통증 부위만 치료하다 재발하는 경우가 많습니다.\n[촉지 및 시술] 대전자 외측 및 서혜부 피부를 부드럽게 집어 올릴 때(Pinch-Roll Test) 뚜렷한 피부 과민·통증(Cellulalgia)이 나타나는 지점을 진정시키고, 반드시 근위 발원지인 T1(T11~L1 후관절)과 연계 치료하여 Maigne 증후군의 원인과 말초 투사통을 동시에 해결합니다.",
          "en": "Lateral cutaneous branch of T12 subcostal and L1 iliohypogastric/ilioinguinal nerves over the greater trochanter and groin. Maigne's Syndrome (described by Dr. Robert Maigne) originates at the T11-L1 thoracolumbar junction but projects referred pain distally to the upper buttock, lateral trochanter, and groin—often misdiagnosed as hip bursitis or lower lumbar disc disease. Confirm cutaneous hyperalgesia via Pinch-Roll test and treat synergistically with proximal T1."
        }
      }
    ],
    "anatomicalLabels": [
      "T11-T12-L1 Facet & Deep Multifidus",
      "T12-L3 Thoracolumbar Rami",
      "Superior Cluneal Nerve Tunnel",
      "Serratus Posterior Inferior",
      "Greater Trochanter & Groin (Maigne's Zone)"
    ],
    "rifeFreq": 787,
    "searchKeywords": "흉요추 이행부 증후군 T-L Junction Syndrome Maigne 증후군 메뉴 증후군 마뉴 증후군 Thoracolumbar Junction Syndrome Maigne's Syndrome 상둔피신경 대전자 외측 통증 서혜부 연관통 하후거근 다열근 최장근 요추 골반 둔부 고관절 질환"
  },
  {
    "id": 27,
    "catId": "back_hip",
    "catNum": 4,
    "category": {
      "ko": "요추, 골반, 둔부 및 고관절 질환",
      "en": "Lumbar Spine, Pelvis & Hip Disorders"
    },
    "mechanism": {
      "ko": "신경유착 / 힘줄견인",
      "en": "[ / TTP] Nerve Entrapment & Tendon Traction"
    },
    "mechTags": [
      "nerve",
      "tendon"
    ],
    "title": {
      "ko": "대요근 / 장골근 증후군",
      "en": "Psoas Major / Iliacus Syndrome (Iliopsoas)"
    },
    "symptoms": {
      "ko": "허리를 펴기 힘들고 걷다 보면 허리가 굽어짐, 방바닥에 누우면 허리가 들뜸, 계단 올라갈 때 무릎관절 속 통증, 허벅지 전외측 이상감각.",
      "en": "Inability to straighten waist, posture slumps when walking, waist lifts off floor when lying flat, deep knee joint pain when climbing stairs, anterolateral thigh dysesthesia."
    },
    "pathophysiology": {
      "ko": "대요근/장골근의 강직으로 대퇴신경 및 외측대퇴피신경(LFCN) 이 대요근 내부/근막에서 유착되어 고관절/무릎관절 신경통 및 허벅지 감각둔화 유발.",
      "en": "Hypertonicity of psoas major/iliacus entraps femoral nerve and lateral femoral cutaneous nerve (LFCN) within muscle/fascia, causing hip/knee neuralgia and thigh numbness."
    },
    "targetTissues": {
      "ko": "대요근(Psoas Major · 기시: T12~L5 추체·L1~L5 횡돌기 / 정지: 대퇴골 소전자), 장골근(Iliacus · 기시: 장골와 내면 상부 2/3·장골능 내순 / 정지: 대퇴골 소전자), 요추신경총·대퇴신경, 서혜인대 하방 장요근건 및 고관절 전방 관절낭.",
      "en": "Psoas Major (Origin: T12-L5 vertebral bodies & L1-L5 transverse processes / Insertion: lesser trochanter), Iliacus (Origin: upper 2/3 iliac fossa & inner iliac crest / Insertion: lesser trochanter), lumbar plexus, femoral nerve, and iliopsoas tendon/anterior hip capsule."
    },
    "palpation": {
      "ko": "① 요추 L1~L4 횡돌기 외측 대요근 심부 기시부(극돌기 외측 3.5~5.5cm) ② 장골와(Iliac Fossa) 내측면 장골근 & ASIS 내측점 ③ 서혜인대 하방 대퇴삼각 장요근건 & 전방 관절낭 ④ 대퇴골 소전자(Lesser Trochanter) 장요근 정지부.",
      "en": "1) L1-L4 transverse process lateral psoas major deep origin (3.5-5.5cm lateral to midline) 2) Iliac fossa medial wall & ASIS medial iliacus belly 3) Sub-inguinal femoral triangle iliopsoas tendon & anterior hip capsule 4) Lesser trochanter iliopsoas tendon insertion."
    },
    "clinicalCase": {
      "ko": "장시간 착석 및 보행 시 허리 깊은 곳에서 서혜부와 대퇴부 앞쪽으로 뻗어 내리던 대요근·장골근 긴장증 사례. L1~L4 외측 대요근 심부, 장골와 내측 장골근, 서혜인대 하방 장요근건에 노바셀(-50mV)을 연계 적용하여 고관절 굴근의 신경견인을 이완시킴으로써 요통 85% 이상 호전.",
      "en": "38yo female with 2-year history of right lumbar-thigh/groin/knee pain. Pain reduced by 80-90% following combined NovaCell (-50mV) application to deep psoas major, iliacus fossa, and iliopsoas tendon."
    },
    "diagram": "images/diagrams/diagram_27.png",
    "targets": [
      {
        "code": "T1",
        "color": "#ff334b",
        "x": 45.0,
        "y": 23.6,
        "role": {
          "ko": "핵심 후관절·신경근점",
          "en": "Primary Facet & Root Target"
        },
        "name": {
          "ko": "T1: 요추 L1~L4 횡돌기 외측 · 대요근 심부 기시부",
          "en": "T1: L1-L4 Transverse Processes · Psoas Major & Lumbar Plexus"
        },
        "desc": {
          "ko": "[표적 해부] T12~L5 추체와 L1~L4 횡돌기에서 기시하는 대요근(Psoas Major) 심부 기시부 및 근육 내부를 관통하는 요추신경총(대퇴신경·외측대퇴피신경).\n[촉지 및 시술] 요추 극돌기 외측 3.5~5.5cm L2~L4 횡돌기 첨부 방향 접근. 의자에서 일어설 때 허리가 바로 펴지지 않고 굽어지는 대요근 단축과 요추신경총 압박을 근원부터 이완합니다.",
          "en": "Deep paraspinal approach to L1-L4 transverse process origin of psoas major and lumbar plexus."
        }
      },
      {
        "code": "T2",
        "color": "#00f5d4",
        "x": 64.0,
        "y": 44.8,
        "role": {
          "ko": "심부 근복·근막점",
          "en": "Deep Myofascial Trigger Point"
        },
        "name": {
          "ko": "T2: 장골와(Iliac Fossa) 내측면 · 장골근 & ASIS 내측점",
          "en": "T2: Iliac Fossa (Medial to ASIS) · Iliacus Deep Belly"
        },
        "desc": {
          "ko": "[표적 해부] 장골와 내면 상부 2/3 및 장골능 내순에서 기시하여 골반 앞쪽 전상장골극(ASIS) 내측을 채우는 장골근(Iliacus) 심부 근복.\n[촉지 및 시술] ASIS 내측 2~3cm 골반 뼈 내벽을 따라 부드럽게 심부 촉지. 고관절 굴곡 제한, 천장관절 전방 당김 및 허리 심부 통증을 즉시 풀어줍니다.",
          "en": "Iliacus muscle belly along inner wall of iliac fossa 2-3cm medial to ASIS."
        }
      },
      {
        "code": "T3",
        "color": "#ff9f43",
        "x": 64.5,
        "y": 62.3,
        "role": {
          "ko": "힘줄·관절낭점",
          "en": "Tendon & Joint Capsule Target"
        },
        "name": {
          "ko": "T3: 서혜인대 하방 대퇴삼각 · 장요근건 & 전방 관절낭",
          "en": "T3: Inferior Inguinal Ligament · Iliopsoas Tendon & Anterior Hip Capsule"
        },
        "desc": {
          "ko": "[표적 해부] 서혜인대 직하방 대퇴삼각에서 대요근과 장골근이 합류하는 장요근건(Iliopsoas Tendon), 장요점액낭 및 고관절 전방 관절낭·대퇴신경 주행부.\n[촉지 및 시술] 대퇴동맥 박동 외측 심부를 부드럽게 촉지. 사타구니(서혜부)가 당기고 계단을 오르거나 다리를 들어 올릴 때 고관절 앞쪽이 찝히는 통증을 해소합니다.",
          "en": "Iliopsoas myotendinous junction, bursa, and anterior hip capsule lateral to femoral pulse just below the inguinal ligament."
        }
      },
      {
        "code": "T4",
        "color": "#38bdf8",
        "x": 34.3,
        "y": 67.9,
        "role": {
          "ko": "힘줄·골막 부착점",
          "en": "Tendon & Periosteal Target"
        },
        "name": {
          "ko": "T4: 대퇴골 소전자(Lesser Trochanter) · 장요근 정지부",
          "en": "T4: Lesser Trochanter · Iliopsoas Tendon Insertion"
        },
        "desc": {
          "ko": "[표적 해부] 대요근과 장골근이 하나의 강력한 힘줄로 합쳐져 최종 정지하는 대퇴골 소전자(Lesser Trochanter) 골막 부착부 및 치골근 경계.\n[촉지 및 시술] 대퇴 상부 내측 심부 소전자 방향 접근. 장요근 전체의 최종 견인력이 집중되는 정지부 골막 긴장을 완화하여 고관절 굴곡·신전 균형을 회복합니다.",
          "en": "Distal periosteal insertion of the conjoined iliopsoas tendon at the lesser trochanter of the femur."
        }
      }
    ],
    "anatomicalLabels": [
      "Psoas Major (T12-L5 to Lesser Trochanter)",
      "Iliacus (Iliac Fossa to Lesser Trochanter)",
      "Lumbar Plexus & Femoral Nerve",
      "Sub-Inguinal Iliopsoas Tendon & Hip Capsule",
      "Lesser Trochanter Insertion"
    ],
    "rifeFreq": 880,
    "searchKeywords": "대요근 장골근 장요근 증후군 Psoas Major Iliacus Syndrome Iliopsoas 서혜부 통증 고관절 전방 통증 대퇴신경 외측대퇴피신경 소전자 장골와 ASIS 허리를 펴기 힘들고 걷다 보면 허리가 굽어짐 요추 골반 둔부 고관절 질환"
  },
  {
    "id": 28,
    "catId": "back_hip",
    "catNum": 4,
    "category": {
      "ko": "요추, 골반, 둔부 및 고관절 질환",
      "en": "Lumbar Spine, Pelvis & Hip Disorders"
    },
    "mechanism": {
      "ko": "신경유착",
      "en": "Nerve Entrapment"
    },
    "mechTags": [
      "nerve"
    ],
    "title": {
      "ko": "이상근 증후군 / 좌골신경통",
      "en": "Piriformis Syndrome / Sciatica"
    },
    "symptoms": {
      "ko": "둔부 깊은 곳의 뻐근한 통증, 허벅지 후외측으로 뻗치는 좌골신경통, 꼬리뼈 통증.",
      "en": "Deep dull ache in gluteal region, sciatica radiating down posterolateral thigh, coccyx pain."
    },
    "pathophysiology": {
      "ko": "이상근의 과긴장 및 단축으로 그 아래를 통과하는 좌골신경, 하둔신경, 후대퇴피신경이 유착되어 둔부 허혈 및 하지 방사통 유발.",
      "en": "Hypertonicity/shortening of piriformis entraps underlying sciatic nerve, inferior gluteal nerve, and posterior femoral cutaneous nerve, causing gluteal ischemia and lower limb radiculopathy."
    },
    "targetTissues": {
      "ko": "이상근(Piriformis · 기시: 천골 전면 외측연 S2~S4·대좌골절흔 / 정지: 대퇴골 대전자 상내측면), 좌골신경(Sciatic Nerve · L4~S3), 천장관절 하부, 좌골결절 외측 햄스트링 기시부.",
      "en": "Piriformis (Origin: anterior lateral sacrum S2-S4 & greater sciatic notch / Insertion: superior-medial greater trochanter), Sciatic Nerve (L4-S3), lower sacroiliac joint, and hamstring origin lateral to ischial tuberosity."
    },
    "palpation": {
      "ko": "① 이상근하공(대좌골공) 좌골신경 포착점(PSIS-대전자 중간 하방 심부) ② 대퇴골 대전자 상내측면 이상근 정지건 ③ 천골 외측연(S2~S4) 이상근 기시부 & 천장관절 하부 ④ 좌골결절 외측 햄스트링 기시부 & 좌골신경 주행점.",
      "en": "1) Infrapiriformis foramen sciatic nerve entrapment point 2) Superior-medial greater trochanter piriformis insertion 3) Lateral sacrum (S2-S4) origin & lower SI joint 4) Lateral ischial tuberosity hamstring origin & sciatic nerve groove."
    },
    "clinicalCase": {
      "ko": "둔부 깊은 곳의 뻐근한 결림과 하지 외측으로 전기가 흐르듯 저리던 이상근 증후군 및 좌골신경통 사례. 대좌골공 이상근 근복 및 좌골신경 주행 경로에 NovaCell Therapy를 집중 조율하여 신경 유착을 해소하고 보행 및 착석 편안함 회복.",
      "en": "41yo female with dull tightness across gluteus and buttock pulling during leg flexion/internal rotation. Gluteal pain resolved following piriformis NovaCell treatment."
    },
    "diagram": "images/diagrams/diagram_28.png",
    "targets": [
      {
        "code": "T1",
        "color": "#ff334b",
        "x": 60.3,
        "y": 48.6,
        "role": {
          "ko": "주 신경포착점",
          "en": "Primary Nerve Entrapment"
        },
        "name": {
          "ko": "T1: 이상근하공(대좌골공) · 좌골신경 포착점",
          "en": "T1: Infrapiriformis Foramen · Sciatic Nerve Entrapment"
        },
        "desc": {
          "ko": "[표적 해부] 후상장골극(PSIS)-미골 중간점과 대전자 상연을 잇는 이상근(Piriformis) 하연 대좌골공 좌골신경(L4~S3)·후대퇴피신경 출구.\n[촉지 및 시술] 둔부 정중앙 깊숙한 이상근 근복 및 하연(HP-PS-01). 엉덩이에서 허벅지 뒤·종아리까지 저리고 당기는 좌골신경통의 1차 핵심 타깃입니다.",
          "en": "Sciatic nerve (L4-S3) emergence beneath piriformis belly at infrapiriformis foramen."
        }
      },
      {
        "code": "T2",
        "color": "#00f5d4",
        "x": 26.4,
        "y": 56.4,
        "role": {
          "ko": "힘줄·골막 부착점",
          "en": "Tendon & Periosteal Target"
        },
        "name": {
          "ko": "T2: 대퇴골 대전자 상내측면 · 이상근 정지건",
          "en": "T2: Greater Trochanter (Superior-Medial) · Piriformis Insertion"
        },
        "desc": {
          "ko": "[표적 해부] 대퇴골 대전자 상내측면의 이상근 및 심부 외회전근군 공동 건·골막 부착부.\n[촉지 및 시술] 허벅지 바깥쪽 대전자 꼭대기 후상방 골막 접촉점(HP-PS-02). 이상근의 과도한 견인 장력을 즉시 완화하여 좌골신경 압박을 줄여줍니다.",
          "en": "Periosteal insertion of piriformis tendon at superior-medial border of greater trochanter."
        }
      },
      {
        "code": "T3",
        "color": "#ff9f43",
        "x": 41.9,
        "y": 36.2,
        "role": {
          "ko": "천장관절·기시부점",
          "en": "SI Joint & Origin Target"
        },
        "name": {
          "ko": "T3: 천골 외측연(S2~S4) 이상근 기시부 & 천장관절 하부",
          "en": "T3: Lateral Sacrum (S2-S4) · Piriformis Origin & Lower SI Joint"
        },
        "desc": {
          "ko": "[표적 해부] 천골 전면 외측연(S2~S4), 대좌골절흔 이상근 기시부 및 천장관절 하부 인대.\n[촉지 및 시술] 천골 양옆 함몰선 골막 타깃. 천골신경총(S2~S4) 자극과 이상근 기시부 경직을 동시에 이완합니다.",
          "en": "Piriformis origin along lateral border of sacrum (S2-S4) and lower sacroiliac joint."
        }
      },
      {
        "code": "T4",
        "color": "#38bdf8",
        "x": 61.9,
        "y": 63.3,
        "role": {
          "ko": "원위 신경주행·부착점",
          "en": "Distal Nerve & Hamstring Origin"
        },
        "name": {
          "ko": "T4: 좌골결절 외측 · 햄스트링 기시부 & 좌골신경 주행점",
          "en": "T4: Lateral to Ischial Tuberosity · Hamstring Origin & Sciatic Nerve"
        },
        "desc": {
          "ko": "[표적 해부] 좌골결절과 대전자 사이 고랑(좌골신경 하행로 및 햄스트링 근위 기시건막).\n[촉지 및 시술] 오래 앉아 있을 때 엉덩이 밑이 배기고 허벅지 뒤쪽으로 뻗치는 원위부 좌골신경 유착을 해소합니다(HP-PS-03).",
          "en": "Sciatic nerve groove and proximal hamstring origin lateral to the ischial tuberosity."
        }
      }
    ],
    "anatomicalLabels": [
      "Piriformis Muscle (S2-S4 to Greater Trochanter)",
      "Sciatic Nerve (L4-S3)",
      "Infrapiriformis Foramen (Greater Sciatic Foramen)",
      "Lateral Sacrum & Lower SI Joint",
      "Lateral Ischial Tuberosity & Hamstring Origin"
    ],
    "rifeFreq": 727,
    "searchKeywords": "이상근 증후군 / 좌골신경통 Piriformis Syndrome / Sciatica 둔부 깊은 곳의 뻐근한 통증, 허벅지 후외측으로 뻗치는 좌골신경통, 꼬리뼈 통증. Deep dull ache in gluteal region, sciatica radiating down posterolateral thigh, coccyx pain. 요추, 골반, 둔부 및 고관절 질환 Lumbar Spine, Pelvis & Hip Disorders"
  },
  {
    "id": 29,
    "catId": "back_hip",
    "catNum": 4,
    "category": {
      "ko": "요추, 골반, 둔부 및 고관절 질환",
      "en": "Lumbar Spine, Pelvis & Hip Disorders"
    },
    "mechanism": {
      "ko": "힘줄견인",
      "en": "[TTP] Tendon/Periosteal Traction Pain"
    },
    "mechTags": [
      "tendon"
    ],
    "title": {
      "ko": "고관절 심부 외회전근 골막염 / 대퇴근막장근 증후군",
      "en": "Hip Deep External Rotator Periostitis / TFL Syndrome (GTPS)"
    },
    "symptoms": {
      "ko": "고관절 근처 국소 통증, 의자에서 일어날 때 다리 전체 못 움직임, 보행 시 대퇴 외측 통증 및 절뚝거림.",
      "en": "Localized pain near hip joint, inability to move leg when rising from chair, thigh lateral pain and limping during gait."
    },
    "pathophysiology": {
      "ko": "대퇴근막장근(TFL) 및 심부 외회전근(상/하쌍위근, 대퇴 방형근)의 힘줄견인으로 대전자 부착부 골막염 유발.",
      "en": "Isotonic contraction of TFL and deep external rotators induces periostitis (TTP) at greater trochanter insertion."
    },
    "targetTissues": {
      "ko": "대퇴근막장근(TFL · 기시: 전상장골극 ASIS·장골능 전외측 / 정지: 장경인대 → 경골 Gerdy 결절), 중둔근·소둔근(기시: 장골익 외측면 / 정지: 대퇴골 대전자), 심부 외회전근(상·하쌍자근·내폐쇄근·대퇴방형근), 대전자 점액낭 및 L4~S1 상·하둔신경 근위 분절.",
      "en": "Tensor Fasciae Latae (TFL) & IT Band, Gluteus Medius & Minimus, Deep External Rotators (Gemelli, Obturator Internus, Quadratus Femoris), greater trochanteric bursa, and L4-S1 superior/inferior gluteal nerve roots."
    },
    "palpation": {
      "ko": "① 대퇴근막장근(TFL) 근복 & ASIS 후하방 기시점 ② 대퇴골 대전자 후상면 중·소둔근 & 외회전근 부착점(GTPS) ③ 중둔근·소둔근 장골익 심부점 ④ 요추 L4~S1 후관절 & 상·하둔신경 근위 분절점.",
      "en": "1) TFL belly & ASIS posteroinferior origin 2) Posterior-superior greater trochanter facet (GTPS & bursa) 3) Gluteus medius/minimus deep iliac wing trigger point 4) L4-S1 facet joints & gluteal nerve origin."
    },
    "clinicalCase": {
      "ko": "의자에서 일어날 때 고관절 외측 통증으로 절뚝거리며 보행이 불안정하던 심부 외회전근 골막염 사례. 대전자 후방 외회전근 정지부 및 대퇴근막장근에 NovaCell Therapy를 적용하여 고관절 회전 안정성을 개선하고 즉시 정상 기립 보행 달성.",
      "en": "Patient with hip pain when rising from chair. Normal gait restored immediately following TFL and deep external rotator NovaCell treatment."
    },
    "diagram": "images/diagrams/diagram_29.png",
    "targets": [
      {
        "code": "T1",
        "color": "#ff334b",
        "x": 67.1,
        "y": 48.1,
        "role": {
          "ko": "제1 핵심 치료점",
          "en": "Primary Clinical Target"
        },
        "name": {
          "ko": "T1: 대퇴근막장근(TFL) 근복 & ASIS 후하방 기시점",
          "en": "T1: TFL Belly & ASIS Posteroinferior Origin (Superior Gluteal N.)"
        },
        "desc": {
          "ko": "[표적 해부] 전상장골극(ASIS) 및 장골능 전외측에서 기시해 장경인대(IT Band)를 거쳐 경골 Gerdy 결절로 이어지는 대퇴근막장근(TFL) 근복과 상둔신경 분지.\n[촉지 및 시술] ASIS와 대전자 사이 전외측 골반 근육. 옆으로 누워 자거나 걸을 때 골반 바깥쪽이 쑤시고 장경인대가 당기는 통증을 해소합니다.",
          "en": "Tensor fasciae latae belly anterolateral to greater trochanter below ASIS and superior gluteal nerve branch."
        }
      },
      {
        "code": "T2",
        "color": "#00f5d4",
        "x": 60.8,
        "y": 57.1,
        "role": {
          "ko": "힘줄·골막 부착점",
          "en": "Tendon & Periosteal Target"
        },
        "name": {
          "ko": "T2: 대퇴골 대전자 후상면 · 중·소둔근 & 외회전근 부착점",
          "en": "T2: Greater Trochanter (GTPS) · Periosteal Insertion & Bursa"
        },
        "desc": {
          "ko": "[표적 해부] 대퇴골 대전자 외측·후상면(중·소둔근) 및 대전자 회전근와(상·하쌍자근·내폐쇄근·대퇴방형근) 골막 부착부 및 대전자 점액낭.\n[촉지 및 시술] 대전자 뼈 테두리 후상방 골막 접촉점. 대전자 통증 증후군(GTPS), 고관절 외측 골막염 및 가성 좌골신경통을 해결합니다.",
          "en": "Periosteal insertions of gluteus medius, minimus, and deep external rotators around the posterior-superior greater trochanter and bursa (GTPS)."
        }
      },
      {
        "code": "T3",
        "color": "#ff9f43",
        "x": 57.0,
        "y": 35.8,
        "role": {
          "ko": "심부 근복·근막점",
          "en": "Deep Myofascial Trigger Point"
        },
        "name": {
          "ko": "T3: 중둔근·소둔근(Gluteus Medius & Minimus) 장골익 심부점",
          "en": "T3: Gluteus Medius & Minimus · Deep Iliac Wing Trigger Point"
        },
        "desc": {
          "ko": "[표적 해부] 장골능 하방 3~5cm 장골익 외측면에서 기시하여 대퇴골 대전자로 정지하는 중둔근 및 심층 소둔근 근복.\n[촉지 및 시술] 허벅지 외측과 종아리 바깥쪽까지 허리디스크처럼 방사통을 유발하는 소둔근·중둔근 심부 유발점(TrP)을 비활성화합니다.",
          "en": "Deep trigger points of gluteus medius and minimus on external iliac wing referring pseudo-sciatic pain down the lateral thigh."
        }
      },
      {
        "code": "T4",
        "color": "#38bdf8",
        "x": 40.6,
        "y": 29.7,
        "role": {
          "ko": "후관절·신경근점",
          "en": "Facet & Nerve Root Target"
        },
        "name": {
          "ko": "T4: 요추 L4~S1 후관절 & 상·하둔신경 근위 분절점",
          "en": "T4: L4-S1 Facet Joints · Superior & Inferior Gluteal Nerve Origin"
        },
        "desc": {
          "ko": "[표적 해부] 대퇴근막장근·중소둔근·심부 외회전근을 지배하는 상·하둔신경의 기원 분절인 요추 L4~S1 후관절.\n[촉지 및 시술] 고관절 외측 근육의 만성 과긴장과 반복 재발을 일으키는 근위 척수 신경근 흥분을 함께 안정화합니다.",
          "en": "L4-S1 paraspinal facet joints innervating superior and inferior gluteal nerves to stabilize proximal neural tension."
        }
      }
    ],
    "anatomicalLabels": [
      "Tensor Fasciae Latae (TFL) & IT Band",
      "Greater Trochanter (GTPS & Bursa)",
      "Gluteus Medius & Minimus (Iliac Wing)",
      "Deep External Rotators (Gemelli, Obturator Internus, Quadratus Femoris)",
      "L4-S1 Facet Joints & Superior/Inferior Gluteal Nerves"
    ],
    "rifeFreq": 880,
    "searchKeywords": "고관절 심부 외회전근 골막염 대퇴근막장근 증후군 TFL GTPS 대전자 통증 증후군 Hip Deep External Rotator Periostitis Tensor Fasciae Latae Syndrome 중둔근 소둔근 장경인대 IT Band 상하쌍자근 내폐쇄근 대퇴방형근 대전자 점액낭염 요추 골반 둔부 고관절 질환"
  },
  {
    "id": 30,
    "catId": "back_hip",
    "catNum": 4,
    "category": {
      "ko": "요추, 골반, 둔부 및 고관절 질환",
      "en": "Lumbar Spine, Pelvis & Hip Disorders"
    },
    "mechanism": {
      "ko": "힘줄견인",
      "en": "[TTP] Tendon/Periosteal Traction Pain"
    },
    "mechTags": [
      "tendon"
    ],
    "title": {
      "ko": "대둔근 힘줄견인통 / 꼬리뼈 통증",
      "en": "Gluteus Maximus TTP / Coccygodynia"
    },
    "symptoms": {
      "ko": "엉덩방아 후 꼬리뼈 및 엉덩이 아랫부분 통증, 바닥이나 의자에 앉기 힘듦.",
      "en": "Tailbone and lower buttock pain after fall on buttocks, difficulty sitting on floor or chair."
    },
    "pathophysiology": {
      "ko": "엉덩방아 등 외상이나 장시간 착석으로 대둔근 하부 기시부와 천결절인대에 힘줄견인점이 형성되어 꼬리뼈(미골)·천미관절 골막을 잡아당기고 미골신경총(Ganglion Impar) 및 후천골공(S2~S4) 골반 자율신경을 자극해 염증성 통증 유발.",
      "en": "Fall trauma or prolonged sitting forms TTPs at the lower gluteus maximus origin and sacrotuberous ligament, pulling on the coccygeal periosteum and irritating the ganglion impar and S2-S4 pelvic autonomic nerves."
    },
    "targetTissues": {
      "ko": "대둔근(Gluteus Maximus · 기시: 장골 후면·천골 하외측연·미골·천결절인대 / 정지: 장경인대 IT Band·대퇴골 둔근조면), 천결절인대(Sacrotuberous Ligament · 기시: PSIS·천골 하외측연·미골 / 정지: 좌골결절 내측연), 천미관절 & 미골신경총(Ganglion Impar), 후천골공(S2~S4) 골반 자율신경.",
      "en": "Gluteus Maximus lower origin (coccyx, lower lateral sacrum, sacrotuberous ligament), Sacrotuberous Ligament (to medial ischial tuberosity), Sacrococcygeal Joint & Ganglion Impar, and S2-S4 Posterior Sacral Foramina."
    },
    "palpation": {
      "ko": "① 미골(Coccyx)·천골 하외측연 대둔근 하부 기시부 ② 천미관절(Sacrococcygeal Joint) & 미골신경총(Ganglion Impar) 투사점 ③ 좌골결절(Ischial Tuberosity) 천결절인대 착점 ④ 후천골공(S2~S4) 골반 자율신경점.",
      "en": "1) Lateral coccyx & lower sacrum gluteus maximus origin 2) Dorsal sacrococcygeal joint & ganglion impar projection 3) Ischial tuberosity sacrotuberous ligament insertion 4) S2-S4 posterior sacral foramina."
    },
    "clinicalCase": {
      "ko": "엉덩방아 후 수개월간 지속된 미골(꼬리뼈) 통증으로 바닥에 앉기 힘들던 대둔근 건 견인통 사례. 미골 외측연 대둔근 기시부 및 천골결절인대에 NovaCell Therapy를 통전하여 골막 견인 장력을 이완함으로써 착석 시 통증 즉시 소실.",
      "en": "27yo female with 2 months of tailbone pain after fall on buttocks. Immediate comfort sitting after treating gluteus maximus tender point beside coccyx with NovaCell probe."
    },
    "diagram": "images/diagrams/diagram_30.png",
    "targets": [
      {
        "code": "T1",
        "color": "#ff334b",
        "x": 56.1,
        "y": 48.3,
        "role": {
          "ko": "힘줄·골막 부착점",
          "en": "Primary Tendon & Periosteal Target"
        },
        "name": {
          "ko": "T1: 미골(Coccyx) · 천골 하외측연 · 대둔근 하부 기시부",
          "en": "T1: Lateral Coccyx & Lower Sacrum · Gluteus Maximus Lower Origin"
        },
        "desc": {
          "ko": "[표적 해부] 미골(꼬리뼈) 양측 외측연, 천골 하외측연 및 천결절인대에 부착하는 대둔근 하내측 섬유 기시부 골막.\n[촉지 및 시술] 꼬리뼈 바로 옆 대둔근 부착 경계선 골막 압통점. 앉았다 일어날 때 찌릿한 꼬리뼈 통증(미골통)의 견인 장력을 즉각 이완합니다.",
          "en": "Periosteal origin of lower gluteus maximus along lateral border of coccyx, lower sacrum, and sacrotuberous ligament."
        }
      },
      {
        "code": "T2",
        "color": "#00f5d4",
        "x": 50.0,
        "y": 50.9,
        "role": {
          "ko": "관절·신경총 반사점",
          "en": "Joint & Ganglion Impar Target"
        },
        "name": {
          "ko": "T2: 천미관절(Sacrococcygeal Joint) & 미골신경총(Ganglion Impar)",
          "en": "T2: Dorsal Sacrococcygeal Joint · Ganglion Impar Projection"
        },
        "desc": {
          "ko": "[표적 해부] 천골 열공 직하방 천미관절(Sacrococcygeal Joint) 배측 천미인대 및 불쌍신경절(Ganglion Impar) 투사점.\n[촉지 및 시술] 꼬리뼈 관절 바로 위 정중선 골막. 만성·난치성 미골 신경통과 회음부 묵직한 통증을 진정시킵니다.",
          "en": "Dorsal sacrococcygeal joint and ligament just below sacral hiatus regulating the ganglion impar."
        }
      },
      {
        "code": "T3",
        "color": "#ff9f43",
        "x": 35.5,
        "y": 66.8,
        "role": {
          "ko": "인대·골막 부착점",
          "en": "Ligament & Periosteal Target"
        },
        "name": {
          "ko": "T3: 좌골결절(Ischial Tuberosity) · 천결절인대 착점",
          "en": "T3: Ischial Tuberosity · Sacrotuberous Ligament & Lower Gluteus Max."
        },
        "desc": {
          "ko": "[표적 해부] PSIS·천골 하외측연·미골에서 내려와 좌골결절 내측연에 정지하는 천결절인대(Sacrotuberous Ligament) 착점(HP-SIJ-02) 및 대둔근 하부 섬유.\n[촉지 및 시술] 꼬리뼈를 한쪽으로 비대칭 견인하는 인대-근육 장력을 균형 있게 풀어줍니다.",
          "en": "Sacrotuberous ligament insertion at medial ischial tuberosity and lower gluteus maximus fibers."
        }
      },
      {
        "code": "T4",
        "color": "#38bdf8",
        "x": 44.0,
        "y": 38.3,
        "role": {
          "ko": "자율신경 조절점",
          "en": "Autonomic Control Target"
        },
        "name": {
          "ko": "T4: 후천골공(S2~S4) 골반 자율신경점",
          "en": "T4: S2-S4 Posterior Sacral Foramina · Pelvic Autonomic Nerves"
        },
        "desc": {
          "ko": "[표적 해부] 천골 후면 정중선 외측 2cm 제2·3·4 후천골공(S2~S4, 차료·중료·하료혈) 및 골반 부교감 자율신경 출구.\n[촉지 및 시술] 골반저근(항문거근·미골근)의 과긴장과 자율신경 과흥분을 진정시켜 꼬리뼈 내측 견인을 해소합니다.",
          "en": "S2-S4 posterior sacral foramina modulating pelvic autonomic nerves and relaxing pelvic floor traction on the coccyx."
        }
      }
    ],
    "anatomicalLabels": [
      "Gluteus Maximus (Coccyx & Lower Sacrum Origin)",
      "Sacrococcygeal Joint & Ganglion Impar",
      "Sacrotuberous Ligament & Ischial Tuberosity",
      "S2-S4 Posterior Sacral Foramina (Pelvic Autonomic Nerves)"
    ],
    "rifeFreq": 528,
    "searchKeywords": "대둔근 힘줄견인통 꼬리뼈 통증 미골통 Gluteus Maximus TTP Coccygodynia 천미관절 미골신경총 Ganglion Impar 천결절인대 좌골결절 후천골공 S2 S3 S4 엉덩방아 후 꼬리뼈 통증 바닥이나 의자에 앉기 힘듦 요추 골반 둔부 고관절 질환"
  },
  {
    "id": 31,
    "catId": "knee_foot",
    "catNum": 5,
    "category": {
      "ko": "무릎, 발목 및 족부 질환",
      "en": "Knee, Ankle & Foot Disorders"
    },
    "mechanism": {
      "ko": "신경유착 / 힘줄견인",
      "en": "[ / TTP] Nerve Entrapment & Tendon Traction"
    },
    "mechTags": [
      "nerve",
      "tendon"
    ],
    "title": {
      "ko": "대퇴이두근 / 반막양근 / 반건양근 무릎관절 신경통",
      "en": "Biceps Femoris / Semimembranosus / Semitendinosus Knee Neuralgia"
    },
    "symptoms": {
      "ko": "무릎을 구부리거나 걸을 때 무릎 뒤쪽(오금) 외측 비골두 부위와 내측 경골 내측과·근위 내측면(거위발건)이 당기고 찌릿함. 계단을 오르내리거나 오래 앉았다 일어날 때 허벅지 뒤쪽에서 오금으로 뻗치는 통증 및 신전 제한.",
      "en": "Pulling and sharp pain at the posterolateral knee (fibular head) and posteromedial knee (medial tibial condyle & pes anserinus) during knee flexion or walking, with posterior thigh tightness radiating to the popliteal fossa."
    },
    "pathophysiology": {
      "ko": "좌골결절(Ischial Tuberosity)에서 공동 기시하는 햄스트링 3근육—외측 대퇴이두근(Biceps Femoris · 비골두 정지)과 내측 반막양근(Semimembranosus · 경골 내측과 정지)·반건양근(Semitendinosus · 경골 근위 내측면 정지)—의 과긴장 및 힘줄견인 염증으로 대퇴 후면 좌골신경(Sciatic Nerve)과 오금의 총비골신경·경골신경 관절지가 포착되어 통증을 유발함.",
      "en": "Hypertonicity and tendon traction of the three hamstring muscles originating from the ischial tuberosity (lateral biceps femoris inserting on the fibular head; medial semimembranosus on the medial tibial condyle; semitendinosus on the proximal medial tibia) entrapping the sciatic, common peroneal, and tibial articular branches."
    },
    "targetTissues": {
      "ko": "대퇴이두근(Biceps Femoris · 비골두 정지), 반막양근(Semimembranosus · 경골 내측과 정지), 반건양근(Semitendinosus · 경골 근위 내측면 정지), 좌골신경(Sciatic Nerve), 좌골결절 공동 기시부.",
      "en": "Biceps Femoris (Head of Fibula insertion), Semimembranosus (Medial Condyle of Tibia insertion), Semitendinosus (Proximal Medial Tibia / Pes Anserinus insertion), Sciatic Nerve, Ischial Tuberosity common origin."
    },
    "palpation": {
      "ko": "외측 비골두(대퇴이두근 정지부), 내측 경골 내측과(반막양근 정지부), 경골 근위 내측면(반건양근 거위발건 정지부), 대퇴 후면 중앙 좌골신경 주행로 및 좌골결절 공동 기시부 압통점.",
      "en": "Head of fibula (biceps femoris insertion), medial tibial condyle (semimembranosus insertion), proximal medial tibia (semitendinosus insertion), mid-posterior thigh sciatic nerve groove, and ischial tuberosity origin."
    },
    "clinicalCase": {
      "ko": "보행 및 계단 이용 시 오금 외측과 내측이 동시에 당기고 무릎이 끝까지 펴지지 않던 만성 슬관절 후면 통증 사례. 비골두(대퇴이두근 정지부), 경골 내측과(반막양근 정지부), 반건양근 근복·경골 근위 내측면, 대퇴 후면 좌골신경 주행로 및 좌골결절 기시부에 NovaCell Therapy(노바셀 생체 전압 공명 치료)를 단계적으로 적용한 결과, 시술 직후 무릎 신전 각도 정상화 및 보행 시 오금 통증 90% 이상 호전.",
      "en": "Chronic posterior knee pain with tightness along both lateral and medial popliteal margins and restricted knee extension. Stepwise NovaCell Therapy across the fibular head, medial tibial condyle, semitendinosus, posterior thigh sciatic groove, and ischial tuberosity restored full extension and reduced pain by over 90%."
    },
    "diagram": "images/diagrams/diagram_31.png",
    "targets": [
      {
        "code": "T1",
        "color": "#ff334b",
        "x": 63.4,
        "y": 76.6,
        "role": {
          "ko": "주 신경포착점",
          "en": "Primary Nerve Entrapment"
        },
        "name": {
          "ko": "T1: 비골두(Head of Fibula) 대퇴이두근 정지건 및 총비골신경 인접점",
          "en": "T1: Head of Fibula Biceps Femoris Insertion & Common Peroneal Nerve"
        },
        "desc": {
          "ko": "[표적 해부] 무릎 외후방 비골두(Head of Fibula)의 대퇴이두근(Biceps Femoris) 정지건 골막 부착부 및 바로 뒤 총비골신경 주행로.\n[촉지 및 시술] 무릎 바깥쪽 아래 만져지는 둥근 비골두 상외측 경계와 후방 고랑. 무릎 외후방 당김과 대퇴이두근 힘줄견인통 및 총비골신경 자극을 직접 해소합니다.",
          "en": "Biceps femoris tendon insertion at the fibular head and adjacent common peroneal nerve; relieves posterolateral knee traction and peroneal irritation."
        }
      },
      {
        "code": "T2",
        "color": "#00f5d4",
        "x": 44.1,
        "y": 73.8,
        "role": {
          "ko": "힘줄·골막 부착점",
          "en": "Tendon & Periosteal Target"
        },
        "name": {
          "ko": "T2: 경골 내측과(Medial Condyle of Tibia) 반막양근 정지부 및 후내측 관절낭점",
          "en": "T2: Medial Tibial Condyle Semimembranosus Insertion & Posterior Capsule"
        },
        "desc": {
          "ko": "[표적 해부] 무릎 후내측 경골 내측과(Medial Condyle of Tibia) 후면의 반막양근(Semimembranosus) 정지건막 및 후방 관절낭·복재신경 관절지.\n[촉지 및 시술] 오금 안쪽 주름 끝 경골 내측과 후면 골막 부착부. 무릎을 구부리거나 쪼그려 앉을 때 발생하는 오금 안쪽 깊숙한 통증을 해결합니다.",
          "en": "Semimembranosus insertion at the posteromedial tibial condyle and posterior capsule; resolves deep medial popliteal pain on flexion."
        }
      },
      {
        "code": "T3",
        "color": "#ff9f43",
        "x": 40.3,
        "y": 53.3,
        "role": {
          "ko": "심부 근복·힘줄점",
          "en": "Deep Muscle Belly & Tendon"
        },
        "name": {
          "ko": "T3: 반건양근(Semitendinosus) 근복 유발점 및 경골 근위 내측면(거위발건) 연장부",
          "en": "T3: Semitendinosus Muscle Belly & Proximal Medial Tibia (Pes Anserinus)"
        },
        "desc": {
          "ko": "[표적 해부] 대퇴 후내측 표층의 반건양근(Semitendinosus) 근복 및 원위부 경골 근위 내측면(Proximal Medial Tibia · 거위발건) 정지건.\n[촉지 및 시술] 대퇴 후내측 중앙 반건양근 압통점과 경골 근위 내측면(무릎 관절선 아래 4~5cm 내측) 거위발건 부착부를 함께 이완하여 무릎 내측 당김과 굴곡 구축을 해소합니다.",
          "en": "Semitendinosus belly and its distal pes anserinus insertion at the proximal medial tibia; releases medial hamstring tightness and knee flexion contracture."
        }
      },
      {
        "code": "T4",
        "color": "#38bdf8",
        "x": 59.2,
        "y": 53.3,
        "role": {
          "ko": "신경 주행·분지점",
          "en": "Nerve Pathway Target"
        },
        "name": {
          "ko": "T4: 대퇴 후면 좌골신경(Sciatic Nerve) · 대퇴이두근/반막양근 사이 신경포착점",
          "en": "T4: Posterior Thigh Sciatic Nerve Groove between Biceps Femoris & Semimembranosus"
        },
        "desc": {
          "ko": "[표적 해부] 대퇴 후면 중앙에서 외측 대퇴이두근과 내측 반막양근 사이 심부 고랑을 수직 주행하는 좌골신경(Sciatic Nerve) 본간.\n[촉지 및 시술] 대퇴 후면 정중앙 햄스트링 내·외측 근복 사이 심부 골짜기. 허벅지 뒤쪽에서 오금으로 뻗치는 방사통과 신경 유착을 해제합니다.",
          "en": "Sciatic nerve trunk coursing vertically between lateral biceps femoris and medial semimembranosus; releases posterior thigh entrapment and radiating popliteal pain."
        }
      },
      {
        "code": "T5",
        "color": "#a855f7",
        "x": 57.5,
        "y": 32.0,
        "role": {
          "ko": "기시부·근위 제어점",
          "en": "Proximal Origin Control"
        },
        "name": {
          "ko": "T5: 좌골결절(Ischial Tuberosity) 대퇴이두근·반막양근·반건양근 공동 기시부 건막점",
          "en": "T5: Ischial Tuberosity Common Hamstring Origin"
        },
        "desc": {
          "ko": "[표적 해부] 골반 하단 좌골결절(Ischial Tuberosity)의 햄스트링 3근육(대퇴이두근 장두·반막양근·반건양근) 공동 기시부 건골막.\n[촉지 및 시술] 둔부 주름 아래 좌골결절 하외측 골막 경계. 햄스트링 전체의 근위부 장력을 풀어 무릎 후면의 견인통 재발을 근본 차단합니다.",
          "en": "Common hamstring tendon origin at the ischial tuberosity; relieves proximal hamstring tension to prevent recurrent posterior knee traction pain."
        }
      }
    ],
    "anatomicalLabels": [
      "Biceps Femoris",
      "Semimembranosus",
      "Common Peroneal Nerve",
      "Tibial Nerve",
      "Fibula Head"
    ],
    "rifeFreq": 787,
    "searchKeywords": "대퇴이두근 / 반막양근 무릎관절 신경통 Biceps Femoris / Semimembranosus Knee Neuralgia 계단 오르내릴 때(특히 내려갈 때) 무릎 관절 속 깊은 통증, 오금/무릎 뒤쪽 찌릿함. Deep knee joint pain when climbing/descending stairs (especially descending), popliteal/posterior knee tingling. 무릎, 발목 및 족부 질환 Knee, Ankle & Foot Disorders"
  },
  {
    "id": 32,
    "catId": "knee_foot",
    "catNum": 5,
    "category": {
      "ko": "무릎, 발목 및 족부 질환",
      "en": "Knee, Ankle & Foot Disorders"
    },
    "mechanism": {
      "ko": "힘줄견인",
      "en": "[TTP] Tendon/Periosteal Traction Pain"
    },
    "mechTags": [
      "tendon"
    ],
    "title": {
      "ko": "장경골구단증후군 (Iiotibial Band Syndrome : ITBS)",
      "en": "Iliotibial Band Syndrome (ITBS)"
    },
    "symptoms": {
      "ko": "조깅/러닝 시 무릎 외측(대퇴골 외측상과) 극심한 통증, 무릎 30도 굴곡 시 통증 악화.",
      "en": "Severe lateral knee pain (lateral femoral epicondyle) during jogging/running, pain worsens at 30-degree knee flexion."
    },
    "pathophysiology": {
      "ko": "대퇴근막장근(TFL)과 대둔근의 과긴장으로 장경골구가 팽팽해져 대퇴골 외측상과와 반복 마찰/염증 유발.",
      "en": "Hypertonicity of TFL and gluteus maximus tightens iliotibial band, causing repetitive friction/inflammation against lateral femoral epicondyle."
    },
    "targetTissues": {
      "ko": "대퇴근막장근(Tensor fasciae latae, TFL).",
      "en": "Tensor fasciae latae (TFL)."
    },
    "palpation": {
      "ko": "ASIS와 대전자 중간 지점 TFL 근복 심한 압통점.",
      "en": "Severe tender point in TFL belly mid-way between ASIS and greater trochanter."
    },
    "clinicalCase": {
      "ko": "달리기 또는 굴곡 동작 시 무릎 외측 대퇴골 외측상과에 마찰 통증이 극심하던 장경골인대증후군(ITBS) 사례. 대퇴근막장근(TFL) 근복 및 외측상과 마찰점에 NovaCell Therapy를 집중 가동하여 건막 장력을 정상화하고 무릎 굴신 동작 통증 완치.",
      "en": "18yo b-boy limping in with lateral knee pain after 3 days of heavy dance practice. Normal gait restored immediately after TFL tender point NovaCell therapy."
    },
    "diagram": "images/diagrams/diagram_32.png",
    "targets": [
      {
        "code": "T1",
        "color": "#ff334b",
        "x": 44.0,
        "y": 32.9,
        "role": {
          "ko": "제1 핵심 치료점",
          "en": "Primary Clinical Target"
        },
        "name": {
          "ko": "T1: 대퇴골 외측상과(Lateral Femoral Epicondyle) 장경인대 마찰점",
          "en": "T1: Lateral Femoral Epicondyle Iliotibial Band Friction Point"
        },
        "desc": {
          "ko": "[표적 해부] 무릎 관절선 상방 2~3cm 대퇴골 외측상과 돌출부와 장경인대 심층 지방체·점액낭.\n[촉지 및 시술] 무릎을 30도 구부릴 때 장경인대가 외측상과 뼈 위를 넘어가며 마찰되는 압통점.",
          "en": "Iliotibial band friction zone over lateral femoral epicondyle 2-3cm proximal to knee joint line."
        }
      },
      {
        "code": "T2",
        "color": "#00f5d4",
        "x": 56.0,
        "y": 54.0,
        "role": {
          "ko": "힘줄·골막 부착점",
          "en": "Tendon & Periosteal Target"
        },
        "name": {
          "ko": "T2: 경골 외측과 제르디 결절(Gerdy's Tubercle) 장경인대 정지부 골막 부착점",
          "en": "T2: Gerdy's Tubercle of Anterolateral Tibia Periosteal Contact"
        },
        "desc": {
          "ko": "[표적 해부] 경골 근위 전외측면(슬개건과 비골두 사이) 제르디 결절 장경인대 골막 착점.\n[촉지 및 시술] 무릎 바깥쪽 아래 앞면의 볼록한 골결절 골막 부착부. 장경인대 원위 부착부 골막 견인통을 즉각 소실시킵니다.",
          "en": "Periosteal insertion of iliotibial tract on Gerdy's tubercle of anterolateral tibia."
        }
      },
      {
        "code": "T3",
        "color": "#ff9f43",
        "x": 38.0,
        "y": 62.0,
        "role": {
          "ko": "심부 근복·근막점",
          "en": "Deep Myofascial Trigger Point"
        },
        "name": {
          "ko": "T3: 외측광근(Vastus Lateralis) 원위부 및 외측 대퇴근간중격 유착점",
          "en": "T3: Distal Vastus Lateralis & Lateral Intermuscular Septum"
        },
        "desc": {
          "ko": "[표적 해부] 허벅지 외측 하부 1/3 외측광근과 장경인대·대퇴이두근 사이의 외측 근간중격.\n[촉지 및 시술] 장경인대를 팽팽하게 당기는 외측광근-장경인대 근막 유착선을 분리·이완합니다.",
          "en": "Myofascial adhesion line between vastus lateralis and iliotibial tract in distal lateral thigh."
        }
      },
      {
        "code": "T4",
        "color": "#38bdf8",
        "x": 62.0,
        "y": 38.0,
        "role": {
          "ko": "힘줄·골막 부착점",
          "en": "Tendon & Periosteal Target"
        },
        "name": {
          "ko": "T4: 고관절 전외측 대퇴근막장근(TFL)·대둔근 상부 장경인대 기시점",
          "en": "T4: Proximal TFL & Upper Gluteus Maximus ITB Tension Switch"
        },
        "desc": {
          "ko": "[표적 해부] 장경인대의 상류 장력 조절기인 골반 외측 대퇴근막장근(TFL)과 대둔근 상부 섬유.\n[촉지 및 시술] 상류 근육을 함께 이완해야 무릎 바깥쪽 장경인대 마찰이 재발하지 않습니다.",
          "en": "Proximal tension generator of ITB at tensor fasciae latae and upper gluteus maximus."
        }
      }
    ],
    "anatomicalLabels": [
      "Iliotibial Band (ITB)",
      "Lateral Femoral Epicondyle",
      "Tensor Fasciae Latae",
      "Gerdy's Tubercle"
    ],
    "rifeFreq": 880,
    "searchKeywords": "장경골구단증후군 (Iiotibial Band Syndrome : ITBS) Iliotibial Band Syndrome (ITBS) 조깅/러닝 시 무릎 외측(대퇴골 외측상과) 극심한 통증, 무릎 30도 굴곡 시 통증 악화. Severe lateral knee pain (lateral femoral epicondyle) during jogging/running, pain worsens at 30-degree knee flexion. 무릎, 발목 및 족부 질환 Knee, Ankle & Foot Disorders"
  },
  {
    "id": 33,
    "catId": "knee_foot",
    "catNum": 5,
    "category": {
      "ko": "무릎, 발목 및 족부 질환",
      "en": "Knee, Ankle & Foot Disorders"
    },
    "mechanism": {
      "ko": "힘줄견인 / 신경유착",
      "en": "[TTP / ] Tendon Traction & Nerve Entrapment"
    },
    "mechTags": [
      "nerve",
      "tendon"
    ],
    "title": {
      "ko": "거위발 점액낭염 / 복재신경 유착",
      "en": "Pes Anserine Bursitis / Saphenous Nerve Entrapment"
    },
    "symptoms": {
      "ko": "무릎 내측 하방 통증, 쪼그려 앉았다 일어나기 힘듦, 계단 오르내릴 때 무릎 내측 통증.",
      "en": "Anteromedial inferior knee pain, difficulty standing from squatting, medial knee pain climbing/descending stairs."
    },
    "pathophysiology": {
      "ko": "봉공근/박근/반건양근 정지부(거위발)의 힘줄견인점/점액낭염 및 내측광근에 의한 복재신경(saphenous n.) 유착.",
      "en": "TTP/bursitis at insertion of sartorius/gracilis/semitendinosus (pes anserinus) and saphenous nerve entrapment by vastus medialis."
    },
    "targetTissues": {
      "ko": "내전근관(Hunter's Canal) 출구 복재신경, 거위발건 공동 정지부 및 점액낭(봉공근·ASIS 기시 / 박근·치골하가지 기시 / 반건양근·좌골결절 기시), 내측광근(VMO · 대퇴골 조선 기시·슬개골 내측연 정지), 내측 관절간극·내측측부인대(MCL), 외측 관절간극 관절포.",
      "en": "Hunter's canal saphenous nerve exit, pes anserinus conjoint insertion & bursa (sartorius from ASIS, gracilis from inferior pubic ramus, semitendinosus from ischial tuberosity), VMO (linea aspera to medial patella), medial joint line & MCL, lateral joint line capsule."
    },
    "palpation": {
      "ko": "① 대퇴 내측 원위 1/3 내전근관 출구 복재신경 포착점 ② 경골 근위 내측면(무릎 관절선 아래 4~5cm) 거위발건·점액낭 ③ 무릎 내측 관절간극·MCL ④ 무릎 외측 관절간극 관절포.",
      "en": "Hunter's canal exit (distal medial thigh), pes anserinus insertion & bursa (4-5cm below medial joint line), medial joint line & MCL, and lateral joint line capsule."
    },
    "clinicalCase": {
      "ko": "무릎 내측 하방 통증으로 쪼그려 앉거나 보행 시 절뚝거리던 거위발 점액낭염 및 복재신경 유착 사례. 관절선 상방 내측광근 및 거위발건 정지부에 NovaCell Therapy를 적용하여 복재신경 감압과 건막 염증을 해소하고 15분 만에 정상 보행 회복.",
      "en": "76yo female with medial knee pain aggravated for 3 days. Pain vanished within 10 minutes following vastus medialis NovaCell conduction 5 FB above joint line."
    },
    "diagram": "images/diagrams/diagram_33.png",
    "targets": [
      {
        "code": "T1",
        "color": "#ff334b",
        "x": 56.8,
        "y": 53.6,
        "role": {
          "ko": "주 신경포착점",
          "en": "Primary Nerve Entrapment"
        },
        "name": {
          "ko": "T1: 내전근관 출구 · 복재신경 포착점 (Hunter's Canal Exit & VMO)",
          "en": "T1: Hunter's Canal Exit & Saphenous Nerve (VMO)"
        },
        "desc": {
          "ko": "[표적 해부] 대퇴 내측 원위 1/3 내측광근(VMO)과 봉공근 사이 내전근관(Hunter's Canal)에서 복재신경(Saphenous Nerve)이 근막을 뚫고 나오는 제1 포착점.\n[촉지 및 시술] 무릎 내측 상방 약 8~10cm 대퇴 내측 오목한 근막 경계. 무릎 안쪽과 정강이 내측으로 뻗치는 찌릿한 신경통 및 야간통을 직접 차단합니다.",
          "en": "Hunter's canal fascial exit between VMO and sartorius where the saphenous nerve is entrapped; directly relieves medial knee and shin neuralgia."
        }
      },
      {
        "code": "T2",
        "color": "#00f5d4",
        "x": 56.8,
        "y": 78.5,
        "role": {
          "ko": "힘줄·골막 부착점",
          "en": "Tendon & Periosteal Target"
        },
        "name": {
          "ko": "T2: 거위발건 정지부 · 점액낭 (Pes Anserinus Insertion & Bursa)",
          "en": "T2: Pes Anserinus Insertion & Bursa"
        },
        "desc": {
          "ko": "[표적 해부] 경골 근위 내측면에서 봉공근(ASIS 기시)·박근(치골하가지 기시)·반건양근(좌골결절 기시) 3개 힘줄이 공동 정지하는 거위발건(Pes Anserinus) 정지부 및 하부 점액낭.\n[촉지 및 시술] 무릎 내측 관절선 아래 4~5cm 경골 전내측 평탄면. 계단을 오르내리거나 일어날 때 찌르는 듯한 내측 하부 무릎 통증을 해소합니다.",
          "en": "Conjoint insertion of sartorius, gracilis, and semitendinosus with the pes anserine bursa 4-5cm below the medial joint line; relieves stair-climbing pain."
        }
      },
      {
        "code": "T3",
        "color": "#ff9f43",
        "x": 53.7,
        "y": 66.0,
        "role": {
          "ko": "관절낭·인대점",
          "en": "Capsule & Ligament Target"
        },
        "name": {
          "ko": "T3: 내측 관절간극 · 내측측부인대(MCL) 관절낭점",
          "en": "T3: Medial Joint Line & MCL Capsule"
        },
        "desc": {
          "ko": "[표적 해부] 대퇴골 내측과와 경골 내측과 사이 내측 관절간극(Medial Joint Line)의 내측측부인대(MCL) 및 내측 관절낭 부착부.\n[촉지 및 시술] 무릎을 살짝 구부린 상태에서 촉지되는 내측 관절 틈새와 MCL 중심부. 무릎 안쪽 시림, 체중 부하 시 꺾이는 느낌과 관절낭 염증을 완화합니다.",
          "en": "Medial joint line gap and MCL capsular attachment; relieves medial weight-bearing pain and capsular inflammation."
        }
      },
      {
        "code": "T4",
        "color": "#38bdf8",
        "x": 41.7,
        "y": 67.8,
        "role": {
          "ko": "관절낭·인대점",
          "en": "Capsule & Ligament Target"
        },
        "name": {
          "ko": "T4: 외측 관절간극 관절포 (Lateral Joint Line Capsule)",
          "en": "T4: Lateral Joint Line Capsule"
        },
        "desc": {
          "ko": "[표적 해부] 대퇴골 외측과와 경골 외측과 사이 외측 관절간극(Lateral Joint Line)의 외측 관절포 및 외측측부인대(LCL) 전방 경계.\n[촉지 및 시술] 무릎 바깥쪽 슬개골 외하방 관절 틈새. 내측 무릎 통증으로 인한 보상성 외측 하중 불균형과 슬관절 내·외측 장력 밸런스를 함께 교정합니다.",
          "en": "Lateral joint line capsule and anterior LCL border; balances compensatory lateral knee tension alongside medial pes anserine decompression."
        }
      }
    ],
    "anatomicalLabels": [
      "Pes Anserinus (Sartorius/Gracilis/Semitendinosus)",
      "Saphenous Nerve",
      "Vastus Medialis",
      "Infrapatellar Branch"
    ],
    "rifeFreq": 727,
    "searchKeywords": "거위발 점액낭염 / 복재신경 유착 Pes Anserine Bursitis / Saphenous Nerve Entrapment 무릎 내측 하방 통증, 쪼그려 앉았다 일어나기 힘듦, 계단 오르내릴 때 무릎 내측 통증. Anteromedial inferior knee pain, difficulty standing from squatting, medial knee pain climbing/descending stairs. 무릎, 발목 및 족부 질환 Knee, Ankle & Foot Disorders"
  },
  {
    "id": 34,
    "catId": "knee_foot",
    "catNum": 5,
    "category": {
      "ko": "무릎, 발목 및 족부 질환",
      "en": "Knee, Ankle & Foot Disorders"
    },
    "mechanism": {
      "ko": "힘줄견인",
      "en": "[TTP] Tendon/Periosteal Traction Pain"
    },
    "mechTags": [
      "tendon"
    ],
    "title": {
      "ko": "비복근 / 가자미근 힘줄견인통 / 아킬레스건염",
      "en": "Gastrocnemius / Soleus TTP / Achilles Tendinopathy"
    },
    "symptoms": {
      "ko": "종아리 및 발뒤꿈치/아킬레스건 부위 통증, 걸을 때 절뚝 거림.",
      "en": "Calf and heel/Achilles tendon region pain, limping during walking."
    },
    "pathophysiology": {
      "ko": "비복근 내측두/외측두 및 가자미근의 힘줄견인으로 공통 힘줄(Achilles tendon) 부착부에 염증성 견인 통증 유발.",
      "en": "TTPs in medial/lateral heads of gastrocnemius and soleus induce inflammatory traction pain at common Achilles tendon attachment."
    },
    "targetTissues": {
      "ko": "비복근 내측두/외측두, 가자미근(Soleus).",
      "en": "Gastrocnemius (medial/lateral heads), Soleus."
    },
    "palpation": {
      "ko": "슬와 주름 하방 비복근 기시부 및 근복, 종아리 중간 높이 지그시 깊은 압통점.",
      "en": "Gastrocnemius origins/bellies below popliteal crease, and deep tender points at mid-calf level."
    },
    "clinicalCase": {
      "ko": "보행 시 종아리 당김과 발뒤꿈치 아킬레스건 부착부 통증으로 딛기 어렵던 비복근 건 견인통 사례. 대퇴골 과부 비복근 내측두 기시부 및 가자미근 근건 이행부에 NovaCell Therapy를 통전하여 건막 장력을 이완하고 발뒤꿈치 착지 통증 완치.",
      "en": "Calf-to-posterior knee pain since military training 6 years ago. Resolved following NovaCell TTP treatment at gastrocnemius medial head origin."
    },
    "diagram": "images/diagrams/diagram_34.png",
    "targets": [
      {
        "code": "T1",
        "color": "#ff334b",
        "x": 38.6,
        "y": 22.2,
        "role": {
          "ko": "제1 핵심 치료점",
          "en": "Primary Clinical Target"
        },
        "name": {
          "ko": "T1: 슬와 하방 비복근 내측두(Gastrocnemius Medial Head) 기시부·근복점",
          "en": "T1: Gastrocnemius Medial Head Proximal Belly (TrP 1)"
        },
        "desc": {
          "ko": "[표적 해부] 오금 주름 직하방 내측 종아리 비복근 내측두 근복 및 경골신경 분지.\n[촉지 및 시술] 밤에 종아리에 쥐가 나거나 발바닥 아치까지 당기는 통증의 최우선 타깃입니다.",
          "en": "Gastrocnemius medial head belly just below medial popliteal crease."
        }
      },
      {
        "code": "T2",
        "color": "#00f5d4",
        "x": 63.7,
        "y": 38.2,
        "role": {
          "ko": "신경 주행·분지점",
          "en": "Nerve Pathway Target"
        },
        "name": {
          "ko": "T2: 슬와 하방 비복근 외측두(Gastrocnemius Lateral Head) 및 비복신경 고랑점",
          "en": "T2: Gastrocnemius Lateral Head & Midline Sural Nerve Groove"
        },
        "desc": {
          "ko": "[표적 해부] 비복근 외측두 상부 근복 및 내·외측두 사이 중앙 고랑(비복신경 Sural nerve 주행선).\n[촉지 및 시술] 종아리 상부 외측 및 정중앙 압통점. 보행 시 종아리 당김을 풀어줍니다.",
          "en": "Gastrocnemius lateral head and midline inter-belly groove over sural nerve."
        }
      },
      {
        "code": "T3",
        "color": "#ff9f43",
        "x": 60.0,
        "y": 55.9,
        "role": {
          "ko": "심부 근복·근막점",
          "en": "Deep Myofascial Trigger Point"
        },
        "name": {
          "ko": "T3: 종아리 중간 심부 가자미근(Soleus) 근복 및 아킬레스 근건이행부점",
          "en": "T3: Mid-Calf Deep Soleus Belly (승산혈) & Myotendinous Junction"
        },
        "desc": {
          "ko": "[표적 해부] 비복근 두 갈래가 갈라지는 종아리 정중앙 심부 가자미근(Soleus TrP 1, 승산혈) 및 아킬레스건 이행부.\n[촉지 및 시술] 발뒤꿈치 바닥과 아킬레스건으로 직결되는 핵심 심부 압통점입니다.",
          "en": "Deep soleus muscle belly at mid-calf gastrocnemius junction (BL57) and Achilles junction."
        }
      },
      {
        "code": "T4",
        "color": "#38bdf8",
        "x": 73.0,
        "y": 47.0,
        "role": {
          "ko": "힘줄·골막 부착점",
          "en": "Tendon & Periosteal Target"
        },
        "name": {
          "ko": "T4: 종골 융기(Calcaneal Tuberosity) 아킬레스건 정지부 및 후종골 점액낭 골막 접촉점",
          "en": "T4: Calcaneal Tuberosity Achilles Insertion Periosteal Contact"
        },
        "desc": {
          "ko": "[표적 해부] 발뒤꿈치 뒤쪽 종골 융기 아킬레스건 골막 착점 및 건주위 조직.\n[촉지 및 시술] 아킬레스건염 및 종골 부착부 골막 견인통(HP-PF-03)을 직접 진정시킵니다.",
          "en": "Achilles tendon periosteal insertion at posterior calcaneal tuberosity."
        }
      }
    ],
    "anatomicalLabels": [
      "Gastrocnemius (Medial Head)",
      "Soleus",
      "Achilles Tendon",
      "Tibial Nerve"
    ],
    "rifeFreq": 880,
    "searchKeywords": "비복근 / 가자미근 힘줄견인통 / 아킬레스건염 Gastrocnemius / Soleus TTP / Achilles Tendinopathy 종아리 및 발뒤꿈치/아킬레스건 부위 통증, 걸을 때 절뚝 거림. Calf and heel/Achilles tendon region pain, limping during walking. 무릎, 발목 및 족부 질환 Knee, Ankle & Foot Disorders"
  },
  {
    "id": 35,
    "catId": "knee_foot",
    "catNum": 5,
    "category": {
      "ko": "무릎, 발목 및 족부 질환",
      "en": "Knee, Ankle & Foot Disorders"
    },
    "mechanism": {
      "ko": "신경유착 / 힘줄견인",
      "en": "[ / TTP] Nerve Entrapment & Tendon Traction"
    },
    "mechTags": [
      "nerve",
      "tendon"
    ],
    "title": {
      "ko": "심비골신경 유착증 / 장지신근 힘줄견인증",
      "en": "Deep Peroneal Nerve Entrapment / Extensor Digitorum Longus TTP"
    },
    "symptoms": {
      "ko": "발목을 접질린 후 발목 관절 속 애매한 통증, 엄지-2번째 발가락 사이 물갈퀴 공간 감각 저하.",
      "en": "Vague pain deep within ankle joint after ankle sprain, sensory reduction in 1st webspace between digits 1 and 2."
    },
    "pathophysiology": {
      "ko": "장지신근(EDL)의 과긴장으로 심비골신경이 아랫다리 전 방구획에서 유착되어 발목 속 통증 및 감각 저하 유발.",
      "en": "Hypertonicity of extensor digitorum longus (EDL) entraps deep peroneal nerve in anterior compartment, causing ankle joint pain and dysesthesia."
    },
    "targetTissues": {
      "ko": "장지신근(EDL · 경골 외측과·비골 전면 기시 / 제2~5발가락 배측 정지), 전경골근(TA · 경골 외측과·외측면 기시 / 내측 설상골·제1중족골 기저부 정지), 발목 전면 신근지대 터널, 외과 전하방 단지신근(EDB) 기시부, 제1·2중족골간 심비골신경 내측종말지.",
      "en": "Extensor Digitorum Longus (EDL), Tibialis Anterior (TA), anterior ankle extensor retinaculum tunnel, sinus tarsi / EDB origin & lateral terminal branch, and 1st-2nd intermetatarsal medial terminal branch."
    },
    "palpation": {
      "ko": "① 경골조면 하방 3FB 전경골근·장지신근 사이 심비골신경 분기점 ② 발목 전면 신근지대(전방 족근관) ③ 외과 전하방 족근동(Sinus Tarsi)·단지신근(EDB) 기시부 ④ 제1·2중족골간 발등 배측 내측종말지.",
      "en": "3FB below tibial tuberosity between TA and EDL, anterior ankle extensor retinaculum, sinus tarsi / EDB origin, and 1st-2nd intermetatarsal web space."
    },
    "clinicalCase": {
      "ko": "발목 염좌 이후 수개월간 지속된 발목 관절 속 먹먹한 통증 및 엄지-2지 사이 저림 사례. 전경골 하퇴 장지신근(EDL) 근복 및 족관절 전방 신경 관통부에 NovaCell Therapy를 적용하여 심비골신경 유착을 해소하고 가벼운 러닝 가능 회복.",
      "en": "20yo soldier with persistent deep ankle pain for 7 months post-sprain. Running resumed after treating EDL muscle belly tender point with NovaCell therapy."
    },
    "diagram": "images/diagrams/diagram_35.png",
    "targets": [
      {
        "code": "T1",
        "color": "#ff334b",
        "x": 48.4,
        "y": 34.8,
        "role": {
          "ko": "주 신경포착점",
          "en": "Primary Nerve Entrapment"
        },
        "name": {
          "ko": "T1: 경골조면 하방 장지신근(EDL)·전경골근 근복 및 심비골신경 분기점",
          "en": "T1: Below Tibial Tuberosity · EDL, TA Belly & Deep Peroneal Nerve"
        },
        "desc": {
          "ko": "[표적 해부] 경골조면 하방 3FB(약 5~6cm) 전경골근(TA)과 장지신근(EDL) 사이 근막 고랑으로 심비골신경이 진입·분기하는 근위 포착점.\n[촉지 및 시술] 정강이 앞바깥쪽 전경골근 외연과 장지신근 사이의 깊은 압통 고랑. 정강이 전면 뻐근함과 발등·발가락 배측으로 뻗치는 당김을 원천 해소합니다.",
          "en": "Proximal entrapment site 3FB below the tibial tuberosity between TA and EDL where the deep peroneal nerve enters the anterior compartment."
        }
      },
      {
        "code": "T2",
        "color": "#00f5d4",
        "x": 49.4,
        "y": 63.3,
        "role": {
          "ko": "신경 터널·지대점",
          "en": "Retinaculum Tunnel Target"
        },
        "name": {
          "ko": "T2: 발목 전면 신근지대 · 심비골신경 터널 (Anterior Ankle Extensor Retinaculum)",
          "en": "T2: Anterior Ankle Extensor Retinaculum · Nerve Tunnel"
        },
        "desc": {
          "ko": "[표적 해부] 발목 전면 하신근지대(Inferior Extensor Retinaculum) 아래 장지신근·장무지신근 힘줄과 함께 통과하는 전방 족근관(심비골신경 터널).\n[촉지 및 시술] 발목 앞주름 정중앙 신근건 사이 오목한 터널 부위. 꽉 끼는 신발·구두 착용이나 족배굴곡 시 발등 앞쪽이 찌릿하고 조이는 증상을 즉각 감압합니다.",
          "en": "Anterior tarsal tunnel beneath the inferior extensor retinaculum; directly decompresses deep peroneal nerve entrapment at the ankle crease."
        }
      },
      {
        "code": "T3",
        "color": "#ff9f43",
        "x": 45.6,
        "y": 67.5,
        "role": {
          "ko": "힘줄·골막 부착점",
          "en": "Tendon & Origin Target"
        },
        "name": {
          "ko": "T3: 외과 전하방 · 단지신근(EDB) 기시부 (Sinus Tarsi · Lateral Terminal Branch)",
          "en": "T3: Sinus Tarsi · EDB Origin & Lateral Terminal Branch"
        },
        "desc": {
          "ko": "[표적 해부] 발목 바깥쪽 복숭아뼈(외과) 전하방 족근동(Sinus Tarsi)의 단지신근(EDB) 기시부 및 심비골신경 외측종말지 (정지: 제1~4발가락 배측 신근건막).\n[촉지 및 시술] 외과 앞아래 오목한 족근동 함요처. 발등 바깥쪽 둔통과 보행 시 발목 전외측 시큰거림을 해소합니다.",
          "en": "EDB origin at the sinus tarsi anteroinferior to the lateral malleolus with the lateral terminal branch of the deep peroneal nerve."
        }
      },
      {
        "code": "T4",
        "color": "#38bdf8",
        "x": 53.8,
        "y": 81.5,
        "role": {
          "ko": "신경 주행·분지점",
          "en": "Distal Terminal Branch Target"
        },
        "name": {
          "ko": "T4: 제1·2중족골간 배측 · 내측종말지 (1st~2nd Intermetatarsal Space)",
          "en": "T4: 1st~2nd Intermetatarsal Space · Medial Terminal Branch"
        },
        "desc": {
          "ko": "[표적 해부] 엄지발가락과 둘째발가락 사이 제1·2중족골간 배측 공간을 지배하는 심비골신경 내측종말지(Medial Terminal Branch) 및 족배동맥 인접부.\n[촉지 및 시술] 제1·2중족골 뼈 사이 발등 고랑(태충혈 인접). 엄지·둘째발가락 사이 저림, 감각 이상 및 발등 말단 찌릿함을 마무리 해소합니다.",
          "en": "Medial terminal sensory branch of the deep peroneal nerve in the 1st-2nd intermetatarsal web space; relieves numbness and tingling between the 1st and 2nd toes."
        }
      }
    ],
    "anatomicalLabels": [
      "Deep Peroneal Nerve",
      "Extensor Digitorum Longus (EDL)",
      "Anterior Tarsal Tunnel",
      "Dorsalis Pedis"
    ],
    "rifeFreq": 787,
    "searchKeywords": "심비골신경 유착증 / 장지신근 힘줄견인증 Deep Peroneal Nerve Entrapment / Extensor Digitorum Longus TTP 발목을 접질린 후 발목 관절 속 애매한 통증, 엄지-2번째 발가락 사이 물갈퀴 공간 감각 저하. Vague pain deep within ankle joint after ankle sprain, sensory reduction in 1st webspace between digits 1 and 2. 무릎, 발목 및 족부 질환 Knee, Ankle & Foot Disorders"
  },
  {
    "id": 36,
    "catId": "knee_foot",
    "catNum": 5,
    "category": {
      "ko": "무릎, 발목 및 족부 질환",
      "en": "Knee, Ankle & Foot Disorders"
    },
    "mechanism": {
      "ko": "힘줄견인",
      "en": "[TTP] Tendon/Periosteal Traction Pain"
    },
    "mechTags": [
      "tendon"
    ],
    "title": {
      "ko": "후경골근 증후군 (Tibialis Posterior TTP)",
      "en": "Tibialis Posterior Syndrome (4-Point Periosteal & Tarsal Tunnel Protocol)"
    },
    "symptoms": {
      "ko": "발목 내측 및 내측 복사뼈 뒤쪽 통증, 평발 변화, 아침에 내측 족저궁 시림.",
      "en": "Medial ankle and posterior medial malleolus pain, flatfoot progression, morning medial plantar arch coldness/aching."
    },
    "pathophysiology": {
      "ko": "후경골근의 미세손상 및 등장성 수축으로 주상골 정지부 골막 자극(힘줄견인/골막염) 유발.",
      "en": "Micro-damage and isotonic contraction of tibialis posterior induces periostitis (TTP) at navicular insertion."
    },
    "targetTissues": {
      "ko": "후경골근(Tibialis Posterior · 기시 ① 경골 후면 · 기시 ② 비골 상부 내측면·골간막 / 주 정지: 주상골 조면, 보조 정지: 입방골·설상골 기저부·제2~4중족골 기저부), 내과 후하방 족근관(굴근지대)·경골신경 및 내측족저신경.",
      "en": "Tibialis Posterior (Origin 1: posterior tibia, Origin 2: proximal medial fibula & interosseous membrane; Main Insertion: navicular tuberosity, secondary slips: cuboid, cuneiforms, bases of 2nd-4th metatarsals), tarsal tunnel / flexor retinaculum & tibial/medial plantar nerve."
    },
    "palpation": {
      "ko": "① 하퇴 중간 경골 내측연 후방 후경골근 심부 근복 ② 내과 후하방 족근관·굴근지대 ③ 주상골 조면 정지부 & 내측족저신경 ④ 비골 내측면 상부 후경골근 근위 기시부.",
      "en": "Mid-distal posteromedial tibia deep tibialis posterior belly, posteroinferior medial malleolus tarsal tunnel, navicular tuberosity insertion, and proximal medial fibula origin."
    },
    "clinicalCase": {
      "ko": "발목 내측 복사뼈 뒤쪽 통증과 아침 첫 보행 시 발바닥 내측 당김을 호소하던 후경골근 증후군 사례. 종아리 심부 후경골근 근복 및 내과 후방 신경 홈에 NovaCell Therapy를 적용하여 족궁(아치)의 건 견인력을 이완시키고 보행 편안함 회복.",
      "en": "Flatfoot progression and post-medial malleolar pain since sprain 5 years ago. Improved after treating mid-calf tibialis posterior belly with NovaCell therapy."
    },
    "diagram": "images/diagrams/diagram_36.png",
    "targets": [
      {
        "code": "T1",
        "color": "#ff334b",
        "x": 48.9,
        "y": 46.7,
        "role": {
          "ko": "심부 근복·근막점",
          "en": "Deep Muscle Belly Target"
        },
        "name": {
          "ko": "T1: 하퇴 중간 경골 내측연 후방 · 후경골근 심부 근복",
          "en": "T1: Mid-Distal Posteromedial Tibia · Deep Tibialis Posterior Belly"
        },
        "desc": {
          "ko": "[표적 해부] 하퇴 중간~원위부 경골 내측연 바로 뒤쪽 심부에 위치한 후경골근(Tibialis Posterior) 근복 및 경골 후면 골막 부착선.\n[촉지 및 시술] 정강이 안쪽 뼈(경골 내측연) 바로 뒤쪽 틈새로 심부 접근. 장시간 보행·달리기 시 정강이 안쪽 뻐근함(신스플린트)과 발바닥 아치 피로통을 해소합니다.",
          "en": "Deep tibialis posterior belly right behind the mid-distal posteromedial tibial border; relieves medial tibial stress pain and deep calf tightness."
        }
      },
      {
        "code": "T2",
        "color": "#00f5d4",
        "x": 48.5,
        "y": 66.5,
        "role": {
          "ko": "주 신경포착점",
          "en": "Tarsal Tunnel Entrapment"
        },
        "name": {
          "ko": "T2: 내과 후하방 족근관(Tarsal Tunnel) · 굴근지대 & 경골신경",
          "en": "T2: Posteroinferior Medial Malleolus · Flexor Retinaculum & Tibial Nerve"
        },
        "desc": {
          "ko": "[표적 해부] 발목 안쪽 복숭아뼈(내과) 후하방 굴근지대(Flexor Retinaculum) 아래로 후경골근건과 후경골신경(Tibial Nerve)이 통과하는 족근관 터널.\n[촉지 및 시술] 내과 뒤아래 오목한 족근관 입구. 발목 내측 저림, 발바닥 화끈거림 및 후경골건 활막염을 동시에 감압합니다.",
          "en": "Tarsal tunnel beneath the flexor retinaculum posteroinferior to the medial malleolus; decompresses both the posterior tibial tendon and tibial nerve."
        }
      },
      {
        "code": "T3",
        "color": "#ff9f43",
        "x": 47.4,
        "y": 72.1,
        "role": {
          "ko": "힘줄·골막 부착점",
          "en": "Tendon Insertion & Nerve Target"
        },
        "name": {
          "ko": "T3: 주상골 조면(Navicular Tuberosity) · 정지부 & 내측족저신경",
          "en": "T3: Navicular Tuberosity · Insertion & Medial Plantar Nerve"
        },
        "desc": {
          "ko": "[표적 해부] 발 안쪽 아치 정점의 주상골 조면(Navicular Tuberosity) 후경골근 주 정지부(및 입방골·설상골·제2~4중족골 기저부 확장건)와 인접 내측족저신경(Medial Plantar Nerve) 주행로.\n[촉지 및 시술] 내과 전하방 약 2.5~3cm 만져지는 볼록한 주상골 뼈 밑면 경계. 무너진 내측 아치(평발성 통증)와 디딜 때 발 안쪽 찌릿함을 직접 해결합니다.",
          "en": "Primary tibialis posterior insertion at the navicular tuberosity adjacent to the medial plantar nerve; restores medial arch support and resolves medial midfoot pain."
        }
      },
      {
        "code": "T4",
        "color": "#38bdf8",
        "x": 53.6,
        "y": 30.1,
        "role": {
          "ko": "기시부·근위 제어점",
          "en": "Proximal Origin & Tibial Nerve Target"
        },
        "name": {
          "ko": "T4: 비골 내측면 상부 후경골근 근위 기시부 & 골간막",
          "en": "T4: Proximal Medial Fibula & Interosseous Membrane · Origin & Tibial Nerve"
        },
        "desc": {
          "ko": "[표적 해부] 비골 근위부 내측면과 경·비골 사이 골간막(Interosseous Membrane)의 후경골근 최상부 기시부 및 근위 경골신경 분지.\n[촉지 및 시술] 종아리 상부 외후방 비골두 아래 심부 기시부. 후경골근 전체의 근위부 장력과 종아리 깊숙한 당김을 원천적으로 이완합니다.",
          "en": "Proximal tibialis posterior origin along the upper medial fibula and interosseous membrane adjacent to the tibial nerve; releases full-length tendon tension."
        }
      }
    ],
    "anatomicalLabels": [
      "Tibialis Posterior",
      "Medial Malleolus",
      "Navicular Tuberosity",
      "Tibial Nerve"
    ],
    "rifeFreq": 727,
    "searchKeywords": "후경골근 증후군 (Tibialis Posterior TTP) Tibialis Posterior Syndrome (Tibialis Posterior TTP) 발목 내측 및 내측 복사뼈 뒤쪽 통증, 평발 변화, 아침에 내측 족저궁 시림. Medial ankle and posterior medial malleolus pain, flatfoot progression, morning medial plantar arch coldness/aching. 무릎, 발목 및 족부 질환 Knee, Ankle & Foot Disorders"
  },
  {
    "id": 37,
    "catId": "knee_foot",
    "catNum": 5,
    "category": {
      "ko": "무릎, 발목 및 족부 질환",
      "en": "Knee, Ankle & Foot Disorders"
    },
    "mechanism": {
      "ko": "힘줄견인",
      "en": "[TTP] Tendon/Periosteal Traction Pain"
    },
    "mechTags": [
      "tendon"
    ],
    "title": {
      "ko": "단비골근 힘줄견인증 / 발목 외측 통증",
      "en": "Peroneus Brevis TTP / Lateral Ankle Pain (4-Point Protocol)"
    },
    "symptoms": {
      "ko": "발목 외측 복사뼈 뒤쪽 및 5번 중족골 기저부 통증, 양반 다리 시 발목 바깥쪽 통증.",
      "en": "Pain posterior to lateral malleolus and at 5th metatarsal base, lateral ankle pain during cross-legged sitting."
    },
    "pathophysiology": {
      "ko": "단비골근의 힘줄견인로 5번 중족골 기저부 정지부 골막 자극 유발.",
      "en": "TTP in peroneus brevis induces periosteal irritation at insertion on 5th metatarsal base."
    },
    "targetTissues": {
      "ko": "단비골근(Peroneus Brevis · 심층 · 기시: 비골 외측면 중·하부 2/3 / 정지: 제5중족골 기저부 경상돌기), 장비골근(Peroneus Longus · 표층 · 기시: 비골두·비골 외측면 상부 2/3 / 정지: 입방골 하면 경유 → 내측 설상골·제1중족골 기저부), 외과 전하방 전거비인대(ATFL)·직하방 종비인대(CFL), 비골터널 총비골신경 및 천비골신경.",
      "en": "Peroneus Brevis (deep, inserting at 5th metatarsal base tuberosity), Peroneus Longus (superficial, originating at fibular head), anterior talofibular ligament (ATFL), calcaneofibular ligament (CFL), and common/superficial peroneal nerve."
    },
    "palpation": {
      "ko": "① 비골 하부 1/3 단비골근 근복 및 천비골신경 출구 ② 제5중족골 기저부 경상돌기 단비골근 정지부 ③ 외과 전하방 전거비인대(ATFL) 및 직하방 종비인대(CFL) ④ 비골두 하방 장비골근 기시부 & 비골터널.",
      "en": "Distal 1/3 fibula peroneus brevis belly & superficial peroneal nerve exit, tuberosity of 5th metatarsal base, ATFL & CFL around the lateral malleolus, and inferior fibular head peroneal tunnel."
    },
    "clinicalCase": {
      "ko": "보행 또는 양반다리 시 발목 외측 복사뼈 뒤쪽과 제5중족골 기저부에 통증이 유발되던 단비골근 건 견인통 사례. 하퇴 외측 비골근 근복 및 제5중족골 부착부에 NovaCell Therapy를 통전하여 외측 건막 긴장을 소거하고 양반다리 시 통증 완쾌.",
      "en": "Pain from behind lateral malleolus to anterior ankle after march. Pain during cross-legged sitting resolved after peroneus brevis belly NovaCell treatment."
    },
    "diagram": "images/diagrams/diagram_37.png",
    "targets": [
      {
        "code": "T1",
        "color": "#ff334b",
        "x": 48.2,
        "y": 55.6,
        "role": {
          "ko": "주 신경포착점",
          "en": "Primary Nerve & Belly Target"
        },
        "name": {
          "ko": "T1: 비골 하부 1/3 단비골근 근복 & 천비골신경 출구",
          "en": "T1: Distal 1/3 Fibula · Peroneus Brevis Belly & Superficial Peroneal Nerve"
        },
        "desc": {
          "ko": "[표적 해부] 비골 외측면 하부 1/3 심층 단비골근(Peroneus Brevis) 근복과 천비골신경(Superficial Peroneal Nerve)이 근막을 뚫고 나오는 포착 출구.\n[촉지 및 시술] 외과(바깥쪽 복숭아뼈) 위쪽 약 8~10cm 비골 외측면 압통점. 하퇴 바깥쪽 뻐근함과 발등 외측 저림·시림을 해소합니다.",
          "en": "Distal third of the fibula where the superficial peroneal nerve pierces the crural fascia over the peroneus brevis belly."
        }
      },
      {
        "code": "T2",
        "color": "#00f5d4",
        "x": 64.2,
        "y": 79.9,
        "role": {
          "ko": "힘줄·골막 부착점",
          "en": "Tendon Insertion Target"
        },
        "name": {
          "ko": "T2: 제5중족골 기저부 경상돌기 · 단비골근 정지부",
          "en": "T2: Tuberosity of 5th Metatarsal Base · Peroneus Brevis Insertion"
        },
        "desc": {
          "ko": "[표적 해부] 발 바깥쪽 중족부 볼록한 제5중족골 기저부 경상돌기(Tuberosity of 5th Metatarsal Base)의 단비골근 정지건 골막 부착부.\n[촉지 및 시술] 새끼발가락 쪽 발 날을 따라 뒤로 만져지는 가장 뚜렷한 뼈 돌출부. 보행 시 발 바깥쪽 가장자리가 콕콕 찌르고 시큰거리는 힘줄견인통을 직접 해결합니다.",
          "en": "Primary insertion of the peroneus brevis tendon at the tuberosity of the 5th metatarsal base; directly resolves lateral midfoot traction pain."
        }
      },
      {
        "code": "T3",
        "color": "#ff9f43",
        "x": 49.1,
        "y": 69.2,
        "role": {
          "ko": "관절낭·인대점",
          "en": "Lateral Ligament Target"
        },
        "name": {
          "ko": "T3: 외과 전하방 전거비인대(ATFL) & 직하방 종비인대(CFL)",
          "en": "T3: Lateral Malleolus · ATFL (Fibula to Talus) & CFL (Fibula to Calcaneus)"
        },
        "desc": {
          "ko": "[표적 해부] 발목 바깥쪽 외과(복숭아뼈) 전하방의 ① 전거비인대(ATFL · 외과 → 거골) 및 외과 직하방의 ② 종비인대(CFL · 외과 → 종골)와 비골건지대.\n[촉지 및 시술] 외과 앞아래 오목한 인대 부착부(ATFL)와 외과 바로 아래 종골 방향 인대선(CFL)을 순차적으로 이완하여 발목 접질림 후 만성 외측 불안정증과 시큰거림을 회복합니다.",
          "en": "ATFL (anteroinferior lateral malleolus to talus) and CFL (inferior lateral malleolus to calcaneus); stabilizes chronic lateral ankle sprain sequelae."
        }
      },
      {
        "code": "T4",
        "color": "#38bdf8",
        "x": 45.6,
        "y": 25.5,
        "role": {
          "ko": "기시부·신경터널점",
          "en": "Proximal Origin & Fibular Tunnel"
        },
        "name": {
          "ko": "T4: 비골두 하방 장비골근 기시부 & 비골터널 (총비골신경)",
          "en": "T4: Inferior Fibular Head · Peroneus Longus Origin & Common Peroneal Nerve"
        },
        "desc": {
          "ko": "[표적 해부] 무릎 외하방 비골두 직하방의 표층 장비골근(Peroneus Longus) 기시부 건막 아치와 그 아래를 통과하는 총비골신경(Common Peroneal Nerve) 비골터널.\n[촉지 및 시술] 비골두 바로 아래 1~2cm 비골경부 외측. 장비골근의 근위부 과긴장과 총비골신경 압박을 풀어 하퇴 외측 전체의 장력을 낮춥니다.",
          "en": "Proximal peroneus longus origin and fibular tunnel right below the fibular head where the common peroneal nerve winds around the fibular neck."
        }
      }
    ],
    "anatomicalLabels": [
      "Peroneus Brevis",
      "Lateral Malleolus",
      "5th Metatarsal Base",
      "Superficial Peroneal Nerve"
    ],
    "rifeFreq": 880,
    "searchKeywords": "단비골근 힘줄견인증 / 발목 외측 통증 Peroneus Brevis TTP / Lateral Ankle Pain 발목 외측 복사뼈 뒤쪽 및 5번 중족골 기저부 통증, 양반 다리 시 발목 바깥쪽 통증. Pain posterior to lateral malleolus and at 5th metatarsal base, lateral ankle pain during cross-legged sitting. 무릎, 발목 및 족부 질환 Knee, Ankle & Foot Disorders"
  },
  {
    "id": 38,
    "catId": "knee_foot",
    "catNum": 5,
    "category": {
      "ko": "무릎, 발목 및 족부 질환",
      "en": "Knee, Ankle & Foot Disorders"
    },
    "mechanism": {
      "ko": "신경유착/ 힘줄견인",
      "en": "[ / TTP] Nerve Entrapment & Tendon Traction"
    },
    "mechTags": [
      "nerve",
      "tendon"
    ],
    "title": {
      "ko": "족저근막염 / 내측종골신경 유착",
      "en": "Plantar Fasciitis / Medial Calcaneal Nerve Entrapment (4-Point Protocol)"
    },
    "symptoms": {
      "ko": "아침에 자고 일어나 첫발 내딛을 때 발뒤꿈치 바닥에 전기 가 오듯 극심한 통증.",
      "en": "Excruciating electric shock-like heel pain upon taking first morning steps after waking."
    },
    "pathophysiology": {
      "ko": "내측종골신경이 굴근지대에서 유착되거나, 가자미근 (가자미근 근막 유착) 및 단지굴근/무지외전근 TTP 가 혼재되어 종골 바닥 골막염 유발.",
      "en": "Entrapment of medial calcaneal nerve under flexor retinaculum, or soleus c combined with flexor digitorum brevis / abductor hallucis TTP inducing calcaneal plantar periostitis."
    },
    "targetTissues": {
      "ko": "내과 하방 굴근지대·내측종골신경 및 박스터신경(Baxter's Nerve), 종골 내측결절 족저근막·무지외전근(AbH)·단족지굴근(FDB) 기시부, 족저근막 내측 세로 아치, 가자미근(Soleus) 및 아킬레스건 종골 부착부.",
      "en": "Flexor retinaculum & medial calcaneal / Baxter's nerve, medial calcaneal tubercle (plantar fascia, AbH & FDB origin), medial longitudinal arch & FDB belly, Achilles tendon calcaneal insertion & soleus chain."
    },
    "palpation": {
      "ko": "① 내과 하방 굴근지대·내측종골신경 포착점 ② 종골 내측결절 족저근막 기시부 ③ 족저근막 내측 세로 아치 & 단족지굴근 중앙점 ④ 아킬레스건 종골 부착부 & 가자미근 근위 사슬.",
      "en": "Flexor retinaculum medial calcaneal nerve exit, medial calcaneal tubercle plantar fascia origin, medial longitudinal arch & FDB belly, and Achilles calcaneal insertion."
    },
    "clinicalCase": {
      "ko": "아침 기상 후 첫발을 디딜 때 발뒤꿈치 바닥에 전기가 찌릿하며 딛기 힘들던 만성 족저근막염 사례. 내측 복사뼈 하방 굴근지대(Flexor Retinaculum) 및 내측종골신경 유착 부위에 NovaCell Therapy를 적용하여 신경 유착을 해소하고 첫발 통증 완전 소실.",
      "en": "32yo female with severe morning heel pain for 5 months. Improved after treating medial calcaneal nerve entrapment under flexor retinaculum with NovaCell probe."
    },
    "diagram": "images/diagrams/diagram_38.png",
    "targets": [
      {
        "code": "T1",
        "color": "#ff334b",
        "x": 44.4,
        "y": 57.9,
        "role": {
          "ko": "주 신경포착점",
          "en": "Primary Nerve Entrapment"
        },
        "name": {
          "ko": "T1: 내과 하방 굴근지대 · 내측종골신경 포착점 (Baxter's Nerve)",
          "en": "T1: Flexor Retinaculum · Medial Calcaneal & Baxter's Nerve"
        },
        "desc": {
          "ko": "[표적 해부] 발목 내과(안쪽 복숭아뼈) 후하방 굴근지대(Flexor Retinaculum)와 무지외전근(AbH) 근막 아래를 통과하는 내측종골신경(Medial Calcaneal Nerve) 및 박스터신경(Baxter's Nerve) 포착점.\n[촉지 및 시술] 내과 뒤아래 오목한 족근관 하연 압통점. 만성 발뒤꿈치 찌릿함과 야간 작열통을 유발하는 신경 유착을 원천 감압합니다.",
          "en": "Flexor retinaculum and deep abductor hallucis fascia where the medial calcaneal and Baxter's nerves are entrapped."
        }
      },
      {
        "code": "T2",
        "color": "#00f5d4",
        "x": 34.3,
        "y": 74.4,
        "role": {
          "ko": "힘줄·골막 부착점",
          "en": "Fascial Origin & Periosteal Target"
        },
        "name": {
          "ko": "T2: 종골 내측결절 · 족저근막 기시부 (AbH & FDB Origin)",
          "en": "T2: Medial Calcaneal Tubercle · Plantar Fascia, AbH & FDB Origin"
        },
        "desc": {
          "ko": "[표적 해부] 발뒤꿈치 뼈(종골) 바닥 앞안쪽 종골 내측결절(Medial Calcaneal Tubercle)의 족저근막(Plantar Fascia)·무지외전근(AbH)·단족지굴근(FDB) 공동 기시부 골막.\n[촉지 및 시술] 뒤꿈치 중앙에서 약간 안쪽 뼈 경계부 압통점. 아침 기상 후 첫 발을 디딜 때 찢어지는 듯한 뒤꿈치 통증의 제1 핵심 타깃입니다.",
          "en": "Primary origin of the plantar fascia, abductor hallucis, and flexor digitorum brevis at the medial calcaneal tubercle; key target for first-step morning heel pain."
        }
      },
      {
        "code": "T3",
        "color": "#ff9f43",
        "x": 57.5,
        "y": 76.7,
        "role": {
          "ko": "심부 근복·근막점",
          "en": "Arch Fascia & FDB Belly Target"
        },
        "name": {
          "ko": "T3: 족저근막 내측 세로 아치 & 단족지굴근 중앙점",
          "en": "T3: Medial Longitudinal Arch · Plantar Fascia & FDB Central Belly"
        },
        "desc": {
          "ko": "[표적 해부] 발바닥 내측 세로 아치(Medial Longitudinal Arch)를 지지하는 족저근막 내측 다발과 바로 위 심층 단족지굴근(FDB) 중앙 근복.\n[촉지 및 시술] 엄지발가락을 위로 젖혔을 때 발바닥 안쪽에 팽팽하게 도드라지는 띠(족저근막) 중앙부. 발바닥 전체의 당김과 아치 피로통을 부드럽게 이완합니다.",
          "en": "Central medial band of the plantar fascia and underlying FDB belly along the medial longitudinal arch; releases plantar tension and arch fatigue."
        }
      },
      {
        "code": "T4",
        "color": "#38bdf8",
        "x": 29.9,
        "y": 69.3,
        "role": {
          "ko": "기시부·근위 사슬점",
          "en": "Achilles & Soleus Proximal Chain"
        },
        "name": {
          "ko": "T4: 아킬레스건 종골 부착부 & 가자미근 근위 사슬",
          "en": "T4: Achilles Tendon Calcaneal Insertion & Soleus Chain"
        },
        "desc": {
          "ko": "[표적 해부] 종골 융기 후면의 아킬레스건 정지부 골막과 근위부 가자미근(Soleus · 기시: 경골 가자미근선·비골두 후면)에서 종골 골막을 통해 족저근막으로 이어지는 근막 사슬.\n[촉지 및 시술] 발뒤꿈치 뒤쪽 아킬레스건 부착 경계부와 종아리 하부. 아킬레스건-종골-족저근막 후방 사슬의 과긴장을 풀어 족저근막염 재발을 근본 차단합니다.",
          "en": "Achilles tendon insertion on the posterior calcaneus linked mechanically to the plantar fascia via the soleus chain; prevents recurrent heel traction."
        }
      }
    ],
    "anatomicalLabels": [
      "Plantar Fascia",
      "Medial Calcaneal Nerve",
      "Flexor Retinaculum",
      "Abductor Hallucis"
    ],
    "rifeFreq": 787,
    "searchKeywords": "족저근막염 / 내측종골신경 유착 Plantar Fasciitis / Medial Calcaneal Nerve Entrapment 아침에 자고 일어나 첫발 내딛을 때 발뒤꿈치 바닥에 전기 가 오듯 극심한 통증. Excruciating electric shock-like heel pain upon taking first morning steps after waking. 무릎, 발목 및 족부 질환 Knee, Ankle & Foot Disorders"
  },
  {
    "id": 39,
    "catId": "knee_foot",
    "catNum": 5,
    "category": {
      "ko": "무릎, 발목 및 족부 질환",
      "en": "Knee, Ankle & Foot Disorders"
    },
    "mechanism": {
      "ko": "신경유착",
      "en": "[신경유착] Nerve Entrapment"
    },
    "mechTags": [
      "nerve"
    ],
    "title": {
      "ko": "지간신경통 (Morton's Neuroma)",
      "en": "Morton's Neuroma (Forefoot Transverse Arch & Interdigital Nerve Protocol)"
    },
    "symptoms": {
      "ko": "3/4번 중족골두 사이 발바닥/발등으로 뻗치는 찌릿한 방사통, 걸을 때 발바닥 통증.",
      "en": "Radiating electric pain into plantar/dorsal aspects between 3rd/4th metatarsal heads, pain when walking."
    },
    "pathophysiology": {
      "ko": "내측/외측 족저신경 지간 가지가 심층횡중족인대 밑에서 유착/자극받아 발생.",
      "en": "Interdigital branches of medial/lateral plantar nerves entrapped/irritated beneath deep transverse metatarsal ligament."
    },
    "targetTissues": {
      "ko": "제3·4중족골두 사이 지간신경(모튼 신경종) 및 심층횡중족인대(Deep Transverse Metatarsal Ligament), 제2·3중족골두 사이 충양근·골간근, 모지내전근(Adductor Hallucis · 기시: 제3~5 MTP 인대 횡두·제2~4중족골 기저부 사두 / 정지: 엄지 근위지골 외측 기저부), 내과 후하방 족근관(내·외측 족저신경 분기점).",
      "en": "3rd-4th intermetatarsal space common digital nerve & deep transverse metatarsal ligament, 2nd-3rd intermetatarsal interossei & lumbricals, adductor hallucis (transverse & oblique heads), and tarsal tunnel medial/lateral plantar nerve bifurcation."
    },
    "palpation": {
      "ko": "① 제3·4중족골두 사이 지간신경(모튼 신경종) ② 제2·3중족골두 사이 충양근 & 골간근 ③ 전족부 횡아치 · 모지내전근 횡두 & 사두 ④ 내과 후하방 족근관 · 내·외측 족저신경 분기점.",
      "en": "3rd-4th intermetatarsal space (Morton's neuroma), 2nd-3rd intermetatarsal space (interossei & lumbricals), forefoot transverse arch (adductor hallucis), and tarsal tunnel plantar nerve bifurcation."
    },
    "clinicalCase": {
      "ko": "3번째와 4번째 발가락 사이 발바닥이 화끈거리고 자갈을 밟는 듯 찌릿하던 지간신경통(몰톤신경종) 사례. 발등 3-4 중족골두 사이 심층인대 부위에 NovaCell Therapy를 정밀 통전하여 신경 유착을 해소하고 보행 시 찌릿한 방사통 완치.",
      "en": "35yo female with electric plantar pain between 3rd/4th metatarsal heads. Radiating pain vanished after treating deep transverse metatarsal ligament via dorsal approach with NovaCell therapy."
    },
    "diagram": "images/diagrams/diagram_39.png",
    "targets": [
      {
        "code": "T1",
        "color": "#ff334b",
        "x": 56.6,
        "y": 37.9,
        "role": {
          "ko": "주 신경포착점",
          "en": "Primary Interdigital Entrapment"
        },
        "name": {
          "ko": "T1: 제3·4중족골두 사이 · 지간신경(모튼 신경종)",
          "en": "T1: 3rd-4th Intermetatarsal Space · Morton's Neuroma"
        },
        "desc": {
          "ko": "[표적 해부] 제3·4중족골두 사이 심층횡중족인대(Deep Transverse Metatarsal Ligament) 아래에서 내·외측 족저신경 분지가 합류·압박되는 모튼 신경종 최다 호발 포착점.\n[촉지 및 시술] 3·4번째 발가락 뿌리(발볼) 사이 뼈 틈새 압통점. 걸을 때 발바닥 앞쪽에 자갈을 밟는 듯한 이물감과 3·4지 찌릿한 방사통을 직접 감압합니다.",
          "en": "Primary Morton's neuroma entrapment beneath the deep transverse metatarsal ligament between the 3rd and 4th metatarsal heads."
        }
      },
      {
        "code": "T2",
        "color": "#00f5d4",
        "x": 50.6,
        "y": 35.8,
        "role": {
          "ko": "심부 근복·지간점",
          "en": "2nd-3rd Intermetatarsal Target"
        },
        "name": {
          "ko": "T2: 제2·3중족골두 사이 · 충양근 & 골간근",
          "en": "T2: 2nd-3rd Intermetatarsal Space · Interossei & Lumbricals"
        },
        "desc": {
          "ko": "[표적 해부] 제2·3중족골두 사이 지간신경 주행로와 심부 충양근(Lumbricals)·족저골간근(Plantar Interossei)의 과긴장·유착 부위.\n[촉지 및 시술] 2·3번째 중족골두 사이 발볼 오목한 틈새. 인접 지간 공간의 압력을 분산하고 제2·3지 저림 및 중족골통(Metatarsalgia)을 함께 해결합니다.",
          "en": "Interossei, lumbricals, and interdigital nerve in the 2nd-3rd intermetatarsal space; relieves adjacent forefoot compression and metatarsalgia."
        }
      },
      {
        "code": "T3",
        "color": "#ff9f43",
        "x": 55.9,
        "y": 47.4,
        "role": {
          "ko": "횡아치·심부 근막점",
          "en": "Forefoot Transverse Arch Target"
        },
        "name": {
          "ko": "T3: 전족부 횡아치 · 모지내전근 횡두 & 사두",
          "en": "T3: Forefoot Transverse Arch · Adductor Hallucis Transverse & Oblique Heads"
        },
        "desc": {
          "ko": "[표적 해부] 무너진 전족부 횡아치(Transverse Arch)를 가로지르는 모지내전근(Adductor Hallucis) 횡두(제3~5 MTP 인대 기시) 및 사두(제2~4중족골 기저부 기시 → 엄지 근위지골 외측 정지).\n[촉지 및 시술] 중족골두 바로 아래쪽 발바닥 중앙 심부 가로 근막선. 좁아진 중족골 간격을 넓히고 횡아치 탄성을 복원하여 지간신경 재압박을 방지합니다.",
          "en": "Transverse and oblique heads of adductor hallucis supporting the forefoot transverse arch; restores intermetatarsal spacing to prevent recurrent nerve compression."
        }
      },
      {
        "code": "T4",
        "color": "#38bdf8",
        "x": 44.3,
        "y": 73.0,
        "role": {
          "ko": "근위 신경분기점",
          "en": "Tarsal Tunnel Bifurcation Target"
        },
        "name": {
          "ko": "T4: 내과 후하방 족근관(Tarsal Tunnel) · 내·외측 족저신경 분기점",
          "en": "T4: Tarsal Tunnel · Medial & Lateral Plantar Nerve Bifurcation"
        },
        "desc": {
          "ko": "[표적 해부] 발목 내과 후하방 족근관(Tarsal Tunnel) 내에서 후경골신경이 내측·외측 족저신경으로 갈라지는 근위부 분기점(Double Crush 근위 병소).\n[촉지 및 시술] 발목 안쪽 복사뼈 뒤아래 굴근지대 하부. 전족부 지간신경으로 내려가는 상류 신경 긴장을 풀어 만성·난치성 지간신경통의 근본 회복을 완성합니다.",
          "en": "Proximal bifurcation of medial and lateral plantar nerves inside the tarsal tunnel; relieves double-crush proximal neural tension feeding Morton's neuroma."
        }
      }
    ],
    "anatomicalLabels": [
      "Common Plantar Digital Nerve",
      "Deep Transverse Metatarsal Ligament",
      "3rd-4th Metatarsal Heads"
    ],
    "rifeFreq": 727,
    "searchKeywords": "지간신경통 (Morton's Neuroma) Morton's Neuroma 3/4번 중족골두 사이 발바닥/발등으로 뻗치는 찌릿한 방사통, 걸을 때 발바닥 통증. Radiating electric pain into plantar/dorsal aspects between 3rd/4th metatarsal heads, pain when walking. 무릎, 발목 및 족부 질환 Knee, Ankle & Foot Disorders"
  },
  {
    "id": 40,
    "catId": "knee_foot",
    "catNum": 5,
    "category": {
      "ko": "무릎, 발목 및 족부 질환",
      "en": "Knee, Ankle & Foot Disorders"
    },
    "mechanism": {
      "ko": "힘줄견인",
      "en": "[TTP] Tendon/Periosteal Traction Pain"
    },
    "mechTags": [
      "tendon"
    ],
    "title": {
      "ko": "단무지굴근 힘줄견인통 / 엄지발가락 중족지절관절(MTP) 통증",
      "en": "Flexor Hallucis Brevis TTP / 1st MTP Joint Pain (4-Point Protocol)"
    },
    "symptoms": {
      "ko": "엄지발가락 1st MTP 관절 바닥쪽/내측 통증, 걸을 때 엄 지발가락을 발등 쪽으로 꺾으면 극심한 통증.",
      "en": "Plantar/medial pain at 1st MTP joint, severe pain when dorsiflexing great toe during gait."
    },
    "pathophysiology": {
      "ko": "단무지굴근 내측두의 등장성 수축으로 1st MTP 근위지골 기저부 골막 자극(힘줄견인) 발생.",
      "en": "Isotonic contraction of medial head of flexor hallucis brevis (FHB) induces periosteal irritation (TTP) at 1st MTP proximal phalanx base."
    },
    "targetTissues": {
      "ko": "단무지굴근(FHB · 기시: 입방골·외측 설상골 족저면 / 정지: 내·외측 종자골 → 엄지 근위지골 기저부), 제1중족골두 내측 관절낭(무지외반증) 및 내측 지신경, 모지내전근(Adductor Hallucis · 기시: 제2~4중족골 기저부 사두·제3~5 MTP 인대 횡두 / 정지: 외측 종자골·엄지 근위지골 외측 기저부).",
      "en": "Flexor Hallucis Brevis (FHB), medial & lateral sesamoid bones, medial 1st MTP capsule (bunion) & medial plantar digital nerve, and adductor hallucis oblique/transverse heads."
    },
    "palpation": {
      "ko": "① 제1중족지절관절(1st MTP) 근위 2FB 단무지굴근 내측두 근복 ② 제1중족골두 바닥 내·외측 종자골 정지부 ③ 무지외반증 제1중족골두 내측 관절낭 & 모지외전근건 ④ 제1·2중족골 사이 모지내전근 사두 이완점.",
      "en": "2FB proximal to 1st MTP (FHB medial head belly), medial & lateral sesamoid bones beneath 1st metatarsal head, medial 1st MTP bunion capsule, and 1st-2nd intermetatarsal adductor hallucis oblique head."
    },
    "clinicalCase": {
      "ko": "엄지발가락 밑바닥(1st MTP 관절) 통증으로 지면을 차고 나가지 못하던 단무지굴근 건 견인통 사례. MTP 관절 2횡지 근위부 단무지굴근 내측두에 NovaCell Therapy를 적용하여 종자골 주변 골막 견인력을 이완함으로써 즉각적인 통증 소실 및 정상 보행.",
      "en": "42yo male unable to weight-bear on great toe after hiking. Immediate pain improvement after treating FHB medial head 2 FB proximal to MTP with NovaCell probe."
    },
    "diagram": "images/diagrams/diagram_40.png",
    "targets": [
      {
        "code": "T1",
        "color": "#ff334b",
        "x": 45.2,
        "y": 55.4,
        "role": {
          "ko": "심부 근복·근막점",
          "en": "FHB Deep Belly Target"
        },
        "name": {
          "ko": "T1: 제1중족지절관절(1st MTP) 근위 2FB · 단무지굴근 내측두 근복",
          "en": "T1: 2FB Proximal to 1st MTP · FHB Medial Head Deep Belly"
        },
        "desc": {
          "ko": "[표적 해부] 제1중족지절관절(1st MTP)에서 뒤쪽(근위부) 2FB 위치의 단무지굴근(Flexor Hallucis Brevis, FHB) 내측두 심부 근복 및 족저 신경혈관 인접부.\n[촉지 및 시술] 엄지발가락 볼 아래 발바닥 안쪽 아치 앞부분 깊은 근복 압통점. 보행 시 엄지발가락으로 땅을 밀어낼 때(Push-off) 발생하는 날카로운 통증의 핵심 근복을 이완합니다.",
          "en": "Deep medial head belly of flexor hallucis brevis 2FB proximal to the 1st MTP joint; relieves push-off pain under the big toe."
        }
      },
      {
        "code": "T2",
        "color": "#00f5d4",
        "x": 43.4,
        "y": 39.4,
        "role": {
          "ko": "힘줄·골막 부착점",
          "en": "Sesamoid & Tendon Insertion"
        },
        "name": {
          "ko": "T2: 제1중족골두 바닥 내·외측 종자골 · 단무지굴근 정지부",
          "en": "T2: Medial & Lateral Sesamoid Bones · FHB Tendon Insertion"
        },
        "desc": {
          "ko": "[표적 해부] 제1중족골두(엄지발가락 볼) 바닥면에 자리한 내·외측 종자골(Sesamoid Bones)과 단무지굴근(FHB) 정지건 부착부.\n[촉지 및 시술] 엄지발가락 밑 두 개의 작은 구슬처럼 만져지는 종자골 주변 경계. 종자골염(Sesamoiditis)과 하이힐·구두 착용 후 찌르는 듯한 엄지 볼 바닥 통증을 직접 해소합니다.",
          "en": "Medial and lateral sesamoid bones embedded in the FHB tendon under the 1st metatarsal head; resolves sesamoiditis and plantar forefoot pain."
        }
      },
      {
        "code": "T3",
        "color": "#ff9f43",
        "x": 38.8,
        "y": 35.2,
        "role": {
          "ko": "관절낭·신경포착점",
          "en": "Bunion Capsule & Digital Nerve"
        },
        "name": {
          "ko": "T3: 무지외반증(Bunion) 제1중족골두 내측 관절낭 & 모지외전근건",
          "en": "T3: Medial 1st MTP Capsule (Bunion) & Medial Digital Nerve"
        },
        "desc": {
          "ko": "[표적 해부] 무지외반증(Hallux Valgus)으로 돌출·마찰되는 제1중족골두 내측 관절낭, 모지외전근건 및 내측 족저 지신경(Medial Digital Nerve) 주행선.\n[촉지 및 시술] 엄지발가락 옆 가장 튀어나온 뼈(건막류) 내측 연부조직. 신발 접촉 시 화끈거리고 욱신거리는 내측 염증과 신경 자극을 진정시킵니다.",
          "en": "Medial 1st MTP capsule (bunion) and medial plantar digital nerve; calms shoe-friction burning and medial bunion inflammation."
        }
      },
      {
        "code": "T4",
        "color": "#38bdf8",
        "x": 49.2,
        "y": 36.8,
        "role": {
          "ko": "외측 견인·이완점",
          "en": "Adductor Hallucis Release Target"
        },
        "name": {
          "ko": "T4: 제1·2중족골 사이 · 모지내전근 사두 이완점",
          "en": "T4: 1st-2nd Intermetatarsal Space · Adductor Hallucis Oblique Head"
        },
        "desc": {
          "ko": "[표적 해부] 제1·2중족골 사이 공간에서 외측 종자골과 엄지 근위지골 외측 기저부로 붙어 엄지를 바깥쪽으로 당기는 모지내전근(Adductor Hallucis) 사두·횡두 이완점.\n[촉지 및 시술] 엄지와 둘째발가락 뿌리 사이 제1·2중족골간 심부 틈새. 엄지발가락을 안쪽으로 휘게 만드는 외측 견인력을 해제하여 1st MTP 관절 정렬을 회복합니다.",
          "en": "Adductor hallucis oblique/transverse head in the 1st-2nd intermetatarsal space; releases lateral deforming pull on the hallux and restores 1st MTP alignment."
        }
      }
    ],
    "anatomicalLabels": [
      "Flexor Hallucis Brevis (FHB)",
      "Sesamoid Bones",
      "1st MTP Joint",
      "Medial Plantar Nerve"
    ],
    "rifeFreq": 880,
    "searchKeywords": "단무지굴근 힘줄견인통 / 엄지발가락 중족지절관절(MTP) 통증 Flexor Hallucis Brevis TTP / 1st MTP Joint Pain 엄지발가락 1st MTP 관절 바닥쪽/내측 통증, 걸을 때 엄 지발가락을 발등 쪽으로 꺾으면 극심한 통증. Plantar/medial pain at 1st MTP joint, severe pain when dorsiflexing great toe during gait. 무릎, 발목 및 족부 질환 Knee, Ankle & Foot Disorders"
  },
  {
    "id": 41,
    "catId": "knee_foot",
    "catNum": 5,
    "category": {
      "ko": "무릎, 발목 및 족부 질환",
      "en": "Knee, Ankle & Foot Disorders"
    },
    "mechanism": {
      "ko": "힘줄견인",
      "en": "[TTP] Tendon/Periosteal Traction Pain"
    },
    "mechTags": [
      "tendon"
    ],
    "title": {
      "ko": "장무지신근 힘줄견인통 / 엄지발가락 등쪽 통증",
      "en": "Extensor Hallucis Longus TTP / Dorsal Great Toe Pain (4-Point Protocol)"
    },
    "symptoms": {
      "ko": "엄지발가락 1st MTP 관절 등쪽 및 IP 관절 등쪽 통증, 신 발 신을 때 엄지발가락이 구부러지면 극심한 통증.",
      "en": "Dorsal 1st MTP and IP joint pain, severe pain when great toe flexes inside shoe."
    },
    "pathophysiology": {
      "ko": "장무지신근(EHL)의 과긴장/단축으로 엄지발가락 기저부 등쪽 골막 자극 발생.",
      "en": "Hypertonicity/shortening of extensor hallucis longus (EHL) induces dorsal periosteal irritation at great toe base."
    },
    "targetTissues": {
      "ko": "장무지신근(EHL · 기시: 비골 전면 중앙부·골간막 / 정지: 엄지 원위지골 배측 기저부), 발목 전면 하신근지대 EHL 활차 & 심비골신경 교차점, 제1중족지절관절(1st MTP) 배측 관절낭, 단무지신근(EHB · 기시: 종골 상외측면 외과 전하방 / 정지: 엄지 근위지골 배측 기저부).",
      "en": "Extensor Hallucis Longus (EHL), inferior extensor retinaculum EHL pulley & deep peroneal nerve crossing, dorsal 1st MTP capsule, and Extensor Hallucis Brevis (EHB) calcaneal origin."
    },
    "palpation": {
      "ko": "① 양측 복사뼈 상방 5FB 장무지신근(EHL) 근복 ② 발목 전면 하신근지대 EHL 활차 & 심비골신경 교차점 ③ 제1중족지절관절(1st MTP) 배측 관절낭 & EHB·EHL 정지부 ④ 외과 전하방 단무지신근(EHB) 종골 기시부.",
      "en": "5FB above intermalleolar line (EHL deep belly), inferior extensor retinaculum EHL pulley, dorsal 1st MTP capsule & EHB/EHL insertions, and anteroinferior lateral malleolus EHB origin."
    },
    "clinicalCase": {
      "ko": "보행 중 발가락이 삐끗한 후 엄지발가락 등쪽 관절에 통증이 지속되던 장무지신근 건 견인통 사례. 복사뼈 선 5횡지 상방 장무지신근(EHL) 근복에 NovaCell Therapy를 적용하여 발등 건막의 긴장을 해소하고 신발 착용 및 보행 시 통증 완치.",
      "en": "20yo soldier with dorsal MTP pain after night march. Pain relieved after treating EHL belly 5 FB above malleolar line with NovaCell therapy."
    },
    "diagram": "images/diagrams/diagram_41.png",
    "targets": [
      {
        "code": "T1",
        "color": "#ff334b",
        "x": 47.6,
        "y": 47.2,
        "role": {
          "ko": "심부 근복·근막점",
          "en": "EHL Deep Belly Target"
        },
        "name": {
          "ko": "T1: 양측 복사뼈 상방 5FB · 장무지신근(EHL) 근복",
          "en": "T1: 5FB Above Intermalleolar Line · EHL Deep Belly"
        },
        "desc": {
          "ko": "[표적 해부] 발목 양측 복사뼈 연결선 상방 5FB(약 8~10cm) 위치의 전경골근과 장지신근 사이 심층에 자리한 장무지신근(Extensor Hallucis Longus, EHL) 근복.\n[촉지 및 시술] 엄지발가락을 위로 들어 올릴 때 정강이 하부 1/3 심부에서 수축이 느껴지는 압통점. 엄지발가락 등쪽으로 뻗치는 당김과 신전 시 뻐근함을 원천 해소합니다.",
          "en": "Deep EHL muscle belly 5FB above the intermalleolar line between TA and EDL; relieves proximal tension pulling on the dorsal great toe."
        }
      },
      {
        "code": "T2",
        "color": "#00f5d4",
        "x": 50.8,
        "y": 63.1,
        "role": {
          "ko": "주 신경·활차점",
          "en": "Retinaculum Pulley & Nerve Crossing"
        },
        "name": {
          "ko": "T2: 발목 전면 하신근지대 · EHL 활차 & 심비골신경 교차점",
          "en": "T2: Inferior Extensor Retinaculum · EHL Pulley & Nerve Crossing"
        },
        "desc": {
          "ko": "[표적 해부] 발목 전면 하신근지대(Inferior Extensor Retinaculum) 아래 장무지신근건이 꺾여 지나가는 활차(Pulley) 부위 및 심비골신경·족배동맥 교차점.\n[촉지 및 시술] 발목 앞주름 중앙에서 엄지발가락 쪽으로 도드라지는 EHL 힘줄 바로 위 터널 부위. 신발 끈 압박이나 보행 시 발등 앞쪽 찌릿함과 건초 마찰통을 감압합니다.",
          "en": "EHL tendon pulley beneath the inferior extensor retinaculum where it crosses the deep peroneal nerve; relieves lace-pressure pain and tenosynovitis."
        }
      },
      {
        "code": "T3",
        "color": "#ff9f43",
        "x": 56.1,
        "y": 80.5,
        "role": {
          "ko": "힘줄·골막 부착점",
          "en": "Dorsal 1st MTP & Insertions"
        },
        "name": {
          "ko": "T3: 제1중족지절관절(1st MTP) 배측 관절낭 & EHB·EHL 정지부",
          "en": "T3: Dorsal 1st MTP Capsule · EHB & EHL Insertions"
        },
        "desc": {
          "ko": "[표적 해부] 엄지발가락 제1중족지절관절(1st MTP) 등쪽 관절낭 및 단무지신근(EHB · 근위지골 배측 기저부 정지)·장무지신근(EHL · 원위지골 배측 기저부 정지) 정지건.\n[촉지 및 시술] 엄지발가락 등쪽 관절 주름 위 뼈 경계와 말단 힘줄 부착부. 엄지발가락 등쪽 시큰거림, 관절 뻣뻣함 및 힘줄견인통을 직접 완화합니다.",
          "en": "Dorsal 1st MTP capsule and distal insertions of EHB (proximal phalanx) and EHL (distal phalanx); directly resolves dorsal great toe traction pain."
        }
      },
      {
        "code": "T4",
        "color": "#38bdf8",
        "x": 45.6,
        "y": 66.1,
        "role": {
          "ko": "기시부·보조 신근점",
          "en": "EHB Calcaneal Origin Target"
        },
        "name": {
          "ko": "T4: 외과 전하방 · 단무지신근(EHB) 종골 기시부",
          "en": "T4: Anteroinferior Lateral Malleolus · EHB Calcaneal Origin"
        },
        "desc": {
          "ko": "[표적 해부] 바깥쪽 복숭아뼈(외과) 전하방 종골 상외측면(족근동 인접)의 단무지신근(Extensor Hallucis Brevis, EHB) 기시부 건골막 및 심비골신경 외측지.\n[촉지 및 시술] 외과 앞아래 오목한 족근동 앞쪽의 말랑한 EHB 근복·기시부. 엄지 신전을 보조하는 단무지신근의 과긴장을 함께 풀어 발등 전체의 균형을 회복합니다.",
          "en": "Calcaneal origin of extensor hallucis brevis anteroinferior to the lateral malleolus; releases synergistic dorsal forefoot tightness."
        }
      }
    ],
    "anatomicalLabels": [
      "Extensor Hallucis Longus (EHL)",
      "Dorsal 1st MTP Joint",
      "Deep Peroneal Nerve Branch"
    ],
    "rifeFreq": 727,
    "searchKeywords": "장무지신근 힘줄견인통 / 엄지발가락 등쪽 통증 Extensor Hallucis Longus TTP / Dorsal Great Toe Pain 엄지발가락 1st MTP 관절 등쪽 및 IP 관절 등쪽 통증, 신 발 신을 때 엄지발가락이 구부러지면 극심한 통증. Dorsal 1st MTP and IP joint pain, severe pain when great toe flexes inside shoe. 무릎, 발목 및 족부 질환 Knee, Ankle & Foot Disorders"
  },
  {
    "id": 42,
    "catId": "autonomic_systemic",
    "catNum": 6,
    "category": {
      "ko": "자율신경계(Autonomic Nerve) 및 전신/특수 질환",
      "en": "Autonomic & Systemic Disorders"
    },
    "mechanism": {
      "ko": "자율신경 오작동",
      "en": "[자율신경 오작동] Autonomic Sympathetic Response"
    },
    "mechTags": [
      "nerve",
      "autonomic"
    ],
    "title": {
      "ko": "자율신경계 오작동 (수족냉증 및 만성피로)",
      "en": "Autonomic S (Cold Extremities & Chronic Fatigue)"
    },
    "symptoms": {
      "ko": "손발 차가움, 아침에 입안이 씀, 무기력증, 소화불량, 식도 염, 전신 몸살 양상.",
      "en": "Cold hands/feet, bitter taste in mouth in morning, lethargy, indigestion, esophagitis, generalized body aches."
    },
    "pathophysiology": {
      "ko": "척추주위 심부근육의 과긴장으로 척추관/추간공 주변 교감신경 혈관운동섬유 및 일반 내장 구심 섬유(GVA fiber)가 유착(자율신경 오작동)되어 말초 혈류 장애 및 내장기 기능부전 유발.",
      "en": "Paraspinal deep muscle hypertonicity entraps sympathetic vasomotor and GVA fibers near spinal canal / IVF (S), causing peripheral blood flow obstruction and visceral dysfunction."
    },
    "targetTissues": {
      "ko": "T6~T10 레벨 척추주위 심부근육군(Multifidus).",
      "en": "T6?밫10 paraspinal deep muscle group (Multifidus)."
    },
    "palpation": {
      "ko": "T6~T10 극돌기 양옆 1.5cm 척추주위 심부근육 압통점.",
      "en": "Paraspinal deep muscle tender points 1.5 cm lateral to T6?밫10 spinous processes."
    },
    "clinicalCase": {
      "ko": "수십 년간 지속된 손발 냉증, 만성 무기력, 잦은 소화장애를 동반하던 자율신경계 오작동(Autonomic Nerve) 사례. T9~T11 흉추 분절 심부 다열근 및 교감신경 경로에 NovaCell Therapy를 체계적으로 통전하여 말초 혈관 수축을 정상화하고 수족 온기 및 활력 회복.",
      "en": "20-year history of frequent diarrhea, stomach discomfort, and chronic fatigue. Diarrhea ceased and >90% improvement achieved after bilateral T9/T10 multifidus NovaCell S treatment."
    },
    "diagram": "images/diagrams/diagram_42.png",
    "targets": [
      {
        "code": "T1",
        "color": "#ff334b",
        "x": 40.9,
        "y": 20.4,
        "role": {
          "ko": "자율신경 핵심점",
          "en": "Primary Autonomic Target"
        },
        "name": {
          "ko": "T1: 흉추 T6-T10 극돌기 외측 1.5cm 심부 다열근 교감신경절 타깃 (제2선)",
          "en": "T1: T6-T10 Paraspinal Multifidus Sympathetic Chain (Line 2)"
        },
        "desc": {
          "ko": "[표적 해부] T6~T10 극돌기 양옆 1.5cm 심부 다열근·회선근 및 복강·내장·말초혈관 조절 교감신경절.\n[촉지 및 시술] 등 중간~하부 제2선 연속 분절 타깃. 만성 피로와 수족냉증을 유발하는 흉추 교감신경 과흥분을 리셋합니다.",
          "en": "T6-T10 deep multifidus along Thoracic Line 2 regulating splanchnic and peripheral vascular sympathetic tone."
        }
      },
      {
        "code": "T2",
        "color": "#00f5d4",
        "x": 40.8,
        "y": 35.4,
        "role": {
          "ko": "자율신경 조절점",
          "en": "Autonomic Control Target"
        },
        "name": {
          "ko": "T2: 경추 C6 횡돌기 전결절 성상신경절(Stellate Ganglion) 자율신경 반사점",
          "en": "T2: C6 Chassaignac's Tubercle Stellate Ganglion Reflex Point"
        },
        "desc": {
          "ko": "[표적 해부] 윤상연골 수평선 높이, 흉쇄유돌근(SCM) 내측연과 경추 C6 횡돌기 전결절 사이 성상신경절(HP-SGB-01).\n[촉지 및 시술] 두경부·상지 혈류를 확장시키고 뇌 시상하부 자율신경 항상성을 복원하는 마스터 스위치입니다.",
          "en": "C6 anterior tubercle (Chassaignac's tubercle) stellate ganglion reflex point at cricoid level."
        }
      },
      {
        "code": "T3",
        "color": "#ff9f43",
        "x": 40.9,
        "y": 51.1,
        "role": {
          "ko": "자율신경 조절점",
          "en": "Autonomic Control Target"
        },
        "name": {
          "ko": "T3: 상부 경추 C1-C2 후두하 및 상경신경절(하악각 후방) 미주신경 조율점",
          "en": "T3: C1-C2 Suboccipital & Superior Cervical Ganglion Vagal Point"
        },
        "desc": {
          "ko": "[표적 해부] 하악각 후하방 C2-C3 횡돌기 전면 상경신경절(HP-SGB-02) 및 후두하 미주신경 연접부.\n[촉지 및 시술] 뇌혈류 장애, 만성 어지럼증, 수면 장애 및 자율신경실조증을 안정화합니다.",
          "en": "Superior cervical ganglion posterior to mandibular angle & suboccipital vagal zone."
        }
      },
      {
        "code": "T4",
        "color": "#38bdf8",
        "x": 41.7,
        "y": 68.7,
        "role": {
          "ko": "후관절·신경근점",
          "en": "Facet & Nerve Root Target"
        },
        "name": {
          "ko": "T4: 요천추 L2-S2 다열근 및 후천골공 하지 혈류·부교감 순환점",
          "en": "T4: L2-S2 Multifidus & Posterior Sacral Foramina Lower-Limb Vascular Point"
        },
        "desc": {
          "ko": "[표적 해부] 요추 교감신경절(L2-L3, 하지 혈관 지배) 및 천골 부교감신경(S2-S4 후천골공).\n[촉지 및 시술] 얼음장처럼 차가운 발(하지 냉증)의 말초 세동맥 확장을 유도합니다.",
          "en": "L2-L3 lumbar sympathetic and S2-S4 sacral parasympathetic balance point for lower extremity circulation."
        }
      }
    ],
    "anatomicalLabels": [
      "Thoracolumbar Sympathetic Trunk",
      "T8-T11 Multifidus",
      "Celiac Ganglion",
      "Splanchnic Nerves"
    ],
    "rifeFreq": 528,
    "searchKeywords": "자율신경계 오작동 (수족냉증 및 만성피로) Autonomic S (Cold Extremities & Chronic Fatigue) 손발 차가움, 아침에 입안이 씀, 무기력증, 소화불량, 식도 염, 전신 몸살 양상. Cold hands/feet, bitter taste in mouth in morning, lethargy, indigestion, esophagitis, generalized body aches. 자율신경계(Autonomic Nerve) 및 전신/특수 질환 Autonomic & Systemic Disorders"
  },
  {
    "id": 43,
    "catId": "autonomic_systemic",
    "catNum": 6,
    "category": {
      "ko": "자율신경계(Autonomic Nerve) 및 전신/특수 질환",
      "en": "Autonomic & Systemic Disorders"
    },
    "mechanism": {
      "ko": "신경근막 유착 및 힘줄견인",
      "en": "[S / TTP] Autonomic Response & Tendon Traction"
    },
    "mechTags": [
      "nerve"
    ],
    "title": {
      "ko": "산후풍 (Postpartum Pain Syndrome)",
      "en": "Postpartum Pain Syndrome"
    },
    "symptoms": {
      "ko": "출산 후 뼈가 시리고 온몸이 아픔, 앉거나 걷기 힘들고 무 릎/골반/손목 관절 시림.",
      "en": "Coldness in bones and generalized body aches post-delivery, difficulty sitting/walking, cold aching in knees/pelvis/wrist joints."
    },
    "pathophysiology": {
      "ko": "분만 과정의 과도한 근육 긴장 및 호르몬 변화로 전사각근, 대둔근, 반막양근 등에 통증유발점이 형성되어 말초 혈액순환 저하 및 감각신경 유착 유발.",
      "en": "Excessive muscle strain and hormonal changes during labor form TTPs in gluteus maximus, anterior scalene, semimembranosus, etc., reducing peripheral blood circulation and causing nerve entrapment."
    },
    "targetTissues": {
      "ko": "대둔근(Gluteus maximus), 전사각근(Anterior scalene), 반막양근, 최장근.",
      "en": "Gluteus maximus, Anterior scalene, Semimembranosus, Longissimus."
    },
    "palpation": {
      "ko": "꼬리뼈 옆 대둔근 압통점, 목 전사각근 하단, 무릎 뒤 반막양근 기시부.",
      "en": "Gluteus maximus tender point beside coccyx, inferior anterior scalene at neck, semimembranosus origin behind knee."
    },
    "clinicalCase": {
      "ko": "출산 후 전신 관절 시림과 꼬리뼈 통증으로 정상 착석과 보행이 어렵던 산후풍 복합 증후군 사례. 골반 뒤쪽 대둔근 기시부 및 전사각근/대요근 긴장점에 NovaCell Therapy를 복합 적용하여 골반 장력을 이완시킴으로써 착석 통증 소실 및 전신 시림 개선.",
      "en": "Postpartum mother unable to sit due to tailbone pain. Able to sit immediately after right gluteus maximus NovaCell therapy."
    },
    "diagram": "images/diagrams/diagram_43.png",
    "targets": [
      {
        "code": "T1",
        "color": "#ff334b",
        "x": 50.0,
        "y": 13.6,
        "role": {
          "ko": "자율신경 핵심점",
          "en": "Primary Autonomic Target"
        },
        "name": {
          "ko": "T1: 전경부 전사각근(Anterior Scalene) 하단 및 C6 체온조절 교감신경 반사점",
          "en": "T1: Lower Anterior Scalene & C6 Thermoregulatory Sympathetic Point"
        },
        "desc": {
          "ko": "[표적 해부] 쇄골 상방 전사각근 하부 부착부 및 C6 성상신경절 체온조절 중추 반사점(HP-PCS-01).\n[촉지 및 시술] 출산 후 바람만 스쳐도 시리고 땀이 나는 상체 자율신경 체온 조절 오작동을 정상화합니다.",
          "en": "Lower anterior scalene above clavicle & C6 stellate ganglion thermoregulatory reflex point."
        }
      },
      {
        "code": "T2",
        "color": "#00f5d4",
        "x": 41.3,
        "y": 47.4,
        "role": {
          "ko": "자율신경 조절점",
          "en": "Autonomic Control Target"
        },
        "name": {
          "ko": "T2: 흉요추 최장근(Longissimus)·다열근 척추 자율신경 기둥 타깃",
          "en": "T2: Thoracolumbar Longissimus & Multifidus Spinal Autonomic Axis"
        },
        "desc": {
          "ko": "[표적 해부] 등허리 T8~L4 극돌기 외측 최장근 및 심부 다열근(후면 시점 제1 타깃).\n[촉지 및 시술] 출산 후 느슨해졌던 척추 분절 인대와 심부 근육의 미세 불안정성 및 등 시림을 회복시킵니다.",
          "en": "Thoracolumbar paraspinal longissimus and multifidus axis stabilizing postpartum ligamentous laxity."
        }
      },
      {
        "code": "T3",
        "color": "#ff9f43",
        "x": 58.2,
        "y": 75.7,
        "role": {
          "ko": "자율신경 조절점",
          "en": "Autonomic Control Target"
        },
        "name": {
          "ko": "T3: 천골 후천골공(S1-S4) 및 대둔근·천장관절 골반 림프·자율신경점",
          "en": "T3: Posterior Sacral Foramina & Gluteus Maximus/SIJ Pelvic Point"
        },
        "desc": {
          "ko": "[표적 해부] 천골 후면 후천골공, 후천장인대 및 대둔근 기시부(HP-PCS-02, 후면 시점 제2 타깃).\n[촉지 및 시술] 출산으로 벌어졌던 골반(천장관절) 통증과 하초 냉증·부종을 해소합니다.",
          "en": "Posterior sacral foramina (S1-S4), sacroiliac ligaments, and gluteus maximus origin."
        }
      },
      {
        "code": "T4",
        "color": "#38bdf8",
        "x": 62.0,
        "y": 38.0,
        "role": {
          "ko": "심부 근복·근막점",
          "en": "Deep Myofascial Trigger Point"
        },
        "name": {
          "ko": "T4: 대퇴 후면 반막양근(Semimembranosus)·슬와부 하지 시림 차단점",
          "en": "T4: Posterior Thigh Semimembranosus & Popliteal Coldness Switch"
        },
        "desc": {
          "ko": "[표적 해부] 허벅지 뒤 내측 반막양근 근복 및 무릎 오금 신경혈관 다발(후면 시점 제3 타깃).\n[촉지 및 시술] 산후 무릎과 다리로 찬바람이 들어오는 듯한 하지 시림과 관절통을 차단합니다.",
          "en": "Semimembranosus belly and popliteal neurovascular bundle resolving lower-limb coldness."
        }
      }
    ],
    "anatomicalLabels": [
      "Gluteus Maximus",
      "Sacrotuberous Ligament",
      "Pelvic Floor",
      "Psoas / Scalenes"
    ],
    "rifeFreq": 432,
    "searchKeywords": "산후풍 (Postpartum Pain Syndrome) Postpartum Pain Syndrome 출산 후 뼈가 시리고 온몸이 아픔, 앉거나 걷기 힘들고 무 릎/골반/손목 관절 시림. Coldness in bones and generalized body aches post-delivery, difficulty sitting/walking, cold aching in knees/pelvis/wrist joints. 자율신경계(Autonomic Nerve) 및 전신/특수 질환 Autonomic & Systemic Disorders"
  },
  {
    "id": 44,
    "catId": "autonomic_systemic",
    "catNum": 6,
    "category": {
      "ko": "자율신경계(Autonomic Nerve) 및 전신/특수 질환",
      "en": "Autonomic & Systemic Disorders"
    },
    "mechanism": {
      "ko": "신경유착 / 힘줄견인",
      "en": "[ / TTP] Nerve Entrapment & Tendon Traction"
    },
    "mechTags": [
      "nerve",
      "tendon"
    ],
    "title": {
      "ko": "소아 일과성 고관절 활액막염",
      "en": "Pediatric Transient Synovitis of the Hip"
    },
    "symptoms": {
      "ko": "10세 이하 소아의 갑작스러운 고관절/서혜부 통증, 다리를 절거나 보행 거부.",
      "en": "Sudden hip/groin pain in children under 10, limping or refusal to walk."
    },
    "pathophysiology": {
      "ko": "소아 장요근(Iliopsoas · 장골근·대요근)의 병적 과긴장 및 단축으로 대퇴신경·폐쇄신경 가지 압박 및 고관절 전방 관절낭 활액막 삼출·자극 유발.",
      "en": "Pathologic hypertonicity and shortening of pediatric iliopsoas compresses femoral/obturator nerve branches and induces anterior hip joint capsule effusion and synovitis."
    },
    "targetTissues": {
      "ko": "장골근(Iliacus · 기시: 장골와 내면 상부 2/3 / 정지: 대퇴골 소전자), 대요근(Psoas Major · 기시: T12~L5 추체·L1~L5 횡돌기 / 정지: 대퇴골 소전자), 고관절 전방 관절낭·장요근건, 전하장골극(AIIS) 대퇴직근 기시부·TFL 및 L2~L4 근위 신경근.",
      "en": "Iliacus, Psoas Major, sub-inguinal iliopsoas tendon & anterior hip joint capsule (effusion zone), AIIS rectus femoris origin & TFL, and L2-L4 femoral/obturator nerve roots."
    },
    "palpation": {
      "ko": "① 장골와(Iliac Fossa) 내부 장골근 심부 근복(ASIS 내측) ② 서혜인대 하방 장요근건 & 고관절 전방 관절낭 ③ 전하장골극(AIIS) 대퇴직근 기시부 & TFL ④ 요추 L2~L4 다열근 & 대요근 근위 신경근.",
      "en": "1) Iliac fossa medial to ASIS iliacus deep belly 2) Sub-inguinal iliopsoas tendon & anterior hip capsule 3) AIIS rectus femoris origin & TFL 4) L2-L4 multifidus & proximal psoas root."
    },
    "clinicalCase": {
      "ko": "고관절통증으로 체중 부하가 불가능하여 다리를 디디지 못하던 일과성 고관절 활액막염 사례. 내측 장골근 및 대요근 힘줄 부착부에 부드러운 NovaCell Therapy를 집중 조율하여 관절낭 내 압박을 해소하고 당일 즉각적인 독립 보행 회복.",
      "en": "Young boy carried in father's arms unable to walk due to hip pain. Pain completely vanished and normal gait resumed immediately after left iliacus NovaCell application."
    },
    "diagram": "images/diagrams/diagram_44.png",
    "targets": [
      {
        "code": "T1",
        "color": "#ff334b",
        "x": 66.4,
        "y": 40.1,
        "role": {
          "ko": "제1 핵심 치료점",
          "en": "Primary Clinical Target"
        },
        "name": {
          "ko": "T1: 장골와(Iliac Fossa) 내부 · 장골근 심부 근복",
          "en": "T1: Iliac Fossa (Medial to ASIS) · Iliacus & Femoral N."
        },
        "desc": {
          "ko": "[표적 해부] 골반 전상장골극(ASIS) 내측 장골와 내부의 장골근(Iliacus) 심부 근복 및 대퇴신경 주행로.\n[촉지 및 시술] 소아가 갑자기 다리를 절거나 사타구니·고관절 통증을 호소할 때 ASIS 안쪽 골반 내벽 장골근 압통점에 부드러운 비침습 통전을 적용하면 고관절 굴곡 경직과 파행이 신속히 소실됩니다.",
          "en": "Iliacus muscle belly inside iliac fossa medial to ASIS along the femoral nerve pathway."
        }
      },
      {
        "code": "T2",
        "color": "#00f5d4",
        "x": 66.9,
        "y": 58.2,
        "role": {
          "ko": "관절낭·삼출 조절점",
          "en": "Hip Capsule & Tendon Target"
        },
        "name": {
          "ko": "T2: 서혜인대 하방 장요근건 & 고관절 전방 관절낭",
          "en": "T2: Inferior Inguinal Ligament · Hip Capsule Effusion & Tendon"
        },
        "desc": {
          "ko": "[표적 해부] 서혜인대 직하방 고관절 전방 관절낭(일과성 활액막염 삼출 구역) 및 장요근건·장요점액낭.\n[촉지 및 시술] 고관절 관절낭 내 압력과 삼출성 부종을 비침습 미세전류로 빠르게 흡수·진정시킵니다.",
          "en": "Anterior hip joint capsule (effusion zone) and iliopsoas tendon/bursa just below the inguinal ligament."
        }
      },
      {
        "code": "T3",
        "color": "#ff9f43",
        "x": 28.6,
        "y": 49.1,
        "role": {
          "ko": "힘줄·골막 부착점",
          "en": "Tendon & Periosteal Target"
        },
        "name": {
          "ko": "T3: 전하장골극(AIIS) 대퇴직근 기시부 & TFL",
          "en": "T3: AIIS (Rectus Femoris Origin) & ASIS (TFL)"
        },
        "desc": {
          "ko": "[표적 해부] ASIS 직하방 전하장골극(AIIS) 대퇴직근 기시부 및 대퇴근막장근(TFL) 기시 골막.\n[촉지 및 시술] 소아 성장통 및 고관절 전방 굴곡근 견인통을 함께 이완하여 보행 시 대퇴 전방 당김을 풀어줍니다.",
          "en": "Anterior inferior iliac spine (AIIS) origin of rectus femoris and ASIS origin of TFL."
        }
      },
      {
        "code": "T4",
        "color": "#38bdf8",
        "x": 45.6,
        "y": 31.9,
        "role": {
          "ko": "후관절·신경근점",
          "en": "Facet & Nerve Root Target"
        },
        "name": {
          "ko": "T4: 요추 L2~L4 다열근 & 대요근 근위 신경근",
          "en": "T4: L2-L4 Segments · Femoral & Obturator Nerve Roots"
        },
        "desc": {
          "ko": "[표적 해부] 고관절 관절낭 감각을 지배하는 요추 L2~L4 분절 대퇴신경·폐쇄신경 근위 신경근 및 다열근·대요근 기시부.\n[촉지 및 시술] 허리에서 고관절·무릎으로 이어지는 반사성 근긴장과 연관통을 안정화합니다.",
          "en": "L2-L4 paraspinal segments supplying femoral and obturator nerve articular branches to the hip joint."
        }
      }
    ],
    "anatomicalLabels": [
      "Iliacus (Iliac Fossa & Femoral Nerve)",
      "Psoas Major (T12-L5 to Lesser Trochanter)",
      "Sub-Inguinal Iliopsoas Tendon & Hip Capsule Effusion",
      "AIIS Rectus Femoris Origin & ASIS (TFL)",
      "L2-L4 Femoral & Obturator Nerve Roots"
    ],
    "rifeFreq": 528,
    "searchKeywords": "소아 일과성 고관절 활액막염 Pediatric Transient Synovitis of the Hip 소아 고관절 통증 다리를 절음 보행 거부 장골근 대요근 장요근 고관절 삼출 관절낭 AIIS 대퇴직근 TFL L2 L3 L4 대퇴신경 폐쇄신경 자율신경계 전신 특수 질환"
  },
  {
    "id": 45,
    "catId": "autonomic_systemic",
    "catNum": 6,
    "category": {
      "ko": "자율신경계(Autonomic Nerve) 및 전신/특수 질환",
      "en": "Autonomic & Systemic Disorders"
    },
    "mechanism": {
      "ko": "신경유착 / 자율신경 오작동",
      "en": "[신경유착 / 자율신경 오작동] Nerve Entrapment & Autonomic Response"
    },
    "mechTags": [
      "nerve",
      "autonomic"
    ],
    "title": {
      "ko": "하지 대상포진 후 통증 (PHN)",
      "en": "Postherpetic Neuralgia of the Lower Extremities (PHN)"
    },
    "symptoms": {
      "ko": "허벅지~종아리 신경 절 따라 콕콕 쑤시고 쏘는 듯한 극심 한 신경통 및 피부 이상감각.",
      "en": "Stabbing, shooting severe neuralgia and cutaneous dysesthesia along thigh-to-calf dermatome."
    },
    "pathophysiology": {
      "ko": "바이러스 감염 후 잔존하는 신경 염증 및 해당 레벨 척추주위 심부근육 과긴장에 의한 누적 신경유착.",
      "en": "Residual neural inflammation post-viral infection combined with cumulative nerve entrapment from paraspinal deep muscle hypertonicity."
    },
    "targetTissues": {
      "ko": "해당 척추 분절(L4~S1) 척추주위 심부근육군.",
      "en": "Paraspinal deep muscle group at corresponding spinal segments (L4-S1)."
    },
    "palpation": {
      "ko": "L5/S1 극돌기 양옆 척추주위 심부근육 깊은 압통점.",
      "en": "Deep tender points in paraspinal muscles beside L5/S1 spinous processes."
    },
    "clinicalCase": {
      "ko": "대상포진 치유 후에도 하지 신경 분절을 따라 콕콕 쑤시고 쏘는 듯한 통증이 지속되던 대상포진 후 신경통(PHN) 사례. L5-S1 분절 심부 다열근 및 척수신경 후지에 NovaCell Therapy를 체계적으로 적용하여 신경근막 흥분을 진정시키고 난치성 신경통 80% 이상 완화.",
      "en": "Severe stabbing pain following lower extremity herpes zoster. Pain improved with L5/S1 level multifidus NovaCell therapy."
    },
    "diagram": "images/diagrams/diagram_45.png",
    "targets": [
      {
        "code": "T1",
        "color": "#ff334b",
        "x": 42.4,
        "y": 41.5,
        "role": {
          "ko": "주 신경포착점",
          "en": "Primary Nerve Entrapment"
        },
        "name": {
          "ko": "T1: 요천추 L4-L5-S1 극돌기 외측 1.5cm 심부 다열근·후근신경절(DRG) 타깃",
          "en": "T1: L4-S1 Paraspinal Multifidus & Dorsal Root Ganglion (DRG) Point"
        },
        "desc": {
          "ko": "[표적 해부] 대상포진 바이러스가 침범한 L4·L5·S1 후근신경절(DRG) 외측 후관절 및 심부 다열근.\n[촉지 및 시술] L4~S1 극돌기 양옆 1.5~2cm 제2선 심부 골막 접촉점. 하지 대상포진 후 신경통(PHN)의 중추 감작과 자발통을 뿌리에서 진정시키는 제1 핵심점입니다.",
          "en": "L4-S1 deep multifidus & facet lateral to spinous process targeting affected dorsal root ganglia (DRG)."
        }
      },
      {
        "code": "T2",
        "color": "#00f5d4",
        "x": 57.7,
        "y": 41.8,
        "role": {
          "ko": "신경 주행·분지점",
          "en": "Nerve Pathway Target"
        },
        "name": {
          "ko": "T2: 대좌골공 이상근하방 좌골신경·후대퇴피신경 본간 타깃",
          "en": "T2: Infrapiriformis Sciatic & Posterior Femoral Cutaneous Trunk"
        },
        "desc": {
          "ko": "[표적 해부] L4-S3 신경근이 합류하여 하지로 내려가는 둔부 대좌골공 신경 본간.\n[촉지 및 시술] 엉덩이에서 허벅지·종아리로 타들어 가는 하지 PHN 방사 경로의 중간 변전소를 차단합니다.",
          "en": "Sciatic and posterior femoral cutaneous nerve trunk at greater sciatic foramen."
        }
      },
      {
        "code": "T3",
        "color": "#ff9f43",
        "x": 38.0,
        "y": 62.0,
        "role": {
          "ko": "신경 주행·분지점",
          "en": "Nerve Pathway Target"
        },
        "name": {
          "ko": "T3: 외측대퇴피신경(LFCN, ASIS 내측) 및 복재신경(내전근관) 피부분절 타깃",
          "en": "T3: LFCN (ASIS) & Saphenous Nerve Dermatome Track Point"
        },
        "desc": {
          "ko": "[표적 해부] L2-L3(허벅지 전면·외측) 및 L4(무릎 내측·정강이) 대상포진 침범 피부분절의 말초 신경 출구.\n[촉지 및 시술] 옷만 스쳐도 아픈 이질통(Allodynia) 부위 상류의 말초 감각신경 포착점을 집중 통전합니다.",
          "en": "Peripheral cutaneous nerve exits corresponding to affected L2-L4 dermatomes."
        }
      },
      {
        "code": "T4",
        "color": "#38bdf8",
        "x": 73.0,
        "y": 47.0,
        "role": {
          "ko": "자율신경 조절점",
          "en": "Autonomic Control Target"
        },
        "name": {
          "ko": "T4: 후천골공(S1-S3) 천골 자율신경 및 신경재생(-70mV) 부스터점",
          "en": "T4: S1-S3 Posterior Sacral Foramina Nerve Regeneration Point"
        },
        "desc": {
          "ko": "[표적 해부] 천골 S1~S3 후천골공 및 천골 교감·부교감 신경총.\n[촉지 및 시술] 손상된 신경 수초(Myelin) 재생에 필요한 신경주위 미세혈류와 세포막 전압(-70mV)을 공급합니다.",
          "en": "S1-S3 posterior sacral foramina enhancing vasa nervorum blood flow for myelin recovery."
        }
      }
    ],
    "anatomicalLabels": [
      "L5-S1 Multifidus",
      "Sciatic Nerve Roots",
      "Lumbosacral Trunk",
      "S1 Dorsal Ramus"
    ],
    "rifeFreq": 787,
    "searchKeywords": "하지 대상포진 후 통증 (PHN) Postherpetic Neuralgia of the Lower Extremities (PHN) 허벅지~종아리 신경 절 따라 콕콕 쑤시고 쏘는 듯한 극심 한 신경통 및 피부 이상감각. Stabbing, shooting severe neuralgia and cutaneous dysesthesia along thigh-to-calf dermatome. 자율신경계(Autonomic Nerve) 및 전신/특수 질환 Autonomic & Systemic Disorders"
  },
  {
    "id": 46,
    "catId": "autonomic_systemic",
    "catNum": 6,
    "category": {
      "ko": "자율신경계(Autonomic Nerve) 및 전신/특수 질환",
      "en": "Autonomic & Systemic Disorders"
    },
    "mechanism": {
      "ko": "자율신경 오작동 / 힘줄견인",
      "en": "[S / TTP] Autonomic Response & Tendon Traction"
    },
    "mechTags": [
      "nerve",
      "tendon",
      "autonomic"
    ],
    "title": {
      "ko": "봉와직염 오진 삼출성 부종 및 마목감",
      "en": "Misdiagnosed Cellulitis with Exudative Edema"
    },
    "symptoms": {
      "ko": "하지/발목 부위 붉은 발적, 부종, 열감 및 먹먹한 마목감, 봉와직염 오진 잦음.",
      "en": "Ankle/lower leg edema and redness, taut swelling, unresponsive to antibiotic therapy."
    },
    "pathophysiology": {
      "ko": "요추부 척추주위 심부근육 과긴장에 의한 교감신경 혈관 운동/정맥류 순환 장애 및 삼출물 저류.",
      "en": "Venous/lymphatic return impairment and abnormal vascular permeability due to sympathetic S, inducing stasis edema."
    },
    "targetTissues": {
      "ko": "L2-L5 척추주위 심부근육군(Multifidus), 가자미근.",
      "en": "L4-S1 multifidus, Soleus, Gastrocnemius."
    },
    "palpation": {
      "ko": "L2-L5 극돌기 외측 다열근 심부 및 종아리 가자미근 압통 점.",
      "en": "Lumbar deep muscle and calf muscle belly tender points."
    },
    "clinicalCase": {
      "ko": "하지 부종과 열감, 먹먹한 마목감으로 봉와직염으로 오진되어 장기 치료를 받았으나 호전이 없던 자율신경성 혈류 장애 사례. 요추부 L2~L4 다열근 자율신경 오작동 부위에 NovaCell Therapy를 적용하여 신경성 부종과 마목감 완치 및 다리 가벼움 회복.",
      "en": "Patient misdiagnosed with cellulitis and treated with antibiotics for 2 weeks without improvement. Edema markedly reduced 2 days after L5/S1 multifidus NovaCell S treatment."
    },
    "diagram": "images/diagrams/diagram_46.png",
    "targets": [
      {
        "code": "T1",
        "color": "#ff334b",
        "x": 28.3,
        "y": 20.6,
        "role": {
          "ko": "자율신경 핵심점",
          "en": "Primary Autonomic Target"
        },
        "name": {
          "ko": "T1: 요추 L2-L5 극돌기 외측 1.5cm 심부 다열근 혈관운동 교감신경점",
          "en": "T1: L2-L5 Deep Multifidus Vasomotor Sympathetic Point"
        },
        "desc": {
          "ko": "[표적 해부] 하지 혈관의 수축·확장과 모세혈관 투과성을 조절하는 L2~L5 척추주위 심부 다열근 및 요추 교감신경절.\n[촉지 및 시술] 세균 감염(봉와직염)이 아닌데도 다리가 붓고 열감이 나며 항생제에 반응하지 않는 신경인성 삼출성 부종의 근본 스위치입니다.",
          "en": "L2-L5 deep multifidus regulating lumbar sympathetic vasomotor tone and capillary permeability."
        }
      },
      {
        "code": "T2",
        "color": "#00f5d4",
        "x": 56.0,
        "y": 54.0,
        "role": {
          "ko": "힘줄·골막 부착점",
          "en": "Tendon & Periosteal Target"
        },
        "name": {
          "ko": "T2: 종아리 중간 심부 가자미근(Soleus) 정맥·림프 펌프 및 경골신경 타깃",
          "en": "T2: Mid-Calf Deep Soleus Venous-Lymphatic Pump & Tibial Nerve"
        },
        "desc": {
          "ko": "[표적 해부] 종아리 중간 심부 가자미근(Soleus) 근복 및 경골신경 혈관운동지.\n[촉지 및 시술] 하퇴 후면 중앙(승산혈 심부) 압통점. 하지 정맥·림프 정체를 펌핑하여 부종과 먹먹한 마목감을 신속히 배출시킵니다.",
          "en": "Mid-calf deep soleus belly reactivating lower-limb venous/lymphatic return and tibial nerve."
        }
      },
      {
        "code": "T3",
        "color": "#ff9f43",
        "x": 38.0,
        "y": 62.0,
        "role": {
          "ko": "신경 주행·분지점",
          "en": "Nerve Pathway Target"
        },
        "name": {
          "ko": "T3: 슬와와(Popliteal Fossa) 및 내과 후방(족근관) 신경혈관 감압점",
          "en": "T3: Popliteal Fossa & Tarsal Tunnel Neurovascular Decompression"
        },
        "desc": {
          "ko": "[표적 해부] 오금(슬와동정맥·경골신경) 및 발목 안쪽 족근관(후경골동정맥·후경골신경) 병목 구간.\n[촉지 및 시술] 발목과 발등까지 퉁퉁 붓고 감각이 무딘 원위부 순환 통로를 개방합니다.",
          "en": "Popliteal fossa and medial ankle tarsal tunnel neurovascular bottleneck points."
        }
      },
      {
        "code": "T4",
        "color": "#38bdf8",
        "x": 62.0,
        "y": 38.0,
        "role": {
          "ko": "신경 주행·분지점",
          "en": "Nerve Pathway Target"
        },
        "name": {
          "ko": "T4: 서혜부 대퇴삼각 림프절·대퇴신경혈관초 상류 개방점",
          "en": "T4: Inguinal Femoral Triangle Lymphatic & Neurovascular Gate"
        },
        "desc": {
          "ko": "[표적 해부] 서혜인대 하방 대퇴동·정맥 및 서혜부 심부 림프절 통로.\n[촉지 및 시술] 하지에서 체간으로 복귀하는 림프·정맥 상류 관문을 열어 부종 소퇴를 가속화합니다.",
          "en": "Inguinal femoral triangle neurovascular and lymphatic drainage gateway."
        }
      }
    ],
    "anatomicalLabels": [
      "Lumbar Sympathetic Chain",
      "L2-L4 Multifidus",
      "Saphenous & Peroneal Nerves",
      "Popliteal Lymphatics"
    ],
    "rifeFreq": 727,
    "searchKeywords": "봉와직염 오진 삼출성 부종 및 마목감 Misdiagnosed Cellulitis with Exudative Edema 하지/발목 부위 붉은 발적, 부종, 열감 및 먹먹한 마목감, 봉와직염 오진 잦음. Ankle/lower leg edema and redness, taut swelling, unresponsive to antibiotic therapy. 자율신경계(Autonomic Nerve) 및 전신/특수 질환 Autonomic & Systemic Disorders"
  },
  {
    "id": 47,
    "catId": "rehab_aka",
    "catNum": 7,
    "category": {
      "ko": "도수 재활 및 관절역학(AKA) 치료",
      "en": "Manual Rehabilitation & Arthrokinematics (AKA)"
    },
    "mechanism": {
      "ko": "관절운동학적 기능이상 (Arthrokinematic Dysfunction) - 천장관절 미세 역학 상실",
      "en": "Arthrokinematic Dysfunction - Loss of Sacroiliac Joint Play"
    },
    "mechTags": [
      "nerve",
      "tendon"
    ],
    "title": {
      "ko": "천장관절 기능이상 및 가성 좌골신경통",
      "en": "Sacroiliac Joint Dysfunction & Pseudo-Sciatica"
    },
    "subtitle": {
      "ko": "요통의 진원지(The Epicenter) - 천장관절 놀이(Joint Play) 상실 및 방사통",
      "en": "The Epicenter of Low Back Pain - Loss of SI Joint Play & Radiating Pain"
    },
    "symptoms": {
      "ko": "체간 굴곡 및 기립 시 극심한 요천추부 통증, 둔부 후면 및 대퇴 외측으로 뻗치는 저림감(가성 좌골신경통), 오래 앉아있거나 계단 보행 시 서혜부 및 무릎 외측까지 방사되는 연관통.",
      "en": "Severe lumbosacral pain upon trunk flexion and standing, numbness radiating down posterior buttock and lateral thigh (pseudo-sciatica), referred pain to groin and lateral knee."
    },
    "pathophysiology": {
      "ko": "원인 불명 만성 요통의 80% 이상은 디스크가 아닌 천장관절 기능이상에서 기인. 관절낭 내부의 1~2mm 미세 미끄러짐(Sliding)과 구름(Rolling)이 결손되어 주변 척수신경 후지 내측지를 자극하고 하지 전체로 연관통을 방사함.",
      "en": "Over 80% of unexplained chronic low back pain originates from SI joint dysfunction rather than discs. Loss of 1-2mm micro-sliding/rolling irritates posterior spinal nerves."
    },
    "targetTissues": {
      "ko": "천장관절 후상장골극(PSIS) 심부 관절포 인대, 천골구(Sacral Sulcus), 이상근 기저부.",
      "en": "Deep capsular ligaments at PSIS, sacral sulcus, piriformis base."
    },
    "palpation": {
      "ko": "환자 복와위(Prone) 상태에서 PSIS 내측 천골구를 숙련된 도수 촉진(Palpation)하여 1~2mm의 관절 놀이(Play) 결손 및 압통 부위 감별.",
      "en": "Manual palpation of sacral sulcus medial to PSIS in prone position to detect 1-2mm joint play deficit and tenderness."
    },
    "clinicalCase": {
      "ko": "디스크 수술을 권유받았던 52세 만성 요통·다리저림 환자. AKA 천장관절 비폭력 미세 신연 및 전굴-상방 활주 도수치료 2회 시행 직후 관절 놀이가 정상 복원되어 방사통이 95% 소실되고 정상 일상 복귀.",
      "en": "52-year-old chronic LBP patient advised surgery. Non-thrust AKA SI joint distraction and anterior-superior glide achieved 95% pain reduction after 2 sessions."
    },
    "diagram": "images/diagrams/aka_extracted_4.jpg",
    "targets": [
      {
        "code": "T1",
        "color": "#ff334b",
        "x": 30.5,
        "y": 62.0,
        "role": {
          "ko": "핵심 후관절·신경근점",
          "en": "Primary Facet & Root Target"
        },
        "name": {
          "ko": "T1: 후상장골극(PSIS) 내하방 천장관절 상부 관절연 (Fortin 영역 T1)",
          "en": "T1: PSIS Inferomedial Sacroiliac Joint Line (Fortin's Area T1)"
        },
        "desc": {
          "ko": "[표적 해부] 후상장골극(PSIS) 바로 내하방 1~2cm 천장관절(SIJ) 배측 천장인대 및 S1-S3 후지 외측지 신경총.\n[촉지 및 시술] 환자가 손가락 하나로 짚는 골반 뒤쪽 움푹 들어간 Fortin 영역(HP-SIJ-01). 박창혁 박사 AKA 천장관절 상부 활주 및 골막 타깃입니다.",
          "en": "1-2cm inferomedial to PSIS (Fortin's area) over dorsal sacroiliac ligaments and S1-S3 lateral branches."
        }
      },
      {
        "code": "T2",
        "color": "#00f5d4",
        "x": 74.0,
        "y": 55.0,
        "role": {
          "ko": "후관절·신경근점",
          "en": "Facet & Nerve Root Target"
        },
        "name": {
          "ko": "T2: 천골 하외측연 천결절인대(Sacrotuberous Ligament) 및 하부 천장관절점 (T2)",
          "en": "T2: Lower Sacroiliac Joint & Sacrotuberous Ligament Periosteal Contact (T2)"
        },
        "desc": {
          "ko": "[표적 해부] 천골 하외측각(S3-S4)과 좌골결절을 잇는 천결절인대·천극인대 골막 부착부(HP-SIJ-02).\n[촉지 및 시술] 천골의 앞뒤 끄덕임(Nutation/Counternutation) 관절 놀이가 잠긴 하부 잠금점입니다.",
          "en": "Lower sacroiliac joint pole and sacrotuberous ligament periosteal attachment."
        }
      },
      {
        "code": "T3",
        "color": "#ff9f43",
        "x": 52.0,
        "y": 44.0,
        "role": {
          "ko": "후관절·신경근점",
          "en": "Facet & Nerve Root Target"
        },
        "name": {
          "ko": "T3: 장골능 후내순 장요인대(Iliolumbar Ligament) L5 횡돌기 부착점",
          "en": "T3: Iliolumbar Ligament L5 Transverse Process-to-Iliac Crest Point"
        },
        "desc": {
          "ko": "[표적 해부] L5 횡돌기 첨부와 장골능 후내순을 연결하는 장요인대.\n[촉지 및 시술] 천장관절 기능이상과 항상 동반되는 요천추-골반 이행부 불안정성을 잡아줍니다.",
          "en": "Iliolumbar ligament connecting L5 transverse process to posterior iliac crest."
        }
      }
    ],
    "anatomicalLabels": [
      "Sacroiliac Joint (SI Joint)",
      "PSIS (Posterior Superior Iliac Spine)",
      "Sacral Sulcus",
      "L5-S1 Segment"
    ],
    "rifeFreq": 528,
    "searchKeywords": "천장관절 기능이상 가성 좌골신경통 SI Joint Dysfunction 요통의 진원지 AKA 도수치료 박창혁 박사 관절놀이 Joint Play 도수재활"
  },
  {
    "id": 48,
    "catId": "rehab_aka",
    "catNum": 7,
    "category": {
      "ko": "도수 재활 및 관절역학(AKA) 치료",
      "en": "Manual Rehabilitation & Arthrokinematics (AKA)"
    },
    "mechanism": {
      "ko": "관절 관련통 방사 (Referred Pain Pattern) - 체성·자율신경 비관여 관절통",
      "en": "Joint Referred Pain - Non-dermatomal Articular Referred Pain"
    },
    "mechTags": [
      "nerve",
      "autonomic"
    ],
    "title": {
      "ko": "천장관절 통증 방사 지도 및 하지 연관통",
      "en": "SI Joint Referred Pain Map & Lower Extremity Pain"
    },
    "subtitle": {
      "ko": "좌골신경통으로 오인되는 둔부·대퇴·무릎·하퇴 방사통의 AKA 역학 감별",
      "en": "Arthrokinematic Differentiation of Referred Pain to Buttock, Thigh & Knee"
    },
    "symptoms": {
      "ko": "둔부 후면에서 대퇴 외측, 종아리, 발목 및 무릎까지 광범위하게 뻗치는 저림과 통증. 단순 체간에 머물지 않고 사지까지 파급되어 디스크나 좌골신경통으로 오인되기 쉬운 관절 연관통.",
      "en": "Widespread numbness and aching from posterior buttock to lateral thigh, calf, ankle and knee mimicking sciatica."
    },
    "pathophysiology": {
      "ko": "천장관절의 미세한 기능이상은 피부절(Dermatome)에 일치하지 않는 관절 관련통(Referred pain)을 유발하여 사지까지 파급됨. 슬관절 자체의 문제보다 천장관절 유래 가능성을 우선 고려해야 함.",
      "en": "SI joint micro-dysfunction produces extensive referred pain not conforming to dermatomes, easily mistaken for sciatica or knee arthritis."
    },
    "targetTissues": {
      "ko": "천골 후외측 관절면, 천골 전굴-상방 활주면, 천결절인대 연결부.",
      "en": "Postero-lateral sacral plane, sacrotuberous ligament junction."
    },
    "palpation": {
      "ko": "둔부 후면 통증 유발점 촉진 및 천골 전굴-상방 활주법 테스트를 통한 방사통 즉각 경감 반응 확인.",
      "en": "Palpation of posterior buttock triggers and confirmation of immediate relief via anterior-superior glide test."
    },
    "clinicalCase": {
      "ko": "좌골신경통 진단 후 수개월간 차도가 없던 47세 환자. 천장관절 전굴-상방 활주 도수치료 즉각 적용 후 외측 방사통 및 종아리 저림감이 1회 치료만으로 90% 이상 드라마틱하게 경감됨.",
      "en": "47-year-old unresponsive to sciatica treatments. Anterior-superior glide abolished lateral radiating pain and calf numbness by 90% in single session."
    },
    "diagram": "images/diagrams/aka_extracted_5.jpg",
    "targets": [
      {
        "code": "T1",
        "color": "#ff334b",
        "x": 23.0,
        "y": 40.0,
        "role": {
          "ko": "핵심 후관절·신경근점",
          "en": "Primary Facet & Root Target"
        },
        "name": {
          "ko": "T1: 천장관절 상극(Superior Pole of SIJ) L5-S1 연관통 기원점",
          "en": "T1: Superior Pole of Sacroiliac Joint (L5-S1 Referral Zone)"
        },
        "desc": {
          "ko": "[표적 해부] PSIS 상내측 천장관절 상극 관절낭 및 장요인대-후천장인대 이행부.\n[촉지 및 시술] 엉덩이 상부와 대퇴 외측(대전자·장경인대 경로)으로 뻗치는 가성 좌골신경통의 상부 발원지입니다.",
          "en": "Superior pole of SIJ referring pain to upper gluteal and lateral thigh/ITB region."
        }
      },
      {
        "code": "T2",
        "color": "#00f5d4",
        "x": 50.0,
        "y": 55.0,
        "role": {
          "ko": "후관절·신경근점",
          "en": "Facet & Nerve Root Target"
        },
        "name": {
          "ko": "T2: 천장관절 하극(Inferior Pole of SIJ) S1-S2 후방 대퇴·종아리 연관통점",
          "en": "T2: Inferior Pole of Sacroiliac Joint (Posterior Thigh/Calf Referral)"
        },
        "desc": {
          "ko": "[표적 해부] PSIS 하방 3~4cm 천장관절 하극(제2·3 후천골공 외측 관절선).\n[촉지 및 시술] 디스크 탈출 없이도 허벅지 뒤쪽과 종아리까지 디스크와 똑같은 연관통을 내려보내는 핵심 관절낭 타깃입니다.",
          "en": "Inferior pole of SIJ referring pseudo-radicular pain down posterior thigh and lateral calf."
        }
      },
      {
        "code": "T3",
        "color": "#ff9f43",
        "x": 68.0,
        "y": 68.0,
        "role": {
          "ko": "후관절·신경근점",
          "en": "Facet & Nerve Root Target"
        },
        "name": {
          "ko": "T3: 이상근-천장관절 관절낭 연접부 및 좌골신경 교차점",
          "en": "T3: Ventral SIJ Capsule-Piriformis Myofascial Continuity Point"
        },
        "desc": {
          "ko": "[표적 해부] 천장관절 전방·하방 관절낭과 바로 맞닿아 기시하는 이상근 근복.\n[촉지 및 시술] 천장관절 염증·잠김이 이상근 연축으로 번지는 관절-근육 연쇄 고리를 차단합니다.",
          "en": "SIJ-piriformis junction where joint dysfunction triggers secondary piriformis spasm."
        }
      }
    ],
    "anatomicalLabels": [
      "Referred Pain Map",
      "Posterior Radiation Zone",
      "Lateral Thigh Zone",
      "Knee & Leg Zone"
    ],
    "rifeFreq": 528,
    "searchKeywords": "천장관절 방사지도 통증지도 좌골신경통 오인 슬관절 관련통 AKA 활주법 박창혁 도수치료 도수재활"
  },
  {
    "id": 49,
    "catId": "rehab_aka",
    "catNum": 7,
    "category": {
      "ko": "도수 재활 및 관절역학(AKA) 치료",
      "en": "Manual Rehabilitation & Arthrokinematics (AKA)"
    },
    "mechanism": {
      "ko": "요추 분절 활주 장애 (Lumbar Segmental Gliding Disorder) - 후관절 감돈",
      "en": "Lumbar Segmental Gliding Dysfunction - Facet Joint Meniscoid Entrapment"
    },
    "mechTags": [
      "nerve",
      "tendon"
    ],
    "title": {
      "ko": "요추 추간관절 증후군 및 후관절 기능이상",
      "en": "Lumbar Facet Joint Syndrome & Arthrokinematic Gliding"
    },
    "subtitle": {
      "ko": "극돌기 지렛대를 이용한 비폭력적 1mm 분절 미세 활주 (Segmental Glide)",
      "en": "Non-thrust 1mm Segmental Gliding using Spinous Process Lever"
    },
    "symptoms": {
      "ko": "허리를 뒤로 젖히거나 회전할 때 찌르는 듯한 국소 요통, 아침 기상 시 허리 뻣뻣함(강직), 둔부 상방으로 퍼지는 연관통.",
      "en": "Stabbing localized LBP on lumbar extension and rotation, morning stiffness, referred pain to upper buttock."
    },
    "pathophysiology": {
      "ko": "요추 추간관절낭 내부의 미세 활주 장애 및 활액막 감돈(Meniscoid entrapment). 강제적 척추 견인은 천장관절을 자극하므로 금기이며, 극돌기 지렛대를 이용한 분절별 미세 활주가 필수.",
      "en": "Facet capsular gliding impairment and meniscoid entrapment. Forced traction is contraindicated; gentle spinous process lever gliding is essential."
    },
    "targetTissues": {
      "ko": "요추 L4-L5, L5-S1 추간관절 후관절낭, 다열근 심부 건부착부.",
      "en": "L4-L5, L5-S1 facet joint capsules, deep multifidus tendon attachments."
    },
    "palpation": {
      "ko": "요추 극돌기 외측 1.5~2cm 지점 추간관절 분절별 압통 촉진 및 척추 신전-회전 유발 검사.",
      "en": "Palpation 1.5-2cm lateral to spinous processes for segmental tenderness and extension-rotation provocation."
    },
    "clinicalCase": {
      "ko": "뒤로 허리를 전혀 젖히지 못하던 38세 만성 요통 환자. 극돌기 지렛대를 활용한 AKA L4-L5 비폭력 분절 미세 활주 치료 후 젖힘 각도 45도 정상 회복 및 통증 소실.",
      "en": "38-year-old unable to extend lumbar spine. AKA L4-L5 non-thrust segmental glide restored full 45-degree extension with zero pain."
    },
    "diagram": "images/diagrams/aka_extracted_8.jpg",
    "targets": [
      {
        "code": "T1",
        "color": "#ff334b",
        "x": 32.0,
        "y": 60.0,
        "role": {
          "ko": "주 신경포착점",
          "en": "Primary Nerve Entrapment"
        },
        "name": {
          "ko": "T1: 요추 L4-L5 후관절(Facet Joint) 유두돌기 외측 내측지 포착점",
          "en": "T1: L4-L5 Facet Joint Mamillary Process Medial Branch Point"
        },
        "desc": {
          "ko": "[표적 해부] L4-L5 상관절돌기 유두돌기(Mamillary process)와 횡돌기 기저부 고랑을 지나는 척수신경 후지 내측지 및 유두-부돌기 인대(HP-LP-01).\n[촉지 및 시술] L4·L5 극돌기 외측 2cm 제2선 심부 골막 접촉점 및 AKA 후관절 미세 활주. 후관절성 요통의 제1 타깃입니다.",
          "en": "L4-L5 facet joint capsule and medial branch groove under mamillo-accessory ligament."
        }
      },
      {
        "code": "T2",
        "color": "#00f5d4",
        "x": 74.0,
        "y": 50.0,
        "role": {
          "ko": "후관절·신경근점",
          "en": "Facet & Nerve Root Target"
        },
        "name": {
          "ko": "T2: 요천추 이행부 L5-S1 후관절낭 및 다열근 삼각지대 타깃",
          "en": "T2: L5-S1 Lumbosacral Facet Joint & Multifidus Triangle Point"
        },
        "desc": {
          "ko": "[표적 해부] 체중 부하와 전단력이 가장 많이 걸리는 L5-S1 후관절낭 및 천골 상면 심부 다열근(HP-LP-02).\n[촉지 및 시술] L5 극돌기와 PSIS 사이 삼각 함요처 심부. 만성 재발성 요통의 하부 중심축을 복원합니다.",
          "en": "L5-S1 lumbosacral facet joint capsule inside the multifidus triangle."
        }
      },
      {
        "code": "T3",
        "color": "#ff9f43",
        "x": 54.0,
        "y": 72.0,
        "role": {
          "ko": "힘줄·골막 부착점",
          "en": "Tendon & Periosteal Target"
        },
        "name": {
          "ko": "T3: 장골능 후연 요장늑근(Iliocostalis Lumborum) 골막 부착점 (제3·4선)",
          "en": "T3: Posterior Iliac Crest Iliocostalis Lumborum Periosteal Contact"
        },
        "desc": {
          "ko": "[표적 해부] 장골능 후상연에 정지하는 요장늑근·흉최장근 공동 건막 골막점(HP-LP-03).\n[촉지 및 시술] 후관절 잠김 시 보상적으로 굳어 있는 천층 척추기립근의 골막 견인력을 해제합니다.",
          "en": "Periosteal insertion of iliocostalis lumborum on posterior iliac crest."
        }
      }
    ],
    "anatomicalLabels": [
      "Lumbar Facet Joint",
      "Spinous Process Lever",
      "Joint Play Restoration",
      "Deep Multifidus"
    ],
    "rifeFreq": 528,
    "searchKeywords": "요추 추간관절 후관절 증후군 Facet Joint 신전통증 극돌기 지렛대 AKA 분절활주 박창혁 도수치료 도수재활"
  },
  {
    "id": 50,
    "catId": "rehab_aka",
    "catNum": 7,
    "category": {
      "ko": "도수 재활 및 관절역학(AKA) 치료",
      "en": "Manual Rehabilitation & Arthrokinematics (AKA)"
    },
    "mechanism": {
      "ko": "관절낭 구축 및 연부조직 단축 (Joint Contracture & Capsular Shortening)",
      "en": "Joint Contracture & Capsular Shortening - Convex-Concave Law"
    },
    "mechTags": [
      "tendon"
    ],
    "title": {
      "ko": "골반 관절구축 및 관절낭 연부조직 단축증",
      "en": "Spino-Pelvic Joint Contracture & Capsular Shortening"
    },
    "subtitle": {
      "ko": "볼록-오목 법칙에 입각한 10~15분 AKA 장시간 저강도 신장요법",
      "en": "Convex-Concave Law 10-15 Min Prolonged Low-Load Stretch"
    },
    "symptoms": {
      "ko": "척추·골반의 심한 가동범위 제한(ROM 상실), 보행 시 골반 뒤틀림, 장시간 앉아있거나 일어설 때 골반 주변의 극심한 당김과 묵직함.",
      "en": "Severe spinal/pelvic ROM limitation, pelvic twisting during gait, tight pulling sensation around pelvis."
    },
    "pathophysiology": {
      "ko": "관절면의 일시적 장애인 '기능이상(Dysfunction)'을 넘어 관절낭, 인대, 근막 등 연부조직이 기질적으로 유착 및 단축된 '관절구축(Contracture)' 상태. 무리한 스트레칭은 악화시키며 1차 기능이상 해결 후 볼록-오목 법칙에 따른 10~15분 장시간 신장이 필요.",
      "en": "Joint contracture with fibrous shortening of capsules and ligaments. Requires first treating dysfunction, then 10-15 min low-load stretch under convex-concave law."
    },
    "targetTissues": {
      "ko": "천장인대 복합체, 후천장인대, 장요인대 심부 섬유.",
      "en": "Sacroiliac ligament complex, posterior SI ligament, deep iliolumbar ligament."
    },
    "palpation": {
      "ko": "최대 이완 위치(LPP)에서 관절포 끝느낌(End-feel) 평가 및 연부조직 섬유화 구축 부위 촉진.",
      "en": "End-feel assessment in loose-packed position (LPP) and palpation of fibrotic contracture."
    },
    "clinicalCase": {
      "ko": "수년간의 만성 골반통으로 보행 불균형과 골반 비대칭이 심했던 61세 환자. 1차 기능이상 치료 후 AKA 관절낭 신장운동(12분 지속 신장) 4회 적용으로 단축된 관절포 인대가 정상 신장되며 가동범위 100% 회복.",
      "en": "61-year-old with chronic pelvic contracture. After resolving dysfunction, 4 sessions of 12-min low-load stretch restored 100% full ROM."
    },
    "diagram": "images/diagrams/aka_extracted_7.jpg",
    "targets": [
      {
        "code": "T1",
        "color": "#ff334b",
        "x": 27.0,
        "y": 56.0,
        "role": {
          "ko": "핵심 후관절·신경근점",
          "en": "Primary Facet & Root Target"
        },
        "name": {
          "ko": "T1: 천장관절(SIJ) 배측 관절낭 및 단·장후천장인대 구축 이완점",
          "en": "T1: Dorsal SIJ Capsule & Short/Long Posterior Sacroiliac Ligaments"
        },
        "desc": {
          "ko": "[표적 해부] 천골과 장골을 단단히 묶고 있는 단후천장인대(수평 섬유) 및 장후천장인대(수직 섬유) 관절낭 복합체.\n[촉지 및 시술] 만성 골반 비틀림과 관절낭 섬유화로 소실된 1~2mm 관절 놀이를 회복시키는 제1 관절낭 타깃입니다.",
          "en": "Short and long posterior sacroiliac ligaments and dorsal SIJ capsule."
        }
      },
      {
        "code": "T2",
        "color": "#00f5d4",
        "x": 73.0,
        "y": 56.0,
        "role": {
          "ko": "힘줄·골막 부착점",
          "en": "Tendon & Periosteal Target"
        },
        "name": {
          "ko": "T2: 고관절 후방 관절낭(좌골대퇴인대) 및 외회전근 단축 이완점",
          "en": "T2: Posterior Hip Capsule (Ischiofemoral Ligament) & External Rotators"
        },
        "desc": {
          "ko": "[표적 해부] 고관절 후방 관절낭(좌골대퇴인대) 및 대전자 후면 외회전근 부착부.\n[촉지 및 시술] 골반 관절구축과 항상 짝을 이루는 고관절 내·외회전 ROM 제한을 동시에 풀어줍니다.",
          "en": "Posterior hip joint capsule (ischiofemoral ligament) and retro-trochanteric insertion."
        }
      },
      {
        "code": "T3",
        "color": "#ff9f43",
        "x": 50.0,
        "y": 42.0,
        "role": {
          "ko": "힘줄·골막 부착점",
          "en": "Tendon & Periosteal Target"
        },
        "name": {
          "ko": "T3: 치골결합(Pubic Symphysis)·내전근 기시부 전방 골반링 균형점",
          "en": "T3: Anterior Pelvic Ring Adductor-Inguinal Balance Relay"
        },
        "desc": {
          "ko": "[표적 해부] 골반 후방(천장관절)과 짝힘을 이루는 전외측 장골근·대퇴근막장근 및 고관절 전방 관절낭.\n[촉지 및 시술] 골반 전·후방 관절낭의 장력 균형을 맞추어 골반 교정 효과를 유지시킵니다.",
          "en": "Anterolateral pelvic ring balance point over anterior hip capsule and TFL/iliacus."
        }
      }
    ],
    "anatomicalLabels": [
      "Convex-Concave Law",
      "Joint Distraction",
      "Tangential Gliding",
      "Loose-Packed Position (LPP)"
    ],
    "rifeFreq": 528,
    "searchKeywords": "관절구축 관절낭 단축 볼록오목법칙 AKA 신장운동 LPP 최대이완위치 박창혁 도수치료 도수재활"
  },
  {
    "id": 51,
    "catId": "rehab_aka",
    "catNum": 7,
    "category": {
      "ko": "도수 재활 및 관절역학(AKA) 치료",
      "en": "Manual Rehabilitation & Arthrokinematics (AKA)"
    },
    "mechanism": {
      "ko": "통합 임상 의사결정 알고리즘 (5-Step Clinical Algorithm)",
      "en": "Integrated Clinical Decision Algorithm - SI Joint to Facet to Myofascial"
    },
    "mechTags": [
      "nerve",
      "tendon",
      "autonomic"
    ],
    "title": {
      "ko": "박창혁 박사 AKA 5단계 표준 임상 의사결정 프로토콜",
      "en": "Dr. Park Chang-hyuk AKA 5-Step Clinical Decision Protocol"
    },
    "subtitle": {
      "ko": "기질적 손상 배제 ➔ 천장관절 1차 치료 ➔ 추간관절 ➔ 연부조직 순차적 정밀 도수치료",
      "en": "Red Flags Exclusion ➔ SI Joint 1st ➔ Facet 2nd ➔ Soft Tissue Sequential Protocol"
    },
    "symptoms": {
      "ko": "다양한 병원에서 디스크, 협착증, 이상근증후군 등 서로 다른 진단을 받고 치료에 실패한 난치성 만성 요통 및 원인 불명 골반통.",
      "en": "Refractory chronic low back and pelvic pain misdiagnosed across multiple clinics with failed treatments."
    },
    "pathophysiology": {
      "ko": "기질적 손상(Red Flags) 배제 후, 요통의 1차 진원지인 천장관절(SI Joint)을 우선 평가/치료하고, 잔여 통증에 따라 추간관절 및 근막 연부조직을 순차적으로 해결하는 박창혁 박사의 표준화된 비수술 임상 알고리즘.",
      "en": "Standardized non-surgical algorithm excluding red flags, treating SI joint epicenter first, then facet joints, and finally residual myofascial tension."
    },
    "targetTissues": {
      "ko": "천장관절(1차) -> 요추 추간관절(2차) -> 둔부·척추 심부 연부조직(3차).",
      "en": "SI joint (1st) -> Lumbar facet (2nd) -> Deep paraspinal/gluteal soft tissues (3rd)."
    },
    "palpation": {
      "ko": "1단계 기질적 배제 -> 2단계 천장관절 관절 놀이 촉진 -> 3단계 전굴-상방 활주 후 즉각 반응 확인 -> 4단계 추간관절 평가.",
      "en": "Step 1 red flag exclusion -> Step 2 SI joint play palpation -> Step 3 immediate response check -> Step 4 facet evaluation."
    },
    "clinicalCase": {
      "ko": "10년간 호전과 악화를 반복하며 마약성 진통제까지 복용하던 55세 환자. 박창혁 박사 AKA 5단계 표준 프로토콜을 체계적으로 적용하여 3주 만에 통증 0 달성 및 진통제 완전 중단.",
      "en": "55-year-old on opioid analgesics for 10-year refractory pain. 5-step systematic AKA algorithm achieved zero pain in 3 weeks with full drug cessation."
    },
    "diagram": "images/diagrams/aka_extracted_12.jpg",
    "targets": [
      {
        "code": "T1",
        "color": "#ff334b",
        "x": 50.0,
        "y": 38.0,
        "role": {
          "ko": "핵심 후관절·신경근점",
          "en": "Primary Facet & Root Target"
        },
        "name": {
          "ko": "T1: 제1축: 천장관절(SIJ) 기준점 — 전신 관절 연쇄의 주춧돌 스위치",
          "en": "T1: Step 1 Master Axis: Sacroiliac Joint (SIJ) Foundation Switch"
        },
        "desc": {
          "ko": "[표적 해부] 박창혁 박사 AKA 5단계 임상 의사결정의 제1 관문인 천장관절(PSIS 내하방 상·하극 관절낭).\n[촉지 및 시술] 모든 척추·사지 난치성 통증에서 골반 중심축(SIJ)의 관절 놀이(Joint play) 결손을 최우선으로 평가·복원합니다.",
          "en": "Step 1 of Dr. Park's AKA 5-Stage Protocol: Sacroiliac Joint primary foundation switch."
        }
      },
      {
        "code": "T2",
        "color": "#00f5d4",
        "x": 50.0,
        "y": 70.0,
        "role": {
          "ko": "후관절·신경근점",
          "en": "Facet & Nerve Root Target"
        },
        "name": {
          "ko": "T2: 제2축: 요천추·경흉추 이행부 후관절(Facet) 분절 잠김 해제점",
          "en": "T2: Step 2 Segmental Axis: Lumbosacral & Cervicothoracic Facet Switch"
        },
        "desc": {
          "ko": "[표적 해부] 척추 만곡이 전환되는 핵심 분절(L4-S1, T12-L1, C7-T1, C1-C2) 후관절낭.\n[촉지 및 시술] 100% 비폭력(Non-thrust) 미세 신연·활주·구름 기법과 노바셀 세포전압(-50mV~-70mV)을 결합하여 분절 운동성을 복원합니다.",
          "en": "Step 2 of AKA Protocol: Transitional spinal facet joints (L4-S1, T-L, C-T, C1-C2)."
        }
      },
      {
        "code": "T3",
        "color": "#ff9f43",
        "x": 68.0,
        "y": 54.0,
        "role": {
          "ko": "힘줄·골막 부착점",
          "en": "Tendon & Periosteal Target"
        },
        "name": {
          "ko": "T3: 제3축: 말초 관절낭(어깨·고관절·무릎·발목) 요철(凹凸) 활주 타깃",
          "en": "T3: Step 3 Peripheral Axis: Convex-Concave Intra-articular Glide Point"
        },
        "desc": {
          "ko": "[표적 해부] 사지 대관절의 관절낭 부착연 및 골막 접촉 골막점.\n[촉지 및 시술] 관절면의 요철(凹凸) 법칙에 따른 정밀 벡터 제어로 관절 내 마찰과 통증을 즉각 소실시킵니다.",
          "en": "Step 3 of AKA Protocol: Peripheral joint capsule glide and periosteal Periosteal Contact point."
        }
      }
    ],
    "anatomicalLabels": [
      "5-Step Decision Tree",
      "SI Joint Primary",
      "Facet Joint Secondary",
      "Myofascial Residual"
    ],
    "rifeFreq": 528,
    "searchKeywords": "박창혁 박사 AKA 5단계 임상프로토콜 표준알고리즘 천장관절 추간관절 도수치료 의사결정트리 도수재활"
  },
  {
    "id": 52,
    "catId": "head_neck",
    "catNum": 1,
    "category": {
      "ko": "두경부 및 안면 질환",
      "en": "Head, Neck & Facial Disorders"
    },
    "mechanism": {
      "ko": "관절원판·저작근 견인 / 신경유착",
      "en": "[TMJ / Nerve] Disc Derangement & Trigeminal Entrapment"
    },
    "mechTags": [
      "tendon",
      "nerve",
      "autonomic"
    ],
    "title": {
      "ko": "턱관절 장애 증후군 (TMJ 관절원판·외측익돌근·이개측두신경통)",
      "en": "TMJ Disorder Syndrome (Disc, Lateral Pterygoid & Auriculotemporal N.)"
    },
    "symptoms": {
      "ko": "입을 벌리거나 씹을 때 귀 앞 턱관절에서 '딱(Clicking)' 소리가 나거나 걸려서 크게 벌어지지 않음(개구 제한). 관자놀이 두통, 귀 통증·이명, 뒷목 결림이 연쇄 동반됨.",
      "en": "Clicking, locking, or limited mouth opening at the temporomandibular joint with temporal headache, ear pain, tinnitus, and upper cervical stiffness."
    },
    "pathophysiology": {
      "ko": "외측익돌근 상·하두의 과긴장으로 관절원판(Disc)이 전내측으로 변위되고, 후방 원판후조직(Retrodiscal tissue)과 이개측두신경(V3)·교근신경이 압박·감작됨. 접형골-상부경추(C1-C2) 중심축 불균형(볼링볼 증후군)이 동반됨.",
      "en": "Hypertonicity of lateral pterygoid displaces the TMJ articular disc anteromedially, compressing retrodiscal tissue and auriculotemporal nerve (V3) along with C1-C2 axis imbalance."
    },
    "targetTissues": {
      "ko": "외측익돌근(상·하두), 교근(천층·심층), 측두근 건막, 이개측두신경 및 C1-C2 후두하 신경총.",
      "en": "Lateral pterygoid, masseter, temporalis tendon, auriculotemporal nerve, and C1-C2 suboccipital plexus."
    },
    "palpation": {
      "ko": "① 하악절흔(관골궁 하방) 외측익돌근 심부점 ② 하악각 교근 심부 결절점 ③ 오훼돌기 측두근 착점 ④ 귀 뒤 유양돌기-C1 횡돌기 자율신경점.",
      "en": "1) Mandibular notch lateral pterygoid 2) Masseter angle 3) Coronoid temporalis insertion 4) Retro-mastoid C1-C2 relay."
    },
    "clinicalCase": {
      "ko": "7년간 양측 난치성 턱관절 통증·개구 제한(손가락 2개 미만) 및 만성 편두통·이명을 호소하던 환자. 하악절흔 외측익돌근, 교근 심부, 이개측두신경 및 C1-C2 중심축에 노바셀(-70mV) 고전압 미세전류 및 정밀 골막 통전 시술 후 개구 범위 정상화 및 두통·이명 90% 소실.",
      "en": "7-year bilateral refractory TMJ pain with locking and tinnitus (Ch.2 Case 2-2-1); normal mouth opening and 90% symptom resolution achieved via 4-point NovaCell TMJ protocol."
    },
    "diagram": "images/diagrams/diagram_52.png",
    "rifeFreq": 528,
    "anatomicalLabels": [
      "Lateral Pterygoid",
      "Masseter Deep Belly",
      "Temporalis & Coronoid Process",
      "Auriculotemporal Nerve & C1-C2"
    ],
    "searchKeywords": "턱관절 TMJ 악관절 개구장애 턱소리 이갈이 외측익돌근 교근 이개측두신경",
    "targets": [
      {
        "code": "T1",
        "color": "#ff334b",
        "x": 48.5,
        "y": 44.0,
        "role": {
          "ko": "주 신경포착점",
          "en": "Primary Nerve Entrapment"
        },
        "name": {
          "ko": "T1: 하악절흔 외측익돌근·교근신경 심부 포착점 (①번 타깃)",
          "en": "T1: Mandibular Notch Lateral Pterygoid & Masseteric Nerve (Target 1)"
        },
        "desc": {
          "ko": "[표적 해부] 관골궁 하방 하악절흔(Mandibular notch) 심부의 외측익돌근 상·하두 및 교근신경(HP-TM-01).\n[촉지 및 시술] 귀 앞 2.5cm 관골궁 바로 아래 입을 살짝 벌릴 때 열리는 반달형 함요처. 관절원판(디스크)을 앞으로 잡아당기는 주범을 직접 이완합니다.",
          "en": "Lateral pterygoid and masseteric nerve deep to mandibular notch below zygomatic arch."
        }
      },
      {
        "code": "T2",
        "color": "#00f5d4",
        "x": 43.5,
        "y": 58.0,
        "role": {
          "ko": "힘줄·골막 부착점",
          "en": "Tendon & Periosteal Target"
        },
        "name": {
          "ko": "T2: 하악각·하악지 교근(Masseter) 심부 결절 골막 부착점 (②번 타깃)",
          "en": "T2: Mandibular Angle Masseter Insertion Periosteal Contact (Target 2)"
        },
        "desc": {
          "ko": "[표적 해부] 하악각(Mandibular angle) 및 하악지 외측면의 교근 천·심층 골막 부착부(HP-TM-02, ②).\n[촉지 및 시술] 어금니를 깨물 때 불거지는 턱 끝 모서리 근육과 골막. 이갈이·악물기로 인한 턱관절 수직 압박력을 해소합니다.",
          "en": "Masseter muscle belly and periosteal insertion at mandibular angle."
        }
      },
      {
        "code": "T3",
        "color": "#ff9f43",
        "x": 43.0,
        "y": 35.5,
        "role": {
          "ko": "힘줄·골막 부착점",
          "en": "Tendon & Periosteal Target"
        },
        "name": {
          "ko": "T3: 오훼돌기(Coronoid Process) 측두근 정지건 및 전방 관절낭점 (③번 타깃)",
          "en": "T3: Coronoid Process Temporalis Tendon Insertion (Target 3)"
        },
        "desc": {
          "ko": "[표적 해부] 측두근 전체 섬유가 농축되어 정지하는 하악골 오훼돌기(Coronoid process) 첨부 골막( ③).\n[촉지 및 시술] 관골궁 상·하연 측두근 건막. 측두부 편두통과 하악 후방 견인통을 동시에 차단합니다.",
          "en": "Temporalis tendon insertion on coronoid process of mandible."
        }
      },
      {
        "code": "T4",
        "color": "#38bdf8",
        "x": 59.0,
        "y": 41.5,
        "role": {
          "ko": "후관절·신경근점",
          "en": "Facet & Nerve Root Target"
        },
        "name": {
          "ko": "T4: 이주 전후방 이개측두신경·경돌하악인대 및 C1-C2 중심축점 (④번 타깃)",
          "en": "T4: Auriculotemporal Nerve & C1-C2 Suboccipital Axis (Target 4)"
        },
        "desc": {
          "ko": "[표적 해부] 귀 앞 관절낭 후방 이개측두신경(HP-TM-03) 및 귀 뒤 유양돌기-C1 횡돌기 삼차-경추 신경망( ④).\n[촉지 및 시술] 턱관절 후방 염증통과 동반 이명·뒷목 경직(볼링볼 증후군)을 근본 리셋합니다.",
          "en": "Auriculotemporal nerve and C1-C2 trigeminocervical axis behind TMJ."
        }
      }
    ]
  },
  {
    "id": 53,
    "catId": "head_neck",
    "catNum": 1,
    "category": {
      "ko": "두경부 및 안면 질환",
      "en": "Head, Neck & Facial Disorders"
    },
    "mechanism": {
      "ko": "뇌신경 포착 / 자율신경 허혈",
      "en": "[Cranial Nerve / SGB] Facial Nerve (CN VII) & Inner Ear Ischemia"
    },
    "mechTags": [
      "nerve",
      "autonomic"
    ],
    "title": {
      "ko": "말초성 안면신경마비 후유증 (벨마비) 및 난치성 이명·난청",
      "en": "Facial Nerve Palsy Sequelae (Bell's Palsy) & Refractory Tinnitus"
    },
    "symptoms": {
      "ko": "안면 비대칭, 눈 감김 불완전, 입꼬리 처짐 및 연합운동(Synkinesis) 또는 귀 안에서 삐~ 소리가 나는 고음성 이명·먹먹함(이충만감).",
      "en": "Facial asymmetry, incomplete eye closure, mouth corner droop, synkinesis, or persistent high-pitched tinnitus and aural fullness."
    },
    "pathophysiology": {
      "ko": "경돌유돌공(Stylomastoid foramen) 출구에서 안면신경(CN VII) 주간부가 부종·허혈로 포착되거나, 경추 교감신경(성상신경절 SGB) 항진으로 내이(달팽이관) 미소혈류가 저하됨.",
      "en": "Edema/ischemia of facial nerve (CN VII) trunk at stylomastoid foramen and cochlear microvascular deficit from cervical sympathetic hyperactivity."
    },
    "targetTissues": {
      "ko": "경돌유돌공 안면신경 주간부, 성상신경절(C6 SGB), 흉쇄유돌근(SCM) 쇄골지, 상후거근(SPS) 및 안면 표정근 운동점.",
      "en": "Stylomastoid foramen CN VII trunk, C6 Stellate Ganglion, SCM clavicular head, SPS, and facial motor points."
    },
    "palpation": {
      "ko": "① 유양돌기 전하방 경돌유돌공 ② C6 성상신경절 및 중부 경추 ③ SCM 쇄골지 하단 ④ 상후거근·승모근 상부 및 협근·안륜근 운동점.",
      "en": "1) Stylomastoid foramen 2) C6 Stellate Ganglion 3) Lower SCM clavicular head 4) SPS/Upper Trapezius & facial motor branches."
    },
    "clinicalCase": {
      "ko": "벨마비 후유증으로 인한 안면 강직과 고음성 이명이 동반된 환자. 경돌유돌공 안면신경 주간부, C6 성상신경절(SGB), SCM 쇄골지 및 안면 분지에 노바셀(-70mV) 미세전류 통전 후 안면 대칭성 회복 및 이명 강도 80% 이상 감소.",
      "en": "Bell's palsy sequelae with facial stiffness and tinnitus (Ch.2 Case 3); significant facial symmetry recovery and >80% tinnitus reduction via CN VII + SGB protocol."
    },
    "diagram": "images/diagrams/diagram_53.png",
    "rifeFreq": 528,
    "anatomicalLabels": [
      "Stylomastoid Foramen (CN VII)",
      "Cochlea & Vestibulocochlear N. (CN VIII)",
      "Stellate Ganglion (C6 SGB)",
      "SCM & Upper Trapezius/SPS"
    ],
    "searchKeywords": "안면마비 구안와사 벨마비 이명 난청 어지럼증 경돌유돌공 성상신경절 SGB",
    "targets": [
      {
        "code": "T1",
        "color": "#ff334b",
        "x": 51.5,
        "y": 43.0,
        "role": {
          "ko": "주 신경포착점",
          "en": "Primary Nerve Entrapment"
        },
        "name": {
          "ko": "T1: 경돌유돌공 안면신경(CN VII) 주간부 및 내이 신경혈관점 (①번 타깃)",
          "en": "T1: Stylomastoid Foramen Facial Nerve Trunk & Inner Ear Gate (Target 1)"
        },
        "desc": {
          "ko": "[표적 해부] 귓불 뒤 유양돌기 전하방과 하악지 사이의 경돌유돌공 안면신경(CN VII) 출구 및 내이 미소순환 분지(HP-FP-01).\n[촉지 및 시술] 귓불 바로 뒤 오목한 골막 함요처. 안면신경 부종 감압과 달팽이관(이명) 혈류 개선의 제1 관문입니다.",
          "en": "Stylomastoid foramen exit of facial nerve (CN VII) anterior-inferior to mastoid process."
        }
      },
      {
        "code": "T2",
        "color": "#00f5d4",
        "x": 53.5,
        "y": 58.5,
        "role": {
          "ko": "자율신경 조절점",
          "en": "Autonomic Control Target"
        },
        "name": {
          "ko": "T2: 경추 C5-C6 성상신경절(SGB) 후외측 및 경추 교감신경점 (②번 타깃)",
          "en": "T2: C5-C6 Stellate Ganglion & Cervical Sympathetic Chain (Target 2)"
        },
        "desc": {
          "ko": "[표적 해부] 중하부 경추(C5-C6) 횡돌기 및 성상신경절(Stellate ganglion) 자율신경 반사구역( ②).\n[촉지 및 시술] 안면신경과 내이(달팽이관)로 가는 혈류량을 급격히 증가시켜 신경 재생 속도를 배가시킵니다.",
          "en": "C5-C6 cervical sympathetic chain and stellate ganglion zone boosting facial/cochlear blood flow."
        }
      },
      {
        "code": "T3",
        "color": "#ff9f43",
        "x": 56.5,
        "y": 68.0,
        "role": {
          "ko": "신경 주행·분지점",
          "en": "Nerve Pathway Target"
        },
        "name": {
          "ko": "T3: 흉쇄유돌근(SCM) 쇄골두 하단 및 쇄골상 신경혈관 관문점 (③번 타깃)",
          "en": "T3: Lower SCM Clavicular Head & Supraclavicular Vascular Gate (Target 3)"
        },
        "desc": {
          "ko": "[표적 해부] 쇄골 내측 상연 SCM 쇄골지 부착부 및 경동맥초·추골동맥 기시부 인접 구역( ③).\n[촉지 및 시술] 두경부에서 내려오는 정맥·림프 울혈을 해소하여 안면부 및 내이 부종을 빼줍니다.",
          "en": "Inferior clavicular head of SCM opening cephalic venous and lymphatic drainage."
        }
      },
      {
        "code": "T4",
        "color": "#38bdf8",
        "x": 45.0,
        "y": 56.0,
        "role": {
          "ko": "심부 근복·근막점",
          "en": "Deep Myofascial Trigger Point"
        },
        "name": {
          "ko": "T4: 상후거근·상부승모근 및 안면 표정근(협근·안륜근) 말초 운동점 (④번 타깃)",
          "en": "T4: Upper Trapezius/SPS & Buccinator/Orbicularis Oculi Motor Points (Target 4)"
        },
        "desc": {
          "ko": "[표적 해부] 견갑 상부 상후거근( ④) 및 입꼬리 외측 협근지점(HP-FP-02)·눈가 안륜근 운동점(HP-FP-03).\n[촉지 및 시술] 마비된 안면 표정근의 수축력을 되살리고 연합운동(구축)을 부드럽게 이완합니다.",
          "en": "Upper trapezius/SPS point plus buccinator and orbicularis oculi motor terminals."
        }
      }
    ]
  },
  {
    "id": 54,
    "catId": "head_neck",
    "catNum": 1,
    "category": {
      "ko": "두경부 및 안면 질환",
      "en": "Head, Neck & Facial Disorders"
    },
    "mechanism": {
      "ko": "추간판·후관절 신경근염 / 인대 연관통",
      "en": "[Cervical HNP / Line 1-4] Sinuvertebral Nerve & Facet Radiculopathy"
    },
    "mechTags": [
      "nerve",
      "tendon"
    ],
    "title": {
      "ko": "경추 추간판 탈출증(목디스크 HNP) 및 경추 제1~4선 후관절 증후군",
      "en": "Cervical Disc Herniation (HNP) & Cervical 4-Line Facet Syndrome"
    },
    "symptoms": {
      "ko": "목을 뒤로 젖히거나 돌릴 때 목 중앙과 날개뼈 안쪽이 쑤시고, 어깨·팔·손가락 끝까지 찌릿한 방사통과 감각저하가 내려감.",
      "en": "Deep neck and interscapular pain worsening on cervical extension/rotation, radiating down the shoulder, arm, and fingers with paresthesia."
    },
    "pathophysiology": {
      "ko": "경추 추간판(C4-C5, C5-C6, C6-C7) 섬유륜 파열·팽륜으로 척추동신경(Sinuvertebral n.)과 경추 신경근이 자극되고, 항인대(제1선)·후관절 다열근(제2선)·최장근(제3선)·견갑거근/사각근(제4선)이 연쇄 구축됨.",
      "en": "Cervical disc protrusion irritates the sinuvertebral nerve and nerve root, triggering protective spasm across Cervical Lines 1 to 4 (nuchal ligament, multifidus, facet capsule, and scalenes)."
    },
    "targetTissues": {
      "ko": "경추 제1선(극돌기·항인대), 제2선(C3-C7 후관절·다열근·반극근), 제3선(최장근·판상근), 제4선(횡돌기 후결절·사각근·견갑거근).",
      "en": "Cervical Line 1 (spinous process/nuchal ligament), Line 2 (facet/multifidus), Line 3 (longissimus), Line 4 (transverse process/scalenes)."
    },
    "palpation": {
      "ko": "노바셀 경추·상흉추 4대 정밀 치료선(제1선 정중 극돌기 ~ 제4선 횡돌기 외측연) 순차 골막 접촉.",
      "en": "Sequential palpation and Periosteal Contact along NovaCell Cervical Treatment Lines 1, 2, 3, and 4 (Ch.3 Master Bible)."
    },
    "clinicalCase": {
      "ko": "신경성형술 및 수차례 주사 치료 후에도 팔 저림과 후경부 통증이 지속되던 파열성 경추 디스크 환자. 노바셀 경추 제1·2·3·4선 골막 부착부 및 -70mV 고전압 미세전류 집중 치료 후 신경근 부종이 소퇴되어 비수술로 방사통 완치.",
      "en": "Refractory cervical disc herniation with persistent radicular arm pain after neuroplasty (Ch.3 Case 3-8); full non-surgical resolution via Cervical 4-Line NovaCell protocol."
    },
    "diagram": "images/diagrams/diagram_54.png",
    "rifeFreq": 528,
    "anatomicalLabels": [
      "Line 1: Nuchal Ligament & Spinous Process",
      "Line 2: C3-C7 Multifidus & Facet Joint",
      "Line 3: Semispinalis & Longissimus",
      "Line 4: Transverse Process & Scalenes"
    ],
    "searchKeywords": "목디스크 경추추간판탈출증 HNP 일자목 거북목 경추후관절 팔저림 손저림 척추동신경",
    "targets": [
      {
        "code": "T1",
        "color": "#ff334b",
        "x": 51.8,
        "y": 43.5,
        "role": {
          "ko": "핵심 후관절·신경근점",
          "en": "Primary Facet & Root Target"
        },
        "name": {
          "ko": "T1: 경추 제1선: 정중 극돌기·항인대(Nuchal Ligament) 골막 부착점 (①번 타깃)",
          "en": "T1: Cervical Line 1: Midline Spinous Process & Nuchal Ligament (Target 1)"
        },
        "desc": {
          "ko": "[표적 해부] 후두골 외후두융기~C2~C7 극돌기 첨부를 잇는 항인대(Nuchal ligament) 및 극간인대.\n[촉지 및 시술] 뒷목 정중앙 극돌기 골막 타깃. 일자목·거북목으로 늘어난 후방 인대 장력과 중심성 디스크(척추동신경) 연관통을 잡아줍니다.",
          "en": "Midline cervical spinous processes (C2-C7) and nuchal ligament attachments."
        }
      },
      {
        "code": "T2",
        "color": "#00f5d4",
        "x": 46.0,
        "y": 45.0,
        "role": {
          "ko": "후관절·신경근점",
          "en": "Facet & Nerve Root Target"
        },
        "name": {
          "ko": "T2: 경추 제2선: C3-C7 추궁판·후관절 내측지 및 심부 다열근점 (②번 타깃)",
          "en": "T2: Cervical Line 2: C3-C7 Lamina, Facet & Deep Multifidus (Target 2)"
        },
        "desc": {
          "ko": "[표적 해부] 정중선 외측 1.5cm 추궁판(Lamina)·후관절낭 중간부 및 다열근·반극근(C3-C5 핵심 구역, ②).\n[촉지 및 시술] 경추 후관절 잠김과 디스크 신경근염의 후지 감작을 동시에 해소하는 최우선 골막·건 치료 라인입니다.",
          "en": "1.5cm lateral to midline over C3-C7 facet joints and deep multifidus/semispinalis."
        }
      },
      {
        "code": "T3",
        "color": "#ff9f43",
        "x": 56.0,
        "y": 45.5,
        "role": {
          "ko": "후관절·신경근점",
          "en": "Facet & Nerve Root Target"
        },
        "name": {
          "ko": "T3: 경추 제3선: 후관절 외측연·두판상근·경최장근 타깃 (③번 타깃)",
          "en": "T3: Cervical Line 3: Lateral Facet Pillar & Splenius/Longissimus (Target 3)"
        },
        "desc": {
          "ko": "[표적 해부] 정중선 외측 2.5~3cm 관절주(Articular pillar) 외측연 및 판상근·최장근( ③).\n[촉지 및 시술] 목을 옆으로 기울이거나 돌릴 때 날개뼈 상부로 뻗치는 근육-관절 사슬 통증을 차단합니다.",
          "en": "2.5-3cm lateral to midline along lateral border of cervical articular pillars."
        }
      },
      {
        "code": "T4",
        "color": "#38bdf8",
        "x": 43.8,
        "y": 42.5,
        "role": {
          "ko": "후관절·신경근점",
          "en": "Facet & Nerve Root Target"
        },
        "name": {
          "ko": "T4: 경추 제4선: C4-C7 횡돌기 후결절·추간공 출구 및 사각근·견갑거근점 (④번 타깃)",
          "en": "T4: Cervical Line 4: Transverse Process Posterior Tubercle & Nerve Root Exit (Target 4)"
        },
        "desc": {
          "ko": "[표적 해부] 측경부 횡돌기 후결절(추간공 신경근 출구 바로 뒤) 및 중사각근·견갑거근 기시부( ④).\n[촉지 및 시술] 추골동맥을 피해 후결절 골막을 정확히 접촉하여 팔·손가락으로 내려가는 디스크 방사통을 직접 감압합니다.",
          "en": "Posterior tubercle of C4-C7 transverse processes at intervertebral foramen exit."
        }
      }
    ]
  },
  {
    "id": 55,
    "catId": "shoulder_arm",
    "catNum": 2,
    "category": {
      "ko": "어깨, 상지 및 수부 질환",
      "en": "Shoulder, Arm, Wrist & Hand Diseases"
    },
    "mechanism": {
      "ko": "관절낭 유착 / 3대 말초신경 포착",
      "en": "[Adhesive Capsulitis] Capsule Fibrosis & Suprascapular/Axillary Nerve Block"
    },
    "mechTags": [
      "nerve",
      "tendon"
    ],
    "title": {
      "ko": "오십견 / 동결견 (유착성 관절낭염 · 상견갑·액와신경 및 관절낭 타깃)",
      "en": "Frozen Shoulder / Adhesive Capsulitis (Suprascapular & Axillary Nerve Protocol)"
    },
    "symptoms": {
      "ko": "어깨가 모든 방향(만세·열중쉬어·머리 빗기)으로 굳어 올라가지 않고, 밤에 옆으로 누우면 잠을 깨울 정도의 극심한 야간통 발생.",
      "en": "Global restriction of active and passive shoulder range of motion (abduction, external/internal rotation) with severe nocturnal pain."
    },
    "pathophysiology": {
      "ko": "관절와상완관절(GH joint) 하방 액와낭(Axillary recess)과 오구상완인대(CHL)의 섬유화·구축과 함께, 어깨 관절낭 감각의 90%를 지배하는 견갑상신경(견갑절흔)과 액와신경(사각공간)이 포착·과민화됨.",
      "en": "Fibrotic contracture of the glenohumeral axillary recess and coracohumeral ligament coupled with sensitization of suprascapular and axillary articular nerves."
    },
    "targetTissues": {
      "ko": "견갑절흔(견갑상신경), 사각공간(액와신경·소원근·대원근), 결절간구(상완이두근 장두건·전방 관절낭), 견갑배신경 및 요골신경 경계.",
      "en": "Suprascapular notch, quadrangular space (axillary n.), bicipital groove (long head of biceps/anterior capsule), and dorsal scapular nerve."
    },
    "palpation": {
      "ko": "① 견갑극 상방 견갑절흔(상견갑신경) ② 후방 사각공간(액와신경) ③ 견갑골 내측연(배측견갑신경) ④ 상완 후외측 요골신경구 및 전방 결절간구.",
      "en": "1) Suprascapular notch 2) Quadrangular space 3) Medial scapular border 4) Radial groove & anterior bicipital groove."
    },
    "clinicalCase": {
      "ko": "6개월간 옷을 입거나 머리를 감을 수 없던 중증 동결견 환자. 견갑상신경(견갑절흔), 액와신경(사각공간), 전방 결절간구 관절낭 및 견갑하근에 노바셀(-70mV) 통전 및 AKA 관절낭 하방 활주 시술 후 즉각 외전 각도 40도 이상 상승 및 야간통 소실.",
      "en": "Severe 6-month frozen shoulder (Ch.5 Case 5-3); >40-degree immediate abduction gain and nocturnal pain resolution via 4-point shoulder nerve & capsule protocol."
    },
    "diagram": "images/diagrams/diagram_55.png",
    "rifeFreq": 528,
    "anatomicalLabels": [
      "1. Suprascapular Nerve (Suprascapular Notch)",
      "2. Axillary Nerve (Quadrangular Space)",
      "3. Dorsal Scapular Nerve",
      "4. Radial Nerve & Bicipital Groove"
    ],
    "searchKeywords": "오십견 동결견 유착성관절낭염 어깨통증 야간통 상견갑신경 견갑상신경 액와신경 사각공간",
    "targets": [
      {
        "code": "T1",
        "color": "#ff334b",
        "x": 49.0,
        "y": 41.0,
        "role": {
          "ko": "주 신경포착점",
          "en": "Primary Nerve Entrapment"
        },
        "name": {
          "ko": "T1: 견갑절흔·극관절와절흔 상견갑신경(Suprascapular N.) 차단점 (①번 타깃)",
          "en": "T1: Suprascapular Notch Suprascapular Nerve Gate (Target 1)"
        },
        "desc": {
          "ko": "[표적 해부] 견갑극(Scapular spine) 중내측 상방 극상와 바닥의 견갑절흔 및 극관절와절흔 상견갑신경(HP-FS-01).\n[촉지 및 시술] 어깨 관절낭 감각의 70%를 담당하는 상견갑신경 포착을 해소하여 극심한 야간통과 외전 제한을 풀어줍니다.",
          "en": "Suprascapular nerve at suprascapular and spinoglenoid notches above scapular spine."
        }
      },
      {
        "code": "T2",
        "color": "#00f5d4",
        "x": 53.8,
        "y": 48.0,
        "role": {
          "ko": "힘줄·골막 부착점",
          "en": "Tendon & Periosteal Target"
        },
        "name": {
          "ko": "T2: 후방 사각공간(Quadrangular Space) 액와신경·후방 관절낭점 (②번 타깃)",
          "en": "T2: Quadrangular Space Axillary Nerve & Posterior Capsule (Target 2)"
        },
        "desc": {
          "ko": "[표적 해부] 소원근·대원근·상완삼두근 장두·상완골 외과경이 이루는 사각공간 액와신경 출구 및 하방 액와낭(HP-FS-02, ②).\n[촉지 및 시술] 어깨 뒤쪽 겨드랑이 주름 위 3cm 오목한 공간. 팔을 뒤로 돌리는 동작(열중쉬어) 제한과 삼각근 통증을 즉각 개선합니다.",
          "en": "Quadrangular space between teres minor, teres major, long head of triceps, and humeral neck."
        }
      },
      {
        "code": "T3",
        "color": "#ff9f43",
        "x": 46.0,
        "y": 44.5,
        "role": {
          "ko": "신경 주행·분지점",
          "en": "Nerve Pathway Target"
        },
        "name": {
          "ko": "T3: 견갑골 내측연 배측견갑신경(Dorsal Scapular N.) 견갑흉곽 잠금점 (③번 타깃)",
          "en": "T3: Medial Scapular Border Dorsal Scapular Nerve Point (Target 3)"
        },
        "desc": {
          "ko": "[표적 해부] 견갑골 상각~내측연을 따라 주행하는 배측견갑신경 및 능형근( ③).\n[촉지 및 시술] 관절와상완관절이 굳어 보상적으로 잠긴 견갑골 상방회전 리듬(2:1 Scapulohumeral rhythm)을 회복시킵니다.",
          "en": "Dorsal scapular nerve along medial scapular border restoring scapulohumeral rhythm."
        }
      },
      {
        "code": "T4",
        "color": "#38bdf8",
        "x": 54.5,
        "y": 54.0,
        "role": {
          "ko": "힘줄·골막 부착점",
          "en": "Tendon & Periosteal Target"
        },
        "name": {
          "ko": "T4: 상완골 결절간구(이두근 장두건·전방 관절낭) 및 삼각근조면 요골신경점 (④번 타깃)",
          "en": "T4: Bicipital Groove Anterior Capsule & Radial Groove (Target 4)"
        },
        "desc": {
          "ko": "[표적 해부] 어깨 전면 상완골 대·소결절 사이 결절간구(오구상완인대·회전근개 간격, HP-FS-03) 및 상완 외측 요골신경구( ④).\n[촉지 및 시술] 동결견에서 가장 심하게 유착되는 전상방 관절낭(회전근개 간격)과 상완 방사통을 동시 해제합니다.",
          "en": "Anterior bicipital groove (rotator interval/coracohumeral ligament) and lateral radial groove."
        }
      }
    ]
  },
  {
    "id": 56,
    "catId": "shoulder_arm",
    "catNum": 2,
    "category": {
      "ko": "어깨, 상지 및 수부 질환",
      "en": "Shoulder, Arm, Wrist & Hand Diseases"
    },
    "mechanism": {
      "ko": "힘줄견인·골막 부착부 / 견봉하 충돌",
      "en": "[Rotator Cuff / Impingement] Supraspinatus Tendon & Subacromial Bursa"
    },
    "mechTags": [
      "tendon",
      "nerve"
    ],
    "title": {
      "ko": "회전근개 증후군 / 견봉하 충돌증후군 (극상근 대결절·견봉하점액낭·액와낭)",
      "en": "Rotator Cuff & Subacromial Impingement Syndrome"
    },
    "symptoms": {
      "ko": "팔을 옆으로 60~120도 들어 올릴 때(Painful Arc) 어깨 견봉 아래와 삼각근 부위가 걸리듯 찌릿하게 아프고, 옷을 입거나 물건을 들 때 힘이 빠짐.",
      "en": "Sharp catching pain during 60-120 degrees of shoulder abduction (Painful Arc) with weakness in lifting and lateral deltoid radiation."
    },
    "pathophysiology": {
      "ko": "극상근·극하근·견갑하근 힘줄의 퇴행성 긴장과 상완골두 상방 이동으로 인해, 오구견봉아치(Coracoacromial arch) 아래에서 극상근 건과 견봉하 점액낭이 반복 충돌·염증을 일으킴.",
      "en": "Superior migration of humeral head and rotator cuff tendon overload cause repetitive impingement of supraspinatus tendon and subacromial bursa under the coracoacromial arch."
    },
    "targetTissues": {
      "ko": "오구견봉인대·오구상완인대, 견봉하 점액낭(Subacromial bursa), 극상근 대결절 상면 골막 착점, 액와낭 및 상완이두근 장두건.",
      "en": "Coracoacromial ligament, subacromial-subdeltoid bursa, supraspinatus greater tubercle footprint, and biceps long head tendon."
    },
    "palpation": {
      "ko": "① 오구견봉아치·견쇄인대 ② 견봉 외측단 직하방 견봉하 점액낭 ③ 상완골 대결절 상·중면 회전근개 골막 부착점 ④ 결절간구 이두근 장두건.",
      "en": "1) Coracoacromial arch 2) Subacromial bursa 3) Greater tubercle supraspinatus footprint 4) Bicipital groove long head of biceps."
    },
    "clinicalCase": {
      "ko": "배드민턴 스매싱 후 발생한 회전근개 부분파열 및 충돌증후군 환자(Healing Points 임상 증례). 대결절 극상근 부착부 골막 접촉와 견봉하 점액낭, 견갑하근에 노바셀 치료 2회 후 일상 통증 소실, 4회 시술 후 Painful arc 음성 전환되어 운동 복귀.",
      "en": "Rotator cuff partial tear and impingement from badminton; daily pain resolved in 2 sessions and painful arc cleared in 4 sessions via greater tubercle Periosteal Contact protocol."
    },
    "diagram": "images/diagrams/diagram_56.png",
    "rifeFreq": 528,
    "anatomicalLabels": [
      "1. Coracoacromial & Coracoclavicular Ligaments",
      "2. Subacromial-Subdeltoid Bursa",
      "3. Greater Tubercle Supraspinatus Footprint & Capsule",
      "4. Long Head of Biceps Tendon"
    ],
    "searchKeywords": "회전근개 회전근개파열 충돌증후군 극상근 극하근 견갑하근 견봉하점액낭 대결절 어깨충돌",
    "targets": [
      {
        "code": "T1",
        "color": "#ff334b",
        "x": 43.5,
        "y": 34.5,
        "role": {
          "ko": "제1 핵심 치료점",
          "en": "Primary Clinical Target"
        },
        "name": {
          "ko": "T1: 오구견봉아치(Coracoacromial Arch) 및 오구돌기 인대군 골막 부착점 (①번 타깃)",
          "en": "T1: Coracoacromial Arch & Coracoid Ligament Complex (Target 1)"
        },
        "desc": {
          "ko": "[표적 해부] 견봉과 오훼돌기를 잇는 오구견봉인대(충돌 지붕) 및 오구쇄골인대.\n[촉지 및 시술] 견봉 전연과 오훼돌기 사이 지붕 구조물의 긴장과 비후를 완화하여 충돌 공간을 확보합니다.",
          "en": "Coracoacromial arch ligament complex forming the roof of the subacromial space."
        }
      },
      {
        "code": "T2",
        "color": "#00f5d4",
        "x": 36.5,
        "y": 38.0,
        "role": {
          "ko": "힘줄·골막 부착점",
          "en": "Tendon & Periosteal Target"
        },
        "name": {
          "ko": "T2: 견봉 외측단 직하방 견봉하-삼각근하 점액낭(Subacromial Bursa) 타깃 (②번 타깃)",
          "en": "T2: Subacromial-Subdeltoid Bursa Gliding Space (Target 2)"
        },
        "desc": {
          "ko": "[표적 해부] 견봉 외측연 바로 아래 견봉하 점액낭 및 삼각근하 점액낭(HP-RC-02, ②).\n[촉지 및 시술] 팔을 옆으로 들 때 마찰을 완충하는 점액낭의 염증·부종을 흡수하고 부드러운 활주를 복원합니다.",
          "en": "Subacromial-subdeltoid bursa directly beneath lateral border of acromion."
        }
      },
      {
        "code": "T3",
        "color": "#ff9f43",
        "x": 43.0,
        "y": 44.0,
        "role": {
          "ko": "힘줄·골막 부착점",
          "en": "Tendon & Periosteal Target"
        },
        "name": {
          "ko": "T3: 상완골 대결절 상면(Greater Tubercle) 극상근 착점 및 관절낭 골막 부착점 (③번 타깃)",
          "en": "T3: Greater Tubercle Supraspinatus Footprint & Glenohumeral Capsule (Target 3)"
        },
        "desc": {
          "ko": "[표적 해부] 팔을 열중쉬어(내회전·신전) 자세로 할 때 견봉 전외측 아래로 노출되는 상완골 대결절 상면 극상근(Supraspinatus) 건골막 부착부 및 하방 액와낭(HP-RC-01, ③).\n[촉지 및 시술] 회전근개 미세파열과 건병증이 집중되는 임계구역(Critical zone) 핵심 골막 부착점입니다.",
          "en": "Supraspinatus tendon footprint on superior facet of greater tubercle and inferior capsule."
        }
      },
      {
        "code": "T4",
        "color": "#38bdf8",
        "x": 38.5,
        "y": 54.5,
        "role": {
          "ko": "심부 근복·근막점",
          "en": "Deep Myofascial Trigger Point"
        },
        "name": {
          "ko": "T4: 결절간구 상완이두근 장두건(Long Head of Biceps) 및 건초 활주점 (④번 타깃)",
          "en": "T4: Bicipital Groove Long Head of Biceps Tendon Sheath (Target 4)"
        },
        "desc": {
          "ko": "[표적 해부] 대결절과 소결절 사이 결절간구를 따라 내려가는 상완이두근 장두건 및 횡상완인대( ④).\n[촉지 및 시술] 회전근개 질환에서 항상 동반되는 어깨 전면 이두근건염 통증을 깔끔히 제거합니다.",
          "en": "Long head of biceps tendon and transverse humeral ligament inside bicipital groove."
        }
      }
    ]
  },
  {
    "id": 57,
    "catId": "shoulder_arm",
    "catNum": 2,
    "category": {
      "ko": "어깨, 상지 및 수부 질환",
      "en": "Shoulder, Arm, Wrist & Hand Diseases"
    },
    "mechanism": {
      "ko": "힘줄견인·골막 부착부 / 요골신경 심부지 포착",
      "en": "[Lateral Epicondylitis] ECRB Periosteal Periosteal Contact & Radial Nerve"
    },
    "mechTags": [
      "tendon",
      "nerve"
    ],
    "title": {
      "ko": "테니스 엘보 / 외측상과염 (단요측수근신근 기시건 & 주관절 외측 1~4선)",
      "en": "Tennis Elbow / Lateral Epicondylitis (ECRB Periosteal Contact & Lateral 4-Line)"
    },
    "symptoms": {
      "ko": "문고리를 돌리거나, 찻잔·프라이팬을 들거나, 행주를 짤 때 팔꿈치 바깥쪽 뼈(외측상과)에서 전완으로 찌릿하고 시큰한 통증 발생.",
      "en": "Sharp lateral elbow pain radiating down the dorsal forearm when turning a doorknob, lifting a cup, or gripping objects."
    },
    "pathophysiology": {
      "ko": "손목 신전 시 가장 큰 장력을 받는 단요측수근신근(ECRB) 기시부 건골막(외측상과 전하방)의 미세파열·퇴행성 건병증과 함께, 상완근-완요골근 사이 요골신경 및 회외근 Frohse 아케이드 신경포착이 복합 작용함.",
      "en": "Micro-tearing and tendinosis at the ECRB periosteal origin on the lateral epicondyle combined with radial nerve irritation at the radial tunnel and Arcade of Frohse."
    },
    "targetTissues": {
      "ko": "외측상과능(장요측수근신근 ECRL), 외측상과 전면(단요측수근신근 ECRB), 요골측부인대(RCL)·윤상인대, 회외근(Frohse 아케이드) 및 요골신경.",
      "en": "Lateral supracondylar ridge (ECRL), lateral epicondyle (ECRB), radial collateral/annular ligament, supinator (Arcade of Frohse), and radial nerve."
    },
    "palpation": {
      "ko": "노바셀 주관절 외측 4대 촉진·치료선: ① 외측상과능(ECRL) ② 외측상과 첨부(ECRB 기시건 부착부) ③ 완요골관절·RCL ④ 윤상인대·회외근 ⑤ 요골신경 터널.",
      "en": "NovaCell Lateral Elbow 5-Point Line (Ch.6): 1) Supracondylar ridge 2) ECRB epicondyle tip 3) RCL joint line 4) Annular ligament/Supinator 5) Radial nerve."
    },
    "clinicalCase": {
      "ko": "1년 이상 스테로이드 주사와 체외충격파 치료 후에도 재발하던 난치성 테니스엘보 환자. 외측상과 ECRB 기시부 골막 부착부(제2선), 완요골관절 RCL(제3선), 회외근 Frohse 아케이드(제4선) 및 요골신경 제어점에 노바셀(-70mV) 통합 시술 후 악력 완전 회복.",
      "en": "1-year recurrent tennis elbow refractory to steroid injections and ESWT (Ch.6 Case 6-1); complete grip strength and pain-free recovery via Lateral Elbow 5-Target protocol."
    },
    "diagram": "images/diagrams/diagram_57.png",
    "rifeFreq": 528,
    "anatomicalLabels": [
      "1. Lateral Supracondylar Ridge (ECRL/BR)",
      "2. Lateral Epicondyle ECRB Origin",
      "3. Radial Collateral Ligament (RCL)",
      "4. Annular Ligament & Arcade of Frohse",
      "5. Radial Nerve Control Point"
    ],
    "searchKeywords": "테니스엘보 외측상과염 팔꿈치통증 단요측수근신근 ECRB 프호제아케이드 요골신경",
    "targets": [
      {
        "code": "T1",
        "color": "#ff334b",
        "x": 41.8,
        "y": 42.5,
        "role": {
          "ko": "제1 핵심 치료점",
          "en": "Primary Clinical Target"
        },
        "name": {
          "ko": "T1: 주관절 외측 제1선: 상완골 외측상과능(ECRL·완요골근 기시부) 골막 부착점 (①번 타깃)",
          "en": "T1: Lateral Elbow Line 1: Lateral Supracondylar Ridge ECRL Origin (Target 1)"
        },
        "desc": {
          "ko": "[표적 해부] 외측상과 바로 위 날카로운 뼈 능선인 외측상과능 하부 1/3 장요측수근신근(ECRL) 기시부 골막.\n[촉지 및 시술] 외측상과 위쪽 1~2cm 능선 골막 부착부. 손목을 젖힐 때 상완 하부에서 당기는 상류 골막통을 제거합니다.",
          "en": "Lower third of lateral supracondylar ridge where extensor carpi radialis longus (ECRL) originates."
        }
      },
      {
        "code": "T2",
        "color": "#00f5d4",
        "x": 42.5,
        "y": 48.5,
        "role": {
          "ko": "힘줄·골막 부착점",
          "en": "Tendon & Periosteal Target"
        },
        "name": {
          "ko": "T2: 주관절 외측 제2선: 외측상과 전하방 단요측수근신근(ECRB) 기시부 핵심 골막 부착점 (②번 타깃)",
          "en": "T2: Lateral Elbow Line 2: Lateral Epicondyle ECRB Footprint Periosteal Contact (Target 2)"
        },
        "desc": {
          "ko": "[표적 해부] 상완골 외측상과 가장 튀어나온 뼈 끝 바로 앞·아래(Tenaglia 삼각면) 단요측수근신근(ECRB) 건골막 부착부(HP-LE-01, ②).\n[촉지 및 시술] 테니스엘보 통증의 80%가 집중되는 제1 핵심 골막·건 포인트입니다.",
          "en": "Anterior-inferior facet of lateral epicondyle where ECRB tendon originates (primary tennis elbow lesion)."
        }
      },
      {
        "code": "T3",
        "color": "#ff9f43",
        "x": 44.0,
        "y": 54.5,
        "role": {
          "ko": "힘줄·골막 부착점",
          "en": "Tendon & Periosteal Target"
        },
        "name": {
          "ko": "T3: 주관절 외측 제3선: 상완소두-요골두 관절간극 및 외측측부인대(RCL) 타깃 (③번 타깃)",
          "en": "T3: Lateral Elbow Line 3: Radiohumeral Joint Line & RCL (Target 3)"
        },
        "desc": {
          "ko": "[표적 해부] 외측상과에서 요골두까지 약 3/4인치 구간의 완요골 관절간극, 외측측부인대(RCL) 및 관절낭 활막추벽( ③).\n[촉지 및 시술] 팔꿈치를 굽히고 펼 때 관절 속에서 걸리는 관절낭·인대 통증을 해소합니다.",
          "en": "Radiohumeral joint space and radial collateral ligament (3/4-inch zone distal to lateral epicondyle)."
        }
      },
      {
        "code": "T4",
        "color": "#38bdf8",
        "x": 49.5,
        "y": 57.5,
        "role": {
          "ko": "힘줄·골막 부착점",
          "en": "Tendon & Periosteal Target"
        },
        "name": {
          "ko": "T4: 주관절 외측 제4선: 요골두 윤상인대 및 회외근 프호제 아케이드(Frohse) 타깃 (④번 타깃)",
          "en": "T4: Lateral Elbow Line 4: Annular Ligament & Arcade of Frohse (Target 4)"
        },
        "desc": {
          "ko": "[표적 해부] 요골두를 감싸는 윤상인대(Annular ligament) 및 그 직하방 회외근 상연 Frohse 아케이드 요골신경 심부지 관통점(HP-LE-02, ④).\n[촉지 및 시술] 주사 치료에도 낫지 않는 난치성 테니스엘보(요골터널 증후군 동반)를 해결하는 열쇠입니다.",
          "en": "Annular ligament around radial head and Arcade of Frohse where deep radial nerve enters supinator."
        }
      },
      {
        "code": "T5",
        "color": "#a855f7",
        "x": 51.5,
        "y": 46.5,
        "role": {
          "ko": "힘줄·골막 부착점",
          "en": "Tendon & Periosteal Target"
        },
        "name": {
          "ko": "T5: 주관절 전외측 고랑 요골신경 본간 제어점 (상완근-완요골근 경계 ⑤번 타깃)",
          "en": "T5: Anterolateral Elbow Furrow Radial Nerve Trunk Control Point (Target 5)"
        },
        "desc": {
          "ko": "[표적 해부] 팔꿈치 전외측 상완근과 완요골근 사이 고랑에서 요골신경이 천지(감각)와 심부지(PIN 운동)로 갈라지는 분기점( ⑤).\n[촉지 및 시술] 외측 전완 전체의 신경 과민도를 즉시 낮추는 신경 제어 스위치입니다.",
          "en": "Radial nerve bifurcation in anterolateral cubital furrow between brachialis and brachioradialis."
        }
      }
    ]
  },
  {
    "id": 58,
    "catId": "chest_torso",
    "catNum": 3,
    "category": {
      "ko": "흉부, 복부 및 몸통 질환",
      "en": "Chest, Abdomen & Trunk Diseases"
    },
    "mechanism": {
      "ko": "말초신경 포착 / 늑골 골막 접촉부",
      "en": "[Intercostal Neuralgia] Rib-Guarded Intercostal Nerve & Costotransverse Target"
    },
    "mechTags": [
      "nerve",
      "tendon"
    ],
    "title": {
      "ko": "늑간신경통 / 흉곽 외측 통증 및 기흉 ZERO 늑골 고정 증후군",
      "en": "Intercostal Neuralgia & Rib Fixation Syndrome (Pneumothorax-Zero Protocol)"
    },
    "symptoms": {
      "ko": "숨을 크게 들이마시거나 기침·몸통 회전 시 갈비뼈를 따라 옆구리에서 앞가슴까지 전기가 통하듯 찌릿하고 결리는 통증.",
      "en": "Sharp, electric or catching pain radiating along the rib cage from the back to the lateral and anterior chest on deep inspiration, coughing, or trunk rotation."
    },
    "pathophysiology": {
      "ko": "흉추 늑횡돌관절(Costotransverse joint) 아탈구·고정이나 내·외늑간근 및 전거근의 연축으로 인해 늑골하구(Subcostal groove)를 주행하는 늑간신경 본간 및 외측피지가 포착됨.",
      "en": "Costotransverse joint fixation and intercostal/serratus muscle spasm entrap the intercostal nerve along the subcostal groove and lateral cutaneous exit."
    },
    "targetTissues": {
      "ko": "후방 늑골각(Rib angle) 외늑간근 골막, 흉추 늑횡돌관절(제3선), 액와선 늑간신경 외측피지 및 하부 늑골연.",
      "en": "Posterior rib angle periosteum, costotransverse joint (Line 3), mid-axillary lateral cutaneous branch, and lower costal margin."
    },
    "palpation": {
      "ko": "기흉 ZERO '수지 늑골 고정 보호법'(검지·중지로 늑간 공간을 막고 해당 늑골 골표면 위만 정확히 촉지·통전).",
      "en": "Pneumothorax-Zero two-finger rib-bracing technique targeting strictly the osseous rib surface and subcostal border."
    },
    "clinicalCase": {
      "ko": "골프 스윙 후 발생한 우측 흉벽·갈비뼈 통증으로 호흡조차 힘들어하던 환자. 기흉 ZERO 수지 늑골 고정법으로 후방 늑골각(제4선), 늑횡돌관절(제3선) 및 액와선 외측피지점에 노바셀 통전 직후 심호흡 시 통증 90% 즉각 소실.",
      "en": "Acute right lateral rib cage pain after golf swing restricting deep breathing (Ch.4 Case 4-5); 90% immediate relief on deep inspiration via rib-guarded 4-point intercostal protocol."
    },
    "diagram": "images/diagrams/diagram_58.png",
    "rifeFreq": 528,
    "anatomicalLabels": [
      "1. Posterior Rib Angle & Intercostal Muscle",
      "2. Subcostal Groove Intercostal Nerve Track",
      "3. Lower Rib Margin & Diaphragmatic Slip",
      "4. Mid-Axillary Lateral Cutaneous Branch"
    ],
    "searchKeywords": "늑간신경통 갈비뼈통증 흉통 옆구리통증 늑골골절후유증 기흉제로 늑골각",
    "targets": [
      {
        "code": "T1",
        "color": "#ff334b",
        "x": 57.5,
        "y": 45.0,
        "role": {
          "ko": "제1 핵심 치료점",
          "en": "Primary Clinical Target"
        },
        "name": {
          "ko": "T1: 상·중부 후방 늑골각(Rib Angle) 외늑간근·장늑근 골막 부착점 (①번 타깃)",
          "en": "T1: Posterior Rib Angle Iliocostalis & External Intercostal Periosteal Contact (Target 1)"
        },
        "desc": {
          "ko": "[표적 해부] 흉추 극돌기 외측 4~5cm 후방 늑골각(Rib angle) 골표면 및 늑간신경 후외측 출구(HP-IN-01).\n[촉지 및 시술] 반드시 검지·중지로 위아래 늑간을 보호(기흉 ZERO 수지 고정법)한 뒤 갈비뼈 꺾이는 모서리 골막에 통전합니다.",
          "en": "Posterior rib angle 4-5cm lateral to midline using two-finger rib-guarded Periosteal Contact."
        }
      },
      {
        "code": "T2",
        "color": "#00f5d4",
        "x": 49.5,
        "y": 48.0,
        "role": {
          "ko": "힘줄·골막 부착점",
          "en": "Tendon & Periosteal Target"
        },
        "name": {
          "ko": "T2: 늑골하연(Subcostal Groove) 늑간신경 주행로 및 내·외늑간근 타깃 (②번 타깃)",
          "en": "T2: Subcostal Groove Intercostal Nerve & Muscle Layer (Target 2)"
        },
        "desc": {
          "ko": "[표적 해부] 각 늑골 하연 골막 경계선 및 내·외늑간근 근막( ②).\n[촉지 및 시술] 등 뒤에서 옆구리로 돌아 나오는 갈비뼈 아랫모서리 압통점을 따라 늑간근 연축을 해제합니다.",
          "en": "Inferior osseous margin of affected ribs releasing intercostal muscle spasm."
        }
      },
      {
        "code": "T3",
        "color": "#ff9f43",
        "x": 48.5,
        "y": 55.5,
        "role": {
          "ko": "힘줄·골막 부착점",
          "en": "Tendon & Periosteal Target"
        },
        "name": {
          "ko": "T3: 하부 늑골(제9~12늑골) 늑연골궁 및 하후거근·외복사근 부착점 (③번 타깃)",
          "en": "T3: Lower Costal Arch (9th-12th Ribs) & Serratus Posterior Inferior (Target 3)"
        },
        "desc": {
          "ko": "[표적 해부] 하부 제9~12늑골 외측면의 하후거근·외복사근·횡격막 기시부 골막( ③).\n[촉지 및 시술] 기침하거나 몸을 비틀 때 옆구리 아래쪽 갈비뼈가 결리는 통증을 즉각 소실시킵니다.",
          "en": "Lower 9th-12th ribs where serratus posterior inferior and external oblique attach."
        }
      },
      {
        "code": "T4",
        "color": "#38bdf8",
        "x": 57.5,
        "y": 55.5,
        "role": {
          "ko": "신경 주행·분지점",
          "en": "Nerve Pathway Target"
        },
        "name": {
          "ko": "T4: 중간액와선(Mid-Axillary Line) 늑간신경 외측피지 관통점 (④번 타깃)",
          "en": "T4: Mid-Axillary Line Lateral Cutaneous Intercostal Branch (Target 4)"
        },
        "desc": {
          "ko": "[표적 해부] 옆구리 정중앙 액와선에서 늑간신경 외측피지가 전거근과 외늑간근을 뚫고 나와 전·후지로 갈라지는 지점(HP-IN-02, ④).\n[촉지 및 시술] 옆구리에서 앞가슴·유방으로 뻗치는 늑간신경통을 직접 차단합니다.",
          "en": "Mid-axillary line where lateral cutaneous branch of intercostal nerve pierces chest wall."
        }
      }
    ]
  },
  {
    "id": 59,
    "catId": "chest_torso",
    "catNum": 3,
    "category": {
      "ko": "흉부, 복부 및 몸통 질환",
      "en": "Chest, Abdomen & Trunk Diseases"
    },
    "mechanism": {
      "ko": "후근신경절 감작 / 자율신경 신경병증",
      "en": "[Torso PHN] Dorsal Root Ganglion (DRG) Sensitization & Cutaneous Allodynia"
    },
    "mechTags": [
      "nerve",
      "autonomic"
    ],
    "title": {
      "ko": "체간부 대상포진 후 신경통 (흉추·늑간 PHN 중추·말초 통합 프로토콜)",
      "en": "Thoracic Postherpetic Neuralgia (PHN Central DRG & Peripheral Protocol)"
    },
    "symptoms": {
      "ko": "가슴·등·옆구리 대상포진 수포가 아문 뒤에도 해당 띠(피부분절)를 따라 칼로 베거나 불로 지지는 듯한 작열통과 옷만 스쳐도 아픈 이질통(Allodynia) 지속.",
      "en": "Severe burning, lancinating pain and tactile allodynia (pain from clothing contact) persisting along a thoracic dermatome after herpes zoster rash healing."
    },
    "pathophysiology": {
      "ko": "수두-대상포진 바이러스(VZV)에 의해 흉추 후근신경절(DRG)과 척수 후각(Dorsal horn) 신경세포가 탈수초·중추감작(Wind-up)되고, 말초 늑간신경 피지의 C-섬유가 비정상 자발 방전을 일으킴.",
      "en": "VZV-induced demyelination and central wind-up at the thoracic dorsal root ganglion (DRG) and dorsal horn, with spontaneous ectopic firing along peripheral intercostal C-fibers."
    },
    "targetTissues": {
      "ko": "이환 분절(위·아래 1분절 포함) 흉추 후관절·추간공 외측(DRG/PDNB), 후지 내측지·외측지, 액와선 외측피지 및 전흉벽 전피지.",
      "en": "Affected thoracic DRG/posterior dorsal ramus (including +/-1 adjacent segments), lateral cutaneous branch, and anterior cutaneous branch."
    },
    "palpation": {
      "ko": "노바셀 PHN 중추-말초 이중 타겟팅: ① 이환 분절 흉추 제2·3선(DRG/후지) ② 외측 흉벽 늑간신경망 ③ 상부 교감신경절 ④ 요흉추 자율신경 기저부.",
      "en": "NovaCell Dual Central-Peripheral PHN Protocol (Ch.4): 1) Segmental DRG/PDNB 2) Lateral intercostal dermal network 3) Upper sympathetic relay 4) Lower autonomic base."
    },
    "clinicalCase": {
      "ko": "흉추 T4-T5 대상포진 후 1년간 마약성 진통제와 신경차단술에도 옷을 입지 못할 정도의 이질통을 겪던 70대 환자. 이환 분절 및 상·하 인접 분절(T3~T6) 후관절·DRG 반사점과 액와선 외측피지점에 노바셀(-70mV) 세포전압 재생 치료 시행 후 작열통·이질통 85% 소실.",
      "en": "70yo patient with 1-year refractory T4-T5 PHN allodynia (Ch.4 Case 4-15); 85% reduction in burning pain and allodynia via multi-segmental DRG + peripheral NovaCell -70mV protocol."
    },
    "diagram": "images/diagrams/diagram_59.png",
    "rifeFreq": 528,
    "anatomicalLabels": [
      "1. Thoracic DRG & Posterior Dorsal Ramus (PDNB)",
      "2. Intercostal Cutaneous Dermatome Network",
      "3. Cervicothoracic Sympathetic Relay",
      "4. Thoracolumbar Autonomic Base"
    ],
    "searchKeywords": "대상포진 대상포진후신경통 PHN 흉통 작열통 이질통 후근신경절 DRG 늑간신경",
    "targets": [
      {
        "code": "T1",
        "color": "#ff334b",
        "x": 43.0,
        "y": 48.5,
        "role": {
          "ko": "주 신경포착점",
          "en": "Primary Nerve Entrapment"
        },
        "name": {
          "ko": "T1: 중추 제1타깃: 이환 분절(±1분절) 흉추 후관절·추간공 외측 후근신경절(DRG) 반사점 (①번 타깃)",
          "en": "T1: Central DRG & Posterior Dorsal Ramus Segmental Point (Target 1)"
        },
        "desc": {
          "ko": "[표적 해부] 대상포진이 발생한 흉추 분절 및 위·아래 인접 분절의 극돌기 외측 1.5~2.5cm 후관절·추간공 외측(HP-PHN-01).\n[촉지 및 시술] 바이러스에 손상된 후근신경절(DRG)과 척수 후각의 중추 감작(Wind-up)을 진정시키는 가장 중요한 뿌리 치료점입니다.",
          "en": "1.5-2.5cm lateral to affected thoracic spinous processes (+/-1 segment) targeting DRG and dorsal ramus."
        }
      },
      {
        "code": "T2",
        "color": "#00f5d4",
        "x": 56.5,
        "y": 54.0,
        "role": {
          "ko": "신경 주행·분지점",
          "en": "Nerve Pathway Target"
        },
        "name": {
          "ko": "T2: 말초 제2타깃: 액와선·외측흉벽 늑간신경 외측피지 및 이질통 피부경계점 (②번 타깃)",
          "en": "T2: Peripheral Lateral Cutaneous Branch & Allodynia Border (Target 2)"
        },
        "desc": {
          "ko": "[표적 해부] 이환된 피부분절(Dermatome)의 옆구리 액와선 외측피지 출구 및 흉터·이질통 구역 상류 신경가지(HP-PHN-02, ②).\n[촉지 및 시술] 피부 표면에 알코올/생리식염수 도포 후 롤러 도자로 부드럽게 통전하여 비정상 탈수초 감각신경 막전위를 -70mV로 재분극시킵니다.",
          "en": "Lateral cutaneous branch exit along mid-axillary line and healthy border surrounding allodynic skin."
        }
      },
      {
        "code": "T3",
        "color": "#ff9f43",
        "x": 54.5,
        "y": 43.0,
        "role": {
          "ko": "자율신경 조절점",
          "en": "Autonomic Control Target"
        },
        "name": {
          "ko": "T3: 상부 경흉추(C7-T2) 성상·상흉교감신경절 자율신경 차단점 (③번 타깃)",
          "en": "T3: Cervicothoracic (C7-T2) Sympathetic Ganglion Relay (Target 3)"
        },
        "desc": {
          "ko": "[표적 해부] 교감신경 매개성 통증(SMP)으로 악화되는 PHN 고리를 끊는 상부 흉추 교감신경절 반사점( ③).\n[촉지 및 시술] 신경주위 혈관(Vasa nervorum) 수축을 풀어 손상 신경에 산소와 ATP를 공급합니다.",
          "en": "Upper thoracic sympathetic relay relieving sympathetically maintained pain (SMP) and nerve ischemia."
        }
      },
      {
        "code": "T4",
        "color": "#38bdf8",
        "x": 46.5,
        "y": 68.5,
        "role": {
          "ko": "자율신경 조절점",
          "en": "Autonomic Control Target"
        },
        "name": {
          "ko": "T4: 하부 흉요추(T9-L1) 다열근 및 부신·면역 자율신경 재생점 (④번 타깃)",
          "en": "T4: Thoracolumbar (T9-L1) Adrenal-Immune Autonomic Recovery Point (Target 4)"
        },
        "desc": {
          "ko": "[표적 해부] 하부 흉추~상부 요추 다열근 및 내장교감신경 기저부( ④).\n[촉지 및 시술] 전신 면역력과 자율신경 회복력을 높여 만성 신경통의 재발을 방지합니다.",
          "en": "Lower thoracic T9-L1 paraspinal zone supporting systemic autonomic and immune recovery."
        }
      }
    ]
  },
  {
    "id": 60,
    "catId": "back_hip",
    "catNum": 4,
    "category": {
      "ko": "요추, 골반, 둔부 및 고관절 질환",
      "en": "Lumbar, Pelvis, Gluteal & Hip Diseases"
    },
    "mechanism": {
      "ko": "힘줄견인·골막 부착부 / 심부 근막 연축",
      "en": "[Acute Lumbar Sprain / QL] Quadratus Lumborum 3-Fiber & Periosteal Contact"
    },
    "mechTags": [
      "tendon",
      "nerve"
    ],
    "title": {
      "ko": "급성 요추 염좌 / 요방형근(QL) 연축 (제12늑골·장골능·L1-L4 횡돌기 골막 접촉부)",
      "en": "Acute Lumbar Sprain & Quadratus Lumborum (QL) Spasm"
    },
    "symptoms": {
      "ko": "무거운 물건을 들거나 허리를 삐끗한 뒤 허리가 끊어질 듯 아파서 돌아눕거나 일어설 수 없고, 기침·재채기만 해도 허리와 골반이 울림.",
      "en": "Severe paralyzing lower back pain after lifting or twisting; inability to turn over in bed or stand upright, aggravated by coughing or sneezing."
    },
    "pathophysiology": {
      "ko": "요추와 골반을 측방에서 지지하는 요방형근(Quadratus lumborum: 장늑·장요·요늑 3대 교차 섬유)과 요장늑근이 급성 보호성 연축을 일으켜 제12늑골 하연, L1~L4 횡돌기 첨부 및 장골능 후내순 골막을 강하게 견인함.",
      "en": "Acute protective spasm of the 3-fiber quadratus lumborum (iliocostal, iliolumbar, lumbocostal) and iliocostalis lumborum creates intense periosteal traction on the 12th rib, L1-L4 transverse processes, and iliac crest."
    },
    "targetTissues": {
      "ko": "요방형근(Quadratus Lumborum · 기시: 장골능 후내순·장요인대 / 정지: 제12늑골 하연 내측·L1~L4 횡돌기), 외측연 근막열(Myofascial Cleft), 천·심층 4대 발통점(TrP 1~4) 및 장요인대(L5·L4 횡돌기 → 장골능 후내순).",
      "en": "Quadratus Lumborum (Origin: posterior iliac crest & iliolumbar ligament / Insertion: medial 12th rib & L1-L4 transverse processes), QL lateral myofascial cleft, superficial/deep QL trigger points (TrP 1-4), and iliolumbar ligament."
    },
    "palpation": {
      "ko": "측와위에서 팔을 올려 늑골과 골반 사이를 넓힌 뒤 척추기립근 외측연 근막열(Cleft)을 통해 ① 제12늑골 하연 요방형근 상부 정지부 ② QL 외측연 근막열 ③ 장골능 후내순·장요인대 기시부 ④ 천·심층 4대 발통점(TrP 1~4) 및 L1~L4 횡돌기 첨부 촉지.",
      "en": "Lateral decubitus palpation through the paraspinal myofascial cleft targeting 1) 12th rib lower border 2) lateral QL myofascial cleft 3) posterior iliac crest & iliolumbar ligament 4) superficial/deep QL TrP 1-4 & L1-L4 transverse process tips."
    },
    "clinicalCase": {
      "ko": "아침에 세수하다 허리를 삐끗해 부축을 받고 내원한 급성 요추 염좌 및 기능성 측만 환자. 요방형근 제12늑골 착점, 외측연 근막열, 장골능 기시부 및 L1~L4 횡돌기 첨부(TrP 1~4) 4대 포인트에 노바셀(-50mV) 통전 직후 스스로 허리를 펴고 보행 퇴원.",
      "en": "Acute disabling lumbar sprain with functional list after bending over a sink; patient walked out upright unassisted immediately after the 4-point QL periosteal and trigger-point NovaCell protocol."
    },
    "diagram": "images/diagrams/diagram_60.png",
    "rifeFreq": 528,
    "anatomicalLabels": [
      "12th Rib Inferior Border · QL Superior Attachment",
      "QL Lateral Border · Myofascial Cleft (Iliocostal Fibers)",
      "Posterior Iliac Crest & Iliolumbar Ligament Origin",
      "Superficial & Deep QL Trigger Points (TrP 1-4) & L1-L4 Transverse Processes"
    ],
    "searchKeywords": "급성 요추 염좌 급성요추염좌 허리삐끗 요방형근 QL 연축 요통 옆구리 허리통증 제12늑골 장골능 장요인대 횡돌기 TrP Acute Lumbar Sprain Quadratus Lumborum Spasm",
    "targets": [
      {
        "code": "T1",
        "color": "#ff334b",
        "x": 37.6,
        "y": 26.2,
        "role": {
          "ko": "제1 핵심 치료점",
          "en": "Primary Clinical Target"
        },
        "name": {
          "ko": "T1: 제12늑골 하연 · 요방형근 상부 정지부",
          "en": "T1: Inferior Border of 12th Rib · QL Superior Attachment"
        },
        "desc": {
          "ko": "[표적 해부] 제12늑골(마지막 갈비뼈) 내측 절반 하연에 정지하는 요방형근 장늑·요늑섬유 골막 부착부(HP-ALS-01).\n[촉지 및 시술] 옆구리 뒤쪽 마지막 갈비뼈 아랫모서리 골막 접촉점. 기침하거나 숨쉴 때 허리가 울리는 급성 통증을 즉시 잡아줍니다.",
          "en": "Inferior border of 12th rib where iliocostal and lumbocostal fibers of QL insert."
        }
      },
      {
        "code": "T2",
        "color": "#00f5d4",
        "x": 29.1,
        "y": 40.7,
        "role": {
          "ko": "심부 근복·근막점",
          "en": "Deep Myofascial Trigger Point"
        },
        "name": {
          "ko": "T2: 요방형근 외측연 근막열(Myofascial Cleft)",
          "en": "T2: Lateral Border of QL · Superficial Iliocostal Fibers"
        },
        "desc": {
          "ko": "[표적 해부] 척추기립근(장늑근) 외측연과 옆구리 복사근 사이의 고랑(근막열)을 통해 만져지는 요방형근 외측연 천층 장늑섬유.\n[촉지 및 시술] 허리를 옆으로 기울이거나 침대에서 돌아누울 때 잡히는 외측 기둥 연축을 신속히 풀어줍니다.",
          "en": "Lateral border of quadratus lumborum palpable through the lateral paraspinal myofascial cleft."
        }
      },
      {
        "code": "T3",
        "color": "#ff9f43",
        "x": 34.7,
        "y": 57.3,
        "role": {
          "ko": "힘줄·골막 부착점",
          "en": "Tendon & Periosteal Target"
        },
        "name": {
          "ko": "T3: 장골능 후내순 · 요방형근·장요인대 기시부",
          "en": "T3: Posterior Iliac Crest & Iliolumbar Ligament Origin"
        },
        "desc": {
          "ko": "[표적 해부] 골반 뒤쪽 장골능 후내순 약 5cm 구간의 요방형근 기시부 및 장요인대(L5·L4 횡돌기 → 장골능 후내순) 골막(HP-ALS-02).\n[촉지 및 시술] 골반 능선 바로 위에서 아래쪽 뼈 모서리를 향해 비스듬히 골막 접촉. 골반이 한쪽으로 틀어진 급성 요통의 하부 고정점입니다.",
          "en": "Posterior-medial lip of iliac crest where QL and iliolumbar ligament originate."
        }
      },
      {
        "code": "T4",
        "color": "#38bdf8",
        "x": 64.0,
        "y": 44.1,
        "role": {
          "ko": "발통점·횡돌기점",
          "en": "Trigger Points & Transverse Processes"
        },
        "name": {
          "ko": "T4: 요방형근 천·심층 4대 발통점(TrP 1~4) & L1~L4 횡돌기",
          "en": "T4: Superficial & Deep QL Trigger Points (TrP 1-4) & L1-L4 Transverse Processes"
        },
        "desc": {
          "ko": "[표적 해부] 제12늑골 직하방부터 L1~L4 횡돌기 첨부(극돌기 외측 4~5cm, 제4선)에 부착하는 요방형근 심층 장요·요늑섬유 및 천·심층 4대 발통점(TrP 1~4).\n[촉지 및 시술] 천장관절·엉덩이 하부·대전자·사타구니로 방사통을 보내는 4대 알갱이 결절과 L1~L4 횡돌기 끝 심부 분절 경직을 동시에 해제하여 허리를 꼿꼿이 펼 수 있게 회복시킵니다.",
          "en": "Superficial and deep QL trigger points (TrP 1-4) referring pain to SIJ, buttock, and greater trochanter, combined with L1-L4 transverse process tip periosteal insertions."
        }
      }
    ]
  },
  {
    "id": 61,
    "catId": "back_hip",
    "catNum": 4,
    "category": {
      "ko": "요추, 골반, 둔부 및 고관절 질환",
      "en": "Lumbar, Pelvis, Gluteal & Hip Diseases"
    },
    "mechanism": {
      "ko": "추간판 신경근염 / 후근신경절(DRG) 포착",
      "en": "[Lumbar Disc Radiculopathy] Posterolateral Annulus, DRG & Safe Triangle"
    },
    "mechTags": [
      "nerve",
      "tendon"
    ],
    "title": {
      "ko": "요추 추간판 탈출증(허리디스크) & 후근신경절(DRG)",
      "en": "Lumbar Disc Herniation Radiculopathy & DRG"
    },
    "symptoms": {
      "ko": "허리를 앞으로 숙일 때 허리 통증이 심해지고, 엉덩이에서 허벅지 뒤·종아리·발등이나 발바닥까지 전기가 흐르듯 저리고 당기는 하지 방사통(SLR 검사 양성).",
      "en": "Low back pain worsening with lumbar flexion, accompanied by electric shooting pain and numbness radiating down the buttock, thigh, calf, and foot (positive SLR test)."
    },
    "pathophysiology": {
      "ko": "요추 추간판(주로 L4-L5, L5-S1) 후외측 섬유륜 파열·탈출로 척추동신경과 추간공 내 신경근·후근신경절(DRG)에 화학적 염증과 기계적 압박이 가해지고, 추궁판(제2선)·후관절낭(제3선) 및 심부 다열근·회선근이 연쇄 구축됨.",
      "en": "Posterolateral lumbar disc herniation (typically L4-L5 or L5-S1) causes chemical inflammation and mechanical compression of the sinuvertebral nerve, exiting nerve root, and dorsal root ganglion (DRG), accompanied by deep multifidus and facet capsule spasm."
    },
    "targetTissues": {
      "ko": "추간판 후외측 섬유륜·척추동신경, 심층 다열근·회선근(기시: 유두돌기·횡돌기 / 정지: 상방 극돌기), 요추 제2선 추궁판(Lamina)·상관절돌기 기저부, 요추 제3선 후관절낭, 추간공 외측 후근신경절(DRG)·후지 내측지.",
      "en": "Posterolateral disc annulus & sinuvertebral nerve, deep multifidus & rotatores, Lumbar Line 2 lamina & SAP base, Lumbar Line 3 facet joint capsule, and extraforaminal DRG & dorsal ramus medial branch."
    },
    "palpation": {
      "ko": "요추 5대 해부학적 표적: ① 추간판 후외측 섬유륜·척추동신경 반사점 ② 심층 다열근·회선근 ③ 요추 제2선 추궁판·상관절돌기 기저부 ④ 요추 제3선 후관절낭 ⑤ 추간공 외측 후근신경절(DRG)·후지 내측지.",
      "en": "Lumbar 5-Point Protocol: 1) Posterolateral disc & sinuvertebral nerve 2) Deep multifidus & rotatores 3) Line 2 lamina & SAP base 4) Line 3 facet joint capsule 5) Extraforaminal DRG & dorsal ramus medial branch."
    },
    "clinicalCase": {
      "ko": "L4-L5, L5-S1 추간판 탈출증으로 수술을 권유받고 다리가 저려 100m도 걷기 힘들던 환자. 요추 제2선(추궁판·다열근), 제3선(후관절낭), 추간공 외측 DRG 반사점 및 둔부 좌골신경 경로에 노바셀(-70mV) 집중 치료 후 하지 방사통 소실 및 비수술 일상 복귀.",
      "en": "L4-L5/L5-S1 disc herniation recommended for surgery with severe sciatica; full resolution of radicular pain and non-surgical recovery via the 5-point lumbar lamina, facet capsule, and DRG NovaCell protocol."
    },
    "diagram": "images/diagrams/diagram_61.png",
    "rifeFreq": 528,
    "anatomicalLabels": [
      "Posterolateral Disc Herniation & Sinuvertebral N.",
      "Deep Multifidus & Rotatores",
      "Lumbar Line 2 · Lamina & SAP Base",
      "Lumbar Line 3 · Facet Joint Capsule",
      "Extraforaminal DRG & Dorsal Ramus Medial Branch"
    ],
    "searchKeywords": "허리디스크 요추 추간판 탈출증 좌골신경통 다리저림 방사통 신경근염 후근신경절 DRG 추궁판 후관절낭 다열근 회선근 척추동신경 Lumbar Disc Herniation Radiculopathy",
    "targets": [
      {
        "code": "T1",
        "color": "#ff334b",
        "x": 47.2,
        "y": 50.0,
        "role": {
          "ko": "주 신경포착점",
          "en": "Primary Nerve Entrapment"
        },
        "name": {
          "ko": "T1: 추간판 후외측 섬유륜 · 척추동신경",
          "en": "T1: Posterolateral Disc Herniation & Sinuvertebral N."
        },
        "desc": {
          "ko": "[표적 해부] 파열·팽륜된 L4-L5·L5-S1 추간판 후외측 섬유륜과 후종인대 감각을 지배하는 척추동신경(Sinuvertebral Nerve) 분절 반사구역.\n[촉지 및 시술] 이환 분절 극간인대(제1선) 및 추간공 외측 양방향에서 디스크 내압과 신경원성 염증을 진정시킵니다.",
          "en": "Segmental reflex zone targeting the posterolateral annulus fibrosus and sinuvertebral nerve."
        }
      },
      {
        "code": "T2",
        "color": "#00f5d4",
        "x": 62.8,
        "y": 25.1,
        "role": {
          "ko": "심부 근복·근막점",
          "en": "Deep Myofascial Trigger Point"
        },
        "name": {
          "ko": "T2: 심층 다열근·회선근(Multifidus & Rotatores)",
          "en": "T2: Deep Multifidus & Rotatores Segmental Unlocking"
        },
        "desc": {
          "ko": "[표적 해부] 유두돌기·횡돌기에서 기시해 상방 극돌기로 정지하는 최심층 다열근 및 회선근.\n[촉지 및 시술] 디스크 탈출 분절을 위아래로 꽉 조여 추간판 내압을 높이는 심부 다열근 경직을 풀어 디스크 감압 공간을 확보합니다.",
          "en": "Deepest multifidus and rotatores spanning across the herniated motion segment to unlock disc compression."
        }
      },
      {
        "code": "T3",
        "color": "#ff9f43",
        "x": 54.8,
        "y": 44.5,
        "role": {
          "ko": "제2선 추궁판·골막점",
          "en": "Lumbar Line 2 Lamina Target"
        },
        "name": {
          "ko": "T3: 요추 제2선: 추궁판(Lamina) & 상관절돌기 기저부",
          "en": "T3: Lumbar Line 2 · Lamina & SAP Base"
        },
        "desc": {
          "ko": "[표적 해부] 정중선 외측 1.5~2cm 추궁판(Lamina) 골표면 및 상관절돌기(SAP) 내측 기저부.\n[촉지 및 시술] 황색인대 외측 추궁판 골막에 정밀 통전을 전달하여 척수강 주위 정맥총 울혈과 분절 압박을 해소합니다.",
          "en": "1.5-2cm lateral to spinous process on osseous lamina and base of superior articular process."
        }
      },
      {
        "code": "T4",
        "color": "#38bdf8",
        "x": 55.7,
        "y": 56.9,
        "role": {
          "ko": "제3선 후관절낭점",
          "en": "Lumbar Line 3 Facet Capsule"
        },
        "name": {
          "ko": "T4: 요추 제3선: 후관절낭(Facet Joint Capsule)",
          "en": "T4: Lumbar Line 3 · Facet Joint Capsule"
        },
        "desc": {
          "ko": "[표적 해부] 상관절돌기와 하관절돌기가 만나는 요추 제3선 후관절낭(Facet Joint Capsule).\n[촉지 및 시술] 디스크 높이 감소로 인해 이차적으로 과부하·압박된 후관절낭의 염증과 요추 신전통을 동시에 감압합니다.",
          "en": "Lumbar facet joint capsule overloaded secondary to disc height loss."
        }
      },
      {
        "code": "T5",
        "color": "#a855f7",
        "x": 48.9,
        "y": 54.1,
        "role": {
          "ko": "추간공 DRG·신경근점",
          "en": "Extraforaminal DRG Target"
        },
        "name": {
          "ko": "T5: 추간공 외측 후근신경절(DRG) · 후지 내측지",
          "en": "T5: Extraforaminal DRG & Dorsal Ramus Medial Branch"
        },
        "desc": {
          "ko": "[표적 해부] 추간공 바로 바깥쪽(안전삼각 외측) 후근신경절(DRG) 및 횡돌기 기저부를 넘어가는 척수신경 후지 내측지(HP-LDR-01).\n[촉지 및 시술] 엉덩이·종아리·발가락까지 전기가 흐르듯 뻗치는 신경근 방사통과 저림을 직접 차단하는 핵심 신경 타깃입니다.",
          "en": "Extraforaminal dorsal root ganglion (DRG) and dorsal ramus medial branch exit."
        }
      }
    ]
  },
  {
    "id": 62,
    "catId": "back_hip",
    "catNum": 4,
    "category": {
      "ko": "요추, 골반, 둔부 및 고관절 질환",
      "en": "Lumbar, Pelvis, Gluteal & Hip Diseases"
    },
    "mechanism": {
      "ko": "신경인성 파행 / 후관절·유두부돌기인대 포착",
      "en": "[Spinal Stenosis] Neurogenic Claudication & Mamillo-Accessory Ligament"
    },
    "mechTags": [
      "nerve",
      "autonomic",
      "tendon"
    ],
    "title": {
      "ko": "요추 척추관 협착증 / 신경인성 간헐적 파행 및 유두-부돌기인대 감압",
      "en": "Lumbar Spinal Stenosis & Neurogenic Claudication (MAL & Facet Protocol)"
    },
    "symptoms": {
      "ko": "걸으면 엉덩이와 다리가 터질 듯 저리고 힘이 빠져 쪼그려 앉거나 허리를 숙여 쉬어야 다시 걸을 수 있음(신경인성 간헐적 파행). 허리를 뒤로 젖힐 때 악화.",
      "en": "Buttock and bilateral leg pain, heaviness, and numbness while walking that forces the patient to stop and sit or bend forward for relief (neurogenic claudication)."
    },
    "pathophysiology": {
      "ko": "후관절 비후, 황색인대 두꺼워짐, 추간공 협착으로 신경근 주위 미세혈류(정맥총)가 울혈·허혈에 빠지고, 유두돌기(MP)와 부돌기(AP) 사이의 골화·비후된 유두-부돌기 인대(Mamillo-Accessory Ligament: MAL) 아래에서 척수신경 후지 내측지가 포착됨.",
      "en": "Facet hypertrophy, ligamentum flavum thickening, and foraminal narrowing cause radicular venous congestion/ischemia, while the medial branch is entrapped beneath the mamillo-accessory ligament (MAL)."
    },
    "targetTissues": {
      "ko": "비후된 요추 후관절낭(L3-S1), 다열근 기시부, 유두-부돌기 인대(MAL) 골섬유 터널, 추간공 외측 혈관신경 다발 및 후천골공(S1-S2).",
      "en": "Hypertrophied L3-S1 facet capsules, multifidus origin, mamillo-accessory ligament (MAL) tunnel, foraminal neurovascular bundle, and S1-S2 sacral foramina."
    },
    "palpation": {
      "ko": "후관절·유두부돌기인대 해부도: ① 상관절돌기·후관절낭 상부 ② 심부 다열근 다발 ③ 유두-부돌기 인대(MAL) 터널 ④ 추간공 출구 및 하부 내측지.",
      "en": "Ch.7 Facet & MAL Anatomy : 1) Superior facet capsule 2) Multifidus slips 3) Mamillo-accessory ligament tunnel 4) Foraminal exit & medial branch."
    },
    "clinicalCase": {
      "ko": "5분만 걸어도 양쪽 종아리가 터질 듯 아파 쉬어야 했던 70대 중증 척추관 협착증 환자. L3~S1 유두-부돌기 인대(MAL) 골막 부착부, 추간공 외측 혈관신경 회복점 및 후천골공(S1-S2) 자율신경점에 노바셀(-70mV) 치료 후 연속 보행 시간이 5분에서 40분 이상으로 획기적 개선.",
      "en": "70yo severe lumbar spinal stenosis unable to walk >5 minutes (Ch.7 Case 7-12); continuous walking distance increased to >40 minutes via L3-S1 MAL Periosteal Contact + foraminal vascular protocol."
    },
    "diagram": "images/diagrams/diagram_62.png",
    "rifeFreq": 528,
    "anatomicalLabels": [
      "1. Hypertrophied Facet Joint Capsule",
      "2/3. Deep Multifidus Fascicles",
      "4. Mamillo-Accessory Ligament (MAL) Tunnel",
      "5. Medial Branch of Dorsal Ramus & Foramen"
    ],
    "searchKeywords": "척추관협착증 협착증 신경인성파행 간헐적파행 다리저림 유두부돌기인대 요추후관절",
    "targets": [
      {
        "code": "T1",
        "color": "#ff334b",
        "x": 57.5,
        "y": 23.5,
        "role": {
          "ko": "핵심 후관절·신경근점",
          "en": "Primary Facet & Root Target"
        },
        "name": {
          "ko": "T1: 비후된 요추 후관절낭(L3-L4-L5) 상·하 관절연 골막 부착점 (①번 타깃)",
          "en": "T1: Hypertrophied Lumbar Facet Joint Capsule Periosteal Contact (Target 1)"
        },
        "desc": {
          "ko": "[표적 해부] 퇴행성으로 두꺼워져 척추관과 외측함요(Lateral recess)를 좁히는 요추 후관절낭 및 상관절돌기.\n[촉지 및 시술] 후관절낭 외측연 골막 정밀 자극으로 관절낭 부종과 활막 염증을 가라앉혀 신경 통로를 넓혀줍니다.",
          "en": "Hypertrophied lumbar facet joint capsule and superior articular process."
        }
      },
      {
        "code": "T2",
        "color": "#00f5d4",
        "x": 52.5,
        "y": 42.5,
        "role": {
          "ko": "후관절·신경근점",
          "en": "Facet & Nerve Root Target"
        },
        "name": {
          "ko": "T2: 유두돌기 기시 심부 다열근(Multifidus) 위축·섬유화 복원점 (③번 타깃)",
          "en": "T2: Mamillary Process Deep Multifidus Atrophy Recovery Point (Target 2)"
        },
        "desc": {
          "ko": "[표적 해부] 유두돌기에서 기시하여 극돌기로 붙는 심부 다열근 다발( ③).\n[촉지 및 시술] 협착증 환자에서 지방 변성되고 굳어진 다열근에 -70mV 생체전압을 충전하여 허리 지지력을 되살립니다.",
          "en": "Deep multifidus fascicles originating from the mamillary process."
        }
      },
      {
        "code": "T3",
        "color": "#ff9f43",
        "x": 51.0,
        "y": 50.0,
        "role": {
          "ko": "후관절·신경근점",
          "en": "Facet & Nerve Root Target"
        },
        "name": {
          "ko": "T3: 유두-부돌기 인대(Mamillo-Accessory Ligament: MAL) 골섬유 터널 감압점 (④번 타깃)",
          "en": "T3: Mamillo-Accessory Ligament (MAL) Osteofibrous Tunnel Periosteal Contact (Target 3)"
        },
        "desc": {
          "ko": "[표적 해부] 상관절돌기의 유두돌기(Mamillary process)와 횡돌기 기저부의 부돌기(Accessory process)를 잇는 유두-부돌기 인대 터널( ④).\n[촉지 및 시술] 노령 협착증 환자에서 석회화·비후되어 척수신경 후지 내측지를 목 조르듯 압박하는 핵심 병소를 정밀 골막 자극으로 개방합니다.",
          "en": "Mamillo-accessory ligament (MAL) bridging mamillary and accessory processes over the medial branch."
        }
      },
      {
        "code": "T4",
        "color": "#38bdf8",
        "x": 50.5,
        "y": 58.5,
        "role": {
          "ko": "후관절·신경근점",
          "en": "Facet & Nerve Root Target"
        },
        "name": {
          "ko": "T4: 추간공 외측 신경근 혈류 회복점 및 후지 내측지·S1-S2 후천골공점 (⑤번 타깃)",
          "en": "T4: Foraminal Neurovascular Recovery & Medial Branch / S1-S2 Sacral Point (Target 4)"
        },
        "desc": {
          "ko": "[표적 해부] 추간공 외측 혈관신경 다발(HP-LSS-01), 하행 내측지( ⑤) 및 S1-S2 후천골공 자율신경점(HP-LSS-02).\n[촉지 및 시술] 마미신경과 좌골신경근의 정맥 울혈을 해소하여 보행 시 다리가 터질 듯한 간헐적 파행을 획기적으로 연장시킵니다.",
          "en": "Foraminal vasa nervorum vascular point, descending medial branch, and S1-S2 sacral autonomic point."
        }
      }
    ]
  },
  {
    "id": 63,
    "catId": "knee_foot",
    "catNum": 5,
    "category": {
      "ko": "무릎, 발목 및 족부 질환",
      "en": "Knee, Leg, Ankle & Foot Diseases"
    },
    "mechanism": {
      "ko": "힘줄·인대 골막 부착부 / 관절포 감작",
      "en": "[Knee OA & Patellar Tendinopathy] 4-Point Thigh-Knee Periosteal Contact"
    },
    "mechTags": [
      "tendon",
      "nerve"
    ],
    "title": {
      "ko": "퇴행성 슬관절염 & 슬개골 건병증 (점퍼스 니 · 대퇴-슬관절 4대 핵심 골막·건 부착점)",
      "en": "Knee Osteoarthritis & Patellar Tendinopathy (4-Point Periosteal Protocol)"
    },
    "symptoms": {
      "ko": "의자에서 일어날 때나 계단을 오르내릴 때 무릎 앞쪽(슬개골 위·아래)과 관절 안팎이 시큰거리고 삐걱거리며, 무릎을 완전히 구부리거나 펴기 힘듦.",
      "en": "Anterior and medial/lateral knee pain, crepitus, and stiffness when rising from a chair or climbing stairs, with tenderness at the patellar poles and joint line."
    },
    "pathophysiology": {
      "ko": "대퇴사두근(대퇴직근·중간광근·내외측광근)의 단축으로 슬개골 상극·하극(슬개건) 골막에 과도한 견인력이 집중되고, 골반(AIIS·대전자)~대퇴골~슬관절 내외측 관절포 및 관절하골의 생체전압이 저하됨.",
      "en": "Quadriceps contracture concentrates tensile stress on the superior/inferior patellar poles and patellar tendon, accompanied by tibiofemoral joint capsule inflammation and subchondral voltage drop."
    },
    "targetTissues": {
      "ko": "전하장골극(AIIS · 대퇴직근 기시부), 대퇴골 간부 전면(중간광근 심부 기시부), 슬개골 상·하극(건 부착부) 및 내·외측 관절간극·경골조면(슬개건 최종 정지부), 대퇴골 대전자(외측광근 기시부).",
      "en": "AIIS (Rectus Femoris origin), anterior femoral shaft (Vastus Intermedius origin), patellar poles & medial/lateral joint line capsule + tibial tuberosity, and greater trochanter (Vastus Lateralis origin)."
    },
    "palpation": {
      "ko": "① 전하장골극(AIIS) 대퇴직근 기시부 ② 대퇴골 간부 전면 중앙 중간광근 심부 기시부 ③ 슬개골 상·하극 건 부착부, 내·외측 관절간극 및 경골조면(슬개건 최종 정지부) ④ 대퇴골 대전자 외측광근 기시부.",
      "en": "AIIS rectus femoris origin, anterior femoral shaft vastus intermedius origin, patellar poles / joint lines / tibial tuberosity, and greater trochanter vastus lateralis origin."
    },
    "clinicalCase": {
      "ko": "연골주사와 진통제로도 계단 보행이 불가능했던 퇴행성 슬관절염(K-L grade II~III) 및 슬개건염 환자. 슬개골 하극·상극 골막 부착부(HP-PT-01/02), 내·외측 관절포점(HP-KOA-01), 대퇴골 중간광근 골막 및 AIIS에 노바셀(-70mV) 치료 후 무릎 굴신 가동범위 정상화 및 계단 보행 회복.",
      "en": "Knee osteoarthritis (K-L grade II-III) with patellar tendinopathy unable to climb stairs (Ch.8 Case 8-6); full knee flexion/extension and pain-free stair climbing restored via 4-point Periosteal Contact protocol."
    },
    "diagram": "images/diagrams/diagram_63.png",
    "rifeFreq": 528,
    "anatomicalLabels": [
      "1. AIIS Rectus Femoris Origin Periosteal Contact",
      "2. Mid-Femur Vastus Intermedius Periosteum",
      "3. Patellar Poles (Superior/Inferior) & Knee Joint Line",
      "4. Greater Trochanter Vastus Lateralis Origin"
    ],
    "searchKeywords": "퇴행성관절염 무릎관절염 슬관절염 슬개건염 점퍼스니 무릎통증 골막 부착부 대퇴사두근",
    "targets": [
      {
        "code": "T1",
        "color": "#ff334b",
        "x": 38.2,
        "y": 29.4,
        "role": {
          "ko": "기시부·골막 부착점",
          "en": "Proximal Origin & Periosteal Target"
        },
        "name": {
          "ko": "T1: 전하장골극(AIIS) · 대퇴직근 기시부 (AIIS · Rectus Femoris Origin)",
          "en": "T1: AIIS · Rectus Femoris Origin"
        },
        "desc": {
          "ko": "[표적 해부] 골반 전면 전하장골극(AIIS)의 대퇴직근(Rectus Femoris) 기시부 건골막 (정지: 슬개골 상극 → 경골조면).\n[촉지 및 시술] 상전장골극(ASIS)에서 하내측 약 3~4cm 심부의 단단한 뼈 돌출부. 대퇴사두근 중 유일한 2관절 근육인 대퇴직근의 근위부 장력을 풀어 슬개골 압박력과 무릎 앞쪽 통증을 근본적으로 줄입니다.",
          "en": "Rectus femoris origin at the AIIS (inserting via superior patellar pole to tibial tuberosity); relieves proximal biarticular tension compressing the patellofemoral joint."
        }
      },
      {
        "code": "T2",
        "color": "#00f5d4",
        "x": 63.9,
        "y": 54.6,
        "role": {
          "ko": "심부 기시부·골막점",
          "en": "Deep Shaft & Periosteal Target"
        },
        "name": {
          "ko": "T2: 대퇴골 간부 전면 · 중간광근 심부 기시부 (Anterior Femoral Shaft · Vastus Intermedius)",
          "en": "T2: Anterior Femoral Shaft · Vastus Intermedius"
        },
        "desc": {
          "ko": "[표적 해부] 대퇴직근 바로 아래 심층 대퇴골 간부 전면의 중간광근(Vastus Intermedius) 기시부 골막 (정지: 슬개골 상극 → 경골조면).\n[촉지 및 시술] 대퇴 전면 중앙에서 수직 심부로 대퇴골 뼈 전면까지 부드럽게 접근. 슬관절 굴곡 시 무릎 깊숙한 뻣뻣함과 슬개상낭 유착을 해소하는 핵심 심부 포인트입니다.",
          "en": "Deep vastus intermedius origin along the anterior femoral shaft; releases deep anterior thigh stiffness and suprapatellar pouch tension."
        }
      },
      {
        "code": "T3",
        "color": "#ff9f43",
        "x": 61.8,
        "y": 76.6,
        "role": {
          "ko": "힘줄·관절낭 부착점",
          "en": "Tendon & Joint Capsule Target"
        },
        "name": {
          "ko": "T3: 슬개골 상·하극(건 부착부) & 내·외측 관절간극 · 경골조면 (Patellar Poles & Joint Line)",
          "en": "T3: Patellar Poles (Tendons), Joint Line Capsule & Tibial Tuberosity"
        },
        "desc": {
          "ko": "[표적 해부] 슬개골 상극(대퇴사두근건 부착부)·슬개골 하극(슬개건 기시부), 내·외측 슬관절 간극 관절포 및 경골조면(Tibial Tuberosity · 사두근/슬개건 최종 정지부).\n[촉지 및 시술] 슬개골 위·아래 뼈 경계와 좌우 관절 틈새, 아래쪽 경골조면을 십자(+) 라인으로 순차 자극하여 계단 오르내림 통증, 점퍼스 니 및 퇴행성 관절강 내 염증을 직접 완화합니다.",
          "en": "Superior/inferior patellar poles, medial & lateral joint line capsules, and tibial tuberosity final insertion; directly resolves patellar tendinopathy and osteoarthritic joint pain."
        }
      },
      {
        "code": "T4",
        "color": "#38bdf8",
        "x": 33.4,
        "y": 38.4,
        "role": {
          "ko": "기시부·골막 부착점",
          "en": "Lateral Origin & Periosteal Target"
        },
        "name": {
          "ko": "T4: 대퇴골 대전자 · 외측광근 기시부 (Greater Trochanter · Vastus Lateralis Origin)",
          "en": "T4: Greater Trochanter · Vastus Lateralis Origin"
        },
        "desc": {
          "ko": "[표적 해부] 고관절 외측 대퇴골 대전자(Greater Trochanter) 하외측 테두리의 외측광근(Vastus Lateralis) 기시부 골막 (정지: 슬개골 외측연 → 경골조면).\n[촉지 및 시술] 고관절 바깥쪽 불룩한 대전자 하연 경계. 외측광근의 과도한 외측 견인을 풀어 슬개골 외측 편위와 퇴행성 슬관절염의 외측 마찰통을 교정합니다.",
          "en": "Vastus lateralis origin at the greater trochanter (inserting on lateral patella to tibial tuberosity); corrects lateral patellar tracking and lateral knee overload."
        }
      }
    ]
  },
  {
    "id": 64,
    "catId": "knee_foot",
    "catNum": 5,
    "category": {
      "ko": "무릎, 발목 및 족부 질환",
      "en": "Knee, Leg, Ankle & Foot Diseases"
    },
    "mechanism": {
      "ko": "말초신경 터널 포착 / 족하수",
      "en": "[Common Peroneal Nerve Entrapment] Fibular Neck Tunnel & Popliteal Bifurcation"
    },
    "mechTags": [
      "nerve",
      "tendon"
    ],
    "title": {
      "ko": "총비골신경 포착증 (비골두 터널 증후군 · 하퇴 외측통 및 족하수)",
      "en": "Common Peroneal Nerve Entrapment (Fibular Tunnel & Popliteal 4-Point Protocol)"
    },
    "symptoms": {
      "ko": "무릎 바깥쪽 아래(비골두)에서 정강이 외측·발등으로 찌릿한 저림이 내려가고, 발목과 엄지발가락을 위로 들어 올리는 힘이 약해져 발끝이 걸림(족하수 Foot drop).",
      "en": "Tingling and shooting pain from the lateral knee (fibular head) down the anterolateral leg and dorsum of the foot, with weakness in ankle dorsiflexion (foot drop)."
    },
    "pathophysiology": {
      "ko": "슬와부 상방에서 좌골신경이 경골신경과 총비골신경으로 갈라진 뒤, 총비골신경이 비골경부(Fibular neck)를 감고 돌며 장비골근 기시부 섬유성 건궁(Fibular tunnel)으로 진입할 때 압박·포착됨.",
      "en": "After bifurcating from the sciatic nerve in the upper popliteal fossa, the common peroneal nerve is compressed as it winds around the fibular neck into the fibrous arch of peroneus longus."
    },
    "targetTissues": {
      "ko": "슬와 상부 좌골신경 분기점(총비골·경골신경), 대퇴이두근(기시: 좌골결절 장두·대퇴골 조선 단두 / 정지: 비골두), 비골두 직하방 비골경부 총비골신경 터널(장비골근 건궁), 슬와근(기시: 대퇴골 외측과 / 정지: 경골 후면 상부) 및 가자미근 건궁, 비골두 전하방 3cm 심비골신경 분기점(TA·EDL).",
      "en": "Superior popliteal sciatic nerve bifurcation, biceps femoris (fibular head insertion), fibular neck common peroneal nerve tunnel (peroneus longus arch), popliteus & tendinous arch of soleus, and deep peroneal nerve entry (TA/EDL)."
    },
    "palpation": {
      "ko": "① 슬와 상부 좌골신경 분기점(총비골·경골신경) ② 비골두 직하방 비골경부 총비골신경 터널 ③ 슬와 심부 슬와근(Popliteus) & 가자미근 건궁 ④ 비골두 전하방 3cm 심비골신경 분기점(TA·EDL).",
      "en": "Superior popliteal sciatic bifurcation, fibular neck peroneal tunnel, deep popliteal fossa popliteus & soleus arch, and 3cm anteroinferior to fibular head deep peroneal entry."
    },
    "clinicalCase": {
      "ko": "다리를 꼬고 앉는 습관과 허리 시술 후 발생한 하퇴 외측 마목감 및 발목 배굴 약화(경도 족하수) 환자. 슬와 상부 분기점, 비골경부 비골터널(HP-CPN-01) 및 전경골근 심비골신경 진입부(HP-CPN-02)에 노바셀(-70mV) 집중 통전 후 발목 배굴 근력(MMT) 정상 회복.",
      "en": "Lateral leg numbness and ankle dorsiflexion weakness (mild foot drop) from fibular neck compression (Ch.9 Case 9-4); full dorsiflexion MMT strength recovered via fibular tunnel + deep peroneal NovaCell protocol."
    },
    "diagram": "images/diagrams/diagram_64.png",
    "rifeFreq": 528,
    "anatomicalLabels": [
      "1. Sciatic Nerve Bifurcation (Tibial & Common Peroneal N.)",
      "2. Popliteal Artery/Vein Safety Landmark",
      "3. Popliteus & Tibial Nerve Motor Entry",
      "4. Fibular Neck Common Peroneal Tunnel & Gastrocnemius"
    ],
    "searchKeywords": "총비골신경 비골신경마비 족하수 발처짐 비골두 비골터널 정강이외측저림 발등저림",
    "targets": [
      {
        "code": "T1",
        "color": "#ff334b",
        "x": 47.7,
        "y": 33.6,
        "role": {
          "ko": "근위 신경분기점",
          "en": "Sciatic Bifurcation Target"
        },
        "name": {
          "ko": "T1: 슬와 상부 좌골신경 분기점 (총비골·경골신경)",
          "en": "T1: Superior Popliteal Apex · Sciatic Nerve Bifurcation"
        },
        "desc": {
          "ko": "[표적 해부] 무릎 뒤 오금(슬와) 상단 정점에서 좌골신경이 외측 총비골신경(Common Peroneal Nerve)과 중앙 경골신경(Tibial Nerve)으로 갈라지며 대퇴이두근 내연을 따라 내려가는 근위 분기점.\n[촉지 및 시술] 오금 주름 상방 약 5~7cm 대퇴이두근 내측 경계 심부. 좌골신경 상류 긴장과 오금 외측에서 하퇴로 뻗치는 방사통을 원천 감압합니다.",
          "en": "Superior popliteal apex where the sciatic nerve bifurcates into common peroneal and tibial nerves along the medial border of biceps femoris."
        }
      },
      {
        "code": "T2",
        "color": "#00f5d4",
        "x": 60.6,
        "y": 56.2,
        "role": {
          "ko": "주 신경포착점",
          "en": "Primary Fibular Tunnel Target"
        },
        "name": {
          "ko": "T2: 비골두 직하방 비골경부 · 총비골신경 터널 (장비골근 건궁)",
          "en": "T2: Fibular Neck · Common Peroneal Nerve Fibular Tunnel (Peroneus Longus Arch)"
        },
        "desc": {
          "ko": "[표적 해부] 비골두 직하방 비골경부(Fibular Neck) 외측을 감고 돌며 장비골근 건궁(Peroneus Longus Arch) 아래로 진입하는 총비골신경 최다 포착 터널.\n[촉지 및 시술] 무릎 바깥쪽 아래 둥근 비골두 바로 아래 1~2cm 목 부분(Tinel 징후 양성 지점). 다리 꼬기·쪼그려 앉기 후 발생하는 정강이 외측·발등 저림과 족하수(Foot Drop)의 제1 핵심 감압점입니다.",
          "en": "Primary entrapment site where the common peroneal nerve winds around the fibular neck beneath the fibrous arch of peroneus longus; key target for foot drop and lateral leg numbness."
        }
      },
      {
        "code": "T3",
        "color": "#ff9f43",
        "x": 48.2,
        "y": 60.6,
        "role": {
          "ko": "심부 근복·건궁점",
          "en": "Popliteus & Soleus Arch Target"
        },
        "name": {
          "ko": "T3: 슬와 심부 슬와근(Popliteus) & 가자미근 건궁",
          "en": "T3: Deep Popliteal Fossa · Popliteus & Tendinous Arch of Soleus"
        },
        "desc": {
          "ko": "[표적 해부] 오금 심부 경골 후면 상부에 사선으로 부착하는 슬와근(Popliteus · 기시: 대퇴골 외측과 / 정지: 경골 후면 상부)과 경골신경이 통과하는 가자미근 건궁(Tendinous Arch of Soleus).\n[촉지 및 시술] 오금 중앙 하부 심부. 무릎 뒤 묵직함, 슬관절 잠김 현상 및 경골신경 동반 압박을 함께 해소합니다.",
          "en": "Deep popliteus muscle and tendinous arch of soleus in the popliteal floor; relieves deep posterior knee tightness and coexisting tibial nerve compression."
        }
      },
      {
        "code": "T4",
        "color": "#38bdf8",
        "x": 58.0,
        "y": 61.2,
        "role": {
          "ko": "원위 신경분기점",
          "en": "Deep Peroneal Entry Target"
        },
        "name": {
          "ko": "T4: 비골두 전하방 3cm · 심비골신경 분기점 (TA·EDL)",
          "en": "T4: 3cm Anteroinferior to Fibular Head · Deep Peroneal Nerve Entry"
        },
        "desc": {
          "ko": "[표적 해부] 비골두 전하방 약 3cm 부위에서 총비골신경이 천비골신경과 심비골신경으로 갈라져 전경골근(TA)·장지신근(EDL) 전방 구획으로 진입하는 원위 분기점.\n[촉지 및 시술] 비골두 앞아래 3cm 전외측 근막 경계. 발목을 위로 들어 올리는 족배굴곡 근력 회복과 발등·엄지-둘째발가락 사이 감각 정상화를 촉진합니다.",
          "en": "3cm anteroinferior to the fibular head where the deep peroneal nerve enters the anterior compartment (TA/EDL); restores dorsiflexion strength and dorsal foot sensation."
        }
      }
    ]
  }
];

window.CLINIC_11_NAMES = {
  1: '1. 무릎관절클리닉',
  2: '2. 족부클리닉',
  3: '3. 어깨클리닉',
  4: '4. 팔꿉관절클리닉',
  5: '5. 손목관절클리닉',
  6: '6. 경추(목)클리닉',
  7: '7. 흉부클리닉',
  8: '8. 요추클리닉',
  9: '9. 턱관절/두부클리닉',
  10: '10. 자율신경클리닉',
  11: '11. 도수/재활클리닉 (AKA)'
};

