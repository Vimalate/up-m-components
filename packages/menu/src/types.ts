export interface MenuItem {
  icon?: string;
  // 处理后的图标
  i?: any;
  name: string;
  index: string;
  children?: MenuItem[];
}
