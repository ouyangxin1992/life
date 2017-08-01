<template>
  <div class="mine">
    <!--账户中心-->
    <account></account>
    <!--背景-->
    <backdrop></backdrop>
    <!--8个待处理项-->
    <pending></pending>
  </div>
</template>

<script>
  //  引用账户中心
  import account from '@/components/account'
  //  引用背景
  import backdrop from '@/components/backdrop'
  //  引用待处理项
  import pending from '@/components/pending'
  export default {
    name: 'mine',
    components:{
      account,
      backdrop,
      pending
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
