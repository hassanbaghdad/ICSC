<template>
    <v-app>
        <!-- Preloader -->

        <div v-if="$store.state.loading" class="preloader">
            <div class="myloading">
                <div class="cover-loading">
                    <div class="cog cog_blue">
                        <v-icon size="90" color="#006caa">mdi-cog</v-icon>
                    </div>
                    <div class="cog red_cog">
                        <v-icon size="70" color="#ed1c24">mdi-cog</v-icon>
                    </div>
                    <div class="cog green_cog">
                        <v-icon size="50" color="#529546">mdi-cog</v-icon>
                    </div>
                    <div class="cog title_cog text-center">
                        <div class="cf f18b">الشركة العامة للسمنت العراقية</div>
                        <div class="f18b">Iraqi Cement State Co. </div>
                    </div>

                </div>
            </div>
        </div>

        <TopBar/>
        <Header/>
        <Navbar/>
        <RouterView/>
        <Footer/>
    </v-app>
</template>

<script>
    import TopBar from "@/components/site/TopBar";
    import Header from "@/components/site/Header";
    import Navbar from "@/components/site/Navbar";

    import Footer from "@/components/site/Footer";
    export default {
        name: "Client",
        components: {
            Footer,
           Navbar,
          Header,
            TopBar
        }
    }
</script>

<style>
.myloading{
    background-color: #ffffff;
    /*background-image: url(../img/icons/preloader.GIF);*/
    background-position: center center;
    background-repeat: no-repeat;
    height: 100%;
    left: 0px;
    top: 0px;
    position: fixed;
    width: 100%;
    z-index: 999999;
    justify-content: center;
    align-items: center;

}
.cover-loading{
    position: relative;
    z-index: 99999999;
    height: 100%;
    width: 300px;
    margin: auto;
    justify-content: center;
    align-items: center;
}
.cog{
    position: absolute;
    top: 40%;
    left: 25%;
    -ms-transform: translate(-5%, -50%);
    transform: translate(-23%, -50%);

}
.cog_blue{
    animation: rotateR linear 5s infinite;
    margin-left: 20px;
}
.red_cog{
    margin-top: 70px;
    animation: rotateL linear 3.5s infinite;
}
.green_cog{
    margin-top: 50px;
    margin-left: 90px;
    animation: rotateL linear 3s infinite;
}
.title_cog{
    width: 100%;
    margin-top: 170px;
}
@keyframes rotateR {
    from{
        transform: rotate(0deg);
    }
    to{
        transform: rotate(360deg);
    }
}
@keyframes rotateL {
    from{
        transform: rotate(0deg);
    }
    to{
        transform: rotate(-360deg);
    }
}


</style>