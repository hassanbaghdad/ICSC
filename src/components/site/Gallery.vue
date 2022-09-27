<template>
    <section id="gallery_area" class="gallery-section sec-padding">
        <div class="container">
            <div class="sec-title text-center">
                <h2 v-if="$store.state.en"  class="color-white">Gallery</h2>
                <h2 v-if="!$store.state.en" class="color-white cf f24b">معرض الصور</h2>

                <span class="decor"><span class="inner"></span></span>
            </div>
            <!--Carousel-->
            <div class="gallery-slider gallery-slider-carousel" v-if="success">


                <carousel :items="$vuetify.breakpoint.xs?1:5" >
                    <article class="slide-item ma-2" v-for="(item , i ) in gallery" :key="'gallery_item_carousel_'+i">
                        <figure class="image-box">
                            <a :href="$axios.defaults.baseURL+'/images/'+item.post_image" class="lightbox-image" title="Awsome Title Here">
                                <img :src="$axios.defaults.baseURL+'/images/'+item.post_image" alt="" style="width: 400px;height: 150px">
                            </a>
                        </figure>
                        <a :href="$axios.defaults.baseURL+'/images/'+item.post_image" class="overlay lightbox-image" title="Awsome Title Here"></a>
                        <div class="item-caption" >
                             <h4 v-if="!$store.state.en"  class="cf f20b"><strong>{{gallery[0].post_title}}</strong></h4>
                             <h4 v-if="$store.state.en"><strong>{{gallery[0].post_title_en}}</strong></h4>
                        </div>
                    </article>


                </carousel>

            </div>



        </div>
    </section>
</template>

<script>
    import VueImageSlider from 'vue-image-slider'
    import carousel from 'vue-owl-carousel'

    export default {
        name: "Gallery",
        components: {
            carousel
        },
        data(){
            return{
                gallery:this.$store.state.site.posts.posts,
                success:false,
                length:this.$store.state.site.posts.posts.length,
                imageArray: [
                    'https://cdn.pixabay.com/photo/2015/12/12/15/24/amsterdam-1089646_1280.jpg',
                    'https://cdn.pixabay.com/photo/2016/02/17/23/03/usa-1206240_1280.jpg',
                    'https://cdn.pixabay.com/photo/2015/05/15/14/27/eiffel-tower-768501_1280.jpg',
                    'https://cdn.pixabay.com/photo/2016/12/04/19/30/berlin-cathedral-1882397_1280.jpg'
                ],
            }
        },
        created(){



        },
        computed:{
            get_gallery:function () {
                return this.$store.state.site.posts.posts;
            }
        },
        watch:{
            get_gallery:function (new_gallery) {
                this.gallery = new_gallery;
                this.length = new_gallery.length;
                this.success = true;

                console.log(new_gallery)

            }
        },

    }
</script>

<style scoped>

</style>