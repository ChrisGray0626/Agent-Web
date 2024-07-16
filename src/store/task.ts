import { defineStore } from "pinia";
import { computed, ref } from "vue";
import { Task } from "@/type.ts";
import { fetchTool } from "@/api";

export const useTaskStore = defineStore("node", () => {
  let _task = ref<Task>();

  const tool = computed(() => _task.value?.tool);

  let isShowed = ref(false);

  async function updateData(task: Task) {
    _task.value = task;
    // TODO Fetch the tool
    // const res = await fetchTool(node.tool.id).data;
    _task.value.tool = (await fetchTool(_task.value.tool.id)).data.data;
    console.log(_task.value);
  }

  function show() {
    isShowed.value = true;
  }

  function close() {
    isShowed.value = false;
  }

  return {
    task: _task,
    isShowed,
    updateData,
    show,
    close,
    tool,
  };
});
