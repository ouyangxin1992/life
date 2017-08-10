<template>
  <div class="all">
    <!--全部产品-->
    <together></together>
    <!--搜索框-->
    <searchBox></searchBox>
    <!--家务-->
    <housekeeping></housekeeping>
    <!--下厨-->
    <dessert></dessert>
    <!--家居服-->
    <clothing></clothing>
    <!--生活-->
    <live></live>
    <!--软装-->
    <trim></trim>
    <!--床品-->
    <textile></textile>
    <!--工作和旅行-->
    <worker></worker>
    <el-button type="primary" @click="openFullScreen" v-loading.fullscreen.lock="fullscreenLoading"
               style="background-color:rgba(0,0,0,0) ;border:none">
    </el-button>
  </div>
</template>

<script>
//  引用全部产品
  import together from '@/components/together'
//  引用搜索框
import searchBox from '@/components/searchBox'
//  引用家务
import housekeeping from '@/components/housekeeping'
//  引用下厨
import dessert from '@/components/dessert'
//  引用家居服
import clothing from '@/components/clothing'
//  引用生活
import live from '@/components/live'
//  引用软装
import trim from '@/components/trim'
//  引用床品
import textile from '@/components/textile'
//  引用工作和旅行
import worker from '@/components/worker'
  export default {
    name: 'all',
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
      together,
      searchBox,
      housekeeping,
      dessert,
      clothing,
      live,
      trim,
      textile,
      worker
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
