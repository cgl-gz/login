import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store";

import Home from "../views/Home.vue";
import Winning from "../components/winning/Winning.vue";
import Login from "../components/login/Login";

Vue.use(VueRouter);

const routes = [
  { path: "/", component: Home },
  {
    path: "/winning",
    name: "Winning",
    component: Winning
  },
  {
    path: "/login",
    name: "Login",
    component: Login
  }
  // {
  //   path: "/about",
  //   name: "About",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue")
  // }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

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

export default router;
