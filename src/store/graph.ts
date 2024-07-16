import { defineStore } from "pinia";
import { ref } from "vue";
import { Graph, TreeGraph } from "@antv/g6";

export const useGraphStore = defineStore("graph", () => {
  let graph = ref<Graph>();
  const tree = ref<TreeGraph>();
  return { graph, tree };
});
