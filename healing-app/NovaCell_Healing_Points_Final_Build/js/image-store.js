// Local-only image storage, separate from small settings in localStorage.
export class ImageStore {
 async db(){if(!this.pending)this.pending=new Promise((resolve,reject)=>{const r=indexedDB.open('novacell-images-v3',1);r.onupgradeneeded=()=>r.result.createObjectStore('images');r.onsuccess=()=>resolve(r.result);r.onerror=()=>{this.pending=null;reject(Error('이미지 저장 공간을 열지 못했습니다. 일반 브라우저 모드로 실행해 주세요.'));};});return this.pending;}
 async get(id){const db=await this.db();return new Promise((resolve,reject)=>{const r=db.transaction('images').objectStore('images').get(id);r.onsuccess=()=>resolve(r.result);r.onerror=()=>reject(Error('저장 이미지를 읽지 못했습니다.'));});}
 async putMany(items){const db=await this.db();return new Promise((resolve,reject)=>{const tx=db.transaction('images','readwrite');for(const item of items)tx.objectStore('images').put(item.blob,item.id);tx.oncomplete=resolve;tx.onerror=tx.onabort=()=>reject(Error('이미지 저장에 실패했습니다. 브라우저 저장 공간을 확인해 주세요.'));});}
}
export async function validateImage(blob){
 if(!['image/jpeg','image/png','image/webp'].includes(blob.type)||blob.size>8*1024*1024||!blob.size)throw Error('이미지는 JPG·PNG·WebP, 한 장당 8MB 이하로 선택해 주세요.');
 const url=URL.createObjectURL(blob);try{await new Promise((resolve,reject)=>{const im=new Image();im.onload=()=>im.naturalWidth<=8192&&im.naturalHeight<=8192?resolve():reject(Error('이미지는 가로·세로 각각 8192px 이하로 사용해 주세요.'));im.onerror=()=>reject(Error('읽을 수 없는 이미지 파일입니다.'));im.src=url;});}finally{URL.revokeObjectURL(url);}return blob;
}
export function imageToDataURL(blob){return new Promise((resolve,reject)=>{const r=new FileReader();r.onload=()=>resolve(r.result);r.onerror=()=>reject(Error('이미지 백업 변환에 실패했습니다.'));r.readAsDataURL(blob);});}
export function dataURLToImage(data){const m=typeof data==='string'&&data.match(/^data:(image\/(?:jpeg|png|webp));base64,([a-zA-Z0-9+/=]+)$/);if(!m||data.length>12*1024*1024)throw Error('백업 이미지 형식이 올바르지 않습니다.');const bytes=atob(m[2]);return new Blob([Uint8Array.from(bytes,c=>c.charCodeAt(0))],{type:m[1]});}
