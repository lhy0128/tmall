<template>
  <div>
    <div class="block">
    <el-carousel trigger="click" height="350px">
      <el-carousel-item v-for="item in 4" :key="item">
        <h3 class="small">{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>
  </div>
  </div>
</template>

<script>
export default {

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.block{
  width: 80%;
  margin:0 auto;
}
.el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }
  .el-carousel__item:nth-child(2n) {
     background-color: #99a9bf;
  }
  .el-carousel__item:nth-child(2n+1) {
     background-color: #d3dce6;
  }
</style>
