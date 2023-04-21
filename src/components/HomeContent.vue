<template>
    <div class="content">
        <div class="top-content">
            <div class="girl1">
                <img src="../assets/images/girl1.png" alt="gril-one" />
            </div>
            <div class="flower" />
            <div class="carrot" />
            <div class="card-one-bg">
                <div class="card-text-title">YOU ARE QUITE SPECIAL</div>
                <div class="card-text-summary">Use your unique voice to earn one more chance, and create more possibilities</div>

                <div class="card-btn-start">LET'S START</div>
                <div class="card-btn-readmore">READ MORE</div>
            </div>
            <div class="butterfly" />

            <div class="gameplay-text">GAMEPLAY</div>
            <div class="video-container">
                <video ref="videoPlayer" :src="videoUrl" @play="onPlay" @pause="onPause"></video>
                <img src='../assets/images/ic_pause.png'
                        @click="togglePlay" :class="{ playing: isPlaying }" v-if="isPlaying"/>
                <img src='../assets/images/ic_play.png' @click="togglePlay" v-else />
            </div>
            <div class="btn-app-download">APP DOWNLOAD</div>
            <div class="girl2" />
        </div>

        <div class="bottom-content">
            <div class="market">
                <h class="market-title">MARKETPLACE</h>
                <p class="market-text">Each of our Nft has a unique image. It can be traded publicly on our in-game platform.</p>
            </div>

            <div class="game-images">
                <img src="../assets/images/game1.png" alt="game1" />
                <img src="../assets/images/game2.png" alt="game2" />
                <img src="../assets/images/game3.png" alt="game3" />
                <img src="../assets/images/game4.png" alt="game4" />
            </div>

            <h class="roadmap-title">ROADMAP</h>
            <div class="roadmap-star" />
            <div class="roadmap-content">
                <div class="roadmap-info">
                    <h1>Q3 2023</h1>
                </div>
                <div class="roadmap-info">
                    <h1>Q4 2023</h1>
                </div>
                <div class="roadmap-info">
                    <h1>Q1 2024</h1>
                </div>
                <div class="roadmap-info">
                    <h1>Q2 2024</h1>
                </div>
            </div>
        </div>
    </div>
   
</template>
  <script>
  export default {
    name: 'HomeContent',
    data() {
      return {
        videoUrl: 'https://example.com/video.mp4', // 视频地址
        isPlaying: false, // 是否正在播放
      }
    },
    methods: {
      togglePlay() {
        const video = this.$refs.videoPlayer
        if (this.isPlaying) {
          video.pause()
        } else {
          video.play()
        }
        this.isPlaying = !this.isPlaying
      },
      onPlay() {
        this.isPlaying = true
      },
      onPause() {
        this.isPlaying = false
      },
    },
  }
  </script>
  
  <style lang="scss" scoped>
  .top-content {
        width: 100% !important;
        /* 矩形 3 */
        position: absolute;
        height: 2336px;
        min-width: 1920px;
        left: 0;
        top: 0;
        background: linear-gradient(180.00deg, rgba(78,67,163,1.00),rgba(0,85,131,1.00) 100%);
        z-index: -2;
        .girl1 {
            /* 图像 2 */
            position: absolute;
            width: 975px;
            height: 975px;
            left: 103px;
            top: 104px;
        }
        .flower {
            /* 图像 4 */
            position: absolute;
            width: 975px;
            height: 975px;
            left: 352px;
            top: 104px;
            background: url('../assets/images/card_bottom_left.png') no-repeat;
            z-index: -1;
        }
        .card-one-bg {
            /* 矩形 10 */
            position: absolute;
            width: 794px;
            height: 526px;
            left: 960px;
            top: 374px;

            background: rgba(0, 0, 0, 0.26);
            border-radius: 27px;
            z-index: 1;

            /* 简化文本样式 */
            font-family: PingFang SC;
            font-size: 35px;
            color: #fff;
            font-weight: normal;
            line-height: 1.5;
            letter-spacing: 0;

            /* 简化文本位置样式 */
            z-index: 2;
        }

            /* 简化标题位置 */
        .card-text-title {
            position: absolute;
            width: 645px;
            height: 160px;
            left: 12.59%;
            right: 12.81%;
            top: 7.46%;
            opacity: 1.0;
            z-index: 3;
        }

            /* 简化摘要位置 */
        .card-text-summary {
            position: absolute;
            width: 645px;
            height: 260px;
            left: 12.59%;
            right: 12.81%;
            top: 26.46%;
            opacity: 1.0;
            z-index: 3;
        }

        .card-btn-start {
            /* 矩形 8 */
            position: absolute;
            width: 267px;
            height: 79px;
            left: 15%;
            top: 70%;

            background: linear-gradient(0.00deg, rgba(63,59,161,1.00),rgba(10,0,127,1.00) 107.129%);
            border: 2px solid rgb(255, 255, 255);
            box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);

            border-radius: 27px;


            color: rgb(255, 255, 255);
            font-family: PingFang SC;
            font-size: 27px;
            font-weight: undefined;
            line-height: 79px;
            letter-spacing: 0px;
            text-align: center;
        }
        .card-btn-readmore {
              /* 矩形 8 */
            position: absolute;
            width: 267px;
            height: 79px;
            left: 55%;
            top: 70%;

            background: linear-gradient(0.00deg, rgba(63,59,161,1.00),rgba(10,0,127,1.00) 107.129%);
            border: 2px solid rgb(255, 255, 255);
            box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);

            border-radius: 27px;

            color: rgb(255, 255, 255);
            font-family: PingFang SC;
            font-size: 27px;
            font-weight: undefined;
            line-height: 79px;
            letter-spacing: 0px;
            text-align: center;
        }

        .butterfly {
            /* 图像 7 */
            position: absolute;
            width: 470px;
            height: 470px;
            right: 10%;
            top: 28.83%;

            background: url('../assets/images/butterfly.png') no-repeat;
        }
        .carrot {
            /* 图像 3 */
            position: absolute;
            width: 734px;
            height: 758px;
            left: 1160px;
            top: 192px;

            background: url('../assets/images/card_top_right.png') no-repeat;
        }

        .gameplay-text {
            /* GAMEPLAY */
            position: absolute;
            width: 349px;
            height: 104px;
            left: 8.65%;
            right: 73.18%;
            top: 52.03%;

            color: rgb(255, 255, 255);
            font-family: PingFang SC;
            font-size: 70px;
            font-weight: undefined;
            line-height: 104px;
            letter-spacing: 0px;
            text-align: left;
        }

        .video-container {
            position: absolute;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 820px;
            height: 520px;
            /* 矩形 6 */
            left: 166px;
            top: 1460px;
            box-sizing: border-box;

            background: linear-gradient(180.00deg, rgba(46,0,172,1.00),rgba(80,194,255,1.00),rgba(0,181,126,1.00) 100%);
            border: 1px solid rgb(112, 112, 112);

            border-radius:26px;
        }

        .video-container video {
            position: absolute;
            width: 100%;
            height: 100%;
            object-fit: cover;

            border-radius:26px;
        }

        .video-container button.playing {
            display: none;
        }

        .btn-app-download{
            /* 矩形 7 */
            position: absolute;
            width: 385px;
            height: 79px;
            left: 379px;
            top: 2099px;

            background: linear-gradient(0.00deg, rgba(63,59,161,1.00) 5.462%,rgba(10,0,127,1.00) 94.538%);
            border: 2px solid rgb(255, 255, 255);
            box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);

            border-radius:    27px;

            /* APP DOWNLOAD */
            color: rgb(255, 255, 255);
            font-family: PingFang SC;
            font-size: 35px;
            font-weight: undefined;
            line-height: 79px;
            letter-spacing: 0px;
            text-align: center;
        }
        .girl2 {
            /* 图像 6 */
            position: absolute;
            width: 1348px;
            height: 1348px;
            left: 713px;
            top: 1079px;

            background: url('../assets/images/girl2.png');
        }
  }

  .bottom-content{
    /* 矩形 11 */
    width: 100%;
    position: absolute;
    min-width: 1920px;
    height: 3313px;
    left: 0;
    top: 2178px;

    background: linear-gradient(180.00deg, rgba(0,83,133,1.00),rgba(0,0,0,1.00) 28.697%);

    .market{
        position: relative;
        width: 1324px;
        height: 611px;
        left: 298px;
        right: 298px;
        top: 329px;
        box-sizing: border-box;

        border: 2px solid rgb(255, 255, 255);

        .market-title{
            /* MARKETPLACE*/
            position: absolute;
            width: 1155px;
            height: 148px;
            left: 85px;
            right: 85px;
            top: 13.88%;

            color: rgb(255, 255, 255);
            font-family: PingFang SC;
            font-size: 100px;
            font-weight: undefined;
            line-height: 148px;
            letter-spacing: 0px;
            text-align: center;
        }

        .market-text{
            /* Each of our Nft has a unique image. It can be traded publicly on our in-game platform. */
            position: absolute;
            width: 1155px;
            height: 148px;
            left: 85px;
            right: 85px;
            top: 47.1%;

            color: rgb(255, 255, 255);
            font-family: PingFang SC;
            font-size: 50px;
            font-weight: undefined;
            line-height: 74px;
            letter-spacing: 0px;
            text-align: center;
        }
    }
    .game-images {
        position: absolute;
        width: 100%;
        display: flex;
        justify-content: space-between;
        padding-left: 128px;
        padding-right: 128px;

        top: 1080px;

        .img {
            width: 390px;
            height: 785px;

            box-sizing: border-box;
            border: 1px solid rgb(112, 112, 112);
            border-radius: 18px;
        }

    }

    .roadmap-title {
        /* ROADMAP */
        position: absolute;
        width: 330px;
        height: 104px;
        left: 8.65%;
        right: 74.17%;
        top: 65.72%;

        color: rgb(255, 255, 255);
        font-family: PingFang SC;
        font-size: 70px;
        font-weight: undefined;
        line-height: 104px;
        letter-spacing: 0px;
        text-align: left;
    }

    .roadmap-star{
        /* 图像 10 */
        position: absolute;
        width: 791px;
        height: 791px;
        left: 60%;
        top: 60.72%;

        background: url('../assets/images/star.png') no-repeat;
    }

    .roadmap-content {
        position: absolute;
        width: 100%;
        display: flex;
        justify-content: space-between;
        padding-left: 128px;
        padding-right: 128px;
        top: 72.72%;

        .roadmap-info {
            width: 358px;
            height: 739px;
            box-sizing: border-box;
            border: 1px solid rgb(112, 112, 112);
            border-radius: 18px;

            box-sizing: border-box;
            background: linear-gradient(180.00deg, rgba(53,48,121,1.00),rgba(91,49,141,1.00) 100%);
            opacity: 0.84;
            border: 1px solid rgb(112, 112, 112);
            border-radius:17px;
            z-index: 1;
            h1 {
                position: absolute;
                width: 358px;
                top: 10%;
                text-align: center;
                color: rgb(255, 255, 255);
                font-family: PingFang SC;
                font-size: 50px;
                text-align: center;
                opacity: 1;
                z-index: 2;
            }
        }
    }
  }
</style>