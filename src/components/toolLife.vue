<template>
  <div class="toolLife">
    <div  v-for="(obj,index) in life" v-on:click="goToolLife(index,obj)">
      <img :src="obj.CategoryImageUrl" alt="">
      <p>{{obj.Title}}</p>
    </div>
  </div>
</template>

<script>
  import axios from"axios"
  export default {
    name: 'toolLife',
    data(){
      return{
        life:true
      }
    },
    methods:{
      goToolLife(index,obj){
        this.$router.push({path:"/listcolumn",query:{id:index}});
        localStorage.setItem("getId",obj.ItemIndexId);
      }
    },
    created(){
      var arr6=this;
      axios.get("../../static/data/life.json").then(function (data) {
        arr6.life=data.data.InnerData.Categories;
        console.log(data.data.InnerData.Categories)
      }).catch(function (err) {
        console.log(err)
      })
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .toolLife{
    width: 100%;
    margin-top: 10px;
    height: 20rem;
    background-color: white;
    display: flex;
    flex-wrap: wrap;
  }
  .toolLife div{
    width: 25%;
    height: 10rem;
    text-align: center;
  }
  .toolLife div img{
    width: 90%;
    height: 6rem;
  }
</style>
