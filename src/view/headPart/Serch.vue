<template>
  <div class="serch" >
      <el-input placeholder="请输入内容">
        <template slot="append">
        </template>
        <el-button type="success" slot="append" icon="el-icon-search"></el-button>
      </el-input>
  </div>
</template>

<script>
export default {

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.serch{
  padding-top: 20px;
  width: 70%;
  margin: 0 auto;
}
</style>
