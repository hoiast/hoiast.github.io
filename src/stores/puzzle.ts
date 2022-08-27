import { defineStore } from "pinia";
import { ref } from "vue";

export const usePuzzleStore = defineStore("puzzleLock", () => {
  const isUnlocked = ref(false);
  return { isUnlocked };
});
