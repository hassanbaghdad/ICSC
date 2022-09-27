<template>
    <div class="container">
        <div class="row">
            <div class="col col-12">
                <v-card :class="$store.state.en?'ma-6':'rtl ma-6' ">
                    <v-card-title>
                        <v-icon>mdi-cube-outline</v-icon>
                        <span v-if="!$store.state.en" class="cf f20 mr-2">المنتجات</span>
                        <span v-if="$store.state.en" class="cf f20 mr-2 ml-2 float-left">Production</span>
                    </v-card-title>
                    <v-divider/>
                    <v-divider/>
                    <v-card-text>
                        <v-simple-table v-slot:default>
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
        </div>
    </div>
</template>

<script>
    export default {
        name: "AllProductions",
        data(){
            return{


                search:{
                    prod_title:'',
                    prod_title_en:'',
                },
                prods:this.$store.state.site.productions.productions
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
            }

        },
        created(){
            this.get_prods()
        }
    }
</script>

<style scoped>

</style>