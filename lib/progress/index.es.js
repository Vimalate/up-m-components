import { defineComponent, ref, onMounted, resolveComponent, openBlock, createBlock, mergeProps, unref } from "vue";
const _sfc_main = /* @__PURE__ */ defineComponent({
  props: {
    percentage: {
      type: Number,
      default: 0
    },
    isAnimation: {
      type: Boolean,
      default: false
    },
    time: {
      type: Number,
      default: 3e3
    }
  },
  setup(__props) {
    const props = __props;
    let p = ref(0);
    onMounted(() => {
      if (props.isAnimation) {
        const t = Math.ceil(props.percentage / props.time);
        let timer = setInterval(() => {
          p.value += 1;
          if (p.value >= props.percentage) {
            p.value = props.percentage;
            clearInterval(timer);
          }
        }, t);
      } else {
        p.value = props.percentage;
      }
    });
    return (_ctx, _cache) => {
      const _component_el_progress = resolveComponent("el-progress");
      return openBlock(), createBlock(_component_el_progress, mergeProps(_ctx.$attrs, { percentage: unref(p) }), null, 16, ["percentage"]);
    };
  }
});
var index = {
  install(app) {
    app.component("m-progress", _sfc_main);
  }
};
export { index as default };
