import{_ as q,r as o,q as B,o as D,c as G,a as t,x,y,p as L,e as O,d as T}from"./index-d0adf246.js";const s=c=>(L("data-v-3b6f5f5f"),c=c(),O(),c),U={class:"effect"},V={class:"item"},X=s(()=>t("h1",{class:"title"},"文字滚动效果",-1)),Y={class:"container1"},j=s(()=>t("h2",null,"最新公告",-1)),F=s(()=>t("li",null,"1.Lorem ipsum dolor sit amet consectetur.",-1)),P=s(()=>t("li",null,"2.Laborum, adipisci? Consectetur aut tempore odio?",-1)),z=s(()=>t("li",null,"3.Porro at voluptatem dignissimos ex saepe.",-1)),J=s(()=>t("li",null,"4.Assumenda et adipisci temporibus eum atque?",-1)),K=[F,P,z,J],Q={class:"item"},R=s(()=>t("h1",{class:"title"},"手风琴",-1)),W=T('<li class="menu" data-v-3b6f5f5f><h2 data-v-3b6f5f5f>菜单1</h2><ul class="submenu" data-v-3b6f5f5f><li data-v-3b6f5f5f>菜单1</li><li data-v-3b6f5f5f>菜单2</li><li data-v-3b6f5f5f>菜单3</li><li data-v-3b6f5f5f>菜单4</li></ul></li><li class="menu" data-v-3b6f5f5f><h2 data-v-3b6f5f5f>菜单2</h2><ul class="submenu" data-v-3b6f5f5f><li data-v-3b6f5f5f>菜单1</li><li data-v-3b6f5f5f>菜单2</li><li data-v-3b6f5f5f>菜单3</li><li data-v-3b6f5f5f>菜单4</li></ul></li><li class="menu" data-v-3b6f5f5f><h2 data-v-3b6f5f5f>菜单3</h2><ul class="submenu" data-v-3b6f5f5f><li data-v-3b6f5f5f>菜单1</li><li data-v-3b6f5f5f>菜单2</li><li data-v-3b6f5f5f>菜单3</li><li data-v-3b6f5f5f>菜单4</li></ul></li><li class="menu" data-v-3b6f5f5f><h2 data-v-3b6f5f5f>菜单4</h2><ul class="submenu" data-v-3b6f5f5f><li data-v-3b6f5f5f>菜单1</li><li data-v-3b6f5f5f>菜单2</li><li data-v-3b6f5f5f>菜单3</li><li data-v-3b6f5f5f>菜单4</li></ul></li>',4),Z=[W],$={class:"item"},tt=s(()=>t("h1",{class:"title"},"图片放大镜",-1)),et={class:"left"},lt=s(()=>t("img",{class:"leftImg",src:"https://img.alicdn.com/imgextra/i3/1917047079/O1CN01lkG2pf22AEUi1owve_!!1917047079.png_430x430q90.jpg",alt:""},null,-1)),st={class:"right"},at={__name:"Effects",setup(c){const p=o(),b=o(),u=o(),r=o(!1),_=o(!1),v=o();B(()=>{const a=p.value;function n(){const i=a.children[0].cloneNode(!0);a.appendChild(i)}n(),setInterval(w,2e3);let f=30,l=0;function w(){let e=l*f;l++;let i=l*f,A=500,g=10,C=A/g,H=(i-e)/C,M=setInterval(()=>{e+=H,e>=i&&(clearInterval(M),l===a.children.length-1&&(e=0,l=0)),a.scrollTop=e},g)}const d=b.value.children;let m=Array(4).fill(!1);for(let e=0;e<d.length;e++)d[e].onclick=function(){m[e]?N(d[e].children[1],e):E(d[e].children[1],e)};function E(e,i){e.style.height="120px",m[i]=!0}function N(e,i){e.style.height="0px",m[i]=!1}});function I(){u.value=!0,r.value=!0}function k(a){let n=a.offsetX,h=a.offsetY,f=n-100<0?0:n-100,l=h-100<0?0:h-100;f>200&&(f=200),l>200&&(l=200),_.value.style.left=f+"px",_.value.style.top=l+"px",v.value.style.left=-2*f+"px",v.value.style.top=-2*l+"px"}function S(){u.value=!1,r.value=!1}return(a,n)=>(D(),G("div",U,[t("div",V,[X,t("div",Y,[j,t("ul",{ref_key:"listref",ref:p,class:"list"},K,512)])]),t("div",Q,[R,t("ul",{class:"menu-container",ref_key:"menu",ref:b},Z,512)]),t("div",$,[tt,t("div",et,[lt,x(t("div",{class:"top",ref_key:"topstyle",ref:_},null,512),[[y,u.value]]),t("div",{class:"maskTop",onMouseenter:I,onMousemove:k,onMouseout:S},null,32)]),x(t("div",st,[t("img",{class:"rightImg",src:"https://img.alicdn.com/imgextra/i3/1917047079/O1CN01lkG2pf22AEUi1owve_!!1917047079.png",ref_key:"r_img",ref:v},null,512)],512),[[y,r.value]])])]))}},ft=q(at,[["__scopeId","data-v-3b6f5f5f"]]);export{ft as default};