/**
 * 全局注册指令
 */
export default {
  install(app) {
    // app.directive("lazy", lazy);

    const directives = import.meta.globEager("./modules/*.js");

    for (const [key, value] of Object.entries(directives)) {
      // 拼接组件注册的name
      const arr = key.split("/");
      const directiveName = arr[arr.length - 1].replace(".js", "");
      // 完成注册
      console.log(value.default);
      app.directive(directiveName, value.default);
    }
  },
};
