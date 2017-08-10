<template>
  <!--详情页面-->
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
       <div class="row" style="margin-top: 30px;">
         送至：
         <a  class="btn btn-info btn-lg active" role="button" id="sel_city"  @click="citySlect">选取配送城市</a>
       </div>
       <p class="free">新会员首单，满69元免运费</p>
       <img src="../../static/img/500fen.jpg" alt="" class="fen">
       <img src="../../static/img/6year.jpg" alt="" class="year">
       <!--路由切换-->
       <div class="threeTab">
         <div  v-for="obj in threeList">
           <router-link :to='obj.to' :class='obj.cla' :activeClass='obj.activeCla'>
             {{obj.title}}
          </router-link>
         </div>
       </div>
       <router-view></router-view>
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
        threeList:[
          {
            to:'/detailpage/recommend',
            title:'商品介绍',
            cla:'recommendCla',
            activeCla:"recommendActive"
          },
          {
            to:'/detailpage/standards',
            title:'规格参数',
            cla:'standardsCla',
            activeCla:"standardsActive"
          },
          {
            to:'/detailpage/discuss',
            title:'评论',
            cla:'discussCla',
            activeCla:"discussActive"
          },
          ]
      }
    },
    mounted(){
      this.arr=this.$route.query.id;
    },
    methods:{
      citySlect(){
        var nameEl = document.getElementById('sel_city');

        var first = []; /* 省，直辖市 */
        var second = []; /* 市 */
        var third = []; /* 镇 */

        var selectedIndex = [0, 0, 0]; /* 默认选中的地区 */

        var checked = [0, 0, 0]; /* 已选选项 */

        function creatList(obj, list){
          obj.forEach(function(item, index, arr){
            var temp = new Object();
            temp.text = item.name;
            temp.value = index;
            list.push(temp);
          })
        }

        creatList(city, first);

        if (city[selectedIndex[0]].hasOwnProperty('sub')) {
          creatList(city[selectedIndex[0]].sub, second);
        } else {
          second = [{text: '', value: 0}];
        }

        if (city[selectedIndex[0]].sub[selectedIndex[1]].hasOwnProperty('sub')) {
          creatList(city[selectedIndex[0]].sub[selectedIndex[1]].sub, third);
        } else {
          third = [{text: '', value: 0}];
        }

        var picker = new Picker({
          data: [first, second, third],
          selectedIndex: selectedIndex,
          title: '地址选择'
        });

        picker.on('picker.select', function (selectedVal, selectedIndex) {
          var text1 = first[selectedIndex[0]].text;
          var text2 = second[selectedIndex[1]].text;
          var text3 = third[selectedIndex[2]] ? third[selectedIndex[2]].text : '';

          nameEl.innerText = text1 + ' ' + text2 + ' ' + text3;
        });

        picker.on('picker.change', function (index, selectedIndex) {
          if (index === 0){
            firstChange();
          } else if (index === 1) {
            secondChange();
          }

          function firstChange() {
            second = [];
            third = [];
            checked[0] = selectedIndex;
            var firstCity = city[selectedIndex];
            if (firstCity.hasOwnProperty('sub')) {
              creatList(firstCity.sub, second);

              var secondCity = city[selectedIndex].sub[0]
              if (secondCity.hasOwnProperty('sub')) {
                creatList(secondCity.sub, third);
              } else {
                third = [{text: '', value: 0}];
                checked[2] = 0;
              }
            } else {
              second = [{text: '', value: 0}];
              third = [{text: '', value: 0}];
              checked[1] = 0;
              checked[2] = 0;
            }

            picker.refillColumn(1, second);
            picker.refillColumn(2, third);
            picker.scrollColumn(1, 0)
            picker.scrollColumn(2, 0)
          }

          function secondChange() {
            third = [];
            checked[1] = selectedIndex;
            var first_index = checked[0];
            if (city[first_index].sub[selectedIndex].hasOwnProperty('sub')) {
              var secondCity = city[first_index].sub[selectedIndex];
              creatList(secondCity.sub, third);
              picker.refillColumn(2, third);
              picker.scrollColumn(2, 0)
            } else {
              third = [{text: '', value: 0}];
              checked[2] = 0;
              picker.refillColumn(2, third);
              picker.scrollColumn(2, 0)
            }
          }

        });

        picker.on('picker.valuechange', function (selectedVal, selectedIndex) {
          console.log(selectedVal);
          console.log(selectedIndex);
        });
        picker.show();
      },
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
//      闲逛
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
      }).catch(function () {
        console.log(err)
      })
//      全部，首页
        axios.get("../../static/data/homeHot.json").then(function (data) {
          ar1.circumstantial=data.data.InnerData;
          for (var i=0;i<ar1.circumstantial.length;i++){
            var doId=localStorage.getItem("getId");
            if(doId==ar1.circumstantial[i].ItemInfoId){
              var picTu=document.querySelector(".picTu");
              picTu.src=ar1.circumstantial[i].ImageUrl;
              var nameTu=document.querySelector(".nameTu");
              nameTu.innerHTML=ar1.circumstantial[i].Name;
              var detailTu=document.querySelector(".detailTu");
              detailTu.innerHTML=ar1.circumstantial[i].Appeal;
              var littleMoney=document.querySelector(".littleMoney");
              littleMoney.innerHTML="￥"+ar1.circumstantial[i].SalePrice;
              var moreMoney=document.querySelector(".moreMoney");
              moreMoney.innerHTML="￥"+ar1.circumstantial[i].ActivityPrice;
            }
          }
        }).catch(function (err) {
          console.log(err)
        })
//      家务
      axios.get("../../static/data/chore.json").then(function (data) {
        ar1.asDoods=data.data.InnerData
        ar1.hhhh=data.data.InnerData.Categories;
        for (var i=0;i<ar1.circumstantial.length;i++){
            var winId=localStorage.getItem("win");
            if(winId==ar1.hhhh[i].ItemIndexId){
              ar1.circumstantial=ar1.asDoods.Categories[i].Items;
              for (var j=0;j<ar1.circumstantial.length;j++){
                var doId=localStorage.getItem("getId");
                if(doId==ar1.circumstantial[j].ItemInfoId){
                  var picTu=document.querySelector(".picTu");
                  picTu.src=ar1.circumstantial[j].ImageUrl;
                  var nameTu=document.querySelector(".nameTu");
                  nameTu.innerHTML=ar1.circumstantial[j].Name;
                  var detailTu=document.querySelector(".detailTu");
                  detailTu.innerHTML=ar1.circumstantial[j].Appeal;
                  var littleMoney=document.querySelector(".littleMoney");
                  littleMoney.innerHTML="￥"+ar1.circumstantial[j].SalePrice;
                  var moreMoney=document.querySelector(".moreMoney");
                  moreMoney.innerHTML="￥"+ar1.circumstantial[j].ActivityPrice;
                }
              }
            }
        }
      }).catch(function (err) {
        console.log(err)
      })
        //      家务推荐
        axios.get("../../static/data/chore.json").then(function (data) {
          ar1.circumstantial=data.data.InnerData.CEORecommends;
          for (var i=0;i<ar1.circumstantial.length;i++){
            var doId=localStorage.getItem("getId");
            if(doId==ar1.circumstantial[i].ItemInfoId){
              var picTu=document.querySelector(".picTu");
              picTu.src=ar1.circumstantial[i].ImageUrl;
              var nameTu=document.querySelector(".nameTu");
              nameTu.innerHTML=ar1.circumstantial[i].Name;
              var detailTu=document.querySelector(".detailTu");
              detailTu.innerHTML=ar1.circumstantial[i].Appeal;
              var littleMoney=document.querySelector(".littleMoney");
              littleMoney.innerHTML="￥"+ar1.circumstantial[i].SalePrice;
              var moreMoney=document.querySelector(".moreMoney");
              moreMoney.innerHTML="￥"+ar1.circumstantial[i].ActivityPrice;
            }
          }
        }).catch(function (err) {
          console.log(err)
        })
      //      下厨
      axios.get("../../static/data/kitchen.json").then(function (data) {
        ar1.asDoods=data.data.InnerData
        ar1.hhhh=data.data.InnerData.Categories;
        for (var i=0;i<ar1.circumstantial.length;i++){
          var winId=localStorage.getItem("win");
          if(winId==ar1.hhhh[i].ItemIndexId){
            ar1.circumstantial=ar1.asDoods.Categories[i].Items;
            for (var j=0;j<ar1.circumstantial.length;j++){
              var doId=localStorage.getItem("getId");
              if(doId==ar1.circumstantial[j].ItemInfoId){
                var picTu=document.querySelector(".picTu");
                picTu.src=ar1.circumstantial[j].ImageUrl;
                var nameTu=document.querySelector(".nameTu");
                nameTu.innerHTML=ar1.circumstantial[j].Name;
                var detailTu=document.querySelector(".detailTu");
                detailTu.innerHTML=ar1.circumstantial[j].Appeal;
                var littleMoney=document.querySelector(".littleMoney");
                littleMoney.innerHTML="￥"+ar1.circumstantial[j].SalePrice;
                var moreMoney=document.querySelector(".moreMoney");
                moreMoney.innerHTML="￥"+ar1.circumstantial[j].ActivityPrice;
              }
            }
          }
        }
      }).catch(function (err) {
        console.log(err)
      })
      //      下厨推荐
      axios.get("../../static/data/kitchen.json").then(function (data) {
        ar1.circumstantial=data.data.InnerData.CEORecommends;
        for (var i=0;i<ar1.circumstantial.length;i++){
          var doId=localStorage.getItem("getId");
          if(doId==ar1.circumstantial[i].ItemInfoId){
            var picTu=document.querySelector(".picTu");
            picTu.src=ar1.circumstantial[i].ImageUrl;
            var nameTu=document.querySelector(".nameTu");
            nameTu.innerHTML=ar1.circumstantial[i].Name;
            var detailTu=document.querySelector(".detailTu");
            detailTu.innerHTML=ar1.circumstantial[i].Appeal;
            var littleMoney=document.querySelector(".littleMoney");
            littleMoney.innerHTML="￥"+ar1.circumstantial[i].SalePrice;
            var moreMoney=document.querySelector(".moreMoney");
            moreMoney.innerHTML="￥"+ar1.circumstantial[i].ActivityPrice;
          }
        }
      }).catch(function (err) {
        console.log(err)
      })
      //      家居服
      axios.get("../../static/data/dress.json").then(function (data) {
        ar1.asDoods=data.data.InnerData
        ar1.hhhh=data.data.InnerData.Categories;
        for (var i=0;i<ar1.circumstantial.length;i++){
          var winId=localStorage.getItem("win");
          if(winId==ar1.hhhh[i].ItemIndexId){
            ar1.circumstantial=ar1.asDoods.Categories[i].Items;
            for (var j=0;j<ar1.circumstantial.length;j++){
              var doId=localStorage.getItem("getId");
              if(doId==ar1.circumstantial[j].ItemInfoId){
                var picTu=document.querySelector(".picTu");
                picTu.src=ar1.circumstantial[j].ImageUrl;
                var nameTu=document.querySelector(".nameTu");
                nameTu.innerHTML=ar1.circumstantial[j].Name;
                var detailTu=document.querySelector(".detailTu");
                detailTu.innerHTML=ar1.circumstantial[j].Appeal;
                var littleMoney=document.querySelector(".littleMoney");
                littleMoney.innerHTML="￥"+ar1.circumstantial[j].SalePrice;
                var moreMoney=document.querySelector(".moreMoney");
                moreMoney.innerHTML="￥"+ar1.circumstantial[j].ActivityPrice;
              }
            }
          }
        }
      }).catch(function (err) {
        console.log(err)
      })
      //      家居服推荐推荐
      axios.get("../../static/data/dress.json").then(function (data) {
        ar1.circumstantial=data.data.InnerData.CEORecommends;
        for (var i=0;i<ar1.circumstantial.length;i++){
          var doId=localStorage.getItem("getId");
          if(doId==ar1.circumstantial[i].ItemInfoId){
            var picTu=document.querySelector(".picTu");
            picTu.src=ar1.circumstantial[i].ImageUrl;
            var nameTu=document.querySelector(".nameTu");
            nameTu.innerHTML=ar1.circumstantial[i].Name;
            var detailTu=document.querySelector(".detailTu");
            detailTu.innerHTML=ar1.circumstantial[i].Appeal;
            var littleMoney=document.querySelector(".littleMoney");
            littleMoney.innerHTML="￥"+ar1.circumstantial[i].SalePrice;
            var moreMoney=document.querySelector(".moreMoney");
            moreMoney.innerHTML="￥"+ar1.circumstantial[i].ActivityPrice;
          }
        }
      }).catch(function (err) {
        console.log(err)
      })
      //      生活
      axios.get("../../static/data/life.json").then(function (data) {
        ar1.asDoods=data.data.InnerData
        ar1.hhhh=data.data.InnerData.Categories;
        for (var i=0;i<ar1.circumstantial.length;i++){
          var winId=localStorage.getItem("win");
          if(winId==ar1.hhhh[i].ItemIndexId){
            ar1.circumstantial=ar1.asDoods.Categories[i].Items;
            for (var j=0;j<ar1.circumstantial.length;j++){
              var doId=localStorage.getItem("getId");
              if(doId==ar1.circumstantial[j].ItemInfoId){
                var picTu=document.querySelector(".picTu");
                picTu.src=ar1.circumstantial[j].ImageUrl;
                var nameTu=document.querySelector(".nameTu");
                nameTu.innerHTML=ar1.circumstantial[j].Name;
                var detailTu=document.querySelector(".detailTu");
                detailTu.innerHTML=ar1.circumstantial[j].Appeal;
                var littleMoney=document.querySelector(".littleMoney");
                littleMoney.innerHTML="￥"+ar1.circumstantial[j].SalePrice;
                var moreMoney=document.querySelector(".moreMoney");
                moreMoney.innerHTML="￥"+ar1.circumstantial[j].ActivityPrice;
              }
            }
          }
        }
      }).catch(function (err) {
        console.log(err)
      })
      //      生活推荐
      axios.get("../../static/data/life.json").then(function (data) {
        ar1.circumstantial=data.data.InnerData.CEORecommends;
        for (var i=0;i<ar1.circumstantial.length;i++){
          var doId=localStorage.getItem("getId");
          if(doId==ar1.circumstantial[i].ItemInfoId){
            var picTu=document.querySelector(".picTu");
            picTu.src=ar1.circumstantial[i].ImageUrl;
            var nameTu=document.querySelector(".nameTu");
            nameTu.innerHTML=ar1.circumstantial[i].Name;
            var detailTu=document.querySelector(".detailTu");
            detailTu.innerHTML=ar1.circumstantial[i].Appeal;
            var littleMoney=document.querySelector(".littleMoney");
            littleMoney.innerHTML="￥"+ar1.circumstantial[i].SalePrice;
            var moreMoney=document.querySelector(".moreMoney");
            moreMoney.innerHTML="￥"+ar1.circumstantial[i].ActivityPrice;
          }
        }
      }).catch(function (err) {
        console.log(err)
      })
      //      软装
      axios.get("../../static/data/gray.json").then(function (data) {
        ar1.asDoods=data.data.InnerData
        ar1.hhhh=data.data.InnerData.Categories;
        for (var i=0;i<ar1.circumstantial.length;i++){
          var winId=localStorage.getItem("win");
          if(winId==ar1.hhhh[i].ItemIndexId){
            ar1.circumstantial=ar1.asDoods.Categories[i].Items;
            for (var j=0;j<ar1.circumstantial.length;j++){
              var doId=localStorage.getItem("getId");
              if(doId==ar1.circumstantial[j].ItemInfoId){
                var picTu=document.querySelector(".picTu");
                picTu.src=ar1.circumstantial[j].ImageUrl;
                var nameTu=document.querySelector(".nameTu");
                nameTu.innerHTML=ar1.circumstantial[j].Name;
                var detailTu=document.querySelector(".detailTu");
                detailTu.innerHTML=ar1.circumstantial[j].Appeal;
                var littleMoney=document.querySelector(".littleMoney");
                littleMoney.innerHTML="￥"+ar1.circumstantial[j].SalePrice;
                var moreMoney=document.querySelector(".moreMoney");
                moreMoney.innerHTML="￥"+ar1.circumstantial[j].ActivityPrice;
              }
            }
          }
        }
      }).catch(function (err) {
        console.log(err)
      })
      //      软装推荐
      axios.get("../../static/data/gray.json").then(function (data) {
        ar1.circumstantial=data.data.InnerData.CEORecommends;
        for (var i=0;i<ar1.circumstantial.length;i++){
          var doId=localStorage.getItem("getId");
          if(doId==ar1.circumstantial[i].ItemInfoId){
            var picTu=document.querySelector(".picTu");
            picTu.src=ar1.circumstantial[i].ImageUrl;
            var nameTu=document.querySelector(".nameTu");
            nameTu.innerHTML=ar1.circumstantial[i].Name;
            var detailTu=document.querySelector(".detailTu");
            detailTu.innerHTML=ar1.circumstantial[i].Appeal;
            var littleMoney=document.querySelector(".littleMoney");
            littleMoney.innerHTML="￥"+ar1.circumstantial[i].SalePrice;
            var moreMoney=document.querySelector(".moreMoney");
            moreMoney.innerHTML="￥"+ar1.circumstantial[i].ActivityPrice;
          }
        }
      }).catch(function (err) {
        console.log(err)
      })
      //      床品
      axios.get("../../static/data/bed.json").then(function (data) {
        ar1.asDoods=data.data.InnerData
        ar1.hhhh=data.data.InnerData.Categories;
        for (var i=0;i<ar1.circumstantial.length;i++){
          var winId=localStorage.getItem("win");
          if(winId==ar1.hhhh[i].ItemIndexId){
            ar1.circumstantial=ar1.asDoods.Categories[i].Items;
            for (var j=0;j<ar1.circumstantial.length;j++){
              var doId=localStorage.getItem("getId");
              if(doId==ar1.circumstantial[j].ItemInfoId){
                var picTu=document.querySelector(".picTu");
                picTu.src=ar1.circumstantial[j].ImageUrl;
                var nameTu=document.querySelector(".nameTu");
                nameTu.innerHTML=ar1.circumstantial[j].Name;
                var detailTu=document.querySelector(".detailTu");
                detailTu.innerHTML=ar1.circumstantial[j].Appeal;
                var littleMoney=document.querySelector(".littleMoney");
                littleMoney.innerHTML="￥"+ar1.circumstantial[j].SalePrice;
                var moreMoney=document.querySelector(".moreMoney");
                moreMoney.innerHTML="￥"+ar1.circumstantial[j].ActivityPrice;
              }
            }
          }
        }
      }).catch(function (err) {
        console.log(err)
      })
      //      床品推荐
      axios.get("../../static/data/bed.json").then(function (data) {
        ar1.circumstantial=data.data.InnerData.CEORecommends;
        for (var i=0;i<ar1.circumstantial.length;i++){
          var doId=localStorage.getItem("getId");
          if(doId==ar1.circumstantial[i].ItemInfoId){
            var picTu=document.querySelector(".picTu");
            picTu.src=ar1.circumstantial[i].ImageUrl;
            var nameTu=document.querySelector(".nameTu");
            nameTu.innerHTML=ar1.circumstantial[i].Name;
            var detailTu=document.querySelector(".detailTu");
            detailTu.innerHTML=ar1.circumstantial[i].Appeal;
            var littleMoney=document.querySelector(".littleMoney");
            littleMoney.innerHTML="￥"+ar1.circumstantial[i].SalePrice;
            var moreMoney=document.querySelector(".moreMoney");
            moreMoney.innerHTML="￥"+ar1.circumstantial[i].ActivityPrice;
          }
        }
      }).catch(function (err) {
        console.log(err)
      })
      //      工作旅行
      axios.get("../../static/data/work.json").then(function (data) {
        ar1.asDoods=data.data.InnerData
        ar1.hhhh=data.data.InnerData.Categories;
        for (var i=0;i<ar1.circumstantial.length;i++){
          var winId=localStorage.getItem("win");
          if(winId==ar1.hhhh[i].ItemIndexId){
            ar1.circumstantial=ar1.asDoods.Categories[i].Items;
            for (var j=0;j<ar1.circumstantial.length;j++){
              var doId=localStorage.getItem("getId");
              if(doId==ar1.circumstantial[j].ItemInfoId){
                var picTu=document.querySelector(".picTu");
                picTu.src=ar1.circumstantial[j].ImageUrl;
                var nameTu=document.querySelector(".nameTu");
                nameTu.innerHTML=ar1.circumstantial[j].Name;
                var detailTu=document.querySelector(".detailTu");
                detailTu.innerHTML=ar1.circumstantial[j].Appeal;
                var littleMoney=document.querySelector(".littleMoney");
                littleMoney.innerHTML="￥"+ar1.circumstantial[j].SalePrice;
                var moreMoney=document.querySelector(".moreMoney");
                moreMoney.innerHTML="￥"+ar1.circumstantial[j].ActivityPrice;
              }
            }
          }
        }
      }).catch(function (err) {
        console.log(err)
      })
      //      工作旅行推荐
      axios.get("../../static/data/work.json").then(function (data) {
        ar1.circumstantial=data.data.InnerData.CEORecommends;
        for (var i=0;i<ar1.circumstantial.length;i++){
          var doId=localStorage.getItem("getId");
          if(doId==ar1.circumstantial[i].ItemInfoId){
            var picTu=document.querySelector(".picTu");
            picTu.src=ar1.circumstantial[i].ImageUrl;
            var nameTu=document.querySelector(".nameTu");
            nameTu.innerHTML=ar1.circumstantial[i].Name;
            var detailTu=document.querySelector(".detailTu");
            detailTu.innerHTML=ar1.circumstantial[i].Appeal;
            var littleMoney=document.querySelector(".littleMoney");
            littleMoney.innerHTML="￥"+ar1.circumstantial[i].SalePrice;
            var moreMoney=document.querySelector(".moreMoney");
            moreMoney.innerHTML="￥"+ar1.circumstantial[i].ActivityPrice;
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
  .free{
    line-height: 3rem;
    color: red;
    text-align: center;
  }
  .fen{
    width: 100%;
    height: 10rem;
  }
  .year{
    width: 100%;
    height: 14rem;
  }
  .threeTab{
    width: 100%;
    line-height: 3rem;
    display: flex;
    margin-bottom: 2rem;
  }
  .threeTab div{
    width: 33%;
    height: 2rem;
    text-align: center;
  }
  .threeTab div a{
    display: inline-block;
    width: 60%;
    height: 2rem;
    border-radius: 10px;
    text-align: center;
    text-decoration: none;
    line-height: 2rem;
  }
  .threeTab div .recommendActive{
     color: white;
     background-color: green;
   }
  .threeTab div .standardsActive{
    color: white;
    background-color: green;
  }
  .threeTab div .discussActive{
    color: white;
    background-color: green;
  }
</style>
