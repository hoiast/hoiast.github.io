<script setup lang="ts">
import { computed } from "vue";
import SectionTitle from "@/components/SectionTitle.vue";
import GradientText from "./GradientText.vue";
import GradientBulletEntry from "./GradientBulletEntry.vue";
const colorPattern = ["#27548E", "#443DAA"];
const lgColorString = computed(() => {
  return `linear-gradient(${colorPattern.join(",")})`;
});
</script>
<template>
  <section>
    <SectionTitle
      :title="'Education and Skills'"
      :rotationalStates="[6, 2, 2, 0]"
      :colorPattern="colorPattern"
    />
    <div class="px-6 color-base text-lg">
      <div class="flex flex-col space-y-4">
        <div>
          <GradientText class="py-1 text-3xl mb-4" :colorPattern="colorPattern">
            Education
          </GradientText>
          <div class="flex flex-col space-y-2">
            <div>
              <p class="text-2xl">Bachelor of Science Degree in Chemistry</p>
              <p class="text-base">Mar. 2011 - Dez. 2014</p>
              <p class="text-base">University of São Paulo - Brazil</p>
            </div>
            <div>
              <p class="text-2xl">
                PhD Computational Biochemistry and Biophysics
              </p>
              <p class="text-base">Mar. 2015 - Jul. 2020</p>
              <div class="flex space-x-2">
                <p class="text-base">University of São Paulo - Brazil</p>
                <a
                  href="https://www.teses.usp.br/teses/disponiveis/46/46131/tde-23092021-093730/en.php"
                  class="text-lg"
                >
                  <div class="mb-2 flex items-center">
                    <div
                      class="i-mdi-book-open-page-variant-outline"
                      :style="`background-image: ${lgColorString}`"
                    ></div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div>
          <GradientText class="py-1 text-3xl mb-4" :colorPattern="colorPattern">
            Programming
          </GradientText>
          <GradientBulletEntry :colorPattern="colorPattern"
            >Javascript, Typescript, Python and PHP</GradientBulletEntry
          >

          <GradientBulletEntry :colorPattern="colorPattern"
            >Node.js Express and Laravel</GradientBulletEntry
          >
          <GradientBulletEntry :colorPattern="colorPattern"
            >MySQL and MongoDB</GradientBulletEntry
          >
          <GradientBulletEntry :colorPattern="colorPattern"
            >Vue 3</GradientBulletEntry
          >
          <GradientBulletEntry :colorPattern="colorPattern"
            >SCSS and CSS3 with Bootstrap, TailwindCSS and
            UnoCSS</GradientBulletEntry
          >
          <GradientBulletEntry :colorPattern="colorPattern"
            >WebRTC, WebUSB, Websockets and MQTT</GradientBulletEntry
          >
          <GradientBulletEntry :colorPattern="colorPattern"
            >Git with Github and Bitbucket</GradientBulletEntry
          >
          <GradientBulletEntry :colorPattern="colorPattern"
            >Jira and Trello</GradientBulletEntry
          >
        </div>
        <div>
          <GradientText class="py-1 text-3xl mb-4" :colorPattern="colorPattern">
            Languages
          </GradientText>
          <p>Portuguese and English</p>
        </div>
      </div>
    </div>
  </section>
</template>
