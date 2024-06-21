<!--
    @Description:
    @Author: Chris
    @Date: 2024/6/7
-->
<script setup lang="ts">
import {onMounted} from "vue";
import G6 from "@antv/g6";
import {useDataStore} from "@/store/data.ts";

const CONTAINER_ID = "mountNode";
const dataStore = useDataStore();

onMounted(() => {
  const graph = new G6.Graph({
    container: CONTAINER_ID,
    fitCenter: true,
    layout: {
      type: "dagre",
    },
    modes: {
      default: ["activate-node", "drag-canvas"],
    },
    defaultNode: {
      style: {
        cursor: "pointer",
      },
      labelCfg: {
        position: "right",
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

  graph.data(dataStore.getGraphData);
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
