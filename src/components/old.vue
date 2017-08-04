<template>
  <div class="old" v-on:click="goOld">
    <img src="../../static/img/oldmember.jpg" alt="">
  </div>
</template>

<script>

  export default {
    name: 'old',
    methods:{
      goOld(){
        this.$router.push({path:"/detailpage"})
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .old{
    margin-top: 10px;
  }
  .old img{
    width: 100%;
    height: 22rem;
  }
</style>
