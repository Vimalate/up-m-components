<template>
  <div style="width:200px">
    <!-- 普通菜单 -->
    <!-- <m-menu defaultActive="2" a="1" :data="menu"></m-menu> -->
    <!-- 无限层级菜单 -->
    <m-infinite-menu defaultActive="1" active-text-color="red" :data="menu2"></m-infinite-menu>
  </div>
</template>

<script lang="ts" setup>
let menu = [
  {
    name: '导航1',
    index: '1',
    icon: 'document'
  },
  {
    name: '导航2',
    index: '2',
    icon: 'document'
  },
  {
    name: '导航3',
    index: '3',
    icon: 'document',
    children: [
      {
        name: '导航3-1',
        index: '4',
        icon: 'document',
      }
    ]
  }
]

const menu2 = [
  {
    name: '导航1',
    index: '1',
    icon: 'document'
  },
  {
    name: '导航2',
    index: '2',
    icon: 'document'
  },
  {
    name: '导航3',
    index: '3',
    icon: 'document',
    children: [
      {
        name: '导航3-1',
        index: '4',
        icon: 'document',
        children: [
          {
            name: '导航3-1-1',
            index: '5',
            icon: 'document',
          }
        ]
      }

    ]
  }
]
</script>

<style scoped>
</style>