<template>
  <div>
    <p class="allIn">家务</p>
    <div class="housekeeping">
      <div  v-for="(obj,index) in house" v-on:click="goHousekeeping(index,obj)" >
        <img :src="obj.CategoryImageUrl" alt="">
        <p>{{obj.Title}}</p>
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
    methods:{
      goHousekeeping(index,obj){
        this.$router.push({path:"/listcolumn",query:{id:index}});
        localStorage.setItem("getId",obj.ItemIndexId);
      }
    },
    created(){
      var arr3=this;
      axios.get("../../static/data/chore.json").then(function (data) {
        arr3.house=data.data.InnerData.Categories;
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
