<script setup lang="ts">
import { computed } from "vue";
import SectionTitle from "@/components/SectionTitle.vue";
const colorPattern = ["#65B947", "#27548E"];
const lgColorString = computed(() => {
  return `linear-gradient(${colorPattern.join(",")})`;
});
</script>
<template>
  <section>
    <SectionTitle
      :title="'How to Reach me'"
      :rotationalStates="[7, 1, 5, 3]"
      :dividerHeight="2"
      :colorPattern="colorPattern"
    />
    <div class="mb-10 px-6 color-base text-3xl">
      <div class="mb-2 flex items-center">
        <div
          class="i-carbon-email"
          :style="`background-image: ${lgColorString}`"
        ></div>
        <p class="ml-4 text-2xl sm:text-3xl">murilohoias@gmail.com</p>
      </div>
      <div class="mb-2 flex items-center">
        <div
          class="i-carbon-logo-discord"
          :style="`background-image: ${lgColorString}`"
        ></div>
        <p class="ml-4 text-2xl sm:text-3xl">Mumu#6876</p>
      </div>
      <a href="https://github.com/hoiast">
        <div class="mb-2 flex items-center">
          <div
            class="i-carbon-logo-github"
            :style="`background-image: ${lgColorString}`"
          ></div>
          <p class="ml-4 text-2xl sm:text-3xl">hoiast</p>
        </div>
      </a>
    </div>
  </section>
</template>
