<template>
  <div>
    <div class="slipping">
      <ul>
        <li v-for='(obj,index) in writing'>
          <router-link :to='obj.to' :class='obj.cla' :activeClass='obj.activeCla'>
            {{obj.title}}
          </router-link>
        </li>
      </ul>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>


  export default {
    name: 'slipping',
    data(){
        return{
          writing:[
            {
              to:'/home/Principal',
              title:'首页',
              cla:'principalCla',
              activeCla:'activePrincipal',
            },
            {
              to:'/home/Product',
              title:'新品',
              cla:'productCla',
              activeCla:'activeProduct',
            },
            {
              to:'/home/Household',
              title:'家务',
              cla:'householdCla',
              activeCla:'activeHousehold',
            },
            {
              to:'/home/Cooking',
              title:'下厨',
              cla:'cookingCla',
              activeCla:'activeCooking',
            },
            {
              to:'/home/Homewear',
              title:'家居服',
              cla:'homewearCla',
              activeCla:'activeHomewear',
            },
            {
              to:'/home/Livelihood',
              title:'生活',
              cla:'livelihoodCla',
              activeCla:'activeLivelihood',
            },
            {
              to:'/home/Soft',
              title:'软装',
              cla:'softCla',
              activeCla:'activeSoft',
            },
            {
              to:'/home/Bedding',
              title:'床品',
              cla:'beddingCla',
              activeCla:'activeBedding',
            },
            {
              to:'/home/Travel',
              title:'工作和旅行',
              cla:'travelCla',
              activeCla:'activeTravel',
            },
            {
              to:'/home/Know',
              title:'了解LifeVC',
              cla:'knowCla',
              activeCla:'activeKnow',
            }
          ]
        }
    },
    created(){
      //	页面默认打开热卖页面
      this.$router.push('/home/Principal');
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.slipping{
  width: 100%;
  height: 4.4em;
  overflow-x: scroll;
  background-color: white;
}
.slipping ul{
  width: 250%;
  display: flex;
  list-style: none;
}
.slipping ul li{
  width: 10%;
  text-align: center;
  line-height: 4.4em;
}
.slipping ul li a{
  text-decoration: none;
  font-size: 14px;
  display: inline-block;
  width:100%;
  color: #333333;
}
/*a .router-link-active{*/
    /*color: #80B532;*/
  /*}*/
.activePrincipal {
  color: #80B532;
  border-bottom: 1px solid #80B532;
}
.activeProduct {
  color: #80B532;
  border-bottom: 1px solid #80B532;
}
.activeHomewear {
  color: #80B532;
  border-bottom: 1px solid #80B532;
}
.activeHousehold {
  color: #80B532;
  border-bottom: 1px solid #80B532;
}
.activeCooking {
  color: #80B532;
  border-bottom: 1px solid #80B532;
}
.activeLivelihood {
  color: #80B532;
  border-bottom: 1px solid #80B532;
}
.activeSoft {
  color: #80B532;
  border-bottom: 1px solid #80B532;
}
.activeBedding {
  color: #80B532;
  border-bottom: 1px solid #80B532;
}
.activeTravel {
  color: #80B532;
  border-bottom: 1px solid #80B532;
}
.activeKnow {
  color: #80B532;
  border-bottom: 1px solid #80B532;
}
</style>
