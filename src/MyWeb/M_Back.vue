<script setup lang="ts">

import "./MyCss/My_Bk.css";


onMounted(()=>{
    create("BK_1");
});

</script>

<script lang="ts">
import { createElementVNode, onMounted } from "vue";
export function create(getIDname:string) {
    let parent = document.getElementById(getIDname);
    let sum = 0;
    for (let i = 0; i < 3; i++) {
    let pdom = document.createElement("div");
    pdom.style.position ="absolute";
    pdom.style.height="100%"
    pdom.style.width ="100%";
pdom.className="box1";
let t = document.createElement("div");
let t1 = document.createElement("div");

t1.className = "MyName";

        for (let index = 0; index < 100 / 2; index++, sum += 2)
         {

            let newDiv = document.createElement("div");
            newDiv.className = "vfx1";

            let pos: string = sum.toString() + "%";  
             newDiv.style.height = (100).toString()+"vh";
            //  newDiv.style.position = "absolute";
            if (window.screen.width>window.screen.height) {
                newDiv.style.width = (0.25).toString()+"vw";

            }
            else{
                 newDiv.style.width = (0.025).toString()+"vw";
                 newDiv.style.boxShadow="0.5px 0.5px 0.5px 0.5px rgba(0, 0, 0, 0.815)";
            }
           

          
            //  newDiv.style.width = (window.screen.width*0.0025).toString()+"px";
            //  newDiv.style.height = ( Math.max( window.screen.height,window.screen.width)).toString()+"px";
            //  newDiv.style.backgroundColor ="aqua";
            newDiv.style.right = pos;
            switch (index%3) {
                case 0:
                newDiv.style.backgroundColor = "rgb(111, 111, 15)";
                    break;
                case 1:
                newDiv.style.backgroundColor = "rgb(199,164,3)";
               
                    break;
                default:
             
                newDiv.style.backgroundColor = "rgb(230, 230, 20)";
                    break;
            }
            pdom?.appendChild(newDiv);
        } 
        
        if(i==0){

            t1.textContent ="W"
            t1.style.top = "1.2em"
            t1.style.left = "1.5em"
            t1.style.fontSize = "10em"
            t1.style.color= "#90c9ff";
                parent?.appendChild(t1);
        }
    
        parent?.appendChild(pdom);
        
       switch (i) {
       case 2:
        
                t.className = "MyName";
                t.textContent ="W"
                t.style.top = "5em"
                t.style.left = "-0.5em"
              
                parent?.appendChild(t);
                break;
            case 1:
                t.className = "MyName";
                t.textContent = "傲"
                t.style.top = "3.5em"
                t.style.left = "0.4em"
                t.style.fontSize = "6em"
                t.style.color= "#4a8fcf"; 
                parent?.appendChild(t);
                break;
            case 0:
            t.className = "MyName";
                t.textContent = "奇"
                t.style.top = "2.1em"
                t.style.left = "1em"
                t.style.fontSize = "8em"
                t.style.color= "#d48ab8";
                parent?.appendChild(t);
                break;
        }

        pdom.style.transform = "rotate("+(i*60)+"deg)";
       
        const c = document.createElement("div");
        c.className = "BKCircle";
        parent?.appendChild(c);
        sum = 0;
    }

}
</script>


<template>

<div class="Bkcolor" >

<div id="BK_1"></div>

<p>2</p>
<p>2</p>
<p>2</p>
<p>2</p>
<p>2</p>
</div>
<!-- <div class="BKCircle">
</div> -->

</template>

<style>
.MyName{
    position: absolute;
    width: 100%;
    height: 100%;
    text-align: center;
    top :3em;
    color: #95d6c3; 
    text-shadow:2px 2px 10px #1100ff;
    font-size: 5em;
    rotate: -20deg;

}
div.vfx1
{

    /* rgb(187, 184, 33) */
position: absolute;
box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.815);


}
div.box1
{
scale:3;

}

div.BKCircle
{
    position: absolute;
    
    width: 100%;
    height: 100%;
    top: 0%;
     background: radial-gradient(rgba(0, 0, 0, 0),rgba(0, 0, 0, 0.712),rgb(0, 0, 0));
 
    animation:BKcirAnim 7s infinite;
}

@keyframes BKcirAnim{
    0%{
        scale: 1.7;
    }
    50%{
        scale:1;
    }
    100%
    {  scale: 1.7;

    }
}
</style>