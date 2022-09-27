<template>
    <!-- App.vue -->
    <v-app class="rtl">
        <Drawer/>


        <v-app-bar app dark>
            <v-app-bar-nav-icon @click="$store.state.dash.drawer=!$store.state.dash.drawer"></v-app-bar-nav-icon>
        </v-app-bar>

        <!-- Sizes your content based upon application components -->
        <v-main>

            <!-- Provides the application the proper gutter -->
            <div>

                <!-- If using vue-router -->
                <router-view></router-view>
            </div>
        </v-main>

        <v-footer app>
            <!-- -->
        </v-footer>
    </v-app>
</template>

<script>

    import Drawer from "@/components/dash/Drawer";
    export default {
        name: "Dashboard",
        components: {
            Drawer
        },
        created(){
            var dash = this.$route.path.split('/dashboard/').length;
            if(dash > 0)
            {
                this.$vuetify.rtl = true;
            }

        }

    }
</script>

<style>
    .v-text-field input{
        text-align: center !important;
        font-size: 20px;
    }
    .v-label
    {
        text-align: center !important;
    }
</style>