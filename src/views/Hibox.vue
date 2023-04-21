<template>

    <div class="content">
        <TailNavbar />
        <div class="section">
<<<<<<< HEAD
            <HomeContent />
=======
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
                        <span>READ MORE ></span>
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
>>>>>>> 174a991fd962d52e9c5b639dec0bd00ff32c89a7
        </div>
    </div>
</template>

<script>
    import 'swiper/dist/css/swiper.css'
    import TailNavbar from '../components/TailNavbar.vue';
    import HomeContent from '../components/HomeContent.vue';

    import {
        swiper,
        swiperSlide
    } from 'vue-awesome-swiper'

    export default {
        components: {
            swiper,
            swiperSlide,
            TailNavbar,
            HomeContent
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
        }
    };
</script>

<style lang="scss" scoped>
    .content {
        width: 100%;
        min-width: 1920px;
        overflow-x: hidden;

        .section {
            padding-top: 154px;
        }
    }
</style>