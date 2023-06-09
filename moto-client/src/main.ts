import { createApp } from "vue";
import ElementPlus from "element-plus";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "element-plus/dist/index.css";
import "./assets/css/index.scss";
import "./assets/icons/index.js";
import * as echarts from "./utils/echarts";
import { ComponentCustomProperties } from "vue";
import { Store } from "vuex";
import vue3videoPlay from 'vue3-video-play' // 引入组件
import 'vue3-video-play/dist/style.css' // 引入css



declare module "@vue/runtime-core" {
  interface State {
    count: number;
  }

  interface ComponentCustomProperties {
    $store: Store<State>;
  }
}
const app = createApp(App)
app.use(vue3videoPlay)
app.config.globalProperties.$echarts = echarts
app.use(store).use(router).use(ElementPlus).mount("#app");
