<template>
  <m-popover placement="bottom-left">
    <template #reference>
      <m-svg-icon
        :name="svgIconName"
        fillClass="fill-zinc-900 dark:fill-zinc-300"
        class="w-4 h-4 p-1 cursor-pointer rounded-sm duration-200 outline-none hover:bg-zinc-100/60 dark:hover:bg-zinc-900"
      ></m-svg-icon>
    </template>

    <div class="w-[140px] overflow-hidden">
      <div
        v-for="item of themeArr"
        :key="item.id"
        class="flex items-center p-1 cursor-pointer rounded hover:bg-zinc-100/60 dark:hover:bg-zinc-800"
        @click="onItemClick(item)"
      >
        <m-svg-icon
          :name="item.icon"
          class="w-1.5 h-1.5 mr-1"
          fillClass="fill-zinc-900 dark:fill-zinc-300"
        ></m-svg-icon>
        <span class="text-zinc-900 text-sm dark:text-zinc-300">
          {{ item.name }}
        </span>
      </div>
    </div>
  </m-popover>
</template>

<script setup>
import { useStore } from "vuex";
import { THEME_LIGHT, THEME_DARK, THEME_SYSTEM } from "@/constants";
import { computed } from "vue";
const themeArr = [
  {
    id: 0,
    type: THEME_LIGHT,
    icon: "theme-light",
    name: "极简白",
  },
  {
    id: 1,
    type: THEME_DARK,
    icon: "theme-dark",
    name: "极夜黑",
  },
  {
    id: 2,
    type: THEME_SYSTEM,
    icon: "tiaosepan",
    name: "跟随系统",
  },
];
const store = useStore();
const onItemClick = (themeItem) => {
  store.commit("theme/changeThemeType", themeItem.type);
};
// 1. 监听主题的切换行为
// 2. 根据行为保存当前需要展示的主题到 Vuex
// 3. 根据 vuex 中保存的主题，展示的显示图标
// 4. 根据 vuex 中保存的主题，修改 html 的class
const svgIconName = computed(() => {
  const findTheme = themeArr.find(
    (item) => item.type === store.getters.themeType
  );

  return findTheme?.icon;
});
</script>

<style lang="scss" scoped></style>
