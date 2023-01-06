<template>


    <div class="common-layout">
      
            <el-container>
                <el-header>
                    <div class="title">
                        <h2>我的待办事项</h2>
                    </div>
                </el-header>

                <el-scrollbar height="100%">
                    <el-main>

                        <div class="leftcontainer">
                            <div class="calendarModule">
                            <CalandarPlus></CalandarPlus>
                            </div>

                            <div class="todolist">
                                <TodoList></TodoList>
                            </div>

                            <div class="space"></div>
                        </div>

                        <div class="rightcontainer">
                            <div class="circleCharts">
                                <div class="title">目前事务完成度</div>
                            

                            <CircleRating></CircleRating>
                        
                            </div>

                            <div id="he-plugin-standard"></div>
                        </div>

                    
                    </el-main>
                </el-scrollbar>

            </el-container>
      
    </div>


</template>

<script>

import CalandarPlus from '../../components/CalandarPlus.vue'
import CircleRating from '../../components/CircleRating.vue'
import TodoList from '../../components/TodoList.vue';

export default {
    components: { CalandarPlus, CircleRating, TodoList },
    mounted(){
        this.insertWeather()
    },
    methods:{
        insertWeather(){
            window.WIDGET = {
              "CONFIG": {
                "layout": "2",
                "width": 400,
                "height": 400,
                "background": "4",
                "backgroundColor": "446fb3",
                "borderRadius": "20",
                "margin":"10px 0px 0px 0px",
                "dataColor": "FFFFFF",
                "key": "8851ddf978704a60bf5ebd56d6af6c5d"
              }
            }
            let script = document.createElement('script')
            script.src = "https://widget.qweather.net/standard/static/js/he-standard-common.js?v=2.0"
            document.body.appendChild(script)
          }
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
        // margin-right: 20px !important;
        margin: 0;
        padding: 0;
        overflow-y:scroll;
        display: flex;
        justify-content: space-between;
        
        // background-color: #fff;

        // margin: -20px;
        .leftcontainer{
                width: 74%;
                height: 100vh;
                    .space{
                        height: 300px;
                    }
                    .calendarModule
                        {
                            display: flex;
                            justify-content: center;
                            
                            background-color: #fff;
                            border-radius: 25px;
                            padding: 100;
                        
                        }
                    .todolist{
                    
                        background-color: #fff;
            
                        margin-top: 20px;
                        border-radius:20px;
                    }
        }

        .rightcontainer{
           width: 18%;
            display: flex;
            margin-right: 114px;
        
            flex-direction: column;
            justify-content: flex-start;
            align-items: flex-start;
            .circleCharts{
            
            background-color: #fff;
            border-radius:20px;
    
            display: flex;
            flex-direction: column;
            align-items: center;
            height: 40vh;
            margin-bottom: 14px;
            .title  {
                   margin-top: 20px;
                   font-weight: bold;
            
            }

            }
        
        #he-plugin-standard{
                margin-top: 20px;
                border-radius: 25px;
            }
        }
    }
 
    
}
</style>