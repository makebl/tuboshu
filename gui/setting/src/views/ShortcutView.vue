<script setup>
import {onMounted} from "vue";

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

const list = ref([]);
onMounted(async () => {
  list.value = await window.myApi.getShortcuts();
});
</script>

<template>
  <div id="content-main">
    <n-alert :show-icon="false" type="info" style="margin-bottom: 1rem;">
      <n-h3 style="margin-bottom: 0;">快捷键</n-h3>
    </n-alert>

    <n-alert :show-icon="false">
      1.快捷键不区分大小写,先按住Ctrl键，再按其它快捷键；<br>
      2.在macOS系统：Ctrl === Command键，Alt === Option键；<br>
      3.自定义快捷键时，先获取焦点，然后在输入框中按其它快捷键；<br>
    </n-alert>

    <div class="box">
      <div class="title">
        <div style="width:250px;"> 功能描述 </div>
        <div style="width: 200px;"> 自定义快捷键 </div>
        <div class="switch"> 是否禁用 </div>
      </div>
      <template v-for="element in list">
        <ShortItem :element="element" />
      </template>
    </div>
  </div>
</template>

<style scoped>
.box{
  margin-top: 1rem;
  border: 1px solid #efeff5;
}

.title{
  font-size: 15px;
  padding: 0.5em;
  border-bottom: 1px solid var(--color-border);
  background-color: var(--color-background-mute);
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  align-items: center;
}
.switch{
  margin-left: auto;
  width: 100px;
  text-align: center;
}
</style>