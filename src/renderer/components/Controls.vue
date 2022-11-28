<template>
    <div id="controls">
        <div class="left">
            <div id="cover-now" class="left__cover">

            </div>
            <div class="left__title">
                <div id="music-name">
                    fly me to the moon
                </div>
                <div id="music-author">
                    leosum
                </div>
            </div>
        </div>
        <div class="mid">
            <div class="options">
                <div id="last-music" class="option">
0
                </div>
                <div id="play-music" class="option ">
0
                </div>
                <div id="next-music" class="option next">
0
                </div>
            </div>
            <div class="process-line">
                <div class="music-time">3:00</div>
                <input id="process" type="range" name="" >
                <div class="music-time">2:45</div>
            </div>
        </div>
        <div class="right">
            #
        </div>
    </div>
</template>

<script>
    
    export default{
        name:"Controls"
    }
</script>


<style scoped>
#controls{
    background-color: rgb(53, 90, 90);
    height: 100%;
    width: 100%;
    display: flex;
    /* justify-content: space-between; */
}
.left{
    width: 300px;
    background-color: aquamarine;
    display: flex;
    transition: all  0.5s;
}
.left__cover{
    height: 100px;
    width: 100px;
    background-image: url("../assets/headimg.jpg");
    background-position:top;
    background-size: cover;
    flex-shrink:0;
}
.left__title{
    flex: 1;
    display: flex;
    padding-left: 10px;
    flex-direction: column;
    background-color: azure;
}
#music-name{
    flex: 1;
    display: flex;
    align-items:flex-end;
    font-size: 30px;
    font-weight: 500;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsiss;
    /* justify-content: center; */
}
#music-author{
    flex: 1;
    display: flex;
    font-size: 25px;
    opacity: 0.7;
}
.mid{
    flex: 1;
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    background-color: rgb(159, 159, 93);
}
.options{
    flex: 3;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: aquamarine;
}
.option{
    margin: 10px;
    width: 50px;
    height: 50px;
    background-color: beige;

}
.last-music{

}
.play-music{
    margin: 10px 100px;
    transition: all  0.5s;
}
.next-music{

}
.process-line{
    padding: 0 20px;
    width: 100%;
    display: flex;
}
#process{
    width: 100%;
}
.music-time{
    padding:0 5px;
}
.right{
    width: 300px;
    background-color: beige;
    transition: all  0.5s;
}

@media screen and (max-width:1000px) {
    .play-music{
        margin: 10px 40px;
        transition: all  0.5s;
    }
    .left{
        width: 200px;
        transition: all  0.5s;
    }
    .right{
        width: 200px;
        transition: all  0.5s;
    }
}
</style>