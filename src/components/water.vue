<template>
  <div class="water">
    <p class=" chartBig"></p>
    <p>
      <span class=" chartSmall1"></span>
      <span class=" chartSmall2"></span>
      <span class=" chartSmall3"></span>
    </p>
  </div>
</template>

<script>

  export default {
    name: 'water',

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.water{
  width: 100%;
  margin-top: 20px;
}
.water p{
  width: 100%;
}
 .chartBig{
   height: 12em;
   background-image: url("../../static/img/water.jpg");
   background-position: 0 0;
   background-size: 100% 180%;
 }
 .chartSmall1{
   width: 32%;
   height: 8em;
   display: inline-block;
   background-image: url("../../static/img/water.jpg");
   background-position: 0 -85%;
   background-size: 300% 220%;
 }
.chartSmall2{
   width: 32%;
   height: 8em;
   display: inline-block;
   background-image: url("../../static/img/water.jpg");
   background-position: 50% -85%;
   background-size: 300% 220%;
 }
.chartSmall3{
  width: 33.6%;
  height: 8em;
  display: inline-block;
  background-image: url("../../static/img/water.jpg");
  background-position: 100% -85%;
  background-size: 300% 220%;
}
</style>
