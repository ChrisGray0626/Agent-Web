<script setup lang="ts">
import { useRouter } from "vue-router";
import { ref, reactive } from "vue";
import axios from "axios";

const router = useRouter();
const go = () => {
  router.back()
};
interface historyType {
  role: string;
  content: string
}
const question = ref("")
const history = reactive<historyType[]>([

]);
const baseURL = 'http://10.130.11.30:8001'
const sendMessage = () => {
  history.push({
    role: 'user',
    content: question.value
  })
  question.value = ''
  return axios.post(`${baseURL}/chat`, {
    type: "kimi",
    model: "moonshot-v1-32k",
    messages: history
  })
}
const chat = async () => {
  //What are the main components needed to set up QGIS Server on a Debian-based system?
  const resp = await sendMessage()
  history.splice(0, history.length, ...resp.data.messages)
}
</script>

<template>
  <div id="container">
    <div class="chat-box">
      <div class="conv" v-for="(item, index) of history" :key="index" :class="item.role == 'assistant' ? 'left' : 'right'">
        <div class="icon">{{ item.role }}</div>
        <div class="message">{{ item.content }}</div>
      </div>
      <el-input 
      v-model="question" 
      class="input-box" 
      size="large" 
      type="textarea" 
      :rows="3" 
      placeholder="Input your questions."
      @keyup.enter="chat"></el-input>
    </div>
    <el-button class="back" size="large" @click="go">Back</el-button>
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

  .chat-box {
    width: 70%;
    height: 90%;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 10px;
    box-shadow: 1px 1px 5px 5px #777;
    padding: 10px 0px;
    .conv {
      width: 90%;
      padding: 10px;
      display: flex;
      flex-direction: column;
      .icon {
        border-radius: 50%;
        width: 4rem;
        height: 4rem;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .message {
        margin-top: 10px;
        border: 1px black solid;
        padding: 10px;
      }
    }
    .left {
      align-items: flex-start;
      .icon {
        background-color: skyblue;
      }
    }
    .right {
      align-items: flex-end;
      .icon {
        background-color: gray;
      }
    }
    .input-box {
      position: absolute;
      bottom: 5px;
      width: 90%;
      margin: 10px 0px;
    }
  }

  .back {
    position: absolute;
    top: 10px;
    left: 10px;
  }
}
</style>
