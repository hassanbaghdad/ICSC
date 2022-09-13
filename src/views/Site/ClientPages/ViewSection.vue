<template>
    <v-app>


               <section class="sec-padding about-content full-sec pb-80" v-if="!$store.state.en">
                   <div class="container">
                       <div class="row">
                           <div class="col-md-7 hidden-md text-right">
                               <img src="img/resources/about-1.jpg" alt="Awesome Image" />
                           </div>
                           <div class="col-lg-5 col-md-12">
                               <div class="full-sec-content mt-15">
                                   <div class="sec-title style-two text-right">
                                       <h2 class="f22b cf">{{section.section_title}}</h2>
                                       <span class="decor" style="transform: scaleX(-1)"><span class="inner" ></span></span>
                                   </div>
                                   <p class="text-justify f16 cf rtl">{{section.section_desc}}</p>
                               </div>
                           </div>

                       </div>
                   </div>
               </section>
               <section class="sec-padding about-content full-sec pb-80" v-if="$store.state.en">
                   <div class="container">
                       <div class="row">
                           <div class="col-lg-5 col-md-12">
                               <div class="full-sec-content mt-15">
                                   <div class="sec-title style-two">
                                       <h2>{{section.section_title_en}}</h2>
                                       <span class="decor">
								<span class="inner"></span>
                            </span>
                                   </div>
                                   <p class="text-justify f16">{{section.section_desc_en}}</p>
                               </div>
                           </div>
                           <div class="col-md-7 hidden-md text-right">
                               <img src="img/resources/about-1.jpg" alt="Awesome Image" />
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
              this.$axios.get('api-site/get-section/'+this.slug).then(res=>{
                  this.section = res.data;
                  this.success = true;
              }).cache(err=>{
                  console.log(err)
              })
          }
        },
        created(){
            this.slug = this.$route.path.split('/sections/')[1];
            this.get_section();
        }
    }
</script>

<style scoped>

</style>