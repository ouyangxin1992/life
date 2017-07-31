<template>
  <div class="slideshow">
    <span class="demonstration"></span>
    <el-carousel height="200px">
      <el-carousel-item v-for="item in goods" >
        <img :src="item.ImageUrl" alt="">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
 import axios from "axios"
  export default {
    name: 'slideshow',
    data(){
        return{
            goods:true
        }
    },
    created(){
       var arr=this;
       axios.get("../../static/data/home.json").then(function (data) {
            arr.goods=data.data.InnerData[0].InnerData;
//         console.log(data.data.InnerData[0].InnerData)
       }).catch(function (err) {
           console.log(err)
       })
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.slideshow img{
  height: 20em;
  width: 100%;
}
</style>
