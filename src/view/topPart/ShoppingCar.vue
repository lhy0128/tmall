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
        <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="checkAll">全选</el-checkbox>
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
// import { updateProductNum } from '../../store/modules/shoppingCar'
export default {
  name: 'shoppingcar',
  data () {
    return {
      productList: {}
    }
  },
  methods: {
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
