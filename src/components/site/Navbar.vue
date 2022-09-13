<template>
    <div>
        <nav v-if="!$store.state.en" class="mainmenu-area stricky">
            <div class="container">
                <div class="navigation pull-right">
                    <div class="nav-header">
                        <ul class="rtl cf">
                            <li>
                                <a href="/">الرئيسية</a>
                            </li>
                            <li class="mr-2"><router-link to="/news">الاخبار</router-link> </li>
                            <li class="dropdown">
                                <a href="#">الاقسام</a>
                                <ul class="submenu">
                                    <li v-for="(sec,i) in $store.state.site.sections.sections" :key="'sec_in_nav_'+i">
                                        <v-hover
                                                v-slot="{ hover }"
                                                open-delay="100"
                                        >
                                            <router-link :to="sec.section_slug">

                                                <v-icon  :class="hover?'rotate90left':''" :dark="hover">mdi-cog</v-icon>
                                                <span class="mr-2">{{sec.section_title}}</span>

                                            </router-link>
                                        </v-hover>
                                    </li>

                                </ul>
                            </li>
                            <li class="dropdown">
                                <a href="#">المنتجات</a>
                                <ul class="submenu">
                                    <li  v-for="(prod,p_i) in $store.state.site.productions.productions" :key="'prod_in_nav_'+p_i">
                                        <v-hover
                                                v-slot="{ hover }"
                                                open-delay="100"
                                        >
                                            <router-link :to="prod.prod_slug">

                                                <v-icon :class="hover?'me-mr-5':''" :dark="hover">mdi-text-box-check-outline</v-icon>
                                                <span class="mr-2">{{prod.prod_title}}</span>

                                            </router-link>
                                        </v-hover>
                                    </li>

                                </ul>
                            </li>

                            <li class="dropdown">
                                <a href="#">المناقصات التجارية</a>
                                <ul class="submenu">
                                    <li  v-for="(tend,ten_i) in $store.state.site.tenders.tenders" :key="'ten_in_nav_'+ten_i">
                                        <v-hover
                                                v-slot="{ hover }"
                                                open-delay="100"
                                        >
                                            <router-link :to="tend.tender_slug">

                                                <v-icon :class="hover?'me-mr-5 filpX1': 'filpX1'" :dark="hover">mdi-hand-extended</v-icon>
                                                <span class="mr-2">{{tend.tender_title}}</span>

                                            </router-link>
                                        </v-hover>
                                    </li>
                                </ul>
                            </li>
                            <li class="dropdown">
                                <a href="#">معامل الشركة</a>
                                <ul class="submenu">
                                    <li  v-for="(fact,fac_i) in $store.state.site.labs.labs" :key="'lab_in_nav_'+fac_i">
                                        <v-hover
                                                v-slot="{ hover }"
                                                open-delay="100"
                                        >
                                            <router-link :to="fact.lab_slug">

                                                <v-icon :class="hover?'me-mr-5 filpX1': 'filpX1'" :dark="hover">mdi-factory</v-icon>
                                                <span class="mr-2">{{fact.lab_name}}</span>

                                            </router-link>
                                        </v-hover>
                                    </li>
                                </ul>
                            </li>

                            <li><a href="contact.html">تواصل معنا</a></li>
                        </ul>
                    </div>
                    <div class="nav-footer">
                        <button><i class="fa fa-bars"></i></button>
                    </div>
                </div>
                <div class="search-box pull-left">
                    <form action="#">
                        <input type="text" placeholder="بحث..." class="text-right cf">
                        <button type="submit"><i class="fa fa-search"></i></button>
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
                                <router-link to="/">HOME</router-link>
                            </li>
                            <li class="ml-2"><a href="about.html">NEWS</a></li>
                            <li class="dropdown">
                                <a href="#">SECTIONS</a>
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
                                <a href="#">PRODUCTIONS</a>
                                <ul class="submenu">
                                    <li  v-for="(prod,p_i) in $store.state.site.productions.productions" :key="'prod_in_nav_'+p_i">
                                        <v-hover
                                                v-slot="{ hover }"
                                                open-delay="100"
                                        >
                                            <router-link :to="prod.prod_slug">

                                                <v-icon :class="hover?'me-ml-5':''" :dark="hover">mdi-text-box-check-outline</v-icon>
                                                <span class="ml-2">{{prod.prod_name_en}}</span>

                                            </router-link>
                                        </v-hover>
                                    </li>

                                </ul>
                            </li>

                            <li class="dropdown">
                                <a href="#">TENDERS</a>
                                <ul class="submenu">
                                    <li  v-for="(tend,ten_i) in $store.state.site.tenders.tenders" :key="'ten_in_nav_'+ten_i">
                                        <v-hover
                                                v-slot="{ hover }"
                                                open-delay="100"
                                        >
                                            <router-link :to="tend.tender_slug">

                                                <v-icon :class="hover?'me-ml-5': ''" :dark="hover">mdi-hand-extended</v-icon>
                                                <span class="ml-2">{{tend.tender_name_en}}</span>

                                            </router-link>
                                        </v-hover>
                                    </li>
                                </ul>
                            </li>
                            <li class="dropdown">
                                <a href="#">PLANTS</a>
                                <ul class="submenu">
                                    <li  v-for="(fact,fac_i) in $store.state.site.labs.labs" :key="'lab_in_nav_'+fac_i">
                                        <v-hover
                                                v-slot="{ hover }"
                                                open-delay="100"
                                        >
                                            <router-link :to="fact.lab_slug">

                                                <v-icon :class="hover?'me-ml-5': ''" :dark="hover">mdi-factory</v-icon>
                                                <span class="ml-2">{{fact.lab_name_en}}</span>

                                            </router-link>
                                        </v-hover>
                                    </li>
                                </ul>
                            </li>

                            <li><a href="contact.html">CONTACT US</a></li>
                        </ul>
                    </div>
                    <div class="nav-footer">
                        <button><i class="fa fa-bars"></i></button>
                    </div>
                </div>
                <div class="search-box pull-right">
                    <form action="#">
                        <input type="text" placeholder="Search..." class="text-left">
                        <button type="submit"><i class="fa fa-search"></i></button>
                    </form>
                </div>
            </div>
        </nav>
    </div>

</template>

<script>
    export default {
        name: "Navbar"
    }
</script>

<style scoped>

</style>