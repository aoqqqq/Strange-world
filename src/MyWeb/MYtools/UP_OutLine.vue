<script setup lang="ts">

onMounted(()=>{SetColor("XOAP");})
</script>

<script lang = "ts">
    import { onMounted } from "vue";
    function SetColor(IDname:string) {
        let gets = document.getElementById("XOAP");
        let gets1 =  gets?.childNodes;
        if (gets1) {
             for (let index = 0; index< gets1?.length ; index++) {
        
            (gets1[index] as HTMLElement).style.color = "white";
        } 
        }
    }
</script>
<template>
<div class="UPl">
    
</div>
<div class="NotBlur" id="XOAP">
    <div style="text-align: center; font-size: -large;"><a href="#/" style="color: white;">Home</a></div>
    <div><a href="#/devlog" style="color: white;">开发日志</a></div>
    <div><a style="color: white;">工具软件</a></div>
    <div><a style="color: white;">每日消息</a></div>
</div>

</template>

<style scoped>
div.UPl
{
position: fixed;
   width: 100vw;
   height: 10vh; 
   background-color: rgba(255, 255, 255, 0.158);
   backdrop-filter:  blur(4px);
   /* filter:contrast(0.1);  */
   box-shadow: 0px 2px 2px rgba(184, 184, 184, 0.39);
   top:0%;
   z-index: 0;
}

div.NotBlur
{
    position: fixed;
    display: grid;
    grid-template-columns:1fr 3fr 3fr 3fr ;
    width: 100vw;
    height: 10vh; 
    align-content:center ;

   top:0%;
   
}
</style>