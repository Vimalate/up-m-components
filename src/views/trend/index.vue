<template>
  <!-- <div class="trend-wrap">
    <m-trend text="营业额"></m-trend>
    <m-trend text="销售额" style="margin-left: 20px;" type="down"></m-trend>
  </div>
   <div class="trend-wrap">
    <m-trend text="营业额" upIconColor="orange"></m-trend>
    <m-trend text="销售额" downIconColor="blue" style="margin-left: 20px;" type="down"></m-trend>
  </div>-->
  <div class="trend-wrap">
    <m-trend upIconColor="orange">营业额</m-trend>
    <m-trend upIcon="CaretTop">营业额</m-trend>
  </div>

  <div class="trend-wrap">
    <m-trend upTextColor="#ccc" text="营业额"></m-trend>
    <m-trend text="销售额" style="margin-left: 20px;" type="down"></m-trend>
  </div>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>
.trend-wrap {
  display: flex;
}
</style>