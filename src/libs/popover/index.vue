<template>
  <div class="relative" @mouseleave="onMouseleave" @mouseenter="onMouseenter">
    <div ref="referenceTarget">
      <!-- 具名插槽: 触发弹层的视图 -->
      <slot name="reference"></slot>
    </div>

    <!-- 气泡展示 -->
    <transition name="slide">
      <div
        ref="contentTarget"
        v-show="isViable"
        :style="contentStyle"
        class="absolute p-1 z-20 bg-white border rounded-md"
      >
        <!-- 匿名插槽: 弹出层视图中展示的内容 -->
        <slot></slot>
      </div>
    </transition>
  </div>
</template>

<script>
const DELAY_TIME = 100;
const PROP_TOP_LEFT = "top-left";
const PROP_TOP_RIGHT = "top-right";
const PROP_BOTTOM_LEFT = "bottom-left";
const PROP_BOTTOM_RIGHT = "bottom-right";

const placementEnum = [
  PROP_BOTTOM_LEFT,
  PROP_BOTTOM_RIGHT,
  PROP_TOP_RIGHT,
  PROP_TOP_LEFT,
];
</script>

<script setup>
import { nextTick, ref, watch } from "vue";
/**
 * 1. 指定所有可选位置常量 生成 enum
 * 2. 通过 prop 控制指定位置
 * 3. 获取元素的 DOM 创建读取元素尺寸的方法
 * 4. 生成气泡的样式对象，用来控制每个位置的对应样式
 * 5. 根据 prop 计算样式对象
 */

const props = defineProps({
  // 控制气泡弹出位置,给出开发者错误提示
  placement: {
    type: String,
    default: PROP_BOTTOM_LEFT,
    validator(value) {
      const result = placementEnum.includes(value);
      if (!result)
        throw new Error(
          `你的 placement 必须是 ${placementEnum.join("、")}中的一项`
        );

      return result;
    },
  },
});
let timeout;
const isViable = ref(false);
const onMouseenter = () => {
  if (timeout) clearTimeout(timeout);
  isViable.value = true;
};
const onMouseleave = () => {
  timeout = setTimeout(() => {
    isViable.value = false;
    timeout = null;
  }, DELAY_TIME);
};

const referenceTarget = ref();
const contentTarget = ref();

const useElementSize = (target) => {
  if (!target) return;
  return {
    width: target.offsetWidth,
    height: target.offsetHeight,
  };
};

// 气泡样式
const contentStyle = ref({
  top: 0,
  left: 0,
});
// 气泡展示时进行计算
watch(isViable, (value) => {
  if (!isViable) return;

  nextTick(() => {
    switch (props.placement) {
      case PROP_TOP_LEFT:
        contentStyle.value.top = 0;
        contentStyle.value.left = `${-useElementSize(contentTarget.value)
          .width}px`;
        break;
      case PROP_TOP_RIGHT:
        contentStyle.value.top = 0;
        contentStyle.value.left = `${
          useElementSize(referenceTarget.value).width
        }px`;
        break;
      case PROP_BOTTOM_LEFT:
        contentStyle.value.top = `${
          useElementSize(referenceTarget.value).height
        }px`;
        contentStyle.value.left = `${-useElementSize(contentTarget.value)
          .width}px`;
        break;
      case PROP_BOTTOM_RIGHT:
        contentStyle.value.top = `${
          useElementSize(referenceTarget.value).height
        }px`;
        contentStyle.value.left = `${
          useElementSize(referenceTarget.value).width
        }px`;
        break;
    }
  });
});
</script>

<style lang="scss" scoped>
.slide-enter-active,
.slide-leave-active {
  transition: opacity 0.3s, transform 0.3s;
}

.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translateY(20px);
}
</style>
