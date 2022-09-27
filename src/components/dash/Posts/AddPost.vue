<template>
    <div>
        <v-dialog v-model="$store.state.dash.posts.forms.add_post" max-width="900">
            <v-card>
                <v-card-title class="blue rtl">
                    <v-icon dark>mdi-plus</v-icon>
                    <span class="mr-2 cf white--text">اضافة منشور</span>

                    <v-btn icon dark @click="$store.state.dash.posts.forms.add_post=false"><v-icon>mdi-close</v-icon></v-btn>
                </v-card-title>
                <v-card-text>
                    <v-form lazy-validation v-model="valid" ref="form" class="mt-10">
                        <div class="row">
                            <div class="col col-12 col-lg-6">
                                <v-text-field :rules="req" v-model="post.post_title" class="v-application--is-ltr text-center" outlined label="عنوان المنشور" prepend-inner-icon="mdi-information"/>
                            </div>
                            <div class="col col-12 col-lg-6">
                                <v-text-field :rules="req" v-model="post.post_title_en" outlined label="Post Title" prepend-inner-icon="mdi-information"/>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col col-12 col-lg-6">
                                <v-textarea :rules="req" v-model="post.post_desc"  outlined label="نص المنشور" prepend-inner-icon="mdi-text"/>
                            </div>
                            <div class="col col-12 col-lg-6">
                                <v-textarea :rules="req" v-model="post.post_desc_en" outlined label="Post Description" prepend-inner-icon="mdi-text"/>
                            </div>
                            <div class="col col-12 col-lg-6">
                                <v-card min-height="200" class="text-center">
                                    <v-icon v-if="src==null || src==''" size="300" color="blue">mdi-image</v-icon>
                                    <v-img v-if="src!=null&& src!=''" :src="src" ></v-img>
                                </v-card>
                                <v-file-input label="اختيار صورة" ref="photo" :rules="req" @change="Preview_image" v-model="post.photo" />

                            </div>

                        </div>

                    </v-form>
                </v-card-text>
                <v-divider/>
                <v-card-actions class="rtl">
                    <v-btn @click="upload" dark color="blue"  :loading="loading">
                        <v-icon dark>mdi-check</v-icon>
                        <span class="mr-2 cf">حفظ</span>
                    </v-btn>
                    <v-btn outlined class="mr-4"  @click="$store.state.dash.posts.forms.add_post=false">
                        <v-icon dark>mdi-close</v-icon>
                        <span class="mr-2 cf">الغاء</span>
                    </v-btn>

                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
    export default {
        name: "AddPost",
        data(){
            return{
                src:'',
                valid:true,
                loading:false,
                req:[v=>!!v || 'هذا الحقل مطلوب'],
                post:{
                    post_title:'',
                    post_title_en:'',
                    post_desc:'',
                    post_desc_en:'',
                    photo:null

                }
            }
        },
        methods:{
            onchange(){
                console.log(this.refs.photo)
            },
            Preview_image() {
                try{
                    this.src= URL.createObjectURL(this.post.photo)
                }catch (e) {
                    console.log(e.message)
                }

            },
            async upload(){
                if(this.$refs.form.validate())
                {
                    this.loading = true;
                    var fm = new FormData;
                    fm.append('post_title',this.post.post_title);
                    fm.append('post_title_en',this.post.post_title_en);
                    fm.append('post_desc',this.post.post_desc);
                    fm.append('post_desc_en',this.post.post_desc_en);
                    fm.append('photo',this.post.photo);

                    this.$axios.post('api-dash/add-post',fm).then(res=>{
                        this.$fire({
                            title: "نجح",
                            text: res.data.msg,
                            type: "success",
                            timer: 3000
                        });

                        this.$store.commit("DASH_GET_POSTS");
                        this.$store.state.dash.posts.forms.add_post = false;
                        this.$refs.form.reset();
                        this.src = '';
                    }).catch(err=>{
                        if(err.response.status == 403)
                        {
                            this.$fire({
                                title: "نجح",
                                text: err.response.data.msg,
                                type: "warning",
                                timer: 5000
                            });
                        }
                    }).finally(fin=>{
                        this.loading = false;
                    })
                }
            }
        }
    }
</script>

<style scoped>

</style>