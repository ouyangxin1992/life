<template>
  <div class="searchBox">
    <el-input placeholder="搜索商品" icon="search" v-model="input2" :on-icon-click="handleIconClick">
    </el-input>
    <div class="c123">
      <div v-for="item in sea" v-show="isH">
        {{myfilter(item)}}
    </div>
    </div>
  </div>
</template>

<script>
  import axios from"axios"
  export default {
    name: 'searchBox',
    data() {
      return {
        input2: '',
        sea:true,
        isH:false
      }
    },
    created(){
      var arr4=this;
      axios.get("../../static/data/city.json").then(function (data) {
        arr4.sea=data.data.city
      }).catch(function (err) {
        console.log(err)
      })
    },
    methods: {

      handleIconClick(ev) {
        console.log(ev);
        this.isH=true
      },
      myfilter(value){
        if(value.indexOf(this.input2)>-1){
          return value
        }

//        var c123=document.querySelector(".c123");
//        c123.style.display="block"
      }
    },
//    computed: {
//      searchData: function () {
//        var that = this;
//        return that.sea.filter(function (user) {
//          return user.code.toLowerCase().indexOf(that.code.toLowerCase()) !== -1;//当然如果是纯属字就可以不用转换小写了，处于习惯还是加上了
//        })
//      }
//    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.searchBox{
  margin-top: 10px;
}
/*.c123{*/
  /*display: none;*/
/*}*/
.c123 div{
  padding-left: 5%;
  font-size: 14px;
  color: #333333;
  background-color: white;
  height: 30px;
  line-height: 30px;
  border-bottom: 1px solid #41CDBE;
}
</style>
