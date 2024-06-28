import {defineStore} from "pinia";
import {reactive, ref} from "vue";
import {generateId} from "@/utils/graphUtil";
import {useJobStore} from "@/store/job.ts";

type Session = {
  sessionId: string;
  sessionName: string;
  question: string;
};

export const useSessionStore = defineStore("session", () => {
  const dataStore = useJobStore();

  const session = reactive<Session>({
    sessionId: generateId(),
    sessionName: "",
    question: "",
  });
  const graphShow = ref(false);

  async function chatted() {
    if (!dataStore.job.name) {
      await dataStore.fetchData(session.question);
    }
    // session.question = "";
    graphShow.value = true;
  }

  return { session, graphShow, chatted };
});
