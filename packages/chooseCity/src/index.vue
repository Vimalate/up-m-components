<template>
  <el-popover placement="bottom-start" v-model:visible="visible" :width="450" trigger="click">
    <template #reference>
      <div class="city" @click="visible = !visible">
        <div>{{ result }}</div>
        <div class="icon">
          <el-icon-arrowdown :class="{ rotate: visible }"></el-icon-arrowdown>
        </div>
      </div>
    </template>
    <div class="content">
      <el-row align="middle">
        <el-col :span="8">
          <el-radio-group v-model="radioValue" size="small">
            <el-radio-button label="按城市"></el-radio-button>
            <el-radio-button label="按省份"></el-radio-button>
          </el-radio-group>
        </el-col>
        <el-col :offset="1" :span="15">
          <el-select size="small" v-model="selectValue" filterable placeholder="Select">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-col>
      </el-row>
    </div>
  </el-popover>
</template>

<script setup lang="ts">
import { ref } from 'vue'
let result = ref<string>('请选择')
let visible = ref<boolean>(false)
let radioValue = ref<string>('按城市')
let selectValue = ref<string>('')
const options = ref(
  [
    {
      value: 'Option1',
      label: 'Option1',
    },
    {
      value: 'Option2',
      label: 'Option2',
    },
    {
      value: 'Option3',
      label: 'Option3',
    },
    {
      value: 'Option4',
      label: 'Option4',
    },
    {
      value: 'Option5',
      label: 'Option5',
    },
  ]
) 
</script>

<style lang="scss" scoped>
.city {
  display: flex;
  align-items: center;
  width: fit-content;
  cursor: pointer;
  .icon {
    display: flex;
    align-items: center;
    margin-left: 2px;
  }
  .rotate {
    transform: rotate(180deg);
  }
  svg {
    width: 1em;
    height: 1em;
    transition: all 0.25s linear;
  }
}
</style>