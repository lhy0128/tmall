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
        <el-col :span="16">{{ Product.name }}</el-col>
        <el-col :span="8">￥&nbsp;{{Product.price}}</el-col>
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
          <p class="pcolor">{{ Product.color }}</p>
        </el-col>
        <el-col :span="6">
          <el-radio-button label="默认"></el-radio-button>
        </el-col>
        <el-col :span="4">尺寸指南</el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="5">+定制贺卡</el-col>
        <el-col :span="8"> </el-col>
        <el-col :span="3">
          <span class="title" >配送至：</span>
        </el-col>
        <el-col :span="4">
          <el-select v-model="value" placeholder="请选择">
          <el-option
            v-for="item in cities"
            :key="item.value"
            :label="item.label"
            :value="item.value">
            <span style="float: left">{{ item.label }}</span>
            <span style="float: right; color: #8492a6; font-size: 13px">{{ item.value }}</span>
          </el-option>
          </el-select>
        </el-col>
      </el-row>
      <el-button @click="addToCar">加入购物车</el-button>
      <el-button size="medium">立即购买</el-button>
      <el-row :gutter="20" class="color">
        <p class="el-icon-truck"> 顺丰包邮</p>
        <br>
        <p class="el-icon-time"> 免息分期</p>
        <br>
        <p class="el-icon-medal-1"> 正品保障</p>
      </el-row>
    </div>
    </div>
    <div class="later">
      <el-tabs v-model="activeName" >
        <el-tab-pane label="商品展示" name="first">
          <p v-for="item in disPlay" :key="item">
            <img :src="item.src" width="100%" height="90%">
          </p>
        </el-tab-pane>
        <el-tab-pane label="商品参数" name="second">
          <br>
          <br>
          <p>{{ Product.message }}</p>
        </el-tab-pane>
        <el-tab-pane label="品牌故事" name="third">
          <br>
          {{ Product.story }}
        </el-tab-pane>
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
  </div>
</template>

<script>
// import swal from 'sweetalert'
import { requseProductDetails } from '@/axios/api.js'
import Carousel from './Carousel'
export default {
  props: ['id'],
  data () {
    return {
      cities: [{
        value: 'Beijing',
        label: '北京'
      }, {
        value: 'Shanghai',
        label: '上海'
      }, {
        value: 'Nanjing',
        label: '南京'
      }, {
        value: 'Chengdu',
        label: '成都'
      }, {
        value: 'Shenzhen',
        label: '深圳'
      }, {
        value: 'Guangzhou',
        label: '广州'
      }],
      value: '',
      imgList: [],
      activeName: 'first',
      disPlay: [],
      loading: false,
      Product: [{}]
    }
  },
  components: {
    Carousel
  },
  created () {
    this.getProduct()
  },
  methods: {
    getProduct () {
      requseProductDetails().then(res => {
        var id = this.id - 1
        // console.log(res)
        var Product = JSON.parse(res.request.responseText)
        // let Products = Product.data
        // console.log(Product[this.id])
        this.Product = Product[id]
        // console.log(this.Product)
        this.imgList = Product[id].imgList
        this.disPlay = Product[id].disPlay
        // this.match = Product[id].match
        // console.log(this.imgList)
        for (let l in this.imgList) {
          // console.log(this.imgList[l].imgName)
          this.imgList[l].src = require('../../assets/details' + this.id + '/' + this.imgList[l].imgName)
        }
        for (let j in this.disPlay) {
          // console.log(this.imgList[l].imgName)
          this.disPlay[j].src = require('../../assets/display' + this.id + '/' + this.disPlay[j].imgName)
        }
      })
    },
    addToCar () {
      if (this.value === '') {
        this.$notify.error({
          title: '错误',
          message: '请选择配送地址',
          duration: 2000
        })
        return
      }
      let i
      let cart = []
      const item = {
        id: this.id,
        name: this.Product.name,
        img: require('../../assets/details' + this.id + '/' + this.imgList[0].imgName),
        price: this.Product.price,
        count: 1
      }
      const str = localStorage.getItem('cart')
      if (str !== null && str !== '') {
        cart = JSON.parse(str)
      }
      for (i = 0; i < cart.length; i += 1) {
        if (this.productSame(cart[i], item)) {
          cart[i].count += 1
          break
        }
      }
      if (i >= cart.length) {
        cart.push(item)
      }
      localStorage.setItem('cart', JSON.stringify(cart))
      this.$notify({
        title: '成功',
        message: '成功加入购物车',
        type: 'success'
      })
    },
    productSame (oldItem, newItem) {
      if (oldItem.id !== newItem.id || oldItem.name !== newItem.name) {
        return false
      }
      return true
    }
  }
}
</script>

<style scoped>
.container{
  width: 90%;
  margin: 0 auto;
}
.hea_con{
  margin-top: 90px;
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
  margin: 25px;
  /* &: last-child {
  margin-bottom: 0;
  } */
}
.color{
  color: rgb(132, 55, 194);
}
.pcolor{
  color: rgb(129, 6, 119);
}
</style>
