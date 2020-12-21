<template>
  <div>
      <p class="p">{{ title }}</p>
      <div class="row">
        <el-row>
          <el-col :span="5" v-for="id in 4" :key="id" :offset="1" @click="selectGood(this.id)">
            <el-card shadow="hover" :body-style="{ padding: '0px' }">
              <router-link class="a" :to="{name:'details', params: {id:id}}">
              <img :src="require('../../assets/festival/fes4.png')" width="100%" >
                <div style="padding: 10px;">
                  <p>{{product.name}}</p>
                  <p>11111</p>
                  <p>#999</p>
                </div>
              </router-link>
            </el-card>
          </el-col>
        </el-row>
      </div>
  </div>
</template>

<script>
// import { requseProductInfo } from '@/axios/api.js'
export default {
  data () {
    return {
      product: [
      ]
    }
  },
  props: ['title', 'fesimg'],
  methods: {
    selectGood (id) {
      alert('1')
      this.$router.push({
        path: 'details',
        query: {goodId: id}})
    }
  }
  // created () {
  //   this.getProduct()
  // },
  // methods: {
  //   getProduct () {
  //     requseProductInfo().then(res => {
  //       console.log(res)
  //       var product = JSON.parse(res.request.responseText)
  //       let products = product.data
  //       console.log(products)
  //       // if (res.data.code === 0) {
  //       //   alert('图片加载失败')
  //       // } else {
  //       for (let index in products) {
  //         this.product[index] = products[index]
  //         // console.log(this.imgList[index].src)
  //       }
  //       // }
  //     })
  //     console.log(this.product)
  //   }
  // }
  // computed: {
  //   productInfo: function () {
  //     return this.getProductInfo(this.$route.params.id)
  //   }
  // }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.row{
    margin: 0 auto;
    width: 80%;
}
.image {
  width: 100%;
  display: block;
}
.a{
    text-decoration: none;
    color:rgb(10, 10, 10);
}
.p{
  margin: 30px;
  text-align: center;
  font-family: 黑体;
  font-size: 25px;
}
</style>
