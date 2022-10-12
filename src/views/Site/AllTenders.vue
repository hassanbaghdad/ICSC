<template>
    <div class="container">
        <div class="row">
            <div class="col col-12">
                <v-card :class="$store.state.en?'ma-6':'rtl ma-6' ">
                    <v-card-title>
                        <v-icon>mdi-finance</v-icon>
                        <span v-if="!$store.state.en" class="cf f20 mr-2 grey--text">المناقصات</span>
                        <span v-if="$store.state.en" class="cf f20 mr-2 ml-2 float-left grey--text">Tenders</span>
                    </v-card-title>
                    <v-divider/>
                    <v-card-title>
                        <v-select v-if="!$store.state.en" @change="select_tender" v-model="tender_type" :items="types" item-text="value" item-value="value" outlined :label="$store.state.en?'Select Type':'نوع المناقصة'"/>
                        <v-select v-if="$store.state.en" @change="select_tender" v-model="tender_type" :items="types_en" item-text="label" item-value="value" outlined :label="$store.state.en?'Select Type':'نوع المناقصة'"/>
                    </v-card-title>
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
                                    <span v-if="!$store.state.en">المناقصة</span>
                                    <span v-if="$store.state.en">Tender</span>
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
                                    <v-text-field v-if="!$store.state.en" dense rounded @keyup="search_tender" v-model="search.tender_title" outlined prepend-inner-icon="mdi-magnify"></v-text-field>
                                    <v-text-field v-if="$store.state.en" dense rounded @keyup="search_tender" v-model="search.tender_title_en" outlined prepend-inner-icon="mdi-magnify"></v-text-field>
                                </th>

                            </tr>

                            </thead>
                            <tbody>
                            <tr v-for="(item ,i) in tenders" :key="'ttender_'+i">
                                <td class="cf f20 text-center">{{tenders.indexOf(item)+1}}</td>
                                <td class="cf f20 text-center">
                                    <span v-if="!$store.state.en">{{item.tender_title}}</span>
                                    <span v-if="$store.state.en">{{item.tender_title_en}}</span>

                                </td>
                                <td class="cf f20 text-center">{{item.created_at.substr(0,10)}}</td>
                                <td class="cf f20 text-center"><v-btn :href="$axios.defaults.baseURL+'/images/'+item.tender_file" icon><v-icon color="blue">mdi-download</v-icon></v-btn></td>
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
        name: "AllTenders",
        data(){
            return{
                types:[
                    {value:'استيرادية'},
                    {value:'محلية'},
                    {value:'مواد اولية'},
                ],
                types_en:[
                    {value:'استيرادية',label:'Import'},
                    {value:'محلية',label: 'Local'},
                    {value:'مواد اولية',label: 'Raw materials'},
                ],

                tender_type:'',
                search:{
                    tender_title:'',
                    tender_title_en:'',
                },
                tenders:this.$store.state.site.tenders.tenders
            }
        },
        methods:{
            select_tender()
            {
                var filtered = this.$store.state.site.tenders.tenders;

                filtered = filtered.filter(item=>item.tender_type==this.tender_type);

                this.tenders = filtered;
            },
            search_tender()
            {
                var filtered = this.$store.state.site.tenders.tenders;

                if(this.$store.state.en)
                {
                    filtered = filtered.filter(item=>item.tender_title_en.match(this.search.tender_title_en));
                }else{
                    filtered = filtered.filter(item=>item.tender_title.match(this.search.tender_title));
                }


                this.tenders = filtered;
            },
            get_tenders()
            {
                this.$axios.get('api-site/get-tenders').then(res=>{
                    this.tenders = res.data
                })
            }

        },
        created(){
            this.get_tenders()
        }
    }
</script>

<style scoped>

</style>