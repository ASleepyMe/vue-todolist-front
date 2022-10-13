<template>
    <div id="barMain" style="height:400px;width: 80%;"></div>
</template>

<script>

export default {
    data(){
        return{

        }
    },
    mounted(){
        this.initEchart();
    },
    methods:{
        initEchart() {
            var echarts = require("echarts");
            var chartDom = document.getElementById("barMain");
            var myChart = echarts.init(chartDom);
            var option;
            option = {
                xAxis: {
                    type: "category",
                    boundaryGap: false
                },
                yAxis: {
                    type: "value",
                    boundaryGap: [0, "30%"]
                },
                visualMap: {
                    type: "piecewise",
                    show: false,
                    dimension: 0,
                    seriesIndex: 0,
                    pieces: [
                        {
                            gt: 0,
                            lt: 6,
                            color: "rgba(0, 0, 180, 0.4)"
                        }
                    ]
                },
                series: [
                    {
                        type: "line",
                        smooth: 0.6,
                        symbol: "none",
                        lineStyle: {
                            color: "#5470C6",
                            width: 5
                        },
                        markLine: {
                            symbol: ["none", "none"],
                            label: { show: false },
                            data: [{ xAxis: 0 }, { xAxis: 4 }, { xAxis: 6 }]
                        },
                        areaStyle: {},
                        data: [
                            ["周一", 1],
                            ["周二", 0],
                            ["周三", 0],
                            ["周四", 4],
                            ["周五", 0],
                            ["周六", 0],
                            ["周日", 1],
                        ]
                    }
                ]
            };
            option && myChart.setOption(option);
        }
    }
}
</script>

<style>

</style>