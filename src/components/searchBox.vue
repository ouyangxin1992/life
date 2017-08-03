<template>
  <div class="searchBox">
    <el-input placeholder="搜索商品" icon="search" v-model="input2" :on-icon-click="handleIconClick" class="ww" >
    </el-input>
    <div class="c123">
      <div v-for="item in sea " v-show="isH" v-on:click="changes">
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
      },
      myfilter(value){
        if(value.indexOf(this.input2)>-1){
          return value
        }
        this.isH=true
      },
      changes(e){
         if(e.target){
            var ww=document.querySelector(".ww");
            var inp=ww.getElementsByTagName("input");
            console.log(inp.value);
            inp.value=e.target.innerHTML;
            this.input2=inp.value;
            console.log(this.input2)
         }
         this.isH=false;
      }
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.searchBox{
  margin-top: 10px;
}
.c123 div{
  padding-left: 5%;
  font-size: 14px;
  color: #333333;
  background-color: white;
}
</style>
