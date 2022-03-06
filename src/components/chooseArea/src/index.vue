<template>
  <div>
    <el-select placeholder="请选择省份" v-model="province">
      <el-option>1</el-option>
    </el-select>
    <el-select style="margin:0 10px" placeholder="请选择城市" v-model="city">
      <el-option>1</el-option>
    </el-select>
    <el-select placeholder="请选择区域" v-model="area">
      <el-option>1</el-option>
    </el-select>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
let province = ref<string>('')
let city = ref<string>('')
let area = ref<string>('')
</script>

<style lang="scss" scoped>
</style>