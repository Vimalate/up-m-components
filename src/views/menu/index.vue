<template>
  <div style="width:200px">
    <!-- 普通菜单 -->
    <m-menu defaultActive="1" name="a" index="b" icon="c" children="d"  :data="menu"></m-menu>
    <!-- 无限层级菜单 -->
    <!-- <m-infinite-menu defaultActive="1" active-text-color="red"  name="a" index="b" icon="c" children="d" :data="menu2"></m-infinite-menu> -->
  </div>
</template>

<script lang="ts" setup>
let menu = [
  {
    a: '导航1',
    b: '1',
    c: 'document'
  },
  {
    a: '导航2',
    b: '2',
    c: 'document'
  },
  {
    a: '导航3',
    b: '3',
    c: 'document',
    d: [
      {
        a: '导航3-1',
        b: '4',
        c: 'document',
      }
    ]
  }
]

const menu2 = [
  {
    a: '导航1',
    b: '1',
    c: 'Document'
  },
  {
    a: '导航2',
    b: '2',
    c: 'Document'
  },
  {
    a: '导航3',
    b: '3',
    c: 'Document',
    d: [
      {
        a: '导航3-1',
        b: '4',
        c: 'Document',
        d: [
          {
            a: '导航3-1-1',
            b: '5',
            c: 'Document',
          }
        ]
      }

    ]
  }
]
</script>

<style scoped>
</style>