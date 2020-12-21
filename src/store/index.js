import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
Vue.use(Vuex)
// const token = 'token'
export default new Vuex.Store({
  state: {
    token: false
  },
  modules: {
    user
  }
})
