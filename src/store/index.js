import Vue from 'vue';
import Vuex from 'vuex';
// 子组件中通信
Vue.use(Vuex);
// 响应组件中的动作
const actions = {
};
// 操作数据
const mutations = {
  Getnews(state, value) {
    state.news = value;
  },
};
// 储存数据
const state = {
  news: null,
};
export default new Vuex.Store({
  actions,
  mutations,
  state,
});
