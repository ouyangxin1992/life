<template>
  <div class="exist" v-on:click="goExist">
    <img src="../../static/img/exist.jpg" alt="">
  </div>
</template>

<script>

  export default {
    name: 'exist',
    methods:{
      goExist(){
        this.$router.push({path:"/detailpage"})
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .exist{
    margin-top: 10px;
  }
  .exist img{
    width: 100%;
    height: 50rem;
  }
</style>
