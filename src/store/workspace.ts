/**
 * @Description: Workspace Store
 * @Author: Chris
 * @Date: 2024/7/23
 */
import {defineStore} from "pinia";
import {FileNode, Response} from "@/type.ts";
import {fetchWorkspace} from "@/api";
import {ref} from "vue";

export const useWorkspaceStore = defineStore("workspace", () => {
  let _fileTree = ref<FileNode>();

  function updateData() {
    const res = (await fetchWorkspace()).data as Response<any>;
    _fileTree.value = convertData(res.data);
  }

  function convertData(data: any) {
    const children = data.children;
    const fileNode = new FileNode(data.name, data.type);
    if (children && children.length > 0) {
      for (let i = 0; i < children.length; i++) {
        fileNode.addChild(convertData(children[i]));
      }
    }
    return fileNode;
  }

  return {updateData};
});