<template>
    <div class="container">
        
        <h2>[刻刻]待办事项管理系统Version0.1</h2>
    <el-card class="loginBox">
        <div id="timer" ref="timer" class='timer'></div>
        

            <el-from :model="loginForm">  
            <el-form-item > 
                
                 <el-input prefix-icon="User"  v-model="loginForm.account"  size="large"  placeholder="Account" >
                    
                    </el-input>
            </el-form-item>
    
            <el-form-item>   
                 <el-input  type='password' prefix-icon="Key" v-model="loginForm.password"  size="large" placeholder="Password" />
            </el-form-item>
            
            <el-button round  class='login' type="primary" @click="toLogin"><el-icon :size="20"><Link /></el-icon>登陆</el-button>

            <el-button round  class="login" type="error" @click="noPermissionLogin">测试用例</el-button>

            <p>蜀ICP备2022003140号</p>
        </el-from>


   
    </el-card>


    
    </div>

</template>

<script>

import useStore from '../store'

export default {
    components:{
   
  },
    data(){
        return{
           
            loginForm:{
                account:'',
                password:''
            }
        }
    },
    mounted(){
      
      console.log(useStore().user.getLoginStatus);
      if(useStore().user.getLoginStatus){
 
        this.$router.push('/todo')}
    },
    methods:{
    
        noPermissionLogin(){
            this.loginForm.account = 'admin'
            this.loginForm.password = '123'

            this.$message.success('已输入测试用例账号')
        },

        toLogin(){
            if(this.loginForm.account=='admin' && this.loginForm.password=='123')
            {
                let userStatus = (useStore().user)

                userStatus.setLoginSuccessStatus()
       
                
   
                this.$message.success('登陆成功')
                this.$router.push('/todo')
              }
            else{
                this.$message.error('登陆信息不正确，请检查后再试')
            }
        }
    }
}
</script>

<style lang="less" scoped>

    .container{
        margin: 0;
            padding: 0;
            /* 100%窗口高度 */
            height: 100vh;
            /* 弹性布局 水平垂直居中 */
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            /* 渐变背景 */
            background: linear-gradient(240deg, #a1c4fd,var(--el-color-primary),#2980b9, #c2e9fb);;
            /* 指定背景图像的大小 */
            background-size: 500%;
            /* 执行动画：动画名 时长 线性的 无限次播放 */
            animation: Animation 15s linear infinite;
        .loginBox{
            width: 40vh;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50px;
            padding: 10px;
            color: #fff;
            font-size: 16px;
            height: 50vh;
            .scale{
                .timer {
            position: relative;
            width: 100%;
            margin: 20px auto;
            height: 14px;
        }
 
        .timer .hh, .timer .mm {
            position: absolute;
            border-left: 1px solid #555;
            height: 14px;
            width: 4.166%;
        }
 
        .timer .hh:after {
            position: absolute;
            left:-4px;
            bottom: -15px;
            font: 11px/1 sans-serif;
        }
 
        .timer .mm {
            height: 5px;
        }
 
        .timer .hh:nth-of-type(1):after {
            content: "0";
        }
 
        .timer .hh:nth-of-type(2):after {
            content: "1";
        }
 
        .timer .hh:nth-of-type(3):after {
            content: "2";
        }
 
        .timer .hh:nth-of-type(4):after {
            content: "3";
        }
 
        .timer .hh:nth-of-type(5):after {
            content: "4";
        }
 
        .timer .hh:nth-of-type(6):after {
            content: "5";
        }
 
        .timer .hh:nth-of-type(7):after {
            content: "6";
        }
 
        .timer .hh:nth-of-type(8):after {
            content: "7";
        }
 
        .timer .hh:nth-of-type(9):after {
            content: "8";
        }
 
        .timer .hh:nth-of-type(10):after {
            content: "9";
        }
 
        .timer .hh:nth-of-type(11):after {
            content: "10";
        }
 
        .timer .hh:nth-of-type(12):after {
            content: "11";
        }
 
        .timer .hh:nth-of-type(13):after {
            content: "12";
        }
 
        .timer .hh:nth-of-type(14):after {
            content: "13";
        }
 
        .timer .hh:nth-of-type(15):after {
            content: "14";
        }
 
        .timer .hh:nth-of-type(16):after {
            content: "15";
        }
 
        .timer .hh:nth-of-type(17):after {
            content: "16";
        }
 
        .timer .hh:nth-of-type(18):after {
            content: "17";
        }
 
        .timer .hh:nth-of-type(19):after {
            content: "18";
        }
 
        .timer .hh:nth-of-type(20):after {
            content: "19";
        }
 
        .timer .hh:nth-of-type(21):after {
            content: "20";
        }
 
        .timer .hh:nth-of-type(22):after {
            content: "21";
        }
 
        .timer .hh:nth-of-type(23):after {
            content: "22";
        }
 
        .timer .hh:nth-of-type(24):after {
            content: "23";
        }
 
        .timer .hh:nth-of-type(25):after {
            content: "0";
        }
        .timer .hh:nth-of-type(25) {
            width:1px;
        }
 
        .timer .mm:nth-of-type(1) {
            left: 50%;
        }
    
            }
            el-from{
                height: 80%;
                display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-around;


            :deep(.el-input__wrapper) {
                
                border-radius: 15px;
      
            }


            }
            .login{
                letter-spacing: 10px;
                margin-top: 10px;
                margin-left: 0;
                width: 300px;
            }
        }
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

</style>