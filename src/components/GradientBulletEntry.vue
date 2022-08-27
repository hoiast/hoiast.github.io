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
  <div class="flex items-baseline space-x-2">
    <div
      class="w-2 h-2 rounded-full"
      :style="`background-image: ${lgColorString}`"
    ></div>
    <p>
      <slot />
    </p>
  </div>
</template>
<style></style>
