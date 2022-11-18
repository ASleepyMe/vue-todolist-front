<template>

  <div class="headerSetting">
    <span class="title"> |||    &nbsp;&nbsp;&nbsp;检索条件设置</span> 

    <div class="settingOptions">
      <el-select v-model="value" class="m-2" placeholder="等级" size="large">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      />
    </el-select>

    <el-radio-group v-model="radio1" class="ml-4"  v-for="item,index in radioOptions" :key="index">
      <el-radio :label=item.value size="large">{{item.label}}</el-radio>

    </el-radio-group>
    </div>

    <div class="buttonGroup">
    <el-button icon="refresh" circle  @click="rebak"/>
    <el-button type="primary" icon="Search" @click="serchEvents">Search</el-button>
    </div>

  </div>

  <el-divider></el-divider>

  <el-table  :data="tableData"  style="width: 100%;height: 100%;" :key="free">
    <el-table-column prop="level" label="等级" width="200"
     :formatter="levelFormat" />
    <el-table-column prop="timestamp" label="日期" width="400" />

    <el-table-column prop="content" label="内容" width="800" />
    <el-table-column prop="status" label="状态"
      :filters="[
        {text:'已完成',value:'finished'},
        {text:'进行中',value:'doing'}
      ]"
        :filter-method="filterTag"
        filter-placement="bottom-end" 
      >
        <template #default="scope">
          <el-tag
            :type="scope.row.status === 'finished' ? 'info' : 'success'"
            disable-transitions
            >{{ scope.row.status==='finished'?'已完成':'进行中' }}</el-tag
          >
        </template>
      </el-table-column>
  </el-table>

  
  </template>
  
  <script setup>

  import { ref } from 'vue'

  import useStore from '../store';
  let activitiesBaseData = ref(useStore().user.getAllTodoList)

  let tableData = ref([])
  tableData.value = activitiesBaseData.value

  const value = ref()

  const options = [
    {value:'info',label:'普通'},
    {value:'success',label:'优先处理'},
    {value:'warning',label:'重要'},
    {value:'danger',label:'紧急'},
    {value:'',label:'未定级'}
   ]

  const radioOptions = [{
    value:'doing',label:'进行中'
  },{
    value:'finished',label:'已完成'
  }]

  const filterTag = (value, row) => {
    console.log(row.status === value);
  return row.status === value
}
  const radio1 = ref('')

  const serchEvents = () => {
    let level = value.value
    let status = radio1.value
  
    tableData.value =  activitiesBaseData.value.filter((item)=> {
      
      return item.level == level && item.status == status
    })
 
  }
  const rebak = () => {
    tableData.value =  activitiesBaseData.value
  }

  const levelFormat = (row) => {
    if(row.level === 'success'){
        return '优先处理'
    }else if (row.level === 'info'){
      return '普通'
    }else if (row.level === 'danger')
    {
      return '紧急'
    }else if (row.level === 'waring'){
      return '重要'
    }else{
      return '未定级'
    }
  }
  </script>
  
  <style lang="less" scoped>

  .headerSetting{
    display: flex;
    justify-content: start-flex;
    align-items: center;
    .settingOptions{
      margin-right: 500px;
      flex:3;

      .ml-4{
        margin-left: 20px;
      }
    }
    span.title{
      flex: 1;
      font-weight: 600;
    }

    button{
      flex:0.5
    }
  }
    .el-timeline::v-deep{
        .el-timeline-item{
            .el-timeline-item__wrapper{
                .el-timeline-item__timestamp.is-top{
                    text-align: left;
                }
                .el-timeline-item__content{
              
                    text-align: left;
                    .el-card{
                     
                        .el-card__body{
                      
                            padding: 40px;
                        }
                    }
                }
            }
            
        }
    }

  </style>