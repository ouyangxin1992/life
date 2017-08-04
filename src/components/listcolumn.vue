<template>
  <div class="listcolumn">
    <div>
      <el-button class="cephalosome" type="success" icon="arrow-left" v-on:click="goBacks">
        <!--{{asDoods.ItemIndexName}}-->
        分类
     </el-button>
    </div>
    <div class="bigAll">
      <div v-for="(obj,index) in  goodsList" v-on:click="goListcolumn(obj,index)" class="buys">
        <img :src="obj.ImageUrl" alt="" class="picTu">
        <p>{{obj.Name}}</p>
        <div class="part">
          <p>
            <span>￥ {{obj.SalePrice}}</span>
            <span class="newRed">{{obj.PriceTag}}</span>
          </p>
          <p class="wordGrey">
            评论：{{obj.CommentCount}}
            </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from"axios"
  export default {
    name: 'listcolumn',
    data(){
      return{
        newGoods:true,
        asDoods:true,
        goodsList:true
      }
    },
    methods:{
      goListcolumn(obj,index){
        this.$router.push({path:"/detailpage",query:{id:index}});
        localStorage.setItem("getId",obj.ItemInfoId);
        localStorage.setItem("win",localStorage.getItem("lose"))
        console.log(localStorage.getItem("getId"))
      },
      goBacks(){
        this.$router.push("/home")
      }
    },
    created(){
      var arr2=this;
//      家务
      axios.get("../../static/data/chore.json").then(function (data) {
        arr2.asDoods=data.data.InnerData
        arr2.newGoods=data.data.InnerData.Categories;
        for (var i=0;i<arr2.newGoods.length;i++){
          var doId=localStorage.getItem("getId");
          if(doId==arr2.asDoods.Categories[i].ItemIndexId){
              localStorage.setItem("lose",arr2.asDoods.Categories[i].ItemIndexId)
            arr2.goodsList=arr2.asDoods.Categories[i].Items;
          }
        }
      }).catch(function (err) {
        console.log(err)
      });
      //      下厨
      axios.get("../../static/data/kitchen.json").then(function (data) {
        arr2.asDoods=data.data.InnerData
        arr2.newGoods=data.data.InnerData.Categories;
        for (var i=0;i<arr2.newGoods.length;i++){
          var doId=localStorage.getItem("getId");
          if(doId==arr2.asDoods.Categories[i].ItemIndexId){
            localStorage.setItem("lose",arr2.asDoods.Categories[i].ItemIndexId)
            arr2.goodsList=arr2.asDoods.Categories[i].Items;
          }
        }
      }).catch(function (err) {
        console.log(err)
      });
      //      家居服
      axios.get("../../static/data/dress.json").then(function (data) {
        arr2.asDoods=data.data.InnerData
        arr2.newGoods=data.data.InnerData.Categories;
        for (var i=0;i<arr2.newGoods.length;i++){
          var doId=localStorage.getItem("getId");
          if(doId==arr2.asDoods.Categories[i].ItemIndexId){
            localStorage.setItem("lose",arr2.asDoods.Categories[i].ItemIndexId)
            arr2.goodsList=arr2.asDoods.Categories[i].Items;
          }
        }
      }).catch(function (err) {
        console.log(err)
      });
      //      生活
      axios.get("../../static/data/life.json").then(function (data) {
        arr2.asDoods=data.data.InnerData
        arr2.newGoods=data.data.InnerData.Categories;
        for (var i=0;i<arr2.newGoods.length;i++){
          var doId=localStorage.getItem("getId");
          if(doId==arr2.asDoods.Categories[i].ItemIndexId){
            localStorage.setItem("lose",arr2.asDoods.Categories[i].ItemIndexId)
            arr2.goodsList=arr2.asDoods.Categories[i].Items;
          }
        }
      }).catch(function (err) {
        console.log(err)
      });
      //      软装
      axios.get("../../static/data/gray.json").then(function (data) {
        arr2.asDoods=data.data.InnerData
        arr2.newGoods=data.data.InnerData.Categories;
        for (var i=0;i<arr2.newGoods.length;i++){
          var doId=localStorage.getItem("getId");
          if(doId==arr2.asDoods.Categories[i].ItemIndexId){
            localStorage.setItem("lose",arr2.asDoods.Categories[i].ItemIndexId)
            arr2.goodsList=arr2.asDoods.Categories[i].Items;
          }
        }
      }).catch(function (err) {
        console.log(err)
      });
      //      床品
      axios.get("../../static/data/bed.json").then(function (data) {
        arr2.asDoods=data.data.InnerData
        arr2.newGoods=data.data.InnerData.Categories;
        for (var i=0;i<arr2.newGoods.length;i++){
          var doId=localStorage.getItem("getId");
          if(doId==arr2.asDoods.Categories[i].ItemIndexId){
            localStorage.setItem("lose",arr2.asDoods.Categories[i].ItemIndexId)
            arr2.goodsList=arr2.asDoods.Categories[i].Items;
          }
        }
      }).catch(function (err) {
        console.log(err)
      });
      //      工作与旅行
      axios.get("../../static/data/work.json").then(function (data) {
        arr2.asDoods=data.data.InnerData
        arr2.newGoods=data.data.InnerData.Categories;
        for (var i=0;i<arr2.newGoods.length;i++){
          var doId=localStorage.getItem("getId");
          if(doId==arr2.asDoods.Categories[i].ItemIndexId){
            localStorage.setItem("lose",arr2.asDoods.Categories[i].ItemIndexId)
            arr2.goodsList=arr2.asDoods.Categories[i].Items;
          }
        }
      }).catch(function (err) {
        console.log(err)
      });
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .weeks{
    width: 100%;
    height: 4rem;
    line-height: 4rem;
    text-align: center;
    font-size: 20px;
  }
  .bigAll{
    width: 100%;
    margin-top: 1rem;
  }
  .buys{
    height: 17rem;
    width: 96%;
    margin-left: 2%;
    background-color: white;
    margin-bottom: 20px;
    color: #333333;
  }
  .buys img{
    height: 12rem;
    width: 100%;
  }
  .part{
    margin-top: 5px;
    display: flex;
    justify-content: space-between;
  }
  .part p{
    margin-left: 2%;
    margin-right: 2%;
    margin-top: 5px;
  }
  .newRed{
    background-color: red;
    color: white;
    font-weight: 600;
  }
  .wordGrey{
    color: lightsteelblue;
  }
  .cephalosome{
    width: 100%;
    height: 4.4rem;
    color: white;
    font-size: 20px;
    /*text-align: center;*/
  }
</style>
