<template>
  <el-dialog v-bind="$attrs" v-model="dialogVisible">
    <template #default>
      <m-form ref="form" :options="options"></m-form>
    </template>
    <!-- template dialog自身的插槽 -->
    <template #footer>
      <!-- slot 外部传入插槽 -->
      <slot name="footer" :form="form"></slot>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
import { watch, ref, PropType } from 'vue'
import { FormOptions } from '../../form/src/types/types';
import type { ElForm } from 'element-plus';
type FormInstance = InstanceType<typeof ElForm>;
let props = defineProps({
  visible: {
    type: Boolean,
    default: false
  },
   options: {
    type: Array as PropType<FormOptions[]>,
    required: true
  },
})
// 表单实例
const form = ref<FormInstance>();
const emits = defineEmits(['update:visible'])

let dialogVisible = ref<boolean>(props.visible)
watch(() => props.visible, val => {
  dialogVisible.value = val
}, { immediate: true })

watch(() => dialogVisible.value, val => {
  emits('update:visible', val)
})
</script>

<style lang="scss" scoped>
</style>