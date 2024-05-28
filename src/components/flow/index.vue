<template>
  <div class="container" id="container"></div>
</template>
<script setup lang="ts">
import LogicFlow, {Definition} from '@logicflow/core'
import '@logicflow/core/dist/style/index.css';
import {Control} from '@logicflow/extension';
import "@logicflow/extension/lib/style/index.css";

import {onMounted} from "vue";

import Dagre from "./dagre.ts";
import Node from "./node.ts";
import Edge from "./edge.ts";

let graphData = {
  nodes: [
    {
      id: "node_id_1_1",
      x: 200,
      y: 200,
      type: "beautify-node",
      // type: "center-node",
      text: {value: '节点1-1'},
      properties: {
        "input": "input",
        "output": "output"
      }
    },
    {
      id: "node_id_2_1",
      type: "beautify-node",
      text: {value: '节点2-1'},
    },
    {
      id: "node_id_2_2",
      type: "beautify-node",
      text: {value: '节点2-2'},
    },
    {
      id: "node_id_3_1",
      type: "beautify-node",
      text: {value: '节点3-1'},
    },
    {
      id: "node_id_3_2",
      type: "beautify-node",
      text: {value: '节点3-2'},
    },
    {
      id: "node_id_3_3",
      type: "beautify-node",
      text: {value: '节点3-3'},
    },
    {
      id: "node_id_3_4",
      type: "beautify-node",
      text: {value: '节点3-4'},
    },
  ],
  edges: [
    {
      id: "edge_id_1",
      type: "beautify-line",
      sourceNodeId: "node_id_1_1",
      targetNodeId: "node_id_2_1",
    },
    {
      id: "edge_id_2",
      type: "beautify-line",
      sourceNodeId: "node_id_1_1",
      targetNodeId: "node_id_2_2",
    },
    {
      id: "edge_id_3",
      type: "beautify-line",
      sourceNodeId: "node_id_2_2",
      targetNodeId: "node_id_3_1",
    },
    {
      id: "edge_id_4",
      type: "beautify-line",
      sourceNodeId: "node_id_2_2",
      targetNodeId: "node_id_3_2",
    },
    {
      id: "edge_id_5",
      type: "beautify-line",
      sourceNodeId: "node_id_2_2",
      targetNodeId: "node_id_3_3",
    },
    {
      id: "edge_id_6",
      type: "beautify-line",
      sourceNodeId: "node_id_2_2",
      targetNodeId: "node_id_3_4",
    },
  ]
}

onMounted(() => {
  // LogicFlow 只能在 onMounted 阶段初始化，此时才获取到 container
  const lf = new LogicFlow(<Definition>{
    container: document.getElementById('container'),
    stopScrollGraph: true,
    stopZoomGraph: true,
    isSilentMode: true,
    // TODO width and height
    width: 800,
    height: 600,
    grid: true,
    plugins: [
      Control,
      Dagre,
    ],
  });

  lf.register(Node)
  lf.register(Edge)

  lf.render(graphData);
  // Auto layout
  lf.extension.dagre.layout({
    nodesep: 20,
    ranksep: 20,
  });
});
</script>
<style scoped lang="less">
</style>