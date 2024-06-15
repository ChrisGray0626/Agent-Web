<script lang="ts" setup>
import G6, { GraphData } from "@antv/g6";
import { onMounted } from "vue";
import {
  rootNode as rootNodeConfig,
  jsxNode as jsxNodeConfig,
  treeNode as treeNodeConfig,
} from "@/utils/nodeConfig";
import { BREAKDOWN_JSON_EXAMPLE_1 } from "@/constant";
import { indentedEdge as indentedEdgeConfig } from "@/utils/edgeConfig";

const props = defineProps<{
  graphId: number;
  graphData: GraphData;
}>();

const graphNum = function () {
  return "mountNode" + props.graphId;
};

G6.registerNode("rect-jsx", jsxNodeConfig);
G6.registerNode("rootNode", rootNodeConfig, "rect");
G6.registerNode("treeNode", treeNodeConfig);
G6.registerEdge("indentedEdge", indentedEdgeConfig, "polyline");

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
  tree.data(BREAKDOWN_JSON_EXAMPLE_1);
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
