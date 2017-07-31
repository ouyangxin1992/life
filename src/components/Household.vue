<template>
  <div class="household">
    <!--九大分类-->
    <tools></tools>
    <!--偷懒-->
    <laze></laze>
    <!--Rico的精心推荐-->
    <recos></recos>
  </div>
</template>

<script>
  //引用九大分类
  import tools from '@/components/tools'
  //引用偷懒
  import laze from '@/components/laze'
  //引用Rico的精心推荐
  import recos from '@/components/recos'
  export default {
    name: 'household',
    //    配置信息
    components:{
      tools,
      laze,
      recos
    }

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
