import { App } from "vue";
import chooseIcon from "./chooseIcon/index";
import chooseArea from "./chooseArea/index";

const components = [chooseArea, chooseIcon];

export default{
  install(app: App) {
    components.map(item=>{
      app.use(item)
    })
    
  },
}


