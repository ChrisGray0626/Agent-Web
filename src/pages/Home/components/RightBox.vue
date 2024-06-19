<script lang="ts" setup>
import WorkflowChart from "@/components/WorkflowChart.vue";
import { jobData2Graph } from "@/utils/graphUtil.ts";
import { JOB_EXAMPLE } from "@/constant";
import NodeConfig from "@/components/nodeConfig/index.vue";
import { useNodeStore } from "@/store/node.ts";

// const workflowData = addItemId(WORKFLOW_DATA_EXAMPLE_1);
const workflowGraphData = jobData2Graph(JOB_EXAMPLE);

const nodeStore = useNodeStore();
</script>

<template>
  <div class="container">
    <WorkflowChart :graph-data="workflowGraphData" />
    <NodeConfig v-if="nodeStore.configDisplay" />
  </div>
</template>

<style lang="less" scoped>
.container {
  height: 100%;
  overflow: hidden;
}
</style>
