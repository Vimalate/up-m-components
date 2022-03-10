import { App } from "vue";
import menu from "./src/index.vue";
import infiniteMenu from "./src/menu";

// 让组件能够通过use的形式使用
export default {
  install(app: App) {
    app.component("m-menu", menu);
    app.component("m-infinite-menu", infiniteMenu);
  },
};
