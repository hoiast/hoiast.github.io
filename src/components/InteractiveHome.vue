<script setup lang="ts">
import TriangleQuartet from "@/components/TriangleQuartet.vue";
import { reactive, ref, onMounted, nextTick } from "vue";
import { useStorage } from "@/composables/useStorage";
import { useEventStore } from "@/stores/event";
import { usePuzzleStore } from "@/stores/puzzle";
import SingleTriangle from "./SingleTriangle.vue";
import GradientText from "./GradientText.vue";

const puzzleStore = usePuzzleStore();
const toggleLock = () => {
  if (puzzleStore.isUnlocked) {
    puzzleStore.isUnlocked = false;
    rotationalStates.value = [0, 0, 0, 0];
    arePuzzlesDisabled.value.fill(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
    verifyGoal();
  } else {
    puzzleStore.isUnlocked = true;
    arePuzzlesDisabled.value.fill(false);
    verifyGoal();
  }
};
const targets = reactive([
  {
    key: 1,
    position: "top-0 left-0",
    rotationalStates: [2, 4, 4, 6],
    isDisabled: true,
    colorPattern: ["#65B947", "#27548E"],
  },
  {
    key: 2,
    position: "top-0 right-0",
    rotationalStates: [0, 6, 6, 2],
    isDisabled: true,
    colorPattern: ["#27548E", "#443DAA"],
  },
  {
    key: 3,
    position: "bottom-10 left-0",
    rotationalStates: [6, 2, 2, 0],
    isDisabled: true,
    colorPattern: ["#443DAA", "#973894"],
  },
  {
    key: 4,
    position: "bottom-10 right-0",
    rotationalStates: [4, 0, 0, 4],
    isDisabled: true,
    colorPattern: ["#973894", "#FC0D46"],
  },
]);

const arePuzzlesDisabled = useStorage(
  "arePuzzlesDisabled",
  Array(4).fill(true)
);
onMounted(() => {
  verifyGoal();
});

const rotationalStates = ref([0, 0, 0, 0]);
// const verifyTargets = (rotationalStates: number[]) => {
const verifyTargets = () => {
  targets.forEach((target) => {
    if (
      JSON.stringify(target.rotationalStates) ===
      JSON.stringify(rotationalStates.value)
    ) {
      arePuzzlesDisabled.value[target.key - 1] = false;
    }
  });

  verifyGoal();
};
const verifyGoal = () => {
  if (arePuzzlesDisabled.value.every((element: boolean) => element === false)) {
    puzzleStore.isUnlocked = true;
    rotationalStates.value = [7, 1, 5, 3];
    document.body.style.overflow = "overlay";
  } else {
    puzzleStore.isUnlocked = false;
    document.body.style.overflow = "hidden";
  }
};
const isAnimatingHighlight = ref(false);
const highlightInteractiveElement = () => {
  if (isAnimatingHighlight.value) return;
  isAnimatingHighlight.value = true;
  setTimeout(() => {
    isAnimatingHighlight.value = false;
  }, 1500);
};

const eventStore = useEventStore();
eventStore.on("highlightInteractiveElement", highlightInteractiveElement);
eventStore.on("toggleLock", toggleLock);
</script>
<template>
  <div class="flex items-center justify-center p-4">
    <div class="flex items-center justify-center min-h-[85vh] w-full mb-[5vh]">
      <TriangleQuartet
        v-for="target in targets"
        :key="target.key"
        :class="[
          `absolute ${target.position}`,
          { 'animate-heart-beat': !target.isDisabled },
        ]"
        :rotationalStates="target.rotationalStates"
        :isClickDisabled="true"
        :isColorDisabled="arePuzzlesDisabled[target.key - 1]"
        :colorPattern="target.colorPattern"
        :isPulsing="arePuzzlesDisabled[target.key - 1]"
        :size="0.25"
      ></TriangleQuartet>
    </div>
    <div class="absolute">
      <TriangleQuartet
        v-model:rotationalStates="rotationalStates"
        @update:rotationalStates="verifyTargets()"
        class="mb-[5vh] w-[24vh] h-[24vh] mx-auto"
        :isClickDisabled="puzzleStore.isUnlocked"
        :class="{
          'animate-rubber-band': isAnimatingHighlight,
        }"
        :transformDuration="puzzleStore.isUnlocked ? 3000 : 500"
      ></TriangleQuartet>
      <div
        class=""
        :class="puzzleStore.isUnlocked ? 'opacity-100' : 'opacity-0'"
        v-if="puzzleStore.isUnlocked"
      >
        <GradientText
          class="text-4xl text-center"
          :colorPattern="['#65B947', '#443DAA', '#FC0D46']"
        >
          WELCOME
        </GradientText>
        <div class="animate-bounce">
          <SingleTriangle
            class="mx-auto mt-20"
            :rotationalState="4"
            :size="0.5"
            :isClickDisabled="true"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
