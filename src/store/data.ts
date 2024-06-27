import { defineStore } from "pinia";
import { Job, jobData2Tree, tree2Graph } from "@/utils/graphUtil.ts";
import { computed, reactive } from "vue";
import { mockFetchJob } from "@/api/fetch.ts";
// import axios from "@/api";

export const useDataStore = defineStore("data", () => {
  let localData = reactive({}) as Job;

  const getTreeData = computed(() => jobData2Tree(localData));

  const getGraphData = computed(() => tree2Graph(getTreeData.value));

  async function getData(task: string) {
    localData = ((await mockFetchJob(task)) as { data: any }).data;
    // console.log(await mockFetchJob(task));
    // localData = (await axios.fetchJob(`{"task":"${task}"}`)).data;
    console.log("localData", localData);
  }

  return { localData, getTreeData, getGraphData, getData };
});
