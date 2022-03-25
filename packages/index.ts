import { App } from "vue";
import chooseIcon from "./chooseIcon/index";
import chooseArea from "./chooseArea/index";
import trend from "./trend/index";
import menu from "./menu/index";
import progress from "./progress/index";
import chooseTime from "./chooseTime/index";
import chooseDate from "./chooseDate/index";
import chooseCity from "./chooseCity/index";
import form from "./form/index";
import modalForm from "./modalForm/index";
import table from "./table/index";
import calendar from "./calendar/index";
import "./styles/base.scss";
import "./styles/ui.scss";

const components = [
  chooseDate,
  chooseArea,
  chooseIcon,
  trend,
  menu,
  progress,
  chooseTime,
  chooseCity,
  form,
  modalForm,
  table,
  calendar,
];

export default {
  install(app: App) {
    components.map((item) => {
      app.use(item);
    });
  },
};
