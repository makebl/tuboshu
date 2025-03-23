<script setup>
const message = useMessage();
const props = defineProps({
  element: Object
})
const selectOptions = ref([
  {label: "Ctrl", value: "CommandOrControl"},
  {label: "Shift", value: "Shift"},
  {label: "Alt", value: "Alt"},
]);

const cmd = props.element.cmd.split('+')
const vleft = ref(cmd[0])
const vright = ref(cmd[1])

const handleUpdateValue = (val)=>{
  let cmd =[val, vright.value].join("+")
  let short = Object.assign(toRaw(props.element), { cmd: cmd});
  sendShortcut(short);
}
const handleKeydown = (e)=>{
  let tmpKey = vright.value
  e.preventDefault()
  if (['Control', 'Shift', 'Alt'].includes(e.key)) return

  tmpKey = (e.key === ' ') ? 'Space' : capitalize(e.key)
  tmpKey = tmpKey.replace(/^Arrow/, '')
  let cmd =[vleft.value, tmpKey].join("+")
  let short = Object.assign(toRaw(props.element), { cmd: cmd, flag:false});
  sendShortcut(short);
}

const capitalize = (str) => {
  if (!str) return str;
  return str.charAt(0).toUpperCase() + str.slice(1);
}

const sendShortcut = (shortcut) => {
  window.myApi.updateShortcut(shortcut).then(res => {
    if(res.code === 0){
      let tmp = res.data.cmd.split('+')
      vleft.value = tmp[0]
      vright.value = tmp[1]
      message.success(res.msg);
    }else{
      message.error(res.msg);
    }
  })
}

const changeSwitch = (val)=>{
  let cmd =[vleft.value, vright.value].join("+")
  let short = Object.assign(toRaw(props.element), { cmd:cmd, isOpen:val, flag:true});
  sendShortcut(short);
}

</script>

<template>
  <div class="wrap">
    <div style="width: 250px;"> {{ element.tag }}</div>
    <div>
      <n-input-group>
        <n-select
            :style="{ width: '30%' }"
            size="small"
            :options="selectOptions"
            v-model:value="vleft"
            @update:value="handleUpdateValue"
        />+
        <n-input
            :style="{ width: '40%' }"
            size="small"
            readonly
            v-model:value="vright"
            @keydown="handleKeydown"
        />
      </n-input-group>
    </div>
    <div class="switch">
      <n-switch size="medium" v-model:value="element.isOpen" @update:value="changeSwitch" style="font-size:12px;" >
        <template #checked>
          开启
        </template>
        <template #unchecked>
          禁用
        </template>
      </n-switch>
    </div>
  </div>
</template>

<style scoped>
.wrap {
  padding: 0.5em;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  place-items: center;
  flex-wrap: wrap;
  border-bottom: 1px solid var(--new-color-border);
}
.wrap:hover {
  background-color: var(--color-background-soft);
}

.switch{
  text-align: center;
  vertical-align: center;
  width: 100px;
  margin-left: auto;
  flex-shrink: 0;
}
</style>
