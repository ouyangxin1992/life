<template>
  <div class="backdrop">
    <p class="logoIn">{{ss}}</p>
    <div class="detrusion" v-on:click="pushOut" >
      退出登录
  </div>
  </div>
</template>

<script>
  import axios from 'axios';
  export default {
    name: 'backdrop',
    data(){
      return{
          ss:''
      }
    },
    created(){
      if(localStorage.getItem("tels")){
          this.ss=localStorage.getItem("tels")
      }else if(localStorage.getItem("userId")){
        this.ss=localStorage.getItem("userId")
      }
    },
    methods:{
      pushOut(){
        var logoIn=document.querySelector(".logoIn");
        logoIn.innerHTML="您还未登录";
        var aboutLogo=document.querySelector(".aboutLogo");
        aboutLogo.style.display="flex";
        var detrusion=document.querySelector(".detrusion");
        detrusion.style.display="none";
        localStorage.clear("userId")
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .backdrop{
    width: 100%;
    height:10rem;
    background-image: url("../../static/img/bg.png");
    background-size: 100% 100%;
    background-repeat: no-repeat;
    text-align: center;
  }
  .logoIn{
    font-size: 16px;
    height: 4rem;
    line-height: 4rem;
    width: 50%;
    margin-left: 25%;
  }
  .detrusion{
    font-size: 16px;
    height: 3rem;
    line-height: 3rem;
    width: 50%;
    margin-left: 25%;
    color: red;
  }
</style>
