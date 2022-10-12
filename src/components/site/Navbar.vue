<template>
    <div>
        <nav v-if="!$store.state.en" class="mainmenu-area stricky">
            <div class="container">
                <div class="navigation pull-right rtl" >
                    <div class="nav-header" style="left: auto !important;height: auto;">
                        <ul class="rtl cf">
                            <li>
                                <a href="/">الرئيسية</a>
                            </li>
                            <li class="mr-2"><router-link to="/news">الاخبار</router-link> </li>
                            <li class="dropdown">
                                <router-link to="/sections">الاقسام</router-link>
                                <ul class="submenu">
                                    <li v-for="(sec,i) in $store.state.site.sections.sections" :key="'sec_in_nav_'+i">
                                        <v-hover
                                                v-slot="{ hover }"
                                                open-delay="100"
                                        >
                                            <router-link :to="'/sections/'+sec.section_slug">

                                                <v-icon  :class="hover?'rotate90left':''" :dark="hover">mdi-cog</v-icon>
                                                <span class="mr-2">{{sec.section_title}}</span>

                                            </router-link>
                                        </v-hover>
                                    </li>

                                </ul>
                            </li>
                            <li class="dropdown">
                                <router-link to="/productions">المنتجات</router-link>
                                <ul class="submenu">
                                    <li  v-for="(prod,p_i) in $store.state.site.productions.productions" :key="'prod_in_nav_'+p_i">
                                        <v-hover
                                                v-slot="{ hover }"
                                                open-delay="100"
                                        >
                                            <router-link to="/productions">

                                                <v-icon :class="hover?'me-mr-5':''" :dark="hover">mdi-text-box-check-outline</v-icon>
                                                <span class="mr-2">{{prod.prod_title}}</span>

                                            </router-link>
                                        </v-hover>
                                    </li>

                                </ul>
                            </li>

                            <li class="dropdown">
                                <router-link to="/tenders">المناقصات التجارية</router-link>
                                <ul class="submenu">
                                    <li  v-for="(tend,ten_i) in $store.state.site.tenders.tenders" :key="'ten_in_nav_'+ten_i">
                                        <v-hover
                                                v-slot="{ hover }"
                                                open-delay="100"
                                        >
                                            <router-link to="/tenders">

                                                <v-icon :class="hover?'me-mr-5 filpX1': 'filpX1'" :dark="hover">mdi-hand-extended</v-icon>
                                                <span class="mr-2">{{tend.tender_title}}</span>

                                            </router-link>
                                        </v-hover>
                                    </li>
                                </ul>
                            </li>
                            <li class="dropdown">
                                <router-link to="/plants">معامل الشركة</router-link>
                                <ul class="submenu">
                                    <li  v-for="(fact,fac_i) in $store.state.site.labs.labs" :key="'lab_in_nav_'+fac_i">
                                        <v-hover
                                                v-slot="{ hover }"
                                                open-delay="100"
                                        >
                                            <router-link :to="'/plants/'+fact.lab_slug">

                                                <v-icon :class="hover?'me-mr-5 filpX1': 'filpX1'" :dark="hover">mdi-factory</v-icon>
                                                <span class="mr-2">{{fact.lab_name}}</span>

                                            </router-link>
                                        </v-hover>
                                    </li>
                                </ul>
                            </li>

                            <li><router-link to="/contact-us">تواصل معنا</router-link></li>
                        </ul>
                    </div>
                    <div class="nav-footer">
                        <button><i class="fa fa-bars"></i></button>
                    </div>
                </div>
                <div class="search-box pull-left">
                    <form action="#">
                        <input v-model="text" type="text" placeholder="بحث..." class="text-right cf">
                        <button @click="search" type="button"><i class="fa fa-search"></i></button>
                    </form>
                </div>
            </div>
        </nav>
        <nav v-if="$store.state.en" class="mainmenu-area stricky">
            <div class="container">
                <div class="navigation pull-left">
                    <div class="nav-header">
                        <ul>
                            <li>
                                <a href="/">HOME</a>
                            </li>
                            <li class="ml-2"><router-link to="/news">NEWS</router-link></li>
                            <li class="dropdown">
                                <router-link to="/sections">SECTIONS</router-link>
                                <ul class="submenu">
                                    <li v-for="(sec,i) in $store.state.site.sections.sections" :key="'sec_in_nav_'+i">
                                        <v-hover
                                                v-slot="{ hover }"
                                                open-delay="100"
                                        >
                                            <router-link :to="sec.section_slug">

                                                <v-icon  :class="hover?'rotate90left':''" :dark="hover">mdi-cog</v-icon>
                                                <span class="ml-2">{{sec.section_title_en}}</span>

                                            </router-link>
                                        </v-hover>
                                    </li>

                                </ul>
                            </li>
                            <li class="dropdown">
                                <router-link to="/productions">PRODUCTIONS</router-link>
                                <ul class="submenu">
                                    <li  v-for="(prod,p_i) in $store.state.site.productions.productions" :key="'prod_in_nav_'+p_i">
                                        <v-hover
                                                v-slot="{ hover }"
                                                open-delay="100"
                                        >
                                            <router-link to="/productions">

                                                <v-icon :class="hover?'me-ml-5':''" :dark="hover">mdi-text-box-check-outline</v-icon>
                                                <span class="ml-2">{{prod.prod_title_en}}</span>

                                            </router-link>
                                        </v-hover>
                                    </li>

                                </ul>
                            </li>

                            <li class="dropdown">
                                <router-link to="tenders">TENDERS</router-link>
                                <ul class="submenu">
                                    <li  v-for="(tend,ten_i) in $store.state.site.tenders.tenders" :key="'ten_in_nav_'+ten_i">
                                        <v-hover
                                                v-slot="{ hover }"
                                                open-delay="100"
                                        >
                                            <router-link to="/tenders">

                                                <v-icon :class="hover?'me-ml-5': ''" :dark="hover">mdi-hand-extended</v-icon>
                                                <span class="ml-2">{{tend.tender_title_en}}</span>

                                            </router-link>
                                        </v-hover>
                                    </li>
                                </ul>
                            </li>
                            <li class="dropdown">
                                <router-link to="/plants">PLANTS</router-link>
                                <ul class="submenu">
                                    <li  v-for="(fact,fac_i) in $store.state.site.labs.labs" :key="'lab_in_nav_'+fac_i">
                                        <v-hover
                                                v-slot="{ hover }"
                                                open-delay="100"
                                        >
                                            <router-link :to="'/plants/'+fact.lab_slug">

                                                <v-icon :class="hover?'me-ml-5': ''" :dark="hover">mdi-factory</v-icon>
                                                <span class="ml-2">{{fact.lab_name_en}}</span>

                                            </router-link>
                                        </v-hover>
                                    </li>
                                </ul>
                            </li>

                            <li><router-link to="/contact-us">CONTACT US</router-link></li>
                        </ul>
                    </div>
                    <div class="nav-footer">
                        <button><i class="fa fa-bars"></i></button>
                    </div>
                </div>
                <div class="search-box pull-right">
                    <form action="#">
                        <input v-model="text" type="text" placeholder="Search..." class="text-left">
                        <button @click="search" type="button"><i class="fa fa-search"></i></button>
                    </form>
                </div>
            </div>
        </nav>
    </div>

</template>

<script>
    export default {
        name: "Navbar",
        data(){
            return{
                text:''
            }
        },
        methods:{
            search(){
                this.$router.push('/search/'+this.text);
            }
        }
    }
</script>

<style scoped>

</style>