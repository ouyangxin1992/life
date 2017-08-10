<template>
  <div class="car">
    <!--购物车-->
    <shoppingtrolley></shoppingtrolley>
    <!--购物车详情商品-->
    <merchandise></merchandise>
    <el-button type="primary" @click="openFullScreen" v-loading.fullscreen.lock="fullscreenLoading"
               style="background-color:rgba(0,0,0,0) ;border:none">
    </el-button>
  </div>
</template>

<script>
  //  引用购物车
  import shoppingtrolley from '@/components/shoppingtrolley'
  //  引用购物车详情商品
  import merchandise from '@/components/merchandise'
  export default {
    name: 'car',
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
      shoppingtrolley,
      merchandise
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
