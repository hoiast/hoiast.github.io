<script setup lang="ts">
import { ref, watch } from "vue";
// Default to dark mode if the user has dark mode enabled.
const dark = ref(window.matchMedia("(prefers-color-scheme: dark)").matches);
if (dark.value) document.body.classList.add("dark");

// Watch for changes in the user's preferred color scheme.
watch(dark, (value) => {
  const root = document.getElementsByTagName("html")[0];
  if (value) {
    root.classList.add("dark");
  } else {
    root.classList.remove("dark");
  }
});

const toggleDark = () => {
  dark.value = !dark.value;
};
</script>
<template>
  <div class="flex items-center space-x-2 color-base cursor-pointer">
    <div :class="'i-carbon-sun dark:i-carbon-moon'" @click="toggleDark"></div>
  </div>
</template>
