<script lang="ts" setup>
// function handleClick() {
//   console.log("click");
// }
import { useRouter } from "vue-router";

const router = useRouter();

const go = () => {
  router.push({ path: "/chat", replace: true });
};
</script>

<template>
  <div class="container">
    <div class="title">AI GIS SYSTEM</div>
    <!--    <el-button style="position: absolute; right: 20px" @click="handleClick"-->
    <!--      >Upload</el-button-->
    <!--    >-->
    <el-button @click="go" style="position: absolute; left: 10px"
      >Go Chat</el-button
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
