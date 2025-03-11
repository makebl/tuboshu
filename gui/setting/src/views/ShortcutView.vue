<script setup>
const columns = [
  {
    title: "快捷键",
    key: "name",
    width: 200
  },
  {
    title: "功能描述",
    key: "desc"
  }];

const data = [
  {
    name: "Ctrl + Q",
    desc: "退出软件"
  },
  {
    name: "Ctrl + H",
    desc: "隐藏/显示 软件窗口"
  },

  {
    name: "Ctrl + T",
    desc: "取消/设置 窗口置顶"
  },
  {
    name: "Ctrl + O",
    desc: "恢复默认窗口"
  },
  {
    name: "Ctrl + [",
    desc: "最小化窗口"
  },
  {
    name: "Ctrl + ]",
    desc: "最大化窗口"
  },

  {
    name: "Ctrl + ,",
    desc: "屏幕左边小窗"
  },
  {
    name: "Ctrl + .",
    desc: "屏幕右边小窗"
  },
  {
    name: "Ctrl + R",
    desc: "刷新当前页面"
  },
];
</script>

<template>
  <div id="content-main">
    <n-alert :show-icon="false" type="info" style="margin-bottom: 1rem;">
      <n-h3 style="margin-bottom: 0;">快捷键</n-h3>
    </n-alert>

    <n-alert :show-icon="false">
      1.快捷键不区分大小写,先按住Ctrl键，再按其它快捷键；<br>
      2.在macOS系统：Ctrl === Command键，Alt === Option键；<br>
    </n-alert>

    <div class="box">
      <n-space vertical :size="12">
        <n-data-table
            size="small"
            :columns="columns"
            :data="data"
        />
      </n-space>

    </div>
  </div>
</template>

<style scoped>
.box{
  margin-top: 1rem;
}
</style>