<!--
    @Description: Workspace Component
    @Author: Chris
    @Date: 2024/7/24
-->
<script lang="ts" setup>
import { ElTree } from 'element-plus'
import { useWorkspaceStore } from "@/store/workspace.ts";
import { onMounted, ref } from "vue";
import { Upload, Download, Delete } from "@element-plus/icons-vue";
import { uploadFiles, downloadFile } from "@/api";
import Node from 'element-plus/es/components/tree/src/model/node.mjs';

// TODO 上传 下载 删除

const workspaceStore = useWorkspaceStore();
const treeRef = ref<InstanceType<typeof ElTree>>()
const treeProps = {
  label: "name",
};

async function update() {
  await workspaceStore.updateData();
}

function customRequest({file}: {file: File}){
  uploadFiles([file]);
}

function getNodePath(node: Node): string {
  return node.parent ? getNodePath(node.parent) + '/' + node.data.name : '';
}

function handleDownload() {
  const checkedNodes = treeRef.value?.getCheckedNodes(true, false)
  console.log(checkedNodes);
  checkedNodes?.forEach(node => {
    if(treeRef.value) {
      downloadFile(`/tmp/qgis${getNodePath(treeRef.value?.getNode(node))}`);
    }
  })
}

onMounted(() => {
  update();
});
</script>

<template>
  <div class="buttons">
    <el-upload
    multiple
    :http-request="customRequest"
    :on-change="update">
      <el-button type="primary" :icon="Upload">上传</el-button>
    </el-upload>
    <el-button type="success" :icon="Download" @click="handleDownload">下载</el-button>
    <el-button type="danger" :icon="Delete">删除</el-button>
  </div>
  <el-tree 
  ref="treeRef"
  show-checkbox 
  :data="workspaceStore.treeData" 
  :props="treeProps" 
  />
</template>

<style lang="less" scoped>
.buttons{
  display: flex;
  gap: 20px;
  .el-button{
    margin: 0px;
  }
}
</style>
