<script lang="ts" setup>
import WorkFlowChart from "@/components/WorkflowChart.vue";
import { addItemId, workflowData2Graph } from "@/utils/graphUtil.ts";
import { WORKFLOW_DATA_EXAMPLE_1 } from "@/constant";
import NodeConfig from "@/components/nodeConfig/index.vue";
import { useNodeStore } from "@/store/node.ts";

const workflowData = addItemId(WORKFLOW_DATA_EXAMPLE_1);
const workflowGraphData = workflowData2Graph(workflowData);

const nodeStore = useNodeStore();
</script>

<template>
  <div class="container">
    <WorkFlowChart :graph-data="workflowGraphData" />
    <NodeConfig v-if="nodeStore.configDisplay" />
  </div>
</template>

<style lang="less" scoped>
.container {
  height: 100%;
  overflow: hidden;
}
</style>
