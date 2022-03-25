<template>
  <el-table v-bind="$attrs" v-loading="isLoading" :data="tableData" @row-click="rowClick">
    <template v-for="(item, index) in tableOPtions" :key="index">
      <el-table-column
        :width="item.width"
        :label="item.label"
        :prop="item.prop"
        :align="item.align"
      >
        <template #default="scope">
          <template v-if="scope.row.rowEdit">
            <el-input v-model="scope.row[item.prop!]"></el-input>
          </template>
          <template v-else>
            <slot v-if="item.slot" :name="item.slot" :scope="scope"></slot>
            <span v-else>{{ scope.row[item.prop!] }}</span>
          </template>
        </template>
      </el-table-column>
    </template>

    <el-table-column
      v-if="actionOptions"
      :width="actionOptions.width"
      :label="actionOptions.label"
      :prop="actionOptions.prop"
      :align="actionOptions.align"
    >
      <template #default="scope">
        <slot v-if="scope.row.rowEdit" name="rowEdit" :scope="scope"></slot>
        <slot v-else name="action" :scope="scope"></slot>
      </template>
    </el-table-column>
  </el-table>
</template>

<script setup lang="ts">
import { ref, PropType, computed, onMounted, watch } from 'vue';
import { TableOptions } from './types';
import cloneDeep from 'lodash/cloneDeep'
let props = defineProps({
  options: {
    type: Array as PropType<TableOptions[]>,
    required: true
  },
  data: {
    type: Array as PropType<any[]>,
    required: true
  },
  isEditRow: {
    type: Boolean,
    default: false
  },
  editRowIndex: {
    type: String,
    default: ''
  }

})

let emits = defineEmits(['update:editRowIndex'])

const tableOPtions = computed(() => props.options.filter(item => !item.action))
const actionOptions = computed(() => props.options.find(item => item.action))
let isLoading = computed(() => !props.data || !props.data.length)

const tableData = ref<any[]>(cloneDeep(props.data))
let editIndex = ref<string>(props.editRowIndex)
onMounted(() => {
  tableData.value.map(item => {
    item.rowEdit = false
  })
})
watch(() => props.data, val => {
  tableData.value = cloneDeep(val)
  tableData.value.map(item => {
    item.rowEdit = false
  })

})
watch(() => props.editRowIndex, val => {
  val && (editIndex.value = val)
})

const rowClick = (row: any, column: any) => {
  if (column.label === actionOptions.value!.label) {
    console.log('index', column.label);
    if (props.editRowIndex && props.editRowIndex === editIndex.value) {
      row.rowEdit = !row.rowEdit
      tableData.value.map(item => {
        if (item !== row) {
          item.rowEdit = false
        }
      })
      if (!row.rowEdit) {
        emits('update:editRowIndex', '')
      }
    }
  }
}

</script>

<style lang="scss" scoped>
</style>