<script lang="ts" setup>
import G6 from "@antv/g6";
import { onMounted } from "vue";

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

onMounted(() => {
  const graph = new G6.Graph({
    container: "mountNode",
    fitCenter: true,
    fitView: true,
    layout: {
      type: "dagre",
    },
    defaultNode: {
      type: "rect",
    },
    defaultEdge: {
      type: "polyline",
      style: {
        radius: 10,
      },
    },
  });

  graph.data(data);
  graph.render();
});
</script>

<template>
  <div id="mountNode"></div>
</template>

<style lang="less" scoped>
#mountNode {
  height: 100%;
}
</style>
