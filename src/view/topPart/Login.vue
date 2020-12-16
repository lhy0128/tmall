<template>
  <div>
    <!-- 登录表单 -->
    <div class="form">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="用户名" prop="username">
          <el-input v-model="ruleForm.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button class="submit" type="primary" @click="submitForm('ruleForm')">登录</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
// 导入api内的方法 列表形式导入
import { login } from "@/api/login.js"
import conf from "@/utils/config.js"
const { token } = conf
// 不确定怎么导入就打印看看
console.log(login);
export default { 
  data () {
    return {
      ruleForm: {
        username: '',
        password: ''
      },
      // rules内的属性名与上方的prop属性值是一样的
      rules: {
        username: [
          {
    required: true, message: "请输入用户名", trigger: "blur" },
        ],
        password: [{
   
    required: true, message: "请输入密码", trigger: "blur" }],
      },
    };
  },
  computed: {
  },
  methods: {
    // formName就是ruleForm
    // refs是引用 this.$refs[formName]拿ref对应的实例
    // valid是一个布尔值
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        console.log(valid);
        if (valid) {
          // 验证通过 提交数据给后台 存token 路由跳转
          // token 单纯存在sessionStorage、localStorage、cookie是可行的  若存在vuex中 刷新页面就没了
          login(this.ruleForm)
            .then((res) => {
              console.log(res)
              // 存token setItem(key,value)
              if (res.status == 200) {
                sessionStorage.setItem(token, res.data.token)
                this.$router.push("/home")
              } else {
                console.log(res.statusText)
                // statusText是后台写好的提示
                this.$notify.error({
                  // title: "错误",
                  message: res.statusText,
                });
              }
            })
            .catch((err) => {
              this.$notify.error({
                title: "错误",
                message: "服务器内部错误"
              })
            })
        } else {
          console.log ( "error submit!!");
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    }
  },
  created () {
  },
  mounted () {
  }
}
</script>
<style  scoped>
.form {
  width: 400px;
  margin: 100px auto;
  border: 2px solid lavender;
  padding: 100px 50px;
  border-radius: 5px;
  background-color: peachpuff
}
</style>
