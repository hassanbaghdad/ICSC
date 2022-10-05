<template>
    <v-app>


               <section class="sec-padding about-content full-sec pb-80" v-if="!$store.state.en">
                   <div class="container">
                       <div class="row">
                           <div class="col col-12 col-md-6 col-lg-8">
                               <v-card elevation="6" class="pa-8">
                                   <div class="row">
                                       <div class="col col-12 col-md-7 hidden-md text-right">
                                           <v-img contain max-height="400" :src="$axios.defaults.baseURL+'/images/'+section.section_image" alt="Awesome Image" />
                                       </div>
                                       <div class="col col-12 col-lg-5 col-md-12">
                                           <div class="full-sec-content mt-15">
                                               <div class="sec-title style-two text-right">
                                                   <h4 class="f24b cf black--text">{{section.section_title}}</h4>
                                                   <span class="decor" style="transform: scaleX(-1)"><span class="inner" ></span></span>
                                               </div>

                                           </div>
                                       </div>


                                   </div>
                                   <div class="row">
                                       <div class="col col-12">
                                           <div class="mt-16">
                                               <p class="text-justify mt-16 f16 cf rtl pa-4">{{section.section_desc}}</p>
                                           </div>
                                       </div>
                                   </div>


                               </v-card>
                           </div>
                            <div class="col col-12 col-md-6 col-lg-4">
                                <v-card>
                                    <v-list class="rtl"  >
                                        <v-list-item class="pa-0 ma-0 cf text-center f20 white--text" style="background-color:#004e8b">
                                            <v-list-item-title >
                                                <span v-if="!$store.state.en">الاقسام</span>
                                                <span v-if="$store.state.en">Sections</span>
                                            </v-list-item-title>
                                        </v-list-item>
                                        <v-list-item v-for="(sec ,i ) in $store.state.site.sections.sections" :key="'section_item_side_'+i" :to="'/sections/'+sec.section_slug" @click="get_section">
                                            <v-list-item-avatar>
                                                <v-icon>mdi-cog</v-icon>
                                            </v-list-item-avatar>
                                            <v-list-item-title class="cf">
                                                <span v-if="!$store.state.en">{{sec.section_title}}</span>
                                                <span v-if="$store.state.en">{{sec.section_title_en}}</span>
                                            </v-list-item-title>

                                        </v-list-item>
                                    </v-list>
                                </v-card>
                           </div>

                       </div>


                   </div>
               </section>
        <section class="sec-padding about-content full-sec pb-80" v-if="$store.state.en">
            <div class="container">
                <div class="row">
                    <div class="col col-12 col-md-6 col-lg-8">
                        <v-card elevation="6" class="pa-8">
                            <div class="row">
                                <div class="col col-12 col-lg-5 col-md-12">
                                    <div class="full-sec-content mt-15">
                                        <div class="sec-title style-two ">
                                            <h4 class="f24b cf black--text">{{section.section_title_en}}</h4>
                                            <span class="decor" ><span class="inner" ></span></span>
                                        </div>

                                    </div>
                                </div>
                                <div class="col col-12 col-md-7 hidden-md text-right">
                                    <v-img contain max-height="400" :src="$axios.defaults.baseURL+'/images/'+section.section_image" alt="Awesome Image" />
                                </div>



                            </div>
                            <div class="row">
                                <div class="col col-12">
                                    <div class="mt-16">
                                        <p class="text-justify mt-16 f16 cf  pa-4">{{section.section_desc_en}}</p>
                                    </div>
                                </div>
                            </div>


                        </v-card>
                    </div>
                    <div class="col col-12 col-md-6 col-lg-4">
                        <v-card>
                            <v-list class="rtl"  >
                                <v-list-item class="pa-0 ma-0 cf text-center f20 white--text" style="background-color:#004e8b">
                                    <v-list-item-title >
                                        <span v-if="!$store.state.en">الاقسام</span>
                                        <span v-if="$store.state.en">Sections</span>
                                    </v-list-item-title>
                                </v-list-item>
                                <v-list-item v-for="(sec ,i ) in $store.state.site.sections.sections" :key="'section_item_side_'+i" :to="'/sections/'+sec.section_slug" @click="get_section">
                                    <v-list-item-avatar>
                                        <v-icon>mdi-cog</v-icon>
                                    </v-list-item-avatar>
                                    <v-list-item-title class="cf">
                                        <span v-if="!$store.state.en">{{sec.section_title}}</span>
                                        <span v-if="$store.state.en">{{sec.section_title_en}}</span>
                                    </v-list-item-title>

                                </v-list-item>
                            </v-list>
                        </v-card>
                    </div>

                </div>


            </div>
        </section>



    </v-app>
</template>

<script>

    export default {
        name: "ViewSection",
        data(){
            return{
                slug:'',
                section:[],
                success:false
            }
        },
        methods:{
          get_section()
          {
              this.slug = this.$route.path.split('/sections/')[1];
              this.$axios.get('api-site/get-section/'+this.slug).then(res=>{
                  this.section = res.data;
                  this.success = true;
              }).catch(err=>{
                  console.log(err)
              })
          }
        },
        created(){
            this.slug = this.$route.path.split('/sections/')[1];
            this.get_section();
        },
        mounted () {
            window.scrollTo(0, 0)
        }

    }
</script>

<style scoped>

</style>