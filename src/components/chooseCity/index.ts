import { App } from "vue";
import chooseCity from "./src/index.vue";

// 让组件能够通过use的形式使用
export default {
  install(app: App) {
    app.component("m-choose-city", chooseCity);
  },
};
