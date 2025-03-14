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

const emit = defineEmits(['edit', 'remove'])
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

const changeSwitch = (val)=>{
  let menu = Object.assign(toRaw(props.element), { isOpen: val});
  console.log("menu:",menu)
  window.myApi.updateMenu(menu);
}

</script>

<template>
  <div class="wrap">

      <n-image
          width="40"
          :src="element.img"
      />

    <div class="link">
      <div> {{ element.tag }}</div>
      <div> {{ element.url }}</div>
    </div>
    <div class="options">
      <n-dropdown trigger="click" :options="options" @select="handleSelect">
        <span class=opt-box @click="handleClick">
          <n-icon size="30">
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 28 28"><g fill="none"><path d="M14 8.75a2.75 2.75 0 1 1 0-5.5a2.75 2.75 0 0 1 0 5.5zm0 8a2.75 2.75 0 1 1 0-5.5a2.75 2.75 0 0 1 0 5.5zM11.25 22a2.75 2.75 0 1 0 5.5 0a2.75 2.75 0 0 0-5.5 0z" fill="currentColor"></path></g></svg>
          </n-icon>
        </span>
      </n-dropdown>
    </div>
    <div class="switch">
      <n-switch size="medium" v-model:value="element.isOpen" @update:value="changeSwitch" style="font-size:12px;" >
        <template #checked>
          开启
        </template>
        <template #unchecked>
          关闭
        </template>
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
.switch{
  text-align: center;
  vertical-align: center;
  width: 100px;
  flex-shrink: 0;
}
.options{
  width: 60px;
  text-align: center;
  margin-left: auto;
  flex-shrink: 0;
}
.opt-box{
  cursor: pointer;
}
.wrap:hover {
  background-color: #f0f0f0;
}

</style>
