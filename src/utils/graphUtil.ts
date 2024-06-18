/**
 * @Description: G6 Graph Util
 * @Author: Chris
 * @Date: 2024/6/7
 */

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
export type TreeNode = {
  label: string;
  toolId: string;
  toolName: string;
  children: TreeNode[];
};

export function JobData2Tree(data: Job) {
  const { subtasks } = data;
  const graphData: TreeNode = {
    label: data.task,
    toolId: data.toolId,
    toolName: data.toolName,
    children: [],
  };
  if (subtasks && subtasks.length > 0) {
    for (let i = 0; i < subtasks.length; i++) {
      graphData.children.push(JobData2Tree(subtasks[i]));
    }
  }
  return graphData;
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
function generateId(length: number = 6) {
  let result = "";
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}
