import { RuleItem } from "./rules";
import { CSSProperties } from "vue";

export interface FormOptions {
  type: string;
  value?: any;
  label?: string;
  prop?: string;
  rules?: RuleItem[];
  placeholder?: string;
  // 表单特有属性
  // attrs?: any;
  attrs?: {
    style?: CSSProperties;
    clearable?: boolean;
    showPassWord?: boolean;
    disabled?: boolean;
    readonly?: boolean;
  };
  // 表单下的子元素
  children?: any[];
  uploadAttrs?:any // 上传组件属性 {}
}
