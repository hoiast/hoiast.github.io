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
        <div class="flex items-center space-x-4">
          <p class="text-2xl">ExoSim</p>
          <a
            href="https://hoiast.github.io/ExoSim/"
            class="text-lg text-[#FC0D46]"
            aria-label="ExoSim online demo on GitHub Pages"
          >
            <div class="mb-2 flex items-center text-2xl">
              <div
                class="i-carbon-launch"
                :style="`background-image: ${lgColorString}`"
              ></div>
            </div>
          </a>
          <a
            href="https://github.com/hoiast/ExoSim"
            class="text-lg text-[#FC0D46]"
            aria-label="GitHub repository page for ExoSim"
          >
            <div class="mb-2 flex items-center text-2xl">
              <div
                class="i-carbon-logo-github"
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
        <div class="flex items-center space-x-4">
          <p class="text-2xl">Marvelmind.js</p>
          <a
            href="https://github.com/hoiast/marvelmind.js"
            class="text-lg text-[#FC0D46]"
            aria-label="GitHub repository page for marvelmind.js"
          >
            <div class="mb-2 flex items-center text-2xl">
              <div
                class="i-carbon-logo-github"
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
        <div class="flex items-center space-x-4">
          <p class="text-2xl">AluraDownloader</p>
          <a
            href="https://github.com/hoiast/AluraDownloader"
            class="text-lg text-[#FC0D46]"
            aria-label="GitHub repository page for AluraDownloader"
          >
            <div class="mb-2 flex items-center text-2xl">
              <div
                class="i-carbon-logo-github"
                :style="`background-image: ${lgColorString}`"
              ></div>
            </div>
          </a>
        </div>
        <p>
          A PHP library for downloading your favorite video lessons from
          <a
            href="https://www.alura.com.br/"
            class="px-1 rounded-lg cursor-pointer text-white"
            :style="`background-image: ${lgColorString}`"
            aria-label="pDynamo library website"
            >Alura</a
          >.
        </p>
      </div>

      <div>
        <div class="flex items-center space-x-4">
          <p class="text-2xl">pDynamo</p>
          <a
            href="https://www.pdynamo.org/"
            class="text-lg text-[#FC0D46]"
            aria-label="pDynamo library website"
          >
            <div class="mb-2 flex items-center text-2xl">
              <div
                class="i-carbon-launch"
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
