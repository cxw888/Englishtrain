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



// <!-- (main.js里) 定义一个全局过滤器。这个过滤器可以在任何组件的模板中使用 -->
Vue.filter('getresult', function (value) {
  const statusMap = {
    '-1': '已完成', // 使用字符串作为属性名
    '0': '进行中',  // 虽然这里的 '0' 可以省略引号，但为了一致性建议加上
    '1': '未完成'   // 同上
  };
  return statusMap[value.toString()]; // 确保 value 是字符串类型，以防传入数字
});
// {/* <div>练习时间:{{ item.times | gettime }}</div> */}(使用的模版里写)



Vue.filter('gettime', function (value) {
  // 字符型转数字型 
  let milliseconds = parseInt(value);
  // Math.floor()用于将小时数的小数部分去掉，只保留整数部分。
  let hours = Math.floor(milliseconds / (1000 * 60 * 60));
  // 使用了取模运算符（%），它返回被除数除以除数的余数(毫秒数）。
  let minutes = Math.floor((milliseconds % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((milliseconds % (1000 * 60)) / 1000);
  if (hours > 0) {
    if (minutes > 0) {
      if (seconds > 0) {
        return `${hours}小时 ${minutes}分${seconds}秒`;
      } else {
        return `${hours}小时 ${minutes}分`;
      }
    } else if (seconds > 0) {
      return `${hours}小时 ${seconds}秒`;
    } else {
      return `${hours}小时`;
    }
  } else if (minutes > 0) {
    if (seconds > 0) {
      return ` ${minutes}分${seconds}秒`;
    } else {
      return ` ${minutes}分`;
    }
  } else {
    return `${seconds}秒`;
  }
});
new Vue({
  store,
  router,
  el: '#app',
  render: (h) => h(App),
}).$mount('#app');
