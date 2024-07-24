import {defineStore} from "pinia";
import {computed, ref} from "vue";
import {Response, Task, Tool} from "@/type.ts";
import {fetchTool} from "@/api";

export const useTaskStore = defineStore("node", () => {
  let _task = ref<Task>();

  const tool = computed(() => _task.value!.tool);

  let isShowed = ref(false);

  async function updateData(task: Task) {
    _task.value = task;
    const res = (await fetchTool(_task.value.tool.id)).data as Response<Tool>;
    _task.value.tool = res.data;
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
