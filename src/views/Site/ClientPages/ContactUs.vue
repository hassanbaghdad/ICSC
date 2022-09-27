<template>
    <div class="container pa-6">
        <v-card dark>

            <v-card-text>
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
            </v-card-text>
        </v-card>
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