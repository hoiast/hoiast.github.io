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
  <div class="flex space-x-2">
    <div class="pt-1">
      <div
        class="w-6 h-6 i-carbon-caret-right"
        :style="`background-image: ${lgColorString}`"
      ></div>
    </div>
    <p>
      <slot />
    </p>
  </div>
</template>
<style></style>
