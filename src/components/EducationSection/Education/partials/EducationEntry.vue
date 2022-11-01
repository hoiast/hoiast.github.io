<script setup lang="ts">
import { computed } from "vue";
import GradientText from "@/components/partials/GradientText.vue";
const props = defineProps({
  colorPattern: {
    type: Array<string>,
    default: ["#65B947", "#1232A5", "#7547AE", "#FC0D46"],
  },
  title: {
    type: String,
    default: "Course",
  },
  period: {
    type: String,
    default: "Period",
  },
  institution: {
    type: String,
    default: "Institution - Location",
  },
  documentURL: {
    type: String,
    default: "",
  },
  documentLabel: {
    type: String,
    default: "",
  },
  notes: {
    type: String,
    default: "",
  },
});
const lgColorString = computed(() => {
  return `linear-gradient(${props.colorPattern.join(",")})`;
});
</script>
<template>
  <div>
    <p class="text-2xl">
      {{ title }}
    </p>
    <p class="text-base">{{ period }}</p>
    <div class="flex space-x-4">
      <p class="text-base">{{ institution }}</p>
      <a
        v-if="documentURL"
        :href="documentURL"
        class="text-lg"
        :aria-label="documentLabel"
      >
        <div class="flex items-center text-2xl">
          <div
            class="i-carbon-book"
            :style="`background-image: ${lgColorString}`"
          ></div>
        </div>
      </a>
    </div>
    <GradientText v-if="notes" class="text-lg" :colorPattern="colorPattern">
      {{ notes }}
    </GradientText>
  </div>
</template>
