<template>
  <mobile v-if="isMobileTerminal" />
  <p-c v-else />
</template>

<script setup>
import { onMounted, ref } from "vue";
import { isMobileTerminal } from "@/utils/flexible.js";
import { useStore } from "vuex";
import Mobile from "./mobile/index.vue";
import PC from "./pc/index.vue";

const store = useStore();
onMounted(() => {
  store.dispatch("category/useCategoryData");
});
</script>
