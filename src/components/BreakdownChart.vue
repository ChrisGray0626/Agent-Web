<script lang="ts" setup>
import G6 from "@antv/g6";
import { onMounted } from "vue";
import { useJobStore } from "@/store/job.ts";
import { IG6GraphEvent } from "@antv/g6-core/lib/types";
import { useGraphStore } from "@/store/graph.ts";
import { storeToRefs } from "pinia";
import { Task } from "@/type.ts";

const props = defineProps<{
  graphId: string;
}>();

const jobStore = useJobStore();
const graphStore = useGraphStore();
let { tree, graph } = storeToRefs(graphStore);

const getGraphNum = function () {
  return "mountNode-" + props.graphId;
};

onMounted(() => {
  console.log("breakdown");
  tree.value = new G6.TreeGraph({
    container: getGraphNum(),
    animate: false,
    layout: {
      type: "indented",
      direction: "LR",
      indent: 50,
    },
    modes: {
      default: [
        // "activate-node",
        "drag-canvas",
      ],
    },
    defaultNode: {
      type: "breakdownNode",
    },
    defaultEdge: {
      type: "indentedEdge",
    },
  });

  tree.value.data(jobStore.breakdownData);
  tree.value.render();
  tree.value.fitCenter();

  tree.value.on("node:mouseover", (evt: IG6GraphEvent) => {
    const node = evt.item;
    node?.setState("hover", true);
    const EqNode = graph.value!.find("node", (n) => {
      return (
        (n.getModel().task as Task).name ===
        (node?.getModel().task as Task).name
      );
    });
    if (EqNode) {
      graph.value!.setItemState(EqNode, "hover", true);
    }
  });
  tree.value.on("node:mouseout", (evt: IG6GraphEvent) => {
    const node = evt.item;
    node?.setState("hover", false);
    const EqNode = graph.value!.find("node", (n) => {
      return (
        (n.getModel().task as Task).name ===
        (node?.getModel().task as Task).name
      );
    });
    if (EqNode) {
      graph.value!.setItemState(EqNode, "hover", false);
    }
  });
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
