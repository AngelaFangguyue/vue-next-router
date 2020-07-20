<template>
  <div>
    这是header1组件
    <span>{{ name }}--{{ num }}--{{ newnum }}</span>
    <button @click="change">点击改变姓名</button>
    <button @click="double">点击数字加倍</button>
    <br />
    <input
      type="text"
      placeholder="请输入"
      ref="inputvue"
      v-model="searchValue"
    />
  </div>
</template>

<script>
import { reactive, toRefs, computed } from "vue";
export default {
  setup() {
    const state = reactive({
      name: "Angela Fang",
      hobby: ["1", "2", "3"],
      num: 100,
      searchValue: "1234",
      newnum: computed(() => {
        state.num += 100;
        return `数字又增加100后的值+${state.num}`;
      }),
    });


    function addNum() {
      window.console.log("addNum");
      //num += 1;
    }
    window.console.log("state:", state);

    const change = () => {
      window.console.log("change");
      state.name = "Lulu";
      window.console.log("state,state.name:", state, state.name);
    };

    function double() {
      state.num *= 2;
    }

    return { ...toRefs(state), addNum, change, double };
  },
};
</script>

<style scoped></style>
