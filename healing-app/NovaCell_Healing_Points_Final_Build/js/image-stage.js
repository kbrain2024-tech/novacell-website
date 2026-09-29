export class ImageStage {
 constructor(frame,images,onPlace){
  this.frame=frame;this.images=images;this.onPlace=onPlace;this.scale=1;this.pan={x:0,y:0};
  frame.replaceChildren();frame.classList.add('image-stage');frame.tabIndex=0;frame.setAttribute('aria-label','해부 이미지. 드래그 이동, 휠 확대, 방향키 이동, + - 확대, Home 초기화. 위치 지정 중 Enter는 화면 중앙에 배치');
  this.surface=document.createElement('div');this.surface.className='image-surface';this.layer=document.createElement('div');this.layer.className='precise-pin-layer';
  this.surface.append(...images,this.layer);frame.append(this.surface);
  for(const im of images){im.draggable=false;im.addEventListener('load',()=>this.fit());}
  new ResizeObserver(()=>this.fit()).observe(frame);this.bind();this.fit();
 }
 currentImage(){return this.images.find(i=>i.style.display!=='none')||this.images[0];}
 fit(){const im=this.currentImage(),r=this.frame.getBoundingClientRect();if(!im.naturalWidth||r.width<1||r.height<1)return;const f=Math.min(r.width/im.naturalWidth,r.height/im.naturalHeight);this.w=im.naturalWidth*f;this.h=im.naturalHeight*f;this.surface.style.width=this.w+'px';this.surface.style.height=this.h+'px';this.transform();}
 transform(){this.surface.style.transform=`translate(calc(-50% + ${this.pan.x}px), calc(-50% + ${this.pan.y}px)) scale(${this.scale})`;this.surface.style.setProperty('--inverse-zoom',1/this.scale);}
 reset(){this.scale=1;this.pan={x:0,y:0};this.fit();}
 zoom(f){this.scale=Math.max(1,Math.min(6,this.scale*f));this.transform();}
 coords(x,y){let r=this.surface.getBoundingClientRect();if(!r.width||!r.height)return null;let px=(x-r.left)/r.width*100,py=(y-r.top)/r.height*100;return px>=0&&px<=100&&py>=0&&py<=100?{x:px,y:py}:null;}
 visibleCenter(){const r=this.frame.getBoundingClientRect();return this.coords(r.left+r.width/2,r.top+r.height/2)||{x:50,y:50};}
 static dragPosition(rect,start,delta){if(!rect.width||!rect.height)return null;return {x:Math.max(0,Math.min(100,start.x+delta.x/rect.width*100)),y:Math.max(0,Math.min(100,start.y+delta.y/rect.height*100))};}
 bind(){let drag;
  this.frame.addEventListener('pointerdown',e=>{if(e.target.closest('button')||e.button!==0)return;this.frame.focus();drag={x:e.clientX,y:e.clientY,ox:e.clientX,oy:e.clientY,moved:false};this.frame.setPointerCapture(e.pointerId);});
  this.frame.addEventListener('pointermove',e=>{if(!drag)return;drag.moved ||= Math.hypot(e.clientX-drag.ox,e.clientY-drag.oy)>4;if(!this.placing){this.pan.x+=e.clientX-drag.x;this.pan.y+=e.clientY-drag.y;this.transform();}drag.x=e.clientX;drag.y=e.clientY;});
  this.frame.addEventListener('pointerup',e=>{if(drag&&!drag.moved&&this.placing){const pos=this.coords(e.clientX,e.clientY);if(pos)this.onPlace(pos);}drag=null;});
  this.frame.addEventListener('pointercancel',()=>drag=null);
  this.frame.addEventListener('wheel',e=>{e.preventDefault();if(this.pinDragging)return;this.zoom(Math.exp(-e.deltaY*.001));},{passive:false});
  this.frame.addEventListener('keydown',e=>{if(e.target!==this.frame)return;let used=true;if(e.key==='ArrowLeft')this.pan.x-=15;else if(e.key==='ArrowRight')this.pan.x+=15;else if(e.key==='ArrowUp')this.pan.y-=15;else if(e.key==='ArrowDown')this.pan.y+=15;else if(e.key==='+'||e.key==='=')this.zoom(1.15);else if(e.key==='-')this.zoom(1/1.15);else if(e.key==='Home')this.reset();else if(e.key==='Enter'&&this.placing){const r=this.frame.getBoundingClientRect(),pos=this.coords(r.left+r.width/2,r.top+r.height/2);if(pos)this.onPlace(pos);}else used=false;if(used){e.preventDefault();this.transform();}});
 }
}
