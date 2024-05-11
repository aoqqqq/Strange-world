<script setup lang="ts">
import MainVue from "./MyWeb/MainVue.vue"
import {RouterLink,RouterView, useRoute, useRouter} from "vue-router"
import { onMounted } from "vue";

onMounted(()=>{
const router = useRouter();
router.beforeEach((to,from,next)=>{

    document.title =  (to.meta as {title?:string}).title ||"奇怪世界 |w傲奇w的博客";
    next();
});
});
</script>

<template>
 <RouterView />
</template>

<style>
 .up{
position: absolute;
top: 1%;
 }
</style>