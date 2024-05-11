<script setup lang="ts">
import { onMounted } from "vue";

import Devtemplate from "./DevLog.vue"
var code2: string = 
`<script setup lang="ts">
import {ref,onMounted} from "vue"

const W = ref(window.innerWidth);

function UpdateWIndowsize() {
    W.value =window.innerWidth;
}
onMounted(()=>{window.addEventListener('resize',UpdateWIndowsize)});
<\/script>

<template>
    <M_Back />
     <outline />
  <div v-if="W.valueOf()>1024"> 
      <FloatWindow style="color: greenyellow;">
        <slot></slot>
    </FloatWindow>
  <Leftfloat/>
  </div>
  <div v-else>
    <FloatWindow style="color: greenyellow; width: 90%;">
      <slot></slot>
      <Leftfloat style="width: 100%; height: auto;left: 0%; top:auto;" />
    </FloatWindow>
  </div>
</template>`;

</script>
<template class="Dev_2024_5_11Vue">
    <Devtemplate>
        <h1 class="paragraph-P1"><h1 class="text-T1">日志屏幕自适应</h1><span class="text-T1"/></h1>
<p class="paragraph-P2"> </p><ol><li><p class="P4" style="margin-left:0cm;"><span class="ListLabel_20_1" style="display:block;float:left;min-width:0.635cm;">1.</span><span class="text-T2">文件变更</span><span class="text-T4">DevLog.vue</span><span class="text-T2">  在我们这个设计(</span><span class="text-T5">瞎比划</span><span class="text-T2">)的内容盒子在电脑端看起来很舒服(个人感觉)-一旦到手机上浏览体验并不好! 所以 想把左侧的 标题盒子给放到 内容盒子的最底部 个人感觉可能观感上有所体验 也就是这个问题 终于让我学了一点 vue的条件显示语法 </span><span class="odfLiEnd"/> </p></li></ol><p class="paragraph-P3"> </p><ol><li><p class="P4" style="margin-left:0cm;"><span class="ListLabel_20_1" style="display:block;float:left;min-width:0.635cm;">2.</span><span class="text-T2">一会儿 我们会用到vue的AIP:</span><span class="text-T4">v-if; v-else </span><span class="text-T2">;</span><span class="text-T4">ref()</span><span class="text-T2">;</span><span class="text-T4"> onMounted() </span><span class="text-T2">; html自带的API: </span><span class="text-T4">window.innerWidth</span><span class="text-T2"> ;</span><span class="text-T4">window.addEventListener(</span><span class="text-T6">'resize'</span><span class="text-T4">,</span><span class="text-T6">fun()</span><span class="text-T4">)</span><span class="text-T2">;</span><span class="odfLiEnd"/> </p></li></ol><p class="paragraph-P6"> </p><ol><li><p class="P4" style="margin-left:0cm;"><span class="ListLabel_20_1" style="display:block;float:left;min-width:0.635cm;">3.</span><span class="text-T4">v-if v-else</span><span class="text-T2">来管理是否渲染  </span><span class="text-T4">window.innerWidth</span><span class="text-T2">用于判断是否为合适当前的默认渲染(它是获取浏览器的宽度)</span><span class="odfLiEnd"/> </p></li></ol><p class="paragraph-P6"> </p><ol><li><p class="P4" style="margin-left:0cm;"><span class="ListLabel_20_1" style="display:block;float:left;min-width:0.635cm;">4.</span><span class="text-T4">onMounted(方法) </span><span class="text-T2">这个是vue的生命周期函数 </span><span class="text-T4">它只能在html上下文加载完毕并且vue的组件也添完毕加到html上下文中之后才会执行 1次!</span><span class="text-T2"> onMounted()函数 vue官网会用</span><span class="text-T4">dom</span><span class="text-T2">来简称html上下文 容易给人带来混乱 解析:</span><span class="text-T4">(DOM（Document Object Model，文档对象模型） 是用来描述网页文档结构的一种树形结构模型。它将整个HTML文档以树形的方式表示，每个HTML元素都作为树中的一个节点.)</span><span class="text-T2"> </span><a href="https://cn.vuejs.org/guide/essentials/lifecycle.html" class="text-Internet_20_link"><span class="text-Internet_20_link"><span class="text-T5">vue官网介绍</span></span></a><span class="odfLiEnd"/> </p></li></ol><p class="paragraph-P6"> </p><ol><li><p class="P4" style="margin-left:0cm;"><span class="ListLabel_20_1" style="display:block;float:left;min-width:0.635cm;">5.</span><span class="text-T4">ref()</span><span class="text-T2"> 创建的是</span><span class="text-T4">引用类型</span><span class="odfLiEnd"/> </p></li></ol><p class="paragraph-P6"> </p><ol><li><p class="P4" style="margin-left:0cm;"><span class="ListLabel_20_1" style="display:block;float:left;min-width:0.635cm;">6.</span><span class="text-T4">window.addEventListener(类型type,方法)</span><span class="text-T2">它需要两个形参第一个参数的事件很多</span><span class="text-T5"> </span><span class="text-T2">第二个 就是当第一个事件类型出发后执行第一个参数的函数 </span><a href="https://developer.mozilla.org/zh-CN/docs/Web/Events" class="text-Internet_20_link"><span class="text-Internet_20_link"><span class="text-T5">官网参数大全</span></span></a><span class="odfLiEnd"/> </p></li></ol><p class="paragraph-P6"> </p><p class="paragraph-P3"> </p><ol><li><p class="P4" style="margin-left:0cm;"><span class="ListLabel_20_1" style="display:block;float:left;min-width:0.635cm;">7.</span><span class="text-T4">v-if</span><span class="text-T2"> 指令用于条件性地渲染一块内容。这块内容只会在指令的表达式返回真值时才被渲染。</span><span class="odfLiEnd"/> </p></li></ol>
<p class="paragraph-P5"><span class="text-T2">你也可以使用</span><span class="text-T4"> v-else 为 v-if 添加一个“else 区块”</span><span class="text-T2">。复制于</span><a href="https://cn.vuejs.org/guide/essentials/conditional.html" class="text-Internet_20_link"><span class="text-Internet_20_link"><span class="text-T5">vue的文档多条件渲染</span></span></a></p>
<p class="paragraph-P3"> </p><ol><li><p class="P4" style="margin-left:0cm;"><span class="ListLabel_20_1" style="display:block;float:left;min-width:0.635cm;">8.</span><span class="text-T2">好介绍完毕了是时候该把所了解的内容 组合到我们的需求里面了 !</span><span class="text-T2"/><span class="odfLiEnd"/> </p></li></ol>
<p class="paragraph-P5"><span class="text-T4">思路创建个 const W= ref(0); 这样设定变量W为数字类型的引用</span><span class="text-T4"/></p>

<p class="paragraph-P5"><span class="text-T4">onMounted()是渲染完毕后只执行1次 所以利用它给window.addEventListener() 注册事件 调用的方法里填入 W.valueOf()=window.addEventListener 获取网页的宽 之后使用条件来判断是否渲染接下来的内容 v-if=”W.&gt;1024” </span><span class="text-T4"/></p>

    <!--或者直接将显示的代码写到 `code`中 -->
    <highlightjs language='typescript':code="code2"  />
        
   </Devtemplate>
</template>

<style>
    table { border-collapse:collapse; border-spacing:0; empty-cells:show }
    td, th { vertical-align:top; font-size:12pt;}
    h1, h2, h3, h4, h5, h6 { clear:both;}
    ol, ul { margin:0; padding:0;}
    li { list-style: none; margin:0; padding:0;}
    span.footnodeNumber { padding-right:1em; }
    span.annotation_style_by_filter { font-size:95%; font-family:Arial; background-color:#fff000;  margin:0; border:0; padding:0;  }
    span.heading_numbering { margin-right: 0.8rem; }* { margin:0;}
    .paragraph-P1{ font-size:12pt; margin-bottom:0cm; margin-top:0cm; text-align:center ! important; font-family:'Liberation Serif'; writing-mode:horizontal-tb; direction:ltr; }
    .paragraph-P2{ font-size:12pt; margin-bottom:0cm; margin-top:0cm; text-align:center ! important; font-family:'Liberation Serif'; writing-mode:horizontal-tb; direction:ltr; font-weight:bold; }
    .paragraph-P3{ font-size:12pt; margin-bottom:0cm; margin-top:0cm; text-align:left ! important; font-family:'Liberation Serif'; writing-mode:horizontal-tb; direction:ltr; margin-left:1.27cm; text-indent:0cm; font-weight:bold; }
    .paragraph-P4{ font-size:12pt; margin-bottom:0cm; margin-top:0cm; text-align:left ! important; font-family:'Liberation Serif'; writing-mode:horizontal-tb; direction:ltr; }
    .paragraph-P5{ font-size:12pt; margin-bottom:0cm; margin-top:0cm; text-align:left ! important; font-family:'Liberation Serif'; writing-mode:horizontal-tb; direction:ltr; margin-left:1.27cm; text-indent:0cm; }
    .paragraph-P6{ font-size:12pt; margin-bottom:0cm; margin-top:0cm; text-align:left ! important; font-family:'Liberation Serif'; writing-mode:horizontal-tb; direction:ltr; margin-left:1.27cm; text-indent:0cm; color:#ffa6a6; font-weight:bold; }
    .text-Internet_20_link{ color:#000080; text-decoration:underline; }
    .text-T1{ font-weight:bold; }
    .text-T2{ color:#aae7e4; font-weight:bold; }
    .text-T4{ color:#ff009d; font-weight:bold; }
    .text-T5{ color:#729fcf; font-weight:bold; }
    .text-T6{ color:#e0c2cd; font-weight:bold; }
    /* ODF styles with no properties representable as CSS:
    .dp1 .ListLabel_20_1 .ListLabel_20_10 .ListLabel_20_11 .ListLabel_20_12 .ListLabel_20_13 .ListLabel_20_14 .ListLabel_20_15 .ListLabel_20_16 .ListLabel_20_17 .ListLabel_20_18 .ListLabel_20_2 .ListLabel_20_3 .ListLabel_20_4 .ListLabel_20_5 .ListLabel_20_6 .ListLabel_20_7 .ListLabel_20_8 .ListLabel_20_9  { } */
</style>
