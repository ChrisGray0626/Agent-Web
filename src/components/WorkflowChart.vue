<!--
    @Description:
    @Author: Chris
    @Date: 2024/6/7
-->
<script setup lang="ts">
import { GraphData } from "@antv/g6-core/lib/types";
import { onMounted } from "vue";
import G6 from "@antv/g6";

const props = defineProps<{
  graphData: GraphData;
}>();

const CONTAINER_ID = "mountNode";

onMounted(() => {
  const graph = new G6.Graph({
    container: CONTAINER_ID,
    fitCenter: true,
    // fitView: true,
    // fitViewPadding: "200px",
    layout: {
      type: "dagre",
      nodesep: 30,
      ranksep: 20,
      preventOverlap: false,
      controlPoints: true,
      // align: "DR",
      // sortByCombo: true,
    },
    modes: {
      default: ["activate-node", "drag-canvas"],
    },
    defaultNode: {
      type: "rect",
      style: {
        cursor: "pointer",
      },
      labelCfg: {
        style: {
          cursor: "pointer",
        },
      },
      anchorPoints: [
        [0.5, 0],
        [0.5, 1],
      ],
    },
    defaultEdge: {
      type: "polyline",
      style: {
        radius: 10,
        stroke: "#000",
        endArrow: true,
      },
    },
  });
  graph.data(props.graphData);
  graph.render();
});
</script>

<template>
  <div :id="CONTAINER_ID"></div>
</template>

<style lang="less" scoped>
[id^="mountNode"] {
  height: 100%;
}
</style>
