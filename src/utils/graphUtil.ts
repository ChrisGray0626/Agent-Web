/**
 * @Description: G6 Graph Util
 * @Author: Chris
 * @Date: 2024/6/7
 */
import G6, {TreeGraphData} from "@antv/g6";
import {EdgeConfig, GraphData, NodeConfig} from "@antv/g6-core/lib/types";
import {Task} from "@/type.ts";

export function job2G6TreeGraph(job: Task) {
  function buildTreeNode(task: Task, label: string) {
    const { children } = task;
    const treeNode: TreeGraphData = {
      id: generateId(),
      label: label,
      task: task,
      children: [] as TreeGraphData[],
    };
    if (children && children.length > 0) {
      for (let i = 0; i < children.length; i++) {
        const subLabel = `${label}.${i + 1}`;
        treeNode.children!.push(buildTreeNode(children[i], subLabel));
      }
    }
    return treeNode;
  }

  const label = "task 1";
  return buildTreeNode(job, label);
}

export function jobLeafNode2G6Graph(job: Task) {
  const leafNodes: GraphData = {
    nodes: [] as NodeConfig[],
    edges: [] as EdgeConfig[],
  };

  function buildNode(task: Task) {
    const { children } = task;
    const node: NodeConfig = {
      id: generateId(),
      label: task.name,
      task: task,
    };
    if (children && children.length > 0) {
      children.forEach((child) => {
        buildNode(child);
      });
    } else {
      leafNodes.nodes!.push(node);
    }
  }

  buildNode(job);
  // Build nodes
  if (leafNodes.nodes) {
    for (let i = 1; i < leafNodes.nodes.length; i++) {
      leafNodes.edges!.push({
        id: generateId(),
        source: leafNodes.nodes[i - 1].id,
        target: leafNodes.nodes[i].id,
      });
    }
  }
  return leafNodes;
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

export function textWrapping(
  str: string,
  maxWidth: number = 300,
  fontSize: number = 12,
) {
  let newLineWidth = 0;
  let newSpaceIndex = 0;
  let newLineStartIndex = 0;
  let newSpaceIndexLineWidth = 0;
  let res = "";
  const pattern = new RegExp("[\u4E00-\u9FA5]+"); // Chinese characters

  if (str) {
    str.split("").forEach((letter, i) => {
      if (pattern.test(letter)) {
        // Chinese character
        newLineWidth += fontSize;
      } else {
        // non-Chinese character
        newLineWidth += G6.Util.getLetterWidth(letter, fontSize);
        // mark the space between characters (could break line here)
        if (letter == " ") {
          newSpaceIndex = i;
          newSpaceIndexLineWidth = newLineWidth;
        }
      }

      if (newLineWidth >= maxWidth) {
        if (newSpaceIndex > newLineStartIndex) {
          res += str.slice(newLineStartIndex, newSpaceIndex) + "\n";
          newLineWidth -= newSpaceIndexLineWidth;
          newLineStartIndex = newSpaceIndex + 1;
        }
      }

      if (i == str.length - 1) {
        res += str.slice(newLineStartIndex);
      }
    });
  }
  return res;
}
// calculation of flo|od affected area
