<template>
    <v-dialog v-model="$store.state.dash.posts.forms.delete_post" max-width="500">
        <v-card>
            <v-card-title class="error">
                <v-icon dark>mdi-delete</v-icon>
                <span class="mr-2 cf f18 white--text">حذف منشور</span>

                <v-btn @click="$store.state.dash.posts.forms.delete_post=false" dark icon><v-icon>mdi-close</v-icon></v-btn>
            </v-card-title>
            <v-card-text>
                <div class="f20b cf pa-6">
                    هل انت متأكد من حذف المنشور
                    {{post.post_title}}
                    <br>
                    ؟

                </div>
            </v-card-text>
            <v-divider/>
            <v-card-actions>
                <v-btn color="error" dark @click="delete_post" :loading="loading">
                    <v-icon dark>mdi-delete</v-icon>
                    <span class="mr-2 cf f18 white--text">حذف</span>
                </v-btn>
                <v-btn class="mr-4" outlined @click="$store.state.dash.posts.forms.delete_post=false">
                    <v-icon>mdi-close</v-icon>
                    <span class="mr-2 cf f18">الغاء</span>
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
    export default {
        name: "DeletePost",
        data(){
            return{
                post:this.$store.state.dash.posts.target,
                loading:false
            }
        },
        methods:{
          async delete_post(){
              this.loading = true;
              this.$axios.post('api-dash/delete-post',this.post).then(res=>{
                  this.$fire({
                      title: "نجح",
                      text: res.data.msg,
                      type: "success",
                      timer: 3000
                  });

                  this.$store.commit("DASH_GET_POSTS");
                  this.$store.state.dash.posts.forms.delete_post = false;

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
        },
        computed:{
            get_post:function () {
                return this.$store.state.dash.posts.target
            }
        },
        watch:{
            get_post:function (new_post) {
                this.post = new_post
            }
        },

    }
</script>

<style scoped>

</style>