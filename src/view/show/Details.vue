<template>
  <div class="row">
      <el-row>
        <el-col :span="8" v-for="(o, index) in 1" :key="o" :offset="index > 0 ? 2 : 0">
            <el-card shadow="hover" :body-style="{ padding: '0px' }">
            <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
            <div style="padding: 14px;">
                <p>HHHHHH</p>
                <p>11111</p>
                <p>#999</p>
            </div>
            </el-card>
        </el-col>
      </el-row>
  </div>
</template>

<script>
export default {
  data () {
    return {
      currentDate: new Date()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.row{
    padding-left: 5%;
    width: 50%;
}
.image {
  width: 100%;
  display: block;
}
</style>
