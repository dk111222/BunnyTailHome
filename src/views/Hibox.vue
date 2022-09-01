<template>

    <div class="content">

        <!-- header fixed -->
        <div class="header">
            <div class="header-auto">
            <!-- left-icon -->
            <div class="hibox-icon" @click="hiweb3()">
                <img src="../assets/img/nav-title-hibox.png" alt="hibox">
            </div>
            <!-- right-nav -->
            <div class="navbar">

                <div @click="activeHandle(0)" :class="['navbar-item', {'active': activeIndex==0}]">Intro</div>
                <div @click="activeHandle(1)" :class="['navbar-item','special-margin',{'active': activeIndex==1}]">Game</div>
                <div @click="activeHandle(2)" :class="['navbar-item', {'active': activeIndex==2}]">Token</div>
                <div @click="activeHandle(3)" :class="['navbar-item', {'active': activeIndex==3}]">Marketplace</div>
                <div @click="activeHandle(4)" :class="['navbar-item', {'active': activeIndex==4}]">Roadmap</div>
                <a :class="['navbar-item','paper']" href="https://whitepaper.hibox.tel/"
                    target="_blank">Paper</a>

            </div>
            </div>
        </div>
        <div class="section">
            <!-- intro -->
            <div class="intro-content">
                <div class="intro-content-auto">
                    <div class="intro-bg-img">
                        <img class="intro-large" src="../assets/img/intro-hibox-bg.png" alt="HI,hibox">
                        <div class="hi-wd"><span>hi</span><span class="krub">.</span></div>
                        <div class="beginner-wd">BEGINNER'S</div>
                        <div class="join-community-wd"><span>Join the <span class="community-bold">community</span></span><span class="square"></span></div>
                        <div class="edition-wd">
                            <div class="editions">EDITION</div>
                            <div>2022</div>
                        </div>
                        <div class="links">
                            <a class="telegram-icon incon-links-sm" href="https://t.me/HiBoxOfficial" target="_blank"><img
                                class="telegram-size" src="../assets/img/telegram-link.png" alt="telegram"></a>
                            <a class="discord-icon incon-links-sm" href="https://discord.gg/sp9zXe497K" target="_blank"><img
                                class="discord-size" src="../assets/img/discord-link.png"></a>
                            <a class="twitter-icon incon-links-sm" href="https://twitter.com/HiBoxOfficial"
                                target="_blank"><img class="twitter-size" src="../assets/img/twitter-link.png"
                                    alt="twitter"></a>
                        </div>
                        <div class="read-more">
                            <div class="title">you are quite</div>
                            <div class="title" style="color: #50BDFF;">special</div>
                            <router-link to="airdrop"><div class="start-airdrop" >Airdrop</div></router-link>
                            <!-- <div class="article">Use your unique voice to<br> earn one more chance ,<br> and create more possibilities</div> -->
                            <!-- <div class="start-box">
                                <a class="start-btn" href="https://whitepaper.hibox.tel/" target="_blank">Airdrop</a>
                            </div> -->

                        </div>
                    </div>
                </div>
            </div>
            <!-- game-and-token -->
            <div class="game-and-token" ref="tokens">
                <div class="game-and-auto">
                <div class="lefe-top-ellipse"></div>
                <!-- intro game -->
                <div class="game-intro">
                    <div class="game-intro-title">
                        <span class="game-title">Game.</span>
                        <!-- <span class="game-title-lr">How it works.</span> -->
                    </div>
                    <div class="game-intro-content">
                        Use your unique voice to earn one more chance, meet more sidekicks, create more possibilities while enjoying our game.
                    </div>
                    <!-- <div class="game-intro-more">
                        <div class="how-box">
                            <span class="blue-circle"></span>
                            <span class="how-box-w">How to Play？</span>
                        </div>
                        <div class="how-box">
                            <span class="blue-circle"></span>
                            <span class="how-box-w">What can I get？</span>
                        </div>
                        <div class="how-box">
                            <span class="blue-circle"></span>
                            <span class="how-box-w">About social？</span>
                        </div>
                        <div class="how-box">
                            <span class="blue-circle"></span>
                            <span class="how-box-w">Much more...</span>
                        </div>
                    </div> -->
                    <a class="game-intro-read-more" href="https://whitepaper.hibox.tel/" target="_blank">
                        <span>READ MORE  ></span>
                        <!-- <span class="read-more-tip-ic"></span> -->
                    </a>
                </div>
                <div class="cassette-pictrue">
                    <img class="cassette-img" src="../assets/img/cassette.png" alt="cassette">
                </div>
                <div class="right-bottom-ellipse"></div>
                <div class="center-ellipse">

                </div>
                <div class="token-content">
                    <div class="hibox-token-title">Token.</div>
                    <div class="hibox-token-types">There will be two types of token in HiBox:</div>
                    <div class="hibox-token-game">-HAPPY(Game Token)</div>
                    <div class="hibox-token-governance">-HIBOX(Governance Token)</div>
                    <div class="hibox-token-paper">You can check more info from our white paper.</div>
                    <br />
                    <!-- <div class="hibox-token-more-intro">The only way to get $HAPPY before DEX/CEX goes public is by
                        actively participating in community events and in-game testing.</div> -->
                    <a class="hibox-token-white-paper" href="https://whitepaper.hibox.tel/" target="_blank">white paper</a>
                </div>
                <div class="bottom-ellipse">
                    <div class="market-place">MARKETPLACE</div>
                    <div class="market-nft">Each of our Nft has a unique image.</div>
                    <div class="market-platform">It can be traded publicly on our in-game platform.</div>
                </div>
                <div class="comming-soon-market">
                    <span class="comming-left-blue"></span>
                    <span class="comming">COMMING SOON</span>
                </div>
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
            </div>

            <!-- phone -->
            <div class="market">
                <swiper class="swiper" direction="vertical" :options="swiperOption">
                    <swiper-slide class="slide"><img class="complete-silde"
                            src="../assets/img/iPhone 13-market-imgc.png" alt="marketApp"></swiper-slide>
                    <swiper-slide class="slide"><img class="complete-silde"
                            src="../assets/img/iPhone 13-market-imgr.png" alt="marketApp"></swiper-slide>
                    <swiper-slide class="slide"><img class="complete-silde"
                            src="../assets/img/iPhone 13-market-imgfl.png" alt="marketApp">
                    </swiper-slide>
                    <swiper-slide class="slide"><img class="complete-silde"
                            src="../assets/img/iPhone 13-market-imgl.png" alt="marketApp"></swiper-slide>
                    <!-- <swiper-slide class="slide"></swiper-slide> -->
                </swiper>
                <!-- down app comming soon -->
                <div class="comming-soon">
                    <span class="comming-left-blue"></span>
                    <span class="comming">COMMING SOON</span>
                </div>
                <div class="down-app">
                    <div class="apple-store-link"></div>
                    <div class="google-play-link"></div>
                </div>
            </div>
            <!-- Roadmap -->
            <div class="roadmap">
                <div class="roadmap-title">
                    <div class="roadmap-tl">Roadmap.</div>
                    <div class="roadmap-tr">
                        <div class="left-p"></div>
                        <div class="right-edition">
                            <div class="edition-s">EDITION</div>
                            <div class="edition-time">2022</div>
                        </div>
                    </div>
                </div>
                <div class="roadmap-list">
                    <div class="list-box">
                        <div class="left-top-num">.01</div>
                        <div class="content q1-content">
                            <div class="title">Q1 2022</div>
                            <div class="title-bottom-line"></div>
                            <div class="text">
                                <div class="text-row">1. Born of Concept Framework</div>
                                <div class="text-row">2. Team Building</div>
                                <div class="text-row">3. Gameplay and Model design</div>
                                <div class="text-row">4. Project Start</div>
                            </div>
                        </div>
                        <a class="read-more" href="https://whitepaper.hibox.tel/" target="_blank">
                            <div class="span">READ MORE</div>
                            <span class="read-more-tip-ic"></span>
                        </a>
                    </div>
                    <div class="list-box">
                        <div class="left-top-num">.02</div>
                        <div class="content q2-content">
                            <div class="title">Q2 2022</div>
                            <div class="title-bottom-line"></div>
                            <div class="text">
                                <div class="text-row">1. Official Website Design</div>
                                <div class="text-row">2. Voice & Wallet System Development</div>
                                <!-- <div class="text-row">Development</div> -->
                                <div class="text-row">3. Game Demo Prototype Testing</div>
                            </div>
                        </div>
                        <a class="read-more" href="https://whitepaper.hibox.tel/" target="_blank">
                            <div class="span">READ MORE</div>
                            <span class="read-more-tip-ic"></span>
                        </a>
                    </div>
                    <div class="list-box">
                        <div class="left-top-num">.03</div>
                        <div class="content q3-content">
                            <div class="title">Q3 2022</div>
                            <div class="title-bottom-line"></div>
                            <div class="text">
                                <div class="text-row">1. Whitepaper and Official Website Release</div>
                                <!-- <div class="text-row">Release</div> -->
                                <div class="text-row">2. Online Communities Established</div>
                                <div class="text-row">3. NFT Public Sale</div>
                                <div class="text-row">4. HiBox Beta Version Release</div>
                                <div class="text-row">5. IDO & Pancakeswap</div>
                                <div class="text-row">6. Mint System Development</div>
                            </div>
                        </div>
                        <a class="read-more" href="https://whitepaper.hibox.tel/" target="_blank">
                            <div class="span">READ MORE</div>
                            <span class="read-more-tip-ic"></span>
                        </a>
                    </div>
                    <div class="list-box">
                        <div class="left-top-num">.04</div>
                        <div class="content q4-content">
                            <div class="title">Q4 2022</div>
                            <div class="title-bottom-line"></div>
                            <div class="text">
                                <div class="text-row">1. League Competition System</div>
                                <div class="text-row">2. Daily Task System Development</div>
                                <div class="text-row">3. Achievement System Development</div>
                                <!-- <div class="text-row">Development</div> -->
                                <div class="text-row">4. Staking Mining System Development</div>
                            </div>
                        </div>
                        <a class="read-more" href="https://whitepaper.hibox.tel/" target="_blank">
                            <div class="span">READ MORE</div>
                            <span class="read-more-tip-ic"></span>
                        </a>
                    </div>
                </div>
            </div>
            <!-- join us -->
            <div class="join-us">
                <img class="join-us-img" src="../assets/img/join-us.png" alt="join us">
            </div>
            <!-- here we are members -->
            <div class="members">
                <div class="titles">
                    <div class="title-up">NOW.</div>
                    <div class="title-dn">Here We Are.</div>
                </div>
                <div class="members-list">
                    <div class="content-mem content-member">
                        <div class="head-sculpture">
                            <div class="member-sculpture">
                                <img class="member-sculpture-img" src="../assets/img/member1.png" alt="CEO">
                            </div>
                            <div class="post">CO-FOUNDER</div>
                        </div>
                        <div class="members-intro">
                            <div class="agent-code">• 10+ years of software engineering experience</div>
                            <div class="work-experience">• Passionate about the tech industry</div>
                        </div>
                    </div>
                    <div class="content-mem content-member">
                        <div class="head-sculpture">
                            <div class="member-sculpture">
                                <img class="member-sculpture-img" src="../assets/img/member2.png" alt="CEO">
                            </div>
                            <div class="post">CO-FOUNDER</div>
                        </div>
                        <div class="members-intro">
                            <div class="agent-code">• 5+ years of blockchain development experience</div>
                            <div class="work-experience">• 12+ years of game development experience</div>
                        </div>
                    </div>
                    <div class="content-mem content-member">
                        <div class="head-sculpture">
                            <div class="member-sculpture">
                                <img class="member-sculpture-img" src="../assets/img/member3.png"
                                    alt="product-director">
                            </div>
                            <div class="post">COO</div>
                        </div>
                        <div class="product-director-intro product-director-intro-charmer">
                            <div class="agent-code">• Years of user growth experience</div>
                            <div class="agent-code">• Proficient in fission marketing</div>
                            <div class="agent-code">• Market experience with large projects</div>
                        </div>
                    </div>
                    <div class="content-mem content-member">
                        <div class="head-sculpture">
                            <div class="member-sculpture">
                                <img class="member-sculpture-img" src="../assets/img/member4.png"
                                    alt="head-of-design">
                            </div>
                            <div class="post">Head of Design</div>
                        </div>
                        <div class="product-director-intro">
                            <div class="agent-code">• 12+ years of design experience</div>
                            <div class="work-experience">• Years of game design experience</div>
                            <div class="work-experience">• 5+ years mobile project design experience</div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- feedback -->
            <div class="feedback">
                <div class="feedback-message">
                    <div class="feedback-big-title">FEEDBACK.</div>
                    <div class="feedback-really">We look forward to your constructive suggestions and feedback really</div>
                    <div class="contact-email">CONTACT US : hello@HiBox.com</div>
                    <div class="feedback-name">
                        <input type="text" placeholder="NAME">
                    </div>
                    <div class="feedback-name feedback-mail">
                        <input type="text" placeholder="MAIL">
                    </div>
                    <div class="feedback-more-message">
                        <!-- <input type="textarea" placeholder="MESSAGE"> -->
                        <textarea name="MESSAGE" id="" cols="5" rows="5" maxlength="115"
                            placeholder="MESSAGE"></textarea>
                    </div>
                    <div class="seed-message-btn">send message</div>
                </div>
                <div class="feedback-img">
                    <img class="feedback-bg" src="../assets/img/feedback-img.png" alt="feedback">
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
    // import '../hiweb3.js'
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
                metaMaskAddress: "Connect metamask",
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
            walletConnected() {
                return window.ethereum;
            },

            connectWallet() {
                if (window.ethereum) {
                    window.ethereum.enable().then((res) => {
                        this.metaMaskAddress = "Addr:" +res[0];
                    });
                } else {
                    alert("Please install metamask.");
                }
            },
            toAirdrop() {
                alert("Airdrop comming soom.");
            },

            hiweb3() {
                //引入包
                let Web3 =require('web3')
                // let HDWalletProvider = require('truffle-hdwallet-provider')

                // //2.new一个web3实例
                // let web3 = new Web3()

                // //3.设置metamask Ropsten-network的助记住词，表明花谁的钱
                // let terms = 'truly state fruit rug decide riot shy lake apple orphan october dinosaur'
                const hiboxABI =  [
                        {
                        "inputs": [
                            {
                            "internalType": "uint256",
                            "name": "_airdropTotalAmount",
                            "type": "uint256"
                            },
                            {
                            "internalType": "uint256",
                            "name": "_airdropTerm",
                            "type": "uint256"
                            },
                            {
                            "internalType": "uint256",
                            "name": "_airdropStartTime",
                            "type": "uint256"
                            },
                            {
                            "internalType": "uint256",
                            "name": "_airdropDeadline",
                            "type": "uint256"
                            }
                        ],
                        "stateMutability": "nonpayable",
                        "type": "constructor"
                        },
                        {
                        "anonymous": false,
                        "inputs": [
                            {
                            "indexed": false,
                            "internalType": "address",
                            "name": "receiptAddress",
                            "type": "address"
                            },
                            {
                            "indexed": false,
                            "internalType": "uint256",
                            "name": "amount",
                            "type": "uint256"
                            }
                        ],
                        "name": "erc721TokenAirdropper",
                        "type": "event"
                        },
                        {
                        "inputs": [],
                        "name": "airdropDeadline",
                        "outputs": [
                            {
                            "internalType": "uint256",
                            "name": "",
                            "type": "uint256"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                        },
                        {
                        "inputs": [
                            {
                            "internalType": "address",
                            "name": "",
                            "type": "address"
                            }
                        ],
                        "name": "airdropRecord",
                        "outputs": [
                            {
                            "internalType": "uint256",
                            "name": "",
                            "type": "uint256"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                        },
                        {
                        "inputs": [],
                        "name": "airdropStartTime",
                        "outputs": [
                            {
                            "internalType": "uint256",
                            "name": "",
                            "type": "uint256"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                        },
                        {
                        "inputs": [],
                        "name": "airdropTerm",
                        "outputs": [
                            {
                            "internalType": "uint256",
                            "name": "",
                            "type": "uint256"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                        },
                        {
                        "inputs": [
                            {
                            "internalType": "address",
                            "name": "",
                            "type": "address"
                            }
                        ],
                        "name": "airdropTimeRecord",
                        "outputs": [
                            {
                            "internalType": "uint256",
                            "name": "",
                            "type": "uint256"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                        },
                        {
                        "inputs": [],
                        "name": "airdropTotalAmount",
                        "outputs": [
                            {
                            "internalType": "uint256",
                            "name": "",
                            "type": "uint256"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                        },
                        {
                        "inputs": [
                            {
                            "internalType": "address",
                            "name": "",
                            "type": "address"
                            }
                        ],
                        "name": "airdropWhitelistNum",
                        "outputs": [
                            {
                            "internalType": "uint256",
                            "name": "",
                            "type": "uint256"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                        },
                        {
                        "inputs": [],
                        "name": "tokenAddress",
                        "outputs": [
                            {
                            "internalType": "address",
                            "name": "",
                            "type": "address"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                        },
                        {
                        "inputs": [
                            {
                            "internalType": "address[]",
                            "name": "dests",
                            "type": "address[]"
                            },
                            {
                            "internalType": "uint256[]",
                            "name": "tokenids",
                            "type": "uint256[]"
                            }
                        ],
                        "name": "doAirdrop",
                        "outputs": [
                            {
                            "internalType": "uint256",
                            "name": "",
                            "type": "uint256"
                            }
                        ],
                        "stateMutability": "nonpayable",
                        "type": "function"
                        },
                        {
                        "inputs": [],
                        "name": "getAirdrop",
                        "outputs": [
                            {
                            "internalType": "uint256",
                            "name": "nftTokenId",
                            "type": "uint256"
                            }
                        ],
                        "stateMutability": "nonpayable",
                        "type": "function"
                        },
                        {
                        "inputs": [],
                        "name": "getAirdropAvailableNum",
                        "outputs": [
                            {
                            "internalType": "uint256",
                            "name": "num",
                            "type": "uint256"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                        },
                        {
                        "inputs": [],
                        "name": "getAirdropAvailableNum1",
                        "outputs": [
                            {
                            "internalType": "uint256",
                            "name": "num",
                            "type": "uint256"
                            }
                        ],
                        "stateMutability": "pure",
                        "type": "function"
                        },
                        {
                        "inputs": [
                            {
                            "internalType": "uint256",
                            "name": "_airdropTotalAmount",
                            "type": "uint256"
                            }
                        ],
                        "name": "setTotalAmount",
                        "outputs": [
                            {
                            "internalType": "bool",
                            "name": "",
                            "type": "bool"
                            }
                        ],
                        "stateMutability": "nonpayable",
                        "type": "function"
                        },
                        {
                        "inputs": [
                            {
                            "internalType": "uint256",
                            "name": "_airdropTerm",
                            "type": "uint256"
                            }
                        ],
                        "name": "setTerm",
                        "outputs": [
                            {
                            "internalType": "bool",
                            "name": "",
                            "type": "bool"
                            }
                        ],
                        "stateMutability": "nonpayable",
                        "type": "function"
                        },
                        {
                        "inputs": [
                            {
                            "internalType": "uint256",
                            "name": "_airdropStartTime",
                            "type": "uint256"
                            }
                        ],
                        "name": "setStartTime",
                        "outputs": [
                            {
                            "internalType": "bool",
                            "name": "",
                            "type": "bool"
                            }
                        ],
                        "stateMutability": "nonpayable",
                        "type": "function"
                        },
                        {
                        "inputs": [
                            {
                            "internalType": "uint256",
                            "name": "_airdropDeadline",
                            "type": "uint256"
                            }
                        ],
                        "name": "setDeadline",
                        "outputs": [
                            {
                            "internalType": "bool",
                            "name": "",
                            "type": "bool"
                            }
                        ],
                        "stateMutability": "nonpayable",
                        "type": "function"
                        },
                        {
                        "inputs": [
                            {
                            "internalType": "uint256",
                            "name": "_airdropNFTIndex",
                            "type": "uint256"
                            }
                        ],
                        "name": "setAirdropNFTIndex",
                        "outputs": [
                            {
                            "internalType": "bool",
                            "name": "",
                            "type": "bool"
                            }
                        ],
                        "stateMutability": "nonpayable",
                        "type": "function"
                        },
                        {
                        "inputs": [
                            {
                            "internalType": "address",
                            "name": "_tokenAddress",
                            "type": "address"
                            }
                        ],
                        "name": "setTokenAddress",
                        "outputs": [
                            {
                            "internalType": "bool",
                            "name": "",
                            "type": "bool"
                            }
                        ],
                        "stateMutability": "nonpayable",
                        "type": "function"
                        },
                        {
                        "inputs": [
                            {
                            "internalType": "uint256",
                            "name": "_airdropNFTBeginIndex",
                            "type": "uint256"
                            },
                            {
                            "internalType": "uint256",
                            "name": "_airdropNFTEndIndex",
                            "type": "uint256"
                            }
                        ],
                        "name": "startDoAirdropNFT",
                        "outputs": [
                            {
                            "internalType": "bool",
                            "name": "",
                            "type": "bool"
                            }
                        ],
                        "stateMutability": "nonpayable",
                        "type": "function"
                        },
                        {
                        "inputs": [
                            {
                            "internalType": "address[]",
                            "name": "_airdropAddresses",
                            "type": "address[]"
                            },
                            {
                            "internalType": "uint256[]",
                            "name": "_airdropNums",
                            "type": "uint256[]"
                            }
                        ],
                        "name": "setWhitelists",
                        "outputs": [
                            {
                            "internalType": "uint256",
                            "name": "",
                            "type": "uint256"
                            }
                        ],
                        "stateMutability": "nonpayable",
                        "type": "function"
                        },
                        {
                        "inputs": [
                            {
                            "internalType": "address",
                            "name": "_airdropAddress",
                            "type": "address"
                            },
                            {
                            "internalType": "uint256",
                            "name": "_airdropNum",
                            "type": "uint256"
                            }
                        ],
                        "name": "setWhitelist",
                        "outputs": [
                            {
                            "internalType": "bool",
                            "name": "",
                            "type": "bool"
                            }
                        ],
                        "stateMutability": "nonpayable",
                        "type": "function"
                        },
                        {
                        "inputs": [
                            {
                            "internalType": "uint256",
                            "name": "_airdropNFTEndIndex",
                            "type": "uint256"
                            }
                        ],
                        "name": "changeDoAirdropNFTEndIndex",
                        "outputs": [
                            {
                            "internalType": "bool",
                            "name": "",
                            "type": "bool"
                            }
                        ],
                        "stateMutability": "nonpayable",
                        "type": "function"
                        },
                        {
                        "inputs": [],
                        "name": "getAirdropNFTIndex",
                        "outputs": [
                            {
                            "internalType": "uint256",
                            "name": "",
                            "type": "uint256"
                            }
                        ],
                        "stateMutability": "nonpayable",
                        "type": "function"
                        }
                    ]

                    var web3Provider;
                    if (window.ethereum) {
                        web3Provider = window.ethereum;
                        try {
                            // 请求用户授权
                            window.ethereum.enable();
                        } catch (error) {
                            // 用户不授权时
                            console.error("ethereum User denied account access")
                        }
                    } else if (window.web3) {   // 老版 MetaMask Legacy dapp browsers...
                        web3Provider = window.web3.currentProvider;
                    } else {
                        web3Provider = new Web3.providers.HttpProvider('https://data-seed-prebsc-1-s1.binance.org:8545');
                    }
                    const web3 = new Web3(web3Provider);//web3js就是你需要的web3实例
                    
                    web3.eth.getAccounts(function (error, result) {
                        console.log("getAccounts err ", error)//授权成功后result能正常获取到账号了
                        console.log("getAccounts res ", result)//授权成功后result能正常获取到账号了
                    });


                // //3.设置测试网络 infura
                // let netIp = 'https://ropsten.infura.io/v3/4c25a49808354c5480f97d4c82117ee4'
                // let provider = new HDWalletProvider(terms, netIp)
                // web3.setProvider(provider)
                // const web3 = new Web3("https://data-seed-prebsc-1-s1.binance.org:8545")

                const DAI_ADDRESS = "0x7cC71dA09C61a2706cA378DFa63204612505c194"
                const daiToken = new web3.eth.Contract(hiboxABI, DAI_ADDRESS)
                console.log("token ", daiToken)
                console.log("getAccounts ", web3.eth.getAccounts())
                // web3.eth.getAccounts().then(console.log);

                const senderAddress = "0x36c6fadc9fbb386f0cd40a1a700698d51f338688"

                daiToken.methods.getAirdropAvailableNum().call(function (err, res) {
                    console.log("getAirdropAvailableNum err ", err)
                    console.log("getAirdropAvailableNum res ", res)
                })

                daiToken.methods.getAirdrop().call(function (err, res) {
                // daiToken.methods.getAirdrop({from: web3.eth.getAccounts(0)}).call(function (err, res) {
                    console.log("getAirdrop err ", err)
                    console.log("getAirdrop res ", res)
                })
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
            background-color: #111111;
        }

        .intro-content {
            position: relative;
            width: 100%;
            height: 1031px;
            background-color: #0D0D0D;
            overflow: hidden;
            .intro-content-auto {
                width: 1440px;
                margin: 0 auto;
                .intro-bg-img {
                    position: relative;
                    left: 0;
                    right: 0;
                    width: 1440px;
                    height: 936px;
                    margin: 0 auto;

                    .intro-large {
                        width: 100%;
                        height: 100%;
                    }
                }

                .hi-wd {
                    position: absolute;
                    left: 63px;
                    top: 239px;

                    font-family: 'Product Sans';
                    font-style: normal;
                    font-weight: 700;
                    font-size: 101.923px;
                    line-height: 124px;
                    /* identical to box height */

                    display: flex;
                    align-items: flex-end;
                    text-transform: uppercase;

                    color: #FFFFFF;
                }

                .beginner-wd {
                    position: absolute;
                    left: -13px;
                    top: 480px;

                    font-family: 'Product Sans';
                    font-style: normal;
                    font-weight: 400;
                    font-size: 24px;
                    line-height: 39px;
                    /* identical to box height */

                    display: flex;
                    align-items: flex-end;
                    letter-spacing: 4px;
                    text-transform: uppercase;

                    color: #FFFFFF;

                    transform: rotate(-90deg);
                }

                .join-community-wd {
                    position: absolute;
                    width: 376px;
                    height: 36px;
                    left: 786px;
                    top: 950px;

                    font-family: 'Product Sans';
                    font-style: normal;
                    font-weight: 400;
                    font-size: 30px;
                    line-height: 36px;
                    display: flex;
                    align-items: flex-end;
                    letter-spacing: 3px;

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
                    right: 0px;
                    top: 40px;
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
                    right: 82px;
                    top: 950px;
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
                    left: 135px;
                    top: 608px;

                    .title {
                        font-family: 'Product Sans';
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
                        font-family: 'Product Sans';
                        font-style: normal;
                        font-weight: 700;
                        font-size: 17px;
                        color: #FFFFFF;
                        line-height: 27px;
                    }


                    .start-metamask {
                        margin-top: 28px;
                        height: 47px;
                        background: linear-gradient(94.81deg, #44FFA5 -3.57%, #04CEFF 51.02%, #0280EA 133.92%);
                        border-radius: 6px;
                        font-family: 'Product Sans';
                        font-style: normal;
                        font-weight: 700;
                        font-size: 12px;
                        line-height: 47px;
                        text-transform: uppercase;
                        text-align: center;
                        color: #FFFFFF;
                        padding: 0px 16px;
                    }

                    .start-airdrop {
                        margin-top: 112px;
                        height: 47px;

                        display: block;
                        float: left;
                        min-width: 125px;
                        height: 47px;
                        // background: linear-gradient(94.81deg, #44FFA5 -3.57%, #04CEFF 51.02%, #0280EA 133.92%);
                        background: linear-gradient(94.81deg, #44FFA5 -3.57%, #04CEFF 51.02%, #0280EA 133.92%);
                        border-radius: 6px;
                        font-family: 'Product Sans';
                        font-style: normal;
                        font-weight: 700;
                        font-size: 22px;
                        line-height: 47px;
                        text-transform: uppercase;
                        text-align: center;
                        color: #FFFFFF;
                        cursor: pointer;
                        padding: 0px 8px;
                        
                        .read-more-tip {
                            float: left;
                            height: 47px;
                            line-height: 47px;
                            margin-left: 27px;
                            font-family: 'Product Sans';
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

        .game-and-token {
            height: 1768px;
            background-color: #111111;
            .game-and-auto {
                position: relative;
                width: 1440px;
                height: 1764px;
                margin: 0 auto;
                .lefe-top-ellipse {
                    position: absolute;
                    width: 186px;
                    height: 370px;
                    left: 0;
                    // top: 31px;
                    background: url('../assets/img/Ellipse2x.png') no-repeat;
                    background-size: 100% 100%;
                }

            .game-intro {
                position: absolute;
                width: 466px;
                height: 473px;
                left: 89px;
                top: 204px;
                color: #FFFFFF;

                .game-intro-title {
                    display: flex;
                    text-indent: 4px;
                    .game-title {
                        font-weight: 700;
                        font-size: 63px;
                        font-family: 'Product Sans';
                        font-style: normal;
                    }

                    .game-title-lr {
                        font-family: 'Product Sans';
                        font-style: normal;
                        font-weight: 700;
                        font-size: 36px;
                        letter-spacing: 2.7px;
                        vertical-align: text-top;
                        margin-left: 10px;
                        padding-top: 32px;
                    }
                }

                .game-intro-content {
                    position: absolute;
                    width: 466px;
                    height: 80px;
                    left: 0px;
                    top: 120px;

                    font-family: 'Product Sans';
                    font-style: normal;
                    font-weight: 400;
                    font-size: 17.9725px;
                    line-height: 27px;
                    /* or 148% */

                    display: flex;
                    align-items: center;
                    letter-spacing: 0.630837px;

                    color: #FFFFFF;
                }

                .game-intro-more {
                    width: 500px;
                    margin-top: 26px;
                    overflow: auto;

                    .how-box {
                        float: left;
                        font-family: 'MyriadPro-Bold';
                        font-style: normal;
                        font-weight: 700;
                        font-size: 20px;
                        color: #4FBDFE;

                        // margin-right: 154px;
                        &:nth-child(1) {
                            margin-right: 92px;
                            margin-bottom: 15px;
                        }

                        &:nth-child(2) {
                            margin-bottom: 15px;
                        }

                        &:nth-child(3) {
                            margin-right: 83px;
                        }

                        &:nth-child(4) {
                            .how-box-w {
                                padding-top: 4px;
                            }
                        }

                        .blue-circle {
                            display: inline-block;
                            width: 9px;
                            height: 9px;
                            border-radius: 100%;
                            background-color: #4FBDFE;
                            margin-right: 9px;
                            vertical-align: middle;
                        }

                        .how-box-w {
                            display: inline-block;
                            vertical-align: middle;
                            text-transform: uppercase;
                        }
                    }

                }

                .game-intro-read-more {
                    position: absolute;
                    // width: 118px;
                    // height: 18px;
                    left: 0px;
                    top: 346px;

                    font-family: 'Product Sans';
                    font-style: normal;
                    font-weight: 700;
                    font-size: 14px;
                    line-height: 18px;
                    display: flex;
                    align-items: flex-end;
                    text-transform: uppercase;

                    color: #35F3BB;
                    .read-more-tip-ic {
                        width: 10px;
                        height: 15px;
                        background: url('../assets/img/vector-2x.png') no-repeat;
                        background-size: 100% 100%;
                    }
                }
            }

            .cassette-pictrue {
                position: absolute;
                width: 926px;
                height: 604px;
                left: 458px;
                top: 58px;

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

            .token-content {
                position: absolute;
                width: 368px;
                height: 380px;
                left: 880px;
                top: 816px;
                font-family: 'Product Sans';
                font-style: normal;
                font-weight: 400;
                font-size: 15px;
                line-height: 21px;
                letter-spacing: 0.055em;

                color: #FFFFFF;

                .hibox-token-title {
                    color: #FFFFFF;
                    font-family: 'Product Sans';
                    font-style: normal;
                    font-weight: 700;
                    font-size: 63px;
                }

                .hibox-token-types {
                    margin-top: 38px;
                }

                .hibox-token-game {
                    display: flex;
                    align-items: center;
                    margin-top: 21px;

                    &::before {
                        content: '';
                        display: block;
                        width: 24px;
                        height: 24px;
                        margin-right: 10px;
                        background: url('../assets/img/token-game.png') no-repeat;
                        background-size: 100% 100%;
                    }
                }

                .hibox-token-governance {
                    display: flex;
                    align-items: center;
                    margin-top: 21px;

                    &::before {
                        content: '';
                        display: block;
                        width: 24px;
                        height: 24px;
                        margin-right: 10px;
                        background: url('../assets/img/token-gov.png') no-repeat;
                        background-size: 100% 100%;
                    }
                }

                .hibox-token-paper {
                    margin-top: 20px;
                }

                .hibox-token-white-paper {
                    display: block;
                    width: 140px;
                    height: 50px;
                    line-height: 50px;
                    margin-top: 40px;
                    // background: linear-gradient(94.81deg, #44FFA5 -3.57%, #04CEFF 51.02%, #0280EA 133.92%);
                    background-color: #50BDFF;
                    border-radius: 6px;
                    font-family: 'Product Sans';
                    font-style: normal;
                    font-weight: 700;
                    font-size: 14px;
                    text-transform: uppercase;
                    color: #FFFFFF;
                    text-align: center;
                    cursor: pointer;
                }
            }

            .bottom-ellipse {
                position: absolute;
                width: 831px;
                height: 382px;
                left: 308px;
                // left: 18.3%;
                top: 1382px;
                background: url('../assets/img/bottom-ellipse.png') no-repeat;
                background-size: 100% 100%;

                .market-place {
                    font-family: 'Krub';
                    font-style: normal;
                    font-weight: 700;
                    font-size: 83.3333px;
                    // line-height: 100px;
                    letter-spacing: 1.6389px;
                    text-transform: uppercase;
                    text-align: center;
                    color: #F2F2F2;
                    padding: 56px 0 28px 0px;
                }

                .market-nft {
                    font-family: 'Product Sans';
                    font-style: normal;
                    font-weight: 700;
                    font-size: 35px;
                    text-align: center;
                    color: #FFFFFF;
                }

                .market-platform {
                    font-family: 'Product Sans';
                    font-style: normal;
                    font-weight: 700;
                    font-size: 35px;
                    text-align: center;
                    color: #FFFFFF;
                }
            }

            .comming-soon-market {
                position: absolute;
                height: 20px;
                left: 65px;
                top: 1614px;
                font-family: 'Product Sans';
                font-style: normal;
                font-weight: 700;
                font-size: 18px;
                display: flex;
                align-items: baseline;
                text-transform: uppercase;
                white-space: nowrap;
                color: #FFFFFF;
                transform: rotate(90deg);

                .comming-left-blue {
                    display: inline-block;
                    width: 12px;
                    height: 12px;
                    background: #4FBDFE;
                    margin-right: 26px;
                }

                .comming {
                    display: inline-block;
                    font-weight: 700;
                    font-size: 18px;
                    color: #FFFFFF;
                }
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
        }

        .market {
            position: relative;
            width: 1440px;
            height: 999px;
            margin: 0 auto;
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

            }
                .comming-soon {
                    position: absolute;
                    left: 50%;
                    top: 805px;
                    transform: translate(-50%, 0);
                    .comming-left-blue {
                        display: inline-block;
                        width: 12px;
                        height: 12px;
                        background: #4FBDFE;
                        margin-right: 27px;
                    }

                    .comming {
                        display: inline-block;
                        font-family: 'Product Sans';
                        font-style: normal;
                        font-weight: 700;
                        font-size: 16.2489px;
                        color: #FFFFFF;
                    }
                }

            .down-app {
                position: absolute;
                left: 50%;
                top: 857px;
                transform: translate(-50%, 0);
                height: 70px;
                width: 436px;
                display: flex;
                justify-content: space-between;
                align-items: center;

                .apple-store-link {
                    width: 210px;
                    height: 70px;
                    background: url('../assets/img/apple-store.png') no-repeat;
                    background-size: 100% 100%;
                }


                .google-play-link {
                    width: 210px;
                    height: 70px;
                    background: url('../assets/img/google-play-store.png') no-repeat;
                    background-size: 100% 100%;
                }
            }
        }

        .roadmap {
            position: relative;
            height: 760px;
            width: 1440px;
            margin: 0 auto;

            .roadmap-title {
                width: 1369px;
                height: 98px;
                margin: 82px auto 60px auto;
                display: flex;
                justify-content: space-between;
                align-items: center;

                .roadmap-tl {
                    height: 98px;
                    font-family: 'Product Sans';
                    font-style: normal;
                    font-weight: 700;
                    font-size: 75.0509px;
                    line-height: 98px;
                    color: #F2F2F2;
                }

                .roadmap-tr {
                    width: 123px;
                    display: flex;
                    justify-content: space-between;

                    .left-p {
                        width: 13px;
                        height: 13px;
                        background-color: #F1F1F1;
                        margin-top: 10px;
                    }

                    .right-edition {
                        color: #FFFFFF;
                        font-style: normal;

                        .edition-s {
                            font-family: 'Product Sans';
                            font-style: normal;
                            font-weight: 700;
                            font-size: 17.0459px;
                            letter-spacing: 3.7776px;
                        }

                        .edition-time {
                            font-family: 'Product Sans';
                            font-style: normal;
                            font-weight: 700;
                            font-size: 30px;
                            letter-spacing: 4.19733px;
                        }
                    }
                }
            }

            .roadmap-list {
                width: 1369px;
                height: 470px;
                margin: 0 auto;
                display: flex;
                justify-content: space-between;

                .list-box {
                    position: relative;
                    width: 290px;
                    height: 470px;
                    background: rgba(0, 0, 0, 0.0001);
                    border: 3px solid #FFFFFF;
                    border-radius: 6px;

                    .left-top-num {
                        position: absolute;
                        width: 45px;
                        height: 45px;
                        left: -1px;
                        top: -1px;
                        // padding: 15px 0 0 7px;
                        line-height: 45px;
                        text-align: center;
                        background: #F1F1F1;
                        border-radius: 0px 0px 6px 0;
                        font-family: 'Product Sans';
                        font-style: normal;
                        font-weight: 600;
                        font-size: 20.8357px;
                        color: #181818;
                    }

                    .content {
                        width: 233px;
                        height: 360px;
                        margin: 75px auto 0 auto;

                        .title {
                            font-family: 'Product Sans';
                            font-style: normal;
                            font-weight: 700;
                            font-size: 33.3371px;
                            height: 50px;
                            line-height: 50px;
                            letter-spacing: 0.720724px;
                            color: #F2F2F2;
                            text-align: center;
                        }

                        .title-bottom-line {
                            width: 76px;
                            height: 2px;
                            background-color: #77C8FF;
                            margin: 10px auto;
                        }

                        .text {
                            margin-top: 20px;

                            .text-row {
                                font-family: 'Product Sans';
                                font-style: normal;
                                font-weight: 700;
                                font-size: 12.5px;
                                color: #FFFFFF;
                                margin-bottom: 8px;
                                text-indent: 8px;
                            }
                        }
                    }

                    .q1-content {
                        width: 185px;
                    }

                    .q2-content {
                        width: 225px;
                    }

                    .q3-content {
                        width: 255px;
                    }

                    .q4-content {
                        width: 220px;
                    }

                    .read-more {
                        display: flex;
                        align-items: center;
                        position: absolute;
                        height: 47px;
                        top: 386px;
                        left: 50%;
                        transform: translate(-50%, 0);
                        line-height: 47px;
                        font-family: 'Product Sans';
                        font-style: normal;
                        font-weight: 700;
                        font-size: 14px;
                        text-transform: uppercase;
                        color: #35F3BB;
                        cursor: pointer;
                        .read-more-tip-ic {
                            width: 10px;
                            height: 15px;
                            background: url('../assets/img/vector-2x.png') no-repeat;
                            background-size: 100% 100%;
                            margin-left: 10px;
                        }
                    }
                }
            }
        }

        .join-us {
            width: 1440px;
            height: 985px;
            margin: 0 auto;

            .join-us-img {
                display: block;
                margin: 0 auto;
                padding-top: 75px;
            }
        }

        .members {
            position: relative;
            width: 1440px;
            height: 724px;
            margin: 0 auto;
            .titles {
                padding-top: 114px;

                .title-up {
                    position: absolute;
                    height: 113px;
                    left: 595px;

                    font-family: 'Product Sans';
                    font-style: normal;
                    font-weight: 700;
                    font-size: 93.3108px;
                    line-height: 113px;
                    display: flex;
                    align-items: flex-end;
                    text-transform: uppercase;

                    color: #FFFFFF;
                }

                .title-dn {
                    position: absolute;
                    height: 51px;
                    left: 595px;
                    top: 210px;

                    font-family: 'Product Sans';
                    font-style: normal;
                    font-weight: 400;
                    font-size: 42.0573px;
                    line-height: 51px;
                    /* identical to box height */

                    display: flex;
                    align-items: flex-end;
                    letter-spacing: 2.70713px;

                    color: #34DBFF;
                }
            }

            .members-list {
                /* Auto layout */
                display: flex;
                flex-direction: row;
                align-items: flex-start;
                padding: 0px;
                gap: 90px;

                position: absolute;
                width: 1168px;
                height: 350px;
                left: 136px;
                top: 302px;
                
                display: flex;
                justify-content: space-between;

                .content-mem {
                    .head-sculpture {
                        margin-bottom: 31px;

                        .member-sculpture {
                            width: 179px;
                            height: 179px;
                            border-radius: 100%;
                            border: 4px solid #36F0FF;
                            margin: 0 auto;

                            .member-sculpture-img {
                                width: 100%;
                                height: 100%;
                                border-radius: 100%;
                            }
                        }

                        .post {
                            font-family: 'Product Sans';
                            font-style: normal;
                            font-weight: 700;
                            font-size: 17px;
                            color: #FFFFFF;
                            margin-top: 32px;
                            text-align: center;
                            text-transform: uppercase;

                        }
                    }

                    .members-intro {
                        font-family: 'Product Sans';
                        font-style: normal;
                        font-weight: 400;
                        font-size: 12px;
                        line-height: 24px;
                        letter-spacing: 0.5px;
                        color: #AAAAAA;
                        // text-align: left;
                    }

                    .product-director-intro {
                        width: 214px;
                        font-family: 'Product Sans';
                        font-style: normal;
                        font-weight: 400;
                        font-size: 12px;
                        line-height: 24px;
                        letter-spacing: 0.5px;
                        color: #AAAAAA;
                        margin: 0 auto;
                        // text-align: center;
                    }
                    .product-director-intro-charmer {
                        width: 260px;
                    }
                }

                .content-member {
                    width: 228px;
                }

                .content-product-director {
                    width: 321px;
                }

                .content-head-of-design {
                    width: 214px;
                }
            }
        }

        .feedback {
            position: relative;
            width: 1440px;
            height: 860px;
            margin: 0 auto;
            .feedback-message {
                position: absolute;
                width: 392px;
                left: 143px;
                top: 174px;

                .feedback-big-title {
                    font-family: 'Product Sans';
                    font-style: normal;
                    font-weight: 700;
                    font-size: 53.1281px;
                    text-transform: uppercase;
                    color: #FFFFFF;
                    text-align: center;
                }

                .feedback-really {
                    width: 286px;
                    height: 59px;
                    font-family: 'Product Sans';
                    font-style: normal;
                    font-weight: 400;
                    font-size: 16px;
                    line-height: 19px;
                    letter-spacing: 3px;
                    align-items: flex-end;
                    text-align: center;
                    letter-spacing: 3px;
                    text-align: center;
                    color: #FCFCFC;
                    margin: 10px auto 0 auto;
                }

                .contact-email {
                    font-family: 'Product Sans';
                    font-style: normal;
                    font-weight: 700;
                    font-size: 16.6667px;
                    letter-spacing: 1.66667px;
                    color: #FFFFFF;
                    margin-top: 21px;
                    text-align: center;
                }

                .feedback-name {
                    margin-top: 16px;

                    input {
                        width: 100%;
                        height: 56px;
                        border: 4px solid #FFFFFF;
                        border-radius: 6px;
                        background-color: #111111;
                        color: #FFFFFF;
                        font-family: 'Product Sans';
                        font-style: normal;
                        font-weight: 700;
                        font-size: 12.7106px;
                        letter-spacing: 1.4px;
                        text-indent: 28px;
                    }
                }

                .feedback-mail {
                    margin: 42px 0 34px 0;
                }

                .feedback-more-message {
                    textarea {
                        width: 100%;
                        height: 139px;
                        border: 4px solid #FFFFFF;
                        border-radius: 6px;
                        background-color: #111111;
                        color: #FFFFFF;
                        font-family: 'Product Sans';
                        font-style: normal;
                        font-weight: 700;
                        font-size: 12.7106px;
                        letter-spacing: 1.4px;
                        // text-indent: 28px;
                        outline: none;
                        padding: 18px 18px 18px 28px;
                        resize: none;
                    }
                }

                .seed-message-btn {
                    width: 151px;
                    height: 48px;
                    background-color: #50BDFF;
                    border-radius: 6px;
                    font-family: 'Product Sans';
                    font-style: normal;
                    font-weight: 700;
                    font-size: 14px;
                    line-height: 48px;
                    text-transform: uppercase;
                    text-align: center;
                    color: #FFFFFF;
                    margin: 45px auto 0 auto;
                    cursor: pointer;
                }
            }

            .feedback-img {
            position: absolute;
            width: 1123.21px;
            height: 734px;
            right: 0px;
            top: 126px;

                .feedback-bg {
                    width: 100%;
                    height: 100%;
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