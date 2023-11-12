import{B as o}from"./Button-8c6152c5.js";import{_ as V,r as n,f as F,o as p,c as m,a as t,b as l,w as s,n as f,h as a,j as k,F as E,i as e,t as g,p as T,e as q}from"./index-d087cd78.js";const i=h=>(T("data-v-232d80e9"),h=h(),q(),h),A=i(()=>t("h1",null,"Button示例",-1)),G={class:"item"},H=i(()=>t("h2",null,"基础用法",-1)),K=i(()=>t("p",null,[e("使用"),t("span",null,"level"),e("属性改变"),t("span",null,"Button"),e("组件颜色，以此凸显"),t("span",null,"Button"),e("组件的重要等级")],-1)),L={class:"demo"},M=i(()=>t("h2",{class:"title"},"基础使用",-1)),O={class:"buttondemo"},P={key:0},Q={class:"item"},R=i(()=>t("h2",null,"支持Size",-1)),U=i(()=>t("p",null,[e("使用"),t("span",null,"size"),e("属性改变"),t("span",null,"Button"),e("大小")],-1)),W={class:"demo"},X=i(()=>t("h2",{class:"title"},"基础使用",-1)),Y={class:"buttondemo"},Z={key:0},$={class:"item"},tt=i(()=>t("h2",null,"支持round",-1)),et=i(()=>t("p",null,[e("使用"),t("span",null,"round"),e("属性改变"),t("span",null,"Button"),e("形状")],-1)),lt={class:"demo"},ot=i(()=>t("h2",{class:"title"},"基础使用",-1)),st={class:"buttondemo"},it={key:0},nt={class:"item"},ut=i(()=>t("h2",null,"支持disabled",-1)),at=i(()=>t("p",null,[e("使用"),t("span",null,"disabled"),e("属性改变"),t("span",null,"Button"),e("组件状态，以此"),t("span",null,"禁止点击Button组件")],-1)),ct={class:"demo"},dt=i(()=>t("h2",{class:"title"},"基础使用",-1)),vt={class:"buttondemo"},rt={key:0},_t={__name:"ButtonDemo",setup(h){const b=n("显示代码"),d=n(!1),D=n(`<template>
  <div>
    <Button level>click-it</Button>
    <Button level="primary">click-it</Button>
    <Button level="success">click-it</Button>
    <Button level="warning">click-it</Button>
    <Button level="error">click-it</Button>
  </div>
</template>
<script>
  import Button from '@/components/about/zhujian/button/Button.vue';
<//script>
`);let S=function(){d.value=!d.value,d.value?b.value="隐藏代码":b.value="显示代码"};const w=n("显示代码"),v=n(!1),I=n(`<template>
  <div>
    <Button level="primary" size='big'>click-it</Button>
    <Button level="primary">click-it</Button>
    <Button level="primary" size='small'>click-it</Button>
  </div>
</template>
<script>
  import Button from '@/components/about/zhujian/button/Button.vue';
<//script>
`);let C=function(){v.value=!v.value,v.value?w.value="隐藏代码":w.value="显示代码"};const y=n("显示代码"),r=n(!1),J=n(`<template>
  <div>
    <Button level="primary" round>click-it</Button>
    <Button level="success" round>click-it</Button>
    <Button level="warning" round>click-it</Button>
    <Button level="error" round>click-it</Button>
  </div>
</template>
<script>
  import Button from '@/components/about/zhujian/button/Button.vue';
<//script>
`);let j=function(){r.value=!r.value,r.value?y.value="隐藏代码":y.value="显示代码"};const z=n("显示代码"),_=n(!1),N=n(`<template>
  <div>
    <Button size="big" disabled>click-it</Button>
    <Button disabled round>click-it</Button>
    <Button size="small" disabled>click-it</Button>
    <Button level="primary" round disabled loading>click-it</Button>
  </div>
</template>
<script>
  import Button from '@/components/about/zhujian/button/Button.vue';
<//script>
`);let x=function(){_.value=!_.value,_.value?z.value="隐藏代码":z.value="显示代码"};return(pt,u)=>{const B=F("highlightjs");return p(),m(E,null,[A,t("div",G,[H,K,t("div",L,[M,t("div",O,[l(o,{level:""},{default:s(()=>[e("click-it")]),_:1}),l(o,{level:"primary"},{default:s(()=>[e("click-it")]),_:1}),l(o,{level:"success"},{default:s(()=>[e("click-it")]),_:1}),l(o,{level:"warning"},{default:s(()=>[e("click-it")]),_:1}),l(o,{level:"error"},{default:s(()=>[e("click-it")]),_:1})]),t("div",{class:f({mid:!0,show:!d.value}),onClick:u[0]||(u[0]=(...c)=>a(S)&&a(S)(...c))},[l(o,{level:""},{default:s(()=>[e(g(b.value),1)]),_:1})],2),d.value?(p(),m("div",P,[l(B,{language:"JavaScript",autodetect:!1,code:D.value},null,8,["code"])])):k("",!0)])]),t("div",Q,[R,U,t("div",W,[X,t("div",Y,[l(o,{level:"primary",size:"big"},{default:s(()=>[e("大大大")]),_:1}),l(o,{level:"primary"},{default:s(()=>[e("普普通")]),_:1}),l(o,{level:"primary",size:"small"},{default:s(()=>[e("小小小")]),_:1})]),t("div",{class:f({mid:!0,show:!v.value}),onClick:u[1]||(u[1]=(...c)=>a(C)&&a(C)(...c))},[l(o,{level:""},{default:s(()=>[e(g(w.value),1)]),_:1})],2),v.value?(p(),m("div",Z,[l(B,{language:"JavaScript",autodetect:!1,code:I.value},null,8,["code"])])):k("",!0)])]),t("div",$,[tt,et,t("div",lt,[ot,t("div",st,[l(o,{level:"primary",round:""},{default:s(()=>[e("click-it")]),_:1}),l(o,{level:"success",round:""},{default:s(()=>[e("click-it")]),_:1}),l(o,{level:"warning",round:""},{default:s(()=>[e("click-it")]),_:1}),l(o,{level:"error",round:""},{default:s(()=>[e("click-it")]),_:1})]),t("div",{class:f({mid:!0,show:!r.value}),onClick:u[2]||(u[2]=(...c)=>a(j)&&a(j)(...c))},[l(o,{level:""},{default:s(()=>[e(g(y.value),1)]),_:1})],2),r.value?(p(),m("div",it,[l(B,{language:"JavaScript",autodetect:!1,code:J.value},null,8,["code"])])):k("",!0)])]),t("div",nt,[ut,at,t("div",ct,[dt,t("div",vt,[l(o,{size:"big",disabled:""},{default:s(()=>[e("click-it")]),_:1}),l(o,{disabled:"",round:""},{default:s(()=>[e("click-it")]),_:1}),l(o,{size:"small",disabled:""},{default:s(()=>[e("click-it")]),_:1}),l(o,{level:"primary",round:"",disabled:"",loading:""},{default:s(()=>[e("click-it")]),_:1})]),t("div",{class:f({mid:!0,show:!_.value}),onClick:u[3]||(u[3]=(...c)=>a(x)&&a(x)(...c))},[l(o,{level:""},{default:s(()=>[e(g(z.value),1)]),_:1})],2),_.value?(p(),m("div",rt,[l(B,{language:"JavaScript",autodetect:!1,code:N.value},null,8,["code"])])):k("",!0)])])],64)}}},Bt=V(_t,[["__scopeId","data-v-232d80e9"]]);export{Bt as default};
