<template>
  <div class="travel">
    <!--九大分类-->
    <toolWork></toolWork>
    <!--旅伴-->
    <traveller></traveller>
    <!--Rico的精心推荐-->
    <recomentnes></recomentnes>
  </div>
</template>

<script>
  //引用九大分类-
  import toolWork from '@/components/toolWork'
  //引用睡觉
  import traveller from '@/components/traveller'
  //引用Rico的精心推荐
  import recomentnes from '@/components/recomentnes'
  export default {
    name: 'travelr',
    //    配置信息
    components:{
      toolWork,
      traveller,
      recomentnes
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
