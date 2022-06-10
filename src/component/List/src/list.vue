<template>
  <div>
    <m-waterfall
      :data="pexelsList"
      nodeKey="id"
      :column="5"
      :picturePreReading="true"
    >
      <template v-slot="{ item, width }">
        <item :data="item"></item>
      </template>
    </m-waterfall>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { getPexlesList } from "@/api/pexels.js";
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
