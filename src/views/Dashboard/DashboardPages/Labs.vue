<template>

    <div class="container-fluid">
        <div class="row">
            <div class="col">
                <v-card>
                    <v-card-title class="p-2">
                        <v-icon>mdi-factory</v-icon>
                        <span class="mr-2 cf f18b">المعامل</span>
                    </v-card-title>
                    <v-divider/>
                    <v-card-title class="p-0">
                        <v-btn  @click="$store.state.dash.labs.forms.add_lab=true" class="mr-4" fab small color="orange" dark><v-icon>mdi-plus</v-icon></v-btn>
                    </v-card-title>
                    <v-divider/>
                    <v-card-text>
                        <v-simple-table v-slot:default>
                            <thead>
                            <tr>
                                <th class="text-center f16b cf">ت</th>
                                <th class="text-center f16b cf">اسم المعمل</th>
                                <th class="text-center f16b cf">Plant Name</th>
                                <th class="text-center f16b cf">تعديل</th>
                                <th class="text-center f16b cf">حذف</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr v-for="(l , i ) in pageOfItems" :key="'lab_dash_'+i">
                                <td class="text-center f16 cf">{{labs.indexOf(l)+1}}</td>
                                <td class="text-center f16 cf">{{l.lab_name}}</td>
                                <td class="text-center f16 cf">{{l.lab_name_en}}</td>
                                <td class="text-center f16 cf"><v-btn icon><v-icon color="primary" @click="set_lab_to_edit(l)">mdi-pen</v-icon></v-btn></td>
                                <td class="text-center f16 cf"><v-btn icon><v-icon color="error" @click="set_lab_to_delete(l)">mdi-delete</v-icon></v-btn></td>
                            </tr>
                            </tbody>

                        </v-simple-table>
                    </v-card-text>
                    <v-divider/>
                    <v-card-actions class="text-center pa-4">
                        <jw-pagination class="ma-auto" :items="labs" @changePage="onChangePage" :labels="customLabels"></jw-pagination>
                    </v-card-actions>
                </v-card>
            </div>
        </div>
        <AddLab/>
        <EditLab/>
        <DeleteLab/>


    </div>
</template>

<script>
    import JwPagination from 'jw-vue-pagination';
    import AddLab from "@/components/dash/Labs/AddLab";
    import EditLab from "@/components/dash/Labs/EditLab";
    import DeleteLab from "@/components/dash/Labs/DeleteLab";

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
        name: "Labs",
        components:{
            DeleteLab,
            EditLab,
            AddLab,
            JwPagination
        },
        data(){
            return{
                labs:this.$store.state.dash.labs.labs,
                customLabels,
                customStyles,
                pageOfItems: []

            }
            } ,
        methods:{
            get_labs(){
                this.$store.commit("DASH_GET_LABS");
            },
            onChangePage(pageOfItems) {
                // update page of items
                this.pageOfItems = pageOfItems;
            },
            set_lab_to_edit(p)
            {
                this.$store.state.dash.labs.target = p;
                this.$store.state.dash.labs.forms.edit_lab = true;
            },
            set_lab_to_delete(p)
            {
                this.$store.state.dash.labs.target = p;
                this.$store.state.dash.labs.forms.delete_lab = true;
            },

        },
        created(){
            this.get_labs()
        },
        computed:{
            get_all_labs:function () {
                return this.$store.state.dash.labs.labs
            }
        },
        watch:{
            get_all_labs:function (new_labs) {
                this.labs = new_labs
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