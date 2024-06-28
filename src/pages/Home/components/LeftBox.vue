<script lang="ts" setup>
import { useSessionStore } from "@/store/session.ts";
import BreakdownChart from "@/components/BreakdownChart.vue";

const sessionStore = useSessionStore();
</script>

<template>
  <div class="container">
    <template v-if="sessionStore.graphShow">
      <div class="block">{{ sessionStore.session.question }}</div>
      <div class="block">
        <BreakdownChart
          :graph-id="sessionStore.session.sessionId + '-breakdown'"
        />
      </div>
    </template>
  </div>
</template>

<style lang="less" scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  .block {
    box-sizing: border-box;
    width: calc(100% - 16px);
    margin: 8px 0;
    &:nth-child(1) {
      //margin-top: 20px;
    }
    padding: 10px;
    background-color: #f3f4f6;
    box-shadow: 0 0 2px 1px rgba(black, 0.2);
    border-radius: 4px;
    color: grey;
    &:nth-child(2n) {
      height: calc(100vh - 170px);
      //flex: 1;
    }
  }
}
</style>
