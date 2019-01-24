import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'u-reset.css'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VCharts from 'v-charts';
import './filters/index.js';
import axios from 'axios'
import vueAxios from 'vue-axios'



axios.interceptors.request.use(function (config) {
  
  config.baseURL = 'http://localhost:3000'; //`baseURL` 将自动加在 `url` 前面，除非 `url` 是一个绝对 URL。

return config;
}, function (error) {
// 对请求错误做些什么
return Promise.reject(error);
});
Vue.use(vueAxios, axios)
Vue.use(ElementUI);
Vue.use(VCharts);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
