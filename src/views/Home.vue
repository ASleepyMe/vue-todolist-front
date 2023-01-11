<template>
  <div class="common-layout">
    <el-divider  content-position="left">
    蜀ICP备2022003140号
    </el-divider>
    <el-container>
     <el-aside>

      <Nav></Nav>


      </el-aside>
      
     
        <el-main>   <router-view />   </el-main>
    
    </el-container>
  </div>


</template>

<script>

import Nav from "../components/Nav.vue";
import useStore from '../store'

export default {

    name: "App",
    components: { Nav },
    data(){
      return{
        isLogin:false,
        keepLogin:false,
      }
    },
    mounted(){
      // this.isLogin = useStore().user.getLoginStatus
      // this.keepLogin = useStore().user.getKeepLoginStatus
      //   if(this.keepLogin)
      //     { this.$router.push('/todo')
      //   }else{
      //     this.$message.error('请登陆')
      //      this.$router.push('/login')
      //   }
    },
    beforeRouteEnter(to,from,next){
      
        if (useStore().user.getLoginStatus) {
            next()
        }else{
          
          // this.$message.error('请登陆')
        
          next('/login')
          
        }
    }
}
</script>

<style lang="less" scoped>
@import "../assets/fonts/index.css";

html,
body {
  font-family: pingfang;
  height: 100%;
}

body {
  overflow-y: hidden;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #F5F7FA;

}
.common-layout {
  .el-divider::v-deep {
    margin: 0;
    padding: 20px;
    background-color:rgb(68, 111, 179);
    .el-divider__text.is-left{
      color: #fff;
      background-color: rgb(68, 111, 179);
    }
  }
}
.el-aside {
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 20rem;
  height: 100%;
  padding-top: 140px;
  background-color: #F5F7FA;
}

.el-main {
  margin-left: 20rem;
  width: 100%;
  background-color: #F5F7FA;
  padding: 17px;

}
</style>
