<template>
  <div>
    <div class="pending">
      <div v-for='(obj,index) in message' >
        <img :src="obj.src" alt="">
        <p>{{obj.title}}</p>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'pending',
    data(){
        return{
            message:[
              {
                title:'待支付',
                src:'static/img/daizhifu.png',
              },
              {
                title:'待发货',
                src:'static/img/daifahuo.png',
              },
              {
                title:'待收货',
                src:'static/img/daishouhuo.png',
              },
              {
                title:'待评论',
                src:'static/img/daipinglun.png',
              },
              {
                title:'回复',
                src:'static/img/huifu.png',
              },
              {
                title:'退换货',
                src:'static/img/tuihuanhuo.png',
              }
            ]
        }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.pending{
  width: 100%;
  height: 10rem;
  background-color: white;
  display: flex;
  flex-wrap: wrap;
}
.pending div{
  width: 33%;
  height: 3rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
  display: flex;
  justify-content: space-around;
  border-right: 1px solid gainsboro;
}
.pending div img{
  height: 3rem;
}
.pending div p{
  line-height: 3rem;
}
</style>
