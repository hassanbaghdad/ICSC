<template>

    <div class="container-fluid">
        <div class="row">
            <div class="col">
                <v-card>
                    <v-card-title class="p-2">
                        <v-icon>mdi-gavel</v-icon>
                        <span class="mr-2 cf f18b">المناقصات</span>
                    </v-card-title>
                    <v-divider/>
                    <v-card-title class="p-0">
                        <v-btn  @click="$store.state.dash.tenders.forms.add_tender=true" class="mr-4" fab small color="orange" dark><v-icon>mdi-plus</v-icon></v-btn>
                    </v-card-title>
                    <v-divider/>
                    <v-card-text>
                        <v-simple-table v-slot:default>
                            <thead>
                            <tr>
                                <th class="text-center f16b cf">ت</th>
                                <th class="text-center f16b cf">العنوان</th>
                                <th class="text-center f16b cf">Title</th>
                                <th class="text-center f16b cf">تعديل</th>
                                <th class="text-center f16b cf">حذف</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr v-for="(t , i ) in pageOfItems" :key="'post_dash_'+i">
                                <td class="text-center f16 cf">{{tenders.indexOf(t)+1}}</td>
                                <td class="text-center f16 cf">{{t.tender_title}}</td>
                                <td class="text-center f16 cf">{{t.tender_title_en}}</td>
                                <td class="text-center f16 cf"><v-btn icon><v-icon color="primary" @click="set_tender_to_edit(t)">mdi-pen</v-icon></v-btn></td>
                                <td class="text-center f16 cf"><v-btn icon><v-icon color="error" @click="set_tender_to_delete(t)">mdi-delete</v-icon></v-btn></td>
                            </tr>
                            </tbody>

                        </v-simple-table>
                    </v-card-text>
                    <v-divider/>
                    <v-card-actions class="text-center pa-4">
                        <jw-pagination class="ma-auto" :items="tenders" @changePage="onChangePage" :labels="customLabels"></jw-pagination>
                    </v-card-actions>
                </v-card>
            </div>
        </div>
        <AddTender/>
        <EditTender/>
        <DeleteTender/>

    </div>
</template>

<script>
    import JwPagination from 'jw-vue-pagination';
    import AddTender from "@/components/dash/Tenders/AddTender";
    import EditTender from "@/components/dash/Tenders/EditTender";
    import DeleteTender from "@/components/dash/Tenders/DeleteTender";

    const customLabels = {
        first: 'الاول',
        last: 'الاخير',
        previous: 'السابق',
        next: 'التالي'
    };
    const customStyles = {
        ul: {
            direction:'ltr'
        },
        li: {
            display: 'inline-block',
            border:'1px solid grey',
            margin:'2px',
            borderRadius:'5px'
        },
        a: {
            color: 'black'
        }
    };
    export default {
        name: "Tenders",
        components:{
            DeleteTender,
            EditTender,
            AddTender,
            JwPagination
        },
        data(){
            return{
                tenders:this.$store.state.dash.tenders.tenders,
                customLabels,
                customStyles,
                pageOfItems: []

            }
            } ,
        methods:{
            get_tenders(){
                this.$store.commit("DASH_GET_TENDERS");
            },
            onChangePage(pageOfItems) {
                // update page of items
                this.pageOfItems = pageOfItems;
            },
            set_tender_to_edit(p)
            {
                this.$store.state.dash.tenders.target = p;
                this.$store.state.dash.tenders.forms.edit_tender = true;
            },
            set_tender_to_delete(p)
            {
                this.$store.state.dash.tenders.target = p;
                this.$store.state.dash.tenders.forms.delete_tender = true;
            },

        },
        created(){
            this.get_tenders()
        },
        computed:{
            get_all_tenders:function () {
                return this.$store.state.dash.tenders.tenders
            }
        },
        watch:{
            get_all_tenders:function (new_tenders) {
                this.tenders = new_tenders
            }
        },

    }
</script>

<style scoped>
    .f16{
        font-size: 16px !important;
    }
    .f16b{
        font-size: 16px !important;
        font-weight: bold !important;
    }
</style>