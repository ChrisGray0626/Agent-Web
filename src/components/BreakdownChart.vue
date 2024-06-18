<script lang="ts" setup>
import G6 from "@antv/g6";
import { onMounted } from "vue";
import { TreeNode } from "@/utils/graphUtil.ts";
import { fittingString } from "@/G6";

const props = defineProps<{
  graphId: number;
  graphData: TreeNode;
}>();

const getGraphNum = function () {
  return "mountNode" + props.graphId;
};

const getNodeLabelFitting = function (data: TreeNode) {
  const { label, children, toolId, toolName } = data;
  const newData: TreeNode = {
    label: fittingString(label, 200, 10),
    toolId,
    toolName,
    children: [],
  };
  if (children && children.length >= 1) {
    for (let i = 0; i < children.length; i++) {
      newData.children[i] = getNodeLabelFitting(children[i]);
    }
  }
  return newData;
};

onMounted(() => {
  const tree = new G6.TreeGraph({
    container: getGraphNum(),
    fitView: true,
    fitCenter: true,
    layout: {
      type: "indented",
      // isHorizontal: true,
      indent: 30,
    },
    modes: {
      default: ["activate-node", "drag-canvas"],
    },
    defaultEdge: {
      type: "indentedEdge",
      style: {
        stroke: "#656565",
        radius: 16,
      },
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
        [0.5, 1],
        [0, 0.5],
      ],
    },
  });

  tree.data(getNodeLabelFitting(props.graphData));
  tree.render();
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
