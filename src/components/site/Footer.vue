<template>
    <footer class="footer bg-style">
        <div class="footer-upper">
            <div class="container">
                <div class="row">

                    <div class="col-md-3 col-sm-6" v-if="$store.state.en">
                        <div class="footer-widget about-widget text-right pa-4">
                            <v-img contain class="ma-auto"  src="/img/md-logo.png"></v-img>
                        </div>
                    </div>
                    <div class="col-md-3 latest-post col-sm-6" v-if="!$store.state.en">
                        <div class="footer-widget latest-post news-post">
                            <h3 v-if="$store.state.en" class="title">Latest News</h3>
                            <h3 v-if="!$store.state.en" class="cf f20 text-right white--text ma-auto ma-4 mr-6 mb-6"> اخر الاخبار</h3>

                            <ul :class="!$store.state.en?'rtl':''">
                                <li v-for="(ff,i) in $store.state.site.latest_news.latest_news" :key="'post_in_footer_'+i">
                                    <div v-if="i <4">
                                        <span class="border"><v-img height="65" width="70" :src="$axios.defaults.baseURL+'/images/'+ff.post_image" alt=""/></span>
                                        <div class="content">
                                            <router-link :to="'/news/'+ff.post_slug">
                                                <span class="cf" v-if="!$store.state.en">{{ff.post_title}}</span>
                                                <span v-if="$store.state.en">{{ff.post_title_en}}</span>
                                            </router-link>
                                            <span>{{ff.post_date.substr(0,10)}}</span>
                                        </div>
                                    </div>
                                </li>

                            </ul>
                        </div>
                    </div>
                    <div class="col-md-3 col-sm-6" v-if="!$store.state.en">
                        <div class="footer-widget about-widget text-right">
                            <h3 v-if="!$store.state.en" :class="$vuetify.breakpoint.xs?'cf f20 text-center white--text ma-auto ma-4':'cf f20 text-right white--text ma-auto ma-4 mr-6'">اتصل بنا</h3>
                            <ul  :class="$vuetify.breakpoint.xs?'contact rtl text-center':'contact rtl'" >
                                <li><i class="fa fa-map-marker rtl"></i>
                                    <span v-if="$store.state.en">Iraq - Baghdad</span>
                                    <span v-if="!$store.state.en" class="cf">العراق - بغداد</span>
                                </li>
                                <li><i class="fa fa-phone mr-2 ml-2"></i> <span >&nbsp;{{$store.state.site.info.site_phone}}</span></li>
                                <li><i class="fa fa-envelope-o"></i> <span style="direction: ltr !important;">{{$store.state.site.info.site_email}}</span></li>
                            </ul>
                            <ul :class="$vuetify.breakpoint.xs?'social pa-4 text-center':'social pa-4'">
                                <li><a :href="'//'+$store.state.site.info.facebook"><i class="fa fa-facebook"></i></a></li>
                                <li><a :href="'//'+$store.state.site.info.youtube"><i class="fa fa-youtube"></i></a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-md-3 col-sm-6" v-if="$store.state.en">
                        <div class="footer-widget about-widget text-right">
                            <h3 v-if="$store.state.en" class="title text-left">Links</h3>
                            <ul class="contact" >
                                <li class="cf text-left"><a href="/news" class="white--text">
                                    <v-icon color="white">mdi-web</v-icon>
                                    <span v-if="!$store.state.en">الاخبار</span>
                                    <span v-if="$store.state.en">News</span>
                                </a> </li>

                                <li class="cf text-left"><a href="/sections" class="white--text">
                                    <v-icon color="white">mdi-cog</v-icon>
                                    <span v-if="!$store.state.en">الاقسام</span>
                                    <span v-if="$store.state.en">Sections</span>
                                </a> </li>
                                <li class="cf text-left"><a href="/productions" class="white--text">
                                    <v-icon color="white">mdi-cube-outline</v-icon>
                                    <span v-if="!$store.state.en">المنتجات</span>
                                    <span v-if="$store.state.en">Productions</span>
                                </a> </li>
                                <li class="cf text-left"><a href="/contact-us" class="white--text">
                                    <v-icon color="white">mdi-information</v-icon>
                                    <span v-if="!$store.state.en">اتصل بنا</span>
                                    <span v-if="$store.state.en">Productions</span>
                                </a> </li>

                            </ul>

                        </div>
                    </div>
                    <div class="col-md-3 col-sm-6" v-if="$store.state.en">
                        <div class="footer-widget about-widget text-left">
                            <h3 v-if="$store.state.en" class="title text-left">Contact Us</h3>

                            <ul class="contact" >
                                <li><i class="fa fa-map-marker"></i>
                                    <span v-if="$store.state.en">Iraq - Baghdad</span>
                                </li>
                                <li><i class="fa fa-phone mr-2 ml-2"></i> <span >&nbsp;{{$store.state.site.info.site_phone}}</span></li>
                                <li><i class="fa fa-envelope-o"></i> <span style="direction: ltr !important;">{{$store.state.site.info.site_email}}</span></li>
                            </ul>
                            <ul class="social pa-4">
                                <li><a :href="'//'+$store.state.site.info.facebook"><i class="fa fa-facebook"></i></a></li>
                                <li><a :href="'//'+$store.state.site.info.youtube"><i class="fa fa-youtube"></i></a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-md-3 latest-post col-sm-6" v-if="$store.state.en">
                        <div class="footer-widget latest-post news-post">
                            <h3 v-if="$store.state.en" class="title">Latest News</h3>
                            <h3 v-if="!$store.state.en" class="cf f20 text-right white--text ma-auto ma-4 mr-6 mb-6"> اخر الاخبار</h3>

                            <ul :class="!$store.state.en?'rtl':''">
                                <li v-for="(ff,i) in $store.state.site.latest_news.latest_news" :key="'post_in_footer_'+i">
                                    <div v-if="i <4">
                                        <span class="border"><v-img height="65" width="70" :src="$axios.defaults.baseURL+'/images/'+ff.post_image" alt=""/></span>
                                        <div class="content">
                                            <router-link :to="'/news/'+ff.post_slug">
                                                <span class="cf" v-if="!$store.state.en">{{ff.post_title}}</span>
                                                <span v-if="$store.state.en">{{ff.post_title_en}}</span>
                                            </router-link>
                                            <span>{{ff.post_date.substr(0,10)}}</span>
                                        </div>
                                    </div>
                                </li>

                            </ul>
                        </div>
                    </div>
                    <div class="col-md-3 col-sm-6" v-if="!$store.state.en">
                        <div class="footer-widget about-widget text-center">
                            <h3 v-if="!$store.state.en" class="cf f20 text-center white--text ma-auto ma-4">الروابط</h3>
                            <ul :class="$vuetify.breakpoint.xs?'contact rtl text-center':'contact rtl'" >
                                <li class="cf"><router-link to="/news" class="white--text">
                                    <v-icon color="white">mdi-web</v-icon>
                                    <span v-if="!$store.state.en">الاخبار</span>
                                    <span v-if="$store.state.en">News</span>
                                </router-link> </li>

                                <li class="cf"><a href="/sections" class="white--text">
                                    <v-icon color="white" style="right: 5px">mdi-cog</v-icon>
                                    <span v-if="!$store.state.en">الاقسام</span>
                                    <span v-if="$store.state.en">Sections</span>
                                </a> </li>
                                <li class="cf"><a href="/productions" class="white--text">
                                    <v-icon color="white" style="right: 5px">mdi-cube-outline</v-icon>
                                    <span v-if="!$store.state.en">المنتجات</span>
                                    <span v-if="$store.state.en">Productions</span>
                                </a> </li>
                                <li class="cf"><a href="/tenders" class="white--text">
                                    <v-icon color="white" style="right: 5px">mdi-cube-outline</v-icon>
                                    <span v-if="!$store.state.en">مناقصات</span>
                                    <span v-if="$store.state.en">Productions</span>
                                </a> </li>

                                <li class="cf"><a href="/contact-us" class="white--text">
                                    <v-icon color="white">mdi-information</v-icon>
                                    <span v-if="!$store.state.en">اتصل بنا</span>
                                    <span v-if="$store.state.en">Productions</span>
                                </a> </li>

                            </ul>

                        </div>
                    </div>



                    <div class="col-md-3 col-sm-6" v-if="!$store.state.en">
                        <div class="footer-widget about-widget text-right pa-4">
                          <v-img contain class="ma-auto"  src="/img/md-logo.png"></v-img>

                        </div>
                    </div>



                </div>
            </div>
        </div>
        <div class="footer-bottom">
            <div class="container text-center">
                <p v-if="!$store.state.en" class="cf rtl">&copy; جميع الحقوق محفوظة لشركة {{new Date().getFullYear()}}  <a href="https://pasma4tech.com/" class="cf">البصمة</a> | للحلول البرمجية</p>
                <p v-if="$store.state.en">&copy; Copyright {{new Date().getFullYear()}} by <a href="https://pasma4tech.com/">PASMA</a> | All rights reserved</p>
            </div>
        </div>
    </footer>
</template>

<script>
    export default {
        name: "Footer",
        data()
        {
            return{
                loading:false,
                req:[v=>!!v || ''],
                valid:true,
                msg:{
                    name:'',
                    email:'',
                    text:''
                }
            }
        },
        methods:{
            send()
            {
                if(this.msg.name != "" && this.msg.email != "" && this.msg.text !="")
                {
                    this.$axios.post('api-site/send-message',this.msg).then(res=>{
                        this.$fire({
                            title: "نجح",
                            text: res.data.msg,
                            type: "success",
                            timer: 3000
                        });
                    }).catch(err=>{
                        console.log(err)
                    }).finally(fin=>{
                        this.loading = false;
                    })
                }else{
                    this.$fire({
                        title: "الحقول مطلوبة",
                        text: "يرجى ملئ حقول الاسم والبريد والرسالة",
                        type: "warning",
                        timer: 5000
                    });
                }
            }
        }
    }
</script>

<style scoped>

</style>