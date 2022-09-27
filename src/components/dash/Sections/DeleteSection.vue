<template>
    <v-dialog v-model="$store.state.dash.sections.forms.delete_section" max-width="500">
        <v-card>
            <v-card-title class="error">
                <v-icon dark>mdi-delete</v-icon>
                <span class="mr-2 cf f18 white--text">حذف قسم</span>

                <v-btn @click="$store.state.dash.sections.forms.delete_section=false" dark icon><v-icon>mdi-close</v-icon></v-btn>
            </v-card-title>
            <v-card-text>
                <div class="f20b cf pa-6">
                    هل انت متأكد من حذف القسم
                    {{section.section_title}}
                    <br>
                    ؟

                </div>
            </v-card-text>
            <v-divider/>
            <v-card-actions>
                <v-btn color="error" dark @click="delete_section" :loading="loading">
                    <v-icon dark>mdi-delete</v-icon>
                    <span class="mr-2 cf f18 white--text">حذف</span>
                </v-btn>
                <v-btn class="mr-4" outlined @click="$store.state.dash.sections.forms.delete_section=false">
                    <v-icon>mdi-close</v-icon>
                    <span class="mr-2 cf f18">الغاء</span>
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
    export default {
        name: "DeleteSection",
        data(){
            return{
                section:this.$store.state.dash.sections.target,
                loading:false
            }
        },
        methods:{
          async delete_section(){
              this.loading = true;
              this.$axios.post('api-dash/delete-section',this.section).then(res=>{
                  this.$fire({
                      title: "نجح",
                      text: res.data.msg,
                      type: "success",
                      timer: 3000
                  });

                  this.$store.commit("DASH_GET_SECTIONS");
                  this.$store.state.dash.sections.forms.delete_section = false;

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
            get_section:function () {
                return this.$store.state.dash.sections.target
            }
        },
        watch:{
            get_section:function (new_section) {
                this.section = new_section
            }
        },

    }
</script>

<style scoped>

</style>