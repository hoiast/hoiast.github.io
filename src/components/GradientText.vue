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
  <p
    class="bg-clip-text bg-gradient-to-b"
    :style="`-webkit-text-fill-color: transparent;background-image: ${lgColorString}`"
  >
    <slot />
  </p>
</template>
<style></style>
