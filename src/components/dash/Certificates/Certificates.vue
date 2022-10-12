<template>
    <v-card>
        <v-card-title>
            <v-icon>mdi-certificate</v-icon>
            <span class="cf f18 mr-2 grey--text">الشهادات</span>
        </v-card-title>
        <v-divider/>
        <v-card-title>
            <v-btn @click="$store.state.dash.certificates.forms.add_certificate=true" fab small color="orange"><v-icon color="white">mdi-plus</v-icon></v-btn>
        </v-card-title>
        <v-divider/>
        <v-card-text>
            <v-simple-table v-slot:default>
                <thead>
                    <tr>
                        <th class="text-center cf f18">ت</th>
                        <th class="text-center cf f18">عنوان الشهادة</th>
                        <th class="text-center cf f18">عرض</th>
                        <th class="text-center cf f18">حذف</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item,i) in certificates" :key="i">
                        <td class="text-center cf f18">{{certificates.indexOf(item)+1}}</td>
                        <td class="text-center cf f18">{{item.cert_title}}</td>
                        <td class="text-center cf f18"><v-btn :href="$axios.defaults.baseURL + 'images/' + item.cert_file" icon><v-icon color="primary">mdi-eye</v-icon></v-btn></td>
                        <td class="text-center cf f18"><v-btn @click="delete_certificate(item.cert_id)" icon><v-icon color="error">mdi-delete</v-icon></v-btn></td>

                    </tr>
                </tbody>
            </v-simple-table>
        </v-card-text>
        <AddCertificate/>
    </v-card>
</template>

<script>
    import AddCertificate from "@/components/dash/Certificates/AddCertificate";
    export default {
        name: "Certificates",
        components: {AddCertificate},
        data(){
            return{
                certificates:[]
            }
        },
        methods:{
            get_certificates()
            {
                this.$axios.get('api-dash/get-certificates').then(res=>{
                    this.certificates = res.data;
                }).catch(err=>{
                    console.log(err)
                })
            },
            delete_certificate(id)
            {
                this.$confirm("هل انت متاكد من الحذف ؟").then(() => {
                    this.$axios.post('api-dash/delete-certificate',{cert_id:id}).then(res=>{
                        this.get_certificates();
                    })
                });
            }
        },
        created()
        {
            this.get_certificates();
        }
    }
</script>

<style scoped>

</style>