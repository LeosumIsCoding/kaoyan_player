<template>
    <div id="views">
        <div ref="entrys" class="entrys">
            <div  id="logo">
                    <span>123132123</span>
            </div>
            <div id="headimg">

            </div>
            <div class="entry">
                <div id="home" class="entry-option"></div>
                <div id="import" class="entry-option"></div>
                <div id="sys-setting" class="entry-option"></div>
            </div>
            <!-- <div  ref="dragline" id="dragline"></div> -->
        </div>

        <div class="view">
            12321
        </div>
    </div>
</template>

<script>
    
    export default{
        name:"Views",
        data() {
            return {

            }
        },
        methods:{
            minEntrys(){
                this.$refs.entrys.style.width = "3px"
            }
        },

        mounted(){
            let dragline = this.$refs.dragline
            // @ts-ignore
            let entrys = this.$refs.entrys
            const move = function(e){
                entrys.style.width = e.clientX + "px"
            }
            // @ts-ignore
            dragline.addEventListener("mousedown", (e)=>{
                document.addEventListener("mousemove",move)
            })
            document.addEventListener("mouseup", function(){
                    document.removeEventListener("mousemove", move)
            })
        }   
    }
</script>


<style scoped>
    #views{
        /* background-color: brown; */
        height: 200px;
        height:100%;
        margin-bottom: 120px;
        display: flex;
    }
    .entrys{
        width:80px;
        /* max-width: 100px;
        min-width: 2px; */
        /* background-color: aquamarine; */
        position: relative;
        user-select: none;
        display: flex;
        flex-direction: column;
        align-items: center;
        overflow: hidden;
    }
    .entrys >#logo{
        height: 40px;
        width: 100%;
        /* background-color: rgb(10, 226, 226); */
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .entrys > #headimg{
        margin-top: 10px;
        height: 60px;
        width: 60px;
        /* padding: 5px; */
        border-radius: 100%;
        background-image: url("../assets/headimg.jpg");
        background-size: cover;
        background-position: top;
    }
    .entry{
        /* height: 100%; */
        width: 100%;
        /* background-color: beige; */
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .entry-option{
        margin-top: 35px;
        height: 50px;
        width: 50px;

        /* background-color: rgb(0, 255, 225); */
        opacity: 0.6;
    }
    .entry-option > img{
        height: 100%;
    }
    #dragline{
        width: 3px;
        height: 100%;
        position: absolute;
        right: 0;
        top: 0;
        cursor:col-resize;
        background-color: rgba(0, 0, 0, 0.193);
    }
    #dragline:hover{
        background-color:rgba(30, 129, 114, 0.748);
        transition: all 0.5s;
    }
    .view{
        flex: 1;
        /* background-color: rgb(173, 143, 108); */
        user-select: none;
    }
</style>