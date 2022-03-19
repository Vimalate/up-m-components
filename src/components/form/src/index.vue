<template>
  <el-form
    ref="form"
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
          v-if="item.type !== 'upload' && item.type !== 'editor'"
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
          v-else-if="item.type === 'upload'"
        >
          <slot name="uploadArea"></slot>
          <slot name="uploadTip"></slot>
        </el-upload>
        <div id="editor" v-else-if="item.type === 'editor'"></div>
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
    <el-form-item>
      <slot name="action" :form="form" :model="model"></slot>
    </el-form-item>
  </el-form>
</template>

<script setup lang="ts">
import { PropType, ref, onMounted, watch, nextTick } from 'vue';
import { FormOptions } from './types/types'
import E from 'wangeditor'
import cloneDeep from "lodash/cloneDeep"
import type { ElForm } from 'element-plus';
type FormInstance = InstanceType<typeof ElForm>;
const emits = defineEmits(['on-preview', 'on-remove',
  'on-success', 'on-error', 'on-progress',
  'on-change', 'before-upload', 'before-remove', 'on-exceed'
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
  },
  // 用户自定义上传方法
  httpRequest: {
    type: Function,
  }

})
const form = ref<FormInstance>();
let model = ref<any>(null) //checkbox-group 的 value: []
let editorRef = ref<any>(null)
const initForm = () => {
  if (props.options && props.options.length) {
    let m: any = {}
    props.options.map((item: FormOptions) => {
      m[item.prop!] = item.value
      // 初始化富文本
      if (item.type === 'editor') {
        nextTick(() => {
          if (document.getElementById('editor')) {
            const editor = new E('#editor')
            editor.config.placeholder = item.placeholder || '请输入正文'
            editor.create()
            editor.txt.html(item.value || '<p>用 JS 设置的内容</p>') // 重新设置编辑器内容
            editor.config.onchange = function (newHtml: string) {
              model.value[item.prop!] = newHtml
            };
            editorRef.value = editor
          }
        })
      }
    })
    model.value = cloneDeep(m)
  }
}

// 重写重置表单方法
const resetFields = () => {
  form.value?.resetFields()
  if (props.options && props.options.length) {
    const editorItem = props.options.find(c => c.type === 'editor')!
    editorRef.value.txt.html(editorItem.value)
  }
}

// 重写表单验证方法
const validate = () => {
  return form.value!.validate
}

// 获取表单数据
const getFormData = () => {
  return model.value
}

// 分发方法 (移除$children)
defineExpose({
  resetFields,
  validate,
  getFormData
})

onMounted(() => {
  initForm()
})

watch(() => props.options, () => {
  initForm()
}, { deep: true })

const onPreview = (file: File) => {
  emits('on-preview', file)
}
const onRemove = (file: File, fileList: FileList) => {
  emits('on-remove', { file, fileList })
}
const beforeRemove = (file: File) => {
  emits('before-remove', file)
}
const onSuccess = (response: any, file: File, fileList: FileList) => {
  // 上传成功赋值
  const uploadItem = props.options.find(item => item.type === 'upload')!
  model[uploadItem.prop!] = { response, file, fileList }
  emits('on-success', { response, file, fileList })
}
const onError = (error: any, file: File, fileList: FileList) => {
  emits('on-error', { error, file, fileList })
}
const onProgress = (event: any, file: File, fileList: FileList) => {
  emits('on-progress', { event, file, fileList })
}
const onChange = (file: File, fileList: FileList) => {
  emits('on-change', { file, fileList })
}
const beforeUpload = (file: File, fileList: FileList) => {
  emits('before-upload', { file, fileList })
}
const onExceed = (files: File, fileList: FileList) => {
  emits('on-exceed', { files, fileList })
}
</script>

<style scoped>
</style>