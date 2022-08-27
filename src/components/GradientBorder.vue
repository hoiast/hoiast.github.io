<script setup lang="ts">
import { computed } from "vue";
const props = defineProps({
  colorPattern: {
    type: Array<string>,
    default: ["#65B947", "#1232A5", "#7547AE", "#FC0D46"],
  },
});
const lgColorString = computed(() => {
  return `linear-gradient(${props.colorPattern.join(",")})`;
});
</script>
<template>
  <div
    class="p-0.5 mx-auto my-4 sm:my-0"
    :style="`background-image: ${lgColorString}`"
  >
    <slot />
  </div>
</template>
<style></style>
