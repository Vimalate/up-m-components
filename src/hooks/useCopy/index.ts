import { ElMessage } from "element-plus";
// 复制文本
export const useCopy = (text: string) => {
  // 创建输入框
  const input = document.createElement("input");
  // 输入框value赋值
  input.value = text;
  // 追加到body
  document.body.appendChild(input);
  // 选中
  input.select();
  // 复制
  document.execCommand("Copy");
  document.body.removeChild(input);
  ElMessage.success("复制成功！");
};
