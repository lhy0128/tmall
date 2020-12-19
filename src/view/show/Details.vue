<template>
  <div class="container">
    <div class="block">
      <el-carousel height="400px">
        <el-carousel-item v-for="item in imgList" :key="item">
          <img :src="item.src" width="100%" height="100%">
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="right">
      <div>
        <el-row>Name</el-row>
        <el-row>price</el-row>
        <!-- <span>Name</span> -->
        <span style="margin-left:auto;">$&nbsp;1990</span>
      </div>
      <hr color="#ccc">
      <div heigth="20px">
        <div>
          <span>yanse:</span>
          <span>color</span>
        </div>
        <div>
          <span>cima</span>
          <span></span>
        </div>
      </div>
      <button>立即购买</button>
    </div>
    <div class="later">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="商品展示" name="first">
          <p v-for="item in disPlay" :key="item">
            <img :src="item.src" width="100%" height="90%">
          </p>
        </el-tab-pane>
        <el-tab-pane label="搭配灵感" name="second">
          <div id="nav">
            <p v-for="item in match" :key="item">
              <img :src="item.src" width="100%" height="90%">
            </p>
          </div>
        </el-tab-pane>
        <el-tab-pane label="商品参数" name="third">角色管理</el-tab-pane>
        <el-tab-pane label="服务说明" name="fourth">定时任务补偿</el-tab-pane>
      </el-tabs>
    </div>
    <el-backtop target=".page-component__scroll .el-scrollbar__wrap"></el-backtop>
  </div>
</template>

<script>
import Carousel from './Carousel'
export default {
  data () {
    return {
      imgList: [
        {id: 1, src: require('../../assets/details/details1.png')},
        {id: 2, src: require('../../assets/details/details2.png')},
        {id: 3, src: require('../../assets/details/details3.png')},
        {id: 4, src: require('../../assets/details/details8.jpg')},
        {id: 5, src: require('../../assets/details/details7.jpg')}
      ],
      activeName: 'second',
      disPlay: [
        {id: 1, src: require('../../assets/disPlay/disPlay1.jpg')},
        {id: 2, src: require('../../assets/disPlay/disPlay2.jpg')},
        {id: 3, src: require('../../assets/disPlay/disPlay3.jpg')},
        {id: 4, src: require('../../assets/disPlay/disPlay4.jpg')},
        {id: 5, src: require('../../assets/disPlay/disPlay5.png')}
      ],
      match: [
        {id: 1, src: require('../../assets/match/match1.jpg')},
        {id: 2, src: require('../../assets/match/match2.jpg')},
        {id: 3, src: require('../../assets/match/match3.jpg')},
        {id: 4, src: require('../../assets/match/match4.jpg')}
      ]
    }
  },
  components: {
    Carousel
  },
  methods: {
    handleClick (tab, event) {
      console.log(tab, event)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container{
  width: 100%;
  margin-top:90px;
}
.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}
.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}
.block{
  width: 30%;
  margin: 35px;
  float: left;
}
.right{
  width: 55%;
  margin-left:auto;
  float: right;
  /* clear: both; */
}
.later{
  clear: both;
  width: 95%;
  margin: 0 auto;
}
#nav{
  width: 100%;
  margin: 0 auto;
}

#nav img{
  width: 17%;
  float: left;
  margin: 15px;
}
</style>
