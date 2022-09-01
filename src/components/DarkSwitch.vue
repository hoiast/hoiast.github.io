<script setup lang="ts">
import { ref, watch } from "vue";
// Default to dark mode if the user has dark mode enabled.
const dark = ref(window.matchMedia("(prefers-color-scheme: dark)").matches);
const changeDarkClassToRoot = (shouldAdd: boolean) => {
  const root = document.getElementsByTagName("html")[0];
  if (shouldAdd) {
    root.classList.add("dark");
  } else {
    root.classList.remove("dark");
  }
};
changeDarkClassToRoot(dark.value);

// Watch for changes in the user's preferred color scheme.
watch(dark, changeDarkClassToRoot);

const toggleDark = () => {
  dark.value = !dark.value;
};
</script>
<template>
  <div class="flex items-center space-x-4 color-base cursor-pointer">
    <div :class="'i-carbon-sun dark:i-carbon-moon'" @click="toggleDark"></div>
  </div>
</template>
