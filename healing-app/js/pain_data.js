/**
 * NovaCell Pain Clinic APP - Master Condition Database (46 Conditions)
 * Standardized, 100% Anonymized Cases, Zero Injections/Drugs, NovaCell Therapy Compliant
 * Bilingual Support (KO/EN)
 */
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
    "name_en": "Autonomic SNEP & Systemic / Special Conditions",
    "icon": "fa-dna",
    "color": "#8b5cf6"
  }
};

window.PAIN_CONDITIONS = [
    {
        "id":  1,
        "catId":  "head_neck",
        "catNum":  1,
        "category":  {
                         "ko":  "두경부 및 안면 질환",
                         "en":  "Head, Neck \u0026 Facial Disorders"
                     },
        "mechanism":  {
                          "ko":  "신경유착 / 자율신경 오작동",
                          "en":  "[NEP / SNEP] Nerve Entrapment \u0026 Autonomic Response"
                      },
        "mechTags":  [
                         "nerve",
                         "autonomic"
                     ],
        "title":  {
                      "ko":  "두피형 삼차신경통 / 두피 감각신경통",
                      "en":  "Scalp Trigeminal Neuralgia / Scalp Sensory Neuralgia"
                  },
        "symptoms":  {
                         "ko":  "전두부, 두정부, 측두부 두피 전체가 톡톡 쏘거나 찌릿찌릿함. 머리카락을 살짝만 건드려도 과민한 자극감 유발.",
                         "en":  "Shooting, stinging, or tingling sensation across the frontal, parietal, and temporal scalp. Hypersensitivity to light touch (even touching hair)."
                     },
        "pathophysiology":  {
                                "ko":  "삼차신경 말초 가지(V1, V2, V3)가 두반극근(SsC)이나 두판상근(SC)의 과 긴장에 의해 C2, C3 레벨에서 신경이 유착되거나 신경 오작동에 의해 과흥 분됨.",
                                "en":  "Peripheral branches of trigeminal nerve (V1, V2, V3) are entrapped at C2-C3 level due to hypertonicity of semispinalis capitis (SsC) or splenius capitis (SC), or hyper-excited via SNEP."
                            },
        "targetTissues":  {
                              "ko":  "두반극근(Semispinalis capitis, SsC), 두판상근(Splenius capitis, SC), C2/C3 척추주위 심부근육군.",
                              "en":  "Semispinalis capitis (SsC), Splenius capitis (SC), C2/C3 deep paraspinal muscle group."
                          },
        "palpation":  {
                          "ko":  "C2, C3 레벨 TS 및 inferior nuchal line 근처 두반극근 근복의 뚜렷한 압 통점.",
                          "en":  "Distinct tenderness at C2/C3 level TS and SsC muscle belly near inferior nuchal line."
                      },
        "clinicalCase":  {
                             "ko":  "수일 전부터 발생한 뒤통수에서 정수리 두피를 따라 방사되는 찌릿한 두통 및 머리카락 접촉 시 과민한 통증 사례. C2, C3 척추주위 심부근 및 두반극근 압통 부위에 NovaCell Therapy(노바셀 생체 전압 및 타깃 공명 치료)를 적용하여 신경 유착을 해소한 결과, 시술 30분 만에 두피 통증 80% 이상 소실 및 자극 과민성 정상화.",
                             "en":  "44yo female with headache radiating upward along posterior head and scalp for 3 days. 80% pain relief within 30 minutes following C2/C3 TS NEP treatment with NovaCell probe."
                         },
        "diagram":  "images/diagrams/diagram_01.png",
        "targets":  [
                        {
                            "name":  {
                                         "ko":  "치료 타깃 1",
                                         "en":  "Target 1"
                                     },
                            "desc":  {
                                         "ko":  "C2, C3 레벨 TS 및 inferior nuchal line 근처 두반극근 근복의 뚜렷한 압 통점.",
                                         "en":  "Distinct tenderness at C2/C3 level TS and SsC muscle belly near inferior nuchal line."
                                     }
                        },
                        {
                            "name":  {
                                         "ko":  "치료 타깃 2",
                                         "en":  "Target 2"
                                     },
                            "desc":  {
                                         "ko":  "두반극근(Semispinalis capitis, SsC), 두판상근(Splenius capitis, SC), C2/C3 척추주위 심부근육군.",
                                         "en":  "Semispinalis capitis (SsC), Splenius capitis (SC), C2/C3 deep paraspinal muscle group."
                                     }
                        }
                    ],
        "anatomicalLabels":  [
                                 "Semispinalis Capitis",
                                 "Splenius Capitis",
                                 "C2-C3 Transversospinales",
                                 "Inferior Nuchal Line",
                                 "Trigeminal \u0026 Greater Occipital Nerves"
                             ],
        "rifeFreq":  727,
        "searchKeywords":  "두피형 삼차신경통 / 두피 감각신경통 Scalp Trigeminal Neuralgia / Scalp Sensory Neuralgia 전두부, 두정부, 측두부 두피 전체가 톡톡 쏘거나 찌릿찌릿함. 머리카락을 살짝만 건드려도 과민한 자극감 유발. Shooting, stinging, or tingling sensation across the frontal, parietal, and temporal scalp. Hypersensitivity to light touch (even touching hair). 두경부 및 안면 질환 Head, Neck \u0026 Facial Disorders"
    },
    {
        "id":  2,
        "catId":  "head_neck",
        "catNum":  1,
        "category":  {
                         "ko":  "두경부 및 안면 질환",
                         "en":  "Head, Neck \u0026 Facial Disorders"
                     },
        "mechanism":  {
                          "ko":  "신경유착",
                          "en":  "[NEP] Nerve Entrapment"
                      },
        "mechTags":  [
                         "nerve"
                     ],
        "title":  {
                      "ko":  "소두후신경 유착증",
                      "en":  "Lesser Occipital Nerve (LON) Entrapment"
                  },
        "symptoms":  {
                         "ko":  "귀 뒤쪽, 목 전외측, 두피 옆면이 바늘로 콕콕 쑤시듯 아프고 피부 타진 시 극심한 자각통 발생.",
                         "en":  "Stabbing, needle-like pain behind the ear, anterolateral neck, and lateral scalp, with severe tactile dysesthesia upon tapping."
                     },
        "pathophysiology":  {
                                "ko":  "경신경총(superficial cervical plexus) 분지인 소후두신경(LON)이 흉쇄유돌근(SCM) 중간 유발점이나 상부경추(C2, C3) 추간공/심부근육에 의해 유착됨.",
                                "en":  "Lesser occipital nerve (LON), a branch of superficial cervical plexus, is entrapped by trigger points in mid-SCM or C2/C3 intervertebral foramina / deep paraspinal muscles."
                            },
        "targetTissues":  {
                              "ko":  "흉쇄유돌근(SCM) 중간 부위, C2/C3 추간공 및 척추주위 심부근육.",
                              "en":  "Middle portion of sternocleidomastoid (SCM), C2/C3 intervertebral foramina, and deep paraspinal muscles."
                          },
        "palpation":  {
                          "ko":  "흉쇄유돌근(SCM) 후연 중간 지점(경신경총 4개 감각가지 분지점)을 집어 올렸을 때(pinch \u0026 roll) 뚜렷한 압통점.",
                          "en":  "Distinct tenderness elicited by pinching and rolling (Pinch \u0026 Roll) posterior border of mid-SCM (branching point of 4 sensory branches of superficial cervical plexus)."
                      },
        "clinicalCase":  {
                             "ko":  "귀 뒤쪽과 후두부 외측의 바늘로 찌르는 듯한 박동성 신경통으로 수면 장애를 겪던 사례. 흉쇄유돌근(SCM) 후연 신경 유착 지점 및 C2, C3 분절에 NovaCell Therapy를 적용하여 신경 압박을 이완시켰으며, 시술 당일 통증 소실 및 편안한 숙면 회복.",
                             "en":  "73yo female unable to sleep for 2 weeks due to stabbing pain behind left ear. Pain resolved and restful sleep restored after left mid-SCM NEP and C2/C3 TS NovaCell treatment."
                         },
        "diagram":  "images/diagrams/diagram_02.png",
        "targets":  [
                        {
                            "name":  {
                                         "ko":  "치료 타깃 1",
                                         "en":  "Target 1"
                                     },
                            "desc":  {
                                         "ko":  "흉쇄유돌근(SCM) 후연 중간 지점(경신경총 4개 감각가지 분지점)을 집어 올렸을 때(pinch \u0026 roll) 뚜렷한 압통점.",
                                         "en":  "Pinch \u0026 Roll tender point along posterior border of mid-SCM (Erb\u0027s point)."
                                     }
                        },
                        {
                            "name":  {
                                         "ko":  "치료 타깃 2",
                                         "en":  "Target 2"
                                     },
                            "desc":  {
                                         "ko":  "흉쇄유돌근(SCM) 중간 부위, C2/C3 추간공 및 척추주위 심부근육.",
                                         "en":  "Middle portion of SCM, C2/C3 intervertebral foramina \u0026 deep paraspinals."
                                     }
                        }
                    ],
        "anatomicalLabels":  [
                                 "Lesser Occipital Nerve",
                                 "Sternocleidomastoid (SCM)",
                                 "Splenius Capitis",
                                 "C2-C3 Cervical Root"
                             ],
        "rifeFreq":  787,
        "searchKeywords":  "소두후신경 유착증 Lesser Occipital Nerve (LON) Entrapment 귀 뒤쪽, 목 전외측, 두피 옆면이 바늘로 콕콕 쑤시듯 아프고 피부 타진 시 극심한 자각통 발생. Stabbing, needle-like pain behind the ear, anterolateral neck, and lateral scalp, with severe tactile dysesthesia upon tapping. 두경부 및 안면 질환 Head, Neck \u0026 Facial Disorders"
    },
    {
        "id":  3,
        "catId":  "head_neck",
        "catNum":  1,
        "category":  {
                         "ko":  "두경부 및 안면 질환",
                         "en":  "Head, Neck \u0026 Facial Disorders"
                     },
        "mechanism":  {
                          "ko":  "신경유착",
                          "en":  "[TTP / NEP] Tendon Traction \u0026 Nerve Entrapment"
                      },
        "mechTags":  [
                         "nerve"
                     ],
        "title":  {
                      "ko":  "측두근 신경유착 / 측두부 감각 신경통",
                      "en":  "Temporalis TTP / Temporal Sensory Neuralgia"
                  },
        "symptoms":  {
                         "ko":  "관자놀이(temple) 부위가 주기적으로 콕콕 쑤시고 찌릿하거나, 머리를 띠로 두른 듯한 강한 압박감.",
                         "en":  "Periodic stabbing or tingling pain in temple, or heavy band-like compressive sensation around the head."
                     },
        "pathophysiology":  {
                                "ko":  "Zygomaticotemporal n.가 측두근 근막을 뚫고 나오는 지점에서 포착되 거나, 외익상근에 의해 심측두신경(deep temporal n.)이 포착되어 측두 근 허혈/골막 자극(신경유착/견인통) 발생.",
                                "en":  "Entrapment of zygomaticotemporal nerve as it pierces temporalis fascia, or entrapment of deep temporal nerve by lateral pterygoid, causing temporalis ischemia/periosteal traction (TTP/NEP)."
                            },
        "targetTissues":  {
                              "ko":  "측두근(Temporalis) 기시부 골막, 외익상근(Lateral pterygoid, superior head).",
                              "en":  "Temporalis muscle origin periosteum, Lateral pterygoid muscle (superior head)."
                          },
        "palpation":  {
                          "ko":  "관자놀이 부근 측두근 근복 압통점 및 외익상근 부위.",
                          "en":  "Temporalis muscle belly tender point near temple and lateral pterygoid region."
                      },
        "clinicalCase":  {
                             "ko":  "관자놀이 부위가 날카롭게 콕콕 쑤시고 전기가 통하듯 뻗치는 편두통 양상의 감각신경통 사례. 관골측두신경 출구부 및 측두근 심부 긴장점에 NovaCell Therapy를 집중 조율한 결과, 시술 직후 통증 지수(VAS)가 8에서 0으로 극적으로 개선되며 완전 회복.",
                             "en":  "59yo female with sharp, electric shock-like stabbing temple pain for 2 days. Complete resolution (VAS 8??) following NovaCell treatment at zygomaticotemporal nerve exit point in temporalis."
                         },
        "diagram":  "images/diagrams/diagram_03.png",
        "targets":  [
                        {
                            "name":  {
                                         "ko":  "치료 타깃 1",
                                         "en":  "Target 1"
                                     },
                            "desc":  {
                                         "ko":  "관자놀이 부근 측두근 근복 압통점 및 외익상근 부위.",
                                         "en":  "Temporalis muscle belly tender point near temple."
                                     }
                        },
                        {
                            "name":  {
                                         "ko":  "치료 타깃 2",
                                         "en":  "Target 2"
                                     },
                            "desc":  {
                                         "ko":  "측두근(Temporalis) 기시부 골막, 외익상근(Lateral pterygoid, superior head).",
                                         "en":  "Temporalis muscle origin periosteum and lateral pterygoid region."
                                     }
                        }
                    ],
        "anatomicalLabels":  [
                                 "Zygomaticotemporal Nerve",
                                 "Temporalis Muscle",
                                 "Deep Temporal Nerves",
                                 "Zygomatic Arch"
                             ],
        "rifeFreq":  528,
        "searchKeywords":  "측두근 신경유착 / 측두부 감각 신경통 Temporalis TTP / Temporal Sensory Neuralgia 관자놀이(temple) 부위가 주기적으로 콕콕 쑤시고 찌릿하거나, 머리를 띠로 두른 듯한 강한 압박감. Periodic stabbing or tingling pain in temple, or heavy band-like compressive sensation around the head. 두경부 및 안면 질환 Head, Neck \u0026 Facial Disorders"
    },
    {
        "id":  4,
        "catId":  "head_neck",
        "catNum":  1,
        "category":  {
                         "ko":  "두경부 및 안면 질환",
                         "en":  "Head, Neck \u0026 Facial Disorders"
                     },
        "mechanism":  {
                          "ko":  "신경유착",
                          "en":  "[NEP] Nerve Entrapment"
                      },
        "mechTags":  [
                         "nerve"
                     ],
        "title":  {
                      "ko":  "전두근 신경유착 / 전두부 신경통",
                      "en":  "Frontalis NEP / Frontal Neuralgia"
                  },
        "symptoms":  {
                         "ko":  "우측 또는 좌측 앞이마 겉살이 찌릿찌릿하게 아프고, 가볍게 톡톡 두드리면 이마 표면으로 찌릿함이 확산됨.",
                         "en":  "Tingling pain on superficial scalp/skin of right or left forehead; tapping lightly spreads tingling sensation across forehead."
                     },
        "pathophysiology":  {
                                "ko":  "삼차신경 V1 가지인 supraorbital n.가 전두근(frontalis) 및 눈눈썹근 근 막을 뚫고 나올 때 전두근 과긴장으로 유착됨.",
                                "en":  "Entrapment of supraorbital nerve (trigeminal V1 branch) due to hypertonicity of frontalis and corrugator supercilii fascia as it exits supraorbital canal/fascia."
                            },
        "targetTissues":  {
                              "ko":  "전두근(Frontalis), 안륜근/추미근 영역.",
                              "en":  "Frontalis muscle, Orbicularis oculi / Corrugator supercilii region."
                          },
        "palpation":  {
                          "ko":  "앞이마 외측 및 안화상공(supraorbital foramen) 상방 전두근 근복의 가 장 심한 압통점.",
                          "en":  "Maximum tenderness in lateral frontalis muscle belly above supraorbital foramen."
                      },
        "clinicalCase":  {
                             "ko":  "신체 활동 후 전두부 이마 표면에 발생한 찌릿찌릿한 피부 감각 과민과 신경통 사례. 안와상신경 절흔 및 전두근 최대 압통 영역에 NovaCell Therapy를 가동하여 신경근막 긴장을 정상화하였으며, 15분 내 통증 90% 이상 감소 및 편안함 회복.",
                             "en":  "59yo female with tingling forehead skin pain after hiking. 90% pain reduction within 10 minutes following NovaCell conduction at most tender frontalis point."
                         },
        "diagram":  "images/diagrams/diagram_04.png",
        "targets":  [
                        {
                            "name":  {
                                         "ko":  "치료 타깃 1",
                                         "en":  "Target 1"
                                     },
                            "desc":  {
                                         "ko":  "앞이마 외측 및 안화상공(supraorbital foramen) 상방 전두근 근복의 가 장 심한 압통점.",
                                         "en":  "Maximum tenderness in lateral frontalis muscle belly above supraorbital foramen."
                                     }
                        },
                        {
                            "name":  {
                                         "ko":  "치료 타깃 2",
                                         "en":  "Target 2"
                                     },
                            "desc":  {
                                         "ko":  "전두근(Frontalis), 안륜근/추미근 영역.",
                                         "en":  "Orbicularis oculi \u0026 corrugator supercilii fascial exit points."
                                     }
                        }
                    ],
        "anatomicalLabels":  [
                                 "Supraorbital Nerve",
                                 "Supratrochlear Nerve",
                                 "Frontalis Muscle",
                                 "Galea Aponeurotica"
                             ],
        "rifeFreq":  727,
        "searchKeywords":  "전두근 신경유착 / 전두부 신경통 Frontalis NEP / Frontal Neuralgia 우측 또는 좌측 앞이마 겉살이 찌릿찌릿하게 아프고, 가볍게 톡톡 두드리면 이마 표면으로 찌릿함이 확산됨. Tingling pain on superficial scalp/skin of right or left forehead; tapping lightly spreads tingling sensation across forehead. 두경부 및 안면 질환 Head, Neck \u0026 Facial Disorders"
    },
    {
        "id":  5,
        "catId":  "head_neck",
        "catNum":  1,
        "category":  {
                         "ko":  "두경부 및 안면 질환",
                         "en":  "Head, Neck \u0026 Facial Disorders"
                     },
        "mechanism":  {
                          "ko":  "자율신경 오작동 / 힘줄견인",
                          "en":  "[SNEP / TTP] Autonomic Response \u0026 Tendon Traction"
                      },
        "mechTags":  [
                         "nerve",
                         "tendon",
                         "autonomic"
                     ],
        "title":  {
                      "ko":  "긴장성 두통 / 군집성 두통",
                      "en":  "Tension Headache / Cluster Headache"
                  },
        "symptoms":  {
                         "ko":  "머리에 꽉 죄는 헬멧이나 수영모를 쓴 듯 묵직하고 조이는 통증, 안구 통증 동반.",
                         "en":  "Heavy, tightening pain as if wearing a tight helmet or swim cap, often accompanied by retro-orbital eye pain."
                     },
        "pathophysiology":  {
                                "ko":  "교체신경계적 Autonomic Nerve에 의해 두개외 근육(epicranius)의 허혈이 가중되고, 두판상근(SC) 및 후두근/측두근의 TTP 가 복합 작용함.",
                                "en":  "Ischemia of epicranial muscles aggravated by sympathetic SNEP, combined with TTPs in splenius capitis (SC), occipitalis, and temporalis."
                            },
        "targetTissues":  {
                              "ko":  "두판상근(Splenius capitis, SC), 후두근(Occipitalis), 측두근, T1~T4 상부흉추 다열근.",
                              "en":  "Splenius capitis (SC), Occipitalis, Temporalis, T1?밫4 upper thoracic multifidus."
                          },
        "palpation":  {
                          "ko":  "SC 근복, 후두골 부착부 occipitalis TTP, 상부흉추 TS/다 열근.",
                          "en":  "SC muscle belly, occipitalis TTP at occipital attachment, upper thoracic TS/multifidus."
                      },
        "clinicalCase":  {
                             "ko":  "안구 깊은 곳의 압박감과 후두부 전갈로 긁는 듯한 발작성 통증을 동반한 군집성 및 만성 긴장성 두통 사례. 두판상근 상부 및 T2, T3 흉추 분절 교감신경 경로에 NovaCell Therapy를 체계적으로 적용하여 자율신경 오작동을 진정시키고 두통 발작 완치.",
                             "en":  "Patient with cluster headache featuring eye pain and severe scratching-like attacks in posterior head. Completely resolved following right SC and T2/T3 level TS SNEP NovaCell therapy."
                         },
        "diagram":  "images/diagrams/diagram_05.png",
        "targets":  [
                        {
                            "name":  {
                                         "ko":  "치료 타깃 1",
                                         "en":  "Target 1"
                                     },
                            "desc":  {
                                         "ko":  "SC 근복, 후두골 부착부 occipitalis TTP, 상부흉추 TS/다 열근.",
                                         "en":  "Splenius capitis muscle belly \u0026 occipitalis attachment TTP."
                                     }
                        },
                        {
                            "name":  {
                                         "ko":  "치료 타깃 2",
                                         "en":  "Target 2"
                                     },
                            "desc":  {
                                         "ko":  "두판상근(Splenius capitis, SC), 후두근(Occipitalis), 측두근, T1~T4 상부흉추 다열근.",
                                         "en":  "T1?밫4 upper thoracic transversospinales \u0026 multifidus group."
                                     }
                        }
                    ],
        "anatomicalLabels":  [
                                 "Splenius Capitis",
                                 "T2-T3 Transversospinales",
                                 "Sympathetic Trunk",
                                 "Greater Occipital Nerve"
                             ],
        "rifeFreq":  432,
        "searchKeywords":  "긴장성 두통 / 군집성 두통 Tension Headache / Cluster Headache 머리에 꽉 죄는 헬멧이나 수영모를 쓴 듯 묵직하고 조이는 통증, 안구 통증 동반. Heavy, tightening pain as if wearing a tight helmet or swim cap, often accompanied by retro-orbital eye pain. 두경부 및 안면 질환 Head, Neck \u0026 Facial Disorders"
    },
    {
        "id":  6,
        "catId":  "head_neck",
        "catNum":  1,
        "category":  {
                         "ko":  "두경부 및 안면 질환",
                         "en":  "Head, Neck \u0026 Facial Disorders"
                     },
        "mechanism":  {
                          "ko":  "자율신경 오작동 / 힘줄견인",
                          "en":  "[SNEP / NEP] Autonomic Response \u0026 Nerve Entrapment"
                      },
        "mechTags":  [
                         "nerve",
                         "tendon",
                         "autonomic"
                     ],
        "title":  {
                      "ko":  "자율신경성 인후통 및 두통 / 비인두염 양상",
                      "en":  "Autonomic Sore Throat \u0026 Headache / Nasopharyngitis Pattern"
                  },
        "symptoms":  {
                         "ko":  "침을 삼킬 때 찢어질 듯한 목 통증, 귀 속으로 뻗치는 찌릿한 통 증, 한쪽 두통 동반.",
                         "en":  "Tearing throat pain upon swallowing, radiating electric pain into inner ear, accompanied by unilateral headache."
                     },
        "pathophysiology":  {
                                "ko":  "SCM 상부 및 두판상근의 긴장으로 설인신경/미경신경 교감신경 가지가 자극(Autonomic Nerve)되어 비인두 연부조직에 허혈성 통증 유발.",
                                "en":  "Tension in upper SCM and splenius capitis stimulates sympathetic branches of glossopharyngeal and vagus nerves (SNEP), causing ischemic pain in nasopharyngeal soft tissues."
                            },
        "targetTissues":  {
                              "ko":  "흉쇄유돌근(SCM) 상부, 두판상근(Splenius capitis).",
                              "en":  "Upper sternocleidomastoid (SCM), Splenius capitis."
                          },
        "palpation":  {
                          "ko":  "유두돌기 하방 SCM 상부 근복 및 두판상근 상부 압통점.",
                          "en":  "Tenderness in upper SCM muscle belly below mastoid process and upper splenius capitis."
                      },
        "clinicalCase":  {
                             "ko":  "연하 시 목 안쪽이 찢어지는 듯한 통증과 외이도 깊은 통증을 동반한 자율신경성 비인두 통증 사례. 흉쇄유돌근 상부 및 두판상근 부착부에 NovaCell Therapy를 적용하여 신경 반사성 과흥분을 차단하고 인후부 통증과 연하 곤란 즉시 소실.",
                             "en":  "Patient presenting with severe tearing throat pain during swallowing and inner ear pain. Throat pain resolved after treating upper SCM and splenius capitis with NovaCell frequency conduction."
                         },
        "diagram":  "images/diagrams/diagram_06.png",
        "targets":  [
                        {
                            "name":  {
                                         "ko":  "치료 타깃 1",
                                         "en":  "Target 1"
                                     },
                            "desc":  {
                                         "ko":  "유두돌기 하방 SCM 상부 근복 및 두판상근 상부 압통점.",
                                         "en":  "Tenderness in upper SCM muscle belly below mastoid process."
                                     }
                        },
                        {
                            "name":  {
                                         "ko":  "치료 타깃 2",
                                         "en":  "Target 2"
                                     },
                            "desc":  {
                                         "ko":  "흉쇄유돌근(SCM) 상부, 두판상근(Splenius capitis).",
                                         "en":  "Upper splenius capitis and paraspinal cervical sympathetic zone."
                                     }
                        }
                    ],
        "anatomicalLabels":  [
                                 "Superior SCM",
                                 "Splenius Capitis",
                                 "Glossopharyngeal Nerve Branch",
                                 "Carotid Sheath"
                             ],
        "rifeFreq":  880,
        "searchKeywords":  "자율신경성 인후통 및 두통 / 비인두염 양상 Autonomic Sore Throat \u0026 Headache / Nasopharyngitis Pattern 침을 삼킬 때 찢어질 듯한 목 통증, 귀 속으로 뻗치는 찌릿한 통 증, 한쪽 두통 동반. Tearing throat pain upon swallowing, radiating electric pain into inner ear, accompanied by unilateral headache. 두경부 및 안면 질환 Head, Neck \u0026 Facial Disorders"
    },
    {
        "id":  7,
        "catId":  "head_neck",
        "catNum":  1,
        "category":  {
                         "ko":  "두경부 및 안면 질환",
                         "en":  "Head, Neck \u0026 Facial Disorders"
                     },
        "mechanism":  {
                          "ko":  "신경유착",
                          "en":  "[NEP] Nerve Entrapment"
                      },
        "mechTags":  [
                         "nerve"
                     ],
        "title":  {
                      "ko":  "경신경총 유착증",
                      "en":  "Superficial Cervical Plexus Entrapment"
                  },
        "symptoms":  {
                         "ko":  "목 전외측, 쇄골 상방, 귀 뒤쪽으로 번지는 넓은 이상감각 및 찌릿찌릿한 피부 통증.",
                         "en":  "Burning sensation, stabbing pain, and cutaneous dysesthesia on anterolateral neck, scalp, or upper ear surface."
                     },
        "pathophysiology":  {
                                "ko":  "Superficial cervical plexus 감각 가지들이 SCM 후연을 뚫고 나올 때 SCM 과긴장에 의해 유착됨.",
                                "en":  "Entrapment (NEP) of sensory branches of superficial cervical plexus due to SCM hypertonicity as they pierce posterior border of SCM."
                            },
        "targetTissues":  {
                              "ko":  "흉쇄유돌근(SCM) 중간 부위, C2-C4 척추주위 심부근육.",
                              "en":  "Branching point of 4 sensory branches of superficial cervical plexus (mid-to-upper posterior border of SCM)."
                          },
        "palpation":  {
                          "ko":  "SCM 후연 중간 높이(Erb\u0027s point) 꼬집어 올렸을 때 압통점.",
                          "en":  "Deep tenderness at posterior border of SCM at mid-neck height (Erb\u0027s point)."
                      },
        "clinicalCase":  {
                             "ko":  "경추 측면에서 쇄골 부위까지 피부가 화끈거리고 가벼운 옷깃 스침에도 과민한 통증을 호소한 경신경총 포착 사례. SCM 중앙부 Erb\u0027s point 신경 유착 부위에 NovaCell Therapy를 부드럽게 통전하여 감각신경 과흥분을 해소하고 작열통 완전 완화.",
                             "en":  "Patient with lateral neck burning and subauricular dysesthesia. Immediate pain relief following NovaCell therapy at mid-SCM cervical plexus branching point."
                         },
        "diagram":  "images/diagrams/diagram_07.png",
        "targets":  [
                        {
                            "name":  {
                                         "ko":  "치료 타깃 1",
                                         "en":  "Target 1"
                                     },
                            "desc":  {
                                         "ko":  "SCM 후연 중간 높이(Erb\u0027s point) 꼬집어 올렸을 때 압통점.",
                                         "en":  "Deep tenderness at posterior border of mid-SCM (Erb\u0027s point)."
                                     }
                        },
                        {
                            "name":  {
                                         "ko":  "치료 타깃 2",
                                         "en":  "Target 2"
                                     },
                            "desc":  {
                                         "ko":  "흉쇄유돌근(SCM) 중간 부위, C2-C4 척추주위 심부근육.",
                                         "en":  "Superficial cervical plexus sensory branches across anterolateral neck."
                                     }
                        }
                    ],
        "anatomicalLabels":  [
                                 "Erb\u0027s Point (Punctum Nervosum)",
                                 "Great Auricular Nerve",
                                 "Transverse Cervical Nerve",
                                 "Supraclavicular Nerves",
                                 "Middle Scalene"
                             ],
        "rifeFreq":  787,
        "searchKeywords":  "경신경총 유착증 Superficial Cervical Plexus Entrapment 목 전외측, 쇄골 상방, 귀 뒤쪽으로 번지는 넓은 이상감각 및 찌릿찌릿한 피부 통증. Burning sensation, stabbing pain, and cutaneous dysesthesia on anterolateral neck, scalp, or upper ear surface. 두경부 및 안면 질환 Head, Neck \u0026 Facial Disorders"
    },
    {
        "id":  8,
        "catId":  "head_neck",
        "catNum":  1,
        "category":  {
                         "ko":  "두경부 및 안면 질환",
                         "en":  "Head, Neck \u0026 Facial Disorders"
                     },
        "mechanism":  {
                          "ko":  "힘줄견인/ 신경유착",
                          "en":  "[TTP / NEP] Tendon Traction \u0026 Nerve Entrapment"
                      },
        "mechTags":  [
                         "nerve",
                         "tendon"
                     ],
        "title":  {
                      "ko":  "소아 근긴장성 사경 (Childhood Torticollis)",
                      "en":  "Pediatric Muscular Torticollis / Cervical Sprain"
                  },
        "symptoms":  {
                         "ko":  "목이 한쪽으로 기울어지고 반대쪽으로 회전하기 힘듦, 목 근육 뻐근함 및 동작 제한.",
                         "en":  "Sudden posterior neck pain, inability to rotate head, and lateral head tilt."
                     },
        "pathophysiology":  {
                                "ko":  "SCM 및 사각근, 승모근의 병적 수축으로 인한 기시/정지부 견인통/마찰통 및 경신경 유착 복합 작용.",
                                "en":  "Acute isotonic contraction of pediatric SCM and scalene muscles causing periosteal traction at attachments and nerve branch irritation."
                            },
        "targetTissues":  {
                              "ko":  "흉쇄유돌근(SCM), 사각근(Scalene), C2-C5 다열근.",
                              "en":  "Sternocleidomastoid (SCM) and Middle scalene."
                          },
        "palpation":  {
                          "ko":  "SCM 근복 단단한 결절 부위 및 C2-C5 극돌기 외측 압통점.",
                          "en":  "Tender points in SCM muscle belly and middle scalene."
                      },
        "clinicalCase":  {
                             "ko":  "목이 한쪽으로 기울어지고 반대편 회전 운동이 제한된 급성 근긴장성 사경 사례. 흉쇄유돌근과 사각근 근복에 미세전류 기반의 부드러운 NovaCell Therapy를 집중 적용하여 근육 경축을 완화하고 경추 회전 가동 범위를 즉시 정상 회복.",
                             "en":  "7yo child unable to turn head after waking. Immediate restoration of cervical range of motion following NovaCell application at SCM and middle scalene tender points."
                         },
        "diagram":  "images/diagrams/diagram_08.png",
        "targets":  [
                        {
                            "name":  {
                                         "ko":  "치료 타깃 1",
                                         "en":  "Target 1"
                                     },
                            "desc":  {
                                         "ko":  "SCM 근복 단단한 결절 부위 및 C2-C5 극돌기 외측 압통점.",
                                         "en":  "Focal hypertonic tender point in SCM muscle belly."
                                     }
                        },
                        {
                            "name":  {
                                         "ko":  "치료 타깃 2",
                                         "en":  "Target 2"
                                     },
                            "desc":  {
                                         "ko":  "흉쇄유돌근(SCM), 사각근(Scalene), C2-C5 다열근.",
                                         "en":  "Middle scalene muscle belly and cervical attachment."
                                     }
                        }
                    ],
        "anatomicalLabels":  [
                                 "Sternocleidomastoid (SCM)",
                                 "Anterior/Middle Scalene",
                                 "Accessory Nerve",
                                 "Clavicular Head"
                             ],
        "rifeFreq":  528,
        "searchKeywords":  "소아 근긴장성 사경 (Childhood Torticollis) Pediatric Muscular Torticollis / Cervical Sprain 목이 한쪽으로 기울어지고 반대쪽으로 회전하기 힘듦, 목 근육 뻐근함 및 동작 제한. Sudden posterior neck pain, inability to rotate head, and lateral head tilt. 두경부 및 안면 질환 Head, Neck \u0026 Facial Disorders"
    },
    {
        "id":  9,
        "catId":  "shoulder_arm",
        "catNum":  2,
        "category":  {
                         "ko":  "어깨, 상지 및 수부 질환",
                         "en":  "Shoulder, Upper Extremity \u0026 Hand"
                     },
        "mechanism":  {
                          "ko":  "신경유착",
                          "en":  "[NEP] Nerve Entrapment"
                      },
        "mechTags":  [
                         "nerve"
                     ],
        "title":  {
                      "ko":  "부신경 / 견갑배신경유착증",
                      "en":  "Accessory Nerve / Dorsal Scapular Nerve Entrapment"
                  },
        "symptoms":  {
                         "ko":  "뒷목의 뻐근한 허혈성 통증, 자다가 깰 정도의 뒷목 및 어깻죽지 짓 누르는 통증.",
                         "en":  "Dull ischemic pain in posterior neck, heavy crushing pain in neck and shoulder blade severe enough to awaken from sleep."
                     },
        "pathophysiology":  {
                                "ko":  "C5 척수신경 근위부(IVF) 및 중사각근 레벨에서 견갑배신경이 포착 되어 견갑거근/능형근에 긴장성 허혈 통증 유발.",
                                "en":  "Entrapment of dorsal scapular nerve at proximal C5 spinal nerve level (IVF) and middle scalene, causing tension ischemic pain in levator scapulae/rhomboids; spinal accessory nerve entrapment causes trapezius ischemia."
                            },
        "targetTissues":  {
                              "ko":  "C5 레벨 척추주위 심부근육군, 중사각근(Middle scalene), SCM.",
                              "en":  "C5 level deep paraspinal muscles, Middle scalene, SCM."
                          },
        "palpation":  {
                          "ko":  "C5 극돌기 주변 심부근육 압통점, 중사각근 C5 높이.",
                          "en":  "Tenderness in deep paraspinal muscles around C5 spinous process, middle scalene at C5 level."
                      },
        "clinicalCase":  {
                             "ko":  "뒷목에서 어깻죽지, 견갑골 내측연까지 짓누르고 결리는 만성 허혈성 통증 사례. C5 척추주위 심부근 및 중사각근 레벨의 견갑배신경 주행부에 NovaCell Therapy를 적용하여 포착된 신경을 이완시킴으로써 만성적인 뻐근함과 압박 통증 완전 소실.",
                             "en":  "Clustered pain in posterior neck, shoulder top, and interscapular region. Dull pain resolved after treating deep paraspinal muscles around C3 and C5 with NovaCell therapy."
                         },
        "diagram":  "images/diagrams/diagram_09.png",
        "targets":  [
                        {
                            "name":  {
                                         "ko":  "치료 타깃 1",
                                         "en":  "Target 1"
                                     },
                            "desc":  {
                                         "ko":  "C5 극돌기 주변 심부근육 압통점, 중사각근 C5 높이.",
                                         "en":  "Deep paraspinal muscles around C5 spinous process and IVF."
                                     }
                        },
                        {
                            "name":  {
                                         "ko":  "치료 타깃 2",
                                         "en":  "Target 2"
                                     },
                            "desc":  {
                                         "ko":  "C5 레벨 척추주위 심부근육군, 중사각근(Middle scalene), SCM.",
                                         "en":  "Middle scalene and levator scapulae attachment."
                                     }
                        }
                    ],
        "anatomicalLabels":  [
                                 "Dorsal Scapular Nerve",
                                 "Middle Scalene",
                                 "Levator Scapulae",
                                 "Rhomboid Muscles",
                                 "C5 Root"
                             ],
        "rifeFreq":  787,
        "searchKeywords":  "부신경 / 견갑배신경유착증 Accessory Nerve / Dorsal Scapular Nerve Entrapment 뒷목의 뻐근한 허혈성 통증, 자다가 깰 정도의 뒷목 및 어깻죽지 짓 누르는 통증. Dull ischemic pain in posterior neck, heavy crushing pain in neck and shoulder blade severe enough to awaken from sleep. 어깨, 상지 및 수부 질환 Shoulder, Upper Extremity \u0026 Hand"
    },
    {
        "id":  10,
        "catId":  "shoulder_arm",
        "catNum":  2,
        "category":  {
                         "ko":  "어깨, 상지 및 수부 질환",
                         "en":  "Shoulder, Upper Extremity \u0026 Hand"
                     },
        "mechanism":  {
                          "ko":  "힘줄견인 / 근막유착",
                          "en":  "[TTP / cNEP] Tendon Traction \u0026 Complex Nerve Entrapment"
                      },
        "mechTags":  [
                         "nerve",
                         "tendon"
                     ],
        "title":  {
                      "ko":  "견쇄관절 가성 관절통 및 견쇄 관절염",
                      "en":  "AC Joint Pseudo-arthralgia \u0026 AC Osteoarthritis"
                  },
        "symptoms":  {
                         "ko":  "어깨 견봉, 견쇄관절(AC joint), 쇄골 외측 1/3 부위의 동작 시 날카로운 통증 및 움직임 제한.",
                         "en":  "Sharp pain and movement restriction at acromion, acromioclavicular (AC) joint, and lateral 1/3 of clavicle during shoulder motion."
                     },
        "pathophysiology":  {
                                "ko":  "승모근(MT/UT) 및 삼각근의 등장성 수축으로 견쇄관절 기시/정지부 골 막에 견인력이 작용하고, 부신경/액와신경 과흥분이 복합 작용함.",
                                "en":  "Isotonic contraction of middle/upper trapezius (MT/UT) and deltoid exerts traction force (TTP) on AC joint attachment periosteum, combined with spinal accessory and axillary nerve hyperexcitation."
                            },
        "targetTissues":  {
                              "ko":  "중부승모근(MT), 상부승모근(UT), 소원근(Teres minor), SCM.",
                              "en":  "Middle trapezius (MT), Upper trapezius (UT), Teres minor, SCM."
                          },
        "palpation":  {
                          "ko":  "견갑골 가시(scapular spine) 상연, 견봉(acromion), 쇄골 외측 부착부, SCM 중간.",
                          "en":  "Superior margin of scapular spine, acromion, lateral clavicle attachment, mid-SCM."
                      },
        "clinicalCase":  {
                             "ko":  "견봉쇄골(AC) 관절 부위의 지속적인 압통과 팔 거상 시 상투적인 어깨 통증 사례. 승모근 중부 건 견인점 및 소원근 보상 유착 부위에 NovaCell Therapy를 복합 적용하여 관절 내 장력을 재정렬하고 능동적 어깨 거상 각도 통증 없이 회복.",
                             "en":  "60yo male with 4 months of shoulder top to AC joint pain. Pain relieved after MT, SCM, and teres minor targeted NovaCell treatment."
                         },
        "diagram":  "images/diagrams/diagram_10.png",
        "targets":  [
                        {
                            "name":  {
                                         "ko":  "치료 타깃 1",
                                         "en":  "Target 1"
                                     },
                            "desc":  {
                                         "ko":  "견갑골 가시(scapular spine) 상연, 견봉(acromion), 쇄골 외측 부착부, SCM 중간.",
                                         "en":  "Superior margin of scapular spine and lateral clavicle attachment."
                                     }
                        },
                        {
                            "name":  {
                                         "ko":  "치료 타깃 2",
                                         "en":  "Target 2"
                                     },
                            "desc":  {
                                         "ko":  "중부승모근(MT), 상부승모근(UT), 소원근(Teres minor), SCM.",
                                         "en":  "Acromion, teres minor, and mid-SCM cervical reflex points."
                                     }
                        }
                    ],
        "anatomicalLabels":  [
                                 "AC Joint",
                                 "Middle Trapezius",
                                 "Teres Minor",
                                 "SCM",
                                 "Suprascapular Nerve"
                             ],
        "rifeFreq":  880,
        "searchKeywords":  "견쇄관절 가성 관절통 및 견쇄 관절염 AC Joint Pseudo-arthralgia \u0026 AC Osteoarthritis 어깨 견봉, 견쇄관절(AC joint), 쇄골 외측 1/3 부위의 동작 시 날카로운 통증 및 움직임 제한. Sharp pain and movement restriction at acromion, acromioclavicular (AC) joint, and lateral 1/3 of clavicle during shoulder motion. 어깨, 상지 및 수부 질환 Shoulder, Upper Extremity \u0026 Hand"
    },
    {
        "id":  11,
        "catId":  "shoulder_arm",
        "catNum":  2,
        "category":  {
                         "ko":  "어깨, 상지 및 수부 질환",
                         "en":  "Shoulder, Upper Extremity \u0026 Hand"
                     },
        "mechanism":  {
                          "ko":  "신경유착 / 흉곽출구증후군",
                          "en":  "[NEP / TOS] Thoracic Outlet Syndrome \u0026 Nerve Entrapment"
                      },
        "mechTags":  [
                         "nerve"
                     ],
        "title":  {
                      "ko":  "늑쇄터널 증후군 / 전사각근 증후군",
                      "en":  "Costoclavicular Space Syndrome / Anterior Scalene Syndrome"
                  },
        "symptoms":  {
                         "ko":  "가슴 결림, 기침 시 가슴/등 통증, 팔 전체 및 손가락 저림, 조조강직, 상 완신경총 압박 증상.",
                         "en":  "Chest tightness, chest/back pain when coughing, numbness throughout arm and fingers, morning stiffness, brachial plexus compression symptoms."
                     },
        "pathophysiology":  {
                                "ko":  "전사각근과 쇄골하근의 과긴장/단축으로 늑쇄터널(쇄골과 1st rib 사이) 이 좁아지며 상완신경총 및 흉근신경(pectoral n.)이 유착됨.",
                                "en":  "Hypertonicity/shortening of anterior scalene and subclavius narrows costoclavicular space (between clavicle and 1st rib), entrapping brachial plexus and pectoral nerves."
                            },
        "targetTissues":  {
                              "ko":  "전사각근(Anterior scalene), 쇄골하근(Subclavius).",
                              "en":  "Anterior scalene, Subclavius."
                          },
        "palpation":  {
                          "ko":  "목 전외측 전사각근 근복 깊은 압통점, 쇄골 하방 쇄골하근 부위.",
                          "en":  "Deep tender point in anterior scalene belly at anterolateral neck, subclavius region below clavicle."
                      },
        "clinicalCase":  {
                             "ko":  "전흉부 압박감과 상지 전완부 저림으로 호흡까지 불편하던 늑쇄터널/전사각근 흉곽출구 압박 사례. 제1늑골 부착부 전사각근 및 흉근신경 주행부에 NovaCell Therapy를 적용하여 신경 혈관 다발 압박을 해소하고 가슴 통증과 팔 저림 즉각 호전.",
                             "en":  "52yo female with left chest pain making breathing uncomfortable. Overcame chest pain by releasing lateral/medial pectoral nerve hyperexcitation via anterior scalene NovaCell treatment."
                         },
        "diagram":  "images/diagrams/diagram_11.png",
        "targets":  [
                        {
                            "name":  {
                                         "ko":  "치료 타깃 1",
                                         "en":  "Target 1"
                                     },
                            "desc":  {
                                         "ko":  "목 전외측 전사각근 근복 깊은 압통점, 쇄골 하방 쇄골하근 부위.",
                                         "en":  "Deep tender point in anterior scalene belly at anterolateral neck."
                                     }
                        },
                        {
                            "name":  {
                                         "ko":  "치료 타깃 2",
                                         "en":  "Target 2"
                                     },
                            "desc":  {
                                         "ko":  "전사각근(Anterior scalene), 쇄골하근(Subclavius).",
                                         "en":  "Subclavius region below clavicle and costoclavicular space."
                                     }
                        }
                    ],
        "anatomicalLabels":  [
                                 "Anterior Scalene",
                                 "Brachial Plexus",
                                 "Subclavian Artery",
                                 "1st Rib",
                                 "Pectoral Nerves"
                             ],
        "rifeFreq":  727,
        "searchKeywords":  "늑쇄터널 증후군 / 전사각근 증후군 Costoclavicular Space Syndrome / Anterior Scalene Syndrome 가슴 결림, 기침 시 가슴/등 통증, 팔 전체 및 손가락 저림, 조조강직, 상 완신경총 압박 증상. Chest tightness, chest/back pain when coughing, numbness throughout arm and fingers, morning stiffness, brachial plexus compression symptoms. 어깨, 상지 및 수부 질환 Shoulder, Upper Extremity \u0026 Hand"
    },
    {
        "id":  12,
        "catId":  "shoulder_arm",
        "catNum":  2,
        "category":  {
                         "ko":  "어깨, 상지 및 수부 질환",
                         "en":  "Shoulder, Upper Extremity \u0026 Hand"
                     },
        "mechanism":  {
                          "ko":  "신경유착",
                          "en":  "[TTP] Tendon/Periosteal Traction Pain"
                      },
        "mechTags":  [
                         "nerve"
                     ],
        "title":  {
                      "ko":  "드퀘르뱅 증후군 (De Quervain\u0027s Disease)",
                      "en":  "De Quervain\u0027s Disease"
                  },
        "symptoms":  {
                         "ko":  "손목 요골 측(엄지 쪽) 및 1st metacarpal base 통증, Finkelstein 검사 양성, 엄지 움직임 시 통증.",
                         "en":  "Pain at radial side of wrist (thumb side) and 1st metacarpal base, positive Finkelstein test, pain upon thumb movement."
                     },
        "pathophysiology":  {
                                "ko":  "장무지외전근(APL)과 단무지신근(EPB)의 과사용으로 근복에 힘줄견인점이 형성되어 1st metacarpal base 및 1st proximal phalanx 골막에 염증성 견인 통증 유 발.",
                                "en":  "Overuse of abductor pollicis longus (APL) and extensor pollicis brevis (EPB) forms muscle belly TTPs, causing inflammatory traction pain on periosteum of 1st metacarpal base and 1st proximal phalanx."
                            },
        "targetTissues":  {
                              "ko":  "장무지외전근(APL), 단무지신근(EPB) 근복.",
                              "en":  "APL and EPB muscle bellies."
                          },
        "palpation":  {
                          "ko":  "손목 관절면 상방 3~4 FB(손가락 폭) 지점, 전완 외측 비스듬히 주행하는 APL/EPB 근복의 지그시 깊은 압통 점.",
                          "en":  "Firm deep tender point in obliquely running APL/EPB muscle belly on lateral forearm, 3?? finger breadths (FB) proximal to wrist joint line."
                      },
        "clinicalCase":  {
                             "ko":  "엄지손가락 움직임 및 손목 요골측 굴곡 시 칼로 베는 듯한 건초염 통증 사례. 손목 근위부 4횡지 높이의 장무지외전근(APL)과 단무지신근(EPB) 근복에 NovaCell Therapy를 집중 조율하여 건막 마찰을 해소하고 엄지 쥠 동작 정상화.",
                             "en":  "48yo masseuse with 6 months of radial wrist/thumb pain. Pain upon thumb/wrist motion resolved after NovaCell therapy on APL/EPB belly 4 FB above wrist."
                         },
        "diagram":  "images/diagrams/diagram_12.png",
        "targets":  [
                        {
                            "name":  {
                                         "ko":  "치료 타깃 1",
                                         "en":  "Target 1"
                                     },
                            "desc":  {
                                         "ko":  "손목 관절면 상방 3~4 FB(손가락 폭) 지점, 전완 외측 비스듬히 주행하는 APL/EPB 근복의 지그시 깊은 압통 점.",
                                         "en":  "Firm deep tender point in APL/EPB muscle bellies (3-4 FB above wrist)."
                                     }
                        },
                        {
                            "name":  {
                                         "ko":  "치료 타깃 2",
                                         "en":  "Target 2"
                                     },
                            "desc":  {
                                         "ko":  "장무지외전근(APL), 단무지신근(EPB) 근복.",
                                         "en":  "Radial styloid process and 1st metacarpal base periosteum."
                                     }
                        }
                    ],
        "anatomicalLabels":  [
                                 "Abductor Pollicis Longus (APL)",
                                 "Extensor Pollicis Brevis (EPB)",
                                 "Radial Styloid Process",
                                 "Radial Nerve"
                             ],
        "rifeFreq":  787,
        "searchKeywords":  "드퀘르뱅 증후군 (De Quervain\u0027s Disease) De Quervain\u0027s Disease 손목 요골 측(엄지 쪽) 및 1st metacarpal base 통증, Finkelstein 검사 양성, 엄지 움직임 시 통증. Pain at radial side of wrist (thumb side) and 1st metacarpal base, positive Finkelstein test, pain upon thumb movement. 어깨, 상지 및 수부 질환 Shoulder, Upper Extremity \u0026 Hand"
    },
    {
        "id":  13,
        "catId":  "shoulder_arm",
        "catNum":  2,
        "category":  {
                         "ko":  "어깨, 상지 및 수부 질환",
                         "en":  "Shoulder, Upper Extremity \u0026 Hand"
                     },
        "mechanism":  {
                          "ko":  "힘줄견인",
                          "en":  "[TTP] Tendon/Periosteal Traction Pain"
                      },
        "mechTags":  [
                         "tendon"
                     ],
        "title":  {
                      "ko":  "상완요골근 증후군",
                      "en":  "Brachioradialis Syndrome"
                  },
        "symptoms":  {
                         "ko":  "손목 요골 경상돌기 앞쪽/손바닥 쪽 통증, 팔굽혀펴기나 물건 짚을 때 통증.",
                         "en":  "Pain anterior to radial styloid process / palmar wrist, pain during push-ups or weight-bearing through palm."
                     },
        "pathophysiology":  {
                                "ko":  "팔씨름이나 손자 안아주기 등으로 상완요골근 과부하 유 발 -\u003e 요골 경상돌기 정지부 골막 자극 (힘줄견인/골막염).",
                                "en":  "Overload of brachioradialis from arm wrestling or lifting children -\u003e periostitis/traction pain (TTP) at radial styloid insertion."
                            },
        "targetTissues":  {
                              "ko":  "상완요골근(Brachioradialis) 근복.",
                              "en":  "Brachioradialis muscle belly."
                          },
        "palpation":  {
                          "ko":  "팔꿈치 주름 하방 3 FB(손가락 폭) 지점 상완요골근 근복 을 지그시 끼워 누를 때 심한 압통.",
                          "en":  "Severe tenderness when pinching brachioradialis belly 3 FB below cubital crease."
                      },
        "clinicalCase":  {
                             "ko":  "전완부 외측 통증과 상완요골근 부위 압통으로 주관절 신전 및 물건 들기가 제한되던 사례. 팔꿈치 하방 3횡지 상완요골근 근복에 NovaCell Therapy를 통전하여 건-골막 견인 긴장을 해소하고 팔굽혀펴기 및 파워 그립 기능 복원.",
                             "en":  "28yo police officer with radial wrist pain after arm wrestling. Able to perform push-ups after treating brachioradialis belly 3 FB below elbow with NovaCell therapy."
                         },
        "diagram":  "images/diagrams/diagram_13.png",
        "targets":  [
                        {
                            "name":  {
                                         "ko":  "치료 타깃 1",
                                         "en":  "Target 1"
                                     },
                            "desc":  {
                                         "ko":  "팔꿈치 주름 하방 3 FB(손가락 폭) 지점 상완요골근 근복 을 지그시 끼워 누를 때 심한 압통.",
                                         "en":  "Severe tender point when pinching brachioradialis belly 3 FB below elbow."
                                     }
                        },
                        {
                            "name":  {
                                         "ko":  "치료 타깃 2",
                                         "en":  "Target 2"
                                     },
                            "desc":  {
                                         "ko":  "상완요골근(Brachioradialis) 근복.",
                                         "en":  "Radial styloid insertion and supinator crest."
                                     }
                        }
                    ],
        "anatomicalLabels":  [
                                 "Brachioradialis",
                                 "Superficial Radial Nerve",
                                 "Radial Styloid Process",
                                 "Radius"
                             ],
        "rifeFreq":  880,
        "searchKeywords":  "상완요골근 증후군 Brachioradialis Syndrome 손목 요골 경상돌기 앞쪽/손바닥 쪽 통증, 팔굽혀펴기나 물건 짚을 때 통증. Pain anterior to radial styloid process / palmar wrist, pain during push-ups or weight-bearing through palm. 어깨, 상지 및 수부 질환 Shoulder, Upper Extremity \u0026 Hand"
    },
    {
        "id":  14,
        "catId":  "shoulder_arm",
        "catNum":  2,
        "category":  {
                         "ko":  "어깨, 상지 및 수부 질환",
                         "en":  "Shoulder, Upper Extremity \u0026 Hand"
                     },
        "mechanism":  {
                          "ko":  "신경유착 / 힘줄견인",
                          "en":  "[NEP / TTP] Nerve Entrapment \u0026 Tendon Traction"
                      },
        "mechTags":  [
                         "nerve",
                         "tendon"
                     ],
        "title":  {
                      "ko":  "손목터널증후군 (Carpal Tunnel Syndrome)",
                      "en":  "Carpal Tunnel Syndrome"
                  },
        "symptoms":  {
                         "ko":  "엄지~약지 손가락 저림, 밤/새벽에 깨서 손을 털어야 함, 무 지구근 위축.",
                         "en":  "Numbness in digits 1??, waking at night/dawn needing to shake hands out, thenar muscle atrophy."
                     },
        "pathophysiology":  {
                                "ko":  "요수근굴근(FCR)의 일차적 강직 및 신경유착과 힘줄견인으 로 인해 수근관 내부 압력이 이차적으로 증가하거나, 원회내 근에 의해 정중신경이 유착됨.",
                                "en":  "Primary hypertonicity and TTNEP of flexor carpi radialis (FCR) secondarily increases carpal tunnel pressure, or median nerve is entrapped by pronator teres."
                            },
        "targetTissues":  {
                              "ko":  "요수근굴근(FCR), 원회내근(Pronator teres, PT), 전사각근 .",
                              "en":  "Flexor carpi radialis (FCR), Pronator teres (PT), Anterior scalene."
                          },
        "palpation":  {
                          "ko":  "전완 중간 높이 FCR 근복(장장근 요골 측 옆), 주관절 하방 원회내근 근복 압통점.",
                          "en":  "Mid-forearm FCR muscle belly (adjacent to palmaris longus radial side), pronator teres belly tender point below cubital joint."
                      },
        "clinicalCase":  {
                             "ko":  "야간마다 손가락(1~3지)이 타는 듯 저려 수면 중 손을 털어야 했던 수근관증후군 사례. 요측수근굴근(FCR) 및 원회내근 전완 근복에 NovaCell Therapy를 적용하여 정중신경의 근위부 압박을 이완시킴으로써 야간 저림 완치 및 편안한 숙면 달성.",
                             "en":  "Female restaurant worker in 50s waking nightly from hand numbness. Night numbness completely resolved after FCR muscle belly NovaCell conduction."
                         },
        "diagram":  "images/diagrams/diagram_14.png",
        "targets":  [
                        {
                            "name":  {
                                         "ko":  "치료 타깃 1",
                                         "en":  "Target 1"
                                     },
                            "desc":  {
                                         "ko":  "전완 중간 높이 FCR 근복(장장근 요골 측 옆), 주관절 하방 원회내근 근복 압통점.",
                                         "en":  "Mid-forearm FCR muscle belly adjacent to palmaris longus."
                                     }
                        },
                        {
                            "name":  {
                                         "ko":  "치료 타깃 2",
                                         "en":  "Target 2"
                                     },
                            "desc":  {
                                         "ko":  "요수근굴근(FCR), 원회내근(Pronator teres, PT), 전사각근 .",
                                         "en":  "Pronator teres belly and transverse carpal ligament tunnel entrance."
                                     }
                        }
                    ],
        "anatomicalLabels":  [
                                 "Median Nerve",
                                 "Flexor Carpi Radialis (FCR)",
                                 "Transverse Carpal Ligament",
                                 "Pronator Teres"
                             ],
        "rifeFreq":  727,
        "searchKeywords":  "손목터널증후군 (Carpal Tunnel Syndrome) Carpal Tunnel Syndrome 엄지~약지 손가락 저림, 밤/새벽에 깨서 손을 털어야 함, 무 지구근 위축. Numbness in digits 1??, waking at night/dawn needing to shake hands out, thenar muscle atrophy. 어깨, 상지 및 수부 질환 Shoulder, Upper Extremity \u0026 Hand"
    },
    {
        "id":  15,
        "catId":  "shoulder_arm",
        "catNum":  2,
        "category":  {
                         "ko":  "어깨, 상지 및 수부 질환",
                         "en":  "Shoulder, Upper Extremity \u0026 Hand"
                     },
        "mechanism":  {
                          "ko":  "신경유착",
                          "en":  "[TTP] Tendon/Periosteal Traction Pain"
                      },
        "mechTags":  [
                         "nerve"
                     ],
        "title":  {
                      "ko":  "방아쇠수지 (Trigger Finger)",
                      "en":  "Trigger Finger"
                  },
        "symptoms":  {
                         "ko":  "손가락 마디 걸림(triggering), 아침에 손가락이 잘 안 펴짐, MCP 관절 근위부(A1, A2 pulley) 압통.",
                         "en":  "Finger joint catching/triggering, difficulty extending finger in morning, tenderness proximal to MCP joint (A1, A2 pulley)."
                     },
        "pathophysiology":  {
                                "ko":  "지굴근(FDS, FDP)의 병적 등장성 수축으로 힘줄이 팽팽해져 A1, A2 pulley 및 metacarpal head와의 마찰/협착성 건막염 발생.",
                                "en":  "Pathologic isotonic contraction of flexor digitorum (FDS/FDP) tightens tendons, causing friction and stenosing tenosynovitis with A1/A2 pulleys and metacarpal heads."
                            },
        "targetTissues":  {
                              "ko":  "지심굴근/지표굴근(FDS/FDP) 근복, 원회내근(PT).",
                              "en":  "Flexor digitorum profundus / superficialis (FDP/FDS) muscle bellies, Pronator teres (PT)."
                          },
        "palpation":  {
                          "ko":  "전완 중간 높이 장장근 척골 측 바로 옆 FDS/FDP 근복 지그시 깊은 압통점.",
                          "en":  "Deep tender point in FDS/FDP muscle belly at mid-forearm, immediately ulnar to palmaris longus."
                      },
        "clinicalCase":  {
                             "ko":  "손가락을 굽혔다 펼 때 뚝 소리와 함께 튕기며 걸리는 만성 방아쇠수지 사례. 전완 심부 굴근(FDS/FDP) 근복 및 건막 이행부에 NovaCell Therapy를 단계별로 적용하여 굴곡건의 활주 저항을 제거함으로써 걸림 현상 완치 및 부드러운 손동작 회복.",
                             "en":  "68yo female with 3-year history of middle finger triggering. Catching completely cured after 3 sessions treating mid-forearm FDS/FDP bellies and pronator teres with NovaCell probe."
                         },
        "diagram":  "images/diagrams/diagram_15.png",
        "targets":  [
                        {
                            "name":  {
                                         "ko":  "치료 타깃 1",
                                         "en":  "Target 1"
                                     },
                            "desc":  {
                                         "ko":  "전완 중간 높이 장장근 척골 측 바로 옆 FDS/FDP 근복 지그시 깊은 압통점.",
                                         "en":  "Deep tender point in mid-forearm FDS/FDP muscle bellies."
                                     }
                        },
                        {
                            "name":  {
                                         "ko":  "치료 타깃 2",
                                         "en":  "Target 2"
                                     },
                            "desc":  {
                                         "ko":  "지심굴근/지표굴근(FDS/FDP) 근복, 원회내근(PT).",
                                         "en":  "Palmar MCP joint A1 pulley region and pronator teres."
                                     }
                        }
                    ],
        "anatomicalLabels":  [
                                 "A1 Pulley",
                                 "Flexor Digitorum Superficialis (FDS)",
                                 "Flexor Digitorum Profundus (FDP)",
                                 "Pronator Teres"
                             ],
        "rifeFreq":  787,
        "searchKeywords":  "방아쇠수지 (Trigger Finger) Trigger Finger 손가락 마디 걸림(triggering), 아침에 손가락이 잘 안 펴짐, MCP 관절 근위부(A1, A2 pulley) 압통. Finger joint catching/triggering, difficulty extending finger in morning, tenderness proximal to MCP joint (A1, A2 pulley). 어깨, 상지 및 수부 질환 Shoulder, Upper Extremity \u0026 Hand"
    },
    {
        "id":  16,
        "catId":  "shoulder_arm",
        "catNum":  2,
        "category":  {
                         "ko":  "어깨, 상지 및 수부 질환",
                         "en":  "Shoulder, Upper Extremity \u0026 Hand"
                     },
        "mechanism":  {
                          "ko":  "신경유착",
                          "en":  "[NEP] Nerve Entrapment"
                      },
        "mechTags":  [
                         "nerve"
                     ],
        "title":  {
                      "ko":  "척골신경 유착증 (주관증후군 / 가이온관증후군)",
                      "en":  "Cubital Tunnel / Ulnar Nerve Entrapment"
                  },
        "symptoms":  {
                         "ko":  "약지 외측 및 새끼손가락 저림, 손가락 사이 근육 위축, 주 관절 내측/손목 척골측 찌릿함.",
                         "en":  "Numbness in 4th/5th digits, 5th finger catching when reaching into pockets, reduced grip strength, hypothenar atrophy."
                     },
        "pathophysiology":  {
                                "ko":  "척측수근굴근(FCU) 두 머리 사이(주관) 또는 가이온관 (Guyon\u0027s canal)에서 척골신경이 유착됨.",
                                "en":  "Ulnar nerve entrapped in cubital tunnel between medial head of FCU and pectoralis minor cNEP."
                            },
        "targetTissues":  {
                              "ko":  "척측수근굴근(FCU) 근복, 삼두근 내측두, 내측사각근.",
                              "en":  "Flexor carpi ulnaris (FCU) muscle belly, Pectoralis minor."
                          },
        "palpation":  {
                          "ko":  "내측상과 하방 2-3cm FCU 두 머리 사이 주관 부위 압통 점.",
                          "en":  "Tender points in FCU muscle belly below medial epicondyle and pectoralis minor."
                      },
        "clinicalCase":  {
                             "ko":  "4번째와 5번째 손가락의 찌릿한 저림과 팔꿈치 내측 저림을 호소하던 척골신경 포착 사례. 척측수근굴근(FCU) 근복 및 주관 부위 신경 터널에 NovaCell Therapy를 적용하여 척골신경의 기계적 압박을 해소하고 수지 감각 완전 회복.",
                             "en":  "Patient with small finger numbness and grip weakness. Numbness resolved following FCU muscle belly and pectoralis minor NovaCell application."
                         },
        "diagram":  "images/diagrams/diagram_16.png",
        "targets":  [
                        {
                            "name":  {
                                         "ko":  "치료 타깃 1",
                                         "en":  "Target 1"
                                     },
                            "desc":  {
                                         "ko":  "내측상과 하방 2-3cm FCU 두 머리 사이 주관 부위 압통 점.",
                                         "en":  "FCU muscle belly tender point below medial epicondyle."
                                     }
                        },
                        {
                            "name":  {
                                         "ko":  "치료 타깃 2",
                                         "en":  "Target 2"
                                     },
                            "desc":  {
                                         "ko":  "척측수근굴근(FCU) 근복, 삼두근 내측두, 내측사각근.",
                                         "en":  "Pectoralis minor insertion and cubital tunnel retro-epicondylar groove."
                                     }
                        }
                    ],
        "anatomicalLabels":  [
                                 "Ulnar Nerve",
                                 "Flexor Carpi Ulnaris (FCU)",
                                 "Cubital Tunnel",
                                 "Guyon\u0027s Canal"
                             ],
        "rifeFreq":  880,
        "searchKeywords":  "척골신경 유착증 (주관증후군 / 가이온관증후군) Cubital Tunnel / Ulnar Nerve Entrapment 약지 외측 및 새끼손가락 저림, 손가락 사이 근육 위축, 주 관절 내측/손목 척골측 찌릿함. Numbness in 4th/5th digits, 5th finger catching when reaching into pockets, reduced grip strength, hypothenar atrophy. 어깨, 상지 및 수부 질환 Shoulder, Upper Extremity \u0026 Hand"
    },
    {
        "id":  17,
        "catId":  "shoulder_arm",
        "catNum":  2,
        "category":  {
                         "ko":  "어깨, 상지 및 수부 질환",
                         "en":  "Shoulder, Upper Extremity \u0026 Hand"
                     },
        "mechanism":  {
                          "ko":  "힘줄견인",
                          "en":  "[TTP] Tendon/Periosteal Traction Pain"
                      },
        "mechTags":  [
                         "tendon"
                     ],
        "title":  {
                      "ko":  "장/단척측수근신경 및 척측수근굴근 힘줄염",
                      "en":  "Extensor Carpi Ulnaris / Flexor Carpi Ulnaris Tendinopathy (ECU / FCU TTP)"
                  },
        "symptoms":  {
                         "ko":  "손목 등쪽/척골측 통증, 주먹 쥐거나 손목을 꺾을 때 손목 관절 통 증.",
                         "en":  "Ulnar-sided wrist pain, weakness and pain when wringing objects or carrying bags."
                     },
        "pathophysiology":  {
                                "ko":  "ECRL, ECRB, ECU 또는 FCU 근복의 TTP로 인해 중수골 기저부 골막 부착부에 견인성 염증 발생.",
                                "en":  "Overuse of ECU/FCU forms muscle belly TTPs, inducing traction irritation on pisiform and 5th metacarpal base periosteum."
                            },
        "targetTissues":  {
                              "ko":  "ECRL, ECRB, ECU, FCU 근복.",
                              "en":  "ECU muscle belly, FCU muscle belly, and pisiform attachment."
                          },
        "palpation":  {
                          "ko":  "전완 근위부 및 중간 높이 각 근육 근복의 심부 압통점.",
                          "en":  "Deep tender points in ECU/FCU muscle bellies on ulnar forearm."
                      },
        "clinicalCase":  {
                             "ko":  "라켓/골프 운동 후 발생한 손목 척측 및 배측의 시큰거리는 힘줄 통증 사례. 전완 외측 신전근 및 척측수근굴근 기시부에 NovaCell Therapy를 통전하여 건초의 염증성 긴장을 이완시킴으로써 손목 비틀기 동작 시 통증 소실.",
                             "en":  "Patient with ulnar wrist pain when wringing objects. Pain improved following ECU/FCU muscle belly NovaCell therapy."
                         },
        "diagram":  "images/diagrams/diagram_17.png",
        "targets":  [
                        {
                            "name":  {
                                         "ko":  "치료 타깃 1",
                                         "en":  "Target 1"
                                     },
                            "desc":  {
                                         "ko":  "전완 근위부 및 중간 높이 각 근육 근복의 심부 압통점.",
                                         "en":  "Deep tender point in ECU muscle belly on ulnar dorsum of forearm."
                                     }
                        },
                        {
                            "name":  {
                                         "ko":  "치료 타깃 2",
                                         "en":  "Target 2"
                                     },
                            "desc":  {
                                         "ko":  "ECRL, ECRB, ECU, FCU 근복.",
                                         "en":  "FCU muscle belly and pisiform / 5th metacarpal base attachments."
                                     }
                        }
                    ],
        "anatomicalLabels":  [
                                 "Extensor Carpi Ulnaris (ECU)",
                                 "Flexor Carpi Ulnaris (FCU)",
                                 "Ulnar Styloid",
                                 "TFCC"
                             ],
        "rifeFreq":  727,
        "searchKeywords":  "장/단척측수근신경 및 척측수근굴근 힘줄염 Extensor Carpi Ulnaris / Flexor Carpi Ulnaris Tendinopathy (ECU / FCU TTP) 손목 등쪽/척골측 통증, 주먹 쥐거나 손목을 꺾을 때 손목 관절 통 증. Ulnar-sided wrist pain, weakness and pain when wringing objects or carrying bags. 어깨, 상지 및 수부 질환 Shoulder, Upper Extremity \u0026 Hand"
    },
    {
        "id":  18,
        "catId":  "shoulder_arm",
        "catNum":  2,
        "category":  {
                         "ko":  "어깨, 상지 및 수부 질환",
                         "en":  "Shoulder, Upper Extremity \u0026 Hand"
                     },
        "mechanism":  {
                          "ko":  "힘줄견인 / 근막유착",
                          "en":  "[TTP / cNEP] Tendon Traction \u0026 Complex Nerve Entrapment"
                      },
        "mechTags":  [
                         "nerve",
                         "tendon"
                     ],
        "title":  {
                      "ko":  "골프엘보 / 척측수근굴근 힘줄견인통",
                      "en":  "Golfer\u0027s Elbow / Flexor Carpi Ulnaris TTP"
                  },
        "symptoms":  {
                         "ko":  "주관절 내측상과 국소 통증, 세수할 때나 물건 잡을 때 내측 팔꿈치 통증.",
                         "en":  "Localized pain at medial epicondyle of elbow, inner elbow pain during face washing or gripping."
                     },
        "pathophysiology":  {
                                "ko":  "척측수근굴근(FCU) 및 굴근군의 과긴장으로 내측상과 기시부 골막에 염 증성 견인 자극(TTP) 발생; 소흉근 cNEP 연루.",
                                "en":  "Hypertonicity of FCU and flexor group causes inflammatory traction irritation (TTP) on medial epicondyle origin periosteum; pectoralis minor cNEP involved."
                            },
        "targetTissues":  {
                              "ko":  "척측수근굴근(FCU) 근복, 소흉근(Pectoralis minor).",
                              "en":  "Flexor carpi ulnaris (FCU) muscle belly, Pectoralis minor."
                          },
        "palpation":  {
                          "ko":  "내측상과 하방 3 FB(손가락 폭) FCU 근복 및 소흉근 압통점.",
                          "en":  "FCU muscle belly 3 FB below medial epicondyle, and pectoralis minor tender point."
                      },
        "clinicalCase":  {
                             "ko":  "팔꿈치 내측상과 부위의 찌르는 통증과 악수 시 힘이 빠지던 골프엘보 사례. 소흉근 보상 유착점 및 척측수근굴근(FCU) 기시부에 복합 NovaCell Therapy를 적용하여 상지 운동 사슬의 장력을 균형화함으로써 팔꿈치 통증 85% 이상 개선.",
                             "en":  "48yo female with 4 months of right medial epicondyle pain. \u003e70% pain improvement after NovaCell conduction at right pectoralis minor and FCU muscle belly."
                         },
        "diagram":  "images/diagrams/diagram_18.png",
        "targets":  [
                        {
                            "name":  {
                                         "ko":  "치료 타깃 1",
                                         "en":  "Target 1"
                                     },
                            "desc":  {
                                         "ko":  "내측상과 하방 3 FB(손가락 폭) FCU 근복 및 소흉근 압통점.",
                                         "en":  "FCU muscle belly 3 FB below medial epicondyle."
                                     }
                        },
                        {
                            "name":  {
                                         "ko":  "치료 타깃 2",
                                         "en":  "Target 2"
                                     },
                            "desc":  {
                                         "ko":  "척측수근굴근(FCU) 근복, 소흉근(Pectoralis minor).",
                                         "en":  "Medial epicondyle common flexor tendon origin and pectoralis minor."
                                     }
                        }
                    ],
        "anatomicalLabels":  [
                                 "Medial Epicondyle",
                                 "Common Flexor Tendon",
                                 "Pectoralis Minor",
                                 "Flexor Carpi Ulnaris (FCU)"
                             ],
        "rifeFreq":  880,
        "searchKeywords":  "골프엘보 / 척측수근굴근 힘줄견인통 Golfer\u0027s Elbow / Flexor Carpi Ulnaris TTP 주관절 내측상과 국소 통증, 세수할 때나 물건 잡을 때 내측 팔꿈치 통증. Localized pain at medial epicondyle of elbow, inner elbow pain during face washing or gripping. 어깨, 상지 및 수부 질환 Shoulder, Upper Extremity \u0026 Hand"
    },
    {
        "id":  19,
        "catId":  "shoulder_arm",
        "catNum":  2,
        "category":  {
                         "ko":  "어깨, 상지 및 수부 질환",
                         "en":  "Shoulder, Upper Extremity \u0026 Hand"
                     },
        "mechanism":  {
                          "ko":  "힘줄견인",
                          "en":  "[TTP] Tendon/Periosteal Traction Pain"
                      },
        "mechTags":  [
                         "tendon"
                     ],
        "title":  {
                      "ko":  "제1배측골간근 힘줄견인통",
                      "en":  "1st Dorsal Interosseous TTP"
                  },
        "symptoms":  {
                         "ko":  "엄지~검지 사이 손등 쪽 날카로운 통증, 물건을 쥐거나 머리를 빗 기 힘듦.",
                         "en":  "Sharp dorsum pain between thumb and index finger, difficulty pinching objects or combing hair."
                     },
        "pathophysiology":  {
                                "ko":  "제1배측골간근 요골측 깃(1st dorsal interosseous pennate head) 기시부의 미세손상 및 골막 자극 통증 (힘줄견인통/골막염).",
                                "en":  "Micro-damage and periosteal traction pain (TTP/periostitis) at origin of radial pennate head of 1st dorsal interosseous."
                            },
        "targetTissues":  {
                              "ko":  "제1배측골간근(1st dorsal interosseous, 요골측).",
                              "en":  "1st dorsal interosseous muscle (radial head)."
                          },
        "palpation":  {
                          "ko":  "제1중수골 요골 측 기시부 지그시 깊은 압통점.",
                          "en":  "Deep tender point pressed firmly along radial origin on 1st metacarpal."
                      },
        "clinicalCase":  {
                             "ko":  "엄지와 검지 사이 손등 부위 통증으로 일상적인 손 사용(머리 빗기, 열쇠 돌리기)이 어려웠던 사례. 제1배측골간근 근복의 중심 압통점에 NovaCell Therapy를 정밀 통전하여 골막 견인 통증을 즉각 이완하고 정밀 손 기능 회복.",
                             "en":  "Patient unable to comb hair for 3?? months due to hand pain. Immediate pain relief and ability to comb hair restored after 1st dorsal interosseous NovaCell treatment."
                         },
        "diagram":  "images/diagrams/diagram_19.png",
        "targets":  [
                        {
                            "name":  {
                                         "ko":  "치료 타깃 1",
                                         "en":  "Target 1"
                                     },
                            "desc":  {
                                         "ko":  "제1중수골 요골 측 기시부 지그시 깊은 압통점.",
                                         "en":  "Deep tender point pressed firmly along radial origin on 1st metacarpal."
                                     }
                        },
                        {
                            "name":  {
                                         "ko":  "치료 타깃 2",
                                         "en":  "Target 2"
                                     },
                            "desc":  {
                                         "ko":  "제1배측골간근(1st dorsal interosseous, 요골측).",
                                         "en":  "1st web space muscle belly and index proximal phalanx base."
                                     }
                        }
                    ],
        "anatomicalLabels":  [
                                 "1st Dorsal Interosseous Muscle",
                                 "Radial Artery Branch",
                                 "Thumb Metacarpal",
                                 "Index Metacarpal"
                             ],
        "rifeFreq":  528,
        "searchKeywords":  "제1배측골간근 힘줄견인통 1st Dorsal Interosseous TTP 엄지~검지 사이 손등 쪽 날카로운 통증, 물건을 쥐거나 머리를 빗 기 힘듦. Sharp dorsum pain between thumb and index finger, difficulty pinching objects or combing hair. 어깨, 상지 및 수부 질환 Shoulder, Upper Extremity \u0026 Hand"
    },
    {
        "id":  20,
        "catId":  "shoulder_arm",
        "catNum":  2,
        "category":  {
                         "ko":  "어깨, 상지 및 수부 질환",
                         "en":  "Shoulder, Upper Extremity \u0026 Hand"
                     },
        "mechanism":  {
                          "ko":  "신경유착",
                          "en":  "[NEP] Nerve Entrapment"
                      },
        "mechTags":  [
                         "nerve"
                     ],
        "title":  {
                      "ko":  "회외근 신경유착증 / 요골신경 신경유착증",
                      "en":  "Supinator NEP / Radial Nerve Entrapment"
                  },
        "symptoms":  {
                         "ko":  "전완 신전근 부위 둔통, 저항 하 회외(resisted supination) 시 통증 악화, 척골 쪽 손목 등쪽 통증.",
                         "en":  "Dull pain in forearm extensor region, pain aggravated by resisted supination, dorsal wrist pain on ulnar side."
                     },
        "pathophysiology":  {
                                "ko":  "회외근의 과긴장으로 요골신경 깊은가지(PIN)가 Frohse의 아 치에서 포착되거나 상완삼두근 외측두 레벨(spiral groove)에 서 포착됨.",
                                "en":  "Hypertonicity of supinator entraps posterior interosseous nerve (PIN) at Arcade of Frohse or at spiral groove level (triceps lateral head)."
                            },
        "targetTissues":  {
                              "ko":  "회외근(Supinator), 상완삼두근 외측두(Triceps brachii lateral head).",
                              "en":  "Supinator, Triceps brachii lateral head."
                          },
        "palpation":  {
                          "ko":  "요골두 하방 전완 외후면 심부 회외근 근복 압통점.",
                          "en":  "Deep tender point in supinator belly on posterolateral forearm, 2?? cm below radial head."
                      },
        "clinicalCase":  {
                             "ko":  "무거운 하중을 지탱한 뒤 지속된 전완 외측 깊은 통증 및 손목 신전 쇠약 사례. 요골두 하방 회외근의 프로세 아케이드(Frohse Arcade) 심부 압통점에 NovaCell Therapy를 적용하여 후골간신경(PIN)을 감압하고 손목 신전력 완전 회복.",
                             "en":  "57yo male with persistent ulnar dorsal wrist pain after pulling heavy machinery. Pain relieved after treating deep supinator tender point with NovaCell therapy."
                         },
        "diagram":  "images/diagrams/diagram_20.png",
        "targets":  [
                        {
                            "name":  {
                                         "ko":  "치료 타깃 1",
                                         "en":  "Target 1"
                                     },
                            "desc":  {
                                         "ko":  "요골두 하방 전완 외후면 심부 회외근 근복 압통점.",
                                         "en":  "Deep tender point in supinator belly 2-3 cm below radial head (Arcade of Frohse)."
                                     }
                        },
                        {
                            "name":  {
                                         "ko":  "치료 타깃 2",
                                         "en":  "Target 2"
                                     },
                            "desc":  {
                                         "ko":  "회외근(Supinator), 상완삼두근 외측두(Triceps brachii lateral head).",
                                         "en":  "Triceps brachii lateral head and spiral groove radial nerve passage."
                                     }
                        }
                    ],
        "anatomicalLabels":  [
                                 "Supinator Muscle",
                                 "Posterior Interosseous Nerve (PIN)",
                                 "Arcade of Frohse",
                                 "Radial Tunnel"
                             ],
        "rifeFreq":  727,
        "searchKeywords":  "회외근 신경유착증 / 요골신경 신경유착증 Supinator NEP / Radial Nerve Entrapment 전완 신전근 부위 둔통, 저항 하 회외(resisted supination) 시 통증 악화, 척골 쪽 손목 등쪽 통증. Dull pain in forearm extensor region, pain aggravated by resisted supination, dorsal wrist pain on ulnar side. 어깨, 상지 및 수부 질환 Shoulder, Upper Extremity \u0026 Hand"
    },
    {
        "id":  21,
        "catId":  "chest_torso",
        "catNum":  3,
        "category":  {
                         "ko":  "흉부, 복부 및 몸통 질환",
                         "en":  "Thorax, Abdomen \u0026 Torso Disorders"
                     },
        "mechanism":  {
                          "ko":  "신경유착 / 근막유착",
                          "en":  "[NEP / cNEP] Nerve Entrapment \u0026 Complex Entrapment"
                      },
        "mechTags":  [
                         "nerve"
                     ],
        "title":  {
                      "ko":  "복벽신경유착증후군",
                      "en":  "Abdominal Cutaneous Nerve Entrapment Syndrome (ACNES)"
                  },
        "symptoms":  {
                         "ko":  "만성 복통, 생리통 양상, 걷거나 복근 움직일 때 악화, Pinch \u0026 roll 검사 시 비명 유발.",
                         "en":  "Chronic abdominal pain mimicking dysmenorrhea, aggravated by walking or engaging abdominal muscles, screaming pain upon Pinch \u0026 Roll test."
                     },
        "pathophysiology":  {
                                "ko":  "흉늑신경 전피가지가 복직근 건막(aponeurotic opening)을 통과할 때 신경유착되어 통증 발생; T7~T12 척추주위 심부근 육 근막 유착 연루.",
                                "en":  "Entrapment (NEP) of anterior cutaneous branches of intercostal nerves passing through rectus abdominis aponeurotic opening; T7?밫12 paraspinal deep muscle cNEP involved."
                            },
        "targetTissues":  {
                              "ko":  "복직근(Rectus abdominis) 건막 터널, T7~T12 TS/다열근.",
                              "en":  "Rectus abdominis aponeurotic tunnel, T7?밫12 TS/multifidus."
                          },
        "palpation":  {
                          "ko":  "복부 측면 dimple/복직근 외측연 눌렀을 때 심한 압통점.",
                          "en":  "Severe tender point at lateral border of rectus abdominis / lateral abdominal dimple."
                      },
        "clinicalCase":  {
                             "ko":  "체간 굴곡 및 기침 시 복벽 특정 부위가 날카롭게 콕콕 찔리던 복벽피부신경포착(ACNES) 사례. T7~T9 분절 복직근 외측연 신경 관통부에 NovaCell Therapy를 적용하여 포착된 신경가지를 이완함으로써 수분 내 만성 복통 완전 소실.",
                             "en":  "Sharp abdominal cutaneous pain worsening with movement. Abdominal pain completely vanished within 10 minutes following T7, T8, T9 ACNES NovaCell treatment."
                         },
        "diagram":  "images/diagrams/diagram_21.png",
        "targets":  [
                        {
                            "name":  {
                                         "ko":  "치료 타깃 1",
                                         "en":  "Target 1"
                                     },
                            "desc":  {
                                         "ko":  "복부 측면 dimple/복직근 외측연 눌렀을 때 심한 압통점.",
                                         "en":  "Severe tender point at lateral border of rectus abdominis (aponeurotic ring)."
                                     }
                        },
                        {
                            "name":  {
                                         "ko":  "치료 타깃 2",
                                         "en":  "Target 2"
                                     },
                            "desc":  {
                                         "ko":  "복직근(Rectus abdominis) 건막 터널, T7~T12 TS/다열근.",
                                         "en":  "T7?밫12 thoracic transversospinales and deep paraspinal nerve roots."
                                     }
                        }
                    ],
        "anatomicalLabels":  [
                                 "Anterior Cutaneous Nerve",
                                 "Rectus Abdominis",
                                 "T7-T9 Intercostal Nerves",
                                 "Rectus Sheath"
                             ],
        "rifeFreq":  787,
        "searchKeywords":  "복벽신경유착증후군 Abdominal Cutaneous Nerve Entrapment Syndrome (ACNES) 만성 복통, 생리통 양상, 걷거나 복근 움직일 때 악화, Pinch \u0026 roll 검사 시 비명 유발. Chronic abdominal pain mimicking dysmenorrhea, aggravated by walking or engaging abdominal muscles, screaming pain upon Pinch \u0026 Roll test. 흉부, 복부 및 몸통 질환 Thorax, Abdomen \u0026 Torso Disorders"
    },
    {
        "id":  22,
        "catId":  "chest_torso",
        "catNum":  3,
        "category":  {
                         "ko":  "흉부, 복부 및 몸통 질환",
                         "en":  "Thorax, Abdomen \u0026 Torso Disorders"
                     },
        "mechanism":  {
                          "ko":  "신경유착 / 힘줄견인",
                          "en":  "[NEP / TTP] Nerve Entrapment \u0026 Tendon Traction"
                      },
        "mechTags":  [
                         "nerve",
                         "tendon"
                     ],
        "title":  {
                      "ko":  "T8-T9/등허리 감각신경성 통증 및 흉추 다열근 염증",
                      "en":  "T8-T9 Thoracic Sensory Neuralgia \u0026 Multifidus Inflammation"
                  },
        "symptoms":  {
                         "ko":  "등허리 부위의 찌릿찌릿한 전기 통함, 붉은 구진/발 진, 브래지어 끈 라인~장골능 사이 통증.",
                         "en":  "Electric tingling in thoracolumbar region, red papules/rashes, pain along bra strap line to iliac crest."
                     },
        "pathophysiology":  {
                                "ko":  "흉추 후지가 다열근 및 최장근을 뚫고 나올 때 포착 (NEP)되거나 T8-T9 다열근 TTP에 의해 피부 감각과 민 유발.",
                                "en":  "Thoracic posterior rami entrapped as they pierce multifidus/longissimus, causing cutaneous dysesthesia and pain."
                            },
        "targetTissues":  {
                              "ko":  "T8, T9 레벨 흉추 다열근(Multifidus), 최장근.",
                              "en":  "Multifidus between T3/T4?밫12/L1 spinous processes (especially T5?밫10 levels)."
                          },
        "palpation":  {
                          "ko":  "T8, T9 극돌기 외측 1.5cm 다열근 심부 압통점.",
                          "en":  "Multifidus tender point 1.5 cm lateral to thoracic spinous processes."
                      },
        "clinicalCase":  {
                             "ko":  "등허리 늑간을 따라 찌릿한 신경통과 피부 발적이 지속되어 대상포진으로 오인받았던 흉추 다열근 염증 사례. T8, T9 흉추 심부 다열근 압통점에 NovaCell Therapy를 정밀 통전하여 척추신경 후지 포착을 해소하고 등허리 통증 및 신경성 발적 정상화.",
                             "en":  "Patient with thoracolumbar tingling and rash. Completely resolved after treating T8 and T9 multifidus with NovaCell therapy."
                         },
        "diagram":  "images/diagrams/diagram_22.png",
        "targets":  [
                        {
                            "name":  {
                                         "ko":  "치료 타깃 1",
                                         "en":  "Target 1"
                                     },
                            "desc":  {
                                         "ko":  "T8, T9 극돌기 외측 1.5cm 다열근 심부 압통점.",
                                         "en":  "Multifidus tender point 1.5 cm lateral to T8-T9 spinous processes."
                                     }
                        },
                        {
                            "name":  {
                                         "ko":  "치료 타깃 2",
                                         "en":  "Target 2"
                                     },
                            "desc":  {
                                         "ko":  "T8, T9 레벨 흉추 다열근(Multifidus), 최장근.",
                                         "en":  "Thoracic posterior rami cutaneous piercing zone and longissimus belly."
                                     }
                        }
                    ],
        "anatomicalLabels":  [
                                 "Thoracic Multifidus",
                                 "T8-T9 Dorsal Rami",
                                 "Erector Spinae",
                                 "Intercostal Nerve"
                             ],
        "rifeFreq":  880,
        "searchKeywords":  "T8-T9/등허리 감각신경성 통증 및 흉추 다열근 염증 T8-T9 Thoracic Sensory Neuralgia \u0026 Multifidus Inflammation 등허리 부위의 찌릿찌릿한 전기 통함, 붉은 구진/발 진, 브래지어 끈 라인~장골능 사이 통증. Electric tingling in thoracolumbar region, red papules/rashes, pain along bra strap line to iliac crest. 흉부, 복부 및 몸통 질환 Thorax, Abdomen \u0026 Torso Disorders"
    },
    {
        "id":  23,
        "catId":  "chest_torso",
        "catNum":  3,
        "category":  {
                         "ko":  "흉부, 복부 및 몸통 질환",
                         "en":  "Thorax, Abdomen \u0026 Torso Disorders"
                     },
        "mechanism":  {
                          "ko":  "자율신경 오작동",
                          "en":  "[SNEP] Autonomic Sympathetic Response"
                      },
        "mechTags":  [
                         "nerve",
                         "autonomic"
                     ],
        "title":  {
                      "ko":  "체성 장애, 우울, 불안 / 상부·중부 흉추 증후군",
                      "en":  "SoDDA / Upper \u0026 Mid Thoracic Syndrome"
                  },
        "symptoms":  {
                         "ko":  "가슴 답답함, 한숨, 명치 콕콕 쑤심, 속 더부룩함, 소화불량, 심장 두 근거림, 우울/불안감 동반.",
                         "en":  "Chest tightness, sighing, epigastric stabbing, indigestion, dyspepsia, palpitations, accompanied by depression/anxiety."
                     },
        "pathophysiology":  {
                                "ko":  "상부/중부 흉추(T1~T12) 척추주위 심부근육의 과긴장으로 교감신 경절 및 ramus communicans가 유착(자율신경 오작동)되어 내장 기/심혈관계 자율신경 불균형 유발. • 치료 타깃 조직 복직근(Rectus abdominis) 건막 터널, T7~T12 TS/다열근 • 촉진 및 위치 복부 측면 dimple/복직근 외측연 눌렀을 때 심한 압통점",
                                "en":  "Hypertonicity of upper/mid thoracic (T1?밫12) paraspinal deep muscles entraps sympathetic ganglia and ramus communicans (SNEP), causing autonomic imbalance in visceral/cardiovascular systems."
                            },
        "targetTissues":  {
                              "ko":  "",
                              "en":  "T1?밫12 paraspinal deep muscle group (Multifidus/Transversospinales), Splenius capitis, Mid/Lower trapezius."
                          },
        "palpation":  {
                          "ko":  "",
                          "en":  "Deep paraspinal tender points between T1?밫12 spinous processes and 1?? cm laterally."
                      },
        "clinicalCase":  {
                             "ko":  "명치 끝의 지속적인 더부룩함과 콕콕 쑤시는 상복부 불쾌감 및 등마루 결림을 호소하던 체성 자율신경 장애(SoDDA) 사례. T4~T7 중부 흉추 분절 교감신경 경로에 NovaCell Therapy를 집중 조율하여 내장 신경 반사를 안정시키고 소화 기능 정상화.",
                             "en":  "26yo female with epigastric stabbing pain, indigestion, and mid-back pain for 16 hours. Epigastric pain vanished and digestion stimulated within 30 minutes after mid-thoracic NovaCell therapy."
                         },
        "diagram":  "images/diagrams/diagram_23.png",
        "targets":  [
                        {
                            "name":  {
                                         "ko":  "치료 타깃 1",
                                         "en":  "Target 1"
                                     },
                            "desc":  {
                                         "ko":  "",
                                         "en":  "Deep paraspinal tender points 1-2 cm lateral to T4-T8 spinous processes."
                                     }
                        },
                        {
                            "name":  {
                                         "ko":  "치료 타깃 2",
                                         "en":  "Target 2"
                                     },
                            "desc":  {
                                         "ko":  "",
                                         "en":  "Upper thoracic sympathetic ganglion chain reflex zone (T1-T6)."
                                     }
                        }
                    ],
        "anatomicalLabels":  [
                                 "Mid-Thoracic Sympathetic Chain",
                                 "T4-T7 Transversospinales",
                                 "Splanchnic Nerves",
                                 "Rhomboids"
                             ],
        "rifeFreq":  528,
        "searchKeywords":  "체성 장애, 우울, 불안 / 상부·중부 흉추 증후군 SoDDA / Upper \u0026 Mid Thoracic Syndrome 가슴 답답함, 한숨, 명치 콕콕 쑤심, 속 더부룩함, 소화불량, 심장 두 근거림, 우울/불안감 동반. Chest tightness, sighing, epigastric stabbing, indigestion, dyspepsia, palpitations, accompanied by depression/anxiety. 흉부, 복부 및 몸통 질환 Thorax, Abdomen \u0026 Torso Disorders"
    },
    {
        "id":  24,
        "catId":  "chest_torso",
        "catNum":  3,
        "category":  {
                         "ko":  "흉부, 복부 및 몸통 질환",
                         "en":  "Thorax, Abdomen \u0026 Torso Disorders"
                     },
        "mechanism":  {
                          "ko":  "신경유착",
                          "en":  "[NEP] Nerve Entrapment"
                      },
        "mechTags":  [
                         "nerve"
                     ],
        "title":  {
                      "ko":  "전거근 신경유착 / 장흉신경유착",
                      "en":  "Serratus Anterior NEP / Long Thoracic Nerve Entrapment"
                  },
        "symptoms":  {
                         "ko":  "젖꼭지 바깥쪽 흉통, 달리기나 숨 쉴 때 가슴/옆구리 콕콕 찌르는 통증.",
                         "en":  "Lateral chest pain outside nipple, stabbing chest/flank pain during running or deep breathing."
                     },
        "pathophysiology":  {
                                "ko":  "장흉신경(long thoracic n.)이 중사각근 하단에서 포 착되거나, C5~C7 척추주위 심부근육에 의해 근위부 에서 포착되어 전거근의 긴장성 허혈 통증 유발.",
                                "en":  "Long thoracic nerve entrapped at inferior middle scalene or proximally by C5-C7 paraspinal deep muscles, inducing ischemic pain in serratus anterior."
                            },
        "targetTissues":  {
                              "ko":  "중사각근(Middle scalene) 하단, C5~C7 척추주위 심부근육.",
                              "en":  "Inferior middle scalene, C5-C7 paraspinal deep muscles."
                          },
        "palpation":  {
                          "ko":  "쇄골 상방 중사각근 하단 압통점.",
                          "en":  "Tender point at inferior middle scalene above clavicle."
                      },
        "clinicalCase":  {
                             "ko":  "달리기나 상체 운동 시 측흉부 외측(늑골 부위)에 칼로 찌르는 듯한 흉통이 발생하던 전거근 신경포착 사례. 중사각근 하단 및 전거근 늑골 부착부에 NovaCell Therapy를 적용하여 장흉신경의 긴장을 완화함으로써 30분 이상 조깅에도 무통 유지.",
                             "en":  "Patient experiencing lateral chest pain outside nipple within 1 minute on treadmill. No pain even after 20??0 minutes of running following bilateral inferior middle scalene NovaCell treatment."
                         },
        "diagram":  "images/diagrams/diagram_24.png",
        "targets":  [
                        {
                            "name":  {
                                         "ko":  "치료 타깃 1",
                                         "en":  "Target 1"
                                     },
                            "desc":  {
                                         "ko":  "쇄골 상방 중사각근 하단 압통점.",
                                         "en":  "Tender point at inferior middle scalene immediately above clavicle."
                                     }
                        },
                        {
                            "name":  {
                                         "ko":  "치료 타깃 2",
                                         "en":  "Target 2"
                                     },
                            "desc":  {
                                         "ko":  "중사각근(Middle scalene) 하단, C5~C7 척추주위 심부근육.",
                                         "en":  "C5-C7 paraspinal nerve root exit and mid-axillary serratus anterior."
                                     }
                        }
                    ],
        "anatomicalLabels":  [
                                 "Serratus Anterior",
                                 "Long Thoracic Nerve",
                                 "Middle Scalene",
                                 "Lateral Rib Cage"
                             ],
        "rifeFreq":  727,
        "searchKeywords":  "전거근 신경유착 / 장흉신경유착 Serratus Anterior NEP / Long Thoracic Nerve Entrapment 젖꼭지 바깥쪽 흉통, 달리기나 숨 쉴 때 가슴/옆구리 콕콕 찌르는 통증. Lateral chest pain outside nipple, stabbing chest/flank pain during running or deep breathing. 흉부, 복부 및 몸통 질환 Thorax, Abdomen \u0026 Torso Disorders"
    },
    {
        "id":  25,
        "catId":  "chest_torso",
        "catNum":  3,
        "category":  {
                         "ko":  "흉부, 복부 및 몸통 질환",
                         "en":  "Thorax, Abdomen \u0026 Torso Disorders"
                     },
        "mechanism":  {
                          "ko":  "힘줄견인",
                          "en":  "[TTP] Tendon/Periosteal Traction Pain"
                      },
        "mechTags":  [
                         "tendon"
                     ],
        "title":  {
                      "ko":  "소흉근 힘줄견인통 / 전흉부 통증",
                      "en":  "Pectoralis Minor TTP / Anterior Chest Pain"
                  },
        "symptoms":  {
                         "ko":  "숨 쉴 때마다 가슴 앞쪽(젖꼭지 위 수직선)이 콕콕 찔림.",
                         "en":  "Stabbing pain in anterior chest (vertical line above nipple) with each breath."
                     },
        "pathophysiology":  {
                                "ko":  "소흉근의 병적 등장성 수축으로 늑골 기시부 골막에 염증성 통 증(견인통(마찰통)/periostitis) 발생.",
                                "en":  "Pathologic isotonic contraction of pectoralis minor induces inflammatory periosteal pain (TTP/periostitis) at rib origin."
                            },
        "targetTissues":  {
                              "ko":  "소흉근(Pectoralis minor), 쇄골하근.",
                              "en":  "Pectoralis minor, Subclavius."
                          },
        "palpation":  {
                          "ko":  "오훼돌기 및 3~5번 늑골 기시부 소흉근 근복 압통점.",
                          "en":  "Pectoralis minor belly tender points at coracoid process and origins on ribs 3??."
                      },
        "clinicalCase":  {
                             "ko":  "심호흡 및 흉곽 확장 시 앞가슴이 콕콕 찔리고 결리던 소흉근 힘줄견인통 사례. 오구돌기 부착부 및 소흉근 근복에 NovaCell Therapy를 통전하여 흉벽 근막의 단축을 해소하고 가슴 답답함과 호흡 시 흉통 즉각 소실.",
                             "en":  "37yo male with right anterior chest stabbing pain upon breathing for 1 week. Pain improved after treating pectoralis minor and adjacent structures with NovaCell therapy."
                         },
        "diagram":  "images/diagrams/diagram_25.png",
        "targets":  [
                        {
                            "name":  {
                                         "ko":  "치료 타깃 1",
                                         "en":  "Target 1"
                                     },
                            "desc":  {
                                         "ko":  "오훼돌기 및 3~5번 늑골 기시부 소흉근 근복 압통점.",
                                         "en":  "Pectoralis minor insertion at coracoid process."
                                     }
                        },
                        {
                            "name":  {
                                         "ko":  "치료 타깃 2",
                                         "en":  "Target 2"
                                     },
                            "desc":  {
                                         "ko":  "소흉근(Pectoralis minor), 쇄골하근.",
                                         "en":  "Pectoralis minor rib origins (ribs 3-5) and subclavius."
                                     }
                        }
                    ],
        "anatomicalLabels":  [
                                 "Pectoralis Minor",
                                 "Coracoid Process",
                                 "Medial Pectoral Nerve",
                                 "Brachial Plexus"
                             ],
        "rifeFreq":  880,
        "searchKeywords":  "소흉근 힘줄견인통 / 전흉부 통증 Pectoralis Minor TTP / Anterior Chest Pain 숨 쉴 때마다 가슴 앞쪽(젖꼭지 위 수직선)이 콕콕 찔림. Stabbing pain in anterior chest (vertical line above nipple) with each breath. 흉부, 복부 및 몸통 질환 Thorax, Abdomen \u0026 Torso Disorders"
    },
    {
        "id":  26,
        "catId":  "back_hip",
        "catNum":  4,
        "category":  {
                         "ko":  "요추, 골반, 둔부 및 고관절 질환",
                         "en":  "Lumbar Spine, Pelvis \u0026 Hip Disorders"
                     },
        "mechanism":  {
                          "ko":  "신경유착 / 힘줄견인",
                          "en":  "[NEP / TTP] Nerve Entrapment \u0026 Tendon Traction"
                      },
        "mechTags":  [
                         "nerve",
                         "tendon"
                     ],
        "title":  {
                      "ko":  "흉요추 이행부 증후군 (T-L Junction Syndrome)",
                      "en":  "Thoracolumbar Junction Syndrome (T-L Junction Syndrome)"
                  },
        "symptoms":  {
                         "ko":  "허리-엉덩이 경계 부위 시림, 장골능 후방 1/3 통증, 허리 구부리거나 앉아있을 때 허리 통증.",
                         "en":  "Coldness at lumbar-gluteal junction, posterior 1/3 iliac crest pain, low back pain when bending or prolonged sitting."
                     },
        "pathophysiology":  {
                                "ko":  "T12/L1 레벨 등척성 수축으로 T12 dorsal ramus 및 상둔 신경(SCNE)이 포착되거나 최장근/광배근 힘줄견인 형성.",
                                "en":  "Isometric contraction at T12/L1 level entraps T12 dorsal ramus and superior cluneal nerve (SCNE) or forms longissimus/latissimus dorsi TTP."
                            },
        "targetTissues":  {
                              "ko":  "T12/L1~L3 레벨 최장근(Longissimus), 다열근, 상둔신경 .",
                              "en":  "Longissimus, Multifidus at T12/L1?밚3 levels, Superior cluneal nerve."
                          },
        "palpation":  {
                          "ko":  "T12~L2 극돌기 외측 최장근 근복 및 장골능 후방 압통점.",
                          "en":  "Longissimus belly lateral to T12?밚2 spinous processes and posterior iliac crest tender points."
                      },
        "clinicalCase":  {
                             "ko":  "기상 후 또는 체간 회전 시 등허리와 장골능 상부에 광범위한 결림과 통증을 유발하던 흉요추 이행부(T12-L1) 증후군 사례. T12/L1 분절 심부근 및 상둔신경 출구부에 NovaCell Therapy를 적용하여 골반 뒤쪽 방사통 및 요통 완치.",
                             "en":  "81yo female with broad thoracolumbar pain after sleeping in bed. Pain resolved after treating T3?밫7 TS and T12/L1 levels with NovaCell therapy."
                         },
        "diagram":  "images/diagrams/diagram_26.png",
        "targets":  [
                        {
                            "name":  {
                                         "ko":  "치료 타깃 1",
                                         "en":  "Target 1"
                                     },
                            "desc":  {
                                         "ko":  "T12~L2 극돌기 외측 최장근 근복 및 장골능 후방 압통점.",
                                         "en":  "Longissimus \u0026 multifidus belly lateral to T12-L1 spinous processes."
                                     }
                        },
                        {
                            "name":  {
                                         "ko":  "치료 타깃 2",
                                         "en":  "Target 2"
                                     },
                            "desc":  {
                                         "ko":  "T12/L1~L3 레벨 최장근(Longissimus), 다열근, 상둔신경 .",
                                         "en":  "Superior cluneal nerve crossing zone at posterior 1/3 iliac crest."
                                     }
                        }
                    ],
        "anatomicalLabels":  [
                                 "T12-L1 Junction",
                                 "Superior Cluneal Nerves",
                                 "Thoracolumbar Fascia",
                                 "Iliac Crest"
                             ],
        "rifeFreq":  787,
        "searchKeywords":  "흉요추 이행부 증후군 (T-L Junction Syndrome) Thoracolumbar Junction Syndrome (T-L Junction Syndrome) 허리-엉덩이 경계 부위 시림, 장골능 후방 1/3 통증, 허리 구부리거나 앉아있을 때 허리 통증. Coldness at lumbar-gluteal junction, posterior 1/3 iliac crest pain, low back pain when bending or prolonged sitting. 요추, 골반, 둔부 및 고관절 질환 Lumbar Spine, Pelvis \u0026 Hip Disorders"
    },
    {
        "id":  27,
        "catId":  "back_hip",
        "catNum":  4,
        "category":  {
                         "ko":  "요추, 골반, 둔부 및 고관절 질환",
                         "en":  "Lumbar Spine, Pelvis \u0026 Hip Disorders"
                     },
        "mechanism":  {
                          "ko":  "신경유착 / 힘줄견인",
                          "en":  "[NEP / TTP] Nerve Entrapment \u0026 Tendon Traction"
                      },
        "mechTags":  [
                         "nerve",
                         "tendon"
                     ],
        "title":  {
                      "ko":  "대요근 / 장골근 증후군",
                      "en":  "Psoas Major / Iliacus Syndrome"
                  },
        "symptoms":  {
                         "ko":  "허리를 펴기 힘들고 걷다 보면 허리가 굽어짐, 방바닥에 누우면 허리가 들뜸, 계단 올라갈 때 무릎관절 속 통증, 허벅지 전외측 이상감각.",
                         "en":  "Inability to straighten waist, posture slumps when walking, waist lifts off floor when lying flat, deep knee joint pain when climbing stairs, anterolateral thigh dysesthesia."
                     },
        "pathophysiology":  {
                                "ko":  "대요근/장골근의 강직으로 대퇴신경 및 외측대퇴피신경(LFCN) 이 대요근 내부/근막에서 포착되어 고관절/무릎관절 신경통 및 허벅지 감각둔화 유발.",
                                "en":  "Hypertonicity of psoas major/iliacus entraps femoral nerve and lateral femoral cutaneous nerve (LFCN) within muscle/fascia, causing hip/knee neuralgia and thigh numbness."
                            },
        "targetTissues":  {
                              "ko":  "대요근(Psoas major), 장골근(Iliacus).",
                              "en":  "Psoas major, Iliacus."
                          },
        "palpation":  {
                          "ko":  "L3/L4 극돌기 수준 중심선 외측 3.5~5.5cm 지점 깊이 (7~9cm), ASIS 내측 장골오목 장골근 압통점.",
                          "en":  "Deep point 3.5??.5 cm lateral to midline at L3/L4 spinous process level (7?? cm depth), and iliacus tender point inside iliac fossa medial to ASIS."
                      },
        "clinicalCase":  {
                             "ko":  "장시간 착석 및 보행 시 허리 깊은 곳에서 서혜부와 대퇴부 앞쪽으로 뻗어 내리던 대요근·장골근 긴장증 사례. 제3-4요추 외측 대요근 심부 및 장골와 압통점에 NovaCell Therapy를 적용하여 고관절 굴근의 신경견인을 이완시킴으로써 요통 85% 이상 호전.",
                             "en":  "38yo female with 2-year history of right lumbar-thigh/groin/knee pain. Pain reduced by 80??0% following deep psoas major NovaCell application."
                         },
        "diagram":  "images/diagrams/diagram_27.png",
        "targets":  [
                        {
                            "name":  {
                                         "ko":  "치료 타깃 1",
                                         "en":  "Target 1"
                                     },
                            "desc":  {
                                         "ko":  "L3/L4 극돌기 수준 중심선 외측 3.5~5.5cm 지점 깊이 (7~9cm), ASIS 내측 장골오목 장골근 압통점.",
                                         "en":  "Deep psoas major trigger point 4-5 cm lateral to L3/L4 midline."
                                     }
                        },
                        {
                            "name":  {
                                         "ko":  "치료 타깃 2",
                                         "en":  "Target 2"
                                     },
                            "desc":  {
                                         "ko":  "대요근(Psoas major), 장골근(Iliacus).",
                                         "en":  "Iliacus belly inside iliac fossa medial to ASIS."
                                     }
                        }
                    ],
        "anatomicalLabels":  [
                                 "Psoas Major",
                                 "Iliacus",
                                 "Femoral Nerve",
                                 "Lumbar Plexus",
                                 "Inguinal Ligament"
                             ],
        "rifeFreq":  880,
        "searchKeywords":  "대요근 / 장골근 증후군 Psoas Major / Iliacus Syndrome 허리를 펴기 힘들고 걷다 보면 허리가 굽어짐, 방바닥에 누우면 허리가 들뜸, 계단 올라갈 때 무릎관절 속 통증, 허벅지 전외측 이상감각. Inability to straighten waist, posture slumps when walking, waist lifts off floor when lying flat, deep knee joint pain when climbing stairs, anterolateral thigh dysesthesia. 요추, 골반, 둔부 및 고관절 질환 Lumbar Spine, Pelvis \u0026 Hip Disorders"
    },
    {
        "id":  28,
        "catId":  "back_hip",
        "catNum":  4,
        "category":  {
                         "ko":  "요추, 골반, 둔부 및 고관절 질환",
                         "en":  "Lumbar Spine, Pelvis \u0026 Hip Disorders"
                     },
        "mechanism":  {
                          "ko":  "신경유착",
                          "en":  "[NEP] Nerve Entrapment"
                      },
        "mechTags":  [
                         "nerve"
                     ],
        "title":  {
                      "ko":  "이상근 증후군 / 좌골신경통",
                      "en":  "Piriformis Syndrome / Sciatica"
                  },
        "symptoms":  {
                         "ko":  "둔부 깊은 곳의 뻐근한 통증, 허벅지 후외측으로 뻗치는 좌골신경통, 꼬리뼈 통증.",
                         "en":  "Deep dull ache in gluteal region, sciatica radiating down posterolateral thigh, coccyx pain."
                     },
        "pathophysiology":  {
                                "ko":  "이상근의 과긴장 및 단축으로 그 아래를 통과하는 좌골신 경, 하둔신경, 후대퇴피신경이 포착(NEP)되어 둔부 허혈 및 하지 방사통 유발.",
                                "en":  "Hypertonicity/shortening of piriformis entraps underlying sciatic nerve, inferior gluteal nerve, and posterior femoral cutaneous nerve (NEP), causing gluteal ischemia and lower limb radiculopathy."
                            },
        "targetTissues":  {
                              "ko":  "이상근(Piriformis), L5/S1 다열근.",
                              "en":  "Piriformis, L5/S1 multifidus."
                          },
        "palpation":  {
                          "ko":  "PSIS와 대전자를 잇는 선 중간 하방 이상근 근복 깊은 압 통점.",
                          "en":  "Deep tender point in piriformis belly, mid-way and slightly inferior along line connecting PSIS to greater trochanter."
                      },
        "clinicalCase":  {
                             "ko":  "둔부 깊은 곳의 뻐근한 결림과 하지 외측으로 전기가 흐르듯 저리던 이상근 증후군 및 좌골신경통 사례. 대좌골공 이상근 근복 및 좌골신경 주행 경로에 NovaCell Therapy를 집중 조율하여 신경 포착을 해소하고 보행 및 착석 편안함 회복.",
                             "en":  "41yo female with dull tightness across gluteus and buttock pulling during leg flexion/internal rotation. Gluteal pain resolved following piriformis NovaCell treatment."
                         },
        "diagram":  "images/diagrams/diagram_28.png",
        "targets":  [
                        {
                            "name":  {
                                         "ko":  "치료 타깃 1",
                                         "en":  "Target 1"
                                     },
                            "desc":  {
                                         "ko":  "PSIS와 대전자를 잇는 선 중간 하방 이상근 근복 깊은 압 통점.",
                                         "en":  "Deep tender point in piriformis belly (midpoint PSIS to greater trochanter)."
                                     }
                        },
                        {
                            "name":  {
                                         "ko":  "치료 타깃 2",
                                         "en":  "Target 2"
                                     },
                            "desc":  {
                                         "ko":  "이상근(Piriformis), L5/S1 다열근.",
                                         "en":  "Sciatic nerve infra-piriform exit and L5/S1 multifidus."
                                     }
                        }
                    ],
        "anatomicalLabels":  [
                                 "Piriformis Muscle",
                                 "Sciatic Nerve",
                                 "Greater Sciatic Foramen",
                                 "Sacroiliac Joint"
                             ],
        "rifeFreq":  727,
        "searchKeywords":  "이상근 증후군 / 좌골신경통 Piriformis Syndrome / Sciatica 둔부 깊은 곳의 뻐근한 통증, 허벅지 후외측으로 뻗치는 좌골신경통, 꼬리뼈 통증. Deep dull ache in gluteal region, sciatica radiating down posterolateral thigh, coccyx pain. 요추, 골반, 둔부 및 고관절 질환 Lumbar Spine, Pelvis \u0026 Hip Disorders"
    },
    {
        "id":  29,
        "catId":  "back_hip",
        "catNum":  4,
        "category":  {
                         "ko":  "요추, 골반, 둔부 및 고관절 질환",
                         "en":  "Lumbar Spine, Pelvis \u0026 Hip Disorders"
                     },
        "mechanism":  {
                          "ko":  "힘줄견인",
                          "en":  "[TTP] Tendon/Periosteal Traction Pain"
                      },
        "mechTags":  [
                         "tendon"
                     ],
        "title":  {
                      "ko":  "고관절 심부 외회전근 골막염 / 대퇴근막장근 증후군",
                      "en":  "Hip Deep External Rotator Periostitis / Tensor Fasciae Latae Syndrome"
                  },
        "symptoms":  {
                         "ko":  "고관절 근처 국소 통증, 의자에서 일어날 때 다리 전체 못 움직임, 보행 시 대퇴 외측 통증 및 절뚝거림.",
                         "en":  "Localized pain near hip joint, inability to move leg when rising from chair, thigh lateral pain and limping during gait."
                     },
        "pathophysiology":  {
                                "ko":  "대퇴근막장근(TFL) 및 심부 외회전근(상/하쌍위근, 대퇴 방형근)의 힘줄견인으로 대전자 부착부 골막염 유발.",
                                "en":  "Isotonic contraction of TFL and deep external rotators induces periostitis (TTP) at greater trochanter insertion."
                            },
        "targetTissues":  {
                              "ko":  "대퇴근막장근(TFL), 상/하쌍위근, 대퇴방형근.",
                              "en":  "Hip joint deep external rotators near trochanteric fossa, Tensor fasciae latae (TFL)."
                          },
        "palpation":  {
                          "ko":  "대전자(Greater trochanter) 후방 및 상방 심부 압통점.",
                          "en":  "TFL belly mid-way between ASIS and greater trochanter, and posterior greater trochanter tender points."
                      },
        "clinicalCase":  {
                             "ko":  "의자에서 일어날 때 고관절 외측 통증으로 절뚝거리며 보행이 불안정하던 심부 외회전근 골막염 사례. 대전자 후방 외회전근 정지부 및 대퇴근막장근에 NovaCell Therapy를 적용하여 고관절 회전 안정성을 개선하고 즉시 정상 기립 보행 달성.",
                             "en":  "Patient with hip pain when rising from chair. Normal gait restored immediately following TFL and deep external rotator NovaCell treatment."
                         },
        "diagram":  "images/diagrams/diagram_29.png",
        "targets":  [
                        {
                            "name":  {
                                         "ko":  "치료 타깃 1",
                                         "en":  "Target 1"
                                     },
                            "desc":  {
                                         "ko":  "대전자(Greater trochanter) 후방 및 상방 심부 압통점.",
                                         "en":  "TFL muscle belly mid-way between ASIS and greater trochanter."
                                     }
                        },
                        {
                            "name":  {
                                         "ko":  "치료 타깃 2",
                                         "en":  "Target 2"
                                     },
                            "desc":  {
                                         "ko":  "대퇴근막장근(TFL), 상/하쌍위근, 대퇴방형근.",
                                         "en":  "Greater trochanter insertion and trochanteric fossa rotators."
                                     }
                        }
                    ],
        "anatomicalLabels":  [
                                 "Gemelli \u0026 Obturator Internus",
                                 "Tensor Fasciae Latae (TFL)",
                                 "Greater Trochanter",
                                 "IT Band"
                             ],
        "rifeFreq":  880,
        "searchKeywords":  "고관절 심부 외회전근 골막염 / 대퇴근막장근 증후군 Hip Deep External Rotator Periostitis / Tensor Fasciae Latae Syndrome 고관절 근처 국소 통증, 의자에서 일어날 때 다리 전체 못 움직임, 보행 시 대퇴 외측 통증 및 절뚝거림. Localized pain near hip joint, inability to move leg when rising from chair, thigh lateral pain and limping during gait. 요추, 골반, 둔부 및 고관절 질환 Lumbar Spine, Pelvis \u0026 Hip Disorders"
    },
    {
        "id":  30,
        "catId":  "back_hip",
        "catNum":  4,
        "category":  {
                         "ko":  "요추, 골반, 둔부 및 고관절 질환",
                         "en":  "Lumbar Spine, Pelvis \u0026 Hip Disorders"
                     },
        "mechanism":  {
                          "ko":  "힘줄견인",
                          "en":  "[TTP] Tendon/Periosteal Traction Pain"
                      },
        "mechTags":  [
                         "tendon"
                     ],
        "title":  {
                      "ko":  "대둔근 힘줄견인통 / 꼬리뼈 통증",
                      "en":  "Gluteus Maximus TTP / Coccygodynia"
                  },
        "symptoms":  {
                         "ko":  "엉덩방아 후 꼬리뼈 및 엉덩이 아랫부분 통증, 바닥이나 의자에 앉기 힘듦.",
                         "en":  "Tailbone and lower buttock pain after fall on buttocks, difficulty sitting on floor or chair."
                     },
        "pathophysiology":  {
                                "ko":  "엉덩방아 등 외상으로 대둔근 부착부에 힘줄견인점이 형 성되어 꼬리뼈 골막을 잡아당겨 염증성 통증 유발.",
                                "en":  "Fall trauma forms TTPs at gluteus maximus attachment, pulling on coccygeal periosteum to induce inflammatory pain."
                            },
        "targetTissues":  {
                              "ko":  "대둔근(Gluteus maximus) 하부 부착부.",
                              "en":  "Inferior attachment of gluteus maximus."
                          },
        "palpation":  {
                          "ko":  "꼬리뼈 바로 옆 대둔근 근복 및 압통점.",
                          "en":  "Gluteus maximus belly and tender point immediately lateral to coccyx."
                      },
        "clinicalCase":  {
                             "ko":  "엉덩방아 후 수개월간 지속된 미골(꼬리뼈) 통증으로 바닥에 앉기 힘들던 대둔근 건 견인통 사례. 미골 외측연 대둔근 기시부 및 천골결절인대에 NovaCell Therapy를 통전하여 골막 견인 장력을 이완함으로써 착석 시 통증 즉시 소실.",
                             "en":  "27yo female with 2 months of tailbone pain after fall on buttocks. Immediate comfort sitting after treating gluteus maximus tender point beside coccyx with NovaCell probe."
                         },
        "diagram":  "images/diagrams/diagram_30.png",
        "targets":  [
                        {
                            "name":  {
                                         "ko":  "치료 타깃 1",
                                         "en":  "Target 1"
                                     },
                            "desc":  {
                                         "ko":  "꼬리뼈 바로 옆 대둔근 근복 및 압통점.",
                                         "en":  "Gluteus maximus sacrococcygeal attachment tender point."
                                     }
                        },
                        {
                            "name":  {
                                         "ko":  "치료 타깃 2",
                                         "en":  "Target 2"
                                     },
                            "desc":  {
                                         "ko":  "대둔근(Gluteus maximus) 하부 부착부.",
                                         "en":  "Sacrotuberous ligament and lower gluteus maximus belly."
                                     }
                        }
                    ],
        "anatomicalLabels":  [
                                 "Gluteus Maximus",
                                 "Sacrotuberous Ligament",
                                 "Coccyx",
                                 "Pudendal Nerve Branch"
                             ],
        "rifeFreq":  528,
        "searchKeywords":  "대둔근 힘줄견인통 / 꼬리뼈 통증 Gluteus Maximus TTP / Coccygodynia 엉덩방아 후 꼬리뼈 및 엉덩이 아랫부분 통증, 바닥이나 의자에 앉기 힘듦. Tailbone and lower buttock pain after fall on buttocks, difficulty sitting on floor or chair. 요추, 골반, 둔부 및 고관절 질환 Lumbar Spine, Pelvis \u0026 Hip Disorders"
    },
    {
        "id":  31,
        "catId":  "knee_foot",
        "catNum":  5,
        "category":  {
                         "ko":  "무릎, 발목 및 족부 질환",
                         "en":  "Knee, Ankle \u0026 Foot Disorders"
                     },
        "mechanism":  {
                          "ko":  "신경유착 / 힘줄견인",
                          "en":  "[NEP / TTP] Nerve Entrapment \u0026 Tendon Traction"
                      },
        "mechTags":  [
                         "nerve",
                         "tendon"
                     ],
        "title":  {
                      "ko":  "대퇴이두근 / 반막양근 무릎관절 신경통",
                      "en":  "Biceps Femoris / Semimembranosus Knee Neuralgia"
                  },
        "symptoms":  {
                         "ko":  "계단 오르내릴 때(특히 내려갈 때) 무릎 관절 속 깊은 통 증, 오금/무릎 뒤쪽 찌릿함.",
                         "en":  "Deep knee joint pain when climbing/descending stairs (especially descending), popliteal/posterior knee tingling."
                     },
        "pathophysiology":  {
                                "ko":  "대퇴이두근 단두/장두 또는 반막양근의 과긴장으로 총비 골신경 관절가지(recurrent articular branch)가 유착되 어 무릎 관절 내부 신경통 유발.",
                                "en":  "Hypertonicity of biceps femoris (short/long head) or semimembranosus entraps recurrent articular branch of common peroneal nerve, inducing intra-articular knee neuralgia."
                            },
        "targetTissues":  {
                              "ko":  "대퇴이두근(Biceps femoris), 반막양근 (Semimembranosus).",
                              "en":  "Biceps femoris, Semimembranosus."
                          },
        "palpation":  {
                          "ko":  "무릎 뒤쪽 오금 상방 대퇴이두근/반막양근 근복 지그시 깊 은 압통점.",
                          "en":  "Deep firm tender points in biceps femoris / semimembranosus bellies superior to popliteal fossa."
                      },
        "clinicalCase":  {
                             "ko":  "계단을 오르내릴 때 무릎 관절 깊숙한 곳에서 통증이 뻗치던 대퇴이두근·반막양근 건 신경통 사례. 비골두 건 부착부 및 반막양근 경골 내측 정지부에 NovaCell Therapy를 적용하여 슬관절 심부 관절통을 신속히 해소하고 계단 보행 정상화.",
                             "en":  "28yo police officer with 4 weeks of intra-articular knee pain. Firm pressure on biceps femoris elicited deep joint tenderness; stair navigation normalized after NovaCell treatment."
                         },
        "diagram":  "images/diagrams/diagram_31.png",
        "targets":  [
                        {
                            "name":  {
                                         "ko":  "치료 타깃 1",
                                         "en":  "Target 1"
                                     },
                            "desc":  {
                                         "ko":  "무릎 뒤쪽 오금 상방 대퇴이두근/반막양근 근복 지그시 깊 은 압통점.",
                                         "en":  "Deep firm tender point in biceps femoris belly above popliteal fossa."
                                     }
                        },
                        {
                            "name":  {
                                         "ko":  "치료 타깃 2",
                                         "en":  "Target 2"
                                     },
                            "desc":  {
                                         "ko":  "대퇴이두근(Biceps femoris), 반막양근 (Semimembranosus).",
                                         "en":  "Semimembranosus distal tendon and recurrent articular nerve branch."
                                     }
                        }
                    ],
        "anatomicalLabels":  [
                                 "Biceps Femoris",
                                 "Semimembranosus",
                                 "Common Peroneal Nerve",
                                 "Tibial Nerve",
                                 "Fibula Head"
                             ],
        "rifeFreq":  787,
        "searchKeywords":  "대퇴이두근 / 반막양근 무릎관절 신경통 Biceps Femoris / Semimembranosus Knee Neuralgia 계단 오르내릴 때(특히 내려갈 때) 무릎 관절 속 깊은 통 증, 오금/무릎 뒤쪽 찌릿함. Deep knee joint pain when climbing/descending stairs (especially descending), popliteal/posterior knee tingling. 무릎, 발목 및 족부 질환 Knee, Ankle \u0026 Foot Disorders"
    },
    {
        "id":  32,
        "catId":  "knee_foot",
        "catNum":  5,
        "category":  {
                         "ko":  "무릎, 발목 및 족부 질환",
                         "en":  "Knee, Ankle \u0026 Foot Disorders"
                     },
        "mechanism":  {
                          "ko":  "힘줄견인",
                          "en":  "[TTP] Tendon/Periosteal Traction Pain"
                      },
        "mechTags":  [
                         "tendon"
                     ],
        "title":  {
                      "ko":  "장경골구단증후군 (Iiotibial Band Syndrome : ITBS)",
                      "en":  "Iliotibial Band Syndrome (ITBS)"
                  },
        "symptoms":  {
                         "ko":  "조깅/러닝 시 무릎 외측(대퇴골 외측상과) 극심한 통증, 무릎 30도 굴곡 시 통증 악화.",
                         "en":  "Severe lateral knee pain (lateral femoral epicondyle) during jogging/running, pain worsens at 30-degree knee flexion."
                     },
        "pathophysiology":  {
                                "ko":  "대퇴근막장근(TFL)과 대둔근의 과긴장으로 장경골구가 팽팽해져 대퇴골 외측상과와 반복 마찰/염증 유발.",
                                "en":  "Hypertonicity of TFL and gluteus maximus tightens iliotibial band, causing repetitive friction/inflammation against lateral femoral epicondyle."
                            },
        "targetTissues":  {
                              "ko":  "대퇴근막장근(Tensor fasciae latae, TFL).",
                              "en":  "Tensor fasciae latae (TFL)."
                          },
        "palpation":  {
                          "ko":  "ASIS와 대전자 중간 지점 TFL 근복 심한 압통점.",
                          "en":  "Severe tender point in TFL belly mid-way between ASIS and greater trochanter."
                      },
        "clinicalCase":  {
                             "ko":  "달리기 또는 굴곡 동작 시 무릎 외측 대퇴골 외측상과에 마찰 통증이 극심하던 장경골인대증후군(ITBS) 사례. 대퇴근막장근(TFL) 근복 및 외측상과 마찰점에 NovaCell Therapy를 집중 가동하여 건막 장력을 정상화하고 무릎 굴신 동작 통증 완치.",
                             "en":  "18yo b-boy limping in with lateral knee pain after 3 days of heavy dance practice. Normal gait restored immediately after TFL tender point NovaCell therapy."
                         },
        "diagram":  "images/diagrams/diagram_32.png",
        "targets":  [
                        {
                            "name":  {
                                         "ko":  "치료 타깃 1",
                                         "en":  "Target 1"
                                     },
                            "desc":  {
                                         "ko":  "ASIS와 대전자 중간 지점 TFL 근복 심한 압통점.",
                                         "en":  "Severe tender point in TFL belly between ASIS and greater trochanter."
                                     }
                        },
                        {
                            "name":  {
                                         "ko":  "치료 타깃 2",
                                         "en":  "Target 2"
                                     },
                            "desc":  {
                                         "ko":  "대퇴근막장근(Tensor fasciae latae, TFL).",
                                         "en":  "Lateral femoral epicondyle friction zone (Gerdy\u0027s tubercle)."
                                     }
                        }
                    ],
        "anatomicalLabels":  [
                                 "Iliotibial Band (ITB)",
                                 "Lateral Femoral Epicondyle",
                                 "Tensor Fasciae Latae",
                                 "Gerdy\u0027s Tubercle"
                             ],
        "rifeFreq":  880,
        "searchKeywords":  "장경골구단증후군 (Iiotibial Band Syndrome : ITBS) Iliotibial Band Syndrome (ITBS) 조깅/러닝 시 무릎 외측(대퇴골 외측상과) 극심한 통증, 무릎 30도 굴곡 시 통증 악화. Severe lateral knee pain (lateral femoral epicondyle) during jogging/running, pain worsens at 30-degree knee flexion. 무릎, 발목 및 족부 질환 Knee, Ankle \u0026 Foot Disorders"
    },
    {
        "id":  33,
        "catId":  "knee_foot",
        "catNum":  5,
        "category":  {
                         "ko":  "무릎, 발목 및 족부 질환",
                         "en":  "Knee, Ankle \u0026 Foot Disorders"
                     },
        "mechanism":  {
                          "ko":  "힘줄견인 / 신경유착",
                          "en":  "[TTP / NEP] Tendon Traction \u0026 Nerve Entrapment"
                      },
        "mechTags":  [
                         "nerve",
                         "tendon"
                     ],
        "title":  {
                      "ko":  "거위발 점액낭염 / 복재신경 포착",
                      "en":  "Pes Anserine Bursitis / Saphenous Nerve Entrapment"
                  },
        "symptoms":  {
                         "ko":  "무릎 내측 하방 통증, 쪼그려 앉았다 일어나기 힘듦, 계단 오르내릴 때 무릎 내측 통증.",
                         "en":  "Anteromedial inferior knee pain, difficulty standing from squatting, medial knee pain climbing/descending stairs."
                     },
        "pathophysiology":  {
                                "ko":  "봉공근/박근/반건양근 정지부(거위발)의 힘줄견인점/점 액낭염 및 내측광근에 의한 복재신경(saphenous n.) 유 착.",
                                "en":  "TTP/bursitis at insertion of sartorius/gracilis/semitendinosus (pes anserinus) and saphenous nerve entrapment by vastus medialis."
                            },
        "targetTissues":  {
                              "ko":  "거위발 정지부(Pes anserinus), 내측광근(Vastus medialis).",
                              "en":  "Pes anserinus insertion, Vastus medialis."
                          },
        "palpation":  {
                          "ko":  "관절면 하방 내측 경골 부위 거위발 정지부, 관절면 상방 5 FB(10cm) 내측광근 근복.",
                          "en":  "Pes anserinus insertion on medial tibia below joint line, and vastus medialis belly 5 FB (10 cm) above joint line."
                      },
        "clinicalCase":  {
                             "ko":  "무릎 내측 하방 통증으로 쪼그려 앉거나 보행 시 절뚝거리던 거위발 점액낭염 및 복재신경 포착 사례. 관절선 상방 내측광근 및 거위발건 정지부에 NovaCell Therapy를 적용하여 복재신경 감압과 건막 염증을 해소하고 15분 만에 정상 보행 회복.",
                             "en":  "76yo female with medial knee pain aggravated for 3 days. Pain vanished within 10 minutes following vastus medialis NovaCell conduction 5 FB above joint line."
                         },
        "diagram":  "images/diagrams/diagram_33.png",
        "targets":  [
                        {
                            "name":  {
                                         "ko":  "치료 타깃 1",
                                         "en":  "Target 1"
                                     },
                            "desc":  {
                                         "ko":  "관절면 하방 내측 경골 부위 거위발 정지부, 관절면 상방 5 FB(10cm) 내측광근 근복.",
                                         "en":  "Vastus medialis belly 5 FB (10 cm) above medial knee joint line."
                                     }
                        },
                        {
                            "name":  {
                                         "ko":  "치료 타깃 2",
                                         "en":  "Target 2"
                                     },
                            "desc":  {
                                         "ko":  "거위발 정지부(Pes anserinus), 내측광근(Vastus medialis).",
                                         "en":  "Pes anserinus insertion on medial tibia below joint line."
                                     }
                        }
                    ],
        "anatomicalLabels":  [
                                 "Pes Anserinus (Sartorius/Gracilis/Semitendinosus)",
                                 "Saphenous Nerve",
                                 "Vastus Medialis",
                                 "Infrapatellar Branch"
                             ],
        "rifeFreq":  727,
        "searchKeywords":  "거위발 점액낭염 / 복재신경 포착 Pes Anserine Bursitis / Saphenous Nerve Entrapment 무릎 내측 하방 통증, 쪼그려 앉았다 일어나기 힘듦, 계단 오르내릴 때 무릎 내측 통증. Anteromedial inferior knee pain, difficulty standing from squatting, medial knee pain climbing/descending stairs. 무릎, 발목 및 족부 질환 Knee, Ankle \u0026 Foot Disorders"
    },
    {
        "id":  34,
        "catId":  "knee_foot",
        "catNum":  5,
        "category":  {
                         "ko":  "무릎, 발목 및 족부 질환",
                         "en":  "Knee, Ankle \u0026 Foot Disorders"
                     },
        "mechanism":  {
                          "ko":  "힘줄견인",
                          "en":  "[TTP] Tendon/Periosteal Traction Pain"
                      },
        "mechTags":  [
                         "tendon"
                     ],
        "title":  {
                      "ko":  "비복근 / 가자미근 힘줄견인통 / 아킬레스건염",
                      "en":  "Gastrocnemius / Soleus TTP / Achilles Tendinopathy"
                  },
        "symptoms":  {
                         "ko":  "종아리 및 발뒤꿈치/아킬레스건 부위 통증, 걸을 때 절뚝 거림.",
                         "en":  "Calf and heel/Achilles tendon region pain, limping during walking."
                     },
        "pathophysiology":  {
                                "ko":  "비복근 내측두/외측두 및 가자미근의 힘줄견인으로 공통 힘줄(Achilles tendon) 부착부에 염증성 견인 통증 유발.",
                                "en":  "TTPs in medial/lateral heads of gastrocnemius and soleus induce inflammatory traction pain at common Achilles tendon attachment."
                            },
        "targetTissues":  {
                              "ko":  "비복근 내측두/외측두, 가자미근(Soleus).",
                              "en":  "Gastrocnemius (medial/lateral heads), Soleus."
                          },
        "palpation":  {
                          "ko":  "슬와 주름 하방 비복근 기시부 및 근복, 종아리 중간 높이 지그시 깊은 압통점.",
                          "en":  "Gastrocnemius origins/bellies below popliteal crease, and deep tender points at mid-calf level."
                      },
        "clinicalCase":  {
                             "ko":  "보행 시 종아리 당김과 발뒤꿈치 아킬레스건 부착부 통증으로 딛기 어렵던 비복근 건 견인통 사례. 대퇴골 과부 비복근 내측두 기시부 및 가자미근 근건 이행부에 NovaCell Therapy를 통전하여 건막 장력을 이완하고 발뒤꿈치 착지 통증 완치.",
                             "en":  "Calf-to-posterior knee pain since military training 6 years ago. Resolved following NovaCell TTP treatment at gastrocnemius medial head origin."
                         },
        "diagram":  "images/diagrams/diagram_34.png",
        "targets":  [
                        {
                            "name":  {
                                         "ko":  "치료 타깃 1",
                                         "en":  "Target 1"
                                     },
                            "desc":  {
                                         "ko":  "슬와 주름 하방 비복근 기시부 및 근복, 종아리 중간 높이 지그시 깊은 압통점.",
                                         "en":  "Gastrocnemius medial head origin below popliteal crease."
                                     }
                        },
                        {
                            "name":  {
                                         "ko":  "치료 타깃 2",
                                         "en":  "Target 2"
                                     },
                            "desc":  {
                                         "ko":  "비복근 내측두/외측두, 가자미근(Soleus).",
                                         "en":  "Soleus muscle belly and common Achilles tendon junction."
                                     }
                        }
                    ],
        "anatomicalLabels":  [
                                 "Gastrocnemius (Medial Head)",
                                 "Soleus",
                                 "Achilles Tendon",
                                 "Tibial Nerve"
                             ],
        "rifeFreq":  880,
        "searchKeywords":  "비복근 / 가자미근 힘줄견인통 / 아킬레스건염 Gastrocnemius / Soleus TTP / Achilles Tendinopathy 종아리 및 발뒤꿈치/아킬레스건 부위 통증, 걸을 때 절뚝 거림. Calf and heel/Achilles tendon region pain, limping during walking. 무릎, 발목 및 족부 질환 Knee, Ankle \u0026 Foot Disorders"
    },
    {
        "id":  35,
        "catId":  "knee_foot",
        "catNum":  5,
        "category":  {
                         "ko":  "무릎, 발목 및 족부 질환",
                         "en":  "Knee, Ankle \u0026 Foot Disorders"
                     },
        "mechanism":  {
                          "ko":  "신경유착 / 힘줄견인",
                          "en":  "[NEP / TTP] Nerve Entrapment \u0026 Tendon Traction"
                      },
        "mechTags":  [
                         "nerve",
                         "tendon"
                     ],
        "title":  {
                      "ko":  "심비골신경 유착증 / 장지신근 힘줄견인증",
                      "en":  "Deep Peroneal Nerve Entrapment / Extensor Digitorum Longus TTP"
                  },
        "symptoms":  {
                         "ko":  "발목을 접질린 후 발목 관절 속 애매한 통증, 엄지-2번째 발가락 사이 물갈퀴 공간 감각 저하.",
                         "en":  "Vague pain deep within ankle joint after ankle sprain, sensory reduction in 1st webspace between digits 1 and 2."
                     },
        "pathophysiology":  {
                                "ko":  "장지신근(EDL)의 과긴장으로 심비골신경이 아랫다리 전 방구획에서 유착되어 발목 속 통증 및 감각 저하 유발.",
                                "en":  "Hypertonicity of extensor digitorum longus (EDL) entraps deep peroneal nerve in anterior compartment, causing ankle joint pain and dysesthesia."
                            },
        "targetTissues":  {
                              "ko":  "장지신근(Extensor digitorum longus, EDL).",
                              "en":  "Extensor digitorum longus (EDL)."
                          },
        "palpation":  {
                          "ko":  "경골조면 하단 3 FB 아래 장지신근 근복 지그시 깊은 압 통점.",
                          "en":  "Deep tender point in EDL belly 3 FB below tibial tuberosity."
                      },
        "clinicalCase":  {
                             "ko":  "발목 염좌 이후 수개월간 지속된 발목 관절 속 먹먹한 통증 및 엄지-2지 사이 저림 사례. 전경골 하퇴 장지신근(EDL) 근복 및 족관절 전방 신경 관통부에 NovaCell Therapy를 적용하여 심비골신경 유착을 해소하고 가벼운 러닝 가능 회복.",
                             "en":  "20yo soldier with persistent deep ankle pain for 7 months post-sprain. Running resumed after treating EDL muscle belly tender point with NovaCell therapy."
                         },
        "diagram":  "images/diagrams/diagram_35.png",
        "targets":  [
                        {
                            "name":  {
                                         "ko":  "치료 타깃 1",
                                         "en":  "Target 1"
                                     },
                            "desc":  {
                                         "ko":  "경골조면 하단 3 FB 아래 장지신근 근복 지그시 깊은 압 통점.",
                                         "en":  "Deep tender point in EDL belly 3 FB below tibial tuberosity."
                                     }
                        },
                        {
                            "name":  {
                                         "ko":  "치료 타깃 2",
                                         "en":  "Target 2"
                                     },
                            "desc":  {
                                         "ko":  "장지신근(Extensor digitorum longus, EDL).",
                                         "en":  "Anterior ankle retinaculum deep peroneal nerve crossing zone."
                                     }
                        }
                    ],
        "anatomicalLabels":  [
                                 "Deep Peroneal Nerve",
                                 "Extensor Digitorum Longus (EDL)",
                                 "Anterior Tarsal Tunnel",
                                 "Dorsalis Pedis"
                             ],
        "rifeFreq":  787,
        "searchKeywords":  "심비골신경 유착증 / 장지신근 힘줄견인증 Deep Peroneal Nerve Entrapment / Extensor Digitorum Longus TTP 발목을 접질린 후 발목 관절 속 애매한 통증, 엄지-2번째 발가락 사이 물갈퀴 공간 감각 저하. Vague pain deep within ankle joint after ankle sprain, sensory reduction in 1st webspace between digits 1 and 2. 무릎, 발목 및 족부 질환 Knee, Ankle \u0026 Foot Disorders"
    },
    {
        "id":  36,
        "catId":  "knee_foot",
        "catNum":  5,
        "category":  {
                         "ko":  "무릎, 발목 및 족부 질환",
                         "en":  "Knee, Ankle \u0026 Foot Disorders"
                     },
        "mechanism":  {
                          "ko":  "힘줄견인",
                          "en":  "[TTP] Tendon/Periosteal Traction Pain"
                      },
        "mechTags":  [
                         "tendon"
                     ],
        "title":  {
                      "ko":  "후경골근 증후군 (Tibialis Posterior TTP)",
                      "en":  "Tibialis Posterior Syndrome (Tibialis Posterior TTP)"
                  },
        "symptoms":  {
                         "ko":  "발목 내측 및 내측 복사뼈 뒤쪽 통증, 평발 변화, 아침에 내측 족저궁 시림.",
                         "en":  "Medial ankle and posterior medial malleolus pain, flatfoot progression, morning medial plantar arch coldness/aching."
                     },
        "pathophysiology":  {
                                "ko":  "후경골근의 미세손상 및 등장성 수축으로 주상골 정지부 골막 자극(힘줄견인/골막염) 유발.",
                                "en":  "Micro-damage and isotonic contraction of tibialis posterior induces periostitis (TTP) at navicular insertion."
                            },
        "targetTissues":  {
                              "ko":  "후경골근(Tibialis Posterior) 근복.",
                              "en":  "Tibialis posterior muscle belly."
                          },
        "palpation":  {
                          "ko":  "아랫다리 중간 높이 경골 내측연 뒤쪽으로 경골 후면에 붙 여 후경골근 근복 촉진.",
                          "en":  "Tibialis posterior belly along posterior medial border of tibia at mid-calf level."
                      },
        "clinicalCase":  {
                             "ko":  "발목 내측 복사뼈 뒤쪽 통증과 아침 첫 보행 시 발바닥 내측 당김을 호소하던 후경골근 증후군 사례. 종아리 심부 후경골근 근복 및 내과 후방 신경 홈에 NovaCell Therapy를 적용하여 족궁(아치)의 건 견인력을 이완시키고 보행 편안함 회복.",
                             "en":  "Flatfoot progression and post-medial malleolar pain since sprain 5 years ago. Improved after treating mid-calf tibialis posterior belly with NovaCell therapy."
                         },
        "diagram":  "images/diagrams/diagram_36.png",
        "targets":  [
                        {
                            "name":  {
                                         "ko":  "치료 타깃 1",
                                         "en":  "Target 1"
                                     },
                            "desc":  {
                                         "ko":  "아랫다리 중간 높이 경골 내측연 뒤쪽으로 경골 후면에 붙 여 후경골근 근복 촉진.",
                                         "en":  "Tibialis posterior belly along posterior medial border of tibia."
                                     }
                        },
                        {
                            "name":  {
                                         "ko":  "치료 타깃 2",
                                         "en":  "Target 2"
                                     },
                            "desc":  {
                                         "ko":  "후경골근(Tibialis Posterior) 근복.",
                                         "en":  "Navicular tuberosity insertion and retromalleolar groove."
                                     }
                        }
                    ],
        "anatomicalLabels":  [
                                 "Tibialis Posterior",
                                 "Medial Malleolus",
                                 "Navicular Tuberosity",
                                 "Tibial Nerve"
                             ],
        "rifeFreq":  727,
        "searchKeywords":  "후경골근 증후군 (Tibialis Posterior TTP) Tibialis Posterior Syndrome (Tibialis Posterior TTP) 발목 내측 및 내측 복사뼈 뒤쪽 통증, 평발 변화, 아침에 내측 족저궁 시림. Medial ankle and posterior medial malleolus pain, flatfoot progression, morning medial plantar arch coldness/aching. 무릎, 발목 및 족부 질환 Knee, Ankle \u0026 Foot Disorders"
    },
    {
        "id":  37,
        "catId":  "knee_foot",
        "catNum":  5,
        "category":  {
                         "ko":  "무릎, 발목 및 족부 질환",
                         "en":  "Knee, Ankle \u0026 Foot Disorders"
                     },
        "mechanism":  {
                          "ko":  "힘줄견인",
                          "en":  "[TTP] Tendon/Periosteal Traction Pain"
                      },
        "mechTags":  [
                         "tendon"
                     ],
        "title":  {
                      "ko":  "단비골근 힘줄견인증 / 발목 외측 통증",
                      "en":  "Peroneus Brevis TTP / Lateral Ankle Pain"
                  },
        "symptoms":  {
                         "ko":  "발목 외측 복사뼈 뒤쪽 및 5번 중족골 기저부 통증, 양반 다리 시 발목 바깥쪽 통증.",
                         "en":  "Pain posterior to lateral malleolus and at 5th metatarsal base, lateral ankle pain during cross-legged sitting."
                     },
        "pathophysiology":  {
                                "ko":  "단비골근의 힘줄견인로 5번 중족골 기저부 정지부 골막 자극 유발.",
                                "en":  "TTP in peroneus brevis induces periosteal irritation at insertion on 5th metatarsal base."
                            },
        "targetTissues":  {
                              "ko":  "단비골근(Peroneus brevis) 근복.",
                              "en":  "Peroneus brevis muscle belly."
                          },
        "palpation":  {
                          "ko":  "비골 하방 1/3 높이 단비골근 근복 및 5번 중족골 기저부 부착부 압통점.",
                          "en":  "Peroneus brevis belly in lower 1/3 of fibula and attachment at 5th metatarsal base."
                      },
        "clinicalCase":  {
                             "ko":  "보행 또는 양반다리 시 발목 외측 복사뼈 뒤쪽과 제5중족골 기저부에 통증이 유발되던 단비골근 건 견인통 사례. 하퇴 외측 비골근 근복 및 제5중족골 부착부에 NovaCell Therapy를 통전하여 외측 건막 긴장을 소거하고 양반다리 시 통증 완쾌.",
                             "en":  "Pain from behind lateral malleolus to anterior ankle after march. Pain during cross-legged sitting resolved after peroneus brevis belly NovaCell treatment."
                         },
        "diagram":  "images/diagrams/diagram_37.png",
        "targets":  [
                        {
                            "name":  {
                                         "ko":  "치료 타깃 1",
                                         "en":  "Target 1"
                                     },
                            "desc":  {
                                         "ko":  "비골 하방 1/3 높이 단비골근 근복 및 5번 중족골 기저부 부착부 압통점.",
                                         "en":  "Peroneus brevis muscle belly in lower 1/3 of lateral fibula."
                                     }
                        },
                        {
                            "name":  {
                                         "ko":  "치료 타깃 2",
                                         "en":  "Target 2"
                                     },
                            "desc":  {
                                         "ko":  "단비골근(Peroneus brevis) 근복.",
                                         "en":  "Base of 5th metatarsal tuberosity insertion."
                                     }
                        }
                    ],
        "anatomicalLabels":  [
                                 "Peroneus Brevis",
                                 "Lateral Malleolus",
                                 "5th Metatarsal Base",
                                 "Superficial Peroneal Nerve"
                             ],
        "rifeFreq":  880,
        "searchKeywords":  "단비골근 힘줄견인증 / 발목 외측 통증 Peroneus Brevis TTP / Lateral Ankle Pain 발목 외측 복사뼈 뒤쪽 및 5번 중족골 기저부 통증, 양반 다리 시 발목 바깥쪽 통증. Pain posterior to lateral malleolus and at 5th metatarsal base, lateral ankle pain during cross-legged sitting. 무릎, 발목 및 족부 질환 Knee, Ankle \u0026 Foot Disorders"
    },
    {
        "id":  38,
        "catId":  "knee_foot",
        "catNum":  5,
        "category":  {
                         "ko":  "무릎, 발목 및 족부 질환",
                         "en":  "Knee, Ankle \u0026 Foot Disorders"
                     },
        "mechanism":  {
                          "ko":  "신경유착/ 힘줄견인",
                          "en":  "[NEP / TTP] Nerve Entrapment \u0026 Tendon Traction"
                      },
        "mechTags":  [
                         "nerve",
                         "tendon"
                     ],
        "title":  {
                      "ko":  "족저근막염 / 내측종골신경 유착",
                      "en":  "Plantar Fasciitis / Medial Calcaneal Nerve Entrapment"
                  },
        "symptoms":  {
                         "ko":  "아침에 자고 일어나 첫발 내딛을 때 발뒤꿈치 바닥에 전기 가 오듯 극심한 통증.",
                         "en":  "Excruciating electric shock-like heel pain upon taking first morning steps after waking."
                     },
        "pathophysiology":  {
                                "ko":  "내측종골신경이 굴근지대에서 포착되거나, 가자미근 (가자미근 근막 유착) 및 단지굴근/무지외전근 TTP 가 혼재되어 종골 바닥 골막염 유발.",
                                "en":  "Entrapment of medial calcaneal nerve under flexor retinaculum, or soleus cNEP combined with flexor digitorum brevis / abductor hallucis TTP inducing calcaneal plantar periostitis."
                            },
        "targetTissues":  {
                              "ko":  "굴근지대(Flexor retinaculum), 단지굴근(FDB), 무지외 전근(AbH), 가자미근.",
                              "en":  "Flexor retinaculum, Flexor digitorum brevis (FDB), Abductor hallucis (AbH), Soleus."
                          },
        "palpation":  {
                          "ko":  "내측 복사뼈 하방 굴근지대 부위 및 종골 내측 돌기 부근 압통점.",
                          "en":  "Flexor retinaculum below medial malleolus and tender points near medial calcaneal tuberosity."
                      },
        "clinicalCase":  {
                             "ko":  "아침 기상 후 첫발을 디딜 때 발뒤꿈치 바닥에 전기가 찌릿하며 딛기 힘들던 만성 족저근막염 사례. 내측 복사뼈 하방 굴근지대(Flexor Retinaculum) 및 내측종골신경 유착 부위에 NovaCell Therapy를 적용하여 신경 유착을 해소하고 첫발 통증 완전 소실.",
                             "en":  "32yo female with severe morning heel pain for 5 months. Improved after treating medial calcaneal nerve entrapment under flexor retinaculum with NovaCell probe."
                         },
        "diagram":  "images/diagrams/diagram_38.png",
        "targets":  [
                        {
                            "name":  {
                                         "ko":  "치료 타깃 1",
                                         "en":  "Target 1"
                                     },
                            "desc":  {
                                         "ko":  "내측 복사뼈 하방 굴근지대 부위 및 종골 내측 돌기 부근 압통점.",
                                         "en":  "Flexor retinaculum \u0026 medial calcaneal nerve below medial malleolus."
                                     }
                        },
                        {
                            "name":  {
                                         "ko":  "치료 타깃 2",
                                         "en":  "Target 2"
                                     },
                            "desc":  {
                                         "ko":  "굴근지대(Flexor retinaculum), 단지굴근(FDB), 무지외 전근(AbH), 가자미근.",
                                         "en":  "Medial calcaneal tuberosity plantar fascia origin \u0026 FDB/AbH."
                                     }
                        }
                    ],
        "anatomicalLabels":  [
                                 "Plantar Fascia",
                                 "Medial Calcaneal Nerve",
                                 "Flexor Retinaculum",
                                 "Abductor Hallucis"
                             ],
        "rifeFreq":  787,
        "searchKeywords":  "족저근막염 / 내측종골신경 유착 Plantar Fasciitis / Medial Calcaneal Nerve Entrapment 아침에 자고 일어나 첫발 내딛을 때 발뒤꿈치 바닥에 전기 가 오듯 극심한 통증. Excruciating electric shock-like heel pain upon taking first morning steps after waking. 무릎, 발목 및 족부 질환 Knee, Ankle \u0026 Foot Disorders"
    },
    {
        "id":  39,
        "catId":  "knee_foot",
        "catNum":  5,
        "category":  {
                         "ko":  "무릎, 발목 및 족부 질환",
                         "en":  "Knee, Ankle \u0026 Foot Disorders"
                     },
        "mechanism":  {
                          "ko":  "신경유착",
                          "en":  "[NEP] Nerve Entrapment"
                      },
        "mechTags":  [
                         "nerve"
                     ],
        "title":  {
                      "ko":  "지간신경통 (Morton\u0027s Neuroma)",
                      "en":  "Morton\u0027s Neuroma"
                  },
        "symptoms":  {
                         "ko":  "3/4번 중족골두 사이 발바닥/발등으로 뻗치는 찌릿한 방 사통, 걸을 때 발바닥 통증.",
                         "en":  "Radiating electric pain into plantar/dorsal aspects between 3rd/4th metatarsal heads, pain when walking."
                     },
        "pathophysiology":  {
                                "ko":  "내측/외측 족저신경 지간 가지가 심층횡중족인대 밑에서 유착/자극받아 발생.",
                                "en":  "Interdigital branches of medial/lateral plantar nerves entrapped/irritated beneath deep transverse metatarsal ligament."
                            },
        "targetTissues":  {
                              "ko":  "심층횡중족인대(Deep transverse metatarsal ligament).",
                              "en":  "Deep transverse metatarsal ligament."
                          },
        "palpation":  {
                          "ko":  "3/4번 중족골두 사이 발등 쪽에서 자입하여 인대를 뚫는 깊이(피부 2cm 깊이) 압통점.",
                          "en":  "Tender point inserted dorsally between 3rd/4th metatarsal heads penetrating to ligament depth (2 cm depth)."
                      },
        "clinicalCase":  {
                             "ko":  "3번째와 4번째 발가락 사이 발바닥이 화끈거리고 자갈을 밟는 듯 찌릿하던 지간신경통(몰톤신경종) 사례. 발등 3-4 중족골두 사이 심층인대 부위에 NovaCell Therapy를 정밀 통전하여 신경 포착을 해소하고 보행 시 찌릿한 방사통 완치.",
                             "en":  "35yo female with electric plantar pain between 3rd/4th metatarsal heads. Radiating pain vanished after treating deep transverse metatarsal ligament via dorsal approach with NovaCell therapy."
                         },
        "diagram":  "images/diagrams/diagram_39.png",
        "targets":  [
                        {
                            "name":  {
                                         "ko":  "치료 타깃 1",
                                         "en":  "Target 1"
                                     },
                            "desc":  {
                                         "ko":  "3/4번 중족골두 사이 발등 쪽에서 자입하여 인대를 뚫는 깊이(피부 2cm 깊이) 압통점.",
                                         "en":  "Dorsal tender point between 3rd and 4th metatarsal heads (2 cm depth)."
                                     }
                        },
                        {
                            "name":  {
                                         "ko":  "치료 타깃 2",
                                         "en":  "Target 2"
                                     },
                            "desc":  {
                                         "ko":  "심층횡중족인대(Deep transverse metatarsal ligament).",
                                         "en":  "Deep transverse metatarsal ligament and common digital nerve zone."
                                     }
                        }
                    ],
        "anatomicalLabels":  [
                                 "Common Plantar Digital Nerve",
                                 "Deep Transverse Metatarsal Ligament",
                                 "3rd-4th Metatarsal Heads"
                             ],
        "rifeFreq":  727,
        "searchKeywords":  "지간신경통 (Morton\u0027s Neuroma) Morton\u0027s Neuroma 3/4번 중족골두 사이 발바닥/발등으로 뻗치는 찌릿한 방 사통, 걸을 때 발바닥 통증. Radiating electric pain into plantar/dorsal aspects between 3rd/4th metatarsal heads, pain when walking. 무릎, 발목 및 족부 질환 Knee, Ankle \u0026 Foot Disorders"
    },
    {
        "id":  40,
        "catId":  "knee_foot",
        "catNum":  5,
        "category":  {
                         "ko":  "무릎, 발목 및 족부 질환",
                         "en":  "Knee, Ankle \u0026 Foot Disorders"
                     },
        "mechanism":  {
                          "ko":  "힘줄견인",
                          "en":  "[TTP] Tendon/Periosteal Traction Pain"
                      },
        "mechTags":  [
                         "tendon"
                     ],
        "title":  {
                      "ko":  "단무지굴근 힘줄견인통 / 엄지발가락 중족지절관절(MTP) 통증",
                      "en":  "Flexor Hallucis Brevis TTP / 1st MTP Joint Pain"
                  },
        "symptoms":  {
                         "ko":  "엄지발가락 1st MTP 관절 바닥쪽/내측 통증, 걸을 때 엄 지발가락을 발등 쪽으로 꺾으면 극심한 통증.",
                         "en":  "Plantar/medial pain at 1st MTP joint, severe pain when dorsiflexing great toe during gait."
                     },
        "pathophysiology":  {
                                "ko":  "단무지굴근 내측두의 등장성 수축으로 1st MTP 근위지골 기저부 골막 자극(힘줄견인) 발생.",
                                "en":  "Isotonic contraction of medial head of flexor hallucis brevis (FHB) induces periosteal irritation (TTP) at 1st MTP proximal phalanx base."
                            },
        "targetTissues":  {
                              "ko":  "단무지굴근 내측두(FHB medial head).",
                              "en":  "Flexor hallucis brevis medial head (FHB)."
                          },
        "palpation":  {
                          "ko":  "1st MTP 관절로부터 근위부 2 FB 지점 FHB 내측두 근복 지그시 깊은 압통점.",
                          "en":  "Firm deep tender point in FHB medial head belly 2 FB proximal to 1st MTP joint."
                      },
        "clinicalCase":  {
                             "ko":  "엄지발가락 밑바닥(1st MTP 관절) 통증으로 지면을 차고 나가지 못하던 단무지굴근 건 견인통 사례. MTP 관절 2횡지 근위부 단무지굴근 내측두에 NovaCell Therapy를 적용하여 종자골 주변 골막 견인력을 이완함으로써 즉각적인 통증 소실 및 정상 보행.",
                             "en":  "42yo male unable to weight-bear on great toe after hiking. Immediate pain improvement after treating FHB medial head 2 FB proximal to MTP with NovaCell probe."
                         },
        "diagram":  "images/diagrams/diagram_40.png",
        "targets":  [
                        {
                            "name":  {
                                         "ko":  "치료 타깃 1",
                                         "en":  "Target 1"
                                     },
                            "desc":  {
                                         "ko":  "1st MTP 관절로부터 근위부 2 FB 지점 FHB 내측두 근복 지그시 깊은 압통점.",
                                         "en":  "Firm deep tender point in FHB medial head belly 2 FB proximal to MTP."
                                     }
                        },
                        {
                            "name":  {
                                         "ko":  "치료 타깃 2",
                                         "en":  "Target 2"
                                     },
                            "desc":  {
                                         "ko":  "단무지굴근 내측두(FHB medial head).",
                                         "en":  "1st MTP sesamoid bone complex and proximal phalanx base."
                                     }
                        }
                    ],
        "anatomicalLabels":  [
                                 "Flexor Hallucis Brevis (FHB)",
                                 "Sesamoid Bones",
                                 "1st MTP Joint",
                                 "Medial Plantar Nerve"
                             ],
        "rifeFreq":  880,
        "searchKeywords":  "단무지굴근 힘줄견인통 / 엄지발가락 중족지절관절(MTP) 통증 Flexor Hallucis Brevis TTP / 1st MTP Joint Pain 엄지발가락 1st MTP 관절 바닥쪽/내측 통증, 걸을 때 엄 지발가락을 발등 쪽으로 꺾으면 극심한 통증. Plantar/medial pain at 1st MTP joint, severe pain when dorsiflexing great toe during gait. 무릎, 발목 및 족부 질환 Knee, Ankle \u0026 Foot Disorders"
    },
    {
        "id":  41,
        "catId":  "knee_foot",
        "catNum":  5,
        "category":  {
                         "ko":  "무릎, 발목 및 족부 질환",
                         "en":  "Knee, Ankle \u0026 Foot Disorders"
                     },
        "mechanism":  {
                          "ko":  "힘줄견인",
                          "en":  "[TTP] Tendon/Periosteal Traction Pain"
                      },
        "mechTags":  [
                         "tendon"
                     ],
        "title":  {
                      "ko":  "장무지신근 힘줄견인통 / 엄지발가락 등쪽 통증",
                      "en":  "Extensor Hallucis Longus TTP / Dorsal Great Toe Pain"
                  },
        "symptoms":  {
                         "ko":  "엄지발가락 1st MTP 관절 등쪽 및 IP 관절 등쪽 통증, 신 발 신을 때 엄지발가락이 구부러지면 극심한 통증.",
                         "en":  "Dorsal 1st MTP and IP joint pain, severe pain when great toe flexes inside shoe."
                     },
        "pathophysiology":  {
                                "ko":  "장무지신근(EHL)의 과긴장/단축으로 엄지발가락 기저부 등쪽 골막 자극 발생.",
                                "en":  "Hypertonicity/shortening of extensor hallucis longus (EHL) induces dorsal periosteal irritation at great toe base."
                            },
        "targetTissues":  {
                              "ko":  "장무지신근(Extensor hallucis longus, EHL).",
                              "en":  "Extensor hallucis longus (EHL)."
                          },
        "palpation":  {
                          "ko":  "양쪽 복사뼈 연결선 상방 5 FB 지점 EHL 근복 압통점.",
                          "en":  "EHL belly tender point 5 FB proximal to bimalleolar line."
                      },
        "clinicalCase":  {
                             "ko":  "보행 중 발가락이 삐끗한 후 엄지발가락 등쪽 관절에 통증이 지속되던 장무지신근 건 견인통 사례. 복사뼈 선 5횡지 상방 장무지신근(EHL) 근복에 NovaCell Therapy를 적용하여 발등 건막의 긴장을 해소하고 신발 착용 및 보행 시 통증 완치.",
                             "en":  "20yo soldier with dorsal MTP pain after night march. Pain relieved after treating EHL belly 5 FB above malleolar line with NovaCell therapy."
                         },
        "diagram":  "images/diagrams/diagram_41.png",
        "targets":  [
                        {
                            "name":  {
                                         "ko":  "치료 타깃 1",
                                         "en":  "Target 1"
                                     },
                            "desc":  {
                                         "ko":  "양쪽 복사뼈 연결선 상방 5 FB 지점 EHL 근복 압통점.",
                                         "en":  "EHL muscle belly tender point 5 FB proximal to bimalleolar line."
                                     }
                        },
                        {
                            "name":  {
                                         "ko":  "치료 타깃 2",
                                         "en":  "Target 2"
                                     },
                            "desc":  {
                                         "ko":  "장무지신근(Extensor hallucis longus, EHL).",
                                         "en":  "Dorsal 1st MTP joint capsule and distal hallucis tendon insertion."
                                     }
                        }
                    ],
        "anatomicalLabels":  [
                                 "Extensor Hallucis Longus (EHL)",
                                 "Dorsal 1st MTP Joint",
                                 "Deep Peroneal Nerve Branch"
                             ],
        "rifeFreq":  727,
        "searchKeywords":  "장무지신근 힘줄견인통 / 엄지발가락 등쪽 통증 Extensor Hallucis Longus TTP / Dorsal Great Toe Pain 엄지발가락 1st MTP 관절 등쪽 및 IP 관절 등쪽 통증, 신 발 신을 때 엄지발가락이 구부러지면 극심한 통증. Dorsal 1st MTP and IP joint pain, severe pain when great toe flexes inside shoe. 무릎, 발목 및 족부 질환 Knee, Ankle \u0026 Foot Disorders"
    },
    {
        "id":  42,
        "catId":  "autonomic_systemic",
        "catNum":  6,
        "category":  {
                         "ko":  "자율신경계(Autonomic Nerve) 및 전신/특수 질환",
                         "en":  "Autonomic \u0026 Systemic Disorders"
                     },
        "mechanism":  {
                          "ko":  "자율신경 오작동",
                          "en":  "[SNEP] Autonomic Sympathetic Response"
                      },
        "mechTags":  [
                         "nerve",
                         "autonomic"
                     ],
        "title":  {
                      "ko":  "자율신경계 오작동 (수족냉증 및 만성피로)",
                      "en":  "Autonomic SNEP (Cold Extremities \u0026 Chronic Fatigue)"
                  },
        "symptoms":  {
                         "ko":  "손발 차가움, 아침에 입안이 씀, 무기력증, 소화불량, 식도 염, 전신 몸살 양상.",
                         "en":  "Cold hands/feet, bitter taste in mouth in morning, lethargy, indigestion, esophagitis, generalized body aches."
                     },
        "pathophysiology":  {
                                "ko":  "척추주위 심부근육의 과긴장으로 척추관/추간공 주변 교 감신경 혈관운동섬유 및 GVA fiber가 유착(자율신경 오작동)되어 말초 혈류 장애 및 내장기 기능부전 유발.",
                                "en":  "Paraspinal deep muscle hypertonicity entraps sympathetic vasomotor and GVA fibers near spinal canal / IVF (SNEP), causing peripheral blood flow obstruction and visceral dysfunction."
                            },
        "targetTissues":  {
                              "ko":  "T6~T10 레벨 척추주위 심부근육군(Multifidus).",
                              "en":  "T6?밫10 paraspinal deep muscle group (Multifidus)."
                          },
        "palpation":  {
                          "ko":  "T6~T10 극돌기 양옆 1.5cm 척추주위 심부근육 압통점.",
                          "en":  "Paraspinal deep muscle tender points 1.5 cm lateral to T6?밫10 spinous processes."
                      },
        "clinicalCase":  {
                             "ko":  "수십 년간 지속된 손발 냉증, 만성 무기력, 잦은 소화장애를 동반하던 자율신경계 오작동(Autonomic Nerve) 사례. T9~T11 흉추 분절 심부 다열근 및 교감신경 경로에 NovaCell Therapy를 체계적으로 통전하여 말초 혈관 수축을 정상화하고 수족 온기 및 활력 회복.",
                             "en":  "20-year history of frequent diarrhea, stomach discomfort, and chronic fatigue. Diarrhea ceased and \u003e90% improvement achieved after bilateral T9/T10 multifidus NovaCell SNEP treatment."
                         },
        "diagram":  "images/diagrams/diagram_42.png",
        "targets":  [
                        {
                            "name":  {
                                         "ko":  "치료 타깃 1",
                                         "en":  "Target 1"
                                     },
                            "desc":  {
                                         "ko":  "T6~T10 극돌기 양옆 1.5cm 척추주위 심부근육 압통점.",
                                         "en":  "Paraspinal deep muscle tender points 1.5 cm lateral to T6-T10 spinous processes."
                                     }
                        },
                        {
                            "name":  {
                                         "ko":  "치료 타깃 2",
                                         "en":  "Target 2"
                                     },
                            "desc":  {
                                         "ko":  "T6~T10 레벨 척추주위 심부근육군(Multifidus).",
                                         "en":  "Bilateral thoracic sympathetic trunk vasomotor reflex points."
                                     }
                        }
                    ],
        "anatomicalLabels":  [
                                 "Thoracolumbar Sympathetic Trunk",
                                 "T8-T11 Multifidus",
                                 "Celiac Ganglion",
                                 "Splanchnic Nerves"
                             ],
        "rifeFreq":  528,
        "searchKeywords":  "자율신경계 오작동 (수족냉증 및 만성피로) Autonomic SNEP (Cold Extremities \u0026 Chronic Fatigue) 손발 차가움, 아침에 입안이 씀, 무기력증, 소화불량, 식도 염, 전신 몸살 양상. Cold hands/feet, bitter taste in mouth in morning, lethargy, indigestion, esophagitis, generalized body aches. 자율신경계(Autonomic Nerve) 및 전신/특수 질환 Autonomic \u0026 Systemic Disorders"
    },
    {
        "id":  43,
        "catId":  "autonomic_systemic",
        "catNum":  6,
        "category":  {
                         "ko":  "자율신경계(Autonomic Nerve) 및 전신/특수 질환",
                         "en":  "Autonomic \u0026 Systemic Disorders"
                     },
        "mechanism":  {
                          "ko":  "신경근막 유착 및 힘줄견인",
                          "en":  "[SNEP / TTP] Autonomic Response \u0026 Tendon Traction"
                      },
        "mechTags":  [
                         "nerve"
                     ],
        "title":  {
                      "ko":  "산후풍 (Postpartum Pain Syndrome)",
                      "en":  "Postpartum Pain Syndrome"
                  },
        "symptoms":  {
                         "ko":  "출산 후 뼈가 시리고 온몸이 아픔, 앉거나 걷기 힘들고 무 릎/골반/손목 관절 시림.",
                         "en":  "Coldness in bones and generalized body aches post-delivery, difficulty sitting/walking, cold aching in knees/pelvis/wrist joints."
                     },
        "pathophysiology":  {
                                "ko":  "분만 과정의 과도한 근육 긴장 및 호르몬 변화로 전사각근 , 대둔근, 반막양근 등에 통증유발점이 형성되어 말초 혈 액순환 저하 및 감각신경 포착 유발.",
                                "en":  "Excessive muscle strain and hormonal changes during labor form TTPs in gluteus maximus, anterior scalene, semimembranosus, etc., reducing peripheral blood circulation and causing nerve entrapment."
                            },
        "targetTissues":  {
                              "ko":  "대둔근(Gluteus maximus), 전사각근(Anterior scalene), 반막양근, 최장근.",
                              "en":  "Gluteus maximus, Anterior scalene, Semimembranosus, Longissimus."
                          },
        "palpation":  {
                          "ko":  "꼬리뼈 옆 대둔근 압통점, 목 전사각근 하단, 무릎 뒤 반막 양근 기시부.",
                          "en":  "Gluteus maximus tender point beside coccyx, inferior anterior scalene at neck, semimembranosus origin behind knee."
                      },
        "clinicalCase":  {
                             "ko":  "출산 후 전신 관절 시림과 꼬리뼈 통증으로 정상 착석과 보행이 어렵던 산후풍 복합 증후군 사례. 골반 뒤쪽 대둔근 기시부 및 전사각근/대요근 긴장점에 NovaCell Therapy를 복합 적용하여 골반 장력을 이완시킴으로써 착석 통증 소실 및 전신 시림 개선.",
                             "en":  "Postpartum mother unable to sit due to tailbone pain. Able to sit immediately after right gluteus maximus NovaCell therapy."
                         },
        "diagram":  "images/diagrams/diagram_43.png",
        "targets":  [
                        {
                            "name":  {
                                         "ko":  "치료 타깃 1",
                                         "en":  "Target 1"
                                     },
                            "desc":  {
                                         "ko":  "꼬리뼈 옆 대둔근 압통점, 목 전사각근 하단, 무릎 뒤 반막 양근 기시부.",
                                         "en":  "Gluteus maximus sacrococcygeal tender point beside coccyx."
                                     }
                        },
                        {
                            "name":  {
                                         "ko":  "치료 타깃 2",
                                         "en":  "Target 2"
                                     },
                            "desc":  {
                                         "ko":  "대둔근(Gluteus maximus), 전사각근(Anterior scalene), 반막양근, 최장근.",
                                         "en":  "Inferior anterior scalene at neck \u0026 knee semimembranosus origin."
                                     }
                        }
                    ],
        "anatomicalLabels":  [
                                 "Gluteus Maximus",
                                 "Sacrotuberous Ligament",
                                 "Pelvic Floor",
                                 "Psoas / Scalenes"
                             ],
        "rifeFreq":  432,
        "searchKeywords":  "산후풍 (Postpartum Pain Syndrome) Postpartum Pain Syndrome 출산 후 뼈가 시리고 온몸이 아픔, 앉거나 걷기 힘들고 무 릎/골반/손목 관절 시림. Coldness in bones and generalized body aches post-delivery, difficulty sitting/walking, cold aching in knees/pelvis/wrist joints. 자율신경계(Autonomic Nerve) 및 전신/특수 질환 Autonomic \u0026 Systemic Disorders"
    },
    {
        "id":  44,
        "catId":  "autonomic_systemic",
        "catNum":  6,
        "category":  {
                         "ko":  "자율신경계(Autonomic Nerve) 및 전신/특수 질환",
                         "en":  "Autonomic \u0026 Systemic Disorders"
                     },
        "mechanism":  {
                          "ko":  "신경유착 / 힘줄견인",
                          "en":  "[NEP / TTP] Nerve Entrapment \u0026 Tendon Traction"
                      },
        "mechTags":  [
                         "nerve",
                         "tendon"
                     ],
        "title":  {
                      "ko":  "소아 일과성 고관절 활액막염",
                      "en":  "Pediatric Transient Synovitis of the Hip"
                  },
        "symptoms":  {
                         "ko":  "10세 이하 소아의 갑작스러운 고관절/서혜부 통증, 다리 를 절거나 보행 거부.",
                         "en":  "Sudden hip/groin pain in children under 10, limping or refusal to walk."
                     },
        "pathophysiology":  {
                                "ko":  "소아 장요근(Iliopsoas)의 병적 과긴장 및 단축으로 대퇴 신경 가지 압박 및 고관절 자극 유발.",
                                "en":  "Pathologic hypertonicity/shortening of pediatric iliopsoas compresses femoral nerve branches and irritates hip joint."
                            },
        "targetTissues":  {
                              "ko":  "장골근(Iliacus) 및 대요근.",
                              "en":  "Iliacus and Psoas major."
                          },
        "palpation":  {
                          "ko":  "안고 들어온 환아의 좌측 장골근 부위 압통점.",
                          "en":  "Tender point in left iliacus muscle of child carried in father\u0027s arms."
                      },
        "clinicalCase":  {
                             "ko":  "고관절 통증으로 체중 부하가 불가능하여 다리를 디디지 못하던 일과성 고관절 활액막염 사례. 내측 장골근 및 대요근 힘줄 부착부에 부드러운 NovaCell Therapy를 집중 조율하여 관절낭 내 압박을 해소하고 당일 즉각적인 독립 보행 회복.",
                             "en":  "Young boy carried in father\u0027s arms unable to walk due to hip pain. Pain completely vanished and normal gait resumed immediately after left iliacus NovaCell application."
                         },
        "diagram":  "images/diagrams/diagram_44.png",
        "targets":  [
                        {
                            "name":  {
                                         "ko":  "치료 타깃 1",
                                         "en":  "Target 1"
                                     },
                            "desc":  {
                                         "ko":  "안고 들어온 환아의 좌측 장골근 부위 압통점.",
                                         "en":  "Tender point in iliacus muscle inside iliac fossa."
                                     }
                        },
                        {
                            "name":  {
                                         "ko":  "치료 타깃 2",
                                         "en":  "Target 2"
                                     },
                            "desc":  {
                                         "ko":  "장골근(Iliacus) 및 대요근.",
                                         "en":  "Psoas major femoral insertion and hip anterior capsule."
                                     }
                        }
                    ],
        "anatomicalLabels":  [
                                 "Iliacus",
                                 "Psoas Major",
                                 "Femoral Nerve",
                                 "Hip Joint Capsule"
                             ],
        "rifeFreq":  528,
        "searchKeywords":  "소아 일과성 고관절 활액막염 Pediatric Transient Synovitis of the Hip 10세 이하 소아의 갑작스러운 고관절/서혜부 통증, 다리 를 절거나 보행 거부. Sudden hip/groin pain in children under 10, limping or refusal to walk. 자율신경계(Autonomic Nerve) 및 전신/특수 질환 Autonomic \u0026 Systemic Disorders"
    },
    {
        "id":  45,
        "catId":  "autonomic_systemic",
        "catNum":  6,
        "category":  {
                         "ko":  "자율신경계(Autonomic Nerve) 및 전신/특수 질환",
                         "en":  "Autonomic \u0026 Systemic Disorders"
                     },
        "mechanism":  {
                          "ko":  "신경유착 / 자율신경 오작동",
                          "en":  "[NEP / SNEP] Nerve Entrapment \u0026 Autonomic Response"
                      },
        "mechTags":  [
                         "nerve",
                         "autonomic"
                     ],
        "title":  {
                      "ko":  "하지 대상포진 후 통증 (PHN)",
                      "en":  "Postherpetic Neuralgia of the Lower Extremities (PHN)"
                  },
        "symptoms":  {
                         "ko":  "허벅지~종아리 신경 절 따라 콕콕 쑤시고 쏘는 듯한 극심 한 신경통 및 피부 이상감각.",
                         "en":  "Stabbing, shooting severe neuralgia and cutaneous dysesthesia along thigh-to-calf dermatome."
                     },
        "pathophysiology":  {
                                "ko":  "바이러스 감염 후 잔존하는 신경 염증 및 해당 레벨 척추 주위 심부근육 과긴장에 의한 누적 신경유착.",
                                "en":  "Residual neural inflammation post-viral infection combined with cumulative nerve entrapment from paraspinal deep muscle hypertonicity."
                            },
        "targetTissues":  {
                              "ko":  "해당 척추 분절(L4~S1) 척추주위 심부근육군.",
                              "en":  "Paraspinal deep muscle group at corresponding spinal segments (L4-S1)."
                          },
        "palpation":  {
                          "ko":  "L5/S1 극돌기 양옆 척추주위 심부근육 깊은 압통점.",
                          "en":  "Deep tender points in paraspinal muscles beside L5/S1 spinous processes."
                      },
        "clinicalCase":  {
                             "ko":  "대상포진 치유 후에도 하지 신경 분절을 따라 콕콕 쑤시고 쏘는 듯한 통증이 지속되던 대상포진 후 신경통(PHN) 사례. L5-S1 분절 심부 다열근 및 척수신경 후지에 NovaCell Therapy를 체계적으로 적용하여 신경근막 흥분을 진정시키고 난치성 신경통 80% 이상 완화.",
                             "en":  "Severe stabbing pain following lower extremity herpes zoster. Pain improved with L5/S1 level multifidus NovaCell therapy."
                         },
        "diagram":  "images/diagrams/diagram_45.png",
        "targets":  [
                        {
                            "name":  {
                                         "ko":  "치료 타깃 1",
                                         "en":  "Target 1"
                                     },
                            "desc":  {
                                         "ko":  "L5/S1 극돌기 양옆 척추주위 심부근육 깊은 압통점.",
                                         "en":  "Deep tender points in paraspinal muscles beside L5/S1 spinous processes."
                                     }
                        },
                        {
                            "name":  {
                                         "ko":  "치료 타깃 2",
                                         "en":  "Target 2"
                                     },
                            "desc":  {
                                         "ko":  "해당 척추 분절(L4~S1) 척추주위 심부근육군.",
                                         "en":  "Lower extremity affected dermatome nerve trunk exit points."
                                     }
                        }
                    ],
        "anatomicalLabels":  [
                                 "L5-S1 Multifidus",
                                 "Sciatic Nerve Roots",
                                 "Lumbosacral Trunk",
                                 "S1 Dorsal Ramus"
                             ],
        "rifeFreq":  787,
        "searchKeywords":  "하지 대상포진 후 통증 (PHN) Postherpetic Neuralgia of the Lower Extremities (PHN) 허벅지~종아리 신경 절 따라 콕콕 쑤시고 쏘는 듯한 극심 한 신경통 및 피부 이상감각. Stabbing, shooting severe neuralgia and cutaneous dysesthesia along thigh-to-calf dermatome. 자율신경계(Autonomic Nerve) 및 전신/특수 질환 Autonomic \u0026 Systemic Disorders"
    },
    {
        "id":  46,
        "catId":  "autonomic_systemic",
        "catNum":  6,
        "category":  {
                         "ko":  "자율신경계(Autonomic Nerve) 및 전신/특수 질환",
                         "en":  "Autonomic \u0026 Systemic Disorders"
                     },
        "mechanism":  {
                          "ko":  "자율신경 오작동 / 힘줄견인",
                          "en":  "[SNEP / TTP] Autonomic Response \u0026 Tendon Traction"
                      },
        "mechTags":  [
                         "nerve",
                         "tendon",
                         "autonomic"
                     ],
        "title":  {
                      "ko":  "봉와직염 오진 삼출성 부종 및 마목감",
                      "en":  "Misdiagnosed Cellulitis with Exudative Edema"
                  },
        "symptoms":  {
                         "ko":  "하지/발목 부위 붉은 발적, 부종, 열감 및 먹먹한 마목감, 봉와직염 오진 잦음.",
                         "en":  "Ankle/lower leg edema and redness, taut swelling, unresponsive to antibiotic therapy."
                     },
        "pathophysiology":  {
                                "ko":  "요추부 척추주위 심부근육 과긴장에 의한 교감신경 혈관 운동/정맥류 순환 장애 및 삼출물 저류.",
                                "en":  "Venous/lymphatic return impairment and abnormal vascular permeability due to sympathetic SNEP, inducing stasis edema."
                            },
        "targetTissues":  {
                              "ko":  "L2-L5 척추주위 심부근육군(Multifidus), 가자미근.",
                              "en":  "L4-S1 multifidus, Soleus, Gastrocnemius."
                          },
        "palpation":  {
                          "ko":  "L2-L5 극돌기 외측 다열근 심부 및 종아리 가자미근 압통 점.",
                          "en":  "Lumbar deep muscle and calf muscle belly tender points."
                      },
        "clinicalCase":  {
                             "ko":  "하지 부종과 열감, 먹먹한 마목감으로 봉와직염으로 오진되어 장기 치료를 받았으나 호전이 없던 자율신경성 혈류 장애 사례. 요추부 L2~L4 다열근 자율신경 오작동 부위에 NovaCell Therapy를 적용하여 신경성 부종과 마목감 완치 및 다리 가벼움 회복.",
                             "en":  "Patient misdiagnosed with cellulitis and treated with antibiotics for 2 weeks without improvement. Edema markedly reduced 2 days after L5/S1 multifidus NovaCell SNEP treatment."
                         },
        "diagram":  "images/diagrams/diagram_46.png",
        "targets":  [
                        {
                            "name":  {
                                         "ko":  "치료 타깃 1",
                                         "en":  "Target 1"
                                     },
                            "desc":  {
                                         "ko":  "L2-L5 극돌기 외측 다열근 심부 및 종아리 가자미근 압통 점.",
                                         "en":  "L4-S1 deep paraspinal multifidus sympathetic vasomotor points."
                                     }
                        },
                        {
                            "name":  {
                                         "ko":  "치료 타깃 2",
                                         "en":  "Target 2"
                                     },
                            "desc":  {
                                         "ko":  "L2-L5 척추주위 심부근육군(Multifidus), 가자미근.",
                                         "en":  "Soleus \u0026 gastrocnemius muscle belly deep fascial tender points."
                                     }
                        }
                    ],
        "anatomicalLabels":  [
                                 "Lumbar Sympathetic Chain",
                                 "L2-L4 Multifidus",
                                 "Saphenous \u0026 Peroneal Nerves",
                                 "Popliteal Lymphatics"
                             ],
        "rifeFreq":  727,
        "searchKeywords":  "봉와직염 오진 삼출성 부종 및 마목감 Misdiagnosed Cellulitis with Exudative Edema 하지/발목 부위 붉은 발적, 부종, 열감 및 먹먹한 마목감, 봉와직염 오진 잦음. Ankle/lower leg edema and redness, taut swelling, unresponsive to antibiotic therapy. 자율신경계(Autonomic Nerve) 및 전신/특수 질환 Autonomic \u0026 Systemic Disorders"
    }
];
