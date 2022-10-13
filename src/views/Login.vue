<template>
    <el-button round type="primary" @click="toLogin">跳转</el-button>
</template>

<script>
export default {
    methods:{
        toLogin(){
            this.$router.push('/todo')
        }
    }
}
</script>

<style>

</style>