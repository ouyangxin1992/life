<template>
  <div>
    <div class="slideshow">
      <span class="demonstration"></span>
      <el-carousel height="200px">
        <el-carousel-item v-for="(item , index) in goods" >
          <img :src="item.ImageUrl" alt=""   v-on:click="lunbo(index)">
        </el-carousel-item>
      </el-carousel>
    </div>
    <router-view></router-view>
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
    methods:{
        lunbo(index){
            console.log(index);
            this.$router.push({path:"/detailpage",query:{id:index}})
        }
    },
    created(){
       var arr=this;
       axios.get("../../static/data/home.json").then(function (data) {
            arr.goods=data.data.InnerData[0].InnerData;
       }).catch(function (err) {
           console.log(err)
       });

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
