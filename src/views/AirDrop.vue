<template>

    <div class="content">
        <div class="header">
            <div class="header-auto">
                <!-- left-icon -->
                <div class="hibox-icon">
                    <router-link to="/"><img src="../assets/img/nav-title-hibox.png" alt="hibox"></router-link>
                </div>
                <!-- right-nav -->
                <div class="navbar">
                    <a :class="['navbar-item','paper']" href="https://hhh-hashtager.gitbook.io/hibox/overview/introduction" target="_blank">Paper</a>
                </div>
            </div>
        </div>

        <div class="section">
            <!-- intro -->
            <div class="aridrop-content">
                <div class="airdrop-content-auto">
                    <div class="airdrop-left">
                        <div v-if="airdropStatus === 2" class="nftContainer">
                            <div class="ntf-title" >   <!-- 圆弧形文字 --> 
                                <svg viewBox="0 0 100 100">
                                    <path d="M 4,50 a 50,50 0 1, 1 0, 1 z" id="circle"></path>
                                    <text fill="#FFF" font-size="4"> <textPath xlink:href="#circle"> {{nftInfo.title}} </textPath> </text>
                                </svg>
                            </div>
                            <div class="ntf-bgRing" :style="{'border':nftInfo.imageBorder}"></div>
                            <img class="ntf-img" :src="nftInfo.image" />
                        </div>
                        <img v-if="airdropStatus !== 2" class="img" src="../assets/img/nft-box-coming.png" />
                        <div v-if="airdropStatus === 0" @click="connectWallet" class="connect-wallet-wd" >Connect wallet</div>
                        <div v-if="airdropStatus === 1" @click="requestAirdrop" class="connect-wallet-wd" >Free mint</div>
                        <div v-if="airdropStatus === 2" class="connect-wallet-wd" >Mint success</div>
                        <!-- <div class="wallet-addr" >{{walletAddr}}</div> -->
                    </div>

                    <div class="airdrop-right">
                        <div class="header-top">HiBox Airdrop is COMING!!</div>

                        <div class="attr-header">Attribute points</div>

                        <div class="attr-content">
                            <div class="attr-title" style="color:#FF631C">Charisma</div>
                            <div class="attr-value" id="charisma">{{nftInfo.charisma}}</div>
                        </div>
                        <div class="attr-content">
                            <div class="attr-title" style="color:#5A5FFD">Luck</div>
                            <div class="attr-value" id="luck" >{{nftInfo.luck}}</div>
                        </div>
                        <div class="attr-content">
                            <div class="attr-title" style="color#17AAFE">Endurance</div>
                            <div class="attr-value" id="endurance" >{{nftInfo.endurance }}</div>
                        </div>

                        <div class="hpy-address-info">
                            <img class="hpy-indicator-img" src="../assets/img/airdrop-hpy-indicator.png" />

                            <div class="hpy-item-info">
                                <div class="item-title">Power By</div>
                                <div class="item-value">Binace Smart Coin</div>
                            </div>
                            <div class="hpy-item-info">
                                <div class="item-title">Period</div>
                                <div class="item-value">2022/??/?? ??:?? ~2022/??/?? ??:??</div>
                            </div>
                            <div class="hpy-item-info">
                                <div class="item-title">Contract Address</div>
                                <div class="item-value-addr">
                                    <div class="addr-value" id="addr">0x13dae0e8EE9aEF44A4Bd4dDB1D1D29fc72Ec28b6</div>
                                    <button class="addr-copy" @click="copyAddr">copy</button>
                                </div>
                            </div>
                        </div>
                        
                    </div>
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
    import { reject } from 'q';
import HiContract from '../HiAirdrop';
    import hiContract from '../main'
    
    export default {
        data() {
            return {
                walletAddr: "",
                hiboxContr: new HiContract(),

                airdropStatus : 0, // 0 初始状态, 1 连接MetaMask已成功, 2 Airdrop已成功

                nftInfo : {
                    bgColor :'',
                    image: '',
                    imageBorder: "8px solid black",
                    title: '',
                    charisma: '**.*',
                    luck: '**.*',
                    endurance: '**.*',
                },

                // airDropAuthorizedData : {
                //     isConnectWalletOrAirdrop : 0, 
                //     isAirdrop : false,
                // }
            }
        },

        computed: {
            getAccountAddr: function() {
                return this.hiboxContr.accountAddr
            }
        },
        watch: {
            getAccountAddr: {
                handler: function() {
                    let walletAddr = this.hiboxContr.accountAddr;
                    console.log("walletAddr watch", walletAddr)
                },
            }
        },
        mounted() {
            // 监听滚动事件
            console.log('----------------------mouted -------------')
            if (window.ethereum) {
                this.hiboxContr.doinit()
                .then(dataUrl=>{
                    console.log("doinit dataUrl", dataUrl)
                    if (dataUrl == undefined) {
                        reject("No NFT data")
                        this.airdropStatus = 0 // 切换按钮
                    } else {
                        this.hiboxContr.nftDetail(dataUrl)
                        .then(data =>{
                            this.airdropStatus = 2 // 切换按钮
                            this.updateNftUi(data)
                        }).catch((err)=>{
                            console.log("fetch nft err： " + err)
                            this.airdropStatus = 1 // 切换按钮
                        })
                    }
                    // TODO update ui
                }).catch(err =>{
                    this.airdropStatus = 1 // 切换按钮
                })
            } else {
                this.airdropStatus = 0 // 切换按钮
            }
            // this.$message('这是一条消息提示');
        },
        destroyed() {
            // 移除监听器
        },
        methods: {

            updateNftUi(data) {
                if (data.grade == 1) {
                    this.nftInfo.title = 'COMMON#' + data.edition
                } else if (data.grade == 2) {
                    this.nftInfo.title = 'COMMON#' + data.edition
                } else if (data.grade == 3) {
                    this.nftInfo.title = 'COMMON#' + data.edition
                } else if (data.grade == 4) {
                    this.nftInfo.title = 'COMMON#' + data.edition
                } else {
                    this.nftInfo.title = 'COMMON#' + data.edition
                }

                this.nftInfo.bgColor = "#" + data.attributes.backgroundColor
                this.nftInfo.image = data.image
                this.nftInfo.charisma = data.attributes.charisma
                this.nftInfo.luck = data.attributes.luck
                this.nftInfo.endurance = data.attributes.endurance

                this.nftInfo.imageBorder= "8px solid #" + data.attributes.backgroundColor

                // {
                //     "name": "SPYICON  #40",
                //     "description": "The Spy Icon",
                //     "image": "https://www.hibox.tel/web3/imgs/687aa64ded3e7687002f01e023cd0bddeae10efb.png",
                //     "dna": "687aa64ded3e7687002f01e023cd0bddeae10efb",
                //     "edition": 40,
                //     "date": 1660897419251,
                //     "attributes": {
                //         "backgroundColor": "719DCC",
                //         "grade": 1,
                //         "level": 0,
                //         "mint": 0,
                //         "charisma": 6.5,
                //         "luck": 7.0,
                //         "endurance": 8.3
                //     },
                //     "compiler": "HashLips Art Engine"
                // }
                console.log('updateNftUI done')
            },

            // 连接MetaMask
            connectWallet() {
                // console.log(this.hiboxContr);
                this.hiboxContr.connectMetamask()
                .then(res => {
                    console.log(res)
                    this.airdropStatus = 1 // 切换按钮
                    console.log('是否赋值成功---' + this.hiboxContr.accountAddr)
                }).catch((err) => {
                    // debug
                    this.airdropStatus = 0 // 切换按钮
                    alert(err)
                })
            },

            // 获取Mint
            requestAirdrop () {
                // HiAirdrop文件实例化里面的对象方法
                if (this.hiboxContr.airdropRequestFlag < 1 ) {
                    this.hiboxContr.requestAirdrop()
                    .then(dataUrl => {
                        console.log('requestAirdrop dataUrl ' , dataUrl)
                        this.hiboxContr.nftDetail(dataUrl)
                        .then(data =>{
                            this.airdropStatus = 2 // 切换按钮
                            this.updateNftUi(data)
                        }).catch((err)=>{
                            console.log("fetch nft err： " + err)
                            this.airdropStatus = 1 // 切换按钮
                        })
                    })
                    .catch(err => {
                        console.log('requestAirdrop err ', err)
                        this.airdropStatus = 1 // 切换按钮
                    })
                }
            },

            copyAddr() {
                const el = document.createElement('textarea');
                el.value = "0x13dae0e8EE9aEF44A4Bd4dDB1D1D29fc72Ec28b6";
                el.setAttribute('readonly', '');
                el.style.position = 'absolute';
                el.style.left = '-9999px';
                document.body.appendChild(el);
                const selected = document.getSelection().rangeCount > 0 ? document.getSelection().getRangeAt(0) : false;
                el.select();
                document.execCommand('copy');
                document.body.removeChild(el);
                if (selected) {
                    document.getSelection().removeAllRanges();
                    document.getSelection().addRange(selected);
                }
            },
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
                        font-family: 'Product Sans';
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
            background-color: #000000;
        }

        .aridrop-content {
            position: relative;
            width: 1440px;
            margin: 0 auto;
            height: 738px;
            background-color: #000000;
            overflow: hidden;

            .airdrop-content-auto {
                width: 1440px;
                margin: 0 auto;
            .airdrop-left {
                position: relative;
                top: 0;
                left: 0;
                width: 581px;
                height: 738px;

                .img {
                    width: 384px;
                    height: 460px;
                    margin-left: 110px;
                    margin-top: 51px;
                }

                .nftContainer {
                    position: relative;
                    width: 398px;
                    height: 402px;
                    margin-left: 126px;
                    // margin-top: 51px;
                    margin-top: 109px;

                    .ntf-bgRing {
                        position: absolute;
                        width: 374px;
                        height: 374px;
                        text-align: center;
                        line-height: 380px;
                        left: 0%;
                        right: 6.1%;
                        top: 6.69%;
                        bottom: 0%;
                        border-radius:50%;
                        background-color: #000;
                        border: 8px solid yellow;
                    }

                    .ntf-title { // circle
                        position: absolute;
                        width: 390px;
                        height: 390px;
                        margin: 0px;
                        top: 1.69%;
                        transform: rotate(100deg); 
                        .svg{
                            display: block;
                            overflow: visible;
                        }
                        .path{ 
                            fill: none; 
                        }
                    }

                    // .ntf-title {
                    //     position: absolute;
                    //     left: 50%;
                    //     top : 2%;
                    //     transform: rotate(-60deg);
                    //     color: #FFFFFF;
                    // }

                    .ntf-img {
                        position: absolute;
                        width: 338px;
                        height: 338px;
                        left: 4.57%;
                        right: 10.67%;
                        top: 11.23%;
                        bottom: 4.54%;
                        border-radius:50%;
                    }

                }



                .connect-wallet-wd {
                    position: absolute;
                    width: 276px;
                    height: 53px;
                    text-align: center;
                    line-height: 53px;
                    // font-family: 'Krub';
                    font-style: normal;
                    font-weight: 700;
                    font-size: 30px;
                    text-transform: none;
                    // text-transform: uppercase;
                    color: #FFFFFF;
                    margin-top: 340px;
                    background: linear-gradient(94.81deg, #44FFA5 -3.57%, #04CEFF 51.02%, #0280EA 133.92%);
                    // padding: 2px 32px;
                    border-radius: 30px;
                    
                    margin-left: 170px;
                    margin-top: 60px;
                    cursor: pointer;

                    .krub {
                        font-family: 'Product Sans';
                    }
                }

                .wallet-addr {
                    position: absolute;
                    // font-family: 'Krub';
                    font-style: normal;
                    font-weight: 700;
                    font-size: 16px;
                    text-transform: none;
                    // text-transform: uppercase;
                    color: #FFFFFF;
                    margin-top: 380px;
                    margin-left: 120px;
                    margin-top: 120px;

                    .krub {
                        font-family: 'Product Sans';
                    }
                }
            }

            .airdrop-right {
                position: absolute;
                top: 0;
                right: 67px;
                width: 792px;
                height: 450px;
                margin-left: 600px;
                margin-top: 126px;

                .header-top {
                    font-family: 'Product Sans';
                    font-style: normal;
                    font-weight: 700;
                    // font-size: 19.7031px;
                    font-size: 38px;
                    display: flex;
                    align-items: center;
                    letter-spacing: 2px;
                    text-transform:none;
                    color: #FFFFFF;
                }

                .attr-header {
                    font-family: 'Product Sans';
                    font-style: normal;
                    font-weight: 700;
                    // font-size: 19.7031px;
                    font-size: 26px;
                    display: flex;
                    align-items: center;
                    letter-spacing: 2px;
                    text-transform:none;
                    color: #FFFFFF;
                    margin-top: 86px;
                }

                .attr-content {
                    display: flex;
                    justify-content: flex-start;
                    font-family: 'Product Sans';
                    font-style: normal;
                    font-weight: 700;
                    font-size: 14px;
                    text-transform:none;
                    line-height: 27px;
                    margin-top: 22px;

                    .attr-title {
                        width: 194px;
                        color: #0280EA;
                    }

                    .attr-value{
                        margin-left: 20px;
                        color: #D6FAED;
                    }
                }

                // .coin-info-content {
                //     font-family: 'Krub';
                //     font-style: normal;
                //     font-weight: 700;
                //     font-size: 17px;
                //     color: #FFFF00;
                //     line-height: 27px;
                //     margin-top: 12px;

                //      .coin-name {
                //         float: left;
                //         width: 100px;
                //         color: #44FFA5;
                //     }

                //     .coin-value {
                //         margin-left: 20px;
                //         color: #44FFA5;
                //     }
                // }

                .hpy-address-info {
                    display: flex;
                    justify-content: flex-start;
                    float: left;
                    height: 24px;
                    margin-top: 112px;

                    .hpy-indicator-img {
                        width: 48px;
                        height: 48px;
                        margin-right: 10px;
                    }

                    .hpy-item-info {
                        font-size: 16px;
                        margin-right: 18px;
                        
                        .item-title {
                            line-height: 24px;
                            color: #888888;
                        }

                        .item-value {
                            line-height: 24px;
                            color: #FFFFFF;
                        }

                        .item-value-addr {
                            display: flex;
                            justify-content: flex-start;
                            align-items: center;

                            .addr-value {
                                width: 120px;
                                line-height: 24px;
                                color: #3A63FB;
                                text-overflow: ellipsis;
                                overflow: hidden;
                            }
                            .addr-copy {
                                margin-left: 8px;
                                color: #FFFFFF;
                                font-size: 8px;
                                padding: 0px 4px;
                                text-align: center;
                                border: 0;

                                background: #3A63FB;
                                border-radius: 8px;
                            }
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
                        font-family: 'Product Sans';
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
                font-family: 'Product Sans';
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
                font-family: 'Product Sans';
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