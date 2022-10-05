<template>

   <div>
       <div class="row">
           <div class="col col-12 col-md-4 col-lg-3 col-lg-offset-4">
              <v-form lazy-validation v-model="valid" ref="form" >
                  <v-card elevation="6" class="mt-10">
                      <v-card-title class="error">
                          <v-icon dark>mdi-lock</v-icon>
                          <span class="cf f20 white--text mr-2">تسجيل الدخول</span>
                      </v-card-title>
                      <v-divider/>
                      <v-card-text>
                          <div class="row">
                              <div class="col px-4">

                                  <v-text-field :rules="req_email" v-model="user.email" prepend-inner-icon="mdi-email"  type="email" outlined label="E-mail" v-on:keyup.enter="login"></v-text-field>

                                  <v-text-field :rules="req" v-model="user.password" prepend-inner-icon="mdi-lock" type="password" outlined label="Password" v-on:keyup.enter="login"></v-text-field>
                              </div>

                          </div>
                      </v-card-text>
                      <v-divider/>
                      <v-card-actions>
                          <v-btn color="error" @click="login" :loading="loading">
                              <v-icon>mdi-key</v-icon>
                              <span class="mr-2 cf f20">دخول</span>
                          </v-btn>
                          <input type="hidden" >
                      </v-card-actions>
                  </v-card>
              </v-form>
           </div>
       </div>
   </div>
</template>

<script>
    export default {
        name: "Login",
        data(){
            return{
                valid:true,
                loading:false,
                user:{
                    email:'',
                    password:''
                },
                req:[v=>!!v || 'هذا الحقل مطلوب'],
                req_email:[v=>!!v || 'يرجى كتابة البريد بشكل صحيح']
            }
        },
        methods:{
            async login(){
                if(this.$refs.form.validate())
                {
                    this.loading = true;
                    this.$axios.post('api-dash/login',this.user).then(res=>{
                        console.log(res.data)
                        this.$store.state.dash.user = res.data;
                        this.$store.state.dash.login = true;
                        localStorage.setItem("token",res.data.token);
                        this.$axios.defaults.headers.common['Authorization'] = "Bearer "+res.data.token;
                        this.$router.push('/dashboard/plants')
                    }).catch(err=>{

                        var msg = "اسم المستخدم او كلمة المرور غير صحيحة";
                        try{
                            if(err.response.data.errors.email != undefined)
                            {
                                msg = err.response.data.errors.email;
                            }
                            if(err.response.data.errors.password != undefined)
                            {
                                msg = err.response.data.errors.password;
                            }
                        }catch (e) {
                            console.log(e)
                        }
                        




                        this.$fire({
                            title: "فشل",
                            text: msg,
                            type: "error",
                            timer: 5000
                        });
                    }).finally(fin=>{
                        this.loading =false;
                    })
                }
            },

        },
        created(){
                this.$store.state.dash.login = false;
        }
    }
</script>

<style >

</style>