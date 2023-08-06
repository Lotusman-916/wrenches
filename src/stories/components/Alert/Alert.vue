<script setup lang="ts">
  // import {getTransitionProps} from '../../utils/transition';
  import type { AlertProps } from './Alert.type';

  defineProps<Partial<AlertProps>>();
  // const transitionProps = getTransitionProps('');
</script>

<template>
  <Transition>
    <div
    role="alert"
    ></div>
  </Transition>
</template>

<style lang="less"></style>
