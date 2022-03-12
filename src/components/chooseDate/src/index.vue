<template>
  <div style="display:flex">
    <div style="margin-right: 20px;">
      <el-date-picker
        :disabledDate="startDisabledDate"
        v-model="startDate"
        type="datetime"
        :placeholder="startPlaceholder"
        v-bind="$attrs.startOption"
      ></el-date-picker>
    </div>
    <div>
      <el-date-picker
        :disabled="endDateDisabled"
        v-model="endDate"
        type="datetime"
        :placeholder="endPlaceholder"
        :disabledDate="endDisabledDate"
        v-bind="$attrs.endOption"
      ></el-date-picker>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
let props = defineProps({
  startPlaceholder: {
    type: String,
    default: '请选择开始日期'
  },
  endPlaceholder: {
    type: String,
    default: '请选择结束日期'
  },
  // 是否禁用选择今天之前的日期
  disableToday: {
    type: Boolean,
    default: true
  }
})

let emits = defineEmits(['startChange', 'endChange'])

let startDate = ref<Date | null>(null)
let endDate = ref<Date | null>(null)
let endDateDisabled = ref<boolean>(true)

// 禁用开始日期之前的函数
const startDisabledDate = (time: Date) => {
  if (props.disableToday) {
    return time.getTime() < Date.now() - 1000 * 60 * 60 * 24
  }
}
// 禁用结束日期之前的函数
const endDisabledDate = (time: Date) => {
  if (startDate.value) { // 加上一天
    return time.getTime() < startDate.value.getTime() + 1000 * 60 * 60 * 24
  }
}
watch(() => startDate.value, val => {
  if (!val) {
    endDateDisabled.value = true
  } else {
    endDateDisabled.value = false
    emits('startChange', val)
  }
})

watch(() => endDate.value, val => {
  val && emits('endChange', {
    startDate: startDate.value,
    endDate: val
  })
})

</script>

<style lang="scss" scoped>
</style>