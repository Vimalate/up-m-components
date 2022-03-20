export interface TableOptions {
  label: string;
  prop?: string;
  width?: string | number;
  align?: "left" | "center" | "right";
  // 自定义模板
  slot?: string;
  // 操作项
  action?: boolean;
}
