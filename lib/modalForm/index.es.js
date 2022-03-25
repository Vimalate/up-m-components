import { defineComponent, ref, watch, nextTick, resolveComponent, openBlock, createBlock, mergeProps, unref, isRef, withCtx, createElementVNode, normalizeClass, toDisplayString, createVNode, renderSlot } from "vue";
var index_vue_vue_type_style_index_0_scoped_true_lang = "";
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    options: {
      type: Array,
      required: true
    },
    isScroll: {
      type: Boolean,
      default: true
    },
    onChange: {
      type: Function
    },
    onPreview: {
      type: Function
    },
    onRemove: {
      type: Function
    },
    beforeRemove: {
      type: Function
    },
    onExceed: {
      type: Function
    },
    beforeUpload: {
      type: Function
    },
    onSuccess: {
      type: Function
    }
  },
  emits: ["update:visible"],
  setup(__props, { emit: emits }) {
    const props = __props;
    const form = ref();
    let dialogVisible = ref(false);
    watch(() => props.visible, (val) => {
      if (val) {
        nextTick(() => {
          form.value.resetFields();
        });
      }
      dialogVisible.value = val;
    });
    watch(() => dialogVisible.value, (val) => {
      emits("update:visible", val);
    });
    return (_ctx, _cache) => {
      const _component_m_form = resolveComponent("m-form");
      const _component_el_dialog = resolveComponent("el-dialog");
      return openBlock(), createBlock(_component_el_dialog, mergeProps(_ctx.$attrs, {
        modelValue: unref(dialogVisible),
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => isRef(dialogVisible) ? dialogVisible.value = $event : dialogVisible = $event)
      }), {
        default: withCtx(() => [
          createElementVNode("div", {
            class: normalizeClass({ "m-modal-form-dialog": __props.isScroll })
          }, [
            createElementVNode("p", null, "isScroll" + toDisplayString(__props.isScroll), 1),
            createVNode(_component_m_form, {
              ref_key: "form",
              ref: form,
              options: __props.options,
              onOnPreview: __props.onPreview,
              onOnRemove: __props.onRemove,
              onBeforeRemove: __props.beforeRemove,
              onOnExceed: __props.onExceed,
              onOnChange: __props.onChange,
              onBeforeUpload: __props.beforeUpload,
              onOnSuccess: __props.onSuccess
            }, {
              uploadArea: withCtx(() => [
                renderSlot(_ctx.$slots, "uploadArea", {}, void 0, true)
              ]),
              uploadTip: withCtx(() => [
                renderSlot(_ctx.$slots, "uploadTip", {}, void 0, true)
              ]),
              _: 3
            }, 8, ["options", "onOnPreview", "onOnRemove", "onBeforeRemove", "onOnExceed", "onOnChange", "onBeforeUpload", "onOnSuccess"])
          ], 2)
        ]),
        footer: withCtx(() => [
          renderSlot(_ctx.$slots, "footer", { form: form.value }, void 0, true)
        ]),
        _: 3
      }, 16, ["modelValue"]);
    };
  }
});
var modalForm = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-695d9af4"]]);
var index = {
  install(app) {
    app.component("m-modal-form", modalForm);
  }
};
export { index as default };
