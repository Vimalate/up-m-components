<template>
  <div>
    <m-table element-loading-text="加载中..." :data="tableData" :options="options">
      <template #date="{ scope }">
        <el-icon-timer></el-icon-timer>
        {{scope.row.date}}
      </template>
      <template #action="{ scope }">
        <el-button type="primary" size="small" @click="edit(scope.row)">编辑</el-button>
        <el-button type="danger" size="small" @click="onDelete(scope.row)">删除</el-button>
      </template>
    </m-table>
  </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'
import { TableOptions } from '../../components/table/src/types';
interface TableData{
  name:string,
  date:string,
  address:string
}
let tableData=ref<TableData[]>([])
setTimeout(()=>{
  tableData.value= [
  { 
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
]

},3000)

const options: TableOptions[] = [
  { label: '日期', slot: 'date', prop: 'date', align: 'center', width: 180 },
  { label: '姓名', prop: 'name', align: 'center' },
  { label: '地址', prop: 'address', align: 'center' },
  { label: '操作', action: true, align: 'center' },
]

const onDelete = (row: any) => {
  console.log(row);

}
const edit = (row: any) => {
  console.log(row);
}
</script>

<style lang="scss" scoped>
svg{
  width: 1em;
  height: 1em;
}
</style>