<template>

    <section class="featured-section testimonials-wrapper">
        <div class="container">
            <div class="sec-title text-center mt-10">
                <h2 v-if="!$store.state.en" class="color-white cf f24b"> المناقصات التجارية</h2>
                <h2 v-if="$store.state.en" class="color-white">Commercial Tenders</h2>

                <span class="decor"><span class="inner"></span></span>
            </div>
            <div class="col col-12 col-md-6 col-lg-4 pa-6" v-for="ten in tenders" :key="'tttender_'+ten">
                <div class="item" >
                    <div class="single-testimonaials"  >
                        <router-link :to="'/tenders'">
                            <div class="qoute-box pa-4" style="width: 100px;height: 100px;boder:3px solid black">
                                <v-img src="img/bid.png"/>
                            </div>

                            <h3 v-if="!$store.state.en" class="cf f22b">{{ten.tender_title}}</h3>
                            <h3 v-if="$store.state.en" class="cf f22b">{{ten.tender_title_en}}</h3>

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