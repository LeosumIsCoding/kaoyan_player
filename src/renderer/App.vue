<template>
  <div id="app">
    <div class="nodrag"></div>
    <div class="title">
      <div class="title__left"></div>
      <div class="title__right">
        <div  @click="turnDark" class="option img-border">
          Dark
        </div>
        <div  @click="turnLight" class="option img-border">
          Light
        </div>
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

    <div id="controls" class="controls">
      <Controls/>
    </div>
    
  </div>
</template>

<script>
const ipcRenderer = require("electron").ipcRenderer
// import img from "./assets/globalDark.css"
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
      },
      turnDark(){
        document.getElementById("theme").href = "./src/renderer/assets/globalDark.css"
      },
      turnLight(){
        document.getElementById("theme").href = "./src/renderer/assets/globalLight.css"
      }
    },
    mounted(){
      if(!document.getElementById("theme")){
        let link = document.createElement("link")
        link.type = 'text/css'
        link.id = 'theme'
        link.rel = 'stylesheet'
        link.href = "./src/renderer/assets/globalDark.css"
        document.getElementsByTagName("head")[0].appendChild(link)
      }

    }
  }
</script>

<style>
  /* CSS */
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
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
    /* opacity: 0.3; */
  }
</style>
