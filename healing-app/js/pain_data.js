/**
 * NovaCell Pain Clinic APP - Master Condition Database (46 Conditions)
 * Standardized, 100% Anonymized Cases, Zero Injections/Drugs, NovaCell Therapy Compliant
 * Bilingual Support (KO/EN)
 */
window.PAIN_CATEGORIES = {
  "1": {
    "id": "head_neck",
    "name_ko": "두경부 및 안면 질환",
    "name_en": "Head, Neck & Facial Disorders",
    "icon": "fa-head-side-virus",
    "color": "#06b6d4"
  },
  "2": {
    "id": "shoulder_arm",
    "name_ko": "어깨, 상지 및 수부 질환",
    "name_en": "Shoulder, Upper Extremity & Hand",
    "icon": "fa-hand-back-fist",
    "color": "#3b82f6"
  },
  "3": {
    "id": "chest_torso",
    "name_ko": "흉부, 복부 및 몸통 질환",
    "name_en": "Thorax, Abdomen & Torso Disorders",
    "icon": "fa-lungs",
    "color": "#10b981"
  },
  "4": {
    "id": "back_hip",
    "name_ko": "요추, 골반, 둔부 및 고관절 질환",
    "name_en": "Lumbar Spine, Pelvis & Hip Disorders",
    "icon": "fa-person",
    "color": "#f59e0b"
  },
  "5": {
    "id": "knee_foot",
    "name_ko": "무릎, 발목 및 족부 질환",
    "name_en": "Knee, Ankle & Foot Disorders",
    "icon": "fa-shoe-prints",
    "color": "#ec4899"
  },
  "6": {
    "id": "autonomic_systemic",
    "name_ko": "자율신경계(Autonomic Nerve) 및 전신/특수 질환",
    "name_en": "Autonomic & Systemic Disorders",
    "icon": "fa-dna",
    "color": "#8b5cf6"
  }
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
      "en": "Nerve Entrapment & Tendon Traction"
    },
    "mechTags": [
      "nerve",
      "autonomic"
    ],
    "title": {
      "ko": "두피형 삼차신경통 / 두피 감각신경통",
      "en": "Scalp Trigeminal Neuralgia / Scalp Sensory Neuropathy"
    },
    "symptoms": {
      "ko": "전두부, 두정부, 측두부 두피 전체가 톡톡 쏘거나 찌릿찌릿함. 머리카락을 살짝만 건드려도 과민한 자극감 유발.",
      "en": "Clinical symptoms and discomfort associated with Scalp Trigeminal Neuralgia / Scalp Sensory Neuropathy. Characterized by localized or radiating aching, tightness, and movement-induced pain."
    },
    "pathophysiology": {
      "ko": "삼차신경 말초 가지(V1, V2, V3)가 두반극근(SsC)이나 두판상근(SC)의 과 긴장에 의해 C2, C3 레벨에서 신경이 유착되거나 신경 오작동에 의해 과흥 분됨.",
      "en": "Neuro-myofascial pathophysiological mechanism involving Scalp Trigeminal Neuralgia / Scalp Sensory Neuropathy. Peripheral nerve branches become entrapped and hyper-excited due to sustained muscle hypertonicity and tendon traction."
    },
    "targetTissues": {
      "ko": "두반극근(Semispinalis capitis, SsC), 두판상근(Splenius capitis, SC), C2/C3 척추주위 심부근육군.",
      "en": "Semispinalis Capitis, Splenius Capitis, C2-C3 Transversospinales, Inferior Nuchal Line, Trigeminal & Greater Occipital Nerves"
    },
    "palpation": {
      "ko": "C2, C3 레벨 TS 및 inferior nuchal line 근처 두반극근 근복의 뚜렷한 압 통점.",
      "en": "Palpable focal trigger points and deep fascial tenderness identified along C2-C3 Transversospinales & deep paravertebral muscle tender point and Semispinalis capitis & Splenius capitis near Inferior Nuchal Line."
    },
    "clinicalCase": {
      "ko": "수일 전부터 발생한 뒤통수에서 정수리 두피를 따라 방사되는 찌릿한 두통 및 머리카락 접촉 시 과민한 통증 사례. C2, C3 척추주위 심부근 및 두반극근 압통 부위에 NovaCell Therapy(노바셀 생체 전압 및 타깃 공명 치료)를 적용하여 신경 유착을 해소한 결과, 시술 30분 만에 두피 통증 80% 이상 소실 및 자극 과민성 정상화.",
      "en": "A case presenting with sharp, shooting headaches radiating from the occiput to the vertex scalp, accompanied by scalp hypersensitivity to light touch. Following the application of NovaCell Therapy (cellular voltage modulation & resonance frequency targeting) to the C2-C3 deep paravertebral muscles and semispinalis capitis, nerve entrapment was rapidly released, resulting in over 80% reduction of scalp pain within 30 minutes and restored sensory comfort."
    },
    "diagram": "images/diagrams/diagram_01.png",
    "targets": [
      {
        "name": {
          "ko": "치료 타깃 1",
          "en": "Treatment Target 1"
        },
        "desc": {
          "ko": "C2, C3 레벨 TS 및 inferior nuchal line 근처 두반극근 근복의 뚜렷한 압 통점.",
          "en": "C2-C3 Transversospinales & deep paravertebral muscle tender point"
        }
      },
      {
        "name": {
          "ko": "치료 타깃 2",
          "en": "Treatment Target 2"
        },
        "desc": {
          "ko": "두반극근(Semispinalis capitis, SsC), 두판상근(Splenius capitis, SC), C2/C3 척추주위 심부근육군.",
          "en": "Semispinalis capitis & Splenius capitis near Inferior Nuchal Line"
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
    "searchKeywords": "두피형 삼차신경통 / 두피 감각신경통 scalp trigeminal neuralgia / scalp sensory neuropathy 전두부, 두정부, 측두부 두피 전체가 톡톡 쏘거나 찌릿찌릿함. 머리카락을 살짝만 건드려도 과민한 자극감 유발. 두경부 및 안면 질환 head, neck & facial disorders"
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
      "en": "Nerve Entrapment & Tendon Traction"
    },
    "mechTags": [
      "nerve"
    ],
    "title": {
      "ko": "소두후신경 유착증",
      "en": "Lesser Occipital Nerve Entrapment"
    },
    "symptoms": {
      "ko": "귀 뒤쪽, 목 전외측, 두피 옆면이 바늘로 콕콕 쑤시듯 아프고 피부 타진 시 극심한 자각통 발생.",
      "en": "Clinical symptoms and discomfort associated with Lesser Occipital Nerve Entrapment. Characterized by localized or radiating aching, tightness, and movement-induced pain."
    },
    "pathophysiology": {
      "ko": "경신경총(superficial cervical plexus) 분지인 소후두신경(LON)이 흉쇄유돌근(SCM) 중간 유발점이나 상부경추(C2, C3) 추간공/심부근육에 의해 유착됨.",
      "en": "Neuro-myofascial pathophysiological mechanism involving Lesser Occipital Nerve Entrapment. Peripheral nerve branches become entrapped and hyper-excited due to sustained muscle hypertonicity and tendon traction."
    },
    "targetTissues": {
      "ko": "흉쇄유돌근(SCM) 중간 부위, C2/C3 추간공 및 척추주위 심부근육.",
      "en": "Lesser Occipital Nerve, Sternocleidomastoid (SCM), Splenius Capitis, C2-C3 Cervical Root"
    },
    "palpation": {
      "ko": "흉쇄유돌근(SCM) 후연 중간 지점(경신경총 4개 감각가지 분지점)을 집어 올렸을 때(pinch & roll) 뚜렷한 압통점.",
      "en": "Palpable focal trigger points and deep fascial tenderness identified along Mid-belly of SCM (posterior border Erb's point) and C2-C3 deep paravertebral muscle group."
    },
    "clinicalCase": {
      "ko": "귀 뒤쪽과 후두부 외측의 바늘로 찌르는 듯한 박동성 신경통으로 수면 장애를 겪던 사례. 흉쇄유돌근(SCM) 후연 신경 유착 지점 및 C2, C3 분절에 NovaCell Therapy를 적용하여 신경 압박을 이완시켰으며, 시술 당일 통증 소실 및 편안한 숙면 회복.",
      "en": "A clinical presentation of sharp, needle-like pulsating neuralgia behind the ear and along the lateral occiput, severely interfering with sleep. Application of NovaCell Therapy to the posterior border of the SCM (Erb's point) and C2-C3 segments relieved nerve entrapment, eliminating nocturnal pain on the same day and restoring restorative sleep."
    },
    "diagram": "images/diagrams/diagram_02.png",
    "targets": [
      {
        "name": {
          "ko": "치료 타깃 1",
          "en": "Treatment Target 1"
        },
        "desc": {
          "ko": "흉쇄유돌근(SCM) 후연 중간 지점(경신경총 4개 감각가지 분지점)을 집어 올렸을 때(pinch & roll) 뚜렷한 압통점.",
          "en": "Mid-belly of SCM (posterior border Erb's point)"
        }
      },
      {
        "name": {
          "ko": "치료 타깃 2",
          "en": "Treatment Target 2"
        },
        "desc": {
          "ko": "흉쇄유돌근(SCM) 중간 부위, C2/C3 추간공 및 척추주위 심부근육.",
          "en": "C2-C3 deep paravertebral muscle group"
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
    "searchKeywords": "소두후신경 유착증 lesser occipital nerve entrapment 귀 뒤쪽, 목 전외측, 두피 옆면이 바늘로 콕콕 쑤시듯 아프고 피부 타진 시 극심한 자각통 발생. 두경부 및 안면 질환 head, neck & facial disorders"
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
      "en": "Nerve Entrapment & Tendon Traction"
    },
    "mechTags": [
      "nerve"
    ],
    "title": {
      "ko": "측두근 신경유착 / 측두부 감각 신경통",
      "en": "Temporalis Nerve Entrapment / Temporal Neuralgia"
    },
    "symptoms": {
      "ko": "관자놀이(temple) 부위가 주기적으로 콕콕 쑤시고 찌릿하거나, 머리를 띠로 두른 듯한 강한 압박감.",
      "en": "Clinical symptoms and discomfort associated with Temporalis Nerve Entrapment / Temporal Neuralgia. Characterized by localized or radiating aching, tightness, and movement-induced pain."
    },
    "pathophysiology": {
      "ko": "Zygomaticotemporal n.가 측두근 근막을 뚫고 나오는 지점에서 포착되 거나, 외익상근에 의해 심측두신경(deep temporal n.)이 포착되어 측두 근 허혈/골막 자극(신경유착/견인통) 발생.",
      "en": "Neuro-myofascial pathophysiological mechanism involving Temporalis Nerve Entrapment / Temporal Neuralgia. Peripheral nerve branches become entrapped and hyper-excited due to sustained muscle hypertonicity and tendon traction."
    },
    "targetTissues": {
      "ko": "측두근(Temporalis) 기시부 골막, 외익상근(Lateral pterygoid, superior head).",
      "en": "Zygomaticotemporal Nerve, Temporalis Muscle, Deep Temporal Nerves, Zygomatic Arch"
    },
    "palpation": {
      "ko": "관자놀이 부근 측두근 근복 압통점 및 외익상근 부위.",
      "en": "Palpable focal trigger points and deep fascial tenderness identified along Zygomaticotemporal nerve exit at anterior temporalis fossa and C2-C3 upper cervical deep paravertebral muscles."
    },
    "clinicalCase": {
      "ko": "관자놀이 부위가 날카롭게 콕콕 쑤시고 전기가 통하듯 뻗치는 편두통 양상의 감각신경통 사례. 관골측두신경 출구부 및 측두근 심부 긴장점에 NovaCell Therapy를 집중 조율한 결과, 시술 직후 통증 지수(VAS)가 8에서 0으로 극적으로 개선되며 완전 회복.",
      "en": "A presentation of piercing, electric-like temporal neuralgia shooting across the temple. Precise delivery of NovaCell Therapy to the zygomaticotemporal nerve emergence and deep temporalis muscle belly relieved localized myofascial tension, dramatically reducing the visual analog pain score from 8 to 0 with complete resolution."
    },
    "diagram": "images/diagrams/diagram_03.png",
    "targets": [
      {
        "name": {
          "ko": "치료 타깃 1",
          "en": "Treatment Target 1"
        },
        "desc": {
          "ko": "관자놀이 부근 측두근 근복 압통점 및 외익상근 부위.",
          "en": "Zygomaticotemporal nerve exit at anterior temporalis fossa"
        }
      },
      {
        "name": {
          "ko": "치료 타깃 2",
          "en": "Treatment Target 2"
        },
        "desc": {
          "ko": "측두근(Temporalis) 기시부 골막, 외익상근(Lateral pterygoid, superior head).",
          "en": "C2-C3 upper cervical deep paravertebral muscles"
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
    "searchKeywords": "측두근 신경유착 / 측두부 감각 신경통 temporalis nerve entrapment / temporal neuralgia 관자놀이(temple) 부위가 주기적으로 콕콕 쑤시고 찌릿하거나, 머리를 띠로 두른 듯한 강한 압박감. 두경부 및 안면 질환 head, neck & facial disorders"
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
      "en": "Nerve Entrapment & Tendon Traction"
    },
    "mechTags": [
      "nerve"
    ],
    "title": {
      "ko": "전두근 신경유착 / 전두부 신경통",
      "en": "Frontalis Nerve Entrapment / Supraorbital Neuralgia"
    },
    "symptoms": {
      "ko": "우측 또는 좌측 앞이마 겉살이 찌릿찌릿하게 아프고, 가볍게 톡톡 두드리면 이마 표면으로 찌릿함이 확산됨.",
      "en": "Clinical symptoms and discomfort associated with Frontalis Nerve Entrapment / Supraorbital Neuralgia. Characterized by localized or radiating aching, tightness, and movement-induced pain."
    },
    "pathophysiology": {
      "ko": "삼차신경 V1 가지인 supraorbital n.가 전두근(frontalis) 및 눈눈썹근 근 막을 뚫고 나올 때 전두근 과긴장으로 유착됨.",
      "en": "Neuro-myofascial pathophysiological mechanism involving Frontalis Nerve Entrapment / Supraorbital Neuralgia. Peripheral nerve branches become entrapped and hyper-excited due to sustained muscle hypertonicity and tendon traction."
    },
    "targetTissues": {
      "ko": "전두근(Frontalis), 안륜근/추미근 영역.",
      "en": "Supraorbital Nerve, Supratrochlear Nerve, Frontalis Muscle, Galea Aponeurotica"
    },
    "palpation": {
      "ko": "앞이마 외측 및 안화상공(supraorbital foramen) 상방 전두근 근복의 가 장 심한 압통점.",
      "en": "Palpable focal trigger points and deep fascial tenderness identified along Maximal tender point of supraorbital nerve notch / frontalis belly and C2-C3 upper cervical transversospinales."
    },
    "clinicalCase": {
      "ko": "신체 활동 후 전두부 이마 표면에 발생한 찌릿찌릿한 피부 감각 과민과 신경통 사례. 안와상신경 절흔 및 전두근 최대 압통 영역에 NovaCell Therapy를 가동하여 신경근막 긴장을 정상화하였으며, 15분 내 통증 90% 이상 감소 및 편안함 회복.",
      "en": "A case involving prickling dysesthesia and neuralgic tenderness along the forehead skin following physical exertion. Applying NovaCell Therapy across the supraorbital notch and frontalis hypertonic zone normalized myofascial membrane potentials, reducing forehead discomfort by over 90% within 15 minutes."
    },
    "diagram": "images/diagrams/diagram_04.png",
    "targets": [
      {
        "name": {
          "ko": "치료 타깃 1",
          "en": "Treatment Target 1"
        },
        "desc": {
          "ko": "앞이마 외측 및 안화상공(supraorbital foramen) 상방 전두근 근복의 가 장 심한 압통점.",
          "en": "Maximal tender point of supraorbital nerve notch / frontalis belly"
        }
      },
      {
        "name": {
          "ko": "치료 타깃 2",
          "en": "Treatment Target 2"
        },
        "desc": {
          "ko": "전두근(Frontalis), 안륜근/추미근 영역.",
          "en": "C2-C3 upper cervical transversospinales"
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
    "searchKeywords": "전두근 신경유착 / 전두부 신경통 frontalis nerve entrapment / supraorbital neuralgia 우측 또는 좌측 앞이마 겉살이 찌릿찌릿하게 아프고, 가볍게 톡톡 두드리면 이마 표면으로 찌릿함이 확산됨. 두경부 및 안면 질환 head, neck & facial disorders"
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
      "en": "Nerve Entrapment & Tendon Traction"
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
      "en": "Clinical symptoms and discomfort associated with Tension Headache / Cluster Headache. Characterized by localized or radiating aching, tightness, and movement-induced pain."
    },
    "pathophysiology": {
      "ko": "교체신경계적 Autonomic Nerve에 의해 두개외 근육(epicranius)의 허혈이 가중되고, 두판상근(SC) 및 후두근/측두근의 TTP 가 복합 작용함.",
      "en": "Neuro-myofascial pathophysiological mechanism involving Tension Headache / Cluster Headache. Peripheral nerve branches become entrapped and hyper-excited due to sustained muscle hypertonicity and tendon traction."
    },
    "targetTissues": {
      "ko": "두판상근(Splenius capitis, SC), 후두근(Occipitalis), 측두근, T1~T4 상부흉추 다열근.",
      "en": "Splenius Capitis, T2-T3 Transversospinales, Sympathetic Trunk, Greater Occipital Nerve"
    },
    "palpation": {
      "ko": "SC 근복, 후두골 부착부 occipitalis TTP, 상부흉추 TS/다 열근.",
      "en": "Palpable focal trigger points and deep fascial tenderness identified along Splenius capitis (SC) upper insertion tender point and T2-T3 level thoracic transversospinales sympathetic chain."
    },
    "clinicalCase": {
      "ko": "안구 깊은 곳의 압박감과 후두부 전갈로 긁는 듯한 발작성 통증을 동반한 군집성 및 만성 긴장성 두통 사례. 두판상근 상부 및 T2, T3 흉추 분절 교감신경 경로에 NovaCell Therapy를 체계적으로 적용하여 자율신경 오작동을 진정시키고 두통 발작 완치.",
      "en": "A severe presentation of cluster-type cephalalgia characterized by retro-orbital pressure and deep occipital paroxysmal throbbing. Systematic NovaCell Therapy applied to the upper splenius capitis and T2-T3 thoracic transversospinales autonomic axis stabilized neurovascular balance, resolving recurrent episodic attacks."
    },
    "diagram": "images/diagrams/diagram_05.png",
    "targets": [
      {
        "name": {
          "ko": "치료 타깃 1",
          "en": "Treatment Target 1"
        },
        "desc": {
          "ko": "SC 근복, 후두골 부착부 occipitalis TTP, 상부흉추 TS/다 열근.",
          "en": "Splenius capitis (SC) upper insertion tender point"
        }
      },
      {
        "name": {
          "ko": "치료 타깃 2",
          "en": "Treatment Target 2"
        },
        "desc": {
          "ko": "두판상근(Splenius capitis, SC), 후두근(Occipitalis), 측두근, T1~T4 상부흉추 다열근.",
          "en": "T2-T3 level thoracic transversospinales sympathetic chain"
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
    "searchKeywords": "긴장성 두통 / 군집성 두통 tension headache / cluster headache 머리에 꽉 죄는 헬멧이나 수영모를 쓴 듯 묵직하고 조이는 통증, 안구 통증 동반. 두경부 및 안면 질환 head, neck & facial disorders"
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
      "en": "Nerve Entrapment & Tendon Traction"
    },
    "mechTags": [
      "nerve",
      "tendon",
      "autonomic"
    ],
    "title": {
      "ko": "자율신경성 인후통 및 두통 / 비인두염 양상",
      "en": "Autonomic Sore Throat & Headache (Nasopharyngitis Pattern)"
    },
    "symptoms": {
      "ko": "침을 삼킬 때 찢어질 듯한 목 통증, 귀 속으로 뻗치는 찌릿한 통 증, 한쪽 두통 동반.",
      "en": "Clinical symptoms and discomfort associated with Autonomic Sore Throat & Headache (Nasopharyngitis Pattern). Characterized by localized or radiating aching, tightness, and movement-induced pain."
    },
    "pathophysiology": {
      "ko": "SCM 상부 및 두판상근의 긴장으로 설인신경/미경신경 교감신경 가지가 자극(Autonomic Nerve)되어 비인두 연부조직에 허혈성 통증 유발.",
      "en": "Neuro-myofascial pathophysiological mechanism involving Autonomic Sore Throat & Headache (Nasopharyngitis Pattern). Peripheral nerve branches become entrapped and hyper-excited due to sustained muscle hypertonicity and tendon traction."
    },
    "targetTissues": {
      "ko": "흉쇄유돌근(SCM) 상부, 두판상근(Splenius capitis).",
      "en": "Superior SCM, Splenius Capitis, Glossopharyngeal Nerve Branch, Carotid Sheath"
    },
    "palpation": {
      "ko": "유두돌기 하방 SCM 상부 근복 및 두판상근 상부 압통점.",
      "en": "Palpable focal trigger points and deep fascial tenderness identified along Upper SCM belly near mastoid insertion and Splenius capitis upper trigger point."
    },
    "clinicalCase": {
      "ko": "연하 시 목 안쪽이 찢어지는 듯한 통증과 외이도 깊은 통증을 동반한 자율신경성 비인두 통증 사례. 흉쇄유돌근 상부 및 두판상근 부착부에 NovaCell Therapy를 적용하여 신경 반사성 과흥분을 차단하고 인후부 통증과 연하 곤란 즉시 소실.",
      "en": "A condition presenting with severe throat-tearing pain on swallowing and deep referred earache mimicking refractory pharyngitis. NovaCell Therapy targeted to the upper SCM and splenius capitis neutralized hyperactive autonomic reflex loops, providing immediate relief from throat discomfort and restoring smooth swallowing."
    },
    "diagram": "images/diagrams/diagram_06.png",
    "targets": [
      {
        "name": {
          "ko": "치료 타깃 1",
          "en": "Treatment Target 1"
        },
        "desc": {
          "ko": "유두돌기 하방 SCM 상부 근복 및 두판상근 상부 압통점.",
          "en": "Upper SCM belly near mastoid insertion"
        }
      },
      {
        "name": {
          "ko": "치료 타깃 2",
          "en": "Treatment Target 2"
        },
        "desc": {
          "ko": "흉쇄유돌근(SCM) 상부, 두판상근(Splenius capitis).",
          "en": "Splenius capitis upper trigger point"
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
    "searchKeywords": "자율신경성 인후통 및 두통 / 비인두염 양상 autonomic sore throat & headache (nasopharyngitis pattern) 침을 삼킬 때 찢어질 듯한 목 통증, 귀 속으로 뻗치는 찌릿한 통 증, 한쪽 두통 동반. 두경부 및 안면 질환 head, neck & facial disorders"
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
      "en": "Nerve Entrapment & Tendon Traction"
    },
    "mechTags": [
      "nerve"
    ],
    "title": {
      "ko": "경신경총 유착증",
      "en": "Cervical Plexus Entrapment (Erb's Point Syndrome)"
    },
    "symptoms": {
      "ko": "목 전외측, 쇄골 상방, 귀 뒤쪽으로 번지는 넓은 이상감각 및 찌릿찌릿한 피부 통증.",
      "en": "Clinical symptoms and discomfort associated with Cervical Plexus Entrapment (Erb's Point Syndrome). Characterized by localized or radiating aching, tightness, and movement-induced pain."
    },
    "pathophysiology": {
      "ko": "Superficial cervical plexus 감각 가지들이 SCM 후연을 뚫고 나올 때 SCM 과긴장에 의해 유착됨.",
      "en": "Neuro-myofascial pathophysiological mechanism involving Cervical Plexus Entrapment (Erb's Point Syndrome). Peripheral nerve branches become entrapped and hyper-excited due to sustained muscle hypertonicity and tendon traction."
    },
    "targetTissues": {
      "ko": "흉쇄유돌근(SCM) 중간 부위, C2-C4 척추주위 심부근육.",
      "en": "Erb's Point (Punctum Nervosum), Great Auricular Nerve, Transverse Cervical Nerve, Supraclavicular Nerves, Middle Scalene"
    },
    "palpation": {
      "ko": "SCM 후연 중간 높이(Erb's point) 꼬집어 올렸을 때 압통점.",
      "en": "Palpable focal trigger points and deep fascial tenderness identified along Mid-posterior border of SCM (Erb's point) and C3-C4 deep cervical paravertebral muscles."
    },
    "clinicalCase": {
      "ko": "경추 측면에서 쇄골 부위까지 피부가 화끈거리고 가벼운 옷깃 스침에도 과민한 통증을 호소한 경신경총 포착 사례. SCM 중앙부 Erb's point 신경 유착 부위에 NovaCell Therapy를 부드럽게 통전하여 감각신경 과흥분을 해소하고 작열통 완전 완화.",
      "en": "A clinical presentation of burning dysesthesia and collar-touch hypersensitivity spanning from the lateral neck to the clavicular region. Gentle NovaCell Therapy applied to Erb's point along the mid-SCM released superficial cervical plexus entrapment, resolving dermal burning sensations."
    },
    "diagram": "images/diagrams/diagram_07.png",
    "targets": [
      {
        "name": {
          "ko": "치료 타깃 1",
          "en": "Treatment Target 1"
        },
        "desc": {
          "ko": "SCM 후연 중간 높이(Erb's point) 꼬집어 올렸을 때 압통점.",
          "en": "Mid-posterior border of SCM (Erb's point)"
        }
      },
      {
        "name": {
          "ko": "치료 타깃 2",
          "en": "Treatment Target 2"
        },
        "desc": {
          "ko": "흉쇄유돌근(SCM) 중간 부위, C2-C4 척추주위 심부근육.",
          "en": "C3-C4 deep cervical paravertebral muscles"
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
    "searchKeywords": "경신경총 유착증 cervical plexus entrapment (erb's point syndrome) 목 전외측, 쇄골 상방, 귀 뒤쪽으로 번지는 넓은 이상감각 및 찌릿찌릿한 피부 통증. 두경부 및 안면 질환 head, neck & facial disorders"
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
      "en": "Nerve Entrapment & Tendon Traction"
    },
    "mechTags": [
      "nerve",
      "tendon"
    ],
    "title": {
      "ko": "소아 근긴장성 사경 (Childhood Torticollis)",
      "en": "Childhood Myogenic Torticollis"
    },
    "symptoms": {
      "ko": "목이 한쪽으로 기울어지고 반대쪽으로 회전하기 힘듦, 목 근육 뻐근함 및 동작 제한.",
      "en": "Clinical symptoms and discomfort associated with Childhood Myogenic Torticollis. Characterized by localized or radiating aching, tightness, and movement-induced pain."
    },
    "pathophysiology": {
      "ko": "SCM 및 사각근, 승모근의 병적 수축으로 인한 기시/정지부 견인통/마찰통 및 경신경 유착 복합 작용.",
      "en": "Neuro-myofascial pathophysiological mechanism involving Childhood Myogenic Torticollis. Peripheral nerve branches become entrapped and hyper-excited due to sustained muscle hypertonicity and tendon traction."
    },
    "targetTissues": {
      "ko": "흉쇄유돌근(SCM), 사각근(Scalene), C2-C5 다열근.",
      "en": "Sternocleidomastoid (SCM), Anterior/Middle Scalene, Accessory Nerve, Clavicular Head"
    },
    "palpation": {
      "ko": "SCM 근복 단단한 결절 부위 및 C2-C5 극돌기 외측 압통점.",
      "en": "Palpable focal trigger points and deep fascial tenderness identified along Gentle SCM clavicular/sternal muscle belly release point and Mid-scalene gentle relaxation target."
    },
    "clinicalCase": {
      "ko": "목이 한쪽으로 기울어지고 반대편 회전 운동이 제한된 급성 근긴장성 사경 사례. 흉쇄유돌근과 사각근 근복에 미세전류 기반의 부드러운 NovaCell Therapy를 집중 적용하여 근육 경축을 완화하고 경추 회전 가동 범위를 즉시 정상 회복.",
      "en": "A clinical case displaying lateral head tilt and severe restriction of cervical rotation due to acute muscle spasm. Gentle microcurrent NovaCell Therapy targeted to the SCM and scalene bellies safely dissolved localized muscular hypertonicity, immediately restoring full cervical rotational range of motion."
    },
    "diagram": "images/diagrams/diagram_08.png",
    "targets": [
      {
        "name": {
          "ko": "치료 타깃 1",
          "en": "Treatment Target 1"
        },
        "desc": {
          "ko": "SCM 근복 단단한 결절 부위 및 C2-C5 극돌기 외측 압통점.",
          "en": "Gentle SCM clavicular/sternal muscle belly release point"
        }
      },
      {
        "name": {
          "ko": "치료 타깃 2",
          "en": "Treatment Target 2"
        },
        "desc": {
          "ko": "흉쇄유돌근(SCM), 사각근(Scalene), C2-C5 다열근.",
          "en": "Mid-scalene gentle relaxation target"
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
    "searchKeywords": "소아 근긴장성 사경 (childhood torticollis) childhood myogenic torticollis 목이 한쪽으로 기울어지고 반대쪽으로 회전하기 힘듦, 목 근육 뻐근함 및 동작 제한. 두경부 및 안면 질환 head, neck & facial disorders"
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
      "en": "Nerve Entrapment & Tendon Traction"
    },
    "mechTags": [
      "nerve"
    ],
    "title": {
      "ko": "부신경 / 견갑배신경유착증",
      "en": "Accessory & Dorsal Scapular Nerve Entrapment"
    },
    "symptoms": {
      "ko": "뒷목의 뻐근한 허혈성 통증, 자다가 깰 정도의 뒷목 및 어깻죽지 짓 누르는 통증.",
      "en": "Clinical symptoms and discomfort associated with Accessory & Dorsal Scapular Nerve Entrapment. Characterized by localized or radiating aching, tightness, and movement-induced pain."
    },
    "pathophysiology": {
      "ko": "C5 척수신경 근위부(IVF) 및 중사각근 레벨에서 견갑배신경이 포착 되어 견갑거근/능형근에 긴장성 허혈 통증 유발.",
      "en": "Neuro-myofascial pathophysiological mechanism involving Accessory & Dorsal Scapular Nerve Entrapment. Peripheral nerve branches become entrapped and hyper-excited due to sustained muscle hypertonicity and tendon traction."
    },
    "targetTissues": {
      "ko": "C5 레벨 척추주위 심부근육군, 중사각근(Middle scalene), SCM.",
      "en": "Dorsal Scapular Nerve, Middle Scalene, Levator Scapulae, Rhomboid Muscles, C5 Root"
    },
    "palpation": {
      "ko": "C5 극돌기 주변 심부근육 압통점, 중사각근 C5 높이.",
      "en": "Palpable focal trigger points and deep fascial tenderness identified along C5 spinous process deep paravertebral muscles and Middle scalene belly at C5 level."
    },
    "clinicalCase": {
      "ko": "뒷목에서 어깻죽지, 견갑골 내측연까지 짓누르고 결리는 만성 허혈성 통증 사례. C5 척추주위 심부근 및 중사각근 레벨의 견갑배신경 주행부에 NovaCell Therapy를 적용하여 포착된 신경을 이완시킴으로써 만성적인 뻐근함과 압박 통증 완전 소실.",
      "en": "Chronic ischemic aching and crushing stiffness radiating from the posterior neck to the superior angle of the scapula and medial scapular border. NovaCell Therapy applied to the C5 deep paravertebral muscles and middle scalene course of the dorsal scapular nerve freed entrapped fibers, eliminating deep-seated scapular aching."
    },
    "diagram": "images/diagrams/diagram_09.png",
    "targets": [
      {
        "name": {
          "ko": "치료 타깃 1",
          "en": "Treatment Target 1"
        },
        "desc": {
          "ko": "C5 극돌기 주변 심부근육 압통점, 중사각근 C5 높이.",
          "en": "C5 spinous process deep paravertebral muscles"
        }
      },
      {
        "name": {
          "ko": "치료 타깃 2",
          "en": "Treatment Target 2"
        },
        "desc": {
          "ko": "C5 레벨 척추주위 심부근육군, 중사각근(Middle scalene), SCM.",
          "en": "Middle scalene belly at C5 level"
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
    "searchKeywords": "부신경 / 견갑배신경유착증 accessory & dorsal scapular nerve entrapment 뒷목의 뻐근한 허혈성 통증, 자다가 깰 정도의 뒷목 및 어깻죽지 짓 누르는 통증. 어깨, 상지 및 수부 질환 shoulder, upper extremity & hand"
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
      "en": "Nerve Entrapment & Tendon Traction"
    },
    "mechTags": [
      "nerve",
      "tendon"],
    "title": {
      "ko": "견쇄관절 가성 관절통 및 견쇄 관절염",
      "en": "Acromioclavicular (AC) Joint Pseudo-Arthralgia"
    },
    "symptoms": {
      "ko": "어깨 견봉, 견쇄관절(AC joint), 쇄골 외측 1/3 부위의 동작 시 날카로운 통증 및 움직임 제한.",
      "en": "Clinical symptoms and discomfort associated with Acromioclavicular (AC) Joint Pseudo-Arthralgia. Characterized by localized or radiating aching, tightness, and movement-induced pain."
    },
    "pathophysiology": {
      "ko": "승모근(MT/UT) 및 삼각근의 등장성 수축으로 견쇄관절 기시/정지부 골 막에 견인력이 작용하고, 부신경/액와신경 과흥분이 복합 작용함.",
      "en": "Neuro-myofascial pathophysiological mechanism involving Acromioclavicular (AC) Joint Pseudo-Arthralgia. Peripheral nerve branches become entrapped and hyper-excited due to sustained muscle hypertonicity and tendon traction."
    },
    "targetTissues": {
      "ko": "중부승모근(MT), 상부승모근(UT), 소원근(Teres minor), SCM.",
      "en": "AC Joint, Middle Trapezius, Teres Minor, SCM, Suprascapular Nerve"
    },
    "palpation": {
      "ko": "견갑골 가시(scapular spine) 상연, 견봉(acromion), 쇄골 외측 부착부, SCM 중간.",
      "en": "Palpable focal trigger points and deep fascial tenderness identified along Middle trapezius tendon traction point (MT) and SCM mid-point and Teres minor release point."
    },
    "clinicalCase": {
      "ko": "견봉쇄골(AC) 관절 부위의 지속적인 압통과 팔 거상 시 상투적인 어깨 통증 사례. 승모근 중부 건 견인점 및 소원근 보상 유착 부위에 NovaCell Therapy를 복합 적용하여 관절 내 장력을 재정렬하고 능동적 어깨 거상 각도 통증 없이 회복.",
      "en": "Persistent localized tenderness over the acromioclavicular (AC) joint with painful overhead abduction. Applying dual-target NovaCell Therapy to the middle trapezius traction zone and teres minor myofascial adhesion normalized joint biomechanics, restoring full pain-free shoulder elevation."
    },
    "diagram": "images/diagrams/diagram_10.png",
    "targets": [
      {
        "name": {
          "ko": "치료 타깃 1",
          "en": "Treatment Target 1"
        },
        "desc": {
          "ko": "견갑골 가시(scapular spine) 상연, 견봉(acromion), 쇄골 외측 부착부, SCM 중간.",
          "en": "Middle trapezius tendon traction point (MT)"
        }
      },
      {
        "name": {
          "ko": "치료 타깃 2",
          "en": "Treatment Target 2"
        },
        "desc": {
          "ko": "중부승모근(MT), 상부승모근(UT), 소원근(Teres minor), SCM.",
          "en": "SCM mid-point and Teres minor release point"
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
    "searchKeywords": "견쇄관절 가성 관절통 및 견쇄 관절염 acromioclavicular (ac) joint pseudo-arthralgia 어깨 견봉, 견쇄관절(ac joint), 쇄골 외측 1/3 부위의 동작 시 날카로운 통증 및 움직임 제한. 어깨, 상지 및 수부 질환 shoulder, upper extremity & hand"
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
      "en": "Nerve Entrapment & Tendon Traction"
    },
    "mechTags": [
      "nerve"],
    "title": {
      "ko": "늑쇄터널 증후군 / 전사각근 증후군",
      "en": "Costoclavicular Space & Anterior Scalene Syndrome (TOS)"
    },
    "symptoms": {
      "ko": "가슴 결림, 기침 시 가슴/등 통증, 팔 전체 및 손가락 저림, 조조강직, 상 완신경총 압박 증상.",
      "en": "Clinical symptoms and discomfort associated with Costoclavicular Space & Anterior Scalene Syndrome (TOS). Characterized by localized or radiating aching, tightness, and movement-induced pain."
    },
    "pathophysiology": {
      "ko": "전사각근과 쇄골하근의 과긴장/단축으로 늑쇄터널(쇄골과 1st rib 사이) 이 좁아지며 상완신경총 및 흉근신경(pectoral n.)이 유착됨.",
      "en": "Neuro-myofascial pathophysiological mechanism involving Costoclavicular Space & Anterior Scalene Syndrome (TOS). Peripheral nerve branches become entrapped and hyper-excited due to sustained muscle hypertonicity and tendon traction."
    },
    "targetTissues": {
      "ko": "전사각근(Anterior scalene), 쇄골하근(Subclavius).",
      "en": "Anterior Scalene, Brachial Plexus, Subclavian Artery, 1st Rib, Pectoral Nerves"
    },
    "palpation": {
      "ko": "목 전외측 전사각근 근복 깊은 압통점, 쇄골 하방 쇄골하근 부위.",
      "en": "Palpable focal trigger points and deep fascial tenderness identified along Anterior scalene insertion at 1st rib and Lateral/Medial pectoral nerve trigger points."
    },
    "clinicalCase": {
      "ko": "전흉부 압박감과 상지 전완부 저림으로 호흡까지 불편하던 늑쇄터널/전사각근 흉곽출구 압박 사례. 제1늑골 부착부 전사각근 및 흉근신경 주행부에 NovaCell Therapy를 적용하여 신경 혈관 다발 압박을 해소하고 가슴 통증과 팔 저림 즉각 호전.",
      "en": "Thoracic outlet compression presenting with anterior chest constriction and numbness radiating down the forearm. NovaCell Therapy directed at the anterior scalene insertion onto the 1st rib and pectoral nerve pathways decompressed the neurovascular bundle, immediately easing chest tightness and arm parasthesia."
    },
    "diagram": "images/diagrams/diagram_11.png",
    "targets": [
      {
        "name": {
          "ko": "치료 타깃 1",
          "en": "Treatment Target 1"
        },
        "desc": {
          "ko": "목 전외측 전사각근 근복 깊은 압통점, 쇄골 하방 쇄골하근 부위.",
          "en": "Anterior scalene insertion at 1st rib"
        }
      },
      {
        "name": {
          "ko": "치료 타깃 2",
          "en": "Treatment Target 2"
        },
        "desc": {
          "ko": "전사각근(Anterior scalene), 쇄골하근(Subclavius).",
          "en": "Lateral/Medial pectoral nerve trigger points"
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
    "searchKeywords": "늑쇄터널 증후군 / 전사각근 증후군 costoclavicular space & anterior scalene syndrome (tos) 가슴 결림, 기침 시 가슴/등 통증, 팔 전체 및 손가락 저림, 조조강직, 상 완신경총 압박 증상. 어깨, 상지 및 수부 질환 shoulder, upper extremity & hand"
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
      "en": "Nerve Entrapment & Tendon Traction"
    },
    "mechTags": [
      "nerve"
    ],
    "title": {
      "ko": "드퀘르뱅 증후군 (De Quervain's Disease)",
      "en": "De Quervain's Tenosynovitis"
    },
    "symptoms": {
      "ko": "손목 요골 측(엄지 쪽) 및 1st metacarpal base 통증, Finkelstein 검사 양성, 엄지 움직임 시 통증.",
      "en": "Clinical symptoms and discomfort associated with De Quervain's Tenosynovitis. Characterized by localized or radiating aching, tightness, and movement-induced pain."
    },
    "pathophysiology": {
      "ko": "장무지외전근(APL)과 단무지신근(EPB)의 과사용으로 근복에 힘줄견인점이 형성되어 1st metacarpal base 및 1st proximal phalanx 골막에 염증성 견인 통증 유 발.",
      "en": "Neuro-myofascial pathophysiological mechanism involving De Quervain's Tenosynovitis. Peripheral nerve branches become entrapped and hyper-excited due to sustained muscle hypertonicity and tendon traction."
    },
    "targetTissues": {
      "ko": "장무지외전근(APL), 단무지신근(EPB) 근복.",
      "en": "Abductor Pollicis Longus (APL), Extensor Pollicis Brevis (EPB), Radial Styloid Process, Radial Nerve"
    },
    "palpation": {
      "ko": "손목 관절면 상방 3~4 FB(손가락 폭) 지점, 전완 외측 비스듬히 주행하는 APL/EPB 근복의 지그시 깊은 압통 점.",
      "en": "Palpable focal trigger points and deep fascial tenderness identified along APL/EPB muscle bellies 4 finger-breadths proximal to wrist and Brachioradialis & radial nerve tender point."
    },
    "clinicalCase": {
      "ko": "엄지손가락 움직임 및 손목 요골측 굴곡 시 칼로 베는 듯한 건초염 통증 사례. 손목 근위부 4횡지 높이의 장무지외전근(APL)과 단무지신근(EPB) 근복에 NovaCell Therapy를 집중 조율하여 건막 마찰을 해소하고 엄지 쥠 동작 정상화.",
      "en": "Severe sharp pain over the radial styloid provoked by thumb abduction and wrist ulnar deviation. Concentrated NovaCell Therapy applied to the APL and EPB muscle bellies 4 finger-breadths proximal to the wrist released tenosynovial friction, allowing smooth, painless thumb movement."
    },
    "diagram": "images/diagrams/diagram_12.png",
    "targets": [
      {
        "name": {
          "ko": "치료 타깃 1",
          "en": "Treatment Target 1"
        },
        "desc": {
          "ko": "손목 관절면 상방 3~4 FB(손가락 폭) 지점, 전완 외측 비스듬히 주행하는 APL/EPB 근복의 지그시 깊은 압통 점.",
          "en": "APL/EPB muscle bellies 4 finger-breadths proximal to wrist"
        }
      },
      {
        "name": {
          "ko": "치료 타깃 2",
          "en": "Treatment Target 2"
        },
        "desc": {
          "ko": "장무지외전근(APL), 단무지신근(EPB) 근복.",
          "en": "Brachioradialis & radial nerve tender point"
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
    "searchKeywords": "드퀘르뱅 증후군 (de quervain's disease) de quervain's tenosynovitis 손목 요골 측(엄지 쪽) 및 1st metacarpal base 통증, finkelstein 검사 양성, 엄지 움직임 시 통증. 어깨, 상지 및 수부 질환 shoulder, upper extremity & hand"
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
      "en": "Nerve Entrapment & Tendon Traction"
    },
    "mechTags": [
      "tendon"
    ],
    "title": {
      "ko": "상완요골근 증후군",
      "en": "Brachioradialis Syndrome / Radial Wrist Pain"
    },
    "symptoms": {
      "ko": "손목 요골 경상돌기 앞쪽/손바닥 쪽 통증, 팔굽혀펴기나 물건 짚을 때 통증.",
      "en": "Clinical symptoms and discomfort associated with Brachioradialis Syndrome / Radial Wrist Pain. Characterized by localized or radiating aching, tightness, and movement-induced pain."
    },
    "pathophysiology": {
      "ko": "팔씨름이나 손자 안아주기 등으로 상완요골근 과부하 유 발 -> 요골 경상돌기 정지부 골막 자극 (힘줄견인/골막염).",
      "en": "Neuro-myofascial pathophysiological mechanism involving Brachioradialis Syndrome / Radial Wrist Pain. Peripheral nerve branches become entrapped and hyper-excited due to sustained muscle hypertonicity and tendon traction."
    },
    "targetTissues": {
      "ko": "상완요골근(Brachioradialis) 근복.",
      "en": "Brachioradialis, Superficial Radial Nerve, Radial Styloid Process, Radius"
    },
    "palpation": {
      "ko": "팔꿈치 주름 하방 3 FB(손가락 폭) 지점 상완요골근 근복 을 지그시 끼워 누를 때 심한 압통.",
      "en": "Palpable focal trigger points and deep fascial tenderness identified along Brachioradialis muscle belly 3 finger-breadths below elbow and Lateral epicondyle origin of brachioradialis."
    },
    "clinicalCase": {
      "ko": "전완부 외측 통증과 상완요골근 부위 압통으로 주관절 신전 및 물건 들기가 제한되던 사례. 팔꿈치 하방 3횡지 상완요골근 근복에 NovaCell Therapy를 통전하여 건-골막 견인 긴장을 해소하고 팔굽혀펴기 및 파워 그립 기능 복원.",
      "en": "Lateral forearm aching and focal tenderness over the brachioradialis muscle preventing elbow extension and lifting objects. NovaCell Therapy delivered to the muscle belly 3 finger-breadths distal to the elbow resolved periosteal traction forces, restoring strong grip and weight-bearing capacity."
    },
    "diagram": "images/diagrams/diagram_13.png",
    "targets": [
      {
        "name": {
          "ko": "치료 타깃 1",
          "en": "Treatment Target 1"
        },
        "desc": {
          "ko": "팔꿈치 주름 하방 3 FB(손가락 폭) 지점 상완요골근 근복 을 지그시 끼워 누를 때 심한 압통.",
          "en": "Brachioradialis muscle belly 3 finger-breadths below elbow"
        }
      },
      {
        "name": {
          "ko": "치료 타깃 2",
          "en": "Treatment Target 2"
        },
        "desc": {
          "ko": "상완요골근(Brachioradialis) 근복.",
          "en": "Lateral epicondyle origin of brachioradialis"
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
    "searchKeywords": "상완요골근 증후군 brachioradialis syndrome / radial wrist pain 손목 요골 경상돌기 앞쪽/손바닥 쪽 통증, 팔굽혀펴기나 물건 짚을 때 통증. 어깨, 상지 및 수부 질환 shoulder, upper extremity & hand"
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
      "en": "Nerve Entrapment & Tendon Traction"
    },
    "mechTags": [
      "nerve",
      "tendon"
    ],
    "title": {
      "ko": "손목터널증후군 (Carpal Tunnel Syndrome)",
      "en": "Carpal Tunnel Syndrome (CTS)"
    },
    "symptoms": {
      "ko": "엄지~약지 손가락 저림, 밤/새벽에 깨서 손을 털어야 함, 무 지구근 위축.",
      "en": "Clinical symptoms and discomfort associated with Carpal Tunnel Syndrome (CTS). Characterized by localized or radiating aching, tightness, and movement-induced pain."
    },
    "pathophysiology": {
      "ko": "요수근굴근(FCR)의 일차적 강직 및 신경유착과 힘줄견인으 로 인해 수근관 내부 압력이 이차적으로 증가하거나, 원회내 근에 의해 정중신경이 유착됨.",
      "en": "Neuro-myofascial pathophysiological mechanism involving Carpal Tunnel Syndrome (CTS). Peripheral nerve branches become entrapped and hyper-excited due to sustained muscle hypertonicity and tendon traction."
    },
    "targetTissues": {
      "ko": "요수근굴근(FCR), 원회내근(Pronator teres, PT), 전사각근 .",
      "en": "Median Nerve, Flexor Carpi Radialis (FCR), Transverse Carpal Ligament, Pronator Teres"
    },
    "palpation": {
      "ko": "전완 중간 높이 FCR 근복(장장근 요골 측 옆), 주관절 하방 원회내근 근복 압통점.",
      "en": "Palpable focal trigger points and deep fascial tenderness identified along FCR and pronator teres muscle belly in forearm and Carpal tunnel proximal entry point."
    },
    "clinicalCase": {
      "ko": "야간마다 손가락(1~3지)이 타는 듯 저려 수면 중 손을 털어야 했던 수근관증후군 사례. 요측수근굴근(FCR) 및 원회내근 전완 근복에 NovaCell Therapy를 적용하여 정중신경의 근위부 압박을 이완시킴으로써 야간 저림 완치 및 편안한 숙면 달성.",
      "en": "Carpal tunnel syndrome with nocturnal burning parasthesia in the thumb, index, and middle fingers forcing frequent hand shaking. NovaCell Therapy applied to the flexor carpi radialis and pronator teres muscle bellies decompressed the proximal median nerve pathway, eliminating nocturnal numbness and restoring continuous sleep."
    },
    "diagram": "images/diagrams/diagram_14.png",
    "targets": [
      {
        "name": {
          "ko": "치료 타깃 1",
          "en": "Treatment Target 1"
        },
        "desc": {
          "ko": "전완 중간 높이 FCR 근복(장장근 요골 측 옆), 주관절 하방 원회내근 근복 압통점.",
          "en": "FCR and pronator teres muscle belly in forearm"
        }
      },
      {
        "name": {
          "ko": "치료 타깃 2",
          "en": "Treatment Target 2"
        },
        "desc": {
          "ko": "요수근굴근(FCR), 원회내근(Pronator teres, PT), 전사각근 .",
          "en": "Carpal tunnel proximal entry point"
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
    "searchKeywords": "손목터널증후군 (carpal tunnel syndrome) carpal tunnel syndrome (cts) 엄지~약지 손가락 저림, 밤/새벽에 깨서 손을 털어야 함, 무 지구근 위축. 어깨, 상지 및 수부 질환 shoulder, upper extremity & hand"
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
      "en": "Nerve Entrapment & Tendon Traction"
    },
    "mechTags": [
      "nerve"
    ],
    "title": {
      "ko": "방아쇠수지 (Trigger Finger)",
      "en": "Trigger Finger (Stenosing Tenosynovitis)"
    },
    "symptoms": {
      "ko": "손가락 마디 걸림(triggering), 아침에 손가락이 잘 안 펴짐, MCP 관절 근위부(A1, A2 pulley) 압통.",
      "en": "Clinical symptoms and discomfort associated with Trigger Finger (Stenosing Tenosynovitis). Characterized by localized or radiating aching, tightness, and movement-induced pain."
    },
    "pathophysiology": {
      "ko": "지굴근(FDS, FDP)의 병적 등장성 수축으로 힘줄이 팽팽해져 A1, A2 pulley 및 metacarpal head와의 마찰/협착성 건막염 발생.",
      "en": "Neuro-myofascial pathophysiological mechanism involving Trigger Finger (Stenosing Tenosynovitis). Peripheral nerve branches become entrapped and hyper-excited due to sustained muscle hypertonicity and tendon traction."
    },
    "targetTissues": {
      "ko": "지심굴근/지표굴근(FDS/FDP) 근복, 원회내근(PT).",
      "en": "A1 Pulley, Flexor Digitorum Superficialis (FDS), Flexor Digitorum Profundus (FDP), Pronator Teres"
    },
    "palpation": {
      "ko": "전완 중간 높이 장장근 척골 측 바로 옆 FDS/FDP 근복 지그시 깊은 압통점.",
      "en": "Palpable focal trigger points and deep fascial tenderness identified along Mid-forearm FDS/FDP muscle belly release point and Pronator teres and deep flexor compartment."
    },
    "clinicalCase": {
      "ko": "손가락을 굽혔다 펼 때 뚝 소리와 함께 튕기며 걸리는 만성 방아쇠수지 사례. 전완 심부 굴근(FDS/FDP) 근복 및 건막 이행부에 NovaCell Therapy를 단계별로 적용하여 굴곡건의 활주 저항을 제거함으로써 걸림 현상 완치 및 부드러운 손동작 회복.",
      "en": "Trigger finger characterized by painful snapping and locking during finger extension. Staged application of NovaCell Therapy to the deep forearm digital flexors (FDS/FDP) and musculotendinous junctions eliminated flexor tendon glide resistance, resolving joint locking and restoring fluid finger motion."
    },
    "diagram": "images/diagrams/diagram_15.png",
    "targets": [
      {
        "name": {
          "ko": "치료 타깃 1",
          "en": "Treatment Target 1"
        },
        "desc": {
          "ko": "전완 중간 높이 장장근 척골 측 바로 옆 FDS/FDP 근복 지그시 깊은 압통점.",
          "en": "Mid-forearm FDS/FDP muscle belly release point"
        }
      },
      {
        "name": {
          "ko": "치료 타깃 2",
          "en": "Treatment Target 2"
        },
        "desc": {
          "ko": "지심굴근/지표굴근(FDS/FDP) 근복, 원회내근(PT).",
          "en": "Pronator teres and deep flexor compartment"
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
    "searchKeywords": "방아쇠수지 (trigger finger) trigger finger (stenosing tenosynovitis) 손가락 마디 걸림(triggering), 아침에 손가락이 잘 안 펴짐, mcp 관절 근위부(a1, a2 pulley) 압통. 어깨, 상지 및 수부 질환 shoulder, upper extremity & hand"
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
      "en": "Nerve Entrapment & Tendon Traction"
    },
    "mechTags": [
      "nerve"
    ],
    "title": {
      "ko": "척골신경 유착증 (주관증후군 / 가이온관증후군)",
      "en": "Ulnar Nerve Entrapment (Cubital & Guyon Canal)"
    },
    "symptoms": {
      "ko": "약지 외측 및 새끼손가락 저림, 손가락 사이 근육 위축, 주 관절 내측/손목 척골측 찌릿함.",
      "en": "Clinical symptoms and discomfort associated with Ulnar Nerve Entrapment (Cubital & Guyon Canal). Characterized by localized or radiating aching, tightness, and movement-induced pain."
    },
    "pathophysiology": {
      "ko": "척측수근굴근(FCU) 두 머리 사이(주관) 또는 가이온관 (Guyon's canal)에서 척골신경이 유착됨.",
      "en": "Neuro-myofascial pathophysiological mechanism involving Ulnar Nerve Entrapment (Cubital & Guyon Canal). Peripheral nerve branches become entrapped and hyper-excited due to sustained muscle hypertonicity and tendon traction."
    },
    "targetTissues": {
      "ko": "척측수근굴근(FCU) 근복, 삼두근 내측두, 내측사각근.",
      "en": "Ulnar Nerve, Flexor Carpi Ulnaris (FCU), Cubital Tunnel, Guyon's Canal"
    },
    "palpation": {
      "ko": "내측상과 하방 2-3cm FCU 두 머리 사이 주관 부위 압통 점.",
      "en": "Palpable focal trigger points and deep fascial tenderness identified along FCU muscle belly 2 finger-breadths below medial epicondyle and Cubital tunnel retro-epicondylar groove."
    },
    "clinicalCase": {
      "ko": "4번째와 5번째 손가락의 찌릿한 저림과 팔꿈치 내측 저림을 호소하던 척골신경 포착 사례. 척측수근굴근(FCU) 근복 및 주관 부위 신경 터널에 NovaCell Therapy를 적용하여 척골신경의 기계적 압박을 해소하고 수지 감각 완전 회복.",
      "en": "Ulnar nerve compression causing tingling paresthesia along the 4th and 5th digits and medial elbow discomfort. NovaCell Therapy applied to the flexor carpi ulnaris (FCU) belly and cubital tunnel entrance decompressed the ulnar nerve, completely resolving finger numbness and restoring sensory acuity."
    },
    "diagram": "images/diagrams/diagram_16.png",
    "targets": [
      {
        "name": {
          "ko": "치료 타깃 1",
          "en": "Treatment Target 1"
        },
        "desc": {
          "ko": "내측상과 하방 2-3cm FCU 두 머리 사이 주관 부위 압통 점.",
          "en": "FCU muscle belly 2 finger-breadths below medial epicondyle"
        }
      },
      {
        "name": {
          "ko": "치료 타깃 2",
          "en": "Treatment Target 2"
        },
        "desc": {
          "ko": "척측수근굴근(FCU) 근복, 삼두근 내측두, 내측사각근.",
          "en": "Cubital tunnel retro-epicondylar groove"
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
    "searchKeywords": "척골신경 유착증 (주관증후군 / 가이온관증후군) ulnar nerve entrapment (cubital & guyon canal) 약지 외측 및 새끼손가락 저림, 손가락 사이 근육 위축, 주 관절 내측/손목 척골측 찌릿함. 어깨, 상지 및 수부 질환 shoulder, upper extremity & hand"
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
      "en": "Nerve Entrapment & Tendon Traction"
    },
    "mechTags": [
      "tendon"
    ],
    "title": {
      "ko": "장/단척측수근신경 및 척측수근굴근 힘줄염",
      "en": "Extensor & Flexor Carpi Ulnaris Tendinitis"
    },
    "symptoms": {
      "ko": "손목 등쪽/척골측 통증, 주먹 쥐거나 손목을 꺾을 때 손목 관절 통 증.",
      "en": "Clinical symptoms and discomfort associated with Extensor & Flexor Carpi Ulnaris Tendinitis. Characterized by localized or radiating aching, tightness, and movement-induced pain."
    },
    "pathophysiology": {
      "ko": "ECRL, ECRB, ECU 또는 FCU 근복의 TTP로 인해 중수골 기저부 골막 부착부에 견인성 염증 발생.",
      "en": "Neuro-myofascial pathophysiological mechanism involving Extensor & Flexor Carpi Ulnaris Tendinitis. Peripheral nerve branches become entrapped and hyper-excited due to sustained muscle hypertonicity and tendon traction."
    },
    "targetTissues": {
      "ko": "ECRL, ECRB, ECU, FCU 근복.",
      "en": "Extensor Carpi Ulnaris (ECU), Flexor Carpi Ulnaris (FCU), Ulnar Styloid, TFCC"
    },
    "palpation": {
      "ko": "전완 근위부 및 중간 높이 각 근육 근복의 심부 압통점.",
      "en": "Palpable focal trigger points and deep fascial tenderness identified along ECU muscle belly proximal third of forearm and FCU muscle belly and ulnar border."
    },
    "clinicalCase": {
      "ko": "라켓/골프 운동 후 발생한 손목 척측 및 배측의 시큰거리는 힘줄 통증 사례. 전완 외측 신전근 및 척측수근굴근 기시부에 NovaCell Therapy를 통전하여 건초의 염증성 긴장을 이완시킴으로써 손목 비틀기 동작 시 통증 소실.",
      "en": "Aching pain along the ulnar and dorsal wrist following repetitive sporting activities. Delivering NovaCell Therapy to the origin of the extensor and flexor carpi ulnaris relieved peritendinous tension, eliminating pain during wrist rotational torque."
    },
    "diagram": "images/diagrams/diagram_17.png",
    "targets": [
      {
        "name": {
          "ko": "치료 타깃 1",
          "en": "Treatment Target 1"
        },
        "desc": {
          "ko": "전완 근위부 및 중간 높이 각 근육 근복의 심부 압통점.",
          "en": "ECU muscle belly proximal third of forearm"
        }
      },
      {
        "name": {
          "ko": "치료 타깃 2",
          "en": "Treatment Target 2"
        },
        "desc": {
          "ko": "ECRL, ECRB, ECU, FCU 근복.",
          "en": "FCU muscle belly and ulnar border"
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
    "searchKeywords": "장/단척측수근신경 및 척측수근굴근 힘줄염 extensor & flexor carpi ulnaris tendinitis 손목 등쪽/척골측 통증, 주먹 쥐거나 손목을 꺾을 때 손목 관절 통 증. 어깨, 상지 및 수부 질환 shoulder, upper extremity & hand"
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
      "en": "Nerve Entrapment & Tendon Traction"
    },
    "mechTags": [
      "nerve",
      "tendon"],
    "title": {
      "ko": "골프엘보 / 척측수근굴근 힘줄견인통",
      "en": "Medial Epicondylitis (Golfer's Elbow)"
    },
    "symptoms": {
      "ko": "주관절 내측상과 국소 통증, 세수할 때나 물건 잡을 때 내측 팔꿈치 통증.",
      "en": "Clinical symptoms and discomfort associated with Medial Epicondylitis (Golfer's Elbow). Characterized by localized or radiating aching, tightness, and movement-induced pain."
    },
    "pathophysiology": {
      "ko": "척측수근굴근(FCU) 및 굴근군의 과긴장으로 내측상과 기시부 골막에 염 증성 견인 자극(TTP) 발생; 소흉근 cNEP 연루.",
      "en": "Neuro-myofascial pathophysiological mechanism involving Medial Epicondylitis (Golfer's Elbow). Peripheral nerve branches become entrapped and hyper-excited due to sustained muscle hypertonicity and tendon traction."
    },
    "targetTissues": {
      "ko": "척측수근굴근(FCU) 근복, 소흉근(Pectoralis minor).",
      "en": "Medial Epicondyle, Common Flexor Tendon, Pectoralis Minor, Flexor Carpi Ulnaris (FCU)"
    },
    "palpation": {
      "ko": "내측상과 하방 3 FB(손가락 폭) FCU 근복 및 소흉근 압통점.",
      "en": "Palpable focal trigger points and deep fascial tenderness identified along Pectoralis minor anterior chest myofascial trigger point and FCU muscle belly 2-3 cm distal to medial epicondyle."
    },
    "clinicalCase": {
      "ko": "팔꿈치 내측상과 부위의 찌르는 통증과 악수 시 힘이 빠지던 골프엘보 사례. 소흉근 보상 유착점 및 척측수근굴근(FCU) 기시부에 복합 NovaCell Therapy를 적용하여 상지 운동 사슬의 장력을 균형화함으로써 팔꿈치 통증 85% 이상 개선.",
      "en": "Medial epicondylitis (Golfer's elbow) with sharp inner elbow pain and weak grip during handshaking. Dual NovaCell Therapy applied to the pectoralis minor associated trigger zone and the FCU origin balanced upper-extremity kinetic chains, reducing elbow pain by over 85%."
    },
    "diagram": "images/diagrams/diagram_18.png",
    "targets": [
      {
        "name": {
          "ko": "치료 타깃 1",
          "en": "Treatment Target 1"
        },
        "desc": {
          "ko": "내측상과 하방 3 FB(손가락 폭) FCU 근복 및 소흉근 압통점.",
          "en": "Pectoralis minor anterior chest myofascial trigger point"
        }
      },
      {
        "name": {
          "ko": "치료 타깃 2",
          "en": "Treatment Target 2"
        },
        "desc": {
          "ko": "척측수근굴근(FCU) 근복, 소흉근(Pectoralis minor).",
          "en": "FCU muscle belly 2-3 cm distal to medial epicondyle"
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
    "searchKeywords": "골프엘보 / 척측수근굴근 힘줄견인통 medial epicondylitis (golfer's elbow) 주관절 내측상과 국소 통증, 세수할 때나 물건 잡을 때 내측 팔꿈치 통증. 어깨, 상지 및 수부 질환 shoulder, upper extremity & hand"
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
      "en": "Nerve Entrapment & Tendon Traction"
    },
    "mechTags": [
      "tendon"
    ],
    "title": {
      "ko": "제1배측골간근 힘줄견인통",
      "en": "1st Dorsal Interosseous Tendon Traction Pain"
    },
    "symptoms": {
      "ko": "엄지~검지 사이 손등 쪽 날카로운 통증, 물건을 쥐거나 머리를 빗 기 힘듦.",
      "en": "Clinical symptoms and discomfort associated with 1st Dorsal Interosseous Tendon Traction Pain. Characterized by localized or radiating aching, tightness, and movement-induced pain."
    },
    "pathophysiology": {
      "ko": "제1배측골간근 요골측 깃(1st dorsal interosseous pennate head) 기시부의 미세손상 및 골막 자극 통증 (힘줄견인통/골막염).",
      "en": "Neuro-myofascial pathophysiological mechanism involving 1st Dorsal Interosseous Tendon Traction Pain. Peripheral nerve branches become entrapped and hyper-excited due to sustained muscle hypertonicity and tendon traction."
    },
    "targetTissues": {
      "ko": "제1배측골간근(1st dorsal interosseous, 요골측).",
      "en": "1st Dorsal Interosseous Muscle, Radial Artery Branch, Thumb Metacarpal, Index Metacarpal"
    },
    "palpation": {
      "ko": "제1중수골 요골 측 기시부 지그시 깊은 압통점.",
      "en": "Palpable focal trigger points and deep fascial tenderness identified along 1st dorsal interosseous muscle belly between 1st & 2nd metacarpal and Extensor pollicis brevis distal tendon."
    },
    "clinicalCase": {
      "ko": "엄지와 검지 사이 손등 부위 통증으로 일상적인 손 사용(머리 빗기, 열쇠 돌리기)이 어려웠던 사례. 제1배측골간근 근복의 중심 압통점에 NovaCell Therapy를 정밀 통전하여 골막 견인 통증을 즉각 이완하고 정밀 손 기능 회복.",
      "en": "Inability to perform fine hand maneuvers (hair brushing, turning keys) due to acute tendon traction pain between the thumb and index finger. Precision NovaCell Therapy applied to the 1st dorsal interosseous muscle belly dissolved periosteal traction stress, immediately restoring manual dexterity."
    },
    "diagram": "images/diagrams/diagram_19.png",
    "targets": [
      {
        "name": {
          "ko": "치료 타깃 1",
          "en": "Treatment Target 1"
        },
        "desc": {
          "ko": "제1중수골 요골 측 기시부 지그시 깊은 압통점.",
          "en": "1st dorsal interosseous muscle belly between 1st & 2nd metacarpal"
        }
      },
      {
        "name": {
          "ko": "치료 타깃 2",
          "en": "Treatment Target 2"
        },
        "desc": {
          "ko": "제1배측골간근(1st dorsal interosseous, 요골측).",
          "en": "Extensor pollicis brevis distal tendon"
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
    "searchKeywords": "제1배측골간근 힘줄견인통 1st dorsal interosseous tendon traction pain 엄지~검지 사이 손등 쪽 날카로운 통증, 물건을 쥐거나 머리를 빗 기 힘듦. 어깨, 상지 및 수부 질환 shoulder, upper extremity & hand"
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
      "en": "Nerve Entrapment & Tendon Traction"
    },
    "mechTags": [
      "nerve"
    ],
    "title": {
      "ko": "회외근 신경유착증 / 요골신경 신경유착증",
      "en": "Supinator & Radial Nerve Entrapment (Frohse Arcade)"
    },
    "symptoms": {
      "ko": "전완 신전근 부위 둔통, 저항 하 회외(resisted supination) 시 통증 악화, 척골 쪽 손목 등쪽 통증.",
      "en": "Clinical symptoms and discomfort associated with Supinator & Radial Nerve Entrapment (Frohse Arcade). Characterized by localized or radiating aching, tightness, and movement-induced pain."
    },
    "pathophysiology": {
      "ko": "회외근의 과긴장으로 요골신경 깊은가지(PIN)가 Frohse의 아 치에서 포착되거나 상완삼두근 외측두 레벨(spiral groove)에 서 포착됨.",
      "en": "Neuro-myofascial pathophysiological mechanism involving Supinator & Radial Nerve Entrapment (Frohse Arcade). Peripheral nerve branches become entrapped and hyper-excited due to sustained muscle hypertonicity and tendon traction."
    },
    "targetTissues": {
      "ko": "회외근(Supinator), 상완삼두근 외측두(Triceps brachii lateral head).",
      "en": "Supinator Muscle, Posterior Interosseous Nerve (PIN), Arcade of Frohse, Radial Tunnel"
    },
    "palpation": {
      "ko": "요골두 하방 전완 외후면 심부 회외근 근복 압통점.",
      "en": "Palpable focal trigger points and deep fascial tenderness identified along Supinator deep trigger point 4 cm below radial head and Brachioradialis proximal margin."
    },
    "clinicalCase": {
      "ko": "무거운 하중을 지탱한 뒤 지속된 전완 외측 깊은 통증 및 손목 신전 쇠약 사례. 요골두 하방 회외근의 프로세 아케이드(Frohse Arcade) 심부 압통점에 NovaCell Therapy를 적용하여 후골간신경(PIN)을 감압하고 손목 신전력 완전 회복.",
      "en": "Deep lateral forearm aching and extensor fatigue following heavy manual loading. NovaCell Therapy targeted to the supinator trigger zone at the Arcade of Frohse decompressed the posterior interosseous nerve (PIN), restoring full wrist extensor power."
    },
    "diagram": "images/diagrams/diagram_20.png",
    "targets": [
      {
        "name": {
          "ko": "치료 타깃 1",
          "en": "Treatment Target 1"
        },
        "desc": {
          "ko": "요골두 하방 전완 외후면 심부 회외근 근복 압통점.",
          "en": "Supinator deep trigger point 4 cm below radial head"
        }
      },
      {
        "name": {
          "ko": "치료 타깃 2",
          "en": "Treatment Target 2"
        },
        "desc": {
          "ko": "회외근(Supinator), 상완삼두근 외측두(Triceps brachii lateral head).",
          "en": "Brachioradialis proximal margin"
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
    "searchKeywords": "회외근 신경유착증 / 요골신경 신경유착증 supinator & radial nerve entrapment (frohse arcade) 전완 신전근 부위 둔통, 저항 하 회외(resisted supination) 시 통증 악화, 척골 쪽 손목 등쪽 통증. 어깨, 상지 및 수부 질환 shoulder, upper extremity & hand"
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
      "en": "Nerve Entrapment & Tendon Traction"
    },
    "mechTags": [
      "nerve"],
    "title": {
      "ko": "복벽신경유착증후군",
      "en": "Abdominal Cutaneous Nerve Entrapment (ACNES)"
    },
    "symptoms": {
      "ko": "만성 복통, 생리통 양상, 걷거나 복근 움직일 때 악화, Pinch & roll 검사 시 비명 유발.",
      "en": "Clinical symptoms and discomfort associated with Abdominal Cutaneous Nerve Entrapment (ACNES). Characterized by localized or radiating aching, tightness, and movement-induced pain."
    },
    "pathophysiology": {
      "ko": "흉늑신경 전피가지가 복직근 건막(aponeurotic opening)을 통과할 때 신경유착되어 통증 발생; T7~T12 척추주위 심부근 육 근막 유착 연루.",
      "en": "Neuro-myofascial pathophysiological mechanism involving Abdominal Cutaneous Nerve Entrapment (ACNES). Peripheral nerve branches become entrapped and hyper-excited due to sustained muscle hypertonicity and tendon traction."
    },
    "targetTissues": {
      "ko": "복직근(Rectus abdominis) 건막 터널, T7~T12 TS/다열근.",
      "en": "Anterior Cutaneous Nerve, Rectus Abdominis, T7-T9 Intercostal Nerves, Rectus Sheath"
    },
    "palpation": {
      "ko": "복부 측면 dimple/복직근 외측연 눌렀을 때 심한 압통점.",
      "en": "Palpable focal trigger points and deep fascial tenderness identified along Lateral border of rectus abdominis at T7-T9 level and Thoracic transversospinales at T7-T9."
    },
    "clinicalCase": {
      "ko": "체간 굴곡 및 기침 시 복벽 특정 부위가 날카롭게 콕콕 찔리던 복벽피부신경포착(ACNES) 사례. T7~T9 분절 복직근 외측연 신경 관통부에 NovaCell Therapy를 적용하여 포착된 신경가지를 이완함으로써 수분 내 만성 복통 완전 소실.",
      "en": "Sharp localized abdominal wall pain triggered by trunk flexion and abdominal tensing (Carnett positive). Delivering NovaCell Therapy along the lateral rectus sheath border at T7-T9 released entrapped cutaneous nerve branches, resolving chronic focal abdominal pain within minutes."
    },
    "diagram": "images/diagrams/diagram_21.png",
    "targets": [
      {
        "name": {
          "ko": "치료 타깃 1",
          "en": "Treatment Target 1"
        },
        "desc": {
          "ko": "복부 측면 dimple/복직근 외측연 눌렀을 때 심한 압통점.",
          "en": "Lateral border of rectus abdominis at T7-T9 level"
        }
      },
      {
        "name": {
          "ko": "치료 타깃 2",
          "en": "Treatment Target 2"
        },
        "desc": {
          "ko": "복직근(Rectus abdominis) 건막 터널, T7~T12 TS/다열근.",
          "en": "Thoracic transversospinales at T7-T9"
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
    "searchKeywords": "복벽신경유착증후군 abdominal cutaneous nerve entrapment (acnes) 만성 복통, 생리통 양상, 걷거나 복근 움직일 때 악화, pinch & roll 검사 시 비명 유발. 흉부, 복부 및 몸통 질환 thorax, abdomen & torso disorders"
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
      "en": "Nerve Entrapment & Tendon Traction"
    },
    "mechTags": [
      "nerve",
      "tendon"
    ],
    "title": {
      "ko": "T8-T9/등허리 감각신경성 통증 및 흉추 다열근 염증",
      "en": "T8-T9 Thoracolumbar Sensory Neuralgia & Multifidus"
    },
    "symptoms": {
      "ko": "등허리 부위의 찌릿찌릿한 전기 통함, 붉은 구진/발 진, 브래지어 끈 라인~장골능 사이 통증.",
      "en": "Clinical symptoms and discomfort associated with T8-T9 Thoracolumbar Sensory Neuralgia & Multifidus. Characterized by localized or radiating aching, tightness, and movement-induced pain."
    },
    "pathophysiology": {
      "ko": "흉추 후지가 다열근 및 최장근을 뚫고 나올 때 포착 (NEP)되거나 T8-T9 다열근 TTP에 의해 피부 감각과 민 유발.",
      "en": "Neuro-myofascial pathophysiological mechanism involving T8-T9 Thoracolumbar Sensory Neuralgia & Multifidus. Peripheral nerve branches become entrapped and hyper-excited due to sustained muscle hypertonicity and tendon traction."
    },
    "targetTissues": {
      "ko": "T8, T9 레벨 흉추 다열근(Multifidus), 최장근.",
      "en": "Thoracic Multifidus, T8-T9 Dorsal Rami, Erector Spinae, Intercostal Nerve"
    },
    "palpation": {
      "ko": "T8, T9 극돌기 외측 1.5cm 다열근 심부 압통점.",
      "en": "Palpable focal trigger points and deep fascial tenderness identified along T8-T9 thoracic multifidus deep tender points and T8-T9 costovertebral junction."
    },
    "clinicalCase": {
      "ko": "등허리 늑간을 따라 찌릿한 신경통과 피부 발적이 지속되어 대상포진으로 오인받았던 흉추 다열근 염증 사례. T8, T9 흉추 심부 다열근 압통점에 NovaCell Therapy를 정밀 통전하여 척추신경 후지 포착을 해소하고 등허리 통증 및 신경성 발적 정상화.",
      "en": "Thoracolumbar radiating neuralgia and neuralgic flushing along the intercostal distribution mimicking shingles. NovaCell Therapy applied to the T8-T9 thoracic multifidus deep tender points freed entrapped dorsal rami, normalizing neuropathic flushing and resolving flank pain."
    },
    "diagram": "images/diagrams/diagram_22.png",
    "targets": [
      {
        "name": {
          "ko": "치료 타깃 1",
          "en": "Treatment Target 1"
        },
        "desc": {
          "ko": "T8, T9 극돌기 외측 1.5cm 다열근 심부 압통점.",
          "en": "T8-T9 thoracic multifidus deep tender points"
        }
      },
      {
        "name": {
          "ko": "치료 타깃 2",
          "en": "Treatment Target 2"
        },
        "desc": {
          "ko": "T8, T9 레벨 흉추 다열근(Multifidus), 최장근.",
          "en": "T8-T9 costovertebral junction"
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
    "searchKeywords": "t8-t9/등허리 감각신경성 통증 및 흉추 다열근 염증 t8-t9 thoracolumbar sensory neuralgia & multifidus 등허리 부위의 찌릿찌릿한 전기 통함, 붉은 구진/발 진, 브래지어 끈 라인~장골능 사이 통증. 흉부, 복부 및 몸통 질환 thorax, abdomen & torso disorders"
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
      "en": "Nerve Entrapment & Tendon Traction"
    },
    "mechTags": [
      "nerve",
      "autonomic"
    ],
    "title": {
      "ko": "체성 장애, 우울, 불안 / 상부·중부 흉추 증후군",
      "en": "Somatic Distress Disorder & Mid-Thoracic Syndrome (SoDDA)"
    },
    "symptoms": {
      "ko": "가슴 답답함, 한숨, 명치 콕콕 쑤심, 속 더부룩함, 소화불량, 심장 두 근거림, 우울/불안감 동반.",
      "en": "Clinical symptoms and discomfort associated with Somatic Distress Disorder & Mid-Thoracic Syndrome (SoDDA). Characterized by localized or radiating aching, tightness, and movement-induced pain."
    },
    "pathophysiology": {
      "ko": "상부/중부 흉추(T1~T12) 척추주위 심부근육의 과긴장으로 교감신 경절 및 ramus communicans가 유착(자율신경 오작동)되어 내장 기/심혈관계 자율신경 불균형 유발. • 치료 타깃 조직 복직근(Rectus abdominis) 건막 터널, T7~T12 TS/다열근 • 촉진 및 위치 복부 측면 dimple/복직근 외측연 눌렀을 때 심한 압통점",
      "en": "Neuro-myofascial pathophysiological mechanism involving Somatic Distress Disorder & Mid-Thoracic Syndrome (SoDDA). Peripheral nerve branches become entrapped and hyper-excited due to sustained muscle hypertonicity and tendon traction."
    },
    "targetTissues": {
      "ko": "",
      "en": "Mid-Thoracic Sympathetic Chain, T4-T7 Transversospinales, Splanchnic Nerves, Rhomboids"
    },
    "palpation": {
      "ko": "",
      "en": "Palpable focal trigger points and deep fascial tenderness identified along T4-T7 level thoracic sympathetic paravertebral chain and Mid-thoracic transversospinales deep fascia."
    },
    "clinicalCase": {
      "ko": "명치 끝의 지속적인 더부룩함과 콕콕 쑤시는 상복부 불쾌감 및 등마루 결림을 호소하던 체성 자율신경 장애(SoDDA) 사례. T4~T7 중부 흉추 분절 교감신경 경로에 NovaCell Therapy를 집중 조율하여 내장 신경 반사를 안정시키고 소화 기능 정상화.",
      "en": "Somatic distress syndrome presenting with epigastric tightness, indigestion, and mid-back ache resistant to conventional GI care. NovaCell Therapy focused on the T4-T7 mid-thoracic sympathetic paravertebral chain stabilized splanchnic autonomic tone, swiftly relieving epigastric distress and promoting digestion."
    },
    "diagram": "images/diagrams/diagram_23.png",
    "targets": [
      {
        "name": {
          "ko": "치료 타깃 1",
          "en": "Treatment Target 1"
        },
        "desc": {
          "ko": "",
          "en": "T4-T7 level thoracic sympathetic paravertebral chain"
        }
      },
      {
        "name": {
          "ko": "치료 타깃 2",
          "en": "Treatment Target 2"
        },
        "desc": {
          "ko": "",
          "en": "Mid-thoracic transversospinales deep fascia"
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
    "searchKeywords": "체성 장애, 우울, 불안 / 상부·중부 흉추 증후군 somatic distress disorder & mid-thoracic syndrome (sodda) 가슴 답답함, 한숨, 명치 콕콕 쑤심, 속 더부룩함, 소화불량, 심장 두 근거림, 우울/불안감 동반. 흉부, 복부 및 몸통 질환 thorax, abdomen & torso disorders"
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
      "en": "Nerve Entrapment & Tendon Traction"
    },
    "mechTags": [
      "nerve"
    ],
    "title": {
      "ko": "전거근 신경유착 / 장흉신경유착",
      "en": "Serratus Anterior & Long Thoracic Nerve Entrapment"
    },
    "symptoms": {
      "ko": "젖꼭지 바깥쪽 흉통, 달리기나 숨 쉴 때 가슴/옆구리 콕콕 찌르는 통증.",
      "en": "Clinical symptoms and discomfort associated with Serratus Anterior & Long Thoracic Nerve Entrapment. Characterized by localized or radiating aching, tightness, and movement-induced pain."
    },
    "pathophysiology": {
      "ko": "장흉신경(long thoracic n.)이 중사각근 하단에서 포 착되거나, C5~C7 척추주위 심부근육에 의해 근위부 에서 포착되어 전거근의 긴장성 허혈 통증 유발.",
      "en": "Neuro-myofascial pathophysiological mechanism involving Serratus Anterior & Long Thoracic Nerve Entrapment. Peripheral nerve branches become entrapped and hyper-excited due to sustained muscle hypertonicity and tendon traction."
    },
    "targetTissues": {
      "ko": "중사각근(Middle scalene) 하단, C5~C7 척추주위 심부근육.",
      "en": "Serratus Anterior, Long Thoracic Nerve, Middle Scalene, Lateral Rib Cage"
    },
    "palpation": {
      "ko": "쇄골 상방 중사각근 하단 압통점.",
      "en": "Palpable focal trigger points and deep fascial tenderness identified along Lower middle scalene at lateral neck and Serratus anterior muscle slips along 5th-6th ribs."
    },
    "clinicalCase": {
      "ko": "달리기나 상체 운동 시 측흉부 외측(늑골 부위)에 칼로 찌르는 듯한 흉통이 발생하던 전거근 신경포착 사례. 중사각근 하단 및 전거근 늑골 부착부에 NovaCell Therapy를 적용하여 장흉신경의 긴장을 완화함으로써 30분 이상 조깅에도 무통 유지.",
      "en": "Stabbing lateral chest pain along the ribs aggravated by running and upper-body movement. NovaCell Therapy applied to the lower middle scalene and serratus anterior costal origins released long thoracic nerve tension, enabling sustained aerobic exertion without chest pain."
    },
    "diagram": "images/diagrams/diagram_24.png",
    "targets": [
      {
        "name": {
          "ko": "치료 타깃 1",
          "en": "Treatment Target 1"
        },
        "desc": {
          "ko": "쇄골 상방 중사각근 하단 압통점.",
          "en": "Lower middle scalene at lateral neck"
        }
      },
      {
        "name": {
          "ko": "치료 타깃 2",
          "en": "Treatment Target 2"
        },
        "desc": {
          "ko": "중사각근(Middle scalene) 하단, C5~C7 척추주위 심부근육.",
          "en": "Serratus anterior muscle slips along 5th-6th ribs"
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
    "searchKeywords": "전거근 신경유착 / 장흉신경유착 serratus anterior & long thoracic nerve entrapment 젖꼭지 바깥쪽 흉통, 달리기나 숨 쉴 때 가슴/옆구리 콕콕 찌르는 통증. 흉부, 복부 및 몸통 질환 thorax, abdomen & torso disorders"
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
      "en": "Nerve Entrapment & Tendon Traction"
    },
    "mechTags": [
      "tendon"
    ],
    "title": {
      "ko": "소흉근 힘줄견인통 / 전흉부 통증",
      "en": "Pectoralis Minor Syndrome / Anterior Chest Pain"
    },
    "symptoms": {
      "ko": "숨 쉴 때마다 가슴 앞쪽(젖꼭지 위 수직선)이 콕콕 찔림.",
      "en": "Clinical symptoms and discomfort associated with Pectoralis Minor Syndrome / Anterior Chest Pain. Characterized by localized or radiating aching, tightness, and movement-induced pain."
    },
    "pathophysiology": {
      "ko": "소흉근의 병적 등장성 수축으로 늑골 기시부 골막에 염증성 통 증(견인통(마찰통)/periostitis) 발생.",
      "en": "Neuro-myofascial pathophysiological mechanism involving Pectoralis Minor Syndrome / Anterior Chest Pain. Peripheral nerve branches become entrapped and hyper-excited due to sustained muscle hypertonicity and tendon traction."
    },
    "targetTissues": {
      "ko": "소흉근(Pectoralis minor), 쇄골하근.",
      "en": "Pectoralis Minor, Coracoid Process, Medial Pectoral Nerve, Brachial Plexus"
    },
    "palpation": {
      "ko": "오훼돌기 및 3~5번 늑골 기시부 소흉근 근복 압통점.",
      "en": "Palpable focal trigger points and deep fascial tenderness identified along Pectoralis minor muscle belly below clavicle and Coracoid process attachment site."
    },
    "clinicalCase": {
      "ko": "심호흡 및 흉곽 확장 시 앞가슴이 콕콕 찔리고 결리던 소흉근 힘줄견인통 사례. 오구돌기 부착부 및 소흉근 근복에 NovaCell Therapy를 통전하여 흉벽 근막의 단축을 해소하고 가슴 답답함과 호흡 시 흉통 즉각 소실.",
      "en": "Anterior chest discomfort and focal subclavicular pain triggered by deep inspiration and pectoral stretching. NovaCell Therapy targeted to the pectoralis minor belly and coracoid attachment lengthened shortened fascial bands, restoring free, painless thoracic breathing."
    },
    "diagram": "images/diagrams/diagram_25.png",
    "targets": [
      {
        "name": {
          "ko": "치료 타깃 1",
          "en": "Treatment Target 1"
        },
        "desc": {
          "ko": "오훼돌기 및 3~5번 늑골 기시부 소흉근 근복 압통점.",
          "en": "Pectoralis minor muscle belly below clavicle"
        }
      },
      {
        "name": {
          "ko": "치료 타깃 2",
          "en": "Treatment Target 2"
        },
        "desc": {
          "ko": "소흉근(Pectoralis minor), 쇄골하근.",
          "en": "Coracoid process attachment site"
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
    "searchKeywords": "소흉근 힘줄견인통 / 전흉부 통증 pectoralis minor syndrome / anterior chest pain 숨 쉴 때마다 가슴 앞쪽(젖꼭지 위 수직선)이 콕콕 찔림. 흉부, 복부 및 몸통 질환 thorax, abdomen & torso disorders"
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
      "en": "Nerve Entrapment & Tendon Traction"
    },
    "mechTags": [
      "nerve",
      "tendon"
    ],
    "title": {
      "ko": "흉요추 이행부 증후군 (T-L Junction Syndrome)",
      "en": "Thoracolumbar Junction Syndrome (T-L Junction / Maigne)"
    },
    "symptoms": {
      "ko": "허리-엉덩이 경계 부위 시림, 장골능 후방 1/3 통증, 허리 구부리거나 앉아있을 때 허리 통증.",
      "en": "Clinical symptoms and discomfort associated with Thoracolumbar Junction Syndrome (T-L Junction / Maigne). Characterized by localized or radiating aching, tightness, and movement-induced pain."
    },
    "pathophysiology": {
      "ko": "T12/L1 레벨 등척성 수축으로 T12 dorsal ramus 및 상둔 신경(SCNE)이 포착되거나 최장근/광배근 힘줄견인 형성.",
      "en": "Neuro-myofascial pathophysiological mechanism involving Thoracolumbar Junction Syndrome (T-L Junction / Maigne). Peripheral nerve branches become entrapped and hyper-excited due to sustained muscle hypertonicity and tendon traction."
    },
    "targetTissues": {
      "ko": "T12/L1~L3 레벨 최장근(Longissimus), 다열근, 상둔신경 .",
      "en": "T12-L1 Junction, Superior Cluneal Nerves, Thoracolumbar Fascia, Iliac Crest"
    },
    "palpation": {
      "ko": "T12~L2 극돌기 외측 최장근 근복 및 장골능 후방 압통점.",
      "en": "Palpable focal trigger points and deep fascial tenderness identified along T12-L1 zygapophyseal / deep multifidus tender point and Posterior superior iliac crest cluneal nerve entry."
    },
    "clinicalCase": {
      "ko": "기상 후 또는 체간 회전 시 등허리와 장골능 상부에 광범위한 결림과 통증을 유발하던 흉요추 이행부(T12-L1) 증후군 사례. T12/L1 분절 심부근 및 상둔신경 출구부에 NovaCell Therapy를 적용하여 골반 뒤쪽 방사통 및 요통 완치.",
      "en": "Thoracolumbar junction syndrome presenting with diffuse flank and upper gluteal discomfort aggravated by morning rising and spinal rotation. NovaCell Therapy applied to the T12-L1 zygapophyseal multifidus and superior cluneal nerve entry cleared referred lumbogluteal pain."
    },
    "diagram": "images/diagrams/diagram_26.png",
    "targets": [
      {
        "name": {
          "ko": "치료 타깃 1",
          "en": "Treatment Target 1"
        },
        "desc": {
          "ko": "T12~L2 극돌기 외측 최장근 근복 및 장골능 후방 압통점.",
          "en": "T12-L1 zygapophyseal / deep multifidus tender point"
        }
      },
      {
        "name": {
          "ko": "치료 타깃 2",
          "en": "Treatment Target 2"
        },
        "desc": {
          "ko": "T12/L1~L3 레벨 최장근(Longissimus), 다열근, 상둔신경 .",
          "en": "Posterior superior iliac crest cluneal nerve entry"
        }
      }
    ],
    "anatomicalLabels": [
      "T12-L1 Junction",
      "Superior Cluneal Nerves",
      "Thoracolumbar Fascia",
      "Iliac Crest"
    ],
    "rifeFreq": 787,
    "searchKeywords": "흉요추 이행부 증후군 (t-l junction syndrome) thoracolumbar junction syndrome (t-l junction / maigne) 허리-엉덩이 경계 부위 시림, 장골능 후방 1/3 통증, 허리 구부리거나 앉아있을 때 허리 통증. 요추, 골반, 둔부 및 고관절 질환 lumbar spine, pelvis & hip disorders"
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
      "en": "Nerve Entrapment & Tendon Traction"
    },
    "mechTags": [
      "nerve",
      "tendon"
    ],
    "title": {
      "ko": "대요근 / 장골근 증후군",
      "en": "Psoas Major & Iliacus Syndrome / Groin & Thigh Pain"
    },
    "symptoms": {
      "ko": "허리를 펴기 힘들고 걷다 보면 허리가 굽어짐, 방바닥에 누우면 허리가 들뜸, 계단 올라갈 때 무릎관절 속 통증, 허벅지 전외측 이상감각.",
      "en": "Clinical symptoms and discomfort associated with Psoas Major & Iliacus Syndrome / Groin & Thigh Pain. Characterized by localized or radiating aching, tightness, and movement-induced pain."
    },
    "pathophysiology": {
      "ko": "대요근/장골근의 강직으로 대퇴신경 및 외측대퇴피신경(LFCN) 이 대요근 내부/근막에서 포착되어 고관절/무릎관절 신경통 및 허벅지 감각둔화 유발.",
      "en": "Neuro-myofascial pathophysiological mechanism involving Psoas Major & Iliacus Syndrome / Groin & Thigh Pain. Peripheral nerve branches become entrapped and hyper-excited due to sustained muscle hypertonicity and tendon traction."
    },
    "targetTissues": {
      "ko": "대요근(Psoas major), 장골근(Iliacus).",
      "en": "Psoas Major, Iliacus, Femoral Nerve, Lumbar Plexus, Inguinal Ligament"
    },
    "palpation": {
      "ko": "L3/L4 극돌기 수준 중심선 외측 3.5~5.5cm 지점 깊이 (7~9cm), ASIS 내측 장골오목 장골근 압통점.",
      "en": "Palpable focal trigger points and deep fascial tenderness identified along Deep psoas major belly lateral to umbilicus (L3-L4) and Iliacus fossa tender point medial to ASIS."
    },
    "clinicalCase": {
      "ko": "장시간 착석 및 보행 시 허리 깊은 곳에서 서혜부와 대퇴부 앞쪽으로 뻗어 내리던 대요근·장골근 긴장증 사례. 제3-4요추 외측 대요근 심부 및 장골와 압통점에 NovaCell Therapy를 적용하여 고관절 굴근의 신경견인을 이완시킴으로써 요통 85% 이상 호전.",
      "en": "Deep lumbar aching radiating into the groin and anterior thigh during prolonged sitting and gait. NovaCell Therapy applied to the deep psoas major at L3-L4 and iliacus trigger points normalized hip flexor neuromuscular tension, reducing lumbar-groin pain by over 85%."
    },
    "diagram": "images/diagrams/diagram_27.png",
    "targets": [
      {
        "name": {
          "ko": "치료 타깃 1",
          "en": "Treatment Target 1"
        },
        "desc": {
          "ko": "L3/L4 극돌기 수준 중심선 외측 3.5~5.5cm 지점 깊이 (7~9cm), ASIS 내측 장골오목 장골근 압통점.",
          "en": "Deep psoas major belly lateral to umbilicus (L3-L4)"
        }
      },
      {
        "name": {
          "ko": "치료 타깃 2",
          "en": "Treatment Target 2"
        },
        "desc": {
          "ko": "대요근(Psoas major), 장골근(Iliacus).",
          "en": "Iliacus fossa tender point medial to ASIS"
        }
      }
    ],
    "anatomicalLabels": [
      "Psoas Major",
      "Iliacus",
      "Femoral Nerve",
      "Lumbar Plexus",
      "Inguinal Ligament"
    ],
    "rifeFreq": 880,
    "searchKeywords": "대요근 / 장골근 증후군 psoas major & iliacus syndrome / groin & thigh pain 허리를 펴기 힘들고 걷다 보면 허리가 굽어짐, 방바닥에 누우면 허리가 들뜸, 계단 올라갈 때 무릎관절 속 통증, 허벅지 전외측 이상감각. 요추, 골반, 둔부 및 고관절 질환 lumbar spine, pelvis & hip disorders"
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
      "en": "Nerve Entrapment & Tendon Traction"
    },
    "mechTags": [
      "nerve"
    ],
    "title": {
      "ko": "이상근 증후군 / 좌골신경통",
      "en": "Piriformis Syndrome & Sciatica"
    },
    "symptoms": {
      "ko": "둔부 깊은 곳의 뻐근한 통증, 허벅지 후외측으로 뻗치는 좌골신경통, 꼬리뼈 통증.",
      "en": "Clinical symptoms and discomfort associated with Piriformis Syndrome & Sciatica. Characterized by localized or radiating aching, tightness, and movement-induced pain."
    },
    "pathophysiology": {
      "ko": "이상근의 과긴장 및 단축으로 그 아래를 통과하는 좌골신 경, 하둔신경, 후대퇴피신경이 포착(NEP)되어 둔부 허혈 및 하지 방사통 유발.",
      "en": "Neuro-myofascial pathophysiological mechanism involving Piriformis Syndrome & Sciatica. Peripheral nerve branches become entrapped and hyper-excited due to sustained muscle hypertonicity and tendon traction."
    },
    "targetTissues": {
      "ko": "이상근(Piriformis), L5/S1 다열근.",
      "en": "Piriformis Muscle, Sciatic Nerve, Greater Sciatic Foramen, Sacroiliac Joint"
    },
    "palpation": {
      "ko": "PSIS와 대전자를 잇는 선 중간 하방 이상근 근복 깊은 압 통점.",
      "en": "Palpable focal trigger points and deep fascial tenderness identified along Piriformis muscle belly mid-distance between sacrum & greater trochanter and Sciatic nerve emergence inferior to piriformis."
    },
    "clinicalCase": {
      "ko": "둔부 깊은 곳의 뻐근한 결림과 하지 외측으로 전기가 흐르듯 저리던 이상근 증후군 및 좌골신경통 사례. 대좌골공 이상근 근복 및 좌골신경 주행 경로에 NovaCell Therapy를 집중 조율하여 신경 포착을 해소하고 보행 및 착석 편안함 회복.",
      "en": "Piriformis syndrome with sciatica characterized by deep buttock aching and electric radiating sensations down the leg. NovaCell Therapy applied across the piriformis belly and sciatic nerve emergence decompressed the sciatic trunk, restoring comfortable sitting and walking."
    },
    "diagram": "images/diagrams/diagram_28.png",
    "targets": [
      {
        "name": {
          "ko": "치료 타깃 1",
          "en": "Treatment Target 1"
        },
        "desc": {
          "ko": "PSIS와 대전자를 잇는 선 중간 하방 이상근 근복 깊은 압 통점.",
          "en": "Piriformis muscle belly mid-distance between sacrum & greater trochanter"
        }
      },
      {
        "name": {
          "ko": "치료 타깃 2",
          "en": "Treatment Target 2"
        },
        "desc": {
          "ko": "이상근(Piriformis), L5/S1 다열근.",
          "en": "Sciatic nerve emergence inferior to piriformis"
        }
      }
    ],
    "anatomicalLabels": [
      "Piriformis Muscle",
      "Sciatic Nerve",
      "Greater Sciatic Foramen",
      "Sacroiliac Joint"
    ],
    "rifeFreq": 727,
    "searchKeywords": "이상근 증후군 / 좌골신경통 piriformis syndrome & sciatica 둔부 깊은 곳의 뻐근한 통증, 허벅지 후외측으로 뻗치는 좌골신경통, 꼬리뼈 통증. 요추, 골반, 둔부 및 고관절 질환 lumbar spine, pelvis & hip disorders"
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
      "en": "Nerve Entrapment & Tendon Traction"
    },
    "mechTags": [
      "tendon"
    ],
    "title": {
      "ko": "고관절 심부 외회전근 골막염 / 대퇴근막장근 증후군",
      "en": "Deep Hip External Rotator Tendinitis & TFL Syndrome"
    },
    "symptoms": {
      "ko": "고관절 근처 국소 통증, 의자에서 일어날 때 다리 전체 못 움직임, 보행 시 대퇴 외측 통증 및 절뚝거림.",
      "en": "Clinical symptoms and discomfort associated with Deep Hip External Rotator Tendinitis & TFL Syndrome. Characterized by localized or radiating aching, tightness, and movement-induced pain."
    },
    "pathophysiology": {
      "ko": "대퇴근막장근(TFL) 및 심부 외회전근(상/하쌍위근, 대퇴 방형근)의 힘줄견인으로 대전자 부착부 골막염 유발.",
      "en": "Neuro-myofascial pathophysiological mechanism involving Deep Hip External Rotator Tendinitis & TFL Syndrome. Peripheral nerve branches become entrapped and hyper-excited due to sustained muscle hypertonicity and tendon traction."
    },
    "targetTissues": {
      "ko": "대퇴근막장근(TFL), 상/하쌍위근, 대퇴방형근.",
      "en": "Gemelli & Obturator Internus, Tensor Fasciae Latae (TFL), Greater Trochanter, IT Band"
    },
    "palpation": {
      "ko": "대전자(Greater trochanter) 후방 및 상방 심부 압통점.",
      "en": "Palpable focal trigger points and deep fascial tenderness identified along Posterior aspect of greater trochanter (rotator insertion) and Tensor fasciae latae muscle belly below ASIS."
    },
    "clinicalCase": {
      "ko": "의자에서 일어날 때 고관절 외측 통증으로 절뚝거리며 보행이 불안정하던 심부 외회전근 골막염 사례. 대전자 후방 외회전근 정지부 및 대퇴근막장근에 NovaCell Therapy를 적용하여 고관절 회전 안정성을 개선하고 즉시 정상 기립 보행 달성.",
      "en": "Severe lateral hip pain and antalgic gait when rising from a seated position due to deep external rotator enthesopathy. NovaCell Therapy applied to the posterior greater trochanter insertion and TFL restored hip joint alignment, enabling smooth, pain-free standing and walking."
    },
    "diagram": "images/diagrams/diagram_29.png",
    "targets": [
      {
        "name": {
          "ko": "치료 타깃 1",
          "en": "Treatment Target 1"
        },
        "desc": {
          "ko": "대전자(Greater trochanter) 후방 및 상방 심부 압통점.",
          "en": "Posterior aspect of greater trochanter (rotator insertion)"
        }
      },
      {
        "name": {
          "ko": "치료 타깃 2",
          "en": "Treatment Target 2"
        },
        "desc": {
          "ko": "대퇴근막장근(TFL), 상/하쌍위근, 대퇴방형근.",
          "en": "Tensor fasciae latae muscle belly below ASIS"
        }
      }
    ],
    "anatomicalLabels": [
      "Gemelli & Obturator Internus",
      "Tensor Fasciae Latae (TFL)",
      "Greater Trochanter",
      "IT Band"
    ],
    "rifeFreq": 880,
    "searchKeywords": "고관절 심부 외회전근 골막염 / 대퇴근막장근 증후군 deep hip external rotator tendinitis & tfl syndrome 고관절 근처 국소 통증, 의자에서 일어날 때 다리 전체 못 움직임, 보행 시 대퇴 외측 통증 및 절뚝거림. 요추, 골반, 둔부 및 고관절 질환 lumbar spine, pelvis & hip disorders"
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
      "en": "Nerve Entrapment & Tendon Traction"
    },
    "mechTags": [
      "tendon"
    ],
    "title": {
      "ko": "대둔근 힘줄견인통 / 꼬리뼈 통증",
      "en": "Gluteus Maximus Tendon Traction & Coccygodynia"
    },
    "symptoms": {
      "ko": "엉덩방아 후 꼬리뼈 및 엉덩이 아랫부분 통증, 바닥이나 의자에 앉기 힘듦.",
      "en": "Clinical symptoms and discomfort associated with Gluteus Maximus Tendon Traction & Coccygodynia. Characterized by localized or radiating aching, tightness, and movement-induced pain."
    },
    "pathophysiology": {
      "ko": "엉덩방아 등 외상으로 대둔근 부착부에 힘줄견인점이 형 성되어 꼬리뼈 골막을 잡아당겨 염증성 통증 유발.",
      "en": "Neuro-myofascial pathophysiological mechanism involving Gluteus Maximus Tendon Traction & Coccygodynia. Peripheral nerve branches become entrapped and hyper-excited due to sustained muscle hypertonicity and tendon traction."
    },
    "targetTissues": {
      "ko": "대둔근(Gluteus maximus) 하부 부착부.",
      "en": "Gluteus Maximus, Sacrotuberous Ligament, Coccyx, Pudendal Nerve Branch"
    },
    "palpation": {
      "ko": "꼬리뼈 바로 옆 대둔근 근복 및 압통점.",
      "en": "Palpable focal trigger points and deep fascial tenderness identified along Lateral border of coccyx / gluteus maximus origin and Sacrotuberous ligament trigger point."
    },
    "clinicalCase": {
      "ko": "엉덩방아 후 수개월간 지속된 미골(꼬리뼈) 통증으로 바닥에 앉기 힘들던 대둔근 건 견인통 사례. 미골 외측연 대둔근 기시부 및 천골결절인대에 NovaCell Therapy를 통전하여 골막 견인 장력을 이완함으로써 착석 시 통증 즉시 소실.",
      "en": "Coccygodynia following a fall on the buttocks preventing normal sitting due to gluteus maximus tendon traction on the coccyx. NovaCell Therapy targeted along the lateral coccygeal gluteal origin relaxed periosteal traction forces, instantly resolving sitting discomfort."
    },
    "diagram": "images/diagrams/diagram_30.png",
    "targets": [
      {
        "name": {
          "ko": "치료 타깃 1",
          "en": "Treatment Target 1"
        },
        "desc": {
          "ko": "꼬리뼈 바로 옆 대둔근 근복 및 압통점.",
          "en": "Lateral border of coccyx / gluteus maximus origin"
        }
      },
      {
        "name": {
          "ko": "치료 타깃 2",
          "en": "Treatment Target 2"
        },
        "desc": {
          "ko": "대둔근(Gluteus maximus) 하부 부착부.",
          "en": "Sacrotuberous ligament trigger point"
        }
      }
    ],
    "anatomicalLabels": [
      "Gluteus Maximus",
      "Sacrotuberous Ligament",
      "Coccyx",
      "Pudendal Nerve Branch"
    ],
    "rifeFreq": 528,
    "searchKeywords": "대둔근 힘줄견인통 / 꼬리뼈 통증 gluteus maximus tendon traction & coccygodynia 엉덩방아 후 꼬리뼈 및 엉덩이 아랫부분 통증, 바닥이나 의자에 앉기 힘듦. 요추, 골반, 둔부 및 고관절 질환 lumbar spine, pelvis & hip disorders"
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
      "en": "Nerve Entrapment & Tendon Traction"
    },
    "mechTags": [
      "nerve",
      "tendon"
    ],
    "title": {
      "ko": "대퇴이두근 / 반막양근 무릎관절 신경통",
      "en": "Biceps Femoris & Semimembranosus Knee Neuralgia"
    },
    "symptoms": {
      "ko": "계단 오르내릴 때(특히 내려갈 때) 무릎 관절 속 깊은 통 증, 오금/무릎 뒤쪽 찌릿함.",
      "en": "Clinical symptoms and discomfort associated with Biceps Femoris & Semimembranosus Knee Neuralgia. Characterized by localized or radiating aching, tightness, and movement-induced pain."
    },
    "pathophysiology": {
      "ko": "대퇴이두근 단두/장두 또는 반막양근의 과긴장으로 총비 골신경 관절가지(recurrent articular branch)가 유착되 어 무릎 관절 내부 신경통 유발.",
      "en": "Neuro-myofascial pathophysiological mechanism involving Biceps Femoris & Semimembranosus Knee Neuralgia. Peripheral nerve branches become entrapped and hyper-excited due to sustained muscle hypertonicity and tendon traction."
    },
    "targetTissues": {
      "ko": "대퇴이두근(Biceps femoris), 반막양근 (Semimembranosus).",
      "en": "Biceps Femoris, Semimembranosus, Common Peroneal Nerve, Tibial Nerve, Fibula Head"
    },
    "palpation": {
      "ko": "무릎 뒤쪽 오금 상방 대퇴이두근/반막양근 근복 지그시 깊 은 압통점.",
      "en": "Palpable focal trigger points and deep fascial tenderness identified along Biceps femoris tendon insertion at fibular head and Semimembranosus pes insertion at posteromedial tibia."
    },
    "clinicalCase": {
      "ko": "계단을 오르내릴 때 무릎 관절 깊숙한 곳에서 통증이 뻗치던 대퇴이두근·반막양근 건 신경통 사례. 비골두 건 부착부 및 반막양근 경골 내측 정지부에 NovaCell Therapy를 적용하여 슬관절 심부 관절통을 신속히 해소하고 계단 보행 정상화.",
      "en": "Deep knee joint aching provoked by stair climbing arising from hamstring tendon traction and articular nerve irritation. NovaCell Therapy targeted to the fibular head biceps insertion and posteromedial tibial semimembranosus site resolved deep joint pain, restoring stair climbing."
    },
    "diagram": "images/diagrams/diagram_31.png",
    "targets": [
      {
        "name": {
          "ko": "치료 타깃 1",
          "en": "Treatment Target 1"
        },
        "desc": {
          "ko": "무릎 뒤쪽 오금 상방 대퇴이두근/반막양근 근복 지그시 깊 은 압통점.",
          "en": "Biceps femoris tendon insertion at fibular head"
        }
      },
      {
        "name": {
          "ko": "치료 타깃 2",
          "en": "Treatment Target 2"
        },
        "desc": {
          "ko": "대퇴이두근(Biceps femoris), 반막양근 (Semimembranosus).",
          "en": "Semimembranosus pes insertion at posteromedial tibia"
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
    "searchKeywords": "대퇴이두근 / 반막양근 무릎관절 신경통 biceps femoris & semimembranosus knee neuralgia 계단 오르내릴 때(특히 내려갈 때) 무릎 관절 속 깊은 통 증, 오금/무릎 뒤쪽 찌릿함. 무릎, 발목 및 족부 질환 knee, ankle & foot disorders"
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
      "en": "Nerve Entrapment & Tendon Traction"
    },
    "mechTags": [
      "tendon"
    ],
    "title": {
      "ko": "장경골구단증후군 (Iiotibial Band Syndrome : ITBS)",
      "en": "Iliotibial Band Syndrome (ITBS / Runner's Knee)"
    },
    "symptoms": {
      "ko": "조깅/러닝 시 무릎 외측(대퇴골 외측상과) 극심한 통증, 무릎 30도 굴곡 시 통증 악화.",
      "en": "Clinical symptoms and discomfort associated with Iliotibial Band Syndrome (ITBS / Runner's Knee). Characterized by localized or radiating aching, tightness, and movement-induced pain."
    },
    "pathophysiology": {
      "ko": "대퇴근막장근(TFL)과 대둔근의 과긴장으로 장경골구가 팽팽해져 대퇴골 외측상과와 반복 마찰/염증 유발.",
      "en": "Neuro-myofascial pathophysiological mechanism involving Iliotibial Band Syndrome (ITBS / Runner's Knee). Peripheral nerve branches become entrapped and hyper-excited due to sustained muscle hypertonicity and tendon traction."
    },
    "targetTissues": {
      "ko": "대퇴근막장근(Tensor fasciae latae, TFL).",
      "en": "Iliotibial Band (ITB), Lateral Femoral Epicondyle, Tensor Fasciae Latae, Gerdy's Tubercle"
    },
    "palpation": {
      "ko": "ASIS와 대전자 중간 지점 TFL 근복 심한 압통점.",
      "en": "Palpable focal trigger points and deep fascial tenderness identified along Tensor fasciae latae (TFL) proximal muscle belly and Lateral femoral epicondyle friction zone."
    },
    "clinicalCase": {
      "ko": "달리기 또는 굴곡 동작 시 무릎 외측 대퇴골 외측상과에 마찰 통증이 극심하던 장경골인대증후군(ITBS) 사례. 대퇴근막장근(TFL) 근복 및 외측상과 마찰점에 NovaCell Therapy를 집중 가동하여 건막 장력을 정상화하고 무릎 굴신 동작 통증 완치.",
      "en": "Iliotibial band syndrome (ITBS) with sharp lateral knee friction pain during running and knee flexion. Concentrated NovaCell Therapy applied to the proximal TFL muscle belly and lateral femoral condyle friction site relieved tension, enabling pain-free knee flexion and running."
    },
    "diagram": "images/diagrams/diagram_32.png",
    "targets": [
      {
        "name": {
          "ko": "치료 타깃 1",
          "en": "Treatment Target 1"
        },
        "desc": {
          "ko": "ASIS와 대전자 중간 지점 TFL 근복 심한 압통점.",
          "en": "Tensor fasciae latae (TFL) proximal muscle belly"
        }
      },
      {
        "name": {
          "ko": "치료 타깃 2",
          "en": "Treatment Target 2"
        },
        "desc": {
          "ko": "대퇴근막장근(Tensor fasciae latae, TFL).",
          "en": "Lateral femoral epicondyle friction zone"
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
    "searchKeywords": "장경골구단증후군 (iiotibial band syndrome : itbs) iliotibial band syndrome (itbs / runner's knee) 조깅/러닝 시 무릎 외측(대퇴골 외측상과) 극심한 통증, 무릎 30도 굴곡 시 통증 악화. 무릎, 발목 및 족부 질환 knee, ankle & foot disorders"
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
      "en": "Nerve Entrapment & Tendon Traction"
    },
    "mechTags": [
      "nerve",
      "tendon"
    ],
    "title": {
      "ko": "거위발 점액낭염 / 복재신경 포착",
      "en": "Pes Anserine Bursitis & Saphenous Nerve Entrapment"
    },
    "symptoms": {
      "ko": "무릎 내측 하방 통증, 쪼그려 앉았다 일어나기 힘듦, 계단 오르내릴 때 무릎 내측 통증.",
      "en": "Clinical symptoms and discomfort associated with Pes Anserine Bursitis & Saphenous Nerve Entrapment. Characterized by localized or radiating aching, tightness, and movement-induced pain."
    },
    "pathophysiology": {
      "ko": "봉공근/박근/반건양근 정지부(거위발)의 힘줄견인점/점 액낭염 및 내측광근에 의한 복재신경(saphenous n.) 유 착.",
      "en": "Neuro-myofascial pathophysiological mechanism involving Pes Anserine Bursitis & Saphenous Nerve Entrapment. Peripheral nerve branches become entrapped and hyper-excited due to sustained muscle hypertonicity and tendon traction."
    },
    "targetTissues": {
      "ko": "거위발 정지부(Pes anserinus), 내측광근(Vastus medialis).",
      "en": "Pes Anserinus (Sartorius/Gracilis/Semitendinosus), Saphenous Nerve, Vastus Medialis, Infrapatellar Branch"
    },
    "palpation": {
      "ko": "관절면 하방 내측 경골 부위 거위발 정지부, 관절면 상방 5 FB(10cm) 내측광근 근복.",
      "en": "Palpable focal trigger points and deep fascial tenderness identified along Vastus medialis 5 finger-breadths proximal to joint line and Pes anserine tendon insertion at medial tibia."
    },
    "clinicalCase": {
      "ko": "무릎 내측 하방 통증으로 쪼그려 앉거나 보행 시 절뚝거리던 거위발 점액낭염 및 복재신경 포착 사례. 관절선 상방 내측광근 및 거위발건 정지부에 NovaCell Therapy를 적용하여 복재신경 감압과 건막 염증을 해소하고 15분 만에 정상 보행 회복.",
      "en": "Pes anserine bursitis and saphenous nerve entrapment causing inferomedial knee pain and antalgic limping. NovaCell Therapy applied to the distal vastus medialis and pes anserine insertion decompressed the infrapatellar nerve, restoring smooth, symmetric gait within 15 minutes."
    },
    "diagram": "images/diagrams/diagram_33.png",
    "targets": [
      {
        "name": {
          "ko": "치료 타깃 1",
          "en": "Treatment Target 1"
        },
        "desc": {
          "ko": "관절면 하방 내측 경골 부위 거위발 정지부, 관절면 상방 5 FB(10cm) 내측광근 근복.",
          "en": "Vastus medialis 5 finger-breadths proximal to joint line"
        }
      },
      {
        "name": {
          "ko": "치료 타깃 2",
          "en": "Treatment Target 2"
        },
        "desc": {
          "ko": "거위발 정지부(Pes anserinus), 내측광근(Vastus medialis).",
          "en": "Pes anserine tendon insertion at medial tibia"
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
    "searchKeywords": "거위발 점액낭염 / 복재신경 포착 pes anserine bursitis & saphenous nerve entrapment 무릎 내측 하방 통증, 쪼그려 앉았다 일어나기 힘듦, 계단 오르내릴 때 무릎 내측 통증. 무릎, 발목 및 족부 질환 knee, ankle & foot disorders"
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
      "en": "Nerve Entrapment & Tendon Traction"
    },
    "mechTags": [
      "tendon"
    ],
    "title": {
      "ko": "비복근 / 가자미근 힘줄견인통 / 아킬레스건염",
      "en": "Gastrocnemius & Soleus Tendinopathy / Achilles Pain"
    },
    "symptoms": {
      "ko": "종아리 및 발뒤꿈치/아킬레스건 부위 통증, 걸을 때 절뚝 거림.",
      "en": "Clinical symptoms and discomfort associated with Gastrocnemius & Soleus Tendinopathy / Achilles Pain. Characterized by localized or radiating aching, tightness, and movement-induced pain."
    },
    "pathophysiology": {
      "ko": "비복근 내측두/외측두 및 가자미근의 힘줄견인으로 공통 힘줄(Achilles tendon) 부착부에 염증성 견인 통증 유발.",
      "en": "Neuro-myofascial pathophysiological mechanism involving Gastrocnemius & Soleus Tendinopathy / Achilles Pain. Peripheral nerve branches become entrapped and hyper-excited due to sustained muscle hypertonicity and tendon traction."
    },
    "targetTissues": {
      "ko": "비복근 내측두/외측두, 가자미근(Soleus).",
      "en": "Gastrocnemius (Medial Head), Soleus, Achilles Tendon, Tibial Nerve"
    },
    "palpation": {
      "ko": "슬와 주름 하방 비복근 기시부 및 근복, 종아리 중간 높이 지그시 깊은 압통점.",
      "en": "Palpable focal trigger points and deep fascial tenderness identified along Medial gastrocnemius origin at posterior femoral condyle and Soleus musculotendinous junction."
    },
    "clinicalCase": {
      "ko": "보행 시 종아리 당김과 발뒤꿈치 아킬레스건 부착부 통증으로 딛기 어렵던 비복근 건 견인통 사례. 대퇴골 과부 비복근 내측두 기시부 및 가자미근 근건 이행부에 NovaCell Therapy를 통전하여 건막 장력을 이완하고 발뒤꿈치 착지 통증 완치.",
      "en": "Gastrocnemius and soleus myofascial traction causing persistent calf tightness and insertional Achilles tendon pain during heel strike. NovaCell Therapy directed to the medial gastrocnemius femoral origin normalized calf compliance, completely relieving heel strike pain."
    },
    "diagram": "images/diagrams/diagram_34.png",
    "targets": [
      {
        "name": {
          "ko": "치료 타깃 1",
          "en": "Treatment Target 1"
        },
        "desc": {
          "ko": "슬와 주름 하방 비복근 기시부 및 근복, 종아리 중간 높이 지그시 깊은 압통점.",
          "en": "Medial gastrocnemius origin at posterior femoral condyle"
        }
      },
      {
        "name": {
          "ko": "치료 타깃 2",
          "en": "Treatment Target 2"
        },
        "desc": {
          "ko": "비복근 내측두/외측두, 가자미근(Soleus).",
          "en": "Soleus musculotendinous junction"
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
    "searchKeywords": "비복근 / 가자미근 힘줄견인통 / 아킬레스건염 gastrocnemius & soleus tendinopathy / achilles pain 종아리 및 발뒤꿈치/아킬레스건 부위 통증, 걸을 때 절뚝 거림. 무릎, 발목 및 족부 질환 knee, ankle & foot disorders"
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
      "en": "Nerve Entrapment & Tendon Traction"
    },
    "mechTags": [
      "nerve",
      "tendon"
    ],
    "title": {
      "ko": "심비골신경 유착증 / 장지신근 힘줄견인증",
      "en": "Deep Peroneal Nerve Entrapment & Extensor Digitorum Longus"
    },
    "symptoms": {
      "ko": "발목을 접질린 후 발목 관절 속 애매한 통증, 엄지-2번째 발가락 사이 물갈퀴 공간 감각 저하.",
      "en": "Clinical symptoms and discomfort associated with Deep Peroneal Nerve Entrapment & Extensor Digitorum Longus. Characterized by localized or radiating aching, tightness, and movement-induced pain."
    },
    "pathophysiology": {
      "ko": "장지신근(EDL)의 과긴장으로 심비골신경이 아랫다리 전 방구획에서 유착되어 발목 속 통증 및 감각 저하 유발.",
      "en": "Neuro-myofascial pathophysiological mechanism involving Deep Peroneal Nerve Entrapment & Extensor Digitorum Longus. Peripheral nerve branches become entrapped and hyper-excited due to sustained muscle hypertonicity and tendon traction."
    },
    "targetTissues": {
      "ko": "장지신근(Extensor digitorum longus, EDL).",
      "en": "Deep Peroneal Nerve, Extensor Digitorum Longus (EDL), Anterior Tarsal Tunnel, Dorsalis Pedis"
    },
    "palpation": {
      "ko": "경골조면 하단 3 FB 아래 장지신근 근복 지그시 깊은 압 통점.",
      "en": "Palpable focal trigger points and deep fascial tenderness identified along EDL muscle belly mid-anterior leg and Anterior ankle joint capsule deep peroneal nerve exit."
    },
    "clinicalCase": {
      "ko": "발목 염좌 이후 수개월간 지속된 발목 관절 속 먹먹한 통증 및 엄지-2지 사이 저림 사례. 전경골 하퇴 장지신근(EDL) 근복 및 족관절 전방 신경 관통부에 NovaCell Therapy를 적용하여 심비골신경 유착을 해소하고 가벼운 러닝 가능 회복.",
      "en": "Deep anterior ankle joint ache and dorsal first webspace paresthesia following an inversion ankle sprain. NovaCell Therapy targeted to the mid-leg extensor digitorum longus (EDL) belly freed the deep peroneal nerve, restoring painless ankle dorsiflexion and running ability."
    },
    "diagram": "images/diagrams/diagram_35.png",
    "targets": [
      {
        "name": {
          "ko": "치료 타깃 1",
          "en": "Treatment Target 1"
        },
        "desc": {
          "ko": "경골조면 하단 3 FB 아래 장지신근 근복 지그시 깊은 압 통점.",
          "en": "EDL muscle belly mid-anterior leg"
        }
      },
      {
        "name": {
          "ko": "치료 타깃 2",
          "en": "Treatment Target 2"
        },
        "desc": {
          "ko": "장지신근(Extensor digitorum longus, EDL).",
          "en": "Anterior ankle joint capsule deep peroneal nerve exit"
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
    "searchKeywords": "심비골신경 유착증 / 장지신근 힘줄견인증 deep peroneal nerve entrapment & extensor digitorum longus 발목을 접질린 후 발목 관절 속 애매한 통증, 엄지-2번째 발가락 사이 물갈퀴 공간 감각 저하. 무릎, 발목 및 족부 질환 knee, ankle & foot disorders"
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
      "en": "Nerve Entrapment & Tendon Traction"
    },
    "mechTags": [
      "tendon"
    ],
    "title": {
      "ko": "후경골근 증후군 (Tibialis Posterior TTP)",
      "en": "Tibialis Posterior Syndrome (Medial Ankle Pain)"
    },
    "symptoms": {
      "ko": "발목 내측 및 내측 복사뼈 뒤쪽 통증, 평발 변화, 아침에 내측 족저궁 시림.",
      "en": "Clinical symptoms and discomfort associated with Tibialis Posterior Syndrome (Medial Ankle Pain). Characterized by localized or radiating aching, tightness, and movement-induced pain."
    },
    "pathophysiology": {
      "ko": "후경골근의 미세손상 및 등장성 수축으로 주상골 정지부 골막 자극(힘줄견인/골막염) 유발.",
      "en": "Neuro-myofascial pathophysiological mechanism involving Tibialis Posterior Syndrome (Medial Ankle Pain). Peripheral nerve branches become entrapped and hyper-excited due to sustained muscle hypertonicity and tendon traction."
    },
    "targetTissues": {
      "ko": "후경골근(Tibialis Posterior) 근복.",
      "en": "Tibialis Posterior, Medial Malleolus, Navicular Tuberosity, Tibial Nerve"
    },
    "palpation": {
      "ko": "아랫다리 중간 높이 경골 내측연 뒤쪽으로 경골 후면에 붙 여 후경골근 근복 촉진.",
      "en": "Palpable focal trigger points and deep fascial tenderness identified along Tibialis posterior muscle belly deep in mid-calf and Retromalleolar groove behind medial malleolus."
    },
    "clinicalCase": {
      "ko": "발목 내측 복사뼈 뒤쪽 통증과 아침 첫 보행 시 발바닥 내측 당김을 호소하던 후경골근 증후군 사례. 종아리 심부 후경골근 근복 및 내과 후방 신경 홈에 NovaCell Therapy를 적용하여 족궁(아치)의 건 견인력을 이완시키고 보행 편안함 회복.",
      "en": "Posteromedial ankle aching and arch strain during initial morning steps caused by tibialis posterior myofascial strain. Delivering NovaCell Therapy to the deep posterior tibial belly and retromalleolar groove relieved tendon traction, restoring arch stability and comfortable gait."
    },
    "diagram": "images/diagrams/diagram_36.png",
    "targets": [
      {
        "name": {
          "ko": "치료 타깃 1",
          "en": "Treatment Target 1"
        },
        "desc": {
          "ko": "아랫다리 중간 높이 경골 내측연 뒤쪽으로 경골 후면에 붙 여 후경골근 근복 촉진.",
          "en": "Tibialis posterior muscle belly deep in mid-calf"
        }
      },
      {
        "name": {
          "ko": "치료 타깃 2",
          "en": "Treatment Target 2"
        },
        "desc": {
          "ko": "후경골근(Tibialis Posterior) 근복.",
          "en": "Retromalleolar groove behind medial malleolus"
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
    "searchKeywords": "후경골근 증후군 (tibialis posterior ttp) tibialis posterior syndrome (medial ankle pain) 발목 내측 및 내측 복사뼈 뒤쪽 통증, 평발 변화, 아침에 내측 족저궁 시림. 무릎, 발목 및 족부 질환 knee, ankle & foot disorders"
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
      "en": "Nerve Entrapment & Tendon Traction"
    },
    "mechTags": [
      "tendon"
    ],
    "title": {
      "ko": "단비골근 힘줄견인증 / 발목 외측 통증",
      "en": "Peroneus Brevis Tendinopathy / Lateral Ankle Pain"
    },
    "symptoms": {
      "ko": "발목 외측 복사뼈 뒤쪽 및 5번 중족골 기저부 통증, 양반 다리 시 발목 바깥쪽 통증.",
      "en": "Clinical symptoms and discomfort associated with Peroneus Brevis Tendinopathy / Lateral Ankle Pain. Characterized by localized or radiating aching, tightness, and movement-induced pain."
    },
    "pathophysiology": {
      "ko": "단비골근의 힘줄견인로 5번 중족골 기저부 정지부 골막 자극 유발.",
      "en": "Neuro-myofascial pathophysiological mechanism involving Peroneus Brevis Tendinopathy / Lateral Ankle Pain. Peripheral nerve branches become entrapped and hyper-excited due to sustained muscle hypertonicity and tendon traction."
    },
    "targetTissues": {
      "ko": "단비골근(Peroneus brevis) 근복.",
      "en": "Peroneus Brevis, Lateral Malleolus, 5th Metatarsal Base, Superficial Peroneal Nerve"
    },
    "palpation": {
      "ko": "비골 하방 1/3 높이 단비골근 근복 및 5번 중족골 기저부 부착부 압통점.",
      "en": "Palpable focal trigger points and deep fascial tenderness identified along Peroneus brevis muscle belly distal third lateral leg and Base of 5th metatarsal tuberosity insertion."
    },
    "clinicalCase": {
      "ko": "보행 또는 양반다리 시 발목 외측 복사뼈 뒤쪽과 제5중족골 기저부에 통증이 유발되던 단비골근 건 견인통 사례. 하퇴 외측 비골근 근복 및 제5중족골 부착부에 NovaCell Therapy를 통전하여 외측 건막 긴장을 소거하고 양반다리 시 통증 완쾌.",
      "en": "Peroneus brevis tendinopathy presenting with retromalleolar lateral ankle pain and 5th metatarsal base soreness during cross-legged sitting. NovaCell Therapy applied to the lateral leg fibularis belly eliminated peroneal tendon traction, restoring pain-free sitting."
    },
    "diagram": "images/diagrams/diagram_37.png",
    "targets": [
      {
        "name": {
          "ko": "치료 타깃 1",
          "en": "Treatment Target 1"
        },
        "desc": {
          "ko": "비골 하방 1/3 높이 단비골근 근복 및 5번 중족골 기저부 부착부 압통점.",
          "en": "Peroneus brevis muscle belly distal third lateral leg"
        }
      },
      {
        "name": {
          "ko": "치료 타깃 2",
          "en": "Treatment Target 2"
        },
        "desc": {
          "ko": "단비골근(Peroneus brevis) 근복.",
          "en": "Base of 5th metatarsal tuberosity insertion"
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
    "searchKeywords": "단비골근 힘줄견인증 / 발목 외측 통증 peroneus brevis tendinopathy / lateral ankle pain 발목 외측 복사뼈 뒤쪽 및 5번 중족골 기저부 통증, 양반 다리 시 발목 바깥쪽 통증. 무릎, 발목 및 족부 질환 knee, ankle & foot disorders"
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
      "en": "Nerve Entrapment & Tendon Traction"
    },
    "mechTags": [
      "nerve",
      "tendon"
    ],
    "title": {
      "ko": "족저근막염 / 내측종골신경 유착",
      "en": "Plantar Fasciitis & Medial Calcaneal Nerve Entrapment"
    },
    "symptoms": {
      "ko": "아침에 자고 일어나 첫발 내딛을 때 발뒤꿈치 바닥에 전기 가 오듯 극심한 통증.",
      "en": "Clinical symptoms and discomfort associated with Plantar Fasciitis & Medial Calcaneal Nerve Entrapment. Characterized by localized or radiating aching, tightness, and movement-induced pain."
    },
    "pathophysiology": {
      "ko": "내측종골신경이 굴근지대에서 포착되거나, 가자미근 (가자미근 근막 유착) 및 단지굴근/무지외전근 TTP 가 혼재되어 종골 바닥 골막염 유발.",
      "en": "Neuro-myofascial pathophysiological mechanism involving Plantar Fasciitis & Medial Calcaneal Nerve Entrapment. Peripheral nerve branches become entrapped and hyper-excited due to sustained muscle hypertonicity and tendon traction."
    },
    "targetTissues": {
      "ko": "굴근지대(Flexor retinaculum), 단지굴근(FDB), 무지외 전근(AbH), 가자미근.",
      "en": "Plantar Fascia, Medial Calcaneal Nerve, Flexor Retinaculum, Abductor Hallucis"
    },
    "palpation": {
      "ko": "내측 복사뼈 하방 굴근지대 부위 및 종골 내측 돌기 부근 압통점.",
      "en": "Palpable focal trigger points and deep fascial tenderness identified along Flexor retinaculum & medial calcaneal nerve below medial malleolus and Plantar fascia origin at medial calcaneal tuberosity."
    },
    "clinicalCase": {
      "ko": "아침 기상 후 첫발을 디딜 때 발뒤꿈치 바닥에 전기가 찌릿하며 딛기 힘들던 만성 족저근막염 사례. 내측 복사뼈 하방 굴근지대(Flexor Retinaculum) 및 내측종골신경 유착 부위에 NovaCell Therapy를 적용하여 신경 유착을 해소하고 첫발 통증 완전 소실.",
      "en": "Classic plantar fasciitis with excruciating morning first-step heel pain caused by medial calcaneal nerve entrapment beneath the flexor retinaculum. Precision NovaCell Therapy applied to the tarsal tunnel and calcaneal origin decompressed nerve branches, eliminating morning first-step pain."
    },
    "diagram": "images/diagrams/diagram_38.png",
    "targets": [
      {
        "name": {
          "ko": "치료 타깃 1",
          "en": "Treatment Target 1"
        },
        "desc": {
          "ko": "내측 복사뼈 하방 굴근지대 부위 및 종골 내측 돌기 부근 압통점.",
          "en": "Flexor retinaculum & medial calcaneal nerve below medial malleolus"
        }
      },
      {
        "name": {
          "ko": "치료 타깃 2",
          "en": "Treatment Target 2"
        },
        "desc": {
          "ko": "굴근지대(Flexor retinaculum), 단지굴근(FDB), 무지외 전근(AbH), 가자미근.",
          "en": "Plantar fascia origin at medial calcaneal tuberosity"
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
    "searchKeywords": "족저근막염 / 내측종골신경 유착 plantar fasciitis & medial calcaneal nerve entrapment 아침에 자고 일어나 첫발 내딛을 때 발뒤꿈치 바닥에 전기 가 오듯 극심한 통증. 무릎, 발목 및 족부 질환 knee, ankle & foot disorders"
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
      "en": "Nerve Entrapment & Tendon Traction"
    },
    "mechTags": [
      "nerve"
    ],
    "title": {
      "ko": "지간신경통 (Morton's Neuroma)",
      "en": "Morton's Neuroma / Interdigital Neuralgia"
    },
    "symptoms": {
      "ko": "3/4번 중족골두 사이 발바닥/발등으로 뻗치는 찌릿한 방 사통, 걸을 때 발바닥 통증.",
      "en": "Clinical symptoms and discomfort associated with Morton's Neuroma / Interdigital Neuralgia. Characterized by localized or radiating aching, tightness, and movement-induced pain."
    },
    "pathophysiology": {
      "ko": "내측/외측 족저신경 지간 가지가 심층횡중족인대 밑에서 유착/자극받아 발생.",
      "en": "Neuro-myofascial pathophysiological mechanism involving Morton's Neuroma / Interdigital Neuralgia. Peripheral nerve branches become entrapped and hyper-excited due to sustained muscle hypertonicity and tendon traction."
    },
    "targetTissues": {
      "ko": "심층횡중족인대(Deep transverse metatarsal ligament).",
      "en": "Common Plantar Digital Nerve, Deep Transverse Metatarsal Ligament, 3rd-4th Metatarsal Heads"
    },
    "palpation": {
      "ko": "3/4번 중족골두 사이 발등 쪽에서 자입하여 인대를 뚫는 깊이(피부 2cm 깊이) 압통점.",
      "en": "Palpable focal trigger points and deep fascial tenderness identified along Dorsal approach between 3rd & 4th metatarsal heads and Plantar intermetatarsal deep fascia."
    },
    "clinicalCase": {
      "ko": "3번째와 4번째 발가락 사이 발바닥이 화끈거리고 자갈을 밟는 듯 찌릿하던 지간신경통(몰톤신경종) 사례. 발등 3-4 중족골두 사이 심층인대 부위에 NovaCell Therapy를 정밀 통전하여 신경 포착을 해소하고 보행 시 찌릿한 방사통 완치.",
      "en": "Morton's interdigital neuroma characterized by burning sensations and pebble-like pain between the 3rd and 4th metatarsal heads. NovaCell Therapy delivered through the dorsal intermetatarsal approach decompressed the digital nerve, resolving neuropathic walking pain."
    },
    "diagram": "images/diagrams/diagram_39.png",
    "targets": [
      {
        "name": {
          "ko": "치료 타깃 1",
          "en": "Treatment Target 1"
        },
        "desc": {
          "ko": "3/4번 중족골두 사이 발등 쪽에서 자입하여 인대를 뚫는 깊이(피부 2cm 깊이) 압통점.",
          "en": "Dorsal approach between 3rd & 4th metatarsal heads"
        }
      },
      {
        "name": {
          "ko": "치료 타깃 2",
          "en": "Treatment Target 2"
        },
        "desc": {
          "ko": "심층횡중족인대(Deep transverse metatarsal ligament).",
          "en": "Plantar intermetatarsal deep fascia"
        }
      }
    ],
    "anatomicalLabels": [
      "Common Plantar Digital Nerve",
      "Deep Transverse Metatarsal Ligament",
      "3rd-4th Metatarsal Heads"
    ],
    "rifeFreq": 727,
    "searchKeywords": "지간신경통 (morton's neuroma) morton's neuroma / interdigital neuralgia 3/4번 중족골두 사이 발바닥/발등으로 뻗치는 찌릿한 방 사통, 걸을 때 발바닥 통증. 무릎, 발목 및 족부 질환 knee, ankle & foot disorders"
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
      "en": "Nerve Entrapment & Tendon Traction"
    },
    "mechTags": [
      "tendon"
    ],
    "title": {
      "ko": "단무지굴근 힘줄견인통 / 엄지발가락 중족지절관절(MTP) 통증",
      "en": "Flexor Hallucis Brevis Tendon Pain (1st MTP Joint)"
    },
    "symptoms": {
      "ko": "엄지발가락 1st MTP 관절 바닥쪽/내측 통증, 걸을 때 엄 지발가락을 발등 쪽으로 꺾으면 극심한 통증.",
      "en": "Clinical symptoms and discomfort associated with Flexor Hallucis Brevis Tendon Pain (1st MTP Joint). Characterized by localized or radiating aching, tightness, and movement-induced pain."
    },
    "pathophysiology": {
      "ko": "단무지굴근 내측두의 등장성 수축으로 1st MTP 근위지골 기저부 골막 자극(힘줄견인) 발생.",
      "en": "Neuro-myofascial pathophysiological mechanism involving Flexor Hallucis Brevis Tendon Pain (1st MTP Joint). Peripheral nerve branches become entrapped and hyper-excited due to sustained muscle hypertonicity and tendon traction."
    },
    "targetTissues": {
      "ko": "단무지굴근 내측두(FHB medial head).",
      "en": "Flexor Hallucis Brevis (FHB), Sesamoid Bones, 1st MTP Joint, Medial Plantar Nerve"
    },
    "palpation": {
      "ko": "1st MTP 관절로부터 근위부 2 FB 지점 FHB 내측두 근복 지그시 깊은 압통점.",
      "en": "Palpable focal trigger points and deep fascial tenderness identified along FHB medial head belly 2 finger-breadths proximal to 1st MTP and Sesamoid articulation at plantar 1st metatarsal head."
    },
    "clinicalCase": {
      "ko": "엄지발가락 밑바닥(1st MTP 관절) 통증으로 지면을 차고 나가지 못하던 단무지굴근 건 견인통 사례. MTP 관절 2횡지 근위부 단무지굴근 내측두에 NovaCell Therapy를 적용하여 종자골 주변 골막 견인력을 이완함으로써 즉각적인 통증 소실 및 정상 보행.",
      "en": "Plantar 1st metatarsophalangeal (MTP) joint pain preventing normal toe push-off due to flexor hallucis brevis (FHB) tendon traction. NovaCell Therapy applied to the FHB muscle belly relaxed periosteal tension around the sesamoids, instantly restoring comfortable toe-off gait."
    },
    "diagram": "images/diagrams/diagram_40.png",
    "targets": [
      {
        "name": {
          "ko": "치료 타깃 1",
          "en": "Treatment Target 1"
        },
        "desc": {
          "ko": "1st MTP 관절로부터 근위부 2 FB 지점 FHB 내측두 근복 지그시 깊은 압통점.",
          "en": "FHB medial head belly 2 finger-breadths proximal to 1st MTP"
        }
      },
      {
        "name": {
          "ko": "치료 타깃 2",
          "en": "Treatment Target 2"
        },
        "desc": {
          "ko": "단무지굴근 내측두(FHB medial head).",
          "en": "Sesamoid articulation at plantar 1st metatarsal head"
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
    "searchKeywords": "단무지굴근 힘줄견인통 / 엄지발가락 중족지절관절(mtp) 통증 flexor hallucis brevis tendon pain (1st mtp joint) 엄지발가락 1st mtp 관절 바닥쪽/내측 통증, 걸을 때 엄 지발가락을 발등 쪽으로 꺾으면 극심한 통증. 무릎, 발목 및 족부 질환 knee, ankle & foot disorders"
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
      "en": "Nerve Entrapment & Tendon Traction"
    },
    "mechTags": [
      "tendon"
    ],
    "title": {
      "ko": "장무지신근 힘줄견인통 / 엄지발가락 등쪽 통증",
      "en": "Extensor Hallucis Longus Tendinopathy / Dorsal Great Toe"
    },
    "symptoms": {
      "ko": "엄지발가락 1st MTP 관절 등쪽 및 IP 관절 등쪽 통증, 신 발 신을 때 엄지발가락이 구부러지면 극심한 통증.",
      "en": "Clinical symptoms and discomfort associated with Extensor Hallucis Longus Tendinopathy / Dorsal Great Toe. Characterized by localized or radiating aching, tightness, and movement-induced pain."
    },
    "pathophysiology": {
      "ko": "장무지신근(EHL)의 과긴장/단축으로 엄지발가락 기저부 등쪽 골막 자극 발생.",
      "en": "Neuro-myofascial pathophysiological mechanism involving Extensor Hallucis Longus Tendinopathy / Dorsal Great Toe. Peripheral nerve branches become entrapped and hyper-excited due to sustained muscle hypertonicity and tendon traction."
    },
    "targetTissues": {
      "ko": "장무지신근(Extensor hallucis longus, EHL).",
      "en": "Extensor Hallucis Longus (EHL), Dorsal 1st MTP Joint, Deep Peroneal Nerve Branch"
    },
    "palpation": {
      "ko": "양쪽 복사뼈 연결선 상방 5 FB 지점 EHL 근복 압통점.",
      "en": "Palpable focal trigger points and deep fascial tenderness identified along EHL muscle belly 5 finger-breadths above intermalleolar line and Dorsal 1st MTP joint capsule."
    },
    "clinicalCase": {
      "ko": "보행 중 발가락이 삐끗한 후 엄지발가락 등쪽 관절에 통증이 지속되던 장무지신근 건 견인통 사례. 복사뼈 선 5횡지 상방 장무지신근(EHL) 근복에 NovaCell Therapy를 적용하여 발등 건막의 긴장을 해소하고 신발 착용 및 보행 시 통증 완치.",
      "en": "Dorsal 1st MTP joint pain exacerbated by walking following a toe stubbing incident. NovaCell Therapy applied to the extensor hallucis longus (EHL) muscle belly 5 finger-breadths above the ankle released dorsal fascial tension, allowing painless gait and shoe wearing."
    },
    "diagram": "images/diagrams/diagram_41.png",
    "targets": [
      {
        "name": {
          "ko": "치료 타깃 1",
          "en": "Treatment Target 1"
        },
        "desc": {
          "ko": "양쪽 복사뼈 연결선 상방 5 FB 지점 EHL 근복 압통점.",
          "en": "EHL muscle belly 5 finger-breadths above intermalleolar line"
        }
      },
      {
        "name": {
          "ko": "치료 타깃 2",
          "en": "Treatment Target 2"
        },
        "desc": {
          "ko": "장무지신근(Extensor hallucis longus, EHL).",
          "en": "Dorsal 1st MTP joint capsule"
        }
      }
    ],
    "anatomicalLabels": [
      "Extensor Hallucis Longus (EHL)",
      "Dorsal 1st MTP Joint",
      "Deep Peroneal Nerve Branch"
    ],
    "rifeFreq": 727,
    "searchKeywords": "장무지신근 힘줄견인통 / 엄지발가락 등쪽 통증 extensor hallucis longus tendinopathy / dorsal great toe 엄지발가락 1st mtp 관절 등쪽 및 ip 관절 등쪽 통증, 신 발 신을 때 엄지발가락이 구부러지면 극심한 통증. 무릎, 발목 및 족부 질환 knee, ankle & foot disorders"
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
      "en": "Nerve Entrapment & Tendon Traction"
    },
    "mechTags": [
      "nerve",
      "autonomic"
    ],
    "title": {
      "ko": "자율신경계 오작동 (수족냉증 및 만성피로)",
      "en": "Autonomic Dysfunction (Cold Extremities & Chronic Fatigue)"
    },
    "symptoms": {
      "ko": "손발 차가움, 아침에 입안이 씀, 무기력증, 소화불량, 식도 염, 전신 몸살 양상.",
      "en": "Clinical symptoms and discomfort associated with Autonomic Dysfunction (Cold Extremities & Chronic Fatigue). Characterized by localized or radiating aching, tightness, and movement-induced pain."
    },
    "pathophysiology": {
      "ko": "척추주위 심부근육의 과긴장으로 척추관/추간공 주변 교 감신경 혈관운동섬유 및 GVA fiber가 유착(자율신경 오작동)되어 말초 혈류 장애 및 내장기 기능부전 유발.",
      "en": "Neuro-myofascial pathophysiological mechanism involving Autonomic Dysfunction (Cold Extremities & Chronic Fatigue). Peripheral nerve branches become entrapped and hyper-excited due to sustained muscle hypertonicity and tendon traction."
    },
    "targetTissues": {
      "ko": "T6~T10 레벨 척추주위 심부근육군(Multifidus).",
      "en": "Thoracolumbar Sympathetic Trunk, T8-T11 Multifidus, Celiac Ganglion, Splanchnic Nerves"
    },
    "palpation": {
      "ko": "T6~T10 극돌기 양옆 1.5cm 척추주위 심부근육 압통점.",
      "en": "Palpable focal trigger points and deep fascial tenderness identified along Bilateral T9-T10 multifidus deep paravertebral sympathetic locus and T5-T7 upper splanchnic regulation points."
    },
    "clinicalCase": {
      "ko": "수십 년간 지속된 손발 냉증, 만성 무기력, 잦은 소화장애를 동반하던 자율신경계 오작동(Autonomic Nerve) 사례. T9~T11 흉추 분절 심부 다열근 및 교감신경 경로에 NovaCell Therapy를 체계적으로 통전하여 말초 혈관 수축을 정상화하고 수족 온기 및 활력 회복.",
      "en": "Chronic autonomic dysregulation (Autonomic Nerve) marked by severe cold extremities, chronic exhaustion, and recurrent digestive dysmotility. NovaCell Therapy targeted to the T9-T11 thoracic multifidus autonomic sympathetic chain normalized peripheral vasomotor control, restoring limb warmth and systemic vitality."
    },
    "diagram": "images/diagrams/diagram_42.png",
    "targets": [
      {
        "name": {
          "ko": "치료 타깃 1",
          "en": "Treatment Target 1"
        },
        "desc": {
          "ko": "T6~T10 극돌기 양옆 1.5cm 척추주위 심부근육 압통점.",
          "en": "Bilateral T9-T10 multifidus deep paravertebral sympathetic locus"
        }
      },
      {
        "name": {
          "ko": "치료 타깃 2",
          "en": "Treatment Target 2"
        },
        "desc": {
          "ko": "T6~T10 레벨 척추주위 심부근육군(Multifidus).",
          "en": "T5-T7 upper splanchnic regulation points"
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
    "searchKeywords": "자율신경계 오작동 (수족냉증 및 만성피로) autonomic dysfunction (cold extremities & chronic fatigue) 손발 차가움, 아침에 입안이 씀, 무기력증, 소화불량, 식도 염, 전신 몸살 양상. 자율신경계(snep) 및 전신/특수 질환 autonomic & systemic disorders"
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
      "en": "Nerve Entrapment & Tendon Traction"
    },
    "mechTags": [
      "nerve"
    ],
    "title": {
      "ko": "산후풍 (Postpartum Pain Syndrome)",
      "en": "Postpartum Pain Syndrome / Sacrococcygeal Pain"
    },
    "symptoms": {
      "ko": "출산 후 뼈가 시리고 온몸이 아픔, 앉거나 걷기 힘들고 무 릎/골반/손목 관절 시림.",
      "en": "Clinical symptoms and discomfort associated with Postpartum Pain Syndrome / Sacrococcygeal Pain. Characterized by localized or radiating aching, tightness, and movement-induced pain."
    },
    "pathophysiology": {
      "ko": "분만 과정의 과도한 근육 긴장 및 호르몬 변화로 전사각근 , 대둔근, 반막양근 등에 통증유발점이 형성되어 말초 혈 액순환 저하 및 감각신경 포착 유발.",
      "en": "Neuro-myofascial pathophysiological mechanism involving Postpartum Pain Syndrome / Sacrococcygeal Pain. Peripheral nerve branches become entrapped and hyper-excited due to sustained muscle hypertonicity and tendon traction."
    },
    "targetTissues": {
      "ko": "대둔근(Gluteus maximus), 전사각근(Anterior scalene), 반막양근, 최장근.",
      "en": "Gluteus Maximus, Sacrotuberous Ligament, Pelvic Floor, Psoas / Scalenes"
    },
    "palpation": {
      "ko": "꼬리뼈 옆 대둔근 압통점, 목 전사각근 하단, 무릎 뒤 반막 양근 기시부.",
      "en": "Palpable focal trigger points and deep fascial tenderness identified along Right/Left gluteus maximus origin along sacral margin and Anterior scalene & psoas postpartum associated myofascial tension points."
    },
    "clinicalCase": {
      "ko": "출산 후 전신 관절 시림과 꼬리뼈 통증으로 정상 착석과 보행이 어렵던 산후풍 복합 증후군 사례. 골반 뒤쪽 대둔근 기시부 및 전사각근/대요근 긴장점에 NovaCell Therapy를 복합 적용하여 골반 장력을 이완시킴으로써 착석 통증 소실 및 전신 시림 개선.",
      "en": "Postpartum pain syndrome characterized by severe coccygeal ache and generalized joint chills preventing comfortable sitting. NovaCell Therapy targeted to the sacrococcygeal gluteal origin and myofascial pelvic flexor points relieved pelvic floor stress, allowing comfortable sitting."
    },
    "diagram": "images/diagrams/diagram_43.png",
    "targets": [
      {
        "name": {
          "ko": "치료 타깃 1",
          "en": "Treatment Target 1"
        },
        "desc": {
          "ko": "꼬리뼈 옆 대둔근 압통점, 목 전사각근 하단, 무릎 뒤 반막 양근 기시부.",
          "en": "Right/Left gluteus maximus origin along sacral margin"
        }
      },
      {
        "name": {
          "ko": "치료 타깃 2",
          "en": "Treatment Target 2"
        },
        "desc": {
          "ko": "대둔근(Gluteus maximus), 전사각근(Anterior scalene), 반막양근, 최장근.",
          "en": "Anterior scalene & psoas postpartum associated myofascial tension points"
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
    "searchKeywords": "산후풍 (postpartum pain syndrome) postpartum pain syndrome / sacrococcygeal pain 출산 후 뼈가 시리고 온몸이 아픔, 앉거나 걷기 힘들고 무 릎/골반/손목 관절 시림. 자율신경계(snep) 및 전신/특수 질환 autonomic & systemic disorders"
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
      "en": "Nerve Entrapment & Tendon Traction"
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
      "ko": "10세 이하 소아의 갑작스러운 고관절/서혜부 통증, 다리 를 절거나 보행 거부.",
      "en": "Clinical symptoms and discomfort associated with Pediatric Transient Synovitis of the Hip. Characterized by localized or radiating aching, tightness, and movement-induced pain."
    },
    "pathophysiology": {
      "ko": "소아 장요근(Iliopsoas)의 병적 과긴장 및 단축으로 대퇴 신경 가지 압박 및 고관절 자극 유발.",
      "en": "Neuro-myofascial pathophysiological mechanism involving Pediatric Transient Synovitis of the Hip. Peripheral nerve branches become entrapped and hyper-excited due to sustained muscle hypertonicity and tendon traction."
    },
    "targetTissues": {
      "ko": "장골근(Iliacus) 및 대요근.",
      "en": "Iliacus, Psoas Major, Femoral Nerve, Hip Joint Capsule"
    },
    "palpation": {
      "ko": "안고 들어온 환아의 좌측 장골근 부위 압통점.",
      "en": "Palpable focal trigger points and deep fascial tenderness identified along Iliacus muscle belly in inner iliac fossa and Psoas major tendon anterior to hip capsule."
    },
    "clinicalCase": {
      "ko": "고관절 통증으로 체중 부하가 불가능하여 다리를 디디지 못하던 일과성 고관절 활액막염 사례. 내측 장골근 및 대요근 힘줄 부착부에 부드러운 NovaCell Therapy를 집중 조율하여 관절낭 내 압박을 해소하고 당일 즉각적인 독립 보행 회복.",
      "en": "Transient synovitis of the hip presenting with acute hip pain and complete inability to bear weight. Gentle, precision NovaCell Therapy applied to the inner iliacus belly and psoas tendon decompressed the anterior hip capsule, restoring independent weight-bearing gait."
    },
    "diagram": "images/diagrams/diagram_44.png",
    "targets": [
      {
        "name": {
          "ko": "치료 타깃 1",
          "en": "Treatment Target 1"
        },
        "desc": {
          "ko": "안고 들어온 환아의 좌측 장골근 부위 압통점.",
          "en": "Iliacus muscle belly in inner iliac fossa"
        }
      },
      {
        "name": {
          "ko": "치료 타깃 2",
          "en": "Treatment Target 2"
        },
        "desc": {
          "ko": "장골근(Iliacus) 및 대요근.",
          "en": "Psoas major tendon anterior to hip capsule"
        }
      }
    ],
    "anatomicalLabels": [
      "Iliacus",
      "Psoas Major",
      "Femoral Nerve",
      "Hip Joint Capsule"
    ],
    "rifeFreq": 528,
    "searchKeywords": "소아 일과성 고관절 활액막염 pediatric transient synovitis of the hip 10세 이하 소아의 갑작스러운 고관절/서혜부 통증, 다리 를 절거나 보행 거부. 자율신경계(snep) 및 전신/특수 질환 autonomic & systemic disorders"
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
      "en": "Nerve Entrapment & Tendon Traction"
    },
    "mechTags": [
      "nerve",
      "autonomic"
    ],
    "title": {
      "ko": "하지 대상포진 후 통증 (PHN)",
      "en": "Postherpetic Neuralgia of Lower Extremity (PHN)"
    },
    "symptoms": {
      "ko": "허벅지~종아리 신경 절 따라 콕콕 쑤시고 쏘는 듯한 극심 한 신경통 및 피부 이상감각.",
      "en": "Clinical symptoms and discomfort associated with Postherpetic Neuralgia of Lower Extremity (PHN). Characterized by localized or radiating aching, tightness, and movement-induced pain."
    },
    "pathophysiology": {
      "ko": "바이러스 감염 후 잔존하는 신경 염증 및 해당 레벨 척추 주위 심부근육 과긴장에 의한 누적 신경유착.",
      "en": "Neuro-myofascial pathophysiological mechanism involving Postherpetic Neuralgia of Lower Extremity (PHN). Peripheral nerve branches become entrapped and hyper-excited due to sustained muscle hypertonicity and tendon traction."
    },
    "targetTissues": {
      "ko": "해당 척추 분절(L4~S1) 척추주위 심부근육군.",
      "en": "L5-S1 Multifidus, Sciatic Nerve Roots, Lumbosacral Trunk, S1 Dorsal Ramus"
    },
    "palpation": {
      "ko": "L5/S1 극돌기 양옆 척추주위 심부근육 깊은 압통점.",
      "en": "Palpable focal trigger points and deep fascial tenderness identified along L5-S1 level deep multifidus & dorsal ramus emergence and Peripheral affected dermatome trigger locus."
    },
    "clinicalCase": {
      "ko": "대상포진 치유 후에도 하지 신경 분절을 따라 콕콕 쑤시고 쏘는 듯한 통증이 지속되던 대상포진 후 신경통(PHN) 사례. L5-S1 분절 심부 다열근 및 척수신경 후지에 NovaCell Therapy를 체계적으로 적용하여 신경근막 흥분을 진정시키고 난치성 신경통 80% 이상 완화.",
      "en": "Postherpetic neuralgia (PHN) of the lower limb with persistent lancinating and burning pain along the lumbosacral dermatome. Systematic NovaCell Therapy applied to the L5-S1 deep multifidus nerve roots desensitized hyperactive neural pathways, reducing refractory pain by over 80%."
    },
    "diagram": "images/diagrams/diagram_45.png",
    "targets": [
      {
        "name": {
          "ko": "치료 타깃 1",
          "en": "Treatment Target 1"
        },
        "desc": {
          "ko": "L5/S1 극돌기 양옆 척추주위 심부근육 깊은 압통점.",
          "en": "L5-S1 level deep multifidus & dorsal ramus emergence"
        }
      },
      {
        "name": {
          "ko": "치료 타깃 2",
          "en": "Treatment Target 2"
        },
        "desc": {
          "ko": "해당 척추 분절(L4~S1) 척추주위 심부근육군.",
          "en": "Peripheral affected dermatome trigger locus"
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
    "searchKeywords": "하지 대상포진 후 통증 (phn) postherpetic neuralgia of lower extremity (phn) 허벅지~종아리 신경 절 따라 콕콕 쑤시고 쏘는 듯한 극심 한 신경통 및 피부 이상감각. 자율신경계(snep) 및 전신/특수 질환 autonomic & systemic disorders"
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
      "en": "Nerve Entrapment & Tendon Traction"
    },
    "mechTags": [
      "nerve",
      "tendon",
      "autonomic"
    ],
    "title": {
      "ko": "봉와직염 오진 삼출성 부종 및 마목감",
      "en": "Pseudo-Cellulitis Edema & Leg Numbness (Autonomic)"
    },
    "symptoms": {
      "ko": "하지/발목 부위 붉은 발적, 부종, 열감 및 먹먹한 마목감, 봉와직염 오진 잦음.",
      "en": "Clinical symptoms and discomfort associated with Pseudo-Cellulitis Edema & Leg Numbness (Autonomic). Characterized by localized or radiating aching, tightness, and movement-induced pain."
    },
    "pathophysiology": {
      "ko": "요추부 척추주위 심부근육 과긴장에 의한 교감신경 혈관 운동/정맥류 순환 장애 및 삼출물 저류.",
      "en": "Neuro-myofascial pathophysiological mechanism involving Pseudo-Cellulitis Edema & Leg Numbness (Autonomic). Peripheral nerve branches become entrapped and hyper-excited due to sustained muscle hypertonicity and tendon traction."
    },
    "targetTissues": {
      "ko": "L2-L5 척추주위 심부근육군(Multifidus), 가자미근.",
      "en": "Lumbar Sympathetic Chain, L2-L4 Multifidus, Saphenous & Peroneal Nerves, Popliteal Lymphatics"
    },
    "palpation": {
      "ko": "L2-L5 극돌기 외측 다열근 심부 및 종아리 가자미근 압통 점.",
      "en": "Palpable focal trigger points and deep fascial tenderness identified along L2-L4 level lumbar multifidus autonomic regulation zone and Distal gastrocnemius/soleus drainage points."
    },
    "clinicalCase": {
      "ko": "하지 부종과 열감, 먹먹한 마목감으로 봉와직염으로 오진되어 장기 치료를 받았으나 호전이 없던 자율신경성 혈류 장애 사례. 요추부 L2~L4 다열근 자율신경 오작동 부위에 NovaCell Therapy를 적용하여 신경성 부종과 마목감 완치 및 다리 가벼움 회복.",
      "en": "Pseudo-cellulitis presenting with persistent lower leg edema, erythema, and deep numbness unresponsive to conventional antibiotics. NovaCell Therapy targeted to the L2-L4 lumbar multifidus sympathetic vasomotor locus resolved autonomic edema and numbness, completely restoring light, healthy legs."
    },
    "diagram": "images/diagrams/diagram_46.png",
    "targets": [
      {
        "name": {
          "ko": "치료 타깃 1",
          "en": "Treatment Target 1"
        },
        "desc": {
          "ko": "L2-L5 극돌기 외측 다열근 심부 및 종아리 가자미근 압통 점.",
          "en": "L2-L4 level lumbar multifidus autonomic regulation zone"
        }
      },
      {
        "name": {
          "ko": "치료 타깃 2",
          "en": "Treatment Target 2"
        },
        "desc": {
          "ko": "L2-L5 척추주위 심부근육군(Multifidus), 가자미근.",
          "en": "Distal gastrocnemius/soleus drainage points"
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
    "searchKeywords": "봉와직염 오진 삼출성 부종 및 마목감 pseudo-cellulitis edema & leg numbness (autonomic) 하지/발목 부위 붉은 발적, 부종, 열감 및 먹먹한 마목감, 봉와직염 오진 잦음. 자율신경계(snep) 및 전신/특수 질환 autonomic & systemic disorders"
  }
];
