<template>

    <div id="main" style="width: 400px;height:400px;"></div>
</template>

<script>
import useStore from '../store'
import mitt from '../utils/mitt'
export default {
    data(){
        return{
          completed:50,
          failed:50,
        }
    },

    mounted() {
        this.completed = useStore().user.computedStatusPercents[1]
        this.failed = useStore().user.computedStatusPercents[0],

        mitt.on('updateChartsData', (res) => {
          if(res){
            console.log(res);
            this.completed = useStore().user.computedStatusPercents[1]
            this.failed = useStore().user.computedStatusPercents[0]
          }
        })
        this.initEcharts();
    },
    methods:{
        initEcharts(){
            var echarts = require('echarts');

            var chartDom = document.getElementById('main');
            var myChart = echarts.init(chartDom);
            var option;

            const gaugeData = [
  {
    value: this.completed,
    name: '已完成事务',
    title: {
      offsetCenter: ['0%', '-40%']
    },
    detail: {
      valueAnimation: true,
      offsetCenter: ['0%', '-20%']
    }
  },
  {
    value: this.failed,
    name: '待处理事项',
    title: {
      offsetCenter: ['0%', '20%']
    },
    detail: {
      valueAnimation: true,
      offsetCenter: ['0%', '40%']
    }
  }
];
option = {
  series: [
    {
      type: 'gauge',
      startAngle: 90,
      endAngle: -270,
      pointer: {
        show: false
      },
      progress: {
        show: true,
        overlap: false,
        roundCap: true,
        clip: false,
        itemStyle: {
          borderWidth: 1
        }
      },
      axisLine: {
        lineStyle: {
          width: 18
        }
      },
      splitLine: {
        show: false,
        distance: 0,
        length: 10
      },
      axisTick: {
        show: false
      },
      axisLabel: {
        show: false,
        distance: 50
      },
      data: gaugeData,
      title: {
        fontSize: 14
      },
      detail: {
        width: 80,
        height: 20,
        fontSize: 20,
        color: 'auto',
        border:0,
        borderColor: 'auto',
        borderRadius: 20,
        borderWidth: 1,
        formatter: '{value}%'
      }
    }
  ]
};


option && myChart.setOption(option);}
                }
}
</script>

<style>
.main{
    background-color: #fff;
   
}
</style>