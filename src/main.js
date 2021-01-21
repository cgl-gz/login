import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import Vant from "vant";
import "vant/lib/index.css";

Vue.use(Vant);

Vue.config.productionTip = false;

router.beforeEach((to, from, next) => {
  let state = store.state.isLogin;
  if (state || to.path == "/login") {
    next();
    console.log("已登录");
  } else {
    next("/login");
    alert("未登录请先登录");
  }
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
