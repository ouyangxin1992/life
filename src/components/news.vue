<template>
  <div class="news" v-on:click="goNews">
    <img src="../../static/img/news.jpg" alt="">
  </div>
</template>

<script>

  export default {
    name: 'news',
    methods:{
      goNews(){
        this.$router.push({path:"/detailpage"})
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .news{
    margin-top: 10px;
  }
.news img{
  width: 100%;
  height: 70rem;
}
</style>
