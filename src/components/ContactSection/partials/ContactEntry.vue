<script setup lang="ts">
import { computed } from "vue";
const props = defineProps({
  colorPattern: {
    type: Array<string>,
    default: ["#65B947", "#1232A5", "#7547AE", "#FC0D46"],
  },
  title: {
    type: String,
    default: "Information",
  },
  iconClass: {
    type: String,
    default: "i-carbon-help-filled",
  },
  linkURL: {
    type: String,
    default: "",
  },
  linkLabel: {
    type: String,
    default: "",
  },
});
const lgColorString = computed(() => {
  return `linear-gradient(${props.colorPattern.join(",")})`;
});
</script>
<template>
  <div class="mb-2 flex justify-between">
    <div class="flex items-center">
      <div
        :class="iconClass"
        :style="`background-image: ${lgColorString}`"
      ></div>
      <p class="ml-4 text-2xl sm:text-3xl">{{ title }}</p>
    </div>
    <a
      v-if="linkURL"
      :href="linkURL"
      class="px-1 rounded-lg cursor-pointer text-2xl"
      :aria-label="linkLabel"
    >
      <div
        class="i-carbon-launch"
        :style="`background-image: ${lgColorString}`"
      ></div>
    </a>
  </div>
</template>
