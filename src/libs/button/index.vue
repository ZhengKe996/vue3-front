<template>
  <button
    class="text-sm text-center rounded duration-150 flex justify-center items-center"
    :class="[
      [typeEnum[type], sizeEnum[sizeKey].button],
      {
        'active:scale-105': isActiveAnim,
      },
    ]"
    @click.stop="onBtnClick"
  >
    <m-svg-icon v-if="loading" name="loading" class="w-2 h-2 animate-spin mr-1">
    </m-svg-icon>

    <m-svg-icon
      v-if="icon"
      :name="icon"
      class="m-auto"
      :class="sizeEnum[sizeKey].icon"
      :color="iconColor"
      :fillClass="iconClass"
    >
    </m-svg-icon>

    <slot v-else></slot>
  </button>
</template>

<script>
import { computed } from "vue";
const EMITS_CLICK = "click";
// 1. 构建 type 风格可选项 size 大小可选项
const typeEnum = {
  primary: "text-white bg-zinc-800 hover: bg-zinc-900 active:bg-zinc-800",
  main: "text-white bg-main hover:bg-hover-main active:bg-main",
  info: "text-zinc-800 bg-zinc-200 hover:bg-zinc-300 active:bg-zinc-200",
};

const sizeEnum = {
  default: {
    button: "w-8 h-4 text-base",
    icon: "",
  },
  "icon-default": {
    button: "w-4 h-4",
    icon: "w-1.5 h-1.5",
  },
  small: {
    button: "w-7 h-3 text-base",
    icon: "",
  },
  "icon-small": {
    button: "w-3 h-3",
    icon: "w-1.5 h-1.5",
  },
};
</script>

<script setup>
// 2. 通过 props 让开发者控制按钮
const props = defineProps({
  icon: String,
  iconColor: String,
  iconClass: String,
  type: {
    type: String,
    default: "main",
    validator(value) {
      // 获取所有可选项
      const keys = Object.keys(typeEnum);
      // 指定风格在可选项中
      const result = keys.includes(value);
      if (!result)
        throw new Error(`你的 type 必须是 ${keys.join("、")} 中的一个`);

      return result;
    },
  },
  size: {
    type: String,
    default: "default",
    validator(value) {
      // 获取所有可选项
      const keys = Object.keys(sizeEnum).filter((key) => !key.includes("icon"));

      // 指定风格在可选项中
      const result = keys.includes(value);
      if (!result)
        throw new Error(`你的 size 必须是 ${keys.join("、")} 中的一个`);

      return result;
    },
  },
  isActiveAnim: {
    type: Boolean,
    default: true,
  },
  loading: {
    type: Boolean,
    default: false,
  },
});

// 3. 区分 icon button 和 text button
const sizeKey = computed(() =>
  props.icon ? `icon-${props.size}` : props.size
);
// 4. 依据当前数据 实现视图
// 5. 处理点击事件
const emits = defineEmits([EMITS_CLICK]);
const onBtnClick = () => {
  if (props.loading) return;
  emits(EMITS_CLICK);
};
</script>

<style lang="scss" scoped></style>
