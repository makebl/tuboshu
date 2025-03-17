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
const cmdName = computed(() => {
  if (vleft.value === 'CommandOrControl') {
    return 'Ctrl' + ' + ' + vright.value
  }
  return vleft.value + '+' + vright.value
})

const handleUpdateValue = (val)=>{
  let cmd =[val, vright.value].join("+")
  let short = Object.assign(toRaw(props.element), { cmd: cmd});
  sendShortcut(short);
}
const handleKeydown = (e)=>{
  let tmpKey = vright.value
  e.preventDefault()
  if (['Control', 'Shift', 'Alt'].includes(e.key)) return
  if (e.key === ' '){
    tmpKey = 'Space'
  }else{
    tmpKey = capitalize(e.key)
  }
  tmpKey = tmpKey.replace(/^Arrow/, '')
  let cmd =[vleft.value, tmpKey].join("+")
  let short = Object.assign(toRaw(props.element), { cmd: cmd});
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

</script>

<template>
  <div class="wrap">
    <div style="width: 200px;"> {{ element.tag }}</div>
    <div style="width: 200px;">{{ cmdName }}</div>
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
  border-bottom: 1px solid #efeff5;
}
.wrap:hover {
  background-color: #fefefe;
}

</style>
