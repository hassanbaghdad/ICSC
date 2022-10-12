<template>
    <div >
        <section v-if="!$store.state.en" class="sec-padding ">
            <div class="container" v-if="!loading">
                <div class="row">
                    <div class="col col-12 col-md-12">
                        <v-card class="pa-6" elevation="6">

                            <v-card-text>
                                <div class="row">
                                    <div class="col-md-7 hidden-md text-right">
                                        <div class="cover-image">
                                            <v-img contain class="img-post" :src="$axios.defaults.baseURL+'/images/'+post.post_image" alt="Awesome Image" />
                                        </div>

                                    </div>
                                    <div class="col-lg-5 col-md-12">
                                        <div class="full-sec-content mt-15 text-right">
                                            <div class="sec-title style-two">
                                                <h2 class="cf">الاخبار</h2>
                                                <span class="decor" style="transform: scaleX(-1)">
								<span class="inner"></span>
                            </span>

                                            </div>
                                            <h3 class="cf">{{post.post_title}}</h3>
                                            <p class="text-justify f14 cf rtl mt-4">{{post.post_desc}}</p>
                                            <br>

                                        </div>
                                    </div>

                                </div>
                            </v-card-text>
                            <v-divider/>
                            <v-card-actions class="rtl">
                                <v-card-subtitle style="color: grey !important;">{{post.post_date.substr(0,10)}}</v-card-subtitle>
                                <v-icon color="grey">mdi-eye</v-icon><span class="ml-2 mr-2" style="color: grey !important;">{{post.post_views}}</span>

                            </v-card-actions>
                        </v-card>
                    </div>
<!--                    <div class="col col-12 col-md-3">-->
<!--                        <SideSections/>-->
<!--                    </div>-->

                </div>


                <LatestNews/>
            </div>
        </section>
        <section v-if="$store.state.en" class="sec-padding about-content pb-80">
                <div class="container" v-if="!loading">
                   <v-card class="pa-6" elevation="6">

                    <v-card-text>
                        <div class="row">
                            <div class="col-lg-5 col-md-12">
                                <div class="full-sec-content mt-15">
                                    <div class="sec-title style-two">
                                        <h2>News</h2>
                                        <span class="decor">
								<span class="inner"></span>
                            </span>

                                    </div>
                                    <h3>{{post.post_title_en}}</h3>

                                    <p class="text-justify f14">{{post.post_desc_en}}</p>
                                    <br>

                                </div>
                            </div>
                            <div class="col-md-7 hidden-md text-right">
                                <div class="cover-image">
                                    <v-img contain class="img-post" :src="$axios.defaults.baseURL+'/images/'+post.post_image" alt="Awesome Image" />
                                </div>

                            </div>
                        </div>
                    </v-card-text>
                       <v-divider/>
                       <v-card-actions>
                           <v-card-subtitle style="color: grey !important;">{{post.post_date.substr(0,10)}}</v-card-subtitle>
                           <v-icon>mdi-eye</v-icon><span class="ml-2 mr-2" style="color: grey !important;">{{post.post_views}}</span>

                       </v-card-actions>
                   </v-card>
                </div>
        </section>
    </div>
</template>

<script>
    import LatestNews from "@/components/site/LatestNews";
    import SideSections from "@/views/Site/ClientPages/SideSections";
    export default {
        name: "ReadPost",
        components: {
            //SideSections,
            LatestNews},
        data(){
            return{
                post_slug:'',
                post:[],
                loading:true
            }
        },
        methods:{
            get_post()
            {
                this.$axios.get('api-site/get-post/'+this.post_slug).then(res=>{
                    console.log(res.data)
                    console.log(this.$axios.defaults.baseURL)
                    this.post = res.data;
                }).catch(err=>{

                }).finally(fin=>{
                    this.loading = false;
                })
            }
        },
        created(){
            this.post_slug = this.$route.path.split('/news/')[1];
            this.get_post();
        },
        mounted () {
            window.scrollTo(0, 0)
        }

    }
</script>

<style scoped>
.cover-image{
    overflow: hidden;
}
.img-post{
   transition: ease-in-out 10s;
}
.img-post:hover{
       transform: scale(1.3);
   }
</style>