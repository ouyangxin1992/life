<template>
  <div class="armoring" v-on:click="goArmoring">
    <img src="../../static/img/armoring.jpg" alt="">
  </div>
</template>

<script>

  export default {
    name: 'armoring',
    methods:{
      goArmoring(){
        this.$router.push({path:"/detailpage"})
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .armoring{
    margin-top: 10px;
  }
  .armoring img{
    width: 100%;
    height: 35rem;
  }
</style>
