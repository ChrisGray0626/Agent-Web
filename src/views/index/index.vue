<script lang="ts" setup>
import CenterBox from "/src/components/CenterBox.vue";
import TitleBar from "/src/components/TitleBar.vue";
import LeftBox from "/src/components/LeftBox.vue";
</script>

<template>
  <TitleBar />
  <div class="container">
    <LeftBox />
    <CenterBox />
  </div>
</template>

<style lang="less" scoped>
.container {
  display: flex;
}
</style>
