<template>
    <v-navigation-drawer
            dark
            color="#363636"
            app right v-model="$store.state.dash.drawer"
            width="300"
    >
        <v-card

                height="100%"
        >
            <v-card dark color="warning" height="150">
                <v-card-text class="justify-center">
                    <v-list class="text-center">
                            <v-icon size="50">mdi-key</v-icon>

                        <v-list-item-title>
                            <b><span class="f20b cf">{{$store.state.dash.user.name}}</span></b>
                        </v-list-item-title>
                        <v-list-item-subtitle>
                            {{$store.state.dash.user.email}}
                        </v-list-item-subtitle>
                    </v-list>



                </v-card-text>

            </v-card>
            <v-list>

                <v-list-item link dense to="posts">
                    <v-list-item-icon>
                        <v-icon color="blue" size="30" class="float-right text-right">mdi-earth</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title>
                            <span class="cf f16 mr-2">المنشورات</span>
                        </v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item link dense to="sections">
                    <v-list-item-icon>
                        <v-icon color="orange" size="30" class="float-right text-right">mdi-cogs</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title>
                            <span class="cf f16 mr-2">الاقسام</span>
                        </v-list-item-title>
                    </v-list-item-content>
                </v-list-item>

                <v-list-item link dense to="plants">
                    <v-list-item-icon>
                        <v-icon size="30"  class="float-right text-right">mdi-factory</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title>
                            <span class="cf f16 mr-2">المعامل</span>
                        </v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item link dense to="productions">
                    <v-list-item-icon>
                        <v-icon size="30"  class="float-right text-right">mdi-cube-outline</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title>
                            <span class="cf f16 mr-2">المنتجات</span>
                        </v-list-item-title>
                    </v-list-item-content>
                </v-list-item>

                <v-list-item link dense to="tenders">
                    <v-list-item-icon>
                        <v-icon size="30" color="pink" class="float-right text-right">mdi-gavel</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title>
                            <span class="cf f16 mr-2">المناقصات</span>
                        </v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item link dense to="messages">
                    <v-list-item-icon>
                        <v-icon size="30" color="success"  class="float-right text-right">mdi-email-outline</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title>
                            <span class="cf f16 mr-2">الرسائل</span>
                        </v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item link dense to="settings">
                    <v-list-item-icon>
                        <v-icon size="30" dark color="warning"  class="float-right text-right">mdi-cogs</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title>
                            <span class="cf f16 mr-2">الاعدادات</span>
                        </v-list-item-title>
                    </v-list-item-content>
                </v-list-item>


            </v-list>

            <template v-slot:append>
                <div class="pa-2">
                    <v-btn block>
                        Logout
                    </v-btn>
                </div>
            </template>
        </v-card>
    </v-navigation-drawer>
</template>

<script>
    export default {
        name: "Drawer",
        data(){
            return{
                items: [
                    { title: 'Dashboard', icon: 'mdi-view-dashboard' },
                    { title: 'Account', icon: 'mdi-account-box' },
                    { title: 'Admin', icon: 'mdi-gavel' },
                ],
            }
        }
    }
</script>

<style scoped>

</style>