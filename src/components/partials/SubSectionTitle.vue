<script setup lang="ts">
import GradientText from "@/components/partials/GradientText.vue";
defineProps({
  title: {
    type: String,
    default: "Section",
  },
  colorPattern: {
    type: Array<string>,
    default: ["#65B947", "#1232A5", "#7547AE", "#FC0D46"],
  },
});
</script>
<template>
  <GradientText class="py-1 text-3xl mb-4" :colorPattern="colorPattern">
    {{ title }}
  </GradientText>
</template>
<style scoped></style>
