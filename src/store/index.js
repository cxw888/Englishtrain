import Vue from 'vue';
import Vuex from 'vuex';
// 子组件中通信
Vue.use(Vuex);
// 响应组件中的动作
const actions = {
};
// 操作数据
const mutations = {
  // JIA(state, value) {
  //   state.practice.unshift(value);
  // },
};
// 储存数据
const state = {
  // practice: [],
};
export default new Vuex.Store({
  actions,
  mutations,
  state,
});
