<script setup>
const props = defineProps({
    element: Object
})
</script>

<template>
  <div class="wrap">
    <n-avatar
        round
        size="10"
        :src="element.img"
    />
    <span class="name">{{ element.tag }}</span>
  </div>
</template>

<style scoped>
.wrap {
  padding: 2px;
  width: 50px;
  height: 50px;
  overflow: hidden;
  cursor: move;
  display: flex;
  flex-direction: column;
  justify-content: center;
  place-items: center;
  background-color: var(--color-background);
  border: 1px solid var(--color-border);
}

.name{
  color: #666;
  font-size: 8px;
  padding: 2px;
  white-space: nowrap;
  overflow: hidden;
  width: 100%;
  text-align: center;
  box-sizing: border-box;

}

.wrap:hover {
  background-color: var(--color-background-soft);
}

</style>
