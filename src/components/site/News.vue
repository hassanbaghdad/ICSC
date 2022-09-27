<template>
    <section class="sec-padding meet-doctors" data-bg-color="#f7f7f7">
        <div class="container">
            <div class="sec-title text-center">
                <h2 class="f24b cf">اخر الاخبار</h2>
                <p>Lorem ipsum is a dummy text it will use for subtitle here</p>
                <span class="decor">
					<span class="inner"></span>
                </span>
            </div>
            <div class="clearfix owl-ar">
                <div class="team-carousel team-members owl-carousel owl-theme" >
                    <div  class="item" v-for="(item,i) in length" :key="'new_slider_'+i">
                        <div class="single-team-member">
                            <div class="img-box">
                                <img v-if="success"  :src="$axios.defaults.baseURL+'/images/'+news[i].post_image" style="width: 300px;height: 150px" />
                                <div class="overlay">
                                    <div class="box">
                                        <div class="content">
                                            <router-link v-if="success" :to="'/news/'+news[i].post_slug" class="thm-btn cf f16">عرض</router-link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <h3  class="cf f20b text-right" v-if="success&&!$store.state.en">
                                {{news[i].post_title}}
                            </h3>
                            <h3 v-if="success&&$store.state.en">
                                {{news[i].post_title_en}}
                            </h3>

                            <span v-if="success">{{news[i].post_date.substr(0,10)}}</span>
                            <p v-if="success&&$store.state.en" class="text-justify">{{news[i].post_desc_en.substr(0,100)}}...</p>
                            <p v-if="success&&!$store.state.en" class="text-justify rtl cf f14">{{news[i].post_desc.substr(0,100)}}...</p>

                        </div>
                    </div>

                </div>
            </div>

        </div>
    </section>

</template>

<script>
    import carousel from 'vue-owl-carousel'
    export default {
        name: "News",
        components:{

        },
        data(){
            return{
                news:this.$store.state.site.posts.posts,
                length:3,
                success:false
            }
        },
        computed:{
            get_posts:function () {
                return this.$store.state.site.posts.posts
            }
        },
        watch:{
            get_posts:function (new_posts) {
                this.news = new_posts;
                this.length = new_posts.length;
                this.success = true;
                console.log(this.length)
            }
        },
        updated(){

            this.news=this.$store.state.site.posts.posts;
            this.success = true;
            console.log("des")
        }

    }
</script>

<style scoped>

</style>