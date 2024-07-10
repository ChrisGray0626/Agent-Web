<!--
    @Description:
    @Author: Chris
    @Date: 2024/6/7
-->
<script setup lang="ts">
import { onMounted } from "vue";
import G6 from "@antv/g6";
import { useJobStore } from "@/store/job.ts";
import { useTaskStore } from "@/store/task.ts";
import { IG6GraphEvent } from "@antv/g6-core/lib/types";
import { useGraphStore } from "@/store/graph.ts";
import { storeToRefs } from "pinia";

const props = defineProps<{
  graphId: string;
}>();

const jobStore = useJobStore();
const taskStore = useTaskStore();
const graphStore = useGraphStore();
let { graph, tree } = storeToRefs(graphStore);

const getGraphNum = function () {
  return "mountNode-" + props.graphId;
};

onMounted(() => {
  console.log("workflow");
  graph.value = new G6.Graph({
    container: getGraphNum(),
    fitCenter: true,
    layout: {
      type: "dagre",
      ranksep: 12,
    },
    modes: {
      default: ["activate-node", "drag-canvas"],
    },
    defaultNode: {
      type: "workflowNode",
    },
    defaultEdge: {
      type: "workflowEdge",
    },
  });

  graph.value.data(jobStore.workflowData);
  graph.value.render();

  const group = graph.value.get("edgeGroup");
  group.toFront();

  graph.value.on("click", () => {
    taskStore.close();
  });

  graph.value.on("node:mouseover", (evt: IG6GraphEvent) => {
    const node = evt.item;
    node?.setState("hover", true);
    tree.value!.setItemState(
      tree.value!.find("node", (node) => {
        return node.getModel().label === node?.getModel().label;
      })!,
      "hover",
      true,
    );
  });
  graph.value.on("node:mouseout", (evt: IG6GraphEvent) => {
    const node = evt.item;
    node?.setState("hover", false);
    tree.value!.setItemState(
      tree.value!.find("node", (node) => {
        return node.getModel().label === node?.getModel().label;
      })!,
      "hover",
      false,
    );
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
