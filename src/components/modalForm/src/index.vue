<template>
  <!-- <div :class="{ 'm-modal-form-dialog': isScroll }">
  
  </div>-->
  <el-dialog  v-bind="$attrs" v-model="dialogVisible">
    <template #default>
      <div :class="{ 'm-modal-form-dialog': isScroll }">
        <p>isScroll{{ isScroll }}</p>
        <m-form
          ref="form"
          :options="options"
          @on-preview="onPreview"
          @on-remove="onRemove"
          @before-remove="beforeRemove"
          @on-exceed="onExceed"
          @on-change="onChange"
          @before-upload="beforeUpload"
          @on-success="onSuccess"
        >
          <template #uploadArea>
            <slot name="uploadArea"></slot>
          </template>
          <template #uploadTip>
            <slot name="uploadTip"></slot>
          </template>
        </m-form>
      </div>
    </template>
    <!-- template dialog自身的插槽 -->
    <template #footer>
      <!-- slot 外部传入插槽 -->
      <slot name="footer" :form="form"></slot>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
import { watch, ref, PropType,nextTick } from 'vue'
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
  isScroll: {
    type: Boolean,
    default: true
  },
  // 处理上传事件
  onChange: {
    type: Function
  },
  onPreview: {
    type: Function
  },
  onRemove: {
    type: Function
  },
  beforeRemove: {
    type: Function
  },
  onExceed: {
    type: Function
  },
  beforeUpload: {
    type: Function
  },
  onSuccess: {
    type: Function
  },
})
// 表单实例
const form = ref<FormInstance>();
const emits = defineEmits(['update:visible'])

let dialogVisible = ref<boolean>(false)
watch(() => props.visible, val => {
  if(val){
    nextTick(()=>{
      form.value!.resetFields()
    })
  }
  dialogVisible.value = val
})

watch(() => dialogVisible.value, val => {
  emits('update:visible', val)
})
</script>

<style lang="scss" scoped>
// .m-modal-form-dialog {

// }
//  ::v-deep(.el-dialog__body) {
//     height: 450px!important;
//     overflow: scroll !important;
//   }
</style>