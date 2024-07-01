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
  const jobStore = useJobStore();

  const session = reactive<Session>({
    sessionId: generateId(),
    sessionName: "",
    question: "",
  });
  const graphShow = ref(false);

  // TODO chatted?
  async function chatted() {
    await jobStore.updateData(session.question);
    graphShow.value = true;
  }

  return {session, graphShow, chatted};
});
