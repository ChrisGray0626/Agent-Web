<script lang="ts" setup>
import G6 from "@antv/g6";
import { onMounted } from "vue";

const props = defineProps<{
  id: number;
}>();

const data = {
  nodes: [
    {
      id: "node_id_1_1",
      label: "节点1-1",
    },
    {
      id: "node_id_2_1",
      label: "节点2-1",
    },
    {
      id: "node_id_2_2",
      label: "节点2-2",
    },
    {
      id: "node_id_3_1",
      label: "节点3-1",
    },
    {
      id: "node_id_3_2",
      label: "节点3-2",
    },
    {
      id: "node_id_3_3",
      label: "节点3-3",
    },
    {
      id: "node_id_3_4",
      label: "节点3-4",
    },
  ],
  edges: [
    {
      source: "node_id_1_1",
      target: "node_id_2_1",
      sourceAnchor: 1,
    },
    {
      source: "node_id_1_1",
      target: "node_id_2_2",
    },
    {
      source: "node_id_2_2",
      target: "node_id_3_1",
    },
    {
      source: "node_id_2_2",
      target: "node_id_3_2",
    },
    {
      source: "node_id_2_2",
      target: "node_id_3_3",
    },
    {
      source: "node_id_2_2",
      target: "node_id_3_4",
    },
  ],
};

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

  graph.data(data);
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
