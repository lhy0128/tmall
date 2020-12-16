<template>
  <div>
    <div class="top">
      <div class="right" >
          <span class="el-icon-s-home">天猫首页</span>
          <router-link class="a" :to="{name:'login',query:{id:'1'}}">
              <span>你好，请登录</span>
          </router-link>
          <router-link class="a" :to="{name:'register'}">
              <span>免费注册</span>
          </router-link>
      </div>
      <div class="left">
        <span>我的淘宝</span>
        <span class="el-icon-caret-bottom"></span>
        <router-link class="a" :to="{name:'shoppingcar'}">
            <span class="el-icon-shopping-cart-full">购物车</span>
            <span></span>
        </router-link>
        <span>收藏夹</span>
        <span class="el-icon-caret-bottom"></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Top'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.a{
    text-decoration: none;
}
.top{
  margin: 0 0 5px;
  height: 30px;
  background-color:#ccc;
}
.right{
  float: left;
  padding-left: 30px;
  padding-right: 20px;

}
.left{
  text-align: right;
  margin-right: 30px;
}
span{
    margin-right: 5px;
}
</style>
