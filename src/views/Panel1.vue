<template>
  <div>
    <!-- "van-list"
    <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
      <van-cell v-for="item in list" :key="item" :title="item" :name="item"></van-cell>
    </van-list>-->
    <!--//////////////////////////-->
    <!--<van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
      <van-cell class="vanCell" v-for="(item,index) in news" :key="index" :title="item.title">
        <img :src="item.author.avatar_url" />
      </van-cell>
    </van-list>-->
    <!-- ///////////////////////////////-->
    <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <van-cell v-for="(item, index) in news" :key="index">
          <div>
            <img :src="item.author.avatar_url" /><span>{{ item.title }}</span>
          </div>
        </van-cell>
      </van-list>
    </van-pull-refresh>
  </div>
</template>

<script>
import { store, mutations } from "../stores/index1.js";
import axios from "axios";
//import { reactive, onMounted, toRefs } from "vue";
import { reactive, toRefs, computed } from "vue";

export default {
  name: "Panel1",
  setup() {
    const state = reactive({
      list: [],
      loading: false,
      finished: false,
      news: [],
      page: 1,
      refreshing: false,
    });

    // newsComputed:computed(()=>{
    //     store.resultData.filter(store.searchData);
    // });

    const onLoad = () => {
      window.console.log(
        "在onLoad中：下拉刷新state.refreshing：",
        state.refreshing
      );
      if (state.refreshing) {
        //state.list = [];
        state.refreshing = false;
      }
      //if (state.refreshing) {
      // window.console.log("发送请求前的loading：", state.loading);
      axios
        .get("https://cnodejs.org/api/v1/topics", {
          params: {
            // 每一页的主题数量
            limit: 10,
            // 页数
            page: state.page,
          },
        })
        .then((res) => {
          //  window.console.log("发送请求成功后的loading：", state.loading);
          window.console.log("向cnodejs发送请求后返回的结果：", res);
          //   state.loading = false;
          //   if(state.news.length>=40){
          //       state.finished = true;
          //   }
          state.news = [...state.news, ...res.data.data];
          window.console.log("state.news = res.data.data", state.news);
          state.page += 1;
          state.loading = false;
          state.refreshing = false;
        });
      //}
    };

    const onRefresh = () => {
      window.console.log(
        "在onRefresh中：下拉刷新state.refreshing：",
        state.refreshing
      );
      // 清空列表数据
      state.finished = false;

      // 重新加载数据
      // 将 loading 设置为 true，表示处于加载状态
      state.loading = true;
      onLoad();
    };

    //还是在mounted的时候去发送请求,由于组件van-list带有load事件去加载数据；
    //若在其load事件中加载数据，就不需要在onMounted生命周期中再去加载数据了
    // onMounted(() => {
    //   onLoad();
    // });

    return {
      ...toRefs(state),
      onLoad,
      onRefresh,
    };
  },

  //   name: "Panel1",
  //   setup() {
  //     const state = reactive({
  //       list: [],
  //       loading: false,
  //       finished: false,
  //       news: [],
  //       page: 1
  //     });

  //     const onLoad = () => {
  //       window.console.log("发送请求前的loading：", state.loading);
  //       axios
  //         .get("https://cnodejs.org/api/v1/topics", {
  //           params: {
  //             // 每一页的主题数量
  //             limit: 10,
  //             // 页数
  //             page: state.page
  //           }
  //         })
  //         .then(res => {
  //           window.console.log("发送请求成功后的loading：", state.loading);
  //           window.console.log("向cnodejs发送请求后返回的结果：", res);
  //           //   state.loading = false;
  //           //   if(state.news.length>=40){
  //           //       state.finished = true;
  //           //   }
  //           state.news = [...state.news, ...res.data.data];
  //           window.console.log("state.news = res.data.data", state.news);
  //           state.page += 1;
  //           state.loading = false;
  //         });
  //     };

  // //还是在mounted的时候去发送请求,由于组件van-list带有load事件去加载数据；
  // //若在其load事件中加载数据，就不需要在onMounted生命周期中再去加载数据了
  // // onMounted(() => {
  // //   onLoad();
  // // });

  // return {
  //   ...toRefs(state),
  //   onLoad
  // };
  //}

  ////////////////////////////////////////////////////////
  //   data() {
  //     return {
  //       list: [],
  //       loading: false,
  //       finished: false
  //     };
  //   },
  //   methods: {
  //     onLoad() {
  //       // 异步更新数据
  //       // setTimeout 仅做示例，真实场景中一般为 ajax 请求
  //       setTimeout(() => {
  //         for (let i = 0; i < 10; i++) {
  //           this.list.push(this.list.length + 1);
  //         }

  //         // 加载状态结束
  //         this.loading = false;

  //         // 数据全部加载完成
  //         if (this.list.length >= 40) {
  //           this.finished = true;
  //         }
  //       }, 1000);
  //     }
  //   }
  /////////////////////////////////////////////////////////
};
</script>

<style scoped lang="less">
.vanCell {
  img {
    float: left;
  }
}
</style>
