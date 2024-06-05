<script lang="ts" setup>
import { Promotion } from "@element-plus/icons-vue";
import { useDialogueStore } from "../store/dialogue";
import { storeToRefs } from "pinia";

const dialogueStore = useDialogueStore();
const { task } = storeToRefs(dialogueStore);
</script>

<template>
  <div class="container">
    <el-input
      v-model="task"
      placeholder="Type Something"
      @change="dialogueStore.request"
    >
      <template #suffix>
        <el-button :icon="Promotion" />
      </template>
    </el-input>
  </div>
</template>

<style lang="less" scoped>
.container {
  position: absolute;
  bottom: 25px;
  left: 30px;
  right: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70px;
  background-color: #fff;
  box-shadow: 0 4px 4px 0 rgba(1C, 1C, 1C, 0.2);
  border-radius: 10px;
  .el-input {
    height: 50px;
    padding: 0 20px;
    width: 100%;
    :deep(.el-input__wrapper) {
      background-color: #f7f9fb;
      border-radius: 10px;
      color: #828282;
    }
  }
}
</style>
