import { defineStore } from "pinia";
import { Job, jobData2Tree, tree2Graph } from "@/utils/graphUtil.ts";
import { fetchData } from "@/api/fetch.ts";
import { computed, reactive } from "vue";

export const useDataStore = defineStore("data", () => {
  let localData = reactive({}) as Job;

  const getTreeData = computed(() => jobData2Tree(localData));

  const getGraphData = computed(() => tree2Graph(getTreeData.value));

  async function getData(task: string) {
    localData = JSON.parse((await fetchData(task)) as string);
    console.log("localData", localData);
  }

  return { localData, getTreeData, getGraphData, getData };
});
