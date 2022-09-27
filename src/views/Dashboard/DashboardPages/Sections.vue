<template>

    <div class="container-fluid">
        <div class="row">
            <div class="col">
                <v-card>
                    <v-card-title class="p-2">
                        <v-icon>mdi-cogs</v-icon>
                        <span class="mr-2 cf f18b">الاقسام</span>
                    </v-card-title>
                    <v-divider/>
                    <v-card-title class="p-0">
                        <v-btn  @click="$store.state.dash.sections.forms.add_section=true" class="mr-4" fab small color="orange" dark><v-icon>mdi-plus</v-icon></v-btn>
                    </v-card-title>
                    <v-divider/>
                    <v-card-text>
                        <v-simple-table v-slot:default>
                            <thead>
                            <tr>
                                <th class="text-center f16b cf">ت</th>
                                <th class="text-center f16b cf">اسم القسم</th>
                                <th class="text-center f16b cf">Section Title</th>
                                <th class="text-center f16b cf">تعديل</th>
                                <th class="text-center f16b cf">حذف</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr v-for="(s , i ) in pageOfItems" :key="'post_dash_'+i">
                                <td class="text-center f16 cf">{{sections.indexOf(s)+1}}</td>
                                <td class="text-center f16 cf">{{s.section_title}}</td>
                                <td class="text-center f16 cf">{{s.section_title_en}}</td>
                                <td class="text-center f16 cf"><v-btn icon><v-icon color="primary" @click="set_section_to_edit(s)">mdi-pen</v-icon></v-btn></td>
                                <td class="text-center f16 cf"><v-btn icon><v-icon color="error" @click="set_section_to_delete(s)">mdi-delete</v-icon></v-btn></td>
                            </tr>
                            </tbody>

                        </v-simple-table>
                    </v-card-text>
                    <v-divider/>
                    <v-card-actions class="text-center pa-4">
                        <jw-pagination class="ma-auto" :items="sections" @changePage="onChangePage" :labels="customLabels"></jw-pagination>
                    </v-card-actions>
                </v-card>
            </div>
        </div>
        <AddSection/>
        <EditSection/>
        <DeleteSection/>

    </div>
</template>

<script>
    import JwPagination from 'jw-vue-pagination';
    import AddPost from "@/components/dash/Posts/AddPost";
    import EditPost from "@/components/dash/Posts/EditPost";
    import DeletePost from "@/components/dash/Posts/DeletePost";
    import AddSection from "@/components/dash/Sections/AddSection";
    import EditSection from "@/components/dash/Sections/EditSection";
    import DeleteSection from "@/components/dash/Sections/DeleteSection";
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
            DeleteSection,
            EditSection,
            AddSection,
            JwPagination
        },
        data(){
            return{
                sections:this.$store.state.dash.sections.sections,
                customLabels,
                customStyles,
                pageOfItems: []

            }
            } ,
        methods:{
            get_sections(){
                this.$store.commit("DASH_GET_SECTIONS");
            },
            onChangePage(pageOfItems) {
                // update page of items
                this.pageOfItems = pageOfItems;
            },
            set_section_to_edit(p)
            {
                this.$store.state.dash.sections.target = p;
                this.$store.state.dash.sections.forms.edit_section = true;
            },
            set_section_to_delete(p)
            {
                this.$store.state.dash.sections.target = p;
                this.$store.state.dash.sections.forms.delete_section = true;
            },

        },
        created(){
            this.get_sections()
        },
        computed:{
            get_all_sections:function () {
                return this.$store.state.dash.sections.sections
            }
        },
        watch:{
            get_all_sections:function (new_sections) {
                this.sections = new_sections
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