<template>
  <!-- <el-menu default-active="1" class="el-menu-vertical-demo" :collapse="collapse">
    <el-menu-item index="1">
      <el-icon>
        <el-icon-menu />
      </el-icon>
      <span>首页</span>
    </el-menu-item>
    <el-menu-item index="2">
      <el-icon>
        <el-icon-document />
      </el-icon>
      <span>图标选择器</span>
    </el-menu-item>
    <el-menu-item index="3">
      <el-icon>
        <el-icon-setting />
      </el-icon>
      <span>趋势标记</span>
    </el-menu-item>
  </el-menu>-->

  <m-menu :collapse="collapse" router :defaultActive="$route.path" :data="menu"></m-menu>
</template>

<script setup lang="ts">
let props = defineProps<{
  collapse: boolean
}>()

let menu = [
  {
    icon: 'HomeFilled',
    name: '首页',
    index: '/'
  },
  {
    icon: 'Check',
    name: '图标选择器',
    index: '/chooseIcon'
  },
   {
    icon: 'Menu',
    name: '导航菜单',
    index: '/menu'
  },
  {
    icon: 'Location',
    name: '省市区选择',
    index: '/chooseArea'
  },
  {
    icon: 'Sort',
    name: '趋势标记',
    index: '/trend'
  },
  {
    icon: 'Flag',
    name: '城市选择',
    index: '/chooseCity'
  },
  {
    icon: 'Loading',
    name: '进度条',
    index: '/progress'
  },
  {
    icon: 'Calendar',
    name: '日历',
    index: '/calendar'
  },
  {
    icon: 'ToiletPaper',
    name: '时间选择',
    index: '/chooseTime'
  },
  {
    icon: 'Grid',
    name: '表单',
    index: '/form'
  },
  {
    icon: 'List',
    name: '表格',
    index: '/table'
  },
]

</script>

<style lang="scss" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
}
</style>