<template>
    <div class="common-layout">
      <el-divider  style="box-shadow: 1px black solid;" content-position="left">
      蜀ICP备2022003140号
      </el-divider>
      <el-container>
       <el-aside>
  
        <Nav></Nav>
  
  
        </el-aside>
        
        <el-main>   <router-view /> </el-main>
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
        }
      },
      mounted(){
        this.isLogin = useStore().user.getLoginStatus
     
          if(!this.isLogin)
            {this.$message.error('请登陆')
             this.$router.push('/login')
          }else{
            this.$router.push('/todo')
          }
      }
  }
  </script>
  
  <style lang="less">
  @import "../assets/fonts/index.css";
  
   .el-divider :v-deep{
        background-color: #b6d7fb;
        height: 2px;
  
   
        
    }
    .el-divider__text.is-left{
        background-color:#79BBFF;
  
        border-radius: 10px;
        padding:2px 20px;
        color: #fff;
        font-weight: lighter;
        font-size: 14px;
      }
  
  
    html,body{
      font-family: pingfang;
      height: 100%;
    }
    body{
      overflow-y: hidden;
    }
  #app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    background-color: #F5F7FA;
  
  }
  .el-aside{
    position: fixed;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 20rem;
    height: 100%;
    margin-top: 140px;
  
  }
  
  .el-main{
      margin-left: 20rem;
      width: 100%;
  
   
  }
  
  
  /*设置宽度,轨道颜色*/
  ::-webkit-scrollbar {
      width: 10px;
      height: 10px;
      background: #F5F7FA;   /*可以设置轨道颜色*/
      padding-right: 2px;
  }
   
  /*滚动条*/
  ::-webkit-scrollbar-thumb {
      background: #ccc;
      border-radius: 10px;
  }
  
  </style>
  