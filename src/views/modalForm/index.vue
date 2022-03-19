<template>
  <div>
    <el-button type="primary" @click="open">打 开</el-button>
    <m-modal-form
      title="编辑用户"
      width="50%"
      :options="options"
      v-model:visible="visible"
      :on-change="handleChange"
      :before-upload="handleBeforeUpload"
      :on-success="handleSuccess"
    >
      <template #footer="{ form }">
        <span class="dialog-footer">
          <el-button @click="cancel(form)">Cancel</el-button>
          <el-button type="primary" @click="submit(form)">Confirm</el-button>
        </span>
      </template>
      <!-- 上传 -->
      <template #uploadArea>
        <el-button type="primary">Click to upload</el-button>
      </template>
      <template #uploadTip>
        <div class="el-upload__tip">jpg/png files with a size less than 500kb</div>
      </template>
    </m-modal-form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { FormOptions } from '../../components/form/src/types/types';
import { ElMessage } from 'element-plus'
import type { ElForm } from 'element-plus';
type FormInstance = InstanceType<typeof ElForm>;
let visible = ref<boolean>(false)
const open = () => {
  visible.value = true
}

let options: FormOptions[] = [
  {
    type: 'input', value: '', prop: 'username', label: '用户名', rules: [
      { required: true, message: '用户名不能为空', trigger: 'blur' },
      { min: 2, max: 6, message: '用户名为2-6位' }
    ], attrs: { clearable: true }
  },
  {
    type: 'input', prop: 'password', value: '', label: '密码', rules: [
      { required: true, message: '密码不能为空', trigger: 'blur' },
      { min: 6, max: 15, message: '密码为6-15位' }
    ], attrs: { showPassWord: true, clearable: true }
  },
  {
    type: 'select', label: '职位',
    attrs: {
      style: {
        width: '100%'
      },
    },
    prop: 'role', value: '', placeholder: '请选择职位', rules: [
      { required: true, message: '职位不能为空', trigger: 'change' },
    ],
    children: [
      { type: 'option', label: '经理', value: '1' },
      { type: 'option', label: '主管', value: '2' },
      { type: 'option', label: '员工', value: '3' }
    ]
  },
  {
    type: 'checkbox-group', label: '爱好',
    prop: 'like', value: [], placeholder: '请选择爱好', rules: [
      { required: true, message: '爱好不能为空', trigger: 'change' },
    ],
    children: [
      { type: 'checkbox', text: '足球', label: '1' },
      { type: 'checkbox', text: '篮球', label: '2' },
      { type: 'checkbox', text: '跳', label: '3' }
    ]
  },
  {
    type: 'radio-group', label: '性别',
    prop: 'gender', value: '',
    children: [
      { type: 'radio', label: '男', value: 'male' },
      { type: 'radio', label: '女', value: 'female' },
    ]
  },
  {
    type: 'upload', label: '附件', prop: 'pic',
    uploadAttrs: {
      action: "https://jsonplaceholder.typicode.com/posts/",
      multiple: true,
      limit: 2
    },
    // rules: [
    //   { required: true, message: '附件不能为空', trigger: 'blur' },
    // ],
  },
  {
    type: 'editor',
    value: '',
    prop: 'desc',
    label: '描述',
    placeholder: '请输入描述',
    rules: [
      { required: true, message: '描述不能为空', trigger: 'blur' },
    ]
  }

]

const submit = (form: any) => {
  const validate = form.validate()
  const model = form.getFormData() // 表单数据
  validate((valid: boolean) => {
    if (valid) {
      ElMessage.success('校验成功！')
      console.log('formData', model);
    } else {
      ElMessage.error('校验失败！')
    }
  })
}
const cancel = (form: FormInstance) => {
  visible.value = false
}

const handleBeforeUpload = (val: any) => {
  console.log('handleBeforeUpload', val);
}
const handleChange = (val: any) => {
  console.log('handleChange', val);
}
const handleSuccess = (val: any) => {
  console.log('handleSuccess', val);

}
</script>

<style lang="scss" scoped>
</style>