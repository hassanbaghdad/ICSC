<template>
    <div>
        <v-dialog v-model="$store.state.dash.labs.forms.edit_lab" max-width="900">
            <v-card>
                <v-card-title class="success rtl" style="width: 100%">
                    <v-icon dark>mdi-pen</v-icon>
                    <span class="mr-2 cf white--text">تعديل معمل</span>
                </v-card-title>
                <v-card-text>
                    <v-form lazy-validation v-model="valid" ref="form" class="mt-10">
                       <div class="row">
                           <div class="col col-12 col-lg-8">
                               <v-card min-height="200" class="text-center">
                                   <v-img color="grey" v-if="src_cover==null || src_cover==''" src="img/cement-cover.jpg" height="200"></v-img>
                                   <v-img v-if="src_cover!=null&& src_cover!=''" :src="image_cover_edited?src_cover:$axios.defaults.baseURL+'/images/'+src_cover" contain max-height="300"></v-img>
                               </v-card>
                               <v-file-input prepend-icon="mdi-image-plus" label="اختيار صورة غلاف" ref="photo" @change="image_change_cover" v-model="lab.lab_image_cover" />

                           </div>
                           <div class="col col-12 col-lg-4">
                               <v-card min-height="200" class="text-center">
                                   <v-img color="grey" v-if="src==null || src==''" src="img/cement1.jpg" height="200"></v-img>


                                   <v-img v-if="src!=null&& src!=''" :src="image_edited?src:$axios.defaults.baseURL+'/images/'+src" contain max-height="300"></v-img>
                               </v-card>
                               <v-file-input prepend-icon="mdi-image-plus" label="اختيار صورة منتج" ref="photo"  @change="image_change" v-model="lab.lab_image" />

                           </div>

                           <div class="col col-12 col-lg-6">
                                <v-text-field :rules="req" v-model="lab.lab_name" class="v-application--is-ltr text-center" outlined label="اسم المعمل" prepend-inner-icon="mdi-factory"/>
                            </div>
                            <div class="col col-12 col-lg-6">
                                <v-text-field :rules="req" v-model="lab.lab_name_en" outlined label="Plant Name" prepend-inner-icon="mdi-factory"/>
                            </div>

                            <div class="col col-12 col-lg-6">
                                <v-text-field :rules="req" v-model="lab.lab_location" class="v-application--is-ltr text-center" outlined label="عنوان المعمل" prepend-inner-icon="mdi-map-marker"/>
                            </div>
                           <div class="col col-12 col-lg-6">
                               <v-text-field :rules="req" v-model="lab.lab_location_en" outlined label="Plant Address" prepend-inner-icon="mdi-map-marker"/>
                           </div>
                           <div class="col col-12 col-lg-6">
                               <v-text-field :rules="req" v-model="lab.lab_prod_type" outlined label="نوع الانتاج" prepend-inner-icon="mdi-information"/>
                           </div>
                            <div class="col col-12 col-lg-6">
                                       <v-text-field :rules="req" v-model="lab.lab_prod_type_en" outlined label=" Production Type" prepend-inner-icon="mdi-information"/>
                            </div>

                           <div class="col col-12 col-lg-6">
                                <v-select :rules="req" v-model="lab.lab_cement_type" :items="types" item-text="value" item-value="value" class="v-application--is-ltr text-center" outlined label="نوع الانتاج" prepend-inner-icon="mdi-menu"/>
                            </div>
                            <div class="col col-12 col-lg-6">
                                <v-text-field :rules="req_no" v-model="lab.lab_count_prod_lines" class="v-application--is-ltr text-center" outlined label="عدد الخطوط الانتاجية " prepend-inner-icon="mdi-menu"/>
                            </div>
                            <div class="col col-12 col-lg-6">
                                <v-text-field :rules="req" v-model="lab.lab_establishment_date" outlined label=" تاريخ التأسيس" prepend-inner-icon="mdi-calendar-range"/>
                            </div>

                            <div class="col col-12 col-lg-6">
                                <v-text-field :rules="req_no" v-model="lab.lab_design_energy" class="v-application--is-ltr text-center" outlined label="الطاقة التصميمية" prepend-inner-icon="mdi-meter-electric-outline"/>
                            </div>
                            <div class="col col-12 col-lg-6">
                                <v-text-field :rules="req" v-model="lab.lab_start_date" outlined label=" بدء الانتاج" prepend-inner-icon="mdi-calendar-range"/>
                            </div>

                            <div class="col col-12 col-lg-6">
                                <v-text-field :rules="req" v-model="lab.lab_company" class="v-application--is-ltr text-center" outlined label="الشركة المنفذة" prepend-inner-icon="mdi-domain"/>
                            </div>
                            <div class="col col-12 col-lg-6">
                                <v-text-field :rules="req" v-model="lab.lab_company_en" outlined label="Implemented Company" prepend-inner-icon="mdi-domain"/>
                            </div>

                            <div class="col col-12 col-lg-6">
                                <v-text-field :rules="req" v-model="lab.lab_manufacturing_method" class="v-application--is-ltr text-center" outlined label="طريقة التصنيع" prepend-inner-icon="mdi-cogs"/>
                            </div>
                            <div class="col col-12 col-lg-6">
                                <v-text-field :rules="req" v-model="lab.lab_manufacturing_method_en" outlined label="Manufacturing Method" prepend-inner-icon="mdi-cogs"/>
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
                    <v-btn outlined class="mr-4"  @click="$store.state.dash.labs.forms.edit_lab=false;$refs.form.reset();src='';src_cover=''">
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
        name: "EditLab",
        data(){
            return{
                src:'',
                src_cover:'',
                image_edited:false,
                image_cover_edited:false,
                valid:true,
                loading:false,
                req:[v=>!!v || 'هذا الحقل مطلوب'],
                req_no:[v=>!!v&&Boolean(Number(v)) || 'يرجى ادخال رقم'],
                lab:this.$store.state.dash.labs.target,
                types:[
                    {value:'اعتيادي'},
                    {value:'ابيض'},
                    {value:'مقاوم'},
                ]
            }
        },
        methods:{
            onchange(){
                this.image_edited = true;
            },
            onchange_cover(){
                this.image_cover_edited = true;
            },

            image_change(){
                try{
                    this.src= URL.createObjectURL(this.lab.lab_image);
                    this.image_edited = true;
                }catch (e) {
                    console.log(e.message)
                }
            },
            image_change_cover(){
                try{
                    this.src_cover= URL.createObjectURL(this.lab.lab_image_cover);
                    this.image_cover_edited = true;
                }catch (e) {
                    console.log(e.message)
                }
            },

            async upload(){
                if(this.$refs.form.validate())
                {
                    this.loading = true;
                    var fm = new FormData;

                    fm.append('lab_id',this.lab.lab_id);
                    fm.append('lab_name',this.lab.lab_name);
                    fm.append('lab_name_en',this.lab.lab_name_en);
                    fm.append('lab_location',this.lab.lab_location);
                    fm.append('lab_location_en',this.lab.lab_location_en);
                    fm.append('lab_prod_type',this.lab.lab_prod_type);
                    fm.append('lab_prod_type_en',this.lab.lab_prod_type_en);
                    fm.append('lab_cement_type',this.lab.lab_cement_type);
                    fm.append('lab_count_prod_lines',this.lab.lab_count_prod_lines);
                    fm.append('lab_design_energy',this.lab.lab_design_energy);
                    fm.append('lab_establishment_date',this.lab.lab_establishment_date);
                    fm.append('lab_start_date',this.lab.lab_start_date);
                    fm.append('lab_company',this.lab.lab_company);
                    fm.append('lab_company_en',this.lab.lab_company_en);
                    fm.append('lab_manufacturing_method',this.lab.lab_manufacturing_method);
                    fm.append('lab_manufacturing_method_en',this.lab.lab_manufacturing_method_en);
                    if(this.image_edited)
                    {
                        fm.append('photo',this.lab.lab_image);
                    }
                    if(this.image_cover_edited)
                    {
                        fm.append('photo_cover',this.lab.lab_image_cover);
                    }



                    this.$axios.post('api-dash/edit-lab',fm).then(res=>{
                        this.$fire({
                            title: "نجح",
                            text: res.data.msg,
                            type: "success",
                            timer: 3000
                        });
                        this.$store.dash.labs.target = res.data.lab;
                        this.$store.commit("DASH_GET_LABS");
                        this.$store.state.dash.labs.forms.edit_lab = false;
                        this.$refs.form.reset();
                        this.src = "";
                        this.src_cover = "";

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
            get_lab:function () {
                return this.$store.state.dash.labs.target
            }
        },
         watch:{
            get_lab:function (new_lab) {
                console.log(new_lab);
                this.lab = new_lab;
                this.src = new_lab.lab_image;
                this.src_cover = new_lab.lab_image_cover;
                this.lab.lab_image = null;
                this.lab.lab_image_cover = null;
            }
        },

    }
</script>

<style scoped>

</style>