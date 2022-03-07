<template>
  <m-choose-area @change="changeArea"></m-choose-area>
</template>

<script lang="ts" setup>
// import ChooseArea from "../../components/chooseArea/src/index.vue"
const changeArea = (val: any) => {
  console.log(val);

}
</script>

<style lang="scss" scoped>
</style>