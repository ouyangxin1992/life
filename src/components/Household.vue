<template>
  <div class="household">
    <el-button type="primary" @click="openFullScreen" v-loading.fullscreen.lock="fullscreenLoading"
               style="background-color:rgba(0,0,0,0) ;border:none">
    </el-button>
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
      tools,
      laze,
      recos
    }

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
