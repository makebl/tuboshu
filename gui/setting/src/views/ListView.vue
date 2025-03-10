<script setup>
import NewDrawer from "@/components/NewDrawer.vue";
import {onMounted} from "vue";

const ele = ref({});
const show = ref(false);
const list = ref([]);

onMounted(async () => {
  const config = await window.myApi.getConfig();
  list.value = [...config.openMenus, ...config.closeMenus];
});

const addNew = () => {
  ele.value = {tag: '', url: '', name:'', isOpen: true, isNew: true};
  show.value = true;
};

const handleEdit = (element) => {
  element.isNew = false;
  ele.value = element;
  show.value = true;
};

const handleRemove = (element) => {
  const index = list.value.findIndex(item => item.url === element.url);
  if (index !== -1) {
    list.value.splice(index, 1);
  }
  window.myApi.removeMenu(toRaw(element));
};

const handleSaveForm = (element) => {
  if(element.isNew === true){
    element.isNew = false;
    element.name = element.url;
    list.value.unshift(element)
    window.myApi.addMenu(toRaw(element));
  }else{
    list.value.forEach(item => {
      if (item.name === element.name) {
        Object.assign(item, element);
        window.myApi.updateMenu(toRaw(item));
      }
    })
  }
};
</script>

<template>
  <div id="content-main">
      <n-alert :show-icon="false" type="info" style="margin-bottom: 1rem;">
        <n-h3 style="margin-bottom: 0;">设置站点</n-h3>
      </n-alert>

    <n-alert :show-icon="false">
      1.点击“新增站点”，可自行添加站点，也可修改或者删除站点；<br>
      2.站点网址须保证唯一，不可重复。<br>
    </n-alert>

    <div class="box">
      <div class="box-title">
          <n-button color="#2080f0" @click="addNew">
          <template #icon>
            <n-icon color="#fff">
              <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 3v4a1 1 0 0 0 1 1h4"></path><path d="M17 21H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7l5 5v11a2 2 0 0 1-2 2z"></path><path d="M12 11v6"></path><path d="M9 14h6"></path></g></svg>
            </n-icon>
          </template>
          新增站点
        </n-button>
      </div>
      <div class="wrap">
        <template v-for="element in list">
          <LinkItem :element="element" @edit="handleEdit" @remove="handleRemove" />
        </template>
      </div>
    </div>
  </div>

  <NewDrawer v-model:show="show" :element="ele" @saveForm="handleSaveForm" />

</template>

<style scoped>
.box{
  margin-top: 1rem;
  flex: 1;
  border: 1px solid var(--color-border);
}
.wrap{
  padding: 0.5em;
}

.box-title{
  font-size: 15px;
  padding: 0.5em;
  border-bottom: 1px solid var(--color-border);
  background-color: var(--color-background-mute);
}
</style>