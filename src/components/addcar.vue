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
        var picTu=document.querySelector(".picTu");
        var nameTu=document.querySelector(".nameTu");
        var littleMoney=document.querySelector(".littleMoney");
        var amount=document.querySelector(".amount");
        var that=this;
        var usess=localStorage.getItem("userId");
        console.log(usess)
        if(usess=""){
            this.$router.push("/car");
        }else{
          axios.get("http://localhost:5500/my-objects/").then(function (res) {
            that.names=res.data;
            console.log(that.names.length);
            var arr=[];
//          console.log(that.names[x].name.indexOf(nameTu.innerHTML))
            if(that.names.length!=0){
              for(var x=0;x<that.names.length;x++){
                arr.push(that.names[x].name)
                console.log(that.names[x].name==nameTu.innerHTML);
                if(that.names[x].name==nameTu.innerHTML){
                  axios.put("http://localhost:5500/my-objects/"+that.names[x].id,{
                    num:parseInt(that.names[x].num)+parseInt(amount.innerHTML)
                  }).then(function (res) {
                    return;
                  })
                }
              }
              if(arr.indexOf(nameTu.innerHTML)==-1){
//                arr.push(that.names[x].name);
                axios.post("http://localhost:5500/my-objects",{
                  name:nameTu.innerHTML,
                  price:littleMoney.innerHTML,
                  num:amount.innerHTML,
                  img:picTu.src,
                  username:localStorage.getItem("userId")
                }).then(function (res) {
                  var diva=document.createElement("div");
                  diva.style.width="50%";
                  diva.style.height="50px";
                  diva.style.backgroundColor="rgba(0,0,0,0.5)";
                  diva.style.borderRadius="10px";
                  diva.style.lineHeight="50px";
                  diva.style.textAlign="center";
                  diva.style.color="white";
                  diva.style.position="absolute";
                  diva.style.top="200px";
                  diva.style.left="25%";
                  diva.innerHTML="加入购物车成功";
                  document.body.appendChild(diva);
                  diva.onclick=function () {
                    diva.style.display="none";
                  };
                  localStorage.setItem("vals","成功");
                  return;
                })
              }
            }else{
              axios.post("http://localhost:5500/my-objects",{
                name:nameTu.innerHTML,
                price:littleMoney.innerHTML,
                num:amount.innerHTML,
                img:picTu.src,
                username:localStorage.getItem("userId")
              }).then(function (res) {
                var diva=document.createElement("div");
                diva.style.width="50%";
                diva.style.height="50px";
                diva.style.backgroundColor="rgba(0,0,0,0.5)";
                diva.style.borderRadius="10px";
                diva.style.lineHeight="50px";
                diva.style.textAlign="center";
                diva.style.color="white";
                diva.style.position="absolute";
                diva.style.top="200px";
                diva.style.left="25%";
                diva.innerHTML="加入购物车成功";
                document.body.appendChild(diva);
                diva.onclick=function () {
                  diva.style.display="none";
                };
                localStorage.setItem("vals","成功")
                return;
              })
            }

          },function (err) {
            console.log(err)
          })
        }

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
  z-index: 999;
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
