<template>


    <div class="common-layout">
        <el-container>
            <el-header>
                <div class="title">
                    <h2>飞书</h2>
                </div>
            </el-header>
            <el-main>  
                
                <el-row :gutter="16">
  <el-form ref="elForm" :model="formData" :rules="rules" size="medium" label-width="100px"
    label-position="left">
    <el-col :span="24">
      <el-row>
        <el-col :span="12">
          <el-form-item label="收信人" prop="field101">
            <el-input v-model="formData.field101" placeholder="请输入收信人" clearable :style="{width: '100%'}">
            </el-input>
          </el-form-item>
        </el-col>
        <el-col :span="9">
          <el-form-item label="事务等级" prop="field103">
            <el-select v-model="formData.field103" placeholder="请选择事务等级" clearable :style="{width: '100%'}">
              <el-option v-for="(item, index) in field103Options" :key="index" :label="item.label"
                :value="item.value" :disabled="item.disabled"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="9">
          <el-form-item label="日期选择" prop="field105">
            <el-date-picker v-model="formData.field105" format="yyyy-MM-dd" value-format="yyyy-MM-dd"
              :style="{width: '100%'}" placeholder="请选择日期选择" clearable></el-date-picker>
          </el-form-item>
        </el-col>
        <el-col :span="9">
          <el-form-item label="颜色选择" prop="field102" required>
            <el-color-picker v-model="formData.field102" size="medium"></el-color-picker>
          </el-form-item>
        </el-col>
      </el-row>
    </el-col>
    <el-col :span="12">
      <el-form-item label="时间范围" prop="field108">
        <el-time-picker v-model="formData.field108" is-range format="HH:mm:ss" value-format="HH:mm:ss"
          :style="{width: '100%'}" start-placeholder="开始时间" end-placeholder="结束时间" range-separator="至"
          clearable></el-time-picker>
      </el-form-item>
    </el-col>
    <el-col :span="24">
      <el-form-item label="事件内容" prop="field106">
        <el-input v-model="formData.field106" type="textarea" placeholder="请输入内容事件内容"
          :autosize="{minRows: 6, maxRows: 8}" :style="{width: '100%'}"></el-input>
      </el-form-item>
    </el-col>
    <el-col :span="24">
      <el-form-item size="large">
        <el-button type="primary" @click="submitForm">保存y</el-button>
        <el-button @click="resetForm">重置</el-button>
      </el-form-item>
    </el-col>
  </el-form>
</el-row>

     
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
        field101: undefined,
        field103: "info",
        field105: "2022-12-01",
        field102: "#E12424",
        field108: null,
        field106: undefined,
      },
      rules: {
        field101: [{
          required: true,
          message: '请输入收信人',
          trigger: 'blur'
        }],
        field103: [{
          required: true,
          message: '请选择事务等级',
          trigger: 'change'
        }],
        field105: [{
          required: true,
          message: '请选择日期选择',
          trigger: 'change'
        }],
        field108: [{
          required: true,
          message: '时间范围不能为空',
          trigger: 'change'
        }],
        field106: [{
          required: true,
          message: '请输入内容事件内容',
          trigger: 'blur'
        }],
      },
      field103Options: [{
        "label": "普通",
        "value": "info"
      }, {
        "label": "优先处理",
        "value": "success"
      }, {
        "label": "重要",
        "value": "warning"
      }, {
        "label": "紧急",
        "value": "danger"
      }, {
        "label": "未定级",
        "value": "null"
      }],
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

        height: 100vh;
        background-color: #ffff;
        border-radius: 25px 0px 0 0;
    }
}
</style>