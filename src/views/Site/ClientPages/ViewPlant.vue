<template>
    <div class="container mt-16">
        <div class="row mb-16">
            <div class="col col-12 col-lg-8">
                <v-card elevation="3" class="mb-16"  :loading="loading">
                    <v-card-title>
                        <v-img :src="$axios.defaults.baseURL+'/images/'+lab.lab_image_cover"/>
                    </v-card-title>
                    <v-divider/>
                    <v-card-text>

                      <v-img contain max-height="300" class="ma-6" :src="$axios.defaults.baseURL+'/images/'+lab.lab_image"/>
<v-divider/>
                         <v-simple-table v-slot:default  :class="$store.state.en?'':'rtl'" v-if="!loading">
                                    <tbody :style="$store.state.en?'text-align:left':'text-align:right'">
                                    <tr>
                                        <th :class="$store.state.en?'text-left cf f20':'text-right cf f20'">
                                            <span v-if="!$store.state.en" :class="$store.state.en?'text-left cf f20':'text-right cf f20'">اسم المعمل</span>
                                            <span v-if="$store.state.en" :class="$store.state.en?'text-left cf f20':'text-right cf f20'">Plant Name</span>
                                        </th>
                                        <th :class="$store.state.en?'text-left cf f20':'text-right cf f20'">
                                            <span v-if="!$store.state.en" :class="$store.state.en?'text-left cf f20':'text-right cf f20'">{{lab.lab_name}}</span>
                                            <span v-if="$store.state.en" :class="$store.state.en?'text-left cf f20':'text-right cf f20'">{{lab.lab_name_en}}</span>
                                        </th>
                                    </tr>
                                    <tr>
                                        <th :class="$store.state.en?'text-left cf f20':'text-right cf f20'">
                                            <span v-if="!$store.state.en" :class="$store.state.en?'text-left cf f20':'text-right cf f20'">الموقع</span>
                                            <span v-if="$store.state.en" :class="$store.state.en?'text-left cf f20':'text-right cf f20'">Location</span>
                                        </th>
                                        <th :class="$store.state.en?'text-left cf f20':'text-right cf f20'">
                                            <span v-if="!$store.state.en" :class="$store.state.en?'text-left cf f20':'text-right cf f20'">{{lab.lab_location}}</span>
                                            <span v-if="$store.state.en" :class="$store.state.en?'text-left cf f20':'text-right cf f20'">{{lab.lab_location_en}}</span>
                                        </th>
                                    </tr>
                                    <tr>
                                        <th :class="$store.state.en?'text-left cf f20':'text-right cf f20'">
                                            <span v-if="!$store.state.en" :class="$store.state.en?'text-left cf f20':'text-right cf f20'">سنة التأسيس</span>
                                            <span v-if="$store.state.en" :class="$store.state.en?'text-left cf f20':'text-right cf f20'">Date of Foundation</span>
                                        </th>
                                        <th :class="$store.state.en?'text-left cf f20':'text-right cf f20'">
                                            <span :class="$store.state.en?'text-left cf f20':'text-right cf f20'">{{lab.lab_establishment_date}}</span>
                                        </th>
                                    </tr>
                                    <tr>
                                        <th :class="$store.state.en?'text-left cf f20':'text-right cf f20'">
                                            <span v-if="!$store.state.en" :class="$store.state.en?'text-left cf f20':'text-right cf f20'">بدء الانتاج</span>
                                            <span v-if="$store.state.en" :class="$store.state.en?'text-left cf f20':'text-right cf f20'">Production Start</span>
                                        </th>
                                        <th :class="$store.state.en?'text-left cf f20':'text-right cf f20'">
                                            <span :class="$store.state.en?'text-left cf f20':'text-right cf f20'">{{lab.lab_start_date}}</span>
                                        </th>
                                    </tr>
                                    <tr>
                                        <th :class="$store.state.en?'text-left cf f20':'text-right cf f20'">
                                            <span v-if="!$store.state.en" :class="$store.state.en?'text-left cf f20':'text-right cf f20'">نوع الانتاج</span>
                                            <span v-if="$store.state.en" :class="$store.state.en?'text-left cf f20':'text-right cf f20'">Product Type</span>
                                        </th>
                                        <th :class="$store.state.en?'text-left cf f20':'text-right cf f20'">
                                            <span v-if="!$store.state.en" :class="$store.state.en?'text-left cf f20':'text-right cf f20'">{{lab.lab_prod_type}}</span>
                                            <span v-if="$store.state.en" :class="$store.state.en?'text-left cf f20':'text-right cf f20'">{{lab.lab_prod_type_en}}</span>
                                        </th>
                                    </tr>
                                    <tr>
                                        <th :class="$store.state.en?'text-left cf f20':'text-right cf f20'">
                                            <span v-if="!$store.state.en" :class="$store.state.en?'text-left cf f20':'text-right cf f20'">عدد الخطوط الانتاجية</span>
                                            <span v-if="$store.state.en" :class="$store.state.en?'text-left cf f20':'text-right cf f20'">Production Line</span>
                                        </th>
                                        <th :class="$store.state.en?'text-left cf f20':'text-right cf f20'">
                                            <span :class="$store.state.en?'text-left cf f20':'text-right cf f20'">{{lab.lab_count_prod_lines}}</span>
                                        </th>
                                    </tr>
                                    <tr>
                                        <th :class="$store.state.en?'text-left cf f20':'text-right cf f20'">
                                            <span v-if="!$store.state.en" :class="$store.state.en?'text-left cf f20':'text-right cf f20'">الطاقة التصميمية</span>
                                            <span v-if="$store.state.en" :class="$store.state.en?'text-left cf f20':'text-right cf f20'">Design Capacity</span>
                                        </th>
                                        <th :class="$store.state.en?'text-left cf f20':'text-right cf f20'">
                                            <span  :class="$store.state.en?'text-left cf f20':'text-right cf f20'">{{lab.lab_design_energy}}</span>
                                            <span v-if="!$store.state.en"  class="cf f20b mr-2">طن سنوياً </span>
                                            <span v-if="$store.state.en"  class="cf f20b ml-2">tons annually</span>
                                        </th>
                                    </tr>
                                    <tr>
                                        <th :class="$store.state.en?'text-left cf f20':'text-right cf f20'">
                                            <span v-if="!$store.state.en" :class="$store.state.en?'text-left cf f20':'text-right cf f20'">الشركة المنفذة</span>
                                            <span v-if="$store.state.en" :class="$store.state.en?'text-left cf f20':'text-right cf f20'">Implemented Company</span>
                                        </th>
                                        <th :class="$store.state.en?'text-left cf f20':'text-right cf f20'">
                                            <span v-if="!$store.state.en" :class="$store.state.en?'text-left cf f20':'text-right cf f20'">{{lab.lab_company}}</span>
                                            <span v-if="$store.state.en" :class="$store.state.en?'text-left cf f20':'text-right cf f20'">{{lab.lab_company_en}}</span>
                                        </th>
                                    </tr>
                                    <tr>
                                        <th :class="$store.state.en?'text-left cf f20':'text-right cf f20'">
                                            <span v-if="!$store.state.en" :class="$store.state.en?'text-left cf f20':'text-right cf f20'">طريقة التصنيع</span>
                                            <span v-if="$store.state.en" :class="$store.state.en?'text-left cf f20':'text-right cf f20'">Manufacturing Method</span>
                                        </th>
                                        <th :class="$store.state.en?'text-left cf f20':'text-right cf f20'">
                                            <span v-if="!$store.state.en" :class="$store.state.en?'text-left cf f20':'text-right cf f20'">{{lab.lab_manufacturing_method}}</span>
                                            <span v-if="$store.state.en" :class="$store.state.en?'text-left cf f20':'text-right cf f20'">{{lab.lab_manufacturing_method_en}}</span>
                                        </th>
                                    </tr>
                                    </tbody>
                                </v-simple-table>

                    </v-card-text>
                </v-card>
            </div>
            <div class="col col-12 col-lg-4">
                <v-card elevation="3">
                    <v-card-title  :class="$store.state.en?'':'rtl'" style="background-color: #053636">
                        <v-icon dark class="text-right" size="30">mdi-factory</v-icon>
                        <span v-if="!$store.state.en" class="white--text text-right cf mr-2">المعامل</span>
                        <span v-if="$store.state.en" class="white--text text-right cf mr-2 ml-2">Plants</span>

                    </v-card-title>
                    <v-list :class="$store.state.en?'':'rtl'">
                        <template v-for="(labb , i ) in labs" >
                            <v-list-item  @click="change_slug(labb.lab_slug)" :key="'lab_slide_item_'+i" dense>
                                <v-list-item-avatar :key="'i_'+i">
                                    <v-img  :key="'i_i_i_i'+i" contain class="ma-4" :src="$axios.defaults.baseURL+'/images/'+labb.lab_image"/>
                                </v-list-item-avatar>
                                <v-list-item-title class="mr-2 ml-2 cf" :key="'i_i_'+i">
                                    <span v-if="!$store.state.en">{{labb.lab_name}}</span>
                                    <span v-if="$store.state.en">{{labb.lab_name_en}}</span>
                                </v-list-item-title>

                            </v-list-item>
                            <v-divider :key="'d_i_'+i" class="pa-0 ma-0"/>
                        </template>


                    </v-list>
                </v-card>

                <v-card elevation="3" class="mt-10">

                    <v-card-title  :class="$store.state.en?'':'rtl'" style="background-color: #053636">
                        <v-icon dark class="text-right" size="30">mdi-certificate</v-icon>
                        <span v-if="!$store.state.en" class="white--text text-right cf mr-2">الشهادات</span>
                        <span v-if="$store.state.en" class="white--text text-right cf mr-2 ml-2">Certificates</span>

                    </v-card-title>
                    <v-list :class="$store.state.en?'':'rtl'">
                        <template v-for="(cert , i ) in certificates" >
                            <v-list-item  :key="'lab_slide_item___'+i" dense :href="$axios.defaults.baseURL+'/images/'+cert.cert_file">
                                <v-list-item-avatar :key="'i_'+i">
                                    <v-icon>mdi-certificate</v-icon>
                                </v-list-item-avatar>
                                <v-list-item-title class="mr-2 ml-2 cf" :key="'cert_i_i_'+i">
                                    <span v-if="!$store.state.en">{{cert.cert_title}}</span>
                                    <span v-if="$store.state.en">{{cert.cert_title_en}}</span>
                                </v-list-item-title>

                            </v-list-item>
                            <v-divider :key="'d__i_'+i" class="pa-0 ma-0"/>
                        </template>


                    </v-list>
                </v-card>



            </div>
        </div>
        <div class="mt-16"/>
    </div>
</template>

<script>
    export default {
        name: "ViewPlant",
        data(){
            return{
                lab_slug:'',
                lab:[],
                labs:[],
                loading:true,
                certificates:this.$store.state.site.certificates.certificates
            }
        },
        methods:{
            get_cert()
            {
              this.certificates = [];
              this.certificates = this.$store.state.site.certificates.certificates
            },
            get_lab()
            {
                this.$axios.get('api-site/get-lab/'+this.lab_slug).then(res=>{
                    this.lab = res.data;
                }).catch(err=>{

                }).finally(fin=>{
                    this.loading = false;

                })
            },
            get_labs()
            {
                this.$axios.get('api-site/get-labs').then(res=>{

                    this.labs = res.data;
                    if(this.$route.path == "/plants")
                    {
                        this.lab_slug = res.data[0].lab_slug;
                    }else{
                        this.lab_slug = this.$route.path.split('/plants/')[1];
                    }
                    this.get_lab();

                }).catch(err=>{

                }).finally(fin=>{
                    this.loading = false;

                })
            },

            change_slug(slug)
            {
                this.loading = true;
                this.lab_slug = slug;
                this.get_lab();
            }
        },
        created(){

                this.get_labs();


        },
        mounted () {
            window.scrollTo(0, 0);
            console.log(this.$store.state.site)

        },
        computed:{
            get_certificates:function () {
                return this.$store.state.site.certificates.certificates
            }
        },
        watch:{
            get_certificates:function (new_certificates) {
                this.certificates = new_certificates;
                console.log(new_certificates)
            }
        },

    }
</script>

<style scoped>

</style>