<template>
  <div class="tools">
  <div  v-for="(obj,index) in instrument" v-on:click="goTools(index,obj)">
    <img :src="obj.CategoryImageUrl" alt="">
    <p>{{obj.Title}}</p>
  </div>
</div>
</template>

<script>
  import axios from"axios"
  export default {
    name: 'tools',
    data(){
      return{
        instrument:true
      }
    },
    methods:{
      goTools(index,obj){
        this.$router.push({path:"/listcolumn",query:{id:index}});
        localStorage.setItem("getId",obj.ItemIndexId);
      }
    },
    created(){
      var arr3=this;
      axios.get("../../static/data/chore.json").then(function (data) {
        arr3.instrument=data.data.InnerData.Categories;
      }).catch(function (err) {
        console.log(err)
      })
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .tools{
    width: 100%;
    margin-top: 10px;
    height: 30rem;
    background-color: white;
    display: flex;
    flex-wrap: wrap;
  }
  .tools div{
    width: 25%;
    height: 10rem;
    text-align: center;
  }
  .tools div img{
    width: 90%;
    height: 6rem;
  }
</style>
