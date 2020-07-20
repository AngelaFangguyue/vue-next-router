<template>
  <div :style="{ background: customColor ? customColor : dafaultColor }">
    aaaa{{customTitle}}
  </div>
</template>

<script>
import { reactive, toRefs, computed } from "vue";
export default {
  props: {
    customColor: String,
    customTitle: String
  },

  setup() {
    const state = reactive({
      // defaultColor: "red"
      defaultColor: "yellow",
    });
    return { ...toRefs(state) };
  },
};
</script>

<style scoped>
header {
  height: 50px;
  width: 100%;
  line-height: 50px;
  text-align: center;
  color: white;
}
</style>
