<template>
    <v-card>
        <v-card-title>
            <v-icon color="grey">mdi-cash</v-icon>
            <span class="mr-2 grey--text cf f16">الاسعار</span>
        </v-card-title>
        <v-divider/>
        <v-card-text>
            <v-form lazy-validation v-model="valid" ref="form">
                <div class="container">
                    <div class="col col-12">
                        <v-file-input @change="change_file" v-model="prices.prices_file" outlined label="ملف الاسعار"/>
                    </div>
                    <div class="col col-12">
                        <v-textarea :rules="req" v-model="prices.marketing_mec" outlined label="الية تسويق السمنت"/>
                    </div>
                    <div class="col col-12">
                        <v-textarea :rules="req" v-model="prices.marketing_mec_en" outlined label="الية تسويق السمنت انجليزي"/>
                    </div>
                    <div class="col col-12">
                        <v-textarea :rules="req" v-model="prices.production_process_price" outlined label="سير العمليات الانتاجية"/>
                    </div>
                    <div class="col col-12">
                        <v-textarea :rules="req" v-model="prices.production_process_price_en" outlined label="سير العمليات الانتاجية انجليزي"/>
                    </div>
                    <div class="col col-12">
                        <v-textarea :rules="req" v-model="prices.cement_inspection_certificates" outlined label="شهادة فحص السمنت"/>
                    </div>
                    <div class="col col-12">
                        <v-textarea :rules="req" v-model="prices.cement_inspection_certificates_en" outlined label="شهادة فحص السمنت"/>
                    </div>

                </div>
            </v-form>
        </v-card-text>
        <v-divider/>
        <v-card-actions>
            <v-btn @click="edit_prices" color="primary" :loading="loading" >
                <v-icon color="white">mdi-check</v-icon>
                <span class="cf white--text mr-2">حفظ</span>
            </v-btn>
        </v-card-actions>

    </v-card>
</template>

<script>
    export default {
        name: "Prices",
        data()
        {
            return{
                req:[v=>!!v || 'لايمكن تركه فارغاً'],
                edited:false,
                valid:true,
                loading:false,
                prices:{
                    prices_file:'',
                    marketing_mec:'',
                    marketing_mec_en:'',
                    production_process_price:'',
                    production_process_price_en:'',
                    cement_inspection_certificates:'',
                    cement_inspection_certificates_en:''
                }

            }
        },
        methods:{
            change_file(){
                this.edited = true;
            },
            get_prices()
            {
                this.$axios.get('api-dash/get-prices').then(res=>{
                    this.prices = res.data;
                    this.edited = false;
                }).catch(err=>{
                    console.log(err)
                })
            },
            edit_prices()
            {
                if(this.$refs.form.validate())
                {
                    this.loading = true;
                    var fd = new FormData();
                    if(this.edited)
                    {
                        fd.append('prices_file',this.prices.prices_file);
                    }
                    fd.append('marketing_mec',this.prices.marketing_mec);
                    fd.append('marketing_mec_en',this.prices.marketing_mec_en);
                    fd.append('production_process_price',this.prices.production_process_price);
                    fd.append('production_process_price_en',this.prices.production_process_price_en);
                    fd.append('cement_inspection_certificates',this.prices.cement_inspection_certificates);
                    fd.append('cement_inspection_certificates_en',this.prices.cement_inspection_certificates_en);

                    this.$axios.post('api-dash/edit-prices',fd).then(res=>{

                        this.get_prices();

                        this.$fire({
                            title: "نجح",
                            text: res.data.msg,
                            type: "success",
                            timer: 3000
                        });

                    }).catch(err=>{
                        console.log(err);
                    }).finally(fin=>{
                        this.loading = false;
                    })
                }
            }
        },
        created()
        {
            this.get_prices();
        }
    }
</script>

<style scoped>

</style>