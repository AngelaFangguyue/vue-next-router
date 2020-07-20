<template>
  <div :style="{ background: color ? color : dafaultColor }" >
    {{ title }}
  </div>
</template>

<script>
import { reactive, toRefs, computed } from "vue";
export default {
  props: {
    title: String,
    color: String,
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
div {
  height: 150px;
  width: 100%;
  line-height: 150px;
  text-align: center;
  color: white;
  font-size:26px;
}
</style>
