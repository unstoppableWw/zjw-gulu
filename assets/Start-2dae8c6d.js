import{_ as a,d as n}from"./index-b58f453c.js";const t={},e=n(`<h1 data-v-376a5750>引用</h1><span data-v-376a5750>JinWei-UI</span><h2 data-v-376a5750>完整引用</h2><pre data-v-376a5750>    <code data-v-376a5750>
    import &#39;jinwei-ui/dist/lib/jinwei.css&#39;
    import { createApp } from &#39;vue&#39;
    import App from &#39;./App.vue&#39;
    import { jinweiUI } from &#39;jinwei-ui&#39;

    createApp(App)
      .use(jinweiUI)
      .mount(&#39;#app&#39;)
    </code>
  </pre><div class="edition" data-v-376a5750><p data-v-376a5750>以上代码便完成了 JinWei-UI 的引入。需要注意的是，样式文件需要单独引入。</p></div><h2 data-v-376a5750>按需引用</h2><div class="edition" data-v-376a5750><p data-v-376a5750>如果你只希望引入部分组件，比如 Button ，那么需要在 main.js 中写入以下内容：</p></div><pre data-v-376a5750>    <code data-v-376a5750>
      import &#39;JinWei-UI/dist/lib/jinwei.css&#39;
      import { createApp } from &#39;vue&#39;
      import { Button } from &#39;jinwei-ui&#39;
      import App from &#39;./App.vue&#39;
      
      createApp(App).use(Button).mount(&#39;#app&#39;)
    </code>
  </pre><div class="edition" data-v-376a5750><p data-v-376a5750>完整组件列表和引入方式</p></div><pre data-v-376a5750>    <code data-v-376a5750>
      import App from &#39;./App.vue&#39;
      import { createApp } from &#39;vue&#39;
      import {
        Button,
        Switch,
        Dialog,
        TabBox,
        Tabs,
      } from &#39;jinwei-ui&#39;

      createApp(App)
        .component(&#39;Button&#39;,Button)
        .component(&#39;Switch&#39;,Switch)
        .component(&#39;Dialog&#39;,Dialog)
        .component(&#39;TabBox&#39;,TabBox)
        .component(&#39;Tabs&#39;,Tabs)
    </code>
  </pre>`,10);function p(i,o){return e}const d=a(t,[["render",p],["__scopeId","data-v-376a5750"]]);export{d as default};
