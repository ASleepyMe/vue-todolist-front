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
  import { MoreFilled } from '@element-plus/icons-vue'
  
  const activities = [
    {
      content: 'Custom icon',
      timestamp: '2018-04-12 20:46',
      size: 'large',
      type: 'primary',
      icon: MoreFilled,
    },
    {
      content: 'Custom color',
      timestamp: '2018-04-03 20:46',
      color: '#0bbd87',
    },
    {
      content: 'Custom size',
      timestamp: '2018-04-03 20:46',
      size: 'large',
    },
    {
      content: 'Custom hollow',
      timestamp: '2018-04-03 20:46',
      type: 'primary',
      hollow: true,
    },
    {
      content: 'Default node',
      timestamp: '2018-04-03 20:46',
    },{
      content: 'Default node',
      timestamp: '2018-04-03 20:46',
    },{
      content: 'Default node',
      timestamp: '2018-04-03 20:46',
    },{
      content: 'Default node',
      timestamp: '2018-04-03 20:46',
    },{
      content: 'Default node',
      timestamp: '2018-04-03 20:46',
    },{
      content: 'Default node',
      timestamp: '2018-04-03 20:46',
    },{
      content: 'Default node',
      timestamp: '2018-04-03 20:46',
    },
    
  ]
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