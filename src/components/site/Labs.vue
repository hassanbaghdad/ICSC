<template>
    <v-app>
        <div class="title-box text-center">
            <h2 class="cf f24b">المعامل</h2>
            <p>Lorem ipsum is a dummy text it will use for subtitle here</p>
            <span class="decor"><span class="inner"></span></span>
        </div>
        <section class="featured-section">


            <v-card class="mx-0">
                <v-toolbar dark class="mx-0">

                    <template v-slot:extension>
                        <v-tabs
                                v-model="tab"
                                centered
                                center-active
                        >
                            <v-tabs-slider></v-tabs-slider>

                            <v-tab href="#all">
                                All

                            </v-tab>
                            <v-tab href="#one">
                                One
                            </v-tab>

                        </v-tabs>
                    </template>
                </v-toolbar>


                <v-tabs-items v-model="tab" >
                    <v-tab-item value="all" style="background-color: #106a64">
                        <div class="container">
                            <div class="row">
                                <div class="col col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-2" v-for="(item,i) in [1,4,5,7,8,11,1,4,5,7,8,11,]" :key="'labs_swep_'+i">
                                    <div class="services-content  pl-30 pl-md-0">
                                        <div style="background-color: grey;width: 250px" class="item" >
                                            <v-card elevation="8">
                                                <div class="service-box">
                                                    <div class="img-thumb">
                                                        <v-img contain max-height="400" :src="'https://www.icsc.gov.iq/cementn/cem/'+item+'.jpg'"/>
                                                    </div>
                                                    <div class="content">
                                                        <h4 class="title"><a href="#" class="cf f14">معمل سمنت بابل</a></h4>
                                                    </div>
                                                    <div class="overlay">
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid labore cum, sit quae deleniti placeat.</p>
                                                        <a class="value" href="#"> Start From <span class="service-price">$45</span></a>
                                                        <a class="btn-link" href="#">read more <i class="fa fa-arrow-circle-right"></i></a>
                                                    </div>
                                                </div>
                                            </v-card>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                    </v-tab-item>
                </v-tabs-items>



            </v-card>

        </section>
    </v-app>

<!--    <section class="services-section sec-padding pb-60 pb-md-140" data-bg-color="#f7f7f7">-->
<!--        <div class="container-fluid">-->
<!--            <div class="sec-title text-center">-->
<!--                <h2>Our Services</h2>-->
<!--                <p>Lorem ipsum is a dummy text it will use for subtitle here</p>-->
<!--                <span class="decor"><span class="inner"></span></span>-->
<!--            </div>-->
<!--            <div class="row">-->
<!--                <div class="welcome-wrp col-lg-4 col-md-4 col-sm-4 col-xs-12 p-0">-->
<!--                    <div class="services-wlc">-->
<!--                        <div class="content">-->
<!--                            <h3 class="color-theme title fw-b">Check our services</h3>-->
<!--                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis voluptates, dolorem et iusto, tempora officiis adipisci maiores.</p>-->
<!--                            <a class="color-light-white font-size-18 fw-b" href="#">All Services <i class="fa fa-arrow-circle-right"></i></a>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                </div>-->
<!--                <div class="col-lg-8 col-md-12 col-sm-12 col-xs-12 p-0">-->
<!--                    <div class="services-content services-carousel pl-30 pl-md-0">-->
<!--                        <div class="item">-->
<!--                            <div class="service-box">-->
<!--                                <div class="img-thumb">-->
<!--                                    <img src="img/services/1.jpg" alt="">-->
<!--                                </div>-->
<!--                                <div class="content">-->
<!--                                    <h4 class="title"><a href="#">Excellent Services</a></h4>-->
<!--                                </div>-->
<!--                                <div class="overlay">-->
<!--                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid labore cum, sit quae deleniti placeat.</p>-->
<!--                                    <a class="value" href="#"> Start From <span class="service-price">$45</span></a>-->
<!--                                    <a class="btn-link" href="#">read more <i class="fa fa-arrow-circle-right"></i></a>-->
<!--                                </div>-->
<!--                            </div>-->
<!--                        </div>-->
<!--                        <div class="item">-->
<!--                            <div class="service-box">-->
<!--                                <div class="img-thumb">-->
<!--                                    <img src="img/services/2.jpg" alt="">-->
<!--                                </div>-->
<!--                                <div class="content">-->
<!--                                    <h4 class="title"><a href="#">Chemical Research</a></h4>-->
<!--                                </div>-->
<!--                                <div class="overlay">-->
<!--                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid labore cum, sit quae deleniti placeat.</p>-->
<!--                                    <a class="value" href="#"> Start From <span class="service-price">$45</span></a>-->
<!--                                    <a class="btn-link" href="#">read more <i class="fa fa-arrow-circle-right"></i></a>-->
<!--                                </div>-->
<!--                            </div>-->
<!--                        </div>-->
<!--                        <div class="item">-->
<!--                            <div class="service-box">-->
<!--                                <div class="img-thumb">-->
<!--                                    <img src="img/services/3.jpg" alt="">-->
<!--                                </div>-->
<!--                                <div class="content">-->
<!--                                    <h4 class="title"><a href="#">Factory Process</a></h4>-->
<!--                                </div>-->
<!--                                <div class="overlay">-->
<!--                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid labore cum, sit quae deleniti placeat.</p>-->
<!--                                    <a class="value" href="#"> Start From <span class="service-price">$45</span></a>-->
<!--                                    <a class="btn-link" href="#">read more <i class="fa fa-arrow-circle-right"></i></a>-->
<!--                                </div>-->
<!--                            </div>-->
<!--                        </div>-->
<!--                        <div class="item">-->
<!--                            <div class="service-box">-->
<!--                                <div class="img-thumb">-->
<!--                                    <img src="img/services/4.jpg" alt="">-->
<!--                                </div>-->
<!--                                <div class="content">-->
<!--                                    <h4 class="title"><a href="#">Mechanical Service</a></h4>-->
<!--                                </div>-->
<!--                                <div class="overlay">-->
<!--                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid labore cum, sit quae deleniti placeat.</p>-->
<!--                                    <a class="value" href="#"> Start From <span class="service-price">$45</span></a>-->
<!--                                    <a class="btn-link" href="#">read more <i class="fa fa-arrow-circle-right"></i></a>-->
<!--                                </div>-->
<!--                            </div>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                </div>-->
<!--            </div>-->
<!--        </div>-->
<!--    </section>-->
</template>

<script>
    export default {
        name: "Labs",
        data(){
            return{
                tab: null,
                items: [
                    'web', 'shopping', 'videos', 'images', 'news',
                ],
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',

            }
        }
    }
</script>

<style scoped>

</style>