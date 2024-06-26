import { defineStore } from "pinia";
import { reactive, ref } from "vue";
import { generateId } from "@/utils/graphUtil";
import { useDataStore } from "@/store/data.ts";

type Session = {
  sessionId: string;
  sessionName: string;
  question: string;
};

export const useSessionStore = defineStore("session", () => {
  const dataStore = useDataStore();

  const session = reactive<Session>({
    sessionId: generateId(),
    sessionName: "",
    question: "",
  });
  const graphShow = ref(false);

  async function chatted() {
    if (!dataStore.localData.task) {
      await dataStore.getData(session.question);
    }
    // session.question = "";
    graphShow.value = true;
  }

  return { session, graphShow, chatted };
});
