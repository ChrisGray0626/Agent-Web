/**
 * @Description: G6 Graph Util
 * @Author: Chris
 * @Date: 2024/6/7
 */
import { TreeGraphData } from "@antv/g6";
import { GraphData } from "@antv/g6-core/lib/types";

type Edge = {
  id: string;
  source: string;
  target: string;
};
type Node = {
  id: string;
  label: string;
};
type Job = {
  task: string;
  toolId: string;
  toolName: string;
  subtasks: Job[];
};
// type Tool = {
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
// function postorder(data: Object | TreeGraphData) {
//   let newData: typeof data;
//   function dfs(newData: typeof data) {
//     if ("children" in newData && newData["children"] instanceof Array && newData["children"].length > 0) {
//       for (let i = 0; i < newData.children.length; i++) {
//         dfs(newData.children[i]);
//       }
//     } else {
//       newData.
//     }
//   }
// }

export function jobData2Graph(data: Job) {
  const graphData = jobData2Tree(data);
  console.log(graphData);
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
  buildNode(graphData);
  console.log(finalTaskList);
  buildEdge(finalTaskList);

  return finalTaskList;
}

/**
 * Convert tree json to graph data
 * @param data
 */
export function workflowData2Graph(data: any) {
  let graphData = {
    nodes: [] as Node[],
    edges: [] as Edge[],
  };
  graphData.nodes.push({
    id: data[0].id,
    label: data[0].tool,
  });
  for (let i = 1; i < data.length; i++) {
    graphData.nodes.push({
      id: data[i].id,
      label: data[i].tool,
    });
    graphData.edges.push({
      id: generateId(),
      source: data[i - 1].id,
      target: data[i].id,
    });
  }
  return graphData;
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

export function treeJson2Graph(treeJson: any) {
  let graphData = {
    nodes: [] as Node[],
    edges: [] as Edge[],
  };

  function buildGraph(nodeJson: any) {
    const id = generateId();
    const node = {
      id: id,
      label: nodeJson.label,
    };
    const children = nodeJson.children;
    if (children && children.length > 0) {
      children.forEach((child: any) => {
        const childNode = buildGraph(child);
        const edge = {
          id: generateId(),
          source: node.id,
          target: childNode.id,
        };
        graphData.edges.push(edge);
        graphData.nodes.push(childNode);
      });
    }
    return node;
  }

  graphData.nodes.push(buildGraph(treeJson));
  console.debug(graphData);
  return graphData;
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
