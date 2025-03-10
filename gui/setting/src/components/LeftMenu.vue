<script setup>
import { h } from 'vue'
import { NMenu } from "naive-ui"
import { RouterLink } from 'vue-router'

const menuOptions = [
  {
    label: () => h(RouterLink, {to: {name: 'display'}}, { default: () => '站点排序' }),
    key: 'display',
  },
  {
    label: () => h(RouterLink, {to: {name: 'list'}}, { default: () => '设置站点' }),
    key: 'list',
  },
  {
    label: () => h(RouterLink, {to: {name: 'shortcut'}}, { default: () => '快捷键' }),
    key: 'shortcut',
  },
  {
    label: () => h(RouterLink, {to: {name: 'feedback'}}, { default: () => '使用反馈' }),
    key: 'feedback',
  },

  // {
  //   label: () => h(RouterLink, {to: {name: 'plan'}}, { default: () => '更新计划' }),
  //   key: 'plan',
  // }
]
function handleUpdateValue(key, item){
  console.log('update value', key, item)
}

</script>

<template>
  <n-menu :options="menuOptions" @update:value="handleUpdateValue" />
</template>

<style scoped>

</style>