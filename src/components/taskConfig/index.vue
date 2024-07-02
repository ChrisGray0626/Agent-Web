<script setup lang="ts">
import { Close } from "@element-plus/icons-vue";
import { useTaskStore } from "@/store/task.ts";
import { storeToRefs } from "pinia";

const taskStore = useTaskStore();
const { tool } = storeToRefs(taskStore);

const onCancel = () => {
  taskStore.close();
};
const onExecute = () => {
  alert("execute!");
};

// console.log(argCfg.value);
</script>
<template>
  <el-card
    v-if="taskStore.isShowed"
    style="position: absolute; bottom: 120px; right: 30px; width: 500px"
    shadow="hover"
  >
    <el-button
      :icon="Close"
      text
      style="position: absolute; top: 15px; right: 15px"
      @click="taskStore.close()"
    />

    <el-form label-position="top" style="margin: 20px">
      <el-descriptions direction="vertical" :column="1">
        <el-descriptions-item label="Tool name">
          {{ tool.id + "  " + tool.name }}
        </el-descriptions-item>
        <el-descriptions-item label="Tool description">
          {{ tool.description }}
        </el-descriptions-item>
      </el-descriptions>
      <el-form-item label="Args">
        <el-table :data="tool.args" header-cell-class-name="header-cell-class">
          <el-table-column prop="name" label="Name" />
          <el-table-column prop="description" label="Description" />
          <el-table-column :prop="' '" label="Input" />
        </el-table>
      </el-form-item>
      <el-descriptions direction="vertical" :column="1">
        <el-descriptions-item label="Result">
          {{ "resutl" }}
        </el-descriptions-item>
      </el-descriptions>
      <el-form-item>
        <div style="width: 100%; display: flex; justify-content: space-between">
          <el-button @click="onCancel">Cancel</el-button>
          <el-button type="primary" @click="onExecute">Execute </el-button>
        </div>
      </el-form-item>
    </el-form>
  </el-card>
</template>

<style scoped lang="less">
@import "./index.less";
.header-cell-class {
  background-color: aqua;
  border-color: aqua;
}
</style>
