<template>
  <div id="app">
    <Header></Header>
    <router-view/>
    <Footer></Footer>
  </div>
</template>

<script>
import { requseLogin } from '@/axios/api.js'
import Header from './components/header.vue'
import Footer from './components/Footer'
export default {
  components: {
    Header,
    Footer
  },
  created () {
    this.showBack = this.$route.path !== '/home'
    this.checkLogin()
  },
  methods: {
    goBack () {
      this.$router.go(-1)
    },
    // 记住登录状态。未实现
    checkLogin () {
      requseLogin().then(res => {
        if (res.data.code === 1) {
          this.$store.commit('user/setUser', res.data.data)
        }
      })
    }
  }

}
</script>

<style>

</style>
