<script lang="ts" setup>
// function handleClick() {
//   console.log("click");
// }
import { useRouter } from "vue-router";
import { useSessionStore } from "@/store/session.ts";

const router = useRouter();
const sessionStore = useSessionStore();

const go = () => {
  sessionStore.$reset();
  router.push({ path: "/", replace: true });
};
</script>

<template>
  <div class="container">
    <div class="title">AI GIS SYSTEM</div>
    <!--    <el-button style="position: absolute; right: 20px" @click="handleClick"-->
    <!--      >Upload</el-button-->
    <!--    >-->
    <el-button @click="go" style="position: absolute; left: 10px"
      >Back</el-button
    >
  </div>
</template>

<style lang="less" scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  position: relative;
  //background-color: #fff;
  .title {
    font-size: 20px;
  }
}
</style>
