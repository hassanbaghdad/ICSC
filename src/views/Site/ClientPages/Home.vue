<template>
    <div >
        <TopSlideShow/>
        <Cols3/>
        <LatestNews/>
        <Labs/>
        <Counters/>
        <Sections/>
        <Tenders/>


        <Brands/>
    </div>
</template>

<script>
    import TopSlideShow from "@/components/site/TopSlideShow";
    import Cols3 from "@/components/site/Cols3";
    import News from "@/components/site/News";
    import Labs from "@/components/site/Labs";
    import Counters from "@/components/site/Counters";
    import Sections from "@/components/site/Sections";
    import Tenders from "@/components/site/Tenders";
    //import Gallery from "@/components/site/Gallery";
    import LatestNews from "@/components/site/LatestNews";
    import Brands from "@/components/site/Brands";

    export default {
        name: "Home",
        components:{
            Brands,
            LatestNews,
            //Gallery,
            Tenders,
            Sections,
            Counters,
           Labs,
           Cols3,
           TopSlideShow,
        },
        mounted () {
            window.scrollTo(0, 0)
        }
    }
</script>

<style scoped>

</style>