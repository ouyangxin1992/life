<template>
  <div class="card" v-on:click="goCard">
    <img src="../../static/img/100card.jpg" alt="" >
  </div>
</template>

<script>

  export default {
    name: 'card',
    methods:{
      goCard(){
        this.$router.push({path:"/detailpage"})
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .card{
    margin-top: 10px;
  }
  .card img{
    width: 100%;
    height: 8rem;
  }
</style>
