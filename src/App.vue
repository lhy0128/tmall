<template>
  <div id="app">
    <Header></Header>
    <router-view/>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './components/header.vue'
import Footer from './components/Footer'
export default {
  components: {
    Header,
    Footer
  }
}
</script>

<style>

</style>
