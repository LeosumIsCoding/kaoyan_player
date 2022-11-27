<template>
    <div id="views">
        <div ref="entrys" class="entrys">
            <div class="entry">
123123
            </div>
            <div ref="dragline" id="dragline">

            </div>
        </div>

        <div class="view">
            12321
        </div>
    </div>
</template>

<script>
    
    export default{
        name:"Views",

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
        width: 200px;
        max-width: 300px;
        min-width: 150px;
        background-color: aquamarine;
        position: relative;
        user-select: none;
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
        background-color: rgb(173, 143, 108);
        user-select: none;
    }
</style>