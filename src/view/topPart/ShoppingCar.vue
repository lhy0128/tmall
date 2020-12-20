<template>
  <div class="table">
      <el-row>
      <el-col style="background-color:white;padding: 10px"
      :span="16" :offset="4" align="middle">
        <el-row>
          <el-col :span="1">
            <span>选择</span>
          </el-col>
          <el-col :span="3" align="middle">
            <span>商品图片</span>
          </el-col>
          <el-col :span="8" align="middle">
            <span>商品信息</span>
          </el-col>
          <el-col :span="3" align="middle">
            <span>单价</span>
          </el-col>
          <el-col :span="6" align="middle">
            <span>数量</span>
          </el-col>
          <el-col :span="3" align="middle">
            <span>总价</span>
          </el-col>
        </el-row>
        <el-row v-for="(item, index) in items" :key="index">
          <el-col :span="1" class="info">
            <el-checkbox @change="handleCheckedItemsChange"
            v-model="checkedItems[index]"></el-checkbox>
          </el-col>
          <el-col :span="3">
            <el-image style="width:80px;" @click="toDetail(item.id)"
            :src="item.img" fit="fill"></el-image>
          </el-col>
          <el-col :span="8" class="info" style="color: #444;">
            <div @click="toDetail(item.id)">
              <span>{{item.name}}</span>
              <span nowarp v-for="(p, i) in item.property" :key="i">
                {{p}}
              </span>
            </div>
          </el-col>
          <el-col :span="3" class="info">
            <span>￥{{item.price}}元</span>
          </el-col>
          <el-col :span="6" class="info">
            <el-input-number @change="handleChange(item.count, index)"
            size="mini" v-model="item.count"></el-input-number>
          </el-col>
          <el-col :span="3" class="info">
            <span>￥{{item.count * item.price}}元</span>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
    <el-row style="margin-top: 30px">
      <el-col :span="16" :offset="4" style="background-color: white;padding: 20px">
        <el-checkbox :indeterminate="isIndeterminate"
        v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
        <span style="margin-left: 20px;color:red" @click="clearCart">清空购物车</span>
        <div style="float:right">
          <span style="margin-right: 20px">已选择{{checkedCount}}件，共{{checkedMoney}}元</span>
          <router-link :to="{name:'pay'}">
            <el-button type="danger" size="small" >提交订单</el-button>
          </router-link>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'shoppingcar',
  data() {
    return {
      num: '',
      sumprice: 0,
      checkedAll: false,
      commodit: [
        {
          name: 'iPhone 11 Pro',
          price: 6188,
          num: 1,
          checked: false
        },
        {
          name: 'iPad Pro',
          price: 8699,
          num: 1,
          checked: false
        },
        {
          name: 'MacBook Pro',
          price: 11622,
          num: 1,
          checked: false
        }
      ]
    }
},
  methods: {
    deletecom: function (index) {
      this.commodit.splice(index ,1)
      this.counted ()
    },
    // 现存问题：移除购物车中的商品的时候，价格不会减少，始终是一开始或者加数量后的
    // 怎么才能让点击移除按钮的时候即调用该函数
    // 尝试把counted函数加在点击之后，发现还是不行
    counted: function () {
      var totalPrice = 0// 临时总价
      this.commodit.forEach(function (val, index) {
        if (val.checked !== false)
          totalPrice += val.num * val.price// 累计总价
      })
      this.sumprice = parseFloat(totalPrice)
    },
    // 现存问题，不管是单选还是全选按钮，都要点击两次才行
    // danxuan
    check: function (index) {
      if (this.commodit[index].checked === false) {
        this.commodit[index].checked = true
      } else {
        this.commodit[index].checked = false
        this.checkedAll = false
      }
      this.counted ()
    },
    // 全选框
    checkAll (commodit) {
      if (this.checkedAll === false) {
        for (var i = 0; i < this.commodit.length; i++) {
          var commodit = this.commodit[i]
          commodit.checked = true
        }
        this.counted ()
      } else {
        for (var i = 0; i < this.commodit.length; i++) {
          var commodit = this.commodit[i]
          commodit.checked = false
        }
      }
      this.checkedAll = !this.checkedAll
      this.counted ()
    }
  },
  created: function () {
    this.counted()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.table{
  margin-top: 90px;
  border-collapse:collapse;
}

</style>
