const fs = require('fs');
const filePath = 'd:/GitHub 0921/healing-app/index.html';
let html = fs.readFileSync(filePath, 'utf8');

const missingDict = {
    "임상 시술 순서 (TREATMENT SEQUENCE)": "TREATMENT SEQUENCE",
    "피부 표면에 수m감(전도성 미스트나 겔 소량)을 유지하면 미세전류의 심부 침투율이 극대화됩니다. 도자 팁을 강하게 비비지 말고, 해부학적 함요처(뼈 경계 오목한 곳)에 펜촉을 가만히 안착시킨 상태에서 전기를 인가합니다.": "Maintaining moisture on the skin surface (conductive mist or small amount of gel) maximizes the deep penetration rate of microcurrents. Do not rub the probe tip strongly; gently seat the pen tip in the anatomical depression (concave bone boundary) while applying electricity.",
    "피부 표면에 수분감(전도성 미스트나 겔 소량)을 유지하면 미세전류의 심부 침투율이 극대화됩니다. 도자 팁을 강하게 비비지 말고, 해부학적 함요처(뼈 경계 오목한 곳)에 펜촉을 가만히 안착시킨 상태에서 전기를 인가합니다.": "Maintaining moisture on the skin surface (conductive mist or small amount of gel) maximizes the deep penetration rate of microcurrents. Do not rub the probe tip strongly; gently seat the pen tip in the anatomical depression (concave bone boundary) while applying electricity.",
    "이 시점에서 깊은 구조·발바닥·측면 또는 환자별 위치를 확정할 수 없어 자동 핀을 표시하지 않습니다.": "At this point, deep structures, plantar, lateral, or patient-specific locations cannot be confirmed, so automatic pins are not displayed.",
    "사용자 Category: 치료 계획 · 환자 오른쪽": "User Category: Treatment Plan · Right Side",
    "해부 설명 출처: 후두신경과 후두동맥 해부 연구 (Shin 외, 2018)": "Anatomy Source: Anatomical study of occipital nerve and artery (Shin et al., 2018)",
    "▶ 교정 전 원문 확인": "▶ View original text before correction",
    "전신 이미지의 표면 영역에 맞춘 임시 표시입니다. 환자의 정확한 치료 위치가 아닙니다.": "This is a temporary mark adjusted to the surface area of the full-body image. It is not the patient's exact treatment location.",
    "환자 프로필": "Patient Profile",
    "치유 레시피": "Clinical Recipe",
    "안전 지침": "Safety Guide",
    "임상 증례": "Clinical Cases",
    "증례 확인자": "Reviewer",
    "증례 미확인": "Unverified Case",
    "실제 치료 기록 증례 (임상 검증)": "Real Treatment Record (Clinically Verified)",
    "교육 목적 예시 증례": "Educational Example Case",
    "원자료·문헌·기록번호가 제공되지 않았습니다.": "Source data, literature, or record number not provided.",
    "증례 링크 확인": "Check Case Link",
    "확인자:": "Reviewer:",
    "증례 기록 / 수정": "Edit / Record Case",
    "타겟 조직": "Target Anatomy",
    "촉진 및 위치": "Palpation & Location",
    "임상적 의의": "Clinical Significance",
    "치료 포인트 추가": "Add Point",
    "치료 플랜": "Treatment Plan",
    "임상 증상 (Clinical Symptoms)": "Clinical Symptoms",
    "신경·근막 병태생리 기전 (Pathology & Mechanism)": "Pathology & Mechanism",
    "핵심 힐링 포인트 (Healing Points)": "Key Healing Points",
    "증례 Case #1": "Case Study #1",
    "증례 Case #2": "Case Study #2",
    "증례 Case #3": "Case Study #3",
    "증례 Case #4": "Case Study #4",
    "증례 Case #5": "Case Study #5",
    "증례 Case #6": "Case Study #6",
    "해당 질환에 대한 안전 지침 데이터가 없습니다.": "No safety guide data available for this condition.",
    "해당 질환에 대한 임상 증례 데이터가 없습니다.": "No clinical case data available for this condition.",
    "임상 증례 데이터는 원자료와 문헌을 분석하여 지속적으로 업데이트됩니다.": "Clinical case data is continuously updated by analyzing raw data and literature."
};

let dictString = '';
for (let key in missingDict) {
    dictString += '    "' + key + '": "' + missingDict[key] + '",\n';
}

html = html.replace('var extDict = {', 'var extDict = {\n' + dictString);
fs.writeFileSync(filePath, html, 'utf8');
console.log('Successfully injected missing keys via Node.js');