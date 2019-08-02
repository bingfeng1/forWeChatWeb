<template>
  <el-row>
    <el-col :span="24">
      <el-card>
        <header slot="header" class="clearfix">
          <span>个人信息</span>
          <router-link to="/mine/unlogin">
            <el-button style="float: right; padding: 3px 0" type="text">注销</el-button>
          </router-link>
        </header>
        <el-avatar :size="132" :src="myImg"></el-avatar>
        <div class="sub-title">{{myName}}</div>
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
export default {
  props: {
    imgUrl: String,
    name: String
  },
  computed: {
    myImg: function() {
      return this.imgUrl;
    },
    myName: function() {
      return this.name;
    }
  }
};
</script>

<style lang="scss" scoped>
header {
  text-align: left;
  font-weight: bold;
}
</style>
