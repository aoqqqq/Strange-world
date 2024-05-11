<script setup lang="ts"></script>

<template>
        <div class="setbasePos2">
            <slot>     </slot>
       </div>
</template>


<style>

.setbasePos2
{
    position: absolute;
    width: 25vw;
    height:80vh;
    top: 15%;
    left: 5%;
    word-wrap: break-word;
    overflow-y: auto;
    border-radius: 2%;
    box-shadow: 0px 0px 8px rgb(0, 255, 255);
    backdrop-filter: blur(1px);
    color: rgb(251, 255, 0);
    background-color: rgba(0, 255, 255, 0.171);
}
</style>