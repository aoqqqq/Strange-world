<script setup lang="ts">
import M_Back from "../M_Back.vue"
import outline from "../MYtools/UP_OutLine.vue";
import FloatWindow from "../MYtools/FloatWindow.vue";
import Leftfloat from "./Tools/leftFloat.vue";
import {ref,onMounted} from "vue"
import { RouterLink } from "vue-router";

const W = ref(window.innerWidth);
function UpdateWIndowsize() {
  W.value =window.innerWidth;
}
onMounted(()=>{window.addEventListener('resize',UpdateWIndowsize)});

</script>
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
</template>
