<template>
  <div class="icon">
    <i :class="['iconfont', iconName]"></i>
    <span>{{ label }}</span>
  </div>
</template>

<script setup lang="ts">
  defineProps<{
    iconName: string
    label?: string
  }>()
</script>

<style lang="less" scoped></style>
