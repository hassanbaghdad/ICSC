<template>
    <section class="fact-counter-wrapper sec-padding">
        <div class="container">
            <div class="row justify-center">
                <div class="col-lg-12 text-center">
                    <div class="single-fact">
                        <div class="icon-box">
                            <i class="flaticon-light-bulb-lamp"></i>
                        </div>
                        <span class="timer" data-from="1" data-to="50" data-speed="2000" data-refresh-interval="50">50</span>
                        <p v-if="$store.state.en">Years Experience</p>
                        <p v-if="!$store.state.en" class="f20b cf">سنوات الخبرة</p>
                    </div>
                    <div class="single-fact">
                        <div class="icon-box">
                           <v-icon dark size="120">mdi-account-multiple</v-icon>
                        </div>
                        <span class="timer" data-from="1" data-to="8000" data-speed="2000" data-refresh-interval="50">155</span>
                        <p v-if="$store.state.en">Employees</p>
                        <p v-if="!$store.state.en" class="f20b cf">الموظفين</p>
                    </div>
                    <div class="single-fact">
                        <div class="icon-box">

                            <v-icon dark size="120">mdi-certificate-outline</v-icon>
                        </div>
                        <span class="timer" data-from="1" data-to="10" data-speed="1000" data-refresh-interval="50">2200</span>
                        <p v-if="$store.state.en">Quality Certificates</p>
                        <p v-if="!$store.state.en" class="f20b cf">شهادات الجودة</p>
                    </div>
                    <div class="single-fact">
                        <div class="icon-box">
                            <v-icon dark size="120">mdi-factory</v-icon>
                        </div>
                        <span class="timer" data-from="1" data-to="18" data-speed="1100" data-refresh-interval="50">2200</span>
                        <p v-if="$store.state.en">Factories</p>
                        <p v-if="!$store.state.en" class="f20b cf">المعامل</p>
                    </div>

                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: "Counters"
    }
</script>

<style scoped>

</style>