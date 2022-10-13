<template>


    <div class="common-layout">

        <el-container>
            <el-header>
                <div class="title">
                    <h2>关于</h2>
                </div>
            </el-header>
            <el-main>
                <Transition name="fade">
                    <div class="main">
                        <p class="title">刻刻</p>
                        <p class="version">v0.1.0</p>

                        <p class="content">通过本作品管理时间，达到时间停止的目标，成为时间管理大师吧</p>

                        <div class="middle">
                            <a class="btn" href="https://gitee.com/zjinx">
                                <i class="fab fa-github"></i>
                            </a>
                            <!-- github -->
                            <a class="btn" href='#'>
                                <i class="fab fa-weibo"></i>
                            </a>
                            <!-- 微博 -->
                            <!-- <a class="btn" href="javascript:void(0);">
                                <i class="fab fa-weixin"></i>
                            </a> -->

                            <!-- 微信 -->
                            <a class="btn" href="#">
                                <i class="fab fa-qq"></i>
                            </a>

                            <!-- QQ -->

                            <a class="btn" href="#">
                                <i class="fab fa-twitch"></i>
                            </a>
                        </div>
                        <p class="introduce">「  本作品灵感来源于以时间停止为题材、充满奇幻感的动漫<a
                                href="https://movie.douban.com/subject/27173361/"
                                target="_blank">《刻刻》</a>  」</p>
                        <el-image
                            :src="'https://bkimg.cdn.bcebos.com/pic/10dfa9ec8a1363274207f79a9a8fa0ec09fac7b4?x-bce-process=image/watermark,image_d2F0ZXIvYmFpa2UxNTA=,g_7,xp_5,yp_5/format,f_auto'"
                            :fit="fit"></el-image>
                    </div>
                </Transition>
            </el-main>
        </el-container>
    </div>



</template>

<script>

export default {
    components: {

    },

}

</script>

<style scoped lang="less">
.el-container {
    margin-top: 2rem;
    --el-header-height: auto;

    .el-header {

        display: flex;
        justify-content: flex-start;
        margin-bottom: 20px;
    }


    .el-main {
        margin: 0;
        
        height: 100vh;
        background-color: #ffff;
        border-radius: 25px 0px 0 0;

        .main{
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-around;

            .middle {
    
                margin-top: 20%;
            }

        }

        p.title {
            font-size: 2rem;
            font-weight: bold;


        }

        p.version {
            background-color: #3498db;
            font-weight: lighter;
            color: #fff;
            padding: 2px 4px;
        }

        p.content {

            font-weight: lighter;

            color: #666666;
        }

        p.introduce {
           
            font-weight: lighter;
            color: #666666;
        }
    }
}

a,
a:hover,
a:active,
a:visited {
    text-decoration: dot;
    list-style: none;
    color: cornflowerblue;
}




.btn {
    display: inline-block;
    width: 90px;
    height: 90px;
    background: #f1f1f1;
    margin: 10px;
    border-radius: 30%;
    box-shadow: 0 5px 15px -5px #00000070;
    color: #3498db;
    overflow: hidden;
    position: relative;
    text-align: center;
}

.btn i {
    line-height: 90px;
    font-size: 26px;
    transition: 0.2s linear;
}

.btn:hover i {
    transform: scale(1.3);
    color: #f1f1f1;
}

.btn::before {
    content: '';
    position: absolute;
    width: 120%;
    height: 120%;
    background: #3498db;
    transform: rotate(45deg);
    left: -110%;
    top: 90%;
}

.btn:hover::before {
    animation: all 0.7s 1;
    top: -10%;
    left: -10%;
}
</style>