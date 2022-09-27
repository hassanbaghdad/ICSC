<template>
    <div>
        <section class="sec-padding pb-40">
               <div class="container">
                   <div class="row">
                       <div class="col-lg-12 col-md-12">
                           <div class="sec-title text-center">
                               <h2 v-if="!$store.state.en" class="f26b cf">الاقسام</h2>
                               <h2 v-if="$store.state.en" class="f26b cf">Sections</h2>
                               <span class="decor">
					<span class="inner"></span>
                            </span>
                           </div>
                          <div class="container">
                              <div class="row">
                                  <div :class="$store.state.en?'col col-xs-12 xol-sm-6 col-md-4':'col col-xs-12 xol-sm-6 col-md-4 float-right'"  v-for="(item,i) in $store.state.site.sections.sections" :key="'section_i_'+i">
                                      <router-link :to="'sections/'+item.section_slug" class="single-service-home mt-8">

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

                                            <v-card class="mt-4">
                                                <v-card-text>
                                                    <v-img contain max-height="100"  src="icons/engineer.png"/>
                                                </v-card-text>
                                                <v-divider/>
                                                <v-card-title>
                                                    <div v-if="!$store.state.en" class="cf f20b ma-auto">{{item.section_title}}</div>
                                                    <div v-if="$store.state.en" class="cf f20b ma-auto">{{item.section_title_en}}</div>
                                                </v-card-title>
                                            </v-card>




                                      </router-link>
                                  </div>

                              </div>
                          </div>
                       </div>
                   </div>
               </div>
        </section>
    </div>


</template>

<script>
    export default {
        name: "Sections",
        data(){
            return{
                sections:[],
                success:false
            }
        },
        created(){

        },
        destroyed(){
            this.success = true;
        }
    }
</script>

<style scoped>

</style>