<template>
  <div>
    <teleport to="body">
      <!-- 蒙版 -->
      <transition name="fade">
        <div
          v-if="isVisable"
          @click="isVisable = false"
          class="w-screen h-screen bg-zinc-900/80 z-40 fixed top-0 left-0"
        ></div>
      </transition>

      <!-- 内容 -->
      <transition name="popup-down-up">
        <div
          v-if="isVisable"
          v-bind="$attrs"
          class="w-screen bg-white z-50 fixed bottom-0 dark:bg-zinc-800"
        >
          <slot />
        </div>
      </transition>
    </teleport>
  </div>
</template>

<script setup>
import { useScrollLock, useVModel } from "@vueuse/core";
import { watch } from "vue";
const props = defineProps({
  modelValue: {
    required: true,
    type: Boolean,
  },
});

defineEmits(["update:modelValue"]);

const isVisable = useVModel(props);

// 锁定滚动
const isLocked = useScrollLock(document.body);

watch(
  () => isVisable,
  (value) => (isLocked.value = value),
  {
    immediate: true,
  }
);
</script>

<style scoped lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.popup-down-up-enter-active,
.popup-down-up-leave-active {
  transition: all 0.3s;
}

.popup-down-up-enter-from,
.popup-down-up-leave-to {
  transform: translateY(100%);
}
</style>
