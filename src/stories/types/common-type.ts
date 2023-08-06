import {type PropType} from 'vue';

export type NativeType = string | number | boolean | Function | null | undefined;

export function eventType<T>() {
  return {type: [Function, Array] as PropType<T | T[]>}
}
