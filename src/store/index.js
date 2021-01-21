import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLogin: false,
    userName: ""
  },
  mutations: {
    userStatus(state, num) {
      if (num == 1) {
        state.isLogin = true;
      }
    },
    getUserName(state, name) {
      if (name != undefined) {
        state.userName = name;
      }
    }
  },
  actions: {},
  modules: {}
});
