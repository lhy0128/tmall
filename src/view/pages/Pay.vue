<template>
  <div class="tab">
    <el-row>
      <el-col :span="16" :offset="4">
        <span>配送至：</span>
        <div style="width:50%;margin:10px 10px 10px 0px;">
          <span>详细地址:</span>
          <el-input
            type="textarea"
            :rows="3"
            placeholder="请输入内容"
            v-model="areaDetail">
          </el-input>
        </div>
      </el-col>
    </el-row>
    <el-row style="margin-bottom:20px">
      <el-col :span="16" :offset="4">
        <el-radio-group v-model="express">
          <el-radio-button v-for="item in expressOptions" :key="item" :label="item"></el-radio-button>
        </el-radio-group>
      </el-col>
    </el-row>
    <el-row>
      <el-col style="background-color:white;padding: 10px" :span="16" :offset="4" align="middle">
        <el-row>
          <el-col :span="1">
            <span>序号</span>
          </el-col>
          <el-col :span="3" >
            <span>商品图片</span>
          </el-col>
          <el-col :span="10">
            <span>商品信息</span>
          </el-col>
          <el-col :span="3">
            <span>单价</span>
          </el-col>
          <el-col :span="4">
            <span>数量</span>
          </el-col>
          <el-col :span="3">
            <span>总价</span>
          </el-col>
        </el-row>
        <el-row v-for="(item, index) in items" :key="index" class="pad">
          <el-col :span="1" class="info">
            <span>{{index + 1}}</span>
          </el-col>
          <el-col :span="3">
            <el-image style="width:80px;"
            :src="item.img" fit="fill"></el-image>
          </el-col>
          <el-col :span="10" class="info" style="color: #444;">
            <span>{{item.name}}</span>
          </el-col>
          <el-col :span="3" class="info">
            <span>￥{{item.price}}元</span>
          </el-col>
          <el-col :span="4" class="info">
            {{item.count}}
          </el-col>
          <el-col :span="3" class="info">
            <span>￥{{item.count * item.price}}元</span>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
    <el-row style="margin-top: 30px">
      <el-col :span="16" :offset="4" style="background-color: white;padding: 20px">
        <div style="float:right">
          <span style="margin-right: 20px">{{checkedCount}}件，共{{checkedMoney}}元</span>
          <el-button type="danger" size="small" @click="submitBill">结算</el-button>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import swal from 'sweetalert'
// import { CodeToText } from 'element-china-area-data'
// import Location from '../components/Location.vue';
export default {
  components: {
    // Location
  },
  data () {
    return {
      express: '邮政快递',
      expressOptions: ['邮政快递', '中通快递', '圆通快递', '韵达快递'],
      items: [],
      areaDetail: ''
    }
  },
  methods: {
    submitBill () {
      // const address = JSON.parse(localStorage.getItem('address'))
      // let addressText = ''
      let productText = ''
      const htmlText = `快递：${this.express}<br/>金额：${this.checkedMoney}元<br/>${productText}`
      const span = document.createElement('span')
      span.innerHTML = htmlText
      const username = localStorage.getItem('user')
      if (username === '' || username === null) {
        swal('提示', '请先登录再结算！', 'error').then(() => {
          this.$router.push('/login')
        })
        return
      }
      swal({
        title: '支付成功',
        icon: 'success',
        content: span,
        showCloseButton: true
      }).then(() => {
        // 清除购物车里已被购买的商品,及订单
        const order = JSON.parse(localStorage.getItem('order'))
        const cart = JSON.parse(localStorage.getItem('cart'))
        for (let i = 0; i < order.length; i += 1) {
          if (order[i] === true) {
            order.splice(i, 1)
            cart.splice(i, 1)
            i -= 1
          }
        }
        localStorage.setItem('cart', JSON.stringify(cart))
        localStorage.removeItem('address')
        localStorage.removeItem('order')
        this.$router.go(-1)
        // end
      })
    },
    getAddress (res) {
      this.addressText = res
    }
  },
  computed: {
    checkedCount () {
      let count = 0
      for (let i = 0; i < this.items.length; i += 1) {
        count += this.items[i].count
      }
      return count
    },
    checkedMoney () {
      let countMoney = 0
      for (let i = 0; i < this.items.length; i += 1) {
        countMoney += this.items[i].count * this.items[i].price
      }
      return countMoney
    }
  },
  created () {
    // 检查是否有需要结算的
    const cart = JSON.parse(localStorage.getItem('cart'))
    const choosed = JSON.parse(localStorage.getItem('order'))
    for (let i = 0; i < cart.length; i += 1) {
      if (choosed[i] === true) {
        this.items.push(cart[i])
      }
    }
  }
}
</script>
<style scoped>
.tab{
  margin-top: 90px;
}
.pad{
  padding: 5px;
}
</style>
