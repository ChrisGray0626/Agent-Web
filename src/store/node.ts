import { defineStore } from "pinia";
import { reactive, ref } from "vue";
import { Node } from "@/type.ts";
import { NodeConfig } from "@antv/g6";
import { fetchTool } from "@/api";

export const useNodeStore = defineStore("node", () => {
  const node = reactive<Node>({
    id: "",
    name: "",
    description: "",
    args: [],
  });

  let configDisplay = ref(false);

  async function updateData(nodeConfig: NodeConfig) {
    node.id = nodeConfig.id;
    node.name = nodeConfig.label as string;
    node.description = nodeConfig.description!;
    // TODO fetchTool
    // const res = await fetchTool(node.id).data;
    const res = ((await fetchTool(node.id)) as { data: any }).data;
    node.args = res.args;
    configDisplay.value = true;
  }
  function setConfigDisplay() {
    configDisplay.value = false;
  }
  return {
    activateNode: node,
    configDisplay,
    updateData,
    setConfigDisplay,
  };
});
