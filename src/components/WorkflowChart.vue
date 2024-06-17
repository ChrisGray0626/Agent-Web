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
  id: number;
  graphData: GraphData;
}>();

const graphNum = function () {
  return "mountNode" + props.id;
};

onMounted(() => {
  const graph = new G6.Graph({
    container: graphNum(),
    fitCenter: true,
    fitView: true,
    layout: {
      type: "dagre",
      nodesep: 30,
      ranksep: 20,
      preventOverlap: false,
      controlPoints: true,
      // align: "DR",
      // sortByCombo: true,
    },
    defaultNode: {
      type: "rect",
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
  <div :id="graphNum()"></div>
</template>

<style lang="less" scoped>
[id^="mountNode"] {
  height: 100%;
}
</style>
