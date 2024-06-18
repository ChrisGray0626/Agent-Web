import { defineStore } from "pinia";
import { reactive, ref } from "vue";

type Node = {
  name: string;
  description: string;
  input: { key: string; value: string }[];
  output: { key: string; value: string }[];
};

export const useNodeStore = defineStore("node", () => {
  const currentNode = reactive<Node>({
    name: "",
    description: "",
    input: [],
    output: [],
  });

  let configDisplay = ref(false);

  function changeData(nodeConfig: Node) {
    currentNode.name = nodeConfig.name;
    currentNode.description = nodeConfig.description;
    currentNode.input = nodeConfig.input;
    currentNode.output = nodeConfig.output;
    configDisplay.value = true;
  }
  function setConfigDisplay() {
    configDisplay.value = false;
  }
  function onDeleteItem(tableRef: "input" | "output", index: number) {
    currentNode[tableRef].splice(index, 1);
  }
  function onAddInput() {
    currentNode.input.push({
      key: "",
      value: "",
    });
  }
  function onAddOutput() {
    currentNode.output.push({
      key: "",
      value: "",
    });
  }
  return {
    currentNode,
    configDisplay,
    changeData,
    setConfigDisplay,
    onDeleteItem,
    onAddInput,
    onAddOutput,
  };
});
