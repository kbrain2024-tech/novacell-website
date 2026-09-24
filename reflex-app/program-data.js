const programMaps={foot:"foot-sole-map.webp",hand:"hand-palm-map.webp"};
const systems=[
 {id:"cardio",no:"01",icon:"♥",image:"system-cardio.webp",title:"심혈관계",en:"Cardiovascular",count:5,summary:"심장·혈관과 순환 관련 교재 프로그램"},
 {id:"digestive",no:"02",icon:"◒",image:"system-digestive.webp",title:"소화기계",en:"Digestive",count:3,summary:"식도·위·장과 소화 관련 교재 프로그램"},
 {id:"endocrine",no:"03",icon:"✦",image:"system-endocrine.webp",title:"내분비계",en:"Endocrine",count:3,summary:"호르몬과 주요 내분비선 관련 프로그램"},
 {id:"muscle",no:"04",icon:"◇",image:"system-musculoskeletal.webp",title:"근골격계",en:"Musculoskeletal",count:6,summary:"근육·뼈·관절과 척추 관련 프로그램"},
 {id:"nervous",no:"05",icon:"◎",image:"system-nervous.webp",title:"신경계",en:"Nervous",count:4,summary:"뇌·척수·말초신경 관련 교재 프로그램"},
 {id:"respiratory",no:"06",icon:"≈",image:"system-respiratory.webp",title:"호흡기계",en:"Respiratory",count:5,summary:"폐·기관지·상기도 관련 교재 프로그램"},
 {id:"reproductive",no:"07",icon:"◉",image:"system-reproductive.webp",title:"생식기계",en:"Reproductive",count:1,summary:"자궁·전립선·난소·고환 관련 프로그램"},
 {id:"urinary",no:"08",icon:"◍",image:"system-urinary.webp",title:"비뇨기계",en:"Urinary",count:2,summary:"신장·방광·부신 관련 교재 프로그램"}
];
const programs=[
 {id:"cardio-foot",systemId:"cardio",system:"심혈관계",title:"심혈관계 발 반사 요법",en:"Cardiovascular Foot Reflexology",page:48,summary:"심혈관계의 기본 발 반사 영역을 순서대로 확인합니다.",points:["뇌간","부신","횡격막","심장"],seconds:30,caution:"흉통·호흡곤란은 즉시 진료가 우선입니다."},
 {id:"arrhythmia",systemId:"cardio",system:"심혈관계",title:"부정맥 및 울혈성 심부전",en:"Arrhythmia & Congestive Heart Failure",page:49,summary:"심장 박동 조절과 관련된 기본 반사 영역을 확인합니다.",points:["뇌간","심장"],seconds:25,caution:"급성 흉통·실신·심한 호흡곤란은 즉시 진료가 우선입니다."},
 {id:"hypertension",systemId:"cardio",system:"심혈관계",title:"고혈압 반사 요법",en:"High Blood Pressure",page:50,summary:"긴장 완화를 중심으로 교재의 두 반사 영역을 안내합니다.",points:["태양신경총","횡격막"],seconds:30},
 {id:"heart-attack",systemId:"cardio",system:"심혈관계",title:"심장마비 반사 요법",en:"Heart Attack",page:51,summary:"교재에 제시된 뇌하수체와 심장 반사 영역을 확인합니다.",points:["뇌하수체","심장"],seconds:20,caution:"심장마비가 의심되면 반사요법보다 응급의료가 최우선입니다."},
 {id:"hypotension",systemId:"cardio",system:"심혈관계",title:"저혈압 반사 요법",en:"Low Blood Pressure",page:52,summary:"혈압 조절과 관련된 부신과 심장 반사 영역을 확인합니다.",points:["부신","심장"],seconds:25},

 {id:"heartburn",systemId:"digestive",system:"소화기계",title:"가슴 쓰림 반사 요법",en:"Heartburn",page:55,summary:"식도와 위 주변의 소화 관련 반사 영역을 안내합니다.",points:["횡격막","식도","췌장","위"],seconds:30},
 {id:"ibs",systemId:"digestive",system:"소화기계",title:"과민성 대장 증후군",en:"Irritable Bowel Syndrome",page:56,summary:"대장 순서와 긴장 관련 반사 영역을 함께 확인합니다.",points:["상행결장","횡행결장","하행결장","S자 결장","뇌하수체","부신"],seconds:25},
 {id:"constipation",systemId:"digestive",system:"소화기계",title:"변비 반사 요법",en:"Constipation",page:57,summary:"결장과 갑상선·신장·요추 관련 반사 영역을 안내합니다.",points:["상행결장","하행결장","S자 결장","갑상선","신장·부신","요추"],seconds:25},

 {id:"endocrine-foot",systemId:"endocrine",system:"내분비계",title:"내분비계 발 반사 요법",en:"Endocrine Foot Reflexology",page:59,summary:"발에서 주요 내분비선 반사 영역을 순서대로 확인합니다.",points:["뇌하수체","갑상선·부갑상선","췌장","자궁·전립선","난소·고환"],seconds:25},
 {id:"endocrine-hand",systemId:"endocrine",system:"내분비계",title:"내분비계 손 반사 요법",en:"Endocrine Hand Reflexology",page:60,summary:"손에서 주요 내분비선 반사 영역을 순서대로 확인합니다.",points:["뇌하수체","갑상선·부갑상선","췌장","부신","자궁·전립선","난소·고환"],seconds:25,handMap:"hand-palm-map.webp"},
 {id:"diabetes",systemId:"endocrine",system:"내분비계",title:"당뇨병 및 저혈당증",en:"Diabetes & Hypoglycemia",page:61,summary:"교재에 제시된 췌장과 신장 반사 영역을 확인합니다.",points:["췌장","신장"],seconds:25,caution:"혈당 이상 증상은 측정과 의료적 관리가 우선입니다."},

 {id:"muscle-foot",systemId:"muscle",system:"근골격계",title:"근골격계 발 반사 요법",en:"Musculoskeletal Foot Reflexology",page:64,summary:"척추와 주요 관절 관련 발 반사 영역을 순서대로 확인합니다.",points:["꼬리뼈","어깨","엉덩이·좌골신경","무릎·다리","허리","목","등 상부"],seconds:25,footMap:"foot-top-map.webp",handMap:"hand-back-map.webp"},
 {id:"osteoporosis",systemId:"muscle",system:"근골격계",title:"골다공증 반사 요법",en:"Osteoporosis",page:65,summary:"내분비선과 신장·부신·엉덩이 반사 영역을 확인합니다.",points:["갑상선","뇌하수체","부갑상선","신장·부신","엉덩이"],seconds:25,footMap:"foot-top-map.webp",handMap:"hand-back-map.webp"},
 {id:"carpal",systemId:"muscle",system:"근골격계",title:"수근관 증후군",en:"Carpal Tunnel Syndrome",page:66,summary:"상지와 척추 관련 반사 영역을 순서대로 확인합니다.",points:["어깨","손목","팔꿈치","갑상선","신장·부신","경추","흉추"],seconds:25,footMap:"foot-top-map.webp",handMap:"hand-back-map.webp"},
 {id:"osteoarthritis",systemId:"muscle",system:"근골격계",title:"골관절염",en:"Osteoarthritis",page:68,summary:"척추와 내분비·림프 관련 반사 영역을 가볍게 확인합니다.",points:["척추 전체","간","갑상선","뇌하수체","신장·부신","상부 림프계"],seconds:25},
 {id:"frozen-shoulder",systemId:"muscle",system:"근골격계",title:"오십견",en:"Frozen Shoulder",page:70,summary:"어깨와 팔꿈치, 경추·흉추 관련 반사 영역을 확인합니다.",points:["갑상선","후두","어깨","팔꿈치","부신","경추","흉추"],seconds:25},
 {id:"multiple-sclerosis",systemId:"muscle",system:"근골격계",title:"다발성 경화증",en:"Multiple Sclerosis",page:72,summary:"신경계와 방광·림프 관련 반사 영역을 순서대로 확인합니다.",points:["척추 전체","머리","내이","방광","부신","상부 림프계"],seconds:25},

 {id:"dementia",systemId:"nervous",system:"신경계",title:"알츠하이머 및 치매",en:"Alzheimer's & Dementia",page:74,summary:"머리와 중추 조절, 이완 관련 반사 영역을 확인합니다.",points:["머리","시상하부·뇌하수체","횡격막","폐","신장·부신","척추 전체"],seconds:25},
 {id:"facial-palsy",systemId:"nervous",system:"신경계",title:"안면신경마비 반사 요법",en:"Facial Nerve Palsy",page:75,summary:"안면신경과 목 반사 영역을 중심으로 확인합니다.",points:["안면신경","목"],seconds:20},
 {id:"stroke-epilepsy",systemId:"nervous",system:"신경계",title:"뇌졸중·간질·뇌성마비",en:"Stroke, Epilepsy & Cerebral Palsy",page:76,summary:"교재에서 제시한 뇌 반사 영역을 확인합니다.",points:["뇌"],seconds:20,caution:"급성 뇌졸중 또는 발작은 즉시 응급의료가 우선입니다."},
 {id:"parkinson",systemId:"nervous",system:"신경계",title:"파킨슨병 반사 요법",en:"Parkinson's Disease",page:78,summary:"뇌와 신장·림프·간·척추 관련 반사 영역을 안내합니다.",points:["머리","뇌","신장","림프","간","척추 전체"],seconds:25},

 {id:"respiratory-foot",systemId:"respiratory",system:"호흡기계",title:"호흡기계 발 반사 요법",en:"Respiratory Foot Reflexology",page:81,summary:"호흡과 염증·면역 관련 기본 발 반사 영역을 확인합니다.",points:["부신","폐","림프"],seconds:25},
 {id:"bronchitis",systemId:"respiratory",system:"호흡기계",title:"기관지염 반사 요법",en:"Bronchitis",page:82,summary:"폐와 횡격막, 부신 및 흉추 관련 반사 영역을 확인합니다.",points:["뇌하수체","폐","횡격막","부신","흉추","태양신경총"],seconds:25,caution:"심한 호흡곤란이나 청색증은 즉시 진료가 우선입니다."},
 {id:"asthma",systemId:"respiratory",system:"호흡기계",title:"천식 반사 요법",en:"Asthma",page:83,summary:"폐 기능과 이완 관련 반사 영역을 순서대로 확인합니다.",points:["뇌하수체","폐","횡격막","부신","흉추","태양신경총"],seconds:25,caution:"천식 발작 중에는 처방된 응급약과 의료지침이 우선입니다."},
 {id:"influenza",systemId:"respiratory",system:"호흡기계",title:"인플루엔자 반사 요법",en:"Influenza",page:84,summary:"호흡기와 상부 림프·비장 관련 반사 영역을 확인합니다.",points:["태양신경총","상부 림프","폐","갑상선","비장","흉추"],seconds:25},
 {id:"common-cold",systemId:"respiratory",system:"호흡기계",title:"감기 반사 요법",en:"Common Cold",page:85,summary:"머리와 감각기관, 척추·림프 관련 반사 영역을 확인합니다.",points:["머리","뇌하수체","눈·귀","경추","흉추","상부 림프"],seconds:25},

 {id:"reproductive-basic",systemId:"reproductive",system:"생식기계",title:"생식기계 반사 요법",en:"Reproductive Reflexology",page:88,summary:"남녀 생식기관 관련 반사 영역을 순서대로 확인합니다.",points:["자궁·전립선","난소·고환","나팔관"],seconds:25,handMap:"hand-back-map.webp"},

 {id:"urinary-foot",systemId:"urinary",system:"비뇨기계",title:"비뇨기계 발 반사 요법",en:"Urinary Foot Reflexology",page:90,summary:"방광과 신장 반사 영역을 발에서 확인합니다.",points:["방광","신장"],seconds:25},
 {id:"urinary-infection",systemId:"urinary",system:"비뇨기계",title:"방광·신장 감염 반사 요법",en:"Bladder & Kidney Infection",page:91,summary:"교재에서 염증 대응과 관련해 제시한 부신 반사 영역을 확인합니다.",points:["부신"],seconds:20,caution:"발열·혈뇨·옆구리 통증은 진료가 우선입니다."}
];
const pointGuides={
 "S자 결장":{side:"왼쪽 중심",location:"왼발·왼손의 아래쪽 결장 경로 끝부분"},
 "간":{side:"오른쪽 중심",location:"오른발·오른손의 상복부 반사 영역"},
 "갑상선":{side:"양쪽",location:"엄지발가락·엄지손가락 기저부 주변"},
 "갑상선·부갑상선":{side:"양쪽",location:"엄지발가락·엄지손가락 기저부 주변"},
 "경추":{side:"양쪽",location:"엄지발가락·엄지손가락 안쪽 가장자리의 위쪽 척추선"},
 "꼬리뼈":{side:"양쪽",location:"발뒤꿈치·손목 쪽 척추선의 끝부분"},
 "나팔관":{side:"양쪽",location:"발목·손목 바깥쪽을 잇는 생식기 반사선"},
 "난소·고환":{side:"양쪽",location:"발목·손목 바깥쪽의 생식기 반사 영역"},
 "내이":{side:"양쪽",location:"넷째·다섯째 발가락과 손가락 기저부 주변"},
 "뇌":{side:"양쪽",location:"발가락·손가락 끝과 엄지 전체의 머리 반사 영역"},
 "뇌간":{side:"양쪽",location:"엄지발가락·엄지손가락 안쪽 기저부"},
 "뇌하수체":{side:"양쪽",location:"엄지발가락·엄지손가락 중앙의 표시점"},
 "눈·귀":{side:"양쪽",location:"둘째·셋째 발가락과 손가락 기저부 주변"},
 "등 상부":{side:"양쪽",location:"발·손 안쪽 척추선의 흉추 위쪽 구간"},
 "림프":{side:"양쪽",location:"발등·손등과 발가락·손가락 사이의 림프 표시 영역"},
 "머리":{side:"양쪽",location:"발가락·손가락 끝부분 전체"},
 "목":{side:"양쪽",location:"엄지발가락·엄지손가락 기저부의 목 반사 띠"},
 "무릎·다리":{side:"양쪽",location:"발·손 바깥쪽 중간의 관절 반사 영역"},
 "방광":{side:"양쪽",location:"발뒤꿈치·손목 가까운 안쪽 아래 영역"},
 "부갑상선":{side:"양쪽",location:"엄지발가락·엄지손가락 기저부 안쪽"},
 "부신":{side:"양쪽",location:"발바닥·손바닥 중앙보다 약간 위의 표시점"},
 "비장":{side:"왼쪽 중심",location:"왼발·왼손의 상복부 바깥쪽 표시 영역"},
 "상부 림프":{side:"양쪽",location:"발등·손등 위쪽과 발가락·손가락 사이"},
 "상부 림프계":{side:"양쪽",location:"발등·손등 위쪽과 발가락·손가락 사이"},
 "상행결장":{side:"오른쪽 중심",location:"오른발·오른손 아래쪽에서 위로 이어지는 결장 경로"},
 "손목":{side:"양쪽",location:"발목·손목에 대응하는 바깥쪽 관절 표시 영역"},
 "시상하부·뇌하수체":{side:"양쪽",location:"엄지발가락·엄지손가락 중앙과 기저부의 표시 영역"},
 "식도":{side:"양쪽",location:"엄지 기저부에서 위 반사 영역으로 이어지는 안쪽 선"},
 "신장":{side:"양쪽",location:"발바닥·손바닥 중앙의 오목한 표시 영역"},
 "신장·부신":{side:"양쪽",location:"발바닥·손바닥 중앙과 그보다 약간 위의 표시 영역"},
 "심장":{side:"왼쪽 중심",location:"왼발·왼손의 앞가슴 반사 영역"},
 "안면신경":{side:"양쪽",location:"발가락·손가락 끝과 옆면의 얼굴 표시 영역"},
 "어깨":{side:"양쪽",location:"새끼발가락·새끼손가락 아래 바깥쪽 관절 영역"},
 "엉덩이":{side:"양쪽",location:"발뒤꿈치·손목 쪽 바깥부분의 골반 표시 영역"},
 "엉덩이·좌골신경":{side:"양쪽",location:"발뒤꿈치 바깥쪽과 발목 둘레의 표시 영역"},
 "요추":{side:"양쪽",location:"발·손 안쪽 척추선의 아래 허리 구간"},
 "위":{side:"왼쪽 중심",location:"왼발·왼손의 횡격막 아래 상복부 영역"},
 "자궁·전립선":{side:"양쪽",location:"발목·손목 안쪽의 생식기 반사 영역"},
 "척추 전체":{side:"양쪽",location:"발·손 안쪽 가장자리를 따라 이어지는 전체 척추선"},
 "췌장":{side:"양쪽",location:"발바닥·손바닥의 위 반사 영역 아래쪽"},
 "태양신경총":{side:"양쪽",location:"발바닥·손바닥 중앙 위쪽, 횡격막선 바로 아래"},
 "팔꿈치":{side:"양쪽",location:"발·손 바깥쪽 중간의 팔꿈치 대응 영역"},
 "폐":{side:"양쪽",location:"발가락·손가락 아래의 넓은 앞가슴 반사 영역"},
 "하행결장":{side:"왼쪽 중심",location:"왼발·왼손 바깥쪽에서 아래로 이어지는 결장 경로"},
 "허리":{side:"양쪽",location:"발·손 안쪽 척추선의 아래쪽 허리 영역"},
 "횡격막":{side:"양쪽",location:"발가락·손가락 아래를 가로지르는 횡격막선"},
 "횡행결장":{side:"양쪽",location:"발바닥·손바닥 중간을 가로지르는 결장 경로"},
 "후두":{side:"양쪽",location:"엄지발가락·엄지손가락 기저부의 목 앞쪽 표시 영역"},
 "흉추":{side:"양쪽",location:"발·손 안쪽 척추선의 중간 등 구간"}
};
const pointNamesEn={
 "S자 결장":"Sigmoid colon","간":"Liver","갑상선":"Thyroid","갑상선·부갑상선":"Thyroid & parathyroid","경추":"Cervical spine","꼬리뼈":"Coccyx","나팔관":"Fallopian tube","난소·고환":"Ovary & testis","내이":"Inner ear","뇌":"Brain","뇌간":"Brainstem","뇌하수체":"Pituitary gland","눈·귀":"Eyes & ears","등 상부":"Upper back","림프":"Lymphatic area","머리":"Head","목":"Neck","무릎·다리":"Knee & leg","방광":"Bladder","부갑상선":"Parathyroid gland","부신":"Adrenal gland","비장":"Spleen","상부 림프":"Upper lymphatic area","상부 림프계":"Upper lymphatic system","상행결장":"Ascending colon","손목":"Wrist","시상하부·뇌하수체":"Hypothalamus & pituitary","식도":"Esophagus","신장":"Kidney","신장·부신":"Kidney & adrenal","심장":"Heart","안면신경":"Facial nerve","어깨":"Shoulder","엉덩이":"Hip","엉덩이·좌골신경":"Hip & sciatic nerve","요추":"Lumbar spine","위":"Stomach","자궁·전립선":"Uterus & prostate","척추 전체":"Entire spine","췌장":"Pancreas","태양신경총":"Solar plexus","팔꿈치":"Elbow","폐":"Lungs","하행결장":"Descending colon","허리":"Lower back","횡격막":"Diaphragm","횡행결장":"Transverse colon","후두":"Larynx","흉추":"Thoracic spine"
};
programs.forEach(p=>{p.footMap=`reflex-split/p${p.page}-feet.webp?v=9`;p.handMap=`reflex-split/p${p.page}-hands.webp?v=9`});
