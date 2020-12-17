// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router'
// 配置axios
import axios from './axios.js'
import ElementUI from 'element-ui'
// 引入element-ui组件
import 'element-ui/lib/theme-chalk/index.css'
// element-ui组件的样式需要单独引入
Vue.prototype.$ajax = axios
// axios不能直接使用use引入，只能每个需要发送请求的组件中即时引入
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
