<template>
  <div
    class="group relative p-0.5 rounded-xl border-white duration-500 hover:bg-blue-100/40"
  >
    <div class="">
      <m-svg-icon
        name="search"
        color="#707070"
        class="w-2 h-2 absolute translatey-[-50%] top-[35%] left-2"
      />

      <input
        class="block w-full h-[44px] pl-4 outline-0 bg-zinc-100 caret-zinc-400 duration-500 rounded-xl text-zinc-900 tracking-wide font-semibold border border-zinc-100 focus:border-blue-300 text-sm group-hover:bg-white group-hover:border-zinc-200"
        placeholder="搜索"
        type="text"
      />
      <m-svg-icon
        name="delete"
        class="h-2 w-2 absolute translatey-[-50%] top-[35%] right-9 duration-500 cursor-pointer"
      />
      <div
        class="opacity-0 h-2 w-[1px] absolute translate-y-[-50%] top-[50%] right-[62px] duration-500 bg-zinc-200 group-hover:opacity-100"
      ></div>
      <!-- TODO: 通用组件 -->
      <m-button
        icon="search"
        class="absolute translate-y-[-50%] top-[50%] right-1.5 rounded-full"
        iconColor="#ffffff"
      ></m-button>
    </div>
    <!-- 下拉区 -->
    <transition name="slide">
      <div
        class="max-h-[368px] w-full text-base overflow-auto bg-white absolute z-20 left-0 top-[56px] p-2 rounded border border-zinc-200 duration-200 hover: shadow-2xl"
      >
        <slot name="dropdown"></slot>
      </div>
    </transition>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.slide-enter-active,
.slide-leave-active {
  transition: all 0.5s;
}

.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translateY(40px);
}
</style>
