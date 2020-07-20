<template>
  <!--<span>1111</span>-->
  <!--<div id="root">
    <img src="./logo.png" />
    <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/contact">Contact</router-link>
    </div>
    <router-view />
  </div>
  <Header1 />
  <Search1 />
  <Panel1 />-->
  <Header :customTitle={title}  :customColor="{ color }"></Header>
</template>

<script>
import Header1 from "./Header1.vue";
import Search1 from "./Search1.vue";
import Panel1 from "./Panel1.vue";
import Header from "./Header.vue";
import { reactive, toRefs } from "vue";
export default {
  components: {
    Header1,
    Search1,
    Panel1,
    Header,
  },
  setup() {
    const state = reactive({
      color: "red",
      title: "CNODE",
    });

    return { ...toRefs(state) };
  },
};
</script>
