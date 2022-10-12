<template>
    <div>
        <v-divider/>
        <div class="title-box text-center">
            <h2 v-if="!$store.state.en" class="cf f24b"> منتجاتنا</h2>
            <h2 v-if="$store.state.en">Our Products </h2>

            <span class="decor"><span class="inner"></span></span>
        </div>
        <section class="featured-section" :key="key">


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
                    <v-tab-item value="all" style="background-color: white">
                        <div class="container">
                            <div class="row">
                                <div style=";margin: 10px" class="col col-xs-12 col-sm-6 col-md-4 col-lg-2 col-xl-2" v-for="(item,i) in labs" :key="'labs_swep_ar_'+i">
                                    <div class="services-content  pl-30 pl-md-0">
                                        <div :style="$vuetify.breakpoint.xs?'background-color: grey;width: 325px':'background-color: grey;width: 250px;transform:scale(0.7)'" class="item" >

                                            <v-card elevation="8">
                                                <div class="service-box">
                                                    <div class="img-thumb">
                                                        <v-img contain max-height="350" :src="$axios.defaults.baseURL+'/images/'+item.lab_image"/>
                                                    </div>
                                                    <div class="content">
                                                        <h4 class="title"><router-link :to="'/plants/'+item.lab_slug" class="cf f14">
                                                            <span v-if="!$store.state.en">{{item.lab_name}}</span>
                                                            <span v-if="$store.state.en">{{item.lab_name_en}}</span>
                                                        </router-link></h4>
                                                    </div>
                                                    <div class="overlay">
                                                        <router-link :to="'/plants/'+item.lab_slug" class="btn-link white--text cf mt-10 f20b" >
                                                        <p v-if="!$store.state.en" class="cf f20">عنوان المعمل </p>
                                                        <p v-if="$store.state.en" class="cf f20">Plant Location</p>
                                                        <p v-if="!$store.state.en" class="cf f22">{{item.lab_location}} </p>
                                                        <p v-if="$store.state.en" class="cf f222">{{item.lab_location_en}} </p>
                                                        <span v-if="!$store.state.en" class="service-price cf f20 white--text">نوع الانتاج </span>
                                                        <span v-if="$store.state.en" class="service-price cf f20 white--text">Production Type  </span>
                                                        <a v-if="!$store.state.en" class="value cf white--text" href="#">{{item.lab_prod_type}}</a>
                                                        <a v-if="$store.state.en" class="value cf white--text" href="#">{{item.lab_prod_type_en}}</a>


                                                            <span v-if="!$store.state.en" class="white--text">عرض المزيد</span>
                                                            <span v-if="$store.state.en"  class="white--text">Read More </span>
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
                    <v-tab-item value="resistant" style="background-color: white">
                        <div class="container">
                            <div class="row">
                                <div style="margin: 10px" class="col col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-2" v-for="(white,i) in resistant" :key="'labs_swep_res_'+i">
                                    <div class="services-content  pl-30 pl-md-0">
                                        <div :style="$vuetify.breakpoint.xs?'background-color: grey;width: 325px':'background-color: grey;width: 250px;transform:scale(0.7)'" class="item" >
                                            <v-card elevation="8">
                                                <div class="service-box">
                                                    <div class="img-thumb">
                                                        <v-img contain max-height="400" :src="$axios.defaults.baseURL+'/images/'+white.lab_image"/>
                                                    </div>
                                                    <div class="content">
                                                        <h4 class="title"><router-link :to="'/plants/'+white.lab_slug" class="cf f14">
                                                            <span v-if="!$store.state.en">{{white.lab_name}}</span>
                                                            <span v-if="$store.state.en">{{white.lab_name_en}}</span>
                                                        </router-link></h4>                                                    </div>
                                                    <div class="overlay">
                                                        <router-link :to="'/plants/'+white.lab_slug" class="btn-link white--text cf mt-10 f20b">
                                                        <p v-if="!$store.state.en" class="cf f20">عنوان المعمل </p>
                                                        <p v-if="$store.state.en" class="cf f20">Plant Location</p>
                                                        <p v-if="!$store.state.en" class="cf f22">{{white.lab_location}} </p>
                                                        <p v-if="$store.state.en" class="cf f222">{{white.lab_location_en}} </p>
                                                        <span v-if="!$store.state.en" class="service-price cf f20 white--text">نوع الانتاج </span>
                                                        <span v-if="$store.state.en" class="service-price cf f20 white--text">Production Type  </span>
                                                        <a v-if="!$store.state.en" class="value cf white--text" href="#">{{white.lab_prod_type}}</a>
                                                        <a v-if="$store.state.en" class="value cf white--text" href="#">{{white.lab_prod_type_en}}</a>

                                                            <span v-if="!$store.state.en" class="white--text">عرض المزيد</span>
                                                            <span v-if="$store.state.en"  class="white--text">Read More </span>
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
                    <v-tab-item value="white" style="background-color: white">
                        <div class="container">
                            <div class="row">
                                <div style="margin: 10px" class="col col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-2" v-for="(item,i) in white" :key="'labs_swep_white_'+i">
                                    <div class="services-content  pl-30 pl-md-0">
                                        <div :style="$vuetify.breakpoint.xs?'background-color: grey;width: 325px':'background-color: grey;width: 250px;transform:scale(0.7)'" class="item" >
                                            <v-card elevation="8">
                                                <div class="service-box">
                                                    <div class="img-thumb">
                                                        <v-img contain max-height="400" :src="$axios.defaults.baseURL+'/images/'+item.lab_image"/>
                                                    </div>
                                                    <div class="content">
                                                        <h4 class="title"><router-link :to="'/plants/'+item.lab_slug" class="cf f14">
                                                            <span v-if="!$store.state.en">{{item.lab_name}}</span>
                                                            <span v-if="$store.state.en">{{item.lab_name_en}}</span>
                                                        </router-link></h4>                                                    </div>
                                                    <div class="overlay">
                                                        <router-link :to="'/plants/'+item.lab_slug" class="btn-link white--text cf mt-10 f20b">
                                                        <p v-if="!$store.state.en" class="cf f20">عنوان المعمل </p>
                                                        <p v-if="$store.state.en" class="cf f20">Plant Location</p>
                                                        <p v-if="!$store.state.en" class="cf f22">{{item.lab_location}} </p>
                                                        <p v-if="$store.state.en" class="cf f222">{{item.lab_location_en}} </p>
                                                        <span v-if="!$store.state.en" class="service-price cf f20 white--text">نوع الانتاج </span>
                                                        <span v-if="$store.state.en" class="service-price cf f20 white--text">Production Type  </span>
                                                        <a v-if="!$store.state.en" class="value cf white--text" href="#">{{item.lab_prod_type}}</a>
                                                        <a v-if="$store.state.en" class="value cf white--text" href="#">{{item.lab_prod_type_en}}</a>

                                                            <span v-if="!$store.state.en" class="white--text">عرض المزيد</span>
                                                            <span v-if="$store.state.en"  class="white--text">Read More </span>
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
                    <v-tab-item value="normal" style="background-color: white">
                        <div class="container">
                            <div class="row">
                                <div style="margin: 10px" class="col col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-2" v-for="(item,i) in normal" :key="'labs_swep_normal_'+i">
                                    <div class="services-content  pl-30 pl-md-0">
                                        <div :style="$vuetify.breakpoint.xs?'background-color: grey;width: 325px':'background-color: grey;width: 250px;transform:scale(0.7)'" class="item" >
                                            <v-card elevation="8">
                                                <div class="service-box">
                                                    <div class="img-thumb">
                                                        <v-img contain max-height="400" :src="$axios.defaults.baseURL+'/images/'+item.lab_image"/>
                                                    </div>
                                                    <div class="content">
                                                        <h4 class="title"><router-link :to="'/plants/'+item.lab_slug" class="cf f14">
                                                            <span v-if="!$store.state.en">{{item.lab_name}}</span>
                                                            <span v-if="$store.state.en">{{item.lab_name_en}}</span>
                                                        </router-link></h4>                                                    </div>
                                                    <div class="overlay">
                                                        <router-link :to="'/plants/'+item.lab_slug" class="btn-link white--text cf mt-10 f20b">

                                                        <p v-if="!$store.state.en" class="cf f20">عنوان المعمل </p>
                                                        <p v-if="$store.state.en" class="cf f20">Plant Location</p>
                                                        <p v-if="!$store.state.en" class="cf f22">{{item.lab_location}} </p>
                                                        <p v-if="$store.state.en" class="cf f222">{{item.lab_location_en}} </p>
                                                        <span v-if="!$store.state.en" class="service-price cf f20 white--text">نوع الانتاج </span>
                                                        <span v-if="$store.state.en" class="service-price cf f20 white--text">Production Type  </span>
                                                        <a v-if="!$store.state.en" class="value cf white--text" href="#">{{item.lab_prod_type}}</a>
                                                        <a v-if="$store.state.en" class="value cf white--text" href="#">{{item.lab_prod_type_en}}</a>

                                                            <span v-if="!$store.state.en" class="white--text">عرض المزيد</span>
                                                            <span v-if="$store.state.en"  class="white--text">Read More </span>
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
    </div>

</template>

<script>
    export default {
        name: "Labs",
        data(){
            return{
                tab: null,
               labs:[],
               labs_en:[],
                normal:[],
                white:[],
                resistant:[],
                success:false,
                key:345

            }
        },
        methods:{
            get_full_labs()
            {
                this.$axios.get('api-site/get-full-labs').then(res=>{
                   this.labs = [];
                   this.labs = res.data.all;
                   this.labs_en = res.data.all;
                   this.normal = res.data.normal;
                   this.white = res.data.white;
                   this.resistant = res.data.resistant;
                   this.success = true;
                   this.key = 45455;
                })
            }
        },

        created(){
            this.get_full_labs();
            console.log(this.tab)
        }

    }
</script>

<style>
    .v-tabs:not(.v-tabs--vertical):not(.v-tabs--right) > .v-slide-group--is-overflowing.v-tabs-bar--is-mobile:not(.v-slide-group--has-affixes) .v-slide-group__prev{
        display: none !important;
    }

    .theme--light.v-sheet{
        color: white;
    }
</style>