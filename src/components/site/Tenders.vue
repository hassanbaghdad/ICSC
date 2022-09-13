<template>

    <section class="featured-section testimonials-wrapper">
        <div class="container">
            <div class="sec-title text-center mt-10">
                <h2 class="color-white cf f24b"> المناقصات التجارية</h2>
                <p class="color-white">Lorem ipsum is a dummy text it will use for subtitle here</p>
                <span class="decor"><span class="inner"></span></span>
            </div>
            <div class="testimonaials-carousel owl-carousel owl-theme">
                <div class="item" v-for="(item,i) in ['الاستيرادية','المحلية','المواد الاولية',]" :key="'tender_slide_'+i">
                    <div class="single-testimonaials">
                        <div class="qoute-box">
                            <i class="qoute">“</i>
                        </div>
                        <p>Lorem ipsum dolor sit amet, per justo iracundia an. Inani tation tritani mea ut. Mundi scriptorem</p>
                        <h3 class="cf f22b">{{item}}</h3>
                        <span>Senior Worker</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: "Tenders"
    }
</script>

<style scoped>

</style>