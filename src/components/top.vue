<template>
  <div class="top">
    <!--logo-->
    <img src="../assets/logo.png" alt="" class="logo">
    <!--search-->
    <img src="../assets/serch.png" alt="" class="serch">
  </div>
</template>

<script>



  export default {
    name: 'top',
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.top{
  height: 4.4em;
  background-color: #89be48;
  text-align: center;
}
.logo{
  height: 2em;
  margin-top: 1.4em;
}
  .serch{
    height: 1.6em;
    float: right;
    margin-top: 1.4em;
    margin-right: 2%;
  }
</style>
