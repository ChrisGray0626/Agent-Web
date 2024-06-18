<script setup lang="ts">
import { Close, Delete } from "@element-plus/icons-vue";
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
        <el-input v-model="currentNode.name" />
      </el-form-item>
      <el-form-item label="Task description">
        <el-input v-model="currentNode.description" />
      </el-form-item>
      <el-form-item label="Input">
        <el-table :data="currentNode.input">
          <el-table-column type="index" align="center" />
          <el-table-column prop="key" label="key">
            <template #default="scope">
              <el-form-item>
                <el-input v-model="scope.row.key" />
              </el-form-item>
            </template>
          </el-table-column>
          <el-table-column prop="value" label="value">
            <template #default="scope">
              <el-form-item>
                <el-input v-model="scope.row.value" />
              </el-form-item>
            </template>
          </el-table-column>
          <el-table-column width="70">
            <template #default="scope">
              <el-button
                :icon="Delete"
                @click="nodeStore.onDeleteItem('input', scope.$index)"
              />
            </template>
          </el-table-column>
        </el-table>
      </el-form-item>
      <el-form-item>
        <el-button style="width: 100%" @click="nodeStore.onAddInput">
          Add Item
        </el-button>
      </el-form-item>
      <el-form-item label="Output">
        <el-table :data="currentNode.output">
          <el-table-column type="index" align="center" />
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
          <el-table-column width="70">
            <template #default="scope">
              <el-button
                :icon="Delete"
                @click="nodeStore.onDeleteItem('output', scope.$index)"
              />
            </template>
          </el-table-column>
        </el-table>
      </el-form-item>
      <el-form-item>
        <el-button style="width: 100%" @click="nodeStore.onAddOutput">
          Add Item
        </el-button>
      </el-form-item>
    </el-form>
  </el-card>
</template>

<style scoped lang="less">
@import "./index.less";
</style>
