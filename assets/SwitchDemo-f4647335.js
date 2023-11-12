import{_ as z,r as o,o as _,c as h,a as e,n as f,j as w,h as c,f as V,b as d,w as y,F as $,i as t,t as x,p as J,e as U}from"./index-56dc9d0e.js";import{B}from"./Button-a448a799.js";const F=["disabled"],E={key:0,class:"open"},L={key:1,class:"close"},T={__name:"Switch",props:{disabled:Boolean,loading:Boolean,value:String},setup(p){const a=p,u=o(a.value),l=o(!1);let S=function(){u.value=="off"?(u.value="on",l.value=!l.value):(u.value="off",l.value=!l.value)};return(g,r)=>(_(),h("button",{onClick:r[0]||(r[0]=(...v)=>c(S)&&c(S)(...v)),class:f([u.value=="off"?"bg":"",{disabled:a.disabled}]),disabled:a.disabled},[e("div",{class:f([u.value,"mid"])},[e("div",{class:f({loading:a.loading})},null,2)],2),l.value?(_(),h("span",E,"开")):w("",!0),l.value?w("",!0):(_(),h("span",L,"关"))],10,F))}},C=z(T,[["__scopeId","data-v-0bcf8028"]]);const i=p=>(J("data-v-880ca275"),p=p(),U(),p),q=i(()=>e("h1",null,"Switch组件示例",-1)),A={class:"item"},G=i(()=>e("h2",null,"基础用法",-1)),H=i(()=>e("p",null,[t("使用"),e("span",null,"v-model"),t("绑定一个"),e("span",null,"Boolean"),t("类型的变量到"),e("span",null,"Switch"),t("组件")],-1)),K={class:"demo"},M=i(()=>e("h2",{class:"title"},"基础使用",-1)),O={class:"Switchdemo"},P={key:0},Q={class:"item"},R=i(()=>e("h2",null,"支持disabled属性",-1)),W=i(()=>e("p",null,[t("在"),e("span",null,"Switch"),t("组件中添加"),e("span",null,"disabled"),t("属性，以此来"),e("span",null,"禁用Switch"),t("组件")],-1)),X={class:"demo"},Y=i(()=>e("h2",{class:"title"},"支持disabled",-1)),Z={class:"Switchdemo"},ee={key:0},te={class:"item"},le=i(()=>e("h2",null,"支持loading属性",-1)),se=i(()=>e("p",null,[t("在"),e("span",null,"Switch"),t("组件中添加"),e("span",null,"loading"),t("属性，显示"),e("span",null,"Switch"),t("组件加载状态")],-1)),oe={class:"demo"},ae=i(()=>e("h2",{class:"title"},"支持Loading",-1)),ne={class:"Switchdemo"},ie={key:0},ue={__name:"SwitchDemo",setup(p){const a=o("off"),u=o("显示代码"),l=o(!1),S=o(`<template>
  <div>
    <Switch v-model:value="value"/>
  </div>
</template>

import Switch from '@/components/about/zhujian/switch/Switch.vue';
import {ref} from 'vue'
const value = ref('off')
`);let g=function(){l.value=!l.value,l.value?u.value="隐藏代码":u.value="显示代码"};const r=o("显示代码"),v=o(!1),D=o(`<template>
  <div>
    <Switch v-model:value="value" disabled/>
  </div>
</template>

import Switch from '@/components/about/zhujian/switch/Switch.vue';
import {ref} from 'vue'
const value = ref('off')
`);let j=function(){v.value=!v.value,v.value?r.value="隐藏代码":r.value="显示代码"};const b=o("显示代码"),m=o(!1),N=o(`<template>
  <div>
    <Switch v-model:value="value" disabled/>
  </div>
</template>

import Switch from '@/components/about/zhujian/switch/Switch.vue';
import {ref} from 'vue'
const value = ref('off')
`);let I=function(){m.value=!m.value,m.value?b.value="隐藏代码":b.value="显示代码"};return(de,s)=>{const k=V("highlightjs");return _(),h($,null,[q,e("div",A,[G,H,e("div",K,[M,e("div",O,[d(C,{value:a.value,"onUpdate:value":s[0]||(s[0]=n=>a.value=n)},null,8,["value"])]),e("div",{class:f({mid:!0,show:!l.value}),onClick:s[1]||(s[1]=(...n)=>c(g)&&c(g)(...n))},[d(B,null,{default:y(()=>[t(x(u.value),1)]),_:1})],2),l.value?(_(),h("div",P,[d(k,{language:"JavaScript",autodetect:!1,code:S.value},null,8,["code"])])):w("",!0)])]),e("div",Q,[R,W,e("div",X,[Y,e("div",Z,[d(C,{value:a.value,"onUpdate:value":s[2]||(s[2]=n=>a.value=n),disabled:""},null,8,["value"])]),e("div",{class:f({mid:!0,show:!v.value}),onClick:s[3]||(s[3]=(...n)=>c(j)&&c(j)(...n))},[d(B,null,{default:y(()=>[t(x(r.value),1)]),_:1})],2),v.value?(_(),h("div",ee,[d(k,{language:"JavaScript",autodetect:!1,code:D.value},null,8,["code"])])):w("",!0)])]),e("div",te,[le,se,e("div",oe,[ae,e("div",ne,[d(C,{value:a.value,"onUpdate:value":s[4]||(s[4]=n=>a.value=n),disabled:"",loading:""},null,8,["value"])]),e("div",{class:f({mid:!0,show:!m.value}),onClick:s[5]||(s[5]=(...n)=>c(I)&&c(I)(...n))},[d(B,null,{default:y(()=>[t(x(b.value),1)]),_:1})],2),m.value?(_(),h("div",ie,[d(k,{language:"JavaScript",autodetect:!1,code:N.value},null,8,["code"])])):w("",!0)])])],64)}}},_e=z(ue,[["__scopeId","data-v-880ca275"]]);export{_e as default};
