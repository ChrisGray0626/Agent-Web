<template>
  <div class="container" id="container"></div>
</template>
<script setup lang="ts">
import LogicFlow, {Definition} from '@logicflow/core'
import '@logicflow/core/dist/style/index.css';
import { Control } from '@logicflow/extension';
import "@logicflow/extension/lib/style/index.css";

import {onMounted} from "vue";

const graphData = {
  nodes: [
    {
      id: "node_id_1",
      type: "rect",
      x: 100,
      y: 100,
      text: {x: 100, y: 100, value: '节点1'},
      properties: {}
    },
    {
      id: "node_id_2",
      type: "circle",
      x: 200,
      y: 300,
      text: {x: 300, y: 300, value: '节点2'},
      properties: {}
    }
  ],
  edges: [
    {
      id: "edge_id",
      type: "polyline",
      sourceNodeId: "node_id_1",
      targetNodeId: "node_id_2",
      text: {x: 139, y: 200, value: "连线"},
      startPoint: {x: 100, y: 140},
      endPoint: {x: 200, y: 250},
      pointsList: [{x: 100, y: 140}, {x: 100, y: 200}, {x: 200, y: 200}, {x: 200, y: 250}],
      properties: {}
    }
  ]
}

onMounted(() => {
  const lf = new LogicFlow(<Definition>{
    container: document.getElementById('container'),
    stopScrollGraph: true,
    stopZoomGraph: true,
    // TODO width and height
    width: 800,
    height: 600,
    grid: true,
    plugins: [Control],
  });
  lf.render(graphData);
});
</script>
<style scoped lang="less">
//.container {
//  width: 100%;
//  height: 100%;
//}
</style>