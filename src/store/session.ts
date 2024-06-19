import { defineStore } from "pinia";
import { reactive } from "vue";
import { generateId } from "@/utils/graphUtil";
import { useDataStore } from "@/store/data.ts";

type Session = {
  sessionId: string;
  sessionName: string;
  chat: {
    chatId: string;
    question: string;
    answer: string;
  }[];
};

export const useSessionStore = defineStore("session", () => {
  const dataStore = useDataStore();

  const session = reactive<Session>({
    sessionId: generateId(),
    sessionName: "",
    chat: [],
  });

  const newChat = reactive<Session["chat"][number]>({
    chatId: generateId(),
    question: "",
    answer: "",
  });

  function chatted() {
    if (Object.keys(dataStore.localData)) dataStore.getData();
    session.chat.push({ ...newChat });
    newChat.chatId = generateId();
    newChat.question = "";
    newChat.answer = "";
  }

  return { session, newChat, chatted };
});
