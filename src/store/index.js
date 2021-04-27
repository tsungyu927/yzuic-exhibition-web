import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    typeBox: {},
  },
  mutations: {
    // SET_TYPEBOX(state, type) {
    //   state.typeBox = { ...type };
    // },
  },
  actions: {
    // SetTypeBox({ commit }, type) {
    //   commit('SET_TYPEBOX', type);
    // },
  },
  getters: {
    // GetTypeBox(state) {
    //   return state.typeBox;
    // },
  },
  modules: {},
});
