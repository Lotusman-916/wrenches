<script setup lang="ts">
  import {
    PhoneOutlined,
    MailOutlined,
    WechatOutlined,
    GithubOutlined,
    TwitterOutlined
  } from '@ant-design/icons-vue'
</script>

<template>
  <div class="header-top">
    <div class="header-top-left">
      <div class="phone">
        <phone-outlined />
        <div class="pl-1">17360876592</div>
      </div>
      <div class="mail pl-4">
        <mail-outlined />
        <div class="pl-1">xiongwenleyao@gmail.com</div>
      </div>
    </div>
    <div class="header-top-right">
      <github-outlined class="pr-2" />
      <twitter-outlined class="pr-2" />
      <wechat-outlined />
    </div>
  </div>
</template>

<style lang="less" scoped>
  // @import '../../../style/animate/scale-animate.less';
  @import '../../../style/mixins/minix.less';
  .header-top {
    width: 100%;
    height: 40px;
    font-size: 14px;
    line-height: 40px;
    background-color: #eaeaea;
    padding: 16px;
    display: flex;
    justify-content: space-between;
    &-left {
      display: flex;
      align-items: center;
      .phone,
      .mail {
        display: flex;
        flex-direction: row;
        align-items: center;
      }
    }
    &-right {
      display: flex;
      align-items: center;
    }
  }
</style>
