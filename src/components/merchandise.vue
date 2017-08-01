<template>
  <div class="merchandise">
    <div>
      <img src="../../static/img/car.png" alt="" class="picCar">
      <p>去首页逛逛吧</p>
    </div>

    <div>

    </div>
  </div>
</template>

<script>

  export default {
    name: 'merchandise',

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .merchandise div{
    text-align: center;
  }
  .merchandise div p{
    width: 50%;
    height: 3rem;
    line-height: 3rem;
    border: 1px solid green;
    color: green;
    font-size: 16px;
    margin-left: 25%;
    margin-top: 2rem;
    border-radius: 10px;
  }
</style>
