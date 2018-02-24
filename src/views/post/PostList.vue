<template>
  <div class="app-container">
    <el-table
      :data="list"
      border
      style="width: 100%">
      <el-table-column
        prop="title"
        label="标题"
        >
      </el-table-column>
      <el-table-column
        prop="author"
        label="作者"
        width="150">
      </el-table-column>
      <el-table-column
        prop="created"
        label="创建时间"
        width="150">
      </el-table-column>
      <el-table-column
        fixed="right"
        label="操作"
        width="100"
        >
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small">编辑</el-button>
          <el-button type="text" size="small">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { getPosts } from '@/api/post'

export default {
  data() {
    return {
      list: null,
      listLoading: true
      /*
      [{
        id: 1,
        title: 'JavaEE从入门到放弃',
        author: 'hchaojie',
        created: '2018-2-23'
      }]
      */
    }
  },
  filters: {
    statusFilter(status) {
      const statusMap = {
        published: 'success',
        draft: 'gray',
        deleted: 'danger'
      }
      return statusMap[status]
    }
  },
  created() {
      this.fetchData()
  },
  methods: {
    fetchData() {
      this.listLoading = true
      getPosts().then(response => {
        this.list = response.items
        this.listLoading = false
      })
    }
  }
}
</script>
