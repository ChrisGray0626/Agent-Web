import { IG6GraphEvent } from "@antv/g6-core/lib/types";
import { BehaviorOption } from "@antv/g6";
import { useNodeStore } from "@/store/node.ts";
import pinia from "@/store";

const nodeStore = useNodeStore(pinia);

export const activateNodeBehavior: BehaviorOption = {
  getEvents() {
    return {
      "node:click": "onNodeClick",
    };
  },
  onNodeClick(evt: IG6GraphEvent) {
    const node = evt.item;
    console.log(node?.getModel().id);
    nodeStore.changeData({
      name: node?.getModel().label as string,
      description: node?.getModel().label as string,
    });
  },
};
