<script setup lang="ts">
import Question from "@/components/Question.vue";
import Case from "@/components/Case.vue";
import { useRouter } from "vue-router";

const router = useRouter()
</script>

<template>
  <div id="container">
    <!--    <el-image-->
    <!--      src="http://8.217.104.137:39999/_next/image?url=%2Flogo-light.png&w=640&q=75"-->
    <!--      mode="fit"-->
    <!--      style="position: absolute; top: 35px; right: 35px; height: 35px"-->
    <!--    />-->
    <div class="title">AI GIS SYSTEM</div>
    <div class="content">
      <Question />
      <div class="cases">
        <Case />
      </div>
    </div>
    <el-button size="large" class="chat" @click="() => {
      router.push('/chat')
    }">Chat</el-button>
  </div>
</template>

<style scoped lang="less">
@import "@/style.less";
#container {
  height: 100vh;
  background: @bg-color;
  text-align: center;
  .title {
    padding-top: calc(23% - 50px);
    font-size: 50px;
    text-align: center;
    color: #000000;
    font-weight: bolder;
    font-family: sans-serif;
    text-shadow: 3px 2px rgba(darkblue, 0.3);
  }
  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 70%;
    margin: 80px auto auto;
    .cases {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 50px;
      justify-items: center;
      align-items: center;
      padding: 20px;
      width: 100%;
    }
  }
  .chat {
    position: absolute;
    top: 10px;
    right: 10px;
  }
}
</style>
