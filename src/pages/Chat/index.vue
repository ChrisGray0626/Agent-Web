<script setup lang="ts">
import { useRouter } from "vue-router";
import { nextTick, onMounted, reactive, ref } from "vue";
import axios from "axios";

const router = useRouter();
const go = () => {
  router.back();
};
interface historyType {
  role: string;
  content: string;
}
const question = ref("");
const loading = ref(false);
const inputDisabled = ref(false);
const history = reactive<historyType[]>([]);
const baseURL = "http://10.130.11.30:8001";
const fetchLLM = function (data: historyType[]) {
  return axios.post(`${baseURL}/chat`, {
    type: "kimi",
    model: "moonshot-v1-8k",
    messages: data,
  });
};
const inputRef = ref<HTMLTextAreaElement | null>(null); // 引用 textarea
const messageBoxRef = ref<HTMLDivElement | null>(null); // 引用 message-box
const sendMessage = async () => {
  inputDisabled.value = true;
  loading.value = true;
  history.push({
    role: "user",
    content: question.value,
  });
  question.value = "";
  try {
    const resp = await fetchLLM(history);
    // 更新历史记录
    history.splice(0, history.length, ...resp.data.messages);
  } catch (error) {
    console.error("Error fetching response:", error);
  } finally {
    loading.value = false; // 隐藏加载效果
    inputDisabled.value = false; // 解锁输入框

    localStorage.setItem("chat-history", JSON.stringify(history));

    await nextTick(() => {
      // 聚焦到输入框
      inputRef.value?.focus();

      // 滚动到消息框底部
      const chatBox = messageBoxRef.value;
      if (chatBox) {
        chatBox.scrollTop = chatBox.scrollHeight; // 滚动到底部
      }
    });
  }
};

const clearHistory = () => {
  // 清除 localStorage 中的聊天记录
  localStorage.removeItem("chat-history");
  // 清空 history 数组
  history.splice(0, history.length);
};

// What are the main components needed to set up QGIS Server on a Debian-based system?
onMounted(() => {
  const savedHistory = localStorage.getItem("chat-history");
  if (savedHistory) {
    // 如果存在历史记录，将其解析并恢复到 `history` 中
    history.splice(0, history.length, ...JSON.parse(savedHistory));
  }
});
</script>

<template>
  <div id="container1">
    <div class="chat-box">
      <div class="message-box" ref="messageBoxRef">
        <div
          class="conv"
          v-for="(item, index) of history"
          :key="index"
          :class="item.role == 'assistant' ? 'left' : 'right'"
        >
          <div class="icon">
            {{ item.role == "user" ? "User" : "Assistant" }}
          </div>
          <div class="message">{{ item.content }}</div>
        </div>
        <div v-if="loading" class="loading-indicator">
          <span>Loading...</span>
        </div>
      </div>
      <el-input
        v-model="question"
        ref="inputRef"
        class="input-box"
        size="large"
        resize="none"
        type="textarea"
        :rows="3"
        placeholder="Input your questions."
        :disabled="inputDisabled"
        @keydown.enter.exact.prevent="sendMessage"
      ></el-input>
    </div>
    <el-button class="back" size="large" @click="go">Back</el-button>
    <el-button class="clear-btn" size="large" @click="clearHistory"
      >Clear History</el-button
    >
  </div>
</template>

<style scoped lang="less">
#container1 {
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .chat-box {
    width: 70%;
    height: 90%;
    //position: relative;
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    border: 1px solid #777;
    box-shadow: 1px 1px 1px #777;
    //  0 0 8px 6px rgba(29, 28, 35, 0.06),
    //  0 0 2px 0 rgba(29, 28, 35, 0.18);;

    padding: 10px 0 0 0;
    .message-box {
      position: relative;
      display: flex;
      flex-direction: column;
      /*justify-content: center;*/
      align-items: center;
      width: 100%;
      /*height: 80%;*/
      overflow: auto;
      flex-grow: 1;
      scroll-behavior: smooth;
      //box-shadow: inset 0 -10px 15px rgba(0, 0, 0, 0.2);
    }
    .conv {
      width: 95%;
      padding: 10px;
      display: flex;
      flex-direction: column;
      .icon {
        //border-radius: 50%;
        //width: 4rem;
        //height: 4rem;
        padding: 5px;
        border-radius: 10px;
        //box-shadow: 1px 1px 5px 5px;
        color: transparent;
        background-clip: text;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .message {
        margin-top: 10px;
        border: 1px black solid;
        padding: 10px;
        border-radius: 5px;
        box-shadow: 1px 1px 1px 1px #777;
        white-space: pre-wrap; // 保留换行和空白符
        line-height: 1.5;
      }
    }
  }
  .left {
    align-items: flex-start;
    .icon {
      background-color: #8c00ff;
    }
  }
  .right {
    align-items: flex-end;
    .icon {
      background-color: #0033ff;
    }
  }
  .loading-indicator {
    padding: 20px;
    font-size: 16px;
    color: #888;
    text-align: center;
    margin-top: 20px;
    animation: fadeIn 0.5s ease-in-out;
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  .input-box {
    bottom: 5px;
    //height: 100%;
    width: calc(100% - 40px);
    padding: 10px;
    margin: 10px;

    //border: 1px black solid;
    :deep(.el-textarea__inner) {
      border: 1px black solid;
      padding: 10px;
      transition: border-color 0.3s;

      &:hover {
        border-color: #409eff;
      }
      &:disabled {
        border-color: #aaa;
        background-color: #f5f5f5;
      }
    }
  }

  .back {
    position: absolute;
    top: 10px;
    left: 10px;
  }
  .clear-btn {
    position: absolute;
    bottom: 10px;
    right: 10px;
    //margin-top: 20px;
    background-color: #ff4d4f;
    color: white;
    //width: 200px;

    &:hover {
      background-color: #ff7875;
    }
  }
}
</style>
