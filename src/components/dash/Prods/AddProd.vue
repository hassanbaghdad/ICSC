<template>
    <div>
        <v-dialog v-model="$store.state.dash.prods.forms.add_prod" max-width="900">
            <v-card>
                <v-card-title class="blue rtl" style="width: 100%">
                    <v-icon dark>mdi-plus</v-icon>
                    <span class="mr-2 cf white--text">اضافة منتج</span>
                </v-card-title>
                <v-card-text>
                    <v-form lazy-validation v-model="valid" ref="form" class="mt-10">
                        <div class="row">
                            <div class="col col-12 col-lg-6">
                                <v-text-field :rules="req" v-model="prod.prod_title" class="v-application--is-ltr text-center" outlined label="اسم المنتج" prepend-inner-icon="mdi-information"/>
                            </div>
                            <div class="col col-12 col-lg-6">
                                <v-text-field :rules="req" v-model="prod.prod_title_en" outlined label="Prod Title" prepend-inner-icon="mdi-information"/>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col col-12 col-lg-6">
                                <v-textarea :rules="req" v-model="prod.prod_desc"  outlined label="تفاصيل المنتج" prepend-inner-icon="mdi-text"/>
                            </div>
                            <div class="col col-12 col-lg-6">
                                <v-textarea :rules="req" v-model="prod.prod_desc_en" outlined label="Prod Description" prepend-inner-icon="mdi-text"/>
                            </div>
                            <div class="col col-12 col-lg-6">

                                <v-file-input label="اختيار ملف" ref="file" :rules="req"  v-model="prod.file" />

                            </div>

                        </div>

                    </v-form>
                </v-card-text>
                <v-divider/>
                <v-card-actions class="rtl">
                    <v-btn @click="upload" dark color="blue"  :loading="loading">
                        <v-icon dark>mdi-check</v-icon>
                        <span class="mr-2 cf">حفظ</span>
                    </v-btn>
                    <v-btn outlined class="mr-4"  @click="$store.state.dash.prods.forms.add_prod=false">
                        <v-icon dark>mdi-close</v-icon>
                        <span class="mr-2 cf">الغاء</span>
                    </v-btn>

                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
    export default {
        name: "AddProd",
        data(){
            return{
                src:'',
                valid:true,
                loading:false,
                req:[v=>!!v || 'هذا الحقل مطلوب'],
                prod:{
                    prod_title:'',
                    prod_title_en:'',
                    prod_desc:'',
                    prod_desc_en:'',
                    file:null

                }
            }
        },
        methods:{
            onchange(){
                console.log(this.refs.photo)
            },
            async upload(){
                if(this.$refs.form.validate())
                {
                    this.loading = true;
                    var fm = new FormData;
                    fm.append('prod_title',this.prod.prod_title);
                    fm.append('prod_title_en',this.prod.prod_title_en);
                    fm.append('prod_desc',this.prod.prod_desc);
                    fm.append('prod_desc_en',this.prod.prod_desc_en);
                    fm.append('file',this.prod.file);

                    this.$axios.post('api-dash/add-prod',fm).then(res=>{
                        this.$fire({
                            title: "نجح",
                            text: res.data.msg,
                            type: "success",
                            timer: 3000
                        });

                        this.$store.commit("DASH_GET_PRODS");
                        this.$store.state.dash.prods.forms.add_prod = false;
                        this.$refs.form.reset();
                        this.src = '';
                    }).catch(err=>{
                        if(err.response.status == 403)
                        {
                            this.$fire({
                                title: "نجح",
                                text: err.response.data.msg,
                                type: "warning",
                                timer: 5000
                            });
                        }
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