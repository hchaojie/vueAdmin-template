<template>
  <div class="app-container">
  <el-form ref="postForm" :model="form" label-width="80px">
    <el-form-item label="文章名称" prop="title">
      <el-input v-model="form.title"></el-input>
    </el-form-item>
    <el-form-item label="文章摘要" prop="excerpt">
      <el-input type="textarea" v-model="form.excerpt"></el-input>
    </el-form-item>
    <el-form-item label="文章内容" prop="content">
      <el-input type="textarea" v-model="form.content"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">立即创建</el-button>
      <el-button>取消</el-button>
      <el-button @click="resetForm('postForm')">重置</el-button>
    </el-form-item>
  </el-form>
  </div>
</template>


<script>
import { create } from '@/api/post'

export default {
  data() {
    return {
      form: {
        title: '',
        excerpt: '',
        content: ''
      }
    }
  },
  methods: {
    onSubmit() {
      createPost(this.form).then(response => {

        this.$message({
          message: '恭喜你，保存成功！',
          type: 'success'
        });

        // 重置表单
        this.$refs.postForm.resetFields()

        // 或者跳转到列表界面
        // this.$router.push({ path: 'list' })
      });
    },
    
    resetForm(name) {
      this.$refs[name].resetFields()
    }
  }
}
</script>