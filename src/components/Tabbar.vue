<template>
  <div>
    <router-view></router-view>
    <ul class="Tabbar">
      <li v-for='(obj,index) in list'  @click='imgchange(index,obj)'>
        <router-link :to='obj.to' :class='obj.cla' :activeClass='obj.activeCla'>
          <img :src='obj.src' alt="">
          <span>{{obj.title}}</span>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'Tabbar',
  data () {
    return {
      list:[
        {
          to:'/home',
          title:'首页',
          cla:'homeCla',
          activeCla:'activeHome',
          src:'static/img/greyHome.png',
          imgs:'static/img/greenHome.png'
        },
        {
          to:'/all',
          title:'全部产品',
          cla:'allCla',
          activeCla:'activeAll',
          src:'static/img/greyAll.png',
          imgs:'static/img/greenAll.png'
        },
        {
          to:'/time',
          title:'闲逛',
          cla:'timeCla',
          activeCla:'activeTime',
          src:'static/img/greyTime.png',
          imgs:'static/img/greenTime.png'
        },
        {
          to:'/car',
          title:'购物车',
          cla:'carCla',
          activeCla:'activeCar',
          src:'static/img/greyCar.png',
          imgs:'static/img/greenCar.png'
        },
        {
          to:'/mine',
          title:'账户中心',
          cla:'mineCla',
          activeCla:'activeMine',
          src:'static/img/greyMine.png',
          imgs:'static/img/greenMine.png'
        },
      ],
      list1:[
        'static/img/greyHome.png',
        'static/img/greyAll.png',
        'static/img/greyTime.png',
        'static/img/greyCar.png',
        'static/img/greyMine.png'
      ]
    }
  },
  methods:{
    imgchange(index,obj){
      for (var i = 0; i < this.list.length; i++) {
        this.list[i].src = this.list1[i];
      }
      obj.src =this.list[index].imgs;
    }
  },
  created(){
    //	页面默认打开热卖页面
    this.$router.push('/home');
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .Tabbar{
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 4.9em;
    display: flex;
    background-color: #F8F8F8;
    justify-content: space-around;
    list-style: none;
  }
  .Tabbar li{
    width: 20%;
  }
  .Tabbar a{
    text-decoration: none;
    width:100%;
    display: inline-block;
    text-align: center;
    margin-top: 10px;
  }
  .Tabbar a img{
    height: 24px;
  }
  .Tabbar a span{
    display: block;
  }
  /*a .router-link-active{*/
    /*color: #009c42;*/
  /*}*/
  .activeHome span{
    color: #009c42;
  }
  .activeAll span{
    color: #009c42;
  }
  .activeTime span{
    color: #009c42;
  }
  .activeCar span{
    color: #009c42;
  }
  .activeMine span{
    color: #009c42;
  }
</style>
