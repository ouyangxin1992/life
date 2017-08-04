<template>
  <div class="toolDress">
    <div  v-for="(obj,index) in base" v-on:click="goToolDress(index,obj)">
      <img :src="obj.CategoryImageUrl" alt="">
      <p>{{obj.Title}}</p>
    </div>
  </div>
</template>

<script>
  import axios from"axios"
  export default {
    name: 'toolDress',
    data(){
      return{
        base:true
      }
    },
    methods:{
      goToolDress(index,obj){
        this.$router.push({path:"/listcolumn",query:{id:index}});
        localStorage.setItem("getId",obj.ItemIndexId);
      }
    },
    created(){
      var arr4=this;
      axios.get("../../static/data/dress.json").then(function (data) {
        arr4.base=data.data.InnerData.Categories;
      }).catch(function (err) {
        console.log(err)
      })
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .toolDress{
    width: 100%;
    margin-top: 10px;
    height: 20rem;
    background-color: white;
    display: flex;
    flex-wrap: wrap;
  }
  .toolDress div{
    width: 25%;
    height: 10rem;
    text-align: center;
  }
  .toolDress div img{
    width: 90%;
    height: 6rem;
  }
</style>
