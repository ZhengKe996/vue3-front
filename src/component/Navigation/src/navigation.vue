<template>
  <mobile :data="categorys" v-if="isMobileTerminal" />
  <p-c v-else />
</template>

<script setup>
import { onMounted, ref } from "vue";
import { isMobileTerminal } from "@/utils/flexible.js";
import { getCategory } from "@/api/category.js";
import Mobile from "./mobile/index.vue";
import PC from "./pc/index.vue";

const categorys = ref([]);
onMounted(() => {
  categorys.value = getCategory();
});
</script>
