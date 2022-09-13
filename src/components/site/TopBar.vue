<template>
    <div>
        <section class="top-bar" v-if="!$store.state.en">
            <div class="container">
                <div class="social-icons pull-left">
                    <ul>
                        <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                        <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                        <li><a href="#"><i class="fa fa-youtube"></i></a></li>
                        <li v-if="!$store.state.en"><a @click="$store.state.en=true">ENGLISH</a></li>
                        <li v-if="$store.state.en"><a @click="$store.state.en=false">عربي</a></li>
                    </ul>
                </div>
                <div class="left-text pull-right">
                    <p class="cf f14"><span>اوقات الدوام:</span> من السبت - الاحد 8 ص الى 5 م</p>
                </div>
                <!-- /.left-text -->

                <!-- /.social-icons -->
            </div>
        </section>
        <section v-if="$store.state.en" class="top-bar">
            <div class="container">
                <div class="left-text pull-left">
                    <p><span>Opening Hours :</span> Monday to Saturday - 8am to 5pm</p>
                </div>
                <!-- /.left-text -->
                <div class="social-icons pull-right">
                    <ul class="rtl">
                        <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                        <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                        <li><a href="#"><i class="fa fa-youtube"></i></a></li>
                        <li v-if="!$store.state.en"><a @click="$store.state.en=true">ENGLISH</a></li>
                        <li v-if="$store.state.en"><a @click="$store.state.en=false">عربي</a></li>
                    </ul>
                </div>
                <!-- /.social-icons -->
            </div>
        </section>
    </div>

</template>

<script>
    export default {
        name: "TopBar"
    }
</script>

<style scoped>

</style>