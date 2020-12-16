// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router'
// 配置axios
import axios from './axios.js'
Vue.use(axios)
import ElementUI from 'element-ui'
// 引入element-ui组件
import 'element-ui/lib/theme-chalk/index.css'
// element-ui组件的样式需要单独引入
Vue.use(ElementUI)
// 注册element组件
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  render: h => h(App)
}).$mount('#app')
