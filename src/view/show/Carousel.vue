<template>
  <div>
    <div class="block">
    <el-carousel trigger="click" height="350px">
      <el-carousel-item v-for="item in imgList" :key="item.id">
        <img :src="item.src">
      </el-carousel-item>
    </el-carousel>
  </div>
  </div>
</template>

<script>
export default {
  props: ['imgList']

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.block{
  width: 80%;
  margin:0 auto;
}
img {
  width: 100%;
  height: 100%;
}

</style>
