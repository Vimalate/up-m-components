<template>
  <div>
    <m-calendar :events="events"></m-calendar>
  </div>
</template>

<script setup lang="ts">
import { EventItem } from '../../components/calendar/src/types';
import { ref } from 'vue'
const events = ref<EventItem[]>([
  {
    title: '购物',
    start: '2022-3-24 08:00',
    end: '2022-3-25 12:00'
  },
  {
    title: '旅游',
    start: '2022-4-01 09:00',
    end: '2022-4-05 12:00'
  }
])
</script>

<style lang="scss" scoped>
</style>