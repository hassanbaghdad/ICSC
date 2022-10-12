<template>
    <v-dialog v-model="$store.state.dash.certificates.forms.add_certificate" max-width="600">
      <v-form lazy-validation v-model="valid" ref="form">
          <v-card>
              <v-card-title class="primary">
                  <v-icon color="white">mdi-plus</v-icon>
                  <span class="white--text mr-2 cf f18">اضافة شهادة</span>
              </v-card-title>
              <v-divider/>
              <v-card-text>
                  <div class="row">
                      <div class="col col-12">
                          <v-text-field :rules="req" label="عنوان الشهادة عربي" outlined v-model="certificate.cert_title"/>
                      </div>>
                      <div class="col col-12">
                          <v-text-field :rules="req" label="عنوان الشهادة انجليزي" outlined v-model="certificate.cert_title_en"/>
                      </div>>
                      <div class="col col-12">
                          <v-file-input :rules="req" label="ارفاق ملف الشهادة" outlined v-model="certificate.cert_file"/>
                      </div>>

                  </div>
              </v-card-text>
              <v-divider/>
              <v-card-actions>
                  <v-btn @click="add_certificate" color="primary" :loading="loading">
                      <v-icon color="white">mdi-check</v-icon>
                      <span class="cf mr-2 white--text">حفظ</span>
                  </v-btn>
                  <v-btn outlined @click="$store.state.dash.certificates.forms.add_certificate=false">
                      <v-icon color="grey">mdi-close</v-icon>
                      <span class="cf mr-2 grey--text">الغاء</span>
                  </v-btn>


              </v-card-actions>
          </v-card>
      </v-form>
    </v-dialog>
</template>

<script>
    export default {
        name: "AddCertificate",
        data()
        {
            return{
                valid:true,
                loading:false,
                req:[v=>!!v || 'لايمكن تركه فارغاً'],
                certificate:{
                    cert_title:'',
                    cert_title_en:'',
                    cert_file:''
                }
            }
        },
        methods:{
            add_certificate()
            {
                if(this.$refs.form.validate())
                {
                    this.loading = true;
                    var fd = new FormData();

                    fd.append('cert_title',this.certificate.cert_title);
                    fd.append('cert_title_en',this.certificate.cert_title_en);
                    fd.append('cert_file',this.certificate.cert_file);
                    this.$axios.post('api-dash/add-certificate',fd).then(res=>{
                        this.$fire({
                            title: "نجح",
                            text: res.data.msg,
                            type: "success",
                            timer: 3000
                        });
                        this.$store.state.dash.certificates.forms.add_certificate = false;
                    }).catch(err=>{
                        console.log(err)
                    }).finally(fin=>{
                        this.loading = false;
                    })
                }
            }
        }
    }
</script>

<style scoped>

</style>