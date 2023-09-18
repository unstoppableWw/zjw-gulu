import{B as v}from"./Button-05e9256b.js";import{_ as V,o as r,c as h,a as o,t as k,b as t,w as g,i as l,h as a,j as m,k as T,p as J,e as U,r as i,f as q,n as j,F as A}from"./index-c393f275.js";const G=e=>(J("data-v-c7a2f093"),e=e(),U(),e),H=G(()=>o("hr",null,null,-1)),K={key:0,class:"dialog-buttons"},L={key:1,class:"dialog-buttons-double"},O={__name:"Dialog",props:{title:String,content:String,showDialog:Boolean,disabled:Boolean,deal:Boolean},emits:["update:showDialog"],setup(e,{emit:p}){const _=e;let c=function(){p("update:showDialog",!1)};return(x,s)=>_.showDialog?(r(),h("div",{key:0,class:"dialog-overlay",onClick:s[4]||(s[4]=D=>!e.disabled&&a(c)())},[o("div",{class:"dialog",onClick:s[3]||(s[3]=T(()=>{},["stop"]))},[o("h2",null,k(e.title),1),H,o("p",null,k(e.content),1),_.deal?m("",!0):(r(),h("div",K,[t(v,{level:"warning",onClick:s[0]||(s[0]=D=>a(c)())},{default:g(()=>[l("关闭")]),_:1})])),_.deal?(r(),h("div",L,[t(v,{level:"success",onClick:s[1]||(s[1]=D=>a(c)())},{default:g(()=>[l("确认")]),_:1}),t(v,{level:"error",onClick:s[2]||(s[2]=D=>a(c)())},{default:g(()=>[l("取消")]),_:1})])):m("",!0)])])):m("",!0)}},$=V(O,[["__scopeId","data-v-c7a2f093"]]);const d=e=>(J("data-v-eccbb4f8"),e=e(),U(),e),P=d(()=>o("h1",null,"Dialog示例",-1)),Q={class:"item"},R=d(()=>o("h2",null,"基础用法",-1)),W=d(()=>o("p",null,[l("使用"),o("span",null,"v-model"),l("绑定一个"),o("span",null,"Boolean"),l("类型的变量到"),o("span",null,"Dialog"),l("组件")],-1)),X={class:"demo"},Y=d(()=>o("h2",{class:"title"},"基础使用",-1)),Z={class:"buttondemo"},oo={key:0},lo={class:"item"},to=d(()=>o("h2",null,"支持disabled属性",-1)),eo=d(()=>o("p",null,[l("在"),o("span",null,"Dialog"),l("组件中添加"),o("span",null,"disabled"),l("属性，以此来决定是否通过"),o("span",null,"点击遮罩层"),l("关闭"),o("span",null,"Dialog"),l("组件")],-1)),ao={class:"demo"},so=d(()=>o("h2",{class:"title"},"基础使用",-1)),no={class:"buttondemo"},io={key:0},uo={class:"item"},co=d(()=>o("h2",null,"支持disabled属性",-1)),vo=d(()=>o("p",null,[l("在"),o("span",null,"Dialog"),l("组件中添加"),o("span",null,"bottomBtn"),l("属性，以此来决定"),o("span",null,"Dialog"),l("组件是否显示"),o("span",null,"处理button"),l("组件")],-1)),go={class:"demo"},_o=d(()=>o("h2",{class:"title"},"基础使用",-1)),ro={class:"buttondemo"},ho={key:0},po={__name:"DialogDemo",setup(e){const p=i(!1),_=i(!1),c=i(!1);let x=function(){p.value=!p.value},s=function(){_.value=!_.value},D=function(){c.value=!c.value};const B=i("显示代码"),f=i(!1),F=i(`<template>
  <div>
    <Button @click="toggle" level="primary">打开Dialog</Button>
    <Dialog v-model:showDialog="showDialog" title="自定义标题" content="这是内容"></Dialog>
  </div>
</template>

  import Button from '@/components/about/zhujian/button/Button.vue';
  import Dialog from '@/components/about/zhujian/dialog/Dialog.vue';

`);let z=function(){f.value=!f.value,f.value?B.value="隐藏代码":B.value="显示代码"};const C=i("显示代码"),w=i(!1),E=i(`<template>
  <div>
    <Button @click="toggle" level="primary">打开Dialog</Button>
    <Dialog v-model:showDialog="showDialog" title="自定义标题" content="这是内容"></Dialog>
  </div>
</template>

  import Button from '@/components/about/zhujian/button/Button.vue';
  import Dialog from '@/components/about/zhujian/dialog/Dialog.vue';

`);let I=function(){w.value=!w.value,w.value?C.value="隐藏代码":C.value="显示代码"};const y=i("显示代码"),b=i(!1),M=i(`<template>
  <div>
    <Button @click="toggle2" level="error">打开Dialog有处理button</Button>
    <Dialog v-model:showDialog="showDialog2" title="自定义标题222" content="这是内容22" disabled deal></Dialog>
  </div>
</template>

  import Button from '@/components/about/zhujian/button/Button.vue';
  import Dialog from '@/components/about/zhujian/dialog/Dialog.vue';

`);let N=function(){b.value=!b.value,b.value?y.value="隐藏代码":y.value="显示代码"};return(mo,n)=>{const S=q("highlightjs");return r(),h(A,null,[P,o("div",Q,[R,W,o("div",X,[Y,o("div",Z,[t(v,{onClick:a(x),level:"primary"},{default:g(()=>[l("打开Dialog")]),_:1},8,["onClick"]),t($,{showDialog:p.value,"onUpdate:showDialog":n[0]||(n[0]=u=>p.value=u),title:"自定义标题",content:"这是内容"},null,8,["showDialog"])]),o("div",{class:j({mid:!0,show:!f.value}),onClick:n[1]||(n[1]=(...u)=>a(z)&&a(z)(...u))},[t(v,{level:""},{default:g(()=>[l(k(B.value),1)]),_:1})],2),f.value?(r(),h("div",oo,[t(S,{language:"JavaScript",autodetect:!1,code:F.value},null,8,["code"])])):m("",!0)])]),o("div",lo,[to,eo,o("div",ao,[so,o("div",no,[t(v,{onClick:a(s),level:"warning"},{default:g(()=>[l("打开Dialog")]),_:1},8,["onClick"]),t($,{showDialog:_.value,"onUpdate:showDialog":n[2]||(n[2]=u=>_.value=u),title:"自定义标题111",content:"这是内容111",disabled:""},null,8,["showDialog"])]),o("div",{class:j({mid:!0,show:!w.value}),onClick:n[3]||(n[3]=(...u)=>a(I)&&a(I)(...u))},[t(v,{level:""},{default:g(()=>[l(k(C.value),1)]),_:1})],2),w.value?(r(),h("div",io,[t(S,{language:"JavaScript",autodetect:!1,code:E.value},null,8,["code"])])):m("",!0)])]),o("div",uo,[co,vo,o("div",go,[_o,o("div",ro,[t(v,{onClick:a(D),level:"error"},{default:g(()=>[l("打开Dialog有处理button")]),_:1},8,["onClick"]),t($,{showDialog:c.value,"onUpdate:showDialog":n[4]||(n[4]=u=>c.value=u),title:"自定义标题222",content:"这是内容22",disabled:"",deal:""},null,8,["showDialog"])]),o("div",{class:j({mid:!0,show:!b.value}),onClick:n[5]||(n[5]=(...u)=>a(N)&&a(N)(...u))},[t(v,{level:""},{default:g(()=>[l(k(y.value),1)]),_:1})],2),b.value?(r(),h("div",ho,[t(S,{language:"JavaScript",autodetect:!1,code:M.value},null,8,["code"])])):m("",!0)])])],64)}}},wo=V(po,[["__scopeId","data-v-eccbb4f8"]]);export{wo as default};
