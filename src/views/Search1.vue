<template>
  <div>
    <van-search
      v-model="value"
      placeholder="请输入搜索关键词"
      @search="onSearch"
      @cancel="onCancel"
      @focus="onTiaozhuan"
    />
    <div :class="['van-search']">111111</div>
    <hr />
    <van-search
      v-model="value1"
      show-action
      label="地址"
      placeholder="请输入搜索关键词"
      shape="round"
      background="#4fc08d"
      @search="onSearch"
    >
      <template #action>
        <div @click="onSearch">搜索</div>
      </template>
    </van-search>
  </div>
</template>

<script>
import { reactive, toRefs, watch } from "vue"
//import { store, mutations } from "../stores/index1.js";
import axios from "axios";
import { useSourcedataInject } from "../stores/index1.js"
export default {
  name: "Search1",
  setup(props, context) {
    const state = reactive({
      value: "",
      value1: "",
    });

    //监听搜索框中的值，
    watch(
      () => {
        return state.value1;
      },
      (value1, oldvalue1) => {
        window.console.log(
          "检测搜索的关键字value1,：",
          value1,
          "--oldvalue1:",
          oldvalue1
        );
        //将搜索的关键字存放进store中
        //store1.mutations.setsearchData(value1);
        //window.console.log("store1.mutations.setsearchData", store1.store.searchData);
        mutations.setsearchData(value1);
        window.console.log("store.searchData", store.searchData);
      }
    );

    const onSearch = (a) => {
      window.console.log("搜索的关键字：a", a);
      //获取搜索关键字
      window.console.log(" mutations.getsearchData()", store.searchData);

      //触发搜索事件，
      axios
        .get("https://cnodejs.org/api/v1/topics")
        .then(function (response) {
          window.console.log("在search1组件中请求成功：", response.data.data);
        })
        .catch(function (error) {
          window.console.log("在search1组件中请求失败：", error);
        });
    };
    const onCancel = () => {
      window.console.log("取消搜索");
    };
    const onTiaozhuan = () => {
      window.console.log("context:", context);
      context.root.$router.push({ path: "search" });
      window.console.log("当搜索框获得焦点的时候，跳转到新的界面");
    };
    return { ...toRefs(state), onSearch, onCancel, onTiaozhuan };
  },
};
</script>

<style scoped></style>
