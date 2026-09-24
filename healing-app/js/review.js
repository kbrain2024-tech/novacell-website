// Source review applies to anatomical descriptions, never to efficacy or image accuracy.
export const SOURCES = {
  occipital: {title:'후두신경과 후두동맥 해부 연구 (Shin 외, 2018)',url:'https://pubmed.ncbi.nlm.nih.gov/29752841/'},
  scapular: {title:'견갑절흔 신경·혈관의 해부 연구 (Yang 외, 2012)',url:'https://pubmed.ncbi.nlm.nih.gov/21853468/'},
  cluneal: {title:'상·중둔피신경 해부 표지 연구 (Tubbs 외, 2010)',url:'https://pubmed.ncbi.nlm.nih.gov/20809730/'},
  orbital: {title:'안와상절흔·공 위치 변이 연구 (2013)',url:'https://pubmed.ncbi.nlm.nih.gov/23299811/'},
  stellate: {title:'경흉신경절 해부·영상 연구 (2025)',url:'https://pubmed.ncbi.nlm.nih.gov/41300935/'}
};
export const CORRECTIONS = {
 'HP-HN-01': {source:'occipital',nameKo:'대후두신경의 상항선 통과 영역',locationGuide:'외후두융기와 유양돌기를 기준으로 확인하는 후두부 영역입니다. 신경 주행은 개인마다 달라 고정된 2–2.5cm 지점을 보편적 위치로 사용할 수 없습니다.',significance:'해부학적 참고 영역입니다. 문헌의 신경 위치는 NovaCell 치료점이나 치료 효과를 검증한 자료가 아닙니다.'},
 'HP-HN-03': {source:'occipital',locationGuide:'외후두융기–유양돌기 연결선의 외측 구간과 흉쇄유돌근 후연을 참고합니다. 정확한 주행과 분지는 개인별 확인이 필요합니다.'},
 'HP-TN-01': {source:'orbital',nameKo:'안와상절흔·안와상공 영역 (V1)',locationGuide:'안와 위쪽 뼈 테두리의 절흔 또는 공입니다. 형태와 위치에 변이가 있어 눈썹의 일정 비율만으로 확정할 수 없습니다.'},
 'HP-FS-01': {source:'scapular',nameKo:'견갑절흔의 견갑상신경 영역',locationGuide:'견갑골 상연의 견갑절흔과 상횡견갑인대 아래를 지나는 신경입니다. 쇄골과 견갑극이 만나는 V자 홈이라는 기존 설명을 교정합니다. 깊은 구조이므로 피부의 한 점과 동일시할 수 없습니다.'},
 'HP-LDR-02': {source:'cluneal',nameKo:'장골능의 상둔피신경 통과 영역',locationGuide:'장골능을 지나는 여러 분지를 구분해야 합니다. 척추 정중선과 후상장골극은 서로 다른 거리 기준입니다. 기존 PSIS 외측 7–8cm를 모든 분지의 위치로 일반화하지 않습니다.'},
 'HP-SGB-01': {source:'stellate',nameKo:'경흉신경절 주변 구조 참고 (위치 미확정)',locationGuide:'C6 횡돌기 표지는 성상신경절 자체의 위치와 다릅니다. 경흉신경절은 C7–제1늑골 주변의 깊은 구조이며 원본 이미지에서 치료점을 확정할 수 없습니다.',significance:'기존 C6 반사점과 성상신경절의 혼동을 수정했습니다. 이 항목은 치료점이 아닌 해부학적 참고입니다.'},
 'HP-PCS-01': {source:'stellate',nameKo:'C6 주변 구조 참고 (치료점 근거 미확인)',locationGuide:'C6 횡돌기와 경흉신경절을 구분해야 합니다. 원본의 체온조절 중추 반사점이라는 표면 위치·치료 효과는 확인되지 않았습니다.'}
};
// Provisional illustration alignment only. Values are percent of ORIGINAL image pixels.
// Each is explicitly marked as unvalidated and may be repositioned by the clinician.
const BODY = {
 'HP-HN-01':[46,12.8],'HP-HN-02':null,'HP-HN-03':[57,13.5],'HP-HN-04':[47.5,16],
 'HP-TN-01':[46,9],'HP-TN-02':[46,11.8],'HP-TN-03':[46.5,14], 'HP-TN-04':null,
 'HP-FP-01':null,'HP-FP-02':[44.5,12.4],'HP-FP-03':[42.5,10.1],
 'HP-TH-01':[44,14.4],'HP-TH-02':null,
 'HP-TM-01':null,'HP-TM-02':[43.5,13.5],'HP-TM-03':[41.7,11.8],
 'HP-FS-01':[39,20.5],'HP-FS-02':[31.5,24],'HP-FS-03':[32,24.5],
 'HP-RC-01':[30.5,23],'HP-RC-02':[31,22], 'HP-TOS-01':null,'HP-TOS-02':[37.5,23],
 'HP-DSN-01':[41,21],'HP-DSN-02':[43,25.5],
 'HP-LE-01':[25.5,36.8],'HP-LE-02':[25.5,39.5],'HP-ME-01':[31,36.8],'HP-ME-02':[29.5,39],
 'HP-CuT-01':[31,36.8],'HP-CuT-02':[29.5,39.7],
 'HP-CTS-01':[22.5,48.5],'HP-CTS-02':[29,39.5],'HP-CTS-03':[23,51],
 'HP-TF-01':[21,53.5],'HP-DQ-01':[21,48.7],
 'HP-IN-01':[39,31],'HP-IN-02':null,'HP-DSP-01':[47,29],'HP-DSP-02':[42,32],
 'HP-PHN-01':[47,30],'HP-PHN-02':null,'HP-ACS-01':[47.5,25.5],'HP-ACS-02':[50,22.8],
 'HP-LP-01':[47,42],'HP-LP-02':[47,44],'HP-LP-03':[41,43],
 'HP-ALS-01':[39,38],'HP-ALS-02':[40,43], 'HP-LDR-01':[47,42],'HP-LDR-02':[40,43],
 'HP-LSS-01':[47,42],'HP-LSS-02':null,'HP-PS-01':[43,48],'HP-PS-02':[37,50],'HP-PS-03':[44,53],
 'HP-SIJ-01':[46,46],'HP-SIJ-02':[45,49],
 'HP-KOA-01':[45,70.5],'HP-KOA-02':[45,74.5],'HP-PT-01':[41.5,72],'HP-PT-02':[41.5,69.3],
 'HP-CPN-01':[37.5,73],'HP-CPN-02':[39,76], 'HP-AS-01':[38.5,91.5],'HP-AS-02':[38.5,94],
 'HP-PF-01':null,'HP-PF-02':null,'HP-PF-03':[42,94], 'HP-TTS-01':[45,92.5],'HP-TTS-02':null,
 'HP-SGB-01':null,'HP-SGB-02':null,'HP-PCS-01':null,'HP-PCS-02':null
};
export function applyReview(conditions) {
 for(const c of conditions) for(const p of c.healingPoints) {
   p.originalDescription={nameKo:p.nameKo,locationGuide:p.locationGuide,significance:p.significance};
   p.originalPinCoordinates={...p.pinCoordinates};
   p.reviewStatus='위치·치료점 근거 미검증';
   const fix=CORRECTIONS[p.id];
   if(fix){Object.assign(p,fix);p.reviewStatus='해부 설명 일부 교정 · 치료점 미검증';}
   const xy=BODY[p.id];p.mapUnplaced=!xy;
   if(xy) p.pinCoordinates={...p.pinCoordinates,x:xy[0],y:xy[1]};
   p.mapNote=xy?'전신 이미지의 표면 영역에 맞춘 임시 표시입니다. 환자의 정확한 치료 위치가 아닙니다.':'이 시점에서 깊은 구조·발바닥·측면 또는 환자별 위치를 확정할 수 없어 자동 핀을 표시하지 않습니다.';
 }
}
