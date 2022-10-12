<template>
    <section class="sponsors-section mt-10" data-bg-color="white">
        <div class="container" v-if="success" >
            <carousel :items="$vuetify.breakpoint.xs?1:4" :autoplay="true" :nav="false">
                <router-link v-for="(lab,i) in length" :key="'slide_lab_i_'+i" :to="'/plants/'+labs[i].lab_slug" :class="$store.state.en?'':'rtl'">
                   <div class="ma-2 pa-2">
                       <v-icon v-if="!$store.state.en&&success" size="40" class="ml-2 mr-2">mdi-factory</v-icon>
                       <v-icon v-if="$store.state.en&&success" size="40" class="ml-2 mr-2">mdi-factory</v-icon>
                       <span v-if="!$store.state.en&&success" style="color: #525151" class="cf f16">{{labs[i].lab_name}}</span>
                       <span v-if="$store.state.en&&success" style="color: #525151" class="cf f16">{{labs[i].lab_name_en}}</span>


                   </div>
                </router-link>
            </carousel>
<!--            <ul v-if="success"  class="slider">-->
<!--                <li v-for="(lab,i) in length" :key="'slide_lab_i_'+i">-->
<!--                    <router-link v-if="success" :to="'/plants/'+labs[i].lab_slug" :class="$store.state.en?'':'rtl'">-->
<!--                        <v-icon v-if="$store.state.en&&success" size="40" class="ml-2 mr-2">mdi-factory</v-icon>-->
<!--                        <span v-if="!$store.state.en&&success" style="color: #735d00" class="cf f16">{{labs[i].lab_name}}</span>-->
<!--                        <span v-if="$store.state.en&&success" style="color: #735d00" class="cf f16">{{labs[i].lab_name_en}}</span>-->
<!--                        <v-icon v-if="!$store.state.en&&success" size="40" class="ml-2 mr-2">mdi-factory</v-icon>-->

<!--                    </router-link>-->
<!--                </li>-->

<!--            </ul>-->
        </div>
    </section>
</template>

<script>
    import carousel from 'vue-owl-carousel'
    export default {
        name: "Brands",
        components:{
            carousel
        },
        data(){
            return{
                labs:this.$store.state.site.labs.labs,
                success:false,
                length:0
            }
        },
        computed:{
            get_labs:function () {
                return this.$store.state.site.labs.labs
            }
        },
        watch:{
            get_labs:function (new_labs) {
                this.labs = new_labs;
                this.length = new_labs.length;
                this.success = true;
            }
        },

    }
</script>

<style scoped>

</style>