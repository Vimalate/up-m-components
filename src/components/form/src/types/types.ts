import { RuleItem } from "./rules";

export interface FormOptions {
  type: string;
  value: any;
  label?: string;
  prop: string;
  rules?: RuleItem[];
  placeholder?: string;
  // 表单特有属性
  attrs?: any;
}
