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
  <div class="right">
    <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label="名称" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="pass">
        <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="checkPass">
       <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="年龄" prop="age">
        <el-input v-model.number="ruleForm.age"></el-input>
      </el-form-item>
      <el-form-item prop="email" label="邮箱">
        <el-input v-model="ruleForm.email"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</div>
</template>

<script>
// import axios from 'axios'
// import conf from '@/utils/config.js'
// const { baseURL } = conf
import { register } from '@/axios/api.js'
export default {
  name: 'register',
  data () {
    var checkAge = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('年龄不能为空'))
      }
      setTimeout(() => {
        if (!Number.isInteger(value)) {
          callback(new Error('请输入数字值'))
        } else {
          if (value < 12) {
            callback(new Error('必须年满12岁'))
          } else {
            callback()
          }
        }
      }, 1000)
    }
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
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.ruleForm.pass) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    return {
      ruleForm: {
        name: '',
        pass: '',
        checkPass: '',
        age: '',
        email: ''
      },
      rules: {
        name: [
          { required: true, message: '请输入昵称', trigger: 'blur' },
          { min: 3, max: 6, message: '长度在 3 到 6 个字符', trigger: 'blur' }
        ],
        pass: [
          { required: true, validator: validatePass, trigger: 'blur' }
        ],
        checkPass: [
          { required: true, validator: validatePass2, trigger: 'blur' }
        ],
        age: [
          { validator: checkAge, trigger: 'blur' }
        ],
        email: [
          { message: '请输入邮箱地址', trigger: 'blur' },
          { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
        ]
      }
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          let loginParams = {
            name: this.ruleForm.name,
            password: this.ruleForm.pass
          }
          const loginParam = JSON.stringify(loginParams)
          console.log(loginParam)
          register(JSON.parse(loginParam))
          this.$message({
            message: '恭喜你注册成功，使用账号登录吧^_^',
            type: 'success'
          })
          this.$router.push({ path: '/login' })
        } else {
          console.log('error submit!!')
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
.back{
  background: url('');
  width: 100%;
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
.right{
  margin-top: 4%;
  width: 30%;
  margin-left:35%;
}
.login-banner-center {
    width: 325px;
    /* -webkit-transform: translateY(-50%); */
    transform: translateY(-50%);
    color: #fff;
    position: absolute;
    left: auto;
    right: 30px;
    top: 50%;
    bottom: auto;
}
</style>
