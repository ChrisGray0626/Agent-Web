<script lang="ts" setup>
import { useDialogueStore } from "@/store/dialogue.ts";
import Workflow from "@/components/Workflow.vue";
const dialogueStore = useDialogueStore();
const { dialogue } = dialogueStore;
</script>

<template>
  <div class="container">
    <template v-for="item in dialogue">
      <div class="bubble">{{ item.question }}</div>
      <div class="bubble">
        <Workflow />
      </div>
    </template>
  </div>
</template>

<style lang="less" scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  .bubble {
    width: 80%;
    margin: 8px 0;
    &:nth-child(1) {
      margin-top: 20px;
    }
    padding: 10px;
    background-color: #f3f4f6;
    box-shadow: 0px 0px 2px 1px rgba(black, 0.2);
    border-radius: 10px;
    color: grey;
    &:nth-child(2n) {
      height: 400px;
    }
  }
}
</style>
