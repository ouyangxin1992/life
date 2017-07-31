<template>
  <div class="toolSoft">
    <div  v-for="obj in soft" ids="obj.ItemInfoId">
      <img :src="obj.CategoryImageUrl" alt="">
      <p>{{obj.Title}}</p>
    </div>
  </div>
</template>

<script>
  import axios from"axios"
  export default {
    name: 'toolSoft',
    data(){
      return{
        soft:true
      }
    },
    created(){
      var arr8=this;
      axios.get("../../static/data/gray.json").then(function (data) {
        arr8.soft=data.data.InnerData.Categories;
        console.log(data.data.InnerData.Categories)
      }).catch(function (err) {
        console.log(err)
      })
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .toolSoft{
    width: 100%;
    margin-top: 10px;
    height: 20rem;
    background-color: white;
    display: flex;
    flex-wrap: wrap;
  }
  .toolSoft div{
    width: 25%;
    height: 10rem;
    text-align: center;
  }
  .toolSoft div img{
    width: 90%;
    height: 6rem;
  }
</style>
