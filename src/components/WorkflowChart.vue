<!--
    @Description:
    @Author: Chris
    @Date: 2024/6/7
-->
<script setup lang="ts">
import { onMounted } from "vue";
import G6 from "@antv/g6";
import { useJobStore } from "@/store/job.ts";

const props = defineProps<{
  graphId: string;
}>();

const jobStore = useJobStore();

const getGraphNum = function () {
  return "mountNode-" + props.graphId;
};

onMounted(() => {
  console.log("workflow");
  const graph = new G6.Graph({
    container: getGraphNum(),
    fitView: true,
    layout: {
      type: "dagre",
      ranksep: 12,
    },
    modes: {
      default: ["activate-node", "drag-canvas"],
    },
    defaultNode: {
      type: "workflowNode",
    },
    defaultEdge: {
      type: "workflowEdge",
    },
  });

  graph.data(jobStore.workflowData);
  graph.render();

  const group = graph.get("edgeGroup");
  group.toFront();
});
</script>

<template>
  <div :id="getGraphNum()"></div>
</template>

<style lang="less" scoped>
[id^="mountNode"] {
  height: 100%;
}
</style>
