<template>
  <div>
      <p class="p">{{ title }}</p>
      <div class="row">
        <el-row class="float">
          <el-col :span="8" v-for="(o, index) in 2" :key="o" :offset="index > 0 ? 2 : 0">
            <el-card shadow="hover" :body-style="{ padding: '0px' }">
            <img :src="require('../../assets/festival/fes4.png')" width="100%" >
            <div style="padding: 10px;">
              <p>HHHHHH</p>
              <p>11111</p>
              <p>#999</p>
            </div>
            </el-card>
          </el-col>
        </el-row>
      </div>
  </div>
</template>

<script>
export default {
  props: ['title', 'fesimg']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.row{
    padding-left: 30%;
    width: 50%;
}
.image {
  width: 100%;
  display: block;
}
.p{
  margin: 30px;
  text-align: center;
  font-family: 黑体;
  font-size: 25px;
}
</style>
