import type { EventDataNode } from "ant-design-vue/es/tree";

export type AlertType = 'success' | 'info' | 'warning' | 'error';

export interface AlertProps {
  type:  AlertType,
  closable: boolean,
  closeText: any,
  message: any,
  description: any,
  showIcon: boolean,
  prefixCls: string,
  banner: boolean,
  icon: any,
  closeIcon: any,
  onClose: (e: MouseEvent, node: EventDataNode) => void,
  afterClose: () => void,
}
