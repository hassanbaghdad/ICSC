<template>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <v-card class="mt-16" :loading="loading">
                    <v-card-title class="blue">
                        <v-icon dark>mdi-email</v-icon>
                        <span class="f20 cf mr-2 white--text">الرسائل</span>
                    </v-card-title>
                    <v-card-text>
                        <v-simple-table v-slot:default>
                            <thead>
                                <tr>
                                    <th class="text-center cf f18b">ت</th>
                                    <th class="text-center cf f18b">من</th>
                                    <th class="text-center cf f18b">البريد</th>
                                    <th class="text-center cf f18b">التاريخ</th>
                                    <th class="text-center cf f18b">عرض</th>
                                    <th class="text-center cf f18b">حذف</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(item ,i ) in messages" :key="'msg_'+i">
                                    <td class="cf text-center f18">{{item.id}}</td>
                                    <td class="cf text-center f18">{{item.name}}</td>
                                    <td class="cf text-center f18">{{item.email}}<v-icon color="orange" class="mr-2">mdi-email</v-icon></td>
                                    <td class="cf text-center f18">{{item.created_at.substr(0,10)}}</td>
                                    <td class="cf text-center f18"><v-btn @click="set_msg_to_view(item)" icon><v-icon color="blue">mdi-eye</v-icon></v-btn></td>
                                    <td class="cf text-center f18"><v-btn @click="delete_msg(item.id)" icon><v-icon color="error">mdi-delete</v-icon></v-btn></td>


                                </tr>
                            </tbody>
                        </v-simple-table>
                    </v-card-text>
                </v-card>
            </div>
        </div>
        <ShowMessage/>
    </div>
</template>

<script>
    import ShowMessage from "@/components/dash/Messages/ShowMessage";
    export default {
        name: "Messages",
        components: {ShowMessage},
        data(){
            return{
                messages:[],
                loading:false
            }
        },
        methods:{
            get_messages()
            {
                this.loading = true;
                this.$axios.get('api-site/get-messages').then(res=>{
                    this.messages = res.data;
                }).catch(err=>{
                    console.log(err)
                }).finally(fin=>{
                    this.loading = false;
                })
            },
            delete_msg(msg_id)
            {
                this.loading = true;
                this.$axios.post('api-site/delete-message',{id:msg_id}).then(res=>{
                    this.messages = res.data.messages;
                    this.$fire({
                        title: "نجح",
                        text: res.data.msg,
                        type: "success",
                        timer: 3000
                    });
                }).catch(err=>{
                    console.log(err)
                }).finally(fin=>{
                    this.loading = false;
                })
            },
            set_msg_to_view(msg)
            {
                this.$store.state.dash.messages.target = msg;
                this.$store.state.dash.messages.forms.view_message = true;
            }
        },
        created(){
            this.get_messages()
        }
    }
</script>

<style scoped>

</style>