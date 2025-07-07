<script setup lang="ts">
import { computed } from "vue";
const props = defineProps({
  colorPattern: {
    type: Array<string>,
    default: ["#65B947", "#1232A5", "#7547AE", "#FC0D46"],
  },
  linkURL: {
    type: String,
    default: "",
  },
  linkLabel: {
    type: String,
    default: "",
  },
  iconClass: {
    type: String,
    default: "i-carbon-launch",
  },
});
const lgColorString = computed(() => {
  return `linear-gradient(${props.colorPattern.join(",")})`;
});
</script>
<template>
  <a :href="linkURL" class="text-lg" :aria-label="linkLabel">
    <div class="mb-2 flex items-center text-2xl">
      <div
        :class="iconClass"
        :style="`background-image: ${lgColorString}`"
      ></div>
    </div>
  </a>
</template>
