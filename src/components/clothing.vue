<template>
  <div>
    <p class="allIn">家居服</p>
    <div class="clothing">
      <div  v-for="(obj,index) in clothing" v-on:click="goClothing(index,obj)">
        <img :src="obj.CategoryImageUrl" alt="">
        <p>{{obj.Title}}</p>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from"axios"
  export default {
    name: 'clothing',
    data(){
      return{
        clothing:true
      }
    },
    methods:{
      goClothing(index,obj){
        this.$router.push({path:"/listcolumn",query:{id:index}});
        localStorage.setItem("getId",obj.ItemIndexId);
      }
    },
    created(){
      var arr4=this;
      axios.get("../../static/data/dress.json").then(function (data) {
        arr4.clothing=data.data.InnerData.Categories;
      }).catch(function (err) {
        console.log(err)
      })
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .allIn{
    height: 4rem;
    line-height: 4rem;
    text-align: center;
    margin-top: 10px;
    font-size: 20px;
  }
  .clothing{
    width: 100%;
    background-color: white;
    display: flex;
    flex-wrap: wrap;
  }
  .clothing div{
    width: 32.7%;
    height: 10rem;
    text-align: center;
    border: 1px solid gainsboro;
  }
  .clothing div img{
    margin-top: 10px;
    width: 90%;
    height: 6rem;
  }
</style>
