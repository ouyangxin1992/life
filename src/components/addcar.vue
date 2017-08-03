<template>
  <div class="addcar">
    <div class="peopleCar">
      <img src="../../static/img/people.png" alt="">
      <p>客服</p>
    </div>
    <div class="peopleCar" v-on:click="goToHomes">
      <img src="../../static/img/greyHome.png" alt="">
      <p>首页</p>
    </div>
    <div class="peopleHome" v-on:click="enterCars">
      <img src="../../static/img/gocar.png" alt="">
    </div>
    <el-button type="success" icon="plus" class="addGo" v-on:click="toCar">加入购物车</el-button>
  </div>
</template>

<script>
  import axios from 'axios';
  export default {
    name: 'addcar',
    methods:{
      goToHomes(){
        this.$router.push("/home")
      },
      enterCars(){
        this.$router.push("/car")
      },
      toCar(){
        var obj={};
        var picTu=document.querySelector(".picTu");
        var nameTu=document.querySelector(".nameTu");
        var littleMoney=document.querySelector(".littleMoney");
        var amount=document.querySelector(".amount");
        axios.post("http://localhost:5500/my-objects",{
            name:nameTu.innerHTML,
            price:littleMoney.innerHTML,
            num:amount.innerHTML,
            img:picTu.src
        }).then(function (res) {
            
          localStorage.setItem("vals","成功")
        })
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.addcar{
  width: 100%;
  height: 4rem;
  background-color: ghostwhite;
  position: fixed;
  left: 0;
  bottom: 0;
  border-top: 1px solid gainsboro;
  display: flex;
  justify-content: space-around;
}
.peopleCar{
  text-align: center;
}
  .peopleCar img{
    height: 1rem;
    margin-top: 0.5rem;
  }
.peopleCar p{
  color:  grey;
}
.peopleHome {
  height: 3rem;
  border: 1px solid green;
  margin-top: 0.5rem;
  border-radius: 5px;
  text-align: center;
  width: 20%;
}
  .peopleHome img{
    height:2rem;
    margin-top: 0.5rem;
  }
  .addGo{
    height: 3rem;
    margin-top: 0.5rem;
  }
</style>
