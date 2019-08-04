<template>
  <div class="login">
    <el-container>
      <el-header height>
        <UserImg :name="result.nickname" :imgUrl="result.headimgurl" :m_bottom="marginBottom"></UserImg>
      </el-header>
      <el-main>
        <!-- <div>{{result.sex}}</div>
        <div>{{result.province}}</div>
        <div>{{result.city}}</div>
        <div>{{result.country}}</div>
        <div>{{result.privilege}}</div>
        <div>{{result.unionid}}</div>-->

        <el-button v-if="isshow" type="primary" round @click="userDetail=true">请填写详情</el-button>

        <el-row v-else>
          <el-col :span="24">
            <el-button type="primary" round @click="userDetail=true">修改详情</el-button>
          </el-col>
          <el-col :span="24">
            <el-card>
              <header slot="header" class="clearfix">
                <span>个人详情</span>
              </header>
              <section>
                <ul>
                  <li v-for="(value,item) in form" :key="item">
                    <el-row>
                      <el-col :span="5">{{item}}</el-col>
                      <el-col :span="14">{{value}}</el-col>
                    </el-row>
                  </li>
                </ul>
              </section>
            </el-card>
          </el-col>
        </el-row>
      </el-main>
    </el-container>

    <!-- 弹出层信息 -->
    <el-dialog width="90%" title="个人详情" :visible.sync="userDetail">
      <el-form :model="form" label-position="left" label-width="auto" :rules="rules">
        <el-form-item label="手机号码">
          <el-input v-model="form.phone"></el-input>
        </el-form-item>
        <el-form-item label="家庭住址">
          <el-input v-model="form.address"></el-input>
        </el-form-item>
        <el-form-item label="邮箱地址">
          <el-input v-model="form.email"></el-input>
        </el-form-item>
        <el-form-item label="生日" prop="birthday">
          <el-date-picker
            v-model="form.birthday"
            value-format="yyyy-MM-dd"
            style="width:100%"
            type="date"
            placeholder="选择日期"
          ></el-date-picker>
        </el-form-item>
        <el-form-item label="兴趣爱好">
          <el-input type="textarea" autosize :rows="4" placeholder="请输入内容" v-model="form.other"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="onSubmit">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import UserImg from "@/components/UserInfo/UserImg.vue";
export default {
  name: "Mine",
  data() {
    return {
      isshow: true,
      marginBottom: 20,
      userDetail: false,
      form: {
        phone: "",
        address: "",
        email: "",
        birthday: "",
        other: "",
        openid: ""
      },
      rules: {
        birthday: [
          {
            type: "string",
            required: true,
            message: "请选择日期",
            trigger: "change"
          }
        ]
      }
    };
  },
  components: {
    UserImg
  },
  computed: {
    result() {
      return this.$store.state.userInfo;
    }
  },
  methods: {
    onSubmit() {
      let that = this;
      this.form.openid = this.result.openid;
      this.userDetail = false;
      this.$http.post("/web/getWriteDetail", this.form).then(res => {
        that.isshow = false;
        that.$router.push('/Love')
      });
    },
    getDetail() {
      let that = this;
      this.$http
        .get("/web/getDetail", {
          params: {
            openid: this.result.openid
          }
        })
        .then(res => {
          if (res.data) {
            that.isshow = false;
            that.form = res.data;
          }
        });
    }
  },
  mounted() {
    this.getDetail();
  }
};
</script>

<style lang="scss" scoped>
ul {
  list-style: none;
}
</style>
