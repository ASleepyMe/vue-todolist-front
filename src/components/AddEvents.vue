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
            <el-button text  @click="Toggle.time = !Toggle.time"><el-icon color="#79bbff" ><Clock /></el-icon>&nbsp;设置时间</el-button>
            <el-button text><el-icon color="#79bbff"><Orange /></el-icon>&nbsp;分类</el-button>
        </div>

        <div class="setting_time" v-if="Toggle.time">
            <v-calendar />
            <el-input v-model="input2">
            <template #append>时</template>
        </el-input>
            <el-input v-model="input3">
            <template #append>分</template>
            </el-input>
        </div>
    </div>

   </div>

</template>

<script setup>



import { ref,reactive,defineEmits } from 'vue'

import useStore from '../store'

const emit = defineEmits(['showClick'])


const textarea1 = ref('')

let Toggle = reactive({
    time:false,
    

})


const input2 = ref('')
const input3 = ref('')

const buttons = [

  { type: 'primary', text: '确定' ,click:toSubmitEvent},

  { type: 'info', text: '取消', click:toggle },

]
function toggle(){
    emit('showClick',{addEventDialog:false})
}



function toSubmitEvent(){
    console.log(useStore().user.getSelectedDay);

    let content = {
        content:textarea1.value,
        size:'large',
        type:'primary',
        status:'doing',
        timestamp:useStore().user.getSelectedDay
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
            border-radius: 15pxs;
        }
    }

    .setting_time{
        
        transition: all 0.2 ease;
        padding-bottom: 20px;
        display: flex;
        justify-content: flex-start ;
        align-items: center;
        .el-input {
            width: 100px;
            margin-right: 20px;
        }
    }
}
</style>