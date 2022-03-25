<template>
  <el-button @click="handleClick" type="primary">
    <slot></slot>
  </el-button>
  <div class="m-choose-icon-dialog">
    <el-dialog top="10vh" v-model="dialogVisible" :title="title">
      <div class="container">
        <div
          class="item"
          @click="clickItem(item)"
          v-for="(item, index) in Object.keys(elIcons)"
          :key="index"
        >
          <div class="text">
            <!-- 动态组件 -->
            <component :is="`el-icon-${toLine(item)}`"></component>
          </div>
          <div class="icon">{{ item }}</div>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script lang="ts" setup>
import * as elIcons from "@element-plus/icons-vue"
import { watch, ref } from "vue"
import { useCopy } from "../../hooks/useCopy";
import { toLine } from "../../utils/index"
let props = defineProps<{
  title: string,
  visible: boolean
}>()
let dialogVisible = ref<boolean>(props.visible)

let emits = defineEmits(['update:visible'])
const handleClick = () => {
  emits('update:visible', !props.visible)
}

const clickItem = (item: string) => {
  console.log(item);
  const text = `<el-icon-${toLine(item)}/>`
  useCopy(text)
  dialogVisible.value = false
}

watch(() => props.visible, val => {
  dialogVisible.value = val
})
watch(() => dialogVisible.value, val => {
  dialogVisible.value = val
  emits('update:visible', val)
})
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  .item {
    width: 25%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-bottom: 20px;
    cursor: pointer;
    height: 70px;
    .text {
      font-size: 14px;
    }
  }
  svg {
    width: 2em;
    height: 2em;
  }
}
.icon {
  flex: 1;
}
</style>