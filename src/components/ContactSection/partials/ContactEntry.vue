<script setup lang="ts">
import { computed } from "vue";
import GradientIconLink from "@/components/partials/GradientIconLink.vue";
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
    <GradientIconLink
      v-if="linkURL"
      :colorPattern="colorPattern"
      :linkURL="linkURL"
      :linkURLLabel="linkLabel"
      iconClass="i-carbon-launch"
    >
    </GradientIconLink>
  </div>
</template>
