<template>
    <div>
        <v-dialog v-model="$store.state.dash.tenders.forms.edit_tender" max-width="900">
            <v-card>
                <v-card-title class="blue rtl" style="width: 100%">
                    <v-icon dark>mdi-pen</v-icon>
                    <span class="mr-2 cf white--text">تعديل مناقصة</span>
                </v-card-title>
                <v-card-text>
                    <v-form lazy-validation v-model="valid" ref="form" class="mt-10">
                        <div class="row">
                            <div class="col col-12 col-lg-12">
                                <v-select :rules="req" v-model="tender.tender_type" :items="types" item-value="value" item-text="value" class="text-center" outlined label="نوع المناقصة" prepend-inner-icon="mdi-circle"/>
                            </div>
                            <div class="col col-12 col-lg-6">
                                <v-text-field :rules="req" v-model="tender.tender_title" class="v-application--is-ltr text-center" outlined label="اسم المناقصة" prepend-inner-icon="mdi-information"/>
                            </div>
                            <div class="col col-12 col-lg-6">
                                <v-text-field :rules="req" v-model="tender.tender_title_en" outlined label="Tender Title" prepend-inner-icon="mdi-information"/>
                            </div>
                            <div class="col col-12 col-lg-6">
                                <v-textarea :rules="req" v-model="tender.tender_desc"  outlined label="تفاصيل المناقصة" prepend-inner-icon="mdi-text"/>
                            </div>
                            <div class="col col-12 col-lg-6">
                                <v-textarea :rules="req" v-model="tender.tender_desc_en" outlined label="Tender Description" prepend-inner-icon="mdi-text"/>
                            </div>
                            <div class="col col-12 col-lg-6">
                                <v-text-field :rules="req" v-model="tender.tender_file_title" outlined label="عنوان الملف" prepend-inner-icon="mdi-information"/>
                            </div>
                            <div class="col col-12 col-lg-6">

                                <v-file-input label="اختيار ملف" ref="file"   v-model="tender.file" />

                            </div>

                        </div>

                    </v-form>
                </v-card-text>
                <v-divider/>
                <v-card-actions class="rtl">
                    <v-btn @click="edit_tender" dark color="blue"  :loading="loading">
                        <v-icon dark>mdi-check</v-icon>
                        <span class="mr-2 cf">حفظ</span>
                    </v-btn>
                    <v-btn outlined class="mr-4"  @click="$store.state.dash.tenders.forms.edit_tender=false">
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
        name: "EditTender",
        data(){
            return{
                src:'',
                valid:true,
                loading:false,
                req:[v=>!!v || 'هذا الحقل مطلوب'],
                file_edited:false,
                tender:this.$store.state.dash.tenders.target,
                types:[
                    {value:'استيرادية'},
                    {value:'محلية'},
                    {value:'مواد اولية'},
                ],
            }
        },
        methods:{
            onchange(){
                console.log(this.refs.file)
            },
            async edit_tender(){
                if(this.$refs.form.validate())
                {
                    this.loading = true;
                    var fm = new FormData;
                    fm.append('tender_id',this.tender.tender_id);
                    fm.append('tender_type',this.tender.tender_type);
                    fm.append('tender_title',this.tender.tender_title);
                    fm.append('tender_title_en',this.tender.tender_title_en);
                    fm.append('tender_desc',this.tender.tender_desc);
                    fm.append('tender_desc_en',this.tender.tender_desc_en);
                    fm.append('tender_file_title',this.tender.tender_file_title);
                    if(this.file_edited)
                    {
                        fm.append('file',this.tender.file);
                    }


                    this.$axios.post('api-dash/edit-tender',fm).then(res=>{
                        this.$fire({
                            title: "نجح",
                            text: res.data.msg,
                            type: "success",
                            timer: 3000
                        });

                        this.$store.commit("DASH_GET_TENDERS");
                        this.$store.state.dash.tenders.forms.edit_tender = false;
                        this.$refs.form.reset();

                    }).catch(err=>{
                        if(err.response.status == 403)
                        {
                            this.$fire({
                                title: "فشل",
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
            get_tender:function () {
                return this.$store.state.dash.tenders.target
            }
        },
        watch:{
            get_tender:function (new_tender) {
                this.tender = new_tender;
            }
        },

    }
</script>

<style scoped>

</style>