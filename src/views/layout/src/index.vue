<template>
  <div class="h-screen">
    <pc-header class="h-header"></pc-header>
    <div class="h-main">
      <pc-main></pc-main>
    </div>
    <pc-floating></pc-floating>
  </div>
</template>

<script setup>
import PcHeader from "../component/Header";
import PcMain from "../component/Main";
import PcFloating from "../component/Floating";
</script>

<style lang="scss" scoped></style>
