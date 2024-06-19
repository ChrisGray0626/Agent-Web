/**
 * @Description: G6 Graph Util
 * @Author: Chris
 * @Date: 2024/6/7
 */
import { TreeGraphData } from "@antv/g6";
import { GraphData } from "@antv/g6-core/lib/types";

export type Job = {
  task: string;
  toolId: string;
  toolName: string;
  subtasks: Job[];
};
// export type Tool = {
//   id: string;
//   name: string;
//   description: string;
//   args: {
//     name: string;
//     type: string;
//     description: string;
//   }[];
// };
// type TreeNode = {
//   label: string;
//   toolId: string;
//   toolName: string;
//   children: TreeNode[];
// };

export function jobData2Tree(data: Job) {
  const { subtasks } = data;
  const graphData: TreeGraphData = {
    id: generateId(),
    label: data.task,
    toolId: data.toolId,
    toolName: data.toolName,
    children: [],
  };
  if (subtasks && subtasks.length > 0) {
    for (let i = 0; i < subtasks.length; i++) {
      graphData.children!.push(jobData2Tree(subtasks[i]));
    }
  }
  return graphData;
}

export function tree2Graph(treeData: TreeGraphData) {
  const finalTaskList: GraphData = {
    nodes: [],
    edges: [],
  };
  function buildNode(nodes: TreeGraphData) {
    const { id, label, children } = nodes;
    const node = {
      id,
      label,
    };
    if (children && children.length > 0) {
      children.forEach((child) => {
        buildNode(child);
      });
    } else {
      finalTaskList.nodes!.push(node);
    }
  }
  function buildEdge(nodeData: GraphData) {
    if (nodeData.nodes) {
      for (let i = 1; i < nodeData.nodes.length; i++) {
        finalTaskList.edges!.push({
          id: generateId(),
          source: nodeData.nodes[i - 1].id,
          target: nodeData.nodes[i].id,
        });
      }
    }
  }
  buildNode(treeData);
  buildEdge(finalTaskList);

  return finalTaskList;
}

/**
 * Add id to each item of the list
 * @param data
 */
export function addItemId(data: {}[]) {
  return data.map((item) => ({
    ...item,
    id: generateId(),
  }));
}

/**
 * Generate a random id
 * @param length
 */
export function generateId(length: number = 6) {
  let result = "";
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}
