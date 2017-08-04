<template>
  <div class="couch" v-on:click="goCouch">
    <img src="../../static/img/couch.jpg" alt="">
  </div>
</template>

<script>

  export default {
    name: 'couch',
    methods:{
      goCouch(){
        this.$router.push({path:"/detailpage"})
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .couch{
    margin-top: 10px;
  }
  .couch img{
    width: 100%;
    height: 35rem;
  }
</style>
