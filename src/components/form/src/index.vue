<template>
  <el-form
    :validate-on-rule-change="ruleChange"
    :label-width="labelWidth"
    :model="model"
    v-bind="$attrs"
  >
    <el-form-item
      :label="item.label"
      :rules="item.rules"
      :prop="item.prop"
      v-for="(item, index) in options"
      :key="index"
    >
      <component v-model="model[item.prop!]" :is="`el-${item.type}`"></component>
    </el-form-item>
  </el-form>
</template>

<script setup lang="ts">
import { PropType, reactive, onMounted } from 'vue';
import { FormOptions } from './types/types'
import cloneDeep from "lodash/cloneDeep"
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

let model = reactive<any>({})
onMounted(() => {
  let m: any = {}
  props.options.map((item: FormOptions) => {
    m[item.prop!] = item.value
  })
  model = cloneDeep(m)
  console.log(model);

})
</script>

<style scoped>
</style>