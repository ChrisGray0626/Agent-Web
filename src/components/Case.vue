<script setup lang="ts">
import { useSessionStore } from "../store/session.ts";
import { onMounted } from "vue";

const sessionStore = useSessionStore();

function handleClick() {
  sessionStore.session.question =
    "Extract elevation data of Sri Lanka from multiple TIF files using the shape of the island from a vector file";
  sessionStore.chatted();
}

onMounted(() => {
  // handleClick();
});
</script>

<template>
  <el-button
    class="case-button"
    @click="handleClick"
    v-if="sessionStore.questionShow"
    >Elevation of Sri Lanka</el-button
  >
  <div></div>
</template>

<style scoped lang="less">
.case-button {
  position: absolute;
  bottom: 20px;
  left: 20px;
}
</style>
