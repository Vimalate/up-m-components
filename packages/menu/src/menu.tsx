import { defineComponent, PropType, useAttrs } from "vue";
// import { toLine } from "../../../utils";
// import { MenuItem } from "./types";
import * as icons from "@element-plus/icons-vue"
import "./styles.scss"
export default defineComponent({
  props: {
    data: {
      type: Array as PropType<any[]>,
      required: true,
    },
    defaultActive: {
      type: String,
      default: "",
    },
    router: {
      type: Boolean,
      default: false,
    },
    index: {
      type: String,
      default: 'index'
    },
    name: {
      type: String,
      default: 'name'
    },
    icon: {
      type: String,
      default: 'icon'
    },
    children: {
      type: String,
      default: 'children'
    }
  },
  setup(props, ctx) {
    let attrs = useAttrs();
    // 封装一个无限层级的方法
    const renderMenu = (data: any[]) => {
      return data.map((item: any) => {
        // 每个菜单的图标
        // item.i = `el-icon-${toLine(item[props.icon!])}`;
        item.i = (icons as any)[item[props.icon!]]
        let slots = {
          title: () => {
            return (
              <>
                <item.i></item.i>
                <span>{item[props.name]}</span>
              </>
            );
          },
        };
        if (item[props.children!] && item[props.children!].length) {
          return (
            <el-sub-menu index={item[props.index]} v-slots={slots}>
              {/* 递归使用 */}
              {renderMenu(item[props.children!])}
            </el-sub-menu>
          );
        }
        return (
          <el-menu-item index={item[props.index]}>
            <item.i></item.i>
            <span>{item[props.name]}</span>
          </el-menu-item>
        );
      });
    };
    return () => {
      return (
        <el-menu
          {...attrs}
          router={props.router}
          default-active={props.defaultActive}
        >
          {renderMenu(props.data)}
        </el-menu>
      );
    };
  },
});
