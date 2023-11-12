import{B as g}from"./Button-a448a799.js";import{_ as B,o as c,c as p,a as e,n as f,j as I,r as o,f as N,b as a,h as i,w as x,F as $,i as t,t as y,p as J,e as F}from"./index-56dc9d0e.js";const E={class:"input-box"},T=["value","disabled"],q={key:0,class:"error"},A={__name:"Input",props:{modelValue:String,disabled:Boolean,error:Boolean},emits:["update:modelValue"],setup(l,{emit:_}){const v=n=>{_("update:modelValue",n.target.value)};return(n,u)=>(c(),p("div",E,[e("input",{type:"text",value:l.modelValue,onInput:v,class:f([{disabled:l.disabled},{error:l.error}]),disabled:l.disabled},null,42,T),l.error?(c(),p("span",q,"错误")):I("",!0)]))}},w=B(A,[["__scopeId","data-v-6d67fa20"]]);const s=l=>(J("data-v-bdda5d5a"),l=l(),F(),l),G=s(()=>e("h1",null,"Input示例",-1)),H={class:"item"},K=s(()=>e("h2",null,"支持value",-1)),L=s(()=>e("p",null,[t("使用"),e("span",null,"v-model"),t("绑定一个"),e("span",null,"String"),t("类型的变量到"),e("span",null,"Input"),t("组件")],-1)),M={class:"demo"},O=s(()=>e("h2",{class:"title"},"基础使用",-1)),P={class:"buttondemo"},Q={key:0},R={class:"item"},U=s(()=>e("h2",null,"支持disabled属性",-1)),W=s(()=>e("p",null,[t("使用"),e("span",null,"disabled"),t("属性改变"),e("span",null,"Input"),t("组件的状态，以此"),e("span",null,"禁用Input"),t("组件")],-1)),X={class:"demo"},Y=s(()=>e("h2",{class:"title"},"支持disabled属性",-1)),Z={class:"buttondemo"},ee={key:0},te={class:"item"},le=s(()=>e("h2",null,"支持error属性",-1)),oe=s(()=>e("p",null,[t("使用"),e("span",null,"error"),t("属性改变"),e("span",null,"Input"),t("组件的状态，以此表示"),e("span",null,"Input"),t("组件输入出错误")],-1)),se={class:"demo"},ae=s(()=>e("h2",{class:"title"},"支持disabled属性",-1)),ne={class:"buttondemo"},ue={key:0},de={__name:"InputDemo",setup(l){const _=o("abcd"),v=o("显示代码"),n=o("显示代码"),u=o(!1),j=o(`<template>
  <div>
    <Input type="text" :modelValue="modelValue"></Input>
  </div>
</template>

  import Input from '@/components/about/zhujian/input/Input.vue';
  const modelValue = ref("abcd")

`);let k=function(){u.value=!u.value,u.value?n.value="隐藏代码":n.value="显示代码"};const b=o("显示代码"),r=o(!1),z=o(`<template>
  <div>
    <Input type="text" :modelValue="modelValue" disabled></Input>
  </div>
</template>

  import Input from '@/components/about/zhujian/input/Input.vue';
  const modelValue = ref("abcd")

`);let S=function(){r.value=!r.value,r.value?b.value="隐藏代码":b.value="显示代码"};const m=o(!1),D=o(`<template>
  <div>
    <Input type="text" :modelValue="modelValue" disabled></Input>
  </div>
</template>

  import Input from '@/components/about/zhujian/input/Input.vue';
  const modelValue = ref("abcd")

`);let C=function(){m.value=!m.value,m.value?v.value="隐藏代码":v.value="显示代码"};return(ie,d)=>{const V=N("highlightjs");return c(),p($,null,[G,e("div",H,[K,L,e("div",M,[O,e("div",P,[a(w,{type:"text",modelValue:_.value},null,8,["modelValue"])]),e("div",{class:f({mid:!0,show:!u.value}),onClick:d[0]||(d[0]=(...h)=>i(k)&&i(k)(...h))},[a(g,{level:""},{default:x(()=>[t(y(n.value),1)]),_:1})],2),u.value?(c(),p("div",Q,[a(V,{language:"JavaScript",autodetect:!1,code:j.value},null,8,["code"])])):I("",!0)])]),e("div",R,[U,W,e("div",X,[Y,e("div",Z,[a(w,{type:"text",modelValue:_.value,disabled:""},null,8,["modelValue"])]),e("div",{class:f({mid:!0,show:!r.value}),onClick:d[1]||(d[1]=(...h)=>i(S)&&i(S)(...h))},[a(g,{level:""},{default:x(()=>[t(y(b.value),1)]),_:1})],2),r.value?(c(),p("div",ee,[a(V,{language:"JavaScript",autodetect:!1,code:z.value},null,8,["code"])])):I("",!0)])]),e("div",te,[le,oe,e("div",se,[ae,e("div",ne,[a(w,{type:"text",modelValue:_.value,error:""},null,8,["modelValue"])]),e("div",{class:f({mid:!0,show:!m.value}),onClick:d[2]||(d[2]=(...h)=>i(C)&&i(C)(...h))},[a(g,{level:""},{default:x(()=>[t(y(v.value),1)]),_:1})],2),m.value?(c(),p("div",ue,[a(V,{language:"JavaScript",autodetect:!1,code:D.value},null,8,["code"])])):I("",!0)])])],64)}}},_e=B(de,[["__scopeId","data-v-bdda5d5a"]]);export{_e as default};
