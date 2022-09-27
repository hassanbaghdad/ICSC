<template>
    <v-dialog v-model="$store.state.dash.labs.forms.delete_lab" max-width="500">
        <v-card>
            <v-card-title class="error">
                <v-icon dark>mdi-delete</v-icon>
                <span class="mr-2 cf f18 white--text">حذف معمل</span>
            </v-card-title>
            <v-card-text>
                <div class="f20b cf pa-6 text-center">
                   <span class="ma-auto">
                        هل انت متأكد من حذف المعمل
                   </span>
                    <br>
                    <b class="ma-auto">{{lab.lab_name}}</b>
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
                <v-btn class="mr-4" outlined @click="$store.state.dash.labs.forms.delete_lab=false">
                    <v-icon>mdi-close</v-icon>
                    <span class="mr-2 cf f18">الغاء</span>
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
    export default {
        name: "DeleteLab",
        data(){
            return{
                lab:this.$store.state.dash.labs.target,
                loading:false
            }
        },
        methods:{
          async delete_post(){
              this.loading = true;
              this.$axios.post('api-dash/delete-lab',this.lab).then(res=>{
                  this.$fire({
                      title: "نجح",
                      text: res.data.msg,
                      type: "success",
                      timer: 3000
                  });

                  this.$store.commit("DASH_GET_LABS");
                  this.$store.state.dash.labs.forms.delete_lab = false;

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
            get_lab:function () {
                return this.$store.state.dash.labs.target
            }
        },
        watch:{
            get_lab:function (new_lab) {
                this.lab = new_lab
            }
        },

    }
</script>

<style scoped>

</style>