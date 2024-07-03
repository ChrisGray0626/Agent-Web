<script setup lang="ts">
import { Close } from "@element-plus/icons-vue";
import { useTaskStore } from "@/store/task.ts";
import { storeToRefs } from "pinia";
import { reactive, ref } from "vue";
import { process } from "@/api";

const taskStore = useTaskStore();
const { tool } = storeToRefs(taskStore);

const argConfig = reactive<
  {
    name: string;
    description: string;
    type: string;
    input: string;
  }[]
>([]);

const processConfig = reactive<{
  [key: string]: string;
}>({});

interface Response {
  message: string;
  output: string;
  error: string;
}

let res = ref<Response>();

for (const [, arg] of tool.value.args.entries()) {
  argConfig.push(Object.assign(arg, { input: "" }));
}

async function onExecute(id: string, input: typeof argConfig) {
  for (const [, arg] of input.entries()) {
    processConfig[arg.name] = arg.input;
  }
  console.log(processConfig);
  res.value = (await process(id, processConfig)).data as Response;
  console.log(res.value);
}

function onCancel() {
  taskStore.close();
}
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
          {{ tool.name }}
        </el-descriptions-item>
        <el-descriptions-item label="Tool description">
          {{ tool.description }}
        </el-descriptions-item>
      </el-descriptions>
      <el-form-item label="Args">
        <el-table :data="argConfig" header-cell-class-name="header-cell-class">
          <el-table-column prop="name" label="Name" />
          <el-table-column prop="description" label="Description" />
          <el-table-column prop="input" label="Input">
            <template #default="scope">
              <el-input
                v-model="scope.row.input"
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
        <el-descriptions-item label="Result">
          {{ res?.message }}
        </el-descriptions-item>
      </el-descriptions>
      <el-form-item>
        <div style="width: 100%; display: flex; justify-content: space-between">
          <el-button @click="onCancel">Cancel</el-button>
          <el-button type="primary" @click="onExecute(tool.id, argConfig)"
            >Execute
          </el-button>
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
