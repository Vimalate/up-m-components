import { defineComponent, ref, resolveComponent, openBlock, createBlock, unref, isRef, withCtx, createElementVNode, toDisplayString, createVNode, normalizeClass, createElementBlock, Fragment, renderList } from "vue";
var index_vue_vue_type_style_index_0_scoped_true_lang = "";
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _hoisted_1 = { class: "icon" };
const _hoisted_2 = { class: "content" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    let result = ref("\u8BF7\u9009\u62E9");
    let visible = ref(false);
    let radioValue = ref("\u6309\u57CE\u5E02");
    let selectValue = ref("");
    const options = ref([
      {
        value: "Option1",
        label: "Option1"
      },
      {
        value: "Option2",
        label: "Option2"
      },
      {
        value: "Option3",
        label: "Option3"
      },
      {
        value: "Option4",
        label: "Option4"
      },
      {
        value: "Option5",
        label: "Option5"
      }
    ]);
    return (_ctx, _cache) => {
      const _component_el_icon_arrowdown = resolveComponent("el-icon-arrowdown");
      const _component_el_radio_button = resolveComponent("el-radio-button");
      const _component_el_radio_group = resolveComponent("el-radio-group");
      const _component_el_col = resolveComponent("el-col");
      const _component_el_option = resolveComponent("el-option");
      const _component_el_select = resolveComponent("el-select");
      const _component_el_row = resolveComponent("el-row");
      const _component_el_popover = resolveComponent("el-popover");
      return openBlock(), createBlock(_component_el_popover, {
        placement: "bottom-start",
        visible: unref(visible),
        "onUpdate:visible": _cache[3] || (_cache[3] = ($event) => isRef(visible) ? visible.value = $event : visible = $event),
        width: 450,
        trigger: "click"
      }, {
        reference: withCtx(() => [
          createElementVNode("div", {
            class: "city",
            onClick: _cache[0] || (_cache[0] = ($event) => isRef(visible) ? visible.value = !unref(visible) : visible = !unref(visible))
          }, [
            createElementVNode("div", null, toDisplayString(unref(result)), 1),
            createElementVNode("div", _hoisted_1, [
              createVNode(_component_el_icon_arrowdown, {
                class: normalizeClass({ rotate: unref(visible) })
              }, null, 8, ["class"])
            ])
          ])
        ]),
        default: withCtx(() => [
          createElementVNode("div", _hoisted_2, [
            createVNode(_component_el_row, { align: "middle" }, {
              default: withCtx(() => [
                createVNode(_component_el_col, { span: 8 }, {
                  default: withCtx(() => [
                    createVNode(_component_el_radio_group, {
                      modelValue: unref(radioValue),
                      "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => isRef(radioValue) ? radioValue.value = $event : radioValue = $event),
                      size: "small"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_el_radio_button, { label: "\u6309\u57CE\u5E02" }),
                        createVNode(_component_el_radio_button, { label: "\u6309\u7701\u4EFD" })
                      ]),
                      _: 1
                    }, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                createVNode(_component_el_col, {
                  offset: 1,
                  span: 15
                }, {
                  default: withCtx(() => [
                    createVNode(_component_el_select, {
                      size: "small",
                      modelValue: unref(selectValue),
                      "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => isRef(selectValue) ? selectValue.value = $event : selectValue = $event),
                      filterable: "",
                      placeholder: "Select"
                    }, {
                      default: withCtx(() => [
                        (openBlock(true), createElementBlock(Fragment, null, renderList(options.value, (item) => {
                          return openBlock(), createBlock(_component_el_option, {
                            key: item.value,
                            label: item.label,
                            value: item.value
                          }, null, 8, ["label", "value"]);
                        }), 128))
                      ]),
                      _: 1
                    }, 8, ["modelValue"])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ])
        ]),
        _: 1
      }, 8, ["visible"]);
    };
  }
});
var chooseCity = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-89e9c012"]]);
var index = {
  install(app) {
    app.component("m-choose-city", chooseCity);
  }
};
export { index as default };
