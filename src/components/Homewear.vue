<template>
  <div class="homewear">
    <!--七大分类-->
    <toolDress></toolDress>
    <!--地盘-->
    <territory></territory>
    <!--Rico的精心推荐-->
    <recomes></recomes>
  </div>
</template>

<script>
  //引用七大分类-
  import toolDress from '@/components/toolDress'
  //引用地盘
  import territory from '@/components/territory'
  //引用Rico的精心推荐
  import recomes from '@/components/recomes'
  export default {
    name: 'homewear',
    //    配置信息
    components:{
      toolDress,
      territory,
      recomes
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
