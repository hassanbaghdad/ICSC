<template>
    <div>
        <v-dialog v-model="$store.state.dash.prods.forms.edit_prod" max-width="900">
            <v-card>
                <v-card-title class="blue rtl" style="width: 100%">
                    <v-icon dark>mdi-pen</v-icon>
                    <span class="mr-2 cf white--text">تعديل منتج</span>
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

                                <v-file-input label="اختيار ملف" ref="file"   v-model="prod.prod_file" @change="onFileEdit" />

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
                    <v-btn outlined class="mr-4"  @click="$store.state.dash.prods.forms.edit_prod=false">
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
        name: "EditProd",
        data(){
            return{
                valid:true,
                loading:false,
                req:[v=>!!v || 'هذا الحقل مطلوب'],
                file_edited:false,
                prod:this.$store.state.dash.prods.target
            }
        },
        methods:{
            onchange(){
                console.log(this.refs.file)
            },
            onFileEdit(){
                this.file_edited = true;
            },
            async upload(){
                if(this.$refs.form.validate())
                {
                    this.loading = true;
                    var fm = new FormData;
                    fm.append('prod_id',this.prod.prod_id);
                    fm.append('prod_title',this.prod.prod_title);
                    fm.append('prod_title_en',this.prod.prod_title_en);
                    fm.append('prod_desc',this.prod.prod_desc);
                    fm.append('prod_desc_en',this.prod.prod_desc_en);
                    if(this.file_edited)
                    {
                        fm.append('file',this.prod.prod_file);
                    }


                    this.$axios.post('api-dash/edit-prod',fm).then(res=>{
                        this.$fire({
                            title: "نجح",
                            text: res.data.msg,
                            type: "success",
                            timer: 3000
                        });

                        this.$store.commit("DASH_GET_PRODS");
                        this.$store.state.dash.prods.forms.add_prod = false;
                        this.$refs.form.reset();
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
        },
        computed:{
            get_prod:function () {
                return this.$store.state.dash.prods.target
            }
        },
        watch:{
            get_prod:function (new_prod) {
              this.prod = new_prod;
            }
        },

    }
</script>

<style scoped>

</style>