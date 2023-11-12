import{_ as x,l as B,r as u,m as N,q as D,o as r,c as v,a as e,F as w,g as V,n as y,t as j,s as I,v as E,h as g,j as k,f as J,b as s,w as t,i as a,p as U,e as q}from"./index-d24ee517.js";import{B as z}from"./Button-a4ecf4c1.js";const L={class:"tabsShow"},M=["onClick"],P={class:"slot"},A={__name:"Tabs",props:["select"],emits:["update:select"],setup(o,{emit:c}){const m=o,n=B(),T=u([]),i=u(m.select);N("active",i);const h=l=>{i.value=l,c("update:select",i.value)};return D(()=>{n.default().forEach((l,S)=>{T.value.push(l.props)})}),(l,S)=>(r(),v(w,null,[e("div",L,[(r(!0),v(w,null,V(T.value,(b,$)=>(r(),v("div",{class:y(["item",[{active:i.value===b.name},b.disabled]]),key:$,onClick:d=>b.disabled==null&&h(b.name)},j(b.name),11,M))),128))]),e("div",P,[I(l.$slots,"default",{},void 0,!0)])],64))}},F=x(A,[["__scopeId","data-v-65f59a49"]]);const G={key:0},H={__name:"Tab",props:{label:String,name:String,disabled:String},emits:["update:disabled"],setup(o,{emit:c}){const m=o,n=E("active");return c("update:disabled",m.disabled),(T,i)=>g(n)==o.name?(r(),v("div",G,[I(T.$slots,"default",{},void 0,!0)])):k("",!0)}},_=x(H,[["__scopeId","data-v-94273379"]]);const f=o=>(U("data-v-6cf7f2bb"),o=o(),q(),o),K=f(()=>e("h1",null,"Tabs示例",-1)),O={class:"item"},Q=f(()=>e("h2",null,"基础用法",-1)),R=f(()=>e("p",null,[a("使用"),e("span",null,"v-model"),a("绑定一个"),e("span",null,"String"),a("类型的变量到"),e("span",null,"Tabs"),a("组件，指定默认"),e("span",null,"Tab"),a("组件")],-1)),W={class:"demo"},X=f(()=>e("h2",{class:"title"},"基础使用",-1)),Y={class:"buttondemo"},Z={key:0},ee={class:"item"},ae=f(()=>e("h2",null,"支持disabled属性",-1)),se=f(()=>e("p",null,[a("在"),e("span",null,"Tab"),a("组件中添加"),e("span",null,"disabled"),a("属性，以此来禁止选中该"),e("span",null,"Tabs"),a("组件")],-1)),te={class:"demo"},le=f(()=>e("h2",{class:"title"},"基础使用",-1)),oe={class:"buttondemo"},ne={key:0},de={__name:"TabsDemo",setup(o){const c=u("导航1"),m=u("显示代码"),n=u(!1),T=u(`<template>
  <Tabs v-model:select="TabFlag">
          <Tab label="用户管理" name="导航1">用户管理</Tab>
          <Tab label="配置管理" name="导航2">配置管理</Tab>
          <Tab label="角色管理" name="导航3">角色管理</Tab>
          <Tab label="定时任务补偿" name="导航4">定时任务补偿</Tab>
    </Tabs>
</template>

import Tabs from '@/components/about/zhujian/tab/Tabs.vue';
import Tabs from '@/components/about/zhujian/tab/Tabs.vue';
import Tab from '@/components/about/zhujian/tab/Tab.vue';
const TabFlag = ref('导航1')

`);let i=function(){n.value=!n.value,n.value?m.value="隐藏代码":m.value="显示代码"};const h=u("显示代码"),l=u(!1),S=u(`<template>
  <Tabs v-model:select="TabFlag">
          <Tab label="用户管理" name="导航1">用户管理</Tab>
          <Tab label="配置管理" name="导航2">配置管理</Tab>
          <Tab label="角色管理" name="导航3">角色管理</Tab>
          <Tab label="定时任务补偿" name="导航4" disabled="disabled">定时任务补偿</Tab>
    </Tabs>
</template>

import Tabs from '@/components/about/zhujian/tab/Tabs.vue';
import Tabs from '@/components/about/zhujian/tab/Tabs.vue';
import Tab from '@/components/about/zhujian/tab/Tab.vue';
const TabFlag = ref('导航1')

`);let b=function(){l.value=!l.value,l.value?h.value="隐藏代码":h.value="显示代码"};return($,d)=>{const C=J("highlightjs");return r(),v(w,null,[K,e("div",O,[Q,R,e("div",W,[X,e("div",Y,[s(F,{select:c.value,"onUpdate:select":d[0]||(d[0]=p=>c.value=p)},{default:t(()=>[s(_,{label:"用户管理",name:"导航1"},{default:t(()=>[a("用户管理")]),_:1}),s(_,{label:"配置管理",name:"导航2"},{default:t(()=>[a("配置管理")]),_:1}),s(_,{label:"角色管理",name:"导航3"},{default:t(()=>[a("角色管理")]),_:1}),s(_,{label:"定时任务补偿",name:"导航4"},{default:t(()=>[a("定时任务补偿")]),_:1})]),_:1},8,["select"])]),e("div",{class:y({mid:!0,show:!n.value}),onClick:d[1]||(d[1]=(...p)=>g(i)&&g(i)(...p))},[s(z,{level:""},{default:t(()=>[a(j(m.value),1)]),_:1})],2),n.value?(r(),v("div",Z,[s(C,{language:"JavaScript",autodetect:!1,code:T.value},null,8,["code"])])):k("",!0)])]),e("div",ee,[ae,se,e("div",te,[le,e("div",oe,[s(F,{select:c.value,"onUpdate:select":d[2]||(d[2]=p=>c.value=p)},{default:t(()=>[s(_,{label:"用户管理",name:"导航1"},{default:t(()=>[a("用户管理")]),_:1}),s(_,{label:"配置管理",name:"导航2"},{default:t(()=>[a("配置管理")]),_:1}),s(_,{label:"角色管理",name:"导航3"},{default:t(()=>[a("角色管理")]),_:1}),s(_,{label:"定时任务补偿",name:"导航4",disabled:"disabled"},{default:t(()=>[a("定时任务补偿")]),_:1})]),_:1},8,["select"])]),e("div",{class:y({mid:!0,show:!l.value}),onClick:d[3]||(d[3]=(...p)=>g(b)&&g(b)(...p))},[s(z,{level:""},{default:t(()=>[a(j(h.value),1)]),_:1})],2),l.value?(r(),v("div",ne,[s(C,{language:"JavaScript",autodetect:!1,code:S.value},null,8,["code"])])):k("",!0)])])],64)}}},ie=x(de,[["__scopeId","data-v-6cf7f2bb"]]);export{ie as default};
