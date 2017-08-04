<template>
  <div class="cook" v-on:click="goCook">
    <img src="../../static/img/cook.jpg" alt="">
  </div>
</template>

<script>

  export default {
    name: 'cook',
    methods:{
      goCook(){
        this.$router.push({path:"/detailpage"})
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .cook{
    margin-top: 10px;
  }
  .cook img{
    width: 100%;
    height: 50rem;
  }
</style>
