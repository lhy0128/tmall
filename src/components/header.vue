<template>
  <div class="header_container">
     <el-menu
  mode="horizontal"
  background-color="#545c64"
  text-color="#fff"
  active-text-color="#ffd04b">
  <el-menu-item index="1">
    <router-link class="a" :to="{name:'home'}">
      <span >
        <img src="../assets/dw-logo.png" alt="">
      </span>
    </router-link></el-menu-item>
  <el-submenu index="2">
    <template slot="title">全新上市</template>
    <el-menu-item index="2-1">美容洗护</el-menu-item>
    <el-menu-item index="2-2">进口食品</el-menu-item>
    <el-menu-item index="2-3">粮油副食</el-menu-item>
    <el-menu-item index="2-4">家具家电</el-menu-item>
    <el-menu-item index="2-5">家庭清洁</el-menu-item>
    <el-menu-item index="2-6">母婴用品</el-menu-item>
    <el-menu-item index="2-7">生活用品</el-menu-item>
    <el-submenu index="2-8">
      <template slot="title">食品饮料</template>
      <el-menu-item index="2-8-1">牛奶</el-menu-item>
      <el-menu-item index="2-8-2">坚果</el-menu-item>
      <el-menu-item index="2-8-3">饼干</el-menu-item>
      <el-menu-item index="2-8-4">方便面</el-menu-item>
      <el-menu-item index="2-8-5">粮油</el-menu-item>
      <el-menu-item index="2-8-6">酒类</el-menu-item>
      <el-menu-item index="2-8-7">糖果/巧克力</el-menu-item>
    </el-submenu>
  </el-submenu>
  <el-menu-item index="3" >腕表</el-menu-item>
  <el-menu-item index="4" >饰品</el-menu-item>
  <el-menu-item index="5" >系列</el-menu-item>
  <el-menu-item index="6" >礼品套装</el-menu-item>
  <el-menu-item index="7" >表带</el-menu-item>
  <el-menu-item index="8" >穿搭灵感</el-menu-item>
  <el-menu-item index="9" >查找门店</el-menu-item>
  <el-menu-item index="10" >探索DW</el-menu-item>
  <el-submenu index="11" v-if="!isLogin">
    <template slot="title" ><span class="el-icon-user"></span></template>
    <el-menu-item index="11-1">
      <p>已是DW会员？</p>
    </el-menu-item>
    <el-menu-item index="11-2">
      <router-link class="a" :to="{name:'login'}">
        <el-button type="primary" size="small">登录</el-button>
      </router-link></el-menu-item>
    <el-menu-item index="11-3">
      <router-link class="a" :to="{name:'register'}">
       <span>注册</span>
      </router-link></el-menu-item>
  </el-submenu>
  <el-menu-item index="13" v-if="isLogin">欢迎{{ username }}</el-menu-item>
  <el-menu-item index="12" >
    <router-link class="a" :to="{name:'shoppingcar'}">
      <span class="el-icon-shopping-cart-full"></span>
      <span>购物车</span>
    </router-link>
  </el-menu-item>
</el-menu>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'
export default {
  // props: ['login'],
  data () {
    return {}
  },
  computed: {
    ...mapState({
      username: state => state.user.username
    }),
    ...mapGetters('user', { isLogin: 'isLogin' })
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.a{
    text-decoration: none;
    color:#fff;
}
span{
    margin-right: 3px;
}
.header_container{
  position: fixed;
  top: 0;
  width: 100%;
  height: 70px;
  z-index: 10;
}
</style>
