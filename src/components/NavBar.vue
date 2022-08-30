<script setup lang="ts">
import { watch } from "vue";
import { useEventStore } from "@/stores/event";
import { usePuzzleStore } from "@/stores/puzzle";
import { useStorage } from "@/composables/useStorage";
import DarkSwitch from "@/components/DarkSwitch.vue";

const puzzleStore = usePuzzleStore();
const eventStore = useEventStore();
const bounce = () => {
  eventStore.emit("highlightInteractiveElement");
};
const toggleLock = () => {
  eventStore.emit("toggleLock");
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
    <div class="flex justify-between text-4xl sm:text-5xl color-base">
      <div class="i-mdi-help cursor-pointer" @click="bounce" />
      <div
        class="flex cursor-pointer"
        @click="toggleLock"
        v-if="enableAutomaticUnlock"
      >
        <div :class="'i-mdi-lock-reset'" />
      </div>
      <DarkSwitch />
    </div>
  </nav>
  <!--
  <div class="i-mdi-menu" /> 
  <div class="i-mdi-github text-orange-400" />
  <div class="i-mdi-translate text-orange-400" />
  <div class="i-mdi-weather-sunny text-orange-400" />
  <div class="i-mdi-weather-night text-orange-400" />
  <div class="i-mdi-lock text-orange-400" />
  <div class="i-mdi-lock-open text-orange-400" />
  -->
</template>
<style scoped></style>
