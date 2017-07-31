<template>
  <div class="home">
    <!--头部logo部分-->
    <top></top>
    <!--滑动部分-->
    <slipping></slipping>
  </div>
</template>

<script>
//引用头部
  import top from '@/components/top'
//引用滑动二级路由部分
  import slipping from '@/components/slipping'

  export default {
    name: 'home',
//    data(){
//        return{
//
//        }
//    },
//    配置信息
    components:{
      top,
      slipping
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
