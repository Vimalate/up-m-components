import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import * as Icons from "@element-plus/icons-vue";
import { toLine } from "./utils";
// 全局引入
import mComponents from "./components/index"
// import mComponents from "../lib";
// import "../lib/style.css";
// 单独引入
// import chooseIcon from "../lib/chooseIcon/index.es";
// import "../lib/chooseIcon/style.css";
const app = createApp(App);
for (const i in Icons) {
  // 注册全局组件
  app.component(`el-icon-${toLine(i)}`, (Icons as any)[i]);
}
app.use(router)
.use(ElementPlus)
// .use(chooseIcon);
.use(mComponents);
app.mount("#app");
