<template>
  <div class="input-wrapper">
    <input
      type="text"
      placeholder="请输入要查询的关键字"
      v-model="val"
      @blur="search"
    />
    <svg class="icon" aria-hidden="true">
      <use xlink:href="#icon-sousuo"></use>
    </svg>
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";
//import { store } from "../stores/index1.js";
import { usesourceDataInject } from "../stores/index1.js";
//console.log("usesourceDataInject:",usesourceDataInject);
export default {
  name: "Search2",
  setup(props, { root }) {
    const { searchData, setsearchData } = usesourceDataInject();

    const state = reactive({
      val: "",
      // searchData: computed({//使用数据管理，就不需要使用comouted
      //   get: () => {
      //     return store.searchData;
      //   },
      //   set: (val) => {
      //     store.searchData = val;
      //   },
      // }),
    });

    const search = () => {
      window.console.log(
        "state.val:",
        state.val,
        "---state.searchData:",
        state.searchData,
        "---store.searchData:",
        searchData
      );

      setsearchData(state.val);
      window.console.log(
        "state.val:",
        state.val,
        "---state.searchData:",
        state.searchData,
        "---store.searchData:",
        searchData
      );
      //state.val=== "" ? : root.$router.push("panel");
      if (state.val === "") {
        alert("输入搜索内容");
      } else {
        root.$router.push("panel");
      }
    };

    return {
      ...toRefs(state),
      search,
    };
  },
};
</script>

<style scoped lang="less">
div.input-wrapper {
  width: 100%;
  height: 150px;
  display: inline-flex;
  border: 2px solid red;
  padding: 0px 0px 0px 5px;
  input {
    border: none;
    outline: none;
  }
  svg {
    cursor: pointer;
    padding: 5px;
  }
}
</style>
