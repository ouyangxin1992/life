<template>
    <div class="circumstantial">
      <div  v-for="(obj , index) in circumstantial" class="oo" v-on:click="goInter(index,obj)">
        <img  v-lazy="obj.ImageUrl" alt="">
        <p class="pp">{{obj.Name}}</p>
        <div class="openIn">
          <p>
            <span class="rred">￥{{obj.SalePrice}}</span>
            <span class="small">￥{{obj.MarketPrice}}</span>
          </p>
          <p class="bigG">
            月销{{obj.SaleQty}}
          </p>
        </div>
      </div>
      <router-view></router-view>
    </div>
</template>

<script>
  import axios from"axios";
  export default {
    name: 'circumstantial',
    data(){
      return{
        circumstantial:true
      }
    },
    methods:{
      goInter(index,obj){
        sessionStorage[location.hash]=document.body.scrollTop;
        this.$router.push({path:"/detailpage",query:{id:index}});
        localStorage.setItem("getId",obj.ItemInfoID);
      }
    },
    created(){
      if(sessionStorage.getItem(location.hash)){
          setTimeout(function () {
            document.body.scrollTop=sessionStorage.getItem(location.hash);
            sessionStorage.removeItem(location.hash)
          },200)
      }
      var ar1=this;
      axios.get("../../static/data/time.json").then(function (data) {
        ar1.circumstantial=data.data.InnerData.StrollList;

      }).catch(function (err) {
        console.log(err)
      })
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .circumstantial{
    width: 100%;
    background-color: white;
    display: flex;
    flex-wrap: wrap;
  }
  .circumstantial .oo{
    width: 50%;
    height: 20rem;
  }
  .circumstantial .oo img{
    margin-top: 10px;
    width: 90%;
    height: 15rem;
    margin-left: 5%;
    border-radius: 5px;
    margin-bottom: 5px;
  }
  .pp{
    width: 90%;
    margin-left: 5%;
  }
  .openIn{
    width: 90%;
    margin-left: 5%;
    display: flex;
    justify-content: space-between;
  }
  .rred{
    font-size: 14px;
    color: red;
  }
  .small{
    font-size: 8px;
    text-decoration: line-through;
  }
  .bigG{
    font-size: 14px;
    color: grey;
  }
</style>
