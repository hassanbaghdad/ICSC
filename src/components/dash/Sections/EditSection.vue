<template>
    <div>
        <v-dialog v-model="$store.state.dash.sections.forms.edit_section" max-width="900">
            <v-card>
                <v-card-title class="blue rtl">
                    <v-icon dark>mdi-plus</v-icon>
                    <span class="mr-2 cf white--text">تعديل قسم</span>

                    <v-btn icon dark @click="$store.state.dash.sections.forms.edit_section=false"><v-icon>mdi-close</v-icon></v-btn>
                </v-card-title>
                <v-card-text>
                    <v-form lazy-validation v-model="valid" ref="form" class="mt-10">
                        <div class="row">
                            <div class="col col-12 col-lg-6">
                                <v-text-field :rules="req" v-model="section.section_title" class="v-application--is-ltr text-center" outlined label="اسم القسم" prepend-inner-icon="mdi-information"/>
                            </div>
                            <div class="col col-12 col-lg-6">
                                <v-text-field :rules="req" v-model="section.section_title_en" outlined label="Section Title" prepend-inner-icon="mdi-information"/>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col col-12 col-lg-6">
                                <v-textarea :rules="req" v-model="section.section_desc"  outlined label="تفاصيل القسم" prepend-inner-icon="mdi-text"/>
                            </div>
                            <div class="col col-12 col-lg-6">
                                <v-textarea :rules="req" v-model="section.section_desc_en" outlined label="Section Description" prepend-inner-icon="mdi-text"/>
                            </div>
                            <div class="col col-12 col-lg-6">
                                <v-card min-height="200" class="text-center">
                                    <v-img v-if="src!=null&&src!=''" :src="src" ></v-img>
                                    <v-img v-if="src==null|| src==''" :src="axios.defaults.baseURL+'/images/'+section.section_image" ></v-img>

                                </v-card>
                                <v-file-input label="اختيار صورة" ref="photo" :rules="req" @change="Preview_image" v-model="section.photo" />

                            </div>

                        </div>

                    </v-form>
                </v-card-text>
                <v-divider/>
                <v-card-actions class="rtl">
                    <v-btn @click="edit" dark color="blue"  :loading="loading">
                        <v-icon dark>mdi-check</v-icon>
                        <span class="mr-2 cf">حفظ</span>
                    </v-btn>
                    <v-btn outlined class="mr-4"  @click="$store.state.dash.sections.forms.edit_section=false">
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
        name: "EditSection",
        data(){
            return{
                src:'',
                image_edited:false,
                valid:true,
                loading:false,
                req:[v=>!!v || 'هذا الحقل مطلوب'],
                section:this.$store.state.dash.sections.target
            }
        },
        methods:{
            onchange(){

            },
            Preview_image() {
                try{
                    this.image_edited = true;
                    this.src= URL.createObjectURL(this.section.photo)
                }catch (e) {
                    console.log(e.message)
                }

            },
            async edit(){
                if(this.$refs.form.validate())
                {
                    this.loading = true;
                    var fm = new FormData;
                    fm.append('section_id',this.section.section_id);
                    fm.append('section_title',this.section.section_title);
                    fm.append('section_title_en',this.section.section_title_en);
                    fm.append('section_desc',this.section.section_desc);
                    fm.append('section_desc_en',this.section.section_desc_en);
                    if(this.image_edited)
                    {
                        fm.append('photo',this.section.photo);
                    }


                    this.$axios.post('api-dash/edit-section',fm).then(res=>{
                        this.$fire({
                            title: "نجح",
                            text: res.data.msg,
                            type: "success",
                            timer: 3000
                        });

                        this.$store.commit("DASH_GET_SECTIONS");
                        this.$store.state.dash.sections.forms.edit_section = false;
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
        },
        computed:{
            get_section:function () {
                return this.$store.state.dash.sections.target
            }
        },
        watch:{
            get_section:function (new_section) {
                this.section = new_section
            }
        },

    }
</script>

<style scoped>

</style>