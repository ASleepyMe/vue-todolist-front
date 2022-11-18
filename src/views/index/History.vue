<template>
    <div class="common-layout">
        <el-container>
            <el-header>
                <div class="title">
                    <h2>历史完成项总览</h2>
                </div>
            </el-header>

            <el-main>
               <HistoryDoing></HistoryDoing>
        

         
            </el-main>
            
        </el-container>
    </div>


</template>

<script>
import HistoryDoing from "../../components/HistoryDoing.vue";
export default {
    components: { HistoryDoing }
}
</script>

<style scoped lang="less">
.el-container {
    margin-top: 2rem;
    --el-header-height:auto;
    .el-header {

        display: flex;
        justify-content: flex-start;
        margin-bottom: 20px;
    }

    .el-main {
        margin: 0;
        height: 80vh;
        overflow:auto;
        display: flex;
        background-color: #ffff;
        border-radius: 25px 0px 0 0;
        padding: 40px;
        flex-direction: column;
        padding-right: 100px;
       
      
        ul.el-timeline{
            
            width:40%
        }
    }

    .space{
        height: 1300px;
        width: 100vh;
                    }
}
</style>