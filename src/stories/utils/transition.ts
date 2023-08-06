import type { TransitionProps } from "vue";

const getTransitionProps = (transitionName: string, opt: TransitionProps= {}) => {
  const transitionProps: TransitionProps = transitionName ? {
    name: transitionName,
    appear: true,
    enterFromClass: ``,
    enterActiveClass: ``,
    enterToClass: ``,
    leaveActiveClass: ``,
    leaveFromClass: ``,
    leaveToClass:``,
    ...opt
  } : {css: false, ...opt};
  return transitionProps;
}

export {
  getTransitionProps
}
