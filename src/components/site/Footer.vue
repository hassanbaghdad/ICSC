<template>
    <footer class="footer bg-style">
        <div class="footer-upper">
            <div class="container">
                <div class="row">
                    <div class="col-md-3 col-sm-6">
                        <div class="footer-widget about-widget">
                            <a href="#">
                                <img src="img/resources/footer-logo.png" alt="Awesome Image" />
                            </a>
                            <p>Lorem ipsum dolor sit amet, eu me evert laboramus, iudico </p>
                            <ul class="contact">
                                <li><i class="fa fa-map-marker"></i> <span>60 Grant Ave. Carteret NJ 0708</span></li>
                                <li><i class="fa fa-phone"></i> <span>(880) 1723801729</span></li>
                                <li><i class="fa fa-envelope-o"></i> <span>example@gmail.com</span></li>
                            </ul>
                            <ul class="social">
                                <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                                <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                                <li><a href="#"><i class="fa fa-google-plus"></i></a></li>
                                <li><a href="#"><i class="fa fa-pinterest"></i></a></li>
                                <li><a href="#"><i class="fa fa-youtube"></i></a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-md-2 col-sm-6">
                        <div class="footer-widget quick-links">
                            <h3 class="title">Services</h3>
                            <ul>
                                <li><a href="service-details.html">Chemical Research</a></li>
                                <li><a href="service-details.html">Metal Engineering</a></li>
                                <li><a href="service-details.html">Power &amp; Energy</a></li>
                                <li><a href="service-details.html">Power Controling</a></li>
                                <li><a href="service-details.html">Petroleum &amp; Gas</a></li>
                                <li><a href="service-details.html">Mechanical Service</a></li>
                                <li><a href="service-details.html">Agricultural Service</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-md-3 latest-post col-sm-6">
                        <div class="footer-widget latest-post news-post">
                            <h3 class="title">Latest News</h3>
                            <ul>
                                <li>
                                    <span class="border"><img src="img/blog/s1.jpg" alt=""></span>
                                    <div class="content">
                                        <a href="blog-details.html">Etiam dignissim sit amet felis ac sagittis. Sed libero</a>
                                        <span>31 Dec, 2016</span>
                                    </div>
                                </li>
                                <li>
                                    <span class="border"><img src="img/blog/s2.jpg" alt=""></span>
                                    <div class="content">
                                        <a href="blog-details.html">Etiam dignissim sit amet felis ac sagittis. Sed libero</a>
                                        <span>31 Dec, 2016</span>
                                    </div>
                                </li>
                                <li>
                                    <span class="border"><img src="img/blog/s3.jpg" alt=""></span>
                                    <div class="content">
                                        <a href="blog-details.html">Etiam dignissim sit amet felis ac sagittis. Sed libero</a>
                                        <span>31 Dec, 2016</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-md-4 col-sm-6">
                        <div class="footer-widget contact-widget">
                            <h3 class="title">Contact Form</h3>
                            <form action="inc/sendemail.php" class="contact-form" id="footer-cf">
                                <input type="text" name="name" placeholder="Full Name">
                                <input type="text" name="email" placeholder="Email Address">
                                <textarea name="message" placeholder="Your Message"></textarea>
                                <button type="submit">Send</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer-bottom">
            <div class="container text-center">
                <p>&copy; Copyright 2016 by <a href="#">TEMPLATE PATH</a> | All rights reserved</p>
            </div>
        </div>
    </footer>
</template>

<script>
    export default {
        name: "Footer"
    }
</script>

<style scoped>

</style>