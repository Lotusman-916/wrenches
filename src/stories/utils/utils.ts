export const isString= (val: unknown) => typeof val === 'string';
export const isArray = Array.isArray;
export const isObject = (val: unknown) => val !== null && typeof val === 'object';
