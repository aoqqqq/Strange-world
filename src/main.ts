import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import {createRouter,createWebHashHistory } from "vue-router"
import "highlight.js/styles/atom-one-dark.css"
import "highlight.js/lib/common"
import hljsVuePlugin from '@highlightjs/vue-plugin'

import Home from "./MyWeb/MainVue.vue"
import DevLog from './MyWeb/DevLog/DevLog.vue'
import DevLog1 from './MyWeb/DevLog/DevLog1.vue'
import Dev_2024_5_11Vue from './MyWeb/DevLog/Dev_2024_5_11.vue.vue'
const router = createRouter({
history:createWebHashHistory(),
routes:[
    {path:"/",name:"/",component:Home},
    {path:"/devlog",name:"devlog",meta:{title:"开发日志 | 奇怪世界 | w傲奇w的博客"}, component:DevLog},
    {path:"/devlog/1",name:"d1",meta:{title:"梦开始的地方 |奇怪世界 | w傲奇w的博客"},component:DevLog1},
    {path:"/devlog/2",name:"d2",meta:{title:"vue网页屏幕动态适应 | 奇怪世界 | w傲奇w的博客"},component:Dev_2024_5_11Vue}
],

});


createApp(App)
.use(router)
.use(hljsVuePlugin)
.mount('#app')
