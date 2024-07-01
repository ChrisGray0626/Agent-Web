import {defineStore} from "pinia";
import {ref} from "vue";
import {Task} from "@/type.ts";
import {fetchTool} from "@/api";

export const useNodeStore = defineStore("node", () => {

    let _task = ref<Task>({} as Task);

    let isShowed = ref(false);

    async function updateData(task: Task) {
        _task.value = task;
        // TODO Fetch the tool
        // const res = await fetchTool(node.tool.id).data;
        const res = ((await fetchTool(_task.value.tool.id)) as { data: any }).data;
        _task.value.tool.args = res.args;
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
    };
});
