<template>
    <div class="container">
      <div class="bg-ele"></div>
      <div class="login-card">
        <div class="login-block">
          <h1>注册</h1>
          <p>欢迎来到刻刻时间管理，请在此注册你的账号！</p>
          <el-form :model="loginForm">
            <div class="form-item">
              <el-form-item>
                <el-input
                  v-model="loginForm.account" 
                  size="large"
                  class="w-50 m-2"
                  placeholder="用户名"
                  prefix-icon="user"
                  />
              </el-form-item>
            </div>
            <div class="form-item">
              <el-form-item>
                <el-input
                  v-model="loginForm.password" 
                  size="large"
                  class="w-50 m-2"
                  placeholder="密码"
                  prefix-icon="key"
                  />
              </el-form-item>
            </div>
            <div class="form-item">
              <el-form-item>
                <el-input
                  v-model="loginForm.password" 
                  size="large"
                  class="w-50 m-2"
                  placeholder="再次确认密码"
                  prefix-icon="key"
                  />
              </el-form-item>
            </div>

            <div class="form-checkbox-item">
              <el-checkbox v-model="rememberMe" label="记住我" size="large" />
     
            </div>
            <div class="flex">
              <el-button  type="primary" @click="toLogin">注册并登录</el-button>
              <a href="#">忘记密码，点我重置！</a>
            </div>
          </el-form>
        </div>
        <div class="register">
          <div class="title">
            <h2>欢迎您使用！</h2>
            <p>已经有帐号了吗？点击登陆！</p>
            <el-button  type="primary"  @click="router.push('/login')" text >登陆</el-button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  
  
  <style lang="less" scoped>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  .container {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    padding: 1.5rem;
    .login-card {
      height: 60vh;
      background-color: white;
      border: 1px solid #ddd;
      box-shadow: 0 10px 50px -30px black;
      width:60%;
      border-radius: 30px;
  
      overflow: hidden;
      display: flex;
      justify-content: space-around;
      align-items: center;
          .login-block
          { flex: 1;
            padding: 0 100px;
              h1{
                text-align: left;
                  margin-bottom: 10px;
              }
  
              p{
                text-align: left;
                  padding-top: 1rem 0;
              }
  
              form{
                  margin-top: 10px;
                  .form-item{
                      padding: 10px 0;
                  }
                .form-checkbox-item{
                  text-align: left;
                }
                  .flex{
                    display: flex;
                    margin-top: 20px;
                    justify-content: space-around;
                    align-items: center;
                      button{
                          height: 40px;
                          
                          flex: 1;
                      }
                      a{
                        flex: 1;
                        font-size: 0.8rem;
                        margin-left: 20px;
                      }
  
                     
  
                  }
  
              }
          }
      }
  
    .register{
      flex: 2;
      background: url("../assets/login_bg.png") center;
      background-size: cover;
      position: relative;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      z-index: 0;
      .title{
        width: 40%;
        text-align: left;
        z-index: 999;
        h2,p,a{
    
          padding-top: 10px;
        }

        h2{
            font-size: 2rem;
        }
        p{
            font-size: 1rem;
        }
        .el-button{
            margin-top: 10px;
            font-size: 1rem;
          
        }
        .el-button:hover{
            color: #fff;
            border-radius: 1px solid #ccc;
            background-color: var(--el-color-primary);
            padding: 10px;
        }
      }
    }
    .register::after{
      content: "";
      position:absolute;
      background: linear-gradient(90deg, white, rgba(255, 255, 255, 0.1333333333));
      inset: 0;
    
    }
  }
  .bg-ele {
    
    position: fixed;
    inset: 0;
    background: linear-gradient(240deg, #a1c4fd,var(--el-color-primary),#2980b9, #c2e9fb);;
    width: 60%;
    background-size: 500%;
    height: 100vh;
    clip-path: polygon(0 100%, 0 0, 100% 0, 70% 100%);
    z-index: -1;
    animation: Animation 15s linear infinite;
  }
  @keyframes Animation {
      0%{
          background-position: 0% 25%;
      }
      25%{
          background-position: 25% 50%;
      }
      50%{
          background-position: 50% 75%;
      }
      75%{
          background-position: 75% 100%;
      }
      100%{
          background-position: 0% 100%;
      }
  }
  a{
                          // text-decoration: none;
                          color: black;
                          
                          font-size: 1rem;
                      } 
  
                      a:link {
                          color: black;
  
                      }
  
                      a,a:active,a:visited,a:link{
                      -webkit-tap-highlight-color:rgba(0,0,0,0);
                      -webkit-tap-highlight-color: transparent;
                    
                      background: none;
                      text-decoration:none;
                      }
  
                      a:focus,a:hover{
                    
                        text-decoration:underline;
                      }
  </style>
  
  <script setup>
  import {ref,onMounted, reactive } from 'vue'
  import { ElMessage } from 'element-plus';
  import useStore from '../store'
  import { useRouter } from "vue-router";
  
  
  const router = useRouter();
  let rememberMe = ref(true)
  const userStatus = (useStore().user)
  const loginForm = reactive({
    account:'',
    password:''
  })
  onMounted(()=>{
    
        if(useStore().user.getKeepLoginStatus && useStore().user.getLoginStatus){
   
          router.push('/todo')}
  })
  function toLogin(){
  
    if(loginForm.account=='admin' && loginForm.password=='123')
    {
      
      userStatus.setLoginSuccessStatus()
      if(rememberMe.value)
      {
        userStatus.setKeepLoginStatus(true)
        ElMessage.success('登陆成功')
        router.push('/todo')
      }else{
        userStatus.setKeepLoginStatus(false)
        ElMessage.success('登陆成功')
        router.push('/todo')
      }
    }
    else {
      ElMessage.error('登陆信息不正确，请检查后再试')
    }
  }
  </script>