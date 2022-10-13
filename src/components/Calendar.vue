<template>

        <el-button size="large" round type="primary" class="plusdoing">
        <el-icon><Plus /></el-icon> 
        <p> 新建待办</p>
    </el-button>

    <el-calendar></el-calendar>

    <div class="calendar-switch" :class="{ isopen : calendarIsOpen}">
        <el-icon :size="50"><SemiSelect /></el-icon>
    </div>
</template>

<script>
export default {
    data(){
        return{
            calendarIsOpen: false,
        }
    }
}
</script>

<style lang="less" scoped>
    .el-calendar::v-deep{
        width: 40%;
        // --el-calendar-border:0;
        border-radius: 10rem;
        .el-calendar__header{
            display: flex;
        }    
        .el-calendar__body{
           .el-calendar-table{
  
            text-align: center;
  
                tbody{
                    border-left: 1px solid red !important;
                    .el-calendar-table__row{
                        td.prev,td.current,td.next{
                     
                        .el-calendar-day{
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            font-weight: bold;
                            text-align: center;
                            line-height: 36px;
                            // border: 0;
                           
                           }
                         
                    }
                    }
                   
                    .el-calendar-table__row td {
                        border: 0;
                        border-radius: 50%;
  }
                }

                td.is-selected
                {
                    border-radius: 40%;
                    background-color:   #337ecc;
                     color: #fff;
                }
                
           }
           .el-calendar-table .el-calendar-day:hover {
            border-radius: 50%;
            background-color:  #79bbff !important;
            color: #fff;
        }
        .el-calendar-table thead th:before {
        content: "周";
        } 
                }
    }
    .plusdoing{
        
        display: flex;
        align-items: center;
        justify-content: flex-start;
    }
    .Hideen{
        margin-top: -40px;
    }
</style>