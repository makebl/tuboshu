<script setup>
// import { RouterLink, RouterView } from 'vue-router'
import LeftMenu from "@/components/LeftMenu.vue";
</script>


<template>
  <n-message-provider>
  <div id="left">
    <LeftMenu />
  </div>

  <div id="right">
    <RouterView />
  </div>
  </n-message-provider>
</template>


<style scoped>


#right{}
</style>
