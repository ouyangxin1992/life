<template>
  <div class="principal">
    <!--轮播图部分-->
    <slideshow></slideshow>
    <!--优惠集合部分-->
    <discount></discount>
    <!--多喝水图片部分-->
    <water></water>
    <!--新品首发部分-->
    <news></news>
    <!--49元减两件-->
    <yuan></yuan>
    <!--老会员优惠-->
    <old></old>
    <!--100元购物卡-->
    <card></card>
    <!--家务-->
    <housework></housework>
    <!--下厨-->
    <cook></cook>
    <!--床品-->
    <couch></couch>
    <!--生活-->
    <exist></exist>
    <!--工作和旅行-->
    <jop></jop>
    <!--软装-->
    <armoring></armoring>
    <!--免费-->
    <charge></charge>
    <!--承诺-->
    <promise></promise>
    <!--热卖精选-->
    <choiceness></choiceness>
    <!--热卖商品详情-->
    <sell></sell>
  </div>
</template>

<script>
  //引用轮播
  import slideshow from '@/components/slideshow'
//  引用优惠
  import discount from '@/components/discount'
//  引用喝水部分
  import water from '@/components/water'
//  引用新品部分
  import news from '@/components/news'
  //  引用49元减两件
  import yuan from '@/components/yuan'
  //  引用老会员优惠
  import old from '@/components/old'
  //  引用100元购物卡
  import card from '@/components/card'
  //  引用家务
  import housework from '@/components/housework'
  //  引用下厨
  import cook from '@/components/cook'
  //  引用床品
  import couch from '@/components/couch'
  //  引用生活
  import exist from '@/components/exist'
  //  引用工作和旅行
  import jop from '@/components/jop'
  //  引用软装
  import armoring from '@/components/armoring'
  //  引用免费
  import charge from '@/components/charge'
  //  引用承诺
  import promise from '@/components/promise'
//  引用热卖精选
  import choiceness from '@/components/choiceness'
  // 引用热卖商品详情
  import sell from '@/components/sell'
  export default {
    name: 'Principal',
    //    配置信息
    components:{
      slideshow,
      discount,
      water,
      news,
      yuan,
      old,
      card,
      housework,
      cook,
      couch,
      exist,
      jop,
      armoring,
      charge,
      promise,
      choiceness,
      sell
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.principal{

}
</style>
