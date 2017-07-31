<template>
  <div class="know">
    <div  v-for="obj in word">
      <p class="num">{{obj.num}}</p>
      <p class="tit">{{obj.title}}</p>
      <p class="woPage"> {{obj.page}}</p>
    </div>
  </div>
</template>

<script>
  import axios from"axios"
  export default {
    name: 'know',
    data(){
      return{
        word:true
      }
    },
    created(){
      var arrs=this;
      axios.get("../../static/data/know.json").then(function (data) {
        arrs.word=data.data.lifeVC;
      }).catch(function (err) {
        console.log(err)
      })
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.know{
  background:white;
}
.know div{
  border-bottom:1px solid gainsboro ;
}
  .num{
    height: 4rem;
    line-height: 4rem;
    font-size: 25px;
    color: #333333;
  }
  .tit{
    height: 4rem;
    line-height: 4rem;
    font-size: 20px;
    color: darkgrey;
  }
  .woPage{
    font-size: 14px;
    color: green;
    margin-bottom: 20px;
  }
</style>
