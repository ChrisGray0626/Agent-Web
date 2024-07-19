import { defineStore } from "pinia";
import { job2G6TreeGraph, jobLeafNode2G6Graph } from "@/utils/graphUtil.ts";
import { computed } from "vue";
import { fetchSimpleJob } from "@/api";
import { Task } from "@/type.ts";

export const useJobStore = defineStore("job", () => {
  let _job: Task;

  async function updateData(question: string) {
    const res = (await fetchSimpleJob(`{ "task": "${question}" }`)).data;
    // const res = (await fetchLevelJob(`{ "task": "${question}" }`)).data;
    console.debug("res", res);
    _job = convertData(res.data);

    function convertData(data: any) {
      const children = data.subtasks;
      const task = new Task(data.task, data.toolId, data.toolName);

      if (children && children.length > 0) {
        for (let i = 0; i < children.length; i++) {
          task.addChild(convertData(children[i]));
        }
      }
      return task;
    }
  }

  const breakdownData = computed(() => job2G6TreeGraph(_job));

  const workflowData = computed(() => jobLeafNode2G6Graph(_job));

  return { updateData, breakdownData, workflowData };
});
