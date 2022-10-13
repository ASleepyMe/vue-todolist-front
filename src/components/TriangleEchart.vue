<template>
    <div class="triContainer">
        <h2 class="title">本周你的工作效率三角图</h2>
        <div id="triMain" style="height:400px;width: 400px;"></div></div>
</template>

<script>
import * as echarts from 'echarts';

export default {
    data(){
        return{

        }
    },
    mounted(){
        this.initEchart();
    },
    methods:{
        initEchart(){


            var chartDom = document.getElementById('triMain');
            var myChart = echarts.init(chartDom);
            var option;

            option = {
         
          
            radar: {
                // shape: 'circle',
                indicator: [
                { name: '勤奋', max: 6500 },
                { name: '懒惰', max: 16000 },
                { name: '效率', max: 30000 }
                ]
            },
            series: [
                {
                name: 'Budget vs spending',
                type: 'radar',
                data: [
                    {
                    value: [1000, 8000, 6000],
                    name: 'Allocated Budget'
                    },
                    {
                    value: [6500, 16000, 30000],
                    name: 'Actual Spending'
                    }
                ]
                }
            ]
            };

            option && myChart.setOption(option);

                    }
    }
}
</script>

<style lang="less" scoped>
.triContainer{
    background-color: #fff;
    border-radius: 25px;
    margin-top: 10px;
    width: 32%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h2.title{
        font-weight: 400;
        font-size: 20px;
    }
}
</style>