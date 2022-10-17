<script setup lang="ts">
import { watch } from "vue";
import { useEventStore } from "@/stores/event";
import { usePuzzleStore } from "@/stores/puzzle";
import { useStorage } from "@/composables/useStorage";
import DarkSwitch from "@/components/DarkSwitch.vue";

const puzzleStore = usePuzzleStore();
const eventStore = useEventStore();
const bounce = (event: MouseEvent) => {
  eventStore.emit("highlightInteractiveElement");
  return event;
};
const toggleLock = (event: MouseEvent) => {
  eventStore.emit("toggleLock");
  return event;
};
const enableAutomaticUnlock = useStorage("enableAutomaticUnlock", false);
watch(puzzleStore, () => {
  if (puzzleStore.isUnlocked) {
    enableAutomaticUnlock.value = true;
  }
});
</script>
<template>
  <nav class="h-[10vh] fixed w-full max-w-3xl p-4 bg-base transition-base z-10">
    <div class="flex justify-between text-4xl color-base">
      <div class="i-carbon-help cursor-pointer" @click="bounce" />
      <div class="flex cursor-pointer" @click="toggleLock">
        <!-- v-if="enableAutomaticUnlock" -->
        <div
          :class="
            puzzleStore.isUnlocked ? 'i-carbon-unlocked' : 'i-carbon-locked'
          "
        />
      </div>
      <DarkSwitch />
    </div>
  </nav>
</template>
<style scoped></style>
