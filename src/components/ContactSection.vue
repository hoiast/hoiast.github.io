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
      :title="'Contact and Links'"
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
      <div class="grid grid-cols-1 w-fit">
        <div class="mb-2 flex justify-between">
          <div class="flex items-center">
            <div
              class="i-carbon-logo-github"
              :style="`background-image: ${lgColorString}`"
            ></div>
            <p class="ml-4 text-2xl sm:text-3xl">Github</p>
          </div>
          <a
            href="https://github.com/hoiast"
            class="px-1 rounded-lg cursor-pointer text-2xl"
            aria-label="hoiast's Github page"
          >
            <div
              class="i-carbon-launch"
              :style="`background-image: ${lgColorString}`"
            ></div
          ></a>
        </div>
        <div class="mb-2 flex justify-between">
          <div class="flex items-center">
            <div
              class="i-carbon-logo-linkedin"
              :style="`background-image: ${lgColorString}`"
            ></div>
            <p class="ml-4 text-2xl sm:text-3xl">LinkedIn</p>
          </div>
          <a
            href="https://www.linkedin.com/in/murilohoias/"
            class="px-1 rounded-lg cursor-pointer text-2xl"
            aria-label="LinkedIn user page"
          >
            <div
              class="i-carbon-launch"
              :style="`background-image: ${lgColorString}`"
            ></div
          ></a>
        </div>
        <div class="mb-2 flex justify-between">
          <div class="flex items-center">
            <div
              class="academicons-lattes"
              :style="`background-image: ${lgColorString}`"
            ></div>
            <p class="ml-4 text-2xl sm:text-3xl">Lattes</p>
          </div>
          <a
            href="http://lattes.cnpq.br/4928822491567061"
            class="px-1 rounded-lg cursor-pointer text-2xl"
            aria-label="Lattes curriculum page"
          >
            <div
              class="i-carbon-launch"
              :style="`background-image: ${lgColorString}`"
            ></div
          ></a>
        </div>
      </div>
    </div>
  </section>
</template>
