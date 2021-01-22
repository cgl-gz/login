<template>
  <div class="login">
    <div class="item-header">
      <p>理赔服务</p>
    </div>
    <div class="background">
      <div class="item-img"></div>
    </div>

    <!-- vant 表单 尝试修改样式 -->
    <van-form @submit="onSubmit" autocomplete="off">
      <div class="item-login">
        <van-field
          class="item-input"
          v-model="username"
          name="用户名"
          placeholder="用户名"
          :rules="[{ pattern, message: '请输入英文字母且不超过10位' }]"
        />
      </div>

      <div class="item-login">
        <van-field
          class="item-input"
          v-model="password"
          type="password"
          name="密码"
          placeholder="密码"
          :rules="[
            {
              validator,
              message: '密码需在8位以上且只能包含数字与字母'
            }
          ]"
        />
      </div>

      <div class="item-login">
        <van-button round block type="info" native-type="submit"
          >登录
        </van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import { Login } from "@/api";

export default {
  data() {
    return {
      username: "",
      password: "",
      pattern: /^[a-zA-Z]{1,10}/
    };
  },
  // async mounted() {
  //   const res = await Login({
  //     username: "aaaaa",
  //     password: "bbbbb"
  //   });
  //   console.log(res);
  // },
  methods: {
    async onSubmit() {
      if (this.username !== "" && this.password !== "") {
        console.log("用户名:", this.username, "密码", this.password);

        // 防止多次提交
        const toast = this.$toast.loading({
          duration: 0, // 持续展示 toast
          forbidClick: true, // 禁用背景点击
          message: "加载中..."
        });

        // 调用api
        let data = {
          username: this.username,
          password: this.password
        };
        let res = await Login(data);

        // 判断是否请求成功 并将用户数据存储到 Vuex中
        // console.log(res, res.data.name, res.message);
        let name = res.data.name;
        if (res.message == "Succeed") {
          // 修改state数据
          this.$store.commit("userStatus", 1);
          this.$store.commit("getUserName", name);

          // 清除 toast
          toast.clear();

          // 跳转到登录后显示的页面
          this.$router.push("/winning");
          // console.log(this.$store.state.userName);
        } else {
          toast.message = "登录失败请重试";
        }
      }
    },

    validator(val) {
      let isCorrect = /^[a-zA-Z0-9]{8,100}/.test(val);
      if (isCorrect) {
        return true;
      } else {
        return false;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.login {
  width: 100%;
  height: 100vh;
  background: rgb(249, 249, 249);
  .item-header {
    height: 60px;
    text-align: center;
    line-height: 60px;
    p {
      margin: 0;
    }
  }
  .background {
    position: relative;
    width: 100%;
    height: 0;
    padding-top: 54%;
    .item-img {
      position: absolute;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 72%;
      height: 100%;
      background: url(../../assets/itemImg-001.png) no-repeat center;
      background-size: 100% 100%;
    }
  }
  .item-login {
    width: 70%;
    margin: 15px auto;
    .item-input {
      padding: 0 20px;
      border-radius: 20px;
      box-sizing: border-box;
      line-height: 40px;
      outline: none;
      box-shadow: 3px 6px 5px #ccc;
    }
  }
}
</style>
