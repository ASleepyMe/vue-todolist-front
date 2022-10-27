<template>
    <el-timeline>
      <el-timeline-item
        v-for="(activity, index) in activities"
        :key="index"
        :icon="activity.icon"
        :type="activity.type"
        :color="activity.color"
        :size="activity.size"
        :hollow="activity.hollow"
        :timestamp="activity.timestamp"
        placement="top"
      >
        <el-card>
            {{ activity.content }}
        </el-card>
      </el-timeline-item>
    </el-timeline>
  </template>
  
  <script setup>

  import useStore from '../store';
  const activities = useStore().user.getTodoList
  </script>
  
  <style lang="less" scoped>
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