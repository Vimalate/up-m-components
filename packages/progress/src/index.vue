<template>
  <el-progress v-bind="$attrs" :percentage="p"></el-progress>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
const props = defineProps({
  percentage: {
    type: Number,
    default: 0
  },
  isAnimation: {
    type: Boolean,
    default: false
  },
  time: {
    type: Number,
    default: 3000
  },
})
let p = ref(0)

onMounted(() => {
  if (props.isAnimation) {
    // 每秒需要加载
    const t = Math.ceil(props.percentage / props.time)
    let timer = setInterval(() => {
      p.value += 1
      if (p.value >= props.percentage) {
        p.value = props.percentage
        clearInterval(timer)
      }
    }, t)
  } else {
    p.value = props.percentage
  }
})
</script>

<style lang="scss" scoped>
</style>