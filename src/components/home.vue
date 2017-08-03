<template>
  <div class="home">
    <!--<div class="loading">-->
      <!--<img src="../../static/img/loading_v2.gif" alt="">-->
    <!--</div>-->
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
/*.loading{*/
  /*width: 100%;*/
  /*height: 100%;*/
  /*background-color: rgba(0,0,0,0.5);*/
  /*position: fixed;*/
  /*top:0;*/
  /*left: 0;*/
  /*z-index: 99;*/
/*}*/
</style>
