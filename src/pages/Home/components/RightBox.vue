<script lang="ts" setup>
import WorkFlowChart from "@/components/WorkflowChart.vue";
import { treeJson2Graph } from "@/utils/graphUtil.ts";
import { BREAKDOWN_JSON_EXAMPLE_1, GRAPH_DATA_EXAMPLE } from "@/constant";

const breakdownGraphData = treeJson2Graph(BREAKDOWN_JSON_EXAMPLE_1);
</script>

<template>
  <div class="container">
    <WorkFlowChart :graph-data="GRAPH_DATA_EXAMPLE" :id="1" />
  </div>
</template>

<style lang="less" scoped>
.container {
  height: 100%;
  overflow: hidden;
}
</style>
