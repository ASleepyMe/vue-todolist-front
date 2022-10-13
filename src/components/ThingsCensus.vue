

<template>
    <div class="todoEchart">
        
        <div class="title">
            <p>本周累计</p>
            <span>6</span>
            <p>项待办</p><br />
            <p>共完成</p>
            <span>2</span>
            <p>项</p>
        </div>
    </div>
</template>

<script>

export default {
  components: {  },
    data() {
        return {};
    },
    mounted() {
        
    },
    methods: {
    
    },
    
}
</script>

<style lang="less" scoped>

        .title{
            text-align: left;
            p{
                letter-spacing: 0.2rem;
                font-size: large;
                font-weight: lighter;
                display: inline;
            }
            span{
                font-weight: bold;
                font-size: 2rem;
                color:  #337ecc;
                padding-left: 2rem;
                padding-right: 2rem;
            }
        }
    

</style>