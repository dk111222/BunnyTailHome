<template>

    <div class="content">
        <TailNavbar />
        <HomeContent />
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
    }
</style>