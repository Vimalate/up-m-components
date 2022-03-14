<template>
  <div>
    <m-form :options="options"></m-form>
  </div>
</template>

<script setup lang="ts">
import { FormOptions } from '../../components/form/src/types/types';

let options: FormOptions[] = [
  {
    type: 'input', value: '',prop:'username', label: '用户名', rules: [
      { required: true, message: '用户名不能为空', trigger: 'blur' },
      { min: 2, max: 6, message: '用户名为2-6位' }
    ], attrs: { clearable: true }
  },
  {
    type: 'input',prop:'password', value: '', label: '密码', rules: [
      { required: true, message: '密码不能为空', trigger: 'blur' },
      { min: 6, max: 15, message: '密码为6-15位' }
    ], attrs: { showPassWord: true, clearable: true }
  }
]
</script>

<style scoped>
</style>