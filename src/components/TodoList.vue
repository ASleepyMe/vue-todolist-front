

<template>
    <div>

        <AddEvents v-if="isshow" @showClick="showClick" @addEvent="addEvent"></AddEvents>

    </div>
    <div class="common-layout">





        <div class="aside">
            <div class="header_button">
                <el-button disabled circle type="info">
                    <el-icon>
                        <Delete />
                    </el-icon>
                </el-button> &nbsp;
                <el-button round type="success" @click="deleteEvents()" class="add">完成勾选项&nbsp;<el-icon>
                        <Check />
                    </el-icon>
                </el-button>
                <el-button round type="primary" @click="showAddEventDialog()" class="add">新建待办 &nbsp;<el-icon>
                        <CirclePlus />
                    </el-icon>
                </el-button>
            </div>

            <el-empty v-show="isEmpty" :image-size="100" description="暂无数据···" />



            <el-timeline v-show="!isEmpyty">
                <el-timeline-item v-for="(activity, index) in showSelecteddayActivesList" :key="index"
                    :icon="activity.icon" :type="activity.type" :color="activity.color" :size="activity.size"
                    :hollow="activity.hollow" :timestamp="activity.timestamp" placement="top">

                    <p :class="{ active: isActive.includes(index) }" @click="touch(index)"> {{ activity.content
                    }}</p>
                    <el-divider border-style="dotted" />
                </el-timeline-item>

            </el-timeline>

        </div>


        <div class="historyList">
            <div class="historyToggleTitle">
                <p class="title">展开历史完成待办</p>
                <el-switch v-model="historyToggle" />
            </div>

            <div>
                <div>
                    <Transition name="custom-classes" enter-active-class="animate__animated animate__slideInDown"
                        leave-active-class="animate__animated animate__slideOutUp">
                        <el-timeline class="history_timeline" v-show="historyToggle">

                            <el-timeline-item v-for="(activity, index) in showAllFinishedEvents" :key="index"
                                :icon="activity.icon" :type="activity.type" :color="activity.color"
                                :size="activity.size" :hollow="activity.hollow" :timestamp="activity.timestamp"
                                placement="top">

                                <p> {{ activity.content }}</p>
                                <el-divider border-style="dotted" />
                            </el-timeline-item>

                        </el-timeline>
                    </Transition>
                </div>
            </div>

        </div>


    </div>
</template>



<script>
import mitt from '../utils/mitt.js'
import AddEvents from './AddEvents.vue';
import useStore from '../store'


export default {
    components: { AddEvents },
    data() {
        return {
            isshow: false,
            activities: [],
            isActive: [],
            todayList: [],
            historyToggle: true,

        };
    },
    mounted() {
        this.todayList = (useStore().user.getTodayTodoList)
        this.activities = (useStore().user.getAllTodoList)
        console.log(this.activities);
        console.log(this.todayList);

        mitt.on('getSelectedDate', () => {

            this.todayList = useStore().user.getSelectedDateList

        })
    },
    computed: {
        showSelecteddayActivesList: function () {

            return this.todayList.filter(function (item) {

                return (item.status == 'doing')
            })
        },

        showAllFinishedEvents: function () {

            return this.activities.filter(function (item) {

                return (item.status != 'doing')
            })
        },

        isEmpty: function () {

            if (this.showSelecteddayActivesList.length == 0) {

                return true

            } else {
                return false
            }

        }
    },

    methods: {
        showAddEventDialog() {
            this.isshow = true
        },
        deleteEvents() {

            if (this.isActive.length > 0) {


                for (let i = this.isActive.length - 1; i >= 0; i--) {


                    console.log(this.showSelecteddayActivesList[this.isActive[i]]);
                    this.showSelecteddayActivesList[this.isActive[i]].status = 'finished'



                    mitt.emit('updateChartsData', true)




                }
                console.log(this.showActivesList);
                console.log(this.activities);
                useStore().user.updateTodoList(this.activities)

                this.$message.success('清除任务成功')
                this.isActive = []
            } else {
                this.$message.info('暂无选中事项')
            }

        },
        touch(index) {
            console.log(index);

            if (this.isActive.includes(index)) {
                //includes()方法判断是否包含某一元素,返回true或false表示是否包含元素，对NaN一样有效
                //filter()方法用于把Array的某些元素过滤掉，filter()把传入的函数依次作用于每个元素，然后根据返回值是true还是false决定保留还是丢弃该元素：生成新的数组
                this.isActive = this.isActive.filter(function (ele) {
                    console.log(ele != index);
                    return ele != index;
                });

                console.log(this.isActive);
            } else {
                this.isActive.push(index);
            }
            this.isActive.sort()

        },
        showClick(val) {

            this.isshow = val.addEventDialog

        },
        addEvent(val) {
            useStore().user.addEventList(val.content)

            this.todayList = (useStore().user.getTodayTodoList)
            this.activities = (useStore().user.getAllTodoList)

            this.isActive = []


        }
    }



}
</script>

<style lang="less" scoped>
@import "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css";


.fade-enter-active,
.fade-leave-active {
    transition: all 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
    height: 0;
}


.el-header {
    display: flex;
    justify-content: flex-end;
    margin-top: 20px;
    padding: 10px 0;

    .add {
        width: 14vh;
        font-weight: lighter;
        font-size: 14px;
        letter-spacing: 0.2rem;
    }
}

.common-layout {

    background-color: #F5F7FA;

    .aside {
        border-radius: 25px 25px 25px 25px;
        background-color: #fff;
        min-height: 4rem;
        padding-top: 10px;

        .header_button {
            text-align: end;
            margin-right: 4rem;
            line-height: 2rem;
        }
    }

    .historyList {
        border-radius: 25px;
        background-color: #fff;
        padding: 10px 0;
        margin-top: 40px;

        .historyToggleTitle {
            display: flex;
            align-items: center;
            justify-content: flex-start;
            width: 20%;
            margin-left: 4rem;
            background-color: #fff;

            p {
                padding-right: 10px;
                font-weight: 600;
                color: #666;
            }
        }


        .el-timeline .history_timeline {
            min-height: 1px;


            .el-timeline {
                transition: height 0.4s ease;
            }
        }
    }

    .el-timeline::v-deep {

        .el-timeline-item {
            padding: 20px;



            .el-timeline-item__wrapper {


                .el-timeline-item__timestamp.is-top {
                    text-align: left;
                    font-weight: bold;
                    padding-bottom: 20px;
                }

                .el-timeline-item__content {
                    font-size: 1.1rem;
                    font-weight: normal;
                    letter-spacing: 2px;
                    text-align: left;
                    align-items: center;

                    p {
                        transition: all .2s ease;
                        border-radius: 15px;
                    }

                    p:hover {
                        transition: all .2s ease;

                        background-color: aliceblue;
                        padding: 20px;

                    }

                    .active {
                        padding: 20px;
                        transition: all .2s ease;
                        text-decoration: line-through;
                        background-color: aliceblue;

                    }
                }
            }

        }
    }

}
</style>