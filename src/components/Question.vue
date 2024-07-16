<script lang="ts" setup>
import { Search, Top } from "@element-plus/icons-vue";
import { useSessionStore } from "../store/session.ts";

const sessionStore = useSessionStore();
</script>

<template>
  <div class="container">
    <el-input
      v-model="sessionStore.session.question"
      placeholder="Type Something"
      @change="sessionStore.chatted()"
      style="height: 50px"
      resize="none"
      size="large"
      :disabled="sessionStore.loading"
    >
      <template #suffix>
        <el-button text :icon="Top" :loading="sessionStore.loading" />
      </template>
      <template #prefix>
        <el-icon><Search /></el-icon>
      </template>
    </el-input>
  </div>
</template>

<style lang="less" scoped>
.container {
  box-shadow:
    0 0 8px 6px rgba(29, 28, 35, 0.06),
    0 0 2px 0 rgba(29, 28, 35, 0.18);
  margin: 20px;
  width: 100%;
  border-radius: 5px;
}
</style>
