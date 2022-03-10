import { App } from "vue";
import chooseIcon from "./chooseIcon/index";
import chooseArea from "./chooseArea/index";
import trend from "./trend/index";
import menu from "./menu/index";

const components = [chooseArea, chooseIcon, trend, menu];

export default {
  install(app: App) {
    components.map((item) => {
      app.use(item);
    });
  },
};
