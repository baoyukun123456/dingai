<template>
    <el-container class="login_bg">
        <div class="login_box">
            <div class="login_logo">
                <img src="../assets/image/login_logo.png" alt="">
            </div>
            <div>
                <div class="login_title"></div>
                <el-form :model="ruleForm" status-icon :rules="rules2" ref="ruleForm" label-width="100px" class="demo-ruleForm login_form">
                <el-form-item label="用户名" prop="username">
                    <el-input type="text" v-model="ruleForm.username" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="passworld">
                    <el-input type="password" v-model="ruleForm.passworld" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
                </el-form-item>
                </el-form>
            </div>
        </div>
    </el-container>
</template>
<script>
  export default {
    data() {

      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入用户名'));
        } else {
          if (this.ruleForm.passworld !== '') {
            this.$refs.ruleForm.validateField('passworld');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          callback();
        }
      };
      return {
        ruleForm: {
          username: '',
          passworld: ''
        },
        rules2: {
          username: [
            { validator: validatePass, trigger: 'blur' }
          ],
          passworld: [
            { validator: validatePass2, trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.open1();
            this.$router.push('main')
          } else {
            this.open8();
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      open8() {
        this.$message({
          showClose: true,
          message: '登录有问题',
          type: 'error'
        });
      },
      open1() {
        this.$message({
          showClose: true,
          message: '成功登陆',
          type: 'success'
        });
      }
    }
  }
</script>
<style lang="less" scoped>
.login_bg {
  height: 100%;
  width: 100%;
  background: url(../assets/image/login_bg.jpg) no-repeat center / cover;
  display: flex;
  justify-content: center;
  align-items: center;
  .login_box {
    display: flex;
    // border: 1px solid red;
    // background: #fff;
    .login_logo{
        // border-right:1px solid green; 
        img{
            width: 300px;
            height: 300px;
        }
    }
    .login_title {
      width: 700px;
      height: 100px;
      background: url(../assets/image/logo.png) no-repeat center / cover;
    }
    .login_form{
        width: 500px;
        margin-top: 80px;
        
    }
  }
}
</style>

