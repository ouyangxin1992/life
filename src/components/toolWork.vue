<template>
  <div class="toolWork">
    <div  v-for="(obj,index) in work" v-on:click="goToolWork(index,obj)">
      <img :src="obj.CategoryImageUrl" alt="">
      <p>{{obj.Title}}</p>
    </div>
  </div>
</template>

<script>
  import axios from"axios"
  export default {
    name: 'toolWork',
    data(){
      return{
        work:true
      }
    },
    methods:{
      goToolWork(index,obj){
        this.$router.push({path:"/listcolumn",query:{id:index}});
        localStorage.setItem("getId",obj.ItemIndexId);
      }
    },
    created(){
      var arr12=this;
      axios.get("../../static/data/work.json").then(function (data) {
        arr12.work=data.data.InnerData.Categories;
        console.log(data.data.InnerData.Categories)
      }).catch(function (err) {
        console.log(err)
      })
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .toolWork{
    width: 100%;
    margin-top: 10px;
    height: 30rem;
    background-color: white;
    display: flex;
    flex-wrap: wrap;
  }
  .toolWork div{
    width: 25%;
    height: 10rem;
    text-align: center;
  }
  .toolWork div img{
    width: 90%;
    height: 6rem;
  }
</style>
