<template>
  <m-popover class="flex items-center" placement="bottom-left">
    <template #reference>
      <div
        class="relative flex items-center p-0.5 rounded-sm cursor-pointer duration-200 outline-none hover:bg-zinc-100"
      >
        <img
          class="w-3 h-3 rounded-sm"
          src="https://zhengke-img.oss-cn-hangzhou.aliyuncs.com/user.jpg"
        />
        <m-svg-icon
          class="h-1.5 w-1.5 ml-0.5"
          fillClass="fill-zinc-900"
          name="down-arrow"
        ></m-svg-icon>

        <m-svg-icon
          name="vip"
          class="h-1.5 w-1.5 absolute right-[16px] bottom-0"
        ></m-svg-icon>
      </div>
    </template>
    <div class="w-[140px] overflow-hidden">
      <div
        v-for="item of menuArr"
        :key="item.id"
        class="flex items-center p-1 cursor-pointer rounded hover:bg-zinc-100/60"
      >
        <m-svg-icon
          :name="item.icon"
          class="w-1.5 h-1.5 mr-1"
          fillClass="fill-zinc-900"
        ></m-svg-icon>
        <span class="text-zinc-800 text-sm"> {{ item.title }} </span>
      </div>
    </div>
  </m-popover>
</template>

<script setup>
const menuArr = [
  {
    id: 0,
    title: "个人资料",
    icon: "profile",
    path: "/profile",
  },
  {
    id: 1,
    title: "升级VIP",
    icon: "vip-profile",
    path: "/memeber",
  },
  {
    id: 2,
    title: "个人资料",
    icon: "logout",
    path: "/",
  },
];
</script>

<style lang="scss" scoped></style>
