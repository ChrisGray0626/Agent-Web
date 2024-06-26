<script lang="ts" setup>
import WorkflowChart from "@/components/WorkflowChart.vue";
import NodeConfig from "@/components/nodeConfig/index.vue";
import { useNodeStore } from "@/store/node.ts";
import { useSessionStore } from "@/store/session.ts";

const nodeStore = useNodeStore();
const sessionStore = useSessionStore();
</script>

<template>
  <div class="container">
    <WorkflowChart
      v-if="sessionStore.graphShow"
      :graph-id="sessionStore.session.sessionId + '-workflow'"
    />
    <NodeConfig v-show="nodeStore.configDisplay" />
  </div>
</template>

<style lang="less" scoped>
.container {
  height: 100%;
  overflow: hidden;
}
</style>
