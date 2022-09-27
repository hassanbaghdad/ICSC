<template>
    <section class="rev_slider_wrapper">
        <div id="slider1" class="rev_slider"  data-version="5.0">
            <ul>
                <li data-transition="parallaxvertical">
                    <img src="https://www.icsc.gov.iq/cementn/sildeshow/n1.jpg"  alt=""  width="1920" height="705" data-bgposition="top center" data-bgfit="cover" data-bgrepeat="no-repeat" data-bgparallax="1" >
                    <div class="tp-caption sfl tp-resizeme thm-banner-h1 blue-bg cf"
                         data-x="left" data-hoffset="0"
                         data-y="top" data-voffset="209"
                         data-whitespace="nowrap"
                         data-transform_idle="o:1;"
                         data-transform_in="o:0"
                         data-transform_out="o:0"
                         data-start="500">
                        <span v-if="!$store.state.en" class="pa-4">الشركة العامة للسمنت العراقية</span>
                        <span v-if="$store.state.en" class="pa-4">Iraqi Cement State Co.</span>
                    </div>
                    <div class="tp-caption sfr tp-resizeme thm-banner-h1 heavy black-bg cf"
                         data-x="left" data-hoffset="0"
                         data-y="top" data-voffset="263"
                         data-whitespace="nowrap"
                         data-transform_idle="o:1;"
                         data-transform_in="o:0"
                         data-transform_out="o:0"
                         data-start="1000">
                        <span v-if="!$store.state.en">رواد صناعة الاسمنت العراقي</span>
                        <span v-if="$store.state.en">Pioneers of the Iraqi cement industry</span>
                    </div>
                    <div class="tp-caption sfb tp-resizeme thm-banner-h3 cf"
                         data-x="left" data-hoffset="0"
                         data-y="top" data-voffset="341"
                         data-whitespace="nowrap"
                         data-transform_idle="o:1;"
                         data-transform_in="o:0"
                         data-transform_out="o:0"
                         data-start="1500">
                        <span v-if="!$store.state.en" class="">نضمن لكم جودة المنتج بمعايير عالمية</span>
                        <span v-if="$store.state.en" class="">We guarantee you product quality with international standards</span>
                    </div>
                    <div class="tp-caption sfb tp-resizeme thm-banner-p"
                         data-x="left" data-hoffset="0"
                         data-y="top" data-voffset="393"
                         data-whitespace="nowrap"
                         data-transform_idle="o:1;"
                         data-transform_in="o:0"
                         data-transform_out="o:0"
                         data-start="2000">
<!--                        Not sure what is going on, come in Today for a Symptom <br>Check up, There are many kind of process!!-->
                    </div>
                    <div class="tp-caption sfl tp-resizeme"
                         data-x="left" data-hoffset="0"
                         data-y="top" data-voffset="465"
                         data-whitespace="nowrap"
                         data-transform_idle="o:1;"
                         data-transform_in="o:0"
                         data-transform_out="o:0"
                         data-start="2300">
                        <a :href="'tel:'+$store.state.site.info.site_phone" class="thm-btn">
                            <span class="cf f20b" v-if="!$store.state.en">اتصل بنا</span>
                            <span v-if="$store.state.en">Call us</span>
                        </a>
                    </div>

                </li>
                <li data-transition="parallaxvertical">
                    <img src="https://www.icsc.gov.iq/cementn/sildeshow/3.jpg"  alt="" width="1920" height="705" data-bgposition="top center" data-bgfit="cover" data-bgrepeat="no-repeat" data-bgparallax="2" >
                    <div class="tp-caption sfl tp-resizeme thm-banner-h1 cf"
                         data-x="left" data-hoffset="0"
                         data-y="top" data-voffset="225"
                         data-whitespace="nowrap"
                         data-transform_idle="o:1;"
                         data-transform_in="o:0"
                         data-transform_out="o:0"
                         data-start="500">
                        <span class="cf" v-if="!$store.state.en" >خبرة 50 عاماً</span>
                        <span v-if="$store.state.en" >50 years experience</span>
                    </div>
                    <div class="tp-caption sfr tp-resizeme thm-banner-h1 heavy cf"
                         data-x="left" data-hoffset="0"
                         data-y="top" data-voffset="280"
                         data-whitespace="nowrap"
                         data-transform_idle="o:1;"
                         data-transform_in="o:0"
                         data-transform_out="o:0"
                         data-start="1000">
                        <span class="cf" v-if="!$store.state.en">من العطاء المتواصل</span>
                        <span v-if="$store.state.en">of continuous giving</span>

                    </div>
                    <div class="tp-caption sfb tp-resizeme thm-banner-h3"
                         data-x="left" data-hoffset="0"
                         data-y="top" data-voffset="353"
                         data-whitespace="nowrap"
                         data-transform_idle="o:1;"
                         data-transform_in="o:0"
                         data-transform_out="o:0"
                         data-start="1500">
                        <span class="cf" v-if="!$store.state.en">الشركة العامة للسمنت العراقية</span>
                        <span v-if="$store.state.en">Iraqi Cement State Co.</span>
                    </div>
                    <div class="tp-caption sfb tp-resizeme thm-banner-p"
                         data-x="left" data-hoffset="0"
                         data-y="top" data-voffset="404"
                         data-whitespace="nowrap"
                         data-transform_idle="o:1;"
                         data-transform_in="o:0"
                         data-transform_out="o:0"
                         data-start="2000">
<!--                        Not sure what is going on, come in Today for a Symptom <br>Check up, There are many kind of process!!-->
                    </div>
                    <div class="tp-caption sfl tp-resizeme"
                         data-x="left" data-hoffset="0"
                         data-y="top" data-voffset="474"
                         data-whitespace="nowrap"
                         data-transform_idle="o:1;"
                         data-transform_in="o:0"
                         data-transform_out="o:0"
                         data-start="2300">
                        <a :href="'tel:'+$store.state.site.info.site_phone" class="thm-btn">
                            <span class="cf f20b" v-if="!$store.state.en">اتصل بنا</span>
                            <span v-if="$store.state.en">Call us</span>
                        </a>
                    </div>
                </li>
            </ul>
        </div>
    </section>

</template>

<script>
    export default {
        name: "TopSlideShow"
    }
</script>

<style scoped>

</style>