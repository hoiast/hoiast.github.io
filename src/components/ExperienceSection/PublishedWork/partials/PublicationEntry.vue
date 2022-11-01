<script setup lang="ts">
import { computed } from "vue";
const props = defineProps({
  colorPattern: {
    type: Array<string>,
    default: ["#65B947", "#1232A5", "#7547AE", "#FC0D46"],
  },
  title: {
    type: String,
    default: "Research Paper",
  },
  authors: {
    type: String,
    default: "Author1, Author2, Author3",
  },
  details: {
    type: String,
    default: "Journal, volume, page, year",
  },
  documentURL: {
    type: String,
    default: "",
  },
  documentLabel: {
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

    <p>{{ authors }}</p>
    <div class="flex items-center space-x-4">
      <p>{{ details }}</p>
      <a
        v-if="documentURL"
        :href="documentURL"
        class="text-lg"
        :aria-label="documentLabel"
      >
        <div class="mb-2 flex items-center text-2xl">
          <div
            class="i-carbon-book"
            :style="`background-image: ${lgColorString}`"
          ></div>
        </div>
      </a>
    </div>
  </div>
</template>
