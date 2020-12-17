<template>
<div class="all">
  <div class="left">
    <img src="@/assets/registerl.png" alt="">
  </div>
  <div class="right">
    <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label="用户名" prop="username">
        <el-input v-model="ruleForm.username"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</div>
</template>

<script>
import { requseLogin } from '@/axios/api.js'
export default {
  name: 'login',
  data () {
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        if (this.ruleForm.checkPass !== '') {
          this.$refs.ruleForm.validateField('checkPass')
        }
        callback()
      }
    }
    return {
      ruleForm: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, validator: validatePass, trigger: 'blur' }
        ]
      },
      checked: true,
      logining: false
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.logining = true
          let loginParams = {
            username: this.account.username,
            password: this.account.password
          }
           // 调用axios登录接口
      requseLogin(loginParams).then(res => {
       // debugger;
       this.logining = false;
       // 根据返回的code判断是否成功
       let { code, msg, user } = res.data;
       if (code === 200) {
        // elementui中提示组件
        this.$message({
         type: 'success',
         message: msg
        })
        // 登陆成功，用户信息就保存在sessionStorage中
        sessionStorage.setItem('user', JSON.stringify(user));
        // 跳转到后台主页面
        console.log('this',this)
        this.$router.push({ path: '/home' })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
    resetForm (formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.all{
  margin-top: 10%;
  width: 100%;
}
.left{
  float: left;
  width: 50%;
}
.right{
  float: left;
  width: 30%;
}
</style>
