<script lang="ts" setup>
import G6 from "@antv/g6";
import { onMounted } from "vue";
import { useDataStore } from "@/store/data.ts";

const props = defineProps<{
  graphId: string;
}>();

const dataStore = useDataStore();

const getGraphNum = function () {
  return "mountNode-" + props.graphId;
};

onMounted(() => {
  console.log("breakdown");
  const tree = new G6.TreeGraph({
    container: getGraphNum(),
    animate: false,
    layout: {
      type: "indented",
      direction: "LR",
      indent: 50,
    },
    modes: {
      default: ["activate-node", "drag-canvas"],
    },
    defaultNode: {
      type: "breakdownNode",
    },
    defaultEdge: {
      type: "indentedEdge",
    },
  });

  tree.data(dataStore.getTreeData);
  tree.render();
  tree.fitView();
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
