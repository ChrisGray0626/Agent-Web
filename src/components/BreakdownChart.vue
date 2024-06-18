<script lang="ts" setup>
import G6, { GraphData } from "@antv/g6";
import { onMounted } from "vue";

const props = defineProps<{
  graphId: number;
  graphData: GraphData;
}>();

const graphNum = function () {
  return "mountNode" + props.graphId;
};

onMounted(() => {
  const tree = new G6.TreeGraph({
    container: graphNum(),
    fitView: true,
    fitCenter: true,
    layout: {
      type: "indented",
      isHorizontal: true,
      indent: 40,
    },
    modes: {
      default: ["activate-node", "drag-canvas"],
    },
    defaultEdge: {
      type: "indentedEdge",
      style: {
        lineWidth: 2,
        radius: 16,
      },
    },
    defaultNode: {
      type: "treeNode",
    },
  });
  tree.data(props.graphData);
  tree.render();
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
