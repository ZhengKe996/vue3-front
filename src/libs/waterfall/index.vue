<template>
  <div
    class="relative"
    ref="containerTarget"
    :style="{
      height: containerHeight + 'px',
    }"
  >
    <!-- 数据渲染 -->
    <template v-if="columnWidth && data.length">
      <div
        v-for="(item, index) in data"
        :key="nodeKey ? item[nodeKey] : index"
        class="m-waterfall-item absolute duration-300"
        :style="{
          width: columnWidth + 'px',
          left: item._style?.left + 'px',
          top: item._style?.top + 'px',
        }"
      >
        <slot :item="item" :width="columnWidth" :index="index" />
      </div>
    </template>
    <!-- 加载中 -->
    <div v-else>加载中...</div>
  </div>
</template>

<script setup>
import { computed, nextTick, onMounted, ref, watch } from "vue";
import { getImgElements, getAllImg, onComplateImgs } from "./utils";
const props = defineProps({
  // 数据源
  data: {
    type: Array,
    required: true,
  },
  // 唯一标识 key
  nodeKey: {
    type: String,
  },
  // 列数
  column: {
    default: 2,
    type: Number,
  },
  // 列间距
  columnSpacing: {
    default: 20,
    type: Number,
  },
  // 行间距
  rowSpacing: {
    default: 20,
    type: Number,
  },
  // 是否需要进行图片预读取
  picturePreReading: {
    type: Boolean,
    default: true,
  },
});

// 容器总高度
const containerHeight = ref(0);

// 记录每列高度的容器 key:列 value: 列高
const columnHeightObj = ref({});

/**
 * 构建记录每列高度的对象
 */
const useColumnHeightObj = () => {
  columnHeightObj.value = {};
  for (let i = 0; i < props.column; i++) {
    columnHeightObj.value[i] = 0;
  }
};

// 容器实例
const containerTarget = ref(null);
// 容器总宽度 不包含 padding margin border
const containerWidth = ref(0);
// 容器左边距，计算 item 的 left
const containerLeft = ref(0);
/**
 * 计算容器宽度
 */
const useContainerWidth = () => {
  const { paddingLeft, paddingRight } = getComputedStyle(
    containerTarget.value,
    null
  );

  // 容器左边距
  containerLeft.value = parseFloat(paddingLeft);
  // 容器的宽度
  containerWidth.value =
    containerTarget.value.offsetWidth -
    parseFloat(paddingLeft) -
    parseFloat(paddingRight);
};

// 列宽
const columnWidth = ref(0);

// 列间距合计
const columnSpacingTotal = computed(() => {
  return (props.column - 1) * props.columnSpacing;
});

/**
 * 计算列宽
 */
const useColumnWidth = () => {
  // 计算容器宽度
  useContainerWidth();
  // 计算列宽
  columnWidth.value =
    (containerWidth.value - columnSpacingTotal.value) / props.column;
};

onMounted(() => {
  // 计算列宽
  useColumnWidth();
  console.log(columnWidth.value);
});

// item 高度集合
let itemHeights = [];

/**
 * 监听图片加载完成 需要图片预加载
 * */
const waitImgComplate = () => {
  itemHeights = [];

  // 拿到所有的元素
  let itemElements = [...document.getElementsByClassName("m-waterfall-item")];

  // 获取到元素的 img 标签
  const imgElements = getImgElements(itemElements);

  // 获取所有 img标签的图片
  const allImgs = getAllImg(imgElements);

  // 等待图片加载完成
  onComplateImgs(allImgs).then(() => {
    // 图片加载完成
    itemElements.forEach((el) => {
      itemHeights.push(el.offsetHeight);
    });
    // 渲染位置
    useItemLocation();
  });
};

/**
 * 不需要图片预加载
 */
const useItemHeight = () => {
  itemHeights = [];
  // 拿到所有的元素
  let itemElements = [...document.getElementsByClassName("m-waterfall-item")];

  // 计算 item 高度
  itemElements.forEach((el) => {
    itemHeights.push(el.offsetHeight);
  });
  useItemLocation();
};

// 渲染位置
const useItemLocation = () => {
  console.log(itemHeights);
};

/**
 * 触发计算
 */
watch(
  () => props.data,
  (newValue) => {
    nextTick(() => {
      if (props.picturePreReading) {
        waitImgComplate();
      } else {
        useItemHeight();
      }
    });
  },
  {
    deep: true,
    immediate: true,
  }
);
</script>
