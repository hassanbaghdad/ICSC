<template>
    <div>
        <section class="top-bar" v-if="!$store.state.en">
            <div class="container">
                <div class="social-icons pull-left">
                    <ul>
                        <li><a :href="$store.state.site.info.facebook"><i class="fa fa-facebook"></i></a></li>
                        <li><a :href="$store.state.site.info.youtube"><i class="fa fa-youtube"></i></a></li>
                        <li v-if="!$store.state.en"><a @click="en">ENGLISH</a></li>
                        <li v-if="$store.state.en"><a @click="ar">عربي</a></li>
                    </ul>
                </div>
                <div class="left-text pull-right">

                </div>
                <!-- /.left-text -->

                <!-- /.social-icons -->
            </div>
        </section>
        <section v-if="$store.state.en" class="top-bar">
            <div class="container">
                <div class="left-text pull-left">

                </div>
                <!-- /.left-text -->
                <div class="social-icons pull-right">
                    <ul class="rtl">
                        <li class="mr-1"><a :href="$store.state.site.info.facebook"><i class="fa fa-facebook"></i></a></li>
                        <li class="mr-1"><a :href="$store.state.site.info.youtube"><i class="fa fa-youtube"></i></a></li>
                        <li class="mr-1" v-if="!$store.state.en"><a @click="en">ENGLISH</a></li>
                        <li class="mr-1" v-if="$store.state.en"><a @click="ar">عربي</a></li>
                    </ul>
                </div>
                <!-- /.social-icons -->
            </div>
        </section>
    </div>

</template>

<script>
    export default {
        name: "TopBar",
        methods:{
            en()
            {
                    localStorage.setItem("en","true");
                    this.$store.state.en = true;
                    this.$router.go(0)	// Refreshes page


            },
            ar(){
                localStorage.setItem("en","false");
                this.$store.state.en = false;
                this.$router.go(0)	// Refreshes page

            }
        }
    }
</script>

<style scoped>

</style>