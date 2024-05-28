<template>
  <div class="container" id="container"></div>
</template>
<script setup lang="ts">
import LogicFlow, {Definition} from '@logicflow/core'
import '@logicflow/core/dist/style/index.css';
import { Control } from '@logicflow/extension';
import "@logicflow/extension/lib/style/index.css";

import {onMounted} from "vue";
import {layoutGraphData} from "/src/utils/autoLayout/layout"
import RootNode from "/src/utils/autoLayout/RootNode";
import Edge from "/src/utils/autoLayout/Edge";
import Node from "../../utils/autoLayout/Node.ts";

const lf = new LogicFlow(<Definition>{
  container: document.getElementById('container'),
  stopScrollGraph: true,
  stopZoomGraph: true,
  isSilentMode: true,
  // TODO width and height
  width: 800,
  height: 600,
  grid: true,
  plugins: [Control],
});

let graphData = {
  nodes: [
    {
      id: "node_id_1_1",
      x: 200,
      y: 200,
      type: "center-node",
      text: {value: '节点1-1'},
      properties: {
        "input": "input",
        "output": "output"
      }
    },
    {
      id: "node_id_2_1",
      type: "sub-node",
      text: {value: '节点2-1'},
    },
    {
      id: "node_id_2_2",
      type: "sub-node",
      text: {value: '节点2-2'},
    },
    {
      id: "node_id_3_1",
      type: "sub-node",
      text: {value: '节点3-1'},
    },
    {
      id: "node_id_3_2",
      type: "sub-node",
      text: {value: '节点3-2'},
    },
    {
      id: "node_id_3_3",
      type: "sub-node",
      text: {value: '节点3-3'},
    },
    {
      id: "node_id_3_4",
      type: "sub-node",
      text: {value: '节点3-4'},
    },
  ],
  edges: [
    {
      id: "edge_id_1",
      type: "mindmap-edge",
      sourceNodeId: "node_id_1_1",
      targetNodeId: "node_id_2_1",
    },
    {
      id: "edge_id_2",
      type: "mindmap-edge",
      sourceNodeId: "node_id_1_1",
      targetNodeId: "node_id_2_2",
    },
    {
      id: "edge_id_3",
      type: "mindmap-edge",
      sourceNodeId: "node_id_2_2",
      targetNodeId: "node_id_3_1",
    },
    {
      id: "edge_id_4",
      type: "mindmap-edge",
      sourceNodeId: "node_id_2_2",
      targetNodeId: "node_id_3_2",
    },
    {
      id: "edge_id_5",
      type: "mindmap-edge",
      sourceNodeId: "node_id_2_2",
      targetNodeId: "node_id_3_3",
    },
    {
      id: "edge_id_6",
      type: "mindmap-edge",
      sourceNodeId: "node_id_2_2",
      targetNodeId: "node_id_3_4",
    },
  ]
}



onMounted(() => {
  lf.register(RootNode)
  lf.register(Node)
  lf.register(Edge)
  lf.render(graphData);
  graphData = lf.getGraphData()
  const { nodes, edges } = layoutGraphData(graphData)

  const nodeIdMap =  nodes.reduce((acc, cur) => {
    acc[cur.id] = cur
    return acc
  }, {})
  // 处理edge弧线，保持其美观
  edges.map((edge) => {
    const {
      sourceNodeId,
      targetNodeId
    } = edge
    // const sModel = lf.getNodeModelById(sourceNodeId)
    const tModel = lf.getNodeModelById(targetNodeId)
    // console.log('targetNodeId', targetNodeId)
    // console.log('tModel', tModel)
    const startPoint = {
      x: nodeIdMap[sourceNodeId].x,
      y: nodeIdMap[sourceNodeId].y
    }
    const sJustPoint = {
      x: nodeIdMap[targetNodeId].x - tModel.width / 2 - 100,
      y: nodeIdMap[targetNodeId].y
    }
    const tJustPoint = {
      x: nodeIdMap[targetNodeId].x - tModel.width / 2 - 100,
      y: nodeIdMap[targetNodeId].y
    }
    const endPoint = {
      x: nodeIdMap[targetNodeId].x - tModel.width / 2,
      y: nodeIdMap[targetNodeId].y
    }
    edge.startPoint = startPoint
    edge.endPoint = endPoint
    edge.pointsList = [
      startPoint,
      sJustPoint,
      tJustPoint,
      endPoint
    ]
  })

  lf.render({ nodes, edges });
});
</script>
<style scoped lang="less">
</style>