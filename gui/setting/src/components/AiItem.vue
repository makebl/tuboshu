<script setup>
defineProps({
    element: Object
})
</script>

<template>
  <div class="wrap">
    <n-avatar
        round
        size="large"
        :src="element.img"
    />
    <span class="name">{{ element.tag }}</span>
  </div>
</template>

<style scoped>
.wrap {
  width: 80px;
  height: 80px;
  background-color: #fefefe;
  margin-top: 10px;
  margin-left: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  place-items: center;
  border: 1px solid var(--color-border);
}

.name{
  font-weight: bold;
  color: #666;
  font-size: 12px;
  padding: 5px;
}

.wrap:hover {
  background-color: #f0f0f0;
}

</style>
