<template>
  <div class="login">
    <el-container>
      <el-header height="">
        <UserImg :name="result.nickname" :imgUrl="result.headimgurl"></UserImg>
      </el-header>
      <el-main>
        <!-- <div>{{result.sex}}</div>
        <div>{{result.province}}</div>
        <div>{{result.city}}</div>
        <div>{{result.country}}</div>
        <div>{{result.privilege}}</div>
        <div>{{result.unionid}}</div> -->
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
  data() {
    return {
      result: {}
    };
  },
  // 初始化完成，获取url并传递code参数，用于获取用户信息
  mounted() {
    this.getUserInfo();
  },
  methods: {
    // 获取用户信息
    getUserInfo() {
      // 可以将result存在session中
      let myInfo = sessionStorage.getItem("myInfo");
      if(myInfo){
        this.result = JSON.parse(myInfo);
        return;
      }
      let openid = "oPYNR1fXfbaq98L-c2lhwbIbE5Sw";
      const search = window.location.search;
      this.$http
        .get("web/getUserToken", {
          params: {
            search,
            openid
          }
        })
        .then(data => {
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
          this.result = result;
          sessionStorage.setItem("myInfo", JSON.stringify(result));
        });
    }
  }
};
</script>