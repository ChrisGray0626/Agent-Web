<script setup lang="ts">
import { Close } from "@element-plus/icons-vue";
import { useNodeStore } from "@/store/node.ts";
import { storeToRefs } from "pinia";

const nodeStore = useNodeStore();
const { activateNode } = storeToRefs(nodeStore);
</script>
<template>
  <el-card
    style="position: absolute; bottom: 120px; right: 30px; width: 500px"
    shadow="hover"
  >
    <el-button
      :icon="Close"
      text
      style="position: absolute; top: 15px; right: 15px"
      @click="nodeStore.setConfigDisplay()"
    />

    <el-form :model="activateNode" label-position="top" style="margin: 20px">
      <el-descriptions direction="vertical" :column="1">
        <el-descriptions-item label="Tool name">
          {{ activateNode.name }}
        </el-descriptions-item>
        <el-descriptions-item label="Tool description">
          {{ activateNode.description }}
        </el-descriptions-item>
      </el-descriptions>
      <el-form-item label="Args">
        <el-table :data="activateNode.args" style="width: 100%">
          <el-table-column prop="name" label="Name" width="180" />
          <el-table-column prop="description" label="Description" width="180" />
        </el-table>
      </el-form-item>
    </el-form>
  </el-card>
</template>

<style scoped lang="less">
@import "./index.less";
</style>
