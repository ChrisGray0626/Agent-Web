import {defineStore} from "pinia";
import {job2G6Tree, jobLeafNode2G6Graph} from "@/utils/graphUtil.ts";
import {computed} from "vue";
import {mockFetchJob} from "@/api/fetch.ts";
import {Task} from "@/type.ts";
// import axios from "@/api";

export const useJobStore = defineStore("job", () => {
    let _job: Task;

    async function fetchData(task: string) {
        const res = ((await mockFetchJob(task)) as { data: any }).data;
        // localData = (await axios.fetchJob(`{"task":"${task}"}`)).data;
        console.debug("res", res);
        _job = convertData(res);

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

    const breakdownData = computed(() => job2G6Tree(_job));

    const workflowData = computed(() => jobLeafNode2G6Graph(_job));

    const job = computed(() => {
        if (!_job) {
            return null;
        } else {
            return _job;
        }
    })

    return {fetchData, job, breakdownData, workflowData};
});
