<script lang="ts" setup>
import { Promotion } from "@element-plus/icons-vue";
import { useSessionStore } from "../store/session.ts";

const sessionStore = useSessionStore();
// sessionStore.session.question = "Calculation of Flood Affected Area";
// sessionStore.chatted();
</script>

<template>
  <Transition>
    <div class="container" v-show="sessionStore.questionShow">
      <el-input
        v-model="sessionStore.session.question"
        placeholder="Type Something"
        @change="sessionStore.chatted()"
        :disabled="sessionStore.graphShow"
      >
        <template #suffix>
          <el-button :icon="Promotion" :disabled="sessionStore.graphShow" />
        </template>
      </el-input>
    </div>
  </Transition>
</template>

<style lang="less" scoped>
.container {
  position: absolute;
  bottom: 25px;
  left: 30px;
  right: 30px;
  height: 70px;
  background-color: #f7f9fb;
  box-shadow:
    0 0 8px 6px rgba(29, 28, 35, 0.06),
    0 0 2px 0 rgba(29, 28, 35, 0.18);
  border-radius: 3px;
  .el-input {
    box-sizing: border-box;
    //height: 50px;
    //margin: 5px;
    //padding: 0 20px;
    padding: 10px;
    height: 100%;
    //width: 100%;
    :deep(.el-input__wrapper) {
      //background-color: #f7f9fb;
      border-radius: 3px;
      color: #828282;
    }
  }
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
