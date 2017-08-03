<template>
  <div>
    <el-button class="cephalosome" type="success" icon="arrow-left" v-on:click="goBack">
      商品介绍
   </el-button>
  </div>
</template>

<script>

  export default {
    name: 'cephalosome',
    methods:{
        goBack(){
          this.$router.push("/home")
        }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .cephalosome{
    width: 100%;
    height: 4.4rem;
    color: white;
    font-size: 20px;
    /*text-align: center;*/
  }
</style>
