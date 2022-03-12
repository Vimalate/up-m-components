import { App } from "vue";
import chooseIcon from "./chooseIcon/index";
import chooseArea from "./chooseArea/index";
import trend from "./trend/index";
import menu from "./menu/index";
import progress from "./progress/index";
import chooseTime from "./chooseTime/index";
import chooseDate from "./chooseDate/index";

const components = [
  chooseDate,
  chooseArea,
  chooseIcon,
  trend,
  menu,
  progress,
  chooseTime,
];

export default {
  install(app: App) {
    components.map((item) => {
      app.use(item);
    });
  },
};
