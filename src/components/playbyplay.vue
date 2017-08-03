<template>
  <div class="playbylay">
     <div class="xia">
       <img src="" alt="" class="picTu">
       <p class="nameTu"></p>
       <p class="detailTu"></p>
       <p class="moneyTu">
         <span class="littleMoney"></span>
         <span class="moreMoney"></span>
       </p>
       <p class="num">
           &nbsp;&nbsp;数量：<span class="reduce" v-on:click="reduceNum">-</span><span class="amount">1</span><span class="add" v-on:click="addNum">+</span>
       </p>
     </div>
    <!--加入购物车-->
    <addcar></addcar>
  </div>

</template>

<script>
  import axios from"axios"
  //  引用加入购物车
  import addcar from '@/components/addcar'
  export default {
    name: 'playbyplay',
    data(){
      return{
        arr:true,
        circumstantial:true,
      }
    },
    mounted(){
      this.arr=this.$route.query.id;
    },
    methods:{
      reduceNum(){
         var amount=document.querySelector(".amount");
         var num=amount.innerHTML;
          num--;
          if(num<=1){
              num=1;
          }
          amount.innerHTML=num;
      },
      addNum(){
        var amount=document.querySelector(".amount");
        var num=amount.innerHTML;
        num++;
        amount.innerHTML=num;
      }
    },
    created(){
      var ar1=this;
      axios.get("../../static/data/time.json").then(function (data) {
        ar1.circumstantial=data.data.InnerData.StrollList;
        for (var i=0;i<ar1.circumstantial.length;i++){
            var doId=localStorage.getItem("getId");
            if(doId==ar1.circumstantial[i].ItemInfoID){
                var picTu=document.querySelector(".picTu");
                picTu.src=ar1.circumstantial[i].ImageUrl;
                var nameTu=document.querySelector(".nameTu");
                nameTu.innerHTML=ar1.circumstantial[i].Name;
                var detailTu=document.querySelector(".detailTu");
                detailTu.innerHTML=ar1.circumstantial[i].detail;
                var littleMoney=document.querySelector(".littleMoney");
                littleMoney.innerHTML="￥"+ar1.circumstantial[i].SalePrice;
                var moreMoney=document.querySelector(".moreMoney");
                moreMoney.innerHTML="￥"+ar1.circumstantial[i].MarketPrice;
            }
        }
      }).catch(function (err) {
        console.log(err)
      })
    },
    //    配置信息
    components:{
      addcar
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .playbylay{
    background-color: white;
    margin-bottom: 5rem;
  }
.picTu{
  height:25rem;
  width: 100%;
}
  .nameTu{
    width: 100%;
    font-size: 18px;
    color: #333333;
    text-align: center;
    margin-top: 1rem;
    font-weight:600;
  }
  .detailTu{
    color: grey;
    line-height: 2rem;
    text-align: center;
  }
  .moneyTu{
    text-align: center;
    line-height: 4rem;
  }
  .moneyTu span{
    font-size: 18px;
    font-weight: 500;
  }
  .littleMoney{
    color: red;
  }
  .moreMoney{
    text-decoration: line-through;
  }
  .num{
    line-height: 4rem;
    border-top: 1px solid gainsboro;
    font-size: 12px;
    color: grey;
  }
  .num span{
    display: inline-block;
    width: 2rem;
    height: 2rem;
    border: 1px solid gainsboro;
    text-align: center;
    line-height: 2rem;
    margin-top: 1rem;
    color: #333333;
  }
  .reduce{
    background-color: #e6e6e6;
  }
  .add{
    background-color: #e6e6e6;
  }

</style>
