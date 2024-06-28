import { defineStore } from "pinia";
import { reactive, ref } from "vue";
import { Node } from "@/type.ts";

export const useNodeStore = defineStore("node", () => {
  const activateNode = reactive<Node>({
    id: "",
    name: "",
    description: "",
    args: [],
  });

  let configDisplay = ref(false);

  function changeData(nodeConfig: Node) {
    activateNode.id = nodeConfig.id;
    activateNode.name = nodeConfig.name;
    activateNode.description = nodeConfig.description;
    activateNode.args = nodeConfig.args;
    configDisplay.value = true;
  }
  function setConfigDisplay() {
    configDisplay.value = false;
  }
  return {
    activateNode,
    configDisplay,
    changeData,
    setConfigDisplay,
  };
});
