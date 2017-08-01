<template>
  <div class="information">
    <div v-for="obj in information" class="dv">
      <div>
        &nbsp;&nbsp;<img :src="obj.Icon" alt="">&nbsp;&nbsp;
        <p>
          {{obj.Title}}
        </p>
      </div>
      <i class="el-icon-arrow-right"></i>
    </div>
  </div>
</template>

<script>
  import axios from"axios"
  export default {
    name: 'information',
    data(){
      return{
        information:true
      }
    },
    created(){
      var arr6=this;
      axios.get("../../static/data/order.json").then(function (data) {
        arr6.information=data.data.InnerData.CenterMenus[2].Menus;

      }).catch(function (err) {
        console.log(err)
      })
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .information{
    margin-top: 1rem;
    margin-bottom: 5rem;
  }
  .information .dv{
    width: 100%;
    height: 5rem;
    border-top: 1px solid gainsboro;
    display: flex;
    justify-content: space-between;
    background-color: white;
  }
  .information .dv div{
    height: 3rem;
    margin-top: 1rem;
    display: flex;
  }
  .information .dv div img{
    height: 3rem;
  }
  .information .dv div p{
    height: 3rem;
    line-height: 3rem;
  }
  i{
    line-height: 5rem;
    color: gainsboro;
    font-size: 16px;
  }
</style>
