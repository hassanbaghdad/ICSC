<template>
    <div>
        <section class="sec-padding pb-40">
<!--               <div class="container">-->
<!--                   <div class="row">-->
<!--                       <div class="col-lg-12 col-md-12">-->
                           <div class="sec-title text-center">
                               <h2 v-if="!$store.state.en" class="f26b cf">الاقسام</h2>
                               <h2 v-if="$store.state.en" class="f26b cf">Sections</h2>
                               <span class="decor">
					<span class="inner"></span>
                            </span>
                           </div>

<!--                                  <div :class="$store.state.en?'col col-xs-12 xol-sm-6 col-md-3':'col col-xs-12 xol-sm-6 col-md-3 float-right'"  >-->
<!--                                      <router-link :to="'sections/'+item.section_slug" class="single-service-home mt-8">-->

<!--                                          <div class="content text-right"  v-if="!$store.state.en">-->
<!--                                              <div class="cf f20b text-right mt-2 mr-4">{{item.section_title.split(' ')[0]}} <span class="color-theme f20b">{{item.section_title.split(item.section_title.split(' ')[0])[1]}}</span></div>-->
<!--                                              <p v-if="success" class="cf f14 mr-4 text-justify rtl" >{{item.section_desc.substr(0,50)}}... </p>-->
<!--                                          </div>-->
<!--                                          <div class="icon-box" v-if="$store.state.en">-->
<!--                                              <div class="inner-box" style="width: 100px">-->
<!--                                                  <v-img  src="icons/engineer.png"/>-->
<!--                                              </div>-->
<!--                                          </div>-->
<!--                                          <div class="content text-right"  v-if="$store.state.en">-->
<!--                                              <div class="f20b text-left mt-2">{{item.section_title_en.split(' ')[0]}}  <span class="color-theme f20b">{{item.section_title_en.split(item.section_title_en.split(' ')[0])[1]}}</span></div>-->
<!--                                              <p v-if="success" class="cf f14 mr-4 text-justify ">{{item.section_desc_en.substr(0,50)}} ... </p>-->

<!--                                          </div>-->


<!--                                          <div class="icon-box" v-if="!$store.state.en">-->
<!--                                              <div class="inner-box" style="width: 100px">-->
<!--                                                  <v-img  src="icons/engineer.png"/>-->
<!--                                              </div>-->
<!--                                          </div>-->
            <div class="pa-4">
                <carousel  class="pa-4"  :dots="false" :responsive="{0:{items:1,nav:false},600:{items:2,nav:false},750:{items:2,nav:false},1000:{items:3,nav:false},1500:{items:4,nav:false}}" :autoplay="true"  :nav="false"   v-if="success" style="height: 400px">
                    <div class="pa-4" v-for="(item,i) in sections" :key="'section_i_'+i" >
                        <v-card class="ma-auto" elevation="6" width="350">
                            <router-link :to="'/sections/'+item.section_slug">
                                <v-card-text>
                                    <v-img contain max-height="100"  src="icons/engineer.png"/>
                                </v-card-text>
                                <v-divider/>
                                <v-card-title>

                                    <span v-if="!$store.state.en&&success" class="cf f14b ma-auto black--text">{{item.section_title}}</span>
                                    <span v-if="$store.state.en&&success" class="cf f14b ma-auto black--text">{{item.section_title_en}}</span>
                                </v-card-title>
                            </router-link>
                        </v-card>
                    </div>
                </carousel>
            </div>






<!--                                      </router-link>-->
<!--                                  </div>-->



<!--                       </div>-->
<!--                   </div>-->
<!--               </div>-->
        </section>
    </div>


</template>

<script>
    import carousel from 'vue-owl-carousel'
    export default {
        name: "Sections",
        components: {
            carousel
        },
        data(){
            return{
                sections:[],
                success:false
            }
        },
        computed:{
            get_sections:function () {
                return this.$store.state.site.sections.sections
            }
        },
        watch:{
            get_sections:function (new_sections) {
                this.sections = new_sections;

                console.log(new_sections)
            }
        },
        created()
        {
            this.$axios.get('api-site/get-sections').then(res=>{
                this.sections = [];
                this.sections = res.data;
                this.success = true;
            })
        }

    }
</script>

<style scoped>
.owl-stage{
    height: 400px !important;
}
</style>