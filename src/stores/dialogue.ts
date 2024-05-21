import { defineStore } from "pinia";
import { ref } from "vue";

interface Dialogue {
  question: string;
  answer: string;
}

export const useDialogueStore = defineStore("dialogue", () => {
  const task = ref<string>("");
  const dialogue = ref<Dialogue[]>([] as Dialogue[]);

  function $reset() {
    dialogue.value.push({
      question: task.value,
      answer: "Here is the answer.",
    });
    task.value = "";
  }

  return { task, dialogue, $reset };
});
