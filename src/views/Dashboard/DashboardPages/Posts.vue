<template>

    <div class="container-fluid">
        <div class="row">
            <div class="col">
                <v-card>
                    <v-card-title class="p-2">
                        <v-icon>mdi-earth</v-icon>
                        <span class="mr-2 cf f18b">المشورات</span>
                    </v-card-title>
                    <v-divider/>
                    <v-card-title class="p-0">
                        <v-btn  @click="$store.state.dash.posts.forms.add_post=true" class="mr-4" fab small color="orange" dark><v-icon>mdi-plus</v-icon></v-btn>
                    </v-card-title>
                    <v-divider/>
                    <v-card-text>
                        <v-simple-table v-slot:default>
                            <thead>
                            <tr>
                                <th class="text-center f16b cf">ت</th>
                                <th class="text-center f16b cf">العنوان</th>
                                <th class="text-center f16b cf">Title</th>
                                <th class="text-center f16b cf">التاريخ</th>
                                <th class="text-center f16b cf">تعديل</th>
                                <th class="text-center f16b cf">حذف</th>
                            </tr>
                            <tr>
                                <th class="text-center f16b cf"></th>
                                <th class="text-center f16b cf">
                                    <v-text-field @keyup="search_post" v-model="search.post_title" outlined prepend-inner-icon="mdi-magnify"></v-text-field>
                                </th>
                                <th class="text-center f16b cf">
                                    <v-text-field @keyup="search_post" v-model="search.post_title_en" outlined prepend-inner-icon="mdi-magnify"></v-text-field>
                                </th>
                                <th class="text-center f16b cf"></th>
                                <th class="text-center f16b cf"></th>

                            </tr>

                            </thead>
                            <tbody>
                            <tr v-for="(p , i ) in pageOfItems" :key="'post_dash_'+i">
                                <td class="text-center f16 cf">{{posts.indexOf(p)+1}}</td>
                                <td class="text-center f16 cf">{{p.post_title}}</td>
                                <td class="text-center f16 cf">{{p.post_title_en}}</td>
                                <td class="text-center f16 cf">{{p.post_date.substr(0,10)}}</td>
                                <td class="text-center f16 cf"><v-btn icon><v-icon color="primary" @click="set_post_to_edit(p)">mdi-pen</v-icon></v-btn></td>
                                <td class="text-center f16 cf"><v-btn icon><v-icon color="error" @click="set_post_to_delete(p)">mdi-delete</v-icon></v-btn></td>
                            </tr>
                            </tbody>

                        </v-simple-table>
                    </v-card-text>
                    <v-divider/>
                    <v-card-actions class="text-center pa-4">
                        <jw-pagination class="ma-auto" :items="posts" @changePage="onChangePage" :labels="customLabels"></jw-pagination>
                    </v-card-actions>
                </v-card>
            </div>
        </div>
    <AddPost/>
        <EditPost/>
        <DeletePost/>
    </div>
</template>

<script>
    import JwPagination from 'jw-vue-pagination';
    import AddPost from "@/components/dash/Posts/AddPost";
    import EditPost from "@/components/dash/Posts/EditPost";
    import DeletePost from "@/components/dash/Posts/DeletePost";
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
        name: "Posts",
        components:{
            DeletePost,
            EditPost,
            AddPost,
            JwPagination
        },
        data(){
            return{
                posts:this.$store.state.dash.posts.posts,
                customLabels,
                customStyles,
                pageOfItems: [],
                search:{
                    post_title:'',
                    post_title_en:''
                }

            }
            } ,
        methods:{
            get_posts(){
                this.$store.commit("DASH_GET_POSTS");
            },
            onChangePage(pageOfItems) {
                // update page of items
                this.pageOfItems = pageOfItems;
            },
            set_post_to_edit(p)
            {
                this.$store.state.dash.posts.target = p;
                this.$store.state.dash.posts.forms.edit_post = true;
            },
            set_post_to_delete(p)
            {
                this.$store.state.dash.posts.target = p;
                this.$store.state.dash.posts.forms.delete_post = true;
            },
            search_post(){
                var filterd = this.$store.state.dash.posts.posts;

                filterd = filterd.filter(item=>item.post_title.match(this.search.post_title));
                filterd =  filterd.filter(item=>item.post_title_en.match(this.search.post_title_en));

                this.posts = filterd;
            }
        },
        created(){
            this.get_posts()
        },
        computed:{
            get_all_posts:function () {
                return this.$store.state.dash.posts.posts
            }
        },
        watch:{
            get_all_posts:function (new_posts) {
                this.posts = new_posts
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