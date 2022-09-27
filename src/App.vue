<template>
  <v-app id="app">
    <router-view/>
  </v-app>
</template>

<script>


  export default {
    name: 'App',

    components: {

    },

    data(){
      return{

      }
    },
    created(){
      this.$store.commit("RENDER");

      if(localStorage.getItem('en') =="true")
      {
        this.$store.state.en = true;
      }else{
        this.$store.state.en = false;
      }

    },



  };
  // window.onpopstate = function (evt) {
  //   var message = 'Are you sure you want to leave?';
  //   if (typeof evt == 'undefined') {
  //     evt = window.event;
  //   }
  //   if (evt) {
  //     evt.returnValue = message;
  //   }
  //   window.location="/";
  //   return message;
  //
  //
  // }
</script>
<style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Cairo:wght@700&display=swap');
  .cf{
    font-family:'Cairo' !important; ;
  }
  .f12{
    font-size: 12px;
  }
  .f12b{
    font-size: 12px;
    font-weight: bold;
  }
  .f14{
    font-size: 14px;
  }
  .f14b{
    font-size: 14px;
    font-weight: bold;
  }
  .f16{
    font-size: 16px;
  }
  .f16b{
    font-size: 16px;
    font-weight: bold;
  }
  .f18{
    font-size: 18px;
  }
  .f18b{
    font-size: 18px;
    font-weight: bold;
  }
  .f20{
    font-size: 20px;
  }
  .f20b{
    font-size: 20px;
    font-weight: bold;
  }
  .f22{
    font-size: 22px;
  }
  .f22b{
    font-size: 22px;
    font-weight: bold;
  }
  .f24{
    font-size: 24px;
  }
  .f24b{
    font-size: 24px;
    font-weight: bold;
  }
  .f26{
    font-size: 26px;
  }
  .f26b{
    font-size: 26px;
    font-weight: bold;
  }

  .rtl{
    direction: rtl !important;
  }

  .rotate90left{
    transform: rotate(90deg);
  }
  .rotate90right{
    transform: rotate(-90deg);
  }
  .filpX1{
    transform: scaleX(-1);
  }


  .me-mr-5{
    margin-right: 5px;
  }
  .me-ml-5{
    margin-left: 5px;
  }

</style>