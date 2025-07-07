<script setup lang="ts">
import GradientTextLink from "@/components/partials/GradientTextLink.vue";
const year = new Date().getFullYear();
const colorPattern = ["#65B947", "#27548E"];
</script>
<template>
  <footer
    class="relative py-6 bg-base transition-base color-base flex flex-col items-center text-center gap-y-2"
  >
    <p>Murilo Hoias Teixeira - {{ year }}</p>
    <p>
      <GradientTextLink
        :colorPattern="colorPattern"
        class="flex items-center gap-2"
        href="https://github.com/hoiast/hoiast.github.io"
        ariaLabel="Hoiast portfolio GitHub repository"
      >
        <div class="i-carbon-logo-github"></div>
        Portfolio Repository
      </GradientTextLink>
    </p>
    <p>This portfolio is hosted with GitHub Pages and Actions</p>
  </footer>
</template>
<style scoped></style>
