<template>
  <div class="container">
    <div class="hea_con">
      <div class="block">
      <el-carousel height="400px">
        <el-carousel-item v-for="item in imgList" :key="item">
          <img :src="item.src" width="100%" height="100%">
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="right">
      <el-row :gutter="20">
        <el-col :span="16">ELAN NECKLACE</el-col>
        <el-col :span="8">￥&nbsp;890</el-col>
      </el-row>
      <hr>
      <el-row :gutter="20">
        <el-col :span="4">颜色：</el-col>
        <el-col :span="6">尺码：</el-col>
        <el-col :span="4"></el-col>
        <el-col :span="4"></el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="4">
          <el-radio-group v-model="express">
            <el-button type="success" circle v-for="item in expressOptions" :key="item" :label="item"></el-button>
          </el-radio-group>
        </el-col>
        <el-col :span="6">
          <el-radio-button label="默认"></el-radio-button>
        </el-col>
        <el-col :span="4">尺寸指南</el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="4">+定制贺卡</el-col>
        <el-col :span="6"></el-col>
        <el-col :span="4"></el-col>
        <el-col :span="4"></el-col>
      </el-row>
      <el-button>加入购物车</el-button>
      <el-button size="medium">立即购买</el-button>
      <el-row :gutter="20">
        <p>顺丰包邮</p>
        <p>免息分期</p>
        <p>正品保障</p>
      </el-row>
    </div>
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
              <img :src="item.src" width="100%">
            </p>
          </div>
        </el-tab-pane>
        <el-tab-pane label="商品参数" name="third">角色管理</el-tab-pane>
        <el-tab-pane label="服务说明" name="fourth">
          <h3>价格说明</h3>
          <div class="det">
            <h4 style="color:black">划线价格</h4>
            <p>指商品的专柜价，品牌价，建议零售价或该商品的曾经展示过的销售价格等，并非原价，仅供您参考</p>
            <h4 style="color:black">未划线价格</h4>
            <p>指商品的实时标价，具体成交价格根据商品参加活动，或因顾客使用折扣码、优惠券、积分等发生变化，最终以订单结算页价格为准</p>
          </div>
          <hr>
          <h3>防伪说明</h3>
          <div class="det">
            <p>DANIEL WELLINGTON致力于为全球消费者提供高质量的轻奢产品。从2019年9月1日起，我们对部分DANIEL WELLINGTON腕表和眼镜产品增加了验真功能。搜索链接https://www.danielwellington.cn/quality-statement-cn/可查看具体的防伪说明</p>
          </div>
        </el-tab-pane>
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
      ],
      express:'红色',
      expressOptions: ['红色', '蓝色']
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
  width: 90%;
  margin: 0 auto;
}
.hea_con{
  margin-top: 90px;
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
.det{
  margin-left: 3%;
  color: #ccc;
}
.el-row {
  margin: 30px;
  /* &: last-child {
  margin-bottom: 0;
  } */
}

</style>
