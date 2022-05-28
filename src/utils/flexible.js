import { computed } from "vue";
import { useWindowSize } from "@vueuse/core";
import { PC_DEVICE_WIDTH, MAX_FONT_SIZE } from "../constants";

/**
 * @description 判断当前是否为移动设备，判断依据为屏幕的宽度是否大于指定值(1280)
 */
const { width } = useWindowSize();
export const isMobileTerminal = computed(() => {
  return width.value < PC_DEVICE_WIDTH;
});

/**
 * @description 动态指定 rem 基准值 最大为 40px
 * 根据用户的屏幕宽度，进行一些计算，把计算出来的值赋值给 html 根标签作为 fontSize 大小
 */

export const useREM = () => {
  // 定义最大的 fontSize
  // const MAX_FONT_SIZE = 40;
  // 监听 html 文档被解析完成的事件
  document.addEventListener("DOMContentLoaded", () => {
    // 拿到 html 标签
    const html = document.querySelector("html");

    // 计算 fontSize, 根据屏幕宽度 / 10
    let fontSize = window.innerWidth / 10;
    fontSize = fontSize > MAX_FONT_SIZE ? MAX_FONT_SIZE : fontSize;

    // 赋值给 html
    html.style.fontSize = `${fontSize}px`;
  });
};
