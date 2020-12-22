<template>
  <div class="table">
      <el-row>
      <el-col style="background-color:white;padding: 10px" :span="16" :offset="4" align="middle">
        <el-row>
          <el-col :span="1">
            <span>选择</span>
          </el-col>
          <el-col :span="3" align="middle">
            <span>商品图片</span>
          </el-col>
          <el-col :span="8" align="middle">
            <span>商品名称</span>
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
        <el-row v-for="(item, index) in items" :key="index" class="pad">
          <el-col :span="1" class="info">
            <el-checkbox @change="handleCheckedItemsChange"
            v-model="checkedItems[index]"></el-checkbox>
          </el-col>
          <el-col :span="3">
            <el-image style="width:80px;"
            :src="item.img"></el-image>
          </el-col>
          <el-col :span="8" class="info">
            <div>
              <span>{{item.name}}</span>
            </div>
          </el-col>
          <el-col :span="3" class="info">
            <span>￥{{item.price}}元</span>
          </el-col>
          <el-col :span="6" class="info">
            <el-input-number @change="handleChange(item.count, index)" size="mini" v-model="item.count"></el-input-number>
          </el-col>
          <el-col :span="3" class="info">
            <span>￥{{item.count * item.price}}元</span>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
    <el-row style="margin-top: 30px">
      <el-col :span="16" :offset="4" style="background-color: white;padding: 20px">
        <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="checkAll">全选</el-checkbox>
        <el-button type="text" style="color:red" @click="clearCart">清空购物车</el-button>
        <div style="float:right">
          <span style="margin-right: 20px">已选择{{checkedCount}}件，共{{checkedMoney}}元</span>
          <router-link :to="{name:'pay'}">
            <el-button type="danger" size="small"  @click="submitOrder">提交订单</el-button>
          </router-link>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
// import swal from 'sweetalert'
// import { updateProductNum } from '../../store/modules/shoppingCar'
export default {
  name: 'shoppingcar',
  data () {
    return {
      checkAll: false,
      isIndeterminate: false,
      checkedItems: [],
      items: []
    }
  },
  methods: {
    submitOrder () {
      localStorage.setItem('order', JSON.stringify(this.checkedItems))
    },
    clearCart () {
      this.$confirm('此操作将清空您的购物车, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.items = []
        localStorage.setItem('cart', JSON.stringify([]))
        this.$message({
          type: 'success',
          message: '清除成功!'
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
    },
    handleChange (value, index) {
      const that = this
      if (value <= 0) {
        this.$confirm('您即将从您的购物车删除一件商品，是否继续？', '提示', {
          confirmButtonText: '继续',
          cancelButtonText: '取消',
          type: 'warning',
          center: true
        }).then(() => {
          const cart = JSON.parse(localStorage.getItem('cart'))
          cart.splice(index, 1)
          localStorage.setItem('cart', JSON.stringify(cart))
          this.items = cart
          this.$message({
            type: 'success',
            message: '删除成功!'
          })
        }).catch(() => {
          that.items = JSON.parse(localStorage.getItem('cart'))
          this.$message({
            type: 'info',
            message: '已取消删除'
          })
        })
      } else {
        const cart = JSON.parse(localStorage.getItem('cart'))
        cart[index].count = value
        localStorage.setItem('cart', JSON.stringify(cart))
      }
    },
    handleCheckedItemsChange () {
      let count = 0
      for (let i = 0; i < this.items.length; i += 1) {
        if (this.checkedItems[i] === true) {
          count += 1
        }
      }
      this.checkAll = count === this.items.length
      this.isIndeterminate = count > 0 && count < this.items.length
    },
    handleCheckAllChange (val) {
      // 单纯更改数组里的值并不会触发计算属性的更新
      // 将数据整个地址进行替换才可以触发
      const temp = []
      for (let i = 0; i < this.items.length; i += 1) {
        temp[i] = val
      }
      this.checkedItems = temp
      this.isIndeterminate = false
    }
  },
  computed: {
    checkedCount () {
      let count = 0
      for (let i = 0; i < this.items.length; i += 1) {
        if (this.checkedItems[i] === true) {
          count += this.items[i].count
        }
      }
      return count
    },
    checkedMoney () {
      let countMoney = 0
      for (let i = 0; i < this.items.length; i += 1) {
        if (this.checkedItems[i] === true) {
          countMoney += this.items[i].count * this.items[i].price
        }
      }
      return countMoney
    }
  },
  created () {
    const cart = JSON.parse(localStorage.getItem('cart'))
    if (cart !== null) {
      this.items = cart
    }
    this.checkAll = true
    for (let i = 0; i < this.items.length; i += 1) {
      this.checkedItems[i] = true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.table{
  margin-top: 90px;
  /* border-collapse:collapse; */
}
.info{
  margin-top: 3%;
}
</style>
