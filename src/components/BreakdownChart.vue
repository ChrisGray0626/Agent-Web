<script lang="ts" setup>
import G6 from "@antv/g6";
import { onMounted } from "vue";

import { getNodeLabelFitting } from "@/G6/utils.ts";
import { useDataStore } from "@/store/data.ts";

const props = defineProps<{
  graphId: string;
}>();

const dataStore = useDataStore();

const getGraphNum = function () {
  return "mountNode" + props.graphId;
};

onMounted(() => {
  const tree = new G6.TreeGraph({
    container: getGraphNum(),
    fitView: true,
    fitCenter: true,
    animate: false,
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

  tree.data(getNodeLabelFitting(dataStore.getTreeData)); //TODO: display full content when mouse moves in
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
