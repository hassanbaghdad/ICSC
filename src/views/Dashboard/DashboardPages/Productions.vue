<template>

    <div class="container-fluid">
        <div class="row">
            <div class="col">
                <v-card>
                    <v-card-title class="p-2">
                        <v-icon>mdi-cube-outline</v-icon>
                        <span class="mr-2 cf f18b">المنتجات</span>
                    </v-card-title>
                    <v-divider/>
                    <v-card-title class="p-0">
                        <v-btn  @click="$store.state.dash.prods.forms.add_prod=true" class="mr-4" fab small color="orange" dark><v-icon>mdi-plus</v-icon></v-btn>
                    </v-card-title>
                    <v-divider/>
                    <v-card-text>
                        <v-simple-table v-slot:default>
                            <thead>
                            <tr>
                                <th class="text-center f16b cf">ت</th>
                                <th class="text-center f16b cf">اسم المنتج</th>
                                <th class="text-center f16b cf">Prod Title</th>
                                <th class="text-center f16b cf">تعديل</th>
                                <th class="text-center f16b cf">حذف</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr v-for="(p , i ) in pageOfItems" :key="'post_dash_'+i">
                                <td class="text-center f16 cf">{{prods.indexOf(p)+1}}</td>
                                <td class="text-center f16 cf">{{p.prod_title}}</td>
                                <td class="text-center f16 cf">{{p.prod_title_en}}</td>
                                <td class="text-center f16 cf"><v-btn icon><v-icon color="primary" @click="set_prod_to_edit(p)">mdi-pen</v-icon></v-btn></td>
                                <td class="text-center f16 cf"><v-btn icon><v-icon color="error" @click="set_prod_to_delete(p)">mdi-delete</v-icon></v-btn></td>
                            </tr>
                            </tbody>

                        </v-simple-table>
                    </v-card-text>
                    <v-divider/>
                    <v-card-actions class="text-center pa-4">
                        <jw-pagination class="ma-auto" :items="prods" @changePage="onChangePage" :labels="customLabels"></jw-pagination>
                    </v-card-actions>
                </v-card>
            </div>
        </div>
       <AddProd/>
        <EditProd/>
        <DeleteProd/>

    </div>
</template>

<script>
    import JwPagination from 'jw-vue-pagination';
    import AddProd from "@/components/dash/Prods/AddProd";
    import EditProd from "@/components/dash/Prods/EditProd";
    import DeleteProd from "@/components/dash/Prods/DeleteProd";

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
        name: "Sections",
        components:{
            DeleteProd,
            EditProd,
            AddProd,
            JwPagination
        },
        data(){
            return{
                prods:this.$store.state.dash.prods.prods,
                customLabels,
                customStyles,
                pageOfItems: []

            }
            } ,
        methods:{
            get_prods(){
                this.$store.commit("DASH_GET_PRODS");
            },
            onChangePage(pageOfItems) {
                // update page of items
                this.pageOfItems = pageOfItems;
            },
            set_prod_to_edit(p)
            {
                this.$store.state.dash.prods.target = p;
                this.$store.state.dash.prods.forms.edit_prod = true;
            },
            set_prod_to_delete(p)
            {
                this.$store.state.dash.prods.target = p;
                this.$store.state.dash.prods.forms.delete_prod = true;
            },

        },
        created(){
            this.get_prods()
        },
        computed:{
            get_all_prods:function () {
                return this.$store.state.dash.prods.prods
            }
        },
        watch:{
            get_all_prods:function (new_prods) {
                this.prods = new_prods
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