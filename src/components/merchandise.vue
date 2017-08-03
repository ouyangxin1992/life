<template>
  <div class="merchandise">
    <div class="goHomes" v-show="lookGo">
      <img src="../../static/img/car.png" alt="" class="picCar">
      <p v-on:click="goToH">去首页逛逛吧</p>
    </div>

    <div class="showCar">
      <div class="goodsInfo" v-for="item in buyCarGoods" >
        <input type="checkbox" class="mag">
        <img :src="item.img" alt="">
        <div>
          <p>{{item.name}}</p>
          <p>
              <span class="priceSin">{{item.price}}</span>
          <span class="control">
            <span v-on:click="cut(item.id)">-</span>
            <span class="count">{{item.num}}</span>
            <span v-on:click="joins(item.id)">+</span>
          </span>
            <span style="margin-right:10%" v-on:click="dels(item.id)">删除</span>
          </p>
        </div>
      </div>
    </div>


    <!--结算条-->
    <div class="accounts">
      <div class="accountWrap">
        <div class="check" v-on:click="selAll">
          <el-checkbox v-model="checked"></el-checkbox>
          <span>全选</span>
        </div>
        <div class="money">
          <p>合计:￥ <span style="color:#f0593f;font-size: 1.5rem" class="toGetNum">0</span></p>
          <!--<p>总额:￥</p>-->
        </div>
      </div>
      <div class="goBuy">
        去结算
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';
  export default {
    name: 'merchandise',
    data(){
        return{
          lookGo:true,
          buyCarGoods:"",
          checked:false,
        }
    },
    methods:{
//        全选
      selAll(e){
          var selects=document.querySelector(".el-checkbox__original");
          var mag=document.querySelectorAll(".mag");
          var toGetNum=document.querySelector(".toGetNum");
          var priceSin=document.querySelectorAll(".priceSin");
          var count=document.querySelectorAll(".count");
          var num=0;
          if(selects.checked){
              console.log(1);
             for(var s in this.buyCarGoods){
                this.$set(mag[s],"checked",true);
                 num += parseInt(parseInt(priceSin[s].innerHTML.slice(1))*parseInt(count[s].innerHTML));
             }
            toGetNum.innerHTML=num;
          }else{
            for(var s=0;s<mag.length;s++){
              this.$set(mag[s],"checked",false);
              toGetNum.innerHTML=num;
            }
          }
      },
      goToH(){
        this.$router.push("/home")
      },
      cut(id,e){
          if(!e){
              e=window.event;
          }
          var count=document.querySelector(".count");
          var goodsInfo=document.querySelectorAll(".goodsInfo");
          var num=e.target.nextElementSibling.innerHTML;
          num--;
          if(num<1){
            num=1;
            this.$alert('确定删除这个商品吗', '删除', {
              confirmButtonText: '确定',
              callback: action => {
                this.$message({
                  type: 'info',
                  message: `action: ${ action }`
                });
              }
            });
            e.target.parentNode.parentNode.parentNode.parentNode.remove();
            axios.delete("http://localhost:5500/my-objects/"+id,{
              id:id
            }).then(function (res) {
            })
          }
          e.target.nextElementSibling.innerHTML=num;
          axios.put("http://localhost:5500/my-objects/"+id,{
            num:count.innerHTML
          }).then(function (res) {
          })
      },
      joins(id,e){
          if(!e){
            e=window.event;
          }
          var count=document.querySelector(".count");
          var num=e.target.previousElementSibling.innerHTML;
          num++;
          e.target.previousElementSibling.innerHTML=num;
          axios.put("http://localhost:5500/my-objects/"+id,{
            num:count.innerHTML
          }).then(function (res) {

          })
      },
      dels(id,e){
        if(!e){
          e=window.event;
        }
        this.$alert('确定删除这个商品吗', '删除', {
          confirmButtonText: '确定',
          callback: action => {
            this.$message({
              type: 'info',
              message: `action: ${ action }`
            });
          }
        });
        e.target.parentNode.parentNode.parentNode.remove();
        axios.delete("http://localhost:5500/my-objects/"+id,{
          id:id
        }).then(function (res) {
        })
      }
    },

    created(){
      if(localStorage.getItem("vals")){
        this.lookGo=false;
      }else{
        this.lookGo=true;
      }
      var that=this;
      axios.get("http://localhost:5500/my-objects/").then(function (res) {
        that.buyCarGoods=res.data;
      },function (err) {
        console.log(err)
      })
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .merchandise .goHomes{
    text-align: center;
  }
  .merchandise .goHomes p{
    width: 50%;
    height: 3rem;
    line-height: 3rem;
    border: 1px solid green;
    color: green;
    font-size: 16px;
    margin-left: 25%;
    margin-top: 2rem;
    border-radius: 10px;
  }
  .goodsInfo {
    width:100%;
    margin-top: 1rem;
    display:flex;
    padding:3%;
    background-color: white;
    /*margin-top: 1rem;*/
  }
  .goodsInfo img{
    width:4rem;
    height:5rem;
    margin-right:2%;
    margin-left: 1%;
  }
  .goodsInfo div{
    width:100%;
    line-height:2rem;
  }
  .goodsInfo p{
    display: flex;
    width:100%;
    justify-content: space-between;
  }
  /*加减控制器*/
  .control{
    margin-left:35%;
    display: inline-block;
    font-size: 0;
  }
  .control span:nth-child(1){
    display: inline-block;
    width:2rem;
    height:2rem;
    border:1px solid #ccc;
    border-radius: 0.3rem 0 0 0.3rem;
    text-align: center;
  }
  .control span:nth-child(2){
    display: inline-block;
    width:2rem;
    height:2rem;
    border:1px solid #ccc;
    text-align: center;
  }
  .control span:nth-child(3){
    display: inline-block;
    width:2rem;
    height:2rem;
    border:1px solid #ccc;
    border-radius:0 0.3rem 0.3rem 0;
    text-align: center;
  }
  .showCar{
    width:100%;
    margin-bottom: 110px;
  }
  .mag{
    margin-top: 2rem;
    width: 20px;
    height: 20px;
  }
  .accounts{
    width:100%;
    height:5rem;
    background-color: white;
    position: fixed;
    bottom:4.9rem;
    display: flex;
    justify-content: space-between;
  }
  .accountWrap{
    display: flex;
    width:50%;
    justify-content: space-around;
    line-height:2rem;
    margin-top: 0.3rem;
  }
  .check{
    display: flex;
    line-height: 5rem;
  }
  .money{
    width: 50%;
  }
  .money span{
   line-height: 5rem;
    height:2rem;
    font-size: 1.5rem;
  }
  .goBuy{
    width:40%;
    height:4.9rem;
    background-color: green;
    color:white;
    line-height: 4.9rem;
    text-align: center;
  }
</style>
