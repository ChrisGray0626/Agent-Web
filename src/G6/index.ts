import G6 from "@antv/g6";
import {
  breakdownNode as breakdownNodeConfig,
  rootNode as rootNodeConfig,
  treeNode as treeNodeConfig,
  workflowNode as workflowNodeConfig,
} from "@/G6/nodeConfig.ts";
import { indentedEdge as indentedEdgeConfig } from "@/G6/edgeConfig.ts";
import { activateNodeBehavior as activateNodeBehaviorConfig } from "@/G6/behaviorConfig.ts";

export function G6Register() {
  G6.registerNode("rootNode", rootNodeConfig, "rect");
  G6.registerNode("treeNode", treeNodeConfig);
  G6.registerEdge("indentedEdge", indentedEdgeConfig, "polyline");
  G6.registerBehavior("activate-node", activateNodeBehaviorConfig);
  G6.registerNode("breakdownNode", breakdownNodeConfig);
  G6.registerNode("workflowNode", workflowNodeConfig);
}
