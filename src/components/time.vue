<template>
  <div class="time">
    <!--闲逛-->
    <idle></idle>
    <!--商品详情-->
    <circumstantial></circumstantial>
    <el-button type="primary" @click="openFullScreen" v-loading.fullscreen.lock="fullscreenLoading"
               style="background-color:rgba(0,0,0,0) ;border:none">
    </el-button>
  </div>
</template>

<script>
  //  引用闲逛
  import idle from '@/components/idle'
  //  引用商品详情
  import circumstantial from '@/components/circumstantial'
  export default {
    name: 'time',
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
    components:{
      idle,
      circumstantial
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
