// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router'
import axios from './axios.js'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Mock from './mock/index'
// element-ui组件的样式需要单独引入
Vue.prototype.$ajax = axios
// axios不能直接使用use引入，只能每个需要发送请求的组件中即时引入
Vue.use(ElementUI)
Vue.config.productionTip = false
Mock.init()
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  render: h => h(App)
}).$mount('#app')
