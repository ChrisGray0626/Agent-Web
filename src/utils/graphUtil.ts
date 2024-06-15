/**
 * @Description: G6 Graph Util
 * @Author: Chris
 * @Date: 2024/6/7
 */

import G6 from "@antv/g6";

type Edge = {
  id: string;
  source: string;
  target: string;
};
type Node = {
  id: string;
  label: string;
};

function generateId(length: number = 6) {
  let result = "";
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
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
  console.log(graphData);
  return graphData;
}

export const fittingString = (
  str: string,
  maxWidth: number,
  fontSize: number
) => {
  let currentWidth = 0;
  let res = str;
  const pattern = new RegExp("[\u4E00-\u9FA5]+"); // distinguish the Chinese charactors and letters
  str.split("").forEach((letter, i) => {
    if (currentWidth > maxWidth) return;
    if (pattern.test(letter)) {
      // Chinese charactors
      currentWidth += fontSize;
    } else {
      // get the width of single letter according to the fontSize
      currentWidth += G6.Util.getLetterWidth(letter, fontSize);
    }
    if (currentWidth > maxWidth) {
      res = `${str.substr(0, i)}\n${str.substr(i)}`;
    }
  });
  return res;
};
