<template>
    <section class="blog-home sec-padding">
        <div class="container">
            <div class="sec-title text-center">
                <h2 v-if="!$store.state.en" class="f24b cf">اخر الاخبار</h2>
                <h2 v-if="$store.state.en">Latest News</h2>
                <span class="decor">
					<span class="inner"></span>
                </span>
            </div>
            <div class="row" v-if="!$store.state.en">
                <div class="col-md-4 col-sm-12 sm-col5-center mb-sm-40" v-for="(ne,i) in $store.state.site.latest_news.latest_news.filter(it=>it.post_title.match($route.params.text))" :key="'latest_news_main_'+i">
                    <div class="single-blog-post">
                        <div class="img-box">
                            <img :src="$axios.defaults.baseURL+'/images/'+ne.post_image" style="height: 200px;width: 350px" alt="">
                            <div class="overlay">
                                <div class="box">
                                    <div class="content">
                                        <ul>
                                            <li><router-link :to="'/news/'+ne.post_slug"><i class="fa fa-eye"></i></router-link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="content-box">
                            <div :class="!$store.state.en?'date-box float-right':'date-box'">
                                <div class="inner">
                                    <div class="date">
                                        {{ne.post_date.substr(5,6)}}
                                    </div>
                                    <div class="comment">
                                        <i class="fa fa-eye"></i> {{ne.post_views}}
                                    </div>
                                </div>
                            </div>
                            <div class="content" style="width: 100%">
                                <router-link v-if="$store.state.en" :to="'/new/'+ne.post_slug"><h3>{{ne.post_title_en}}</h3></router-link>
                                <router-link v-if="!$store.state.en" :to="'/new/'+ne.post_slug"><h3 class="text-right cf f20b">{{ne.post_title}}</h3></router-link>
                                <p v-if="$store.state.en">{{ne.post_desc_en.substr(0,30)}} ...</p>
                                <p v-if="!$store.state.en" class="cf f14 text-justify rtl">{{ne.post_desc.substr(0,30)}} ...</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div class="row" v-if="$store.state.en">
                <div class="col-md-4 col-sm-12 sm-col5-center mb-sm-40" v-for="(ne,i) in $store.state.site.latest_news.latest_news.filter(it=>it.post_title_en.match($route.params.text))" :key="'latest_news_main_'+i">
                    <div class="single-blog-post">
                        <div class="img-box">
                            <img :src="$axios.defaults.baseURL+'/images/'+ne.post_image" style="height: 200px;width: 350px" alt="">
                            <div class="overlay">
                                <div class="box">
                                    <div class="content">
                                        <ul>
                                            <li><router-link :to="'/news/'+ne.post_slug"><i class="fa fa-eye"></i></router-link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="content-box">
                            <div :class="!$store.state.en?'date-box float-right':'date-box'">
                                <div class="inner">
                                    <div class="date">
                                        {{ne.post_date.substr(5,6)}}
                                    </div>
                                    <div class="comment">
                                        <i class="fa fa-eye"></i> {{ne.post_views}}
                                    </div>
                                </div>
                            </div>
                            <div class="content" style="width: 100%">
                                <router-link v-if="$store.state.en" :to="'/new/'+ne.post_slug"><h3>{{ne.post_title_en}}</h3></router-link>
                                <router-link v-if="!$store.state.en" :to="'/new/'+ne.post_slug"><h3 class="text-right cf f20b">{{ne.post_title}}</h3></router-link>
                                <p v-if="$store.state.en">{{ne.post_desc_en.substr(0,30)}} ...</p>
                                <p v-if="!$store.state.en" class="cf f14 text-justify rtl">{{ne.post_desc.substr(0,30)}} ...</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    </section>
</template>

<script>
    export default {
        name: "Search",
        data(){
            return{
                text:''
            }

        },
        created(){
            console.log(this.$route.params.text)
        }

    }
</script>

<style scoped>

</style>