<script lang="ts" setup>
import WorkFlowChart from "@/components/WorkflowChart.vue";
import {addItemId, workflowData2Graph} from "@/utils/graphUtil.ts";
import {WORKFLOW_DATA_EXAMPLE_1} from "@/constant";

const workflowData = addItemId(WORKFLOW_DATA_EXAMPLE_1);
const workflowGraphData = workflowData2Graph(workflowData);
</script>

<template>
  <div class="container">
    <WorkFlowChart :graph-data="workflowGraphData"/>
  </div>
</template>

<style lang="less" scoped>
.container {
  height: 100%;
  overflow: hidden;
}
</style>
