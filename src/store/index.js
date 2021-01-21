import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLogin: false
  },
  mutations: {
    userStatus(state, num) {
      if (num == 1) {
        state.isLogin = true;
      }
    }
  },
  actions: {},
  modules: {}
});
