<script setup>
const message = useMessage();
const props = defineProps({
  element: Object,
  show: Boolean
})

const uploader = ref(null)
const formData = reactive({tag: '', url: '', proxy:''})
watch(() => props.element, (newVal) => {
  Object.assign(formData, newVal || {})
}, { immediate: true })

const emit = defineEmits(['update:show', 'saveForm'])
const title =  computed(()=>{
  return props.element.isNew !== false ? '新增站点' : '编辑站点'
})

const handleClose = () => {
  emit('update:show', false)
}
const isValidUrl = (url) => {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};
const handleSave = () => {
  if (!formData.tag) {
    return message.error("标签名称不能为空");
  }
  if (!isValidUrl(formData.url)) {
    return message.error("请输入合法 URL");
  }
  formData.img = uploader.value.getUrl();
  emit('saveForm',  JSON.parse(JSON.stringify(formData)))
  emit('update:show', false)
  return message.success("保存成功");
}
</script>

<template>
  <n-drawer :show="show" @update:show="(value) => emit('update:show', value)" :width="502" placement="right">
    <n-drawer-content :title="title" closable>
      <div class="flex-row">
        <ImageUpload ref="uploader" :imgUrl="element.img" />
        <n-input type="text" placeholder="标签名称" v-model:value="formData.tag" clearable />
      </div>

      <div class="flex-row" style="margin-top: 30px">
        <n-input type="text" size="large" placeholder="网页地址 https://" v-model:value="formData.url" clearable />
      </div>

      <div class="flex-row" style="margin-top: 30px">
        <n-input type="text" size="large" placeholder="设置代理 (非必要勿填)" v-model:value="formData.proxy" clearable />
      </div>

      <br>
      <n-alert :show-icon="false">
        <p style="color:#888;">
          代理格式规则:<br>
          HTTP/HTTPS 代理：http://host:port <br>
          SOCKS 代理：socks://host:port<br>
          SOCKS5 代理：socks5://host:port<br>
          支持认证：socks5://user:password@host:port<br>
        </p>
      </n-alert>

      <template #footer>
        <div class="flex-footer">
          <n-button color="#888" @click="handleClose">
            <template #icon>
              <n-icon color="#fff">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><path d="M21 19.1H3V5h18v14.1zM21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z" fill="currentColor"></path><path d="M14.59 8L12 10.59L9.41 8L8 9.41L10.59 12L8 14.59L9.41 16L12 13.41L14.59 16L16 14.59L13.41 12L16 9.41z" fill="currentColor"></path></svg>
              </n-icon>
            </template>
            取消
          </n-button>

          <n-button color="#2080f0" @click="handleSave">
            <template #icon>
              <n-icon color="#fff">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none"><path d="M18.5 20a.5.5 0 0 1-.5.5h-5v1c0 .171-.017.338-.05.5H18a2 2 0 0 0 2-2V9.828a2 2 0 0 0-.586-1.414l-5.829-5.828a.491.491 0 0 0-.049-.04a.63.63 0 0 1-.036-.03a2.072 2.072 0 0 0-.219-.18a.652.652 0 0 0-.08-.044l-.048-.024l-.05-.029c-.054-.031-.109-.063-.166-.087a1.977 1.977 0 0 0-.624-.138c-.02-.001-.04-.004-.059-.007A.605.605 0 0 0 12.172 2H6a2 2 0 0 0-2 2v7h1.5V4a.5.5 0 0 1 .5-.5h6V8a2 2 0 0 0 2 2h4.5v10zm-5-15.379L17.378 8.5H14a.5.5 0 0 1-.5-.5V4.621zM5 12h3v2H5v-2zm-2.5 0H4v2.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5V12h.379a1.5 1.5 0 0 1 1.06.44l1.122 1.12A1.5 1.5 0 0 1 12 14.622V21.5a1.5 1.5 0 0 1-1.5 1.5H10v-5.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0-.5.5V23h-.5A1.5 1.5 0 0 1 1 21.5v-8A1.5 1.5 0 0 1 2.5 12zM9 18v5H4v-5h5z" fill="currentColor"></path></g></svg>
              </n-icon>
            </template>
            保存
          </n-button>
        </div>
      </template>
    </n-drawer-content>
  </n-drawer>
</template>

<style scoped>
.flex-row{
  display: flex;
  flex-direction: row;
  gap: 1rem;
  align-items: flex-end;
}

.flex-footer{
  display: flex;
  flex-direction: row;
  gap: 1rem;
  align-items: center;
}
</style>
