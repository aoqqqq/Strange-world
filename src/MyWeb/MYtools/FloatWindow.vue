<script setup lang="ts"></script>

<template>
        <div class = "setbasePos"> 
            <slot>     </slot>
        </div>
</template>


<style>
.setbasePos
{
    position: absolute;
    width: 60vw;
    height:80vh;
    top: 15%;
    right: 5%;
    word-wrap: break-word;
    overflow-y: auto;
    border-radius: 2%;
    backdrop-filter:blur(1px) ;
    box-shadow: 0px 0px 8px rgb(50, 245, 109);
    color: rgb(229, 255, 0);
    background-color: rgba(0, 110, 255, 0.253);
}

</style>