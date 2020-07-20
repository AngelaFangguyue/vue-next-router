import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
//import { Search, List, Cell, PullRefresh } from "vant";
import {usesourceDataProvide} from "./stores/index1.js"

const app = createApp(App)

app.use(router)
// app.use(Search);
// app.use(List);
// app.use(Cell);
// app.use(PullRefresh);
//Vue.use(router);
app.use(usesourceDataProvide)

app.mount('#app')
