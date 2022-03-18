<template>
  <el-form
    v-if="model"
    :validate-on-rule-change="ruleChange"
    :label-width="labelWidth"
    :model="model"
    v-bind="$attrs"
  >
    <template v-for="(item, index) in options" :key="index">
      <el-form-item
        v-if="!item.children || !item.children!.length"
        :label="item.label"
        :rules="item.rules"
        :prop="item.prop"
      >
        <component
          v-if="item.type !== 'upload'"
          :placeholder="item.placeholder"
          v-model="model[item.prop!]"
          :is="`el-${item.type}`"
          v-bind="item.attrs"
        ></component>
        <el-upload
          v-bind="item.uploadAttrs"
          :on-preview="onPreview"
          :on-remove="onRemove"
          :on-success="onSuccess"
          :on-error="onError"
          :on-progress="onProgress"
          :on-change="onChange"
          :before-upload="beforeUpload"
          :before-remove="beforeRemove"
          :http-request="httpRequest"
          :on-exceed="onExceed"
          v-else-if="item.type = 'upload'"
        >
          <slot name="uploadArea"></slot>
          <slot name="uploadTip"></slot>
        </el-upload>
      </el-form-item>
      <el-form-item
        v-if="item.children && item.children!.length"
        :label="item.label"
        :rules="item.rules"
        :prop="item.prop"
      >
        <component
          :placeholder="item.placeholder"
          v-model="model[item.prop!]"
          :is="`el-${item.type}`"
          v-bind="item.attrs"
        >
          <component
            v-for="(child, i) in item.children"
            :key="i"
            :label="child.label"
            :value="child.value"
            :is="`el-${child.type}`"
          >
            <template v-if="child.text">{{ child.text }}</template>
          </component>
        </component>
      </el-form-item>
    </template>
  </el-form>
</template>

<script setup lang="ts">
import { PropType, ref, onMounted, watch } from 'vue';
import { FormOptions } from './types/types'
import cloneDeep from "lodash/cloneDeep"
const emits = defineEmits(['on-preview', 'on-remove',
  'on-success', 'on-error', 'on-progress',
  'on-change', 'before-upload', 'before-remove', 'http-request', 'on-exceed'
])
let props = defineProps({
  options: {
    type: Array as PropType<FormOptions[]>,
    required: true
  },
  labelWidth: {
    type: String,
    default: '80px'
  },
  ruleChange: {
    type: Boolean,
    default: false
  }

})

let model = ref<any>(null) //checkbox-group 的 value: []
const initForm = () => {
  if (props.options && props.options.length) {
    let m: any = {}
    props.options.map((item: FormOptions) => {
      m[item.prop!] = item.value
    })
    model.value = cloneDeep(m)
    console.log('model', model);
  }
}
onMounted(() => {
  initForm()
})

watch(() => props.options, () => {
  initForm()
}, { deep: true })

const onPreview = (file: any) => {
  emits('on-preview', file)
}
const onRemove = (file: any, fileList: any) => {
  emits('on-remove', { file, fileList })
}
const beforeRemove = (file: any) => {
  emits('before-remove', file)
}
const onSuccess = (response: any, file: any, fileList: any) => {
  emits('on-success', { response, file, fileList })
}
const onError = (error: any, file: any, fileList: any) => {
  emits('on-error', { error, file, fileList })
}
const onProgress = (event: any, file: any, fileList: any) => {
  emits('on-progress', { event, file, fileList })
}
const onChange = (file: any, fileList: any) => {
  emits('on-change', { file, fileList })
}
const beforeUpload = (file: any, fileList: any) => {
  emits('before-upload', { file, fileList })
}
const httpRequest = (file: any) => {
  emits('http-request', file)
}

const onExceed = (file: any, fileList: any) => {
  emits('on-exceed', { file, fileList })
}
</script>

<style scoped>
</style>