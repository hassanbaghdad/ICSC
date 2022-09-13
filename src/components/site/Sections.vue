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
                                  <div class="col col-xs-12 xol-sm-6 col-md-4" v-for="(item,i) in $store.state.site.sections.sections" :key="'section_i_'+i">
                                      <router-link :to="'sections/'+item.section_slug" class="single-service-home mt-8">

                                          <div class="content text-right"  v-if="!$store.state.en">
                                              <div class="cf f20b text-right mt-2 mr-4">قسم <span class="color-theme f20b">{{item.section_title}}</span></div>
                                              <p class="cf f14 mr-4 text-justify rtl" >{{item.section_desc}} </p>
                                          </div>
                                          <div class="icon-box" v-if="$store.state.en">
                                              <div class="inner-box" style="width: 100px">
                                                  <v-img  src="icons/engineer.png"/>
                                              </div>
                                          </div>
                                          <div class="content text-right"  v-if="$store.state.en">
                                              <div class="f20b text-left mt-2">Section <span class="color-theme f20b">{{item.section_title_en}}</span></div>
                                              <p class="cf f14 mr-4 text-justify ">{{item.section_desc_en}} ... </p>

                                          </div>


                                          <div class="icon-box" v-if="!$store.state.en">
                                              <div class="inner-box" style="width: 100px">
                                                  <v-img  src="icons/engineer.png"/>
                                              </div>
                                          </div>






                                      </router-link>
                                  </div>

                              </div>
                          </div>
                       </div>
                   </div>
               </div>
        </section>
    </div>

<!--    <section class="sec-padding pb-40">-->
<!--        <div class="container">-->
<!--            <div class="row">-->
<!--                <div class="col-lg-12 col-md-12">-->
<!--                    <div class="sec-title style-two sm-text-center mb-20">-->
<!--                        <h2>Why Choose Us</h2>-->
<!--                        <span class="decor">-->
<!--							<span class="inner"></span>-->
<!--                        </span>-->
<!--                    </div>-->
<!--                    <div class="row style-three">-->
<!--                        <div class="col-md-6 col-sm-6">-->
<!--                            <div class="single-service-home">-->
<!--                                <div class="icon-box">-->
<!--                                    <div class="inner-box">-->
<!--                                        <v-img src="icons/engineer.png"/>-->
<!--                                    </div>-->
<!--                                </div>-->
<!--                                <div class="content">-->
<!--                                    <h3>Experience <span class="color-theme">Skills</span></h3>-->
<!--                                    <p>Lorem ipsum dolor sit amet Quis, consectetur adipisicing elit.</p>-->
<!--                                </div>-->
<!--                            </div>-->
<!--                        </div>-->
<!--                        <div class="col-md-6 col-sm-6">-->
<!--                            <div class="single-service-home">-->
<!--                                <div class="icon-box">-->
<!--                                    <div class="inner-box">-->
<!--                                        <v-img src="icons/engineer.png"/>-->
<!--                                    </div>-->
<!--                                </div>-->
<!--                                <div class="content">-->
<!--                                    <h3>Guarantee <span class="color-theme">Services</span></h3>-->
<!--                                    <p>Lorem ipsum dolor sit amet Quis, consectetur adipisicing elit.</p>-->
<!--                                </div>-->
<!--                            </div>-->
<!--                        </div>-->
<!--                        <div class="col-md-6 col-sm-6">-->
<!--                            <div class="single-service-home">-->
<!--                                <div class="icon-box">-->
<!--                                    <div class="inner-box">-->
<!--                                        <v-img src="icons/engineer.png"/>-->
<!--                                    </div>-->
<!--                                </div>-->
<!--                                <div class="content">-->
<!--                                    <h3>Expert <span class="color-theme">Worker</span></h3>-->
<!--                                    <p>Lorem ipsum dolor sit amet Quis, consectetur adipisicing elit.</p>-->
<!--                                </div>-->
<!--                            </div>-->
<!--                        </div>-->
<!--                        <div class="col-md-6 col-sm-6">-->
<!--                            <div class="single-service-home">-->
<!--                                <div class="icon-box">-->
<!--                                    <div class="inner-box">-->
<!--                                        <v-img src="icons/engineer.png"/>-->
<!--                                    </div>-->
<!--                                </div>-->
<!--                                <div class="content">-->
<!--                                    <h3>Customer <span class="color-theme">Support</span></h3>-->
<!--                                    <p>Lorem ipsum dolor sit amet Quis, consectetur adipisicing elit.</p>-->
<!--                                </div>-->
<!--                            </div>-->
<!--                        </div>-->
<!--                        <div class="col-md-6 col-sm-6">-->
<!--                            <div class="single-service-home">-->
<!--                                <div class="icon-box">-->
<!--                                    <div class="inner-box">-->
<!--                                        <v-img src="icons/engineer.png"/>-->
<!--                                    </div>-->
<!--                                </div>-->
<!--                                <div class="content">-->
<!--                                    <h3>Online <span class="color-theme">Pay</span></h3>-->
<!--                                    <p>Lorem ipsum dolor sit amet Quis, consectetur adipisicing elit.</p>-->
<!--                                </div>-->
<!--                            </div>-->
<!--                        </div>-->
<!--                        <div class="col-md-6 col-sm-6">-->
<!--                            <div class="single-service-home">-->
<!--                                <div class="icon-box">-->
<!--                                    <div class="inner-box">-->
<!--                                        <v-img src="icons/engineer.png"/>-->
<!--                                    </div>-->
<!--                                </div>-->
<!--                                <div class="content">-->
<!--                                    <h3>Trusted <span class="color-theme">Work</span></h3>-->
<!--                                    <p>Lorem ipsum dolor sit amet Quis, consectetur adipisicing elit.</p>-->
<!--                                </div>-->
<!--                            </div>-->
<!--                        </div>-->
<!--                        <div class="col-md-6 col-sm-6">-->
<!--                            <div class="single-service-home">-->
<!--                                <div class="icon-box">-->
<!--                                    <div class="inner-box">-->
<!--                                        <v-img src="icons/engineer.png"/>-->
<!--                                    </div>-->
<!--                                </div>-->
<!--                                <div class="content">-->
<!--                                    <h3>Quality <span class="color-theme">Work</span></h3>-->
<!--                                    <p>Lorem ipsum dolor sit amet Quis, consectetur adipisicing elit.</p>-->
<!--                                </div>-->
<!--                            </div>-->
<!--                        </div>-->
<!--                        <div class="col-md-6 col-sm-6">-->
<!--                            <div class="single-service-home">-->
<!--                                <div class="icon-box">-->
<!--                                    <div class="inner-box">-->
<!--                                        <v-img src="icons/engineer.png"/>-->
<!--                                    </div>-->
<!--                                </div>-->
<!--                                <div class="content">-->
<!--                                    <h3>Low <span class="color-theme">Cost</span></h3>-->
<!--                                    <p>Lorem ipsum dolor sit amet Quis, consectetur adipisicing elit.</p>-->
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
        name: "Sections",
        data(){
            return{
                sections:[
                    'الاستثمار',
                    'التسويق',
                    'الادارة الصناعية',
                    'الاستثمار',
                    'التسويق',
                    'الادارة الصناعية',
                    'الاستثمار',
                    'التسويق',
                    'الادارة الصناعية',
                    'الاستثمار',
                    'التسويق',
                    'الادارة الصناعية',
                    'الاستثمار',
                    'التسويق',
                    'الادارة الصناعية',

                ]
            }
        }
    }
</script>

<style scoped>

</style>