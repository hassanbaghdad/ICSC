<template>
    <v-dialog v-model="$store.state.dash.tenders.forms.delete_tender" max-width="500">
        <v-card>
            <v-card-title class="error">
                <v-icon dark>mdi-delete</v-icon>
                <span class="mr-2 cf f18 white--text">حذف مناقصة</span>
            </v-card-title>
            <v-card-text>
                <div class="f20b cf pa-6">
                    هل انت متأكد من حذف المناقصة
                    <br>
                    <b class="text-center">{{tender.tender_title}}</b>
                    <br>
                    ؟

                </div>
            </v-card-text>
            <v-divider/>
            <v-card-actions>
                <v-btn color="error" dark @click="delete_tender" :loading="loading">
                    <v-icon dark>mdi-delete</v-icon>
                    <span class="mr-2 cf f18 white--text">حذف</span>
                </v-btn>
                <v-btn class="mr-4" outlined @click="$store.state.dash.tenders.forms.delete_tender=false">
                    <v-icon>mdi-close</v-icon>
                    <span class="mr-2 cf f18">الغاء</span>
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
    export default {
        name: "DeleteTender",
        data(){
            return{
                tender:this.$store.state.dash.tenders.target,
                loading:false
            }
        },
        methods:{
          async delete_tender(){
              this.loading = true;
              this.$axios.post('api-dash/delete-tender',this.tender).then(res=>{
                  this.$fire({
                      title: "نجح",
                      text: res.data.msg,
                      type: "success",
                      timer: 3000
                  });

                  this.$store.commit("DASH_GET_TENDERS");
                  this.$store.state.dash.tenders.forms.delete_tender = false;

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
            get_tender:function () {
                return this.$store.state.dash.tenders.target
            }
        },
        watch:{
            get_tender:function (new_tender) {
                this.tender = new_tender
            }
        },

    }
</script>

<style scoped>

</style>