<!--
    @Description:
    @Author: Chris
    @Date: 2024/6/7
-->
<script setup lang="ts">
import { onMounted } from "vue";
import G6 from "@antv/g6";
import { useDataStore } from "@/store/data.ts";

const props = defineProps<{
  graphId: string;
}>();

const dataStore = useDataStore();

const getGraphNum = function () {
  return "mountNode-" + props.graphId;
};

onMounted(() => {
  console.log("workflow");
  const graph = new G6.Graph({
    container: getGraphNum(),
    fitCenter: true,
    fitView: true,
    // fitViewPadding: 200,
    layout: {
      type: "dagre",
    },
    modes: {
      default: ["activate-node", "drag-canvas"],
    },
    defaultNode: {
      type: "workflowNode",
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
        endArrow: {
          path: G6.Arrow.circle(5), // 使用内置箭头路径函数，参数为箭头的 宽度、长度、偏移量（默认为 0，与 d 对应）
          // d: 25,
          fill: "#fff",
        },
      },
    },
  });

  graph.data(dataStore.getGraphData);
  graph.render();
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
