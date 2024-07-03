<script setup lang="ts">
import { useSessionStore } from "../store/session.ts";
import { onMounted } from "vue";

const props = defineProps<{
  name: string;
}>();
const sessionStore = useSessionStore();

function handleClick() {
  sessionStore.session.question = "Calculation of Flood Affected Area";
  sessionStore.chatted();
}

onMounted(() => {
  // handleClick();
});
</script>

<template>
  <el-button @click="handleClick"
    ><div>
      {{ props.name }}
    </div></el-button
  >
</template>

<style scoped lang="less"></style>
