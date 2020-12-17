<template>
  <div>
     <el-menu
  :default-active="activeIndex2"
  class="el-menu-demo"
  mode="horizontal"
  @select="handleSelect"
  background-color="#545c64"
  text-color="#fff"
  active-text-color="#ffd04b">
  <el-menu-item index="1">
    <router-link class="a" :to="{name:'home'}">
      <span class="el-icon-s-home"></span>
      <span>首页</span>
    </router-link></el-menu-item>
  <el-submenu index="2">
    <template slot="title">所有产品分类</template>
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
  <el-menu-item index="3" >企业采购</el-menu-item>
  <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
  <el-menu-item index="5" >
    <router-link class="a" :to="{name:'login'}">
      <span>你好，请登录</span>
    </router-link>
  </el-menu-item>
  <el-menu-item index="6" >
    <router-link class="a" :to="{name:'register'}">
      <span>免费注册</span>
    </router-link>
  </el-menu-item>
  <el-menu-item index="7" >
    <span>我的淘宝</span>
    <span class="el-icon-caret-bottom"></span>
  </el-menu-item>
  <el-menu-item index="8" >
    <router-link class="a" :to="{name:'shoppingcar'}">
      <span class="el-icon-shopping-cart-full"></span>
      <span>购物车</span>
    </router-link>
  </el-menu-item>
  <el-menu-item index="9" >
    <span>收藏夹</span>
        <span class="el-icon-caret-bottom"></span>
  </el-menu-item>
</el-menu>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.a{
    text-decoration: none;
}
span{
    margin-right: 5px;
}
</style>
