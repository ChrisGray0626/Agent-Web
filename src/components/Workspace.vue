<!--
    @Description: Workspace Component
    @Author: Chris
    @Date: 2024/7/24
-->
<script lang="ts" setup>
import {useWorkspaceStore} from "@/store/workspace.ts";
import {storeToRefs} from "pinia";
import {onMounted} from "vue";

// TODO 上传 下载 删除
const workspaceStore = useWorkspaceStore();
let treeData = storeToRefs(workspaceStore).treeData;

const treeProps = {
  label: "name",
}

async function update() {
  await workspaceStore.updateData();
}

onMounted(() => {
  update();
});
</script>

<template>
  <el-tree
      :data="treeData"
      :props="treeProps"
  />
</template>

<style lang="less" scoped>

</style>