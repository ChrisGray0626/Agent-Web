<script lang="ts" setup>
import { useDialogueStore } from "../stores/dialogue";
const dialogueStore = useDialogueStore();
const { dialogue } = dialogueStore;
</script>

<template>
  <div class="container">
    <div v-for="item in dialogue" class="list">
      <div class="question bubble">{{ item.question }}</div>
      <div class="answer bubble">{{ item.answer }}</div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  .list {
    margin: 10px 40px;
    width: 100%;
    .bubble {
      margin: 10px;
      padding: 10px;
      background-color: #f3f4f6;
      box-shadow: 0px 0px 2px 1px rgba(black, 0.2);
      border-radius: 10px;
      color: grey;
    }
  }
}
</style>
