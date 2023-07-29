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
      <a class="inv-icon style-v1" href="">
        <span class="soc-name">dsds</span>
        <span class="soc-icon-bg"></span>
        <github-outlined class="pr-2 mat-icon" />
      </a>
      <twitter-outlined class="pr-2" />
      <wechat-outlined />
    </div>
  </div>
</template>

<style lang="less" scoped>
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
      .inv-icon {
        &.style-v1 {
          display: inline-block;
          font-size: 14px;
          height: 32px;
          line-height: 34px;
          outline: medium none;
          position: relative;
          text-align: center;
          text-decoration: none;
          width: 32px;
          z-index: 1;
          .transition(all, 0.4s, ease);
          span.soc-name {
            opacity: 0;
            display: block;
            font-size: 12px;
            height: 32px;
            left: 14px;
            line-height: 31px;
            position: absolute;
            top: 0;
            z-index: 0;
            white-space: nowrap;
            font-style: italic;
            .transition(all, 0.4s, ease);
            .border-radius(5px, 5px, 5px, 5px);
            &:before,
            &:after {
              content: '';
              display: block;
              height: 32px;
              position: absolute;
              top: 0;
              width: 32px;
              z-index: -1;
              .transition(all, 0.4s, ease);
              .border-radius(3px, 3px, 3px, 3px);
            }
            &:before {
              left: -14px;
            }
            &:after {
              right: -12px;
              .transition(all, 0.4s, ease);
            }
          }
          span.soc-icon-bg {
            .border-radius(3px, 3px, 3px, 3px);
            display: block;
            content: '';
            width: 32px;
            height: 32px;
            line-height: 32px;
            position: absolute;
            top: 0;
            left: 0;
            z-index: 1;
            opacity: 0;
            .border-radius(3px, 3px, 3px, 3px);
            .transition(all, 0.4s, ease);
          }
          .mat-icon {
            position: relative;
            z-index: 1;
            width: 14px;
            height: 14px;
          }
          &:hover {
            z-index: 10;

            span.soc-name {
              width: auto;
              padding-left: 28px;
              opacity: 1;
              white-space: nowrap;
              .transition(all, 0.4s, ease);
            }
            span.soc-icon-bg {
              top: 0px;
              left: 0px;
              opacity: 1;
            }
          }
          &:last-child {
            > span.soc-name {
              right: 11px;
              left: auto;
              &:before {
                display: none;
              }
            }
            &:hover > span.soc-name {
              padding-left: 12px;
              padding-right: 28px;
            }
          }
        }
      }
    }
  }
</style>
