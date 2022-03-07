<template>
  <div>
    <el-select clearable placeholder="请选择省份" v-model="province">
      <el-option v-for="item in areas" :label="item.name" :key="item.code" :value="item.code"></el-option>
    </el-select>
    <el-select
      clearable
      :disabled="!province"
      style="margin:0 10px"
      placeholder="请选择城市"
      v-model="city"
    >
      <el-option v-for="item in selectCity" :key="item.code" :label="item.name" :value="item.code"></el-option>
    </el-select>
    <el-select clearable :disabled="!province || !city" placeholder="请选择区域" v-model="area">
      <el-option v-for="item in selectArea" :key="item.code" :label="item.name" :value="item.code"></el-option>
    </el-select>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch } from "vue";
import allAeras from "../lib/pca-code.json"
export interface AreaItem {
  name: string,
  code: string,
  children?: AreaItem[]
}
export interface Data {
  name: string,
  code: string,
}


let province = ref<string>('')
let city = ref<string>('')
let area = ref<string>('')
const areas = ref(allAeras)

const selectCity = ref<AreaItem[]>([])

const selectArea = ref<AreaItem[]>([])

const emits = defineEmits(['change'])

watch(() => province.value, val => {
  if (val) {
    const cities = areas.value.find(item => item.code === province.value)?.children!
    selectCity.value = cities
  }
  city.value = ''
  area.value = ''
})

watch(() => city.value, val => {
  if (val) {
    const area = selectCity.value.find(item => item.code === city.value)?.children!
    selectArea.value = area
  }
  area.value = ''
})

watch(() => area.value, val => {
  if (val) {
    const provinceData: Data = {
      code: province.value,
      name: province.value && allAeras.find(item => item.code === province.value)!.name
    }
    const cityData: Data = {
      code: city.value,
      name: city.value && selectCity.value.find(item => item.code === city.value)!.name
    }
    const areaData: Data = {
      code: val,
      name: val && selectArea.value.find(item => item.code === val)!.name
    }
    emits('change', {
      province: provinceData,
      city: cityData,
      area: areaData
    })
  }

})

</script>

<style lang="scss" scoped>
</style>