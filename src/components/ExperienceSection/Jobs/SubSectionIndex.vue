<script setup lang="ts">
import { computed } from "vue";
import SubSectionTitle from "@/components/partials/SubSectionTitle.vue";
import JobEntry from "@/components/ExperienceSection/Jobs/partials/JobEntry.vue";
const props = defineProps({
  colorPattern: {
    type: Array<string>,
    default: ["#65B947", "#1232A5", "#7547AE", "#FC0D46"],
  },
});
const lgColorString = computed(() => {
  return `linear-gradient(${props.colorPattern.join(",")})`;
});
</script>

<template>
  <div>
    <SubSectionTitle :colorPattern="colorPattern" title="Jobs"/>
    <div class="flex flex-col space-y-8">
      <JobEntry
        :colorPattern="colorPattern"
        role="BackEnd Engineer"
        companyName="Gabriel Tecnologia"
        institutionalURL="https://www.gabriel.com.br"
        institutionalURLLabel="Gabriel's organization website"
        location="São Paulo - Brazil"
        period="Jan. 2023 - Present"
      >
        I am responsible for architecture, modelling and implementation of
        microservices. I also improve automation of internal processes by
        securely integrating Low and No Code platforms with a microservices
        system.
      </JobEntry>
      <JobEntry
        :colorPattern="colorPattern"
        role="FullStack Engineer"
        companyName="LUCA - Ciência para Educar"
        institutionalURL="https://www.linkedin.com/company/luca-ci%C3%AAnciaparaeducar"
        institutionalURLLabel="LUCA organization website"
        location="São Paulo - Brazil"
        period="Oct. 2020 - Jul. 2022"
      >
        At LUCA, I worked as the main developer of
        <a
          href="https://agencia.fapesp.br/ferramenta-educacional-permite-controlar-rover-em-cenarios-que-simulam-marte/35205"
          class="px-1 rounded-lg cursor-pointer text-white"
          :style="`background-image: ${lgColorString}`"
          aria-label="Rovers&Beyond product website"
          >Rovers & Beyond</a
        >, a gamified experience for space missions on Mars. It includes ludic
        quizzes, training simulators and remote driving sessions of robotic
        rovers.
      </JobEntry>
      <JobEntry
        :colorPattern="colorPattern"
        role="Visitor Researcher"
        companyName="Institut Laue-Langevin - Theory Group"
        institutionalURL="https://www.ill.eu/users/scientific-groups/theory"
        institutionalURLLabel="Theory Group page at https://www.ill.eu"
        location="Grenoble - France"
        period="Oct. 2018 - Sept. 2019"
      >
        I worked on the
        <a
          href="https://www.pdynamo.org"
          class="px-1 rounded-lg cursor-pointer text-white"
          :style="`background-image: ${lgColorString}`"
          aria-label="pDynamo library website"
          >pDynamo</a
        >
        library, migrating its codebase to Python 3 and implementing new
        features.
      </JobEntry>
    </div>
  </div>
</template>
