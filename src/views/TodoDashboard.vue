<template>


    <div class="common-layout">
        <el-container>
            <el-header>
                <div class="title">
                    <h2>数据统计</h2>
                </div>
            </el-header>
            <el-main>
                <div class="charts"><BarChart></BarChart><ThingsCensus></ThingsCensus></div>
                <div>
                    <TriangleEchart></TriangleEchart>
                </div>
            </el-main>
        </el-container>
    </div>


</template>

<script>
import BarChart from '../components/BarChart.vue'
import ThingsCensus from '../components/ThingsCensus.vue';
import TriangleEchart from '../components/TriangleEchart.vue';
export default {
    components:{
    ThingsCensus,
    BarChart,
    TriangleEchart
}

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
        padding: 0;
        height: 100vh;
        .charts{ 
        background-color: #ffff;     
        border-radius: 25px;
        margin: 0;
        display: flex;
        align-items: center;
        justify-content: center;
    }
}
}
</style>