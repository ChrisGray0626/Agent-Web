import { IG6GraphEvent } from "@antv/g6-core/lib/types";
import { BehaviorOption } from "@antv/g6";
import { useNodeStore } from "@/store/node.ts";
import pinia from "@/store";
import { mockFetchTool } from "@/api/fetch.ts";
// import axios from "@/api";

const nodeStore = useNodeStore(pinia);

export const activateNodeBehavior: BehaviorOption = {
  getEvents() {
    return {
      "node:click": "onNodeClick",
    };
  },
  async onNodeClick(evt: IG6GraphEvent) {
    const node = evt.item;
    console.log(node?.getModel().id);

    const response = (await mockFetchTool(node?.getModel().id as string)) as {
      data: any;
    };
    console.log(response.data.args);

    // const response = await axios.fetchTool(node?.getModel().id as string);

    nodeStore.changeData({
      id: node?.getModel().id as string,
      name: node?.getModel().label as string,
      description: node?.getModel().description as string,
      args: response.data.args,
    });
  },
};
