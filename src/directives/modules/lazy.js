import { useIntersectionObserver } from "@vueuse/core";

export default {
  // 图片懒加载
  mounted(el) {
    // 1. 暂存图片地址
    const imgSrc = el.src;
    el.src = "";

    const { stop } = useIntersectionObserver(el, ([{ isIntersecting }]) => {
      if (isIntersecting) {
        // 2. 当图片可见时，加载图片
        el.src = imgSrc;
        // 3. 停止监听
        stop();
      }
    });
  },
};
