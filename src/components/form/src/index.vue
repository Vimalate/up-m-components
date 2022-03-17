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
          :placeholder="item.placeholder"
          v-model="model[item.prop!]"
          :is="`el-${item.type}`"
          v-bind="item.attrs"
        ></component>
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
import { tr } from 'element-plus/lib/locale';
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
</script>

<style scoped>
</style>