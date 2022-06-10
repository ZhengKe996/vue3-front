<template>
  <div>
    <slot />
    <div ref="loadingTarget" class="h-6 py-4">
      <!-- 加载更多 -->
      <m-svg-icon
        v-show="loading"
        class="w-4 h-4 mx-auto animate-spin"
        name="infinite-load"
      >
      </m-svg-icon>
      <!-- 没有更多数据 -->
      <p v-if="isFinished" class="text-center text-base text-zinc-400">
        已经没有更多数据了!
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import { useVModel, useIntersectionObserver } from "@vueuse/core";
const props = defineProps({
  // 是否属于加载状态
  modelValue: {
    type: Boolean,
    required: true,
  },
  // 数据是否全部加载完成
  isFinished: {
    type: Boolean,
    default: false,
  },
});

const emits = defineEmits(["onLoad", "update:modelValue"]);

// 处理 loading 状态
const loading = useVModel(props);

// 滚动元素
const loadingTarget = ref(null);
// 记录当前是否在底部
const targetIsIntersecting = ref(false);
useIntersectionObserver(loadingTarget, ([{ isIntersecting }]) => {
  targetIsIntersecting.value = isIntersecting;
  emits("onLoad");
});

/**
 * 触发 load 事件
 */
const emitLoad = () => {
  setTimeout(() => {
    // 当加载更多视图可见时，同时 loading为 false 数据尚未全部加载完 处理更多逻辑
    if (targetIsIntersecting.value && !loading.value && !props.isFinished) {
      // 修改加载数据的标记
      loading.value = true;
      emits("onLoad");
    }
  }, 100);
};

/**
 * 监听 loading 变化
 */
watch(loading, emitLoad);
</script>
