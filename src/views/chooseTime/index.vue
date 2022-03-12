<template>
  <div>
    <m-choose-time
      :startOption="{ clearable: true }"
      @startChange="startChange"
      @endChange="endChange"
    ></m-choose-time>
    <br />
    <br />
    <m-choose-date></m-choose-date>
  </div>
</template>

<script setup lang="ts">
interface endValue {
  startTime: string,
  endTime: string
}
const startChange = (val: string) => {
  console.log('startChange', val);

}
const endChange = (val: endValue) => {
  console.log('endChange', val);

}
</script>

<style lang="scss" scoped>
</style>