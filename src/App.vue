<template>
  <div id="app">
    <router-view></router-view>
    <BottomBtn></BottomBtn>
  </div>
</template>

<script>
import BottomBtn from '@/views/BottomBtn.vue'
export default {
  name: "app",
  components: {
    BottomBtn
  },
  // computed:{
  //   isLoading(){
  //     return this.$store.state.isLoading
  //   }
  // }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
