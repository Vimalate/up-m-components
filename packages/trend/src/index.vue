<template>
  <div class="trend" :style="{ color: textColor }">
    <slot v-if="slots.default"></slot>
    <div class="text" v-else>{{ text }}</div>
    <div class="icon">
      <!-- <el-icon-arrowup :style="{ color: upIconColor }" v-if="type === 'up'"></el-icon-arrowup>
      <el-icon-arrowdown :style="{ color: downIconColor }" v-else></el-icon-arrowdown>-->
      <component :is="`el-icon-${toLine(upIcon)}`" v-if="type === 'up'"></component>
      <component v-else :is="`el-icon-${toLine(downIcon)}`"></component>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useSlots, computed } from 'vue'
import { toLine } from "../../utils/index"
let props = defineProps({
  type: {
    type: String,
    default: 'up'
  },
  text: {
    type: String,
    default: '文字'
  },
  upIcon: {
    type: String,
    default: 'ArrowUp'
  },
  downIcon: {
    type: String,
    default: 'ArrowDown'
  },
  upIconColor: {
    type: String,
    default: '#f5222d'
  },
  downIconColor: {
    type: String,
    default: '#52c41d'
  },
  upTextColor: {
    type: String,
    default: '#f5222d'
  },
  downTextColor: {
    type: String,
    default: '#52c41d'
  }
})

let slots = useSlots()

const textColor = computed(() => {
  return props.type === 'up' ? props.upTextColor : props.downTextColor
})
</script>

<style lang="scss" scoped>
.trend {
  display: flex;
  align-items: center;
  font-size: 14px;
  .text {
    font-size: 14px;
    // margin-right: 4px;
  }
  .icon {
    svg {
      width: 0.8em;
      height: 0.8em;
      margin-left: 4px;
    }
  }
}
</style>