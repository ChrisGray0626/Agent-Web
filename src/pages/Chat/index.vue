<script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();
const go = () => {
  router.push({ path: "/workflow", replace: true });
};
</script>

<template>
  <div id="container">
    <div class="title">Building...</div>
    <el-button class="button" @click="go">Build Workflow</el-button>
  </div>
</template>

<style scoped lang="less">
#container {
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .title {
    font-size: 100px;
    text-align: center;
    background: linear-gradient(135deg, #c850c0, #4158d0);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    font-family: AppleSystemUIFont, serif;
  }

  .button {
    font-size: 25px;
    margin: 20px;
    height: 100px;
    width: 200px;
    font-family: AppleSystemUIFont, serif;
    color: #ffffff;
    background: linear-gradient(135deg, #a1c4fd, #c2e9fb);
  }
}
</style>
