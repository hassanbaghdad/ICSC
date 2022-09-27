<template>
    <footer class="footer bg-style">
        <div class="footer-upper">
            <div class="container">
                <div class="row">
                    <div class="col-md-4 col-sm-6">
                        <div class="footer-widget about-widget">
                            <a href="#">
                                <img src="img/resources/logo-footer.png" alt="Awesome Image" />
                            </a>
                            <ul class="contact">
                                <li><i class="fa fa-map-marker"></i>
                                    <span v-if="$store.state.en">Iraq - Baghdad</span>
                                    <span v-if="!$store.state.en" class="cf">العراق - بغداد</span>
                                </li>
                                <li><i class="fa fa-phone"></i> <span>{{$store.state.site.info.site_phone}}</span></li>
                                <li><i class="fa fa-envelope-o"></i> <span>{{$store.state.site.info.site_email}}</span></li>
                            </ul>
                            <ul class="social">
                                <li><a :href="'//'+$store.state.site.info.facebook"><i class="fa fa-facebook"></i></a></li>
                                <li><a :href="'//'+$store.state.site.info.twitter"><i class="fa fa-twitter"></i></a></li>
                                <li><a :href="'//'+$store.state.site.info.youtube"><i class="fa fa-youtube"></i></a></li>
                            </ul>
                        </div>
                    </div>

                    <div class="col-md-4 latest-post col-sm-6">
                        <div class="footer-widget latest-post news-post">
                            <h3 v-if="$store.state.en" class="title">Latest News</h3>
                            <h3 v-if="!$store.state.en" class="cf f20 text-right white--text ma-4">اخر الاخبار</h3>
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
                    <div class="col-md-4 col-sm-6">
                        <div class="footer-widget contact-widget">
                            <h3 class="title" v-if="$store.state.en">Contact Form</h3>
                            <div class="white--text cf f20 ma-2 text-right" v-if="!$store.state.en">اتصل بنا</div>

                            <v-form lazy-validation v-model="valid" ref="form" class="contact-form" id="footer-cf">
                                <input  v-model="msg.name" class="cf text-center"  type="text" name="name" :placeholder="$store.state.en?'Full Name':'الاسم الكامل'">
                                <input v-model="msg.email" class="cf text-center" type="text" name="email" :placeholder="$store.state.en?'Email Address':'البريد الالكتروني '">
                                <textarea v-model="msg.text" class="cf text-center" name="message" :placeholder="$store.state.en?'Message':'الرسالة '"></textarea>
                                <button @click="send" class="cf f18" v-if="!$store.state.en">ارسال</button>
                                <button @click="send" v-if="$store.state.en">Send</button>
                            </v-form>
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