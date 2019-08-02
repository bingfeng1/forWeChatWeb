<template>
  <div id="app">
    <router-view></router-view>
    <BottomBtn></BottomBtn>
  </div>
</template>

<script>
import BottomBtn from "@/views/BottomBtn.vue";
export default {
  name: "app",
  components: {
    BottomBtn
  },
  mounted() {
    // 获取用户信息
    let openid = "oPYNR1fXfbaq98L-c2lhwbIbE5Sw";
    const search = window.location.search;
    let that = this;
    this.$http
      .get("web/getUserToken", {
        params: {
          search,
          openid
        }
      })
      .then(data=>{
        let result = data.data;
        let {
          nickname,
          sex,
          province,
          city,
          country,
          headimgurl,
          privilege,
          unionid,
          openid
        } = result;
        that.$store.dispatch("setUserInfo",result)
      });
  }
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
