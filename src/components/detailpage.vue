<template>
  <div class="detailpage">
    <!--头部-->
    <cephalosome></cephalosome>
    <!--详情-->
    <playbyplay></playbyplay>
  </div>
</template>

<script>
//  引用头部
  import cephalosome from '@/components/cephalosome';
//  引用头部
  import playbyplay from '@/components/playbyplay';
  export default {
    name: 'detailpage',
    data(){
        return{
           arr:true
        }
    },
    mounted(){
        this.arr=this.$route.query.id;
    },
    //    配置信息
    components:{
      cephalosome,
      playbyplay
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
