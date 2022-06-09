import { createApp } from "vue";
import App from "./App.vue";
import "normalize.css";
import { useREM } from "@/utils/flexible";
import router from "./router";
import "./styles/index.scss";
import mLibs from "@/libs";
import useTheme from "./utils/theme";
import store from "./store";
// 2. 注册 svg-icons
import "virtual:svg-icons-register";

useREM();
useTheme();
const app = createApp(App);
app.use(store);
app.use(router);
app.use(mLibs);
app.mount("#app");
