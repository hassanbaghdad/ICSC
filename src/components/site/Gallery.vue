<template>
    <section id="gallery_area" class="gallery-section sec-padding">
        <div class="container">
            <div class="sec-title text-center">
                <h2 class="color-white cf f24b">معرض الصور</h2>
                <p class="color-white">Lorem ipsum is a dummy text it will use for subtitle here</p>
                <span class="decor"><span class="inner"></span></span>
            </div>
            <!--Carousel-->
            <div class="gallery-slider gallery-slider-carousel">
                <article class="slide-item" style="width: 400px" v-for="(item , i) in 6" :key="i">
                    <figure class="image-box">
                        <a href="img/gallery/gallery-1.jpg" class="lightbox-image" title="Awsome Title Here"><img src="https://www.icsc.gov.iq/images/img_1570964206.jpg" alt=""></a>
                    </figure>
                    <a href="img/gallery/gallery-1.jpg" class="overlay lightbox-image" title="Awsome Title Here"></a>
                    <div class="item-caption">
                        <h4><strong>{{item.image_title}}</strong></h4>
                        <p>Mercedes Benz Company Car</p>
                    </div>
                </article>

            </div>


        </div>
    </section>
<!--    <section id="gallery_area" class="gallery-section sec-padding">-->
<!--        <div class="container">-->
<!--            <div class="sec-title text-center">-->
<!--                <h2 class="color-white">Working Gallery</h2>-->
<!--                <p class="color-white">Lorem ipsum is a dummy text it will use for subtitle here</p>-->
<!--                <span class="decor"><span class="inner"></span></span>-->
<!--            </div>-->
<!--            &lt;!&ndash;Carousel&ndash;&gt;-->
<!--            <div class="gallery-slider gallery-slider-carousel">-->
<!--                <article class="slide-item">-->
<!--                    <figure class="image-box">-->
<!--                        <a href="img/gallery/gallery-1.jpg" class="lightbox-image" title="Awsome Title Here"><img src="img/gallery/gallery-1.jpg" alt=""></a>-->
<!--                    </figure>-->
<!--                    <a href="img/gallery/gallery-1.jpg" class="overlay lightbox-image" title="Awsome Title Here"></a>-->
<!--                    <div class="item-caption">-->
<!--                        <h4><strong>CLEAN &amp; PAINT</strong></h4>-->
<!--                        <p>Mercedes Benz Company Car</p>-->
<!--                    </div>-->
<!--                </article>-->
<!--                <article class="slide-item">-->
<!--                    <figure class="image-box">-->
<!--                        <a href="img/gallery/gallery-2.jpg" class="lightbox-image" title="Awsome Title Here"><img src="img/gallery/gallery-2.jpg" alt=""></a>-->
<!--                    </figure>-->
<!--                    <a href="img/gallery/gallery-2.jpg" class="overlay lightbox-image" title="Awsome Title Here"></a>-->
<!--                    <div class="item-caption">-->
<!--                        <h4><strong>CLEAN &amp; PAINT</strong></h4>-->
<!--                        <p>Mercedes Benz Company Car</p>-->
<!--                    </div>-->
<!--                </article>-->
<!--                <article class="slide-item">-->
<!--                    <figure class="image-box">-->
<!--                        <a href="img/gallery/gallery-3.jpg" class="lightbox-image" title="Awsome Title Here"><img src="img/gallery/gallery-3.jpg" alt=""></a>-->
<!--                    </figure>-->
<!--                    <a href="img/gallery/gallery-3.jpg" class="overlay lightbox-image" title="Awsome Title Here"></a>-->
<!--                    <div class="item-caption">-->
<!--                        <h4><strong>CLEAN &amp; PAINT</strong></h4>-->
<!--                        <p>Mercedes Benz Company Car</p>-->
<!--                    </div>-->
<!--                </article>-->
<!--                <article class="slide-item">-->
<!--                    <figure class="image-box">-->
<!--                        <a href="img/gallery/gallery-4.jpg" class="lightbox-image" title="Awsome Title Here"><img src="img/gallery/gallery-4.jpg" alt=""></a>-->
<!--                    </figure>-->
<!--                    <a href="img/gallery/gallery-4.jpg" class="overlay lightbox-image" title="Awsome Title Here"></a>-->
<!--                    <div class="item-caption">-->
<!--                        <h4><strong>CLEAN &amp; PAINT</strong></h4>-->
<!--                        <p>Mercedes Benz Company Car</p>-->
<!--                    </div>-->
<!--                </article>-->
<!--                <article class="slide-item">-->
<!--                    <figure class="image-box">-->
<!--                        <a href="img/gallery/gallery-5.jpg" class="lightbox-image" title="Awsome Title Here"><img src="img/gallery/gallery-5.jpg" alt=""></a>-->
<!--                    </figure>-->
<!--                    <a href="img/gallery/gallery-5.jpg" class="overlay lightbox-image" title="Awsome Title Here"></a>-->
<!--                    <div class="item-caption">-->
<!--                        <h4><strong>CLEAN &amp; PAINT</strong></h4>-->
<!--                        <p>Mercedes Benz Company Car</p>-->
<!--                    </div>-->
<!--                </article>-->
<!--                <article class="slide-item">-->
<!--                    <figure class="image-box">-->
<!--                        <a href="img/gallery/gallery-6.jpg" class="lightbox-image" title="Awsome Title Here"><img src="img/gallery/gallery-6.jpg" alt=""></a>-->
<!--                    </figure>-->
<!--                    <a href="img/gallery/gallery-6.jpg" class="overlay lightbox-image" title="Awsome Title Here"></a>-->
<!--                    <div class="item-caption">-->
<!--                        <h4><strong>CLEAN &amp; PAINT</strong></h4>-->
<!--                        <p>Mercedes Benz Company Car</p>-->
<!--                    </div>-->
<!--                </article>-->
<!--            </div>-->
<!--        </div>-->
<!--    </section>-->
</template>

<script>
    export default {
        name: "Gallery",
        data(){
            return{
                gallery:this.$store.state.site.gallery.gallery,
                success:false
            }
        },
        created(){


            console.log(this.gallery)

        },
        computed:{
            get_gallery:function () {
                return this.$store.state.site.gallery.gallery;
            }
        },
        watch:{
            get_gallery:function (new_gallery) {
                this.gallery = new_gallery;
                this.success = true;

            }
        },

    }
</script>

<style scoped>

</style>