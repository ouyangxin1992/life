<template>
  <div class="time">
    <!--闲逛-->
    <idle></idle>
    <!--商品详情-->
    <circumstantial></circumstantial>
  </div>
</template>

<script>
  //  引用闲逛
  import idle from '@/components/idle'
  //  引用商品详情
  import circumstantial from '@/components/circumstantial'
  export default {
    name: 'time',
    components:{
      idle,
      circumstantial
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
