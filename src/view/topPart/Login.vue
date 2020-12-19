<template>
<div class="all">
  <div class="login-banner-wrap">
    <div class="login-banner">
        <div class="login-banner-content">
            <div class="login-banner-center">
                <span>独家礼遇 会员尊享</span>
                <h1>悦享爱意，报以时光</h1>
                <h2 class="DW-font-book">SHARE LOVE RETURN IN TIME</h2>
            </div>
        </div>
    </div>
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
            username: this.ruleForm.username,
            password: this.ruleForm.password
          }
          console.log(loginParams.username)
          requseLogin(loginParams).then(res => {
            this.logining = false
            console.log(res)
            let user = res.data
            let msg = res.request.statusText
            let status = res.request.status
            // let { status, msg, user } = config.data // status
            if (status === 200) {
              this.$message({
                type: 'success',
                message: msg
              })
              // 登陆成功，避免刷新后无登录信息
              sessionStorage.setItem('user', JSON.stringify(user))
              console.log('this', this)
              this.$router.push({ path: '/home' })
            } else {
              this.$message({
                type: 'success',
                message: msg
              })
            }
          }).catch(err => {
            console.log(err)
          })
        } else {
          console.log('error sublmit!')
          return false
        }
      })
    },
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
