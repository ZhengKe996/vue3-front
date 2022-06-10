<template>
  <div>
    <m-waterfall
      class="px-1 w-full"
      :data="pexelsList"
      nodeKey="id"
      :column="isMobileTerminal ? 2 : 5"
      :picturePreReading="false"
    >
      <template v-slot="{ item, width }">
        <item :data="item" :width="width"></item>
      </template>
    </m-waterfall>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { getPexlesList } from "@/api/pexels.js";
import { isMobileTerminal } from "@/utils/flexible.js";
import item from "./item.vue";
/**
 * 构建数据请求
 */
let query = {
  page: 1,
  size: 20,
};
const pexelsList = ref([]);
const getPexlesListData = async () => {
  const res = await getPexlesList(query);
  pexelsList.value = res;
};
getPexlesListData();
</script>
