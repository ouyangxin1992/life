<template>
  <div class="jop" v-on:click="goJop">
    <img src="../../static/img/jop.jpg" alt="">
  </div>
</template>

<script>

  export default {
    name: 'jop',
    methods:{
      goJop(){
        this.$router.push({path:"/detailpage"})
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .jop{
    margin-top: 10px;
  }
  .jop img{
    width: 100%;
    height: 35rem;
  }
</style>
