<template>


    <div class="common-layout">
        <el-container>
            <el-header>
                <div class="title">
                    <h2>飞书</h2>
                </div>
            </el-header>
            <el-main><el-empty :image-size="400" description="页面施工中···" /></el-main>
        </el-container>
    </div>


</template>

<script>

export default {
    components: {  }
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

        height: 100vh;
        background-color: #ffff;
        border-radius: 25px 0px 0 0;
    }
}
</style>