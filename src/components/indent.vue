<template>
  <div class="indent">
      <div v-for="obj in order" class="dv">
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
    name: 'indent',
    data(){
      return{
        order:true
      }
    },
    created(){
      var arr6=this;
      axios.get("../../static/data/order.json").then(function (data) {
        arr6.order=data.data.InnerData.CenterMenus[0].Menus;

      }).catch(function (err) {
        console.log(err)
      })
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.indent .dv{
  width: 100%;
  height: 5rem;
  border-top: 1px solid gainsboro;
  display: flex;
  justify-content: space-between;
  background-color: white;
}
.indent .dv div{
  height: 3rem;
  margin-top: 1rem;
  display: flex;
}
.indent .dv div img{
  height: 3rem;
}
.indent .dv div p{
  height: 3rem;
  line-height: 3rem;
}
  i{
    line-height: 5rem;
    color: gainsboro;
    font-size: 16px;
  }
</style>
