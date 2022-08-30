<script setup lang="ts">
import { computed } from "vue";
import SectionTitle from "@/components/SectionTitle.vue";
const colorPattern = ["#973894", "#FC0D46"];
const lgColorString = computed(() => {
  return `linear-gradient(${colorPattern.join(",")})`;
});
</script>
<template>
  <section>
    <SectionTitle
      :title="'Open Source'"
      :rotationalStates="[4, 0, 0, 4]"
      :colorPattern="colorPattern"
    />
    <div class="px-6 color-base text-lg flex flex-col space-y-8">
      <div>
        <div class="flex items-center space-x-2">
          <p class="text-2xl">ExoSim</p>
          <a
            href="https://hoiast.github.io/ExoSim/"
            class="text-lg text-[#FC0D46]"
          >
            <div class="mb-2 flex items-center">
              <div
                class="i-mdi-web"
                :style="`background-image: ${lgColorString}`"
              ></div>
            </div>
          </a>
          <a
            href="https://github.com/hoiast/ExoSim"
            class="text-lg text-[#FC0D46]"
          >
            <div class="mb-2 flex items-center">
              <div
                class="i-mdi-github"
                :style="`background-image: ${lgColorString}`"
              ></div>
            </div>
          </a>
        </div>
        <p>
          An educational web application for exploring an exoplanet detection
          technique called Transit Method. Developed with THREE.js and Vue 3 and
          designed for desktops.
        </p>
      </div>
      <div>
        <div class="flex items-center space-x-2">
          <p class="text-2xl">Marvelmind.js</p>
          <a
            href="https://github.com/hoiast/marvelmind.js"
            class="text-lg text-[#FC0D46]"
          >
            <div class="mb-2 flex items-center">
              <div
                class="i-mdi-github"
                :style="`background-image: ${lgColorString}`"
              ></div>
            </div>
          </a>
        </div>
        <p>
          A javascript library for Marvelmind GPS. Developed for server and
          client side applications.
        </p>
      </div>

      <div>
        <div class="flex items-center space-x-2">
          <p class="text-2xl">pDynamo</p>
          <a href="https://www.pdynamo.org/" class="text-lg text-[#FC0D46]">
            <div class="mb-2 flex items-center">
              <div
                class="i-mdi-web"
                :style="`background-image: ${lgColorString}`"
              ></div>
            </div>
          </a>
        </div>
        <p>
          An open source program library that has been designed for the
          simulation of molecular systems using quantum chemical (QC), molecular
          mechanical (MM) and hybrid QC/MM potential energy functions.
        </p>
      </div>
    </div>
  </section>
</template>
