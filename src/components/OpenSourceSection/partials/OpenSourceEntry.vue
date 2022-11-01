<script setup lang="ts">
import { computed } from "vue";
const props = defineProps({
  colorPattern: {
    type: Array<string>,
    default: ["#65B947", "#1232A5", "#7547AE", "#FC0D46"],
  },
  title: {
    type: String,
    default: "ExoSim",
  },
  gitHubURL: {
    type: String,
    default: "",
  },
  gitHubLabel: {
    type: String,
    default: "",
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
  <div>
    <div class="flex items-center space-x-4">
      <p class="text-2xl">{{ title }}</p>
      <a
        v-if="linkURL"
        :href="linkURL"
        class="text-lg text-[#FC0D46]"
        :aria-label="linkLabel"
      >
        <div class="mb-2 flex items-center text-2xl">
          <div
            class="i-carbon-launch"
            :style="`background-image: ${lgColorString}`"
          ></div>
        </div>
      </a>
      <a
        v-if="gitHubURL"
        :href="gitHubURL"
        class="text-lg text-[#FC0D46]"
        :aria-label="gitHubLabel"
      >
        <div class="mb-2 flex items-center text-2xl">
          <div
            class="i-carbon-logo-github"
            :style="`background-image: ${lgColorString}`"
          ></div>
        </div>
      </a>
    </div>
    <p>
      <slot />
    </p>
  </div>
</template>
