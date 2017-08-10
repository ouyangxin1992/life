<template>
  <div class="gotop" v-on:click="goTop" v-show="scrollTop">
    <img src="../../static/img/topGreen.gif" alt="">
  </div>
</template>

<script>

  export default {
    name: 'gotop',
    data(){
      return {
        scroll: "",
        scrollTop:false
      }
    },
    mounted() {
      window.addEventListener('scroll', this.goTops)
    },
    methods: {
      goTop(e){
        if (!e) {
          e = window.event;
        }
        document.body.scrollTop = 0;
      },
      goTops(){
        this.scroll = document.body.scrollTop;
        if (parseInt(this.scroll) > 1200) {
          this.scrollTop = true;
        } else {
          this.scrollTop = false;
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .gotop{
    position: fixed;
    bottom: 100px;
    right: 20px;
  }
</style>
