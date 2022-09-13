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
                <div class="team-carousel team-members owl-carousel owl-theme">
                    <div class="item" v-for="(item,i) in $store.state.site.posts.posts" :key="'new_slider_'+i">
                        <div class="single-team-member">
                            <div class="img-box">
                                <img  src="https://www.icsc.gov.iq/images/img_1652088535.png" style="width: 300px;height: 150px" />
                                <div class="overlay">
                                    <div class="box">
                                        <div class="content">
                                            <router-link :to="'/news/'+item.post_slug" class="thm-btn cf f16">عرض</router-link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <h3>Smith Martinez</h3>
                            <span>Senior Worker</span>
                            <p class="text-left">Lorem ipsum dolor sit amet, sea dolor essent nostrud no, pro no vidit aterum mediocritatem.</p>
                            <div class="team-contact-info">
                                <ul class="team-social list-inline">
                                    <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                                    <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                                    <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
                                    <li><a href="#"><i class="fa fa-google-plus"></i></a></li>
                                </ul>
                                <a class="btn-mail" href="#"><i class="fa fa-send-o"></i></a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </section>
<!--    <section class="sec-padding meet-doctors" data-bg-color="#f7f7f7">-->
<!--        <div class="container">-->
<!--            <div class="sec-title text-left">-->
<!--                <h2>Meet Our Experts</h2>-->
<!--                <p>Lorem ipsum is a dummy text it will use for subtitle here</p>-->
<!--                <span class="decor"><span class="inner"></span></span>-->
<!--            </div>-->
<!--            <div class="clearfix owl-en">-->
<!--                <div class="team-carousel team-members owl-carousel owl-theme">-->
<!--                    <div class="item">-->
<!--                        <div class="single-team-member">-->
<!--                            <div class="img-box">-->
<!--                                <img src="img/team/1.jpg" alt="">-->
<!--                                <div class="overlay">-->
<!--                                    <div class="box">-->
<!--                                        <div class="content">-->
<!--                                            <a href="team-details.html" class="thm-btn">View Profile</a>-->
<!--                                        </div>-->
<!--                                    </div>-->
<!--                                </div>-->
<!--                            </div>-->
<!--                            <h3>Smith Martinez</h3>-->
<!--                            <span>Senior Worker</span>-->
<!--                            <p>Lorem ipsum dolor sit amet, sea dolor essent nostrud no, pro no vidit aterum mediocritatem.</p>-->
<!--                            <div class="team-contact-info">-->
<!--                                <ul class="team-social list-inline">-->
<!--                                    <li><a href="#"><i class="fa fa-facebook"></i></a></li>-->
<!--                                    <li><a href="#"><i class="fa fa-twitter"></i></a></li>-->
<!--                                    <li><a href="#"><i class="fa fa-linkedin"></i></a></li>-->
<!--                                    <li><a href="#"><i class="fa fa-google-plus"></i></a></li>-->
<!--                                </ul>-->
<!--                                <a class="btn-mail" href="#"><i class="fa fa-send-o"></i></a>-->
<!--                            </div>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                    <div class="item">-->
<!--                        <div class="single-team-member">-->
<!--                            <div class="img-box">-->
<!--                                <img src="img/team/2.jpg" alt="">-->
<!--                                <div class="overlay">-->
<!--                                    <div class="box">-->
<!--                                        <div class="content">-->
<!--                                            <a href="team-details.html" class="thm-btn">View Profile</a>-->
<!--                                        </div>-->
<!--                                    </div>-->
<!--                                </div>-->
<!--                            </div>-->
<!--                            <h3>Gray Williams</h3>-->
<!--                            <span>Senior Worker</span>-->
<!--                            <p>Lorem ipsum dolor sit amet, sea dolor essent nostrud no, pro no vidit aterum mediocritatem.</p>-->
<!--                            <div class="team-contact-info">-->
<!--                                <ul class="team-social list-inline">-->
<!--                                    <li><a href="#"><i class="fa fa-facebook"></i></a></li>-->
<!--                                    <li><a href="#"><i class="fa fa-twitter"></i></a></li>-->
<!--                                    <li><a href="#"><i class="fa fa-linkedin"></i></a></li>-->
<!--                                    <li><a href="#"><i class="fa fa-google-plus"></i></a></li>-->
<!--                                </ul>-->
<!--                                <a class="btn-mail" href="#"><i class="fa fa-send-o"></i></a>-->
<!--                            </div>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                    <div class="item">-->
<!--                        <div class="single-team-member">-->
<!--                            <div class="img-box">-->
<!--                                <img src="img/team/3.jpg" alt="">-->
<!--                                <div class="overlay">-->
<!--                                    <div class="box">-->
<!--                                        <div class="content">-->
<!--                                            <a href="team-details.html" class="thm-btn">View Profile</a>-->
<!--                                        </div>-->
<!--                                    </div>-->
<!--                                </div>-->
<!--                            </div>-->
<!--                            <h3>Lewis Mcdonald</h3>-->
<!--                            <span>Senior Worker</span>-->
<!--                            <p>Lorem ipsum dolor sit amet, sea dolor essent nostrud no, pro no vidit aterum mediocritatem.</p>-->
<!--                            <div class="team-contact-info">-->
<!--                                <ul class="team-social list-inline">-->
<!--                                    <li><a href="#"><i class="fa fa-facebook"></i></a></li>-->
<!--                                    <li><a href="#"><i class="fa fa-twitter"></i></a></li>-->
<!--                                    <li><a href="#"><i class="fa fa-linkedin"></i></a></li>-->
<!--                                    <li><a href="#"><i class="fa fa-google-plus"></i></a></li>-->
<!--                                </ul>-->
<!--                                <a class="btn-mail" href="#"><i class="fa fa-send-o"></i></a>-->
<!--                            </div>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                    <div class="item">-->
<!--                        <div class="single-team-member">-->
<!--                            <div class="img-box">-->
<!--                                <img src="img/team/4.jpg" alt="">-->
<!--                                <div class="overlay">-->
<!--                                    <div class="box">-->
<!--                                        <div class="content">-->
<!--                                            <a href="team-details.html" class="thm-btn">View Profile</a>-->
<!--                                        </div>-->
<!--                                    </div>-->
<!--                                </div>-->
<!--                            </div>-->
<!--                            <h3>Jackson Hernandez</h3>-->
<!--                            <span>Senior Worker</span>-->
<!--                            <p>Lorem ipsum dolor sit amet, sea dolor essent nostrud no, pro no vidit aterum mediocritatem.</p>-->
<!--                            <div class="team-contact-info">-->
<!--                                <ul class="team-social list-inline">-->
<!--                                    <li><a href="#"><i class="fa fa-facebook"></i></a></li>-->
<!--                                    <li><a href="#"><i class="fa fa-twitter"></i></a></li>-->
<!--                                    <li><a href="#"><i class="fa fa-linkedin"></i></a></li>-->
<!--                                    <li><a href="#"><i class="fa fa-google-plus"></i></a></li>-->
<!--                                </ul>-->
<!--                                <a class="btn-mail" href="#"><i class="fa fa-send-o"></i></a>-->
<!--                            </div>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                    <div class="item">-->
<!--                        <div class="single-team-member">-->
<!--                            <div class="img-box">-->
<!--                                <img src="img/team/1.jpg" alt="">-->
<!--                                <div class="overlay">-->
<!--                                    <div class="box">-->
<!--                                        <div class="content">-->
<!--                                            <a href="team-details.html" class="thm-btn">View Profile</a>-->
<!--                                        </div>-->
<!--                                    </div>-->
<!--                                </div>-->
<!--                            </div>-->
<!--                            <h3>Smith Martinez</h3>-->
<!--                            <span>Senior Worker</span>-->
<!--                            <p>Lorem ipsum dolor sit amet, sea dolor essent nostrud no, pro no vidit aterum mediocritatem.</p>-->
<!--                            <div class="team-contact-info">-->
<!--                                <ul class="team-social list-inline">-->
<!--                                    <li><a href="#"><i class="fa fa-facebook"></i></a></li>-->
<!--                                    <li><a href="#"><i class="fa fa-twitter"></i></a></li>-->
<!--                                    <li><a href="#"><i class="fa fa-linkedin"></i></a></li>-->
<!--                                    <li><a href="#"><i class="fa fa-google-plus"></i></a></li>-->
<!--                                </ul>-->
<!--                                <a class="btn-mail" href="#"><i class="fa fa-send-o"></i></a>-->
<!--                            </div>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                    <div class="item">-->
<!--                        <div class="single-team-member">-->
<!--                            <div class="img-box">-->
<!--                                <img src="img/team/2.jpg" alt="">-->
<!--                                <div class="overlay">-->
<!--                                    <div class="box">-->
<!--                                        <div class="content">-->
<!--                                            <a href="team-details.html" class="thm-btn">View Profile</a>-->
<!--                                        </div>-->
<!--                                    </div>-->
<!--                                </div>-->
<!--                            </div>-->
<!--                            <h3>Gray Williams</h3>-->
<!--                            <span>Senior Worker</span>-->
<!--                            <p>Lorem ipsum dolor sit amet, sea dolor essent nostrud no, pro no vidit aterum mediocritatem.</p>-->
<!--                            <div class="team-contact-info">-->
<!--                                <ul class="team-social list-inline">-->
<!--                                    <li><a href="#"><i class="fa fa-facebook"></i></a></li>-->
<!--                                    <li><a href="#"><i class="fa fa-twitter"></i></a></li>-->
<!--                                    <li><a href="#"><i class="fa fa-linkedin"></i></a></li>-->
<!--                                    <li><a href="#"><i class="fa fa-google-plus"></i></a></li>-->
<!--                                </ul>-->
<!--                                <a class="btn-mail" href="#"><i class="fa fa-send-o"></i></a>-->
<!--                            </div>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                    <div class="item">-->
<!--                        <div class="single-team-member">-->
<!--                            <div class="img-box">-->
<!--                                <img src="img/team/3.jpg" alt="">-->
<!--                                <div class="overlay">-->
<!--                                    <div class="box">-->
<!--                                        <div class="content">-->
<!--                                            <a href="team-details.html" class="thm-btn">View Profile</a>-->
<!--                                        </div>-->
<!--                                    </div>-->
<!--                                </div>-->
<!--                            </div>-->
<!--                            <h3>Lewis Mcdonald</h3>-->
<!--                            <span>Senior Worker</span>-->
<!--                            <p>Lorem ipsum dolor sit amet, sea dolor essent nostrud no, pro no vidit aterum mediocritatem.</p>-->
<!--                            <div class="team-contact-info">-->
<!--                                <ul class="team-social list-inline">-->
<!--                                    <li><a href="#"><i class="fa fa-facebook"></i></a></li>-->
<!--                                    <li><a href="#"><i class="fa fa-twitter"></i></a></li>-->
<!--                                    <li><a href="#"><i class="fa fa-linkedin"></i></a></li>-->
<!--                                    <li><a href="#"><i class="fa fa-google-plus"></i></a></li>-->
<!--                                </ul>-->
<!--                                <a class="btn-mail" href="#"><i class="fa fa-send-o"></i></a>-->
<!--                            </div>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                    <div class="item">-->
<!--                        <div class="single-team-member">-->
<!--                            <div class="img-box">-->
<!--                                <img src="img/team/4.jpg" alt="">-->
<!--                                <div class="overlay">-->
<!--                                    <div class="box">-->
<!--                                        <div class="content">-->
<!--                                            <a href="team-details.html" class="thm-btn">View Profile</a>-->
<!--                                        </div>-->
<!--                                    </div>-->
<!--                                </div>-->
<!--                            </div>-->
<!--                            <h3>Jackson Hernandez</h3>-->
<!--                            <span>Senior Worker</span>-->
<!--                            <p>Lorem ipsum dolor sit amet, sea dolor essent nostrud no, pro no vidit aterum mediocritatem.</p>-->
<!--                            <div class="team-contact-info">-->
<!--                                <ul class="team-social list-inline">-->
<!--                                    <li><a href="#"><i class="fa fa-facebook"></i></a></li>-->
<!--                                    <li><a href="#"><i class="fa fa-twitter"></i></a></li>-->
<!--                                    <li><a href="#"><i class="fa fa-linkedin"></i></a></li>-->
<!--                                    <li><a href="#"><i class="fa fa-google-plus"></i></a></li>-->
<!--                                </ul>-->
<!--                                <a class="btn-mail" href="#"><i class="fa fa-send-o"></i></a>-->
<!--                            </div>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                </div>-->
<!--            </div>-->
<!--        </div>-->
<!--    </section>-->
</template>

<script>
    export default {
        name: "News"
    }
</script>

<style scoped>

</style>