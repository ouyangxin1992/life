<template>
  <div class="discount">
      <p><span class="pic1"></span></p>
      <p><span class="pic2"></span></p>
      <p><span class="pic3"></span></p>
      <p><span class="pic4"></span></p>
      <p><span class="pic5"></span></p>
  </div>
</template>

<script>

  export default {
    name: 'discount',

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.discount{
  width: 100%;
  display: flex;
  margin-top: 10px;
}
.discount p{
  width: 20%;
  text-align: center;
  height: 50px;
}
.discount p .pic1{
   width: 100%;
   height: 50px;
   display: inline-block;
   background-image: url("../../static/img/series.jpg");
  background-position: 0 -20px;
  background-size: 420% 150%;
 }
.discount p .pic2{
  width: 100%;
  height: 50px;
  display: inline-block;
  background-image: url("../../static/img/series.jpg");
  background-position: 25% -20px;
  background-size: 420% 150%;
}
.discount p .pic3{
  width: 100%;
  height: 50px;
  display: inline-block;
  background-image: url("../../static/img/series.jpg");
  background-position: 50% -20px;
  background-size: 420% 150%;
}
.discount p .pic4{
  width: 100%;
  height: 50px;
  display: inline-block;
  background-image: url("../../static/img/series.jpg");
  background-position: 75% -20px;
  background-size: 420% 150%;
}
.discount p .pic5{
  width: 100%;
  height: 50px;
  display: inline-block;
  background-image: url("../../static/img/series.jpg");
  background-position: 100% -20px;
  background-size: 420% 150%;
}
</style>
