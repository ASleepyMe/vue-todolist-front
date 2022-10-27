<template>

    <div id="tab">

    <router-link :to="{path:'/userinfo'}">
        <!-- 用户信息 -->
        <div class="user" @click="changeThemes('blue')">
        <!-- 头像 -->
        <el-avatar :size="80" :icon="UserFilled" >{{username}}</el-avatar>
        <!-- 用户名 -->
          <div class="userinfo">
           
                <p class="username">{{username}}</p>
          
            <p class="sendcode">刻码：{{sendcode}}</p>
          </div>
            
      </div>
    </router-link>

        <!-- 路由按钮 -->
        <router-link v-for="(router, index) in routers" :key="index" class="nav"
            :class="[router.class, { checked: router.to == selectPath }]" :to="router.to">
  
                <el-icon color="#606266"  :size="20">
                <component :is="router.icon"></component>
            </el-icon>
            <span class="nav-name">{{ router.value }}</span>

        </router-link>


        <div class="exit">

            <el-button round type="danger" @click="exit">        <el-icon><SwitchButton /></el-icon> <p>注销登陆</p></el-button>

    
        </div>
    </div>
</template>

<script>
import useStore from '../store'

export default {
    data() {
        return {
            
            selectPath: "/todo",
            routers: [
                {
                    icon: "Edit",
                    value: "我的待办",
                    to: "/todo",
                },
                {
                    icon: "Odometer",
                    value: "数据统计",
                    to: "/Dashboard",
                },
                {
                    icon: "Finished",
                    value: "历史完成项",
                    to: "/history",
                },
                {
                    icon: "Message",
                    value: "飞书",
                    to: "/sendmsg",
                },
                {
                    icon: "Setting",
                    value: "设置",
                    to: "/setting",
                },
                {
                    icon: "Warning",
                    value: "关于",
                    to: "/about",
                },
                {
                    icon:"EditPen",
                    value:"个人资料",
                    to:'/userinfo'
                }
            ],

            username:"Admin",
            sendcode:"623014",
    
        };
    },
    watch: {
        // 侦听路由选中
        $route(to) {
            this.selectPath = to.path;
        },
    },
    mouted(){

    },
    methods:{
        toUserInfo(){

        },
        exit(){


            console.log(useStore().user.isLogin);
            useStore().user.clearStatus()
  
            this.$router.push('/login')
            this.$message.info('已清除登陆态')
        }
    }



}
</script>

<style scoped lang="less">

a,
a:hover,
a:active,
a:visited {
    text-decoration: none;
    list-style: none;
    
}
div{
    font-family: "pingfang";
}
span{
    color:#606266;
    font-weight: 600;
}
.el-icon{
    color:#606266;
    font-weight: 600;
}
.nav:hover {
  background-color:  #FFFFFF;

 
}
.nav.checked {
  background-color:   #79bbff;
 
  span{
    color:  #FFFFFF;
  }
  .el-icon{
    color:#FFFFFF;

}

}

#tab{
    .router-link-active{
                color: #606266;
            }

            a{
                color: #606266;
            }
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 15.5rem;
  height: 100vh;
  overflow: hidden;
  background-color: var(--BG);
  .nav {
  display: flex;
  align-items: center;
  flex-shrink: 0;
  justify-content: flex-start;
  width: 11.5rem;
  height: 2rem;
  border-radius: 6px;
  padding: 0.2rem;
  margin-bottom: 1rem;
  cursor: default;



}
  .user{
    padding: 20px;
    border-radius: 16px;
        display: flex;
        margin-bottom: 4vh;
        margin-top: 4vh;
        align-items: center;
        justify-content: space-between;
        width: 12.5rem;
    
        .el-icon{
            color: #606266;
        }
        .userinfo{
      
        }
        .username{
            font-size: x-large;
            display: inline;
            font-weight: bolder;
        }

        
        .sendcode{
            font-size: small;
            font-weight: 300;
            margin: 2px;
            text-align: left;
        }
        
    }
    .user:hover{
           
            background-color: #fff;
        
    }
    .exit{
        display: flex;
        align-items: center;
        align-self: flex-start;
        padding-left: 2rem;
        margin-top: 10vh;
        p{
            font-weight: lighter;
            color:  #fff;
        }

        .el-icon{
            color: #fff;
        }
    }
}
  .nav > .el-icon{
    padding-right: 2rem;
}



</style>