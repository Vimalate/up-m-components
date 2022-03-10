import { defineComponent, PropType, useAttrs } from "vue";
import { toLine } from "../../../utils";
import { MenuItem } from "./types";
export default defineComponent({
  props: {
    data: {
      type: Array as PropType<MenuItem[]>,
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
  },
  setup(props, ctx) {
    let attrs = useAttrs();
    // 封装一个无限层级的方法
    const renderMenu = (data: MenuItem[]) => {
      return data.map((item: MenuItem) => {
        // 每个菜单的图标
        item.i = `el-icon-${toLine(item.icon!)}`;
        let slots = {
          title: () => {
            return (
              <>
                <item.i></item.i>
                <span>{item.name}</span>
              </>
            );
          },
        };
        if (item.children && item.children.length) {
          return (
            <el-sub-menu index={item.index} v-slots={slots}>
              {/* 递归使用 */}
              {renderMenu(item.children)}
            </el-sub-menu>
          );
        }
        return (
          <el-menu-item index={item.index}>
            <item.i></item.i>
            <span>{item.name}</span>
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
