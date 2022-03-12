<template>
  <div>
    <m-choose-time
      :startOption="{ clearable: true }"
      @startChange="startChange"
      @endChange="endChange"
    ></m-choose-time>
    <br />
    <br />
    <m-choose-date :startOption="{size:'small'}" :disableToday="false" @endChange="endDateChange" @startChange="startDateChange"></m-choose-date>
  </div>
</template>

<script setup lang="ts">
interface endValue {
  startTime: string,
  endTime: string
}
interface endDate {
  startDate: string,
  endDate: string
}
const startChange = (val: string) => {
  console.log('startChange', val);

}
const endChange = (val: endValue) => {
  console.log('endChange', val);

}
const startDateChange = (val: string) => {
  console.log('startDateChange', val);

}
const endDateChange = (val: endDate) => {
  console.log('endDateChange', val);

}
</script>

<style lang="scss" scoped>
</style>