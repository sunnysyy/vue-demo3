<template>
  <div class="menu1">
    <el-radio-group v-model="radio" size="small" @change="changeRadio">
      <el-radio-button label="第一页"></el-radio-button>
      <el-radio-button label="第二页"></el-radio-button>
      <el-radio-button label="第三页"></el-radio-button>
    </el-radio-group>
    <el-table :data="tableData" border>
      <el-table-column label="日期" prop="date"></el-table-column>
      <el-table-column label="姓名" prop="name"></el-table-column>
      <el-table-column label="地址" prop="address"></el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'menu1',
  data () {
    return {
      tableData: [],
      radio: '第一页',
      params: ''
    }
  },
  created () {
    this.getTableData()
  },
  methods: {
    changeRadio (val) {
      console.log(val)
      if (val === '第一页') {
        this.params = 0
      } else if (val === '第二页') {
        this.params = 1
      } else {
        this.params = ''
      }
    },
    getTableData () {
      console.log(this.params)
      this.$axios.post('/table', {params: this.params}).then((r) => {
        console.log(r.data)
        this.tableData = r.data
      }).catch((r) => {
        console.log(r)
      })
    }
  }
}
</script>

<style scoped>

</style>
