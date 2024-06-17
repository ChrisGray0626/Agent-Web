<script lang="ts" setup>
import G6, { GraphData } from "@antv/g6";
import { onMounted } from "vue";
import {
  rootNode as rootNodeConfig,
  jsxNode as jsxNodeConfig,
  treeNode as treeNodeConfig,
} from "@/utils/nodeConfig";
import { indentedEdge as indentedEdgeConfig } from "@/utils/edgeConfig";
import { activateNodeBehaviorConfig } from "@/utils/behaviorConfig.ts";

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
G6.registerBehavior("activate-node", activateNodeBehaviorConfig);

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
      default: ["activate-node"],
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
