// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import axios from './axios.js'

// import ElementUI from 'element-ui'
import Button from 'element-ui/lib/button'
import Upload from 'element-ui/lib/upload'
import Dialog from 'element-ui/lib/dialog'
import Progress from 'element-ui/lib/progress'
import Carousel from 'element-ui/lib/carousel'
import CarouselItem from 'element-ui/lib/carousel-item'
import Popover from 'element-ui/lib/popover'
import Table from 'element-ui/lib/table'
import Tablecolumn from 'element-ui/lib/table-column'
import Form from 'element-ui/lib/form'
import Formitem from 'element-ui/lib/form-item'
import Tooltip from 'element-ui/lib/tooltip'
// import Notification from 'element-ui/lib/notification'
import 'element-ui/lib/theme-default/index.css'

import './mock'

Vue.use(Button)
Vue.use(Upload)
Vue.use(Dialog)
Vue.use(Progress)
Vue.use(Carousel)
Vue.use(CarouselItem)
Vue.use(Popover)
Vue.use(Table)
Vue.use(Tablecolumn)
Vue.use(Form)
Vue.use(Formitem)
Vue.use(Tooltip)
// Vue.use(Notification)
// Vue.use(Input)

// Vue.use(ElementUI)

// Vue.config.productionTip = false

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
