<script setup>
// import { RouterLink, RouterView } from 'vue-router'
import LeftMenu from "@/components/LeftMenu.vue";
import {darkTheme} from "naive-ui";

const theme = ref('null');
// 检测系统主题
const checkTheme = () => {
  const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  console.log('isDark', isDark);
  theme.value = isDark ? darkTheme : null;
};

const handleChange = (e) => {
  checkTheme();
};

const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
onMounted(() => {
  checkTheme(); // 初始化检测
  mediaQuery.addEventListener('change', handleChange);
});

onUnmounted(() => {
  mediaQuery.removeEventListener('change', handleChange);
});

</script>


<template>

  <n-message-provider>
  <div id="left">
    <n-config-provider :theme="theme">
    <LeftMenu />
    </n-config-provider>
  </div>

  <div id="right">
    <n-config-provider :theme="theme">
    <RouterView />
    </n-config-provider>
  </div>
  </n-message-provider>

</template>


<style scoped>

</style>
