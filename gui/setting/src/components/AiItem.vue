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

  margin-top: 10px;
  margin-left: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  place-items: center;
  background-color: var(--color-background);
  border: 1px solid var(--color-border);
}

.name{
  font-weight: bold;
  color: #666;
  font-size: 12px;
  padding: 5px;
  white-space: nowrap;
  overflow: hidden;
  width: 100%;     /* 固定宽度与父容器一致 */
  text-align: center; /* 保持居中效果 */
  box-sizing: border-box; /* 包含padding */

}

.wrap:hover {
  background-color: #f0f0f0;
}

</style>
