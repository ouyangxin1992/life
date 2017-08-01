<template>
  <div class="car">
    <!--购物车-->
    <shoppingtrolley></shoppingtrolley>
    <!--购物车详情商品-->
    <merchandise></merchandise>
  </div>
</template>

<script>
  //  引用购物车
  import shoppingtrolley from '@/components/shoppingtrolley'
  //  引用购物车详情商品
  import merchandise from '@/components/merchandise'
  export default {
    name: 'car',
    components:{
      shoppingtrolley,
      merchandise
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
