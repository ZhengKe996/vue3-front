import { watch } from "vue";
import store from "../store";
import { THEME_LIGHT, THEME_DARK, THEME_SYSTEM } from "@/constants";

/**
 * 监听系统主题变更
 */
let matchMedia;
const watchSystemThemeChange = () => {
  if (matchMedia) return;

  matchMedia = window.matchMedia("(prefers-color-scheme: dark)");
  matchMedia.onchange = () => {
    changeTheme(THEME_SYSTEM);
  };
};

const changeTheme = (theme) => {
  // html 的 class
  let themeClassName = "";

  switch (theme) {
    case THEME_LIGHT:
      themeClassName = "light";
      break;
    case THEME_DARK:
      themeClassName = "dark";
      break;
    case THEME_SYSTEM:
      watchSystemThemeChange();
      themeClassName = matchMedia.matches ? "dark" : "light";
      break;
  }

  // 修改 html 的 class
  document.querySelector("html").className = themeClassName;
};

/**
 * 初始化主题
 */
export default () => {
  watch(
    () => store.getters.themeType,
    (value) => {
      changeTheme(value);
    },
    { immediate: true }
  );
};
