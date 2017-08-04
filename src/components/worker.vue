<template>
  <div class="bb">
    <p class="allIn">工作和旅行</p>
    <div class="worker">
      <div  v-for="(obj,index) in worker" v-on:click="goWorker(index,obj)">
        <img :src="obj.CategoryImageUrl" alt="">
        <p>{{obj.Title}}</p>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from"axios"
  export default {
    name: 'worker',
    data(){
      return{
        worker:true
      }
    },
    methods:{
      goWorker(index,obj){
        this.$router.push({path:"/listcolumn",query:{id:index}});
        localStorage.setItem("getId",obj.ItemIndexId);
      }
    },
    created(){
      var arr12=this;
      axios.get("../../static/data/work.json").then(function (data) {
        arr12.worker=data.data.InnerData.Categories;
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
  .worker{
    width: 100%;
    background-color: white;
    display: flex;
    flex-wrap: wrap;
  }
  .worker div{
    width: 32.7%;
    height: 10rem;
    text-align: center;
    border: 1px solid gainsboro;
  }
  .worker div img{
    margin-top: 10px;
    width: 90%;
    height: 6rem;
  }
  .bb{
    margin-bottom: 5rem;
  }
</style>
