<template>
  <div class="backdrop">
    <p class="logoIn">您还未登录</p>
    <div class="aboutLogo">
      <p class="firs">登录</p>
      <p>注册</p>
    </div>
</div>
</template>

<script>

  export default {
    name: 'backdrop',

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .backdrop{
    width: 100%;
    height:10rem;
    background-image: url("../../static/img/bg.png");
    background-size: 100% 100%;
    background-repeat: no-repeat;
    text-align: center;
  }
  .logoIn{
    font-size: 16px;
    height: 4rem;
    line-height: 4rem;
    width: 50%;
    margin-left: 25%;
  }
  .aboutLogo{
    height: 3rem;
    color: #89BE48;
    display: flex;
    width: 50%;
    margin-left: 25%;
    border: 1px solid #89BE48;
    border-radius: 20px;
  }
  .aboutLogo p{
    width: 50%;
    text-align: center;
    font-size: 14px;
    height: 16px;
    margin-top: 7px;
  }
  .firs{
    border-right: 1px solid #333333;
  }
</style>
