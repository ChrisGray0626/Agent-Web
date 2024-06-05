import { defineStore } from "pinia";
import { ref } from "vue";

type Dialogue = {
  id: number;
  question: string;
  answer: string;
};

export const useDialogueStore = defineStore("dialogue", () => {
  const task = ref<string>("");
  const dialogue = ref<Dialogue[]>([
    { id: 0, question: "May I?", answer: "Yes." },
  ]);

  function request() {
    dialogue.value.push({
      id: [...dialogue.value].pop()!.id + 1,
      question: task.value,
      answer: "Here is the answer.",
    });
    task.value = "";
  }

  return { task, dialogue, request };
});
