<template>
  <div>
    <br>
    <el-menu
  :default-active="activeIndex2"
  class="el-menu-demo"
  mode="horizontal"
  @select="handleSelect"
  background-color="#545c64"
  text-color="#fff"
  active-text-color="#ffd04b">
  <el-menu-item index="1">首页</el-menu-item>
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
</el-menu>
  </div>
</template>

<script>
export default {
  data () {
    return {
      activeIndex: '1',
      activeIndex2: '1'
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
