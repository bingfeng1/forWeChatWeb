<template>
  <div class="login">
    <el-container>
      <el-header height>
        <UserImg :name="result.nickname" :imgUrl="result.headimgurl"></UserImg>
      </el-header>
      <el-main>
        <!-- <div>{{result.sex}}</div>
        <div>{{result.province}}</div>
        <div>{{result.city}}</div>
        <div>{{result.country}}</div>
        <div>{{result.privilege}}</div>
        <div>{{result.unionid}}</div>-->
      </el-main>
    </el-container>
  </div>
</template>
<script>
import UserImg from "@/components/UserInfo/UserImg.vue";
export default {
  name: "Mine",
  components: {
    UserImg
  },
  computed: {
    result() {
      return this.$store.state.userInfo;
    }
  }
};
</script>