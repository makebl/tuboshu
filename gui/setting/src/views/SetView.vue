<script setup>
const message = useMessage();
const settings = ref({})
const isDarkMode = ref(false)
const isEdgeAdsorption = ref(false)
const version = ref({
  version: '加载中...',
  electron: '--',
  chrome: '--'
})

onMounted(async () => {
  version.value = await window.myApi.getVersion();
  settings.value = await window.myApi.getSettings();

  let temp = settings.value.find((item) => item.name === 'isWindowEdgeAdsorption');
  isEdgeAdsorption.value = (temp.value === 1);
})



const changeSwitch = async (val) => {
  const setting = { name : 'isWindowEdgeAdsorption', value: val ? 1 : 0}
  window.myApi.updateSetting(setting);
  message.success(`设置已更新,请重新启动`)
}
</script>

<template>
  <div id="content-main">
    <n-alert :show-icon="false" type="info" style="margin-bottom: 1rem;">
      <n-h3 style="margin-bottom: 0;">通用设置</n-h3>
    </n-alert>

    <n-alert :show-icon="false">
      1.设置改变后，重启程序才能生效。<br>
    </n-alert>

    <n-card embedded :bordered="true" style="margin-top:1rem;">
      <div class="wrap">
        <div class="card">
          <div class="vleft">窗口边缘吸附：</div>
          <div class="vright">
            <n-switch size="medium" v-model:value="isEdgeAdsorption" @update:value="changeSwitch" style="font-size:12px;" >
              <template #checked>开启</template>
              <template #unchecked>关闭</template>
            </n-switch>
          </div>
        </div>
      </div>
    </n-card>

    <n-card embedded :bordered="true" style="margin-top: 20px;">
        <span style="padding-right: 20px;">
          当前版本: <n-tag :bordered="false" type="info" size="medium">{{version.version}}</n-tag>
        </span>
      <span>
          获取新版：<n-tag :bordered="false" type="info" size="medium"><a target="_blank" href="https://github.com/deepshit2025/tuboshu/releases">点击下载</a></n-tag>
        </span>
    </n-card>

  </div>
</template>

<style scoped>
.card{
  display: flex;
  min-width: 0;
  gap: 20px;
}

</style>