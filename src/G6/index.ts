import G6 from "@antv/g6";
import {
  jsxNode as jsxNodeConfig,
  rootNode as rootNodeConfig,
  treeNode as treeNodeConfig,
} from "@/G6/nodeConfig.ts";
import { indentedEdge as indentedEdgeConfig } from "@/G6/edgeConfig.ts";
import { activateNodeBehaviorConfig } from "@/G6/behaviorConfig.ts";

export function G6Register() {
  G6.registerNode("rect-jsx", jsxNodeConfig);
  G6.registerNode("rootNode", rootNodeConfig, "rect");
  G6.registerNode("treeNode", treeNodeConfig);
  G6.registerEdge("indentedEdge", indentedEdgeConfig, "polyline");
  G6.registerBehavior("activate-node", activateNodeBehaviorConfig);
}
