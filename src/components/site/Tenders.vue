<template>

    <section class=" testimonials-wrapper">
        <div class="container">
            <div class="sec-title text-center mt-10">
                <h2 v-if="!$store.state.en" class="cf f24b" style="color: #dc1d24"> المناقصات التجارية</h2>
                <h2 v-if="$store.state.en" style="color: #dc1d24">Commercial Tenders</h2>

                <span class="decor"><span class="inner"></span></span>
            </div>
            <div class="col col-12 col-md-6 col-lg-4 pa-6" v-for="(ten,i) in tenders" :key="'tttender___'+i">
                <div class="item" >
                    <div class="single-testimonaials"  >
                        <router-link :to="'/tenders'">
                            <div class="qoute-box" style="width: 100px;height: 100px;broder:3px solid white">
                                <v-icon size="80" color="#005794" class="ma-2">mdi-finance</v-icon>
                            </div>

                            <div v-if="!$store.state.en" class="cf f22b white--text">{{ten.tender_title}}</div>
                            <div v-if="$store.state.en" class="cf f22b white--text">{{ten.tender_title_en}}</div>

                        </router-link>

                    </div>
                </div>
            </div>

        </div>
    </section>
</template>

<script>
    export default {
        name: "Tenders",
        data(){
            return{
                tenders:[
                    {tender_title:'استيرادية',tender_title_en:'Import Tender'},
                    {tender_title:'المحلية',tender_title_en:'Local Tender'},
                    {tender_title:' المواد الاولية',tender_title_en:'Raw materials'},
                ]
            }
        }
    }
</script>

<style scoped>

</style>