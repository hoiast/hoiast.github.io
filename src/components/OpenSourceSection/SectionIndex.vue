<script setup lang="ts">
import SectionTitle from "@/components/partials/SectionTitle.vue";
import GradientTextLink from "@/components/partials/GradientTextLink.vue";
import OpenSourceEntry from "@/components/OpenSourceSection/partials/OpenSourceEntry.vue";
const colorPattern = ["#973894", "#FC0D46"];

</script>
<template>
  <section>
    <SectionTitle
      :title="'Open Source'"
      :rotationalStates="[4, 0, 0, 4]"
      :colorPattern="colorPattern"
    />
    <div class="px-6 color-base text-lg flex flex-col space-y-8">
      <OpenSourceEntry
        :colorPattern="colorPattern"
        title="ExoSim"
        gitHubURL="https://github.com/hoiast/ExoSim"
        gitHubLabel="GitHub repository page for ExoSim"
        linkURL="https://hoiast.github.io/ExoSim"
        linkLabel="ExoSim online demo"
      >
        An educational web application for exploring an exoplanet detection
        technique called Transit Method. Developed with THREE.js and Vue 3 and
        designed for desktops.
      </OpenSourceEntry>
      <OpenSourceEntry
        :colorPattern="colorPattern"
        title="Marvelmind.js"
        gitHubURL="https://github.com/hoiast/marvelmind.js"
        gitHubLabel="GitHub repository page for marvelmind.js"
      >
        A javascript library for Marvelmind GPS. Developed for server and client
        side applications.
      </OpenSourceEntry>
      <OpenSourceEntry
        :colorPattern="colorPattern"
        title="AluraDownloader"
        gitHubURL="https://github.com/hoiast/AluraDownloader"
        gitHubLabel="GitHub repository page for AluraDownloader"
      >
        A PHP library for downloading your favorite video lessons from
        <GradientTextLink
          :colorPattern="colorPattern"
          href="https://www.alura.com.br"
          ariaLabel="Alura website"
          >Alura</GradientTextLink
        >.
      </OpenSourceEntry>
      <OpenSourceEntry
        :colorPattern="colorPattern"
        title="pDynamo"
        linkURL="https://www.pdynamo.org"
        linkLabel="pDynamo library website"
        gitHubURL="https://github.com/pdynamo/pDynamo3"
        gitHubLabel="GitHub repository page for pDynamo"
      >
        An open source program library that has been designed for the simulation
        of molecular systems using quantum chemical (QC), molecular mechanical
        (MM) and hybrid QC/MM potential energy functions.
      </OpenSourceEntry>
    </div>
  </section>
</template>
