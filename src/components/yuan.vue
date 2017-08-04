<template>
  <div class="yuan" v-on:click="goYuan">
    <img src="../../static/img/49yuan.jpg" alt="">
  </div>
</template>

<script>

  export default {
    name: 'yuan',
    methods:{
      goYuan(){
        this.$router.push({path:"/detailpage"})
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .yuan{
    margin-top: 10px;
  }
.yuan img{
  width: 100%;
  height: 8rem;
}
</style>
