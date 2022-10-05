<template>
    <div class="container">
        <div class="pa-4">
            <v-card :width="$vuetify.breakpoint.xs?300:''">
                <v-card-title>

                </v-card-title>
                <v-card-text>
                    <div class="ma-auto text-center">
                        <iframe class="ma-auto" width="100%" :height="$vuetify.breakpoint.xs?150:500"  src="https://www.youtube.com/embed/0S3Z93OLbMU" title="حماية الاسمنت العراقي" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>

                    <div class="footer-widget contact-widget">

                        <h3 class="title mt-6 grey--text pa-2" v-if="$store.state.en">About Us</h3>
                        <div class=" cf f20 mt-6 ma-2 text-right" v-if="!$store.state.en">من نحن </div>
                        <v-divider/>
                        <p v-if="!$store.state.en" style="line-height: 40px;text-align: justify" class="pa-2 rtl cf f18">{{$store.state.site.info.about_us}}</p>
                        <p v-if="$store.state.en" style="line-height: 40px;text-align: justify" class="pa-2  cf f18">{{$store.state.site.info.about_us_en}}</p>
                        <v-divider/>
                        <h3 class="title mt-4 grey--text pa-2" v-if="$store.state.en">Contact Us</h3>
                        <div class=" cf f20 ma-2 text-right" v-if="!$store.state.en">اتصل بنا </div>
                        <v-divider/>
                        <v-form lazy-validation v-model="valid" ref="form" class="contact-form" id="footer-cf">
                            <input  v-model="msg.name" class="cf text-center"  type="text" name="name" :placeholder="$store.state.en?'Full Name':'الاسم الكامل'">
                            <input v-model="msg.email" class="cf text-center" type="text" name="email" :placeholder="$store.state.en?'Email Address':'البريد الالكتروني '">
                            <textarea v-model="msg.text" class="cf text-center" name="message" :placeholder="$store.state.en?'Message':'الرسالة '"></textarea>
                            <button @click="send" class="cf f18" v-if="!$store.state.en">ارسال</button>
                            <button @click="send" v-if="$store.state.en">Send</button>
                        </v-form>
                    </div>
                </v-card-text>
            </v-card>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ContactUs",
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