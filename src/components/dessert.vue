<template>
  <div>
    <p class="allIn">下厨</p>
    <div class="dessert">
      <div  v-for="obj in dessert" >
        <img :src="obj.Icon" alt="">
        <p>{{obj.Name}}</p>
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
    created(){
      var ar1=this;
      axios.get("../../static/data/all.json").then(function (data) {
        ar1.dessert=data.data.InnerData[1].Children;

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
