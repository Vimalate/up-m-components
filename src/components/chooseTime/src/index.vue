<template>
  <div style="display:flex">
    <div style="margin-right:20px">
      <el-time-select
        v-model="startTime"
        :max-time="endTime"
        class="mr-4"
        :placeholder="startPlaceholder"
        :start="startTimeStart"
        :step="startStep"
        :end="startTimeEnd"
        v-bind="$attrs.startOption"
      ></el-time-select>
    </div>
    <div>
      <el-time-select
        v-model="endTime"
        :min-time="startTime"
        :placeholder="endPlaceholder"
        :start="endTimeStart"
        :step="endStep"
        :end="endTimeEnd"
        :disabled="endTimeDisabled"
        v-bind="$attrs.endOption"
      ></el-time-select>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
let props = defineProps({
  startPlaceholder: {
    type: String,
    default: '请选择开始时间'
  },
  startTimeStart: {
    type: String,
    default: '08:00'
  },
  startStep: {
    type: String,
    default: '00:30'
  },
  startTimeEnd: {
    type: String,
    default: '24:00'
  },
  // 结束时间
  endPlaceholder: {
    type: String,
    default: '请选择结束时间'
  },
  endTimeStart: {
    type: String,
    default: '08:00'
  },
  endTimeEnd: {
    type: String,
    default: '24:00'
  },
  endStep: {
    type: String,
    default: '00:30'
  },
})
let emits = defineEmits(['startChange', 'endChange'])

let startTime = ref<string>('')
let endTime = ref<string>('')
let endTimeDisabled = ref<boolean>(true)

watch(() => startTime.value, val => {
  if (!val) {
    endTime.value = ''
    endTimeDisabled.value = true
  } else {
    endTimeDisabled.value = false
    emits('startChange', val)
  }
})
watch(() => endTime.value, val => {
  val && emits('endChange', {
    startTime: startTime.value,
    endTime: val
  })
})
</script>

<style lang="scss" scoped>
</style>