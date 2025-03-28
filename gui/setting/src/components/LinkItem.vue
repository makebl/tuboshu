<script setup>
const message = useMessage();
const props = defineProps({
  element: Object
})

const svgIcon = ref(null);
const icon = ref('');
watch(() => props.element, (newVal) => {
  icon.value = newVal.img
}, { immediate: true })

const show = ref(false);
const options = [
  {
    label: "克隆",
    key: "clone"
  },
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


const handleClickOpenSite = ()=>{
  if(!props.element.isOpen) return;
  window.myApi.openSite(toRaw(props.element));
};

const handleSelect = (key) => {
   if(key === 'modify'){
      emit('edit', props.element)
   }else if(key === 'clone'){
      emit('clone', props.element)
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

const handleClickGetIcon = ()=>{
  if(icon.value.endsWith('ZP8EQEcFCACPFvgAAAAASUVORK5CYII=')){
    svgIcon.value?.classList.add('svg-element');
    window.myApi.getFavicon(props.element.name).then((res)=>{
        if(res.ret === 0){
          icon.value = res.data;
          message.success('获取成功')
          svgIcon.value?.classList.remove('svg-element');
        }else{
          message.error(res.data)
          svgIcon.value?.classList.remove('svg-element');
        }
      }
    )
  }else{
    message.info('已存在图标,无需获取')
  }
}


</script>

<template>
  <div class="wrap">
    <n-image width="40" :src="icon"/>
    <div class="link" @click="handleClickOpenSite">
      <div> {{ element.tag }}</div>
      <div> {{ element.url }}</div>
    </div>

    <div class="getIcon">
      <span @click="handleClickGetIcon">
        <n-icon size="30">
          <svg ref="svgIcon" t="1742584202333" class="icon" viewBox="0 0 1355 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8409" width="128" height="128"><path d="M1039.359973 204.319263a44.664392 44.664392 0 0 0-10.751981 63.006006c15.661149 21.503962 29.244184 44.513804 40.417811 68.366939a46.381095 46.381095 0 0 0 60.988128 22.226784 44.905333 44.905333 0 0 0 22.558077-59.934012 510.884745 510.884745 0 0 0-49.031442-83.064324 46.5618 46.5618 0 0 0-64.180593-10.601393zM214.89084 575.548726c11.504921 0 22.497843-4.487521 30.599475-12.468684l173.356871-170.345112c10.932687-10.751981 15.209385-26.383012 11.203745-41.05028a42.887454 42.887454 0 0 0-30.599476-30.057359 43.790982 43.790982 0 0 0-41.773103 10.992922l-99.50853 97.701475C296.991401 236.846264 470.890388 90.354288 679.063197 90.354288c60.83754 0 119.627083 12.227743 174.712162 36.382053a46.682271 46.682271 0 0 0 46.923212-3.553876 44.875215 44.875215 0 0 0 19.154789-42.254984 45.296861 45.296861 0 0 0-28.671949-36.653112A524.287075 524.287075 0 0 0 679.063197 0.001506C422.039651 0.001506 208.415557 184.020005 166.100337 424.960756l-94.027128-92.400778a43.911452 43.911452 0 0 0-59.391895 1.776938 42.044161 42.044161 0 0 0-1.807056 58.337779l173.447224 170.345111c8.071515 8.01128 19.094555 12.528919 30.569358 12.52892z m954.366315-121.072728a43.881334 43.881334 0 0 0-61.19895 0l-173.417106 170.345111a41.983926 41.983926 0 0 0 0 60.114718c16.89597 16.594794 44.272863 16.594794 61.168833 0l106.134401-104.206875C1068.393333 780.52907 891.783763 933.646917 679.093315 933.646917c-167.242999 0.210823-319.336848-95.201714-389.450607-244.374157a46.381095 46.381095 0 0 0-61.108598-22.015961 44.875215 44.875215 0 0 0-22.40749 60.024365c85.172556 181.12721 269.853641 296.989594 472.876342 296.718535 257.656016 0 471.731873-184.922027 513.2038-426.706071l89.208313 87.642199c8.101633 8.01128 19.124672 12.528919 30.599476 12.528919s22.497843-4.517639 30.599475-12.528919c8.13175-7.981162 12.679507-18.793379 12.679507-30.057359s-4.577874-22.076196-12.679507-30.057359l-173.356871-170.345111z" fill="#25b39e" p-id="8410"></path></svg>
        </n-icon>
      </span>
    </div>

    <div class="jseditor">
      <span @click="handleClickJsEditor">
        <n-icon size="30">
          <svg t="1742278022992" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4565" width="128" height="128"><path d="M847.872 240.128v688c0 26.56-21.408 48-48 48h-576c-26.56 0-48-21.44-48-48v-832c0-26.592 21.44-48 48-48h432z" fill="#E9EDED" p-id="4566"></path><path d="M160 768.128v160c0 35.456 28.544 64 64 64h576c35.456 0 64-28.544 64-64v-160H160z" fill="#25B39E" p-id="4567"></path><path d="M847.872 240.128h-144c-26.56 0-48-21.44-48-48v-144" fill="#25B39E" p-id="4568"></path><path d="M432.256 320.128c-35.2 0-64 28.8-64 64v32c0 18.016-14.016 32-32 32a16 16 0 0 0-3.2 0.256 16 16 0 0 0-12.384 11.232 16 16 0 0 0-0.352 1.504 16 16 0 0 0 0 0.064 16 16 0 0 0 15.936 18.944c17.984 0 32 13.984 32 32v32c0 35.2 28.8 64 64 64a16 16 0 1 0 0-32c-18.016 0-32-13.984-32-32v-32c0-19.136-8.736-36.256-22.208-48a63.68 63.68 0 0 0 22.208-48v-32c0-18.016 13.984-32 32-32a16 16 0 1 0 0-32z m157.856 0a16 16 0 0 0 1.632 32c18.016 0 32 13.984 32 32v32c0 19.168 8.736 36.224 22.208 48-13.44 11.744-22.208 28.864-22.208 48v32c0 18.016-13.984 32-32 32a16 16 0 1 0 0 32c35.2 0 64-28.8 64-64v-32c0-18.016 14.016-32 32-32a16 16 0 0 0 10.368-3.616 16 16 0 0 0 1.216-1.152 16 16 0 0 0-11.584-27.232c-17.984 0-32-13.984-32-32v-32c0-35.2-28.8-64-64-64a16 16 0 0 0-1.6 0zM512 367.936a32 32 0 0 0-32 32 32 32 0 0 0 32 32 32 32 0 0 0 32-32 32 32 0 0 0-32-32z m0 96a32 32 0 0 0-32 32 32 32 0 0 0 16.256 27.872l-14.4 28.864a16 16 0 1 0 28.64 14.272l24-48.256a32 32 0 0 0 9.44-21.504 16 16 0 0 0 0-0.192 32 32 0 0 0 0.064-1.056 32 32 0 0 0-32-32z" fill="#25B39E" p-id="4569"></path><path d="M335.872 800a16 16 0 0 0-15.744 16.256V912c0 9.152-6.848 16-16 16a15.616 15.616 0 0 1-16-16 16 16 0 0 0-16.256-16.192 16 16 0 0 0-15.744 16.192c0 26.304 21.696 48 48 48 24.768 0 45.12-19.296 47.488-43.52a16 16 0 0 0 0.512-4.224v-96a16 16 0 0 0-16.256-16.256z m94.4 0.128a16 16 0 0 0-2.016 0.384c-24.64 1.92-44.384 22.528-44.384 47.616 0 25.28 20.096 46.08 44.992 47.68a16 16 0 0 0 3.008 0.32h32c9.152 0 16 6.848 16 16 0 9.152-6.848 16-16 16h-64a16 16 0 1 0 0 32h64a16 16 0 0 0 3.328-0.384 48.096 48.096 0 0 0 44.672-47.616c0-25.152-19.84-45.888-44.544-47.68a16 16 0 0 0-3.456-0.32h-30.88a16 16 0 0 0-1.12 0 15.616 15.616 0 0 1-16-16c0-9.152 6.848-16 16-16h64a16 16 0 1 0 0-32h-62.88a16 16 0 0 0-1.12 0 16 16 0 0 0-1.6 0z" fill="#E9EDED" p-id="4570"></path></svg>
        </n-icon>
      </span>
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
  background-color: var(--color-background);
  margin: 10px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  place-items: center;
  border-bottom: 1px solid var(--new-color-border);
  gap: 10px;
}
.link{
  cursor: pointer;
  font-size: 14px;
  color: var(--color-text);
}

.getIcon{
  width: 60px;
  text-align: center;
  flex-shrink: 0;
  margin-left: auto;
}

.jseditor{
  width: 60px;
  text-align: center;
  flex-shrink: 0;
}
.options{
  width: 60px;
  text-align: center;
  flex-shrink: 0;
}

.jseditor>span, .options>span, .getIcon>span{
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

.jseditor >span:hover, .options>span:hover, .getIcon>span:hover{
  background-color: var(--color-border);
  box-shadow: 0 0 2px var(--color-text)
}

.switch{
  text-align: center;
  vertical-align: center;
  width: 100px;
  flex-shrink: 0;
}

.wrap:hover {
  background-color: var(--color-background-soft);
}

.svg-element {
  animation: rotate 2s linear infinite;
  transform-origin: center;
}
@keyframes rotate {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

</style>
