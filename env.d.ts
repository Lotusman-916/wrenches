/// <reference types="vite/client" />

// 声明.vue文件
declare module '*.vue' {
  import { DefineComponent } from 'vue'
  const classes: DefineComponent;
  export default classes
}