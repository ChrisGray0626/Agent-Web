<script setup lang="ts">
import { Close } from "@element-plus/icons-vue";
import { useNodeStore } from "@/store/node.ts";
import { storeToRefs } from "pinia";

const nodeStore = useNodeStore();
const { currentNode } = storeToRefs(nodeStore);
</script>
<template>
  <el-card style="position: absolute; bottom: 120px; right: 30px">
    <el-button
      :icon="Close"
      text
      style="position: absolute; top: 15px; right: 15px"
      @click="nodeStore.setConfigDisplay()"
    />
    <el-form :model="currentNode" label-position="top" style="margin: 20px">
      <el-form-item label="Task name">
        <el-input
          type="textarea"
          autosize
          v-model="currentNode.name"
          style="width: 240px"
        />
      </el-form-item>
      <el-form-item label="Task description">
        <el-input
          type="textarea"
          autosize
          style="width: 240px"
          v-model="currentNode.description"
        />
      </el-form-item>
    </el-form>
  </el-card>
</template>

<style scoped lang="less">
@import "./index.less";
</style>
