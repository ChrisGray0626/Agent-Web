import { IG6GraphEvent } from "@antv/g6-core/lib/types";
import { BehaviorOption } from "@antv/g6";
import { useTaskStore } from "@/store/task.ts";
import pinia from "@/store";
import { Task } from "@/type.ts";

export const activateNodeBehavior: BehaviorOption = {
  getEvents() {
    return {
      "node:click": "onNodeClick",
    };
  },
  async onNodeClick(evt: IG6GraphEvent) {
    const node = evt.item!;
    const task: Task = node.getModel().task as Task;
    // Update the task config
    const taskStore = useTaskStore(pinia);
    await taskStore.updateData(task);
    // Show the task config
    taskStore.show();
  },
};
