<template>
  <div class="toolCook">
    <div  v-for="obj in instrument" ids="obj.ItemInfoId">
      <img :src="obj.CategoryImageUrl" alt="">
      <p>{{obj.Title}}</p>
    </div>
  </div>
</template>

<script>
  import axios from"axios"
  export default {
    name: 'toolCook',
    data(){
      return{
        instrument:true
      }
    },
    created(){
      var arr3=this;
      axios.get("../../static/data/kitchen.json").then(function (data) {
        arr3.instrument=data.data.InnerData.Categories;
        console.log(data.data.InnerData.Categories)
      }).catch(function (err) {
        console.log(err)
      })
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .toolCook{
    width: 100%;
    margin-top: 10px;
    height: 30rem;
    background-color: white;
    display: flex;
    flex-wrap: wrap;
  }
  .toolCook div{
    width: 25%;
    height: 10rem;
    text-align: center;
  }
  .toolCook div img{
    width: 90%;
    height: 6rem;
  }
</style>
