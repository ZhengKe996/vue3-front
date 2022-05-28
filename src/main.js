import { createApp } from "vue";
import App from "./App.vue";
import "normalize.css";
import { useREM } from "@/utils/flexible";
import router from "./router";
import "./styles/index.scss";
import mLibs from "@/libs";

// 2. 注册 svg-icons
import "virtual:svg-icons-register";

useREM();
const app = createApp(App);
app.use(router);
app.use(mLibs);
app.mount("#app");
