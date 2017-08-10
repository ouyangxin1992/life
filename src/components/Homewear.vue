<template>
  <div class="homewear">
    <el-button type="primary" @click="openFullScreen" v-loading.fullscreen.lock="fullscreenLoading"
               style="background-color:rgba(0,0,0,0) ;border:none">
    </el-button>
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
      toolDress,
      territory,
      recomes
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
