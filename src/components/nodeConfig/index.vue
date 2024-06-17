<script setup lang="ts">
import { reactive, ref } from "vue";
import { FormInstance } from "element-plus";

const formRef = ref<FormInstance>();
// do not use same name with ref
const form = reactive({
  name: "",
  description: "",
  domains: [
    {
      key: 1,
      value: "",
    },
  ],
  email: "",
  input: [
    {
      key: "ABC",
      value: "123",
    },
    {
      key: "ABC",
      value: "123",
    },
    {
      key: "ABC",
      value: "123",
    },
  ],
  output: [
    {
      key: "ABC",
      value: "123",
    },
    {
      key: "ABC",
      value: "123",
    },
    {
      key: "ABC",
      value: "123",
    },
  ],
});

const onAddInput = () => {
  form.input.push({
    key: "",
    value: "",
  });
};
const onAddOutput = () => {
  form.output.push({
    key: "",
    value: "",
  });
};
</script>
<template>
  <el-form
    ref="formRef"
    :model="form"
    label-position="top"
    style="margin: 20px"
  >
    <el-form-item label="Task name">
      <el-input v-model="form.name" />
    </el-form-item>
    <el-form-item label="Task description">
      <el-input v-model="form.description" />
    </el-form-item>
    <el-form-item label="Input">
      <el-table :data="form.input">
        <el-table-column header-align="center" prop="key" label="key">
          <template #default="scope">
            <el-form-item>
              <el-input v-model="scope.row.key" />
            </el-form-item>
          </template>
        </el-table-column>
        <el-table-column header-align="center" prop="value" label="value">
          <template #default="scope">
            <el-form-item>
              <el-input v-model="scope.row.value" />
            </el-form-item>
          </template>
        </el-table-column>
      </el-table>
    </el-form-item>
    <el-form-item>
      <el-button style="width: 100%" @click="onAddInput"> Add Item </el-button>
    </el-form-item>
    <el-form-item label="Output">
      <el-table :data="form.output">
        <el-table-column header-align="center" prop="key" label="key">
          <template #default="scope">
            <el-form-item>
              <el-input v-model="scope.row.key" />
            </el-form-item>
          </template>
        </el-table-column>
        <el-table-column header-align="center" prop="value" label="value">
          <template #default="scope">
            <el-form-item>
              <el-input v-model="scope.row.value" />
            </el-form-item>
          </template>
        </el-table-column>
      </el-table>
    </el-form-item>
    <el-form-item>
      <el-button style="width: 100%" @click="onAddOutput"> Add Item </el-button>
    </el-form-item>
  </el-form>
</template>

<style scoped lang="less">
@import "./index.less";
</style>
