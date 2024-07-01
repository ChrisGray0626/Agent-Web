<script setup lang="ts">
import {Close} from "@element-plus/icons-vue";
import {useNodeStore} from "@/store/task.ts";
import {storeToRefs} from "pinia";

const nodeStore = useNodeStore();
const {task} = storeToRefs(nodeStore);

const onSave = () => {
  alert("save!");
};
const onCancel = () => {
  nodeStore.close();
};
const onExecute = () => {
  alert("execute!");
};
</script>
<template>
  <el-card v-if="nodeStore.isShowed"
    style="position: absolute; bottom: 120px; right: 30px; width: 500px"
    shadow="hover"
  >
    <el-button
      :icon="Close"
      text
      style="position: absolute; top: 15px; right: 15px"
      @click="nodeStore.close()"
    />

    <el-form label-position="top" style="margin: 20px">
      <el-descriptions direction="vertical" :column="1">
        <el-descriptions-item label="Tool name">
          {{ task.tool.name }}
        </el-descriptions-item>
        <el-descriptions-item label="Tool description">
          {{ task.tool.description }}
        </el-descriptions-item>
      </el-descriptions>
      <el-form-item label="Args">
        <el-table :data="task.tool.args" style="width: 100%">
          <el-table-column prop="name" label="Name" width="180" />
          <el-table-column prop="description" label="Description" width="180" />
        </el-table>
      </el-form-item>
      <el-form-item>
        <el-button @click="onSave">Save</el-button>
        <el-button @click="onCancel">Cancel</el-button>
        <el-button
          style="position: absolute; right: 0"
          type="primary"
          @click="onExecute"
          >Execute
        </el-button>
      </el-form-item>
    </el-form>

  </el-card>
</template>

<style scoped lang="less">
@import "./index.less";
</style>
