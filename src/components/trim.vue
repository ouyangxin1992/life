<template>
  <div>
    <p class="allIn">软装</p>
    <div class="trim">
      <div  v-for="(obj,index) in trim" v-on:click="goTrim(index,obj)">
        <img :src="obj.CategoryImageUrl" alt="">
        <p>{{obj.Title}}</p>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from"axios"
  export default {
    name: 'trim',
    data(){
      return{
        trim:true
      }
    },
    methods:{
      goTrim(index,obj){
        this.$router.push({path:"/listcolumn",query:{id:index}});
        localStorage.setItem("getId",obj.ItemIndexId);
      }
    },
    created(){
      var arr8=this;
      axios.get("../../static/data/gray.json").then(function (data) {
        arr8.trim=data.data.InnerData.Categories;
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
  .trim{
    width: 100%;
    background-color: white;
    display: flex;
    flex-wrap: wrap;
  }
  .trim div{
    width: 32.7%;
    height: 10rem;
    text-align: center;
    border: 1px solid gainsboro;
  }
  .trim div img{
    margin-top: 10px;
    width: 90%;
    height: 6rem;
  }
</style>
