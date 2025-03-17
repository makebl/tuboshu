<script setup>

const version = ref({
  version: '加载中...',
  electron: '--',
  chrome: '--'
})

onMounted(async () => {
  version.value = await window.myApi.getVersion();
})

</script>

<template>
  <div id="content-main">
    <n-alert :show-icon="false" type="info" style="margin-bottom: 1rem;">
      <n-h3 style="margin-bottom: 0;">版本信息</n-h3>
    </n-alert>

    <n-card title="📦 版本信息" embedded :bordered="true">

      <n-space size="small" style="margin-top: 10px">
        <n-tag :bordered="false" type="info" size="small">Chrome:</n-tag>{{ version.chrome }}<br>
      </n-space>

      <n-space size="small" style="margin-top: 10px">
        <n-tag :bordered="false" type="info" size="small">Electron:</n-tag>{{ version.electron }}<br>
      </n-space>

      <n-space size="small" style="margin-top: 10px">
        <n-tag :bordered="false" type="info" size="small">当前版本:</n-tag>{{version.version}}<br>
      </n-space>

      <n-space size="small" style="margin-top: 10px">
        <n-tag :bordered="false" type="info" size="small">GitHub:</n-tag>
        <a target="_blank" href="https://github.com/deepshit2025/tuboshu/releases">获取最新版本</a><br>
      </n-space>
    </n-card>
  </div>
</template>

<style scoped>
.n-card{
  margin-top: 1rem;
}
</style>