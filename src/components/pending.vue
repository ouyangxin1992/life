<template>
  <div class="pending">
     <div v-for='(obj,index) in message' >
       <img :src="" alt="">
       <p></p>
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
                title:'首页',
                cla:'',
                activeCla:'',
                src:'static/img/',
              },
            ]
        }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
