<script setup lang="ts">
import { Close, Download } from "@element-plus/icons-vue";
import { useTaskStore } from "@/store/task.ts";
import { computed, ref } from "vue";
import { downloadFile, process } from "@/api";
import { ProcessResponse, Response } from "@/type.ts";

const taskStore = useTaskStore();

let res = ref<Response<ProcessResponse>>();
const tableData = computed(
  () => {
    const tableData = taskStore.tool?.args.map((arg) => ({ ...arg })) || []
    console.log(1, tableData);
    return tableData
  }
);

async function onExecute(
  id: string | undefined,
  parameters: typeof tableData.value,
) {
  const config = Object.fromEntries(
    parameters.map((par) => [par.name, par.value]),
  );
  if (id) {
    res.value = (await process(id, config)).data as Response<ProcessResponse>;
  }
}

function onCancel() {
  taskStore.close();
}

async function download() {
  console.log("download: ", res.value);
  if (res.value?.data.OUTPUT) {
    const response = await downloadFile(res.value!.data.OUTPUT || "");
    const url = window.URL.createObjectURL(new Blob([response.data]));
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", res.value!.data.OUTPUT);
    link.click();
  }
}
</script>
<template>
  <el-card
    style="
      position: absolute;
      bottom: 30px;
      right: 30px;
      width: 500px;
      max-height: calc(100vh - 130px);
      overflow-y: auto;
    "
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
          {{ taskStore.tool?.name }}
        </el-descriptions-item>
        <el-descriptions-item label="Tool description">
          {{ taskStore.tool?.description }}
        </el-descriptions-item>
      </el-descriptions>
      <el-form-item label="Args">
        <el-table :data="tableData" header-cell-class-name="header-cell-class">
          <el-table-column prop="name" label="Name" />
          <el-table-column prop="description" label="Description" />
          <el-table-column prop="input" label="Input">
            <template #default="scope">
              <el-input
                v-model="scope.row.value"
                style="height: 100%; width: 100%"
                type="textarea"
                autosize
                placeholder="Please input"
              />
            </template>
          </el-table-column>
        </el-table>
      </el-form-item>
      <el-descriptions v-if="res" direction="vertical" :column="1">
        <el-descriptions-item>
          <template #label>
            Result
            <el-button
              type="primary"
              :icon="Download"
              circle
              v-if="res.data?.OUTPUT"
              style="float: right"
              @click="download()"
            />
          </template>
          {{ res?.message }}
        </el-descriptions-item>
      </el-descriptions>

      <el-form-item>
        <div style="width: 100%; display: flex; justify-content: space-between">
          <el-button @click="onCancel">Cancel</el-button>
          <el-button
            type="primary"
            @click="onExecute(taskStore.tool?.id, tableData)"
            >Execute</el-button
          >
        </div>
      </el-form-item>
    </el-form>
  </el-card>
</template>

<style scoped lang="less">
.header-cell-class {
  background-color: aqua;
  border-color: aqua;
}

:deep(.el-textarea__inner) {
  resize: none;
}
</style>
