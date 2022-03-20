<template>
  <el-table v-bind="$attrs" v-loading="isLoading" :data="data">
    <template v-for="(item, index) in tableOPtions" :key="index">
      <el-table-column
        :width="item.width"
        :label="item.label"
        :prop="item.prop"
        :align="item.align"
      >
        <template #default="scope">
          <slot v-if="item.slot" :name="item.slot" :scope="scope"></slot>
          <span v-else>{{scope.row[item.prop!]}}</span>
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
        <slot name="action" :scope="scope"></slot>
      </template>
    </el-table-column>
  </el-table>
</template>

<script setup lang="ts">
import { PropType, computed } from 'vue';
import { TableOptions } from './types';
let props = defineProps({
  options: {
    type: Array as PropType<TableOptions[]>,
    required: true
  },
  data: {
    type: Array as PropType<any[]>,
    required: true
  },

})
const tableOPtions = computed(() => props.options.filter(item => !item.action))
const actionOptions = computed(() => props.options.find(item => item.action))
let isLoading = computed(() => !props.data || !props.data.length)
</script>

<style lang="scss" scoped>
</style>