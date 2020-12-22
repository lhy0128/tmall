<template>
  <div class="header_container">
     <el-menu
  mode="horizontal"
  background-color="#192638"
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
    <el-menu-item index="2-1">ICONIC MOTION</el-menu-item>
    <el-menu-item index="2-2">和平精英限定款</el-menu-item>
    <el-menu-item index="2-3">全新饰品</el-menu-item>
    <!-- <el-menu-item index="2-4">家具家电</el-menu-item>
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
      <el-menu-item index="2-8-7">糖果/巧克力</el-menu-item> -->
    <!-- </el-submenu> -->
  </el-submenu>
  <el-submenu index="3">
    <template slot="title">腕表</template>
    <el-menu-item index="3-1">所有腕表</el-menu-item>
    <el-menu-item index="3-2">男士腕表</el-menu-item>
    <el-menu-item index="3-3">女士腕表</el-menu-item>
  </el-submenu>
  <el-submenu index="4">
    <template slot="title">饰品</template>
    <el-menu-item index="4-1">
      <router-link :to="{name:'more'}" class="a">
        所有饰品
      </router-link>
    </el-menu-item>
    <el-menu-item index="4-2">戒指</el-menu-item>
    <el-menu-item index="4-3">手镯</el-menu-item>
    <el-menu-item index="4-4">耳环</el-menu-item>
    <el-menu-item index="4-5">墨镜</el-menu-item>
  </el-submenu>
  <el-menu-item index="5" >系列</el-menu-item>
  <el-submenu index="6">
    <template slot="title">礼品套装</template>
    <el-menu-item index="6-1">予她宠爱</el-menu-item>
    <el-menu-item index="6-2">赠她惊喜</el-menu-item>
    <el-menu-item index="6-3">和平精英礼盒</el-menu-item>
  </el-submenu>
  <el-menu-item index="7" >表带</el-menu-item>
  <el-submenu index="8">
    <template slot="title">穿搭灵感</template>
    <el-menu-item index="8-1">男生穿搭</el-menu-item>
    <el-menu-item index="8-2">女士穿搭</el-menu-item>
  </el-submenu>
  <el-menu-item index="9" >查找门店</el-menu-item>
  <el-menu-item index="10" >探索DW</el-menu-item>
  <el-menu-item index="11" v-if="!isLogin">
    <router-link class="a" :to="{name:'login'}">
      <span class="el-icon-user"></span>
      登录
    </router-link>
  </el-menu-item>
  <el-menu-item index="13" v-if="isLogin">
    <span class="welcome">欢迎 {{user}} </span>
    <span>
      <a href="" @click="remove">注销</a>
    </span>
  </el-menu-item>
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
// import { mapGetters, mapState } from 'vuex'
export default {
  // props: ['login'],
  data () {
    return {
      user: '',
      isLogin: false
    }
  },
  // computed: {
  //   ...mapState({
  //     username: state => state.user.username
  //   }),
  //   ...mapGetters('user', { isLogin: 'isLogin' })
  // },
  created () {
    this.getUsername()
  },
  methods: {
    getUsername () {
      this.user = sessionStorage.getItem('user')
      if (this.user) {
        this.isLogin = true
        var welcome = document.querySelector('.welcome')
        welcome.innerHTML = `${this.user}`
      }
      console.log(this.user)
    },
    remove () {
      sessionStorage.removeItem('user')
    }
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
