<template>
  <div class="mine">
    <!--账户中心-->
    <account></account>
    <!--背景-->
    <backdrop></backdrop>
    <!--8个待处理项-->
    <pending></pending>
    <!--我的订单-->
    <indent></indent>
    <!--我的优惠券-->
    <favorable></favorable>
    <!--密码和登录信息-->
    <information></information>
  </div>
</template>

<script>
  //  引用账户中心
  import account from '@/components/account'
  //  引用背景
  import backdrop from '@/components/backdrop'
  //  引用待处理项
  import pending from '@/components/pending'
  //  引用我的订单
  import indent from '@/components/indent'
  //  引用我的优惠券
  import favorable from '@/components/favorable'
  //  引用密码和登录信息
  import information from '@/components/information'
  export default {
    name: 'mine',
    components:{
      account,
      backdrop,
      pending,
      indent,
      favorable,
      information
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
