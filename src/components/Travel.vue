<template>
  <div class="travel">
    <el-button type="primary" @click="openFullScreen" v-loading.fullscreen.lock="fullscreenLoading"
               style="background-color:rgba(0,0,0,0) ;border:none">
    </el-button>
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
      toolWork,
      traveller,
      recomentnes
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
