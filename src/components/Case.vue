<script setup lang="ts">
import { useSessionStore } from "../store/session.ts";

const sessionStore = useSessionStore();

function handleClick() {
  sessionStore.session.question =
    "Extract elevation data of Sri Lanka from multiple TIF files using the shape of the island from a vector file.";
  sessionStore.chatted();
}
</script>

<template>
  <el-button
    class="case-button"
    @click="handleClick"
    :disabled="sessionStore.loading"
    plain
  >
    <template #default> Elevation of Sri Lanka </template>
  </el-button>
</template>

<style scoped lang="less">
.case-button {
  height: 100px;
  width: 100%;
  box-shadow:
    0 0 8px 6px rgba(29, 28, 35, 0.06),
    0 0 2px 0 rgba(29, 28, 35, 0.18);
}
.el-button + .el-button {
  margin: 0;
}
</style>
