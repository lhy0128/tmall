import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const state = {
  user: window.sessionStorage.getItem('user')
}
const mutations = {
  GET_USER: (state, data) => {
    state.user = data
    window.sessionStorage.setItem('user', data)
  },
  LOGOUT: (state) => {
    // 退出登录时清除用户名
    state.user = null
    window.sessionStorage.removeItem('user')
  }
}
const actions = {
}
export default new Vuex.Store({
  state,
  mutations,
  actions
})
