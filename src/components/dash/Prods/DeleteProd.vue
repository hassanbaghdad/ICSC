<template>
    <v-dialog v-model="$store.state.dash.prods.forms.delete_prod" max-width="500">
        <v-card>
            <v-card-title class="error">
                <v-icon dark>mdi-delete</v-icon>
                <span class="mr-2 cf f18 white--text">حذف منتج</span>
            </v-card-title>
            <v-card-text>
                <div class="f20b cf pa-6">
                    هل انت متأكد من حذف المنتج
                    {{prod.prod_title}}
                    <br>
                    ؟

                </div>
            </v-card-text>
            <v-divider/>
            <v-card-actions>
                <v-btn color="error" dark @click="delete_prod" :loading="loading">
                    <v-icon dark>mdi-delete</v-icon>
                    <span class="mr-2 cf f18 white--text">حذف</span>
                </v-btn>
                <v-btn class="mr-4" outlined @click="$store.state.dash.prods.forms.delete_prod=false">
                    <v-icon>mdi-close</v-icon>
                    <span class="mr-2 cf f18">الغاء</span>
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
    export default {
        name: "DeleteProd",
        data(){
            return{
                prod:this.$store.state.dash.prods.target,
                loading:false
            }
        },
        methods:{
          async delete_prod(){
              this.loading = true;
              this.$axios.post('api-dash/delete-prod',this.prod).then(res=>{
                  this.$fire({
                      title: "نجح",
                      text: res.data.msg,
                      type: "success",
                      timer: 3000
                  });

                  this.$store.commit("DASH_GET_PRODS");
                  this.$store.state.dash.prods.forms.delete_prod = false;

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
            get_prod:function () {
                return this.$store.state.dash.prods.target
            }
        },
        watch:{
            get_prod:function (new_prod) {
                this.prod = new_prod
            }
        },

    }
</script>

<style scoped>

</style>