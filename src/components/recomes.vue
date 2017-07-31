<template>
  <div class="recomes">
    <p class="weekss">Riso.S的精心推荐</p>
    <div class="bigAlls">
      <div v-for="obj in  risos" ids="obj.ItemInfoId" class="buyss">
        <img :src="obj.ImageUrl" alt="">
        <p>{{obj.Name}}</p>
        <div class="parts">
          <p>
            <span>￥ {{obj.SalePrice}}</span>
            <span class="newReds">{{obj.PriceTag}}</span>
          </p>
          <p class="wordGreys">
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
    name: 'recomes',
    data(){
      return{
        risos:true
      }
    },
    created(){
      var arr5=this;
      axios.get("../../static/data/dress.json").then(function (data) {
        arr5.risos=data.data.InnerData.CEORecommends;
      }).catch(function (err) {
        console.log(err)
      })
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .weekss{
    width: 100%;
    height: 4rem;
    line-height: 4rem;
    text-align: center;
    font-size: 20px;
  }
  .bigAlls{
    width: 100%;
  }
  .buyss{
    height: 17rem;
    width: 96%;
    margin-left: 2%;
    background-color: white;
    margin-bottom: 20px;
    color: #333333;
  }
  .buyss img{
    height: 12rem;
    width: 100%;
  }
  .parts{
    margin-top: 5px;
    display: flex;
    justify-content: space-between;
  }
  .parts p{
    margin-left: 2%;
    margin-right: 2%;
    margin-top: 5px;
  }
  .newReds{
    background-color: red;
    color: white;
    font-weight: 600;
  }
  .wordGreys{
    color: lightsteelblue;
  }
  .recomes{
    margin-bottom: 60px;
  }
</style>
