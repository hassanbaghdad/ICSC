<template>
    <div class="container mt-16">
        <div class="row">
            <div class="col col-12">
               <v-form lazy-validation v-model="vaild" ref="form">
                   <v-card :loading="loading">
                       <v-card-title class="error">
                           <v-icon dark>mdi-cogs</v-icon>
                           <span class="cf mr-2 f20b white--text">الاعدادات</span>
                       </v-card-title>
                       <v-card-text class="pa-6">
                          <div class="row">
                              <div class="col col-12 col-lg-6">
                                  <v-text-field class="cf" disabled readonly value="الشركة العامة للسمنت العراقية" label="اسم الموقع" outlined prepend-inner-icon="mdi-web"/>
                              </div>
                              <div class="col col-12 col-lg-6">
                                  <v-text-field  :rules="req_no" v-model="info.labs_count" label="عدد المعامل" outlined prepend-inner-icon="mdi-factory"/>
                              </div>
                              <div class="col col-12 col-lg-6">
                                  <v-text-field :rules="req_no" v-model="info.employees_count" label="عدد العمال" outlined prepend-inner-icon="mdi-account-group"/>
                              </div>
                              <div class="col col-12 col-lg-6">
                                  <v-text-field :rules="req_no" v-model="info.experience_years" label="سنوات الخبرة" outlined prepend-inner-icon="mdi-lightbulb-variant-outline"/>
                              </div>
                              <div class="col col-12 col-lg-6">
                                  <v-text-field :rules="req_no" v-model="info.certificate_count" label="شهادات الجودة" outlined prepend-inner-icon="mdi-certificate"/>
                              </div>
                              <div class="col col-12 col-lg-6">
                                  <v-text-field :rules="req_no" v-model="info.site_phone" label="رقم الهاتف " outlined prepend-inner-icon="mdi-phone"/>
                              </div>
                              <div class="col col-12 col-lg-6">
                                  <v-text-field :rules="req" v-model="info.site_email" label="البريد الالكتروني" outlined prepend-inner-icon="mdi-email"/>
                              </div>
                              <div class="col col-12 col-lg-6">
                                  <v-text-field :rules="req" v-model="info.facebook" label="Facebook" outlined prepend-inner-icon="mdi-facebook"/>
                              </div>
                              <div class="col col-12 col-lg-6">
                                  <v-text-field :rules="req" v-model="info.twitter" label="Twitter" outlined prepend-inner-icon="mdi-twitter"/>
                              </div>
                              <div class="col col-12 col-lg-6">
                                  <v-text-field :rules="req" v-model="info.youtube" label="YouTube" outlined prepend-inner-icon="mdi-youtube"/>
                              </div>
                              <div class="col col-12 col-lg-6">
                                  <v-text-field :rules="req" v-model="info.note" label="نص اعلى الصفحة" outlined prepend-inner-icon="mdi-note"/>
                              </div>
                              <div class="col col-12 col-lg-6">
                                  <v-text-field :rules="req" v-model="info.note_en" label=" نص اعلى الصفحة انجليزي" outlined prepend-inner-icon="mdi-note"/>
                              </div>
                          </div>
                           <div class="row pa-6">
                               <div class="col col-12">
                                   <v-textarea :rules="req" v-model="info.about_us" label="حولنا" outlined prepend-inner-icon="mdi-information"/>
                               </div>
                               <div class="col col-12">
                                   <v-textarea :rules="req" v-model="info.about_us_en" label=" حولنا انجليزي" outlined prepend-inner-icon="mdi-information"/>
                               </div>
                           </div>



                       </v-card-text>
                       <v-divider/>
                       <v-card-actions>
                           <v-btn color="primary" :loading="loading" @click="edit">
                               <v-icon dark>mdi-check</v-icon>
                               <span class="cf f20 mr-2">حفظ</span>
                           </v-btn>
                       </v-card-actions>
                   </v-card>
               </v-form>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Settings",
        data(){
            return{
                loading:false,
                vaild:true,
                req:[v=>!!v || 'هذا الحقل مطلوب'],
                req_no:[v=>!!v&&Boolean(Number(v)) || 'يرجى ادخال رقم'],
                info:{
                    labs_count:18,
                    employees_count:8000,
                    experience_years:50,
                    certificate_count:10,
                    about_us:'الشركة العراقية للسمنت هي اول شركة رائدة في مجال انتاج وتصنيع مواد البناء السمنتية على مستوى عالمي انطلقت من العراق وباشرت بالانتاج منذ اكثر من عشرون سنة',
                    about_us_en:'Description of about us  English',

                    site_phone:'07712345678',
                    site_email:'info@icsc.gov.iq',
                    facebook:'',
                    twitter:'',
                    youtube:'',
                    note:'',
                    note_en:''
                }
            }
        },
        methods:{
            edit(){
                if(this.$refs.form.validate())
                {
                    this.loading = true;
                    this.$axios.post('api-dash/edit-settings',this.info).then(res=>{
                        this.$fire({
                            title: "نجح",
                            text: res.data.msg,
                            type: "success",
                            timer: 5000
                        });
                    }).catch(err=>{
                        console.log(err)
                    }).finally(fin=>{
                        this.loading = false;
                    })
                }
            },
            async get_settings()
            {
                this.loading = true;
                this.$axios.get('api-dash/get-settings').then(res=>{
                   this.info = res.data;

                }).catch(err=>{
                    console.log(err)
                }).finally(fin=>{
                    this.loading = false;
                })
            }
        },
        created()
        {
            this.get_settings()
        }
    }
</script>

<style scoped>

</style>