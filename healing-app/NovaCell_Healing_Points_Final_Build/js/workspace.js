import {ImageStore,validateImage,imageToDataURL,dataURLToImage} from './image-store.js';
import {NovaCellApp} from './app.js';
import {applyReview,SOURCES} from './review.js';
import {ImageStage} from './image-stage.js';
const $=id=>document.getElementById(id);
const esc=v=>String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const KEY='novacell-workspace-v2';
const blank=()=>({version:29,images:{},planName:'기본 작업',custom:[],overrides:{},durations:{},caseSources:{},defaultDuration:600});
const fmt=s=>`${Math.floor(s/60).toString().padStart(2,'0')}:${Math.floor(s%60).toString().padStart(2,'0')}`;
const colorOK=c=>/^#[0-9a-f]{6}$/i.test(c);
const httpURL=u=>{try{const a=new URL(u);return ['https:','http:'].includes(a.protocol)?a.href:'';}catch{return '';}};
const textValue=(v,n=300)=>typeof v==='string'?v.slice(0,n):'';
export function normalizePointInput(v){
 const name=textValue(v?.name,80).trim();if(!name)return {error:'포인트 이름을 입력해 주세요.'};
 const mode=['3d','body','model'].includes(v.mode)?v.mode:'3d',positionEnabled=!!v.positionEnabled,x=Number(v.x),y=Number(v.y);
 if(mode!=='model'&&positionEnabled&&(!Number.isFinite(x)||!Number.isFinite(y)||x<0||x>100||y<0||y>100))return {error:'위치는 0–100% 사이로 입력해 주세요.'};
 return {value:{name,color:colorOK(v.color)?v.color:'#ffb866',size:['small','medium','large'].includes(v.size)?v.size:'small',stroke:[1,2,3,4].includes(Number(v.stroke))?Number(v.stroke):1,group:['treat','observe','tender'].includes(v.group)?v.group:'treat',side:['left','right','both','midline','unspecified'].includes(v.side)?v.side:'unspecified',note:textValue(v.note,500).trim()},mode,position:mode==='model'?undefined:positionEnabled?{x,y}:null};
}
export const pointNameKey=v=>textValue(v,80).trim().replace(/\s+/g,' ').toLocaleLowerCase('ko-KR');
function safePositions(v){
 const out={};if(!v||typeof v!=='object')return out;
 for(const [k,p] of Object.entries(v)){
  if(!/^(body:(anterior|posterior)|detail:(?:assets\/[\w/.-]+|upload-[a-z0-9-]+))$/.test(k))continue;
  const items=Array.isArray(p)?p:p?[p]:[];
  out[k]=items.filter(x=>x&&Number.isFinite(x.x)&&Number.isFinite(x.y)&&x.x>=0&&x.x<=100&&x.y>=0&&x.y<=100).slice(0,20).map(x=>({x:x.x,y:x.y}));
 }return out;
}
function safeModel(v){
 if(!v||typeof v.model!=='string'||!/^(schematic-v1|bodyparts3d-lower-leg-right-v1|bodyparts3d-region-[a-z-]+-v2|obj-[a-f0-9]{64})$/.test(v.model)||!Array.isArray(v.xyz)||v.xyz.length!==3||!v.xyz.every(n=>Number.isFinite(n)&&Math.abs(n)<=2))return null;
 const out={model:v.model,xyz:[...v.xyz]};if(typeof v.structureId==='string'&&/^(FMA\d+|user-model)$/.test(v.structureId))out.structureId=v.structureId;return out;
}
export function validateState(raw,conditions){
 if(!raw||![2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29].includes(raw.version)||!Array.isArray(raw.custom)||raw.custom.length>1000)throw Error('지원하는 v2–v29 포인트 백업 파일이 아닙니다.');
 const s=blank(),ids=new Set(conditions.flatMap(c=>c.healingPoints.map(p=>p.id))),cids=new Set(conditions.map(c=>c.id));
 s.planName=textValue(raw.planName,60)||'가져온 작업';s.defaultDuration=Number.isInteger(raw.defaultDuration)&&raw.defaultDuration>=1&&raw.defaultDuration<=600?raw.defaultDuration:600;
 const meta=(p,keepName=true)=>({size:['small','medium','large'].includes(p.size)?p.size:'small',stroke:[1,2,3,4].includes(p.stroke)?p.stroke:1,name:keepName?textValue(p.name,80):'',color:colorOK(p.color)?p.color:'#ffb866',side:['left','right','both','midline','unspecified'].includes(p.side)?p.side:'unspecified',group:['treat','observe','tender'].includes(p.group)?p.group:'treat',note:textValue(p.note,500),positions:safePositions(p.positions),modelPosition:safeModel(p.modelPosition)});
 const mistakenKneeNames=new Set(['내측 관절간극','위','medial joint gap','above','내측 관절간극 관절포점','거위발건 부착부 복재신경점']),customIds=new Set();
 for(const p of raw.custom){if(!p||!/^user-[a-z0-9-]+$/i.test(p.id)||ids.has(p.id)||customIds.has(p.id)||!cids.has(p.conditionId))throw Error('포인트 식별자 또는 질환 연결을 확인해 주세요.');customIds.add(p.id);if(raw.version<=8&&p.conditionId==='knee-osteoarthritis'&&mistakenKneeNames.has(pointNameKey(p.name)))continue;ids.add(p.id);s.custom.push({id:p.id,conditionId:p.conditionId,...meta(p)});}
 for(const [id,p] of Object.entries(raw.overrides||{})){if(ids.has(id)&&p&&typeof p==='object')s.overrides[id]=meta(p,false);}
 if(raw.version<14){
  const moves=[
   {conditionId:'acute-lumbar-sprain',ids:['HP-ALS-01','HP-ALS-02'],from:'detail:assets/regions/acute-lumbar-sprain-quadratus-lumborum-posterior.webp',to:'detail:assets/regions/lumbar-disc-radiculopathy-posterior.webp'},
   {conditionId:'sacroiliac-joint-pain',ids:['HP-SIJ-01','HP-SIJ-02'],from:'detail:assets/regions/sacroiliac-joint-pelvic-pain-posterior.webp',to:'detail:assets/regions/piriformis-sciatica-posterior.webp'}
  ];
  for(const move of moves){
   const records=[...move.ids.map(id=>s.overrides[id]),...s.custom.filter(p=>p.conditionId===move.conditionId)];
   for(const record of records){const positions=record?.positions;if(positions?.[move.from]){if(!positions[move.to])positions[move.to]=positions[move.from];delete positions[move.from];}}
  }
 }
 if(raw.version<15){
  const from='detail:assets/regions/intercostal-neuralgia.webp',to='detail:assets/regions/postherpetic-thoracic-nerves.webp';
  const records=[...['HP-IN-01','HP-IN-02'].map(id=>s.overrides[id]),...s.custom.filter(p=>p.conditionId==='intercostal-neuralgia')];
  for(const record of records){const positions=record?.positions;if(positions?.[from]){if(!positions[to])positions[to]=positions[from];delete positions[from];}}
 }
 if(raw.version<17){
  const from='detail:assets/autonomic_sympathetic_3d.jpg',to='detail:assets/regions/postpartum-cervical-sacral-posterior.webp';
  const records=[...['HP-PCS-01','HP-PCS-02'].map(id=>s.overrides[id]),...s.custom.filter(p=>p.conditionId==='postpartum-cold-syndrome')];
  for(const record of records){const positions=record?.positions;if(positions?.[from]){if(!positions[to])positions[to]=positions[from];delete positions[from];}}
 }
 if(raw.version<18){
  const from='detail:assets/regions/frozen-shoulder-bilateral.webp',to='detail:assets/regions/frozen-shoulder-biceps-bilateral.webp';
  const records=[...['HP-FS-01','HP-FS-02','HP-FS-03'].map(id=>s.overrides[id]),...s.custom.filter(p=>p.conditionId==='frozen-shoulder')];
  for(const record of records){const positions=record?.positions;if(positions?.[from]){if(!positions[to])positions[to]=positions[from];delete positions[from];}}
 }
 for(const [id,n] of Object.entries(raw.durations||{})){if(ids.has(id)&&Number.isInteger(n)&&n>=1&&n<=600)s.durations[id]=n;}
 for(const c of conditions)for(let i=0;i<(c.clinicalCases||[]).length;i++){const k=c.id+':'+i,p=raw.caseSources?.[k];if(!p)continue;const kind=['unverified','record','example'].includes(p.kind)?p.kind:'unverified';const source=textValue(p.source,500);s.caseSources[k]={kind:kind==='record'&&!source?'unverified':kind,source,url:httpURL(p.url),reviewer:textValue(p.reviewer,80),date:/^\d{4}-\d{2}-\d{2}$/.test(p.date||'')?p.date:''};}
 for(const [cid,pair] of Object.entries(raw.images||{})){if(!cids.has(cid)||!pair||typeof pair!=='object')continue;s.images[cid]={};for(const side of ['outer','inner']){const im=pair[side];if(im&&/^upload-[a-z0-9-]+$/.test(im.id))s.images[cid][side]={id:im.id,name:textValue(im.name,120)};}}
 return s;
}
export class Workspace extends NovaCellApp {
 constructor(){
  super();this.baseConditions=structuredClone(this.conditions);applyReview(this.baseConditions);
  let loadError='',migrationNotice='',defaultNotice='';try{const stored=localStorage.getItem(KEY),raw=stored?JSON.parse(stored):null;this.state=raw?validateState(raw,this.baseConditions):this.makeFreshState();if(raw&&raw.version<29){localStorage.setItem(KEY,JSON.stringify(this.state));migrationNotice='v29로 이전했습니다. 기존 개인 치료점과 백업 자료는 그대로 유지됩니다.';}else if(!raw&&globalThis.__NOVACELL_PUBLIC_PRESET__){localStorage.setItem(KEY,JSON.stringify(this.state));defaultNotice='검토용 기본 치료점 71개와 원 위치 123개를 불러왔습니다. 위치는 반드시 전문가가 다시 확인해 주세요.';}}catch{this.state=this.makeFreshState();loadError='이 브라우저의 저장 데이터를 읽지 못했습니다. 백업 파일이 있다면 가져와 주세요.';}
  this.detailView='original';this.imageStore=new ImageStore();this.imageUrls=new Map();this.detailLoading=false;this.pinFilter='selected';this.colorFilter='all';this.placement=null;this.activePin=null;this.completed=new Set();this.ready=true;
  this.buildTools();this.buildDialogs();
  this.detailStage=new ImageStage(document.querySelector('.anatomy-image-frame'),[this.anatomy3dImage],pos=>this.placeAt(pos));
  this.bodyStage=new ImageStage($('fullbody-image-frame'),[this.fullbodyImgPosterior,this.fullbodyImgAnterior],pos=>this.placeAt(pos));
  this.pinsLayer=this.bodyStage.layer;
  this.viewer={points:[],placing:false,draw(){}};
  this.syncData();this.bindV2();this.setView(this.currentView);this.render();this.openTimerModal(this.getActiveHealingPoint());
  $('plan-name').value=this.state.planName;if(loadError)this.status(loadError,true);else if(migrationNotice)this.status(migrationNotice);else if(defaultNotice)this.status(defaultNotice);this.loadUserImages();
 }
 makeFreshState(){const preset=globalThis.__NOVACELL_PUBLIC_PRESET__;return preset?validateState(preset,this.baseConditions):blank();}
 buildTools(){
  const tools=document.createElement('div');tools.className='workspace-tools';tools.innerHTML=`
   <label>포인트 <select id="pin-filter"><option value="selected">선택점 + 배치된 핵심점</option><option value="all">현재 질환 전체</option><option value="custom">추가점만</option><option value="none">모두 숨김</option></select></label>
   <button id="upload-pair">외측·내측 이미지 등록</button><button id="add-point">＋ 포인트</button><button id="place-point">선택점 원 추가</button><button id="cancel-placement" hidden>위치 지정 취소</button>
   <details><summary>표시 · 작업 관리</summary><div class="extra-tools">
    <label>분류 <select id="group-filter"><option value="all">전체</option><option value="treat">치료 계획</option><option value="observe">관찰</option><option value="tender">압통 기록</option></select></label>
    <label><input id="large-pins" type="checkbox">클릭 영역 표시</label>
    <label>작업명 <input id="plan-name" maxlength="60" size="12" aria-label="익명 작업명"></label>
    <button id="export-data">포인트 백업</button><button id="import-data">백업 가져오기</button><input id="import-file" type="file" accept=".json,application/json" hidden>
    <button id="new-plan">새 작업</button>
    <a class="small-button" href="사용안내.html" target="_blank" rel="noopener">사용 안내</a>
   </div></details>`;
  document.querySelector('.anatomical-toolbar').after(tools);
  const pair=document.createElement('div');pair.id='detail-view-tabs';pair.className='detail-view-tabs';pair.innerHTML='<button id="detail-original" class="active">기본 이미지</button><button id="detail-outer"><img id="thumb-outer" alt="" hidden>외측 <small id="outer-state">미등록</small></button><button id="detail-inner"><img id="thumb-inner" alt="" hidden>내측 <small id="inner-state">미등록</small></button>';tools.after(pair);
  const note=document.createElement('p');note.className='workspace-note';note.id='work-status';note.setAttribute('role','status');tools.after(note);
  const summary=document.createElement('div');summary.className='point-summary';summary.innerHTML='<span id="point-summary-text"></span><button id="remove-pin">선택 원 삭제</button><button id="edit-point">선택점 편집</button><button id="remove-point">추가점 삭제</button>';this.canvasContainer.after(summary);
  const note2=document.createElement('div');note2.className='evidence-note';note2.textContent='좌표는 참고 이미지의 임시 표시입니다. 원본의 치료점·시술 조건·효과는 검증되지 않았습니다. 해부 문헌은 치료 효과의 근거와 구분해 표시합니다.';$('recipe-view-container').prepend(note2);
 }
 buildDialogs(){
  const point=document.createElement('dialog');point.id='point-editor';point.className='editor';point.setAttribute('aria-labelledby','point-editor-title');point.innerHTML=`<form id="point-form" novalidate><h2 id="point-editor-title">포인트 편집</h2><p class="editor-hint" id="point-editor-context"></p>
   <label>이름 <input id="point-name" required maxlength="80"></label><div class="form-grid"><label>색상 <input id="point-color" type="color" value="#ffb866"></label><label>분류 <select id="point-group"><option value="treat">치료 계획</option><option value="observe">관찰</option><option value="tender">압통 기록</option></select></label></div>
   <label>환자 기준 좌우 <select id="point-side"><option value="unspecified">미지정</option><option value="left">왼쪽</option><option value="right">오른쪽</option><option value="both">양쪽</option><option value="midline">정중선</option></select></label>
   <label>메모 <textarea id="point-note" maxlength="500" rows="3" placeholder="증상·위치 확인 메모 (환자 이름·연락처 제외)"></textarea></label>
   <div class="form-grid"><label>원 크기 <select id="point-size"><option value="small">소 (10px)</option><option value="medium">중 (20px)</option><option value="large">대 (32px)</option></select></label><label>테두리 두께 <select id="point-stroke"><option value="1">얇게 (1px)</option><option value="2">보통 (2px)</option><option value="3">굵게 (3px)</option><option value="4">매우 굵게 (4px)</option></select></label></div><div class="circle-preview"><span id="circle-preview-ring"></span><small>원 모양 미리보기 · 저장 후 원을 끌어 위치 조절</small></div>
   <details id="position-fields"><summary>세부 좌표 (선택 사항)</summary><div class="form-grid"><label>가로 위치 (%) <input id="point-x" type="number" min="0" max="100" step="0.1"></label><label>세로 위치 (%) <input id="point-y" type="number" min="0" max="100" step="0.1"></label></div><label class="check-label"><input id="point-position-enabled" type="checkbox">이 화면에 원 만들기</label></details>
   <p class="editor-hint">위치는 현재 이미지에만 저장됩니다. 부위별 이미지·전신 앞/뒤·3D 모델 사이에 자동 복제하지 않습니다. 추가점과 직접 수정한 위치는 사용자 기록으로 표시됩니다. 이름은 핵심 포인트와 달라도 저장할 수 있습니다.</p><p class="error" id="point-error" role="alert"></p><div class="editor-actions"><button type="button" id="point-cancel">취소</button><button type="submit" id="point-save" class="primary">저장</button></div></form>`;document.body.append(point);
  this.buildImageDialog();
  const cs=document.createElement('dialog');cs.id='case-editor';cs.className='editor';cs.setAttribute('aria-labelledby','case-editor-title');cs.innerHTML=`<form id="case-form"><h2 id="case-editor-title">증례 출처 기록</h2><p class="editor-hint">원본 증례의 진위는 확인되지 않았습니다. 입력 내용은 사용자가 제공한 출처이며 앱의 독립 검증을 뜻하지 않습니다.</p><label>자료 구분 <select id="case-kind"><option value="unverified">출처 미확인</option><option value="record">실제 기록 · 사용자 출처 제공</option><option value="example">교육용 예시 · 사용자 분류</option></select></label><label>출처 / 익명 기록번호 <textarea id="case-source" maxlength="500" rows="3"></textarea></label><label>참고 링크 (선택) <input id="case-url" type="url" placeholder="https://"></label><div class="form-grid"><label>확인자 <input id="case-reviewer" maxlength="80"></label><label>확인일 <input id="case-date" type="date"></label></div><p class="error" id="case-error" role="alert"></p><div class="editor-actions"><button type="button" id="case-cancel">취소</button><button type="submit" class="primary">출처 저장</button></div></form>`;document.body.append(cs);
 }
 bindV2(){
  this.bindImageTools();
  for(const id of ['point-color','point-size','point-stroke'])$(id).addEventListener('input',()=>this.previewPointStyle());
  $('pin-filter').onchange=e=>{this.pinFilter=e.target.value;this.renderHealingPins();};$('group-filter').onchange=e=>{this.colorFilter=e.target.value;this.renderHealingPins();};$('large-pins').onchange=e=>document.body.classList.toggle('pin-hit-area',e.target.checked);
  $('add-point').onclick=()=>this.editPoint(null);$('edit-point').onclick=()=>this.editPoint(this.getActiveHealingPoint());$('place-point').onclick=()=>this.beginPlacement();$('cancel-placement').onclick=()=>this.cancelPlacement();
  $('point-cancel').onclick=()=>$('point-editor').close();$('point-form').addEventListener('keydown',e=>{if(e.isComposing&&e.key==='Enter')e.preventDefault();});$('point-form').onsubmit=e=>{e.preventDefault();try{this.savePoint();}catch(err){$('point-error').textContent='저장 중 문제가 생겼습니다: '+err.message;}};
  $('remove-pin').onclick=()=>this.removeSelectedPin();$('remove-point').onclick=()=>this.removePoint();
  $('duration-apply').onclick=()=>this.applyDuration();$('duration-ten').onclick=()=>{$('duration-unit').value='60';$('duration-value').value='10';this.applyDuration();};
  $('duration-unit').onchange=()=>{const unit=Number($('duration-unit').value);$('duration-value').max=String(600/unit);$('duration-value').step=unit===60?'0.1':'1';$('duration-value').min=unit===60?'0.1':'1';$('duration-value').value=unit===60?String(Math.max(.1,Math.round(this.timerTotalSeconds/6)/10)):String(this.timerTotalSeconds);};
  $('plan-name').onchange=e=>{this.state.planName=e.target.value.trim().slice(0,60)||'기본 작업';this.persist();};
  $('export-data').onclick=()=>this.exportData();$('import-data').onclick=()=>$('import-file').click();$('import-file').onchange=e=>this.importData(e.target.files[0]);
  $('new-plan').onclick=()=>{if(!confirm('현재 사용자 변경을 지우고 기본 공개 치료점으로 되돌리시겠습니까? 필요한 포인트는 먼저 백업해 주세요.'))return;this.pauseTimer();this.state=this.makeFreshState();this.detailView='original';this.activePin=null;this.completed.clear();this.persist();this.syncData();this.selectedPointId=this.currentCondition.healingPoints[0].id;this.render();this.openTimerModal();$('plan-name').value=this.state.planName;};
  $('case-cancel').onclick=()=>$('case-editor').close();$('case-form').onsubmit=e=>{e.preventDefault();this.saveCase();};
  document.addEventListener('keydown',e=>{if(e.key==='Escape'&&this.placement)this.cancelPlacement();});
  document.addEventListener('visibilitychange',()=>{if(!document.hidden&&this.isTimerRunning)this.tick();});
  document.querySelectorAll('.mobile-tab-btn').forEach(b=>b.addEventListener('click',()=>requestAnimationFrame(()=>{this.detailStage.fit();this.bodyStage.fit();this.viewer.draw();})));
 }
 persist(){try{localStorage.setItem(KEY,JSON.stringify(this.state));return true;}catch{this.status('브라우저에 저장하지 못했습니다. 작업을 잃지 않도록 포인트 백업을 내려받아 주세요.',true);return false;}}
 status(message,error=false){if(!$('work-status'))return;$('work-status').textContent=message;$('work-status').classList.toggle('error',error);}
 syncData(){
  const currentId=this.currentCondition?.id;this.conditions=structuredClone(this.baseConditions);
  for(const c of this.conditions){for(const raw of this.state.custom.filter(p=>p.conditionId===c.id)){c.healingPoints.push({id:raw.id,code:'추가',nameKo:raw.name||'사용자 추가점',nameEn:'Custom point',targetAnatomy:'사용자 지정 · 해부 검증 없음',locationGuide:raw.note||'사용자가 추가한 위치입니다.',significance:'환자별 관찰 기록. 검증된 치료점이 아닙니다.',pinCoordinates:{view:'posterior',x:50,y:50},mapUnplaced:true,custom:true,reviewStatus:'사용자 추가 · 미검증'});}for(const p of c.healingPoints){const m=this.meta(p);if(p.custom&&m?.name)p.nameKo=m.name;p.userMeta=m;}}
  this.currentCondition=this.conditions.find(c=>c.id===currentId)||this.conditions[0];
 }
 meta(p){return this.state?.overrides[p.id]||this.state?.custom.find(x=>x.id===p.id)||null;}
 detailKey(){const entry=this.state?.images?.[this.currentCondition.id]?.[this.detailView];return this.detailView==='original'?'detail:'+this.currentCondition.illustrationImage:entry?'detail:'+entry.id:null;}
 contextKey(){return this.displayMode==='body'?'body:'+this.currentView:this.detailKey();}
 positionsFor(p,key=this.contextKey()){
  const m=this.meta(p);if(m?.positions&&Object.hasOwn(m.positions,key)){const raw=m.positions[key],items=Array.isArray(raw)?raw:raw?[raw]:[];return items.map(x=>({...x,user:true}));}
  if(key==='body:'+p.pinCoordinates.view&&!p.mapUnplaced&&!p.custom)return [{x:p.pinCoordinates.x,y:p.pinCoordinates.y,user:false}];return [];
 }
 position(p,key=this.contextKey()){return this.positionsFor(p,key)[0]||null;}
 visible(p,key=this.contextKey()){
  if(this.pinFilter==='none')return false;if(this.pinFilter==='custom'&&!p.custom)return false;
  const placed=key==='model'?!!this.meta(p)?.modelPosition:this.positionsFor(p,key).some(x=>x.user);
  if(this.pinFilter==='selected'&&p.id!==this.selectedPointId&&!p.custom&&!placed)return false;
  if(this.colorFilter!=='all'&&(this.meta(p)?.group||'treat')!==this.colorFilter)return false;return true;
 }
 activeStage(){return this.displayMode==='body'?this.bodyStage:this.detailStage;}
 adjustZoom(f){const st=this.activeStage();if(!st)return;if(st===this.viewer){st.zoom=Math.max(.5,Math.min(5,st.zoom*f));st.draw();}else st.zoom(f);}
 setDisplayMode(mode){
  if(!this.ready)return super.setDisplayMode(mode);
  mode='3d';this.cancelPlacement();this.activePin=null;this.displayMode=mode;this.modeBtn3d.classList.add('active');this.modeBtnBody.classList.remove('active');
  this.anatomy3dWrapper.style.display='flex';this.fullbody3dWrapper.style.display='none';this.bodyViewToggle.style.display='none';
  this.modeBtn3d.setAttribute('aria-pressed','true');this.modeBtnBody.setAttribute('aria-pressed','false');
  $('detail-view-tabs').hidden=false;$('place-point').textContent='선택점 원 추가';this.renderHealingPins();requestAnimationFrame(()=>this.detailStage?.fit());this.updateSummary();
 }
 setView(view){super.setView(view);if(this.ready){this.cancelPlacement();this.activePin=null;this.fullbodyViewIndicator.textContent=view==='anterior'?'정면 · 화면 왼쪽은 환자 오른쪽':'후면 · 화면 왼쪽은 환자 왼쪽';this.bodyStage?.reset();this.renderHealingPins();}}
 selectCondition(c){if(this.ready){this.detailView='original';this.pauseTimer();this.cancelPlacement();this.activePin=null;this.completed.clear();}super.selectCondition(c);if(this.ready){this.detailStage.reset();this.openTimerModal();this.status('질환을 변경했습니다. 포인트 위치를 확인해 주세요.');}}
 selectHealingPoint(p){
  if(!this.ready)return super.selectHealingPoint(p);
  this.pauseTimer();if(this.selectedPointId!==p.id)this.activePin=null;this.selectedPointId=p.id;
  // Respect manually placed points in the current image. Never jump a custom point to an invented side.
  if(this.displayMode==='body'&&!this.position(p)){
   const other=this.currentView==='anterior'?'posterior':'anterior';if(this.position(p,'body:'+other))this.setView(other);
  }
  this.healingPointsContainer.querySelectorAll('.hp-detail-card').forEach(el=>{const active=el.id===`hp-card-${p.id}`;el.classList.toggle('active',active);el.setAttribute('aria-pressed',String(active));});
  this.renderHealingPins();this.updateActivePointBar();this.openTimerModal(p);this.updateSummary();
 }
 renderCategories(){super.renderCategories();this.categoryBar.querySelectorAll('button').forEach(b=>b.setAttribute('aria-pressed',String(b.classList.contains('active'))));}
 renderConditionsList(){super.renderConditionsList();this.conditionsList.querySelectorAll('.condition-item-card').forEach(card=>{card.tabIndex=0;card.setAttribute('role','button');card.setAttribute('aria-pressed',String(card.classList.contains('active')));card.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();card.click();const active=this.conditionsList.querySelector('.active');active?.focus();}});});}
 renderCurrentCondition(){
  super.renderCurrentCondition();if(!this.ready)return;
  const protocolNote=document.createElement('div');protocolNote.className='evidence-note';protocolNote.textContent='원본 프로토콜 · 기기 사용설명서 및 치료 근거 대조 전. 타이머 설정값과 원본의 권장 시간은 별개입니다.';this.protocolCard.prepend(protocolNote);
  this.refreshDetailImage();
  this.healingPointsContainer.querySelectorAll('.hp-detail-card').forEach((card,i)=>{
   const p=this.currentCondition.healingPoints[i];card.tabIndex=0;card.setAttribute('role','group');card.setAttribute('aria-label',p.nameKo+' · Enter로 선택');card.setAttribute('aria-pressed',String(p.id===this.selectedPointId));
   card.addEventListener('keydown',e=>{if(e.target===card&&(e.key==='Enter'||e.key===' ')){e.preventDefault();this.selectHealingPoint(p);}});
   const rev=document.createElement('div');rev.className='review-card';rev.addEventListener('click',e=>e.stopPropagation());
   const m=this.meta(p),source=p.source?SOURCES[p.source]:null;
   rev.innerHTML=`<span class="review-tag">${esc(p.reviewStatus)}</span><div>${esc(p.mapNote||'추가 위치는 현재 작업의 사용자 기록입니다.')}</div>${m?`<div>사용자 분류: ${esc(this.groupName(m.group))} · ${esc(this.sideName(m.side))}</div><div>${esc(m.note)}</div>`:''}${source?`<a href="${source.url}" target="_blank" rel="noopener">해부 설명 출처: ${esc(source.title)}</a>`:''}${p.originalDescription?`<details><summary>교정 전 원문 확인</summary><div>${esc(p.originalDescription.nameKo)}</div><div>${esc(p.originalDescription.locationGuide)}</div></details>`:''}`;
   card.append(rev);
  });
  this.detailStage?.fit();this.updateSummary();
 }
 renderClinicalCases(cond){
  super.renderClinicalCases(cond);if(!this.ready)return;
  this.casesListContainer.querySelectorAll('.case-study-card').forEach((card,i)=>{
   const source=this.state.caseSources[cond.id+':'+i];const div=document.createElement('div');div.className='case-source';const labels={unverified:'출처 미확인',record:'실제 기록 · 사용자 출처 제공 (독립 검증 전)',example:'교육용 예시 · 사용자 분류'};
   div.innerHTML=`<strong>${labels[source?.kind||'unverified']}</strong><div>${esc(source?.source||'원자료·문헌·기록번호가 제공되지 않았습니다.')}</div>${source?.url?`<a target="_blank" rel="noopener" href="${esc(source.url)}">출처 링크 열기</a>`:''}<div>${source?.reviewer?'확인자: '+esc(source.reviewer):''} ${esc(source?.date||'')}</div>`;
   const b=document.createElement('button');b.className='small-button';b.textContent='출처 기록 / 수정';b.onclick=()=>this.editCase(i);div.append(b);card.prepend(div);
  });
 }
 setRightPanelSubnav(tab){super.setRightPanelSubnav(tab);for(const t of ['recipe','cases','safety'])$('subnav-btn-'+t)?.setAttribute('aria-pressed',String(tab===t));}
 renderHealingPins(){
  if(!this.ready||!this.detailStage||!this.bodyStage)return super.renderHealingPins();
  const fill=(stage,key)=>{stage.layer.replaceChildren();if(!key||(stage===this.detailStage&&this.detailLoading))return;for(const p of this.currentCondition.healingPoints){if(!this.visible(p,key))continue;const positions=this.positionsFor(p,key);positions.forEach((pos,index)=>{const pin=document.createElement('button'),isCurrent=this.activePin?.id===p.id&&this.activePin?.key===key&&this.activePin?.index===index;pin.className='precise-pin'+(p.id===this.selectedPointId?' active':'')+(isCurrent?' current-position':'');pin.style.left=pos.x+'%';pin.style.top=pos.y+'%';pin.style.setProperty('--pin-color',this.meta(p)?.color||(pos.user?'#ffb866':'#72d7e8'));pin.setAttribute('aria-label',`${p.code} ${p.nameKo} · 원 ${index+1} ${pos.user?'사용자 지정 위치':'임시 참고 위치'}`);pin.setAttribute('aria-pressed',String(isCurrent));pin.dataset.pointId=p.id;pin.dataset.positionIndex=String(index);const style=this.pointStyle(p);pin.style.setProperty('--point-diameter',style.diameter+'px');pin.style.setProperty('--point-stroke',style.stroke+'px');this.bindPinDrag(pin,p,stage,key,index,pos);const tip=document.createElement('span');tip.className='pin-tip';tip.textContent=`${p.code} ${p.nameKo} · 원 ${index+1}`;pin.append(tip);pin.onclick=e=>{e.stopPropagation();if(pin.skipClick){pin.skipClick=false;return;}this.selectHealingPoint(p);this.activePin={id:p.id,key,index};this.renderHealingPins();};stage.layer.append(pin);});}};
  fill(this.detailStage,this.detailKey());fill(this.bodyStage,'body:'+this.currentView);
  if(this.viewer){this.viewer.points=this.currentCondition.healingPoints.filter(p=>this.visible(p,'model')&&this.meta(p)?.modelPosition).map(p=>({...this.meta(p).modelPosition,id:p.id,color:this.meta(p).color,diameter:this.pointStyle(p).diameter,stroke:this.pointStyle(p).stroke,selected:p.id===this.selectedPointId}));this.viewer.draw();}
  this.updateSummary();
 }
 updateActivePointBar(){super.updateActivePointBar();if(this.ready)this.updateSummary();}
 updateSummary(){if(!$('point-summary-text')||!this.ready)return;const p=this.getActiveHealingPoint();if(!p)return;const count=this.displayMode==='model'?(this.meta(p)?.modelPosition?.model===this.viewer?.modelKey?1:0):this.positionsFor(p).filter(x=>x.user).length,current=this.activePin?.id===p.id&&this.activePin?.key===this.contextKey()?this.activePin.index+1:null;$('point-summary-text').textContent=`${p.custom?'추가점':'기본점'} · 현재 화면 원 ${count}개${current?` · 선택 원 ${current}번`:''} · ${this.sideName(this.meta(p)?.side||'unspecified')}`;$('remove-pin').disabled=this.displayMode==='model'||!current;$('remove-point').disabled=!p.custom;}
 groupName(k){return {treat:'치료 계획',observe:'관찰',tender:'압통 기록'}[k]||'치료 계획';}
 sideName(k){return {left:'환자 왼쪽',right:'환자 오른쪽',both:'양쪽',midline:'정중선',unspecified:'좌우 미지정'}[k]||'좌우 미지정';}
 beginPlacement(){if(this.displayMode==='3d'&&!this.detailAvailable()){this.status('이 방향의 이미지를 먼저 등록해 주세요.',true);return;}const p=this.getActiveHealingPoint();if(!p)return;this.placement={id:p.id,key:this.contextKey(),mode:this.displayMode};for(const s of [this.detailStage,this.bodyStage,this.viewer])s.placing=true;this.detailStage.frame.classList.add('placing');this.bodyStage.frame.classList.add('placing');$('cancel-placement').hidden=false;this.viewer.draw();this.status(this.displayMode==='model'?'선택점의 3D 표면 위치를 클릭하세요. Esc 취소.':`${p.code} 원 추가: 왼쪽 또는 오른쪽의 새 위치를 클릭하세요. 기존 원은 그대로 유지됩니다. Esc 취소.`);this.activeStage()?.canvas?.focus();}
 cancelPlacement(){this.placement=null;for(const s of [this.detailStage,this.bodyStage,this.viewer])if(s)s.placing=false;this.detailStage?.frame.classList.remove('placing');this.bodyStage?.frame.classList.remove('placing');if($('cancel-placement'))$('cancel-placement').hidden=true;this.viewer?.draw();}
 placeAt(pos){if(!this.placement)return;const placement={...this.placement};const p=this.currentCondition.healingPoints.find(p=>p.id===placement.id);if(!p)return;const m=this.editableMeta(p);let number=1;if(placement.mode==='model')m.modelPosition=pos;else if(placement.key){const list=this.storedPositions(m,placement.key);if(list.length>=20){this.cancelPlacement();this.status('한 포인트에는 화면별로 원을 최대 20개까지 만들 수 있습니다.',true);return;}list.push({x:Math.round(pos.x*10)/10,y:Math.round(pos.y*10)/10});m.positions[placement.key]=list;number=list.length;if(number>1&&m.side==='unspecified')m.side='both';this.activePin={id:placement.id,key:placement.key,index:number-1};}this.state.overrides[placement.id]=m;this.cancelPlacement();const saved=this.persist();this.syncData();this.renderCurrentCondition();if(saved)this.status(`${p.code} ${p.nameKo}의 ${number}번 원을 추가했습니다. 기존 원과 새 원은 각각 따로 이동할 수 있습니다.`);}
 commitModelPosition(id,pos){const p=this.currentCondition.healingPoints.find(p=>p.id===id);if(!p)return;const m=this.editableMeta(p);m.modelPosition=pos;this.state.overrides[id]=m;const saved=this.persist();this.syncData();this.renderHealingPins();if(saved)this.status('3D 표면의 원 위치를 저장했습니다.');}
 pointStyle(p){const m=this.meta(p);return {diameter:({small:10,medium:20,large:32})[m?.size]||10,stroke:[1,2,3,4].includes(m?.stroke)?m.stroke:1};}
 editableMeta(p){return structuredClone(this.meta(p)||{name:p.nameKo,color:p.custom?'#ffb866':'#72d7e8',group:'treat',side:'unspecified',note:'',size:'small',stroke:1,positions:{},modelPosition:null});}
 storedPositions(m,key){const raw=m?.positions?.[key];return (Array.isArray(raw)?raw:raw?[raw]:[]).map(x=>({x:x.x,y:x.y}));}
 editPoint(p){if(this.displayMode==='3d'&&!this.detailAvailable()){this.status('외측 또는 내측 이미지를 먼저 등록해 주세요.',true);this.openImageDialog();return;}if(!p&&this.displayMode!=='model')this.activeStage()?.reset();this.editingPoint=p?.id||null;this.editContext={key:this.contextKey(),mode:this.displayMode,conditionId:this.currentCondition.id};const m=p?this.editableMeta(p):{name:'',color:'#ffb866',group:'treat',side:'unspecified',note:''},list=p?this.positionsFor(p):[],active=this.activePin?.id===p?.id&&this.activePin?.key===this.contextKey()?this.activePin.index:0,pos=list[active]||list[0]||null;$('point-name').value=p&&!p.custom?p.nameKo:m.name;$('point-name').readOnly=!!p&&!p.custom;$('point-name').title=p&&!p.custom?'핵심 포인트의 공식 이름은 변경할 수 없습니다.':'';$('point-color').value=m.color;$('point-group').value=m.group;$('point-side').value=m.side;$('point-note').value=m.note;const center=this.activeStage()?.visibleCenter?.()||{x:50,y:50};$('point-x').value=pos?.x??center.x;$('point-y').value=pos?.y??center.y;$('point-position-enabled').checked=!p||!!pos;$('point-size').value=m.size||'small';$('point-stroke').value=String(m.stroke||1);$('position-fields').open=false;this.previewPointStyle();$('position-fields').hidden=this.displayMode==='model';$('point-editor-title').textContent=p?'선택 포인트 편집':'새 포인트 추가';$('point-editor-context').textContent=this.currentCondition.titleKo+' · '+(p&&!p.custom?'핵심 포인트 공식 이름 고정 · ':'')+(this.displayMode==='model'?'3D 표면 위치는 저장 후 지정하세요.':this.displayMode==='body'?'전신 '+(this.currentView==='anterior'?'정면':'후면'):'부위별 이미지');$('point-error').textContent='';$('point-editor').showModal();}
 savePoint(){
  if(!this.editContext||!this.currentCondition){$('point-error').textContent='편집할 포인트를 다시 선택해 주세요.';return;}
  const draft=normalizePointInput({name:$('point-name').value,color:$('point-color').value,size:$('point-size').value,stroke:$('point-stroke').value,group:$('point-group').value,side:$('point-side').value,note:$('point-note').value,mode:this.editContext.mode,positionEnabled:$('point-position-enabled').checked,x:$('point-x').value,y:$('point-y').value});if(draft.error){$('point-error').textContent=draft.error;if(!$('point-name').value.trim())$('point-name').focus();return;}
  if(!this.editingPoint){const duplicate=this.currentCondition.healingPoints.find(x=>pointNameKey(x.nameKo)===pointNameKey(draft.value.name));if(duplicate){$('point-error').textContent=`같은 이름의 ${duplicate.code} 핵심 포인트가 이미 있습니다. 새 카드를 만들 필요가 없습니다. 취소 후 ${duplicate.code} 카드를 선택하고 ‘선택점 원 추가’를 눌러 왼쪽과 오른쪽 원을 각각 배치해 주세요.`;return;}}
  const p=this.currentCondition.healingPoints.find(p=>p.id===this.editingPoint),m=p?this.editableMeta(p):{positions:{},modelPosition:null};if(!m.positions||typeof m.positions!=='object')m.positions={};
  if(p){const {name,...settings}=draft.value;Object.assign(m,settings);if(p.custom)m.name=name;else delete m.name;}else Object.assign(m,draft.value);if(draft.mode!=='model'&&(!p||$('position-fields').open)){const list=this.storedPositions(m,this.editContext.key),active=this.activePin?.id===p?.id&&this.activePin?.key===this.editContext.key?this.activePin.index:0;if(draft.position){if(list.length)list[Math.min(active,list.length-1)]=draft.position;else list.push(draft.position);}else if(list.length)list.splice(Math.min(active,list.length-1),1);m.positions[this.editContext.key]=list;}
  const before=structuredClone(this.state);let id=p?.id;if(id)this.state.overrides[id]=m;else{id='user-'+crypto.randomUUID();this.state.custom.push({id,conditionId:this.editContext.conditionId,...m});}
  this.pauseTimer();if(!this.persist()){this.state=before;$('point-error').textContent='브라우저 저장에 실패했습니다. 포인트 백업 후 다시 시도해 주세요.';return;}
  this.pinFilter='selected';$('pin-filter').value='selected';this.colorFilter='all';$('group-filter').value='all';$('point-editor').close();this.syncData();this.selectedPointId=id;this.renderConditionsList();this.renderCurrentCondition();this.openTimerModal();this.renderHealingPins();this.status(p?'선택 포인트의 이름과 설정을 저장했습니다.':'새 포인트를 저장했습니다. 원을 누른 채 끌어 치료 위치에 놓으세요.');
 }
 removePoint(){const p=this.getActiveHealingPoint();if(!p?.custom)return;if(!confirm('선택한 추가 포인트를 삭제하시겠습니까?'))return;this.pauseTimer();this.state.custom=this.state.custom.filter(x=>x.id!==p.id);delete this.state.overrides[p.id];delete this.state.durations[p.id];this.persist();this.syncData();this.selectedPointId=this.currentCondition.healingPoints[0].id;this.renderConditionsList();this.renderCurrentCondition();this.openTimerModal();}
 removeSelectedPin(){const p=this.getActiveHealingPoint(),active=this.activePin,key=this.contextKey();if(!p||!active||active.id!==p.id||active.key!==key||this.displayMode==='model')return;const m=this.editableMeta(p),list=this.storedPositions(m,key);if(active.index<0||active.index>=list.length)return;if(!confirm(`${p.code}의 ${active.index+1}번 원만 삭제하시겠습니까? 같은 포인트의 다른 원은 유지됩니다.`))return;list.splice(active.index,1);m.positions[key]=list;this.state.overrides[p.id]=m;this.activePin=null;const saved=this.persist();this.syncData();this.renderCurrentCondition();if(saved)this.status(`${p.code}에서 선택한 원 1개를 삭제했습니다. 다른 원은 그대로 유지됩니다.`);}
 // Timer uses an absolute deadline; throttled background callbacks do not extend duration.
 openTimerModal(hp){if(!this.ready)return;const p=hp||this.getActiveHealingPoint();if(!p)return;this.pauseTimer();this.timerTotalSeconds=this.state.durations[p.id]||this.state.defaultDuration;this.timerSeconds=this.timerTotalSeconds;this.timerHpCode.textContent=p.code+' · '+(this.currentCondition.healingPoints.findIndex(x=>x.id===p.id)+1)+' / '+this.currentCondition.healingPoints.length;this.timerHpTitle.textContent=p.nameKo;this.timerNextPointBtn.disabled=false;this.timerNextPointBtn.textContent=this.isLastPoint()?'순서 완료':'다음 포인트';this.setDurationInputs();this.updateTimerDisplay();this.timerStatus('대기 · 기본 10분은 설정값이며 치료 권장 시간이 아닙니다.');}
 closeTimerModal(){this.pauseTimer();}
 isLastPoint(){return this.currentCondition.healingPoints.at(-1)?.id===this.selectedPointId;}
 setDurationInputs(){const whole=this.timerTotalSeconds%60===0;$('duration-unit').value=whole?'60':'1';$('duration-value').value=String(whole?this.timerTotalSeconds/60:this.timerTotalSeconds);$('duration-value').max=whole?'10':'600';$('duration-value').min='1';$('duration-value').step='1';}
 applyDuration(){const v=Number($('duration-value').value),seconds=Math.round(v*Number($('duration-unit').value));if(!Number.isFinite(v)||seconds<1||seconds>600){this.timerStatus('시간은 1초부터 10분 사이로 설정해 주세요.');return;}this.pauseTimer();this.timerTotalSeconds=seconds;this.timerSeconds=seconds;this.state.defaultDuration=seconds;this.state.durations[this.selectedPointId]=seconds;const saved=this.persist();this.timerNextPointBtn.disabled=false;this.timerNextPointBtn.textContent=this.isLastPoint()?'순서 완료':'다음 포인트';this.updateTimerDisplay();this.timerStatus(saved?`${fmt(seconds)} 설정을 저장했습니다. 시작을 누르면 진행합니다.`:'시간을 적용했지만 브라우저 저장에 실패했습니다. 포인트 백업을 이용해 주세요.');}
 updateTimerDisplay(){if(!this.ready)return;this.timerDisplay.textContent=fmt(this.timerSeconds);const elapsed=this.timerTotalSeconds-this.timerSeconds;$('timer-progress-fill').style.width=(elapsed/this.timerTotalSeconds*100)+'%';$('timer-progress').setAttribute('aria-valuemax',this.timerTotalSeconds);$('timer-progress').setAttribute('aria-valuenow',elapsed);$('timer-progress').setAttribute('aria-valuetext',`남은 시간 ${fmt(this.timerSeconds)}`);$('timer-mid-scale').textContent=fmt(Math.round(this.timerTotalSeconds/2));$('timer-max-scale').textContent=fmt(this.timerTotalSeconds);}
 timerStatus(msg,complete=false){if(!$('timer-status'))return;$('timer-status').textContent=msg;$('timer-status').classList.toggle('complete',complete);}
 startTimer(){if(!this.ready||this.isTimerRunning)return;if(this.timerSeconds<=0)this.timerSeconds=this.timerTotalSeconds;this.deadline=Date.now()+this.timerSeconds*1000;this.isTimerRunning=true;this.timerToggleBtn.textContent='일시 정지';this.timerToggleBtn.classList.remove('primary');this.timerNextPointBtn.disabled=false;this.timerNextPointBtn.textContent=this.isLastPoint()?'순서 완료':'다음 포인트';this.timerStatus('시간 측정 중 · 이 앱은 치료기기를 제어하지 않습니다.');this.timerInterval=setInterval(()=>this.tick(),200);this.updateTimerDisplay();}
 tick(){if(!this.isTimerRunning)return;this.timerSeconds=Math.max(0,Math.ceil((this.deadline-Date.now())/1000));this.updateTimerDisplay();if(this.timerSeconds===0){this.pauseTimer();this.onTimerComplete();}}
 pauseTimer(){if(this.ready&&this.isTimerRunning)this.timerSeconds=Math.max(0,Math.ceil((this.deadline-Date.now())/1000));this.isTimerRunning=false;clearInterval(this.timerInterval);this.timerInterval=null;if(this.timerToggleBtn){this.timerToggleBtn.textContent='시작';this.timerToggleBtn.classList.add('primary');}if(this.ready)this.updateTimerDisplay();}
 resetTimer(){this.pauseTimer();this.timerSeconds=this.timerTotalSeconds;this.timerNextPointBtn.disabled=false;this.timerNextPointBtn.textContent=this.isLastPoint()?'순서 완료':'다음 포인트';this.completed?.delete(this.selectedPointId);this.updateTimerDisplay();this.timerStatus('초기화했습니다. 시작을 누르면 진행합니다.');}
 toggleTimer(){if(this.isTimerRunning){this.pauseTimer();this.timerStatus('일시 정지 · 시작을 누르면 이어집니다.');}else this.startTimer();}
 onTimerComplete(){this.completed.add(this.selectedPointId);if(this.isLastPoint()){this.timerStatus('✓ 마지막 포인트 타이머 완료 · 순서 종료',true);this.timerNextPointBtn.textContent='완료됨';this.timerNextPointBtn.disabled=true;}else this.timerStatus('✓ 포인트 타이머 완료 · 다음 포인트를 선택해 주세요.',true);}
 moveToNextPoint(){this.pauseTimer();if(this.isLastPoint()){this.timerStatus('✓ 포인트 순서 종료 · 처음으로 돌아가지 않습니다.',true);this.timerNextPointBtn.textContent='완료됨';this.timerNextPointBtn.disabled=true;return;}const i=this.currentCondition.healingPoints.findIndex(p=>p.id===this.selectedPointId);this.selectHealingPoint(this.currentCondition.healingPoints[i+1]);this.timerStatus('다음 포인트 대기 · 위치를 확인하고 시작을 눌러 주세요.');}
 editCase(i){this.editCaseKey=this.currentCondition.id+':'+i;const s=this.state.caseSources[this.editCaseKey]||{};for(const [id,key] of [['case-kind','kind'],['case-source','source'],['case-url','url'],['case-reviewer','reviewer'],['case-date','date']])$(id).value=s[key]||(key==='kind'?'unverified':'');$('case-error').textContent='';$('case-editor').showModal();}
 saveCase(){const kind=$('case-kind').value,source=$('case-source').value.trim(),url=$('case-url').value.trim();if(kind==='record'&&!source){$('case-error').textContent='실제 기록으로 표시하려면 출처나 익명 기록번호를 입력해 주세요.';return;}if(url&&!httpURL(url)){$('case-error').textContent='http 또는 https 주소를 입력해 주세요.';return;}this.state.caseSources[this.editCaseKey]={kind,source,url:httpURL(url),reviewer:$('case-reviewer').value.trim(),date:$('case-date').value};this.persist();this.renderClinicalCases(this.currentCondition);$('case-editor').close();}
 previewPointStyle(){const diameter=({small:10,medium:20,large:32})[$('point-size').value]||10;const ring=$('circle-preview-ring');ring.style.width=diameter+'px';ring.style.height=diameter+'px';ring.style.border=`${$('point-stroke').value||1}px solid ${$('point-color').value}`;}
 bindPinDrag(pin,p,stage,key,index,initialPos){
  let drag=null;
  const restore=()=>{if(!drag)return;pin.style.left=drag.original.x+'%';pin.style.top=drag.original.y+'%';drag=null;stage.pinDragging=false;pin.classList.remove('dragging');};
  pin.addEventListener('pointerdown',e=>{if(e.button!==0||this.placement)return;e.preventDefault();e.stopPropagation();pin.focus();const pos=this.positionsFor(p,key)[index]||initialPos;if(!pos)return;this.activePin={id:p.id,key,index};drag={startX:e.clientX,startY:e.clientY,original:pos,pos,moved:false};stage.pinDragging=true;pin.setPointerCapture(e.pointerId);});
  pin.addEventListener('pointermove',e=>{if(!drag)return;e.stopPropagation();drag.moved ||= Math.hypot(e.clientX-drag.startX,e.clientY-drag.startY)>3;if(!drag.moved)return;const rect=stage.surface.getBoundingClientRect();const xy=ImageStage.dragPosition(rect,drag.original,{x:e.clientX-drag.startX,y:e.clientY-drag.startY});if(!xy)return;drag.pos=xy;pin.classList.add('dragging');pin.style.left=xy.x+'%';pin.style.top=xy.y+'%';});
  pin.addEventListener('pointerup',e=>{if(!drag)return;e.stopPropagation();const end=drag;drag=null;stage.pinDragging=false;pin.classList.remove('dragging');if(pin.hasPointerCapture(e.pointerId))pin.releasePointerCapture(e.pointerId);if(end.moved){pin.skipClick=true;this.commitPinPosition(p.id,key,index,end.pos);} });
  pin.addEventListener('pointercancel',restore);pin.addEventListener('lostpointercapture',restore);
  pin.addEventListener('keydown',e=>{if(e.key==='Escape'&&drag){e.preventDefault();restore();return;}const delta={ArrowLeft:[-1,0],ArrowRight:[1,0],ArrowUp:[0,-1],ArrowDown:[0,1]}[e.key];if(!delta)return;e.preventDefault();e.stopPropagation();const pos=this.positionsFor(p,key)[index],step=e.shiftKey?1:.2;if(pos)this.commitPinPosition(p.id,key,index,{x:Math.max(0,Math.min(100,pos.x+delta[0]*step)),y:Math.max(0,Math.min(100,pos.y+delta[1]*step))});});
 }
 commitPinPosition(id,key,index,pos){
  const p=this.currentCondition.healingPoints.find(x=>x.id===id);if(!p||!key)return;const changed=this.selectedPointId!==id,m=this.editableMeta(p),list=this.storedPositions(m,key),next={x:Math.round(pos.x*100)/100,y:Math.round(pos.y*100)/100};if(index<list.length)list[index]=next;else if(index===0)list.push(next);else return;m.positions[key]=list;this.state.overrides[id]=m;this.activePin={id,key,index};
  const saved=this.persist();this.selectedPointId=id;this.syncData();this.renderCurrentCondition();if(changed)this.openTimerModal();if(saved)this.status(`${p.code}의 ${index+1}번 원 위치를 저장했습니다. 다른 원은 움직이지 않습니다.`);
  const stage=key.startsWith('body:')?this.bodyStage:this.detailStage;stage.layer.querySelector(`[data-point-id="${id}"][data-position-index="${index}"]`)?.focus({preventScroll:true});
 }
 detailAvailable(){return this.detailView==='original'||!!this.imageUrls?.get(this.state.images?.[this.currentCondition.id]?.[this.detailView]?.id);}
 getDetailSource(){if(!this.ready||this.detailView==='original'){const src=this.currentCondition.illustrationImage;if(src==='assets/regions/lumbar-disc-radiculopathy-posterior.webp')return src+'?v=13';if(src==='assets/regions/carpal-tunnel-bilateral.webp')return src+'?v=16';if(src==='assets/regions/postpartum-cervical-sacral-posterior.webp')return src+'?v=17';if(src==='assets/regions/frozen-shoulder-biceps-bilateral.webp')return src+'?v=18';return src;}const item=this.state.images?.[this.currentCondition.id]?.[this.detailView];return this.imageUrls.get(item?.id)||'assets/image-not-loaded.svg';}
 refreshDetailImage(){
  if(!this.ready)return;const pair=this.state.images?.[this.currentCondition.id]||{};
  for(const side of ['outer','inner']){const item=pair[side],url=item&&this.imageUrls.get(item.id);$('thumb-'+side).hidden=!url;if(url)$('thumb-'+side).src=url;$(`${side}-state`).textContent=url?'등록됨':item?'이미지 없음':'미등록';}
  for(const v of ['original','outer','inner']){const b=$('detail-'+v);b.classList.toggle('active',this.detailView===v);b.setAttribute('aria-pressed',String(this.detailView===v));}
  const source=this.getDetailSource();if(this.anatomy3dImage.getAttribute('src')!==source)this.anatomy3dImage.src=source;
  let label={original:'질환별 참고 해부도 · 치료점은 직접 배치',outer:'외측 · 사용자 등록 이미지',inner:'내측 · 사용자 등록 이미지'}[this.detailView];
  if(this.detailView==='original'){
   const src=this.currentCondition.illustrationImage;
   if(this.currentCondition.id==='postpartum-cold-syndrome')label='경추 후면 C1–C7(왼쪽) · 천골 후면과 천골공 8개(오른쪽) · 치료점은 직접 배치';
   else if(this.currentCondition.id==='frozen-shoulder')label='전면 상완이두근 장두·단두 힘줄과 결절간구(왼쪽) · 기존 후면 어깨(오른쪽) · 치료점은 직접 배치';
   else if(src.includes('medial-lateral'))label='오른쪽 하지 외측(왼쪽 그림) · 내측(오른쪽 그림) · 치료점은 직접 배치';
   else if(src.includes('right-foot-outer-inner'))label='오른발 외측(왼쪽 그림) · 내측(오른쪽 그림) · 치료점은 직접 배치';
   else if(this.currentCondition.id==='carpal-tunnel-syndrome')label='양쪽 손바닥·손목 주름·전완 전체·팔꿈치 앞쪽 주름·정중신경 참고 · 치료점은 직접 배치';
   else if(this.currentCondition.categoryId==='hand-wrist'&&src.includes('assets/regions/'))label='환자 좌·우 동시 비교 · 치료점은 직접 배치';
   else if(this.currentCondition.categoryId==='trunk-chest'&&src.includes('assets/regions/'))label='앞·뒤 또는 층별 동시 비교 · 치료점은 직접 배치';
   else if(this.currentCondition.categoryId==='shoulder-arm'&&src.includes('assets/regions/'))label='질환 관련 두 방향 동시 비교 · 치료점은 직접 배치';
   else if(this.currentCondition.categoryId==='head-neck'&&src.includes('assets/regions/'))label=(src.includes('neuralgia.webp')?'후면·측면 비교':src.includes('lateral')?'측면':'후면')+' · 치료점은 직접 배치';
   else if(this.currentCondition.id==='lumbar-disc-radiculopathy')label='요추 후면 · 극돌기·횡돌기·후관절·천장관절·천골공·신경근·후상장골극 참고 · 치료점은 직접 배치';
   else if(this.currentCondition.categoryId==='lumbar-pelvis'&&src.includes('assets/regions/'))label='허리·골반 후면 · 치료점은 직접 배치';
  }
  this.anatomyImgCaption.textContent=this.currentCondition.titleKo+' · '+label;
  this.detailLoading=!this.detailAvailable();$('detail-view-tabs').hidden=this.displayMode!=='3d';this.detailStage?.fit();
 }
 async loadUserImages(){
  const pairs=Object.values(this.state.images||{}),ids=[...new Set(pairs.flatMap(p=>Object.values(p).map(x=>x.id)))];
  try{for(const id of ids){if(this.imageUrls.has(id))continue;const blob=await this.imageStore.get(id);if(blob)this.imageUrls.set(id,URL.createObjectURL(blob));}this.refreshDetailImage();this.renderHealingPins();if(ids.some(id=>!this.imageUrls.has(id)))this.status('일부 등록 이미지를 찾지 못했습니다. 이미지 포함 백업을 가져오거나 다시 등록해 주세요.',true);}catch(e){this.status(e.message,true);}
 }
 buildImageDialog(){
  const d=document.createElement('dialog');d.id='image-editor';d.className='editor';d.setAttribute('aria-labelledby','image-editor-title');d.innerHTML=`<form id="image-form"><h2 id="image-editor-title">외측·내측 이미지 등록</h2><p id="image-context" class="editor-hint"></p><div class="form-grid"><label>외측 이미지<input id="outer-file" type="file" accept="image/jpeg,image/png,image/webp"><img id="outer-file-preview" class="upload-preview" alt="선택한 외측 이미지" hidden></label><label>내측 이미지<input id="inner-file" type="file" accept="image/jpeg,image/png,image/webp"><img id="inner-file-preview" class="upload-preview" alt="선택한 내측 이미지" hidden></label></div><p class="editor-hint">두 장을 함께 선택해 저장하세요. 한 장만 추가하거나 교체할 수도 있습니다. 파일은 JPG·PNG·WebP, 각 8MB 이하입니다. 사용자 이미지의 방향과 해부 정확성은 직접 확인해 주세요.</p><p class="editor-hint">교체한 이미지는 새 화면으로 등록되며 이전 이미지의 좌표를 자동으로 옮기지 않습니다. 필요한 기존 작업은 먼저 이미지 포함 백업으로 보관해 주세요.</p><p id="image-error" class="error" role="alert"></p><div class="editor-actions"><button id="image-cancel" type="button">취소</button><button id="image-save" type="submit" class="primary">이미지 저장</button></div></form>`;document.body.append(d);
 }
 openImageDialog(){this.imageConditionId=this.currentCondition.id;$('image-context').textContent=this.currentCondition.titleKo+'에 연결됩니다.';$('outer-file').value='';$('inner-file').value='';$('image-error').textContent='';this.previewImageURLs?.forEach(URL.revokeObjectURL);this.previewImageURLs=[];for(const side of ['outer','inner'])$(`${side}-file-preview`).hidden=true;$('image-editor').showModal();}
 bindImageTools(){
  $('image-editor').addEventListener('cancel',e=>{if($('image-save').disabled)e.preventDefault();});
  $('upload-pair').onclick=()=>this.openImageDialog();$('image-cancel').onclick=()=>$('image-editor').close();$('image-form').onsubmit=e=>{e.preventDefault();this.saveImagePair();};
  for(const side of ['outer','inner'])$(`${side}-file`).onchange=e=>{const f=e.target.files[0],el=$(`${side}-file-preview`);el.hidden=true;if(f&&['image/jpeg','image/png','image/webp'].includes(f.type)){const url=URL.createObjectURL(f);this.previewImageURLs.push(url);el.src=url;el.hidden=false;}};
  for(const side of ['original','outer','inner'])$('detail-'+side).onclick=()=>{this.cancelPlacement();this.activePin=null;this.detailView=side;this.refreshDetailImage();this.detailStage.reset();this.renderHealingPins();if(!this.detailAvailable())this.status('이 방향의 이미지가 없습니다. 외측·내측 이미지 등록에서 선택해 주세요.',true);else this.status('선택한 이미지의 원을 드래그하여 위치를 조정하세요.');};
 }
 async saveImagePair(){
  const cid=this.imageConditionId,items=['outer','inner'].map(side=>({side,file:$(`${side}-file`).files[0]})).filter(x=>x.file);if(!items.length){$('image-error').textContent='외측 또는 내측 이미지를 선택해 주세요.';return;}
  $('image-save').disabled=true;$('image-cancel').disabled=true;try{
   const checked=await Promise.all(items.map(async x=>({...x,blob:await validateImage(x.file),id:'upload-'+crypto.randomUUID()})));await this.imageStore.putMany(checked);
   const old=this.state.images[cid];this.state.images[cid]={...(old||{})};for(const x of checked)this.state.images[cid][x.side]={id:x.id,name:x.file.name.slice(0,120)};
   if(!this.persist()){if(old)this.state.images[cid]=old;else delete this.state.images[cid];throw Error('이미지 연결을 저장하지 못했습니다. 기존 연결을 유지했습니다.');}
   for(const x of checked)this.imageUrls.set(x.id,URL.createObjectURL(x.blob));this.detailView=checked[0].side;this.setDisplayMode('3d');this.refreshDetailImage();this.detailStage.reset();this.renderHealingPins();$('image-editor').close();this.status('이미지를 등록했습니다. 외측·내측을 전환하며 각각 원을 배치하세요.');
  }catch(e){$('image-error').textContent=e.message;}finally{$('image-save').disabled=false;$('image-cancel').disabled=false;}
 }
 async exportData(){
  $('export-data').disabled=true;try{const backup=structuredClone(this.state);backup.imageFiles={};const ids=[...new Set(Object.values(backup.images||{}).flatMap(p=>Object.values(p).map(x=>x.id)))];for(const id of ids){const blob=await this.imageStore.get(id);if(!blob)throw Error('등록 이미지를 찾지 못해 완전한 백업을 만들 수 없습니다. 이미지를 다시 등록해 주세요.');backup.imageFiles[id]=await imageToDataURL(blob);}
   const json=JSON.stringify(backup);if(json.length>60*1024*1024)throw Error('백업이 60MB를 넘습니다. 이미지 크기를 줄여 주세요.');const url=URL.createObjectURL(new Blob([json],{type:'application/json'})),a=document.createElement('a');a.href=url;a.download='NovaCell_Points_v29_'+new Date().toISOString().slice(0,10)+'.json';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);this.status('기본 치료점과 여러 원의 위치·원 크기·두께·외측/내측 이미지 자료를 함께 백업했습니다.');
  }catch(e){this.status(e.message,true);}finally{$('export-data').disabled=false;}
 }
 async importData(file){if(!file)return;try{if(file.size>60*1024*1024)throw Error('백업은 60MB 이하 파일을 사용해 주세요.');const raw=JSON.parse(await file.text()),next=validateState(raw,this.baseConditions),ids=[...new Set(Object.values(next.images).flatMap(p=>Object.values(p).map(x=>x.id)))],items=[];
   for(const id of ids){if(!raw.imageFiles?.[id])throw Error('백업에 등록 이미지가 누락되었습니다.');const blob=await validateImage(dataURLToImage(raw.imageFiles[id]));items.push({id,blob});}
   if(!confirm('현재 작업을 이미지 포함 백업으로 바꾸시겠습니까?'))return;
   // Remap imported image IDs so a failed import cannot overwrite current images.
   const remap=new Map(items.map(x=>[x.id,'upload-'+crypto.randomUUID()]));for(const pair of Object.values(next.images))for(const item of Object.values(pair))item.id=remap.get(item.id);
   for(const m of [...next.custom,...Object.values(next.overrides)])for(const [old,id] of remap){const key='detail:'+old;if(Object.hasOwn(m.positions,key)){m.positions['detail:'+id]=m.positions[key];delete m.positions[key];}}
   if(items.length)await this.imageStore.putMany(items.map(x=>({...x,id:remap.get(x.id)})));
   const previous=this.state;this.state=next;if(!this.persist()){this.state=previous;throw Error('가져온 설정을 저장하지 못해 기존 작업을 유지했습니다.');}
   this.pauseTimer();this.cancelPlacement();this.activePin=null;this.completed.clear();this.detailView='original';this.syncData();this.selectedPointId=this.currentCondition.healingPoints[0].id;await this.loadUserImages();this.render();this.openTimerModal();$('plan-name').value=this.state.planName;this.status('백업과 등록 이미지를 가져왔습니다.');
  }catch(e){this.status('가져오기 실패: '+e.message,true);}finally{$('import-file').value='';}
 }

 closeCover(){super.closeCover();this.mainWorkspace.inert=false;this.searchInput.focus();}
 openCover(){super.openCover();this.mainWorkspace.inert=true;this.coverEnterBtn.focus();}
}
if(typeof window!=='undefined')window.addEventListener('DOMContentLoaded',()=>{try{window.app=new Workspace();}catch(err){console.error(err);const box=document.createElement('p');box.textContent='앱 초기화 중 문제가 발생했습니다. 새로고침 후에도 반복되면 오류 화면을 전달해 주세요.';box.style.cssText='position:fixed;top:0;left:0;right:0;background:#4c2020;color:white;padding:16px;z-index:99999';document.body.append(box);}});
