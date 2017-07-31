<template>
  <div class="product">
      <p class="weeks">最近一周新品</p>
      <div class="bigAll">
        <div v-for="obj in  newGoods" ids="obj.ItemInfoId" class="buys">
          <img :src="obj.ImageUrl" alt="">
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
    name: 'product',
    data(){
        return{
          newGoods:true
        }
    },
    created(){
        var arr2=this;
        axios.get("../../static/data/homeHot.json").then(function (data) {
          arr2.newGoods=data.data.InnerData;
        }).catch(function (err) {
          console.log(err)
        })
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
</style>
