<script setup lang="ts">
import { computed } from "vue";
const props = defineProps({
  colorPattern: {
    type: Array<string>,
    default: ["#65B947", "#1232A5", "#7547AE", "#FC0D46"],
  },
  role: {
    type: String,
    default: "Developer",
  },
  companyName: {
    type: String,
    default: "Company",
  },
  institutionalURL: {
    type: String,
    default: "",
  },
  institutionalURLLabel: {
    type: String,
    default: "",
  },
  location: {
    type: String,
    default: "City - Country",
  },
  period: {
    type: String,
    default: "Month Year - Month Year",
  },
});
const lgColorString = computed(() => {
  return `linear-gradient(${props.colorPattern.join(",")})`;
});
</script>
<template>
  <div class="flex flex-col space-y-2">
    <p class="text-2xl">{{ role }}</p>
    <div class="text-base">
      <div class="flex items-center space-x-4">
        <p>{{ companyName }}</p>
        <a
          v-if="institutionalURL"
          :href="institutionalURL"
          class="text-lg"
          :aria-label="institutionalURLLabel"
        >
          <div class="mb-2 flex items-center text-2xl">
            <div
              class="i-carbon-launch"
              :style="`background-image: ${lgColorString}`"
            ></div>
          </div>
        </a>
      </div>
      <p>{{ location }}</p>
      <p>{{ period }}</p>
    </div>
    <p>
      <slot />
    </p>
  </div>
</template>
