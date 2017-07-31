<template>
  <div class="searchBox">
    <el-input
      placeholder="搜索商品"
      icon="search"
      v-model="input2"
      :on-icon-click="handleIconClick">
    </el-input>
  </div>
</template>

<script>

  export default {
    name: 'searchBox',
    data() {
      return {
        input2: ''
      }
    },
    methods: {
      handleIconClick(ev) {
        console.log(ev);
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.searchBox{
  margin-top: 10px;
}
</style>
