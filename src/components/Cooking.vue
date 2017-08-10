<template>
  <div class="cooking">
    <el-button type="primary" @click="openFullScreen" v-loading.fullscreen.lock="fullscreenLoading"
               style="background-color:rgba(0,0,0,0) ;border:none">
    </el-button>
    <!--十大分类-->
    <toolCook></toolCook>
    <!--幸福-->
    <happiness></happiness>
    <!--Rico的精心推荐-->
    <recoms></recoms>
  </div>
</template>

<script>
  //引用十大分类-
  import toolCook from '@/components/toolCook'
  //引用幸福
  import happiness from '@/components/happiness'
  //引用Rico的精心推荐
  import recoms from '@/components/recoms'
  export default {
    name: 'cooking',
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
      toolCook,
      happiness,
      recoms
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
