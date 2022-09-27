<template>
    <v-app>
        <v-divider/>
        <div class="title-box text-center">
            <h2 v-if="!$store.state.en" class="cf f24b">المعامل</h2>
            <h2 v-if="$store.state.en">Plants</h2>

            <span class="decor"><span class="inner"></span></span>
        </div>
        <section class="featured-section">


            <v-card class="mx-0">
                <v-toolbar dark class="mx-0">

                    <template v-slot:extension>
                        <v-tabs
                                v-model="tab"
                                centered
                        >
                            <v-tabs-slider class="text-center"></v-tabs-slider>

                            <v-tab href="#all">
                               <span v-if="!$store.state.en" class="cf f16">الكل</span>
                               <span v-if="$store.state.en">All</span>

                            </v-tab>
                            <v-tab href="#normal">
                                <span v-if="!$store.state.en" class="cf f16">اعتيادي</span>
                                <span v-if="$store.state.en">Normal</span>
                            </v-tab>
                            <v-tab href="#white">
                                <span v-if="!$store.state.en" class="cf f16">الابيض</span>
                                <span v-if="$store.state.en">White</span>
                            </v-tab>
                            <v-tab href="#resistant">
                                <span v-if="!$store.state.en" class="cf f16">المقاوم</span>
                                <span v-if="$store.state.en">Resistant</span>
                            </v-tab>

                        </v-tabs>
                    </template>
                </v-toolbar>


                <v-tabs-items v-model="tab" >
                    <v-tab-item value="all" style="background-color: #106a64">
                        <div class="container">
                            <div class="row">
                                <div class="col col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-2" v-for="(item,i) in $store.state.site.labs.labs" :key="'labs_swep_'+i">
                                    <div class="services-content  pl-30 pl-md-0">
                                        <div :style="$vuetify.breakpoint.xs?'background-color: grey;width: 325px':'background-color: grey;width: 250px'" class="item" >
                                            <v-card elevation="8">
                                                <div class="service-box">
                                                    <div class="img-thumb">
                                                        <v-img contain max-height="400" :src="$axios.defaults.baseURL+'/images/'+item.lab_image"/>
                                                    </div>
                                                    <div class="content">
                                                        <h4 class="title"><router-link :to="'/plants/'+item.lab_slug" class="cf f14">{{item.lab_name}}</router-link></h4>
                                                    </div>
                                                    <div class="overlay">

                                                        <p v-if="!$store.state.en" class="cf f20">عنوان المعمل </p>
                                                        <p v-if="$store.state.en" class="cf f20">Plant Location</p>
                                                        <p v-if="!$store.state.en" class="cf f20">{{item.lab_location}} </p>
                                                        <p v-if="$store.state.en" class="cf f20">{{item.lab_location_en}} </p>
                                                        <span v-if="!$store.state.en" class="service-price cf f20">نوع الانتاج </span>
                                                        <span v-if="$store.state.en" class="service-price cf f20">Production Type  </span>
                                                        <a v-if="!$store.state.en" class="value black--text" href="#">{{item.lab_prod_type}}</a>
                                                        <a v-if="$store.state.en" class="value black--text" href="#">{{item.lab_prod_type_en}}</a>

                                                        <router-link :to="'/plants/'+item.lab_slug" class="btn-link cf f20b" href="#">
                                                            <span v-if="!$store.state.en">عرض المزيد</span>
                                                            <span v-if="$store.state.en">Read More </span>
                                                            <i class="fa fa-arrow-circle-right"></i>
                                                        </router-link>
                                                    </div>
                                                </div>
                                            </v-card>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                    </v-tab-item>
                    <v-tab-item value="resistant" style="background-color: #106a64">
                        <div class="container">
                            <div class="row">
                                <div class="col col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-2" v-for="(item,i) in $store.state.site.labs.labs.filter(item=>item.lab_cement_type.match('مقاوم'))" :key="'labs_swep_'+i">
                                    <div class="services-content  pl-30 pl-md-0">
                                        <div :style="$vuetify.breakpoint.xs?'background-color: grey;width: 325px':'background-color: grey;width: 250px'" class="item" >
                                            <v-card elevation="8">
                                                <div class="service-box">
                                                    <div class="img-thumb">
                                                        <v-img contain max-height="400" :src="$axios.defaults.baseURL+'/images/'+item.lab_image"/>
                                                    </div>
                                                    <div class="content">
                                                        <h4 class="title"><router-link :to="'/plants/'+item.lab_slug" class="cf f14">{{item.lab_name}}</router-link></h4>
                                                    </div>
                                                    <div class="overlay">

                                                        <p v-if="!$store.state.en" class="cf f20">عنوان المعمل </p>
                                                        <p v-if="$store.state.en" class="cf f20">Plant Location</p>
                                                        <p v-if="!$store.state.en" class="cf f20">{{item.lab_location}} </p>
                                                        <p v-if="$store.state.en" class="cf f20">{{item.lab_location_en}} </p>
                                                        <span v-if="!$store.state.en" class="service-price cf f20">نوع الانتاج </span>
                                                        <span v-if="$store.state.en" class="service-price cf f20">Production Type  </span>
                                                        <a v-if="!$store.state.en" class="value black--text" href="#">{{item.lab_prod_type}}</a>
                                                        <a v-if="$store.state.en" class="value black--text" href="#">{{item.lab_prod_type_en}}</a>

                                                        <router-link :to="'/plants/'+item.lab_slug" class="btn-link cf f20b" href="#">
                                                            <span v-if="!$store.state.en">عرض المزيد</span>
                                                            <span v-if="$store.state.en">Read More </span>
                                                            <i class="fa fa-arrow-circle-right"></i>
                                                        </router-link>
                                                    </div>
                                                </div>
                                            </v-card>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                    </v-tab-item>
                    <v-tab-item value="white" style="background-color: #106a64">
                                    <div class="container">
                                        <div class="row">
                                            <div class="col col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-2" v-for="(item,i) in $store.state.site.labs.labs.filter(item=>item.lab_cement_type.match('ابيض'))" :key="'labs_swep_'+i">
                                                <div class="services-content  pl-30 pl-md-0">
                                                    <div :style="$vuetify.breakpoint.xs?'background-color: grey;width: 325px':'background-color: grey;width: 250px'" class="item" >
                                                        <v-card elevation="8">
                                                            <div class="service-box">
                                                                <div class="img-thumb">
                                                                    <v-img contain max-height="400" :src="$axios.defaults.baseURL+'/images/'+item.lab_image"/>
                                                                </div>
                                                                <div class="content">
                                                                    <h4 class="title"><router-link :to="'/plants/'+item.lab_slug" class="cf f14">{{item.lab_name}}</router-link></h4>
                                                                </div>
                                                                <div class="overlay">

                                                                    <p v-if="!$store.state.en" class="cf f20">عنوان المعمل </p>
                                                                    <p v-if="$store.state.en" class="cf f20">Plant Location</p>
                                                                    <p v-if="!$store.state.en" class="cf f20">{{item.lab_location}} </p>
                                                                    <p v-if="$store.state.en" class="cf f20">{{item.lab_location_en}} </p>
                                                                    <span v-if="!$store.state.en" class="service-price cf f20">نوع الانتاج </span>
                                                                    <span v-if="$store.state.en" class="service-price cf f20">Production Type  </span>
                                                                    <a v-if="!$store.state.en" class="value black--text" href="#">{{item.lab_prod_type}}</a>
                                                                    <a v-if="$store.state.en" class="value black--text" href="#">{{item.lab_prod_type_en}}</a>

                                                                    <router-link :to="'/plants/'+item.lab_slug" class="btn-link cf f20b" href="#">
                                                                        <span v-if="!$store.state.en">عرض المزيد</span>
                                                                        <span v-if="$store.state.en">Read More </span>
                                                                        <i class="fa fa-arrow-circle-right"></i>
                                                                    </router-link>
                                                                </div>
                                                            </div>
                                                        </v-card>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </v-tab-item>
                    <v-tab-item value="normal" style="background-color: #106a64">
                                    <div class="container">
                                        <div class="row">
                                            <div class="col col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-2" v-for="(item,i) in $store.state.site.labs.labs.filter(item=>item.lab_cement_type.match('اعتيادي'))" :key="'labs_swep_'+i">
                                                <div class="services-content  pl-30 pl-md-0">
                                                    <div :style="$vuetify.breakpoint.xs?'background-color: grey;width: 325px':'background-color: grey;width: 250px'" class="item" >
                                                        <v-card elevation="8">
                                                            <div class="service-box">
                                                                <div class="img-thumb">
                                                                    <v-img contain max-height="400" :src="$axios.defaults.baseURL+'/images/'+item.lab_image"/>
                                                                </div>
                                                                <div class="content">
                                                                    <h4 class="title"><router-link :to="'/plants/'+item.lab_slug" class="cf f14">{{item.lab_name}}</router-link></h4>
                                                                </div>
                                                                <div class="overlay">

                                                                    <p v-if="!$store.state.en" class="cf f20">عنوان المعمل </p>
                                                                    <p v-if="$store.state.en" class="cf f20">Plant Location</p>
                                                                    <p v-if="!$store.state.en" class="cf f20">{{item.lab_location}} </p>
                                                                    <p v-if="$store.state.en" class="cf f20">{{item.lab_location_en}} </p>
                                                                    <span v-if="!$store.state.en" class="service-price cf f20">نوع الانتاج </span>
                                                                    <span v-if="$store.state.en" class="service-price cf f20">Production Type  </span>
                                                                    <a v-if="!$store.state.en" class="value black--text" href="#">{{item.lab_prod_type}}</a>
                                                                    <a v-if="$store.state.en" class="value black--text" href="#">{{item.lab_prod_type_en}}</a>

                                                                    <router-link :to="'/plants/'+item.lab_slug" class="btn-link cf f20b" href="#">
                                                                        <span v-if="!$store.state.en">عرض المزيد</span>
                                                                        <span v-if="$store.state.en">Read More </span>
                                                                        <i class="fa fa-arrow-circle-right"></i>
                                                                    </router-link>
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

<style>
    .v-tabs:not(.v-tabs--vertical):not(.v-tabs--right) > .v-slide-group--is-overflowing.v-tabs-bar--is-mobile:not(.v-slide-group--has-affixes) .v-slide-group__prev{
        display: none !important;
    }
</style>