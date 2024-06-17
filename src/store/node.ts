import { defineStore } from "pinia";
import { reactive } from "vue";

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

  function changeData(nodeConfig: Node) {
    currentNode.name = nodeConfig.name;
    currentNode.description = nodeConfig.description;
    if (nodeConfig.input) {
      currentNode.input = nodeConfig.input;
    }
    if (nodeConfig.output) {
      currentNode.output = nodeConfig.output;
    }
    console.log(currentNode);
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
  return { currentNode, changeData, onDeleteItem, onAddInput, onAddOutput };
});
