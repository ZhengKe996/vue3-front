<template>
  <svg aria-hidden="true">
    <use :xlink:href="symbolId" :class="fillClass" :fill="color" />
  </svg>
</template>

<script setup lang="ts">
import { computed } from "vue";

const props = defineProps({
  name: { type: String, required: true },
  color: { type: String },
  fillClass: { type: String },
});

// 真实显示的SVG图标
const symbolId = computed(() => `#icon-${props.name}`);
</script>
