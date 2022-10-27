

<template>
      <div>

    <AddEvents v-if="isshow" @showClick="showClick" @addEvent="addEvent"></AddEvents>

      </div>
    <div class="common-layout">
        <el-container>
        <el-header>
            <el-button disabled circle type="info"> <el-icon><Delete /></el-icon> </el-button> &nbsp;
            <el-button round type="success" @click="deleteEvents()" class="add">完成勾选项&nbsp;<el-icon><Check /></el-icon></el-button>
            <el-button round type="primary" @click="showAddEventDialog()" class="add">新建待办 &nbsp;<el-icon><CirclePlus /></el-icon></el-button>

     </el-header>

        <el-main>
            <div class="aside">
            <Transition name="fade" >
                <el-timeline>
                    
                    <el-timeline-item
                    v-for="(activity, index) in showActivesList"
                    :key="index"
                    :icon="activity.icon"
                    :type="activity.type"
                    :color="activity.color"
                    :size="activity.size"
                    :hollow="activity.hollow"
                    :timestamp="activity.timestamp"
                    placement="top"
                     >
           
                       <p :class="{active:isActive.includes(index)}" @click="touch(index)"> {{ activity.content }}</p>
                        <el-divider border-style="dotted" />
                        </el-timeline-item>
                    
                </el-timeline>
            </Transition>
            </div>
               
            

        </el-main>
     </el-container>
    </div>
</template>



<!-- 
<script setup>
import {reactive} from 'vue';
import {data} from '../utils/activities'
import AddEvents from './AddEvents.vue';

const isshow = reactive({
   show:false
})

  const activities = data.activities
  
  let isActive = -1;


  const show =(val) => {
    console.log(val);
    isshow.show = val.addEventDialog
  }

  function addEvent(){
    isshow.show = true
    console.log(isshow);
  }

  function touch(index){
    console.log(index);

    isActive = index
    console.log(isActive);
    console.log(isActive === index);


  }
</script> -->


<script>

import AddEvents from './AddEvents.vue';
import useStore from '../store'
export default {
    components:{AddEvents},
    data() {
        return {
            isshow:false,
            activities: [],
            isActive:[]
        };
    },
    mounted(){
        this.activities = useStore().user.getTodoList
        console.log(this.activities);
     
    },
    computed: {
        showActivesList: function (){
            return this.activities.filter(function(item){
                console.log(item.status == 'doing');
                return (item.status == 'doing')
            })
        }
    },
    methods:{
        showAddEventDialog(){
            this.isshow = true
            },
        deleteEvents(){
            
            if(this.isActive.length > 0)
            {


                for(let i = this.isActive.length-1;i>=0;i--)
                {

                    this.activities[i].status = 'finished'

                    console.log(this.activities);

                    // this.activities.splice(this.isActive[i],1)

                    

                 
                }
                
                useStore().user.updateTodoList(this.activities)
              
                this.$message.success('清除任务成功')
                this.isActive = []
            }else{
                this.$message.info('暂无选中事项')
            }
          
        },
        touch(index){
            console.log(index);

            if(this.isActive.includes(index)){
                //includes()方法判断是否包含某一元素,返回true或false表示是否包含元素，对NaN一样有效
                //filter()方法用于把Array的某些元素过滤掉，filter()把传入的函数依次作用于每个元素，然后根据返回值是true还是false决定保留还是丢弃该元素：生成新的数组
                this.isActive=this.isActive.filter(function (ele){return ele != index;});
            }else{
                this.isActive.push(index);
            }
            this.isActive.sort()
     
        },
        showClick(val){
      
            this.isshow = val.addEventDialog
         
        },
        addEvent(val){
            useStore().user.addEventList(val.content)

            this.isActive = []


         }
    }



}
</script>

<style lang="less" scoped>
@import "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css";

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
    .el-container{
        .el-header{
            display: flex;
            justify-content: flex-end;
            margin-top: 20px;
            .add{
                width: 14vh;
                font-weight: lighter;
                font-size: 14px;
                letter-spacing: 0.2rem;
            }
        }

        .el-main{
            margin: auto;
            padding: 0;
            min-height: 500px;
            .el-timeline::v-deep{
            
         .el-timeline-item{
            padding: 20px;
            transition: all 0.3 ease;
            .el-timeline-item__tail{
                display: none;
            }
            .el-timeline-item__wrapper{
                transition: all 0.3 ease;
                .el-timeline-item__timestamp.is-top{
                    text-align: left;
                    font-weight: bold;
                    padding-bottom: 20px;
                }
                .el-timeline-item__content{
                    font-size: 1.1rem;
                    font-weight:normal;
                    letter-spacing: 2px;
                    text-align: left;
                    align-items:center;
                    
                    p{
                        padding: 20px;
                        border-radius: 25px;
                    }
                    p:hover{
                        text-decoration:line-through;
                        background-color: aliceblue;
                        transition: all 0.2s ease;
                    }
                    .active{
                        text-decoration:line-through;
                        background-color: aliceblue;
                        transition: all 0.2s ease;
                    }
                }
            }
            
        }
    }

        }
    }
    
</style>