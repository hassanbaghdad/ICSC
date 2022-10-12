<template>
    <div class="container">
        <div class="row">
            <div class="col col-12 col-lg-8">
                <v-card :class="$store.state.en?'mt-6 mb-6':'rtl mt-6 mb-6' ">
                    <v-card-title>
                        <v-icon>mdi-cube-outline</v-icon>
                        <span v-if="!$store.state.en" class="cf f20 mr-2 grey--text">المنتجات</span>
                        <span v-if="$store.state.en" class="cf f20 mr-2 ml-2 float-left grey--text">Production</span>
                    </v-card-title>
                    <v-divider/>
                    <v-card-text>
                        <p v-if="!$store.state.en&&!table" class="text-justify cf f14" style="line-height: 30px">
                            {{text}}
                        </p>
                        <p v-if="$store.state.en&&!table" class="text-justify cf f14" style="line-height: 30px" >
                            {{text_en}}
                        </p>

                        <v-simple-table v-slot:default v-if="table">
                            <thead>
                            <tr>
                                <th class="cf f20 text-center">
                                    <span v-if="!$store.state.en">ت</span>
                                    <span v-if="$store.state.en">No.</span>
                                </th>
                                <th class="cf f20 text-center">
                                    <span v-if="!$store.state.en">المنتج</span>
                                    <span v-if="$store.state.en">Prod</span>
                                </th>
                                <th class="cf f20 text-center">
                                    <span v-if="!$store.state.en">تاريخ النشر</span>
                                    <span v-if="$store.state.en">Posted Date</span>
                                </th>
                                <th class="cf f20 text-center">
                                    <span v-if="!$store.state.en">تحميل</span>
                                    <span v-if="$store.state.en">Download</span>
                                </th>

                            </tr>
                            <tr>

                                <th colspan="5" class="cf f20 text-center">
                                    <v-text-field v-if="!$store.state.en" dense rounded @keyup="search_prod" v-model="search.prod_title" outlined prepend-inner-icon="mdi-magnify"></v-text-field>
                                    <v-text-field v-if="$store.state.en" dense rounded @keyup="search_prod" v-model="search.prod_title_en" outlined prepend-inner-icon="mdi-magnify"></v-text-field>
                                </th>

                            </tr>

                            </thead>
                            <tbody>
                            <tr v-for="(item ,i) in prods" :key="'prood_'+i">
                                <td class="cf f20 text-center">{{prods.indexOf(item)+1}}</td>
                                <td class="cf f20 text-center">
                                    <span v-if="!$store.state.en">{{item.prod_title}}</span>
                                    <span v-if="$store.state.en">{{item.prod_title_en}}</span>

                                </td>
                                <td class="cf f20 text-center">{{item.created_at.substr(0,10)}}</td>
                                <td class="cf f20 text-center"><v-btn :href="$axios.defaults.baseURL+'/images/'+item.prod_file" icon><v-icon color="blue">mdi-download</v-icon></v-btn></td>
                            </tr>
                            </tbody>
                        </v-simple-table>
                    </v-card-text>
                </v-card>
            </div>
            <div class="col col-12 col-lg-4">
                <v-card elevation="3" class="mt-6">

                    <v-list :class="$store.state.en?'':'rtl'">

                        <v-list-item  dense @click="table=true">
                            <v-list-item-avatar>
                                <v-icon>mdi-cube-outline</v-icon>
                            </v-list-item-avatar>
                            <v-list-item-title class="mr-2 ml-2 cf">
                                <span v-if="!$store.state.en">المنتجات</span>
                                <span v-if="$store.state.en">Products</span>
                            </v-list-item-title>
                        </v-list-item>
                        <v-divider class="pa-0 ma-0"/>
                        <v-list-item  dense :href="$axios.defaults.baseURL+'/images/'+prices.prices_file">
                            <v-list-item-avatar>
                                <v-icon>mdi-cash</v-icon>
                            </v-list-item-avatar>
                            <v-list-item-title class="mr-2 ml-2 cf">
                                <span v-if="!$store.state.en">اسعار السمنت</span>
                                <span v-if="$store.state.en">Cement Prices</span>
                            </v-list-item-title>
                        </v-list-item>
                        <v-divider class="pa-0 ma-0"/>

                        <v-list-item  dense @click="changeText(prices.marketing_mec,prices.marketing_mec_en)">
                            <v-list-item-avatar>
                                <v-icon>mdi-currency-usd</v-icon>
                            </v-list-item-avatar>
                            <v-list-item-title class="mr-2 ml-2 cf">
                                <span v-if="!$store.state.en">الية تسويق الاسعار</span>
                                <span v-if="$store.state.en">Price Marketing Mechanism</span>
                            </v-list-item-title>
                        </v-list-item>
                        <v-divider class="pa-0 ma-0"/>
                        <v-list-item  dense @click="changeText(prices.production_process_price,prices.production_process_price_en)">
                            <v-list-item-avatar>
                                <v-icon>mdi-chart-bell-curve</v-icon>
                            </v-list-item-avatar>
                            <v-list-item-title class="mr-2 ml-2 cf">
                                <span v-if="!$store.state.en">سير العمليات الانتاجية</span>
                                <span v-if="$store.state.en">Production Process Flow</span>
                            </v-list-item-title>
                        </v-list-item>
                        <v-divider class="pa-0 ma-0"/>
                         <v-list-item  dense @click="changeText(prices.cement_inspection_certificates,prices.cement_inspection_certificates_en)">
                            <v-list-item-avatar>
                                <v-icon>mdi-certificate</v-icon>
                            </v-list-item-avatar>
                            <v-list-item-title class="mr-2 ml-2 cf">
                                <span v-if="!$store.state.en">شهادة فحص السمنت</span>
                                <span v-if="$store.state.en">Cement Inspection Certificate</span>
                            </v-list-item-title>
                        </v-list-item>





                    </v-list>
                    <div class="mt-6"></div>
                </v-card>

            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "AllProductions",
        data(){
            return{

                table:true,
                text:'',
                text_en:'',
                search:{
                    prod_title:'',
                    prod_title_en:'',
                },
                prods:this.$store.state.site.productions.productions,
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

            search_prod()
            {

                var filtered = this.$store.state.site.productions.productions;

                if(this.$store.state.en)
                {
                    filtered = filtered.filter(item=>item.prod_title_en.match(this.search.prod_title_en));

                }else{
                    filtered = filtered.filter(item=>item.prod_title.match(this.search.prod_title));
                }
                console.log(filtered)

                this.prods = filtered;
            },
            get_prods()
            {
                this.$axios.get('api-site/get-prods').then(res=>{
                    this.prods = res.data
                })
            },
            changeText(col,col_en)
            {
                this.table = false;
                if(this.$store.state.en)
                {
                    this.text_en = col_en;

                }else{
                    this.text = col;
                }
            }

        },
        created(){
            this.get_prods()
        },
        computed:{
            get_prices:function () {
                return this.$store.state.site.prices.prices
            }
        },
        watch:{
            get_prices:function (new_prices) {
                this.prices = new_prices[0]
            }
        },
        mounted(){
            this.prices = this.$store.state.site.prices.prices[0]
        }

    }
</script>

<style scoped>

</style>