<template>
  <div>
    <m-infinite
      v-model="loading"
      :isFinished="isFinished"
      @onLoad="getPexlesData"
    >
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
    </m-infinite>
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
// 数据是否加载中
const loading = ref(false);
// 数据是否全部加载完成
const isFinished = ref(false);
const pexelsList = ref([]);
const getPexlesData = async () => {
  // 数据全部加载完 return
  if (isFinished.value) return;

  // 完成了第一次请求后，后续的请求让page自增
  if (pexelsList.value.length) {
    query.page += 1;
  }

  // 触发接口
  const res = await getPexlesList(query);
  if (query.page === 1) {
    pexelsList.value = res;
  } else {
    pexelsList.value.push(...res);
  }
  // 判断数据是否全部加载完成
  if (pexelsList.value.length === res.length * 10) {
    isFinished.value = true;
  }
  // 修改 loading 标记
  loading.value = false;
};
</script>
