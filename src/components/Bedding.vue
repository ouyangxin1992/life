<template>
  <div class="bedding">
    <!--十大分类-->
    <toolBed></toolBed>
    <!--睡觉-->
    <sleep></sleep>
    <!--Rico的精心推荐-->
    <recomentns></recomentns>
  </div>
</template>

<script>
  //引用十大分类-
  import toolBed from '@/components/toolBed'
  //引用睡觉
  import sleep from '@/components/sleep'
  //引用Rico的精心推荐
  import recomentns from '@/components/recomentns'
  export default {
    name: 'bedding',
    //    配置信息
    components:{
      toolBed,
      sleep,
      recomentns
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
