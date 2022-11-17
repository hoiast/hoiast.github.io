<script setup lang="ts">
const year = new Date().getFullYear();
const colorPattern = ["#65B947", "#27548E"];
const lgColorString = `linear-gradient(${colorPattern.join(",")})`;
</script>
<template>
  <footer
    class="relative py-6 bg-base transition-base color-base flex flex-col items-center"
  >
    <p>Murilo Hoias Teixeira - {{ year }}</p>
    <p>
      <a
        href="https://github.com/hoiast/hoiast.github.io"
        class="flex items-center gap-2 px-1 rounded-lg cursor-pointer text-white"
        :style="`background-image: ${lgColorString}`"
        aria-label="Portfolio GitHub repository"
      >
        <div class="i-carbon-logo-github"></div>
        Portfolio Repository
      </a>
    </p>
    <p>This portfolio is hosted with GitHub Pages and Actions</p>
  </footer>
</template>
<style scoped></style>
