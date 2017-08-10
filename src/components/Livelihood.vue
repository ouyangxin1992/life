<template>
  <div class="livelihood">
    <el-button type="primary" @click="openFullScreen" v-loading.fullscreen.lock="fullscreenLoading"
               style="background-color:rgba(0,0,0,0) ;border:none">
    </el-button>
    <!--八大分类-->
    <toolLife></toolLife>
    <!--一辈子-->
    <alllife></alllife>
    <!--Rico的精心推荐-->
    <recomens></recomens>
  </div>
</template>

<script>
  //引用八大分类-
  import toolLife from '@/components/toolLife'
  //引用一辈子
  import alllife from '@/components/alllife'
  //引用Rico的精心推荐
  import recomens from '@/components/recomens'
  export default {
    name: 'livelihood',
    data(){
      return{
        fullscreenLoading:false,
      }
    },
    created(){
      this.openFullScreen();
    },
    methods:{
      openFullScreen() {
        this.fullscreenLoading = true;
        setTimeout(() => {
          this.fullscreenLoading = false;
        }, 1500);
      }
    },
    //    配置信息
    components:{
      toolLife,
      alllife,
      recomens
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
