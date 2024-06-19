import { defineStore } from "pinia";
import { reactive, ref } from "vue";

type Node = {
  name: string;
  description: string;
};

export const useNodeStore = defineStore("node", () => {
  const currentNode = reactive<Node>({
    name: "",
    description: "",
  });

  let configDisplay = ref(false);

  function changeData(nodeConfig: Node) {
    currentNode.name = nodeConfig.name;
    currentNode.description = nodeConfig.description;
    configDisplay.value = true;
  }
  function setConfigDisplay() {
    configDisplay.value = false;
  }
  return {
    currentNode,
    configDisplay,
    changeData,
    setConfigDisplay,
  };
});
