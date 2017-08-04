<template>
  <div>
    <p class="allIn">下厨</p>
    <div class="dessert">
      <div  v-for="(obj,index) in dessert" v-on:click="goDessert(index,obj)">
        <img :src="obj.CategoryImageUrl" alt="">
        <p>{{obj.Title}}</p>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from"axios"
  export default {
    name: 'dessert',
    data(){
      return{
        dessert:true
      }
    },
    methods:{
      goDessert(index,obj){
        this.$router.push({path:"/listcolumn",query:{id:index}});
        localStorage.setItem("getId",obj.ItemIndexId);
      }
    },
    created(){
      var arr3=this;
      axios.get("../../static/data/kitchen.json").then(function (data) {
        arr3.dessert=data.data.InnerData.Categories;
        console.log(data.data.InnerData.Categories)
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
  .dessert{
    width: 100%;
    background-color: white;
    display: flex;
    flex-wrap: wrap;
  }
  .dessert div{
    width: 32.7%;
    height: 10rem;
    text-align: center;
    border: 1px solid gainsboro;
  }
  .dessert div img{
    margin-top: 10px;
    width: 90%;
    height: 6rem;
  }
</style>
