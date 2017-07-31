<template>
  <div>
    <p class="allIn">家务</p>
    <div class="housekeeping">
      <div  v-for="obj in house" >
        <img :src="obj.Icon" alt="">
        <p>{{obj.Name}}</p>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from"axios"
  export default {
    name: 'housekeeping',
    data(){
      return{
        house:true
      }
    },
    created(){
      var ar1=this;
      axios.get("../../static/data/all.json").then(function (data) {
        ar1.house=data.data.InnerData[0].Children;

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
  .housekeeping{
    width: 100%;
    background-color: white;
    display: flex;
    flex-wrap: wrap;
  }
  .housekeeping div{
    width: 32.7%;
    height: 10rem;
    text-align: center;
    border: 1px solid gainsboro;
  }
  .housekeeping div img{
    margin-top: 10px;
    width: 90%;
    height: 6rem;
  }
</style>
