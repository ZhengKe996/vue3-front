<template>
  <div class="bg-white sticky top-0 left-0 z-10">
    <ul
      ref="ulTarget"
      class="relative flex overflow-x-auto p-1 text-xs text-zinc-600 overflow-hidden"
    >
      <!-- 滑块 -->
      <li
        ref="sliderTarget"
        :style="sliderStyle"
        class="absolute h-[22px] bg-zinc-900 rounded-lg duration-200"
      ></li>

      <!-- 汉堡按钮 -->
      <li
        @click="onShowPopup"
        class="fixed top-0 right-[-1px] h-4 px-1 flex items-center bg-white z-20 shadow-l-white"
      >
        <m-svg-icon name="hamburger" class="w-1.5 h-1.5"></m-svg-icon>
      </li>

      <!-- items -->
      <li
        class="shrink-0 px-1.5 py-0.5 z-10 duration-200 last:mr-4"
        :class="{ ' text-zinc-100': currentCategoryIndex === index }"
        v-for="(item, index) in $store.getters.categorys"
        :key="item.id"
        :ref="setItemRef"
        @click="onItemClick(index)"
      >
        {{ item.name }}
      </li>
    </ul>
    <m-popup v-model="isVisable">
      <menu-vue
        :categorys="$store.getters.categorys"
        @onItemClick="onItemClick"
      />
    </m-popup>
  </div>
</template>

<script setup>
import { onBeforeUpdate, ref, watch } from "vue";
import { useScroll } from "@vueuse/core";
import MenuVue from "@/component/MenuVue";

// 滑块
const sliderStyle = ref({
  transform: "translateX(0px)",
  width: "52px",
});

// 选中 item 下标
const currentCategoryIndex = ref(0);

// 获取所有的 item 元素
let itemRefs = [];
const setItemRef = (el) => {
  if (el) itemRefs.push(el);
};

onBeforeUpdate(() => {
  itemRefs = [];
});

// 获取 ul 元素
const ulTarget = ref(null);

// 获取响应式的 scroll 滚动
const { x: ulScrollLeft } = useScroll(ulTarget);

// watch 监听
watch(currentCategoryIndex, (value) => {
  const { left, width } = itemRefs[value].getBoundingClientRect();
  sliderStyle.value = {
    transform: `translateX(${ulScrollLeft.value + left - 10}px)`,
    width: `${width}px`,
  };
});

// item click
const onItemClick = (index) => {
  currentCategoryIndex.value = index;
  isVisable.value = false;
};

// 控制 popup 展示
const isVisable = ref(false);

const onShowPopup = () => {
  isVisable.value = true;
};
</script>
