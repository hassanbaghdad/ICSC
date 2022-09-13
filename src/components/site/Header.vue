<template>
<div>
    <header class="header cf" v-if="!$store.state.en">
        <div class="container">
            <div class="header-right-info pull-left clearfix">
                <div class="single-header-info">
                    <div class="icon-box">
                        <div class="inner-box">
                            <i class="flaticon-interface"></i>
                        </div>
                    </div>
                    <div class="content">
                        <span>البريد</span>
                        <p><a class="color-gray" :href="'mailto://'+$store.state.site.info.site_email">{{$store.state.site.info.site_email}}</a></p>
                    </div>
                </div>
                <div class="single-header-info">
                    <div class="icon-box">
                        <div class="inner-box">
                            <i class="flaticon-telephone"></i>
                        </div>
                    </div>
                    <div class="content">
                        <span>موبايل</span>
                        <p><a class="color-gray" :href="'tel://'+$store.state.site.info.site_phone">{{$store.state.site.info.site_phone}}</a></p>
                    </div>
                </div>
                <!--                <div class="single-header-info">-->
                <!--                    <a href="appointment.html" class="thm-btn">Appointment</a>-->
                <!--                </div>-->
            </div>
            <div class="logo pull-right">
                <a href="index.html">
                    <img src="img/resources/logo-ar.png" alt="Awesome Image" />
                </a>
            </div>

        </div>
    </header>
    <header class="header" v-if="$store.state.en">
            <div class="container">
                <div class="logo pull-left">
                    <a href="index.html">
                        <img src="img/resources/logo.png" alt="Awesome Image" />
                    </a>
                </div>
                <div class="header-right-info pull-right clearfix">
                    <div class="single-header-info">
                        <div class="icon-box">
                            <div class="inner-box">
                                <i class="flaticon-interface"></i>
                            </div>
                        </div>
                        <div class="content">
                            <h3>EMAIL</h3>
                            <p><a class="color-gray" :href="'mailto://'+$store.state.site.info.site_email">{{$store.state.site.info.site_email}}</a></p>

                        </div>
                    </div>
                    <div class="single-header-info">
                        <div class="icon-box">
                            <div class="inner-box">
                                <i class="flaticon-telephone"></i>
                            </div>
                        </div>
                        <div class="content">
                            <h3>Call Now</h3>
                            <p><a class="color-gray" :href="'tel://'+$store.state.site.info.site_phone">{{$store.state.site.info.site_phone}}</a></p>

                        </div>
                        <div class="single-header-info">
                        </div>
                    </div>
                </div>
            </div>
        </header>
</div>

</template>

<script>
    export default {
        name: "Header"
    }
</script>

<style scoped>

</style>