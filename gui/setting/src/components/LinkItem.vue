<script setup>
const props = defineProps({
  element: Object
})
const show = ref(false);
const options = [
  {
    label: "修改",
    key: "modify"
  },
  {
    label: "删除",
    key: "remove"
  }
];

const emit = defineEmits(['edit', 'remove', 'jsEditor'])
const handleSelect = (key) => {
   if(key === 'modify'){
      emit('edit', props.element)
   }else{
      emit('remove', props.element)
   }
};
const handleClick = ()=> {
  show.value = !show.value;
};

const handleClickJsEditor = ()=>{
  emit('jsEditor', props.element.name)
}

const changeSwitch = (val)=>{
  let menu = Object.assign(toRaw(props.element), { isOpen: val});
  window.myApi.updateMenu(menu);
}

</script>

<template>
  <div class="wrap">
    <n-image width="40" :src="element.img"/>
    <div class="link">
      <div> {{ element.tag }}</div>
      <div> {{ element.url }}</div>
    </div>

    <div class="options">
      <n-dropdown trigger="click" :options="options" @select="handleSelect">
        <span @click="handleClick">
          <n-icon size="30">
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 28 28"><g fill="none"><path d="M14 8.75a2.75 2.75 0 1 1 0-5.5a2.75 2.75 0 0 1 0 5.5zm0 8a2.75 2.75 0 1 1 0-5.5a2.75 2.75 0 0 1 0 5.5zM11.25 22a2.75 2.75 0 1 0 5.5 0a2.75 2.75 0 0 0-5.5 0z" fill="currentColor"></path></g></svg>
          </n-icon>
        </span>
      </n-dropdown>
    </div>

    <div class="jseditor">
      <span @click="handleClickJsEditor">
        <n-icon size="30">
          <svg t="1742278022992" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4565" width="128" height="128"><path d="M847.872 240.128v688c0 26.56-21.408 48-48 48h-576c-26.56 0-48-21.44-48-48v-832c0-26.592 21.44-48 48-48h432z" fill="#E9EDED" p-id="4566"></path><path d="M160 768.128v160c0 35.456 28.544 64 64 64h576c35.456 0 64-28.544 64-64v-160H160z" fill="#25B39E" p-id="4567"></path><path d="M847.872 240.128h-144c-26.56 0-48-21.44-48-48v-144" fill="#25B39E" p-id="4568"></path><path d="M432.256 320.128c-35.2 0-64 28.8-64 64v32c0 18.016-14.016 32-32 32a16 16 0 0 0-3.2 0.256 16 16 0 0 0-12.384 11.232 16 16 0 0 0-0.352 1.504 16 16 0 0 0 0 0.064 16 16 0 0 0 15.936 18.944c17.984 0 32 13.984 32 32v32c0 35.2 28.8 64 64 64a16 16 0 1 0 0-32c-18.016 0-32-13.984-32-32v-32c0-19.136-8.736-36.256-22.208-48a63.68 63.68 0 0 0 22.208-48v-32c0-18.016 13.984-32 32-32a16 16 0 1 0 0-32z m157.856 0a16 16 0 0 0 1.632 32c18.016 0 32 13.984 32 32v32c0 19.168 8.736 36.224 22.208 48-13.44 11.744-22.208 28.864-22.208 48v32c0 18.016-13.984 32-32 32a16 16 0 1 0 0 32c35.2 0 64-28.8 64-64v-32c0-18.016 14.016-32 32-32a16 16 0 0 0 10.368-3.616 16 16 0 0 0 1.216-1.152 16 16 0 0 0-11.584-27.232c-17.984 0-32-13.984-32-32v-32c0-35.2-28.8-64-64-64a16 16 0 0 0-1.6 0zM512 367.936a32 32 0 0 0-32 32 32 32 0 0 0 32 32 32 32 0 0 0 32-32 32 32 0 0 0-32-32z m0 96a32 32 0 0 0-32 32 32 32 0 0 0 16.256 27.872l-14.4 28.864a16 16 0 1 0 28.64 14.272l24-48.256a32 32 0 0 0 9.44-21.504 16 16 0 0 0 0-0.192 32 32 0 0 0 0.064-1.056 32 32 0 0 0-32-32z" fill="#25B39E" p-id="4569"></path><path d="M335.872 800a16 16 0 0 0-15.744 16.256V912c0 9.152-6.848 16-16 16a15.616 15.616 0 0 1-16-16 16 16 0 0 0-16.256-16.192 16 16 0 0 0-15.744 16.192c0 26.304 21.696 48 48 48 24.768 0 45.12-19.296 47.488-43.52a16 16 0 0 0 0.512-4.224v-96a16 16 0 0 0-16.256-16.256z m94.4 0.128a16 16 0 0 0-2.016 0.384c-24.64 1.92-44.384 22.528-44.384 47.616 0 25.28 20.096 46.08 44.992 47.68a16 16 0 0 0 3.008 0.32h32c9.152 0 16 6.848 16 16 0 9.152-6.848 16-16 16h-64a16 16 0 1 0 0 32h64a16 16 0 0 0 3.328-0.384 48.096 48.096 0 0 0 44.672-47.616c0-25.152-19.84-45.888-44.544-47.68a16 16 0 0 0-3.456-0.32h-30.88a16 16 0 0 0-1.12 0 15.616 15.616 0 0 1-16-16c0-9.152 6.848-16 16-16h64a16 16 0 1 0 0-32h-62.88a16 16 0 0 0-1.12 0 16 16 0 0 0-1.6 0z" fill="#E9EDED" p-id="4570"></path></svg>
        </n-icon>
      </span>
    </div>

    <div class="switch">
      <n-switch size="medium" v-model:value="element.isOpen" @update:value="changeSwitch" style="font-size:12px;" >
        <template #checked>开启</template>
        <template #unchecked>关闭</template>
      </n-switch>
   </div>
  </div>
</template>

<style scoped>
.wrap {
  background-color: #fefefe;
  margin: 10px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  place-items: center;
  border-bottom: 1px dashed var(--color-border);
  gap: 10px;
}
.link{
  font-size: 14px;
  color: #333;
}

.jseditor{
  width: 60px;
  text-align: center;
  flex-shrink: 0;
}
.options{
  width: 60px;
  text-align: center;
  margin-left: auto;
  flex-shrink: 0;
}

.jseditor>span, .options>span{
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  border-radius: 50%;
  transition: background-color 0.3s;
  cursor: pointer;
}

.jseditor >span:hover, .options>span:hover{
  background-color: #ddd;
  box-shadow: 0 0 2px #fff;
}

.switch{
  text-align: center;
  vertical-align: center;
  width: 100px;
  flex-shrink: 0;
}

.wrap:hover {
  background-color: #f0f0f0;
}

</style>
