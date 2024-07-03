<script lang="ts" setup>
import { useSessionStore } from "@/store/session.ts";
import BreakdownChart from "@/components/BreakdownChart.vue";

const sessionStore = useSessionStore();
</script>

<template>
  <div class="container">
    <template v-if="sessionStore.graphShow">
      <div class="collapse-item">
        <div class="collapse-title">
          <div>Question</div>
        </div>
        <div class="collapse-content">
          {{ sessionStore.session.question }}
        </div>
      </div>
      <div class="collapse-item">
        <div class="collapse-title">
          <div>Breakdown</div>
        </div>
        <div class="collapse-content" style="height: calc(100vh - 380px)">
          <BreakdownChart
            :graph-id="sessionStore.session.sessionId + '-breakdown'"
          />
        </div>
      </div>
    </template>
  </div>
</template>

<style lang="less" scoped>
.container {
  .collapse-item {
    box-sizing: border-box;
    background-color: #ffffff;
    border: 1px solid rgb(220, 223, 230);
    border-radius: 3px;
    margin: 20px 20px 0 20px;
    .collapse-title {
      box-sizing: border-box;
      margin: 10px;
    }
  }
  .collapse-content {
    //margin: 15px 20px 20px;
    padding: 10px;
    font-size: 14px;

    border-top: 1px dashed rgba(0, 0, 0, 0.18);
    //border-radius: 3px;
  }
}
</style>
