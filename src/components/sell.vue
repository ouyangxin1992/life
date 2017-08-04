<template>
  <div class="sell">
    <div v-for="(obj,index) in wares" ids="obj.ItemInfoId">
      <img :src="obj.ImageUrl" alt=""  v-on:click="goSell(index,obj)">
      <p>{{obj.Name}}</p>
      <span>￥ {{obj.SalePrice}}</span>
    </div>
  </div>
</template>

<script>
  import axios from "axios"
  export default {
    name: 'sell',
    data(){
        return{
          wares:true
        }
    },
    methods:{
      goSell(index,obj){
        this.$router.push({path:"/detailpage",query:{id:index}});
        localStorage.setItem("getId",obj.ItemInfoId);
        console.log(localStorage.getItem("getId"))
      }
    },
    created(){
      var arr1=this
      axios.get("../../static/data/homeHot.json").then(function (data) {
         arr1.wares=data.data.InnerData;
         console.log(data.data.InnerData)
      }).catch(function (err) {
        console.log(err)
      })
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.sell{
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  background-color: white;
  margin-bottom: 60px;
}
.sell div{
  width: 45%;
  margin-top: 10px;
}
.sell div img{
  width: 100%;
  height:15rem;
}
.sell div p{
  font-size: 0.8rem;
  color: #333333;
  font-weight: 500;
}
.sell div span{
  color: red;
}
</style>
