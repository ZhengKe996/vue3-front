import { watch } from "vue";
import store from "../store";
import { THEME_LIGHT, THEME_DARK, THEME_SYSTEM } from "@/constants";

/**
 * 初始化主题
 */
export default () => {
  watch(
    () => store.getters.themeType,
    (value) => {
      // html 的 class
      let themeClassName = "";

      switch (value) {
        case THEME_LIGHT:
          themeClassName = "light";
          break;
        case THEME_DARK:
          themeClassName = "dark";
      }

      // 修改 html 的 class
      document.querySelector("html").className = themeClassName;
    },
    { immediate: true }
  );
};
