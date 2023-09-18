import{_ as t,d as e}from"./index-c393f275.js";const a={},c=e(`<h1 data-v-cce30b58>引用</h1><span data-v-cce30b58>JinWei-UI</span><h2 data-v-cce30b58>完整引用</h2><pre data-v-cce30b58>    <code data-v-cce30b58>
    import &#39;kaite-ui/dist/lib/kaite.css&#39;
    import { createApp } from &#39;vue&#39;
    import App from &#39;./App.vue&#39;
    import { kaiteUI } from &#39;kaite-ui&#39;

    createApp(App)
      .use(kaiteUI)
      .mount(&#39;#app&#39;)
    </code>
  </pre><div class="edition" data-v-cce30b58><p data-v-cce30b58>以上代码便完成了 JinWei-UI 的引入。需要注意的是，样式文件需要单独引入。</p></div><h2 data-v-cce30b58>按需引用</h2><div class="edition" data-v-cce30b58><p data-v-cce30b58>如果你只希望引入部分组件，比如 Button ，那么需要在 main.js 中写入以下内容：</p></div><pre data-v-cce30b58>    <code data-v-cce30b58>
      import &#39;kaite-ui/dist/lib/kaite.css&#39;
      import { createApp } from &#39;vue&#39;
      import { Button } from &#39;kaite-ui&#39;
      import App from &#39;./App.vue&#39;
      
      createApp(App).use(Button).mount(&#39;#app&#39;)
    </code>
  </pre><div class="edition" data-v-cce30b58><p data-v-cce30b58>完整组件列表和引入方式</p></div><pre data-v-cce30b58>    <code data-v-cce30b58>
      import App from &#39;./App.vue&#39;
      import { createApp } from &#39;vue&#39;
      import {
        Button,
        Switch,
        Dialog,
        TabBox,
        Tabs,
      } from &#39;kaite-ui&#39;

      createApp(App)
        .component(&#39;Button&#39;,Button)
        .component(&#39;Switch&#39;,Switch)
        .component(&#39;Dialog&#39;,Dialog)
        .component(&#39;TabBox&#39;,TabBox)
        .component(&#39;Tabs&#39;,Tabs)
    </code>
  </pre>`,10);function n(p,o){return c}const r=t(a,[["render",n],["__scopeId","data-v-cce30b58"]]);export{r as default};
