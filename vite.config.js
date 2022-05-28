import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve, join } from "path";
import { createSvgIconsPlugin } from "vite-plugin-svg-icons";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // 1
    createSvgIconsPlugin({
      // 指定缓存图片文件夹
      iconDirs: [resolve(process.cwd(), "src/assets/icons")],
      // 指定 symbolId 格式
      symbolId: "icon-[name]",
    }),
  ],
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"), // 路径别名
    },
    extensions: [".js", ".json", ".ts"], // 使用路径别名时想要省略的后缀名,可以自己 增减
  },
  server: {
    proxy: {
      "/api": {
        target: "url地址",
        changeOrigin: true,
      },
    },
  },
});
