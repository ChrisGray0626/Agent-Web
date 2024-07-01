<script lang="ts" setup>
import WorkflowChart from "@/components/WorkflowChart.vue";
import NodeConfig from "@/components/taskConfig/index.vue";
import {useNodeStore} from "@/store/task.ts";
import {useSessionStore} from "@/store/session.ts";

const nodeStore = useNodeStore();
const sessionStore = useSessionStore();
</script>

<template>
  <div class="container">
    <WorkflowChart
      v-if="sessionStore.graphShow"
      :graph-id="sessionStore.session.sessionId + '-workflow'"
    />
    <NodeConfig v-show="nodeStore.isShowed"/>
  </div>
</template>

<style lang="less" scoped>
.container {
  height: calc(100vh - 170px);
}
</style>
