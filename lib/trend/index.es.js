import { defineComponent, useSlots, computed, openBlock, createElementBlock, normalizeStyle, unref, renderSlot, toDisplayString, createElementVNode, createBlock, resolveDynamicComponent } from "vue";
const toLine = (value) => {
  return value.replace(/(A-Z)g/, "-$1").toLocaleLowerCase();
};
var index_vue_vue_type_style_index_0_scoped_true_lang = "";
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _hoisted_1 = {
  key: 1,
  class: "text"
};
const _hoisted_2 = { class: "icon" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  props: {
    type: {
      type: String,
      default: "up"
    },
    text: {
      type: String,
      default: "\u6587\u5B57"
    },
    upIcon: {
      type: String,
      default: "ArrowUp"
    },
    downIcon: {
      type: String,
      default: "ArrowDown"
    },
    upIconColor: {
      type: String,
      default: "#f5222d"
    },
    downIconColor: {
      type: String,
      default: "#52c41d"
    },
    upTextColor: {
      type: String,
      default: "#f5222d"
    },
    downTextColor: {
      type: String,
      default: "#52c41d"
    }
  },
  setup(__props) {
    const props = __props;
    let slots = useSlots();
    const textColor = computed(() => {
      return props.type === "up" ? props.upTextColor : props.downTextColor;
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: "trend",
        style: normalizeStyle({ color: unref(textColor) })
      }, [
        unref(slots).default ? renderSlot(_ctx.$slots, "default", { key: 0 }, void 0, true) : (openBlock(), createElementBlock("div", _hoisted_1, toDisplayString(__props.text), 1)),
        createElementVNode("div", _hoisted_2, [
          __props.type === "up" ? (openBlock(), createBlock(resolveDynamicComponent(`el-icon-${unref(toLine)(__props.upIcon)}`), { key: 0 })) : (openBlock(), createBlock(resolveDynamicComponent(`el-icon-${unref(toLine)(__props.downIcon)}`), { key: 1 }))
        ])
      ], 4);
    };
  }
});
var trend = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-628d40a0"]]);
var index = {
  install(app) {
    app.component("m-trend", trend);
  }
};
export { index as default };
