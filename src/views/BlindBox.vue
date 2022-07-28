<template>

    <div class="content">
        <div class="header">
            <div class="header-auto">
                <!-- left-icon -->
                <div class="hibox-icon">
                    <img src="../assets/img/nav-title-hibox.png" alt="hibox">
                </div>
                <!-- right-nav -->
                <div class="navbar">
                    <div @click="activeHandle(0)" :class="['navbar-item', {'active': activeIndex==0}]">Market</div>
                    <div @click="activeHandle(1)" :class="['navbar-item','special-margin',{'active': activeIndex==1}]">Game</div>
                    <a :class="['navbar-item','paper']" href="https://hhh-hashtager.gitbook.io/hibox/overview/introduction" target="_blank">Paper</a>
                </div>
            </div>
        </div>

        <div class="section">
            <!-- intro -->
            <div class="nft-box-content">
                <div class="nft-box-img">
                    <img src="../assets/img/nft-box-coming.png" />
                </div>
            </div>
            <!-- start -hibox -->
            <div class="start-hibox">
                <div class="start-hibox-auto">
                <div class="hibox-nav-bt">
                    <img src="../assets/img/group-hibox-b-nav.png" alt="start hibox">
                </div>
                <div class="download">
                    <div class="app-store-down"></div>
                    <div class="google-play-down"></div>
                </div>
                <div class="follow-us-content">
                    <div class="follow-us-link">
                        <div class="tip">Follow us:</div>
                        <a class="telegram-icon incon-links-sm" href="https://t.me/HiBoxOfficial" target="_blank"><img
                                class="telegram-size" src="../assets/img/telegram-link.png" alt="telegram"></a>
                        <a class="discord-icon incon-links-sm" href="https://discord.gg/sp9zXe497K" target="_blank"><img
                                class="discord-size" src="../assets/img/discord-link.png"></a>
                        <a class="twitter-icon incon-links-sm" href="https://twitter.com/HiBoxOfficial"
                            target="_blank"><img class="twitter-size" src="../assets/img/twitter-link.png"
                                alt="twitter"></a>
                    </div>
                </div>
                <div class="bottom-title">Let's start a new journey with HiBox</div>
                <div class="copyright">Copyright © 2022 • HiBox.Tel All rights reserved</div>
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
                },
                activeIndex: 0,
                setScrollTop: 0,
                stopscroll: 0,
                timer: null,
            }
        },
        mounted() {
            // 监听滚动事件
            window.addEventListener('scroll', this.scrollMove)
        },
        destroyed() {
            // 移除监听器
            window.removeEventListener('scroll', this.scrollMove)
        },
        methods: {
            connectWallet() {
                if (window.ethereum) {
                    window.ethereum.enable().then((res) => {
                    alert("当前钱包地址:" + res[0]);
                    });
                } else {
                    alert("请安装MetaMask钱包");
                }
            },
            activeHandle(index) {
                switch (index) {
                    case 0:
                        window.scrollTo({
                            top: 0,
                            behavior: "smooth"
                        })
                        break;
                    case 1:
                        window.scrollTo({
                            top: 1040,
                            behavior: "smooth"
                        })
                        break;
                    case 2:
                        window.scrollTo({
                            top: 1760,
                            behavior: "smooth"
                        })
                        break;
                    case 3:
                        window.scrollTo({
                            top: 2400,
                            behavior: "smooth"
                        })
                        break;
                    case 4:
                        window.scrollTo({
                            top: 3880,
                            behavior: "smooth"
                        })
                        break;
                }
                this.activeIndex = index
            },
            scrollMove() {
                clearTimeout(this.timer);
                this.timer = setTimeout(this.scrollEnd, 100);
                // 2.获取当前页面的卷曲高度
                this.setScrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
            },
            scrollEnd() {
                this.stopscroll = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
                if (this.stopscroll == this.setScrollTop) {
                    if (this.setScrollTop >= 0 && this.setScrollTop < 1040) {
                        this.activeIndex = 0
                    } else if (this.setScrollTop >= 1040 && this.setScrollTop < 1760) {
                        this.activeIndex = 1
                    } else if (this.setScrollTop >= 1760 && this.setScrollTop < 2400) {
                        this.activeIndex = 2
                    } else if (this.setScrollTop >= 2400 && this.setScrollTop < 3880) {
                        this.activeIndex = 3
                    } else {
                        this.activeIndex = 4
                    }
                }
            }
        }
    };
</script>

<style lang="scss" scoped>
    .content {
        width: 100%;
        overflow-x: hidden;

        .header {
            // min-width: 1440px;
            position: fixed;
            width: 100% !important;
            height: 96px;
            left: 0px;
            top: 0px;
            border-bottom: 1px solid #656565;
            background-color: #0D0D0D;
            z-index: 100;
            .header-auto {
                width: 1440px;
                height: 96px;
                margin: 0 auto;
            .hibox-icon {
                float: left;
                cursor: pointer;
                width: 208px;
                height: 61px;
                margin-top: 16px;
                margin-left: 56px;

                img {
                    width: 100%;
                    height: 100%;
                }
            }

            .navbar {
                float: right;
                // width: 714px;
                height: 52px;
                margin-right: 38px;
                margin-top: 22px;

                .navbar-item {
                    float: left;
                    font-family: 'Krub';
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
        }
        .section {
            padding-top: 96px;
            background-color: #111111;
        }

        .nft-box-content {
            position: relative;
            width: 100%;
            height: 960px;
            background-color: #0D0D0D;
            overflow: hidden;

            .intro-content-auto {
                width: 1440px;
                margin: 0 auto;
            .nft-box-img {
                position: relative;
                top: 66px;
                left: 0;
                right: 0;
                width: 1251px;
                height: 896px;
                margin: 0 auto;

                .intro-large {
                    width: 40%;
                    height: 60%;
                }
            }

            .connect-wallet-wd {
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
                // font-family: 'Krub';
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
                left: 700px;
                top: 902px;
                font-family: 'Krub-Regular';
                font-style: normal;
                font-weight: 400;
                font-size: 28px;
                line-height: 36px;
                display: flex;
                align-items: flex-end;
                letter-spacing: 2px;
                color: #FFFFFF;
                .community-bold {
                    font-family: 'Krub';
                }

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
                        top: 49%;
                        background-color: #FFFFFF;
                    }
                }
            }

            .edition-wd {
                position: absolute;
                width: 207px;
                height: 105px;
                left: 1137px;
                top: 0;
                border: 1px solid #F1F1F1;
                font-family: 'MyriadPro-Bold';
                font-style: normal;
                font-weight: 700;
                font-size: 24px;
                // display: flex;
                // align-items: center;
                text-align: center;
                // flex-wrap: wrap;
                letter-spacing: 2px;
                text-transform: uppercase;
                color: #FFFFFF;

                .editions {
                    margin-top: 24px;
                    font-size: 20px;
                }
            }

            .links {
                position: absolute;
                width: 174px;
                height: 44px;
                right: 9px;
                top: 902px;
                display: flex;
                justify-content: space-between;

                .incon-links-sm {
                    display: block;
                    width: 44px;
                    height: 44px;
                    background-color: #FFFFFF;
                    border-radius: 8px;
                    text-align: center;
                    cursor: pointer;

                    .twitter-size {
                        width: 33px;
                        height: 28px;
                        margin-top: 8px;
                    }

                    .discord-size {
                        width: 32px;
                        height: 25px;
                        margin-top: 9px;
                    }

                    .telegram-size {
                        width: 29px;
                        height: 24px;
                        margin-top: 11px;
                        margin-right: 4px;
                    }
                }
            }

            .read-more {
                position: absolute;
                // width: 321px;
                width: 438px;
                height: 256px;
                left: 42px;
                top: 578px;

                .title {
                    font-family: 'Krub';
                    font-style: normal;
                    font-weight: 700;
                    // font-size: 19.7031px;
                    font-size: 48px;
                    display: flex;
                    align-items: center;
                    letter-spacing: 2px;
                    text-transform: uppercase;
                    color: #FFFFFF;
                }

                .article {
                    font-family: 'Krub';
                    font-style: normal;
                    font-weight: 700;
                    font-size: 17px;
                    color: #FFFFFF;
                    line-height: 27px;
                }

                .start-box {
                    margin-top: 28px;
                    height: 47px;
                    .start-btn {
                        display: block;
                        float: left;
                        width: 125px;
                        height: 47px;
                        // background: linear-gradient(94.81deg, #44FFA5 -3.57%, #04CEFF 51.02%, #0280EA 133.92%);
                        background-color: #50BDFF;
                        border-radius: 6px;
                        font-family: 'Krub';
                        font-style: normal;
                        font-weight: 700;
                        font-size: 14px;
                        line-height: 47px;
                        text-transform: uppercase;
                        text-align: center;
                        color: #FFFFFF;
                        cursor: pointer;
                    }

                    .read-more-tip {
                        float: left;
                        height: 47px;
                        line-height: 47px;
                        margin-left: 27px;
                        font-family: 'Krub';
                        font-style: normal;
                        font-weight: 700;
                        font-size: 14px;
                        display: flex;
                        align-items: center;
                        text-transform: uppercase;
                        color: #35F3BB;
                        .read-more-tip-ic {
                            width: 10px;
                            height: 16px;
                            background: url('../assets/img/vector-2x.png') no-repeat;
                            background-size: 100% 100%;
                            margin-left: 10px;
                        }
                    }
                }
            }
            }
        }

        .start-hibox {            
            height: 740px;
            background-color: #000000;
            .start-hibox-auto {
                width: 1440px;
                height: 740px;
                margin: 0 auto;
            .hibox-nav-bt {
                width: 600px;
                margin: 0 auto;

                img {
                    width: 100%;
                    height: 172px;
                    margin-top: 84px;
                }
            }

            .download {
                    display: flex;
                    justify-content: space-between;
                    width: 280px;
                    margin: 158px 0 0 593px;

                    .app-store-down {
                        width: 123px;
                        height: 41px;
                        background: url('../assets/img/apple-store-b.png') no-repeat;
                        background-size: 100% 100%;
                        // cursor: pointer;
                    }

                    .google-play-down {
                        width: 123px;
                        height: 41px;
                        background: url('../assets/img/google-play-b.png') no-repeat;
                        background-size: 100% 100%;
                        // cursor: pointer;
                    }
                }

            .follow-us-content {
                width: 337px;
                height: 44px;
                // margin: 153px 0 auto auto;
                margin: 24px 0 0 578px;
                display: flex;
                justify-content: space-between;
                align-items: center;

                .follow-us-link {
                    display: flex;
                    // justify-content: space-between;
                    width: 337px;
                    height: 44px;

                    .tip {
                        font-family: 'Krub';
                        font-style: normal;
                        font-weight: 700;
                        font-size: 25px;
                        height: 48px;
                        line-height: 48px;
                        color: #FFFFFF;
                        margin-right: 20px;
                    }

                    .incon-links-sm {
                        display: block;
                        width: 44px;
                        height: 44px;
                        background-color: #FFFFFF;
                        border-radius: 8px;
                        text-align: center;
                        cursor: pointer;

                        .twitter-size {
                            width: 29px;
                            height: 23px;
                            margin-top: 9px;
                        }

                        .discord-size {
                            width: 31.5px;
                            height: 25px;
                            margin-top: 10px;
                        }

                        .telegram-size {
                            width: 33px;
                            height: 27.5px;
                            margin-top: 12px;
                        }
                    }

                    .discord-icon {
                        margin: 0 21px;
                    }
                }
            }

            .bottom-title {
                width: 1202px;
                height: 49px;
                font-family: 'MyriadPro-Bold';
                font-style: normal;
                font-weight: 700;
                font-size: 40px;
                line-height: 48px;
                text-align: center;
                letter-spacing: 6px;
                text-transform: uppercase;
                color: #FFFFFF;
                margin: 73px auto 50px auto;
            }

            .copyright {
                font-family: 'MyriadPro-Bold';
                font-style: normal;
                font-weight: 700;
                font-size: 12px;
                text-align: center;
                letter-spacing: 2.5px;
                text-transform: uppercase;
                color: #FFFFFF;
            }
        }
        }

        input::-webkit-input-placeholder {
            /* WebKit, Blink, Edge */
            color: #FFFFFF;
        }

        input:-moz-placeholder {
            /* Mozilla Firefox 4 to 18 */
            color: #FFFFFF;
        }

        input::-moz-placeholder {
            /* Mozilla Firefox 19+ */
            color: #FFFFFF;
        }

        input:-ms-input-placeholder {
            /* Internet Explorer 10-11 */
            color: #FFFFFF;
        }

        input:focus {
            outline: none;
        }

        textarea::-webkit-input-placeholder {
            /* WebKit, Blink, Edge */
            color: #FFFFFF;
        }

        textarea:-moz-placeholder {
            /* Mozilla Firefox 4 to 18 */
            color: #FFFFFF;
        }

        textarea::-moz-placeholder {
            /* Mozilla Firefox 19+ */
            color: #FFFFFF;
        }

        textarea:-ms-input-placeholder {
            /* Internet Explorer 10-11 */
            color: #FFFFFF;
        }

        textarea:focus {
            outline: none;
        }
    }
</style>