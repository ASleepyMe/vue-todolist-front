<template>
    
   <div style="height:100%">
    <div class="mask">  
    </div>
    <div class="container">
        <div class="head">
            <div class="title"><p>新建待办</p></div>
            <div class="navigator">
                <el-button
                v-for="button in buttons"
                :key="button.text"
                :type="button.type"
                text
                @click="button.click"
                >{{ button.text }}</el-button>
       
        </div>

        </div>

        
        <div class="text">
            <el-input
            class="textarea"
            v-model="textarea1"
            :autosize="{minRows: 4}"
            type="textarea"
   
        />
        </div>

        <div class="settings">
            <el-button text  @click="Toggle.time = !Toggle.time">&nbsp;<el-icon color="#79bbff" ><Clock /></el-icon>&nbsp;设置时间&nbsp;</el-button>
            <el-button class='levelTag' text  @click="Toggle.level = !Toggle.level">&nbsp;<el-icon color="#79bbff"><Orange /></el-icon>&nbsp;分类&nbsp;</el-button>
        </div>

        <div class="setting_time" v-if="Toggle.time">
          
            <el-input v-model="input2">
                <template #append>时</template>
            </el-input>
            <el-input v-model="input3">
            <template #append>分</template>
            </el-input>
        </div>


        <div class="setting_level" v-if="Toggle.level">
           <div class="trangle-up"></div>
           <div class="levelContainer">
            <a
                v-for="(item,index) in bgList"
                :key="index"
                :style="{backgroundColor:item.color}"
                class="drop"
                @click="selectColor(index)"
            ></a>
           </div>
            
          
      </div>

    </div>

   </div>

</template>

<script setup>
import { ref,reactive,defineEmits } from 'vue'
import { ElMessageBox } from 'element-plus';
import { ElMessage } from 'element-plus';
import useStore from '../store'

const emit = defineEmits(['showClick'])


const textarea1 = ref('')
// const color = ref('')
let Toggle = reactive({
    time:false,
    level:false

})

const bgList = [
    {level:'info',color:'#909399'},
    {level:'success',color:'#67C23A'},
    {level:'warning',color:'#E6A23C'},
    {level:'danger',color:'#F56C6C'},]

const input2 = ref('')
const input3 = ref('')
let attribute = {
    color :'',
    level:''
}
const buttons = [

  { type: 'primary', text: '确定' ,click:toSubmitEvent},

  { type: 'info', text: '取消', click:toggle },

]
function toggle(){
    emit('showClick',{addEventDialog:false})
}

function selectColor(index){
    attribute.color = bgList[index].color
    attribute.level = bgList[index].level

    Toggle.level = false

    console.log(attribute);
}

function toSubmitEvent(){
    console.log(useStore().user.getSelectedDay);

    let content = {
        content:textarea1.value,
        size:'large',
        type:'primary',
        status:'doing',
        level:attribute.level,
        timestamp:useStore().user.getSelectedDay,
        color:attribute.color
    }
        if(content.content == '')
        {
            ElMessageBox.alert('内容不能为空','error',{
                type:'error'
            })
            ElMessage.info({
            message: ''
          });
        return
        }

    emit('addEvent',{content})
    emit('showClick',{addEventDialog:false})
}
// function getTimeStamp(){
//     var date = new Date();
//       var year = date.getFullYear(); //月份从0~11，所以加一
//       var dateArr = [date.getMonth() + 1,date.getDate(),date.getHours(),date.getMinutes(),date.getSeconds()];
//       for(var i=0;i<dateArr.length;i++){
//         if (dateArr[i] >= 1 && dateArr[i] <= 9) { 
//             dateArr[i] = "0" + dateArr[i];
//         }
//       }
//       var strDate = year+'-'+dateArr[0]+'-'+dateArr[1]+' '+dateArr[2]+':'+dateArr[3]+':'+dateArr[4];
//       console.log('strDate',strDate)
//       return strDate
// }
</script>

<style lang="less" scoped>
@bg:#fff;
.mask{
  
  position: fixed;
  top: 0px;
  z-index: 99;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0,0,0,0.3);
}

.container{

    z-index: 100;
 
    position: fixed;
    display: flex;
    border:1px solid #ccc;
    flex-direction: column;
    justify-content: space-between;
    left: calc(50% - 26rem);
    top: calc(50% - 12rem);
    width: 52rem;
    min-height: 16rem;

    padding: 0px 40px;
    border-radius: 16px;
    opacity: 1;
    background-color: @bg;
    transition: height 0.5s ease;

    .head{
        display: flex;
        justify-content: space-between;
        align-items: center;
        .title{
            p{
                font-size: 1.4rem;
                font-weight: 600;
            }
        }
        .navigator ::v-deep{
            button{
                font-size: 1.4rem;
            }
        }
    }

    .text{
        textarea{
            display: flex;
            font-family: PingFang SC, Microsoft Yahei, sans-serif;
            width: 100%;
            min-height: 4rem;
            margin: 2rem 0 2rem 0;
            border: 0;
            color: var(--Gray-7);
            background-color: @bg;
            font-size: 1.5rem;
            line-height: 2rem;
            font-weight: 400;
            letter-spacing: 2px;
            outline: none;
            resize: none;
    
        }
    }

    .settings{
        display: flex;
        padding: 20px 0;
        justify-content: flex-start ;
        align-items: center;
        button{
            font-size: 1.2rem;
            margin-right: 20px;
            padding: 0;
            border-radius: 15px;
        }
        .levelTag{
            position: relative;
            
           
        }
        #triangle-up {

        width: 0;

        height: 0;

        border-left: 50px solid transparent;

        border-right: 50px solid transparent;

        border-bottom: 100px solid red;

        }
    }

    .setting_time{
  
        padding-bottom: 20px;
        display: flex;
        justify-content: flex-start ;
        align-items: center;
        .el-input {
            width: 100px;
            margin-right: 20px;
        }
    }

    .setting_level{
        transition: 1s all;
        position: absolute;
        top:260px;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        background-color: #fff;
        width: 240px;
        
        right: 54%;
        border-radius: 25px;
        height: 40px;
        .levelContainer::before{
        content:"";
        position: absolute;
        right: 80%;
        bottom: 40px;
        width: 0;
        height: 0;
       
        border-left: 13px solid transparent;
        border-right: 13px solid transparent;
        border-bottom: 13px solid #2a4d71;
        }
       .levelContainer{
        display: flex;
      
        justify-content:space-around;
        align-items: center;
        height: 40px;
        

        .drop{
                
                border-radius: 50%;
                padding: 14px;
            }
            
       }



    }
}
</style>