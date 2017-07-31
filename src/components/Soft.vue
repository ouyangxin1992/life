<template>
  <div class="soft">
    <!--八大分类-->
    <toolSoft></toolSoft>
    <!--取悦自己-->
    <please></please>
    <!--Rico的精心推荐-->
    <recoments></recoments>
  </div>
</template>

<script>
  //引用八大分类-
  import toolSoft from '@/components/toolSoft'
  //引用取悦自己
  import please from '@/components/please'
  //引用Rico的精心推荐
  import recoments from '@/components/recoments'
  export default {
    name: 'soft',
    //    配置信息
    components:{
      toolSoft,
      please,
      recoments
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
