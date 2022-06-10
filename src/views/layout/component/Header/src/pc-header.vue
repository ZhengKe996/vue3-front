<template>
  <div
    class="w-full bg-white border-b border-b-zinc-200 px-2 py-1 dark:bg-zinc-800 dark:border-b-zinc-700 duration-500"
  >
    <div class="flex items-center">
      <img
        v-lazy
        class="h-4 cursor-pointer mr-2"
        src="https://zhengke-img.oss-cn-hangzhou.aliyuncs.com/image-light.png"
        alt=""
        @click="onToHome"
      />
      <pc-header-search class="mr-1"></pc-header-search>
      <pc-header-theme class="mr-1"></pc-header-theme>
      <pc-header-my></pc-header-my>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import PcHeaderMy from "@/component/PcHeaderMy";
import PcHeaderSearch from "@/component/PcHeaderSearch";
import PcHeaderTheme from "@/component/PcHeaderTheme";

const router = useRouter();
const onToHome = () => {
  router.push({ name: "home" });
};
</script>

<style lang="scss" scoped></style>
