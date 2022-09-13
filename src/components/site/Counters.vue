<template>
    <section class="fact-counter-wrapper sec-padding">
        <div class="container">
            <div class="row">
                <div class="col-lg-6 col-md-4">
                    <h2>We are served since <b>35 years</b> <br>to our customer with trust and <br>we are happy</h2>
                    <a href="#" class="thm-btn inverse">Be a part of us</a>
                </div>
                <div class="col-lg-6 col-md-8">
                    <div class="single-fact">
                        <div class="icon-box">
                            <i class="flaticon-quality"></i>
                        </div>
                        <span class="timer" data-from="1" data-to="50" data-speed="5000" data-refresh-interval="50">50</span>
                        <p>Years Experience</p>
                    </div>
                    <div class="single-fact">
                        <div class="icon-box">
                            <i class="flaticon-construction-worker"></i>
                        </div>
                        <span class="timer" data-from="1" data-to="8000" data-speed="10000" data-refresh-interval="50">155</span>
                        <p>Employees</p>
                    </div>
                    <div class="single-fact">
                        <div class="icon-box">
                            <i class="flaticon-light-bulb-lamp"></i>
                        </div>
                        <span class="timer" data-from="10" data-to="2200" data-speed="5000" data-refresh-interval="50">2200</span>
                        <p>Happy Clients</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: "Counters"
    }
</script>

<style scoped>

</style>