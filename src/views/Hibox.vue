<template>
    <div class="content">
        <!-- header fixed -->
        <div class="header">
            <!-- left-icon -->
            <div class="hibox-icon">
                <img src="../assets/img/nav-title-hibox.png" alt="hibox">
            </div>
            <!-- right-nav -->
            <div class="navbar">
                <div class="navbar-item active">Intro</div>
                <div class="navbar-item special-margin">Game</div>
                <div class="navbar-item">Token</div>
                <div class="navbar-item">Marketplace</div>
                <div class="navbar-item">Roadmap</div>
                <div class="navbar-item paper">Paper</div>
            </div>
        </div>
        <div class="section">
            <!-- intro -->
            <div class="intro-content">
                <div class="intro-bg-img">
                    <img class="intro-large" src="../assets/img/intro-hibox-bg.png" alt="HI,hibox">
                    <div class="hi-wd"><span>hi</span><span class="krub">.</span></div>
                    <div class="beginner-wd">BEGINNER'S</div>
                    <div class="join-community-wd"><span>Join the community</span><span class="square"></span></div>
                    <div class="edition-wd">
                        <div class="editions">EDITION</div>
                        <div>2022</div>
                    </div>
                    <div class="links">
                        <div class="twitter-icon incon-links-sm"><img class="twitter-size"
                                src="../assets/img/twitter-link.png" alt="twitter icon"></div>
                        <div class="discord-icon incon-links-sm"><img class="discord-size"
                                src="../assets/img/discord-link.png"></div>
                        <div class="telegram-icon incon-links-sm"><img class="telegram-size"
                                src="../assets/img/telegram-link.png" alt="telegram icon"></div>
                    </div>
                    <div class="read-more">
                        <div class="title">you are quite special</div>
                        <div class="article">Use your unique voice to earn one more chance , and create more
                            possibilities</div>
                        <div class="start-box">
                            <div class="start-btn">let´s start</div>
                            <div class="read-more-tip">read more</div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- game-and-token -->
            <div class="game-and-token">
                <div class="lefe-top-ellipse"></div>
                <div class="cassette-pictrue">
                    <img class="cassette-img" src="../assets/img/cassette.png" alt="cassette">
                </div>
                <div class="right-bottom-ellipse"></div>
                <div class="center-ellipse">

                </div>
                <div class="bottom-ellipse"></div>
                <!-- round-point -->
                <div class="round-point-top-left round-blue"></div>
                <div class="round-point-top-right round-blue"></div>
                <div class="round-point-center-left round-blue"></div>
                <div class="round-point-center-right round-blue"></div>
                <div class="round-point-bottom-left round-blue"></div>
                <div class="round-point-bottom-bl round-blue"></div>
                <div class="round-point-bottom-br round-blue"></div>
                <!-- cube -->
                <div class="cube-left-large"></div>
                <div class="cube-right-large"></div>
            </div>

            <!-- phone -->
            <div class="market">
                <swiper class="swiper" direction="vertical" :options="swiperOption">
                    <swiper-slide class="slide"><img class="complete-silde"
                            src="../assets/img/iPhone 13-market-imgc.png" alt="marketApp"></swiper-slide>
                    <swiper-slide class="slide"><img class="complete-silde"
                            src="../assets/img/iPhone 13-market-imgr.png" alt="marketApp"></swiper-slide>
                    <swiper-slide class="slide"><img class="incomplete-silde"
                            src="../assets/img/iPhone 13-market-imgfl.png" alt="marketApp"><img class="incomplete-silde"
                            src="../assets/img/iPhone 13-market-imgfr.png" style="margin-left:-1px" alt="marketApp">
                    </swiper-slide>
                    <swiper-slide class="slide"><img class="complete-silde"
                            src="../assets/img/iPhone 13-market-imgl.png" alt="marketApp"></swiper-slide>
                    <!-- <swiper-slide class="slide"></swiper-slide> -->
                </swiper>
                <!-- down app comming soon -->
                <div class="down-app">
                    <div class="apple-store-link"></div>
                    <div class="comming-soon">
                        <span class="comming-left-blue"></span>
                        <span class="comming">COMMING SOON</span>
                    </div>
                    <div class="google-play-link"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import 'swiper/dist/css/swiper.css'
    import {
        swiper,
        swiperSlide
    } from 'vue-awesome-swiper'
    export default {
        components: {
            swiper,
            swiperSlide
        },
        data() {
            return {
                swiperOption: {
                    slidesPerView: 4,
                    spaceBetween: 34,
                    loop: true,
                    centeredSlides: true,
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true
                    }
                }
            }
        },
        mounted() {
            // 监听滚动事件
            // window.addEventListener('scroll', this.scrollMove)
        },
        destroyed() {
            // 移除监听器
            // window.removeEventListener('scroll', this.scrollMove)
        },
        methods : {
            
        }
    };
</script>

<style lang="scss" scoped>
    .content {
        width: 100%;

        .header {
            min-width: 1440px;
            position: fixed;
            width: 100% !important;
            height: 96px;
            left: 0px;
            top: 0px;
            border-bottom: 1px solid #656565;
            background-color: #0D0D0D;
            z-index: 1000;

            .hibox-icon {
                float: left;
                cursor: pointer;
                width: 167px;
                height: 39px;
                margin-top: 28px;
                margin-left: 76px;

                img {
                    width: 100%;
                    height: 100%;
                }
            }

            .navbar {
                float: right;
                // width: 714px;
                height: 52px;
                margin-right: 66px;
                margin-top: 22px;

                .navbar-item {
                    float: left;
                    font-family: 'Oswald';
                    font-style: normal;
                    font-weight: 600;
                    font-size: 16.6677px;
                    line-height: 25px;
                    /* identical to box height */
                    display: flex;
                    align-items: flex-end;
                    letter-spacing: 0.407283px;
                    // text-transform: uppercase;
                    color: #FFFFFF;
                    margin-left: 70px;
                    cursor: pointer;

                    &:last-child {
                        color: #000000;
                        background: linear-gradient(94.81deg, #44FFA5 -3.57%, #04CEFF 51.02%, #0280EA 133.92%);
                        border-radius: 6px;
                        font-size: 16.4957px;
                        line-height: 24px;
                        padding: 2px 12px;
                    }
                }

                .special-margin {
                    margin-left: 80px;
                }

                .active {
                    padding-bottom: 20px;
                    border-bottom: 2px solid #FFFFFF;
                }
            }
        }

        .section {
            padding-top: 96px;
            background-color: #111111;
        }

        .intro-content {
            position: relative;
            width: 100%;
            height: 1035px;
            background-color: #0D0D0D;
            overflow: hidden;

            .intro-bg-img {
                position: relative;
                top: 66px;
                left: 0;
                right: 0;
                width: 1251px;
                height: 896px;
                margin: 0 auto;

                .intro-large {
                    width: 100%;
                    height: 100%;
                }
            }

            .hi-wd {
                position: absolute;
                left: -33px;
                top: 185px;
                // font-family: 'Krub';
                font-style: normal;
                font-weight: 700;
                font-size: 101.923px;
                text-transform: uppercase;
                color: #FFFFFF;

                .krub {
                    font-family: 'Krub';
                }
            }

            .beginner-wd {
                position: absolute;
                width: 213px;
                height: 42px;
                left: -122px;
                top: 450px;
                font-family: 'Krub';
                font-style: normal;
                font-weight: 400;
                font-size: 32px;
                line-height: 42px;
                display: flex;
                align-items: flex-end;
                letter-spacing: 3px;
                text-transform: uppercase;
                color: #FFFFFF;
                transform: rotate(-90deg);
            }

            .join-community-wd {
                position: absolute;
                width: 417px;
                height: 36px;
                left: -40px;
                top: 876px;
                font-family: 'Krub';
                font-style: normal;
                font-weight: 700;
                font-size: 28px;
                line-height: 36px;
                display: flex;
                align-items: flex-end;
                letter-spacing: 2px;
                color: #FFFFFF;

                .square {
                    position: relative;
                    width: 12px;
                    height: 36px;
                    // background-color: #FFFFFF;
                    margin-left: 24px;


                    &::after {
                        content: '';
                        position: absolute;
                        width: 12px;
                        height: 12px;
                        top: 58%;
                        background-color: #FFFFFF;
                    }
                }
            }

            .edition-wd {
                position: absolute;
                width: 207px;
                height: 105px;
                left: 1136px;
                top: 843px;
                border: 1px solid #F1F1F1;
                // font-family: 'Product Sans';
                font-style: normal;
                font-weight: 700;
                font-size: 17px;
                // display: flex;
                // align-items: center;
                text-align: center;
                // flex-wrap: wrap;
                letter-spacing: 2px;
                text-transform: uppercase;
                color: #FFFFFF;

                .editions {
                    margin-top: 24px;
                }
            }

            .links {
                position: absolute;
                width: 332px;
                height: 60px;
                left: 473px;
                top: 863px;
                display: flex;
                justify-content: space-between;

                .incon-links-sm {
                    width: 60px;
                    height: 60px;
                    background-color: #FFFFFF;
                    border-radius: 8px;
                    text-align: center;
                    cursor: pointer;

                    .twitter-size {
                        width: 45px;
                        height: 38px;
                        margin-top: 12px;
                    }

                    .discord-size {
                        width: 45px;
                        height: 34px;
                        margin-top: 12px;
                    }

                    .telegram-size {
                        width: 40px;
                        height: 33px;
                        margin-top: 15px;
                    }
                }
            }

            .read-more {
                position: absolute;
                width: 321px;
                height: 256px;
                left: 1032px;
                top: 320px;
                // background: pink;

                .title {
                    font-style: normal;
                    font-weight: 700;
                    font-size: 19.7031px;
                    display: flex;
                    align-items: center;
                    letter-spacing: 2px;
                    text-transform: uppercase;
                    color: #FFFFFF;
                    margin-bottom: 12px;
                    text-indent: 12px;
                }

                .article {
                    font-style: normal;
                    font-weight: 700;
                    font-size: 16.6067px;
                    display: flex;
                    align-items: center;
                    text-align: center;
                    letter-spacing: 0.583393px;
                    color: #FFFFFF;
                    line-height: 27px;
                    padding-right: 23px;
                }

                .start-box {
                    margin: 49px 0 0 22px;
                    height: 47px;

                    .start-btn {
                        float: left;
                        width: 125px;
                        height: 47px;
                        background: linear-gradient(94.81deg, #44FFA5 -3.57%, #04CEFF 51.02%, #0280EA 133.92%);
                        border-radius: 6px;
                        font-family: 'Krub';
                        font-style: normal;
                        font-weight: 700;
                        font-size: 14px;
                        line-height: 47px;
                        letter-spacing: 1.08016px;
                        text-transform: uppercase;
                        text-align: center;
                        color: #000000;
                        cursor: pointer;
                    }

                    .read-more-tip {
                        float: left;
                        height: 47px;
                        line-height: 47px;
                        margin-left: 27px;
                        font-style: normal;
                        font-weight: 700;
                        font-size: 14.3552px;
                        display: flex;
                        align-items: flex-end;
                        letter-spacing: 1.08016px;
                        text-transform: uppercase;
                        color: #FFFFFF;
                    }
                }


            }
        }

        .game-and-token {
            position: relative;
            height: 1764px;

            .lefe-top-ellipse {
                position: absolute;
                width: 186px;
                height: 370px;
                left: 0;
                top: 31px;
                background: url('../assets/img/Ellipse2x.png') no-repeat;
                background-size: 100% 100%;
            }

            .cassette-pictrue {
                position: absolute;
                width: 601px;
                height: 392px;
                left: 720px;
                top: 204px;

                .cassette-img {
                    width: 100%;
                    height: 100%;
                }
            }

            .right-bottom-ellipse {
                position: absolute;
                width: 200px;
                height: 432px;
                right: 0;
                top: 857px;
                background: url('../assets/img/Ellipse-right.png') no-repeat;
                background-size: 100% 100%;
            }

            .center-ellipse {
                position: absolute;
                width: 665px;
                height: 432px;
                left: 50px;
                top: 790px;
                background: url('../assets/img/center-ellipse.png') no-repeat;
                background-size: 100% 100%;
            }

            .bottom-ellipse {
                position: absolute;
                width: 831px;
                height: 382px;
                left: 308px;
                top: 1382px;
                background: url('../assets/img/bottom-ellipse.png') no-repeat;
                background-size: 100% 100%;
            }

            .round-blue {
                position: absolute;
                width: 23px;
                height: 23px;
                background-color: #4FBDFE;
                border-radius: 23px;
            }

            .round-point-top-left {
                left: 141px;
                top: 22px;
            }

            .round-point-top-right {
                left: 1233px;
                top: 104px;
            }

            .round-point-center-left {
                left: 645px;
                top: 782px;
            }

            .round-point-center-right {
                left: 1317px;
                top: 842px;
            }

            .round-point-bottom-left {
                left: 133px;
                top: 1204px;
            }

            .round-point-bottom-bl {
                left: 334.5px;
                top: 1475.6px;
            }

            .round-point-bottom-br {
                left: 1128px;
                top: 1594px;
            }

            .cube-left-large {
                position: absolute;
                height: 283px;
                width: 253px;
                left: 159px;
                top: 764px;
                background: url('../assets/img/Cube-left-large.png') no-repeat;
                background-size: 100% 100%;
            }

            .cube-right-large {
                position: absolute;
                height: 282px;
                width: 256px;
                left: 416px;
                top: 986px;
                background: url('../assets/img/Cube-right-large.png') no-repeat;
                background-size: 100% 100%;
            }
        }

        .market {
            position: relative;
            height: 999px;

            .swiper {

                // margin-top: 5px;
                .swiper-slide {
                    margin-top: 115px;
                    transition: all 0.5s;

                    &:hover {
                        margin-top: 0;
                    }
                }

                .complete-silde {
                    width: 327px;
                    height: 662px;
                }

                .incomplete-silde {
                    float: left;
                    width: 163.5px;
                    height: 662px;
                }
            }
        }

        .down-app {
            position: absolute;
            left: 50%;
            top: 877px;
            transform: translate(-50%, 0);
            height: 70px;
            width: 1015px;
            display: flex;
            justify-content: space-between;
            align-items: center;

            .apple-store-link {
                width: 210px;
                height: 70px;
                background: url('../assets/img/apple-store.png') no-repeat;
                background-size: 100% 100%;
            }

            .comming-soon {
                .comming-left-blue {
                    display: inline-block;
                    width: 12px;
                    height: 12px;
                    background: #4FBDFE;
                    margin-right: 28px;
                }

                .comming {
                    display: inline-block;
                    // font-family: 'Krub';
                    font-style: normal;
                    font-weight: 700;
                    font-size: 16.2489px;
                    color: #FFFFFF;
                }
            }

            .google-play-link {
                width: 210px;
                height: 70px;
                background: url('../assets/img/google-play-store.png') no-repeat;
                background-size: 100% 100%;
            }
        }
    }
</style>