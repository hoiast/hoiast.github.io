<script setup lang="ts">
import { computed } from "vue";
const props = defineProps({
  colorPattern: {
    type: Array<string>,
    default: ["#65B947", "#1232A5", "#7547AE", "#FC0D46"],
  },
  href: {
    type: String,
    default: "",
  },
  ariaLabel: {
    type: String,
    default: "",
  },
  class: {
    type: String,
    default: "",
  },
});
const lgColorString = computed(() => {
  return `linear-gradient(${props.colorPattern.join(",")})`;
});
</script>
<template>
  <a
    :href="props.href"
    :aria-label="props.ariaLabel"
    :class="`${props.class} px-1 rounded-lg cursor-pointer text-white`"
    :style="`background-image: ${lgColorString}`"
    ><slot />
  </a>
</template>
<style></style>
