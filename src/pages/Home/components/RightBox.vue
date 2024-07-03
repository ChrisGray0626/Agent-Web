<script lang="ts" setup>
import WorkflowChart from "@/components/WorkflowChart.vue";
import NodeConfig from "@/components/taskConfig/index.vue";
import { useTaskStore } from "@/store/task.ts";
import { useSessionStore } from "@/store/session.ts";

const taskStore = useTaskStore();
const sessionStore = useSessionStore();
</script>

<template>
  <div class="container">
    <WorkflowChart
      v-if="sessionStore.graphShow"
      :graph-id="sessionStore.session.sessionId + '-workflow'"
    />
    <NodeConfig v-if="taskStore.isShowed" />
  </div>
</template>

<style lang="less" scoped>
.container {
  height: 100%;
}
</style>
