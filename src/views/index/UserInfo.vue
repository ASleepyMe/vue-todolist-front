<template>


    <div class="common-layout">
        <el-container>
            <el-header>
                <div class="title">
                    <h2>个人页</h2>
                </div>
            </el-header>
            <el-main>
                <el-avatar :size="80" icon="UserFilled" >{{username}}</el-avatar>
                <div>
                    <el-form ref="elForm" :model="formData" :rules="rules" size="medium" label-width="100px"
                    label-position="left">
                    <el-form-item label="上传" prop="field104" required>
                        <el-upload ref="field104" :file-list="field104fileList" :action="field104Action"
                        :before-upload="field104BeforeUpload">
                        <el-button size="small" type="primary" icon="el-icon-upload">点击上传</el-button>
                        </el-upload>
                    </el-form-item>
                    <el-form-item label="用户昵称" prop="field103">
                        <el-input v-model="formData.field103" placeholder="请输入用户昵称" clearable :style="{width: '100%'}">
                        </el-input>
                    </el-form-item>
                    <el-form-item label="用户名" prop="field102">
                        <el-input v-model="formData.field102" placeholder="请输入用户名" clearable :style="{width: '100%'}">
                        </el-input>
                    </el-form-item>
                    <el-form-item label="刻码" prop="field109">
                        <el-input v-model="formData.field109" placeholder="请输入刻码" :disabled='true' clearable
                        :style="{width: '100%'}"></el-input>
                    </el-form-item>
                    <el-form-item label="手机号" prop="mobile">
                        <el-input v-model="formData.mobile" placeholder="请输入手机号手机号" :maxlength="11" show-word-limit
                        :disabled='true' clearable prefix-icon='el-icon-mobile' :style="{width: '100%'}"></el-input>
                    </el-form-item>
                    <el-form-item label="密码" prop="field101">
                        <el-input v-model="formData.field101" placeholder="请输入密码" clearable prefix-icon='el-icon-key'
                        show-password :style="{width: '100%'}"></el-input>
                    </el-form-item>
                    <el-form-item label="接受事件委派" prop="field106">
                        <el-switch v-model="formData.field106"></el-switch>
                    </el-form-item>
                    <el-row type="flex" justify="end" align="middle">
                        <el-col :span="5">
                        <el-form-item label="" prop="field117">
                            <el-button type="primary" size="medium"> 保存更改 </el-button>
                        </el-form-item>
                        </el-col>
                    </el-row>
                    <el-form-item size="large">
                        <el-button type="primary" @click="submitForm">提交</el-button>
                        <el-button @click="resetForm">重置</el-button>
                    </el-form-item>
                    </el-form>
                </div>
            </el-main>
        </el-container>
    </div>


</template>

<script>
export default {
  components: {},
  props: [],
  data() {
    return {
      formData: {
        field104: null,
        field103: undefined,
        field102: undefined,
        field109: undefined,
        mobile: undefined,
        field101: undefined,
        field106: false,
        field117: undefined,
      },
      rules: {
        field103: [{
          required: true,
          message: '请输入用户昵称',
          trigger: 'blur'
        }],
        field102: [{
          required: true,
          message: '请输入用户名',
          trigger: 'blur'
        }],
        field109: [],
        mobile: [{
          pattern: /^1(3|4|5|7|8|9)\d{9}$/,
          message: '手机号格式错误',
          trigger: 'blur'
        }],
        field101: [],
      },
      field104Action: 'https://jsonplaceholder.typicode.com/posts/',
      field104fileList: [],
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
    submitForm() {
      this.$refs['elForm'].validate(valid => {
        if (!valid) return
        // TODO 提交表单
      })
    },
    resetForm() {
      this.$refs['elForm'].resetFields()
    },
    field104BeforeUpload(file) {
      let isRightSize = file.size / 1024 / 1024 < 2
      if (!isRightSize) {
        this.$message.error('文件大小超过 2MB')
      }
      return isRightSize
    },
  }
}

</script>

<style scoped lang="less">

.el-container {
    margin-top: 2rem;
    --el-header-height:auto;
    .el-header {

        display: flex;
        justify-content: flex-start;
        margin-bottom: 20px;
    }

    .el-main {
        margin: 0;
        width: 100%;
        height: 100vh;
        background-color: #ffff;
        border-radius: 25px 0px 0 0;

        .el-upload__tip {
            line-height: 1.2;
        }

    }
}
</style>