import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import './plugins/element.js'
import '@/assets/css/common.scss'
import '@/assets/icon/iconfont.css'

Vue.config.productionTip = false
axios.defaults.baseURL = 'http://bingfeng.easy.echosite.cn';

// 这里是请求的动画效果
// Add a request interceptor
axios.interceptors.request.use(function (config) {
  // Do something before request is sent
  // store.commit("hideLoading")
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

// Add a response interceptor
axios.interceptors.response.use(function (response) {
  // Do something with response data
  // store.commit("showLoading")
  return response;
}, function (error) {
  // Do something with response error
  return Promise.reject(error);
});


Vue.prototype.$http = axios

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
