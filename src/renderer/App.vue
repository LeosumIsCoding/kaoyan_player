<template>
  <div id="app">
    <div class="nodrag"></div>
    <div class="title">
      <div class="title__left"></div>
      <div class="title__right">
        <div  @click="min" class="option img-border">
          min
        </div>
        <div v-if="isMax"  @click="max" class="option img-border">
          min!
        </div>
        <div v-else @click="max" class="option img-border">
          max!
        </div>
        <div @click="close" class="option img-border">
          close
        </div>
      </div>
    </div>

    <div class="views">
      <Views/>
    </div>

    <div class="controls">
      <Controls/>
    </div>
    
  </div>
</template>

<script>
const ipcRenderer = require("electron").ipcRenderer

import Views from "./components/Views.vue"
import Controls from "./components/Controls.vue"
  export default {
    name: 'mp4linux',
    components:{Views, Controls},
    data() {
      return {
        isMax:false
      }
    },

    methods:{
      min(){
        ipcRenderer.send("minimizeMainWindow")
      },
      max(){
        ipcRenderer.send("maximizeMainWindow")
        this.isMax = !this.isMax
      },
      close(){
        ipcRenderer.send("closeMainWindow")
      }
    },
    mounted(){
      // ipcRenderer.on("heihei",(value)=>{
      //   console.log(value)
      // })
      console.log(this,"12312321312321");
    }
  }
</script>

<style>
  /* CSS */
  body,html{
    margin: 0;
    padding: 0;
    box-sizing: content-box;
  }

  #app{
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    /* display: flex;
    flex-direction: column; */
    overflow: hidden;
  }
  .nodrag{
    position: absolute;
    top: 0;
    height: 3px;
    opacity: 0;
  }
  .title{
    position: absolute;
    top: 3px;
    height: 40px;
    width: 100%;
    z-index: 10;
    -webkit-app-region: drag;
    display: flex;
    justify-content: space-between;
    
  }
  .title__left{

  }
  .title__right{
    display: flex;
  }
  .title__right > .option{
    height: 100%;
    width: 60px;
    -webkit-app-region: no-drag;

  }
  .title__right > .option:hover{
    background-color: rgb(55, 60, 64);
  }
  .views{
    position: absolute;
      width: 100%;
      height: 100%;
      /* background-color: aquamarine; */
      padding-bottom: 100px;
  }
  .controls{
    height: 100px;
    width: 100%;
    position:fixed;
    bottom: 0;
  }
</style>
