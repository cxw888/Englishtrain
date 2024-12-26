import Vue from 'vue';
import VueRouter from 'vue-router';
// 完整引入ui库
import ElementUI from 'element-ui';
import App from './App.vue';
// 使用ui
import router from './router';
import store from './store';
// 引入通用样式
import './assets/global.css';
// 引入ui全部样式
import 'element-ui/lib/theme-chalk/index.css';
Vue.config.productionTip = false;
// 应用
Vue.use(ElementUI);
Vue.use(VueRouter);
// 按需引入
// import { Button, Select } from 'element-ui';
// Vue.component(Button.name, Button);
// Vue.component(Select.name, Select);
new Vue({
  store,
  router,
  el: '#app',
  render: (h) => h(App),
}).$mount('#app');
