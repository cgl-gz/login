<template>
  <div class="login">
    <div class="item-header">
      <p>理赔服务</p>
    </div>

    <div class="item-img"></div>

    <!-- vant 表单 尝试修改样式 -->
    <van-form @submit="onSubmit" autocomplete="off">
      <div class="item-login">
        <van-field
          class="item-input"
          v-model="username"
          name="用户名"
          placeholder="用户名"
        />
      </div>

      <div class="item-login">
        <van-field
          class="item-input"
          v-model="password"
          type="password"
          name="密码"
          placeholder="密码"
        />
      </div>

      <div class="item-login">
        <van-button round block type="info" native-type="submit"
          >登录
        </van-button>
      </div>
    </van-form>

    <!-- <form @submit.prevent="onSubmit">
      <div class="item-login">
        <input type="text" placeholder="用户名" v-model="username" />
      </div>

      <div class="item-login">
        <input type="password" placeholder="密码" v-model="password" />
      </div>
      <div class="item-login">
        <button type="submit">登录</button>
      </div>
    </form> -->
  </div>
</template>

<script>
import { Login } from "@/api";

export default {
  data() {
    return {
      username: "",
      password: ""
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
          this.$store.commit("userStatus", 1);
          this.$store.commit("getUserName", name);
          this.$router.push("/winning");
          // console.log(this.$store.state.userName);
        }
      } else {
        alert("请补齐用户名或密码");
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.login {
  width: 100%;
  height: 100vh;
  background: #eee;
}

.item-header {
  height: 10vh;
  text-align: center;
  line-height: 10vh;
}

p {
  margin: 0;
}

.item-img {
  width: 60%;
  height: 30vh;
  margin: 0 auto;
  border: 1 solid black;
  background: url(./img/itemImg-001.png) no-repeat center;
  background-size: 100%, 100%;
}

// input::-webkit-input-placeholder {
//   color: rgba(4, 163, 116, 0.938);
// }
// input::-moz-placeholder {
//   /* Mozilla Firefox 19+ */
//   color: rgba(4, 163, 116, 0.938);
// }
// input:-moz-placeholder {
//   /* Mozilla Firefox 4 to 18 */
//   color: rgba(4, 163, 116, 0.938);
// }
// input:-ms-input-placeholder {
//   /* Internet Explorer 10-11 */
//   color: rgba(4, 163, 116, 0.938);
// }

.item-login {
  width: 70%;
  margin: 15px auto;
  height: 40px;

  .item-input {
    height: 40px;
    padding: 0 20px;
    border-radius: 20px;
    box-sizing: border-box;
    line-height: 40px;
    outline: none;
    box-shadow: 3px 6px 5px #ccc;
  }
}

// .item-login input {
//   width: 100%;
//   border: 0;
//   height: 40px;
//   padding: 0 20px;
//   background-color: white;
//   border-radius: 15px;
//   outline: none;
//   box-sizing: border-box;
//   box-shadow: 3px 6px 5px #ccc;
// }

// .item-login button {
//   width: 100%;
//   height: 40px;
//   border: 0;
//   border-radius: 20px;
//   padding: 8px 0;
//   background: rgba(4, 163, 116, 0.938);
//   color: white;
// }
// .login {
//   .item-header {
//   }
// }
</style>
