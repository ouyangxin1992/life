<template>
  <div class="charge" v-on:click="goCharge">
    <img src="../../static/img/charge.jpg" alt="">
  </div>
</template>

<script>

  export default {
    name: 'charge',
    methods:{
      goCharge(){
        this.$router.push({path:"/detailpage"})
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .charge{
    margin-top: 10px;
  }
  .charge img{
    width: 100%;
    height: 8rem;
  }
</style>
