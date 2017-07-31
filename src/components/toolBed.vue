<template>
  <div class="toolBed">
    <div  v-for="obj in bed" ids="obj.ItemInfoId">
      <img :src="obj.CategoryImageUrl" alt="">
      <p>{{obj.Title}}</p>
    </div>
  </div>
</template>

<script>
  import axios from"axios"
  export default {
    name: 'toolBed',
    data(){
      return{
        bed:true
      }
    },
    created(){
      var arr10=this;
      axios.get("../../static/data/bed.json").then(function (data) {
        arr10.bed=data.data.InnerData.Categories;
        console.log(data.data.InnerData.Categories)
      }).catch(function (err) {
        console.log(err)
      })
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .toolBed{
    width: 100%;
    margin-top: 10px;
    height: 30rem;
    background-color: white;
    display: flex;
    flex-wrap: wrap;
  }
  .toolBed div{
    width: 25%;
    height: 10rem;
    text-align: center;
  }
  .toolBed div img{
    width: 90%;
    height: 6rem;
  }
</style>
