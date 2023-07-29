<script setup lang="ts">
  import IconItem from '@/components/icon-item/icon-item.vue'
</script>

<template>
  <div class="header-top">
    <div class="header-top-left">
      <span>17360876592</span>
      <span>emil: xiongwenleyao@gmiil.com</span>
    </div>
    <div class="header-top-right">
      <icon-item :icon-name="'1'" />
    </div>
  </div>
</template>

<style lang="less" scoped>
  .header-top {
    width: 100%;
    height: 40px;
    font-size: 14px;
    line-height: 40px;
    background-color: #eaeaea;
    display: flex;
    justify-content: space-between;
    &-left {
    }
  }
</style>
