<template>
  <div class="housework" v-on:click="goHousework">
    <img src="../../static/img/housework.jpg" alt="">
  </div>
</template>

<script>

  export default {
    name: 'housework',
    methods:{
      goHousework(){
        this.$router.push({path:"/detailpage"})
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .housework{
    margin-top: 10px;
  }
  .housework img{
    width: 100%;
    height: 50rem;
  }
</style>
