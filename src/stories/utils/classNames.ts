import { isArray, isObject, isString } from "./utils";

export default function classNames(...args: any[]): string {
  const classNameArr = [];
  for(let i = 0; i < args.length; i++) {
    const value = args[i];
    if(!value) continue;
    if(isString(value)) {
      classNameArr.push(value);
    } else if(isArray(value)) {
      for(let j = 0; j < value.length; j++) {
        const innerClassArr = classNames(value[j]);
        if(innerClassArr) {
          classNameArr.push(innerClassArr);
        }
      }
    } else if(isObject(value)) {
      for(const name in value) {
        if(value[name]) {
          classNameArr.push(name);
        }
      }
    }
  }
  return classNameArr.join(' ');
}
