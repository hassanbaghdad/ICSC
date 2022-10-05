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
                         <v-simple-table v-slot:default class="rtl" v-if="!loading">
                                    <tbody>
                                    <tr>
                                        <th class="text-right cf f20">
                                            <span v-if="!$store.state.en" class="cf f20b">اسم المعمل</span>
                                            <span v-if="$store.state.en" class="cf f20b">Plant Name</span>
                                        </th>
                                        <th class="text-right cf f20b">
                                            <span v-if="!$store.state.en" class="cf f20b">{{lab.lab_name}}</span>
                                            <span v-if="$store.state.en" class="cf f20b">{{lab.lab_name_en}}</span>
                                        </th>
                                    </tr>
                                    <tr>
                                        <th class="text-right cf f20">
                                            <span v-if="!$store.state.en" class="cf f20b">الموقع</span>
                                            <span v-if="$store.state.en" class="cf f20b">Location</span>
                                        </th>
                                        <th class="text-right cf f20b">
                                            <span v-if="!$store.state.en" class="cf f20b">{{lab.lab_location}}</span>
                                            <span v-if="$store.state.en" class="cf f20b">{{lab.lab_location_en}}</span>
                                        </th>
                                    </tr>
                                    <tr>
                                        <th class="text-right cf f20">
                                            <span v-if="!$store.state.en" class="cf f20b">سنة التأسيس</span>
                                            <span v-if="$store.state.en" class="cf f20b">Date of Foundation</span>
                                        </th>
                                        <th class="text-right cf f20b">
                                            <span class="cf f20b">{{lab.lab_establishment_date}}</span>
                                        </th>
                                    </tr>
                                    <tr>
                                        <th class="text-right cf f20">
                                            <span v-if="!$store.state.en" class="cf f20b">بدء الانتاج</span>
                                            <span v-if="$store.state.en" class="cf f20b">Production Start</span>
                                        </th>
                                        <th class="text-right cf f20b">
                                            <span class="cf f20b">{{lab.lab_start_date}}</span>
                                        </th>
                                    </tr>
                                    <tr>
                                        <th class="text-right cf f20">
                                            <span v-if="!$store.state.en" class="cf f20b">نوع الانتاج</span>
                                            <span v-if="$store.state.en" class="cf f20b">Product Type</span>
                                        </th>
                                        <th class="text-right cf f20b">
                                            <span v-if="!$store.state.en" class="cf f20b">{{lab.lab_prod_type}}</span>
                                            <span v-if="$store.state.en" class="cf f20b">{{lab.lab_prod_type_en}}</span>
                                        </th>
                                    </tr>
                                    <tr>
                                        <th class="text-right cf f20">
                                            <span v-if="!$store.state.en" class="cf f20b">عدد الخطوط الانتاجية</span>
                                            <span v-if="$store.state.en" class="cf f20b">Production Line</span>
                                        </th>
                                        <th class="text-right cf f20b">
                                            <span class="cf f20b">{{lab.lab_count_prod_lines}}</span>
                                        </th>
                                    </tr>
                                    <tr>
                                        <th class="text-right cf f20">
                                            <span v-if="!$store.state.en" class="cf f20b">الطاقة التصميمية</span>
                                            <span v-if="$store.state.en" class="cf f20b">Design Capacity</span>
                                        </th>
                                        <th class="text-right cf f20b">
                                            <span  class="cf f20b">{{lab.lab_design_energy}}</span>
                                            <span v-if="!$store.state.en"  class="cf f20b mr-2">طن سنوياً </span>
                                            <span v-if="$store.state.en"  class="cf f20b ml-2">tons annually</span>
                                        </th>
                                    </tr>
                                    <tr>
                                        <th class="text-right cf f20">
                                            <span v-if="!$store.state.en" class="cf f20b">الشركة المنفذة</span>
                                            <span v-if="$store.state.en" class="cf f20b">Implemented Company</span>
                                        </th>
                                        <th class="text-right cf f20b">
                                            <span v-if="!$store.state.en" class="cf f20b">{{lab.lab_company}}</span>
                                            <span v-if="$store.state.en" class="cf f20b">{{lab.lab_company_en}}</span>
                                        </th>
                                    </tr>
                                    <tr>
                                        <th class="text-right cf f20">
                                            <span v-if="!$store.state.en" class="cf f20b">طريقة التصنيع</span>
                                            <span v-if="$store.state.en" class="cf f20b">Manufacturing Method</span>
                                        </th>
                                        <th class="text-right cf f20b">
                                            <span v-if="!$store.state.en" class="cf f20b">{{lab.lab_manufacturing_method}}</span>
                                            <span v-if="$store.state.en" class="cf f20b">{{lab.lab_manufacturing_method_en}}</span>
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
                    <v-list class="rtl">
                        <template v-for="(slide , i ) in labs" >
                            <v-list-item  @click="change_slug(slide.lab_slug)" :key="'lab_slide_item_'+i" dense>
                                <v-list-item-avatar :key="'i_'+i">
                                    <v-img  :key="'i_i_i_i'+i" contain class="ma-4" :src="$axios.defaults.baseURL+'/images/'+slide.lab_image"/>
                                </v-list-item-avatar>
                                <v-list-item-title class="mr-2 ml-2 cf" :key="'i_i_'+i">
                                    <span v-if="!$store.state.en">{{slide.lab_name}}</span>
                                    <span v-if="$store.state.en">{{slide.lab_name_en}}</span>
                                </v-list-item-title>

                            </v-list-item>
                            <v-divider :key="'d_i_'+i" class="pa-0 ma-0"/>
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
                loading:true
            }
        },
        methods:{
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
            this.lab_slug = this.$route.path.split('/plants/')[1];
            this.get_lab();
            this.get_labs();
        },
        mounted () {
            window.scrollTo(0, 0)
        }

    }
</script>

<style scoped>

</style>