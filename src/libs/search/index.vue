<template>
  <div
    ref="containerTarget"
    class="group relative p-0.5 rounded-xl border-white duration-500 hover:bg-blue-100/40 dark:border-zinc-200"
  >
    <div class="">
      <m-svg-icon
        name="search"
        color="#707070"
        class="w-2 h-2 absolute translatey-[-50%] top-[35%] left-2"
      />

      <input
        class="block w-full h-[44px] pl-4 outline-0 bg-zinc-100 caret-zinc-400 duration-500 rounded-xl text-zinc-900 tracking-wide font-semibold border border-zinc-100 focus:border-blue-300 text-sm group-hover:bg-white group-hover:border-zinc-200 dark:bg-zinc-800 dark:text-zinc-200 dark:border-zinc-700 dark:group-hover:bg-zinc-900 dark:group-hover:border-zinc-700"
        placeholder="搜索"
        type="text"
        v-model="inputValue"
        @keyup.enter="onSearchHandler"
        @focus="onFocusHandler"
        @blur="onBlurHandler"
      />

      <m-svg-icon
        v-show="inputValue"
        name="delete"
        class="h-2 w-2 absolute translatey-[-50%] top-[35%] right-9 duration-500 cursor-pointer"
        @click="onClearClick"
      />

      <div
        class="opacity-0 h-2 w-[1px] absolute translate-y-[-50%] top-[50%] right-[62px] duration-500 bg-zinc-200 group-hover:opacity-100"
      ></div>
      <!-- TODO: 通用组件 -->
      <m-button
        icon="search"
        class="opacity-0 absolute duration-500 translate-y-[-50%] top-[50%] right-1.5 rounded-full group-hover:opacity-100"
        iconColor="#ffffff"
        @click="onSearchHandler"
      ></m-button>
    </div>

    <!-- 下拉区 -->
    <transition name="slide">
      <div
        v-if="$slots.dropdown"
        v-show="isFocus"
        class="max-h-[368px] w-full text-base overflow-auto bg-white absolute z-20 left-0 top-[56px] p-2 rounded border border-zinc-200 duration-200 hover: shadow-2xl dark:bg-zinc-800 dark:border-zinc-600"
      >
        <slot name="dropdown"></slot>
      </div>
    </transition>
  </div>
</template>

<script>
const EMIT_UPDATE_MODELVALUE = "update:modelValue";
const EMIT_SEARCH = "search";
const EMIT_CLEAR = "clear";
const EMIT_INPUT = "input";
const EMIT_FOCUS = "focus";
const EMIT_BLUR = "blur";
</script>

<script setup>
import { ref, watch } from "vue";
import { useVModel, onClickOutside } from "@vueuse/core";
/**
 * 1. 输入内容实现双向数据绑定
 * 2. 搜索按钮在 hover 是展示
 * 3. 一键清空文本功能
 * 4. 触发搜索
 * 5. 控制下拉展示区的展示
 * 6. 事件处理
 */
const props = defineProps({
  modelValue: {
    required: true,
    type: String,
  },
});
const emits = defineEmits([
  EMIT_UPDATE_MODELVALUE,
  EMIT_SEARCH,
  EMIT_CLEAR,
  EMIT_FOCUS,
  EMIT_INPUT,
  EMIT_BLUR,
]);
const inputValue = useVModel(props);

watch(inputValue, (value) => {
  emits(EMIT_INPUT, value);
});

const onClearClick = () => {
  inputValue.value = "";
  emits(EMIT_CLEAR, "");
};

const onSearchHandler = () => {
  emits(EMIT_SEARCH, inputValue.value);
};

const isFocus = ref(false);
const onFocusHandler = () => {
  isFocus.value = true;
  emits(EMIT_FOCUS);
};

const containerTarget = ref(null);

onClickOutside(containerTarget, () => (isFocus.value = false));
const onBlurHandler = () => emits(EMIT_BLUR);
</script>

<style lang="scss" scoped>
.slide-enter-active,
.slide-leave-active {
  transition: all 0.5s;
}

.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translateY(40px);
}
</style>
