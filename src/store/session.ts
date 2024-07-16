import { defineStore } from "pinia";
import { reactive, ref } from "vue";
import { generateId } from "@/utils/graphUtil";
import { useJobStore } from "@/store/job.ts";
import { useRouter } from "vue-router";

type Session = {
  sessionId: string;
  sessionName: string;
  question: string;
};

export const useSessionStore = defineStore("session", () => {
  const jobStore = useJobStore();
  const router = useRouter();

  const session = reactive<Session>({
    sessionId: generateId(),
    sessionName: "",
    question: "",
  });
  const graphShow = ref(false);
  const loading = ref(false);

  // TODO chatted?
  async function chatted() {
    loading.value = true;
    await jobStore.updateData(session.question);
    await router.push("/workflow");
    graphShow.value = true;
    loading.value = false;
  }

  return {
    session,
    graphShow,
    loading,
    chatted,
  };
});
