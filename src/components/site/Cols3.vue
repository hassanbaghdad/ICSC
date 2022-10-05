<template>
    <section class="call-to-action home-one">
        <div class="container-fluid">
            <div class="clearfix">
                <div class="call-to-action-corner col-md-4" style="background-image: url(img/call-to-action/left-box-bg.jpg);">
                    <div :class="$store.state.en?'single-call-to-action open-hours':'single-call-to-action open-hours rtl'">
                        <div class="icon-box">
                            <div class="inner-box">
                                <i class="flaticon-flask-outline"></i>
                            </div>
                        </div>


                        <div class="content-box" >
                            <div  style="font-size: 22px !important;line-height: 30px" class="cf f24b  mt-4 mr-4">

                                <p v-if="!$store.state.en" style="font-size: 22px !important;text-align: right;line-height: 40px">نوفر لكم اعلى معايير الجودة التي تلبي طموحاتكم</p>
                                <p v-if="$store.state.en" style="font-size: 22px !important;text-align: left;line-height:40px">
                                    We provide you with the highest quality standards that meet your aspirations
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
                <div class="call-to-action-center col-md-4" style="background-image: url(img/call-to-action/left-box-bg.jpg);">
                    <div :class="$store.state.en?'single-call-to-action open-hours':'single-call-to-action open-hours rtl'">
                        <div class="icon-box">
                            <div class="inner-box">
                                <i class="flaticon-technology-1"></i>
                            </div>
                        </div>
                        <div class="content-box">
                            <div  style="font-size: 22px !important;line-height: 30px" class="cf f24b text-justify mt-4 mr-4">
                                <p v-if="!$store.state.en" style="font-size: 22px !important;text-align: right;line-height:40px">بكل فخر خبرة اكثر من 50 سنة في انتاج الاسمنت</p>
                                <p v-if="$store.state.en"  style="font-size: 22px !important;text-align: left;line-height:40px">
                                    Proudly more than 50 years experience in cement production
                                </p>
                            </div>


                        </div>
                    </div>
                </div>
                <div class="call-to-action-corner col-md-4" style="background-image: url(img/call-to-action/right-box-bg.jpg);">
                    <div :class="$store.state.en?'single-call-to-action open-hours':'single-call-to-action open-hours rtl'">
                        <div class="icon-box">
                            <div class="inner-box">
                                <i class="flaticon-industrial-robot-2"></i>
                            </div>
                        </div>
                        <div class="content-box f22">
                            <div  style="font-size: 22px !important;line-height: 50px" class="cf f24b text-justify mt-4 mr-4">

                                <p class="f20 cf" v-if="!$store.state.en" style="font-size: 22px !important;text-align: right;line-height:40px">نحن دائما في طليعة السوق الصناعية</p>
                                <p class="f20 cf" v-if="$store.state.en"  style="font-size: 22px !important;text-align: left;line-height:40px">We are always at the forefront of the industrial market</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: "Cols3"
    }
</script>

<style scoped>

</style>