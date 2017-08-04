<template>
  <div class="choiceness" v-on:click="goChoiceness">
    <img src="../../static/img/choiceness.jpg" alt="">
  </div>
</template>

<script>

  export default {
    name: 'choiceness',
    methods:{
      goChoiceness(){
        this.$router.push({path:"/detailpage"})
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .choiceness{
    margin-top: 10px;
  }
  .choiceness img{
    width: 100%;
    height: 5rem;
  }
</style>
