<template>
    <v-dialog v-model="$store.state.dash.messages.forms.view_message" max-width="600">
        <v-card>
            <v-card-title class="info">
                <v-icon dark>mdi-email</v-icon>
                <span class="mr-2 cf f20 white--text">الرسالة</span>
            </v-card-title>
            <v-card-text class="rtl pa-6">
                <p class="cf f20 mt-6">
                    <span>الاسم: </span>
                    <span><b>{{msg.name}}</b></span>
                </p>
                <v-divider/>
                <p class="cf f20">
                    <span>البريد: </span>
                    <span><b>{{msg.email}}</b></span>
                </p>
                <v-divider/>
                <p class="cf f20 ">
                    <span>الرسالة: </span>
                </p>
                <p class="rtl text-justify cf"><b>{{msg.name}}</b></p>
            </v-card-text>
            <v-divider/>
          <v-card-actions>
              <v-btn outlined @click="$store.state.dash.messages.forms.view_message=false">
                  <v-icon>mdi-close</v-icon>
                  <span class="mr-2 cf f20">غلق</span>
              </v-btn>
          </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
    export default {
        name: "ShowMessage",
        data(){
            return{
                msg:this.$store.state.dash.messages.target
            }
        },
        computed:{
            get_message:function () {
                return this.$store.state.dash.messages.target;
            }
        },
        watch:{
            get_message:function (new_message) {
                this.msg = new_message;
            }
        },

    }
</script>

<style scoped>

</style>