import G6 from "@antv/g6";
import {
  rootNode as rootNodeConfig,
  treeNode as treeNodeConfig,
} from "@/G6/nodeConfig.ts";
import { indentedEdge as indentedEdgeConfig } from "@/G6/edgeConfig.ts";
import { activateNodeBehaviorConfig } from "@/G6/behaviorConfig.ts";

export const fittingString = (
  str: string,
  maxWidth: number,
  fontSize: number,
) => {
  const ellipsis = "...";
  const ellipsisLength = G6.Util.getTextSize(ellipsis, fontSize)[0];
  let currentWidth = 0;
  let res = str;
  let spaceIndex = 0;
  const pattern = new RegExp("[\u4E00-\u9FA5]+"); // distinguish the Chinese characters and letters
  str.split("").forEach((letter, i) => {
    if (currentWidth > maxWidth - ellipsisLength) return;
    if (pattern.test(letter)) {
      // Chinese characters
      currentWidth += fontSize;
    } else {
      if (letter == " ") spaceIndex = i;
      // get the width of single letter according to the fontSize
      currentWidth += G6.Util.getLetterWidth(letter, fontSize);
    }
    if (currentWidth > maxWidth - ellipsisLength) {
      res = `${str.slice(0, spaceIndex ? spaceIndex : i)}${ellipsis}`;
    }
  });
  return res;
};

export function G6Register() {
  G6.registerNode("rootNode", rootNodeConfig, "rect");
  G6.registerNode("treeNode", treeNodeConfig);
  G6.registerEdge("indentedEdge", indentedEdgeConfig, "polyline");
  G6.registerBehavior("activate-node", activateNodeBehaviorConfig);
}
