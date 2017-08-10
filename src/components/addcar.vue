<template>
  <!--详情页的加入购物车-->
  <div class="addcar">
    <!--客服部分图标-->
    <div class="peopleCar">
      <img src="../../static/img/people.png" alt="">
      <p>客服</p>
    </div>
    <!--首页部分图标-->
    <div class="peopleCar" v-on:click="goToHomes">
      <img src="../../static/img/greyHome.png" alt="">
      <p>首页</p>
    </div>
    <!--购物车的图片-->
    <div class="peopleHome" v-on:click="enterCars">
      <img src="../../static/img/gocar.png" alt="">
    </div>
    <!--加入购物车-->
    <el-button type="success" icon="plus" class="addGo" v-on:click="toCar">加入购物车</el-button>
  </div>
</template>

<script>
//  <!--引入axios-->
  import axios from 'axios';
//  引入mite-ui 的提示框
  import { Toast } from 'mint-ui';
  export default {
    name: 'addcar',
//    方法
    methods:{
//        点击首页进入首页
      goToHomes(){
        this.$router.push("/home")
      },
//      点击购物车进入购物车
      enterCars(){
        this.$router.push("/car")
      },
//      点击加入购物车进入往后台传送数据
      toCar(){
        var picTu=document.querySelector(".picTu");
        var nameTu=document.querySelector(".nameTu");
        var littleMoney=document.querySelector(".littleMoney");
        var amount=document.querySelector(".amount");
        var that=this;
        var usess=localStorage.getItem("userId");
//        判断存入的当前用户名有没有值，localStorage存的
        if(usess=""){
//            没有值去到登录界面
            this.$router.push("/mine");
        }else{
//            先从后台拉取数据，get方式
          axios.get("http://localhost:5500/my-objects/").then(function (res) {
            that.names=res.data;
//            声明一个空数组
            var arr=[];
//            判断后台数据的数量
            if(that.names.length!=0){
//                数据不为零时
              for(var x=0;x<that.names.length;x++){
//                  把数据的每一个商品名称push到数组里
                arr.push(that.names[x].name)
//                判断详情页的商品名称与后台数据的商品名称是否一致
                if(that.names[x].name==nameTu.innerHTML){
//                    一致的话用put的方法改变相应商品的商品数量
                  axios.put("http://localhost:5500/my-objects/"+that.names[x].id,{
                    num:parseInt(that.names[x].num)+parseInt(amount.innerHTML)
                  }).then(function (res) {
//                  后台添加数据成功后，用mint插件实现一个两秒消失的提示框
                    Toast({
                      message: '加入购物车成功',
                      position: 'middle',
                      duration: 2000
                    });
                    return;
                  })
                }
              }
//              如果当前商品名称在后台数据中不存在，就往后台添加数据
//              用数组的indexOf判断是否存在，等于-1表示不存在
              if(arr.indexOf(nameTu.innerHTML)==-1){
//                  post方式上传数据，请求头
                axios.post("http://localhost:5500/my-objects",{
                  name:nameTu.innerHTML,
                  price:littleMoney.innerHTML,
                  num:amount.innerHTML,
                  img:picTu.src,
                  username:localStorage.getItem("userId")
                }).then(function (res) {
 //                  后台添加数据成功后，用mint插件实现一个两秒消失的提示框
                  Toast({
                    message: '加入购物车成功',
                    position: 'middle',
                    duration: 2000
                  });
                  localStorage.setItem("vals","成功");
                  return;
                })
              }
            }else{
//                如果后台还不存在数据，直接用post方式上传数据，请求头
              axios.post("http://localhost:5500/my-objects",{
                name:nameTu.innerHTML,
                price:littleMoney.innerHTML,
                num:amount.innerHTML,
                img:picTu.src,
                username:localStorage.getItem("userId")
              }).then(function (res) {
//                  后台添加数据成功后，用mint插件实现一个两秒消失的提示框
                Toast({
                  message: '加入购物车成功',
                  position: 'middle',
                  duration: 2000
                });
                localStorage.setItem("vals","成功");
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
  /*<!--scoped表示此css代码只在当前页面执行，可直接在此单词后面写scss进行编译-->*/
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
