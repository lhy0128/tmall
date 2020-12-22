<template>
<div class="all">
  <div class="back">
    <img src="../../assets/scaner/scaner2.jpg" style="height:100%">
    <div class="center">
        <span>独家礼遇 会员尊享</span>
        <h1>悦享爱意，报以时光</h1>
        <h2 class="DW-font-book">SHARE LOVE RETURN IN TIME</h2>
    </div>
  </div>
  <p style="text-align:center">
    <span>还没有账号？点击此处去</span>
    <router-link class="a" :to="{name:'register'}">
       <span>注册</span>
    </router-link>
  </p>
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
// import store from '../store/index'
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
          // this.logining = true
          let loginParams = {
            username: this.ruleForm.username,
            password: this.ruleForm.password
          }
          // console.log(loginParams.username)
          requseLogin(loginParams).then(res => {
            // this.logining = false
            // console.log(res)
            var users = JSON.parse(res.request.responseText)
            // console.log(users)
            let msg = res.request.statusText
            let status = res.request.status
            if (status === 200) {
              for (let index in users) {
                // console.log(users[index].name)
                if (users[index].name === loginParams.username && users[index].password === loginParams.password) {
                  this.$message({
                    type: 'success',
                    message: msg
                  })
                  // 登陆成功，避免刷新后无登录信息
                  // console.log(res.data.data)
                  localStorage.setItem('user', JSON.stringify(loginParams))
                  this.$store.commit('user/setUser', loginParams.username)
                  this.$auth.setAuthorization(index)
                  this.$router.push({ path: '/home' })
                  this.logining = true
                }
              }
              if (this.logining === false) {
                alert('账号或者密码错误')
              }
            } else {
              this.$message({
                type: 'error',
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
  overflow-x: hidden;
  width: 100%;
}
.right{
  margin-top: 4%;
  width: 30%;
  margin-left:35%;
}
.back{
  background: url('');
  /* width: 100%; */
  height: 500px;
  z-index: 1;
}
.center{
  position:absolute;
  top: 250px;
  left: 64%;
  /* width: 100%; */
  z-index: 2;
}

</style>
