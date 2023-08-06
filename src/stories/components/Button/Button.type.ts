export type ButtonType = 'link' | 'default' | 'primary' | 'ghost' | 'dashed' | 'text';
export type ButtonShape = 'default' | 'button' | 'reset';
export type ButtonHTMLType = 'submit' | 'button' | 'reset';
export type SizeType = 'small' | 'default' | 'large';
export type LegacyButtonType = ButtonType | 'danger';
export type LoadingType = {
  delay: number
} | boolean;

export interface ButtonProps {
  prefixCls: string;
  type: ButtonType;
  htmlType: ButtonHTMLType;
  shape: ButtonShape;
  size: SizeType;
  loading: LoadingType;
  disabled: boolean;
  ghost: boolean;
  block: boolean;
  danger: boolean;
  icon: any;
  href: string;
  target: string;
  title: string;
  onClick: (e: MouseEvent) => void;
  onMouseDown : (e: MouseEvent) => void;
}

export function convertLegacyProps(type?: LegacyButtonType): Partial<ButtonProps> {
  if(type === 'danger') {
    return {danger: true};
  }
  return {type};
}
