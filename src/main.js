// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import axios from './axios.js'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

import Mock from './mock'

Mock()

Vue.use(ElementUI)

Vue.config.productionTip = false

// 将axios挂载到prototype上，在组件中可以直接使用this.axios访问
Vue.prototype.axios = axios

/* eslint-disable no-new */
var vm = new Vue({
  el: '#app',
  store,
  axios,
  router,
  template: '<App/>',
  components: { App }
})
window.vm = vm
