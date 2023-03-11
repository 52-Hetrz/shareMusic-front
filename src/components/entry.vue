<template>
    <div class="container" :style="note" style="height: 100%;padding-top: 10%">
        <div style="margin: -4px 37% 0 37%;">
            <span
              style="font-size: 120px;font-weight: bold;font-family: Arial,serif"
            >
              Life
            </span>
            <div style="padding: 13px;  box-shadow: 2px 2px 4px 2px rgba(94, 94, 94, 0.9);">
              <div v-show="isLogin">
                <el-form
                  id="login-form"
                  ref="loginForm"
                  :model="loginInfo"
                  :rules="loginRules"
                  style="font-size: 30px; font-weight: bolder;margin-right: 20px"
                  size="small"
                >
                    <el-form-item style="font-weight: bolder;font-size: 40px" prop="name">
                      <el-row>
                        <el-col :span="7">
                          <span class="form-label">用户名：</span>
                        </el-col>
                        <el-col :span="17">
                          <el-input v-model="loginInfo.name" style="font-size: 15px"></el-input>
                        </el-col>
                      </el-row>
                    </el-form-item>
                    <el-form-item prop="password">
                      <el-row>
                        <el-col :span="7">
                          <span class="form-label">密码：</span>
                        </el-col>
                        <el-col :span="17">
                          <el-input v-model="loginInfo.password" show-password></el-input>
                        </el-col>
                      </el-row>
                    </el-form-item>
                </el-form>
                <el-row>
                  <el-button type="primary" round @click="login()">登录</el-button>
                </el-row>
              </div>

              <div v-show="!isLogin">
                <el-form
                  id="register-form"
                  ref="registerForm"
                  :model="registerInfo"
                  :rules="registerRules"
                  style="font-size: 30px; font-weight: bolder;margin-right: 20px"
                  size="small"
                >
                  <el-form-item style="font-weight: bolder;font-size: 40px" prop="name">
                    <el-row>
                      <el-col :span="7">
                        <span class="form-label">用户名：</span>
                      </el-col>
                      <el-col :span="17">
                        <el-input v-model="registerInfo.name" style="font-size: 15px"></el-input>
                      </el-col>
                    </el-row>
                  </el-form-item>
                  <el-form-item prop="password">
                    <el-row>
                      <el-col :span="7">
                        <span class="form-label">密码：</span>
                      </el-col>
                      <el-col :span="17">
                        <el-input v-model="registerInfo.password" show-password></el-input>
                      </el-col>
                    </el-row>
                  </el-form-item>
                  <el-form-item prop="repeatPassword">
                    <el-row>
                      <el-col :span="7">
                        <span class="form-label">确认密码：</span>
                      </el-col>
                      <el-col :span="17">
                        <el-input v-model="registerInfo.repeatPassword" show-password></el-input>
                      </el-col>
                    </el-row>
                  </el-form-item>
                  <el-form-item prop="email">
                    <el-row>
                      <el-col :span="7">
                        <span class="form-label">邮箱：</span>
                      </el-col>
                      <el-col :span="17">
                        <el-input v-model="registerInfo.email"></el-input>
                      </el-col>
                    </el-row>
                  </el-form-item>
                </el-form>
                <el-button type="primary" round @click="register">注册</el-button>
              </div>
              <el-row style="margin-top: 5px">
                <el-col :span="6" :offset="18">
                  <el-link style="color: black;font-size: 15px" @click="changeForm()">
                    <span v-show="isLogin">创建账号</span>
                    <span v-show="!isLogin">返回登录</span>
                  </el-link>
                </el-col>
              </el-row>


            </div>

        </div>
    </div>
</template>

<script>
import {deepCopy} from "../commom/utils";
import {LOGIN_INFO, REGISTER_INFO} from "../commom/constant";
import {register} from "../apis/user";

export default {
  name: "Entry",
  data(){
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'));
      }else if(value.length<8 || value.length >20){
        callback(new Error('密码长度应该为8-20字符之间'))
      } else {
        if (this.registerInfo.repeatPassword !== '') {
          this.$refs.registerForm.validateField('repeatPassword');
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'));
      } else if (value !== this.registerInfo.password) {
        callback(new Error('两次输入密码不一致!'));
      } else {
        callback();
      }
    };
    return{
      isLogin:true,
      isValid: false,
      note: {
        backgroundImage: "url(" + require("../../img/taylor.jpg") + ")",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%",
      },
      loginInfo:deepCopy(LOGIN_INFO),
      registerInfo:deepCopy(REGISTER_INFO),
      loginRules:{
        name: [{required: true, message: '请填写用户名', trigger: 'blur'}],
        password: [{required: true, message: '请填写密码', trigger: 'blur'}],
      },
      registerRules:{
        name: [
          {required: true, message: '请填写用户名', trigger: 'blur'},
          {min:1, max:20, message: '用户名字符在1-20之间', trigger: 'blur'}
        ],
        password:[{validator:validatePass, trigger:'blur'}],
        repeatPassword: [{validator:validatePass2, trigger:'blur'}],
        // email:[
        //   {required:true, message:'请输入邮箱', trigger:'blur'},
        //   {type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
        // ]
      }
    }
  },
  methods:{
      // 登陆
      login(){
        this.isvalid = false
        this.checkValid('loginForm')
      },
      // 注册
      async register(){
        this.isvalid = false
        this.checkValid('registerForm')
        if(this.isvalid){
           await register(this.registerInfo)
        }
      },


      // 改变form的类型
      changeForm(){
        if(this.isLogin){
          this.loginInfo = deepCopy(LOGIN_INFO)
        }  else{
          this.registerInfo = deepCopy(REGISTER_INFO)
        }
        this.isLogin = !this.isLogin
      },


      checkValid(form){
        this.$refs[form].validate((valid) => {
          this.isvalid = valid;
        });
      }
  }
}
</script>


<style scoped>
.container{
  box-sizing: border-box;
  text-align: center;
}
.form-label{
  font-size: 16px;

}
</style>
